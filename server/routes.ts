import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertJobApplicationSchema } from "@shared/schema";
import { generateChatResponse, type ChatMessage } from "./openai";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Webhook endpoint: Get all active jobs for external career sites
  app.get("/api/webhooks/jobs", async (req, res) => {
    try {
      const activeJobs = await storage.getActiveJobs();
      
      const formattedJobs = activeJobs.map(job => ({
        id: job.id,
        title: job.title,
        department: job.department.toLowerCase(),
        location: job.location,
        type: job.type,
        salary: job.salary,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits || [],
        status: "active",
        createdAt: job.postedDate.toISOString(),
        applyUrl: `https://ats.regionalchildcare.com/jobs/${job.id}/apply`,
        directUrl: `https://ats.regionalchildcare.com/jobs/${job.id}`
      }));

      res.json({
        timestamp: new Date().toISOString(),
        event: "jobs.list",
        data: formattedJobs
      });
    } catch (error) {
      console.error("Webhook jobs error:", error);
      res.status(500).json({ error: "Failed to fetch jobs" });
    }
  });

  // Webhook endpoint: Get single job by ID
  app.get("/api/webhooks/jobs/:id", async (req, res) => {
    try {
      const jobId = parseInt(req.params.id);
      const job = await storage.getJob(jobId);
      
      if (!job || !job.isActive) {
        return res.status(404).json({ error: "Job not found" });
      }

      const formattedJob = {
        id: job.id,
        title: job.title,
        department: job.department.toLowerCase(),
        location: job.location,
        type: job.type,
        salary: job.salary,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits || [],
        status: "active",
        createdAt: job.postedDate.toISOString(),
        applyUrl: `https://ats.regionalchildcare.com/jobs/${job.id}/apply`,
        directUrl: `https://ats.regionalchildcare.com/jobs/${job.id}`
      };

      res.json({
        timestamp: new Date().toISOString(),
        event: "job.get",
        data: formattedJob
      });
    } catch (error) {
      console.error("Webhook single job error:", error);
      res.status(500).json({ error: "Failed to fetch job" });
    }
  });

  // Webhook endpoint: Get jobs updated since timestamp
  app.get("/api/webhooks/jobs/updated-since/:timestamp", async (req, res) => {
    try {
      const timestamp = new Date(req.params.timestamp);
      
      if (isNaN(timestamp.getTime())) {
        return res.status(400).json({ error: "Invalid timestamp format" });
      }

      const updatedJobs = await storage.getJobsUpdatedSince(timestamp);
      
      const formattedJobs = updatedJobs
        .filter(job => job.isActive)
        .map(job => ({
          id: job.id,
          title: job.title,
          department: job.department.toLowerCase(),
          location: job.location,
          type: job.type,
          salary: job.salary,
          description: job.description,
          requirements: job.requirements,
          benefits: job.benefits || [],
          status: "active",
          createdAt: job.postedDate.toISOString(),
          applyUrl: `https://ats.regionalchildcare.com/jobs/${job.id}/apply`,
          directUrl: `https://ats.regionalchildcare.com/jobs/${job.id}`
        }));

      res.json({
        timestamp: new Date().toISOString(),
        event: "jobs.updated",
        since: req.params.timestamp,
        data: formattedJobs
      });
    } catch (error) {
      console.error("Webhook updated jobs error:", error);
      res.status(500).json({ error: "Failed to fetch updated jobs" });
    }
  });

  // Get all jobs from ATS with fallback to local storage
  app.get("/api/jobs", async (req, res) => {
    try {
      // Try ATS API first
      try {
        const atsResponse = await fetch("https://ats.regionalchildcare.com/api/external/jobs");
        
        if (atsResponse.ok) {
          const atsData = await atsResponse.json();
          
          if (atsData.success && atsData.jobs) {
            console.log("✅ Successfully fetched jobs from ATS API");
            
            // Transform ATS jobs to match our frontend expectations
            const transformedJobs = atsData.jobs.map((job: any) => ({
              id: job.id,
              title: job.title,
              location: job.location || "Regional Queensland",
              type: job.type || "Full-time",
              department: job.department || "Early Childhood Education",
              salary: job.salary || "Competitive package",
              overview: job.overview || job.description?.substring(0, 150) + "..." || "Join our team in providing quality early childhood education.",
              description: job.description || "We are looking for passionate educators to join our team.",
              requirements: job.requirements || ["Certificate III in Early Childhood Education & Care", "Passion for working with children"],
              responsibilities: job.responsibilities || ["Provide quality care and education", "Support child development"],
              postedDate: job.postedDate || new Date().toISOString(),
              slug: job.slug,
              applyUrl: job.applyUrl,
              detailUrl: job.detailUrl
            }));
            
            // Apply filters if provided
            const { location, department, type } = req.query;
            let filteredJobs = transformedJobs;
            
            if (location && typeof location === 'string') {
              filteredJobs = filteredJobs.filter((job: any) => 
                job.location.toLowerCase().includes(location.toLowerCase())
              );
            }
            
            if (department && typeof department === 'string') {
              filteredJobs = filteredJobs.filter((job: any) => 
                job.department.toLowerCase().includes(department.toLowerCase())
              );
            }
            
            if (type && typeof type === 'string') {
              filteredJobs = filteredJobs.filter((job: any) => 
                job.type.toLowerCase().includes(type.toLowerCase())
              );
            }
            
            return res.json(filteredJobs);
          }
        }
      } catch (atsError) {
        console.warn("ATS API unavailable, falling back to local data:", (atsError as Error).message);
      }
      
      // Fallback to local storage
      console.log("📦 Using local job data as fallback");
      const { location, department, type } = req.query;
      
      let jobs;
      if (location && typeof location === 'string') {
        jobs = await storage.getJobsByLocation(location);
      } else if (department && typeof department === 'string') {
        jobs = await storage.getJobsByDepartment(department);
      } else if (type && typeof type === 'string') {
        jobs = await storage.getJobsByType(type);
      } else {
        jobs = await storage.getJobs();
      }
      
      res.json(jobs);
      
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });

  // Get specific job from ATS with fallback to local storage
  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Try ATS API first
      try {
        const atsResponse = await fetch("https://ats.regionalchildcare.com/api/external/jobs");
        
        if (atsResponse.ok) {
          const atsData = await atsResponse.json();
          
          if (atsData.success && atsData.jobs) {
            const atsJob = atsData.jobs.find((job: any) => job.id === id);
            
            if (atsJob) {
              console.log("✅ Successfully fetched job from ATS API");
              
              const transformedJob = {
                id: atsJob.id,
                title: atsJob.title,
                location: atsJob.location || "Regional Queensland",
                type: atsJob.type || "Full-time",
                department: atsJob.department || "Early Childhood Education",
                salary: atsJob.salary || "Competitive package",
                overview: atsJob.overview || atsJob.description?.substring(0, 150) + "..." || "Join our team in providing quality early childhood education.",
                description: atsJob.description || "We are looking for passionate educators to join our team.",
                requirements: atsJob.requirements || ["Certificate III in Early Childhood Education & Care", "Passion for working with children"],
                responsibilities: atsJob.responsibilities || ["Provide quality care and education", "Support child development"],
                postedDate: atsJob.postedDate || new Date().toISOString(),
                slug: atsJob.slug,
                applyUrl: atsJob.applyUrl,
                detailUrl: atsJob.detailUrl
              };
              
              return res.json(transformedJob);
            }
          }
        }
      } catch (atsError) {
        console.warn("ATS API unavailable for job lookup, falling back to local data:", (atsError as Error).message);
      }
      
      // Fallback to local storage
      console.log("📦 Using local job data as fallback");
      const job = await storage.getJob(id);
      
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      
      res.json(job);
    } catch (error) {
      console.error("Failed to fetch job:", error);
      res.status(500).json({ message: "Failed to fetch job" });
    }
  });

  // Submit job application to ATS with fallback to local storage
  app.post("/api/applications", async (req, res) => {
    try {
      // Try ATS API first
      try {
        const applicationData = {
          jobId: req.body.jobId,
          candidateName: req.body.fullName,
          candidateEmail: req.body.email,
          phone: req.body.phone,
          resumeText: req.body.resumeUrl || req.body.resume,
          coverLetter: req.body.coverLetter
        };

        const atsResponse = await fetch("https://ats.regionalchildcare.com/api/applications", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationData)
        });

        if (atsResponse.ok) {
          const atsResult = await atsResponse.json();
          console.log("✅ Successfully submitted application to ATS");
          
          // Also store locally for tracking
          try {
            const validatedData = insertJobApplicationSchema.parse(req.body);
            await storage.createJobApplication(validatedData);
          } catch (localError) {
            console.warn("Failed to store application locally:", (localError as Error).message);
          }
          
          return res.status(201).json({ 
            message: "Application submitted successfully to ATS",
            atsResponse: atsResult,
            success: true
          });
        }
      } catch (atsError) {
        console.warn("ATS API unavailable for application submission, using local storage:", (atsError as Error).message);
      }
      
      // Fallback to local storage only
      console.log("📦 Storing application locally as fallback");
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const application = await storage.createJobApplication(validatedData);
      
      res.status(201).json({ 
        message: "Application submitted successfully (stored locally)",
        applicationId: application.id,
        success: true
      });
      
    } catch (error) {
      console.error("Failed to submit application:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid application data",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: "Failed to submit application",
        error: (error as Error).message 
      });
    }
  });

  // Get all applications (for admin purposes)
  app.get("/api/applications", async (req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  // Chat with AI assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, context } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ message: "Messages array is required" });
      }

      const response = await generateChatResponse(messages, context);
      res.json({ response });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ message: "Failed to generate chat response" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

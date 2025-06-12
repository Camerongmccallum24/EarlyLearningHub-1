import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertJobApplicationSchema } from "@shared/schema";
import { generateChatResponse, type ChatMessage } from "./openai";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all jobs from ATS with fallback to local storage
  app.get("/api/jobs", async (req, res) => {
    try {
      // Try ATS API first
      try {
        const atsResponse = await fetch("https://ats.regionalchildcare.com/api/external/jobs", {
          timeout: 5000
        });
        
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
        console.warn("ATS API unavailable, falling back to local data:", atsError.message);
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
        const atsResponse = await fetch("https://ats.regionalchildcare.com/api/external/jobs", {
          timeout: 5000
        });
        
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

  // Submit job application to ATS
  app.post("/api/applications", async (req, res) => {
    try {
      // Validate the incoming data structure
      const applicationData = {
        jobId: req.body.jobId,
        candidateName: req.body.fullName,
        candidateEmail: req.body.email,
        phone: req.body.phone,
        resumeText: req.body.resumeUrl || req.body.resume,
        coverLetter: req.body.coverLetter
      };

      // Submit to ATS API
      const atsResponse = await fetch("https://ats.regionalchildcare.com/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData)
      });

      if (!atsResponse.ok) {
        const errorData = await atsResponse.json().catch(() => ({}));
        throw new Error(`ATS API returned ${atsResponse.status}: ${errorData.message || 'Unknown error'}`);
      }

      const atsResult = await atsResponse.json();
      
      // Also store locally for tracking (optional)
      try {
        const validatedData = insertJobApplicationSchema.parse(req.body);
        await storage.createJobApplication(validatedData);
      } catch (localError) {
        console.warn("Failed to store application locally:", localError);
        // Don't fail the request if local storage fails
      }
      
      res.status(201).json({ 
        message: "Application submitted successfully to ATS",
        atsResponse: atsResult,
        success: true
      });
    } catch (error) {
      console.error("Failed to submit application to ATS:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid application data",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: "Failed to submit application to ATS",
        error: error.message 
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

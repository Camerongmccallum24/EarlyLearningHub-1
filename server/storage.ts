import { users, jobApplications, jobs, type User, type InsertUser, type JobApplication, type InsertJobApplication, type Job, type InsertJob } from "@shared/schema";
import { db } from "./db";
import { eq, gte } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Job applications
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
  getJobApplication(id: number): Promise<JobApplication | undefined>;
  
  // Jobs
  getJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  getJobsByLocation(location: string): Promise<Job[]>;
  getJobsByDepartment(department: string): Promise<Job[]>;
  getJobsByType(type: string): Promise<Job[]>;
  
  // Webhook endpoints
  getActiveJobs(): Promise<Job[]>;
  getJobsUpdatedSince(timestamp: Date): Promise<Job[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private jobApplications: Map<number, JobApplication>;
  private jobs: Map<number, Job>;
  private currentUserId: number;
  private currentApplicationId: number;
  private currentJobId: number;

  constructor() {
    this.users = new Map();
    this.jobApplications = new Map();
    this.jobs = new Map();
    this.currentUserId = 1;
    this.currentApplicationId = 1;
    this.currentJobId = 1;
    
    // Initialize with sample jobs
    this.initializeJobs();
  }

  private initializeJobs() {
    const sampleJobs: InsertJob[] = [
      {
        title: "Early Education Assistant",
        location: "Mount Isa",
        type: "Part-Time",
        department: "Teaching",
        salary: "$25-$28/hr",
        overview: "Support educators in delivering play-based learning activities for infants and toddlers.",
        description: "Join our Mount Isa centre as an Early Education Assistant and support lead educators in creating engaging learning experiences for young children. You'll work directly with infants and toddlers, helping to implement our play-based curriculum while maintaining a safe and nurturing environment.",
        requirements: ["Certificate III Required", "Working with Children Check", "Professional Development"],
        responsibilities: [
          "Assist in the preparation and implementation of daily educational programs",
          "Support children's learning and development in a safe environment",
          "Help maintain clean, organized classroom settings",
          "Build positive relationships with children, families, and colleagues"
        ],
        status: "active"
      },
      {
        title: "Lead Educator",
        location: "Moranbah",
        type: "Full-Time",
        department: "Teaching",
        salary: "$32-$36/hr",
        overview: "Lead the preschool room team, planning curriculum aligned with QLD guidelines.",
        description: "Take ownership of our preschool program in Moranbah as a Lead Educator. You'll design and implement educational programs while mentoring junior staff and building strong relationships with families.",
        requirements: ["Diploma Required", "Leadership Experience", "Relocation Assistance"],
        responsibilities: [
          "Design, implement, and evaluate age-appropriate educational programs",
          "Lead and supervise a group of children",
          "Mentor and guide Assistant Educators",
          "Maintain communication with families about child progress"
        ],
        status: "active"
      },
      {
        title: "Centre Director",
        location: "Charters Towers",
        type: "Full-Time",
        department: "Management",
        salary: "$75K-$85K",
        overview: "Oversee all aspects of centre operations, from staff management to regulatory compliance.",
        description: "Lead our Charters Towers centre as Centre Director, responsible for overall management, strategic direction, and ensuring the highest quality early learning outcomes.",
        requirements: ["Bachelor's Degree", "3+ Years Leadership", "Performance Bonuses"],
        responsibilities: [
          "Manage all aspects of centre operations",
          "Lead, motivate, and develop high-performing teams",
          "Ensure regulatory compliance and quality standards",
          "Foster relationships with families and community"
        ],
        status: "active"
      },
      {
        title: "Kitchen Assistant",
        location: "Mount Isa",
        type: "Part-Time",
        department: "Support",
        salary: "$22-$25/hr",
        overview: "Support meal preparation and maintain kitchen hygiene standards for our centre.",
        description: "Join our support team as a Kitchen Assistant, ensuring nutritious meals are prepared safely and efficiently for our children and staff.",
        requirements: ["Food Safety Certificate", "Flexible Schedule", "Staff Meals Provided"],
        responsibilities: [
          "Support meal preparation and cooking",
          "Maintain kitchen hygiene and safety standards",
          "Assist with menu planning and inventory",
          "Follow dietary requirements and restrictions"
        ],
        status: "active"
      }
    ];

    sampleJobs.forEach(job => {
      this.createJob(job);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = this.currentApplicationId++;
    const application: JobApplication = { 
      ...insertApplication,
      location: insertApplication.location || null,
      resumeUrl: insertApplication.resumeUrl || null,
      coverLetter: insertApplication.coverLetter || null,
      id,
      createdAt: new Date()
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values());
  }

  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    return this.jobApplications.get(id);
  }

  async getJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => job.status === 'active');
  }

  async getJob(id: number): Promise<Job | undefined> {
    const job = this.jobs.get(id);
    return job?.status === 'active' ? job : undefined;
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.currentJobId++;
    const job: Job = { 
      ...insertJob,
      id,
      jobId: insertJob.jobId || null,
      slug: insertJob.slug || null,
      overview: insertJob.overview || null,
      responsibilities: insertJob.responsibilities || [],
      benefits: insertJob.benefits || [],
      status: insertJob.status || "active",
      createdAt: new Date(),
      postedAt: insertJob.postedAt || new Date()
    };
    this.jobs.set(id, job);
    return job;
  }

  async getJobsByLocation(location: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.status === 'active' && job.location.toLowerCase() === location.toLowerCase()
    );
  }

  async getJobsByDepartment(department: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.status === 'active' && job.department.toLowerCase() === department.toLowerCase()
    );
  }

  async getJobsByType(type: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.status === 'active' && job.type.toLowerCase() === type.toLowerCase()
    );
  }

  async getActiveJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => job.status === 'active');
  }

  async getJobsUpdatedSince(timestamp: Date): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.status === 'active' && job.createdAt > timestamp
    );
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const [application] = await db
      .insert(jobApplications)
      .values(insertApplication)
      .returning();
    return application;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return await db.select().from(jobApplications);
  }

  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    const [application] = await db.select().from(jobApplications).where(eq(jobApplications.id, id));
    return application || undefined;
  }

  async getJobs(): Promise<Job[]> {
    return await db.select().from(jobs);
  }

  async getJob(id: number): Promise<Job | undefined> {
    const [job] = await db.select().from(jobs).where(eq(jobs.id, id));
    return job || undefined;
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const [job] = await db
      .insert(jobs)
      .values(insertJob)
      .returning();
    return job;
  }

  async getJobsByLocation(location: string): Promise<Job[]> {
    return await db.select().from(jobs).where(eq(jobs.location, location));
  }

  async getJobsByDepartment(department: string): Promise<Job[]> {
    return await db.select().from(jobs).where(eq(jobs.department, department));
  }

  async getJobsByType(type: string): Promise<Job[]> {
    return await db.select().from(jobs).where(eq(jobs.type, type));
  }

  async getActiveJobs(): Promise<Job[]> {
    return await db.select().from(jobs).where(eq(jobs.status, "active"));
  }

  async getJobsUpdatedSince(timestamp: Date): Promise<Job[]> {
    return await db.select().from(jobs).where(gte(jobs.createdAt, timestamp));
  }
}

export const storage = new DatabaseStorage();

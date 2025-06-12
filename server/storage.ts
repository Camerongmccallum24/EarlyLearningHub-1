import { users, jobApplications, jobs, type User, type InsertUser, type JobApplication, type InsertJobApplication, type Job, type InsertJob } from "@shared/schema";

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
        isActive: true
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
        isActive: true
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
        isActive: true
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
        isActive: true
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
    return Array.from(this.jobs.values()).filter(job => job.isActive);
  }

  async getJob(id: number): Promise<Job | undefined> {
    const job = this.jobs.get(id);
    return job?.isActive ? job : undefined;
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.currentJobId++;
    const job: Job = { 
      ...insertJob,
      isActive: insertJob.isActive ?? true,
      id,
      postedDate: new Date()
    };
    this.jobs.set(id, job);
    return job;
  }

  async getJobsByLocation(location: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.isActive && job.location.toLowerCase() === location.toLowerCase()
    );
  }

  async getJobsByDepartment(department: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.isActive && job.department.toLowerCase() === department.toLowerCase()
    );
  }

  async getJobsByType(type: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter(job => 
      job.isActive && job.type.toLowerCase() === type.toLowerCase()
    );
  }
}

export const storage = new MemStorage();

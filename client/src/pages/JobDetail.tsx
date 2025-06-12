import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ApplicationModal from "@/components/ApplicationModal";
import type { Job } from "@shared/schema";

export default function JobDetail() {
  const { id } = useParams();
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const { data: job, isLoading, error } = useQuery<Job>({
    queryKey: [`/api/jobs/${id}`],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-8 w-1/2"></div>
            <div className="h-32 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-gray-400 text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
            <p className="text-gray-600 mb-6">
              The position you're looking for doesn't exist or may have been filled.
            </p>
            <Button asChild>
              <Link href="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const formatPostedDate = (date: Date | string) => {
    const now = new Date();
    const postedDate = typeof date === 'string' ? new Date(date) : date;
    
    // Check if the date is valid
    if (isNaN(postedDate.getTime())) {
      return "Recently posted";
    }
    
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    return `${Math.floor(diffDays / 7)} weeks ago`;
  };

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'teaching': return 'bg-primary/10 text-primary';
      case 'management': return 'bg-secondary/10 text-secondary';
      case 'support': return 'bg-accent/10 text-accent';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><i className="fas fa-chevron-right text-xs"></i></li>
              <li><Link href="/jobs" className="hover:text-primary">Jobs</Link></li>
              <li><i className="fas fa-chevron-right text-xs"></i></li>
              <li className="text-primary">{job.title}</li>
            </ol>
          </nav>

          {/* Job Header */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-primary mb-4">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-map-marker-alt text-secondary mr-2"></i>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-clock text-accent mr-2"></i>
                    <span>{job.type}</span>
                  </div>
                  <Badge className={getDepartmentColor(job.department)}>
                    {job.department}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Posted {formatPostedDate(job.postedDate)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-accent mr-2">{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:w-auto w-full">
                <Button 
                  onClick={() => setIsApplicationModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  <i className="fas fa-bookmark mr-2"></i>
                  Save Job
                </Button>
              </div>
            </div>
          </div>

          {/* Job Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Position Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{job.overview}</p>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Role Description</h2>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Requirements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Requirements & Benefits</h3>
                <div className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Location Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-secondary mr-3"></i>
                    <div>
                      <div className="font-medium">{job.location}</div>
                      <div className="text-sm text-gray-600">Queensland, Australia</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    Learn more about living in {job.location} and the benefits of regional life.
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Questions?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-envelope mr-3 text-primary"></i>
                    <span>careers@regionalchildcare.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone mr-3 text-primary"></i>
                    <span>1800 123 456</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        <ApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={() => setIsApplicationModalOpen(false)}
          jobTitle={job.title}
          jobLocation={job.location}
        />
      </div>
    </div>
  );
}

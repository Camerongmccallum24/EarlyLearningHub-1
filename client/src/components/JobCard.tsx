import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LocationInfo from "@/components/LocationInfo";
import type { Job } from "@shared/schema";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
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
      case 'teaching': return 'text-sky-blue';
      case 'management': return 'text-warm-orange';
      case 'support': return 'text-soft-green';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-playful shadow-card hover:shadow-soft transition-all p-4 sm:p-6 lg:p-8 border border-light-gray/30 hover-lift animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-3 sm:space-y-0">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gro-dark-blue mb-2 hover:text-gro-teal transition-colors duration-300 leading-tight">{job.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-gray-600">
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200">
              <i className="fas fa-map-marker-alt text-gro-blue-green mr-2 hover-scale"></i>
              <span>{job.location}</span>
            </span>
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200">
              <i className="fas fa-clock text-gro-lime mr-2 hover-scale"></i>
              <span>{job.type}</span>
            </span>
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200">
              <i className={`fas fa-tag mr-2 hover-scale ${getDepartmentColor(job.department)}`}></i>
              <span>{job.department}</span>
            </span>
          </div>
        </div>
        <Badge variant="secondary" className="hover:bg-gro-lime/20 rounded-playful animate-pulse-subtle hover-scale self-start sm:self-auto text-[#374151] bg-[#60A5FA]">
          {job.salary}
        </Badge>
      </div>
      
      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{job.overview}</p>
      
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {job.requirements.slice(0, 3).map((req, index) => (
          <Badge key={index} variant="outline" className="text-xs hover-scale transition-transform duration-200 hover:bg-gro-blue-green/20 hover:border-gro-blue-green">
            {req}
          </Badge>
        ))}
        {job.requirements.length > 3 && (
          <Badge variant="outline" className="text-xs text-gray-500">
            +{job.requirements.length - 3} more
          </Badge>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-500 hover:text-gro-dark-blue transition-colors duration-200">
            Posted {formatPostedDate(job.postedDate)}
          </span>
          <div className="hidden sm:block">
            <LocationInfo locationName={job.location} />
          </div>
        </div>
        <Button asChild className="button-press hover-scale transition-all duration-200 bg-gro-coral hover:bg-gro-coral/90 text-white w-full sm:w-auto">
          <Link href={`/jobs/${job.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}

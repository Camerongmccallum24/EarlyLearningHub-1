import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LocationInfo from "@/components/LocationInfo";
import type { Job } from "@shared/schema";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const formatPostedDate = (date: Date | string | undefined) => {
    if (!date) {
      return "Recently posted";
    }
    
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
    <div className="bg-white rounded-playful shadow-card hover:shadow-soft transition-all p-4 sm:p-6 border border-light-gray/30 hover-lift animate-fade-in-up touch-card w-full max-w-full">
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gro-dark-blue mb-3 hover:text-gro-teal transition-colors duration-300 leading-tight line-clamp-2">{job.title}</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 text-sm text-gray-600">
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 min-h-[24px]">
              <i className="fas fa-map-marker-alt text-gro-blue-green mr-2 hover-scale"></i>
              <span>{job.location}</span>
            </span>
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 min-h-[24px]">
              <i className="fas fa-clock text-gro-lime mr-2 hover-scale"></i>
              <span>{job.type}</span>
            </span>
            <span className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 min-h-[24px]">
              <i className={`fas fa-tag mr-2 hover-scale ${getDepartmentColor(job.department)}`}></i>
              <span>{job.department}</span>
            </span>
          </div>
        </div>
        <Badge className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent rounded-playful self-start bg-[#cfd86fe6] text-[#374151]">
          {job.salary}
        </Badge>
      </div>
      
      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">{job.overview}</p>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {job.requirements.slice(0, 3).map((req, index) => (
          <Badge key={index} variant="outline" className="text-xs hover-scale transition-transform duration-200 hover:bg-gro-blue-green/20 hover:border-gro-blue-green max-w-[140px] sm:max-w-[180px] truncate flex-shrink-0" title={req}>
            {req.length > 20 ? `${req.substring(0, 20)}...` : req}
          </Badge>
        ))}
        {job.requirements.length > 3 && (
          <Badge variant="outline" className="text-xs text-gray-500">
            +{job.requirements.length - 3} more
          </Badge>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end space-y-3 sm:space-y-0 gap-3">
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <span className="text-xs sm:text-sm text-gray-500 hover:text-gro-dark-blue transition-colors duration-200 truncate">
            Posted {formatPostedDate(job.postedDate)}
          </span>
          <div className="hidden sm:block">
            <LocationInfo locationName={job.location} />
          </div>
        </div>
        <Button asChild className="touch-button bg-gro-coral hover:bg-gro-coral/90 text-white w-full sm:w-auto sm:min-w-[120px] flex-shrink-0">
          <Link href={`/jobs/${job.id}`} className="flex items-center justify-center">
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}

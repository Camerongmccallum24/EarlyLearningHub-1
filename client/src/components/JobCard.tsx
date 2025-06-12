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
    <div className="bg-white rounded-playful shadow-card hover:shadow-soft transition-all p-8 border border-orange-50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-sky-blue mb-2">{job.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <i className="fas fa-map-marker-alt text-warm-orange mr-1"></i>
              <span>{job.location}</span>
            </span>
            <span className="flex items-center">
              <i className="fas fa-clock text-soft-green mr-1"></i>
              <span>{job.type}</span>
            </span>
            <span className="flex items-center">
              <i className={`fas fa-tag mr-1 ${getDepartmentColor(job.department)}`}></i>
              <span>{job.department}</span>
            </span>
          </div>
        </div>
        <Badge variant="secondary" className="bg-soft-green/10 text-soft-green hover:bg-soft-green/20 rounded-playful">
          {job.salary}
        </Badge>
      </div>
      
      <p className="text-gray-600 mb-6">{job.overview}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {job.requirements.map((req, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {req}
          </Badge>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Posted {formatPostedDate(job.postedDate)}
          </span>
          <LocationInfo locationName={job.location} />
        </div>
        <Button asChild>
          <Link href={`/jobs/${job.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}

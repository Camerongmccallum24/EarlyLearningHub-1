
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobList from "@/components/JobList";
import JobFilters, { JobFilters as JobFiltersType } from "@/components/JobFilters";
import { useJobsQuery } from "@/hooks/useJobsQuery";

const JobsPage = () => {
  const [filters, setFilters] = useState<JobFiltersType>({
    location: "All",
    departments: [],
    employmentTypes: [],
    keyword: ""
  });

  // Convert filters for API
  const apiFilters = {
    location: filters.location !== "All" ? filters.location : undefined,
    department: filters.departments.length > 0 ? filters.departments[0] : undefined,
    type: filters.employmentTypes.length > 0 ? filters.employmentTypes[0] : undefined,
  };

  const { data: jobs = [], isLoading, error } = useJobsQuery(apiFilters);

  // Client-side filtering for keyword search (since API might not support it)
  const filteredJobs = jobs.filter(job => {
    const matchesKeyword = filters.keyword === "" || 
      job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.department.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.overview.toLowerCase().includes(filters.keyword.toLowerCase());
    
    return matchesKeyword;
  });

  // Get unique values for filters from API data
  const locations = Array.from(new Set(jobs.map(job => job.location)));
  const departments = Array.from(new Set(jobs.map(job => job.department)));

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gro-darkblue mb-4">Service Unavailable</h1>
              <p className="text-gray-600 mb-4">
                We're currently unable to load job listings. Our team is working to resolve this issue.
              </p>
              <p className="text-gray-500 text-sm">
                Please try refreshing the page or check back later.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-gro-teal/20 to-gro-green/20 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gro-darkblue">Open Positions</h1>
            <p className="text-gro-gray max-w-2xl mx-auto">
              Explore our current opportunities and find the perfect role that matches your skills, 
              passion, and career goals in early childhood education.
            </p>
          </div>
        </div>

        {/* Filters */}
        <JobFilters
          locations={locations}
          departments={departments}
          filters={filters}
          onChange={setFilters}
        />

        {/* Job Listings */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-gro-gray">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <JobList jobs={filteredJobs} isLoading={isLoading} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Map, List } from "lucide-react";
import JobCard from "@/components/JobCard";
import JobMap from "@/components/JobMap";
import ApplicationModal from "@/components/ApplicationModal";
import type { Job } from "@shared/schema";

export default function Jobs() {
  const [locationFilter, setLocationFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const { data: jobs = [], isLoading } = useQuery<Job[]>({
    queryKey: ["/api/jobs", locationFilter, departmentFilter, typeFilter].filter(Boolean),
  });

  const filteredJobs = jobs.filter((job) => {
    if (locationFilter && locationFilter !== "all" && job.location !== locationFilter) return false;
    if (departmentFilter && departmentFilter !== "all" && job.department !== departmentFilter) return false;
    if (typeFilter && typeFilter !== "all" && job.type !== typeFilter) return false;
    return true;
  });

  const clearFilters = () => {
    setLocationFilter("all");
    setDepartmentFilter("all");
    setTypeFilter("all");
  };

  const hasActiveFilters = (locationFilter && locationFilter !== "all") || 
                          (departmentFilter && departmentFilter !== "all") || 
                          (typeFilter && typeFilter !== "all");

  return (
    <div className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gro-blue-green mb-4">Current Opportunities</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover meaningful career opportunities in early childhood education across our regional locations.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white p-1 rounded-lg shadow-sm border">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center space-x-2 text-xs sm:text-sm"
            >
              <List className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">List View</span>
              <span className="sm:hidden">List</span>
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("map")}
              className="flex items-center space-x-2 text-xs sm:text-sm"
            >
              <Map className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Map View</span>
              <span className="sm:hidden">Map</span>
            </Button>
          </div>
        </div>

        {/* Map View */}
        {viewMode === "map" && (
          <JobMap 
            onLocationSelect={(location) => {
              setLocationFilter(location);
              setViewMode("list");
            }}
            selectedLocation={locationFilter !== "all" ? locationFilter : undefined}
          />
        )}

        {/* List View */}
        {viewMode === "list" && (
          <>
            {/* Filters */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-8 sm:mb-12">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Mount Isa">Mount Isa</SelectItem>
                      <SelectItem value="Moranbah">Moranbah</SelectItem>
                      <SelectItem value="Charters Towers">Charters Towers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="Teaching">Teaching</SelectItem>
                      <SelectItem value="Management">Management</SelectItem>
                      <SelectItem value="Support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Full-Time">Full-Time</SelectItem>
                      <SelectItem value="Part-Time">Part-Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-end space-x-2">
                  <Button 
                    onClick={clearFilters}
                    variant="outline"
                    className="flex-1"
                    disabled={!hasActiveFilters}
                  >
                    Clear Filters
                  </Button>
                  <Button 
                    onClick={() => setIsApplicationModalOpen(true)}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {jobs.length} positions
                {hasActiveFilters && (
                  <span className="ml-2 text-primary">
                    (filtered)
                  </span>
                )}
              </p>
            </div>

            {/* Job Listings */}
            {isLoading ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm p-8 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-6"></div>
                    <div className="h-20 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-gray-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600 mb-4">
                  {hasActiveFilters 
                    ? "Try adjusting your filters to see more opportunities."
                    : "We don't have any open positions at the moment."}
                </p>
                {hasActiveFilters && (
                  <Button onClick={clearFilters} variant="outline">
                    Clear all filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
    </div>
  );
}
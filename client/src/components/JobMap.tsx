import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Job } from "@shared/schema";

interface LocationData {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  description: string;
  population: string;
  keyFeatures: string[];
}

const locations: LocationData[] = [
  {
    id: "mount-isa",
    name: "Mount Isa",
    coordinates: { lat: -20.7256, lng: 139.4927 },
    description: "Mining hub with growing early education needs",
    population: "18,700",
    keyFeatures: ["Mining community", "Family-focused", "Growing population"]
  },
  {
    id: "moranbah", 
    name: "Moranbah",
    coordinates: { lat: -22.0012, lng: 148.0466 },
    description: "Coal mining town with strong community ties",
    population: "9,400",
    keyFeatures: ["Coal mining", "Close-knit community", "High demand"]
  },
  {
    id: "charters-towers",
    name: "Charters Towers",
    coordinates: { lat: -20.0747, lng: 146.2665 },
    description: "Historic gold rush town with modern childcare facilities",
    population: "8,100", 
    keyFeatures: ["Historic charm", "Family-oriented", "Growing services"]
  }
];

interface JobMapProps {
  onLocationSelect?: (location: string) => void;
  selectedLocation?: string;
}

export default function JobMap({ onLocationSelect, selectedLocation }: JobMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  
  const { data: jobs = [] } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  // Count jobs by location
  const getJobCountByLocation = (locationName: string) => {
    return jobs.filter(job => job.location === locationName).length;
  };

  // SVG Map of Queensland showing the three locations
  const MapSVG = () => (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-auto max-w-4xl mx-auto"
      style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
    >
      {/* Queensland outline (simplified) */}
      <path
        d="M100 50 L700 50 L700 200 L650 300 L600 400 L500 500 L400 550 L300 520 L200 480 L150 400 L120 300 L100 200 Z"
        fill="#f0f9ff"
        stroke="#0ea5e9"
        strokeWidth="2"
        className="transition-colors duration-200"
      />
      
      {/* Location markers */}
      {locations.map((location) => {
        const jobCount = getJobCountByLocation(location.name);
        const isSelected = selectedLocation === location.name;
        const isHovered = hoveredLocation === location.id;
        
        // Convert coordinates to SVG positions (simplified mapping)
        const x = ((location.coordinates.lng + 140) / 10) * 200 + 100;
        const y = ((location.coordinates.lat + 25) / 10) * 150 + 100;
        
        return (
          <g key={location.id}>
            {/* Location circle */}
            <circle
              cx={x}
              cy={y}
              r={isSelected || isHovered ? "20" : "15"}
              fill={isSelected ? "#f97316" : "#0ea5e9"}
              stroke="white"
              strokeWidth="3"
              className="cursor-pointer transition-all duration-200 hover:scale-110"
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => onLocationSelect?.(location.name)}
            />
            
            {/* Job count badge */}
            {jobCount > 0 && (
              <circle
                cx={x + 12}
                cy={y - 12}
                r="10"
                fill="#dc2626"
                stroke="white"
                strokeWidth="2"
                className="cursor-pointer"
                onClick={() => onLocationSelect?.(location.name)}
              />
            )}
            
            {/* Job count text */}
            {jobCount > 0 && (
              <text
                x={x + 12}
                y={y - 8}
                textAnchor="middle"
                fontSize="10"
                fill="white"
                fontWeight="bold"
                className="cursor-pointer pointer-events-none"
              >
                {jobCount}
              </text>
            )}
            
            {/* Location label */}
            <text
              x={x}
              y={y + 35}
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#374151"
              className="cursor-pointer pointer-events-none"
            >
              {location.name}
            </text>
          </g>
        );
      })}
      
      {/* Map title */}
      <text
        x="400"
        y="30"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="#374151"
      >
        GRO Early Learning Regional Locations
      </text>
    </svg>
  );

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
        <MapSVG />
        
        {/* Map Legend */}
        <div className="flex justify-center mt-6 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-sky-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Available Locations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Selected Location</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Open Positions</span>
          </div>
        </div>
      </div>

      {/* Location Details Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {locations.map((location) => {
          const jobCount = getJobCountByLocation(location.name);
          const isSelected = selectedLocation === location.name;
          
          return (
            <Card 
              key={location.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-orange-500 shadow-lg' : ''
              }`}
              onClick={() => onLocationSelect?.(location.name)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  {jobCount > 0 && (
                    <Badge variant="destructive" className="bg-red-600">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {jobCount} open
                    </Badge>
                  )}
                </div>
                <CardDescription>{location.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Population: {location.population}</span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-600" />
                  <div className="space-y-1">
                    {location.keyFeatures.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onLocationSelect?.(location.name);
                  }}
                >
                  {isSelected ? "Selected" : "View Jobs"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-600">{locations.length}</div>
            <div className="text-sm text-gray-600">Regional Locations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-sky-600">{jobs.length}</div>
            <div className="text-sm text-gray-600">Total Opportunities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {locations.reduce((sum, loc) => sum + parseInt(loc.population.replace(',', '')), 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Combined Population</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-sm text-gray-600">Childcare Centers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Users, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Job } from "@shared/schema";

interface LocationData {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  description: string;
  population: string;
  keyFeatures: string[];
  googleMapsUrl: string;
}

const locations: LocationData[] = [
  {
    id: "mount-isa",
    name: "Mount Isa",
    address: "60-62 West St, Menzies QLD 4825",
    coordinates: { lat: -20.7211523, lng: 139.4917176 },
    description: "Mining hub with growing early education needs",
    population: "18,700",
    keyFeatures: ["Mining community", "Family-focused", "Growing population"],
    googleMapsUrl: "https://www.google.com/maps/place/Gro+Early+Learning/@-20.7211523,139.4917176,17z/data=!4m15!1m8!3m7!1s0x6a1652e37073f7df:0x4bbfc46de4f5732!2s60-62+West+St,+Menzies+QLD+4825,+Australia!3b1!8m2!3d-20.7211523!4d139.4917176!16s%2Fg%2F11y42c7wwp!3m5!1s0x6a1653be67302385:0x9afab035956f8970!8m2!3d-20.7211523!4d139.4917176!16s%2Fg%2F11vz4pdy37?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "moranbah", 
    name: "Moranbah",
    address: "164 Mills Ave, Moranbah QLD 4744",
    coordinates: { lat: -22.0011629, lng: 148.0587996 },
    description: "Coal mining town with strong community ties",
    population: "9,400",
    keyFeatures: ["Coal mining", "Close-knit community", "High demand"],
    googleMapsUrl: "https://www.google.com/maps/place/GRO+Early+Learning+-+Moranbah/@-22.0011629,148.0587996,17z/data=!4m15!1m8!3m7!1s0x6bd01770aebebaa9:0x9c8a68b20fbc8a7e!2s164+Mills+Ave,+Moranbah+QLD+4744,+Australia!3b1!8m2!3d-22.0011629!4d148.0587996!16s%2Fg%2F11c1jgclg6!3m5!1s0x6bd017a92aea0919:0xd8e0464ad1424b66!8m2!3d-22.0011629!4d148.0587996!16s%2Fg%2F11xdhgy2c4?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "charters-towers",
    name: "Charters Towers",
    address: "1 Cavey Cct, Queenton QLD 4820",
    coordinates: { lat: -20.0707908, lng: 146.2796241 },
    description: "Historic gold rush town with modern childcare facilities",
    population: "8,100", 
    keyFeatures: ["Historic charm", "Family-oriented", "Growing services"],
    googleMapsUrl: "https://www.google.com/maps/place/Gro+Early+Learning+Charters+Towers/@-20.0707908,146.2796241,17z/data=!4m15!1m8!3m7!1s0x6bd45e88309a679b:0x9a2662551c1e905d!2s1+Cavey+Cct,+Queenton+QLD+4820,+Australia!3b1!8m2!3d-20.0707908!4d146.2796241!16s%2Fg%2F11lds4c548!3m5!1s0x6bd45f168e389339:0xb511c0c6f92b5d79!8m2!3d-20.0707908!4d146.2796241!16s%2Fg%2F11xg46w3tt?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
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

  // Create Google Maps embed URL showing the Queensland region
  const createGoogleMapsEmbedUrl = () => {
    // Center map on Queensland to show all three locations
    const centerLat = -21.0;
    const centerLng = 142.0;
    const zoom = 6;
    
    // Use a simple embed without API key for basic viewing
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000000!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoom}!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau`;
  };

  const GoogleMapsEmbed = () => (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={createGoogleMapsEmbedUrl()}
        title="GRO Early Learning Locations"
      ></iframe>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Find Jobs Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore career opportunities across our regional Queensland locations. View our centers on Google Maps below.
          </p>
        </div>
        
        <GoogleMapsEmbed />
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
                  <div className="text-sm text-gray-600">
                    {location.address}
                  </div>
                </div>
                
                <div className="space-y-1">
                  {location.keyFeatures.map((feature, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLocationSelect?.(location.name);
                    }}
                  >
                    {isSelected ? "Selected" : "View Jobs"}
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(location.googleMapsUrl, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Maps</span>
                  </Button>
                </div>
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
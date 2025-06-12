import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Heart, GraduationCap, Stethoscope, ShoppingBag, Utensils, Plane } from "lucide-react";
import { locations } from "@/data/locations";

interface LocationInfoProps {
  locationName: string;
  showButton?: boolean;
}

const LocationInfo = ({ locationName, showButton = true }: LocationInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const location = locations.find(loc => 
    loc.name.toLowerCase() === locationName.toLowerCase()
  );

  if (!location) {
    return null;
  }

  const LocationDialog = () => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-primary flex items-center">
          <MapPin className="h-6 w-6 mr-2 text-secondary" />
          Living in {location.name}
        </DialogTitle>
        <DialogDescription>
          Explore the cost of living, lifestyle amenities, and community benefits of working in {location.name}.
        </DialogDescription>
      </DialogHeader>
      
      <Tabs defaultValue="cost-of-living" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cost-of-living">Cost of Living</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle & Amenities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cost-of-living" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-secondary" />
                Housing Costs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Rental Prices (per week)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Studio: {location.costOfLiving.averageRent.studio}</li>
                    <li>1 Bedroom: {location.costOfLiving.averageRent.oneBedroom}</li>
                    <li>2 Bedroom: {location.costOfLiving.averageRent.twoBedroom}</li>
                    <li>3 Bedroom: {location.costOfLiving.averageRent.threeBedroom}</li>
                    <li>House: {location.costOfLiving.averageRent.house}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Other Costs</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Utilities: {location.costOfLiving.utilities}</li>
                    <li>Groceries: {location.costOfLiving.groceries}</li>
                    <li>Fuel: {location.costOfLiving.fuel}</li>
                    <li>Transport: {location.costOfLiving.publicTransport}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Badge variant="outline" className="mr-2">
                    {location.costOfLiving.overallCostRating}
                  </Badge>
                  <span className="font-medium">Overall Cost Rating</span>
                </div>
                <p className="text-sm text-gray-600">{location.costOfLiving.notes}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="lifestyle" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-secondary" />
                  Community Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Population:</span> {location.lifestyle.population}
                </div>
                <div>
                  <span className="font-medium">Climate:</span> {location.lifestyle.climate}
                </div>
                <div>
                  <span className="font-medium">Community Vibe:</span>
                  <p className="text-sm mt-1">{location.lifestyle.communityVibe}</p>
                </div>
                <div>
                  <span className="font-medium">Key Industries:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.lifestyle.keyIndustries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary">{industry}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-secondary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="font-medium">Schools:</span>
                  <ul className="text-sm mt-1 space-y-1">
                    {location.lifestyle.education.schools.map((school, idx) => (
                      <li key={idx}>• {school}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium">Higher Education:</span>
                  <p className="text-sm mt-1">{location.lifestyle.education.university}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
                  Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="font-medium">Hospital:</span>
                  <p className="text-sm mt-1">{location.lifestyle.healthcare.hospital}</p>
                </div>
                <div>
                  <span className="font-medium">Medical Services:</span>
                  <p className="text-sm mt-1">{location.lifestyle.healthcare.medical}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-secondary" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="font-medium">Airport:</span>
                  <p className="text-sm">{location.lifestyle.transport.airport}</p>
                </div>
                <div>
                  <span className="font-medium">Rail:</span>
                  <p className="text-sm">{location.lifestyle.transport.rail}</p>
                </div>
                <div>
                  <span className="font-medium">Local Transport:</span>
                  <p className="text-sm">{location.lifestyle.transport.local}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Heart className="h-4 w-4 mr-2 text-secondary" />
                  Recreation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {location.lifestyle.recreation.map((activity, idx) => (
                    <li key={idx}>• {activity}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ShoppingBag className="h-4 w-4 mr-2 text-secondary" />
                  Shopping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {location.lifestyle.shopping.map((shop, idx) => (
                    <li key={idx}>• {shop}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Utensils className="h-4 w-4 mr-2 text-secondary" />
                  Dining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {location.lifestyle.dining.map((restaurant, idx) => (
                    <li key={idx}>• {restaurant}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );

  if (!showButton) {
    return <LocationDialog />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="hover:bg-secondary/10 hover:border-secondary"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Location Info
        </Button>
      </DialogTrigger>
      <LocationDialog />
    </Dialog>
  );
};

export default LocationInfo;
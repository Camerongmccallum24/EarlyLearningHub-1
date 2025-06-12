import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { locations } from "@/data/locations";

interface RelocationCost {
  movingServices: number;
  temporaryAccommodation: number;
  travelExpenses: number;
  utilityConnections: number;
  total: number;
}

interface HousingData {
  averageRent: {
    studio: number;
    oneBedroom: number;
    twoBedroom: number;
    threeBedroom: number;
    house: number;
  };
  averagePurchase: {
    unit: number;
    house: number;
  };
  rentalAvailability: string;
  marketTrend: string;
}

export default function RelocationSupport() {
  const [selectedFromLocation, setSelectedFromLocation] = useState<string>("");
  const [selectedToLocation, setSelectedToLocation] = useState<string>("");
  const [householdSize, setHouseholdSize] = useState<number[]>([2]);
  const [movingDistance, setMovingDistance] = useState<number>(500);
  const [activeTab, setActiveTab] = useState("calculator");

  // Calculate relocation costs based on distance and household size
  const calculateRelocationCosts = (): RelocationCost => {
    const baseMovingCost = 1200;
    const distanceMultiplier = movingDistance / 100;
    const sizeMultiplier = householdSize[0];
    
    const movingServices = Math.round((baseMovingCost + (distanceMultiplier * 150)) * sizeMultiplier);
    const temporaryAccommodation = 1800; // 2 weeks temporary housing
    const travelExpenses = Math.round(movingDistance * 0.68 * 2); // Return trip for house hunting
    const utilityConnections = 450;
    
    const total = movingServices + temporaryAccommodation + travelExpenses + utilityConnections;
    
    return {
      movingServices,
      temporaryAccommodation,
      travelExpenses,
      utilityConnections,
      total
    };
  };

  const relocationCosts = calculateRelocationCosts();
  const groRelocationBonus = 5000; // GRO provides $5,000 relocation assistance
  const netCost = Math.max(0, relocationCosts.total - groRelocationBonus);

  // Mock housing data - in real implementation, this would come from property APIs
  const getHousingData = (locationId: string): HousingData => {
    const location = locations.find(loc => loc.id === locationId);
    if (!location) return {
      averageRent: { studio: 0, oneBedroom: 0, twoBedroom: 0, threeBedroom: 0, house: 0 },
      averagePurchase: { unit: 0, house: 0 },
      rentalAvailability: "Unknown",
      marketTrend: "Stable"
    };

    // Parse rent data from location
    const rentData = location.costOfLiving.averageRent;
    return {
      averageRent: {
        studio: parseInt(rentData.studio.replace(/[^0-9]/g, '')),
        oneBedroom: parseInt(rentData.oneBedroom.replace(/[^0-9]/g, '')),
        twoBedroom: parseInt(rentData.twoBedroom.replace(/[^0-9]/g, '')),
        threeBedroom: parseInt(rentData.threeBedroom.replace(/[^0-9]/g, '')),
        house: parseInt(rentData.house.replace(/[^0-9]/g, ''))
      },
      averagePurchase: {
        unit: parseInt(rentData.oneBedroom.replace(/[^0-9]/g, '')) * 250, // Rough calculation
        house: parseInt(rentData.house.replace(/[^0-9]/g, '')) * 300
      },
      rentalAvailability: "Good",
      marketTrend: "Stable"
    };
  };

  const selectedToLocationData = selectedToLocation ? getHousingData(selectedToLocation) : null;
  const selectedLocationDetails = locations.find(loc => loc.id === selectedToLocation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gro-blue-green mb-4">Relocation Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planning your move to join GRO Early Learning? Use our comprehensive relocation tools to 
            estimate costs, explore housing options, and discover your new community.
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-gro-teal text-white p-6 rounded-2xl mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">GRO Relocation Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
              <div className="text-3xl font-bold">AU$5,000</div>
              <div className="text-sm opacity-90">Relocation Assistance</div>
            </div>
            <div>
              <div className="text-3xl font-bold">14 Days</div>
              <div className="text-sm opacity-90">Temporary Accommodation</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Full Support</div>
              <div className="text-sm opacity-90">Dedicated HR Assistance</div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="calculator">Cost Calculator</TabsTrigger>
            <TabsTrigger value="housing">Housing Market</TabsTrigger>
            <TabsTrigger value="community">Community Guide</TabsTrigger>
            <TabsTrigger value="timeline">Moving Timeline</TabsTrigger>
          </TabsList>

          {/* Cost Calculator Tab */}
          <TabsContent value="calculator" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-gro-coral">Interactive Relocation Cost Calculator</CardTitle>
                <CardDescription>
                  Get a personalized estimate of your moving costs with GRO's relocation benefits included.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="from-location">Moving From</Label>
                    <Select value={selectedFromLocation} onValueChange={setSelectedFromLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sydney">Sydney, NSW</SelectItem>
                        <SelectItem value="melbourne">Melbourne, VIC</SelectItem>
                        <SelectItem value="brisbane">Brisbane, QLD</SelectItem>
                        <SelectItem value="perth">Perth, WA</SelectItem>
                        <SelectItem value="adelaide">Adelaide, SA</SelectItem>
                        <SelectItem value="other">Other Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="to-location">Moving To (GRO Location)</Label>
                    <Select value={selectedToLocation} onValueChange={setSelectedToLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select GRO location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Household Size: {householdSize[0]} people</Label>
                  <Slider
                    value={householdSize}
                    onValueChange={setHouseholdSize}
                    max={6}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Estimated Distance: {movingDistance} km</Label>
                  <Slider
                    value={[movingDistance]}
                    onValueChange={(value) => setMovingDistance(value[0])}
                    max={3000}
                    min={100}
                    step={50}
                    className="mt-2"
                  />
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Estimated Relocation Costs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Professional Moving Services</span>
                      <span>AU${relocationCosts.movingServices.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temporary Accommodation (2 weeks)</span>
                      <span>AU${relocationCosts.temporaryAccommodation.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travel & House Hunting</span>
                      <span>AU${relocationCosts.travelExpenses.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Utility Connections & Setup</span>
                      <span>AU${relocationCosts.utilityConnections.toLocaleString()}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total Estimated Cost</span>
                      <span>AU${relocationCosts.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>GRO Relocation Assistance</span>
                      <span>-AU${groRelocationBonus.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-teal">
                      <span>Your Net Cost</span>
                      <span>AU${netCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Housing Market Tab */}
          <TabsContent value="housing" className="space-y-8">
            {selectedToLocation && selectedToLocationData ? (
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-coral">Rental Market - {selectedLocationDetails?.name}</CardTitle>
                    <CardDescription>Current rental prices and availability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-coral/10 rounded-lg">
                          <div className="text-sm text-gray-600">Studio</div>
                          <div className="font-semibold">AU${selectedToLocationData.averageRent.studio}/week</div>
                        </div>
                        <div className="text-center p-3 bg-coral/10 rounded-lg">
                          <div className="text-sm text-gray-600">1 Bedroom</div>
                          <div className="font-semibold">AU${selectedToLocationData.averageRent.oneBedroom}/week</div>
                        </div>
                        <div className="text-center p-3 bg-coral/10 rounded-lg">
                          <div className="text-sm text-gray-600">2 Bedroom</div>
                          <div className="font-semibold">AU${selectedToLocationData.averageRent.twoBedroom}/week</div>
                        </div>
                        <div className="text-center p-3 bg-coral/10 rounded-lg">
                          <div className="text-sm text-gray-600">3 Bedroom</div>
                          <div className="font-semibold">AU${selectedToLocationData.averageRent.threeBedroom}/week</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Rental Availability:</span>
                          <Badge variant="secondary">{selectedToLocationData.rentalAvailability}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Market Trend:</span>
                          <Badge variant="outline">{selectedToLocationData.marketTrend}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green">Purchase Market</CardTitle>
                    <CardDescription>Property purchase prices and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-green/10 rounded-lg">
                        <div className="text-sm text-gray-600">Average Unit Price</div>
                        <div className="text-2xl font-bold text-green">
                          AU${selectedToLocationData.averagePurchase.unit.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green/10 rounded-lg">
                        <div className="text-sm text-gray-600">Average House Price</div>
                        <div className="text-2xl font-bold text-green">
                          AU${selectedToLocationData.averagePurchase.house.toLocaleString()}
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">GRO Home Loan Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Pre-approved mortgage broker network</li>
                          <li>• First-time buyer assistance program</li>
                          <li>• Regional grants and incentives guidance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-600">Select a GRO location from the calculator tab to view housing market insights.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Community Guide Tab */}
          <TabsContent value="community" className="space-y-8">
            {selectedToLocation && selectedLocationDetails ? (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-teal">Community Overview - {selectedLocationDetails.name}</CardTitle>
                    <CardDescription>{selectedLocationDetails.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <i className="fas fa-users mr-2 text-teal"></i>
                          Demographics
                        </h4>
                        <p><strong>Population:</strong> {selectedLocationDetails.lifestyle.population}</p>
                        <p><strong>Climate:</strong> {selectedLocationDetails.lifestyle.climate}</p>
                        <p><strong>Community Vibe:</strong> {selectedLocationDetails.lifestyle.communityVibe}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <i className="fas fa-briefcase mr-2 text-coral"></i>
                          Employment
                        </h4>
                        <p><strong>Key Industries:</strong> {selectedLocationDetails.lifestyle.keyIndustries.join(", ")}</p>
                        <p><strong>Partner Opportunities:</strong> {selectedLocationDetails.lifestyle.partnerEmploymentOpportunities}</p>
                        <p><strong>Major Hubs:</strong> {selectedLocationDetails.lifestyle.proximityToMajorHubs}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green flex items-center">
                        <i className="fas fa-graduation-cap mr-2"></i>
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium">Schools</h5>
                          <ul className="text-sm space-y-1">
                            {selectedLocationDetails.lifestyle.education.schools.map((school, index) => (
                              <li key={index}>• {school}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium">University</h5>
                          <p className="text-sm">{selectedLocationDetails.lifestyle.education.university}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-coral flex items-center">
                        <i className="fas fa-heartbeat mr-2"></i>
                        Healthcare
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium">Hospital</h5>
                          <p className="text-sm">{selectedLocationDetails.lifestyle.healthcare.hospital}</p>
                        </div>
                        <div>
                          <h5 className="font-medium">Medical Services</h5>
                          <p className="text-sm">{selectedLocationDetails.lifestyle.healthcare.medical}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sky-blue flex items-center">
                        <i className="fas fa-map-marked-alt mr-2"></i>
                        Recreation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium">Activities</h5>
                          <ul className="text-sm space-y-1">
                            {selectedLocationDetails.lifestyle.recreation.slice(0, 4).map((activity, index) => (
                              <li key={index}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-600">Select a GRO location to explore community resources and local information.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Moving Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Your Moving Timeline & Checklist</CardTitle>
                <CardDescription>
                  Comprehensive timeline with GRO's relocation support at each stage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      phase: "8 Weeks Before",
                      color: "teal",
                      icon: "fa-calendar-check",
                      tasks: [
                        "Accept job offer and confirm start date",
                        "Complete GRO relocation benefit application",
                        "Begin researching housing options online",
                        "Notify current employer and arrange transition"
                      ],
                      groSupport: "HR provides relocation packet and dedicated support contact"
                    },
                    {
                      phase: "6 Weeks Before",
                      color: "coral",
                      icon: "fa-home",
                      tasks: [
                        "Schedule house-hunting trip (GRO covers expenses)",
                        "Apply for rental properties or arrange viewings",
                        "Research schools and enroll children",
                        "Begin decluttering and organizing belongings"
                      ],
                      groSupport: "Temporary accommodation arranged for house-hunting trip"
                    },
                    {
                      phase: "4 Weeks Before",
                      color: "green",
                      icon: "fa-truck",
                      tasks: [
                        "Book moving company (get quotes from GRO-recommended vendors)",
                        "Arrange mail redirection and address changes",
                        "Transfer utilities and internet services",
                        "Organize pet transportation if needed"
                      ],
                      groSupport: "AU$5,000 relocation payment processed to your account"
                    },
                    {
                      phase: "2 Weeks Before",
                      color: "teal",
                      icon: "fa-boxes",
                      tasks: [
                        "Confirm all moving arrangements",
                        "Pack non-essential items",
                        "Arrange temporary accommodation at destination",
                        "Prepare important documents for easy access"
                      ],
                      groSupport: "GRO covers 14 days temporary accommodation costs"
                    },
                    {
                      phase: "Moving Week",
                      color: "coral",
                      icon: "fa-plane",
                      tasks: [
                        "Complete final packing",
                        "Coordinate with moving company",
                        "Travel to new location",
                        "Settle into temporary accommodation"
                      ],
                      groSupport: "HR check-in call and local orientation materials provided"
                    },
                    {
                      phase: "First Month",
                      color: "green",
                      icon: "fa-handshake",
                      tasks: [
                        "Complete property settlement or rental setup",
                        "Register with local services (GP, dentist, etc.)",
                        "Enroll in local activities and community groups",
                        "Begin your role at GRO Early Learning!"
                      ],
                      groSupport: "Monthly check-ins with HR to ensure smooth transition"
                    }
                  ].map((phase, index) => (
                    <div key={index} className="flex gap-6">
                      <div className={`w-16 h-16 bg-${phase.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <i className={`fas ${phase.icon} text-${phase.color} text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-${phase.color} mb-2`}>{phase.phase}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Your Tasks:</h4>
                            <ul className="space-y-1">
                              {phase.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start text-sm">
                                  <i className="fas fa-check text-green mr-2 mt-1 text-xs"></i>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={`bg-${phase.color}/5 p-4 rounded-lg`}>
                            <h4 className="font-semibold mb-2">GRO Support:</h4>
                            <p className="text-sm text-gray-700">{phase.groSupport}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Make the Move?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our dedicated HR team is here to support your relocation journey every step of the way. 
                Contact us to discuss your specific needs and get personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gro-coral hover:bg-gro-coral/90 text-white">
                  <Link href="/jobs">
                    <i className="fas fa-search mr-2"></i>
                    Browse Available Positions
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gro-teal text-gro-teal hover:bg-gro-teal hover:text-white">
                  <a href="mailto:careers@groearlylearning.com">
                    <i className="fas fa-envelope mr-2"></i>
                    Contact HR Team
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
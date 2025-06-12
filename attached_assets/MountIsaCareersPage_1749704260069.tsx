
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationJobBoard from "@/components/LocationJobBoard";
import { locations } from "@/data/locations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Sun, 
  Building2, 
  GraduationCap, 
  Heart, 
  ShoppingCart, 
  Utensils, 
  Plane,
  DollarSign,
  Home,
  Car,
  Zap,
  ShoppingBag,
  TreePine,
  Hospital,
  School
} from "lucide-react";

const MountIsaCareersPage = () => {
  const locationData = locations.find(loc => loc.id === 'mount-isa');

  if (!locationData) {
    console.error('Mount Isa location not found in locations data');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600">Mount Isa location data is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gro-darkblue via-gro-blue to-gro-teal text-white py-20 sm:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-md">
            Mount Isa: Your Career at <span className="text-gro-yellow">GRO Early Learning</span>
          </h1>
          <p className="text-lg lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Discover life in Mount Isa - a unique and supportive environment for families and professionals alike.
          </p>
          <a 
            href="#jobs" 
            className="btn-gro-orange inline-block rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
          >
            View Job Opportunities
          </a>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Vibrant Community Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <Heart className="text-gro-orange" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Vibrant Community</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Mount Isa offers a unique and supportive environment for families and professionals alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">About Our Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gro-gray text-base mb-4">{locationData.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gro-gray">
                    <MapPin className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm">{locationData.address}</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Phone className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">{locationData.phone}</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Mail className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">{locationData.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">Community Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Population:</span> {locationData.lifestyle.population}
                </div>
                <div>
                  <span className="font-medium">Climate:</span> {locationData.lifestyle.climate}
                </div>
                <div>
                  <span className="font-medium">Community Vibe:</span> {locationData.lifestyle.communityVibe}
                </div>
                <div>
                  <span className="font-medium">Key Industries:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {locationData.lifestyle.keyIndustries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary">{industry}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">Partner Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base mb-4">{locationData.lifestyle.partnerEmploymentOpportunities}</p>
                <div className="mt-4">
                  <span className="font-medium">Proximity to Major Hubs:</span>
                  <p className="text-gray-600 text-sm">{locationData.lifestyle.proximityToMajorHubs}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost of Living Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <DollarSign className="text-gro-green" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Understanding the Cost of Living</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Mount Isa offers competitive salaries in the mining sector to offset living costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <Zap className="h-5 w-5 mr-2 text-gro-green" />
                  Monthly Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Utilities:</span>
                  <span>{locationData.costOfLiving.utilities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Groceries (family of 4):</span>
                  <span>{locationData.costOfLiving.groceries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fuel:</span>
                  <span>{locationData.costOfLiving.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Overall Rating:</span>
                  <Badge variant="outline">{locationData.costOfLiving.overallCostRating}</Badge>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">{locationData.costOfLiving.notes}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <Home className="h-5 w-5 mr-2 text-gro-green" />
                  Accommodation Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Studio/1-Bedroom:</span>
                  <span>{locationData.costOfLiving.averageRent.studio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">2-Bedroom:</span>
                  <span>{locationData.costOfLiving.averageRent.twoBedroom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">3-Bedroom:</span>
                  <span>{locationData.costOfLiving.averageRent.threeBedroom}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">House:</span>
                  <span>{locationData.costOfLiving.averageRent.house}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Life & Support Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <Users className="text-gro-teal" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Community Life & Support</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Mount Isa offers a range of services and activities to make you and your family feel right at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <TreePine className="h-5 w-5 mr-2 text-gro-teal" />
                  Recreation & Leisure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                  {locationData.lifestyle.recreation.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <ShoppingBag className="h-5 w-5 mr-2 text-gro-teal" />
                  Shopping & Dining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Shopping:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    {locationData.lifestyle.shopping.map((shop, idx) => (
                      <li key={idx}>{shop}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dining:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    {locationData.lifestyle.dining.map((restaurant, idx) => (
                      <li key={idx}>{restaurant}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <Plane className="h-5 w-5 mr-2 text-gro-teal" />
                  Transportation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="font-medium">Airport:</span>
                  <p className="text-sm">{locationData.lifestyle.transport.airport}</p>
                </div>
                <div>
                  <span className="font-medium">Rail:</span>
                  <p className="text-sm">{locationData.lifestyle.transport.rail}</p>
                </div>
                <div>
                  <span className="font-medium">Bus:</span>
                  <p className="text-sm">{locationData.lifestyle.transport.bus}</p>
                </div>
                <div>
                  <span className="font-medium">Local Transport:</span>
                  <p className="text-sm">{locationData.lifestyle.transport.local}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Healthcare Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <School className="text-gro-green" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Education & Healthcare</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Access quality schooling and essential health services for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <GraduationCap className="h-5 w-5 mr-2 text-gro-green" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Local Schools:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    {locationData.lifestyle.education.schools.map((school, idx) => (
                      <li key={idx}>{school}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">University Access:</h4>
                  <p className="text-gray-700 text-sm">{locationData.lifestyle.education.university}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <Hospital className="h-5 w-5 mr-2 text-gro-green" />
                  Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Hospital:</h4>
                  <p className="text-gray-700 text-sm">{locationData.lifestyle.healthcare.hospital}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Medical Services:</h4>
                  <p className="text-gray-700 text-sm">{locationData.lifestyle.healthcare.medical}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <MapPin className="text-gro-orange" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Our Centre on the Map</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Located in the heart of Mount Isa, easily accessible for families throughout the region.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video w-full">
            <iframe
              src={locationData.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              title={`Map showing location of ${locationData.name}`}
            />
          </div>
        </section>

        {/* Job Opportunities Section */}
        <section id="jobs" className="mb-16">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center items-center text-4xl sm:text-5xl lg:text-6xl mb-4">
              <Building2 className="text-gro-teal" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Current Job Opportunities</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore the rewarding career paths available at GRO Early Learning in Mount Isa.
            </p>
          </div>

          <LocationJobBoard location="mount-isa" />
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-gro-orange to-gro-yellow text-white text-center py-16 rounded-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Career in Mount Isa?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-8">
            We're excited to hear from passionate educators and support staff. Connect with us to learn more about our team and how you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`mailto:${locationData.email}`}
              className="btn-gro-darkblue rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
            >
              Email Us
            </a>
            <a 
              href={`tel:${locationData.phone}`}
              className="btn-gro-teal rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MountIsaCareersPage;

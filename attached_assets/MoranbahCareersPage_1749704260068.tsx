
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

const accommodationProviders = [
  {
    name: "Moranbah East",
    link: "https://www.domain.com.au/rent/moranbah-east-qld-4744/",
    description: "Modern housing development with family homes",
    contact: "Various agents"
  },
  {
    name: "Century 21 Moranbah",
    link: "https://www.century21.com.au/offices/century-21-moranbah/",
    phone: "(07) 4941 4144",
    description: "Full-service real estate agency"
  },
  {
    name: "LJ Hooker Moranbah",
    link: "https://ljhooker.com.au/office/moranbah",
    phone: "(07) 4941 4711",
    description: "Established real estate services"
  },
  {
    name: "Elders Real Estate",
    link: "https://www.eldersmining.com.au/",
    phone: "(07) 4941 2977",
    description: "Mining industry accommodation specialists"
  }
];

const familyServices = [
  {
    name: "Moranbah Neighbourhood Centre",
    link: "https://www.moranbahnc.org.au/",
    phone: "(07) 4941 4814",
    description: "Community support and family services"
  },
  {
    name: "Isaac Regional Council Family Services",
    link: "https://www.isaac.qld.gov.au/",
    phone: "(07) 4941 8444",
    description: "Local government family support"
  },
  {
    name: "Centacare North Queensland",
    link: "https://www.centacarenq.org.au/",
    phone: "(07) 4941 1642",
    description: "Catholic family support services"
  },
  {
    name: "Family and Child Connect",
    link: "https://www.familychildconnect.org.au/",
    phone: "13 FAMILY (13 32 64)",
    description: "Early intervention family support"
  }
];

const MoranbahCareersPage = () => {
  const locationData = locations.find(loc => loc.id === 'moranbah');

  if (!locationData) {
    return <div>Location not found.</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gro-green/15 via-gro-teal/10 to-gro-orange/15 py-20 sm:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-gro-darkblue drop-shadow-md">
            Moranbah: Your Career at <span className="text-gro-green">GRO Early Learning</span>
          </h1>
          <p className="text-lg lg:text-2xl text-gro-gray max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Join our dynamic Moranbah team and build your career in early childhood education within one of Queensland's most vibrant mining communities!
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
              Moranbah is a thriving mining town in the heart of Queensland's Bowen Basin, known for its strong community spirit, excellent facilities, and proximity to some of the world's largest coal mines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">About Our Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gro-gray text-base mb-4">GRO Early Learning Moranbah offers premium early childhood education and care for children aged 6 weeks to 6 years in a modern, state-of-the-art facility.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gro-gray">
                    <MapPin className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm">164-166 Mills Ave, Moranbah, QLD 4744</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Phone className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">(07) 4941 3988</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Mail className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">moranbah@groearlylearning.com.au</span>
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
                  <span className="font-medium">Population:</span> Approximately 9,000 people
                </div>
                <div>
                  <span className="font-medium">Climate:</span> Warm semi-arid climate with mild winters
                </div>
                <div>
                  <span className="font-medium">Community Vibe:</span> Strong community spirit with excellent facilities
                </div>
                <div>
                  <span className="font-medium">Key Industries:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge variant="secondary">Coal Mining</Badge>
                    <Badge variant="secondary">Energy</Badge>
                    <Badge variant="secondary">Support Services</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">Partner Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base mb-4">Excellent opportunities in mining sector with many companies offering housing assistance or subsidies for employees and families.</p>
                <div className="mt-4">
                  <span className="font-medium">Proximity to Major Hubs:</span>
                  <p className="text-gray-600 text-sm">Mackay Airport (~2 hours drive), well-connected to major Queensland cities</p>
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
              Moranbah offers competitive salaries in the mining sector to offset living costs, creating excellent opportunities for savings.
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
                  <span>$200-300/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Groceries (family of 4):</span>
                  <span>$800-1200/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fuel:</span>
                  <span>$1.60-1.80/litre</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Overall Rating:</span>
                  <Badge variant="outline">Higher than average</Badge>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Mining companies often provide housing assistance or subsidies to offset higher living costs</p>
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
                  <span>$350-450/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">2-Bedroom:</span>
                  <span>$450-550/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">3-Bedroom:</span>
                  <span>$550-650/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Family House:</span>
                  <span>$600+/week</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-gro-teal">
              🛌 Accommodation Providers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {accommodationProviders.map((provider) => (
                <Card key={provider.name} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold text-gro-darkblue leading-tight">
                      <a
                        href={provider.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gro-teal hover:text-gro-teal/80 underline transition-colors"
                      >
                        {provider.name}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm lg:text-base text-gro-gray mb-2">{provider.description}</p>
                    {provider.phone && (
                      <span className="text-gro-gray text-sm lg:text-base flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {provider.phone}
                      </span>
                    )}
                    {provider.contact && !provider.phone && (
                      <span className="text-gro-gray text-sm lg:text-base">{provider.contact}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
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
              Moranbah offers a range of services and activities to make you and your family feel right at home.
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
                  <li>Moranbah Recreation Centre with pool and gym facilities</li>
                  <li>Golf course and sporting clubs</li>
                  <li>Multiple parks and playgrounds</li>
                  <li>Community events and festivals</li>
                  <li>Outdoor adventure activities nearby</li>
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
                    <li>Centro Moranbah Shopping Centre</li>
                    <li>Major retailers and supermarkets</li>
                    <li>Local specialty stores</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dining:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>Variety of restaurants and cafes</li>
                    <li>Takeaway and fast food options</li>
                    <li>Local pubs and clubs</li>
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
                  <p className="text-sm">Moranbah Airport (MOV) with regular flights to Brisbane</p>
                </div>
                <div>
                  <span className="font-medium">Road Access:</span>
                  <p className="text-sm">Peak Downs Highway with good connections</p>
                </div>
                <div>
                  <span className="font-medium">Public Transport:</span>
                  <p className="text-sm">Local bus services and mining company transport</p>
                </div>
                <div>
                  <span className="font-medium">Local Taxis:</span>
                  <p className="text-sm">Moranbah Taxis available</p>
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
                    <li>Moranbah State School</li>
                    <li>Moranbah State High School</li>
                    <li>Moranbah East State School</li>
                    <li>Various early learning centres</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">University Access:</h4>
                  <p className="text-gray-700 text-sm">Distance education options and access to regional university campuses</p>
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
                  <p className="text-gray-700 text-sm">Moranbah Hospital and Medical Centre</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Medical Services:</h4>
                  <p className="text-gray-700 text-sm">Multiple GP clinics, specialist services, and allied health professionals</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-gro-teal">
              👨‍👩‍👧‍👦 Local Family Support Services
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {familyServices.map((service) => (
                <Card key={service.name} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold text-gro-darkblue leading-tight">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gro-teal hover:text-gro-teal/80 underline transition-colors"
                      >
                        {service.name}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm lg:text-base text-gro-gray mb-2">{service.description}</p>
                    <span className="text-gro-gray text-sm lg:text-base flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {service.phone}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              Located in the heart of Moranbah, easily accessible for families throughout the region.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2647937405936!2d148.0562246731855!3d-22.00116287990276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd017a92aea0919%3A0xd8e0464ad1424b66!2sGRO%20Early%20Learning%20-%20Moranbah!5e0!3m2!1sen!2suk!4v1749235770554!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              title="Map showing location of GRO Early Learning Moranbah"
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
              Explore the rewarding career paths available at GRO Early Learning in Moranbah.
            </p>
          </div>

          <LocationJobBoard location="Moranbah" />
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-gro-green to-gro-teal text-white text-center py-16 rounded-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Career in Moranbah?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-8">
            We're here to support your transition to this vibrant community. Contact us for information about career opportunities, relocation assistance, and life in Moranbah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:moranbah@groearlylearning.com.au"
              className="btn-gro-darkblue rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
            >
              Email Us
            </a>
            <a 
              href="tel:(07) 4941 3988"
              className="btn-gro-orange rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
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

export default MoranbahCareersPage;

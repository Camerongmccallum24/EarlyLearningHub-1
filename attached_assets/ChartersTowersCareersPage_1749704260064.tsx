
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationJobBoard from "@/components/LocationJobBoard";
import GroChatbot from "@/components/GroChatbot";
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
  School,
  Train
} from "lucide-react";

const providers = [
  {
    name: "Jensens Real Estate & Livestock",
    link: "https://www.jensensrealestate.com.au/rent",
    phone: "(07) 4787 1144",
    description: "Established real estate and livestock services"
  },
  {
    name: "Gold City Realty",
    link: "https://www.goldcityrealty.com.au/properties/properties-for-rent",
    phone: "(07) 4401 5077",
    description: "Local property management specialists"
  },
  {
    name: "Towers Property & Co",
    link: "https://www.towerspropertyco.com.au/renting/rented-properties/",
    phone: "(07) 4787 1144",
    description: "Full-service property management"
  },
  {
    name: "48 & Rankin Street Realty",
    link: "https://www.48rankinrealty.com.au/rentals",
    phone: "(07) 4787 3456",
    description: "Local rental property specialists"
  },
];

const familyServices = [
  {
    name: "Prospect Community Services",
    link: "https://www.prospect.org.au/",
    phone: "(07) 4787 4797",
    description: "Community support and family services"
  },
  {
    name: "Centacare North Queensland (Charters Towers Outreach)",
    link: "https://www.centacarenq.org.au/centres/ingham-charters-towers-outreach-services/",
    phone: "(07) 4787 1300",
    description: "Catholic family support services"
  },
  {
    name: "Dalrymple Rural Family Support Service",
    link: "https://www.qld.gov.au/community/women/support-for-women/find-a-support-service/view?title=Dalrymple+Rural+Family+Support+Service+-+Charters+Towers",
    phone: "(07) 4787 4797",
    description: "Rural family support and assistance"
  },
  {
    name: "Family and Child Connect",
    link: "https://www.familychildconnect.org.au/",
    phone: "13 FAMILY (13 32 64)",
    description: "Early intervention family support"
  },
];

const ChartersTowersCareersPage = () => {
  const locationData = locations.find(loc => loc.id === 'charters-towers');

  if (!locationData) {
    return <div>Location not found.</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gro-orange/15 via-gro-yellow/10 to-gro-green/15 py-20 sm:py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-gro-darkblue drop-shadow-md">
            Charters Towers: Your Career at <span className="text-gro-orange">GRO Early Learning</span>
          </h1>
          <p className="text-lg lg:text-2xl text-gro-gray max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Join our historic Charters Towers team and embark on a rewarding career in early childhood education within a vibrant, heritage-rich community!
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gro-darkblue mb-4">Historic Community</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Charters Towers is a regional centre in North Queensland, steeped in gold‐rush history and known for its heritage architecture, thriving arts scene, and strong community spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">About Our Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gro-gray text-base mb-4">GRO Early Learning Charters Towers will offer premium early childhood education and care for children aged 6 weeks to school age when it opens in January 2026.</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gro-gray">
                    <MapPin className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm">1 Cavey Court, Queenton, Charters Towers QLD 4820</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Phone className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">(07) 4787 1188</span>
                  </div>
                  <div className="flex items-center text-gro-gray">
                    <Mail className="h-4 w-4 mr-2 text-gro-teal" />
                    <span className="text-sm font-medium hover:text-gro-teal">ct@groearlylearning.com.au</span>
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
                  <span className="font-medium">Population:</span> 11,794 (regional council area)
                </div>
                <div>
                  <span className="font-medium">Climate:</span> Tropical savanna with distinct wet and dry seasons
                </div>
                <div>
                  <span className="font-medium">Community Vibe:</span> Historic charm with strong educational focus
                </div>
                <div>
                  <span className="font-medium">Key Industries:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge variant="secondary">Mining</Badge>
                    <Badge variant="secondary">Beef Production</Badge>
                    <Badge variant="secondary">Education</Badge>
                    <Badge variant="secondary">Tourism</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">Partner Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base mb-4">The surrounding economy is driven by mining, beef production, and education, especially boarding schools that serve remote rural families.</p>
                <div className="mt-4">
                  <span className="font-medium">Proximity to Major Hubs:</span>
                  <p className="text-gray-600 text-sm">Townsville Airport (~130 km, 90 min drive), well-connected to coastal cities</p>
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
              Charters Towers offers affordable living with median weekly rent below the Queensland average.
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
                  <span>$150-250/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Groceries (family of 4):</span>
                  <span>$600-900/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fuel:</span>
                  <span>$1.55-1.75/litre</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Overall Rating:</span>
                  <Badge variant="outline">Below QLD average</Badge>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Supermarkets include Woolworths, Coles, and independents in the CBD for reasonable grocery costs</p>
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
                  <span className="font-medium">Median Weekly Rent:</span>
                  <span>$250-280/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Aboriginal/TSI Households:</span>
                  <span>$220/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Compared to QLD:</span>
                  <span>Below average ($305)</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Affordable housing options with various property types available</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-gro-teal">
              🛌 Accommodation Providers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              {providers.map((provider) => (
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
                    <span className="text-gro-gray text-sm lg:text-base flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {provider.phone}
                    </span>
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
              Charters Towers offers a range of services and activities steeped in history and community spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl sm:text-2xl font-semibold text-gro-darkblue mb-4">
                  <TreePine className="h-5 w-5 mr-2 text-gro-teal" />
                  Recreation & Attractions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                  <li>Stock Exchange Arcade (heritage shopping)</li>
                  <li>Ay Ot Lookout for panoramic views</li>
                  <li>Warrina Cinemas for entertainment</li>
                  <li>Lissner Park and Queens Park</li>
                  <li>Historic Walking Trail</li>
                  <li>Country Music Festival and Rodeo Week</li>
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
                    <li>City Centre Plaza</li>
                    <li>Heritage boutique shops</li>
                    <li>Local markets and artisan stores</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dining:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>The Courty Hotel (heritage pub)</li>
                    <li>Local cafes and restaurants</li>
                    <li>Live music venues with beer gardens</li>
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
                  <p className="text-sm">Townsville Airport (TSV) is ~130 km (90 min drive)</p>
                </div>
                <div>
                  <span className="font-medium">Train:</span>
                  <p className="text-sm">Queensland Rail's Inlander service stops at Charters Towers Railway Station</p>
                </div>
                <div>
                  <span className="font-medium">Bus Services:</span>
                  <p className="text-sm">Trans North Bus & Coach daily to Townsville, Greyhound Australia services</p>
                </div>
                <div>
                  <span className="font-medium">Local Taxis:</span>
                  <p className="text-sm">Black & White Taxis: (07) 4787 1234, TransitCare: 13 12 30</p>
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
              Access renowned educational institutions and quality health services for you and your family.
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
                  <h4 className="font-medium mb-2">Renowned Schools:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                    <li>Columba Catholic College</li>
                    <li>Blackheath & Thornburgh College</li>
                    <li>All Souls St Gabriels School</li>
                    <li>Charters Towers State High School</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Educational Focus:</h4>
                  <p className="text-gray-700 text-sm">Renowned boarding/day schools serving remote rural families throughout North Queensland</p>
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
                  <p className="text-gray-700 text-sm">Charters Towers Hospital (100 Hospital Road)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Medical Services:</h4>
                  <p className="text-gray-700 text-sm">Multiple GP clinics and comprehensive health services</p>
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
              Located in Queenton, Charters Towers, easily accessible for families throughout the historic city.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5139676006193!2d146.27704917310518!3d-20.07079078134947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bd45f168e389339%3A0xb511c0c6f92b5d79!2sGro%20Early%20Learning%20Charters%20Towers!5e0!3m2!1sen!2suk!4v1749235337374!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              title="Map showing location of GRO Early Learning Charters Towers"
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
              Explore the rewarding career paths available at GRO Early Learning in Charters Towers.
            </p>
          </div>

          <LocationJobBoard location="Charters Towers" />
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-gro-orange to-gro-yellow text-white text-center py-16 rounded-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Career in Charters Towers?</h2>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto mb-8">
            We're here to make your move to Charters Towers smooth and welcoming. Reach out to our team for assistance with accommodation, relocation, or learning more about our centre and community life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:ct@groearlylearning.com.au"
              className="btn-gro-darkblue rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
            >
              Email Us
            </a>
            <a 
              href="tel:(07) 4787 1188"
              className="btn-gro-teal rounded-full px-8 py-4 shadow-lg font-bold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <GroChatbot />
    </div>
  );
};

export default ChartersTowersCareersPage;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { timelineSteps } from "@/data/content";
const BenefitsPage = () => {
  // Benefits data structure
  const benefitsCategories = [{
    title: "Health & Wellness",
    icon: "🏥",
    color: "bg-gro-teal/10 text-gro-teal",
    benefits: ["Comprehensive medical, dental, and vision insurance", "Mental health support services", "Wellness program with gym discounts", "Paid sick leave"]
  }, {
    title: "Work-Life Balance",
    icon: "⚖️",
    color: "bg-gro-orange/10 text-gro-orange",
    benefits: ["Generous paid time off", "Flexible scheduling options", "Paid holidays", "Family leave policies", "Summer hours program"]
  }, {
    title: "Professional Development",
    icon: "🎓",
    color: "bg-gro-green/10 text-gro-green",
    benefits: ["Continuing education stipends", "Tuition assistance for ECE degrees", "Regular professional development workshops", "Mentorship program", "Leadership development track"]
  }, {
    title: "Financial Benefits",
    icon: "💰",
    color: "bg-gro-gray/10 text-gro-gray",
    benefits: ["Competitive salary packages", "401(k) retirement plan with company match", "Performance-based bonuses", "Employee referral program", "Annual salary reviews"]
  }];

  // Additional perks
  const additionalPerks = ["Employee childcare discounts", "Free coffee and snacks in staff lounges", "Staff appreciation events", "Birthday celebrations", "Employee recognition program", "Community volunteer opportunities", "Company-sponsored team building events"];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gro-green/10 to-gro-teal/10 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">Benefits & Perks</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              At GRO Early Learning, we believe in taking care of our team so they can focus on 
              what matters most—nurturing and educating children. Explore the comprehensive benefits 
              and perks we offer to support your personal and professional growth.
            </p>
          </div>
        </section>

        {/* Main Benefits Categories */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center px-2">
              Comprehensive Benefits Package
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {benefitsCategories.map((category, index) => <div key={index} className={`rounded-lg p-4 sm:p-6 md:p-8 ${category.color} card-hover transition-all duration-300 hover:shadow-lg`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6">{category.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">{category.title}</h3>
                  <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                    {category.benefits.map((benefit, idx) => <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-current" />
                        <span className="text-xs sm:text-sm md:text-base leading-relaxed">{benefit}</span>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
        </section>

        {/* Additional Perks */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center px-2">Additional Perks</h2>
            <p className="text-center text-gray-700 mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
              Beyond our core benefits, we offer these additional perks to make GRO Early Learning
              an enjoyable and rewarding place to work.
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {additionalPerks.map((perk, index) => <div key={index} className="p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 text-center card-hover transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-slate-100 rounded-md">
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{perk}</span>
                </div>)}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="bg-gro-teal/10 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center md:flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Employee testimonial" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full object-cover border-4 border-white shadow-md" />
                </div>
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex-1">
                  <blockquote className="italic text-gray-700 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    "The benefits at GRO Early Learning have made a real difference in my life. The tuition 
                    assistance program has allowed me to pursue my bachelor's degree in Early Childhood Education, 
                    and the flexible scheduling has helped me maintain a healthy work-life balance."
                  </blockquote>
                  <p className="font-semibold text-sm sm:text-base md:text-lg">Rachel Williams</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Lead Teacher, 4 years at GRO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth & Development */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gro-orange/10 to-gro-green/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center px-2">Professional Growth & Development</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center max-w-4xl mx-auto leading-relaxed text-gray-700 px-2">
              We're committed to helping our team members advance their careers and develop new skills.
              Explore our clear career progression pathway from Assistant Educator to Centre Director.
            </p>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {timelineSteps.map((step, index) => {
              // Define background colors for each card's Key Responsibilities section
              const responsibilityBgColors = ['bg-teal-50',
              // Assistant Educator - light teal
              'bg-green-50',
              // Lead Educator - light green
              'bg-orange-50',
              // Senior Educator - light orange
              'bg-blue-50' // Centre Director - light blue
              ];

              // Define circle background colors for each step
              const circleBgColors = ['bg-teal-600',
              // Assistant Educator - teal
              'bg-green-600',
              // Lead Educator - green
              'bg-orange-600',
              // Senior Educator - orange
              'bg-blue-600' // Centre Director - blue
              ];
              return <div key={index} className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 card-hover transition-all duration-300 hover:shadow-xl">
                    {/* Progression Arrow - only show if not the last item */}
                    {index < timelineSteps.length - 1 && <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="flex items-center">
                          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 hover:text-gro-teal transition-colors duration-300">
                            <path d="M20 6L26 12L20 18M26 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>}
                    
                    {/* Mobile progression arrow - vertical */}
                    {index < timelineSteps.length - 1 && <div className="lg:hidden flex justify-center my-4 -mb-2">
                        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
                          <path d="M6 20L12 26L18 20M12 26V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>}
                    
                    {/* Step header */}
                    <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${circleBgColors[index]} text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl mr-3 sm:mr-4`}>
                        {index + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    
                    {/* Step description */}
                    <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">{step.blurb}</p>
                    
                    {/* Key responsibilities */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h4 className="text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 md:mb-4 text-green-600">Key Responsibilities</h4>
                      <div className={`${responsibilityBgColors[index]} p-2 sm:p-3 md:p-4 rounded-lg`}>
                        <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                          {step.key_responsibilities.map((responsibility, idx) => <li key={idx} className="flex items-start">
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-1 sm:mr-2 md:mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-xs sm:text-xs md:text-sm leading-relaxed">{responsibility}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Progression notes */}
                    <div className="text-xs sm:text-xs md:text-sm text-gray-600 bg-gray-50 p-2 sm:p-3 md:p-4 rounded leading-relaxed">
                      <strong>Progression Notes:</strong> {step.progression_notes}
                    </div>
                  </div>;
            })}
            </div>
            
            
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">Ready to Join Our Team?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed text-gray-700 px-2">
              Explore our current job openings and take the first step toward a rewarding career with 
              GRO Early Learning, where your growth and wellbeing are prioritized.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 max-w-lg mx-auto px-4">
              <Button className="bg-gro-teal hover:bg-gro-teal/90 text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 w-full sm:w-auto" asChild>
                <Link to="/jobs">View Open Positions</Link>
              </Button>
              <Button variant="outline" className="border-gro-orange text-gro-orange hover:bg-gro-orange/10 text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 w-full sm:w-auto" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default BenefitsPage;
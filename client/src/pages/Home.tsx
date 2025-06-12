import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JobCard from "@/components/JobCard";
import { heroContent, faqItems, locations, teamSpotlights } from "@/data/content";
import type { Job } from "@shared/schema";

export default function Home() {
  const { data: jobs = [], isLoading } = useQuery<Job[]>({
    queryKey: ["/api/jobs"],
  });

  // Get featured jobs (first 4)
  const featuredJobs = jobs.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gro-coral/10 via-white to-gro-lime/5 py-12 sm:py-16 lg:py-32 mobile-padding">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="animate-fade-in-up text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight hover:text-gro-teal transition-colors duration-500 text-[#60A5FA]">
                Join Our <span className="hover:text-gro-teal transition-colors duration-300 text-[#f79939]">GRO Early Learning</span> Team
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-slide-in-right">
                {heroContent.subtitle}
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <Button asChild size="lg" className="touch-button bg-gro-coral hover:bg-gro-coral/90 rounded-playful shadow-card hover-lift text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <Link href={heroContent.primaryCTA.href} className="flex items-center justify-center">
                    <i className="fas fa-briefcase mr-2 hover-scale"></i>
                    {heroContent.primaryCTA.label}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="touch-button border-gro-blue-green text-gro-blue-green hover:bg-gro-blue-green hover:text-white rounded-playful text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto">
                  <Link href={heroContent.secondaryCTA.href} className="flex items-center justify-center">
                    {heroContent.secondaryCTA.label}
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <div className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 hover-scale">
                  <i className="fas fa-map-marker-alt text-gro-dark-blue mr-2 hover-scale"></i>
                  <span>3 Locations</span>
                </div>
                <div className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 hover-scale">
                  <i className="fas fa-users text-soft-green mr-2 hover-scale"></i>
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center hover:text-gro-dark-blue transition-colors duration-200 hover-scale">
                  <i className="fas fa-star text-warm-orange mr-2 hover-scale"></i>
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Early childhood educators with children" 
                className="rounded-playful shadow-soft w-full h-auto hover-lift transition-all duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-playful shadow-card hover-lift animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-soft-green/20 rounded-full flex items-center justify-center animate-pulse-subtle">
                    <i className="fas fa-heart text-soft-green text-xl hover-scale"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-sky-blue hover:text-gro-teal transition-colors duration-200">{jobs.length}+ Active Positions</p>
                    <p className="text-sm text-gray-600">Join our team today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Jobs Section */}
      <section className="py-16 sm:py-20 bg-gro-blue-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#4682b4]">Featured Opportunities</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover meaningful career opportunities in early childhood education across our regional locations.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 sm:p-8 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" className="hover:bg-gro-lime/90 text-white font-semibold px-6 sm:px-8 py-3 bg-[#60A5FA]">
              <Link href="/jobs">
                <i className="fas fa-plus mr-2"></i>
                View All Positions
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Locations Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#4682b4]">Our Locations</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover opportunities across Queensland's vibrant regional communities, each offering unique lifestyle benefits and career growth potential.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-gro-coral/5 to-gro-lime/5 rounded-2xl p-6 sm:p-8 text-center hover-lift transition-all duration-300">
                <img 
                  src={location.image} 
                  alt={`${location.name} cityscape`} 
                  className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 sm:mb-6"
                />
                
                <h3 className="text-xl sm:text-2xl font-bold text-gro-dark-blue mb-3 sm:mb-4">{location.name}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{location.description}</p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-gro-dark-blue">Climate</div>
                    <div className="text-gray-600">{location.details.climate}</div>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-gro-dark-blue">Housing</div>
                    <div className="text-gray-600">{location.details.housing}</div>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-gro-dark-blue">Transport</div>
                    <div className="text-gray-600">{location.details.transport}</div>
                  </div>
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-gro-dark-blue">Recreation</div>
                    <div className="text-gray-600">{location.details.recreation}</div>
                  </div>
                </div>
                
                <Button className="bg-gro-blue-green hover:bg-gro-blue-green/90 text-white w-full sm:w-auto">
                  <i className="fas fa-info-circle mr-2"></i>
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gro-lime mb-6">Why Choose Regional Childcare?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're transforming early childhood education in regional Queensland, creating environments where both children and educators thrive.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-heart text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Meaningful Impact</h3>
                    <p className="text-gray-600">Make a genuine difference in regional communities while advancing your career in early childhood education.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-users text-secondary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Supportive Community</h3>
                    <p className="text-gray-600">Join a close-knit team of passionate educators who support each other's professional growth and wellbeing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-trophy text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Excellence in Education</h3>
                    <p className="text-gray-600">Work with state-of-the-art facilities and innovative programs that set new standards in early learning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Educators collaborating" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-gray-600">Staff Satisfaction</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">5★</p>
                  <p className="text-sm text-gray-600">Quality Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#4682b4]">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our educators about their experience working with Regional Childcare.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamSpotlights.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1544005313-94ddf0286df2' : '1507003211169-0a1dd7228f2d'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100`} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-light-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#4682b4]">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about building your career with Regional Childcare.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(0, 5).map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-sm px-6">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180 text-left text-lg font-semibold hover:no-underline text-[#a2bab0]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/faq">
                  View All FAQs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our team of passionate educators and make a meaningful difference in regional Queensland. 
              Your rewarding career in early childhood education starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white hover:bg-gray-50 text-sky-blue border border-sky-blue/20">
                <Link href="/jobs">
                  <i className="fas fa-search mr-2"></i>
                  Browse Jobs
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-warm-peach hover:bg-warm-peach/90 text-charcoal">
                <Link href="/jobs">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply Now
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-light-peach hover:bg-light-peach/90 text-charcoal">
                <Link href="/relocation">
                  <i className="fas fa-truck mr-2"></i>
                  Relocation Support
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-white/90">
              <div>
                <div className="text-3xl font-bold text-secondary">{jobs.length}+</div>
                <div className="text-sm">Open Positions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">3</div>
                <div className="text-sm">Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm">Staff Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

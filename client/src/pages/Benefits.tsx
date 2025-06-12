import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { benefitsData, timelineSteps } from "@/data/content";

export default function Benefits() {
  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-gray-600';
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/20';
      case 'secondary': return 'bg-secondary/20';
      case 'accent': return 'bg-accent/20';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Benefits & Perks</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond competitive compensation, we offer comprehensive support including relocation assistance, 
            training, benefits and exceptional childcare facilities for the professional development and career growth.
          </p>
        </div>

        {/* Comprehensive Benefits Package */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Comprehensive Benefits Package</h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {Object.entries(benefitsData).map(([category, data]) => (
              <div key={category} className="text-center">
                <div className={`w-16 h-16 ${getBgColorClass(data.color)} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${data.icon} ${getIconColorClass(data.color)} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
                <ul className="space-y-3 text-gray-600">
                  {data.items.map((item, index) => (
                    <li key={index}>
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Perks */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Additional Perks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-home text-accent text-xl"></i>
              </div>
              <h3 className="font-semibold text-primary mb-2">Regional lifestyle benefits</h3>
              <p className="text-gray-600 text-sm">Embrace the advantages of regional living with lower cost of living and strong community connections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-car text-primary text-xl"></i>
              </div>
              <h3 className="font-semibold text-primary mb-2">Transport support if required</h3>
              <p className="text-gray-600 text-sm">We provide transport assistance to ensure you can get to work comfortably and reliably.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-utensils text-secondary text-xl"></i>
              </div>
              <h3 className="font-semibold text-primary mb-2">Staff lunches and snacks</h3>
              <p className="text-gray-600 text-sm">Enjoy complimentary meals and snacks throughout your workday, supporting your wellbeing.</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
              alt="Staff testimonial" 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "The comprehensive benefits package at Regional Childcare has been life-changing. From the relocation assistance 
            to the ongoing professional development opportunities, I feel truly supported in my career growth."
          </blockquote>
          <cite className="text-primary font-semibold">- Sarah Johnson, Lead Educator</cite>
        </div>

        {/* Professional Growth & Development */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Professional Growth & Development</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              At GRO Early Learning, your career growth is our priority. We provide comprehensive support, 
              clear pathways, and meaningful opportunities to advance your professional journey.
            </p>
            
            {/* Development Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-teal/10 to-teal/5 p-6 rounded-2xl">
                <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-teal text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-teal mb-3">AU$1,200 Annual Budget</h3>
                <p className="text-gray-600">Dedicated professional development funding plus three paid study days per year</p>
              </div>
              
              <div className="bg-gradient-to-br from-coral/10 to-coral/5 p-6 rounded-2xl">
                <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-coral text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-coral mb-3">University Partnerships</h3>
                <p className="text-gray-600">25% tuition discount with CQU and USQ plus paid study time for teaching degrees</p>
              </div>
              
              <div className="bg-gradient-to-br from-green/10 to-green/5 p-6 rounded-2xl">
                <div className="w-16 h-16 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mobile-alt text-green text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-green mb-3">GROWth App</h3>
                <p className="text-gray-600">Internal micro-learning platform for continuous skill development and knowledge sharing</p>
              </div>
            </div>
          </div>

          {/* Career Pathway Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">Your Career Journey</h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From your first day to leadership roles, we provide structured pathways and mentorship to help you reach your career goals.
            </p>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal via-coral to-green opacity-30"></div>
              
              <div className="space-y-12">
                {timelineSteps.map((step, index) => {
                  const colors = ['teal', 'coral', 'green'];
                  const bgColors = ['from-teal/10 to-teal/5', 'from-coral/10 to-coral/5', 'from-green/10 to-green/5'];
                  const currentColor = colors[index % colors.length];
                  const currentBg = bgColors[index % bgColors.length];
                  
                  return (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className="flex-1 max-w-lg">
                        <div className={`bg-gradient-to-br ${currentBg} p-6 rounded-2xl shadow-sm`}>
                          <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 bg-${currentColor}/20 rounded-full flex items-center justify-center mr-3`}>
                              <span className={`text-${currentColor} font-bold text-lg`}>{index + 1}</span>
                            </div>
                            <h4 className={`text-xl font-bold text-${currentColor}`}>{step.title}</h4>
                          </div>
                          <p className="text-gray-700 mb-4 leading-relaxed">{step.blurb}</p>
                          
                          <div className="mb-4">
                            <h5 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h5>
                            <ul className="space-y-2">
                              {step.key_responsibilities.slice(0, 3).map((resp, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                  <i className={`fas fa-check text-${currentColor} mr-2 mt-1 text-xs`}></i>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className={`bg-white/50 p-3 rounded-lg border border-${currentColor}/20`}>
                            <p className="text-xs text-gray-600 leading-relaxed">{step.progression_notes}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="hidden md:block">
                        <div className={`w-16 h-16 bg-gradient-to-br from-${currentColor} to-${currentColor}/80 rounded-full flex items-center justify-center shadow-lg relative z-10`}>
                          <i className={`fas ${index === 0 ? 'fa-user-plus' : index === 1 ? 'fa-chalkboard-teacher' : index === 2 ? 'fa-users' : 'fa-crown'} text-white text-lg`}></i>
                        </div>
                      </div>
                      
                      {/* Spacer for alignment */}
                      <div className="flex-1 max-w-lg hidden md:block"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-primary mb-4">Ready to Start Your Journey?</h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our team and take advantage of comprehensive career development programs designed to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-teal to-coral hover:from-teal/90 hover:to-coral/90 text-white">
                  <Link href="/jobs">
                    <i className="fas fa-rocket mr-2"></i>
                    Explore Career Opportunities
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-teal text-teal hover:bg-teal hover:text-white">
                  <Link href="/team">
                    <i className="fas fa-users mr-2"></i>
                    Meet Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the difference of working with Regional Childcare. From comprehensive benefits to meaningful 
            career growth, we're committed to supporting your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/jobs">
                <i className="fas fa-search mr-2"></i>
                View Current Opportunities
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">
                <i className="fas fa-question-circle mr-2"></i>
                Have Questions? See FAQ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

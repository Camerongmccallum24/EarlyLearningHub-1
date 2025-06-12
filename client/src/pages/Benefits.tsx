import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { benefitsData, timelineSteps } from "@/data/content";

export default function Benefits() {
  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-gro-blue-green';
      case 'secondary': return 'text-gro-blue-green';
      case 'accent': return 'text-gro-lime';
      case 'wellness': return 'text-gro-teal';
      default: return 'text-gro-blue-green';
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gro-blue-green/15';
      case 'secondary': return 'bg-gro-coral/15';
      case 'accent': return 'bg-gro-lime/15';
      case 'wellness': return 'bg-gro-teal/15';
      default: return 'bg-gro-blue-green/15';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gro-blue-green/5 via-white to-gro-lime/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gro-dark-blue mb-6 font-display">Benefits & Perks</h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Beyond competitive compensation, we offer comprehensive support including relocation assistance, 
              training, benefits and exceptional childcare facilities for professional development and career growth.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Benefits Package */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gro-dark-blue mb-4 font-display">Comprehensive Benefits Package</h2>
            <div className="w-24 h-1 bg-gro-coral mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-4 gap-10">
            {Object.entries(benefitsData).map(([category, data], index) => (
              <div key={category} className="text-center group hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 ${getBgColorClass(data.color)} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <i className={`${data.icon} ${getIconColorClass(data.color)} text-3xl hover-rotate`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gro-dark-blue mb-6 font-display">{category}</h3>
                <ul className="space-y-4 text-gray-700">
                  {data.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                      <div className="font-semibold text-base text-gro-blue-green mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Additional Perks Section */}
      <div className="bg-gradient-to-r from-gro-teal/10 to-gro-coral/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gro-dark-blue mb-4 font-display">Additional Perks</h2>
            <div className="w-24 h-1 bg-gro-lime mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-lime/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-home text-gro-lime text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">Regional Lifestyle Benefits</h3>
              <p className="text-gray-700 leading-relaxed">Embrace the advantages of regional living with lower cost of living and strong community connections.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-blue-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-car text-gro-blue-green text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">Transport Support</h3>
              <p className="text-gray-700 leading-relaxed">We provide transport assistance to ensure you can get to work comfortably and reliably.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-coral/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-utensils text-gro-coral text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">Staff Meals & Snacks</h3>
              <p className="text-gray-700 leading-relaxed">Enjoy complimentary meals and snacks throughout your workday, supporting your wellbeing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gro-coral/10 to-gro-lime/10 rounded-3xl p-12 text-center shadow-lg">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120" 
                  alt="Staff testimonial" 
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gro-coral rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-right text-white text-sm"></i>
                </div>
              </div>
            </div>
            <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
              "The comprehensive benefits package at Regional Childcare has been life-changing. From the relocation assistance 
              to the ongoing professional development opportunities, I feel truly supported in my career growth."
            </blockquote>
            <cite className="text-gro-dark-blue font-bold text-lg">Sarah Johnson</cite>
            <div className="text-gro-coral font-medium">Lead Educator • Mount Isa Centre</div>
          </div>
        </div>
      </div>

      {/* Professional Growth & Development */}
      <div className="bg-gradient-to-br from-gro-blue-green/5 to-gro-lime/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gro-dark-blue mb-4 font-display">Professional Growth & Development</h2>
            <div className="w-24 h-1 bg-gro-teal mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At GRO Early Learning, your career growth is our priority. We provide comprehensive support, 
              clear pathways, and meaningful opportunities to advance your professional journey.
            </p>
          </div>
          
          {/* Development Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-graduation-cap text-gro-teal text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">AU$1,200 Annual Budget</h3>
              <p className="text-gray-700 leading-relaxed">Dedicated professional development funding plus three paid study days per year</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-university text-gro-coral text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">University Partnerships</h3>
              <p className="text-gray-700 leading-relaxed">25% tuition discount with CQU and USQ plus paid study time for teaching degrees</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift group">
              <div className="w-16 h-16 bg-gro-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="fas fa-mobile-alt text-gro-lime text-2xl hover-rotate"></i>
              </div>
              <h3 className="text-xl font-bold text-gro-dark-blue mb-4 font-display">GROWth App</h3>
              <p className="text-gray-700 leading-relaxed">Internal micro-learning platform for continuous skill development and knowledge sharing</p>
            </div>
          </div>

          {/* Career Pathway Timeline */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gro-dark-blue mb-4 font-display">Your Career Journey</h3>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From your first day to leadership roles, we provide structured pathways and mentorship to help you reach your career goals.
              </p>
            </div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-gro-blue-green to-gro-teal rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-br from-gro-blue-green/5 to-gro-teal/5 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-gro-dark-blue mb-4 font-display">{step.title}</h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">{step.blurb}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-gro-blue-green mb-3">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {step.key_responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <i className="fas fa-check text-gro-lime mr-3 mt-1 text-sm"></i>
                              <span className="text-sm leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white/70 p-4 rounded-xl">
                        <h5 className="font-bold text-gro-coral mb-2">Career Progression:</h5>
                        <p className="text-sm text-gray-700 leading-relaxed">{step.progression_notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gro-dark-blue mb-6 font-display">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with GRO Early Learning. From comprehensive benefits to meaningful 
            career growth, we're committed to supporting your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-gro-blue-green to-gro-teal hover:from-gro-blue-green/90 hover:to-gro-teal/90 text-white font-semibold px-8 py-4 text-lg">
              <Link href="/jobs">
                <i className="fas fa-search mr-2"></i>
                View Current Opportunities
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gro-coral text-gro-coral hover:bg-gro-coral hover:text-white font-semibold px-8 py-4 text-lg">
              <Link href="/relocation">
                <i className="fas fa-truck mr-2"></i>
                Relocation Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Professional Growth & Development</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We're committed to fostering your professional growth with clear career progression paths. 
            From Assistant Educator to Centre Director, we'll support your journey every step of the way.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{step.blurb}</p>
                        <div className="text-xs text-gray-500">
                          {step.progression_notes}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h4 className="font-medium text-primary mb-2">Key Responsibilities:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {step.key_responsibilities.slice(0, 2).map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <i className="fas fa-check text-accent mr-2 mt-1 text-xs"></i>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8">
                        <div className="bg-secondary/5 p-4 rounded-lg">
                          <h4 className="font-medium text-primary mb-2">Key Responsibilities:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {step.key_responsibilities.slice(0, 2).map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <i className="fas fa-check text-accent mr-2 mt-1 text-xs"></i>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center relative z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="w-1/2 pl-8">
                        <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{step.blurb}</p>
                        <div className="text-xs text-gray-500">
                          {step.progression_notes}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
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

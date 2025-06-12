import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Team() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The heart of Regional Childcare is our dedicated team of educators, administrators, and 
            support staff who bring passion, expertise, and care to everything they do.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Leadership Team</h2>
          <div className="flex justify-center">
            <div className="max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                  alt="Coraline Dufroux, Founder" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-semibold text-primary mb-2">Coraline Dufroux</h3>
                <p className="text-secondary font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founded Regional Childcare from firsthand experience of childcare gaps in small towns. 
                  Committed to transforming regional childcare through investment in environments, resources, and staff quality. 
                  Coraline believes that exceptional early childhood education is achievable everywhere, not just in major cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Centre Directors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Centre Directors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                alt="David Chen, Mount Isa Director" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-primary mb-1">David Chen</h3>
              <p className="text-accent text-sm mb-2">Mount Isa Centre Director</p>
              <p className="text-gray-600 text-xs">
                Leading our Mount Isa operations with expertise in early childhood curriculum and community engagement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                alt="Alicia Gomez, Moranbah Director" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-primary mb-1">Alicia Gomez</h3>
              <p className="text-accent text-sm mb-2">Moranbah Centre Director</p>
              <p className="text-gray-600 text-xs">
                Bringing innovative programming and family-centered approaches to our Moranbah community.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                alt="Michael Rodriguez, Charters Towers Director" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-primary mb-1">Michael Rodriguez</h3>
              <p className="text-accent text-sm mb-2">Charters Towers Centre Director</p>
              <p className="text-gray-600 text-xs">
                Fostering strong community partnerships and heritage-rich learning experiences in Charters Towers.
              </p>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Our Team Values</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-handshake text-secondary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Growth Mindset</h3>
                    <p className="text-gray-600">
                      We embrace challenges as opportunities to learn and stay current with educational best practices 
                      and child development research.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-seedling text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Compassionate Care</h3>
                    <p className="text-gray-600">
                      We approach our work with empathy, understanding, and genuine care for the children, 
                      families, and each other in our community.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Collaboration</h3>
                    <p className="text-gray-600">
                      We work together, share knowledge, and support each other to create the most enriching 
                      learning experiences for every child.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">What Our Team Says</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="Jane Doe testimonial" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">Jane Doe</h4>
                  <p className="text-sm text-gray-600">Lead Educator, Mount Isa</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Regional Childcare's nature-play focus makes every day an adventure! The supportive team environment 
                and professional development opportunities have really helped me grow in my career."
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="Ahmed Khan testimonial" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">Ahmed Khan</h4>
                  <p className="text-sm text-gray-600">Assistant Educator, Moranbah</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I love the supportive team and growth opportunities here. The relocation assistance made my move 
                to Moranbah seamless, and I've found a real sense of community both at work and in town."
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="Lia Chang testimonial" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">Lia Chang</h4>
                  <p className="text-sm text-gray-600">Centre Director, Charters Towers</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Building community partnerships has been incredibly rewarding. The autonomy and support from 
                leadership allows me to make a real impact while developing my management skills."
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Growing Team */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate educators and staff who share our vision of providing 
            exceptional early learning experiences in regional communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/jobs">
                <i className="fas fa-search mr-2"></i>
                View Open Positions
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/benefits">
                <i className="fas fa-gift mr-2"></i>
                See Benefits & Perks
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

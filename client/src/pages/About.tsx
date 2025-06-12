import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gro-blue-green mb-4">About Regional Childcare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to nurturing young minds with love, creativity, and individualized care, offering flexible and 
            customized learning journeys in the towns within a nurturing environment.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Regional Childcare team" 
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Philosophy */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#4682b4]">Our Philosophy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Regional Childcare, we believe each child is unique and capable. We focus on creating engaging 
              environments that foster play-based learning, allowing children to explore their curiosities through 
              hands-on experiences. Our educators guide and support each child's individual learning journey.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We recognize and value the important role of families in children's first educators. We strive to build 
              strong partnerships between families and communities to create meaningful experiences that reflect 
              children's interests and cultural backgrounds.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name – GRO – reflects our commitment to helping children grow in all aspects of their development: 
              physically, emotionally, socially, and intellectually, in partnership with their families, friends, and 
              communities.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
              alt="Children playing and learning" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-seedling text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Play-Based Learning</h3>
              <p className="text-gray-600">
                We believe children learn best through play. Our educators create environments that 
                support exploratory play and learning experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Community Connection</h3>
              <p className="text-gray-600">
                We value strong relationships with families and the wider community, recognizing that 
                collective support enhances children's learning experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                We celebrate diversity and create inclusive environments where every child feels valued, 
                respected, and able to participate fully.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join GRO */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Join Regional Childcare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-lightbulb text-primary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Meaningful Impact</h3>
                <p className="text-gray-600 text-sm">Make a difference in young lives while building your career in early childhood education.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-graduation-cap text-secondary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Professional Development</h3>
                <p className="text-gray-600 text-sm">Access ongoing training, career progression paths, and professional development opportunities.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-home text-accent"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Nurturing Environment</h3>
                <p className="text-gray-600 text-sm">Work in supportive teams with advanced equipment and inspiring spaces for both children and educators.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-primary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Community-Centered</h3>
                <p className="text-gray-600 text-sm">Be part of tight-knit regional communities where your work makes a visible difference.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-dollar-sign text-accent"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Extras That Matter</h3>
                <p className="text-gray-600 text-sm">Enjoy competitive pay, benefits, and support programs including relocation assistance.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-secondary"></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">We're Growing</h3>
                <p className="text-gray-600 text-sm">New centres opening soon in Moranbah and Charters Towers - come grow with us!</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Become Part of Our Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the Regional Childcare family of dedicated educators and staff. If you're passionate about 
            delivering outstanding early learning experiences, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/jobs">
                <i className="fas fa-search mr-2"></i>
                View Open Opportunities
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/team">
                <i className="fas fa-users mr-2"></i>
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

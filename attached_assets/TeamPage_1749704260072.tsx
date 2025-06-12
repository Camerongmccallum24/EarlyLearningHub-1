import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Team member data
const leadershipTeam = [{
  name: "Coraline Dufroux",
  title: "Founder",
  image: "/Coraline_Dufroux (2).jpeg",
  bio: "Founded by Coraline Dufroux, GRO was born from firsthand experience of the childcare gaps in small towns. With a deep commitment to transforming regional childcare, the organisation has invested hundreds of thousands into uplifting environments, resources, and staff quality to elevate industry standards."
}];
const centerDirectors = [{
  name: "David Chen",
  title: "Mount Isa Center Director",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"
}, {
  name: "Alicia Gomez",
  title: "Moranbah Center Director",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
}, {
  name: "Michael Rodriguez",
  title: "Charters Towers Center Director",
  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop"
}];
const TeamPage = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gro-orange/15 to-gro-green/10 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-gro-darkblue drop-shadow-md">Meet Our Team</h1>
            <p className="text-lg lg:text-2xl text-gro-gray max-w-3xl mx-auto leading-relaxed">
              The heart of GRO Early Learning is our dedicated team of educators, administrators, and 
              support staff who bring passion, expertise, and care to everything they do.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center px-0">
              {leadershipTeam.map((member, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover max-w-md mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gro-teal font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Center Directors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Center Directors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
              {centerDirectors.map((director, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center card-hover w-full">
                  <div className="h-40 sm:h-48 lg:h-52 overflow-hidden">
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg font-semibold mb-2">{director.name}</h3>
                    <p className="text-gro-green">{director.title}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gro-teal/20 rounded-full blur-xl"></div>
                  <img alt="Team collaboration" className="rounded-lg shadow-lg w-full h-auto object-cover" src="/Gro-Team.jpg" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team Values</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gro-teal">Collaboration</h3>
                    <p className="text-gray-700">
                      We believe that great ideas come from working together. Our team members support each other, 
                      share knowledge, and collaborate to create the best learning experiences for children.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gro-orange">Growth Mindset</h3>
                    <p className="text-gray-700">
                      We embrace challenges and see them as opportunities to learn and improve. Our team is committed 
                      to continuous professional development and staying current with best practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gro-green">Compassionate Care</h3>
                    <p className="text-gray-700">
                      We approach our work with empathy, understanding, and genuine care for children, families, 
                      and each other, creating a supportive community for everyone involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-gradient-to-br from-gro-teal/20 to-gro-orange/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're always looking for passionate educators and staff who share our commitment to 
              providing exceptional early learning experiences. Explore our current openings and become 
              part of the GRO family.
            </p>
            <a href="/jobs" className="inline-block bg-gro-teal hover:bg-gro-teal/90 text-white font-medium py-3 px-6 rounded-md transition-colors">
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default TeamPage;
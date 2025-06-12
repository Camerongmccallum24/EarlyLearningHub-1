import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Color classes for cards
const colorClasses = [{
  border: "border-gro-green",
  icon: "text-gro-green",
  title: "text-gro-green"
}, {
  border: "border-gro-blue",
  icon: "text-gro-blue",
  title: "text-gro-blue"
}, {
  border: "border-gro-orange",
  icon: "text-gro-orange",
  title: "text-gro-orange"
}, {
  border: "border-gro-teal",
  icon: "text-gro-teal",
  title: "text-gro-teal"
}, {
  border: "border-gro-darkblue",
  icon: "text-gro-darkblue",
  title: "text-gro-darkblue"
}, {
  border: "border-gro-yellow",
  icon: "text-gro-yellow",
  title: "text-gro-yellow"
}];

// Data for our values cards
const valuesItems = [{
  title: "Play-Based Learning",
  text: "We believe children learn best through play. Our educators create environments that encourage exploration, curiosity, and hands-on learning experiences."
}, {
  title: "Community Connection",
  text: "We value strong relationships with families and the wider community, recognizing that these connections enrich children's learning experiences."
}, {
  title: "Inclusivity",
  text: "We celebrate diversity and create inclusive environments where every child feels valued, respected, and able to participate fully."
}];

// Data for highlight cards
const highlightItems = [{
  title: "Meaningful Impact",
  text: "Make a difference in regional communities by delivering high-quality early learning experiences."
}, {
  title: "Professional Development",
  text: "Grow your career with access to mentorship, training, and leadership pathways."
}, {
  title: "Nurturing Environment",
  text: "Supportive teams and thoughtfully designed spaces let you focus, reflect, and thrive."
}, {
  title: "Community-Centered",
  text: "Family-founded and locally rooted, we value strong relationships with our community."
}, {
  title: "Extras That Matter",
  text: "On-site meals by chefs and outdoor play areas support wellbeing and creativity."
}, {
  title: "We're Growing",
  text: "New centres opening soon in Moranbah and Charters Towers – come grow with us!"
}];

// Reusable Card Component
interface ValueCardProps {
  borderClass: string;
  iconClass?: string;
  titleClass?: string;
  title: string;
  text: string;
  showIcon?: boolean;
}
const ValueCard: FC<ValueCardProps> = ({
  borderClass,
  iconClass = "",
  titleClass = "",
  title,
  text,
  showIcon = false
}) => <li className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${borderClass} card-hover`} tabIndex={0}>
    <div className="flex items-center mb-3">
      {showIcon && <CheckCircle className={`${iconClass} h-5 w-5 mr-2`} aria-hidden="true" />}
      <h3 className={`text-xl font-semibold ${titleClass}`}>{title}</h3>
    </div>
    <p className="text-gro-gray">{text}</p>
  </li>;
const AboutPage: FC = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gro-green/20 via-gro-blue/15 to-gro-teal/10 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-gro-darkblue drop-shadow-md">
              About GRO Early Learning
            </h1>
            <p className="text-lg lg:text-2xl text-gro-gray max-w-3xl mx-auto leading-relaxed">
              Nurturing growth, inspiring learning, and building brighter futures for children in regional communities across Queensland.
            </p>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gro-darkblue">
                Our Philosophy
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="mb-4 text-gro-gray">
                  At GRO Early Learning, we believe each child is unique and capable. We focus on creating engaging environments that foster play-based learning, allowing children to explore their interests, develop skills, and build confidence.
                </p>
                <p className="mb-4 text-gro-gray">
                  We recognize and value the important role of families as children's first educators. We strive to build strong partnerships with families and communities to create meaningful learning experiences that reflect children's interests and cultural backgrounds.
                </p>
                <p className="text-gro-gray">
                  Our name—GRO—reflects our commitment to helping children grow in all aspects of their development. We provide a nurturing environment where children can thrive socially, emotionally, physically, and intellectually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gro-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gro-darkblue">
              Our Values
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Our Values">
              {valuesItems.map((item, idx) => {
              const color = colorClasses[idx % colorClasses.length];
              return <ValueCard key={idx} borderClass={color.border} iconClass={color.icon} titleClass={color.title} title={item.title} text={item.text} />;
            })}
            </ul>
          </div>
        </section>

        {/* SVG Tick Highlights */}
        <section className="mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gro-darkblue">
              Why Join GRO
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Highlights">
              {highlightItems.map((item, idx) => {
              const color = colorClasses[idx % colorClasses.length];
              return <ValueCard key={idx} borderClass={color.border} iconClass={color.icon} titleClass={color.title} title={item.title} text={item.text} showIcon={true} />;
            })}
            </ul>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 bg-gradient-to-br from-gro-teal/20 to-gro-green/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gro-darkblue">
              Become Part of Our Story
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gro-gray">
              Join the GRO family of dedicated educators and staff—if you’re passionate about delivering outstanding early-learning experiences, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gro-orange hover:bg-gro-orange/90 text-white" asChild>
                <Link to="/jobs">
                  View Current Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" className="border-gro-teal text-gro-teal hover:bg-gro-teal/10" asChild>
                <Link to="/benefits">Explore Benefits</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default AboutPage;
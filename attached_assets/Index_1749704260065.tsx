
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedJobs from "@/components/FeaturedJobs";
import WhyJoinUs from "@/components/WhyJoinUs";
import Testimonials from "@/components/Testimonials";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import GroChatbot from "@/components/GroChatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedJobs />
        <WhyJoinUs />
        <Testimonials />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
      <GroChatbot />
    </div>
  );
};

export default Index;

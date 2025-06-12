
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import GroChatbot from "@/components/GroChatbot";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gro-orange/10 to-gro-green/10 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about building your career with GRO Early Learning
            </p>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <GroChatbot />
    </div>
  );
};

export default FAQPage;

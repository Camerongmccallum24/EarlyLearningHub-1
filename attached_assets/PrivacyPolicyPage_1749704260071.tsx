
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gro-darkblue mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold text-gro-darkblue mb-4">Data Collection</h2>
              <p className="mb-6">
                When you apply for a position with GRO Early Learning, we collect the personal information 
                you provide in your application, including your name, contact details, and resume.
              </p>

              <h2 className="text-2xl font-semibold text-gro-darkblue mb-4">Use of Information</h2>
              <p className="mb-6">
                We use your personal information solely for recruitment purposes, including evaluating your 
                application, contacting you about the position, and conducting background checks if required.
              </p>

              <h2 className="text-2xl font-semibold text-gro-darkblue mb-4">Data Storage</h2>
              <p className="mb-6">
                Your application data is stored securely and retained for a reasonable period to allow for 
                consideration of your application and potential future opportunities.
              </p>

              <h2 className="text-2xl font-semibold text-gro-darkblue mb-4">Your Rights</h2>
              <p className="mb-6">
                You have the right to access, update, or request deletion of your personal information. 
                Contact us at careers@groearlylearning.com.au for any privacy-related inquiries.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

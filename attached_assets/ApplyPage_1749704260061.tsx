
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

const ApplyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;

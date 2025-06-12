
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobDetail from "@/components/JobDetail";

const JobDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <JobDetail />
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailPage;

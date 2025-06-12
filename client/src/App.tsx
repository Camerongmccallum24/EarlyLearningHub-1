import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import GroChatbot from "@/components/GroChatbot";
import Home from "@/pages/Home";
import Jobs from "@/pages/Jobs";
import JobDetail from "@/pages/JobDetail";
import About from "@/pages/About";
import Benefits from "@/pages/Benefits";
import Team from "@/pages/Team";
import FAQ from "@/pages/FAQ";
import RelocationSupport from "@/pages/RelocationSupport";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/jobs/:id" component={JobDetail} />
      <Route path="/about" component={About} />
      <Route path="/benefits" component={Benefits} />
      <Route path="/team" component={Team} />
      <Route path="/faq" component={FAQ} />
      <Route path="/relocation" component={RelocationSupport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pb-16 md:pb-0">
            <Router />
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
        <GroChatbot />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

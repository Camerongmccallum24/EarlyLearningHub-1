import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/benefits", label: "Benefits" },
    { href: "/relocation", label: "Relocation" },
    { href: "/team", label: "Team" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-light-gray">
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover-scale transition-transform duration-300 touch-target">
            <div className="flex items-baseline">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gro-blue-green hover:animate-bounce-gentle transition-all duration-200">g</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gro-dark-blue hover:animate-bounce-gentle transition-all duration-200" style={{animationDelay: '0.1s'}}>r</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gro-lime hover:animate-bounce-gentle transition-all duration-200" style={{animationDelay: '0.2s'}}>o</span>
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-xl font-bold text-charcoal uppercase tracking-wide">EARLY LEARNING</h1>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 font-medium hover-scale button-press relative ${
                  isActive(item.href)
                    ? "text-gro-dark-blue"
                    : "text-gro-blue-green hover:text-gro-dark-blue"
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gro-dark-blue after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden touch-button hover:bg-gro-lime/20 min-h-[44px] min-w-[44px]">
                <i className="fas fa-bars text-xl hover-rotate transition-transform duration-300"></i>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:w-80 bg-gradient-to-br from-gro-blue-green/5 to-gro-lime/5">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="text-center pb-4 border-b border-gro-blue-green/20">
                  <h2 className="text-xl font-bold text-[#60A5FA]">Menu</h2>
                </div>
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base transition-all duration-300 font-medium p-4 rounded-lg touch-card min-h-[44px] flex items-center ${
                      isActive(item.href)
                        ? "text-white bg-gro-dark-blue shadow-lg"
                        : "text-gro-blue-green hover:text-white hover:bg-gro-coral"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="fas fa-chevron-right mr-3 text-sm"></i>
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

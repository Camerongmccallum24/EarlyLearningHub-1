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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover-scale transition-transform duration-300">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gro-blue-green hover:animate-bounce-gentle transition-all duration-200">g</span>
              <span className="text-4xl font-bold text-gro-coral hover:animate-bounce-gentle transition-all duration-200" style={{animationDelay: '0.1s'}}>r</span>
              <span className="text-4xl font-bold text-gro-lime hover:animate-bounce-gentle transition-all duration-200" style={{animationDelay: '0.2s'}}>o</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal uppercase tracking-wide">EARLY LEARNING</h1>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 font-medium hover-scale button-press relative ${
                  isActive(item.href)
                    ? "text-gro-coral"
                    : "text-gro-blue-green hover:text-gro-coral"
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gro-coral after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover-scale button-press transition-all duration-200 hover:bg-gro-lime/20">
                <i className="fas fa-bars text-xl hover-rotate transition-transform duration-300"></i>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg transition-colors font-medium ${
                      isActive(item.href)
                        ? "text-warm-orange"
                        : "text-sky-blue hover:text-warm-orange"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
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

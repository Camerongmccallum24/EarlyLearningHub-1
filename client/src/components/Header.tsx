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
    <header className="bg-white shadow-soft sticky top-0 z-50 border-b border-orange-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-warm-orange rounded-playful flex items-center justify-center shadow-card">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-sky-blue">GRO Early Learning</h1>
              <p className="text-sm text-warm-orange font-medium">Building Bright Futures</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  isActive(item.href)
                    ? "text-warm-orange"
                    : "text-sky-blue hover:text-warm-orange"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <i className="fas fa-bars text-xl"></i>
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

import { Link, useLocation } from "wouter";
import { Home, Briefcase, Users, HelpCircle, MapPin } from "lucide-react";

export default function MobileBottomNav() {
  const [location] = useLocation();

  const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/about", label: "About", icon: Users },
    { href: "/relocation", label: "Support", icon: MapPin },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="mobile-nav md:hidden">
      {navigationItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-nav-item ${
              isActive(item.href)
                ? "text-gro-dark-blue"
                : "text-gray-600"
            }`}
          >
            <IconComponent size={20} className="mb-1" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
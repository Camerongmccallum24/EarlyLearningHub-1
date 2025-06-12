import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gro-dark-blue text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 bg-gro-coral rounded-lg flex items-center justify-center">
                <i className="fas fa-child text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">GRO Early Learning</h3>
                <p className="text-xs text-[#374151]">Career Opportunities</p>
              </div>
            </div>
            <p className="text-[#374151] mb-4 sm:mb-6 leading-relaxed">
              Transforming early childhood education in regional Queensland, one community at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#374151] hover:text-gro-lime transition-all duration-300 hover-scale button-press">
                <i className="fab fa-facebook text-xl hover-rotate"></i>
              </a>
              <a href="#" className="text-[#374151] hover:text-gro-lime transition-all duration-300 hover-scale button-press">
                <i className="fab fa-linkedin text-xl hover-rotate"></i>
              </a>
              <a href="#" className="text-[#374151] hover:text-gro-lime transition-all duration-300 hover-scale button-press">
                <i className="fab fa-instagram text-xl hover-rotate"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-gro-lime">Quick Links</h4>
            <ul className="space-y-2 text-[#374151]">
              <li><Link href="/jobs" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Current Opportunities</Link></li>
              <li><Link href="/about" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">About Us</Link></li>
              <li><Link href="/benefits" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Benefits & Perks</Link></li>
              <li><Link href="/team" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">Meet Our Team</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-gro-lime">Our Locations</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Mount Isa Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Moranbah Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Charters Towers Centre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-gro-lime">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-gro-lime"></i>
                <span className="text-sm">careers@gro.com.au</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 text-gro-lime"></i>
                <span className="text-sm">1800 476 123</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 text-gro-lime mt-1"></i>
                <span className="text-sm">Queensland, Australia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gro-blue-green/30 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              © 2024 GRO Early Learning. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

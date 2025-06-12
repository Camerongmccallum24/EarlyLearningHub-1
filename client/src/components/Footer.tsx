import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-child text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Regional Childcare</h3>
                <p className="text-xs text-gray-400">Early Learning Careers</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming early childhood education in regional Queensland, one community at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover-scale button-press">
                <i className="fab fa-facebook text-xl hover-rotate"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover-scale button-press">
                <i className="fab fa-linkedin text-xl hover-rotate"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover-scale button-press">
                <i className="fab fa-instagram text-xl hover-rotate"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 hover:text-gro-dark-blue transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/jobs" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Current Opportunities</Link></li>
              <li><Link href="/about" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">About Us</Link></li>
              <li><Link href="/benefits" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Benefits & Perks</Link></li>
              <li><Link href="/team" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">Meet Our Team</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mount Isa Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Moranbah Centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Charters Towers Centre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-primary"></i>
                <span>careers@regionalchildcare.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 text-primary"></i>
                <span>1800 123 456</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 text-primary mt-1"></i>
                <span>Queensland, Australia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Regional Childcare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

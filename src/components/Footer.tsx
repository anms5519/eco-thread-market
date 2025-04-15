
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eco-tertiary dark:bg-eco-dark text-eco-dark dark:text-white pt-12 pb-6">
      <div className="eco-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-eco-primary dark:text-eco-secondary">EcoThread</h3>
            <p className="text-sm">Connecting conscious consumers with sustainable and ethical fashion brands.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-eco-primary dark:text-eco-secondary hover:text-eco-secondary dark:hover:text-eco-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-eco-primary dark:text-eco-secondary hover:text-eco-secondary dark:hover:text-eco-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-eco-primary dark:text-eco-secondary hover:text-eco-secondary dark:hover:text-eco-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@ecothread.com" className="text-eco-primary dark:text-eco-secondary hover:text-eco-secondary dark:hover:text-eco-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/women" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Women</Link></li>
              <li><Link to="/products/men" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Men</Link></li>
              <li><Link to="/products/accessories" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Accessories</Link></li>
              <li><Link to="/products/bestsellers" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Best Sellers</Link></li>
              <li><Link to="/products/new" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">About Us</Link></li>
              <li><Link to="/mission" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Our Mission</Link></li>
              <li><Link to="/sustainability" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Sustainability</Link></li>
              <li><Link to="/brands" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Our Brands</Link></li>
              <li><Link to="/contact" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faqs" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Returns</Link></li>
              <li><Link to="/size-guide" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Size Guide</Link></li>
              <li><Link to="/privacy" className="hover:text-eco-primary dark:hover:text-eco-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-eco-accent dark:border-eco-dark text-sm text-center">
          <p>&copy; {new Date().getFullYear()} EcoThread. All rights reserved.</p>
          <p className="mt-2 text-xs">We're committed to reducing our carbon footprint. This website is powered by renewable energy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

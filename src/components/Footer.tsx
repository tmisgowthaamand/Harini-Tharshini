import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-gold text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H&T</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                Harini & Tharshini
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Premium edible oils from Madurai's trusted woman-owned MSME enterprise. 
              Pure oils for your family's health and prosperity.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-white/90 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/distributor" className="text-white/90 hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg">Our Products</h3>
            <ul className="space-y-2 text-white/90">
              <li>Coconut Oil</li>
              <li>Sesame Oil</li>
              <li>Groundnut Oil</li>
              <li>Sunflower Oil</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-white/80" />
                <div className="text-white/90 text-sm">
                  <p>NO.36, Swamy Sannathi Street</p>
                  <p>Madurai, Tamil Nadu - 625001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-white/80" />
                <div className="text-white/90">
                  <a href="tel:+919789342841" className="hover:text-white transition-colors block">
                    +91 97893 42841
                  </a>
                  <a href="tel:+919790449439" className="hover:text-white transition-colors block">
                    +91 97904 49439
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm mb-2">Email Us</h4>
                <div className="space-y-1">
                  <a 
                    href="mailto:hariniandtharshinitraders@gmail.com" 
                    className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded"
                  >
                    <Mail size={14} />
                    <span>hariniandtharshinitraders@gmail.com</span>
                  </a>
                  <a 
                    href="mailto:contact@hariniandtharshini.store" 
                    className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm bg-blue-500/20 hover:bg-blue-500/30 px-2 py-1 rounded"
                  >
                    <Mail size={14} />
                    <span>contact@hariniandtharshini.store</span>
                  </a>
                </div>
              </div>
              
              {/* WhatsApp Buttons */}
              <div className="space-y-2">
                <h4 className="font-semibold text-white text-sm mb-2">Quick WhatsApp</h4>
                <div className="space-y-1">
                  <a 
                    href="https://wa.me/+919789342841" 
                    className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm bg-green/20 hover:bg-green/30 px-2 py-1 rounded"
                  >
                    <MessageCircle size={14} />
                    <span>+91 97893 42841</span>
                  </a>
                  <a 
                    href="https://wa.me/+919790449439" 
                    className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors text-sm bg-green/20 hover:bg-green/30 px-2 py-1 rounded"
                  >
                    <MessageCircle size={14} />
                    <span>+91 97904 49439</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2025 Harini & Tharshini Traders. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/shipping-delivery-policy" className="hover:text-white transition-colors">
                Shipping & Delivery Policy
              </Link>
              <Link to="/cancellation-refund-policy" className="hover:text-white transition-colors">
                Cancellation & Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
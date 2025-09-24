import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface NavigationProps {
  cartCount?: number;
}

const Navigation = ({ cartCount = 0 }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = location.pathname === '/';
  const navClasses = isHomepage && !isScrolled ? 'nav-transparent text-white' : 'nav-solid text-white';

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Distributors', path: '/distributor' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">H&T</span>
            </div>
            <span className="font-playfair font-bold text-xl">
              Harini & Tharshini
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-nunito font-semibold hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/+919789342841"
              className="hidden sm:flex items-center space-x-2 bg-green/10 hover:bg-green/20 px-3 py-2 rounded-md transition-colors"
            >
              <Phone size={16} />
              <span className="font-nunito text-sm font-semibold">WhatsApp</span>
            </a>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-deep-red text-white text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-primary shadow-deep">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 font-nunito font-semibold text-white hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/+919789342841"
                className="flex items-center space-x-2 py-2 text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={16} />
                <span className="font-nunito font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
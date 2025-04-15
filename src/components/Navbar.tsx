
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Menu, X, Heart, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <nav className="bg-white dark:bg-card shadow-sm sticky top-0 z-50">
      <div className="eco-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-eco-primary text-xl font-bold">Eco<span className="text-eco-secondary">Thread</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-eco-dark hover:text-eco-primary transition-colors">Shop</Link>
            <Link to="/brands" className="text-eco-dark hover:text-eco-primary transition-colors">Brands</Link>
            <Link to="/about" className="text-eco-dark hover:text-eco-primary transition-colors">About</Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {searchVisible && (
              <div className="relative animate-fadeIn">
                <Input 
                  type="text" 
                  placeholder="Search sustainable fashion..." 
                  className="w-64 pr-8 focus:border-eco-secondary" 
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-eco-gray" />
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSearch} 
                className="text-eco-dark hover:text-eco-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-eco-dark hover:text-eco-primary"
                asChild
              >
                <Link to="/favorites">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-eco-dark hover:text-eco-primary"
                asChild
              >
                <Link to="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-eco-dark hover:text-eco-primary relative"
                asChild
              >
                <Link to="/cart">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute top-0 right-0 bg-eco-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Nav Icons */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch} 
              className="text-eco-dark hover:text-eco-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-eco-dark hover:text-eco-primary relative"
              asChild
            >
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-eco-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-eco-dark hover:text-eco-primary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {searchVisible && isMobile && (
          <div className="py-2 px-2 animate-slideIn">
            <Input 
              type="text" 
              placeholder="Search sustainable fashion..." 
              className="w-full focus:border-eco-secondary" 
            />
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-card py-4 animate-slideIn">
          <div className="eco-container space-y-3">
            <Link to="/products" className="block py-2 text-eco-dark hover:text-eco-primary transition-colors">Shop</Link>
            <Link to="/brands" className="block py-2 text-eco-dark hover:text-eco-primary transition-colors">Brands</Link>
            <Link to="/about" className="block py-2 text-eco-dark hover:text-eco-primary transition-colors">About</Link>
            <Link to="/favorites" className="block py-2 text-eco-dark hover:text-eco-primary transition-colors">Favorites</Link>
            <Link to="/account" className="block py-2 text-eco-dark hover:text-eco-primary transition-colors">Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

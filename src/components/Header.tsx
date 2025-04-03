
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">Melissa Wilson</h1>
            <span className="hidden md:inline-block ml-2 text-sm text-secondary/70">Trust Attorney</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#workshop" className="text-secondary hover:text-primary transition-colors">Workshop</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#faq" className="text-secondary hover:text-primary transition-colors">FAQ</a>
            <Button className="btn-primary">Sign Up for Free</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#workshop" 
              className="text-secondary hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Workshop
            </a>
            <a 
              href="#about" 
              className="text-secondary hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#faq" 
              className="text-secondary hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="btn-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up for Free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


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
            <h1 className="text-2xl font-serif font-bold text-primary">Integrity Legal</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#workshop" className="text-secondary hover:text-primary transition-colors">Workshop</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <a href="#faq" className="text-secondary hover:text-primary transition-colors">FAQ</a>
            <a href="https://calendly.com/melissa-dzxu/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full">Sign Up for Free</Button>
            </a>
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
            <a 
              href="https://calendly.com/melissa-dzxu/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-accent hover:bg-accent/90 text-white w-full rounded-full">
                Sign Up for Free
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

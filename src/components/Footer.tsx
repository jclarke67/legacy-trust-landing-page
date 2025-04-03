
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-bold mb-2">Melissa Wilson</h3>
            <p className="text-white/80">Trust & Estate Planning Attorney</p>
          </div>
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-white/80">123 Legal Street, Suite 789</p>
            <p className="text-white/80">Anytown, ST 12345</p>
            <p className="text-white/80">Phone: (555) 123-4567</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80">Office Hours:</p>
            <p className="text-white/80">Monday - Friday: 9am - 5pm</p>
            <p className="text-white/80">Weekends: By appointment only</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Integrity Legal. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/integrity_legal_fl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              <span>@integrity_legal_fl</span>
            </a>
            
            <a 
              href="https://www.facebook.com/integritylegal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            
            <a 
              href="mailto:contact@integritylegal.com" 
              className="text-white/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-white/60 text-sm mt-4">
          <a href="https://integritylegal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Website: Integrity Legal
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

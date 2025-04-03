
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Professional office setting" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Secure Your Legacy with a Trusted Estate Plan
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Protect your assets and provide for your loved ones with personalized legacy planning services from a dedicated attorney.
          </p>
          <Button className="btn-primary text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

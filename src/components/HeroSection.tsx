
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.pixabay.com/photo/2017/06/27/11/48/team-spirit-2447163_1280.jpg" 
          alt="Legal consultation" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Secure Your Legacy: Free Trust & Estate Planning Workshop
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Join Integrity Legal for an expert-led session on protecting your assets and ensuring your family's future.
          </p>
          <a href="https://calendly.com/melissa-dzxu/30min" target="_blank" rel="noopener noreferrer" className="block sm:inline-block">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-full text-lg w-full sm:w-auto">
              Reserve Your Spot – Limited Seats Available
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

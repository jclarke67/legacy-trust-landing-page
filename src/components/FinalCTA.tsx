
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't leave your family's future to chance. Join us for this essential workshop!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Take the first step toward peace of mind and discover how a personalized estate plan can protect what matters most.</p>
        <a href="https://calendly.com/melissa-dzxu/30min" target="_blank" rel="noopener noreferrer" className="block sm:inline-block">
          <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 rounded-full text-lg flex items-center gap-2 mx-auto w-full sm:w-auto justify-center">
            Claim Your Free Spot Now
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default FinalCTA;

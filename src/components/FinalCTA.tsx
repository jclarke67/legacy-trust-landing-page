
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <div className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Secure Your Legacy?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Spots are limited—secure your seat today! Take the first step toward peace of mind and discover how a personalized estate plan can protect what matters most.
        </p>
        <Button className="btn-primary text-lg px-8 py-6 flex items-center gap-2">
          Claim Your Free Spot Now
          <ArrowRight className="ml-1 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default FinalCTA;

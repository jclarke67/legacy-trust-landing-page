
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <div className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Secure Your Legacy?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Take the first step toward peace of mind. Schedule your free consultation today and discover how a personalized estate plan can protect what matters most.
        </p>
        <Button className="btn-primary text-lg">
          Book a Consultation Now
        </Button>
      </div>
    </div>
  );
};

export default FinalCTA;

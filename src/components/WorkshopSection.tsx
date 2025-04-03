
import { Calendar, MapPin, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WorkshopSection = () => {
  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Upcoming Free Workshop
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">Estate Planning Workshop</h3>
              <p className="text-secondary/80">
                Join our free educational seminar to learn essential strategies for protecting your assets
                and securing your family's future.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Date & Time</p>
                    <p className="text-secondary/80">September 4, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Location</p>
                    <p className="text-secondary/80">4413 N. University Drive, Lauderhill, FL, United States, Florida</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mic className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Presented by</p>
                    <p className="text-secondary/80">Melissa Wilson, Certified Trust & Estate Planning Attorney</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-secondary">Who Should Attend?</p>
                    <p className="text-secondary/80">Homeowners, parents, business owners, retirees</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="w-full max-w-sm space-y-6">
                <div className="text-center">
                  <p className="text-lg font-bold text-secondary">Spots are limited!</p>
                  <p className="text-secondary/80">Reserve your seat for this valuable free event today.</p>
                </div>
                <Button className="btn-primary w-full text-lg py-6">
                  Claim Your Free Spot Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;

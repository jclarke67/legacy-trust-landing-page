import { Calendar, MapPin, Mic, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const WorkshopSection = () => {
  const benefits = ["Understand the importance of trusts & estate planning", "Learn how to protect assets & minimize taxes", "Avoid probate and secure your family's financial future", "Get expert guidance tailored to yours"];
  return <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">
              Why Attend?
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 h-6 w-6" />
                  <p className="text-lg text-secondary">{benefit}</p>
                </div>)}
            </div>
            
            <div className="mt-10">
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 rounded-full text-lg w-full sm:w-auto">
                Sign Up for Free
              </Button>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Calendar className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">Date & Time</h3>
                  <p className="text-secondary/80">September 4, 2024</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">Location</h3>
                  <p className="text-secondary/80">1560 Sawgrass Corporate Parkway 4th Floor<br />Sunrise, FL 33323<br />or Live Webinar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mic className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-1">Presented by</h3>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <p className="text-secondary/80">Melissa Wilson, Certified Trust & Estate Planning Attorney</p>
                    <div className="mt-2 sm:mt-0 w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">Who Should Attend?</h3>
                  <p className="text-secondary/80">Homeowners, parents, business owners, retirees or anyone looking to secure their family's future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WorkshopSection;
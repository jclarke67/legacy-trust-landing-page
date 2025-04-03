
import { Award, CheckCircle } from "lucide-react";

const SocialProofSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Trusted by Families Across the State
        </h2>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mb-16 bg-muted p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg italic text-secondary/80 mb-6">
              "Melissa took the time to understand our family's unique situation and created a comprehensive trust that gives us peace of mind. Her expertise and compassionate approach made what seemed like a daunting process much more manageable."
            </p>
            <div className="font-semibold text-secondary">
              Sarah Johnson, Client since 2022
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-primary mb-3" />
            <div className="font-semibold">Certified Estate Planner</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-primary mb-3" />
            <div className="font-semibold">State Bar Association Member</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-primary mb-3" />
            <div className="font-semibold">Top-Rated Attorney</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-primary mb-3" />
            <div className="font-semibold">5-Star Client Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;

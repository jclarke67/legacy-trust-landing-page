import { Award } from "lucide-react";
const SocialProofSection = () => {
  return <div className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="mb-16 bg-white p-10 rounded-lg shadow-sm border border-gray-100 relative">
            <div className="text-6xl font-serif text-accent absolute top-4 left-6">"</div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl italic text-secondary mb-6 pt-6">
                Attending the workshop was the best decision. I left with a clear plan for my family's future and peace of mind. Highly recommend!
              </p>
              <div className="font-semibold text-primary">
                — Integrity Legal
              </div>
            </div>
          </div>
          
          {/* Video Testimonial */}
          
        </div>
      </div>
    </div>;
};
export default SocialProofSection;

import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoTestimonialSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Hear From Our Clients
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.youtube.com/embed/spZAaFJ7vyk" 
                  className="w-full h-full"
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center text-secondary/80 italic">
            "Watch how our estate planning solutions have helped clients protect what matters most to them."
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialSection;

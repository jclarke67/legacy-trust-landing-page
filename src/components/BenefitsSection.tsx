
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Avoid Probate",
      description: "Keep your estate out of probate court, saving your family time, money, and stress."
    },
    {
      title: "Personalized Estate Planning",
      description: "Custom solutions tailored to your specific family situation and financial goals."
    },
    {
      title: "Protect Family Wealth",
      description: "Safeguard your assets and ensure they're distributed according to your wishes."
    },
    {
      title: "Minimize Tax Burden",
      description: "Strategic planning to reduce estate and inheritance taxes for your beneficiaries."
    }
  ];

  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Why Choose Professional Estate Planning
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 bg-primary rounded-full p-1.5 mt-1">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{benefit.title}</h3>
                <p className="text-secondary/80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need a will or a trust?",
      answer: "It depends on your specific situation. A will goes through probate, while a trust can help avoid probate and offers more privacy and control. Our workshop will help you understand which option is best for your situation."
    },
    {
      question: "Is this workshop really free?",
      answer: "Yes, this educational workshop is completely free with no obligation. We believe in educating our community about the importance of proper estate planning."
    },
    {
      question: "How long does the estate planning process take?",
      answer: "The time it takes to create an estate plan varies depending on the complexity of your situation, but typically takes 2-4 weeks from the initial consultation to the signing of documents."
    },
    {
      question: "What happens if I die without an estate plan?",
      answer: "If you die without an estate plan (intestate), state laws will determine how your assets are distributed, which may not align with your wishes. Additionally, the probate process may be more complicated, time-consuming, and expensive for your heirs."
    },
    {
      question: "Do I need an estate plan if I don't have significant assets?",
      answer: "Yes. Estate planning isn't just for the wealthy. It helps ensure your wishes are carried out, minimizes potential family conflicts, names guardians for minor children, and can prevent your assets from going through probate, regardless of the size of your estate."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Frequently Asked Questions
            </h2>
            
            <div className="hidden lg:block">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary">
                Don't leave your family's future to chance
              </h3>
              
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 rounded-full text-lg w-full">
                Reserve Your Spot Now
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-secondary/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 block lg:hidden">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary text-center">
                Don't leave your family's future to chance
              </h3>
              
              <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 rounded-full text-lg w-full">
                Reserve Your Spot Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

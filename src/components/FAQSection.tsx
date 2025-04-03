
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What's the difference between a will and a trust?",
      answer: "A will is a legal document that outlines how you want your assets distributed after death and goes through probate. A trust is a legal arrangement that allows a third party (trustee) to hold and manage assets for beneficiaries, often avoiding probate and offering more control over asset distribution."
    },
    {
      question: "Do I need an estate plan if I don't have significant assets?",
      answer: "Yes. Estate planning isn't just for the wealthy. It helps ensure your wishes are carried out, minimizes potential family conflicts, names guardians for minor children, and can prevent your assets from going through probate, regardless of the size of your estate."
    },
    {
      question: "How often should I update my estate plan?",
      answer: "It's recommended to review your estate plan every 3-5 years, or after significant life events such as marriage, divorce, birth of children, death of beneficiaries, substantial changes in assets, or moving to a new state."
    },
    {
      question: "What happens if I die without an estate plan?",
      answer: "If you die without an estate plan (intestate), state laws will determine how your assets are distributed, which may not align with your wishes. Additionally, the probate process may be more complicated, time-consuming, and expensive for your heirs."
    },
    {
      question: "How long does it take to create an estate plan?",
      answer: "The time it takes to create an estate plan varies depending on the complexity of your situation, but typically takes 2-4 weeks from the initial consultation to the signing of documents."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-secondary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-secondary/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

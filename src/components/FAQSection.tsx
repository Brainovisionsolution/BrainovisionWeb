import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What programming languages do you teach?",
      answer:
        "We teach a wide range of languages including Python, JavaScript, Java, React, Node.js, and many more based on current industry demands.",
    },
    {
      question: "How long are your training programs?",
      answer:
        "Our programs range from 3-month intensive courses to 6-month comprehensive programs, depending on the technology stack and depth of coverage.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide comprehensive placement assistance including resume building, interview preparation, and direct connections with our partner companies.",
    },
    {
      question: "What is the fee structure for courses?",
      answer:
        "Our fees are competitive and vary by course. We also offer flexible payment options and scholarships for deserving candidates. Contact us for detailed fee structure.",
    },
    {
      question: "Do you offer online training?",
      answer:
        "Yes, we offer both online and offline training modes. Our online programs are interactive with live sessions, recorded lectures, and hands-on projects.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You'll work on real-world industry projects including web applications, mobile apps, AI/ML models, and enterprise solutions that add value to your portfolio.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our courses and services
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card key={index} className="border-0 shadow-md dark:bg-gray-800 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Answer Section */}
                  <div
                    id={`faq-${index}`}
                    className={`px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

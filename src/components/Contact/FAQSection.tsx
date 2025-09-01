import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const faqs: FAQItem[] = [
    {
      question: "How long does it take for you to respond?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +91 98765 43210."
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we offer both in-person and remote consultations via video calls. Remote consultations are perfect for initial discussions and project planning."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with clients across various industries including technology, healthcare, finance, e-commerce, education, and manufacturing. Our solutions are tailored to meet specific industry requirements."
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM IST. However, we're available for emergency support 24/7 for our premium clients."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-project support including maintenance, updates, and technical assistance. We have various support packages to choose from based on your needs."
    },
    {
      question: "How do you ensure project confidentiality?",
      answer: "We take confidentiality very seriously. All our team members sign NDAs, and we follow strict data protection protocols. We can also sign additional confidentiality agreements as required."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
              <HelpCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } ${openIndex === index ? (isDarkMode ? 'bg-gray-700' : 'bg-orange-50') : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-50 transition-all duration-300"
                >
                  <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:support@company.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-[0_4px_16px_rgba(251,146,60,0.4)] hover:shadow-[0_6px_24px_rgba(251,146,60,0.6)]"
            >
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
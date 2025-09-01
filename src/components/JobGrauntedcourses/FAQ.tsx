import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is there a job guarantee?',
      answer: 'We provide dedicated job assistance including placement support, interview preparation, resume building, and networking opportunities to help you successfully enter the job market.'
    },
    {
      question: 'What kind of placement support will I receive?',
      answer: 'You will get continuous career assistance such as mock interviews, resume reviews, job referrals, and personalized guidance to improve your chances of getting hired.'
    },
    {
      question: 'Can I study while in college or as a fresher?',
      answer: 'Absolutely! Our courses are designed for students and freshers with flexible timings and weekend batches to fit your schedule.'
    },
    {
      question: 'Is this recognized by companies?',
      answer: 'Yes, our certification is government-affiliated and recognized by 2000+ recruiters across India. The curriculum is designed with industry input to meet market demands.'
    },
    {
      question: 'What support do I get post-course?',
      answer: 'Post-course, you have lifetime access to learning materials, alumni networking, ongoing career support, interview prep, and skill development resources.'
    },
    {
      question: 'What are the eligibility criteria?',
      answer: 'Basic eligibility includes graduation in any stream (for most courses), basic computer knowledge, and commitment to complete the program. Some advanced courses may have specific prerequisites.'
    },
    {
      question: 'Are there any hidden costs?',
      answer: 'No hidden costs. The course fee covers all materials, projects, certification, and placement support. Optional services like extra mock interviews may have additional fees.'
    },
    {
      question: 'Are EMI options available?',
      answer: 'Yes, we offer No Cost EMI starting from ₹5,000 per month, along with scholarships and financial assistance programs for eligible candidates.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-orange-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-900 dark:text-white">Frequently Asked </span>
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to the most common questions about our courses, job assistance, and career support services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-neumorphism dark:shadow-neumorphism-dark overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <div className="p-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Our counselors are available 24/7 to help you make the right career decision. 
                Get personalized guidance for your career path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-orange-500 rounded-2xl hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Free Call
                </button>
                <button className="px-8 py-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-colors duration-200 font-semibold backdrop-blur-sm">
                  Chat with Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What if I miss a live session?",
      answer: "Don't worry! All live sessions are recorded and available in your student portal within 24 hours. You can watch them anytime at your own pace. Additionally, our mentors conduct doubt-clearing sessions twice a week where you can ask questions about missed content."
    },
    {
      question: "Can I get a job after completing the course?",
      answer: "Absolutely! We have a 95% placement success rate. Our dedicated placement team provides resume building, interview preparation, and connects you with our 500+ hiring partners. We also offer mock interviews and salary negotiation guidance to ensure you land your dream job."
    },
    {
      question: "Do I need any prior coding knowledge?",
      answer: "No prior experience required! Our courses are designed for complete beginners. We start with fundamentals and gradually build up to advanced topics. Our personalized learning approach ensures everyone can keep up, regardless of their starting point."
    },
    {
      question: "Do you offer EMI or scholarship options?",
      answer: "Yes! We offer 0% interest EMI starting from ₹2,999/month. We also have a merit-cum-need based scholarship program offering up to 70% fee reduction. Financial constraints shouldn't stop you from learning - we'll find a way to make it work."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "Lifetime access! Once you enroll, you get permanent access to all course materials, updates, and new content additions. The technology world evolves fast, and so do our courses - you'll always have the latest content."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll build real-world, portfolio-worthy projects like e-commerce platforms, social media apps, AI chatbots, data analysis dashboards, and more. These aren't just tutorial projects - they're production-ready applications you can show to employers."
    },
    {
      question: "Is the certification recognized by companies?",
      answer: "Yes! Our certificates are AICTE-affiliated and ISO certified. They're recognized by major companies like Google, Microsoft, Amazon, and hundreds of our hiring partners. The blockchain verification makes them tamper-proof and instantly verifiable."
    },
    {
      question: "How is this different from other online courses?",
      answer: "Unlike pre-recorded courses, we offer live interactive sessions, 1-on-1 mentorship from industry experts, real project building, personalized career guidance, and guaranteed placement support. It's like having a personal coding bootcamp with lifetime support."
    },
    {
      question: "Can I switch between courses or upgrade my plan?",
      answer: "Yes, you can upgrade your plan anytime. If you want to switch courses, our academic counselors will help you transition smoothly. We'll also adjust the fee difference fairly - your learning journey should be flexible."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee, no questions asked. However, with our 4.9/5 rating and 95% student satisfaction rate, we're confident you'll love the experience. Our student success team is always there to address any concerns."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-[#1a1a1a] dark:via-[#111] dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions our students ask before joining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] border border-yellow-200 dark:border-orange-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 dark:hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold pr-4 leading-relaxed text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-orange-500" />
                  ) : (
                    <ChevronDown size={24} className="text-yellow-500" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-yellow-100 dark:border-orange-800">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white dark:bg-[#1e1e1e] border border-yellow-200 dark:border-orange-700 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-200">Still Have Questions?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our student success team is here to help! Get personalized answers to all your questions before you enroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="bg-gray-200 dark:bg-[#333] text-gray-800 dark:text-gray-100 border border-yellow-300 dark:border-orange-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              Chat with Us
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
            <div className="text-gray-700 dark:text-gray-300">Student Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt;2 hrs</div>
            <div className="text-gray-700 dark:text-gray-300">Average Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.9/5</div>
            <div className="text-gray-700 dark:text-gray-300">Support Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-300 mb-2">98%</div>
            <div className="text-gray-700 dark:text-gray-300">Issues Resolved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

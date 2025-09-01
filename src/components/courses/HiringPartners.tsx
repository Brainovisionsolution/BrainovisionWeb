import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

interface HiringPartnersProps {
  darkMode: boolean;
}

const HiringPartners: React.FC<HiringPartnersProps> = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const companies = [
    'TCS', 'Capgemini', 'Deloitte', 'Accenture', 'Wipro', 'Infosys',
    'IBM', 'Cognizant', 'HCL', 'Tech Mahindra', 'L&T Infotech', 'Mindtree',
    'Persistent', 'Mphasis', 'LTI', 'Hexaware'
  ];

  const totalSlides = Math.ceil(companies.length / 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 p-4 rounded-2xl mb-6 ${
            darkMode 
              ? 'bg-gray-900 shadow-dark-neumorphism' 
              : 'bg-gray-50 shadow-neumorphism'
          }`}>
            <Building2 className={`h-8 w-8 ${darkMode ? 'text-yellow-400' : 'text-orange-500'}`} />
            <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              2000+
            </span>
          </div>

          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Trusted Hiring Partners of Brainovision
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our learners are working in top MNCs across India, recognized for their real-world readiness and professional excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
                  {companies.slice(slideIndex * 4, (slideIndex + 1) * 4).map((company, index) => (
                    <div key={index} className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-900 shadow-dark-neumorphism text-gray-300' 
                        : 'bg-gray-50 shadow-neumorphism text-gray-700'
                    }`}>
                      <h3 className="text-xl font-semibold">{company}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;

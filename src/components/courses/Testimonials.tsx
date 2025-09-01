import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Aditya Gupta',
      role: 'Software Engineer at Google',
      course: 'Full Stack Development',
      rating: 5,
      text: 'NextWave transformed my career completely. The hands-on projects and mentorship helped me land my dream job at Google. The curriculum is industry-relevant and the support is exceptional.',
      salary: '₹28 LPA',
      video: true
    },
    {
      name: 'Sneha Patel',
      role: 'Data Scientist at Microsoft',
      course: 'Data Science & AI',
      rating: 5,
      text: 'The Data Science program at NextWave is outstanding. Real-world projects, expert mentors, and comprehensive curriculum helped me transition from a non-tech background to Microsoft.',
      salary: '₹32 LPA',
      video: false
    },
    {
      name: 'Rahul Mehta',
      role: 'Product Manager at Amazon',
      course: 'Product Management',
      rating: 5,
      text: 'NextWave\'s Product Management course gave me the skills and confidence to crack Amazon\'s PM interview. The case studies and frameworks are incredibly valuable.',
      salary: '₹35 LPA',
      video: true
    },
    {
      name: 'Anita Singh',
      role: 'Full Stack Developer at Netflix',
      course: 'Full Stack Development',
      rating: 5,
      text: 'From a fresher to Netflix engineer in 8 months - NextWave made it possible. The live projects and industry exposure were game-changers for my career.',
      salary: '₹24 LPA',
      video: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Success Stories from Our Students
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Hear from our graduates who are now working at top tech companies
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className={`p-12 rounded-3xl transition-all duration-500 ${
            darkMode 
              ? 'bg-gray-800 shadow-dark-neumorphism' 
              : 'bg-white shadow-neumorphism'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className={`text-lg mb-6 italic ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="mb-4">
                  <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className={`px-4 py-2 rounded-xl ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    Course: {testimonials[currentTestimonial].course}
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold">
                    {testimonials[currentTestimonial].salary}
                  </div>
                </div>
              </div>

              {/* Right Side - Video/Image */}
              <div className={`relative rounded-2xl overflow-hidden ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div className="aspect-w-16 aspect-h-9 h-64 flex items-center justify-center">
                  {testimonials[currentTestimonial].video ? (
                    <button className={`p-6 rounded-full transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 text-yellow-400 shadow-dark-neumorphism' 
                        : 'bg-white text-orange-500 shadow-neumorphism'
                    }`}>
                      <Play className="h-12 w-12" />
                    </button>
                  ) : (
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold ${
                      darkMode 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                    }`}>
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-white shadow-dark-neumorphism' 
                  : 'bg-white text-gray-700 shadow-neumorphism'
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-white shadow-dark-neumorphism' 
                  : 'bg-white text-gray-700 shadow-neumorphism'
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
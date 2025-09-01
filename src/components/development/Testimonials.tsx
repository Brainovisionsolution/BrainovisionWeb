import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'DevCraft delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched. The project was completed on time and within budget.'
    },
    {
      name: 'Lisa Thompson',
      company: 'StartupHub',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with DevCraft was a game-changer for our startup. They built our MVP quickly and efficiently, allowing us to secure funding and launch successfully. Highly recommended!'
    },
    {
      name: 'Robert Chen',
      company: 'Global Retail Inc',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The mobile app DevCraft developed for us has received excellent user feedback. Their agile approach and constant communication made the entire process smooth and transparent.'
    },
    {
      name: 'Amanda Foster',
      company: 'HealthTech Pro',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'DevCraft built our healthcare platform with the highest security standards. Their expertise in compliance and data protection gave us confidence in launching our solution.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-orange-200 dark:border-yellow-700 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Quote className="h-12 w-12 text-orange-500 dark:text-yellow-500 opacity-20" />
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-orange-600 dark:text-yellow-400 font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-yellow-500 dark:to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-yellow-500 dark:to-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 dark:bg-yellow-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-400 dark:hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

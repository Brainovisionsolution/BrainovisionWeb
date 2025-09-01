import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import type { Testimonial } from './types';

const AlumniStories: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      previousRole: 'Software Engineer',
      currentRole: 'Senior Full Stack Developer',
      previousCompany: 'TCS',
      currentCompany: 'Amazon',
      quote: 'The flexible learning schedule allowed me to upskill while working. The mentorship was exceptional!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      name: 'Arjun Patel',
      previousRole: 'Manual Tester',
      currentRole: 'DevOps Engineer',
      previousCompany: 'Wipro',
      currentCompany: 'Microsoft',
      quote: 'From manual testing to DevOps - this course completely transformed my career trajectory.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      name: 'Sneha Reddy',
      previousRole: 'Business Analyst',
      currentRole: 'Data Scientist',
      previousCompany: 'Accenture',
      currentCompany: 'Google',
      quote: 'The AI/ML program gave me hands-on experience with real datasets. Now I work at my dream company!',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '4',
      name: 'Karthik Nair',
      previousRole: 'Support Engineer',
      currentRole: 'Product Manager',
      previousCompany: 'Infosys',
      currentCompany: 'Flipkart',
      quote: 'The PM course helped me transition from technical support to product leadership. Excellent content!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % testimonials.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Alumni{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real professionals, real transformations, real success
          </p>
        </div>

        {/* Featured Story Carousel */}
        <div className="relative mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentStory].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentStory].quote}"
                </blockquote>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentStory].name}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
                    <div className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{testimonials[currentStory].previousRole}</span> at {testimonials[currentStory].previousCompany}
                    </div>
                    <div className="hidden md:block text-orange-500">→</div>
                    <div className="text-orange-600 dark:text-orange-400 font-semibold">
                      <span className="font-medium">{testimonials[currentStory].currentRole}</span> at {testimonials[currentStory].currentCompany}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={testimonials[currentStory].image}
                  alt={testimonials[currentStory].name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-lg"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Play className="h-6 w-6 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStory
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                index === currentStory ? 'ring-2 ring-orange-500' : ''
              }`}
              onClick={() => setCurrentStory(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {testimonial.quote}
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {testimonial.previousCompany} → {testimonial.currentCompany}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
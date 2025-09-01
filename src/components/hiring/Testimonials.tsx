import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'Amazing culture with incredible growth opportunities. Best decision I ever made.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'The team truly cares about work-life balance and personal development.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'Innovative projects, supportive colleagues, and room to make real impact.',
      rating: 5,
    },
  ];

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>What Our Team Says</h2>
          <p className={`text-xl transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Hear from our employees about their experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 p-8 transform hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gray-900 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                  : 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
              }`}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-14 h-14 rounded-full object-cover mr-4 transition-all duration-300 ${
                    isDark ? 'shadow-neumorphic-dark' : 'shadow-neumorphic-light'
                  }`}
                />
                <div>
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{testimonial.name}</h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
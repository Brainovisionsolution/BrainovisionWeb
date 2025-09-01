import React from 'react';
import { Quote, Star, Building2 } from 'lucide-react';
import { testimonials } from "@/components/Projects/data/projects";
interface TestimonialsSectionProps {
  darkMode: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full ${
            darkMode 
              ? 'bg-gray-800 shadow-[inset_5px_5px_10px_#1f2937,inset_-5px_-5px_10px_#374151]' 
              : 'bg-gray-50 shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff]'
          }`}>
            <Quote className="w-6 h-6 text-orange-500" />
            <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Client Testimonials
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`group relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 shadow-[15px_15px_30px_#1f2937,-15px_-15px_30px_#374151] hover:shadow-[20px_20px_40px_#1f2937,-20px_-20px_40px_#374151]' 
                  : 'bg-white shadow-[15px_15px_30px_#d1d5db,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff]'
              }`}
            >
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center ${
                darkMode 
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-600 shadow-[inset_3px_3px_6px_rgba(255,140,0,0.3),inset_-3px_-3px_6px_rgba(255,215,0,0.3)]' 
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 shadow-[inset_3px_3px_6px_rgba(255,140,0,0.3),inset_-3px_-3px_6px_rgba(255,215,0,0.3)]'
              }`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-orange-500">
                    <Building2 className="w-4 h-4" />
                    <span>{testimonial.role}</span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '25+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151]' 
                  : 'bg-white shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]'
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
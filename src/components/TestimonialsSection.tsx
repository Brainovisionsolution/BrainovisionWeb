import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    
    {
      name: "Rajesh Kumar",
      role: "Software Engineer Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "The training program at Brainovision transformed my career. The hands-on projects and industry mentorship helped me land my dream job at a top tech company.",
      rating: 5,
    },
    {
      name: "Dr. Emily Chen",
      role: "Director, MedTech Solutions",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
      content: "Their healthcare management system revolutionized our patient care process. The team understood our complex requirements and delivered a solution that exceeded expectations.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Data Science Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "The AI/ML course was incredibly comprehensive. From theory to practical implementation, every aspect was covered thoroughly. Now I'm confident in building ML models from scratch.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg drop-shadow-md">★</span>
      ));
  };

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients & Students Say
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real feedback from satisfied clients and successful graduates
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card
                    className="mx-4 rounded-3xl bg-white dark:bg-[#121212] transition-all duration-500 shadow-[inset_6px_6px_14px_#e5e5e5,inset_-6px_-6px_14px_#ffffff] dark:shadow-[inset_3px_3px_10px_#1a1a1a,inset_-3px_-3px_10px_#222]"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">{renderStars(testimonial.rating)}</div>
                      <blockquote className="text-xl text-gray-700 dark:text-gray-200 italic mb-8 leading-relaxed">
                        “{testimonial.content}”
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-yellow-200 dark:border-yellow-700 shadow"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`View testimonial ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-500 dark:bg-yellow-400 scale-110 shadow-md'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

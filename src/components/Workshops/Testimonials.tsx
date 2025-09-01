import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Google',
      college: 'IIT Delhi',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The AI workshop completely transformed my understanding of machine learning. The hands-on projects and expert mentorship helped me land my dream job at Google. The community here is incredibly supportive!',
      event: 'AI Innovation Workshop'
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Full Stack Developer',
      company: 'Microsoft',
      college: 'BITS Pilani',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Winning the hackathon was just the beginning. The connections I made and skills I learned opened doors I never imagined. The mentors genuinely care about your growth and success.',
      event: 'Full Stack Hackathon 2023'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Blockchain Developer',
      company: 'Ethereum Foundation',
      college: 'NIT Trichy',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The blockchain workshop was incredibly comprehensive. From basics to advanced concepts, everything was explained clearly. I went from knowing nothing about Web3 to building my own DeFi application!',
      event: 'Blockchain Mastery Workshop'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      role: 'DevOps Engineer',
      company: 'Amazon',
      college: 'VIT Vellore',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The cloud computing hackathon pushed me to learn technologies I had only heard about. The 48-hour challenge was intense but incredibly rewarding. Got hired by Amazon right after!',
      event: 'Cloud Computing Challenge'
    },
    {
      id: 5,
      name: 'Maya Singh',
      role: 'Mobile App Developer',
      company: 'Uber',
      college: 'IIIT Hyderabad',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The Flutter workshop was exactly what I needed to transition from web to mobile development. The project-based learning approach made complex concepts easy to understand and implement.',
      event: 'Mobile Development Bootcamp'
    },
    {
      id: 6,
      name: 'David Wilson',
      role: 'Data Scientist',
      company: 'Netflix',
      college: 'SRM University',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The data science workshop provided practical insights that textbooks simply cannot. Working with real datasets and industry-standard tools prepared me for the challenges at Netflix.',
      event: 'Data Science Intensive'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Student <span className="text-primary-orange">Success Stories</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Hear from our amazing community members who have transformed their careers through 
            our workshops and hackathons. Their success is our greatest achievement.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-background-pale dark:bg-dark-card rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Testimonial Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-text-charcoal dark:text-dark-text font-medium mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-xl font-bold text-text-charcoal dark:text-dark-text">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-primary-orange font-semibold">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                  <div className="text-text-gray dark:text-dark-muted">
                    {testimonials[currentTestimonial].college} • {testimonials[currentTestimonial].event}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-dark-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentTestimonial === index ? 'bg-primary-orange' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-background-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === currentTestimonial ? 'ring-2 ring-primary-yellow' : ''
              }`}
            >
              {/* Mini Profile */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-text-charcoal dark:text-dark-text">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-gray dark:text-dark-muted">
                    {testimonial.college}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote (shortened) */}
              <p className="text-text-gray dark:text-dark-muted text-sm leading-relaxed mb-4">
                "{testimonial.quote.substring(0, 120)}..."
              </p>

              {/* Event */}
              <div className="text-xs text-primary-orange font-semibold">
                {testimonial.event}
              </div>
            </div>
          ))}
        </div>

        

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background-pale dark:bg-dark-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-text-gray dark:text-dark-muted mb-6">
              Join thousands of students who have transformed their careers with us.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-yellow to-primary-orange hover:from-primary-orange hover:to-primary-yellow text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
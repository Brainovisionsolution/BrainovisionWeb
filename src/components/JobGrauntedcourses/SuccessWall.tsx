import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, MapPin } from 'lucide-react';

export default function SuccessWall() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'Microsoft',
      role: 'Software Engineer',
      salary: '₹18 LPA',
      hike: '300% Hike',
      image: '👨‍💻',
      quote: 'NextWave transformed my career completely. From a college student to a Microsoft engineer - the journey was incredible with amazing mentors.',
      location: 'Bangalore',
      course: 'Full Stack Development'
    },
    {
      name: 'Priya Patel',
      company: 'Amazon',
      role: 'Data Scientist',
      salary: '₹22 LPA',
      hike: '400% Hike',
      image: '👩‍💼',
      quote: 'The hands-on projects and industry mentorship gave me the confidence to crack Amazon\'s tough interview process.',
      location: 'Hyderabad',
      course: 'Data Science & ML'
    },
    {
      name: 'Arjun Kumar',
      company: 'Google',
      role: 'UX Designer',
      salary: '₹15 LPA',
      hike: '250% Hike',
      image: '👨‍🎨',
      quote: 'The design thinking approach and real client projects prepared me perfectly for Google\'s design challenges.',
      location: 'Mumbai',
      course: 'UI/UX Design'
    },
    {
      name: 'Sneha Reddy',
      company: 'Paytm',
      role: 'Frontend Developer',
      salary: '₹12 LPA',
      hike: '200% Hike',
      image: '👩‍💻',
      quote: 'From zero coding knowledge to landing at Paytm - NextWave\'s curriculum is perfectly designed for beginners.',
      location: 'Delhi',
      course: 'Full Stack Development'
    },
    {
      name: 'Vikash Singh',
      company: 'Wipro',
      role: 'Cloud Engineer',
      salary: '₹14 LPA',
      hike: '280% Hike',
      image: '👨‍🔬',
      quote: 'The cloud fundamentals and security training gave me the edge I needed to stand out in the job market.',
      location: 'Pune',
      course: 'Cybersecurity & Cloud'
    },
    {
      name: 'Anjali Gupta',
      company: 'TCS',
      role: 'ML Engineer',
      salary: '₹16 LPA',
      hike: '320% Hike',
      image: '👩‍🔬',
      quote: 'The AI/ML projects were industry-grade. My portfolio impressed every interviewer I met.',
      location: 'Chennai',
      course: 'Data Science & ML'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  return (
    <section id="success" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Student </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Success Wall
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real stories of transformation from our students who are now working in top companies 
            with incredible salary packages.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div
                        key={index}
                        className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-neumorphism dark:shadow-neumorphism-dark hover:shadow-xl transition-all duration-300"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                              {testimonial.image}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {testimonial.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                {testimonial.role} at <span className="font-semibold text-orange-500">{testimonial.company}</span>
                              </p>
                              <div className="flex items-center space-x-2 mt-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              {testimonial.salary}
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-orange-500">
                              <TrendingUp className="w-4 h-4" />
                              <span>{testimonial.hike}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic relative">
                          <div className="text-4xl text-orange-500/30 absolute -top-2 -left-2">"</div>
                          <p className="relative z-10 leading-relaxed">
                            {testimonial.quote}
                          </p>
                        </blockquote>

                        {/* Course & Rating */}
                        <div className="flex items-center justify-between">
                          <div className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full">
                            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                              {testimonial.course}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-neumorphism dark:shadow-neumorphism-dark hover:shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-neumorphism dark:shadow-neumorphism-dark hover:shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5000+</div>
            <div className="text-gray-600 dark:text-gray-400">Success Stories</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">₹18L</div>
            <div className="text-gray-600 dark:text-gray-400">Highest Package</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">92%</div>
            <div className="text-gray-600 dark:text-gray-400">Placement Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">300%</div>
            <div className="text-gray-600 dark:text-gray-400">Avg Salary Hike</div>
          </div>
        </div>
      </div>
    </section>
  );
}
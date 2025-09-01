import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'Software Engineer',
      company: 'Google',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Brainovision transformed my career completely. From a non-tech background to landing a job at Google - the journey was incredible with amazing mentors.',
      beforeSalary: '₹3.5L',
      afterSalary: '₹28L',
      course: 'Full Stack Development',
      rating: 5,
      story: 'Was working in retail, now building products used by millions'
    },
    {
      name: 'Priya Sharma',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The AI & ML course at Brainovision was exactly what I needed. Real projects, industry mentors, and personalized guidance made all the difference.',
      beforeSalary: '₹6L',
      afterSalary: '₹22L',
      course: 'AI & Machine Learning',
      rating: 5,
      story: 'Transitioned from manual testing to AI engineering'
    },
    {
      name: 'Rohit Kumar',
      role: 'Cloud Architect',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Best investment I ever made! The Cloud & DevOps program gave me hands-on experience that no other platform could provide.',
      beforeSalary: '₹4.2L',
      afterSalary: '₹18L',
      course: 'Cloud & DevOps',
      rating: 5,
      story: 'From support engineer to architecting cloud solutions'
    },
    {
      name: 'Sneha Patel',
      role: 'Full Stack Developer',
      company: 'Flipkart',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "The mentors at Brainovision are incredible. They don't just teach you to code, they teach you to think like a developer and solve real problems.",
      beforeSalary: '₹2.8L',
      afterSalary: '₹15L',
      course: 'Full Stack Development',
      rating: 5,
      story: 'From fresher to senior developer in 8 months'
    },
    {
      name: 'Vikram Singh',
      role: 'Cybersecurity Analyst',
      company: 'Deloitte',
      image: 'https://images.pexels.com/photos/3778874/pexels-photo-3778874.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The hands-on approach and real-world scenarios in the Cybersecurity course prepared me perfectly for industry challenges.',
      beforeSalary: '₹5L',
      afterSalary: '₹16L',
      course: 'Cybersecurity',
      rating: 5,
      story: 'From network admin to cybersecurity specialist'
    },
    {
      name: 'Anita Reddy',
      role: 'Mobile App Developer',
      company: 'Paytm',
      image: 'https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "Learning React Native and Flutter together gave me an edge in the market. Now I'm building apps used by millions of users daily.",
      beforeSalary: '₹3.8L',
      afterSalary: '₹14L',
      course: 'Mobile Development',
      rating: 5,
      story: 'From web designer to mobile app developer'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-[#1a1a1a] dark:via-[#111] dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Stories</span> That Inspire
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real transformations, real people, real success. See how our students changed their lives with Brainovision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

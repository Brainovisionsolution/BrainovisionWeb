import React, { useState } from 'react';
import { ArrowRight, Calendar, User, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    session: 'ai-ml-foundations'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Live Demo Class booked successfully! We will contact you shortly.');
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Heading + Description + Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                🚀 For Working Professionals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Accelerate Your{' '}
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Tech Career
                </span>{' '}
                with Industry-Focused Training
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Master cutting-edge skills with flexible learning formats designed specifically 
                for working professionals. Learn without quitting your job.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">1200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professionals Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">80%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Salary Hike</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">6-9</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months Duration</div>
              </div>
            </div>
          </div>

          {/* Right Side - Book Live Demo Class Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Book Your <span className="text-orange-500">Live Demo Class</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                >
                  <option value="ai-ml-foundations">AI & ML Foundations - Sat 7:00 PM</option>
                  <option value="deep-learning">Deep Learning - Sun 6:30 PM</option>
                  <option value="nlp">Natural Language Processing - Wed 8:00 PM</option>
                  <option value="computer-vision">Computer Vision - Fri 7:30 PM</option>
                </select>
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group mt-2"
              >
                Book Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Decorative Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="25%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="75%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" className="animate-wave" />
        </svg>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-25px); }
        }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;

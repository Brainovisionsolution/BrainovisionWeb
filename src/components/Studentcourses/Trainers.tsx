import React from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

const Trainers: React.FC = () => {
const trainers = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Lead AI Architect',
    company: 'Ex-Google, Microsoft',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'PhD in Machine Learning with 12+ years building AI systems at scale',
    expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
    students: '5.2k+',
    rating: 4.9,
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Full Stack Developer',
    company: 'Ex-Amazon, Flipkart',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack expert who built high-traffic e-commerce platforms',
    expertise: ['React', 'Node.js', 'System Design', 'Microservices'],
    students: '8.1k+',
    rating: 4.8,
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Amit Singh',
    role: 'Cloud Solutions Architect',
    company: 'Ex-AWS, Microsoft Azure',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Built cloud infrastructure for Fortune 500 companies',
    expertise: ['AWS', 'Kubernetes', 'DevOps', 'Terraform'],
    students: '3.7k+',
    rating: 4.9,
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Sarah Johnson',
    role: 'Data Science Lead',
    company: 'Ex-Netflix, Uber',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Built recommendation systems serving millions of users daily',
    expertise: ['Python', 'Statistics', 'ML Ops', 'Big Data'],
    students: '6.3k+',
    rating: 4.8,
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Vikram Patel',
    role: 'Cybersecurity Expert',
    company: 'Ex-Tesla, PayPal',
    image: 'https://images.pexels.com/photos/3778874/pexels-photo-3778874.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Secured critical infrastructure for autonomous vehicles and fintech',
    expertise: ['Ethical Hacking', 'Network Security', 'Blockchain', 'Cryptography'],
    students: '2.9k+',
    rating: 4.9,
    linkedin: '#',
    github: '#'
  }
];


  return (
    <section className="py-20 px-6 bg-[#f1f3f6] dark:bg-[#1a1a1a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Expert Mentors
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Learn from industry veterans who've built products used by millions and shaped the future of technology
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-[#f1f3f6] dark:bg-[#1f1f1f] rounded-3xl p-6 transition-all duration-300 shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_24px_#111,_-8px_-8px_24px_#2a2a2a] hover:scale-[1.02]"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md border-4 border-yellow-400 mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{trainer.name}</h3>
                <p className="text-orange-500">{trainer.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{trainer.company}</p>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{trainer.bio}</p>
              </div>

              {/* Expertise */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {trainer.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 flex justify-between items-center text-sm text-gray-700 dark:text-gray-400">
                <div>
                  <div className="text-green-600 font-bold">{trainer.students}</div>
                  <div>Students</div>
                </div>
                <div>
                  <div className="text-yellow-500 font-bold">★ {trainer.rating}</div>
                  <div>Rating</div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-4 flex justify-center space-x-4">
                <a href={trainer.linkedin} className="w-9 h-9 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white flex items-center justify-center shadow hover:scale-110 transition">
                  <Linkedin size={18} />
                </a>
                <a href={trainer.github} className="w-9 h-9 rounded-full bg-gray-700 text-white flex items-center justify-center shadow hover:scale-110 transition">
                  <Github size={18} />
                </a>
                <button className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center shadow hover:scale-110 transition">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center bg-[#f1f3f6] dark:bg-[#1f1f1f] rounded-3xl p-10 shadow-[6px_6px_12px_#d1d9e6,_-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_18px_#111,_-6px_-6px_18px_#2a2a2a]">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            "Our mentors don't just teach – they inspire, guide, and transform careers."
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each mentor brings real-world experience from building products at scale,
            leading teams, and solving complex technical challenges at top companies worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainers;

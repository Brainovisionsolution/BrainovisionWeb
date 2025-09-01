import React from 'react';
import { Linkedin, Github, Twitter, Star, Award, Users } from 'lucide-react';

const MentorsTrainers: React.FC = () => {
  const mentors = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Senior AI Researcher',
      company: 'Google',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      experience: '12+ years',
      rating: 4.9,
      studentsGuided: 500,
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Arjun Patel',
      role: 'Full Stack Architect',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React', 'Node.js', 'Cloud Architecture'],
      experience: '10+ years',
      rating: 4.8,
      studentsGuided: 750,
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'Blockchain Developer',
      company: 'Ethereum Foundation',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Solidity', 'Web3', 'DeFi'],
      experience: '8+ years',
      rating: 4.9,
      studentsGuided: 300,
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Rajesh Kumar',
      role: 'DevOps Engineer',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['AWS', 'Docker', 'Kubernetes'],
      experience: '15+ years',
      rating: 4.7,
      studentsGuided: 600,
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'Maya Singh',
      role: 'Mobile App Developer',
      company: 'Uber',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Flutter', 'React Native', 'iOS'],
      experience: '9+ years',
      rating: 4.8,
      studentsGuided: 450,
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    {
      name: 'David Wilson',
      role: 'Data Scientist',
      company: 'Netflix',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Python', 'Data Analytics', 'ML Ops'],
      experience: '11+ years',
      rating: 4.9,
      studentsGuided: 550,
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  ];

  const mentorshipStats = [
    { label: 'Expert Mentors', value: '100+', icon: Users },
    { label: 'Students Guided', value: '10K+', icon: Award },
    { label: 'Average Rating', value: '4.8/5', icon: Star },
    { label: 'Success Rate', value: '92%', icon: Award }
  ];

  return (
    <section id="mentors" className="py-20 bg-[#f0f0f3] dark:bg-[#1b1b1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Meet Our <span className="text-yellow-500">Expert Mentors</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn from industry leaders who will guide you to success with real-world knowledge.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mentorshipStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/30 dark:bg-[#1f1f1f]/30 rounded-3xl shadow-[6px_6px_20px_#d1d9e6,_-6px_-6px_20px_#ffffff] dark:shadow-[6px_6px_16px_#151515,_-6px_-6px_16px_#232323] p-6 transform transition-all hover:scale-[1.03] duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-[#2c2c2c] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{mentor.name}</h3>
                <p className="text-sm text-yellow-600">{mentor.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{mentor.company}</p>
              </div>
              <div className="mt-4 flex justify-center items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-gray-700 dark:text-white">{mentor.rating}</span>
                <span className="text-gray-400 dark:text-gray-500">{mentor.studentsGuided}+ students</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {mentor.expertise.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs bg-[#f0f0f3] dark:bg-[#2c2c2c] rounded-full shadow-inner text-gray-600 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <a href={mentor.linkedin} className="hover:scale-110 transition-all">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </a>
                <a href={mentor.github} className="hover:scale-110 transition-all">
                  <Github className="w-5 h-5 text-gray-800 dark:text-white" />
                </a>
                <a href={mentor.twitter} className="hover:scale-110 transition-all">
                  <Twitter className="w-5 h-5 text-sky-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsTrainers;

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Full-Stack Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      description: 'Senior developer with 8+ years experience in building scalable web applications.',
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
      description: 'DevOps specialist ensuring reliable deployments and scalable infrastructure.',
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Emily Davis',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Mobile expert creating seamless cross-platform applications.',
      social: { github: '#', linkedin: '#', email: '#' }
    }
  ];

  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
            Meet Our Developers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented team of experts brings years of experience and passion for creating exceptional software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.github}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-500/70 transition-colors"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-500/70 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={member.social.email}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-orange-500/70 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold font-montserrat text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 dark:text-yellow-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-100 dark:bg-yellow-900/30 text-orange-800 dark:text-yellow-300 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Want to work with our talented team? Let's discuss your project requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-yellow-400 dark:to-orange-500 hover:from-orange-600 hover:to-yellow-600 dark:hover:from-yellow-500 dark:hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;

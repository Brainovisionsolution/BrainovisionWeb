import React from 'react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-orange-600 dark:text-yellow-300 mb-4">
            Technologies We Use
          </h2>
          <p className="text-xl text-orange-500 dark:text-yellow-200 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-orange-200 dark:border-yellow-700 hover:border-orange-400 dark:hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold font-montserrat text-orange-600 dark:text-yellow-300 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-yellow-900/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-orange-600 dark:text-yellow-200 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <p className="text-orange-500 dark:text-yellow-200 mb-8">
            And many more technologies tailored to your specific needs
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 dark:from-yellow-500 dark:to-orange-500 dark:hover:from-yellow-600 dark:hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Discuss Your Tech Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

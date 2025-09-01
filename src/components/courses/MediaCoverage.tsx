import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

interface MediaCoverageProps {
  darkMode: boolean;
}

const MediaCoverage: React.FC<MediaCoverageProps> = ({ darkMode }) => {
  const mediaArticles = [
    {
      publication: 'TechCrunch',
      headline: 'NextWave raises ₹27 Cr to democratize tech education in India',
      date: 'Nov 2024',
      category: 'Funding News',
      color: 'green'
    },
    {
      publication: 'Economic Times',
      headline: 'EdTech startup NextWave sees 300% growth in learner enrollments',
      date: 'Oct 2024',
      category: 'Business Growth',
      color: 'blue'
    },
    {
      publication: 'Business Standard',
      headline: 'NextWave partners with 2000+ companies for skill-based hiring',
      date: 'Sep 2024',
      category: 'Partnerships',
      color: 'purple'
    },
    {
      publication: 'Mint',
      headline: 'How NextWave is bridging the tech talent gap in India',
      date: 'Aug 2024',
      category: 'Industry Impact',
      color: 'orange'
    },
    {
      publication: 'Forbes India',
      headline: 'NextWave among top 10 EdTech platforms transforming careers',
      date: 'Jul 2024',
      category: 'Recognition',
      color: 'red'
    },
    {
      publication: 'Inc42',
      headline: 'NextWave graduates land high-paying jobs at Google, Microsoft',
      date: 'Jun 2024',
      category: 'Success Stories',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'from-green-500 to-emerald-500',
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-violet-500',
      orange: 'from-orange-500 to-amber-500',
      red: 'from-red-500 to-pink-500',
      teal: 'from-teal-500 to-cyan-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 p-4 rounded-2xl mb-6 ${
            darkMode 
              ? 'bg-gray-800 shadow-dark-neumorphism' 
              : 'bg-white shadow-neumorphism'
          }`}>
            <Newspaper className={`h-8 w-8 ${darkMode ? 'text-yellow-400' : 'text-orange-500'}`} />
          </div>
          
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured in Leading Media
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our impact and achievements have been recognized by top publications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaArticles.map((article, index) => (
            <div key={index} className={`group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
              darkMode 
                ? 'bg-gray-800 shadow-dark-neumorphism hover:shadow-dark-neumorphism-hover' 
                : 'bg-white shadow-neumorphism hover:shadow-neumorphism-hover'
            }`}>
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${getColorClasses(article.color)}`}></div>
              
              <div className="p-8">
                {/* Publication and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-lg font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.publication}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {article.date}
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {article.category}
                </div>

                {/* Headline */}
                <h3 className={`text-lg font-bold mb-6 leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {article.headline}
                </h3>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className={`flex items-center space-x-2 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'text-yellow-400' : 'text-orange-500'
                  }`}>
                    <span>Read Article</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  
                  <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-400' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Kit CTA */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-3xl ${
            darkMode 
              ? 'bg-gray-800 shadow-dark-neumorphism' 
              : 'bg-white shadow-neumorphism'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Media & Press Inquiries
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get access to our press kit, high-resolution assets, and media resources
            </p>
            <button className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-dark-neumorphism' 
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-neumorphism-hover'
            }`}>
              Download Press Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
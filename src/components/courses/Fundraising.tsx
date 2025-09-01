import React from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

interface FundraisingProps {
  darkMode: boolean;
}

const Fundraising: React.FC<FundraisingProps> = ({ darkMode }) => {
  const investors = [
    { name: 'Speciale Invest', type: 'Lead Investor' },
    { name: 'Orio Ventures', type: 'Strategic Partner' },
    { name: 'Better Capital', type: 'Early Supporter' },
    { name: 'Mumbai Angels', type: 'Angel Network' }
  ];

  const milestones = [
    { icon: <Users className="h-6 w-6" />, label: 'Learners Impacted', value: '50,000+' },
    { icon: <Award className="h-6 w-6" />, label: 'Successful Placements', value: '8,500+' },
    { icon: <Target className="h-6 w-6" />, label: 'Partner Companies', value: '2,000+' },
    { icon: <TrendingUp className="h-6 w-6" />, label: 'Average Salary Hike', value: '300%' }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 p-4 rounded-2xl mb-6 ${
            darkMode 
              ? 'bg-gray-900 shadow-dark-neumorphism' 
              : 'bg-gray-50 shadow-neumorphism'
          }`}>
            <TrendingUp className={`h-8 w-8 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
            <span className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ₹27 Cr
            </span>
          </div>
          
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Successfully Fundraised
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Backed by leading investors to accelerate our mission of democratizing quality tech education
          </p>
        </div>

        {/* Investors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investors.map((investor, index) => (
            <div key={index} className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900 shadow-dark-neumorphism' 
                : 'bg-gray-50 shadow-neumorphism'
            }`}>
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold ${
                index % 3 === 0 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : index % 3 === 1
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              }`}>
                {investor.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {investor.name}
              </h3>
              
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {investor.type}
              </p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className={`p-8 rounded-3xl ${
          darkMode 
            ? 'bg-gray-900 shadow-dark-neumorphism' 
            : 'bg-gray-50 shadow-neumorphism'
        }`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Key Milestones Achieved
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className={`mb-4 flex justify-center ${
                  darkMode ? 'text-yellow-400' : 'text-orange-500'
                }`}>
                  {milestone.icon}
                </div>
                
                <div className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {milestone.value}
                </div>
                
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What's Next?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gray-900 shadow-dark-neumorphism' 
                : 'bg-white shadow-neumorphism'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-500'
              }`}>
                100K+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Learners by 2025
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gray-900 shadow-dark-neumorphism' 
                : 'bg-white shadow-neumorphism'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-green-400' : 'text-green-500'
              }`}>
                50+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                New Courses
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gray-900 shadow-dark-neumorphism' 
                : 'bg-white shadow-neumorphism'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-purple-400' : 'text-purple-500'
              }`}>
                Global
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Market Expansion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundraising;
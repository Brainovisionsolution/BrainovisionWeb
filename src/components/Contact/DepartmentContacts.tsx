import React from 'react';
import { Mail, Users, Headphones, Briefcase, Heart } from 'lucide-react';

interface DepartmentContactsProps {
  isDarkMode: boolean;
}

export const DepartmentContacts: React.FC<DepartmentContactsProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const departments = [
    {
      icon: Briefcase,
      name: 'Sales Department',
      email: 'sales@company.com',
      description: 'New business inquiries and partnerships',
      color: 'text-blue-500',
      bgColor: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
    },
    {
      icon: Headphones,
      name: 'Support Team',
      email: 'support@company.com',
      description: 'Technical support and customer service',
      color: 'text-green-500',
      bgColor: isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
    },
    {
      icon: Heart,
      name: 'HR Department',
      email: 'hr@company.com',
      description: 'Career opportunities and employee relations',
      color: 'text-pink-500',
      bgColor: isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50'
    },
    {
      icon: Users,
      name: 'General Inquiries',
      email: 'info@company.com',
      description: 'General questions and information',
      color: 'text-orange-500',
      bgColor: isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Department Contacts
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Connect directly with the right team for faster assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl ${cardClasses} transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`p-4 rounded-2xl mb-4 ${dept.bgColor} w-fit`}>
                <dept.icon className={`w-8 h-8 ${dept.color}`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {dept.name}
              </h3>
              
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {dept.description}
              </p>
              
              <a
                href={`mailto:${dept.email}`}
                className={`flex items-center space-x-2 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-50'
                } group-hover:text-orange-500`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{dept.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
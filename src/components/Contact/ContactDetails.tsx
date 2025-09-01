import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactDetailsProps {
  isDarkMode: boolean;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  return (
    <div className={`p-6 rounded-3xl ${cardClasses} transition-all duration-300`}>
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Contact Details
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <MapPin className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              123 Business Street<br />
              Tech City, TC 12345<br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Mail className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              support@yourcompany.com
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Phone className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              +91-XXXXXXXXXX
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="font-semibold">Business Hours</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Mon-Fri, 10am – 6pm IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
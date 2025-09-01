import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface InteractiveMapProps {
  isDarkMode: boolean;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=123+Business+Street+Hyderabad+India', '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Visit Our Office
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Located in the heart of Hyderabad's business district
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6939094836!2d78.38897531489!3d17.424124888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1642675636789!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Office Address
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  123 Business Street<br />
                  Tech Park, Phase 2<br />
                  Hyderabad, Telangana 500081<br />
                  India
                </p>
                
                <button
                  onClick={handleGetDirections}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-[0_4px_16px_rgba(251,146,60,0.4)] hover:shadow-[0_6px_24px_rgba(251,146,60,0.6)] flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>

              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Parking Available
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Free parking available for visitors in our dedicated parking area.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Public Transport
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Easily accessible by metro and bus. Nearest metro station: Tech Park Metro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
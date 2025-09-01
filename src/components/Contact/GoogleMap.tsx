import React from 'react';

interface GoogleMapProps {
  isDarkMode: boolean;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  return (
    <div className={`mt-12 p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Find Us
      </h3>
      
      <div className="relative w-full h-96 rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2518916248137!2d-74.00601848459391!3d40.71277497932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e21f44f%3A0x335a7b8b2d4b4d7b!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1642675636789!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};
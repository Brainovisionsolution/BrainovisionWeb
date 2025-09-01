import React from 'react';

interface OfficeGalleryProps {
  isDark: boolean;
}

const OfficeGallery: React.FC<OfficeGalleryProps> = ({ isDark }) => {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Modern office space',
      title: 'Modern Workspace',
    },
    {
      url: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Team collaboration',
      title: 'Team Collaboration',
    },
    {
      url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Meeting room',
      title: 'Meeting Spaces',
    },
    {
      url: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Relaxation area',
      title: 'Break Areas',
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Team event',
      title: 'Team Events',
    },
    {
      url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Office kitchen',
      title: 'Kitchen & Dining',
    },
  ];

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Our Office & Culture</h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Take a glimpse into our vibrant workplace and see where the magic happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 group transform hover:-translate-y-2 ${
                isDark 
                  ? 'shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                  : 'shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                isDark ? 'bg-black bg-opacity-60' : 'bg-black bg-opacity-40'
              }`}>
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeGallery;
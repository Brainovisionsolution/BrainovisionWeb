import React from 'react';
import { Calendar, Eye } from 'lucide-react';

interface Image {
  id: string;
  src: string;
  title: string;
  category: string;
  date: string;
  views: number;
}

interface PhotoGridProps {
  images: Image[];
  onImageClick: (src: string) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ images, onImageClick }) => {
  return (
    <section className="py-16">
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative break-inside-avoid bg-white rounded-3xl shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-500 overflow-hidden cursor-pointer"
            onClick={() => onImageClick(image.src)}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {image.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {image.views}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGrid;
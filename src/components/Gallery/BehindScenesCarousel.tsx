import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

interface BehindScenesImage {
  id: string;
  src: string;
  caption: string;
}

interface BehindScenesCarouselProps {
  images: BehindScenesImage[];
}

const BehindScenesCarousel: React.FC<BehindScenesCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-neumorphism-outset mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Behind the Scenes</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Candid moments that show the real story behind our success
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-neumorphism-inset p-8 overflow-hidden">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.caption}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-orange-700" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 text-orange-700" />
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-orange-800 text-lg">
                {images[currentIndex]?.caption}
              </p>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-yellow-400 hover:bg-orange-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScenesCarousel;
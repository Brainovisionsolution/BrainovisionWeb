import React from 'react';
import { Camera, ArrowDown } from 'lucide-react';

const GalleryHero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with neumorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Neumorphic decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full shadow-neumorphism-inset animate-float"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-yellow-100 rounded-full shadow-neumorphism-outset animate-float-delayed"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-neumorphism-outset">
          <Camera className="w-10 h-10 text-orange-600" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-6 leading-tight">
          Our Visual
          <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Journey
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-orange-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Showcasing our story through captivating moments, achievements, and memorable experiences
        </p>
        
        <button className="group inline-flex items-center px-8 py-4 bg-white rounded-2xl shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-300 text-orange-700 font-semibold">
          <span className="mr-2">Explore Gallery</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
import React from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-5xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative bg-white rounded-2xl shadow-neumorphism-inset p-4">
          <img
            src={image}
            alt="Gallery image"
            className="max-w-full max-h-[80vh] object-contain rounded-xl"
          />
          
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
              <ZoomIn className="w-5 h-5 text-orange-700" />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
              <ZoomOut className="w-5 h-5 text-orange-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
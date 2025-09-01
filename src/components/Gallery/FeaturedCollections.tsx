import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  imageCount: number;
  featured: boolean;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ collections }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-neumorphism-outset mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Featured Collections</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Handpicked moments that tell our most important stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.filter(collection => collection.featured).map((collection) => (
            <div
              key={collection.id}
              className="group bg-white rounded-3xl shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.coverImage}
                  alt={collection.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                  {collection.imageCount} photos
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-orange-700 mb-4">
                  {collection.description}
                </p>
                <button className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                  View Collection
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
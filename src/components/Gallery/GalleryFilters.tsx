import React from 'react';
import { Filter } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface GalleryFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  categories: Category[];
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({ 
  activeFilter, 
  setActiveFilter, 
  categories 
}) => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-neumorphism-outset mb-4">
          <Filter className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Browse by Category</h2>
        <p className="text-orange-700 max-w-2xl mx-auto">
          Discover our curated collections organized by themes and moments
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-orange-500 text-white shadow-lg scale-105'
                : 'bg-white text-orange-700 shadow-neumorphism-outset hover:shadow-neumorphism-inset'
            }`}
          >
            <span className="flex items-center">
              {category.name}
              <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                activeFilter === category.id
                  ? 'bg-orange-400 text-orange-100'
                  : 'bg-yellow-100 text-orange-600'
              }`}>
                {category.count}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default GalleryFilters;
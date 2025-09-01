import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

// Total number of images
const totalImages = 300;

// Generate URLs for all workshop images in public folder
const workshopImages = Array.from({ length: totalImages }, (_, i) => `/assets/gallery/w${i + 1}.jpg`);

function Galleryy() {
  const [visibleCount, setVisibleCount] = useState(20); // Initially show 20 images

  // Load more images
  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 30, workshopImages.length));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      
      {/* Navigation */}
      <Navigation />

      {/* Background Gradient Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-300 via-orange-300 to-orange-500 opacity-30 dark:opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-200 via-orange-200 to-orange-400 opacity-30 dark:opacity-10 blur-3xl animate-pulse-slow"></div>

      <div className="py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-yellow-400 relative z-10">
          Workshops Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-6">
          {workshopImages.slice(0, visibleCount).map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800"
            >
              <img
                src={src}
                alt={`Workshop ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < workshopImages.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white font-semibold shadow-lg hover:from-yellow-500 hover:to-orange-500 transition-all"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Galleryy;

import React, { useState } from 'react';
import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryFilters from "@/components/Gallery/GalleryFilters";
import PhotoGrid from "@/components/Gallery/PhotoGrid";
import FeaturedCollections from "@/components/Gallery/FeaturedCollections";
import VideoGallery from "@/components/Gallery/VideoGallery";
import BehindScenesCarousel from "@/components/Gallery/BehindScenesCarousel";
import CallToAction from "@/components/Gallery/CallToAction";
import TestimonialsSection from "@/components/Gallery/TestimonialsSection";
import DownloadSection from "@/components/Gallery/DownloadSection";
import GalleryFooter from "@/components/Gallery/GalleryFooter";
import Lightbox from "@/components/Gallery/Lightbox";
import { galleryData } from "@/components/Gallery/data/galleryData";


const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeFilter === 'all' 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <GalleryHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryFilters 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          categories={galleryData.categories}
        />
        
        <PhotoGrid 
          images={filteredImages}
          onImageClick={setLightboxImage}
        />
      </div>

      <FeaturedCollections collections={galleryData.featuredCollections} />
      
      <VideoGallery videos={galleryData.videos} />
      
      <BehindScenesCarousel images={galleryData.behindScenes} />
      
      <TestimonialsSection testimonials={galleryData.testimonials} />
      
      <CallToAction />
      
      <DownloadSection />
      
      <GalleryFooter />
      
      {lightboxImage && (
        <Lightbox 
          image={lightboxImage} 
          onClose={() => setLightboxImage(null)} 
        />
      )}
    </div>
  );
};

export default Gallery;
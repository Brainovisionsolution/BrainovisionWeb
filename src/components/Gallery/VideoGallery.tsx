import React from 'react';
import { Play, Video } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-neumorphism-outset mb-4">
            <Video className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Video Highlights</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Watch our most memorable moments come to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-orange-600 ml-1" />
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-orange-600 text-sm">
                  {video.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
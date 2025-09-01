import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tech: string[];
  category: string;
  description: string;
  longDescription: string;
  liveDemo?: string;
  github?: string;
  year: string;
  outcomes: string;
}

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const Modal = () => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={() => setIsModalOpen(false)}
    >
      <div 
        className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
          darkMode 
            ? 'bg-gray-800 shadow-[20px_20px_40px_#1f2937,-20px_-20px_40px_#374151]' 
            : 'bg-white shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          } transition-colors duration-200`}
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                darkMode ? 'bg-orange-900 text-orange-300' : 'bg-orange-100 text-orange-800'
              }`}>
                {project.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-orange-500">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
            </div>

            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h2>

            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.longDescription}
            </p>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
              <Award className="w-5 h-5 text-orange-500" />
              <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {project.outcomes}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 shadow-[2px_2px_4px_#1f2937,-2px_-2px_4px_#4b5563]' 
                        : 'bg-gray-100 text-gray-700 shadow-[2px_2px_4px_#d1d5db,-2px_-2px_4px_#ffffff]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-[3px_3px_6px_#1f2937,-3px_-3px_6px_#4b5563]' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
        darkMode 
          ? 'bg-gray-800 shadow-[15px_15px_30px_#1f2937,-15px_-15px_30px_#374151] hover:shadow-[20px_20px_40px_#1f2937,-20px_-20px_40px_#374151]' 
          : 'bg-white shadow-[15px_15px_30px_#d1d5db,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff]'
      }`}>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {!imageLoaded && (
            <div className={`w-full h-48 animate-pulse ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-sm text-orange-500">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
          </div>

          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 shadow-[inset_2px_2px_4px_#1f2937,inset_-2px_-2px_4px_#4b5563]' 
                    : 'bg-gray-100 text-gray-600 shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#ffffff]'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                darkMode ? 'text-orange-400' : 'text-orange-600'
              }`}>
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          {/* Outcomes */}
          <div className={`p-3 rounded-lg bg-gradient-to-r from-orange-500/10 to-yellow-500/10 ${
            darkMode ? 'border border-orange-500/20' : 'border border-orange-500/30'
          }`}>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {project.outcomes}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`flex items-center justify-center gap-2 flex-1 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-[3px_3px_6px_#1f2937,-3px_-3px_6px_#4b5563]' 
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
              } hover:shadow-lg`}
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>

            <div className="flex gap-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-[3px_3px_6px_#1f2937,-3px_-3px_6px_#4b5563]' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
                  } hover:shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#ffffff]`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-[3px_3px_6px_#1f2937,-3px_-3px_6px_#4b5563]' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
                  } hover:shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#ffffff]`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal />}
    </>
  );
};

export default ProjectCard;
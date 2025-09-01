import React from 'react';
import { MapPin, Clock, Building, Eye } from 'lucide-react';
import { Job } from "@/components/hiring/types/Job";

interface JobListingProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
  isDark: boolean;
}

const JobListing: React.FC<JobListingProps> = ({ jobs, onJobClick, isDark }) => {
  if (jobs.length === 0) {
    return (
      <section className={`py-12 transition-all duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className={`mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <Building size={48} className="mx-auto" />
            </div>
            <h3 className={`text-xl font-medium mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>No positions found</h3>
            <p className={`transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Try adjusting your search filters to find more opportunities.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 transition-all duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Open Positions</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>{jobs.length} position{jobs.length !== 1 ? 's' : ''} available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-2xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1 ${
                isDark 
                  ? 'bg-gray-900 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                  : 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
              }`}
              onClick={() => onJobClick(job)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-3 line-clamp-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{job.title}</h3>
                  <span className={`inline-block px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 text-yellow-400 shadow-inner-dark' 
                      : 'bg-gray-100 text-orange-600 shadow-inner-light'
                  }`}>
                    {job.department}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className={`flex items-center text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <MapPin size={16} className={`mr-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  {job.location}
                </div>
                <div className={`flex items-center text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Clock size={16} className={`mr-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  {job.type}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {job.experience}
                </span>
                <button className={`inline-flex items-center font-medium text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-orange-600 hover:text-orange-700'
                }`}>
                  <Eye size={16} className="mr-1" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
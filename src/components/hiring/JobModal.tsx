import React, { useState } from 'react';
import { X, MapPin, Clock, Building, DollarSign, Share2, Linkedin } from 'lucide-react';
import { Job } from "@/components/hiring/types/Job";
import ApplicationForm from './ApplicationForm';

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  if (!isOpen || !job) return null;

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this job opportunity: ${job.title} at TechCorp`);
    
    if (platform === 'linkedin') {
      window.open(`https://linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
    }
  };

  if (showApplicationForm) {
    return (
      <ApplicationForm
        job={job}
        isOpen={isOpen}
        onClose={() => {
          setShowApplicationForm(false);
          onClose();
        }}
        onBack={() => setShowApplicationForm(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Building size={16} className="mr-1" />
                {job.department}
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {job.type}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Role Description</h3>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Job Details</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-600">Experience Level</span>
                    <p className="font-medium">{job.experience}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Salary Range</span>
                    <div className="flex items-center">
                      <DollarSign size={16} className="text-green-600 mr-1" />
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Location</span>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Apply Now
                </button>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin size={16} className="mr-2 text-blue-600" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Share2 size={16} className="mr-2 text-green-600" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
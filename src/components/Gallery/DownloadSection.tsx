import React from 'react';
import { Download, FileImage, Briefcase } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const downloadItems = [
    {
      icon: FileImage,
      title: 'High-Resolution Images',
      description: 'Download our latest event photos in high quality',
      fileSize: '25 MB',
      format: 'ZIP'
    },
    {
      icon: Briefcase,
      title: 'Press Kit',
      description: 'Logo, company information, and media resources',
      fileSize: '12 MB',
      format: 'PDF'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-neumorphism-outset mb-4">
            <Download className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Download Resources</h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Access our media resources and high-quality images for your use
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {downloadItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-500 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-full shadow-neumorphism-outset flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-orange-900">{item.title}</h3>
                    <p className="text-orange-700">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-orange-600">
                    <span className="font-medium">{item.fileSize}</span> · {item.format}
                  </div>
                  <button className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
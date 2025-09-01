import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const GalleryFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-900 to-orange-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Gallery Pro</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Capturing moments, creating memories, and telling stories through the power of visual storytelling.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-orange-200 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-orange-200">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                123 Gallery Street, Creative City, CC 12345
              </li>
              <li className="flex items-center text-orange-200">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-orange-200">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                info@gallerypro.com
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-700 pt-8 text-center">
          <p className="text-orange-300">
            © 2024 Gallery Pro. All rights reserved. Made with ❤️ for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GalleryFooter;
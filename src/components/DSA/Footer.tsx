import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Youtube, Instagram,  } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/brainovision", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@brainovision", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/brainovision", label: "Instagram" },
  ];

  const quickLinks = [
    "Program Details",
    "Registration Guide", 
    "FAQs",
    "Contact Support",
    "Terms & Conditions",
    "Privacy Policy"
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-green-400">Brainovision</span> Solutions India Pvt. Ltd.
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading the revolution in technical education with innovative learning solutions. 
                We specialize in delivering world-class training programs that bridge the gap 
                between academic learning and industry requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>support@brainovision.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 74164 22509</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>2nd Floor,SSChambers ,Ayyappa Society , Madhapur, Hyderabad, Telangana, India - 500075</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="w-5 h-5 text-green-400" />
                <span>www.brainovision.in</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-green-400">Follow Us</h4>
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full border border-green-400/20 hover:border-green-400/40 hover:bg-green-400/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-green-400" />
                </motion.a>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-green-400/20">
              <h5 className="font-bold mb-3 text-green-400">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates about the bootcamp and future events
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                />
                <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Brainovision Solutions India Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🏆 India Book of Records Recognized</span>
              <span>🌍 Aiming for Guinness World Record</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-500 text-xs">
              Empowering the next generation of technologists through innovative education solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

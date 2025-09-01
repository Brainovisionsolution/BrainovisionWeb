import {
  Mail,
  Contact,
  Calendar,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Courses & Events", href: "#courses" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI/ML Training",
    "Data Science",
    "DevOps Consulting",
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Student Portal", href: "/portal" },
  ];

  return (
    <>
      {/* Top Logo */}
      <div className="bg-white py-12 px-4 text-center">
        <img
          src="/logos/bovyellow.png"
          alt="Brainovision Logo"
          className="w-40 mx-auto"
        />
      </div>

      {/* Wave Transition */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <path
            fill="url(#footerGradient)"
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Brainovision</h4>
              <p className="text-white/80 text-sm">
                Empowering future leaders with tech innovation, training, and industry-ready solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/90" />
                  <span className="text-white/80">support@brainovision.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Contact className="w-5 h-5 text-white/90" />
                  <span className="text-white/80">+91 9676369360</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-white/90" />
                  <span className="text-white/80">Mon-Fri 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Brainovision. All rights reserved.
            </p>

            {/* Policies */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {policies.map((policy) => (
                <a
                  key={policy.name}
                  href={policy.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {policy.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.linkedin.com/company/brainovision"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white text-white/70 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/brainovision"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white text-white/70 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/brainovision"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white text-white/70 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-white text-white/70 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Internships", href: "https://internships.brainovision.in", external: true },
    { name: "Courses", href: "/courses" },
    //{ name: "LMS", href: "https://edtech.brainovision.org",external:true },
    { name: "Workshops & Hackathons", href: "/workshopsAndHackathons" },
    { name: "Bootcamps", href: "/bootcamps" },
    { name: "Awards & Events", href: "https://beea.in",extrenal:true },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-[#111827]/70 backdrop-blur-xl border-b border-yellow-200 dark:border-yellow-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logos/bovyellow.png"
              alt="Brainovision Logo"
              className="w-28 sm:w-32 transition-transform hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className={`relative text-sm font-medium px-3 py-2 rounded-md transition-all duration-300
                  text-gray-800 dark:text-gray-200 
                  hover:text-yellow-600 dark:hover:text-yellow-400 
                  hover:bg-yellow-100/60 dark:hover:bg-yellow-900/20 hover:scale-105
                  ${item.name === "Internships" ? "font-semibold text-yellow-600 dark:text-yellow-400" : ""}`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Theme Switch */}
            <ThemeToggle />

            {/* Contact CTA */}
            <a href="/contactus">
              <Button
                className="ml-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 
                dark:from-yellow-600 dark:to-amber-700 dark:hover:from-yellow-700 dark:hover:to-amber-800 
                text-white shadow-lg border-2 border-yellow-300 dark:border-yellow-600 
                transition-all duration-300 hover:scale-105"
              >
                Let’s Talk
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              ) : (
                <Menu className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-t border-yellow-200 dark:border-yellow-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium px-3 py-2 rounded-md transition-all duration-300 
                  text-gray-800 dark:text-gray-200 
                  hover:text-yellow-600 dark:hover:text-yellow-400 
                  hover:bg-yellow-100/60 dark:hover:bg-yellow-900/20 
                  ${item.name === "Internships" ? "font-semibold text-yellow-600 dark:text-yellow-400" : ""}`}
              >
                {item.name}
              </a>
            ))}
            <a href="/contactus">
              <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 
                dark:from-yellow-600 dark:to-amber-700 dark:hover:from-yellow-700 dark:hover:to-amber-800 
                text-white transition-all duration-300 hover:scale-105">
                Let’s Talk
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

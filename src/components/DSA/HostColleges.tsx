import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HostColleges = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // 201 college logos
  const collegeLogos = Array.from({ length: 201 }, (_, i) => `/collegelogos/logo ${i + 1}.png`);

  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
            Our Hosts
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Host Colleges
          </h3>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            650+ Colleges & Universities collaborate with us to power the future of learning.
          </p>
        </div>

        {/* Logos Grid (10 per row) with alternating animations */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 items-center justify-items-center">
          {collegeLogos.map((logo, index) => {
            const animationDirection = Math.floor(index / 5) % 2 === 0 ? "fade-left" : "fade-right";
            return (
              <div
                key={index}
                className="p-2"
                data-aos={animationDirection}
                data-aos-delay={(index % 10) * 50}
              >
                <div className="bg-white/10 dark:bg-black/30 shadow-neu rounded-2xl p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-neu-glow">
                  <img
                    src={logo}
                    alt={`Host College Logo ${index + 1}`}
                    className="h-14 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Neumorphic Shadow Utilities */}
      <style>
        {`
          .shadow-neu {
            box-shadow: 6px 6px 20px rgba(255,165,0,0.3), -6px -6px 20px rgba(255,255,200,0.2);
          }
          .hover\\:shadow-neu-glow:hover {
            box-shadow: 8px 8px 25px rgba(255,165,0,0.5), -8px -8px 25px rgba(255,255,200,0.3);
          }
        `}
      </style>
    </section>
  );
};

export default HostColleges;

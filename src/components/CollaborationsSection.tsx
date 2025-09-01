import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CollaborationsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  // 201 college logos
  const collegeLogos = Array.from(
    { length: 201 },
    (_, i) => `/collegelogos/logo ${i + 1}.png`
  );

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-2">
            Our Network
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            College Tie-ups
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            650+ Colleges & Universities collaborate with us to power the
            future of learning.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 items-center justify-items-center">
          {collegeLogos.map((logo, index) => {
            const animationDirection =
              Math.floor(index / 5) % 2 === 0 ? "fade-left" : "fade-right";

            return (
              <div
                key={index}
                className="p-2 transform transition-transform duration-500 hover:scale-110"
                data-aos={animationDirection}
                data-aos-delay={(index % 10) * 50}
              >
                <img
                  src={logo}
                  alt={`College Logo ${index + 1}`}
                  className="h-14 object-contain dark:brightness-95"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

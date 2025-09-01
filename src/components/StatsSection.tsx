import { useEffect, useState } from "react";

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 650, suffix: "+", label: "Colleges Tied Up" },
    { number: 1000, suffix: "+", label: "Workshops Conducted" },
    { number: 400, suffix: "+", label: "Hackathons Conducted" },
    { number: 150000, suffix: "+", label: "Internships Offered" },
    { number: 80000, suffix: "+", label: "Global Alumni" },
    { number: 10, suffix: "+", label: "Years of Experience" },
    { number: 20, suffix: "+", label: "Expert Trainers" },
    { number: 200, suffix: "+", label: "Projects Completed" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CountUpAnimation = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-yellow-400">
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="stats-section"
      className="relative py-20 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Glow Bubbles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-100 dark:bg-orange-400/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-100 dark:bg-yellow-400/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-orange-500 dark:text-yellow-400 uppercase tracking-widest mb-2">
            Our Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-serif">
            Milestones That Define Our Journey
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <CountUpAnimation target={stat.number} suffix={stat.suffix} />
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

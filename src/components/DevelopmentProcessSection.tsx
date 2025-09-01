import { useEffect, useRef, useState } from "react";

export const DevelopmentProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    { name: "Planning", description: "Creating roadmap and architecture", icon: "📋" },
    { name: "Design", description: "UI/UX design and prototyping", icon: "🎨" },
    { name: "Development", description: "Coding and implementation", icon: "💻" },
    { name: "Testing", description: "Quality assurance and debugging", icon: "🧪" },
    { name: "Deployment", description: "Launch and go-live", icon: "🚀" },
    { name: "Support", description: "Maintenance and updates", icon: "🛠️" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-yellow-200/30 dark:bg-yellow-500/20 rounded-full blur-3xl pointer-events-none animate-slow-float" />
      <div className="absolute bottom-10 right-16 w-32 h-32 bg-orange-200/30 dark:bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-slow-float delay-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-800/40 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-semibold tracking-wide">
            Our Process
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4 font-serif">
            Product Development Process
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from start to finish.
          </p>
        </div>

        {/* Step Cards */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full animate-slide-right" />

          <div className="flex flex-wrap justify-center items-center gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex flex-col items-center transition-all duration-700 ease-out transform ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.25}s` }}
                >
                  <div className="w-16 h-16 mb-4 rounded-full bg-white dark:bg-gray-800 shadow-[inset_3px_3px_8px_#f0e6c0,inset_-3px_-3px_8px_#ffffff] dark:shadow-[inset_3px_3px_6px_#1e1e1e,inset_-3px_-3px_6px_#2a2a2a] flex items-center justify-center text-2xl text-yellow-600 dark:text-yellow-400 hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-[8rem]">{step.description}</p>
                </div>

                {/* Line between steps */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden lg:block w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-2 mt-8 transition-opacity duration-700 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 0.25 + 0.2}s` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

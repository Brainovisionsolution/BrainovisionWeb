import { useEffect, useRef, useState } from "react";

export const TrainingProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stages = [
    {
      name: "Beginner Level",
      description: "Foundation concepts and basics",
      icon: "📚",
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Real-time Project",
      description: "Hands-on industry projects",
      icon: "💼",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Internship",
      description: "Professional work experience",
      icon: "🏢",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Industry Certification",
      description: "Recognized credentials",
      icon: "🏆",
      color: "from-yellow-600 to-amber-600",
    },
    {
      name: "Placement",
      description: "Career opportunities",
      icon: "🎯",
      color: "from-amber-600 to-yellow-600",
    },
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
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-36 h-36 bg-yellow-100 dark:bg-yellow-900 rounded-full animate-float" />
        <div
          className="absolute bottom-16 right-16 w-28 h-28 bg-amber-100 dark:bg-amber-900 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-50 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-full text-sm font-semibold mb-4">
            Training Journey
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Training Process
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A structured pathway from beginner to industry-ready professional
          </p>
        </div>

        <div className="relative">
          {/* Line for large screens */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 dark:from-yellow-600 dark:via-amber-700 dark:to-orange-700 rounded-full"></div>

          {/* Stages */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`flex flex-col items-center group relative ${
                  isVisible ? "animate-bounce-in-drop" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Stage Circle with Neumorphism */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-4 bg-gradient-to-r ${stage.color} shadow-neu dark:shadow-neu-dark hover:shadow-neu-lg dark:hover:shadow-neu-lg-dark transition-transform duration-300 group-hover:scale-110 relative z-10`}
                >
                  {stage.icon}
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                  {stage.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center max-w-40">
                  {stage.description}
                </p>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 dark:bg-yellow-600 text-white text-xs font-bold rounded-full flex items-center justify-center z-20 animate-bounce">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neumorphism Shadow Styles */}
      <style>
        {`
          .shadow-neu {
            box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff;
          }
          .shadow-neu-dark {
            box-shadow: 6px 6px 12px #0f172a, -6px -6px 12px #1e293b;
          }
          .shadow-neu-lg {
            box-shadow: 10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff;
          }
          .shadow-neu-lg-dark {
            box-shadow: 10px 10px 20px #0f172a, -10px -10px 20px #1e293b;
          }
          @keyframes animate-bounce-in-drop {
            0% {
              opacity: 0;
              transform: translateY(-50px) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

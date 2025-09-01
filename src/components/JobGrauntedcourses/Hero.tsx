import React from "react";
import { Play, ArrowRight, Users, Award, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-white dark:bg-gray-900 px-6 md:px-20 py-20 transition-colors duration-700 flex flex-col items-center"
      aria-label="Hero Section"
    >
      {/* Main Title */}
      <h1
        className="text-center text-6xl md:text-7xl font-extrabold leading-tight
          bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-300
          bg-clip-text text-transparent
          max-w-5xl mb-20 select-text"
        style={{ lineHeight: 1.05 }}
      >
        AI Generalist: The Future of Technology
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-7xl items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-xl mx-auto space-y-12">
          {/* Badge */}
          <div
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full
            bg-white dark:bg-gray-800 shadow-md transition-colors duration-500 max-w-max"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              100% Placement Assistance*
            </span>
          </div>

          {/* Subheading */}
          <p className="text-3xl font-bold text-gray-900 dark:text-yellow-300 transition-colors duration-500">
            Premium{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Job-Oriented
            </span>{" "}
            Courses with{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              100% Placement
            </span>{" "}
            Support
          </p>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-yellow-200 transition-colors duration-500 max-w-lg">
            Learn. Build. Get Hired — in top MNCs & startups with
            industry-recognized training. Transform your career with expert
            mentorship and placement assistance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[{
                icon: <Users className="w-6 h-6 text-orange-500 dark:text-yellow-400" />,
                value: "5000+",
                label: "Students Placed",
              },
              {
                icon: <Building2 className="w-6 h-6 text-yellow-400 dark:text-yellow-300" />,
                value: "1000+",
                label: "Hiring Partners",
              },
              {
                icon: <Award className="w-6 h-6 text-orange-500 dark:text-yellow-400" />,
                value: "92%",
                label: "Placement Rate",
              },
            ].map(({ icon, value, label }, i) => (
              <div
                key={i}
                className="text-center p-5 bg-white dark:bg-gray-800 rounded-3xl shadow-md transition-colors duration-500"
              >
                <div className="mb-2 flex justify-center">{icon}</div>
                <div className="text-2xl font-extrabold text-gray-900 dark:text-yellow-300">
                  {value}
                </div>
                <div className="text-xs text-gray-500 dark:text-yellow-200">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mt-6">
            <button
              className="
                flex items-center justify-center gap-2 px-6 py-2 rounded-3xl
                bg-gradient-to-r from-orange-500 to-yellow-400 text-white
                font-semibold text-sm
                shadow-neumorphism-light hover:shadow-neumorphism-hover transition-shadow duration-300
              "
            >
              <span>Apply for Free Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="
                flex items-center justify-center gap-2 px-6 py-2 rounded-3xl
                bg-white dark:bg-gray-700
                font-semibold text-sm
                text-gray-900 dark:text-yellow-300
                shadow-neumorphism-light hover:shadow-neumorphism-hover transition-shadow duration-300
              "
            >
              <Play className="w-4 h-4 text-orange-500 dark:text-yellow-400" />
              <span>View Curriculum</span>
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center space-x-5 pt-10">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      i === 1
                        ? "from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"
                        : i === 2
                        ? "from-green-500 to-green-700 dark:from-green-700 dark:to-green-900"
                        : i === 3
                        ? "from-purple-500 to-purple-700 dark:from-purple-700 dark:to-purple-900"
                        : "from-pink-500 to-pink-700 dark:from-pink-700 dark:to-pink-900"
                    } border-2 border-white dark:border-gray-900`}
                  />
                ))}
              </div>
              <span className="text-gray-700 dark:text-yellow-300 font-medium text-sm">
                Join 5000+ successful careers
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Robot PNG */}
        <div className="max-w-lg mx-auto w-full flex justify-center">
          <img
            src="/models/robo.png"
            alt="AI Generalist Robot"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Neumorphism button shadows */}
      <style jsx>{`
        .shadow-neumorphism-light {
          box-shadow: 6px 6px 10px #d9d9d9, -6px -6px 12px #ffffff;
        }
        .shadow-neumorphism-hover {
          box-shadow: 8px 8px 15px #c4c4c4, -8px -8px 18px #ffffff;
        }
      `}</style>
    </section>
  );
}

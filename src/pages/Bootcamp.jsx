import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Bootcamps = () => {
  const bootcamps = [
    {
      title: "Techedge Bootcamp",
      description: "Hands-on full-stack learning program for future engineers.",
      image: "/images/techedge.jpg",
      link: "https://techedge.brainovision.in",
    },
    {
      title: "DSA Bootcamp",
      description: "Master Data Structures & Algorithms with real-world problems.",
      image: "/images/dsaa.jpg",
      link: "/DSA",
    },
    {
      title: "AI & ML Bootcamp",
      description: "Dive deep into Artificial Intelligence and Machine Learning.",
      image: "/images/Alml.png",
      link: "/bootcamps/ai-ml",
    },
    {
      title: "Cloud Computing Bootcamp",
      description: "Learn AWS, Azure, and Google Cloud to become cloud-ready.",
      image: "/images/cc.avif",
      link: "/bootcamps/cloud",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Navigation/Header */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 dark:text-yellow-400 mb-10 transition-colors duration-500">
          Upcoming Bootcamps
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bootcamps.map((camp, index) => (
            <Link
              key={index}
              to={camp.link}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-neu hover:shadow-neu-hover transition-all duration-300 overflow-hidden"
            >
              <img
                src={camp.image}
                alt={camp.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-orange-500 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {camp.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{camp.description}</p>
                <span className="mt-4 inline-block text-orange-500 dark:text-yellow-400 font-semibold">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Neumorphism shadows */}
      <style>
        {`
          .shadow-neu {
            box-shadow: 8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.7);
          }
          .shadow-neu-hover {
            box-shadow: 6px 6px 15px rgba(0,0,0,0.15), -6px -6px 15px rgba(255,255,255,0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Bootcamps;

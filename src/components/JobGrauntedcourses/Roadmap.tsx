import React from "react";

export default function Roadmap() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
          AI Learning Journey
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Follow the path from beginner to AI professional
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/roadmap.png"
          alt="AI Learning Roadmap"
          className="w-3/4 max-w-4xl h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

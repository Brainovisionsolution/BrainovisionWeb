import React from "react";

export const Collabs = () => {
  const collaborators = [
    "/collabs/t-hub-logo.png",
    "/collabs/MATH-Final-Logo.png",
    "/collabs/AICTE.png",
    "/collabs/APSCHE.png",
    "/collabs/GOVOFTG.png",
    "/collabs/Nascoom.svg",
  ];

  return (
    <section className="w-full bg-white dark:bg-zinc-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 dark:text-orange-400 mb-4">
          Our Collaborations
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          We proudly partner with leaders across government, industry, and innovation.
        </p>

        {/* Moving Logo Marquee */}
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-16 w-max animate-scroll-horizontal">
            {[...collaborators, ...collaborators].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`collab-${idx}`}
                className="h-16 object-contain transition-transform duration-300 hover:scale-105 brightness-100 dark:brightness-90"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

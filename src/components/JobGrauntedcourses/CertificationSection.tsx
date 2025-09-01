import React from "react";

export default function CertificationSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-xl transition-colors duration-700"
      aria-label="Certification Section"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-orange-600 dark:text-yellow-400 drop-shadow-md">
          🎓 Get Certified & Showcase Your Expertise
        </h2>
        <p className="text-lg text-black dark:text-yellow-200 mb-12 leading-relaxed">
          Successfully complete the program and receive an industry-recognized AI Generalist certificate.  
          Share your achievement with employers, boost your career opportunities, and join an elite community of certified professionals.
        </p>

        {/* Sample Certificate Card */}
        <div className="relative mx-auto w-3/4 md:w-2/3 lg:w-1/2 rounded-xl shadow-2xl overflow-hidden border-8 border-orange-500 dark:border-yellow-400 bg-white dark:bg-gray-800 transition-colors duration-500">
          <img
            src="/courses/certification1.jpg"
            alt="Sample Certificate"
            className="w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent p-6">
            <h3 className="text-2xl font-semibold text-orange-400 dark:text-yellow-300">
              Sample AI Generalist Certificate
            </h3>
            <p className="text-sm text-orange-200 dark:text-yellow-200 mt-1">
              See how your certificate will look after completion.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-600 dark:from-yellow-500 dark:to-orange-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:from-yellow-500 hover:to-orange-700 transition-colors duration-300"
            onClick={() => alert("Certification enrollment coming soon!")}
            aria-label="Enroll for Certification"
          >
            Get Certified Now
          </button>
        </div>
      </div>
    </section>
  );
}

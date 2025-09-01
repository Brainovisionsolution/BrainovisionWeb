import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <img
        src="/images/under-construction.svg" // Optional image
        alt="Under Construction"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        This page is under construction. We're working hard to bring you the best about our vision, mission, and story.
      </p>
    </div>
  );
};

export default About;

import React from 'react';

const Internships = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <img
        src="/images/under-construction.svg" // Replace or customize if needed
        alt="Under Construction"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">Internships</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Our internship programs are loading! Hands-on experience, mentorship, and real-world projects — launching soon.
      </p>
    </div>
  );
};

export default Internships;

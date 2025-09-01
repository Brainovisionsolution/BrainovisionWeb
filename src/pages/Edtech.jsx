import React from 'react';

const Edtech = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <img
        src="/images/under-construction.svg" // Replace with your actual illustration if needed
        alt="Under Construction"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">EdTech</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Our EdTech innovations are in the making. Soon, you'll find smart tools, platforms, and products designed for better learning.
      </p>
    </div>
  );
};

export default Edtech;

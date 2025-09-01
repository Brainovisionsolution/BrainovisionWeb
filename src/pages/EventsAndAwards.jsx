import React from 'react';

const EventsAndAwards = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <img
        src="/images/under-construction.svg" // Update with your preferred image
        alt="Under Construction"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">Events & Awards</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        We're curating an inspiring archive of our events, achievements, and awards. Stay tuned for stories that celebrate excellence and innovation.
      </p>
    </div>
  );
};

export default EventsAndAwards;

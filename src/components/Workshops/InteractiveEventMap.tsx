import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define event structure
interface Event {
  name: string;
  type: 'hackathon' | 'workshop';
  date: string;
  participants: number;
}

// States with event data
const stateEvents: Record<string, Event[]> = {
  Telangana: [{ name: 'Hyderabad Hackfest', type: 'hackathon', date: '2024-03-01', participants: 350 }],
  'Andhra Pradesh': [{ name: 'Vizag Dev Day', type: 'workshop', date: '2024-03-03', participants: 220 }],
  Karnataka: [{ name: 'Bangalore AI Lab', type: 'hackathon', date: '2024-03-05', participants: 500 }],
  Maharashtra: [{ name: 'Pune Tech Sprint', type: 'workshop', date: '2024-03-08', participants: 140 }],
  'Tamil Nadu': [{ name: 'Chennai IoT Expo', type: 'hackathon', date: '2024-03-10', participants: 250 }],
};

const RealEventMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Our Event Coverage Across <span className="text-orange-500">India</span>
      </h2>

      {/* Static India Map Image */}
      <div className="mx-auto max-w-2xl rounded-xl overflow-hidden shadow-lg">
        <img
          src="/india .jpg" // image should be inside public/ folder
          alt="India Event Coverage Map"
          className="w-full h-auto"
        />
      </div>

    </section>
  );
};

export default RealEventMap;

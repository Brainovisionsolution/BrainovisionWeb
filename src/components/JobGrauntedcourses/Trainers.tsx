import React from "react";

const mentors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Lead AI Architect",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Priya Sharma",
    role: "Senior Full Stack Developer",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Amit Singh",
    role: "Cloud Solutions Architect",
    image:
      "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sarah Johnson",
    role: "Data Science Lead",
    image:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Vikram Patel",
    role: "Cybersecurity Expert",
    image:
      "https://images.pexels.com/photos/3778874/pexels-photo-3778874.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function MentorsPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Meet Our <span className="text-yellow-400">Expert Mentors</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Learn from industry veterans who are shaping the future of technology.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {mentors.map(({ name, role, image }, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-3 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-gray-50 dark:bg-gray-800"
          >
            <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-yellow-400">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

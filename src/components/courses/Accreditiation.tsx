import React from "react";

interface AccreditationProps {
  darkMode: boolean;
}

const Accreditation: React.FC<AccreditationProps> = ({ darkMode }) => {
  const accreditations = [
    { name: "", logo: "/collabs/t-hub-logo.png" },
    { name: "", logo: "/collabs/MATH-Final-Logo.png" },
    { name: "", logo: "/collabs/AICTE.png" },
    { name: "", logo: "/collabs/Nascoom.svg" },
    { name: "", logo: "/collabs/APSCHE.png" },
    { name: "", logo: "/collabs/GOVOFTG.png" },
    { name: "", logo: "/collabs/MST.svg" },
  ];

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Recognized & Accredited
          </h2>
          <p
            className={`text-lg max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Officially trusted and acknowledged by leading industry, government,
            and educational institutions.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {accreditations.map((accred, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <img
                src={accred.logo}
                alt={accred.name}
                className="h-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <h3
                className={`text-base font-semibold max-w-[150px] ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {accred.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;

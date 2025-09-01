import React from "react";

interface AwardsProps {
  darkMode?: boolean;
  awardImages?: string[]; // Array of ceremony images
  awardIcon?: string; // Award logo/image
}

const Awards: React.FC<AwardsProps> = ({
  darkMode = false,
  awardImages = [
    "/images/award1.jpg",
    "/images/award2.jpg",
    "/images/award3.jpg",
    "/images/award4.jpg",
  ],
  awardIcon = "/images/award5.jpg",
}) => {
  return (
    <section
      className={`relative py-20 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-orange-400 to-yellow-500 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Award Description */}
          <div>
            <h2
              className={`text-4xl font-extrabold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span
                className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              >
                Indian Book of Records
              </span>
            </h2>

            <p
              className={`text-lg mb-4 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Brainovision Solutions proudly received the{" "}
              <strong className="text-orange-500">Indian Book of Records</strong>{" "}
              recognition for successfully conducting one of the{" "}
              <strong className="text-yellow-500">
                largest Faculty Development Programs (FDP)
              </strong>{" "}
              in India.
            </p>

            <p
              className={`mb-4 leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              The FDP impacted{" "}
              <strong className="text-orange-500">
                faculty members from over 400+ colleges
              </strong>{" "}
              across the country and set a new record for the{" "}
              <strong className="text-yellow-500">
                highest number of participants
              </strong>{" "}
              in a single nationwide program.
            </p>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              This milestone reflects our dedication to{" "}
              <span className="font-semibold">empowering educators</span>,{" "}
              <span className="font-semibold">fostering knowledge-sharing</span>, and driving{" "}
              <span className="font-semibold">large-scale educational transformation</span> in India.
            </p>
          </div>

          {/* Right Side: Award Icon + Ceremony Gallery */}
          <div className="space-y-8">
            {/* Award Icon */}
            {awardIcon && (
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-xl">
                  <img
                    src={awardIcon}
                    alt="Indian Book of Records Award"
                    className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-full bg-white p-4"
                  />
                </div>
              </div>
            )}

            {/* Ceremony Images */}
            {awardImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {awardImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Award Ceremony ${idx + 1}`}
                      className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                      Ceremony {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

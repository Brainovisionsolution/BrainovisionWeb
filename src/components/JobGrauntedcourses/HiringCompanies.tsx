import React from "react";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Intel", logo: "/company/intel.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Uber", logo: "/company/uber.png" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Salesforce", logo: "/company/salesforce.png" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Adobe", logo: "/company/Adobe.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Snapchat", logo: "/company/snapchat.jpg" },
  { name: "Twitter", logo: "/company/Twitter.png"},
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Dropbox", logo: "/company/dropbox.png" },
  { name: "Shopify", logo: "/company/shopify.png" },
  { name: "Zoom", logo: "/company/Zoom.png" },
  { name: "Slack", logo: "/company/Slack.png" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Atlassian", logo: "/company/Atlassian.png" },
  { name: "RedHat", logo: "/company/redhat.png" },
  { name: "GitLab", logo: "/company/GitLab.png" },
  { name: "Nvidia", logo: "/company/Nvidia.png" },
];


// Split into rows of 10
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const companyRows = chunkArray(companies, 10);

export default function RotatingHiringCompanies() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 md:px-12 font-sans transition-colors duration-500">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-4">
  <h1
    className="text-5xl font-extrabold mb-6 tracking-tight text-black-500"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    Our Alumni Are Leading at These Top Companies
  </h1>
  <p className="max-w-3xl mx-auto text-lg text-yellow-400">
    Join us today and get hired by industry leaders! Build your skills,
    shape your future, and become part of this amazing success story.
  </p>
</div>


      {/* Rotating Rows */}
      <div className="space-y-14 overflow-hidden">
        {companyRows.map((row, rowIndex) => {
          const direction = rowIndex % 2 === 0 ? "rotateLeft" : "rotateRight";
          return (
            <div
              key={rowIndex}
              className="flex items-center space-x-14 whitespace-nowrap"
              style={{
                animation: `${direction} ${30 + rowIndex * 5}s linear infinite`,
              }}
            >
              {/* Duplicate the logos twice for smooth infinite rotation */}
              {[...row, ...row].map(({ name, logo }, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`${name} logo`}
                  loading="lazy"
                  className="h-12 w-auto object-contain bg-white p-2 rounded-md shadow-sm dark:bg-gray-100"
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-colors duration-300"
          onClick={() => alert("Get started now!")}
        >
          Join Now & Get Hired
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes rotateLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes rotateRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

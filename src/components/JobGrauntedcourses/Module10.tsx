import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module10: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "10.1 Resume Building",
      points: [
        "AI-focused resumes",
        "Project highlights and achievements",
      ],
    },
    {
      title: "10.2 GitHub & Portfolio",
      points: [
        "Structuring repos",
        "Writing impactful READMEs",
      ],
    },
    {
      title: "10.3 LinkedIn Profile Optimization",
      points: [
        "Keywords and endorsements",
        "Posting technical content",
      ],
    },
    {
      title: "10.4 Interview Preparation",
      points: [
        "Technical questions by role",
        "HR round practice",
      ],
    },
    {
      title: "10.5 Freelancing Guidance",
      points: [
        "Platforms: Upwork, Freelancer, Toptal",
        "Proposal writing, portfolio showcase",
      ],
    },
    {
      title: "10.6 Mock Interviews & Job Assistance",
      points: [
        "Live technical interviews",
        "Resume reviews and referrals",
      ],
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gray-900 py-10 px-6 md:px-16 transition-colors duration-500"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6 transition-colors duration-500">
           Module 10: Career Support & Soft Skills
        </h2>

        {/* Topics */}
        <div className="space-y-6 mb-10">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
                {topic.title}
              </h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What You’ll Learn */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            ✅ What You’ll Learn in This Module
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>How to create AI-focused professional resumes</li>
            <li>Build and maintain impactful GitHub portfolios</li>
            <li>Optimize LinkedIn profiles for visibility</li>
            <li>Prepare for technical and HR interviews</li>
            <li>Freelancing and job market navigation skills</li>
            <li>Experience mock interviews and job referrals</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>AI Professional</li>
            <li>Technical Job Seeker</li>
            <li>Freelance AI Consultant</li>
            <li>Interview-ready Candidate</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹5 LPA – ₹12 LPA (India, Entry to Mid Level) | $60K – $130K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced career development strategies</li>
            <li>Networking and professional growth</li>
            <li>Continuous learning in emerging AI fields</li>
            <li>Building leadership and communication skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module10;

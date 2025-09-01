import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module9: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "9.1 Problem Selection",
      points: [
        "Real-world problem identification",
        "KPIs and expected outcomes",
      ],
    },
    {
      title: "9.2 Project Execution",
      points: [
        "Dataset sourcing and EDA",
        "Model building and tuning",
      ],
    },
    {
      title: "9.3 Deployment & Demo",
      points: [
        "Hosting model (Streamlit, Flask)",
        "UI/UX for final demo",
      ],
    },
    {
      title: "9.4 Documentation & Presentation",
      points: [
        "Writing README, blog posts",
        "Creating project portfolios",
      ],
    },
    {
      title: "9.5 Sample Projects",
      points: [
        "Resume Screener using NLP",
        "Real-time Face Mask Detection",
        "Chatbot for college admission queries",
        "AI-powered financial fraud detector",
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
           Module 9: Capstone Projects
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
            <li>How to identify and select real-world AI problems</li>
            <li>End-to-end project execution skills</li>
            <li>Model deployment and UI/UX integration</li>
            <li>Effective documentation and presentation</li>
            <li>Building a professional AI project portfolio</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>AI Project Lead</li>
            <li>ML Engineer</li>
            <li>Data Scientist</li>
            <li>AI Solution Architect</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹8 LPA – ₹15 LPA (India, Mid Level) | $90K – $150K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced AI model optimization techniques</li>
            <li>Scalable deployment with Kubernetes and Docker</li>
            <li>Leadership and project management skills</li>
            <li>Continuous integration and delivery (CI/CD) for AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module9;

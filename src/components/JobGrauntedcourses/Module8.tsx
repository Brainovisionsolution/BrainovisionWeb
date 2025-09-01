import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module8: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "8.1 No-Code Tools",
      points: [
        "Teachable Machine, Runway ML",
        "Lobe for classification tasks",
      ],
    },
    {
      title: "8.2 Streamlit & Gradio",
      points: [
        "Rapid app development",
        "Building ML-powered dashboards",
      ],
    },
    {
      title: "8.3 API Development with Flask",
      points: [
        "REST API creation",
        "Connecting ML model to endpoints",
      ],
    },
    {
      title: "8.4 Model Deployment",
      points: [
        "Deploy to Heroku, Render",
        "Using Hugging Face Spaces",
      ],
    },
    {
      title: "8.5 Automation with Python",
      points: [
        "Web scraping using BeautifulSoup",
        "Browser automation with Selenium",
        "Task automation with schedulers",
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
           Module 8: AI Tools, Automation & Deployment
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
            <li>Using no-code AI tools for rapid prototyping</li>
            <li>Building interactive ML apps with Streamlit & Gradio</li>
            <li>Creating and deploying REST APIs for ML models</li>
            <li>Deploying ML models on cloud platforms</li>
            <li>Automating workflows with Python scripting</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>AI Application Developer</li>
            <li>ML Deployment Engineer</li>
            <li>Automation Engineer</li>
            <li>Data Engineer (Entry Level)</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹5 LPA – ₹10 LPA (India, Entry Level) | $60K – $110K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced API design and microservices</li>
            <li>Cloud-native deployments and Kubernetes</li>
            <li>Advanced automation with AI-powered pipelines</li>
            <li>Scalable ML model monitoring and maintenance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module8;

import React from "react";

const Module1: React.FC = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-10 px-6 md:px-16 transition-colors duration-500"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Module Title */}
        <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-8 transition-colors duration-500">
           Module 1: Foundation of AI & Programming
        </h2>

        {/* 1.1 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.1 What is Artificial Intelligence?
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Definition and Goals of AI</li>
            <li>Differences between AI, Machine Learning, and Deep Learning</li>
            <li>Real-world Impact: AI in daily life and industries</li>
          </ul>
        </div>

        {/* 1.2 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.2 History and Evolution of AI
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Turing Test and AI origins</li>
            <li>AI Winters and resurgence</li>
            <li>Rise of Deep Learning and Generative AI</li>
          </ul>
        </div>

        {/* 1.3 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.3 Types of AI
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>ANI (Narrow AI): Task-specific intelligence</li>
            <li>AGI (General AI): Human-like capabilities (theoretical)</li>
            <li>ASI (Superintelligence): Beyond human intellect</li>
          </ul>
        </div>

        {/* 1.4 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.4 Applications of AI
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Healthcare: Disease prediction, drug discovery</li>
            <li>Finance: Fraud detection, robo-advisors</li>
            <li>Retail: Personalization, chatbots</li>
            <li>Smart Cities: Surveillance, traffic control</li>
          </ul>
        </div>

        {/* 1.5 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.5 Python Programming Essentials
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Data types, variables, operators</li>
            <li>Conditionals, loops, functions</li>
            <li>Data structures: Lists, Tuples, Sets, Dictionaries</li>
            <li>Exception handling and file operations</li>
          </ul>
        </div>

        {/* 1.6 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.6 Scientific Libraries
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>NumPy: Arrays, broadcasting, mathematical functions</li>
            <li>Pandas: DataFrames, CSV/Excel handling, groupby, pivoting</li>
            <li>
              Matplotlib &amp; Seaborn: Line plots, bar plots, heatmaps, custom
              themes
            </li>
          </ul>
        </div>

        {/* 1.7 */}
        <div className="bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-700 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-8">
          <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 transition-colors duration-500">
            1.7 Git &amp; GitHub
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Git basics: init, commit, push, pull</li>
            <li>GitHub repositories, branches, pull requests</li>
            <li>Team collaboration using GitHub Issues</li>
          </ul>
        </div>

        {/* What You’ll Learn */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            ✅ What You’ll Learn in This Module
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 transition-colors duration-500">
            <li>Strong foundation in AI concepts and history</li>
            <li>Hands-on Python programming for AI</li>
            <li>Data handling with NumPy, Pandas</li>
            <li>Data visualization with Matplotlib &amp; Seaborn</li>
            <li>Version control with Git &amp; GitHub</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 transition-colors duration-500">
            <li>AI Research Assistant</li>
            <li>Python Developer</li>
            <li>Data Analyst (Entry Level)</li>
            <li>Machine Learning Intern</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 text-lg transition-colors duration-500">
            ₹3.5 LPA – ₹6 LPA (India, Entry Level) | $45K – $70K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 transition-colors duration-500">
            <li>Supervised &amp; Unsupervised Machine Learning</li>
            <li>Advanced Python (OOP, Decorators, Generators)</li>
            <li>Data Preprocessing &amp; Feature Engineering</li>
            <li>Mathematics for Machine Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module1;

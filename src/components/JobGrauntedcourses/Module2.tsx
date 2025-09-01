import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module2: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "2.1 Data Acquisition",
      points: ["Importing data from APIs, web scraping, CSVs, databases"],
    },
    {
      title: "2.2 Data Cleaning",
      points: [
        "Handling nulls: mean/median imputation",
        "Removing duplicates, fixing anomalies",
        "Detecting and treating outliers",
      ],
    },
    {
      title: "2.3 Data Transformation",
      points: [
        "Normalization vs Standardization",
        "Log transformation, Box-Cox, power transforms",
        "Binning: Equal-width and quantile binning",
      ],
    },
    {
      title: "2.4 Categorical Encoding",
      points: [
        "One-Hot Encoding, Label Encoding",
        "Ordinal encoding for ordered categories",
        "Binary encoding and target encoding",
      ],
    },
    {
      title: "2.5 Feature Engineering",
      points: [
        "Creating derived features",
        "Feature interactions",
        "Polynomial feature generation",
      ],
    },
    {
      title: "2.6 Exploratory Data Analysis (EDA)",
      points: [
        "Summary statistics and insights",
        "Correlation matrix, pairplots",
        "Visualizing distributions and trends",
      ],
    },
    {
      title: "2.7 Data Splitting Techniques",
      points: [
        "Train-Test Split, Stratified Split",
        "K-Fold Cross Validation",
        "ShuffleSplit, TimeSeriesSplit",
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
           Module 2: Data Handling & Preprocessing
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
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-8 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            ✅ What You’ll Learn in This Module
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 transition-colors duration-500">
            <li>Efficient data acquisition from multiple sources</li>
            <li>Clean and preprocess real-world datasets</li>
            <li>Transform and encode data for ML models</li>
            <li>Feature engineering to improve model performance</li>
            <li>Conduct exploratory data analysis (EDA) for insights</li>
            <li>Implement data splitting techniques for validation</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-8 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-2 transition-colors duration-500">
            <li>Data Engineer (Entry Level)</li>
            <li>Data Analyst</li>
            <li>Machine Learning Intern</li>
            <li>Junior Data Scientist</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 text-lg transition-colors duration-500">
            ₹4 LPA – ₹7 LPA (India, Entry Level) | $50K – $75K (International)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Module2;

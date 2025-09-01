import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module3: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "3.1 ML Pipeline Overview",
      points: [
        "Business understanding, data acquisition",
        "Model building, evaluation, deployment",
      ],
    },
    {
      title: "3.2 Supervised Learning",
      points: [
        "Regression: Linear, Ridge, Lasso",
        "Classification: Logistic, Decision Tree, KNN, SVM",
      ],
    },
    {
      title: "3.3 Unsupervised Learning",
      points: [
        "Clustering: K-Means, DBSCAN, Hierarchical",
        "Dimensionality Reduction: PCA, t-SNE",
      ],
    },
    {
      title: "3.4 Model Evaluation",
      points: [
        "Accuracy, Precision, Recall, F1 Score",
        "ROC-AUC, PR Curve, Log Loss",
        "Confusion Matrix",
      ],
    },
    {
      title: "3.5 Ensemble Learning",
      points: [
        "Bagging: Random Forest",
        "Boosting: AdaBoost, Gradient Boost, XGBoost",
      ],
    },
    {
      title: "3.6 Hyperparameter Tuning",
      points: [
        "Manual search vs automated search",
        "Grid Search, Random Search",
        "Cross-validation techniques",
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
           Module 3: Machine Learning
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
            <li>Understanding of ML pipeline stages</li>
            <li>Hands-on experience with supervised and unsupervised algorithms</li>
            <li>Techniques for model evaluation and performance tuning</li>
            <li>Building ensemble models to improve accuracy</li>
            <li>Mastering hyperparameter tuning for optimal results</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Machine Learning Engineer (Junior)</li>
            <li>Data Scientist (Entry Level)</li>
            <li>ML Model Trainer</li>
            <li>AI Analyst</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹5 LPA – ₹10 LPA (India, Entry Level) | $60K – $90K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Deep Learning Fundamentals</li>
            <li>Advanced Model Deployment Techniques</li>
            <li>Reinforcement Learning Basics</li>
            <li>Big Data and Scalable ML Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module3;

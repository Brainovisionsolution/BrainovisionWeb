import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module5: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "5.1 Text Preprocessing",
      points: [
        "Tokenization, Stop Words, Regex cleaning",
        "Lemmatization vs Stemming",
      ],
    },
    {
      title: "5.2 Vectorization",
      points: [
        "Bag of Words",
        "TF-IDF and its calculation",
        "Word Embeddings: Word2Vec, GloVe",
      ],
    },
    {
      title: "5.3 Text Classification",
      points: [
        "Sentiment Analysis, Spam Filtering",
        "Naive Bayes, Logistic Regression",
      ],
    },
    {
      title: "5.4 Named Entity Recognition (NER)",
      points: [
        "Entity types and tagging",
        "SpaCy NER, rule-based vs ML-based",
      ],
    },
    {
      title: "5.5 Topic Modeling",
      points: [
        "Latent Dirichlet Allocation (LDA)",
        "Non-Negative Matrix Factorization",
      ],
    },
    {
      title: "5.6 Transformers & LLMs",
      points: [
        "BERT, GPT architecture overview",
        "Self-attention and positional encoding",
        "Prompt engineering basics",
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
           Module 5: Natural Language Processing (NLP)
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
            <li>Effective text preprocessing techniques</li>
            <li>Vectorizing text data with TF-IDF and embeddings</li>
            <li>Building text classifiers for sentiment and spam detection</li>
            <li>Implementing Named Entity Recognition</li>
            <li>Topic modeling with LDA and NMF</li>
            <li>Understanding transformer models and prompt engineering</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>NLP Engineer (Junior)</li>
            <li>Data Scientist with NLP specialization</li>
            <li>AI Developer focusing on language models</li>
            <li>Text Analytics Specialist</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹6 LPA – ₹11 LPA (India, Entry Level) | $65K – $105K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced Transformer Architectures (GPT, T5)</li>
            <li>Multilingual NLP and Cross-lingual Transfer</li>
            <li>Conversational AI & Chatbot Development</li>
            <li>Ethics and Bias in NLP Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module5;

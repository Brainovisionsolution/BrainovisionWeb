import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module4: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "4.1 Introduction to Neural Networks",
      points: [
        "Architecture: Input, Hidden, Output layers",
        "Perceptrons and multi-layer networks",
        "Forward & Backpropagation",
      ],
    },
    {
      title: "4.2 Activation Functions",
      points: [
        "Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax",
        "Choosing the right activation",
      ],
    },
    {
      title: "4.3 Loss Functions",
      points: [
        "Regression: MSE, MAE",
        "Classification: Binary/Categorical Cross-Entropy",
        "Custom loss functions",
      ],
    },
    {
      title: "4.4 Optimizers",
      points: [
        "SGD, Adam, RMSprop, AdaGrad",
        "Learning rate decay, momentum",
      ],
    },
    {
      title: "4.5 CNN (Convolutional Neural Networks)",
      points: [
        "Convolution layers, filters, kernels",
        "Pooling (max, average), dropout, flatten",
        "CNN architectures: LeNet, VGG, ResNet",
      ],
    },
    {
      title: "4.6 RNN & LSTM",
      points: [
        "Sequence modeling",
        "Vanishing gradients and memory",
        "Applications in time series and text",
      ],
    },
    {
      title: "4.7 Transfer Learning",
      points: [
        "Using pre-trained models",
        "Fine-tuning last layers",
        "Model Zoo: VGG, Inception, MobileNet",
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
           Module 4: Deep Learning
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
            <li>Understanding neural network architectures and training</li>
            <li>Applying activation and loss functions effectively</li>
            <li>Mastering optimizers for training deep networks</li>
            <li>Building CNNs for image data processing</li>
            <li>Using RNNs and LSTMs for sequence data</li>
            <li>Implementing transfer learning with pre-trained models</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Deep Learning Engineer (Junior)</li>
            <li>Computer Vision Specialist</li>
            <li>AI Research Assistant</li>
            <li>Data Scientist with Deep Learning focus</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹7 LPA – ₹12 LPA (India, Entry Level) | $70K – $110K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced Deep Learning Architectures (Transformers, GANs)</li>
            <li>Model Compression & Optimization Techniques</li>
            <li>AI Ethics & Explainability</li>
            <li>Real-time AI Deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module4;

import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module7: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "7.1 What is Generative AI?",
      points: [
        "Generating images, text, audio, and code",
        "Role in creative industries",
      ],
    },
    {
      title: "7.2 GANs (Generative Adversarial Networks)",
      points: [
        "Generator & Discriminator relationship",
        "Loss functions, training instability",
      ],
    },
    {
      title: "7.3 Text Generation",
      points: [
        "GPT models, decoding strategies",
        "Temperature, Top-k and Top-p sampling",
      ],
    },
    {
      title: "7.4 Image Generation",
      points: [
        "DALL·E, MidJourney, Stable Diffusion",
        "Prompt crafting and guidance",
      ],
    },
    {
      title: "7.5 Prompt Engineering Techniques",
      points: [
        "Prompt chaining",
        "Role prompting and instructions",
        "Few-shot and zero-shot prompting",
      ],
    },
    {
      title: "7.6 Responsible AI",
      points: [
        "Fairness, Accountability, Transparency",
        "Bias detection and mitigation",
        "Ethics in facial recognition, hiring, etc.",
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
           Module 7: Generative AI & Prompt Engineering
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
            <li>Foundations of Generative AI and its creative applications</li>
            <li>Understanding and training GANs</li>
            <li>Text generation using GPT and decoding methods</li>
            <li>Image generation tools like DALL·E and Stable Diffusion</li>
            <li>Effective prompt engineering techniques</li>
            <li>Principles of Responsible AI and ethics</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Generative AI Engineer</li>
            <li>Prompt Engineer</li>
            <li>AI Researcher (Generative Models)</li>
            <li>Creative AI Developer</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹7 LPA – ₹14 LPA (India, Entry Level) | $80K – $130K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced GAN architectures and training techniques</li>
            <li>Multi-modal AI models (e.g., CLIP, DALL·E 2)</li>
            <li>AI Ethics and Fairness at scale</li>
            <li>Real-world applications of generative AI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module7;

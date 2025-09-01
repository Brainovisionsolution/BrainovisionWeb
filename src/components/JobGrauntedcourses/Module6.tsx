import React from "react";

interface Topic {
  title: string;
  points: string[];
}

const Module6: React.FC = () => {
  const topics: Topic[] = [
    {
      title: "6.1 Image Fundamentals",
      points: [
        "Pixels, color channels, histograms",
        "RGB vs Grayscale, bit depth",
      ],
    },
    {
      title: "6.2 Image Processing with OpenCV",
      points: [
        "Image transformations: resize, crop, flip",
        "Edge detection: Sobel, Canny",
        "Filters: Gaussian blur, median filter",
      ],
    },
    {
      title: "6.3 CNNs in Computer Vision",
      points: [
        "Feature maps, strides, padding",
        "Data augmentation",
      ],
    },
    {
      title: "6.4 Object Detection",
      points: [
        "YOLO: Architecture, anchors, IOU",
        "SSD and Faster R-CNN overview",
      ],
    },
    {
      title: "6.5 Facial Recognition",
      points: [
        "Face detection with Haar cascades",
        "Deep face embeddings for comparison",
      ],
    },
    {
      title: "6.6 Image Segmentation",
      points: [
        "Semantic vs Instance Segmentation",
        "U-Net architecture (overview)",
      ],
    },
    {
      title: "6.7 MediaPipe",
      points: [
        "Hand tracking, Face Mesh",
        "Pose estimation for real-time applications",
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
           Module 6: Computer Vision
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
            <li>Fundamentals of image data and color models</li>
            <li>Image processing techniques using OpenCV</li>
            <li>Convolutional Neural Networks (CNNs) applied to vision</li>
            <li>Object detection algorithms including YOLO and SSD</li>
            <li>Facial recognition techniques with deep embeddings</li>
            <li>Image segmentation and MediaPipe for real-time tracking</li>
          </ul>
        </div>

        {/* Roles Unlocked */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            🎯 Roles You’ll Unlock
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Computer Vision Engineer (Entry Level)</li>
            <li>Deep Learning Specialist</li>
            <li>AI Research Assistant (Vision focus)</li>
            <li>Image Processing Developer</li>
          </ul>
        </div>

        {/* Salary Packages */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md mb-6 transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-4 transition-colors duration-500">
            💰 Expected Salary Range
          </h3>
          <p className="text-gray-800 dark:text-gray-300 transition-colors duration-500">
            ₹6 LPA – ₹12 LPA (India, Entry Level) | $70K – $110K (International)
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-600 p-6 rounded-lg shadow-md transition-colors duration-500">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 transition-colors duration-500">
            📈 What to Learn Next
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1 transition-colors duration-500">
            <li>Advanced CNN architectures (ResNet, EfficientNet)</li>
            <li>3D Computer Vision and Point Clouds</li>
            <li>Real-time video processing</li>
            <li>AI in Robotics and Autonomous Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Module6;

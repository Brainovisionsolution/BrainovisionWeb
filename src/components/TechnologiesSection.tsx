import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Wifi, 
  Database, 
  Link,
  Zap,
  Globe
} from "lucide-react";

const TechnologiesSection: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const techCategories = [
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "OpenAI GPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" }
      ]
    },
    {
      category: "Quantum Computing",
      technologies: [
        { name: "Qiskit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Cirq", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "Q#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
        { name: "IBM Quantum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      category: "Blockchain & Web3",
      technologies: [
        { name: "Ethereum", icon: Link, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
        { name: "IPFS", icon: Database, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Polkadot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" }
      ]
    },
    {
      category: "Extended Reality",
      technologies: [
        { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
        { name: "Unreal Engine", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" },
        { name: "WebXR", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "ARCore", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
      ]
    },
    {
      category: "IoT & Edge",
      technologies: [
        { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "Raspberry Pi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
        { name: "Edge Computing", icon: Cloud, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "MQTT", icon: Wifi, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      category: "Robotics",
      technologies: [
        { name: "ROS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "CUDA", icon: Zap, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" },
        { name: "Gazebo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" }
      ]
    },
    {
      category: "Data Science",
      technologies: [
        { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
      ]
    },
    {
      category: "Cybersecurity",
      technologies: [
        { name: "Wireshark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Metasploit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
        { name: "Kali Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Zero Trust", icon: Shield, fallbackLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2 animate-pulse">
            Deep Tech Innovation
          </h2>
          <h3 className="text-5xl font-extrabold font-serif mb-4 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-yellow-400 dark:to-orange-400">
            Cutting-Edge Technologies
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Pushing the boundaries of what's possible with advanced scientific and engineering breakthroughs.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-neu dark:shadow-neu-dark hover:shadow-neu-lg dark:hover:shadow-neu-lg-dark transition-all duration-500 hover:-translate-y-2"
            >
              <h4 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-6 text-center transition-colors duration-300">
                {category.category}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white dark:bg-gray-700 shadow-inner-neu dark:shadow-inner-neu-dark hover:shadow-neu dark:hover:shadow-neu-dark transition-all duration-300"
                  >
                    <div className="w-12 h-12 relative">
                      {tech.icon ? (
                        <tech.icon className="w-full h-full text-orange-600 dark:text-orange-400 transition-transform duration-300" />
                      ) : (
                        <img
                          src={tech.logo || tech.fallbackLogo}
                          alt={tech.name}
                          className="w-full h-full object-contain transition-transform duration-300"
                        />
                      )}
                    </div>
                    <span className="text-sm text-center text-gray-700 dark:text-gray-300 font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <button
            onClick={() => {
              navigate("/SoftwareDevelopment");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-12 py-5 bg-orange-500 dark:bg-orange-400 text-white font-bold text-lg rounded-full shadow-neu dark:shadow-neu-dark hover:shadow-neu-lg dark:hover:shadow-neu-lg-dark transition-all duration-500 transform hover:-translate-y-2"
          >
            Harness Deep Tech for Innovation
          </button>
        </div>

        {/* Additional Tech Showcase */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4" data-aos="fade-up" data-aos-delay="200">
          {[
            "Neural Networks", "Quantum Algorithms", "Smart Contracts", "AR/VR",
            "Edge AI", "Bioinformatics", "Digital Twins", "Autonomous Systems"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-inner-neu dark:shadow-inner-neu-dark hover:shadow-neu dark:hover:shadow-neu-dark transition-all duration-300"
            >
              <span className="text-xs text-center text-gray-700 dark:text-gray-300 block font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Neumorphism Shadows */}
      <style>
        {`
          .shadow-neu {
            box-shadow: 8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff;
          }
          .shadow-neu-dark {
            box-shadow: 8px 8px 15px #0f172a, -8px -8px 15px #1e293b;
          }
          .shadow-neu-lg {
            box-shadow: 12px 12px 20px #d1d9e6, -12px -12px 20px #ffffff;
          }
          .shadow-neu-lg-dark {
            box-shadow: 12px 12px 20px #0f172a, -12px -12px 20px #1e293b;
          }
          .shadow-inner-neu {
            box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff;
          }
          .shadow-inner-neu-dark {
            box-shadow: inset 4px 4px 8px #0f172a, inset -4px -4px 8px #1e293b;
          }
        `}
      </style>
    </section>
  );
};

export default TechnologiesSection;

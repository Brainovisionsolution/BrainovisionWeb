import React, { useState } from 'react';
import { Brain, Clock, Users, Star, ChevronRight, X } from 'lucide-react';

interface CoursesProps {
  onOpenModal: (type: 'enroll' | 'demo' | 'scholarship') => void;
}

const Courses: React.FC<CoursesProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'ai-foundations', name: 'AI Foundations' },
    { id: 'deep-tech', name: 'Deep Tech' },
    { id: 'advanced-ai', name: 'Advanced AI' },
    { id: 'generative-ai', name: 'Generative AI' },
    { id: 'applied-ml', name: 'Applied ML' }
  ];

  const courses = [
    {
      id: 1,
      category: 'ai-foundations',
      title: 'AI & ML Foundations with Python',
      subtitle: 'From Basics to ML Models',
      duration: '16 weeks',
      mode: 'Online',
      price: '₹29,999',
      originalPrice: '₹59,999',
      level: 'Beginner',
      students: '1.5k+',
      rating: 4.8,
      badge: 'POPULAR',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      description: 'Learn Python programming and foundational AI concepts.',
      fullDescription: 'This comprehensive course provides a solid foundation in AI and Machine Learning using Python. You will start with Python programming basics, then move to essential libraries like NumPy and Pandas for data manipulation. The course covers fundamental machine learning concepts, algorithms, and model evaluation techniques. By the end, you will be able to build, train, and evaluate basic machine learning models for real-world problems.',
      syllabus: [
        'Python Programming Fundamentals',
        'Data Structures and Algorithms in Python',
        'NumPy for Numerical Computing',
        'Pandas for Data Analysis',
        'Data Visualization with Matplotlib',
        'Introduction to Machine Learning',
        'Supervised Learning Algorithms',
        'Model Evaluation Techniques'
      ],
      outcomes: [
        'Build Python applications for data analysis',
        'Implement basic ML algorithms from scratch',
        'Preprocess and clean datasets',
        'Evaluate model performance',
        'Deploy simple ML models'
      ]
    },
    {
      id: 2,
      category: 'deep-tech',
      title: 'Deep Tech AI Engineer Program',
      subtitle: 'Full-stack AI Engineering',
      duration: '24 weeks',
      mode: 'Online + Mentorship',
      price: '₹49,999',
      originalPrice: '₹99,999',
      level: 'Advanced',
      students: '900+',
      rating: 4.9,
      badge: 'TRENDING',
      skills: ['Python', 'PyTorch', 'MLOps', 'Cloud AI'],
      description: 'Master AI engineering with deep learning and MLOps.',
      fullDescription: 'This intensive program takes you through the complete lifecycle of AI engineering. Starting with advanced deep learning concepts using PyTorch, you will learn to build complex neural networks. The course covers model deployment, scaling, and maintenance using MLOps practices. You will work with cloud platforms to deploy production-ready AI solutions and learn to optimize models for performance.',
      syllabus: [
        'Advanced Neural Network Architectures',
        'PyTorch for Deep Learning',
        'Model Optimization Techniques',
        'MLOps Fundamentals',
        'Cloud Deployment (AWS/GCP)',
        'Model Monitoring and Maintenance',
        'Distributed Training',
        'Capstone Project'
      ],
      outcomes: [
        'Design and implement complex neural networks',
        'Deploy models to production environments',
        'Implement CI/CD pipelines for ML',
        'Optimize models for performance',
        'Manage large-scale AI systems'
      ]
    },
    {
      id: 3,
      category: 'advanced-ai',
      title: 'Advanced AI Development',
      subtitle: 'Cutting-edge AI Projects',
      duration: '20 weeks',
      mode: 'Online',
      price: '₹39,999',
      originalPrice: '₹79,999',
      level: 'Advanced',
      students: '1.2k+',
      rating: 4.8,
      badge: 'NEW',
      skills: ['Advanced ML', 'Computer Vision', 'NLP', 'Transformers'],
      description: 'Work on advanced AI applications.',
      fullDescription: 'This course dives deep into specialized areas of AI including computer vision, natural language processing, and transformer architectures. You will implement state-of-the-art models for image recognition, text generation, and more. The curriculum includes hands-on projects with real-world datasets and focuses on solving complex problems with cutting-edge techniques.',
      syllabus: [
        'Advanced Computer Vision',
        'Object Detection and Segmentation',
        'Natural Language Processing',
        'Transformer Architectures',
        'Generative Models',
        'Reinforcement Learning Basics',
        'Model Interpretability',
        'Research Paper Implementation'
      ],
      outcomes: [
        'Implement advanced computer vision systems',
        'Build NLP applications with transformers',
        'Understand and implement research papers',
        'Develop custom AI architectures',
        'Optimize models for specific tasks'
      ]
    },
    {
      id: 4,
      category: 'generative-ai',
      title: 'Generative AI & LLM Specialist',
      subtitle: 'Build with GPT & Diffusion Models',
      duration: '18 weeks',
      mode: 'Online',
      price: '₹44,999',
      originalPrice: '₹89,999',
      level: 'Intermediate',
      students: '800+',
      rating: 4.9,
      badge: 'HIGH DEMAND',
      skills: ['LLMs', 'Prompt Engineering', 'GANs', 'Diffusion Models'],
      description: 'Learn to design and deploy Generative AI models.',
      fullDescription: 'This specialized program focuses on the rapidly evolving field of Generative AI. You will learn to work with Large Language Models (LLMs) like GPT, master prompt engineering techniques, and implement diffusion models for image generation. The course includes practical projects where you will fine-tune models for specific applications and deploy them for real-world use.',
      syllabus: [
        'Introduction to Generative AI',
        'Large Language Models (GPT, BERT)',
        'Prompt Engineering Techniques',
        'Fine-tuning LLMs',
        'GANs (Generative Adversarial Networks)',
        'Diffusion Models',
        'Ethics in Generative AI',
        'Deployment Strategies'
      ],
      outcomes: [
        'Develop applications using LLMs',
        'Master prompt engineering',
        'Implement GANs and diffusion models',
        'Fine-tune models for specific tasks',
        'Address ethical considerations'
      ]
    },
    {
      id: 5,
      category: 'applied-ml',
      title: 'Applied Machine Learning',
      subtitle: 'Real-world AI Solutions',
      duration: '22 weeks',
      mode: 'Online',
      price: '₹42,999',
      originalPrice: '₹84,999',
      level: 'Intermediate',
      students: '1.1k+',
      rating: 4.7,
      badge: 'BESTSELLER',
      skills: ['ML Pipelines', 'TensorFlow', 'Data Engineering', 'Model Deployment'],
      description: 'Learn to design production-grade ML systems.',
      fullDescription: 'This practical course focuses on building end-to-end machine learning systems for production environments. You will learn to design robust ML pipelines, handle large-scale data engineering challenges, and deploy models using industry best practices. The curriculum includes case studies from real companies and hands-on projects that simulate workplace scenarios.',
      syllabus: [
        'End-to-End ML Pipeline Design',
        'Feature Engineering at Scale',
        'TensorFlow for Production',
        'Model Serving Architectures',
        'Monitoring and Maintenance',
        'Data Versioning',
        'A/B Testing for ML',
        'Case Studies'
      ],
      outcomes: [
        'Design production-ready ML systems',
        'Implement scalable data pipelines',
        'Deploy models with TensorFlow Serving',
        'Monitor and maintain live models',
        'Apply ML best practices'
      ]
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'trending': return 'bg-pink-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
      case 'popular': return 'bg-green-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
      case 'new': return 'bg-blue-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
      case 'bestseller': return 'bg-yellow-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
      case 'high demand': return 'bg-purple-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
      default: return 'bg-orange-500 text-white shadow-[3px_3px_6px_#d1d9e6,_-3px_-3px_6px_#ffffff]';
    }
  };

  return (
    <section className="py-16 px-4 bg-[#f0f5f9] relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 w-96 h-96 rounded-full bg-yellow-100/50 blur-3xl pointer-events-none"></div>
        <div className="absolute right-20 top-40 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              AI Career Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-vetted courses designed to launch your AI career
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff] ${
                activeCategory === id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]'
                  : 'bg-[#f0f5f9] text-gray-700 hover:shadow-[inset_4px_4px_8px_#d1d9e6,_inset_-4px_-4px_8px_#ffffff]'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => setSelectedCourse(course)}
              className="bg-[#f0f5f9] rounded-2xl p-6 shadow-[8px_8px_16px_#d1d9e6,_-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,_-12px_-12px_24px_#ffffff] transition-all duration-300 border border-white/50 cursor-pointer relative"
            >
              <div className={`absolute top-4 right-4 ${getBadgeColor(course.badge)} text-xs font-bold px-3 py-1 rounded-full z-10`}>
                {course.badge}
              </div>

              <div className="h-40 rounded-xl mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-inner">
                <Brain size={48} className="text-white opacity-90" />
              </div>

              <div className="p-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <div className="flex items-center text-yellow-600 text-sm">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1">{course.rating}</span>
                  </div>
                </div>

                <p className="text-orange-500 font-medium text-sm mb-3">{course.subtitle}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-orange-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1 text-yellow-500" />
                    {course.students}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {course.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-white text-gray-800 px-2 py-1 rounded shadow-[inset_2px_2px_4px_#d1d9e6,_inset_-2px_-2px_4px_#ffffff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-gray-800">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenModal('enroll');
                    }}
                    className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-lg hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] transition-all shadow-md"
                  >
                    Enroll Now <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Need guidance choosing the right program?</p>
          <button
            onClick={() => onOpenModal('demo')}
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all"
          >
            Talk to a Career Advisor
          </button>
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">{selectedCourse.title}</h3>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-full md:w-1/3">
                  <div className="h-48 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-inner">
                    <Brain size={64} className="text-white opacity-90" />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-gray-800">{selectedCourse.price}</div>
                      <div className="text-sm text-gray-400 line-through">{selectedCourse.originalPrice}</div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedCourse(null);
                        onOpenModal('enroll');
                      }}
                      className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-lg hover:shadow-md transition-all"
                    >
                      Enroll Now <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className={`inline-block ${getBadgeColor(selectedCourse.badge)} text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {selectedCourse.badge}
                  </div>
                  <p className="text-orange-500 font-medium mb-2">{selectedCourse.subtitle}</p>
                  <p className="text-gray-700 mb-4">{selectedCourse.fullDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Clock size={18} className="text-orange-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-medium">{selectedCourse.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users size={18} className="text-yellow-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-500">Students Enrolled</div>
                        <div className="font-medium">{selectedCourse.students}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star size={18} className="text-yellow-500 mr-2 fill-current" />
                      <div>
                        <div className="text-sm text-gray-500">Rating</div>
                        <div className="font-medium">{selectedCourse.rating}/5</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-orange-500 rounded-full mr-2"></div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium">{selectedCourse.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Course Syllabus</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.syllabus.map((item: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 inline-block w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.outcomes.map((outcome: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 inline-block w-5 h-5 rounded-full bg-yellow-100 text-yellow-500 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Skills You'll Gain</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-[inset_2px_2px_4px_#d1d9e6,_inset_-2px_-2px_4px_#ffffff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={() => {
                    setSelectedCourse(null);
                    onOpenModal('enroll');
                  }}
                  className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all"
                >
                  Enroll in This Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;

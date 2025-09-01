import React, { useState } from 'react';
import { 
  ArrowLeft, Clock, Users, Award, Download, Play, 
  CheckCircle, Star, ChevronDown, ChevronUp, Brain, 
  Zap, Shield, Globe, Code, TrendingUp, Calendar, 
  DollarSign, Layers, Cpu, Database, GitBranch, 
  BookOpen, ShieldCheck, Network, Rocket 
} from 'lucide-react';

const CourseDetails: React.FC<{ darkMode: boolean, onBack: () => void }> = ({ darkMode, onBack }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [activeTab, setActiveTab] = useState('curriculum');

  // Neumorphic style generator
  const neumorphic = (dark: boolean, inset = false) => 
    dark 
      ? inset 
        ? 'shadow-[inset_3px_3px_6px_#0a0c10,inset_-3px_-3px_6px_#1a1d24]' 
        : 'shadow-[8px_8px_16px_#0a0c10,-8px_-8px_16px_#1a1d24]'
      : inset 
        ? 'shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]' 
        : 'shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]';

  // Curriculum data
  const curriculum = [
    {
      week: 1,
      title: "Introduction to Agentic AI",
      topics: [
        "Evolution of autonomous systems",
        "Agentic vs traditional AI paradigms",
        "Key architectural components",
        "Industry applications and case studies"
      ],
      projects: ["Design your first agent architecture"]
    },
    {
      week: 2,
      title: "LangChain Fundamentals",
      topics: [
        "Chains, agents, and tools",
        "Memory and context management",
        "Prompt engineering techniques",
        "Building basic workflows"
      ],
      projects: ["Create a document Q&A agent"]
    },
    {
      week: 3,
      title: "Multi-Agent Systems",
      topics: [
        "Agent communication protocols",
        "Orchestration patterns",
        "Conflict resolution strategies",
        "Distributed decision making"
      ],
      projects: ["Build a collaborative agent team"]
    },
    {
      week: 4,
      title: "Advanced Memory Systems",
      topics: [
        "Vector databases integration",
        "Long-term memory architectures",
        "Context window optimization",
        "Retrieval-augmented generation"
      ],
      projects: ["Implement Pinecone/Weaviate memory"]
    },
    {
      week: 5,
      title: "Agent Specialization",
      topics: [
        "Role-based agent design",
        "Domain-specific optimizations",
        "Skill chaining techniques",
        "Dynamic tool selection"
      ],
      projects: ["Develop a specialized research agent"]
    },
    {
      week: 6,
      title: "Evaluation & Optimization",
      topics: [
        "Performance metrics for agents",
        "Cost-efficiency analysis",
        "Latency reduction strategies",
        "Quality assurance frameworks"
      ],
      projects: ["Benchmark and optimize your agents"]
    }
  ];

  // Sample projects
  const projects = [
    {
      title: "Autonomous Customer Support Agent",
      description: "Build an end-to-end support agent that can handle complex customer inquiries, access knowledge bases, and escalate issues when needed.",
      features: [
        "Natural language understanding",
        "Ticket classification",
        "Knowledge retrieval",
        "Human handoff protocol"
      ],
      tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI"]
    },
    {
      title: "Research Analysis Assistant",
      description: "Create an agent that can autonomously gather, analyze, and summarize research papers on a given topic.",
      features: [
        "Academic paper retrieval",
        "Key concept extraction",
        "Comparative analysis",
        "Report generation"
      ],
      tech: ["LangChain", "arXiv API", "GPT-4", "ChromaDB"]
    },
    {
      title: "Code Review Automation System",
      description: "Develop an AI agent that reviews pull requests, suggests improvements, and identifies potential bugs.",
      features: [
        "Code quality assessment",
        "Security vulnerability detection",
        "Style guideline enforcement",
        "Interactive feedback"
      ],
      tech: ["LangChain", "GitHub API", "CodeLlama", "Semgrep"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <div className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              darkMode 
                ? 'hover:bg-gray-800 text-orange-400' 
                : 'hover:bg-orange-50 text-orange-600'
            }`}
          >
            <ArrowLeft size={20} />
            <span>Back to Courses</span>
          </button>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            darkMode 
              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
              : 'bg-orange-100 text-orange-700 border border-orange-200'
          }`}>
            🚀 Limited Time Enrollment
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-5xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className={`bg-gradient-to-r ${darkMode ? 'from-orange-400 to-yellow-400' : 'from-orange-600 to-yellow-500'} bg-clip-text text-transparent`}>
                  Agentic AI Engineering
                </span>
                <span className="block text-3xl mt-2">Professional Certification Program</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Master the architecture, development, and deployment of autonomous AI agents. 
                This intensive 12-week program combines cutting-edge theory with real-world 
                implementation for production-ready systems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users size={20} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>2,847 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-500 fill-current" />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>4.9 (328 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>12 Weeks</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                  darkMode
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                    : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'
                }`}>
                  Enroll Now - $299
                </button>
                <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-200 flex items-center gap-2 ${
                  darkMode
                    ? 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900'
                    : 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
                }`}>
                  <Download size={20} />
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className={`relative p-8 rounded-3xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} ${neumorphic(darkMode)}`}>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={64} className="text-orange-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">"The Future of Autonomous AI" - Preview</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { icon: Layers, value: '6', label: 'Core Modules' },
                  { icon: Code, value: '25+', label: 'Hands-on Labs' },
                  { icon: Rocket, value: '4', label: 'Capstone Projects' }
                ].map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <item.icon size={24} className={`mx-auto mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                    <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: Cpu, 
              title: "Cutting-Edge Tech Stack", 
              desc: "Master LangChain, OpenAI, vector DBs", 
              detail: "Pinecone, Weaviate, AutoGen", 
              color: "orange" 
            },
            { 
              icon: BookOpen, 
              title: "Production Focused", 
              desc: "Deployment-ready architectures", 
              detail: "Docker, FastAPI, monitoring", 
              color: "yellow" 
            },
            { 
              icon: ShieldCheck, 
              title: "Enterprise Grade", 
              desc: "Security & compliance", 
              detail: "Ethical AI frameworks", 
              color: "orange" 
            }
          ].map((item, index) => (
            <div key={index} className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
              <item.icon size={48} className={`mb-4 ${item.color === 'orange' ? 'text-orange-500' : 'text-yellow-500'}`} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.desc}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-8">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'curriculum' ? 
              `${darkMode ? 'text-orange-400 border-b-2 border-orange-400' : 'text-orange-600 border-b-2 border-orange-600'}` : 
              `${darkMode ? 'text-gray-400' : 'text-gray-600'}`}`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'projects' ? 
              `${darkMode ? 'text-orange-400 border-b-2 border-orange-400' : 'text-orange-600 border-b-2 border-orange-600'}` : 
              `${darkMode ? 'text-gray-400' : 'text-gray-600'}`}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'outcomes' ? 
              `${darkMode ? 'text-orange-400 border-b-2 border-orange-400' : 'text-orange-600 border-b-2 border-orange-600'}` : 
              `${darkMode ? 'text-gray-400' : 'text-gray-600'}`}`}
          >
            Outcomes
          </button>
        </div>

        {/* Curriculum Content */}
        {activeTab === 'curriculum' && (
          <div className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Comprehensive Curriculum</h2>
            <div className="space-y-8">
              {curriculum.map((week) => (
                <div key={week.week} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} ${neumorphic(darkMode, true)}`}>
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-600' : 'bg-orange-100'}`}>
                      <span className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>{week.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">{week.title}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className={`font-medium mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Topics Covered</h4>
                          <ul className="space-y-2">
                            {week.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle size={18} className={`mt-1 flex-shrink-0 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className={`font-medium mb-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Hands-on Project</h4>
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-yellow-50'}`}>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{week.projects[0]}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Content */}
        {activeTab === 'projects' && (
          <div className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Real-World Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} ${neumorphic(darkMode, true)}`}>
                  <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-600' : 'bg-orange-100'}`}>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className={`font-medium mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Zap size={16} className={`mt-1 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-600 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Outcomes Content */}
        {activeTab === 'outcomes' && (
          <div className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Professional Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-500">Career Pathways</h3>
                <div className="space-y-4">
                  {[
                    "AI Agent Developer",
                    "Autonomous Systems Engineer",
                    "AI Product Manager",
                    "Conversational AI Specialist",
                    "AI Solutions Architect"
                  ].map((path, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
                        <TrendingUp size={20} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
                      </div>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{path}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-500">Industry Demand</h3>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-yellow-50'} ${neumorphic(darkMode, true)}`}>
                  <ul className="space-y-3">
                    {[
                      "85% of enterprises planning AI agent adoption by 2025",
                      "$12B market size for agentic AI solutions by 2027",
                      "72% salary premium for agentic AI specialists",
                      "300% growth in related job postings (2023-2024)"
                    ].map((stat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className={`mt-1 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { 
                question: "What prerequisites are required?", 
                answer: "Students should have intermediate Python skills and basic familiarity with APIs. Prior experience with machine learning is helpful but not required. We provide introductory materials to get everyone up to speed." 
              },
              { 
                question: "How much time should I dedicate weekly?", 
                answer: "We recommend 8-10 hours per week to complete the coursework and projects. The program is designed for working professionals with flexible deadlines, but maintaining this pace will ensure you complete in 12 weeks." 
              },
              { 
                question: "What support is available during the course?", 
                answer: "You'll have access to weekly live Q&A sessions, a dedicated community forum, and for Standard/Premium tiers, direct instructor feedback on projects. Our team typically responds to questions within 24 hours." 
              },
              { 
                question: "Will I receive a certificate?", 
                answer: "Yes, upon successful completion you'll receive a verifiable digital certificate that can be shared on LinkedIn and included in your professional credentials. Our certificates are recognized by industry partners." 
              }
            ].map((item, index) => (
              <div key={index} className={`border rounded-xl transition-all ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp size={24} className="text-orange-500" />
                  ) : (
                    <ChevronDown size={24} className="text-orange-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className={`px-6 pb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Enrollment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic', 
                price: '$199', 
                features: [
                  'Full course access',
                  'Community support',
                  'Certificate of completion',
                  'Lifetime content updates',
                  'Self-paced learning'
                ], 
                popular: false 
              },
              { 
                name: 'Standard', 
                price: '$299', 
                features: [
                  'Everything in Basic',
                  'Weekly live Q&A sessions',
                  'Project feedback',
                  'Bonus advanced modules',
                  'Priority support'
                ], 
                popular: true 
              },
              { 
                name: 'Premium', 
                price: '$499', 
                features: [
                  'Everything in Standard',
                  '1-on-1 mentorship sessions',
                  'Career guidance',
                  'Resume review',
                  'Job placement assistance'
                ], 
                popular: false 
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.name.toLowerCase() 
                    ? `${darkMode ? 'bg-gray-700 ring-2 ring-orange-500' : 'bg-orange-50 ring-2 ring-orange-500'}`
                    : `${darkMode ? 'bg-gray-700 hover:bg-gray-650' : 'bg-white hover:bg-gray-50'}`
                } ${plan.popular ? 'scale-105' : ''}`}
                onClick={() => setSelectedPlan(plan.name.toLowerCase())}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
                <div className="text-4xl font-bold text-center mb-6 text-orange-500">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold ${
                  selectedPlan === plan.name.toLowerCase()
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                    : darkMode 
                      ? 'bg-gray-600 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                }`}>
                  {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${neumorphic(darkMode)}`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Start Building the Future Today</h2>
          <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Join the next generation of AI engineers creating autonomous systems that transform industries.
          </p>
          <button className={`px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
            darkMode
              ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]'
              : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]'
          }`}>
            Enroll Now - {selectedPlan === 'basic' ? '$199' : selectedPlan === 'standard' ? '$299' : '$499'}
          </button>
          <p className={`text-sm mt-6 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            30-day money-back guarantee • Flexible payment options • Instant access
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
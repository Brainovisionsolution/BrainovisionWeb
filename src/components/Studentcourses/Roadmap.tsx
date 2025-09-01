import React from 'react';
import { BookOpen, Code, Users, Award, Trophy, Briefcase } from 'lucide-react';

const steps = [
  { icon: BookOpen, title: 'Enroll & Onboard', desc: 'Community access, welcome kit', duration: 'Day 1' },
  { icon: Code, title: 'Learn Core Modules', desc: 'Interactive sessions & assessments', duration: 'Weeks 1–4' },
  { icon: Users, title: 'Build Projects', desc: 'Real-world mentoring & GitHub portfolio', duration: 'Weeks 5–8' },
  { icon: Award, title: 'Mentorship', desc: 'Career guidance & mock interviews', duration: 'Ongoing' },
  { icon: Trophy, title: 'Demo Day', desc: 'Project showcase with feedback', duration: 'Final Week' },
  { icon: Briefcase, title: 'Certification & Job', desc: 'Placement support + Resume building', duration: 'Completion' }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#fffaf3] dark:bg-[#1a1a1a] text-gray-900 dark:text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Your <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Journey Roadmap</span>
        </h2>

        <div className="relative">
          {/* 🛣 Vertical "road" center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-yellow-300 to-orange-500 z-0">
            <div className="h-full w-[2px] border-dashed border-l-4 border-yellow-500 opacity-50" />
          </div>

          {/* Steps on road sides */}
          <div className="flex flex-col gap-20 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className={`flex justify-${isLeft ? 'start' : 'end'} w-full`}>
                  <div className={`relative w-full md:w-[48%] ${isLeft ? 'pr-10' : 'pl-10'}`}>
                    <div className="relative bg-white dark:bg-[#2a2a2a] border border-yellow-200 dark:border-orange-700 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
                      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 w-5 h-5 bg-yellow-500 rounded-full border-4 border-white dark:border-black left-full md:left-auto md:right-full" />

                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center mr-4 shadow-md">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-yellow-600 dark:text-yellow-300">{step.title}</h3>
                      </div>

                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{step.desc}</p>
                      <span className="text-xs font-medium px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200 rounded-full">
                        {step.duration}
                      </span>

                      {/* Connector curve */}
                      <div className={`absolute top-1/2 w-8 h-8 border-t-4 border-r-4 border-yellow-400 dark:border-orange-500 rounded-tr-full transform ${isLeft ? 'right-[-1.5rem] rotate-0' : 'left-[-1.5rem] rotate-180'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Highlight */}
        <div className="mt-24 text-center bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 p-10 rounded-3xl border border-yellow-300 dark:border-yellow-700 shadow-inner">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-100">
            Over <span className="text-orange-500">25,000+</span> careers transformed
          </h3>
          <p className="text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Our roadmap ensures you gain practical skills, project expertise, and confident placement in top roles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

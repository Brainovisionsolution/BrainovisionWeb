import { BadgeCheck, Code, Users, Briefcase } from "lucide-react";

export const WhyBrainovisionSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Real-time Project Training",
      description:
        "Hands-on learning with real-world use cases and client-based project exposure.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "End-to-End Development",
      description:
        "From concept to deployment — we build scalable, modern applications.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Corporate Collaborations",
      description:
        "Partnered with top companies and colleges to ensure industry relevance.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Internship & Placement Support",
      description:
        "Resume building, interview prep, and referrals to hiring partners.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-sm font-semibold text-yellow-500 dark:text-yellow-400 uppercase tracking-widest mb-2">
          Why Choose Us
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
          Why Brainovision Stands Out
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
          Explore the key strengths that make us a leader in training and software development.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-[inset_4px_4px_12px_#ececec,inset_-4px_-4px_12px_#ffffff] dark:shadow-[inset_4px_4px_10px_#1e1e1e,inset_-4px_-4px_10px_#2a2a2a] hover:shadow-[6px_6px_20px_rgba(255,200,0,0.15),-6px_-6px_20px_#ffffff] dark:hover:shadow-[6px_6px_20px_rgba(255,200,0,0.1),-6px_-6px_20px_#1a1a1a] transition duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20 shadow-inner">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

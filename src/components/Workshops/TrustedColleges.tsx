import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';

const TrustedColleges: React.FC = () => {
  const colleges = [
    { name: 'IIT Delhi', logo: 'IIT-D', students: '2.5K+' },
    { name: 'IIT Bombay', logo: 'IIT-B', students: '3K+' },
    { name: 'IIT Madras', logo: 'IIT-M', students: '2.8K+' },
    { name: 'BITS Pilani', logo: 'BITS', students: '2K+' },
    { name: 'NIT Trichy', logo: 'NIT-T', students: '1.8K+' },
    { name: 'IIIT Hyderabad', logo: 'IIIT-H', students: '1.5K+' },
    { name: 'VIT Vellore', logo: 'VIT', students: '4K+' },
    { name: 'SRM University', logo: 'SRM', students: '3.5K+' },
    { name: 'Manipal Institute', logo: 'MIT', students: '2.2K+' },
    { name: 'DTU Delhi', logo: 'DTU', students: '1.9K+' },
    { name: 'NSUT Delhi', logo: 'NSUT', students: '1.6K+' },
    { name: 'Jadavpur University', logo: 'JU', students: '1.4K+' }
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: '200+',
      label: 'Partner Colleges',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Student Participants',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Satisfaction Rate',
      color: 'from-primary-yellow to-primary-orange'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Placement Success',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="trusted-colleges" className="py-20 bg-background-pale dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Trusted by <span className="text-primary-yellow">Top Colleges</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            We've partnered with leading educational institutions across India to bring 
            world-class workshops and hackathons directly to students.
          </p>
        </div>

        {/* College Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="group bg-background-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">{college.logo}</span>
              </div>
              
              {/* College Info */}
              <h3 className="font-bold text-text-charcoal dark:text-dark-text mb-2 group-hover:text-primary-orange transition-colors duration-200">
                {college.name}
              </h3>
              <p className="text-sm text-text-gray dark:text-dark-muted">
                {college.students} students
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-text-charcoal dark:text-dark-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-gray dark:text-dark-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial from College */}
        <div className="bg-background-white dark:bg-dark-bg rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-xl lg:text-2xl text-text-charcoal dark:text-dark-text font-medium mb-6">
              "The workshops and hackathons have significantly enhanced our students' practical skills 
              and industry readiness. The quality of mentorship and real-world projects is exceptional."
            </blockquote>
            <div className="text-primary-orange font-semibold">
              Dr. Rajesh Kumar, Head of Computer Science
            </div>
            <div className="text-text-gray dark:text-dark-muted">
              IIT Delhi
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3">
              Campus Integration
            </h3>
            <p className="text-text-gray dark:text-dark-muted">
              Seamlessly integrate our programs with your existing curriculum and academic calendar.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3">
              Industry Recognition
            </h3>
            <p className="text-text-gray dark:text-dark-muted">
              Provide students with industry-recognized certificates and direct pathways to employment.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3">
              Placement Support
            </h3>
            <p className="text-text-gray dark:text-dark-muted">
              Connect your students directly with hiring partners and internship opportunities.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our network of leading educational institutions and provide your students with world-class learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-primary-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Schedule Partnership Call
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-orange transition-colors duration-200">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedColleges;
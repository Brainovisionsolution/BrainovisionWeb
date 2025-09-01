import React, { useState } from 'react';
import { Award, Shield, CheckCircle, Download, Linkedin, ExternalLink, QrCode, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certification: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certificationFeatures = [
    {
      icon: Shield,
      title: 'Government Recognized',
      description: 'AICTE-affiliated certification accepted by all major companies',
      color: 'bg-orange-500'
    },
    {
      icon: Award,
      title: 'ISO Certified Program',
      description: 'International standards compliant curriculum and assessment',
      color: 'bg-yellow-500'
    },
    {
      icon: BadgeCheck,
      title: 'Industry Validated',
      description: 'Endorsed by top tech companies for hiring consideration',
      color: 'bg-orange-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Ready',
      description: 'Direct integration with LinkedIn for instant profile enhancement',
      color: 'bg-yellow-400'
    }
  ];

  const skills = [
    'Full Stack Development', 'AI & Machine Learning', 'Data Science', 'Cloud Computing',
    'Cybersecurity', 'Mobile Development', 'DevOps', 'Blockchain'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: '15px 15px 30px #d1d9e6, -15px -15px 30px #ffffff',
    transition: { duration: 0.3 }
  };

  return (
    <section className="py-20 px-6 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Earn <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Industry-Recognized</span> Certification
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Validate your skills with credentials that employers trust and respect worldwide
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-[#f0f5f9] shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] border border-white/50 hover:shadow-[25px_25px_70px_#d1d9e6,-25px_-25px_70px_#ffffff] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] bg-gradient-to-r from-orange-500 to-yellow-400">
                  <Award size={32} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Certificate ID</div>
                  <div className="font-mono text-sm font-bold text-orange-600">BV-2023-{Math.floor(Math.random() * 10000)}</div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 uppercase tracking-wider">Certificate of Excellence</h3>
                <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 my-4 rounded-full shadow"></div>
                <p className="text-gray-600 mb-4 italic">This is to certify that</p>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">YOUR NAME</h4>
                <p className="text-gray-600 mb-2">has successfully completed the</p>
                <h5 className="text-xl font-bold text-orange-600 mb-4 uppercase">Full Stack AI Engineer Program</h5>
                <div className="flex justify-center gap-4 my-6">
                  {['Duration', 'Grade', 'Issued'].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm text-gray-500">{item}</div>
                      <div className="font-bold text-gray-800">
                        {['16 Weeks', 'A+', new Date().getFullYear()][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-center">
                  <div className="w-24 h-1 bg-gray-800 mb-2 shadow"></div>
                  <p className="text-xs text-gray-500">Director, Brainovision</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] bg-gradient-to-r from-yellow-400 to-orange-500">
                    <QrCode size={20} className="text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Verified by</p>
                    <p className="text-xs font-bold text-gray-800">AICTE & ISO</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-[120px] font-bold text-gray-400 rotate-[-30deg]">BRAINOVISION</div>
              </div>
            </div>
          </motion.div>

          {/* Certification Features */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8 text-orange-500">
              Why Our Certification Stands Out
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={cardHover}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`p-5 rounded-xl bg-[#f0f5f9] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] border border-white/50 transition-all duration-300 ${hoveredCard === index ? 'z-10' : ''}`}
                  >
                    <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] ${feature.color}`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-orange-600 mb-4">Skills You'll Certify:</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-orange-800 px-3 py-2 rounded-full text-sm font-medium border border-orange-200 shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Download Sample
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-[#f0f5f9] border border-orange-300 px-6 py-3 rounded-xl font-semibold text-gray-800 shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff]"
              >
                <ExternalLink className="mr-2" size={20} />
                Verify Certificate
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Verification Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-[#f0f5f9] rounded-3xl p-8 md:p-12 border border-white/50 shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] relative overflow-hidden"
        >
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Blockchain Verified</span> Credentials
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Each certificate is immutably recorded on the blockchain, providing employers with instant verification
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: 'Instant Verification',
                  description: 'Verify credentials in seconds using our portal'
                },
                {
                  icon: Shield,
                  title: 'Tamper Proof',
                  description: 'Immutable blockchain record prevents alteration'
                },
                {
                  icon: Linkedin,
                  title: 'Profile Integration',
                  description: 'One-click addition to LinkedIn with verified badge'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff'
                  }}
                  className="bg-[#f0f5f9] p-6 rounded-xl border border-white/50 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] bg-gradient-to-r from-orange-400 to-yellow-400">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-orange-700">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
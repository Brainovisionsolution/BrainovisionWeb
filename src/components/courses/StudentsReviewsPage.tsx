import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  name: string;
  course: string;
  feedback: string;
  photo?: string;
}

const reviews: Review[] = [
  {
    name: 'Aarav Sharma',
    course: 'AI & Data Science',
    feedback:
      'The hands-on projects gave me real confidence. The mentors were always available and guided me at every step!',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Verma',
    course: 'Full Stack Development',
    feedback:
      'The structured curriculum and mock interviews helped me crack my first job at a top MNC. Truly life-changing!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul Iyer',
    course: 'Machine Learning',
    feedback:
      'I learned ML by building real-world projects. Within months, I landed an internship in a leading AI startup.',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

const StudentsReviewsPage: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-orange-100/50 dark:bg-orange-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-yellow-100/50 dark:bg-yellow-500/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hear From Our Students
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Stories of transformation from learners who shaped their careers with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-4">
                {r.photo && (
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-orange-400"
                  />
                )}
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{r.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{r.course}</p>
                  {/* Star Rating */}
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-1 italic">“{r.feedback}”</p>
            </motion.div>
          ))}
        </div>

        {/* Local Video Stories */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Student Success Stories 🎥
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Watch our learners share their journey from classrooms to careers.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {["get.mp4", "get1.mp4"].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <video className="w-full h-64 md:h-80" controls>
                  <source src={`/videos/${video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            🚀 Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentsReviewsPage;

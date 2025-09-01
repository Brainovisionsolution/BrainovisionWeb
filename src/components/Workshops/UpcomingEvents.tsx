import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
type EventType = {
  id: number;
  title: string;
  type: 'workshop' | 'hackathon';
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prize?: string;
  image: string;
};

const UpcomingEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'workshop' | 'hackathon'>('all');

  const events: EventType[] = [
    {
      id: 1,
      title: 'React Masterclass Workshop',
      type: 'workshop',
      date: '2024-01-15',
      time: '10:00 AM',
      location: 'Online',
      participants: 150,
      maxParticipants: 200,
      tags: ['React', 'Frontend', 'JavaScript'],
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'AI Innovation Hackathon',
      type: 'hackathon',
      date: '2024-01-20',
      time: '09:00 AM',
      location: 'IIT Delhi',
      participants: 89,
      maxParticipants: 100,
      tags: ['AI', 'Machine Learning', 'Innovation'],
      difficulty: 'Advanced',
      prize: '₹2,00,000',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Full Stack Development Bootcamp',
      type: 'workshop',
      date: '2024-01-25',
      time: '2:00 PM',
      location: 'Hybrid',
      participants: 45,
      maxParticipants: 50,
      tags: ['Full Stack', 'Node.js', 'MongoDB'],
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Blockchain Challenge',
      type: 'hackathon',
      date: '2024-02-01',
      time: '10:00 AM',
      location: 'BITS Pilani',
      participants: 67,
      maxParticipants: 80,
      tags: ['Blockchain', 'Web3', 'Solidity'],
      difficulty: 'Advanced',
      prize: '₹1,50,000',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Mobile App Development Workshop',
      type: 'workshop',
      date: '2024-02-05',
      time: '11:00 AM',
      location: 'Online',
      participants: 78,
      maxParticipants: 100,
      tags: ['Flutter', 'Mobile', 'Cross-platform'],
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Cloud Computing Hackathon',
      type: 'hackathon',
      date: '2024-02-10',
      time: '9:00 AM',
      location: 'VIT Chennai',
      participants: 92,
      maxParticipants: 120,
      tags: ['AWS', 'Cloud', 'DevOps'],
      difficulty: 'Intermediate',
      prize: '₹3,00,000',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredEvents = events.filter(
    (event) => activeTab === 'all' || event.type === activeTab
  );

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-primary-yellow/20 text-orange-800 dark:bg-primary-yellow/30 dark:text-primary-yellow';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
   <motion.section
      id="upcoming-events"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Be part of our exciting workshops and hackathons. Explore, learn, and innovate with the best minds.
          </p>
        </motion.div>
        

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Events', icon: Calendar },
            { id: 'workshop', label: 'Workshops', icon: Users },
            { id: 'hackathon', label: 'Hackathons', icon: Filter },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'all' | 'workshop' | 'hackathon')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-yellow text-white shadow-glow-yellow'
                  : 'bg-background-pale dark:bg-dark-card text-text-gray dark:text-dark-muted hover:bg-primary-yellow/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group bg-background-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.type === 'workshop'
                        ? 'bg-primary-yellow text-white'
                        : 'bg-primary-orange text-white'
                    }`}
                  >
                    {event.type === 'workshop' ? 'Workshop' : 'Hackathon'}
                  </span>
                </div>
                {event.prize && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.prize}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-charcoal dark:text-dark-text mb-3 group-hover:text-primary-orange transition-colors duration-200">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-text-gray dark:text-dark-muted">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(event.date)} at {event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants}/{event.maxParticipants} participants</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background-pale dark:bg-dark-bg text-text-gray dark:text-dark-muted text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Difficulty + Button */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(event.difficulty)}`}>
                    {event.difficulty}
                  </span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary-orange hover:bg-primary-yellow text-white font-semibold rounded-lg transition-colors duration-200 group">
                    <span>Register</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-yellow to-primary-orange h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(event.participants / event.maxParticipants) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-text-gray dark:text-dark-muted mt-1">
                    {Math.round((event.participants / event.maxParticipants) * 100)}% filled
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
         <Link
  to="/allevents"
  className="inline-block px-8 py-4 bg-gradient-to-r from-primary-yellow to-primary-orange hover:from-primary-orange hover:to-primary-yellow text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
  Load More Events
</Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;

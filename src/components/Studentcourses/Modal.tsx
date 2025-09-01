import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'enroll' | 'demo' | 'scholarship';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    city: '',
    college: '',
    graduationYear: '',
    learningMode: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        city: '',
        college: '',
        graduationYear: '',
        learningMode: '',
      });
    }, 2000);
  };

  const getModalTitle = () => {
    switch (type) {
      case 'enroll':
        return 'Enroll Now';
      case 'demo':
        return 'Join Free Live Demo';
      case 'scholarship':
        return 'Apply for Scholarship';
      default:
        return 'Get Started';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative dark:bg-gray-900 bg-white text-gray-800 dark:text-white rounded-2xl p-8 max-w-xl w-full mx-4 shadow-2xl transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {getModalTitle()}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Full Name *', type: 'text', key: 'name', placeholder: 'Enter your full name' },
                { label: 'Email Address *', type: 'email', key: 'email', placeholder: 'Enter your email' },
                { label: 'Phone Number *', type: 'tel', key: 'phone', placeholder: 'Enter your phone number' },
                { label: 'City *', type: 'text', key: 'city', placeholder: 'Your city' },
                { label: 'College Name *', type: 'text', key: 'college', placeholder: 'Your college name' },
                { label: 'Graduation Year *', type: 'number', key: 'graduationYear', placeholder: 'e.g. 2025' },
              ].map(({ label, type, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1">{label}</label>
                  <input
                    type={type}
                    required
                    value={(formData as any)[key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    placeholder={placeholder}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium mb-1">Course Interest *</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select a course</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="data-science">Data Science</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="cyber-security">Cyber Security</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Learning Mode *</label>
                <select
                  required
                  value={formData.learningMode}
                  onChange={(e) =>
                    setFormData({ ...formData, learningMode: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
              >
                {type === 'demo'
                  ? 'Register for Demo'
                  : type === 'scholarship'
                  ? 'Apply Now'
                  : 'Enroll Now'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-yellow-500">Success!</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {type === 'demo'
                ? 'You’ve successfully registered for the live demo. Check your email for details.'
                : type === 'scholarship'
                ? 'Your scholarship application has been submitted. We will contact you soon.'
                : 'Thanks for enrolling! We will get in touch shortly.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

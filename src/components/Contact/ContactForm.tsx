import React, { useState } from 'react';
import { Send, Upload, X } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  file: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  isDarkMode: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    file: null
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const inputClasses = isDarkMode
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_0_0_3px_rgba(251,146,60,0.3)]'
    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_0_0_3px_rgba(251,146,60,0.3)]';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        file: null
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${inputClasses} ${
                    errors.fullName ? 'border-red-400' : ''
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${inputClasses} ${
                    errors.email ? 'border-red-400' : ''
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${inputClasses}`}
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${inputClasses} ${
                    errors.subject ? 'border-red-400' : ''
                  }`}
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none ${inputClasses} ${
                  errors.message ? 'border-red-400' : ''
                }`}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Attach File (Optional)
              </label>
              
              {!formData.file ? (
                <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 hover:border-orange-400 ${
                  isDarkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                }`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className={`w-8 h-8 mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`mb-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      PDF, DOC, DOCX, or images (MAX. 10MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  />
                </label>
              ) : (
                <div className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {formData.file.name}
                  </span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 rounded-full hover:bg-red-100 text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed ${
                isSubmitting
                  ? 'bg-gray-400'
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-[0_4px_16px_rgba(251,146,60,0.4)] hover:shadow-[0_6px_24px_rgba(251,146,60,0.6)]'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </div>
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                <p className="font-medium">Failed to send message.</p>
                <p className="text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import axios from 'axios';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxNgUnb35W6Kdyi7ntdwEGqbjjXd1F_8A7b7ceNTiW2Gvv-taoVlmnCN6aMBpSf9jGb/exec';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    date: '',
    proposalType: 'workshop',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams(formData).toString();
      await axios.get(`${GOOGLE_SHEET_URL}?${params}`);
      alert('Submitted successfully!');
    } catch (err) {
      console.error('Failed to submit:', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-dark-bg overflow-hidden">
      {/* 🔲 Background Image (blur + opacity) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain blur-sm opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/bovyellow.png')" }}
      />

      {/* 🔳 Form + Instructions Side-by-Side */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 📥 Form Card */}
        <div className="p-8 rounded-3xl shadow-neumorphic bg-[#fefefe] dark:bg-[#1b1b1d] dark:shadow-[6px_6px_16px_#151515,_-6px_-6px_16px_#232323]">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Submit Proposal Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[{ label: 'Faculty Name', name: 'name', type: 'text' },
              { label: 'College Name', name: 'college', type: 'text' },
              { label: 'Date', name: 'date', type: 'date' }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl shadow-neumorphic-inner bg-[#fefefe] dark:bg-[#1b1b1d] dark:shadow-[inset_4px_4px_8px_#161616,_inset_-4px_-4px_8px_#242424] text-gray-800 dark:text-white"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Proposal Type
              </label>
              <select
                name="proposalType"
                value={formData.proposalType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl shadow-neumorphic-inner bg-[#fefefe] dark:bg-[#1b1b1d] dark:shadow-[inset_4px_4px_8px_#161616,_inset_-4px_-4px_8px_#242424] text-gray-800 dark:text-white"
              >
                <option value="workshop">Workshop</option>
                <option value="workshop_hackathon">Workshop + Hackathon</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md hover:scale-[1.02]"
            >
              {loading ? 'Submitting...' : 'Submit to Google Sheet'}
            </button>
          </form>
        </div>

        {/* 🧾 Instruction Card (Side-by-side) */}
        <div className="p-8 rounded-3xl shadow-neumorphic bg-white/80 dark:bg-[#1b1b1d]/80 backdrop-blur-md border border-yellow-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            How to Fill the Form
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-600 dark:text-gray-300">
            <li><strong>Faculty Name:</strong> Enter the full name of the faculty initiating the event.</li>
            <li><strong>College Name:</strong> Provide the complete official name of your college/institute.</li>
            <li><strong>Date:</strong> Select the preferred event date from the calendar.</li>
            <li><strong>Proposal Type:</strong> Choose either Workshop or Workshop + Hackathon based on your plan.</li>
            <li>Once submitted, our team will reach out within 24–48 hours for next steps.</li>
            <li> Make sure the details are accurate — this will be reflected in your proposal document.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProposalForm;

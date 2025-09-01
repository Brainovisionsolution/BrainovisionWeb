import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    { name: 'Google', logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/4526454/pexels-photo-4526454.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Amazon', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Netflix', logo: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Apple', logo: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Meta', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Tesla', logo: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Uber', logo: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Spotify', logo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Adobe', logo: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'IBM', logo: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Oracle', logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Intel', logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'NVIDIA', logo: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const partnerCompanies = [
    'TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Accenture', 'Cognizant', 'Capgemini',
    'Deloitte', 'PwC', 'EY', 'KPMG', 'Flipkart', 'Paytm', 'Zomato', 'Swiggy', 'Ola', 'BYJU\'S',
    'Unacademy', 'PhonePe', 'Razorpay', 'Freshworks', 'Zoho', 'MakeMyTrip'
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-[#1a1a1a] dark:via-[#111] dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Global</span> Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our students work at the world's most innovative companies. Join thousands who've transformed their careers with Brainovision.
          </p>
          <div className="text-center">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold">
              500+ Hiring Partners Worldwide
            </span>
          </div>
        </div>

        {/* Top Tier Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700 dark:text-gray-200">
            Where Our Alumni Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#1e1e1e] shadow-md dark:shadow-none border border-yellow-200 dark:border-orange-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-xl flex items-center justify-center mb-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Companies Scroll */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700 dark:text-gray-200">
            Our Hiring Partners in India
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...partnerCompanies, ...partnerCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 px-6 py-3 bg-white dark:bg-[#1e1e1e] border border-yellow-200 dark:border-orange-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap hover:scale-105 transition-all"
                >
                  {company}
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white dark:bg-[#1e1e1e] rounded-3xl p-8 md:p-12 border border-yellow-200 dark:border-orange-700 shadow-md dark:shadow-none">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-yellow-200">
              Placement <span className="text-orange-500">Success</span> Stories
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven track record speaks for itself – consistent placements across all major tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">95%</div>
              <div className="text-gray-700 dark:text-gray-300">Placement Rate</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Within 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">₹8.5L</div>
              <div className="text-gray-700 dark:text-gray-300">Average Package</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">For freshers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">₹25L</div>
              <div className="text-gray-700 dark:text-gray-300">Highest Package</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 dark:text-yellow-300 mb-2">15+</div>
              <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">In placement</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-yellow-200">Ready to Join These Amazing Companies?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Start your journey today and be part of the next success story. Our placement team will guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;

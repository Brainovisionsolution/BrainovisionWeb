import React, { useState } from "react";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwdDCXVXNE1F97aT-StdtEi33Fp_WrS-na1MDnWqvt2Y0os86QOqAPXAixirI_ecp6vpw/exec",
        {
          method: "POST",
          body: new URLSearchParams(form),
        }
      );
      if (response.ok) {
        setSubmitted(true);
        setForm({ fullName: "", email: "", phone: "", dob: "" });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed! Please try again.");
    }
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-6 transition-all duration-700 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-16 relative z-10 max-w-7xl">
        {/* Left: Hero Content */}
        <div className="flex-1 text-center xl:text-left space-y-8">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span
                className="block animate-text-gradient"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #DC2626 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                IGNITE
              </span>
              <span
                className="block animate-text-gradient-delayed"
                style={{
                  background: "linear-gradient(135deg, #EAB308 0%, #F97316 50%, #EF4444 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                YOUR FUTURE
              </span>
            </h1>

            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} animate-fade-in-up`}>
              Master Tomorrow's Skills
              <span className="text-orange-500"> Today</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-fade-in-up-delayed">
            <p className={`text-xl md:text-2xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto xl:mx-0`}>
              Join thousands of ambitious learners transforming their careers with 
              <span className="font-semibold text-orange-500"> industry-leading courses</span>, 
              expert mentorship, and hands-on projects that land you your dream job.
            </p>
          </div>
        </div>

        {/* Right: Neumorphic Form Card */}
        <div className="flex-1 max-w-lg w-full">
          <div
            className={`relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
              darkMode
                ? "bg-black shadow-[20px_20px_40px_#0a0a0a,-20px_-20px_40px_#1a1a1a]"
                : "bg-white shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff]"
            }`}
          >
            <div className="relative z-10">
              {submitted ? (
                <div className="text-center space-y-6 py-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-orange-500 mb-3">Welcome Aboard!</h3>
                    <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Your journey to excellence begins now. We'll contact you within 24 hours!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h3 className="text-4xl font-black mb-3">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                        SECURE YOUR SPOT
                      </span>
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Join 10,000+ successful graduates
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { field: "fullName", placeholder: "Your Full Name", type: "text" },
                      { field: "email", placeholder: "Email Address", type: "email" },
                      { field: "phone", placeholder: "Phone Number", type: "tel" },
                      { field: "dob", placeholder: "Date of Birth", type: "date" }
                    ].map(({ field, placeholder, type }) => (
                      <div key={field} className="relative">
                        <input
                          type={type}
                          name={field}
                          placeholder={placeholder}
                          value={(form as any)[field]}
                          onChange={handleChange}
                          required
                          className={`w-full px-6 py-5 rounded-2xl border-none outline-none transition-all duration-300 font-medium text-lg ${
                            darkMode 
                              ? "bg-black text-white placeholder-gray-400 shadow-[inset_8px_8px_16px_#0a0a0a,inset_-8px_-8px_16px_#1a1a1a] focus:shadow-[inset_4px_4px_8px_#0a0a0a,inset_-4px_-4px_8px_#1a1a1a,0_0_0_3px_rgba(249,115,22,0.3)]" 
                              : "bg-white text-gray-800 placeholder-gray-500 shadow-[inset_8px_8px_16px_#d1d5db,inset_-8px_-8px_16px_#ffffff] focus:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff,0_0_0_3px_rgba(249,115,22,0.3)]"
                          }`}
                        />
                      </div>
                    ))}
                    
                    <button
                      type="submit"
                      className={`group relative w-full py-6 rounded-2xl font-black text-xl text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 ${
                        darkMode 
                          ? "shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#1a1a1a] hover:shadow-[12px_12px_24px_#0a0a0a,-12px_-12px_24px_#1a1a1a]"
                          : "shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        CLAIM YOUR FUTURE NOW
                      </div>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Orange Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            className="animate-wave"
          />
          <path
            d="M0,80 C300,140 600,20 900,80 C1050,110 1150,50 1200,80 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.7"
            className="animate-wave-reverse"
          />
        </svg>
      </div>

      {/* Enhanced CSS animations */}
      <style>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-25px); }
        }
        
        @keyframes wave-reverse {
          0%, 100% { transform: translateX(-25px); }
          50% { transform: translateX(0px); }
        }
        
        .animate-text-gradient { animation: text-gradient 3s ease infinite; }
        .animate-text-gradient-delayed { animation: text-gradient 3s ease infinite 1s; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-up-delayed { animation: fade-in-up 0.8s ease-out 0.3s both; }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        .animate-wave-reverse { animation: wave-reverse 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
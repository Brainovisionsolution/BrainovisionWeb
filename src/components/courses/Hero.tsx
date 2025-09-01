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
        "https://script.google.com/macros/s/AKfycbymow6LJb8ts_ctP4Ia6We4D5IQhpER65U7EjmvMiGW7wRRxN0F5-dJIN7B4_5hlgesEA/exec",
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
    }
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-500`}
    >
      {/* Decorative gradient circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left Side: Scholarship Info */}
        <div className="flex-1">
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight`}
            style={{
              background: "linear-gradient(to right, #FBBF24, #F97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🎓 Unlock Your Future with Our Scholarship Test
          </h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6 text-lg md:text-xl`}>
            Ace the test and get up to <strong>100% fee waiver</strong> on your selected tech course.
          </p>
          <ul className={`space-y-3 text-md ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            {[
              "Up to 100% scholarship on fees",
              "Covers multiple in-demand tech courses",
              "Flexible learning with live sessions",
              "Mentorship from industry experts",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">✅</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Form Card */}
        <div
          className={`flex-1 w-full max-w-lg p-8 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 ${
            darkMode
              ? "bg-gray-800 shadow-[inset_8px_8px_16px_#1a1a1a,inset_-8px_-8px_#2e2e2e]"
              : "bg-[#f0f0f3] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_#ffffff]"
          }`}
        >
          {submitted ? (
            <div className={`text-center p-6 rounded-xl font-bold ${darkMode ? "text-yellow-400" : "text-orange-500"}`}>
              🎉 Registration Successful! We will contact you soon.
            </div>
          ) : (
            <>
              <h2 className={`text-2xl font-extrabold text-center mb-4 ${darkMode ? "text-yellow-400" : "text-orange-500"}`}>
                Register for Scholarship Test
              </h2>
              <p className={`text-center mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Fill out the form to secure your spot in the upcoming test.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border-none outline-none ${
                    darkMode ? "bg-gray-900 text-white" : "bg-[#e0e0e0] text-gray-800"
                  }`}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border-none outline-none ${
                    darkMode ? "bg-gray-900 text-white" : "bg-[#e0e0e0] text-gray-800"
                  }`}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border-none outline-none ${
                    darkMode ? "bg-gray-900 text-white" : "bg-[#e0e0e0] text-gray-800"
                  }`}
                  required
                />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={form.dob}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border-none outline-none ${
                    darkMode ? "bg-gray-900 text-white" : "bg-[#e0e0e0] text-gray-800"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-xl font-bold text-center transition-transform duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900"
                      : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                  }`}
                >
                  Register Now
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Hero;

import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-[#1A0E00] dark:via-[#1A0E00] dark:to-[#2B1700]"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-30 dark:opacity-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="space-y-10">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-yellow-50/60 px-5 py-2 backdrop-blur-md dark:border-yellow-500/20 dark:bg-yellow-900/40">
            <Sparkles className="h-4 w-4 text-orange-600 dark:text-yellow-400" />
            <span className="text-sm font-semibold tracking-wide text-orange-700 dark:text-yellow-300">
              Premium Software Development
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-montserrat text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            We Build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent dark:from-yellow-400 dark:to-orange-500">
              Future-Ready
            </span>
            <br className="hidden sm:block" />
            Digital Products
          </h1>

          {/* Subtext */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
            Transform bold ideas into scalable, secure, and beautiful
            applications with our elite engineering squad. From discovery to
            deployment, we deliver code that moves business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl dark:from-yellow-500 dark:to-orange-500 dark:hover:from-yellow-600 dark:hover:to-orange-600"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-300/30 bg-white/70 px-8 py-4 font-semibold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 dark:border-gray-600/30 dark:bg-gray-800/50 dark:text-white dark:hover:bg-gray-800/90"
            >
              <Play className="h-5 w-5 text-orange-500 dark:text-yellow-400" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-6 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-gray-700">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Expert Developers" },
              { value: "24/7", label: "Support Available" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-montserrat text-3xl font-bold text-orange-500 dark:text-yellow-400">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

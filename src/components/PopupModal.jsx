import { X } from "lucide-react";

export default function PopupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full mx-4 md:flex rounded-3xl bg-white/70 dark:bg-gray-900/60 shadow-xl border border-yellow-200 backdrop-blur-lg overflow-hidden animate-popup">

        {/* Close Button */}
        <button
          onClick={() => {
            console.log("Close clicked"); // ✅ for debugging
            onClose();
          }}
          className="absolute top-4 right-4 text-yellow-600 hover:text-orange-500 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-tr from-yellow-100 to-orange-100">
          <img
            src="/images/expert.jpg"
            alt="Career Expert"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-orange-600 mb-3 drop-shadow-md">
            Talk to Our Career Expert
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">
            Get in touch via <span className="text-green-600 font-semibold">WhatsApp</span> or request a{" "}
            <span className="text-yellow-600 font-semibold">call back</span>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            We'll guide you to the right path.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mb-4 py-3 px-6 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow transition-all"
          >
            💬 WhatsApp Us
          </a>

          <a
            href="#callback"
            className="w-full py-3 px-6 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow transition-all"
          >
            📞 Request a Call Back
          </a>
        </div>
      </div>

   
    </div>
  );
}

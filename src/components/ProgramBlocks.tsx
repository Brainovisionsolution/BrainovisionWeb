import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const programs = [
  {
    logo: "/courses/students.png",
    title: "For Students",
    chips: ["College Level", "Beginner to Advanced", "Live Projects"],
    description:
      "Kickstart your tech journey with foundational and advanced topics tailored for college students.",
    details:
      "Includes 6 months of mentoring, live project work, and certification to boost your career start.",
    img: "/courses/student1.png",
    ring: "bg-blue-300/30",
  },
  {
    logo: "/courses/WorkingProfessinals.png",
    title: "For Working Professionals",
    chips: ["Evening Classes", "Career Switch", "Capstone Project"],
    description:
      "Switch domains, upskill with in-demand stacks, and boost your salary with real-world mentorship.",
    details:
      "Covers trending technologies, leadership skills, and portfolio-building projects for career growth.",
    img: "/courses/student4.png",
    ring: "bg-green-300/30",
  },
  {
    logo: "/courses/jobOriented.png",
    title: "For Job Seekers",
    chips: ["Job-Ready", "Interview Prep", "System Design"],
    description:
      "Get job-ready with placement training, DSA prep, system design and mock interviews.",
    details:
      "Full placement support, mock technical rounds, and personalized career strategy sessions.",
    img: "/images/student.png",
    ring: "bg-orange-300/40",
  },
];

export default function ProgramBlocks() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/courses");
  };

  const toggleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section
      id="programs"
      className="relative py-16 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute -left-24 top-24 w-72 md:w-96 h-72 md:h-96 rounded-full bg-blue-100/50 dark:bg-blue-900/30 blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-40 w-72 md:w-96 h-72 md:h-96 rounded-full bg-green-100/50 dark:bg-green-900/30 blur-3xl pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 w-72 md:w-96 h-72 md:h-96 rounded-full bg-orange-100/50 dark:bg-orange-900/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
          Tailored Learning Paths
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 md:mb-20 max-w-2xl mx-auto">
          Choose the program that suits your career stage and start building a
          future you’re proud of.
        </p>

        {/* Program Grid */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              onClick={handleNavigate}
              className="relative h-[420px] sm:h-[450px] md:h-[470px] cursor-pointer [perspective:1200px]"
            >
              <motion.div
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
              >
                {/* FRONT */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute w-full h-full rounded-2xl md:rounded-3xl bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl border border-gray-200 dark:border-neutral-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col p-5 sm:p-6"
                >
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="h-16 sm:h-20 w-auto mx-auto mb-4 sm:mb-6 object-contain"
                  />

                  <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-700 dark:to-neutral-600 shadow-inner border border-gray-300 dark:border-neutral-600"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-1 gap-3 sm:gap-4 items-center">
                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-28 sm:h-36 w-auto object-contain"
                      draggable={false}
                    />
                  </div>

                  <div className="flex gap-3 mt-4 sm:mt-6">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate();
                      }}
                      className="bg-white/60 dark:bg-neutral-700/60 border border-gray-300 dark:border-neutral-600 shadow-md hover:shadow-lg flex-1 text-xs sm:text-sm"
                    >
                      Request Call
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate();
                      }}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md hover:shadow-lg flex-1 text-xs sm:text-sm"
                    >
                      Apply Now <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* BACK */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute w-full h-full rounded-2xl md:rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl border border-gray-200 dark:border-neutral-700 shadow-lg flex flex-col justify-center"
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
                    {p.title} - Details
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {p.details}
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate();
                      }}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-5 sm:px-6 py-2 rounded-full shadow-lg hover:shadow-xl text-xs sm:text-sm"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

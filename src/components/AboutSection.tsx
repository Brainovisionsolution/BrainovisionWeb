import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Star, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  {
    title: "Innovation",
    desc: "Cutting-edge solutions for modern challenges",
    color: "from-yellow-400 to-orange-400",
    icon: <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />,
  },
  {
    title: "Excellence",
    desc: "Quality-driven development and training",
    color: "from-yellow-500 to-orange-500",
    icon: <Star className="w-6 h-6 text-orange-500 dark:text-yellow-400" />,
  },
  {
    title: "Growth",
    desc: "Continuous learning and improvement",
    color: "from-yellow-300 to-orange-300",
    icon: <TrendingUp className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />,
  },
];

export const AboutSection = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Brainovision Solutions</title>
        <meta
          name="description"
          content="Brainovision Solutions pioneers AI, ML & data-driven innovation."
        />
      </Helmet>

      <section
        id="about"
        className="relative py-24 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 overflow-hidden"
      >
        {/* Background subtle glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[200px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full" />
        </div>

        {/* Main container */}
        <div className="max-w-6xl mx-auto px-6 space-y-16 text-center">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">
              About Brainovision
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transforming{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Ideas into Digital Reality
              </span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Since 2014, <span className="font-semibold text-yellow-600 dark:text-yellow-400">Brainovision</span> 
              has empowered enterprises, educators, and institutions with{" "}
              <span className="font-semibold">real-world AI, ML, and data-driven solutions</span>.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "🌍 Our Vision",
                desc: "To be the leading catalyst of digital transformation through innovative technology and impactful education.",
              },
              {
                title: "🚀 Our Mission",
                desc: "Deliver next-gen technology, build industry-ready talent, and foster growth through collaborations, training, and smart solutions.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(255,255,255,0.05)] border border-yellow-100 dark:border-yellow-700 hover:scale-[1.03] transition-transform"
              >
                <h4 className="text-2xl font-bold text-orange-600 dark:text-yellow-400 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {values.map(({ title, desc, color, icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-neutral-800 border border-yellow-100 dark:border-yellow-700 shadow-md hover:shadow-xl hover:scale-105 transition">
                  <div className={`h-1 w-full rounded-t-xl bg-gradient-to-r ${color}`} />
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 shadow-inner">
                      {icon}
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

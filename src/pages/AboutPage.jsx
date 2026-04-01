import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers, FaGlobe } from "react-icons/fa";

export default function AboutPage() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Innovation Driven",
      desc: "We create cutting-edge digital solutions that accelerate business growth.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      desc: "Our team delivers creative strategies tailored to your brand and audience.",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      desc: "Skilled professionals collaborating to turn your ideas into reality.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      desc: "Serving clients worldwide with digital solutions that scale.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#171717] px-6 sm:px-16 py-24 flex flex-col gap-20">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-[#22C55E] uppercase text-xs tracking-widest mb-2">
          About Us
        </p>

        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Go Digital
          </span>
        </h1>

        <p className="text-[#D1D5DB] text-sm sm:text-base">
          Go Digital is a forward-thinking digital agency focused on delivering innovative, high-impact solutions to help businesses grow in the modern digital landscape.
        </p>
      </motion.div>

      {/* FEATURES */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 0 25px rgba(34,197,94,0.3)" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex flex-col items-center text-center gap-4 bg-[#171717] p-6 rounded-3xl border border-[#2F2F2F] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all"
          >
            <div className="text-[#22C55E] text-4xl">
              {feature.icon}
            </div>

            <h3 className="text-white text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-[#D1D5DB] text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center flex flex-col gap-6"
      >
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Our Mission
        </h2>

        <p className="text-[#D1D5DB] text-base sm:text-lg">
          At Go Digital, our mission is to empower businesses with modern digital solutions that drive engagement, enhance efficiency, and increase growth. We combine creativity, technology, and strategy to deliver measurable results.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22C55E" }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-[#22C55E] hover:bg-[#16A34A] text-black font-bold rounded-2xl py-4 px-10 text-lg transition-all"
        >
          Work With Us
        </motion.button>
      </motion.div>
    </section>
  );
}

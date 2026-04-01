import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

export default function Home() {
  const roles = useMemo(
    () => [
      "AI STRATEGY",
      "SMART AUTOMATION",
      "DIGITAL INNOVATION",
      "BUSINESS GROWTH",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timer = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, roles]);

  return (
    <section className="relative min-h-screen bg-[#0F0F0F] overflow-hidden pb-8 px-4 sm:px-10 lg:px-16 pt-28 sm:pt-32">
      
      {/* GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <ParticlesBackground />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-[#22C55E] text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.45em] mb-4 sm:mb-6">
            {roles[index].substring(0, subIndex)}|
          </p>

          <h1 className="text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight">
            Build Smarter AI <br />
            <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
              Decisions Faster
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-[#D1D5DB] max-w-xl text-sm sm:text-lg leading-relaxed">
            We build powerful digital solutions using AI, modern web development,
            and smart marketing to help your business grow faster, smarter, and stronger.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-10 flex gap-3 sm:gap-5 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#22C55E] hover:bg-[#16A34A] text-black rounded-xl font-semibold transition"
            >
              Get Started
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("service");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border border-[#2F2F2F] text-white rounded-xl hover:border-[#22C55E] hover:text-[#22C55E] transition"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="relative bg-[#171717] border border-[#2F2F2F] rounded-3xl p-5 sm:p-6 lg:p-8 transition hover:border-[#3F3F3F]">
            
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                AI Impact Insights
              </h3>
              <span className="text-[#22C55E] text-xs">Live</span>
            </div>

            <div className="space-y-4">
              {[
                ["Task Automation", "90%"],
                ["Decision Speed", "85%"],
                ["Cost Reduction", "70%"],
                ["Data Accuracy", "95%"],
              ].map(([label, value], i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-[#D1D5DB]">{label}</span>
                    <span className="text-[#22C55E]">{value}</span>
                  </div>

                  <div className="w-full h-2 bg-[#2F2F2F] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: value }}
                      transition={{ duration: 1.2, delay: i * 0.2 }}
                      className="h-full bg-[#22C55E]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BADGE */}
          <div className="absolute -top-6 right-2 sm:-top-8 sm:-right-4 lg:-top-10 lg:-right-10 bg-[#1F1F1F] border border-[#2F2F2F] px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-[#22C55E] text-[10px] sm:text-xs whitespace-nowrap">
            AI Powered
          </div>
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 max-w-6xl mx-auto mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
      >
        {[
          ["10+", "Years Experience"],
          ["150+", "Projects Delivered"],
          ["98%", "Client Satisfaction"],
          ["24/7", "Support Available"],
        ].map(([num, label], i) => (
          <div
            key={i}
            className="bg-[#171717] border border-[#2F2F2F] rounded-2xl p-4 sm:p-6 text-center hover:border-[#3F3F3F] transition"
          >
            <h2 className="text-[#22C55E] text-lg sm:text-2xl font-bold">
              {num}
            </h2>
            <p className="text-[#D1D5DB] text-xs sm:text-sm mt-1">{label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

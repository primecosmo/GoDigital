import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaCogs,
  FaArrowRight,
  FaChartBar,
} from "react-icons/fa";

export default function AiSolutions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <FaRobot />,
      title: "AI Chatbots",
      desc: "Automate customer support with intelligent AI chatbots.",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      desc: "Leverage data with smart machine learning solutions.",
    },
    {
      icon: <FaCogs />,
      title: "Business Automation",
      desc: "Streamline operations with automated workflows.",
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      desc: "Gain insights and make data-driven decisions.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Deploy and scale your infrastructure on cloud platforms.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software",
      desc: "Tailor-made IT solutions for your business needs.",
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white px-4 sm:px-10 lg:px-16 py-20 overflow-hidden relative">

      {/* Glow / Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          AI & IT <br />
          <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Solutions
          </span>
        </motion.h1>

        <p className="text-[#D1D5DB] mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Transform your business with cutting-edge AI technologies and modern
          IT solutions designed to automate, optimize, and scale your operations.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 sm:mt-8 w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#22C55E] text-black px-6 sm:px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        >
          Explore AI Solutions <FaArrowRight />
        </motion.button>
      </div>

      {/* ICONS */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 relative z-10">
        {[FaRobot, FaBrain, FaCloud, FaCogs].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-3 sm:p-4 bg-[#171717] rounded-lg border border-[#2F2F2F]"
          >
            <Icon className="text-xl sm:text-3xl text-[#22C55E]" />
          </motion.div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 relative z-10">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 sm:p-8 bg-[#171717] border border-[#2F2F2F] rounded-2xl hover:border-[#3F3F3F] transition group"
          >
            <div className="text-[#22C55E] text-2xl sm:text-3xl mb-3 sm:mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {item.title}
            </h3>

            <p className="text-[#D1D5DB] text-xs sm:text-sm">{item.desc}</p>

            <button className="mt-4 text-[#22C55E] flex items-center gap-2 text-xs sm:text-sm">
              Contact Us <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </div>

      {/* FEATURES / BENEFITS */}
      <div className="mt-20 sm:mt-24 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Why Choose <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">Our AI Solutions</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {["Automation & Efficiency", "Scalable Infrastructure", "Future-Ready Technology"].map((item, i) => (
            <div key={i} className="p-5 bg-[#171717] rounded-xl border border-[#2F2F2F]">
              <p className="text-[#22C55E] text-sm sm:text-base font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="mt-20 sm:mt-24 max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Our <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">Approach</span>
        </h2>

        <div className="space-y-6">
          {["Analysis", "Planning", "Implementation", "Testing", "Optimization"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l border-[#2F2F2F] pl-5 relative"
            >
              <span className="absolute -left-2 top-1 w-2 h-2 bg-[#22C55E] rounded-full" />
              <h3 className="text-sm sm:text-base font-semibold">{step}</h3>
              <p className="text-[#D1D5DB] text-xs sm:text-sm">Smart execution for optimal results.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-20 sm:mt-24 relative z-10">
        {[
          { num: "80%", label: "Automation Efficiency" },
          { num: "2x", label: "Productivity Boost" },
          { num: "24/7", label: "System Monitoring" },
          { num: "100%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#171717] border border-[#2F2F2F] rounded-2xl p-4 sm:p-6 hover:border-[#3F3F3F] transition">
            <h3 className="text-[#22C55E] text-xl sm:text-3xl font-bold">{stat.num}</h3>
            <p className="text-[#D1D5DB] text-xs sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20 sm:mt-24 relative z-10">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Ready to Transform Your Business with AI?
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto bg-[#22C55E] text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
}

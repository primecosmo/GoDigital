import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaChartLine,
  FaBullhorn,
  FaSearch,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve your Google rankings and drive organic traffic.",
    },
    {
      icon: <FaBullhorn />,
      title: "Paid Advertising",
      desc: "Run high-converting ads campaigns across platforms.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Growth",
      desc: "Track and optimize performance with real data.",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      desc: "Engage users with targeted campaigns.",
    },
    {
      icon: <FaBullhorn />,
      title: "Content Marketing",
      desc: "Create valuable and engaging content.",
    },
    {
      icon: <FaChartLine />,
      title: "Conversion Optimization",
      desc: "Turn traffic into real customers.",
    },
  ];

  return (
    <section className="bg-[#0F0F0F] text-white px-4 sm:px-10 lg:px-16 py-20 overflow-hidden relative">

      {/* Glow */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#22C55E]/10 blur-[120px] sm:blur-[160px] top-0 left-1/2 -translate-x-1/2" />

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Digital Marketing & <br />
          <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            SEO Services
          </span>
        </motion.h1>

        <p className="text-[#D1D5DB] mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Boost your online presence and generate more conversions with our
          data-driven strategies.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 sm:mt-8 w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-black px-6 sm:px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        >
          Start Marketing <FaArrowRight />
        </motion.button>
      </div>

      {/* ICONS */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 relative z-10">
        {[FaSearch, FaBullhorn, FaChartLine, FaEnvelope].map((Icon, i) => (
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
            className="p-6 sm:p-8 bg-[#171717] border border-[#2F2F2F] rounded-xl sm:rounded-2xl hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition group"
          >
            <div className="text-[#22C55E] text-2xl sm:text-3xl mb-3 sm:mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {item.title}
            </h3>

            <p className="text-[#888] text-xs sm:text-sm">{item.desc}</p>

            <button className="mt-4 text-[#22C55E] flex items-center gap-2 text-xs sm:text-sm">
              Contact Us <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </div>

      {/* RESULTS */}
      <div className="mt-20 sm:mt-24 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          Results <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">We Deliver</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Increase Website Traffic",
            "Higher Google Rankings",
            "Better Conversion Rates",
          ].map((item, i) => (
            <div key={i} className="p-5 bg-[#171717] rounded-lg border border-[#2F2F2F]">
              <p className="text-[#22C55E] text-sm sm:text-base font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20 sm:mt-24 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Ready to Grow Your Business Online?
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
}

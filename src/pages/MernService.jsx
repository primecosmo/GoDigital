import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

export default function MernService() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <FaCode />,
      title: "Custom Web Applications",
      desc: "Scalable and high-performance applications tailored to your business needs.",
    },
    {
      icon: <FaServer />,
      title: "REST API Development",
      desc: "Secure APIs for seamless frontend-backend communication.",
    },
    {
      icon: <FaDatabase />,
      title: "Admin Dashboards",
      desc: "Modern dashboards with analytics and real-time data insights.",
    },
    {
      icon: <FaReact />,
      title: "E-commerce Solutions",
      desc: "Complete online stores with payment integration.",
    },
    {
      icon: <FaNodeJs />,
      title: "Real-time Applications",
      desc: "Live chat, notifications, and real-time systems.",
    },
    {
      icon: <FaServer />,
      title: "Cloud Deployment",
      desc: "Deploy apps on AWS, Vercel, and scalable cloud platforms.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white px-4 sm:px-10 lg:px-16 py-20 overflow-hidden relative">
      
      {/* Glow */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#39FF14]/10 blur-[120px] sm:blur-[160px] top-0 left-1/2 -translate-x-1/2" />

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          MERN Stack <br />
          <span className="text-[#39FF14]">Development Services</span>
        </motion.h1>

        <p className="text-[#B0B0B0] mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          We build scalable, high-performance web applications using MongoDB,
          Express, React, and Node.js.
        </p>

        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          className="mt-6 sm:mt-8 w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#39FF14] text-black px-6 sm:px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(57,255,20,0.4)]"
        >
          Start Your Project <FaArrowRight />
        </motion.button>
      </div>

      {/* ICONS */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 relative z-10">
        {[FaReact, FaNodeJs, FaDatabase, FaServer].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-3 sm:p-4 bg-[#111] rounded-lg border border-[#1E1E1E]"
          >
            <Icon className="text-xl sm:text-3xl text-[#39FF14]" />
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
            className="p-6 sm:p-8 bg-[#111] border border-[#1E1E1E] rounded-xl sm:rounded-2xl hover:shadow-[0_0_25px_rgba(57,255,20,0.2)] transition group"
          >
            <div className="text-[#39FF14] text-2xl sm:text-3xl mb-3 sm:mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              {item.title}
            </h3>

            <p className="text-[#888] text-xs sm:text-sm">{item.desc}</p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-4 text-[#39FF14] flex items-center gap-2 text-xs sm:text-sm"
            >
              Contact Us <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </div>

      {/* PROCESS */}
      <div className="mt-20 sm:mt-24 max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Our <span className="text-[#39FF14]">Process</span>
        </h2>

        <div className="space-y-6">
          {["Planning", "Design", "Development", "Testing", "Deployment"].map(
            (step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="border-l border-[#1E1E1E] pl-5 relative"
              >
                <span className="absolute -left-2 top-1 w-2 h-2 bg-[#39FF14] rounded-full" />
                <h3 className="text-sm sm:text-base font-semibold">{step}</h3>
                <p className="text-[#888] text-xs sm:text-sm">
                  Professional execution with attention to detail.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-20 sm:mt-24 relative z-10">
        {[
          { num: "50+", label: "Projects" },
          { num: "100%", label: "Satisfaction" },
          { num: "24/7", label: "Support" },
          { num: "5+", label: "Experience" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-xl sm:text-3xl text-[#39FF14] font-bold">
              {stat.num}
            </h3>
            <p className="text-[#888] text-xs sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20 sm:mt-24 relative z-10">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Ready to Build Your Next Project?
        </h2>

        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto bg-[#39FF14] text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(57,255,20,0.4)]"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
}
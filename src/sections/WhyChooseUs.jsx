import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCogs,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import heroImg from "../assets/godigital.jpeg"; // 👈 your image

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "MERN Stack Development",
      desc: "Delivering scalable, high-performance web applications using MongoDB, Express, React, and Node.js tailored to your business needs.",
    },
    {
      icon: <FaCogs />,
      title: "Digital Marketing & SEO",
      desc: "Enhancing your online visibility with SEO-focused strategies, content marketing, and data-driven digital campaigns.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Social Media Management",
      desc: "Strengthening your brand presence across Facebook, Instagram, LinkedIn, and TikTok with strategic social media management.",
    },
    {
      icon: <FaRocket />,
      title: "AI & IT Solutions",
      desc: "Utilising AI tools and modern IT services to streamline operations, optimise workflows, and future-proof your organisation.",
    },
  ];

  return (
    <section id="service" className="relative bg-[#0A0A0A] px-6 sm:px-16 pt-32 pb-32 overflow-hidden">
      {/* GREEN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#39FF14]/10 blur-[160px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-[#39FF14] mb-4">
          IT, AI & Digital Expertise
        </p>

        <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
          Go Digital: Premium <br />
          <span className="text-[#39FF14]">End-to-End Digital Solutions</span>
        </h2>

        <p className="text-[#B0B0B0] mt-6 leading-relaxed max-w-2xl mx-auto">
          Go Digital provides comprehensive IT and AI services, including MERN stack development, digital marketing, SEO, and social media management. Our solutions empower businesses to grow, innovate, and maintain a competitive edge in today's digital landscape.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT SIDE: TOP TEXT + ICONS, IMAGE BELOW */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8 relative"
        >
          {/* TEXT + ICONS TOP */}
          <div className="space-y-6">
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
              Unlock Your <span className="text-[#39FF14]">Digital Potential</span>
            </h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-sm">
              At Go Digital, we combine MERN stack development, AI-powered IT solutions, and expert digital marketing strategies to transform businesses into agile, data-driven, and future-ready organisations.
            </p>

            {/* ICON ROW */}
            <div className="flex gap-6 mt-4 text-[#39FF14] text-2xl">
              <FaLightbulb title="Innovation" />
              <FaCogs title="Automation" />
              <FaShieldAlt title="Security" />
              <FaRocket title="Growth" />
            </div>
          </div>

          {/* IMAGE BOTTOM */}
          <div className="relative mt-6">
            <img
              src={heroImg}
              alt="Go Digital Premium IT & Digital Solutions"
              className="w-full rounded-3xl shadow-[0_0_80px_rgba(57,255,20,0.2)]"
            />
            {/* glow overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#39FF14]/10 to-transparent" />
          </div>
        </motion.div>

        {/* RIGHT SIDE: FEATURES */}
        <div className="space-y-20">
          <div className="space-y-16">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="relative pl-12 border-l border-[#1E1E1E]"
              >
                {/* dot */}
                <span className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-[#39FF14]" />

                {/* icon */}
                <div className="text-[#39FF14] text-2xl mb-3">
                  {item.icon}
                </div>

                <h3 className="text-white text-xl font-semibold">{item.title}</h3>

                <p className="text-[#B0B0B0] mt-3 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-32"
      >
        <p className="text-[#777] text-sm mb-4">Trusted by businesses embracing digital innovation</p>

        <h3 className="text-white text-2xl sm:text-3xl font-semibold">
          Ready to elevate your business with MERN, AI & Digital Marketing?
        </h3>
      </motion.div>
    </section>
  );
} 

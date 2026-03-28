import { motion } from "framer-motion";
import { FaDatabase, FaNodeJs, FaReact, FaServer, FaCertificate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MernSkills() {
  const navigate = useNavigate();

  const skills = [
    { name: "MongoDB", icon: <FaDatabase />, level: 90, desc: "NoSQL database expertise for scalable apps" },
    { name: "Express.js", icon: <FaServer />, level: 85, desc: "Fast and robust backend APIs" },
    { name: "React.js", icon: <FaReact />, level: 95, desc: "Dynamic and responsive UI development" },
    { name: "Node.js", icon: <FaNodeJs />, level: 88, desc: "Event-driven, non-blocking server logic" },
  ];

  return (
    <section className="relative bg-[#0A0A0A] px-6 sm:px-16 py-32 overflow-hidden">
      {/* GREEN GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 blur-[180px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-[#39FF14] mb-4">
          MERN STACK EXPERTISE
        </p>

        <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Full <span className="text-[#39FF14]">MERN Stack Mastery</span>
        </h2>

        <p className="text-[#B0B0B0] mt-6 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
          Demonstrating high-level proficiency across MongoDB, Express.js, React, and Node.js with interactive visuals and modern UI components. Our team ensures scalable, secure, and high-performing applications.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 relative z-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col gap-4 p-6 bg-[#111] rounded-2xl shadow-[0_0_60px_rgba(57,255,20,0.2)] hover:shadow-[0_0_80px_rgba(57,255,20,0.4)] transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="text-[#39FF14] text-3xl">{skill.icon}</div>

              <div className="flex flex-col">
                <span className="text-white text-xl font-semibold">{skill.name}</span>
                <span className="text-[#B0B0B0] text-sm">{skill.desc}</span>
              </div>

              <div className="ml-auto flex items-center gap-1 text-[#39FF14]">
                <FaCertificate />
                <span className="text-sm font-medium">Pro</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-5 bg-[#1E1E1E] rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-5 bg-[#39FF14] rounded-full shadow-[0_0_25px_rgba(57,255,20,0.5)]"
              />
            </div>

            {/* BUTTON */}
            <div className="mt-4 flex gap-4">
              <motion.button
                onClick={() => navigate("/mern-service")}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #39FF14" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#39FF14] text-black font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-5xl mx-auto text-center mt-32"
      >
        <h3 className="text-white text-2xl sm:text-3xl font-semibold">
          Ready to launch your MERN project with UK-standard quality?
        </h3>

        <motion.button
          onClick={() => navigate("/mern-service")}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #39FF14" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-[#39FF14] text-black font-bold rounded-2xl text-lg transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
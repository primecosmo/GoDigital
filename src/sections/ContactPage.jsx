import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCommentDots } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email", desc: "hello@godigital.com" },
    { icon: <FaPhone />, title: "Phone", desc: "+44 123 4567 890" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "London, UK" },
  ];

  return (
    <section id="contact" className="relative bg-[#0A0A0A] px-6 sm:px-16 py-32 overflow-hidden">
      {/* GREEN GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#39FF14]/10 blur-[220px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-[#39FF14] mb-4">GET IN TOUCH</p>
        <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Contact <span className="text-[#39FF14]">Our Experts</span>
        </h2>
        <p className="text-[#B0B0B0] mt-6 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
          Have a project, question, or just want to say hello? Our team is ready to respond quickly. Let’s bring your ideas to life.
        </p>
      </motion.div>

      {/* GRID: INFO + FORM */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        {/* LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <p className="text-[#B0B0B0] text-lg sm:text-xl leading-relaxed">
            We love collaborating with innovators. Whether small inquiry or large project, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex items-center gap-4 bg-[#111] p-4 rounded-2xl border border-[#1E1E1E] shadow-[0_0_50px_rgba(57,255,20,0.1)] hover:shadow-[0_0_60px_rgba(57,255,20,0.3)]"
              >
                <div className="text-[#39FF14] text-2xl">{info.icon}</div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold">{info.title}</span>
                  <span className="text-[#B0B0B0]">{info.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[#777] mt-6">
            Support available Mon-Fri 9:00 AM – 6:00 PM GMT. Response within 24 hours.
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#111] p-10 rounded-3xl shadow-[0_0_100px_rgba(57,255,20,0.3)] flex flex-col gap-6 overflow-hidden"
        >
          {/* Particle glow behind form */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-3 h-3 bg-[#39FF14]/30 rounded-full animate-bounce-slow top-10 left-20"></div>
            <div className="absolute w-2 h-2 bg-[#39FF14]/20 rounded-full animate-bounce-slow top-60 left-80"></div>
            <div className="absolute w-4 h-4 bg-[#39FF14]/40 rounded-full animate-bounce-slow top-96 left-40"></div>
          </div>

          {/* INPUT FIELDS WITH ICONS */}
          <div className="flex flex-col gap-4">
            <InputField icon={<FaUser />} placeholder="Your Name" type="text" />
            <InputField icon={<FaEnvelope />} placeholder="Your Email" type="email" />
            <InputField icon={<FaCommentDots />} placeholder="Your Message" type="textarea" />
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #39FF14" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 px-10 py-4 bg-[#39FF14] text-black font-bold rounded-2xl text-lg transition-all duration-300 relative overflow-hidden"
          >
            Send Message
          </motion.button>

          <p className="text-[#777] text-sm mt-2">We respect your privacy. Your data will never be shared.</p>
        </motion.form>
      </div>
    </section>
  );
}

// COMPONENT: InputField
function InputField({ icon, placeholder, type }) {
  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <motion.textarea
          rows={6}
          placeholder=" "
          whileFocus={{ boxShadow: "0 0 15px #39FF14", scale: 1.02 }}
          className="peer w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0A0A0A] border border-[#1E1E1E] text-white focus:outline-none transition-all duration-300 resize-none"
        />
      ) : (
        <motion.input
          type={type}
          placeholder=" "
          whileFocus={{ boxShadow: "0 0 15px #39FF14", scale: 1.02 }}
          className="peer w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0A0A0A] border border-[#1E1E1E] text-white focus:outline-none transition-all duration-300"
        />
      )}
      {/* ICON */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#39FF14] text-xl">{icon}</div>
      {/* FLOATING LABEL */}
      <label className="absolute left-12 top-1/2 -translate-y-1/2 text-[#777] text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[#B0B0B0] peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-[#39FF14] peer-focus:text-sm transition-all">
        {placeholder}
      </label>
    </div>
  );
}
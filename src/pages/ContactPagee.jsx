import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCommentDots } from "react-icons/fa";

export default function ContactPagee() {
              useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const contactMethods = [
    { icon: <FaEnvelope />, title: "Email", desc: "hello@godigital.com" },
    { icon: <FaPhone />, title: "Phone", desc: "+44 123 4567 890" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "London, UK" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#111] px-6 sm:px-16 py-24 flex flex-col gap-20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-[#39FF14] uppercase text-xs tracking-widest mb-2">Contact Us</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Let's Build Something <span className="text-[#39FF14]">Amazing</span>
        </h1>
        <p className="text-[#B0B0B0] text-sm sm:text-base">
          Have questions or ideas? Our team is ready to collaborate and bring your vision to life.
        </p>
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-white text-2xl font-semibold mb-4">Reach Out To Us</h2>
          <p className="text-[#B0B0B0] text-base">
            Whether it’s a small question or a large project, we are here to help. Get in touch via any of the methods below or use the contact form.
          </p>

          <div className="flex flex-col gap-4">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex items-center gap-4 bg-[#111] p-5 rounded-2xl border border-[#1E1E1E] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all"
              >
                <div className="text-[#39FF14] text-2xl">{method.icon}</div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">{method.title}</span>
                  <span className="text-[#B0B0B0] text-sm">{method.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[#777] mt-6 text-sm">
            Support available Mon-Fri 9:00 AM – 6:00 PM GMT. Response within 24 hours.
          </p>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#111] p-10 rounded-3xl shadow-[0_0_80px_rgba(57,255,20,0.2)] flex flex-col gap-6 overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-3 h-3 bg-[#39FF14]/20 rounded-full animate-bounce-slow top-10 left-16"></div>
            <div className="absolute w-4 h-4 bg-[#39FF14]/30 rounded-full animate-bounce-slow top-60 right-20"></div>
            <div className="absolute w-2 h-2 bg-[#39FF14]/40 rounded-full animate-bounce-slow bottom-10 left-32"></div>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-4 relative z-10">
            <InputField icon={<FaUser />} placeholder="Your Name" type="text" />
            <InputField icon={<FaEnvelope />} placeholder="Your Email" type="email" />
            <InputField icon={<FaCommentDots />} placeholder="Your Message" type="textarea" />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #39FF14" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-[#39FF14] text-black font-bold rounded-2xl py-4 text-lg transition-all"
          >
            Send Message
          </motion.button>

          <p className="text-[#777] text-sm mt-2 z-10">We respect your privacy. Your data will never be shared.</p>
        </motion.form>
      </div>
    </section>
  );
}

// InputField Component
function InputField({ icon, placeholder, type }) {
  return (
    <div className="relative w-full">
      {type === "textarea" ? (
        <motion.textarea
          rows={5}
          placeholder=" "
          whileFocus={{ boxShadow: "0 0 15px #39FF14", scale: 1.02 }}
          className="peer w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0A0A0A] border border-[#1E1E1E] text-white focus:outline-none transition-all resize-none"
        />
      ) : (
        <motion.input
          type={type}
          placeholder=" "
          whileFocus={{ boxShadow: "0 0 15px #39FF14", scale: 1.02 }}
          className="peer w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0A0A0A] border border-[#1E1E1E] text-white focus:outline-none transition-all"
        />
      )}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#39FF14] text-xl">{icon}</div>
      <label className="absolute left-12 top-1/2 -translate-y-1/2 text-[#777] text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[#B0B0B0] peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-[#39FF14] peer-focus:text-sm transition-all">
        {placeholder}
      </label>
    </div>
  );
}
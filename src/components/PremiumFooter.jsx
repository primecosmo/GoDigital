import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PremiumFooter() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "MERN STACK DEVELOPMENT", path: "/mern-service" },
    { name: "DIGITAL MARKETING & SEO", path: "/digital-marketing" },
    { name: "SOCIALMEDIA MANAGEMENT", path: "/social-media" },
    { name: "AI & IT SOLUTIONS", path: "/ai-solutions" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaEnvelope, link: "mailto:hello@godigital.com" },
  ];

  return (
    <footer className="relative bg-[#0F0F0F] text-white pt-24 pb-12 overflow-hidden">

      {/* GLOW */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#22C55E]/10 blur-[180px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#22C55E]/5 blur-[180px] rounded-full" />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center 
        bg-[#171717]/80 backdrop-blur-xl rounded-xl py-6 mb-16 border border-[#2F2F2F]"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold 
          bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            Ready to elevate your business?
          </h3>
          <p className="text-[#D1D5DB] mt-1 text-sm">
            Let’s simplify complexity, strengthen execution, and scale with clarity.
          </p>
        </div>

        <Link to="/contact">
          <button className="mt-3 md:mt-0 px-8 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold rounded-xl 
          shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-105 transition">
            Contact Us
          </button>
        </Link>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold 
          bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
            GO DIGITAL
          </h2>
          <p className="text-[#D1D5DB] text-sm leading-relaxed">
            Helping businesses grow with modern digital strategies, smart execution, and powerful online presence.
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-[#D1D5DB] hover:text-[#22C55E] transition relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#22C55E] group-hover:w-full transition-all rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white text-lg">Connect</h3>
          <div className="flex items-center gap-5 text-[#D1D5DB]">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3, scale: 1.2 }}
                className="hover:text-[#22C55E] transition"
              >
                <item.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-16 border-t border-[#2F2F2F] pt-6 text-center text-[#777] text-sm relative z-10">
        &copy; {new Date().getFullYear()} GO DIGITAL. All rights reserved.
      </div>
    </footer>
  );
}

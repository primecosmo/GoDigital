import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showServices, setShowServices] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const origin = isMobile ? "90% 6%" : "50% 6%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-start pt-28
                     bg-[#0A0A0A] overflow-y-auto"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#39FF14] hover:text-[#32CD32]
                       text-3xl transition z-[1100]"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* MENU LINKS */}
          <ul className="space-y-8 text-center w-full z-[1050]">

            {/* HOME */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/"
                onClick={onClose}
                className="text-2xl font-semibold text-white hover:text-[#39FF14] transition"
              >
                Home
              </Link>
            </motion.li>

            {/* ABOUT */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/about"
                onClick={onClose}
                className="text-2xl font-semibold text-white hover:text-[#39FF14] transition"
              >
                About Go Digital
              </Link>
            </motion.li>

            {/* SERVICES */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setShowServices((prev) => !prev)}
                className="text-2xl font-semibold text-white hover:text-[#39FF14] transition"
              >
                Services
              </button>

              <AnimatePresence>
                {showServices && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 space-y-4 bg-[#0F0F0F]/95 backdrop-blur-xl
                               border border-[#39FF14]/30
                               rounded-2xl px-6 py-4
                               shadow-[0_0_30px_rgba(57,255,20,0.2)]"
                  >
                    {[
                      { label: "MERN SERVICES", path: "/mern-service" },
                      { label: "DIGITAL MARKETING", path: "/digital-marketing" },
                      { label: "SOCIAL MEDIA MANAGEMENT", path: "/social-media" },
                      { label: "AI & IT SOLUTIONS", path: "/ai-solutions" },
                    ].map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.path}
                          onClick={onClose}
                          className="block text-center text-[#B0B0B0] hover:text-[#39FF14] transition font-medium"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            {/* CONTACT */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="text-2xl font-semibold text-white hover:text-[#39FF14] transition"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/gglogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const lastScrollY = useRef(0);

  const services = [
    { name: "MERN STACK DEVELOPMENT", path: "/mern-service" },
    { name: "DIGITAL MARKETING & SEO", path: "/digital-marketing" },
    { name: "SOCIAL MEDIA MANAGEMENT", path: "/social-media" },
    { name: "AI & IT SOLUTIONS", path: "/ai-solutions" },
  ];

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#2F2F2F]`}
      >
        <div className="relative max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <Link
            to="/"
            className="absolute left-[10px] top-1/2 -translate-y-1/2 lg:static lg:translate-y-0 flex items-center"
          >
            <img
              src={logo}
              alt="Go Digital Logo"
              className="h-16 w-auto object-contain hover:scale-105 transition"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className="hidden lg:flex items-center gap-10 text-[#D1D5DB] text-sm
            absolute left-1/2 -translate-x-1/2"
          >
            {["Home", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="relative group flex items-center gap-1 hover:text-white transition">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64
                bg-[#171717] backdrop-blur-xl
                border border-[#2F2F2F]
                rounded-2xl overflow-hidden">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      to={service.path}
                      className="block px-6 py-4 text-[#D1D5DB]
                      hover:bg-[#22C55E]/10 hover:text-[#22C55E] transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 ml-auto">
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-6 py-2 rounded-xl
              bg-[#22C55E] hover:bg-[#16A34A]
              text-black font-semibold transition"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#22C55E] text-3xl lg:hidden hover:scale-110 transition"
              aria-label="Open Menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

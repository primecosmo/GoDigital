import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Main from "./pages/Main.jsx";
import PremiumFooter from "./components/PremiumFooter.jsx";
import MernService from "./pages/MernService.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import SocialMedia from "./pages/SocialMedia.jsx";
import AiSolutions from "./pages/AiSolutions.jsx.jsx";
import ContactPagee from "./pages/ContactPagee.jsx";
import AboutPage from "./pages/AboutPage.jsx";


export default function App() {
  return (
    <Router>
      <div className="relative text-white min-h-screen">
        <CustomCursor />
        <WhatsAppButton
          phone="447459745929"
          message="Hello! I saw your website and would like to connect with You."
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mern-service" element={<MernService />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/contact" element={<ContactPagee />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <PremiumFooter/>
      </div>
    </Router>
  );
}

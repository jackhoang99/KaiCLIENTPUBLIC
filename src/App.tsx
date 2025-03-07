import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Buy from "./pages/Buy";
import FAQ from "./pages/FAQ";
import Schedule from "./pages/Schedule";
import Account from "./pages/Account";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { colors } from "./constants/colors";

const App: React.FC = () => {
  const location = useLocation();
  const isAccountPage = location.pathname === "/account.html";

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.sand }}>
      <Navbar />
      {!isAccountPage && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      )}
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import RequireAuth from "./components/auth/RequireAuth";
import RequireProfile from "./components/auth/RequireProfile";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Schedule from "./pages/Schedule";
import Confirmation from "./pages/Confirmation";
import CheckEmail from "./pages/CheckEmail";
import EmailConfirmation from "./pages/EmailConfirmation";
import ProfileSetup from "./pages/ProfileSetup";
import Booking from "./pages/Booking";
import { colors } from "./constants/colors";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen" style={{ backgroundColor: colors.sand }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile-setup"
              element={
                <RequireAuth>
                  <ProfileSetup />
                </RequireAuth>
              }
            />
            <Route
              path="/account"
              element={
                <RequireAuth>
                  <RequireProfile>
                    <Account />
                  </RequireProfile>
                </RequireAuth>
              }
            />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;

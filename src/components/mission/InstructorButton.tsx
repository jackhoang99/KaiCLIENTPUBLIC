import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
    <motion.path
      d="M8 8L16 16M16 16H8M16 16V8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={false}
    />
  </svg>
);

const ButtonContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-4 max-w-4xl">{children}</div>
);

const InstructorButton = () => {
  const navigate = useNavigate();

  const handleInstructorClick = () => {
    navigate("/contact", { state: { fromInstructor: true } });
  };

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <ButtonContainer>
      <motion.button
        onClick={handleInstructorClick}
        className="group flex items-center justify-between w-full border border-[#33291C] rounded-full px-8 py-6 hover:bg-[#33291C] hover:text-white transition-all duration-300 active:scale-[0.98]"
        whileHover="hover"
        initial="initial"
        whileTap="hover" // Add this to ensure animation works on touch
      >
        <span className="text-xl tracking-wide">Become an Instructor</span>
        <motion.div
          variants={{
            initial: { rotate: 45 },
            hover: { rotate: -45 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon />
        </motion.div>
      </motion.button>

      <motion.button
        onClick={handleBookingClick}
        className="group flex items-center justify-between w-full border border-[#33291C] rounded-full px-8 py-6 hover:bg-[#33291C] hover:text-white transition-all duration-300 active:scale-[0.98]"
        whileHover="hover"
        initial="initial"
        whileTap="hover" // Add this to ensure animation works on touch
      >
        <span className="text-xl tracking-wide">Book a Class</span>
        <motion.div
          variants={{
            initial: { rotate: 45 },
            hover: { rotate: -45 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon />
        </motion.div>
      </motion.button>
    </ButtonContainer>
  );
};

export default InstructorButton;
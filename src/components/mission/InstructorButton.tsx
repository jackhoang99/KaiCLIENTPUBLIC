import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "./ButtonContainer";

const InstructorButton = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path); // Update the URL without a full refresh
    }

    setTimeout(() => {
      window.location.reload(); // Ensure Mariana Tek reloads correctly
    }, 300);
  };

  return (
    <ButtonContainer>
      <motion.button
        onClick={() => handleNavigation("/schedule.html")}
        className="group flex items-center justify-between w-full border border-[#33291C] rounded-full px-8 py-6 hover:bg-[#33291C] hover:text-white transition-all duration-300 active:scale-[0.98] mb-0"
        whileHover="hover"
        initial="initial"
        whileTap="hover"
      >
        <span className="text-xl tracking-wide">Book a Class</span>
        <motion.div
          variants={{
            initial: { rotate: 45 },
            hover: { rotate: -45 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={24} />
        </motion.div>
      </motion.button>
    </ButtonContainer>
  );
};

export default InstructorButton;

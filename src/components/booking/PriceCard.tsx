import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useBooking } from "../../hooks/useBooking";
import { useAuth } from "../../hooks/useAuth";
import AuthRequiredMessage from "./AuthRequiredMessage";
import type { Package } from "../../types/booking";

const PriceCard = ({
  title,
  price,
  description,
  features,
  perks,
  ...pkg
}: Package) => {
  const [showAuthMessage, setShowAuthMessage] = useState(false);
  const { user } = useAuth();
  const { selectedMembership, selectedClasses, addPackage, removePackage } =
    useBooking();

  const isSelected =
    pkg.type === "membership"
      ? selectedMembership?.id === pkg.id
      : selectedClasses.some((p) => p.id === pkg.id);

  const handleSelection = () => {
    if (!user) {
      setShowAuthMessage(true);
      return;
    }

    if (isSelected) {
      removePackage(pkg.id);
    } else {
      addPackage({ title, price, description, features, perks, ...pkg });
    }
  };

  return (
    <>
      <motion.div
        className={`relative bg-white/50 backdrop-blur-sm border rounded-xl h-full transition-all duration-500 group flex flex-col overflow-hidden ${
          isSelected
            ? "border-black shadow-xl"
            : "border-black/10 hover:shadow-xl"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Selection indicator */}
        <motion.div
          className="absolute inset-0 bg-black/[0.02]"
          initial={false}
          animate={{
            scaleY: isSelected ? 1 : 0,
            opacity: isSelected ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Header Section - Fixed Height */}
          <div className="h-[120px] flex flex-col">
            <motion.h3
              className="text-3xl font-display leading-tight min-h-[72px] flex items-center"
              animate={{ scale: isSelected ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <p className="text-black/60 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Price Section - Fixed Height */}
          <motion.div
            className="h-20 flex items-center"
            animate={{ scale: isSelected ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-baseline">
              <span className="text-4xl font-light">${price}</span>
              {pkg.type === "membership" && (
                <span className="text-black/60 ml-2">/month</span>
              )}
            </div>
          </motion.div>

          {/* Features Section - Flexible Height */}
          <div className="flex-grow space-y-6 mb-8">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-3">
                Features
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="text-sm text-black/70 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-2 flex items-center">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {perks && perks.length > 0 && (
              <div className="min-h-[80px]">
                <h4 className="text-sm font-medium uppercase tracking-wider mb-3">
                  Perks
                </h4>
                <ul className="space-y-3">
                  {perks.map((perk, index) => (
                    <motion.li
                      key={index}
                      className="text-sm text-black/70 flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (features.length + index) * 0.1,
                      }}
                    >
                      <span className="mr-2 flex items-center">-</span>
                      <span>{perk}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Button Section - Fixed Height */}
          <motion.button
            onClick={handleSelection}
            className={`w-full py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSelected
                ? "bg-black/5 text-black hover:bg-black/10"
                : "bg-black text-white hover:bg-black/90"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              initial={false}
              animate={{
                x: isSelected ? -10 : 0,
                opacity: isSelected ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {pkg.type === "membership" ? "SELECT MEMBERSHIP" : "ADD TO CART"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{
                opacity: isSelected ? 1 : 0,
                scale: isSelected ? 1 : 0,
                x: isSelected ? 0 : -20,
              }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Check className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {showAuthMessage && (
        <AuthRequiredMessage onClose={() => setShowAuthMessage(false)} />
      )}
    </>
  );
};

export default PriceCard;

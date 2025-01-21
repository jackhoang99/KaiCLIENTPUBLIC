import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, X } from 'lucide-react';

interface AuthRequiredMessageProps {
  onClose: () => void;
}

const AuthRequiredMessage = ({ onClose }: AuthRequiredMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <LogIn className="w-12 h-12 mx-auto mb-4 text-gray-600" />
        <h3 className="text-2xl font-medium mb-2">Sign In Required</h3>
        <p className="text-gray-600 mb-6">
          Please sign in or create an account to book classes and memberships.
        </p>
        <div className="space-y-3">
          <Link
            to="/login"
            className="block w-full bg-black text-white py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block w-full border border-black py-3 rounded-lg hover:bg-black/5 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthRequiredMessage;
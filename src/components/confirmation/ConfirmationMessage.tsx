import React from 'react';
import { CheckCircle } from 'lucide-react';

const ConfirmationMessage = () => {
  return (
    <div className="text-center mb-8">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-display mb-2">Account Created Successfully!</h2>
      <p className="text-gray-600 mb-4">
        Welcome to KAI! Your account has been created and you're ready to begin your fitness journey.
      </p>
      <p className="text-sm text-gray-500">
        Please sign in to access your account and start booking classes.
      </p>
    </div>
  );
};

export default ConfirmationMessage;
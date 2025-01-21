import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useStripe } from '../../hooks/useStripe';

interface PaymentButtonProps {
  totalAmount: number;
}

const PaymentButton = ({ totalAmount }: PaymentButtonProps) => {
  const { processPayment, loading, error } = useStripe();

  const handlePayment = () => {
    window.location.href = 'https://buy.stripe.com/test_eVa02Aghdchu40weUU';
  };

  return (
    <div>
      <motion.button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
          loading 
            ? 'bg-black/50 cursor-not-allowed' 
            : 'bg-black hover:bg-black/90'
        } text-white`}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <span>PROCEED TO PAYMENT</span>
        )}
      </motion.button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg">
          <p className="text-sm text-red-600 text-center">{error}</p>
          <p className="text-xs text-red-500 text-center mt-1">
            For assistance, please contact support@kailagreestudio.com
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentButton;
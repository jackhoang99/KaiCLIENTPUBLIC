import React from 'react';
import PaymentButton from '../PaymentButton';

interface CartSummaryProps {
  totalAmount: number;
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <div>
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg">Total</span>
          <span className="text-2xl font-light">${totalAmount}</span>
        </div>
      </div>
      <PaymentButton totalAmount={totalAmount} />
    </div>
  );
};

export default CartSummary;
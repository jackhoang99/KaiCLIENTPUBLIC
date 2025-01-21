import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartButtonProps {
  totalItems: number;
  onClick: () => void;
}

const CartButton = ({ totalItems, onClick }: CartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-black/90 transition-colors z-50"
    >
      <div className="relative">
        <ShoppingBag size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
    </button>
  );
};

export default CartButton;
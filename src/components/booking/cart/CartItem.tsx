import React from 'react';
import { X } from 'lucide-react';
import type { SelectedPackage } from '../../../types/booking';

interface CartItemProps {
  item: SelectedPackage;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const total = item.price * (item.quantity || 1);

  return (
    <div className="bg-sand/30 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-medium mb-1">{item.title}</h3>
          <p className="text-black/60">{item.description}</p>
        </div>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-black/40 hover:text-black"
        >
          <X size={20} />
        </button>
      </div>
      <div className="text-2xl font-light">${total}</div>
    </div>
  );
};

export default CartItem;
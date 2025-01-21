import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import type { SelectedPackage } from '../../../types/booking';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: SelectedPackage[];
  totalAmount: number;
  onRemoveItem: (id: string) => void;
}

const CartDrawer = ({ isOpen, onClose, items, totalAmount, onRemoveItem }: CartDrawerProps) => {
  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display">Your Selection</h2>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {items.length > 0 ? (
            <>
              <CartList items={items} onRemove={onRemoveItem} />
              <CartSummary totalAmount={totalAmount} />
            </>
          ) : (
            <EmptyCart />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CartDrawer;
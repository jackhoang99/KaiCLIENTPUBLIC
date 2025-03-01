import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useBooking } from '../../hooks/useBooking';
import CartButton from './cart/CartButton';
import CartDrawer from './cart/CartDrawer';

const BookingCart = () => {
  const { selectedMembership, selectedClasses, removePackage } = useBooking();
  const [isOpen, setIsOpen] = React.useState(false);

  const allItems = [...(selectedMembership ? [selectedMembership] : []), ...selectedClasses];
  const totalItems = allItems.length;
  const totalAmount = allItems.reduce((sum, item) => 
    sum + (item.price * (item.quantity || 1)), 0);

  return (
    <>
      <CartButton 
        totalItems={totalItems} 
        onClick={() => setIsOpen(true)} 
      />
      
      <AnimatePresence>
        {isOpen && (
          <CartDrawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            items={allItems}
            totalAmount={totalAmount}
            onRemoveItem={removePackage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingCart;
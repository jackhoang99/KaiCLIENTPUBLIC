import React from 'react';
import CartItem from './CartItem';
import type { SelectedPackage } from '../../../types/booking';

interface CartListProps {
  items: SelectedPackage[];
  onRemove: (id: string) => void;
}

const CartList = ({ items, onRemove }: CartListProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {items.map((item) => (
        <CartItem 
          key={item.id} 
          item={item} 
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;
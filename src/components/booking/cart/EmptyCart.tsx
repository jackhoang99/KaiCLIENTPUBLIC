import React from 'react';
import { ShoppingBag } from 'lucide-react';

const EmptyCart = () => {
  return (
    <div className="flex-1 flex items-center justify-center text-center">
      <div>
        <ShoppingBag size={48} className="mx-auto mb-4 text-black/20" />
        <p className="text-black/60">No packages selected</p>
      </div>
    </div>
  );
};

export default EmptyCart;
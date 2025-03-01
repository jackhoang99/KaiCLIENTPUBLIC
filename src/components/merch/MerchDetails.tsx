import React from 'react';
import type { MerchItem } from '../../types/merch';
import { formatPrice } from '../../utils/format';

const MerchDetails = ({ name, price, description, stock_status }: MerchItem) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-light">{name}</h3>
        <span className="font-light">{formatPrice(price)}</span>
      </div>
      <p className="text-black/60">{description}</p>
      <p className="text-sm italic text-black/60">
        {stock_status}
      </p>
    </div>
  );
};

export default MerchDetails;
import React from 'react';

interface MerchImageProps {
  image_url: string;
  name: string;
}

const MerchImage = ({ image_url, name }: MerchImageProps) => {
  return (
    <div className="aspect-square overflow-hidden mb-4">
      <img
        src={image_url}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MerchImage;
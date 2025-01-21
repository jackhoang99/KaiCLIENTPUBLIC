import React from 'react';

interface OrderItemProps {
  id: string;
  date: string;
  status: string;
  images: string[];
}

const OrderItem = ({ id, date, status, images }: OrderItemProps) => {
  return (
    <div className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium mb-1">ORDER #{id}</h3>
          <p className="text-sm text-gray-600">Ordered on {date}</p>
        </div>
        <button className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors">
          VIEW ORDER
        </button>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">STATUS</h4>
        <div className="flex items-center space-x-2">
          <div className="w-full bg-blue-100 h-2 rounded-full">
            <div className="bg-blue-500 h-full rounded-full w-full" />
          </div>
          <span className="text-sm text-gray-600">It's {status}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={`${image}?auto=format&fit=crop&w=100&h=100&q=80`}
            alt={`Order item ${index + 1}`}
            className="w-16 h-16 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
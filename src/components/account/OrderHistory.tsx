import React from 'react';
import OrderItem from './OrderItem';

const orders = [
  {
    id: 'US20859762',
    date: '5 December 2024',
    status: 'fulfilled',
    images: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
      'https://images.unsplash.com/photo-1618354691792-d1d42acfd860',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8'
    ]
  },
  {
    id: 'US20339467',
    date: '24 November 2024',
    status: 'fulfilled',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633'
    ]
  }
];

const OrderHistory = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-medium mb-6">YOUR ORDERS</h2>
      <div className="space-y-8">
        {orders.map((order) => (
          <OrderItem key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
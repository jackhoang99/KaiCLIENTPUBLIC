import React from 'react';
import { User } from '@supabase/supabase-js';

interface AccountHeaderProps {
  user: User;
}

const AccountHeader = ({ user }: AccountHeaderProps) => {
  const initials = user.email?.substring(0, 2).toUpperCase() || 'U';
  
  return (
    <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-medium">
        {initials}
      </div>
      <div>
        <h3 className="text-xl font-medium">Contact Information</h3>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default AccountHeader;
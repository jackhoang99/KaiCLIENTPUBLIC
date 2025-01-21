import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import AccountHeader from './AccountHeader';
import AccountActions from './AccountActions';

const AccountInfo = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <AccountHeader user={user} />
      <AccountActions />
    </div>
  );
};

export default AccountInfo;
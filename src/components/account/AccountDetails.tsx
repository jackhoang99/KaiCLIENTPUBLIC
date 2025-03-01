import React from 'react';
import { User } from '@supabase/supabase-js';
import AccountField from './AccountField';

interface AccountDetailsProps {
  user: User | null;
}

const AccountDetails = ({ user }: AccountDetailsProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl">
      <div className="space-y-6">
        <AccountField 
          label="Email" 
          value={user?.email || ''} 
        />
        <AccountField 
          label="Member Since" 
          value={new Date(user?.created_at || '').toLocaleDateString()} 
        />
      </div>
    </div>
  );
};

export default AccountDetails;
import React from 'react';
import { Users, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ContactInfo from '../profile/ContactInfo';

const AccountActions = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <ContactInfo userId={user.id} />

      <button className="flex items-center space-x-4 text-gray-700 hover:text-black transition-colors w-full group">
        <Users className="group-hover:scale-110 transition-transform" size={24} />
        <div className="text-left">
          <h4 className="font-medium">Refer a Friend</h4>
          <p className="text-sm text-gray-600">Share KAI with your friends and earn rewards</p>
        </div>
      </button>

      <button 
        onClick={handleSignOut}
        className="flex items-center space-x-4 text-gray-700 hover:text-black transition-colors w-full group"
      >
        <LogOut className="group-hover:scale-110 transition-transform" size={24} />
        <div className="text-left">
          <h4 className="font-medium">Log Out</h4>
          <p className="text-sm text-gray-600">Sign out of your account</p>
        </div>
      </button>
    </div>
  );
};

export default AccountActions;
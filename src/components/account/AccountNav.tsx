import React from 'react';
import { CircleUser, ArrowLeftRight, Users, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AccountNav = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const initials = user.email?.substring(0, 2).toUpperCase() || 'U';

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-medium">
          {initials}
        </div>
        <div>
          <h3 className="font-medium uppercase">{user.email?.split('@')[0]}</h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </div>
      
      <nav className="space-y-4">
        <NavItem icon={<CircleUser />} label="ADDRESS BOOK" />
        <NavItem icon={<ArrowLeftRight />} label="RETURNS" />
        <NavItem icon={<Users />} label="REFER A FRIEND" />
        <button 
          onClick={handleSignOut}
          className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors w-full"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">LOG OUT</span>
        </button>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Link 
    to="#" 
    className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors"
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default AccountNav;
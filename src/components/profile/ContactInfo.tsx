import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useProfile } from '../../hooks/useProfile';
import ContactInfoModal from './ContactInfoModal';
import LoadingSpinner from '../ui/LoadingSpinner';

interface ContactInfoProps {
  userId: string;
}

const ContactInfo = ({ userId }: ContactInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { profile, loading, error, refreshProfile } = useProfile(userId);

  if (loading) {
    return (
      <div className="flex items-center space-x-4 text-gray-700 w-full py-2">
        <User size={24} />
        <div className="flex-1">
          <LoadingSpinner size="small" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-4 text-red-600 w-full py-2">
        <User size={24} />
        <div className="text-left">
          <p className="text-sm">Failed to load contact information</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center space-x-4 text-gray-700 hover:text-black transition-colors w-full group"
      >
        <User className="group-hover:scale-110 transition-transform" size={24} />
        <div className="text-left">
          <h4 className="font-medium">Contact Information</h4>
          <p className="text-sm text-gray-600">
            {profile ? `${profile.first_name} ${profile.last_name}` : 'View and edit your personal details'}
          </p>
        </div>
      </button>

      <ContactInfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        profile={profile}
        onProfileUpdate={refreshProfile}
      />
    </>
  );
};

export default ContactInfo;
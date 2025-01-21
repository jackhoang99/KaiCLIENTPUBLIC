import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';
import ContactInfoPopup from './ContactInfoPopup';

interface RequireContactInfoProps {
  children: React.ReactNode;
}

const RequireContactInfo = ({ children }: RequireContactInfoProps) => {
  const { user } = useAuth();
  const { profile, loading } = useProfile(user?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.first_name || !profile?.last_name || !profile?.phone) {
    return <ContactInfoPopup userId={user!.id} />;
  }

  if (!profile.phone_verified) {
    return <Navigate to="/profile-setup" replace />;
  }

  return <>{children}</>;
};

export default RequireContactInfo;
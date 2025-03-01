import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';

interface RequireProfileProps {
  children: React.ReactNode;
}

const RequireProfile = ({ children }: RequireProfileProps) => {
  const { user } = useAuth();
  const location = useLocation();
  const { profile, loading } = useProfile(user?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.complete_onboarding && location.pathname !== '/profile-setup') {
    return <Navigate to="/profile-setup" replace />;
  }

  return <>{children}</>;
};

export default RequireProfile;
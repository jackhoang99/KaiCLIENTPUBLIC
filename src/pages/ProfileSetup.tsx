import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import ProfileSetupForm from '../components/profile/ProfileSetupForm';

const ProfileSetup = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-display mb-8 text-center">Complete Your Profile</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ProfileSetupForm />
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default ProfileSetup;
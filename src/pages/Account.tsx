import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import AccountInfo from '../components/account/AccountInfo';

const Account = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-display mb-12 text-center">YOUR KAI ACCOUNT</h1>
          <div className="max-w-2xl mx-auto">
            <AccountInfo />
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Account;
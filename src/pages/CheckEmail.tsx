import React from 'react';
import { Mail } from 'lucide-react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';

const CheckEmail = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.email_confirmed_at) {
    return <Navigate to="/account" replace />;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Mail className="w-16 h-16 mx-auto mb-6 text-blue-500" />
              <h1 className="text-2xl font-medium mb-4">Check Your Email</h1>
              <p className="text-gray-600 mb-6">
                We've sent a verification link to <strong>{user.email}</strong>. 
                Please check your email and click the link to verify your account.
              </p>
              <div className="text-sm text-gray-500 mb-8">
                <p>Didn't receive the email?</p>
                <p>Check your spam folder or contact support.</p>
              </div>
              
              <div className="space-y-4">
                <Link to="/login">
                  <Button className="w-full bg-black text-white py-3 hover:bg-black/80">
                    Back to Sign In
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="w-full border border-black py-3 hover:bg-black/5">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default CheckEmail;
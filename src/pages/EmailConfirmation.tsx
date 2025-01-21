import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

const EmailConfirmation = () => {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const navigate = useNavigate();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        if (session?.user?.email_confirmed_at) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.error('Error confirming email:', error);
        setVerificationStatus('error');
      }
    };

    handleEmailConfirmation();
  }, []);

  const renderContent = () => {
    switch (verificationStatus) {
      case 'loading':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4" />
            <p>Verifying your email...</p>
          </div>
        );
      case 'success':
        return (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-medium mb-4">Email Verified!</h1>
            <p className="text-gray-600 mb-8">
              Your email has been successfully verified. You can now access your account.
            </p>
            <Button
              onClick={() => navigate('/account')}
              className="w-full bg-black text-white py-3 hover:bg-black/80"
            >
              Go to Account
            </Button>
          </>
        );
      case 'error':
        return (
          <>
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-2xl font-medium mb-4">Verification Failed</h1>
            <p className="text-gray-600 mb-8">
              We couldn't verify your email. The link may have expired or is invalid.
            </p>
            <Button
              onClick={() => navigate('/signup')}
              className="w-full bg-black text-white py-3 hover:bg-black/80"
            >
              Back to Sign Up
            </Button>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-sand pt-32 pb-20">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {renderContent()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmailConfirmation;
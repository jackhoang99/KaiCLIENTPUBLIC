import React, { useState } from 'react';
import { sendVerificationCode, verifyCode } from '../../services/verification';
import CodeInput from './verification/CodeInput';
import VerificationButtons from './verification/VerificationButtons';
import SendCodeButton from './verification/SendCodeButton';

interface PhoneVerificationProps {
  userId: string;
  phone: string;
  onVerified: () => void;
}

const PhoneVerification = ({ userId, phone, onVerified }: PhoneVerificationProps) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showVerification, setShowVerification] = useState(false);

  const handleSendCode = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await sendVerificationCode(userId);
      setShowVerification(true);
    } catch (err) {
      setError('Failed to send verification code');
      console.error('Verification error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    setLoading(true);
    setError(null);

    try {
      await verifyCode(userId, code);
      onVerified();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  if (!showVerification) {
    return <SendCodeButton onClick={handleSendCode} loading={loading} />;
  }

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 mb-4">
        Enter the 6-digit code sent to {phone}
      </p>
      <div className="space-y-4">
        <CodeInput
          value={code}
          onChange={setCode}
          error={error}
        />
        <VerificationButtons
          onBack={() => setShowVerification(false)}
          onVerify={handleVerifyCode}
          loading={loading}
          disabled={code.length !== 6}
        />
      </div>
    </div>
  );
};

export default PhoneVerification;
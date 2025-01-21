import React, { useState } from 'react';
import { sendVerificationCode, verifyPhoneNumber } from '../../../services/twilio';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

interface VerificationFormProps {
  phoneNumber: string;
  onVerified: () => void;
  onCancel: () => void;
}

const VerificationForm = ({ phoneNumber, onVerified, onCancel }: VerificationFormProps) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await sendVerificationCode(phoneNumber);
      setCodeSent(true);
    } catch (err) {
      setError('Failed to send verification code');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError(null);

    try {
      await verifyPhoneNumber(phoneNumber, code);
      onVerified();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!codeSent ? (
        <>
          <p className="text-sm text-gray-600">
            We'll send a verification code to {phoneNumber}
          </p>
          <div className="flex space-x-4">
            <Button
              onClick={onCancel}
              className="flex-1 border border-black py-3 hover:bg-black/5"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendCode}
              disabled={loading}
              className="flex-1 bg-black text-white py-3 hover:bg-black/80"
            >
              {loading ? 'Sending...' : 'Send Code'}
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Enter the 6-digit code sent to {phoneNumber}
          </p>
          <Input
            label="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            pattern="\d{6}"
            required
          />
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="flex space-x-4">
            <Button
              onClick={() => setCodeSent(false)}
              className="flex-1 border border-black py-3 hover:bg-black/5"
            >
              Back
            </Button>
            <Button
              onClick={handleVerify}
              disabled={loading || code.length !== 6}
              className="flex-1 bg-black text-white py-3 hover:bg-black/80"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default VerificationForm;
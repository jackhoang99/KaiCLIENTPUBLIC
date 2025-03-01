import React, { useState } from 'react';
import { X } from 'lucide-react';
import { sendVerificationCode, verifyPhoneNumber } from '../../../services/telnyx';
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
      console.error('Error sending verification code:', err);
      if (err instanceof Error && err.message.includes('already verified')) {
        setError('This phone number is already registered. Please use a different number.');
      } else {
        setError('Failed to send verification code');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!code || code.length !== 5) {
      setError('Please enter a valid 5-digit code');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await verifyPhoneNumber(phoneNumber, code);
      onVerified();
    } catch (err) {
      console.error('Error verifying code:', err);
      if (err instanceof Error && err.message.includes('already verified')) {
        setError('This phone number is already registered. Please use a different number.');
      } else {
        setError(err instanceof Error ? err.message : 'Verification failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!codeSent ? (
        <>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display">Verify Phone Number</h2>
            <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-600 text-center mb-8">
            We'll send a verification code to {phoneNumber}
          </p>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg text-center mb-8">
              <p className="font-medium mb-1">Unable to verify phone number</p>
              <p className="text-sm">{error}</p>
              {error.includes('already registered') && (
                <button
                  onClick={onCancel}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Go back to change number
                </button>
              )}
            </div>
          )}
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display">Enter Code</h2>
            <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="mb-8">
            <Input
              label="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              maxLength={5}
              pattern="\d{5}"
              required
              className="text-center text-2xl tracking-widest"
              placeholder="Enter 5-digit code"
            />
            <p className="text-sm text-gray-500 mt-2">
              Enter the 5-digit code sent to your phone
            </p>
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg text-center mb-8">
              <p className="font-medium mb-1">Verification failed</p>
              <p className="text-sm">{error}</p>
              {error.includes('already registered') && (
                <button
                  onClick={onCancel}
                  className="mt-2 text-sm underline hover:no-underline"
                >
                  Go back to change number
                </button>
              )}
            </div>
          )}
          <div className="flex space-x-4">
            <button
              onClick={() => setCodeSent(false)}
              className="flex-1 py-3 border border-black rounded-lg hover:bg-black/5 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleVerify}
              disabled={loading || code.length !== 5}
              className={`flex-1 py-3 rounded-lg text-white transition-colors ${
                loading || code.length !== 5
                  ? 'bg-black/50 cursor-not-allowed'
                  : 'bg-black hover:bg-black/80'
              }`}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VerificationForm;
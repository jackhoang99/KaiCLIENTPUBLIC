import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { sendVerificationCode, verifyPhoneNumber } from '../../services/telnyx';
import { UserProfile, ProfileFormData } from '../../types/profile';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface ContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile | null;
  onProfileUpdate?: () => void;
}

const ContactInfoModal = ({ isOpen, onClose, profile, onProfileUpdate }: ContactInfoModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
    phone: profile?.phone || ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    setLoading(true);
    setError(null);

    try {
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({
          ...formData,
          phone_verified: formData.phone !== profile.phone ? false : profile.phone_verified
        })
        .eq('id', profile.id);

      if (updateError) throw updateError;

      if (formData.phone !== profile.phone) {
        await sendVerificationCode(formData.phone);
        setShowVerification(true);
      } else {
        setIsEditing(false);
      }
      onProfileUpdate?.();
    } catch (err) {
      console.error('Update error:', err);
      if (err instanceof Error && err.message.includes('already verified')) {
        setError('This phone number is already registered. Please use a different number.');
      } else {
        setError('Failed to update profile');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!verificationCode || verificationCode.length !== 5) {
      setError('Please enter a valid 5-digit code');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await verifyPhoneNumber(formData.phone, verificationCode);
      setShowVerification(false);
      setIsEditing(false);
      onProfileUpdate?.();
    } catch (err) {
      console.error('Verification error:', err);
      if (err instanceof Error && err.message.includes('already verified')) {
        setError('This phone number is already registered. Please use a different number.');
      } else {
        setError(err instanceof Error ? err.message : 'Verification failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStartVerification = async () => {
    if (!formData.phone) return;
    
    setLoading(true);
    setError(null);

    try {
      await sendVerificationCode(formData.phone);
      setShowVerification(true);
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

  if (showVerification) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-display">Enter Code</h2>
            <button onClick={() => setShowVerification(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-6">
            <Input
              label="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              maxLength={5}
              pattern="\d{5}"
              required
              className="text-center text-2xl tracking-widest"
            />
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg text-center">
                <p className="font-medium mb-1">Verification failed</p>
                <p className="text-sm">{error}</p>
                {error.includes('already registered') && (
                  <button
                    onClick={() => {
                      setShowVerification(false);
                      setIsEditing(true);
                    }}
                    className="mt-2 text-sm underline hover:no-underline"
                  >
                    Go back to change number
                  </button>
                )}
              </div>
            )}
            <div className="flex space-x-4">
              <Button
                onClick={() => setShowVerification(false)}
                className="flex-1 border border-black py-3 hover:bg-black/5"
              >
                Back
              </Button>
              <Button
                onClick={handleVerify}
                disabled={loading || verificationCode.length !== 5}
                className="flex-1 bg-black text-white py-3 hover:bg-black/80"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Contact Information</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <div className="flex space-x-4">
              <Button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex-1 border border-black py-3 hover:bg-black/5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-black text-white py-3 hover:bg-black/80"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <p className="text-lg">
                {profile?.first_name} {profile?.last_name}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex items-center justify-between">
                <p className="text-lg">
                  {profile?.phone}
                  {profile?.phone_verified ? (
                    <span className="ml-2 text-sm text-green-600">✓ Verified</span>
                  ) : (
                    <span className="ml-2 text-sm text-red-600">Not verified</span>
                  )}
                </p>
                {profile?.phone && !profile.phone_verified && (
                  <Button
                    onClick={handleStartVerification}
                    className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80"
                  >
                    Verify Now
                  </Button>
                )}
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(true)}
              className="w-full bg-black text-white py-3 hover:bg-black/80"
            >
              Edit Information
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInfoModal;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import Input from '../ui/Input';
import Button from '../ui/Button';
import VerificationForm from './verification/VerificationForm';
import type { ProfileFormData } from '../../types/profile';

const ProfileSetupForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    first_name: '',
    last_name: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const { error: upsertError } = await supabase
        .from('user_profiles')
        .upsert({
          id: user.id,
          ...formData,
          phone_verified: false
        });

      if (upsertError) throw upsertError;
      
      setShowVerification(true);
    } catch (err) {
      console.error('Profile setup error:', err);
      setError('Failed to save profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVerified = () => {
    navigate('/account');
  };

  if (showVerification) {
    return (
      <VerificationForm 
        phoneNumber={formData.phone}
        onVerified={handleVerified}
        onCancel={() => setShowVerification(false)}
      />
    );
  }

  return (
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
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 hover:bg-black/80"
      >
        {loading ? 'Saving...' : 'Continue'}
      </Button>
    </form>
  );
};

export default ProfileSetupForm;
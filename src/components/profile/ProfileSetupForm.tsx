import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import Input from '../ui/Input';
import Button from '../ui/Button';
import VerificationForm from './verification/VerificationForm';
import type { ProfileFormData } from '../../types/profile';

const ProfileSetupForm = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    first_name: '',
    last_name: '',
    phone: ''
  });

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (err) {
      console.error('Error signing out:', err);
      setError('Failed to sign out');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.email) return;

    setLoading(true);
    setError(null);

    try {
      const { error: upsertError } = await supabase
        .from('user_profiles')
        .upsert({
          id: user.id,
          email: user.email,
          ...formData,
          phone_verified: false,
          complete_onboarding: true
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
    
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      const limited = cleaned.slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: limited }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleVerified = async () => {
    if (!user) return;
    
    try {
      await supabase
        .from('user_profiles')
        .update({ 
          phone_verified: true,
          complete_onboarding: true 
        })
        .eq('id', user.id);
      
      navigate('/account');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile status');
    }
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
    <div className="space-y-6">
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
        <div>
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your 10-digit phone number"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
          />
          <p className="text-sm text-gray-500 mt-1">
            Format: 1234567890 (10 digits)
          </p>
        </div>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}
        <div className="flex flex-col space-y-3">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 hover:bg-black/80"
          >
            {loading ? 'Saving...' : 'Continue'}
          </Button>
          <Button
            type="button"
            onClick={handleSignOut}
            disabled={loading}
            className="w-full border border-black py-3 hover:bg-black/5"
          >
            Sign Out
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetupForm;
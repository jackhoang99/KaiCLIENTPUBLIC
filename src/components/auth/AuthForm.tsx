import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import type { AuthFormData } from '../../types/auth';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (data: AuthFormData) => Promise<void>;
  error: string | null;
  loading: boolean;
}

const AuthForm = ({ type, onSubmit, error, loading }: AuthFormProps) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
          {error.includes('already registered') && (
            <Link to="/login" className="ml-2 underline hover:no-underline">
              Sign in
            </Link>
          )}
        </div>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 hover:bg-black/80"
        showArrow={false}
      >
        {loading 
          ? type === 'login' ? 'Signing in...' : 'Creating account...'
          : type === 'login' ? 'Sign In' : 'Create Account'
        }
      </Button>
    </form>
  );
};

export default AuthForm;
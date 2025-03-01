import { supabase } from '../lib/supabase';
import { isEmailRegistered } from './authValidation';
import type { AuthFormData, AuthResult } from '../types/auth';

export async function signUpUser({ email, password }: AuthFormData): Promise<AuthResult> {
  try {
    const emailExists = await isEmailRegistered(email);
    
    if (emailExists) {
      return {
        user: null,
        error: 'This email is already registered. Please sign in instead.'
      };
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return { user: null, error: error.message };
    }

    return { user: data.user, error: null };
  } catch (err) {
    console.error('Sign up error:', err);
    return { user: null, error: 'An error occurred during sign up' };
  }
}

export async function signInUser({ email, password }: AuthFormData): Promise<AuthResult> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { user: null, error: 'Invalid email or password' };
    }

    return { user: data.user, error: null };
  } catch (err) {
    console.error('Sign in error:', err);
    return { user: null, error: 'An error occurred during sign in' };
  }
}
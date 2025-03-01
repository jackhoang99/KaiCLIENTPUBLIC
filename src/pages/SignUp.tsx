import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import SignUpForm from '../components/auth/SignUpForm';

const SignUp = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-4xl font-display mb-8">Create Account</h1>
            <SignUpForm />
            <p className="mt-6 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-black underline">
                Log in
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default SignUp;
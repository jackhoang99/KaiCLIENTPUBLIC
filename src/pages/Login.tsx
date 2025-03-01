import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-4xl font-display mb-8">Sign In</h1>
            <LoginForm />
            <p className="mt-6 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-black underline">
                Create one
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Login;
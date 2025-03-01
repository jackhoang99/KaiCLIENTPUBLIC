import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const ConfirmationActions = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Button 
        onClick={() => navigate('/login')}
        className="w-full bg-black text-white py-3 hover:bg-black/80"
      >
        Sign In Now
      </Button>
      <Button 
        onClick={() => navigate('/')}
        className="w-full border border-black py-3 hover:bg-black/5"
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export default ConfirmationActions;
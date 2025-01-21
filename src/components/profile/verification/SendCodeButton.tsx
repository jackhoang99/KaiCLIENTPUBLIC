import React from 'react';
import Button from '../../ui/Button';

interface SendCodeButtonProps {
  onClick: () => void;
  loading: boolean;
}

const SendCodeButton = ({ onClick, loading }: SendCodeButtonProps) => {
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 mb-4">
        Verify your phone number to receive important updates and notifications.
      </p>
      <Button
        onClick={onClick}
        disabled={loading}
        className="w-full bg-black text-white py-3 hover:bg-black/80"
        showArrow={false}
      >
        {loading ? 'Sending...' : 'Send Verification Code'}
      </Button>
    </div>
  );
};

export default SendCodeButton;
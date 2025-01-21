import React from 'react';
import Button from '../../ui/Button';

interface VerificationButtonsProps {
  onBack: () => void;
  onVerify: () => void;
  loading: boolean;
  disabled?: boolean;
}

const VerificationButtons = ({ onBack, onVerify, loading, disabled }: VerificationButtonsProps) => {
  return (
    <div className="flex space-x-4">
      <Button
        onClick={onBack}
        className="flex-1 border border-black py-3 hover:bg-black/5"
        showArrow={false}
      >
        Back
      </Button>
      <Button
        onClick={onVerify}
        disabled={loading || disabled}
        className="flex-1 bg-black text-white py-3 hover:bg-black/80"
        showArrow={false}
      >
        {loading ? 'Verifying...' : 'Verify'}
      </Button>
    </div>
  );
};

export default VerificationButtons;
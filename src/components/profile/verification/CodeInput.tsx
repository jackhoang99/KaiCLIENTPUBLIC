import React from 'react';
import Input from '../../ui/Input';

interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const CodeInput = ({ value, onChange, error }: CodeInputProps) => {
  return (
    <div className="space-y-4">
      <Input
        label="Verification Code"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={6}
        pattern="\d{6}"
        required
      />
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default CodeInput;
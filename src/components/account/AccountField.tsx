import React from 'react';

interface AccountFieldProps {
  label: string;
  value: string;
}

const AccountField = ({ label, value }: AccountFieldProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{label}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

export default AccountField;
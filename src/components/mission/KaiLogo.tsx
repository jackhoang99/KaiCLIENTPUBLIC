import React from 'react';

type KaiLogoProps = {
  className?: string;
};

const KaiLogo = ({ className = '' }: KaiLogoProps) => {
  return (
    <img 
      src="https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/KAI%20ONLY%20dark%20brown.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvS0FJIE9OTFkgZGFyayBicm93bi5zdmciLCJpYXQiOjE3MzY3NTEwMDgsImV4cCI6NDg5MDM1MTAwOH0.xendCjuFZaq-sYLE_kY-zibGDPAdKRoIrDgtB11Xq6o&t=2025-01-13T06%3A50%3A08.493Z"
      alt="KAI"
      className={`w-16 h-16 object-contain mix-blend-multiply ${className}`}
    />
  );
};

export default KaiLogo;
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/kailagreestudio/',
      label: 'Follow us on Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/kailagreestudio',
      label: 'Like us on Facebook'
    },
    {
      customIcon: 'https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/transparent%20tiktok%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvdHJhbnNwYXJlbnQgdGlrdG9rIGxvZ28ucG5nIiwiaWF0IjoxNzM2NzU0MTk3LCJleHAiOjQ4OTAzNTQxOTd9.KFsip0obPby_dvxEx1cB-_Bs-o1uxK4XiAg4p9Gcbfk&t=2025-01-13T07%3A43%3A17.788Z',
      href: 'https://www.tiktok.com/@kailagreestudio',
      label: 'Follow us on TikTok'
    }
  ];

  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {socialLinks.map(({ icon: Icon, customIcon, href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity"
          aria-label={label}
        >
          {customIcon ? (
            <img src={customIcon} alt="TikTok" className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            Icon && <Icon size={20} strokeWidth={1.5} className="md:w-6 md:h-6" />
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
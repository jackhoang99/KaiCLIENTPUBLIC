import React from 'react';
import KaiLogo from '../mission/KaiLogo';
import SocialLinks from '../common/SocialLinks';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <div className="absolute bottom-8 inset-x-0">
        <div className="max-w-[1920px] mx-auto px-8 relative">
          <div className="flex justify-center">
            <SocialLinks />
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <KaiLogo className="w-[30px] h-[30px] md:w-16 md:h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
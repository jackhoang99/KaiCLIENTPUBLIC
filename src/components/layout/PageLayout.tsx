import React from "react";
import KaiLogo from "../mission/KaiLogo";
import SocialLinks from "../common/SocialLinks";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  useScrollToTop();

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      <footer className="w-full bg-sand py-2">
        <div className="max-w-[1920px] mx-auto px-8 relative">
          <div className="text-center mb-6" style={{ color: colors.darkBrown }}>
            <p className="text-sm mb-1">©{new Date().getFullYear()} Kai Lagree Studio. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/privacy-policy" className="text-xs underline hover:no-underline" style={{ color: colors.darkBrown }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs underline hover:no-underline" style={{ color: colors.darkBrown }}>
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <SocialLinks />
          </div>
          
          <div className="absolute right-8 bottom-0">
            <KaiLogo className="w-[30px] h-[30px] md:w-16 md:h-16" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
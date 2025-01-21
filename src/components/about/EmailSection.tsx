import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { openInstructorEmail } from '../../utils/email';
import EmailModal from './EmailModal';

const EmailSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center max-w-2xl mx-auto mt-16 md:mt-32 mb-12 md:mb-20 px-4 md:px-0">
      <p className="text-base md:text-lg mb-2 text-black/80">Interested in becoming a certified instructor?</p>
      <p className="text-base md:text-lg mb-8 md:mb-12 text-black/80">
        Email us at{' '}
        <button 
          onClick={openInstructorEmail}
          className="font-medium text-black hover:underline"
        >
          info@kailagreestudio.com
        </button>
        {' '}for details on FREE certification.
      </p>
      <button 
        onClick={openInstructorEmail}
        className="bg-[#B4BEB4] text-white px-8 md:px-16 py-3 rounded-full mb-8 md:mb-12 hover:bg-[#a3aca3] transition-colors w-full md:w-auto flex items-center justify-center space-x-2 mx-auto"
      >
        <Mail size={20} />
        <span>Send Email</span>
      </button>
      <div className="text-center">
        <p className="uppercase tracking-wider mb-1 text-black/80 text-sm md:text-base">LIMITED SPOTS AVALIBLE</p>
        <p className="tracking-wider text-black/80 text-sm md:text-base">Sunnyvale, California</p>
      </div>

      <EmailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
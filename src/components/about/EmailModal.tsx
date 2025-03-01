import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Modal from '../ui/Modal';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@kailagreestudio.com?subject=Instructor Certification Inquiry&body=${encodeURIComponent(message)}`;
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Us">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-[#B4BEB4] text-white rounded-md hover:bg-[#a3aca3] transition-colors flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EmailModal;
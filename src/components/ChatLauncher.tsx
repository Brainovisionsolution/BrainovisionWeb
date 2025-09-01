import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { MessageSquare } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const ChatLauncher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    const chatWindow = window.open(
      '/chat', // A dedicated route or popup HTML
      'BrainOVisionChat',
      'width=420,height=600,resizable,scrollbars'
    );
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleOpenChat}
          className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default ChatLauncher;

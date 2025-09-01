// components/ChatbotWidget.tsx
import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { MessageCircle } from 'lucide-react';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg"
        aria-label="Chatbot toggle"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotWidget;

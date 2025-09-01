import React from 'react';
import ChatWindow from '../components/ChatWindow';

const ChatPage: React.FC = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-2">
      <ChatWindow onClose={() => window.close()} />
    </div>
  );
};

export default ChatPage;

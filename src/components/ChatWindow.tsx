// components/ChatWindow.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type Message = {
  from: 'bot' | 'user';
  text: string;
  buttons?: string[];
};

type BotState =
  | 'idle'
  | 'awaitingInternshipCourse'
  | 'awaitingHackathonTech'
  | 'awaitingProjectType'
  | 'awaitingEventType'
  | 'awaitingWorkshopTopic';

const internshipCourses = [
  "AI / Machine Learning",
  "Full Stack Development",
  "Data Science",
  "Cloud Computing",
  "Cybersecurity",
];

const hackathonTechs = ["React", "Node.js", "Python", "Blockchain", "AI / ML"];
const projectTypes = ["Web Application", "Mobile App", "Data Analysis", "Automation Script"];
const workshopTopics = ["AI Basics", "Cloud Deployment", "DevOps", "Cybersecurity Essentials"];
const eventTypes = ["Seminar", "Networking", "Competition", "Webinar"];

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'bot',
      text: "Hi! I'm Brain-O-Vision Assistant 🤖. Ask me about internships, hackathons, workshops, events, or projects.",
    },
  ]);

  const [input, setInput] = useState('');
  const [botState, setBotState] = useState<BotState>('idle');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const showServiceButtons = () => {
    addMessage({
      from: 'bot',
      text: "Here are the services I can help you with:",
      buttons: ["Internships", "Workshops", "Projects", "Hackathons", "Events"],
    });
  };

  const handleUserMessage = (msg: string) => {
    const lower = msg.toLowerCase();
    addMessage({ from: 'user', text: msg });

    const isGreeting = ['hi', 'hello', 'hey'].some((g) => lower.includes(g));
    if (isGreeting) {
      addMessage({ from: 'bot', text: "Hi, I'm your AI Assistant! How can I help you today? 😊" });
      showServiceButtons();
      return;
    }

    const handleSelection = (list: string[], response: string) => {
      const choiceNum = parseInt(msg.trim());
      if (!isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= list.length) {
        addMessage({ from: 'bot', text: `${response} ${list[choiceNum - 1]}. Would you like to ask about something else?` });
        setBotState('idle');
        showServiceButtons();
      } else {
        addMessage({ from: 'bot', text: `Please choose a valid number between 1 and ${list.length}.` });
      }
    };

    switch (botState) {
      case 'awaitingInternshipCourse':
        handleSelection(internshipCourses, "You chose:");
        return;
      case 'awaitingHackathonTech':
        handleSelection(hackathonTechs, "You selected:");
        return;
      case 'awaitingProjectType':
        handleSelection(projectTypes, "You're interested in a");
        return;
      case 'awaitingWorkshopTopic':
        handleSelection(workshopTopics, "Workshop on");
        return;
      case 'awaitingEventType':
        handleSelection(eventTypes, "Our next");
        return;
    }

    // Category keywords
    if (["internships", "internship"].includes(lower)) {
      addMessage({
        from: 'bot',
        text: `Great! Which internship course are you interested in?\n${internshipCourses.map((c, i) => `${i + 1}. ${c}`).join('\n')}`,
      });
      setBotState('awaitingInternshipCourse');
    } else if (["hackathon", "hackathons"].includes(lower)) {
      addMessage({
        from: 'bot',
        text: `Awesome! Which technology do you want to use?\n${hackathonTechs.map((t, i) => `${i + 1}. ${t}`).join('\n')}`,
      });
      setBotState('awaitingHackathonTech');
    } else if (["project", "projects"].includes(lower)) {
      addMessage({
        from: 'bot',
        text: `What type of project interests you?\n${projectTypes.map((p, i) => `${i + 1}. ${p}`).join('\n')}`,
      });
      setBotState('awaitingProjectType');
    } else if (["workshop", "workshops"].includes(lower)) {
      addMessage({
        from: 'bot',
        text: `Which workshop topic are you interested in?\n${workshopTopics.map((w, i) => `${i + 1}. ${w}`).join('\n')}`,
      });
      setBotState('awaitingWorkshopTopic');
    } else if (["event", "events"].includes(lower)) {
      addMessage({
        from: 'bot',
        text: `What type of event are you asking about?\n${eventTypes.map((e, i) => `${i + 1}. ${e}`).join('\n')}`,
      });
      setBotState('awaitingEventType');
    } else if (lower.includes('contact') || lower.includes('support')) {
      addMessage({
        from: 'bot',
        text: "You can contact us at 📞 +91-XXXXXXXXXX or 📧 support@brainovision.com.",
      });
    } else if (lower.includes('certificate')) {
      addMessage({
        from: 'bot',
        text: "🎓 Certificates are issued within 7 working days after successful completion.",
      });
    } else {
      addMessage({
        from: 'bot',
        text: "Sorry, I didn’t understand that. You can ask me about internships, hackathons, workshops, events, or projects.",
      });
      showServiceButtons();
    }
  };

  const handleButtonClick = (service: string) => {
    handleUserMessage(service.toLowerCase());
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed) {
      handleUserMessage(trimmed);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-[360px] max-w-[90vw] bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-300 z-50 flex flex-col"
    >
      <div className="bg-purple-600 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
        <span className="font-semibold">Brain-O-Vision Assistant 🤖</span>
        <button onClick={onClose}><X className="w-5 h-5 text-white" /></button>
      </div>

      <div className="flex-1 h-full overflow-y-auto px-3 py-2 space-y-2 text-sm scroll-smooth" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left'}>
            <span className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line ${
              msg.from === 'user' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.text}
            </span>
            {msg.buttons && (
              <div className="mt-2 flex flex-wrap gap-2">
                {msg.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleButtonClick(btn)}
                    className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex p-3 border-t bg-white rounded-b-xl">
        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm border rounded-l-md outline-none"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-r-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatWindow;

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Briefcase, Send, User, Bot, Users, HelpCircle, RefreshCw, Copy, CheckCircle } from 'lucide-react';

const GroChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [messages, setMessages] = useState({
    general: [
      { id: 1, type: 'bot', content: 'Hi! I\'m here to help with your questions about careers at GRO Early Learning. How can I assist you today?', timestamp: new Date() }
    ],
    jobs: [
      { id: 1, type: 'bot', content: 'Welcome to our jobs section! I can help you find open positions in Mount Isa, Moranbah, or Charters Towers, understand requirements, or guide you through the application process.', timestamp: new Date() }
    ],
    culture: [
      { id: 1, type: 'bot', content: 'Great to see you\'re interested in GRO\'s culture! I can tell you about our values, work environment, benefits, and what makes working at a community-owned social enterprise unique.', timestamp: new Date() }
    ],
    faq: [
      { id: 1, type: 'bot', content: 'Here are answers to frequently asked questions about careers at GRO Early Learning. Ask me anything about qualifications, benefits, or working in regional Queensland!', timestamp: new Date() }
    ]
  });
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);

  const tabs = [
    { id: 'general', label: 'General', icon: MessageCircle, color: 'bg-blue-500' },
    { id: 'jobs', label: 'Open Roles', icon: Briefcase, color: 'bg-green-500' },
    { id: 'culture', label: 'Culture', icon: Users, color: 'bg-purple-500' },
    { id: 'faq', label: 'FAQ', icon: HelpCircle, color: 'bg-orange-500' }
  ];

  const quickResponses = {
    general: [
      'About GRO Early Learning',
      'How to apply',
      'Locations',
      'Benefits'
    ],
    jobs: [
      'Educator roles',
      'Trainee positions',
      'Mount Isa jobs',
      'Qualifications needed'
    ],
    culture: [
      'Work-life balance',
      'Professional development',
      'Community impact',
      'Employee benefits'
    ],
    faq: [
      'Qualification requirements',
      'Salary packaging',
      'Childcare discounts',
      'Training support'
    ]
  };

  const faqResponses = {
    'about gro early learning': 'GRO Early Learning operates community-owned social enterprises across regional Queensland. 100% of surplus revenue is reinvested into staff development, upgraded play spaces, and community programs.',
    'how to apply': 'Applying is easy! Visit our careers page, select a position that interests you, and complete our online application. Our recruitment process includes a 15-minute video interview, shortlisting, and reference checks.',
    'locations': 'We operate centres in three beautiful regional Queensland locations: Mount Isa (60-62 West St), Moranbah, and Charters Towers. Each location offers unique opportunities to work in close-knit teams.',
    'benefits': 'Our comprehensive benefits package includes salary packaging to maximize your take-home pay, 50% childcare fee discount for staff, free tele-health services, quarterly mental-health days, and more.',
    'educator roles': 'We hire passionate Educators with Certificate III in Early Childhood Education & Care (or willingness to enroll within six months of starting). While experience working with children is valued, we focus on attitude and commitment.',
    'trainee positions': 'Our traineeships are perfect for career changers or new graduates - no prior qualifications required! We cover all study fees while you work and learn, providing hands-on experience with classroom support.',
    'mount isa jobs': 'Our Mount Isa centre at 60-62 West St offers exciting opportunities in early childhood education with the unique lifestyle of outback Queensland. You\'ll be part of a tight-knit, supportive team.',
    'qualifications needed': 'For Educator positions, you need a Certificate III in Early Childhood Education & Care, or willingness to enroll within six months. For traineeships, no prior qualifications are required.',
    'work-life balance': 'We prioritize work-life balance with roster bidding (choose your preferred shifts), 9-day fortnights, job-share options, and flexible working arrangements. Experienced educators appreciate our supportive structure.',
    'professional development': 'Every team member receives an AU$1,200 professional development budget annually, three dedicated study days, and access to our internal \'GROWth\' micro-learning app for continuous improvement.',
    'community impact': 'Staff receive two paid \'Community Impact\' days annually to volunteer with local schools, Landcare groups, food banks, or other community organizations. It\'s our way of giving back.',
    'employee benefits': 'Our benefits go beyond the basics: salary packaging, 50% childcare discounts, free tele-health, quarterly mental health days, paid cultural leave, relocation bonuses, fuel subsidies, and more.',
    'qualification requirements': 'Certificate III in Early Childhood Education & Care is required for Educator roles. We partner with CQU and USQ - staff pursuing teaching degrees receive 25% tuition discount and paid study time.',
    'salary packaging': 'We provide comprehensive salary packaging options to help maximize your take-home pay, along with other financial benefits. Our HR team can walk you through the options to find what suits you best.',
    'childcare discounts': 'Staff receive a generous 50% discount on childcare fees at our centres, making it easier for working parents to balance career and family. It\'s one of the most valued benefits by our team.',
    'training support': 'We cover study fees for all traineeships and offer scholarships for degree programs. Plus, you\'ll have your annual PD budget, study days, and ongoing mentorship. We\'re committed to your growth!'
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage, tab) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for exact matches first
    for (const [key, response] of Object.entries(faqResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Enhanced keyword matching
    const keywords = {
      'qualification': 'qualifications needed',
      'cert': 'qualifications needed',
      'certificate': 'qualifications needed',
      'benefit': 'benefits',
      'perk': 'benefits',
      'location': 'locations',
      'where': 'locations',
      'apply': 'how to apply',
      'application': 'how to apply',
      'trainee': 'trainee positions',
      'traineeship': 'trainee positions',
      'educator role': 'educator roles',
      'work life': 'work-life balance',
      'balance': 'work-life balance',
      'development': 'professional development',
      'training': 'training support',
      'discount': 'childcare discounts',
      'packaging': 'salary packaging',
      'mount isa': 'mount isa jobs',
      'community': 'community impact'
    };

    for (const [keyword, responseKey] of Object.entries(keywords)) {
      if (lowerMessage.includes(keyword)) {
        return faqResponses[responseKey];
      }
    }

    // Fallback responses based on tab
    const fallbackResponses = {
      general: "Thanks for your question! I'm here to help with information about GRO Early Learning careers. Feel free to try the quick response buttons below or ask about our locations, benefits, or application process.",
      jobs: "I'd be happy to help you find the right role! Check out our quick responses below for information about specific positions, or ask me about qualifications, locations, or what makes working at GRO special.",
      culture: "Great question about our workplace culture! I can tell you about our values, benefits, professional development opportunities, or what makes GRO Early Learning a special place to work.",
      faq: "I don't have a specific answer for that question in my knowledge base, but our HR team would be happy to help with more detailed information. You can also try the quick response buttons for more topics."
    };

    return fallbackResponses[tab] || fallbackResponses.general;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => ({
      ...prev,
      [activeTab]: [...prev[activeTab], newUserMessage]
    }));

    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: generateBotResponse(currentInput, activeTab),
        timestamp: new Date()
      };

      setMessages(prev => ({
        ...prev,
        [activeTab]: [...prev[activeTab], botResponse]
      }));
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response) => {
    setInputValue(response);
    // Auto-send the quick response
    setTimeout(() => {
      setInputValue(response);
      handleSendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    const initialMessages = {
      general: [
        { id: 1, type: 'bot', content: 'Hi! I\'m here to help with your questions about careers at GRO Early Learning. How can I assist you today?', timestamp: new Date() }
      ],
      jobs: [
        { id: 1, type: 'bot', content: 'Welcome to our jobs section! I can help you find open positions in Mount Isa, Moranbah, or Charters Towers, understand requirements, or guide you through the application process.', timestamp: new Date() }
      ],
      culture: [
        { id: 1, type: 'bot', content: 'Great to see you\'re interested in GRO\'s culture! I can tell you about our values, work environment, benefits, and what makes working at a community-owned social enterprise unique.', timestamp: new Date() }
      ],
      faq: [
        { id: 1, type: 'bot', content: 'Here are answers to frequently asked questions about careers at GRO Early Learning. Ask me anything about qualifications, benefits, or working in regional Queensland!', timestamp: new Date() }
      ]
    };
    setMessages(initialMessages);
  };

  const copyMessage = async (content, messageId) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            bg-white rounded-lg shadow-2xl 
            w-[95vw] max-w-[400px] 
            h-[70vh] max-h-[600px] 
            sm:w-96 sm:max-w-[420px] 
            sm:h-[600px] sm:max-h-[80vh]
            flex flex-col border border-gray-200 overflow-hidden
          "
          style={{ minWidth: "300px", minHeight: "350px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-blue-500 font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">GRO Careers</h3>
                <p className="text-xs text-blue-100">Ask me anything!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded"
                aria-label="Clear chat"
                title="Clear conversation"
              >
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-3 text-xs font-medium transition-all duration-200 min-w-0 relative ${
                    activeTab === tab.id
                      ? 'text-blue-500 bg-white border-b-2 border-blue-400'
                      : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <IconComponent size={16} />
                    <span className="truncate">{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages[activeTab].map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] group relative ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-lg rounded-bl-sm shadow-sm border border-gray-100'
                  } p-3 text-sm`}
                >
                  <div className="flex items-start gap-2">
                    {message.type === 'bot' && (
                      <Bot size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.type === 'user' && (
                      <User size={16} className="text-blue-100 mt-1 flex-shrink-0" />
                    )}
                  </div>
                  
                  {/* Copy button */}
                  <button
                    onClick={() => copyMessage(message.content, message.id)}
                    className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded ${
                      message.type === 'user' 
                        ? 'text-blue-100 hover:text-white hover:bg-blue-300' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                    title="Copy message"
                  >
                    {copiedMessageId === message.id ? (
                      <CheckCircle size={12} />
                    ) : (
                      <Copy size={12} />
                    )}
                  </button>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-lg rounded-bl-sm shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-blue-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <div className="flex flex-wrap gap-2">
              {quickResponses[activeTab].map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickResponse(response)}
                  className="text-xs bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-md"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300 text-white p-2.5 rounded-lg transition-all duration-200"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroChatbot;
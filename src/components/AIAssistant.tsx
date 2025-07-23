import React, { useState } from 'react';
import { MessageCircle, X, Send, Volume2 } from 'lucide-react';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you understand your Empowr Score and guide you through improving your business profile. What would you like to know?",
      isBot: true,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const suggestedQuestions = [
    "How can I improve my Empowr Score?",
    "What factors are affecting my score?",
    "How do I upload bank data?",
    "When will I be investor-ready?",
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your question! Based on your current profile, I recommend focusing on uploading your recent bank statements and completing the financial literacy course. This could increase your Empowr Score by up to 8 points.",
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <div className="relative">
          <MessageCircle size={24} className="text-black" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Empowr Assistant</h3>
                <p className="text-gray-400 text-xs">AI-powered guidance</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-slate-800 text-white'
                      : 'bg-cyan-400 text-black'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  {message.isBot && (
                    <button className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                      <Volume2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-slate-700">
              <p className="text-gray-400 text-xs mb-2">Suggested questions:</p>
              <div className="space-y-2">
                {suggestedQuestions.slice(0, 2).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="w-full text-left p-2 text-xs text-gray-300 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
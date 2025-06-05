import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sendMessageToGemini, resetChat as resetGeminiChat } from '../services/geminiService';
import { ChatMessage, GroundingChunk } from '../types';
import Button from './common/Button';
import Input from './common/Input';
import { SendIcon } from './icons/SendIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { UserIcon } from './icons/UserIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { RefreshIcon } from './icons/RefreshIcon';
import { CloseIcon } from './icons/CloseIcon'; // Added for the close button in header

interface AIAssistantProps {
  onClose: () => void; // Added prop for closing the modal
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(input);
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.text,
        timestamp: new Date(),
      };
      if (response.groundingChunks && response.groundingChunks.length > 0) {
        const sourcesText = response.groundingChunks
            .map((chunk: GroundingChunk, index: number) => {
                const uri = chunk.web?.uri || chunk.retrievedPassage?.uri;
                const title = chunk.web?.title || chunk.retrievedPassage?.title || uri;
                return uri ? `[${index + 1}] ${title}: ${uri}` : null;
            })
            .filter(Boolean)
            .join('\n');
        if (sourcesText) {
            aiResponse.text += `\n\n**Sources:**\n${sourcesText}`;
        }
      }
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleResetChat = () => {
    resetGeminiChat();
    setMessages([]);
    // Optionally, send a greeting message from AI after reset
    setMessages([{
        id: Date.now().toString(),
        sender: 'ai',
        text: "Hello! I'm the NGSpurs AI Assistant. How can I help you today?",
        timestamp: new Date(),
    }]);
  };
  
  // Initial greeting message
  useEffect(() => {
    setMessages([{
        id: Date.now().toString(),
        sender: 'ai',
        text: "Hello! I'm the NGSpurs AI Assistant. How can I help you today with our products, services, or AI concepts?",
        timestamp: new Date(),
    }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="flex flex-col h-full bg-neutral-DEFAULT dark:bg-neutral-darker">
      {/* Modal Header */}
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <SparklesIcon className="w-6 h-6 text-primary-DEFAULT dark:text-primary-light mr-2" />
          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">NGSpurs AI Assistant</h3>
        </div>
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetChat}
            className="mr-1 p-1"
            aria-label="Reset chat"
          >
            <RefreshIcon className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1"
            aria-label="Close chat"
          >
            <CloseIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg shadow ${
                msg.sender === 'user'
                  ? 'bg-primary-DEFAULT text-white rounded-br-none'
                  : 'bg-white dark:bg-neutral-dark text-gray-800 dark:text-gray-200 rounded-bl-none'
              }`}
            >
              <div className="flex items-start space-x-2">
                {msg.sender === 'ai' && <SparklesIcon className="w-5 h-5 text-secondary-DEFAULT dark:text-secondary-light flex-shrink-0 mt-0.5" />}
                {msg.sender === 'user' && <UserIcon className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />}
                <p className="text-sm whitespace-pre-wrap break-words">{msg.text}</p>
              </div>
              <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100 text-right' : 'text-gray-500 dark:text-gray-300 text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about products, services, AI..."
            className="flex-grow !mt-0"
            disabled={isLoading}
          />
          <Button onClick={handleSend} isLoading={isLoading} disabled={input.trim() === ''} className="px-3 py-2">
            {isLoading ? <SpinnerIcon className="w-5 h-5" /> : <SendIcon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
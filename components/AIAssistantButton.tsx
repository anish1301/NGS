import React, { useState } from 'react';
import Modal from './common/Modal';
import AIAssistant from './AIAssistant';
import Button from './common/Button';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';


const AIAssistantButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        onClick={openModal}
        className="fixed bottom-6 right-6 rounded-full shadow-xl p-4 z-[90]"
        aria-label="Open NGSpurs AI Assistant"
        size="lg"
        variant="primary"
      >
        {isModalOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="" size="lg">
        {/* Title is handled inside AIAssistant component now */}
        <AIAssistant onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AIAssistantButton;
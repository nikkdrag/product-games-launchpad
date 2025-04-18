
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="pg-section bg-white">
      <div className="pg-container max-w-3xl mx-auto text-center">
        <h2 className="pg-heading mb-6">Остались вопросы или хочешь на пробное?</h2>
        <p className="text-xl mb-8">Напиши нам</p>
        
        <a 
          href="https://t.me/KriGuseva" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pg-btn flex items-center justify-center mx-auto"
          style={{ maxWidth: "300px" }}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Написать в Telegram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

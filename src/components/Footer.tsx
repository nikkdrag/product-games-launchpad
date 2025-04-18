
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="pg-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-pgpurple mb-2">Product Games</h3>
            <div className="flex space-x-4 mt-4">
              <a 
                href="mailto:pgcaseclub@gmail.com" 
                className="text-gray-600 hover:text-pgpurple transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://t.me/KriGuseva" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-pgpurple transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0">
            <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
              <a href="#about" className="text-gray-600 hover:text-pgpurple transition-colors">О кейс-клубе</a>
              <a href="#interviews" className="text-gray-600 hover:text-pgpurple transition-colors">Собеседования на английском</a>
              <a href="#cases" className="text-gray-600 hover:text-pgpurple transition-colors">Примеры кейсов</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pgpurple transition-colors">Отзывы</a>
              <a href="#pricing" className="text-gray-600 hover:text-pgpurple transition-colors">Тарифы</a>
              <a href="#experts" className="text-gray-600 hover:text-pgpurple transition-colors">Об экспертах</a>
              <a href="#faq" className="text-gray-600 hover:text-pgpurple transition-colors">FAQ</a>
              <a href="https://t.me/productgames" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pgpurple transition-colors">Telegram-канал</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">© ProductGames, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

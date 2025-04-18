
import { useState, useEffect } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 py-4 ${isSticky ? 'navbar-fixed' : ''}`}>
      <div className="pg-container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-pgpurple">Product Games</a>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-pgpurple transition-colors">О кейс-клубе</a>
          <a href="#interviews" className="text-gray-700 hover:text-pgpurple transition-colors">Собеседования на английском</a>
          <a href="#cases" className="text-gray-700 hover:text-pgpurple transition-colors">Примеры кейсов</a>
          <a href="#testimonials" className="text-gray-700 hover:text-pgpurple transition-colors">Отзывы</a>
          <a href="#pricing" className="text-gray-700 hover:text-pgpurple transition-colors">Тарифы</a>
          <a href="#experts" className="text-gray-700 hover:text-pgpurple transition-colors">Об экспертах</a>
          <a href="#faq" className="text-gray-700 hover:text-pgpurple transition-colors">FAQ</a>
          <a href="https://t.me/productgames" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pgpurple transition-colors">Telegram-канал</a>
        </nav>
        
        {/* Contact Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="mailto:pgcaseclub@gmail.com" aria-label="Email" className="text-gray-700 hover:text-pgpurple transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://t.me/KriGuseva" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-700 hover:text-pgpurple transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-pgpurple" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>О кейс-клубе</a>
            <a href="#interviews" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Собеседования на английском</a>
            <a href="#cases" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Примеры кейсов</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
            <a href="#pricing" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Тарифы</a>
            <a href="#experts" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Об экспертах</a>
            <a href="#faq" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="https://t.me/productgames" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pgpurple transition-colors" onClick={() => setMobileMenuOpen(false)}>Telegram-канал</a>
            <div className="flex space-x-4 pt-2">
              <a href="mailto:pgcaseclub@gmail.com" aria-label="Email" className="text-gray-700 hover:text-pgpurple transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://t.me/KriGuseva" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-700 hover:text-pgpurple transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

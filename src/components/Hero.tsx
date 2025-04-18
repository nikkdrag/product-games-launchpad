
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-pgpurple-lighter opacity-20"></div>
      </div>
      
      <div className="pg-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Продуктовый кейс-клуб
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Развивай насмотренность для карьерного роста и подготовки к собеседованию
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://pgcaseclub.com/payment" target="_blank" rel="noopener noreferrer" className="pg-btn">
                Оформить подписку
              </a>
              <a href="https://t.me/KriGuseva" target="_blank" rel="noopener noreferrer" className="pg-btn-outline">
                Записаться на пробное занятие
              </a>
            </div>
          </div>
          
          <div className="relative w-full h-64 md:h-96 lg:h-auto animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-xl w-full h-full min-h-[300px]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/xLFGFpzOHh8?autoplay=0&rel=0&showinfo=0&modestbranding=1" 
                title="Product Games" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-pgpurple opacity-20 z-0"></div>
            <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-pgpurple opacity-10 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Users } from 'lucide-react';

const ExpertsSection = () => {
  const experts = [
    {
      id: 1,
      name: "Кристина Гусева",
      role: "Основатель кейс-клуба",
      experience: "10+ лет в продуктовом менеджменте",
      avatar: "K"
    },
    {
      id: 2,
      name: "Ольга Петрова",
      role: "Ментор",
      experience: "Опыт работы в международных компаниях, включая интервью в Airbnb",
      avatar: "О"
    },
    {
      id: 3,
      name: "Алексей Смирнов",
      role: "Ментор",
      experience: "Эксперт по B2B и B2C продуктам",
      avatar: "А"
    },
    {
      id: 4,
      name: "Мария Иванова",
      role: "Ментор",
      experience: "Специалист по EdTech и FinTech продуктам",
      avatar: "М"
    }
  ];

  return (
    <section id="experts" className="pg-section bg-gray-50">
      <div className="pg-container">
        <h2 className="pg-heading">Кто проводит кейс-клуб?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div 
              key={expert.id} 
              className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in-up"
              style={{animationDelay: `${(expert.id - 1) * 0.1}s`}}
            >
              <div className="w-24 h-24 rounded-full bg-pgpurple bg-opacity-10 flex items-center justify-center text-pgpurple font-bold text-2xl mx-auto mb-4">
                {expert.avatar}
              </div>
              <h3 className="font-bold text-xl mb-2">{expert.name}</h3>
              <p className="text-pgpurple font-medium mb-2">{expert.role}</p>
              <p className="text-gray-600">{expert.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;


import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Я новичок. Подойдет ли мне кейс-клуб?",
      answer: "Конечно! С первого рабочего дня в роли продакта нужно улучшать насмотренность решений и интерфейсов."
    },
    {
      question: "Какие кейсы я буду решать?",
      answer: "Кейсы конкретных компаний, где сообщается о проблеме, метриках, гипотезах и командах вовлеченных в решение. Вопросы и задачи, которые часто встречаются на собеседованиях, у них нет правильного ответа. Реальные ситуации из продуктовой жизни, которые интересны для обсуждения."
    },
    {
      question: "Где проходит кейс-клуб?",
      answer: "Встречи проходят в Zoom, мы пришлем ссылку для еженедельных встреч, а также доступ к чату в Telegram."
    },
    {
      question: "Что, если я пропустил встречу или не могу присутствовать на ближайшей?",
      answer: "Мы понимаем, что планы могут меняться. У тебя будет возможность присоединиться ко второй группе, напиши об этом организатору."
    },
    {
      question: "Я оплатил(а) участие, что дальше?",
      answer: "встречи проходят в Zoom, мы пригласим тебя в закрытый telegram канал для общения и получения ссылки на встречи (только для тарифа \"полный\") тебе будет доступна база с материалами кейс-клуба доступ к личной странице для трекинга результатов изучения базы кейсов - только для тарифа \"налегке\""
    },
    {
      question: "Как работает подписка?",
      answer: "Участие в кейс-клубе оплачивается через сервис Boosty, списание средств будет происходить автоматически ежемесячно. Подписку можно отменить в любой момент."
    }
  ];
  
  return (
    <section id="faq" className="pg-section bg-gray-50">
      <div className="pg-container max-w-3xl mx-auto">
        <h2 className="pg-heading">FAQ</h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'shadow-md' : ''
              }`}
            >
              <button 
                className="w-full px-6 py-4 text-left font-medium text-lg flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="ml-4">
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-pgpurple" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              <div 
                className={`px-6 pb-4 transition-all duration-300 ${
                  activeIndex === index ? 'block opacity-100 max-h-96' : 'hidden opacity-0 max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://pgcaseclub.com/payment" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pg-btn"
          >
            Оформить подписку
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;


import { useState } from 'react';
import { Briefcase, Users, Lightbulb, Clock, CalendarDays, Award, Database, Users2 } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Какие задачи мы решаем",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.1s"}}>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mr-4">
                <Briefcase className="text-pgpurple h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Не хватает насмотренности?</h3>
            </div>
            <p>Кейс-клуб - еженедельный разбор продуктовых и UX кейсов известных компаний.</p>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mr-4">
                <Users className="text-pgpurple h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Меняешь компанию?</h3>
            </div>
            <p>Узнай, какие вопросы задают на собеседовании и посмотри, как эксперты отвечают на них.</p>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.3s"}}>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mr-4">
                <Lightbulb className="text-pgpurple h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Рабочая рутина лишила идей?</h3>
            </div>
            <p>Чем больше ты видел, тем легче тебе придумать решение под себя. Выстраивай в голове, что есть удачное решение, а что не очень, решая кейсы известных компаний из разных сфер.</p>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mr-4">
                <Users2 className="text-pgpurple h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl">Ищешь продуктовое сообщество?</h3>
            </div>
            <p>Знакомься с продактами и околопродуктовыми коллегами, делись идеями, вдохновляйся.</p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      label: "Кому будет полезен кейс-клуб?",
      component: (
        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <AudienceTab 
                title="Junior, Middle, Senior Product Managers" 
                content={
                  <>
                    <p className="font-semibold text-lg mb-4">Подойдет продактам любого уровня</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><span className="font-medium">Junior:</span> Научишься разбирать реальные кейсы и избегать типовых ошибок</li>
                      <li><span className="font-medium">Middle:</span> Прокачаешь насмотренность и стратегическое мышление</li>
                      <li><span className="font-medium">Senior:</span> Увидишь неочевидные решения из других сфер и расширишь инструментарий</li>
                    </ul>
                  </>
                }
              />
              
              <AudienceTab 
                title="Аналитикам, Дизайнерам, Проджектам" 
                content={
                  <>
                    <p className="font-semibold text-lg mb-4">Будет полезен аналитикам, дизайнерам, проджектам</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Научишься предсказывать последствия изменений в продукте</li>
                      <li>Увидишь, как твоя роль влияет на итоговый UX и бизнес-метрики</li>
                      <li>Поймёшь логику продуктовых решений, чтобы работать слаженнее с командой</li>
                    </ul>
                  </>
                }
              />
              
              <AudienceTab 
                title="Тем, кто ищет работу и тем, кто уже работает" 
                content={
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-semibold text-lg mb-2">Для тех, кто ищет работу</p>
                        <p>Даже с сильным резюме многие «спотыкаются» на кейс-интервью. Разберёшь реальные задачи с собеседований и научишься отвечать уверенно.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Для тех, кто уже работает</p>
                        <p>Обычные курсы дают теорию, но не учат применять её в реальных задачах. В клубе ты вырвешься из рутины, прорешаешь кейсы с разными бизнес-моделями и найдёшь свежие идеи для своих проектов</p>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      label: "Преимущества",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.1s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <CalendarDays className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">3 года работы</h3>
            <p>Проверенный временем формат обучения и сильное сообщество</p>
          </div>
          
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <Briefcase className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">200+ кейсов</h3>
            <p>Обширная база разобранных кейсов из разных индустрий</p>
          </div>
          
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.3s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <Award className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Глубина проработки</h3>
            <p>Детальный разбор каждого кейса с разных точек зрения</p>
          </div>
          
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <Users className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Несколько менторов</h3>
            <p>Разные взгляды на задачи от опытных специалистов</p>
          </div>
          
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.5s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <Users2 className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Российский и международный опыт</h3>
            <p>Менторы с опытом работы в крупных российских и международных компаниях</p>
          </div>
          
          <div className="pg-card flex flex-col items-center text-center animate-fade-in-up" style={{animationDelay: "0.6s"}}>
            <div className="p-3 rounded-full bg-pgpurple bg-opacity-10 mb-4">
              <Database className="text-pgpurple h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl mb-2">База данных материалов</h3>
            <p>Полный доступ к архиву всех материалов кейс-клуба</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      label: "Как проходят занятия?",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.1s"}}>
            <h3 className="font-semibold text-xl mb-4">Формат занятия</h3>
            <ul className="space-y-2">
              <li>• Онлайн, в Zoom</li>
              <li>• Группа от 5 до 10 человек + ментор</li>
              <li>• Есть записи встреч, которые можно самостоятельно изучить в удобное время</li>
            </ul>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <h3 className="font-semibold text-xl mb-4">Структура занятия</h3>
            <p>Ментор задает кейс и участники выдвигают гипотезы как его решить.</p>
            <p className="mt-2">Далее: обсуждение всех предположений и разбор того, как поступила конкретная компания, если это реальный случай.</p>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.3s"}}>
            <h3 className="font-semibold text-xl mb-4">Кейсы из разных областей</h3>
            <p>B2C, B2B, B2B2C, C2C... Сферы: EdTech, FoodTech, PropTech, e-com, telecom и другие.</p>
            <p className="mt-2">Можем разобрать ваш кейс.</p>
          </div>
          
          <div className="pg-card animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <h3 className="font-semibold text-xl mb-4">Расписание занятий</h3>
            <p className="mb-2">Встречи с понедельника по четверг. Есть 4 группы, каждая группа до 10 человек:</p>
            <ul className="space-y-2">
              <li><span className="font-medium">По понедельникам:</span> с 19:00 по 20:00 (GMT+3)</li>
              <li><span className="font-medium">По вторникам:</span> c 20:00 до 21:00 (GMT+3)</li>
              <li><span className="font-medium">По четвергам:</span> с 19:30 по 20:30 (GMT+3)</li>
              <li><span className="font-medium">По средам:</span> c 18:45 до 19:45 (GMT+3)</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="pg-section bg-gray-50">
      <div className="pg-container">
        <div className="lg:text-center max-w-3xl mx-auto">
          <h2 className="pg-heading">О кейс-клубе</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tabs.map((tab, index) => (
              <button 
                key={tab.id}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-pgpurple text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          {tabs[activeTab].component}
        </div>
      </div>
    </section>
  );
};

// Audience Tab Component for the second tab
const AudienceTab = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="animate-fade-in-up">
      <div 
        className={`p-4 border rounded-lg transition-all duration-300 ${
          isHovered 
            ? 'border-pgpurple bg-white shadow-md' 
            : 'border-gray-200 bg-gray-50'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <h3 className={`font-semibold transition-all ${
            isHovered ? 'text-pgpurple text-xl md:w-1/3' : 'text-lg md:w-1/4'
          }`}>
            {title}
          </h3>
          
          <div className={`${isHovered ? 'block md:w-2/3' : 'hidden md:block md:w-3/4'}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: "Налегке",
      price: "1 490",
      features: [
        "база данных материалов кейс-клуба"
      ],
      link: "https://pgcaseclub.com/payment"
    },
    {
      id: 2,
      name: "Полный",
      price: "4 900",
      features: [
        "база данных материалов кейс-клуба",
        "участие в 5 встречах клуба в месяц, можно в разных группах",
        "доступ в чат с участниками и организатором"
      ],
      popular: true,
      link: "https://pgcaseclub.com/payment"
    },
    {
      id: 3,
      name: "Дабл",
      price: "9 400",
      features: [
        "база данных материалов кейс-клуба",
        "участие в 10 встречах клуба в месяц, можно в разных группах",
        "доступ в чат с участниками и организатором"
      ],
      link: "https://pgcaseclub.com/payment"
    }
  ];

  return (
    <section id="pricing" className="pg-section bg-white">
      <div className="pg-container">
        <h2 className="pg-heading">Тарифы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-lg border ${
                plan.popular ? 'border-pgpurple pricing-popular shadow-lg' : 'border-gray-200'
              } overflow-hidden animate-fade-in-up`}
              style={{animationDelay: `${(plan.id - 1) * 0.1}s`}}
            >
              <div className="p-6 bg-white">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500"> р./мес.</span>
                </div>
                
                <div className="space-y-4">
                  <p className="font-medium">В рамках тарифа:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-pgpurple mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{feature}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a 
                    href={plan.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block w-full text-center py-3 rounded-md font-medium ${
                      plan.popular 
                        ? 'bg-pgpurple text-white hover:bg-pgpurple-dark' 
                        : 'bg-white border border-pgpurple text-pgpurple hover:bg-pgpurple-lighter'
                    } transition duration-200`}
                  >
                    Выбрать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-pgpurple bg-opacity-5 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">А еще у нас есть Телеграм-бот для тренировки вопросов перед интервью</h3>
          <a 
            href="https://t.me/PMCasesBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-pgpurple text-white rounded-md font-medium hover:bg-pgpurple-dark transition duration-200"
          >
            К боту
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

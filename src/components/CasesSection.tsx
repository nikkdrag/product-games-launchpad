import { useState } from 'react';
import { X } from 'lucide-react';

const CasesSection = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  
  const cases = [
    {
      id: 1,
      logo: "wise",
      title: "Wise: кейс на привлечение",
      description: "Вы продакт в компании wise, предоставляющая решения для международных денежных переводов. Рост компании зависит от рекомендаций сервиса пользователей своим друзьям. Вы пробовали многочисленные стимулы для рефералов, такие как скидки и подарки, но результат не дает значительного роста пользователей.\n\nВопрос: Как вы бы мотивировали пользователей советовать сервис друзьям?",
      answer: "Wise: кейс на привлечение\nКак это делал сервис wise\nОсновная гипотеза заключалась в том, что, увидев существенную экономию, пользователь обязательно поделится сервисом с другом. Традиционное электронное письмо после перевода, подчеркивающее экономию, не давало результата.\nРешение: Команда переработала решение. После совершения трансфера денег на экране появлялся график под кнопкой \"сравнить\", который визуально показывал отправленную сумму, скрытые комиссии, которые в таком случае берут традиционные банки, и реальную экономию с Wise. Там же была кнопка \"поделиться\" и кнопка \"пригласить друзей\".\nРезультат: Новый дизайн утроил коэффициент шаринга, значительно увеличив количество рекомендаций от клиентов."
    },
    {
      id: 2,
      logo: "tinkoff",
      title: "Тинькофф: геймификация",
      description: "Чтобы побудить пользователей пользоваться голосовым помощником, а также рассказать о его функциях, Тинькофф решил внедрить гефмификацию в виде игры. Игра была представлена в браузере.\n\nВопрос: Какая интересная игровая механика была использована в игре?",
      answer: "Тинькофф: геймификация\nТинькофф разработал браузерную брендированную игру \"Олег\". Всё управление в игре происходит голосом, чтобы игра началась, нужно крикнуть \"Олег\". Во время игры персонажу необходимо перепрыгивать через препятствия — это можно сделать также только голосом, крича \"Олееег\".\n\nВся игра строится на определенной сюжетной линии — жизнь персонажа, которому нужно выполнять повседневные задачи. Он общается с друзьями, которые собираются на вечеринки, просят в долг, персонаж игры даёт в долг, заказывает еду и тд.\n\nНа каждом этапе ему нужна помощь Олега (таким образом отображается оплата через Тинькофф). Олег настолько стремительно появляется, решает нужные задачи по оплате и переводам, что не всегда успеваешь сообразить, что это произошло и для денежных операций не нужно предпринимать никаких дополнительных действий.\n\nТакже в игре отображены основные функции голосового помощника Тинькофф. Кричать \"Олег\" нужно только в сложных ситуациях, когда есть препятствия на пути. Отличная визуализация и обучение использования голосовой системы. Игра \"обучает\" пользоваться сервисом, управляя опытом и рассказывая, что помощник нужен только в трудных ситуациях. Тем самым игра помогает снять нагрузку с операторов и \"внедрить\" голосового помощника в жизнь клиентов банка.\n\nАналогичную игровую механику применяла и Fanta.\nhttps://www.gamification-now.ru/cases/tinkoff-brauzernaya-igra-oleg-dlya-prodvizheniya-golosovogo-pomoshchnika"
    },
    {
      id: 3,
      logo: "amazon",
      title: "Amazon: стратегия - пример ответа на собеседовании",
      description: "Amazon начинал свою работу как место, где можно было купить разные вещи, и дела у него шли очень хорошо. В какой-то момент они также решили позволить людям продавать свои вещи. Это было рискованное решение, так как было непонятно насколько решение будет успешным и не ухудшит ли оно текущий опыт пользователей.\n\nВопрос: Как вы считаете, было ли это успешным решением? Почему?",
      answer: "Amazon: стратегия - пример ответа на собеседовании\nЧто можно рассматривать при ответе:\nкакой будет эффект каннибализации?\nкак это решение повлияет на уровень удовлетворенности клиентов?\nкак это повлияет на конкуренцию?\n\nСравнивая преимущества и недостатки, мы можем сформулировать мнение.\n\nПреимущества решения:\nбольший объем трафика в сервис\nдиверсификация товаров в сервисе\nполучение информации о покупательском спросе и ценах и, тем самым, возможность закрывать гэпы своими поставками\nпривлекая продавцов к себе снижаем конкуренцию, так как администрировать запасы на нескольких площадках трудозатратно для продавцов\nболее высокий поток выручки в долгосрочном периоде за счет большего предложения товаров\nусиление бренда - становление самым большим магазином в мире\n\nНедостатки решения:\nриск ухудшения репутации Амазо��а, связанный с плохим качеством товаров / сервисов продавцов\nрост затрат на координацию взаимоотношений между площадкой и продавцами, а также между продавцами и клиентами"
    }
  ];
  
  const openCase = (id: number) => {
    setActiveCase(id);
  };
  
  const closeCase = () => {
    setActiveCase(null);
  };
  
  return (
    <section id="cases" className="pg-section bg-gray-50">
      <div className="pg-container">
        <h2 className="pg-heading">Примеры кейсов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.id} 
              className="case-preview bg-white rounded-lg shadow-md overflow-hidden cursor-pointer animate-fade-in-up flex flex-col"
              style={{animationDelay: `${(caseItem.id - 1) * 0.1}s`}}
              onClick={() => openCase(caseItem.id)}
            >
              <div className="p-4 h-16 bg-pgpurple bg-opacity-10 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center">
                  <span className="text-pgpurple font-semibold">{caseItem.logo.charAt(0).toUpperCase()}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-semibold text-xl mb-3 line-clamp-2">{caseItem.title}</h3>
                <p className="text-gray-700 line-clamp-6 flex-grow whitespace-pre-line overflow-hidden">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {activeCase !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-xl">{cases[activeCase-1].title}</h3>
                <button 
                  onClick={closeCase}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 whitespace-pre-line">
                {cases[activeCase-1].answer}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Посмотрите запись одной из наших встреч</h3>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="500" 
              src="https://www.youtube.com/embed/MGAJhmBYHto?autoplay=0&rel=0&showinfo=0&modestbranding=1" 
              title="Product Games Meeting" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;


import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      text: "Крис, привет! Спасибо тебе за расшаренные кейсы =) Это мне помогло подготовиться к собеседованию и продуктовым кейсам в Циане =) Из самого полезного это кейс с классифайдами и деревом их метрик прям очень мне помогло на собеседовании. Ну и вообще размялись мозги",
      name: "Михаил",
      role: "Product Manager"
    },
    {
      id: 2,
      text: "1) Решила подписаться потому что хотелось тренировать насмотренность. Ваши разборы дают много почвы для размышлений и взгляда с другой стороны на фичи, и с какими проблемами сталкивались CEO|PM и т. д при их решении\n2) Есть потребность узнавать то, как устроены какие-то фичи/бизнесы, но не всегда есть много времени для того, чтобы, во-первых, находить полезную информацию, во-вторых, долго смотреть видео или слушать подкаст. А такой формат, как у вас, на самом деле напоминает рилс, когда в сжатом виде есть польза. И я всегда знаю, что это много времени не займет, надо будет все-таки подумать (тренировка) и в конечном итоге я узнаю что-то полезное о новом бизнесе.",
      name: "Екатерина",
      role: "Product Designer"
    },
    {
      id: 3,
      text: "Кристина, привет! Пишу сказать спасибо, что создала такой крутой кейс-клуб!) Мне было крайне полезно и интересно провести в нем пол года. Мой карьерный трек двинулся в сторону проджект менеджмента, поэтому переключаюсь на другие образовательные активности. Удачи тебе с этим проектом, надеюсь, что он будет развиваться и дальше, как и любые твои другие!)",
      name: "Дмитрий",
      role: "Project Manager"
    },
    {
      id: 4,
      text: "Для меня кейс-клуб вполне решил задачи, которые я ставила: снизилась тревожность перед собеседованиями, появились более устойчивые фреймворки подходов к кейсам, расширилось представление об индустриях. Спасибо за организацию!",
      name: "Анна",
      role: "Product Analyst"
    },
    {
      id: 5,
      text: "1. Я недавно перешел в продакты и мне нужно развивать продуктовое мышление, а также насмотренность. С этой целью и пошел в кейс-клуб\n2. На самом деле все очень круто и даже не знаю, что я хотел бы добавить. Нравится разнообразие кейсов: есть и b2b, и b2c, внутренние продукты и совершенно разные сферы. Все оч круто",
      name: "Сергей",
      role: "Junior Product Manager"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section id="testimonials" className="pg-section bg-white">
      <div className="pg-container">
        <h2 className="pg-heading">Отзывы о кейс-клубе</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:block">
            <div className="testimonial-carousel">
              <div 
                className="testimonial-slide bg-white rounded-lg shadow-lg p-8 border border-gray-100"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className={`absolute top-0 left-0 w-full p-8 transition-opacity duration-300 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <div className="flex mb-6">
                      <div className="w-16 h-16 rounded-full bg-pgpurple bg-opacity-10 flex items-center justify-center text-pgpurple font-bold text-xl">
                        {testimonial.name[0]}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg whitespace-pre-line">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-pgpurple' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 -left-12">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 -right-12">
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-700"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile Testimonials */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-8 flex snap-x snap-mandatory">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="snap-center shrink-0 w-full px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                    <div className="flex mb-4">
                      <div className="w-12 h-12 rounded-full bg-pgpurple bg-opacity-10 flex items-center justify-center text-pgpurple font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm whitespace-pre-line">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-pgpurple' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4">Нажав на кнопку, вы также можете посмотреть видео-отзыв</p>
          <button 
            onClick={openVideoModal}
            className="inline-flex items-center justify-center px-6 py-3 bg-pgpurple text-white rounded-md hover:bg-pgpurple-dark transition"
          >
            <Play size={20} className="mr-2" />
            Смотреть видео-отзыв
          </button>
        </div>
        
        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="video-modal" onClick={closeVideoModal}>
            <div className="bg-white rounded-xl p-4 max-w-4xl w-full max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow hover:bg-gray-100"
                onClick={closeVideoModal}
              >
                <X size={20} />
              </button>
              <div className="aspect-w-16 aspect-h-9 mt-8">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/uJfnbJ1OySw?autoplay=1&rel=0&showinfo=0&modestbranding=1" 
                  title="Product Games Testimonial" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

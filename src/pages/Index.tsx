
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] dark:from-[#1A1F2C] dark:to-[#121520]">
      {/* Навигационная панель */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-bold text-2xl text-[#8B5CF6] dark:text-[#9b87f5]">aesthetics<span className="text-black dark:text-white">.agency</span></div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5] transition-colors">Услуги</a>
          <a href="#approach" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5] transition-colors">Подход</a>
          <a href="#cases" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5] transition-colors">Кейсы</a>
          <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB] dark:bg-[#9b87f5] dark:hover:bg-[#7E69AB]">
            Связаться
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" />
        </Button>
      </nav>

      {/* Главный баннер */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Прокачиваем бренды через 
          <span className="text-[#8B5CF6] dark:text-[#9b87f5]"> эстетику</span> и 
          <span className="text-[#8B5CF6] dark:text-[#9b87f5]"> аналитику</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          Мы создаем уникальные стратегии SMM-продвижения, сочетая креативный дизайн и data-driven подход
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#8B5CF6] hover:bg-[#7E69AB] dark:bg-[#9b87f5] dark:hover:bg-[#7E69AB] px-8 py-6 text-base">
            Обсудить проект
          </Button>
          <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#E5DEFF] dark:border-[#9b87f5] dark:text-[#9b87f5] px-8 py-6 text-base">
            Смотреть портфолио
          </Button>
        </div>
      </section>

      {/* Статистика */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5CF6] dark:text-[#9b87f5] mb-2">45+</div>
            <div className="text-gray-600 dark:text-gray-300">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5CF6] dark:text-[#9b87f5] mb-2">87%</div>
            <div className="text-gray-600 dark:text-gray-300">Увеличение охвата</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5CF6] dark:text-[#9b87f5] mb-2">12M+</div>
            <div className="text-gray-600 dark:text-gray-300">Показов в соцсетях</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8B5CF6] dark:text-[#9b87f5] mb-2">5.3x</div>
            <div className="text-gray-600 dark:text-gray-300">Средний ROI</div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Полный комплекс услуг для эффективного продвижения вашего бренда в социальных сетях
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-[#1A1F2C] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-[#E5DEFF] dark:bg-[#2D2A42] p-3 inline-block mb-4">
                <Icon name="BarChart" className="h-6 w-6 text-[#8B5CF6] dark:text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Аналитика и стратегия</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Анализ рынка, конкурентов и целевой аудитории для создания эффективной стратегии присутствия в социальных сетях
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-[#1A1F2C] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-[#E5DEFF] dark:bg-[#2D2A42] p-3 inline-block mb-4">
                <Icon name="Palette" className="h-6 w-6 text-[#8B5CF6] dark:text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Креативный контент</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Разработка уникального визуального стиля и создание вовлекающего контента, соответствующего ценностям вашего бренда
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-[#1A1F2C] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-[#E5DEFF] dark:bg-[#2D2A42] p-3 inline-block mb-4">
                <Icon name="Megaphone" className="h-6 w-6 text-[#8B5CF6] dark:text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Таргетированная реклама</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Настройка и оптимизация рекламных кампаний для максимально точного попадания в вашу целевую аудиторию
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Наш подход */}
      <section id="approach" className="container mx-auto px-4 py-16 bg-[#F8F9FA] dark:bg-[#1A1F2C] rounded-2xl my-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наш подход</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Сочетание эстетики и аналитики для создания эффективных стратегий продвижения
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-[#8B5CF6] dark:bg-[#9b87f5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
              Изучаем ваш бренд
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Мы глубоко погружаемся в ваш бизнес, чтобы понять его ценности, цели и уникальные особенности. Это позволяет нам создать аутентичную стратегию, резонирующую с вашей аудиторией.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-[#8B5CF6] dark:bg-[#9b87f5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
              Анализируем данные
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Используем продвинутые инструменты аналитики для изучения трендов рынка и поведения вашей целевой аудитории. Мы верим, что решения, основанные на данных, приводят к лучшим результатам.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-[#8B5CF6] dark:bg-[#9b87f5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
              Создаем стратегию
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              На основе полученных данных и понимания вашего бренда мы разрабатываем комплексную стратегию SMM-продвижения, объединяющую эстетику и аналитический подход.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Рабочий процесс" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section id="cases" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши кейсы</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Реальные истории успеха наших клиентов
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Кейс: Ребрендинг компании" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-[#8B5CF6] dark:text-[#9b87f5] font-medium mb-2">Ребрендинг</div>
              <h3 className="text-xl font-bold mb-2">Модный бренд одежды "Атмосфера"</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Увеличение вовлеченности аудитории на 67% и рост продаж на 43% за 3 месяца через комплексный ребрендинг социальных сетей
              </p>
              <Button variant="ghost" className="text-[#8B5CF6] dark:text-[#9b87f5] hover:bg-[#E5DEFF] dark:hover:bg-[#2D2A42] px-0">
                Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565984448739-470c9a19860f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Кейс: Запуск нового продукта" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-[#8B5CF6] dark:text-[#9b87f5] font-medium mb-2">Запуск продукта</div>
              <h3 className="text-xl font-bold mb-2">Косметический бренд "Натурэль"</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Успешный запуск новой линейки продуктов с охватом более 500 000 пользователей и конверсией в продажи 4.7%
              </p>
              <Button variant="ghost" className="text-[#8B5CF6] dark:text-[#9b87f5] hover:bg-[#E5DEFF] dark:hover:bg-[#2D2A42] px-0">
                Подробнее <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#E5DEFF] dark:border-[#9b87f5] dark:text-[#9b87f5]">
            Смотреть все кейсы
          </Button>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-[#8B5CF6] dark:bg-[#7E69AB] rounded-2xl my-8 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы вывести ваш бренд на новый уровень?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Давайте обсудим, как мы можем помочь вашему бизнесу расти с помощью эффективного SMM-продвижения
          </p>
          <Button className="bg-white text-[#8B5CF6] hover:bg-gray-100 dark:bg-white dark:text-[#7E69AB] px-8 py-6 text-base">
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#F8F9FA] dark:bg-[#121520] border-t border-gray-200 dark:border-gray-800 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-2xl text-[#8B5CF6] dark:text-[#9b87f5] mb-4">aesthetics<span className="text-black dark:text-white">.agency</span></div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Прокачиваем бренды через эстетику и аналитику
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">
                  <Icon name="Linkedin" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Стратегия SMM</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Контент-маркетинг</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Таргетированная реклама</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Аналитика и отчетность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">О нас</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Портфолио</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Блог</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5]">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Icon name="MapPin" className="mr-2 h-4 w-4" /> Москва, ул. Цветной бульвар, 40
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Icon name="Mail" className="mr-2 h-4 w-4" /> hello@aesthetics.agency
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Icon name="Phone" className="mr-2 h-4 w-4" /> +7 (495) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-200 dark:bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 aesthetics.agency. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5] text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-600 hover:text-[#8B5CF6] dark:text-gray-300 dark:hover:text-[#9b87f5] text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

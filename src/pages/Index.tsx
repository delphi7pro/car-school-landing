import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, CalendarDays } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const courses = [
    {
      title: "Базовый курс",
      description: "Полный курс обучения вождению с нуля",
      price: "25,000₽",
      duration: "2-3 месяца",
      lessons: "40 часов теории + 40 часов практики",
      category: "Категория B"
    },
    {
      title: "Ускоренный курс", 
      description: "Интенсивное обучение за месяц",
      price: "35,000₽",
      duration: "1 месяц",
      lessons: "30 часов теории + 30 часов практики",
      category: "Категория B"
    },
    {
      title: "Мотоцикл",
      description: "Обучение вождению мотоцикла",
      price: "20,000₽", 
      duration: "1-2 месяца",
      lessons: "20 часов теории + 25 часов практики",
      category: "Категория A"
    }
  ];

  const instructors = [
    {
      name: "Александр Петров",
      experience: "15 лет опыта",
      specialty: "Категория B, C",
      rating: 4.9,
      image: "img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg"
    },
    {
      name: "Мария Иванова", 
      experience: "12 лет опыта",
      specialty: "Категория B, A",
      rating: 4.8,
      image: "img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg"
    },
    {
      name: "Сергей Козлов",
      experience: "8 лет опыта", 
      specialty: "Категория B",
      rating: 4.7,
      image: "img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Отличная автошкола! Инструкторы профессиональные, машины в хорошем состоянии. Сдала экзамен с первого раза!",
      rating: 5,
      course: "Базовый курс"
    },
    {
      name: "Дмитрий Волков", 
      text: "Быстро и качественно обучили. Особенно понравился ускоренный курс - за месяц получил права.",
      rating: 5,
      course: "Ускоренный курс"
    },
    {
      name: "Елена Кузнецова",
      text: "Замечательные инструкторы, терпеливые и внимательные. Рекомендую всем!",
      rating: 4,
      course: "Базовый курс"
    }
  ];

  const carFleet = [
    {
      model: "Lada Vesta",
      year: "2023",
      transmission: "Механика",
      features: ["Кондиционер", "ABS", "Подушки безопасности"]
    },
    {
      model: "Hyundai Solaris",
      year: "2022", 
      transmission: "Автомат",
      features: ["Кондиционер", "ABS", "Подушки безопасности", "Камера заднего вида"]
    },
    {
      model: "Renault Logan",
      year: "2023",
      transmission: "Механика",
      features: ["Кондиционер", "ABS", "Подушки безопасности"]
    }
  ];

  const scheduleData = {
    "Понедельник": [
      { time: "09:00", instructor: "А.Петров", type: "Теория" },
      { time: "11:00", instructor: "М.Иванова", type: "Практика" },
      { time: "14:00", instructor: "С.Козлов", type: "Практика" },
      { time: "16:00", instructor: "А.Петров", type: "Теория" }
    ],
    "Вторник": [
      { time: "08:00", instructor: "М.Иванова", type: "Практика" },
      { time: "10:00", instructor: "А.Петров", type: "Теория" },
      { time: "13:00", instructor: "С.Козлов", type: "Практика" },
      { time: "15:00", instructor: "М.Иванова", type: "Теория" }
    ],
    "Среда": [
      { time: "09:00", instructor: "С.Козлов", type: "Практика" },
      { time: "11:00", instructor: "А.Петров", type: "Практика" },
      { time: "14:00", instructor: "М.Иванова", type: "Теория" },
      { time: "16:00", instructor: "С.Козлов", type: "Практика" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">
                АвтоДрайв
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Главная</a>
              <a href="#courses" className="text-gray-700 hover:text-orange-500 transition-colors">Курсы</a>
              <a href="#instructors" className="text-gray-700 hover:text-orange-500 transition-colors">Инструкторы</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Получите права{' '}
                <span className="text-orange-500">
                  быстро и надёжно
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Современная автошкола с опытными инструкторами, новым автопарком и гибким расписанием. 
                Высокий процент сдачи экзаменов с первого раза!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
                <Button variant="outline" size="lg" className="border-2">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500">95%</div>
                  <div className="text-sm text-gray-600">Сдают с 1 раза</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">2000+</div>
                  <div className="text-sm text-gray-600">Выпускников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg" 
                  alt="Обучение вождению"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🚗 Новые авто
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Курсы обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий курс обучения вождению. У нас есть программы для всех уровней подготовки.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-gray-700">
                      {course.category}
                    </Badge>
                    <div className="text-2xl font-bold text-orange-500">{course.price}</div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="BookOpen" size={16} className="text-gray-500" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Расписание занятий
            </h2>
            <p className="text-xl text-gray-600">
              Выберите удобное время для занятий
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Календарь</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Расписание на неделю</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="Понедельник" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="Понедельник">Понедельник</TabsTrigger>
                      <TabsTrigger value="Вторник">Вторник</TabsTrigger>
                      <TabsTrigger value="Среда">Среда</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(scheduleData).map(([day, lessons]) => (
                      <TabsContent key={day} value={day} className="space-y-3">
                        {lessons.map((lesson, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-orange-200 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="text-lg font-semibold text-orange-500">
                                {lesson.time}
                              </div>
                              <div>
                                <div className="font-medium">{lesson.instructor}</div>
                                <div className="text-sm text-gray-600">{lesson.type}</div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Записаться
                            </Button>
                          </div>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши инструкторы
            </h2>
            <p className="text-xl text-gray-600">
              Опытные профессионалы с многолетним стажем
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <img 
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-gray-600 mb-2">{instructor.experience}</p>
                  <p className="text-sm text-blue-600 mb-4">{instructor.specialty}</p>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={16} 
                        className={i < Math.floor(instructor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{instructor.rating}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Записаться к инструктору
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы учеников
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши выпускники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={16} 
                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.course}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Автопарк
            </h2>
            <p className="text-xl text-gray-600">
              Современные автомобили для комфортного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carFleet.map((car, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <Icon name="Car" size={48} className="text-orange-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900">{car.model}</h3>
                    <p className="text-gray-600">{car.year} год</p>
                    <Badge variant="outline" className="mt-2">
                      {car.transmission}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Оснащение:</h4>
                    {car.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">г. Москва, ул. Ленина, 123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@autodrive.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-300">Пн-Пт: 9:00-19:00</p>
                    <p className="text-gray-300">Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Записаться на консультацию</CardTitle>
                  <CardDescription className="text-gray-300">
                    Оставьте заявку и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-gray-300"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-gray-300"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Курс</label>
                    <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white">
                      <option value="">Выберите курс</option>
                      <option value="basic">Базовый курс</option>
                      <option value="intensive">Ускоренный курс</option>
                      <option value="motorcycle">Мотоцикл</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Car" size={24} className="text-orange-500" />
              <span className="text-xl font-bold">АвтоДрайв</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 АвтоДрайв. Все права защищены.</p>
              <p className="text-sm text-gray-500">Лицензия ГИБДД № 123456</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
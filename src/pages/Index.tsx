import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const heroStats = [
    { value: '95%', label: 'Сдают с 1 раза', icon: 'Trophy' },
    { value: '2000+', label: 'Выпускников', icon: 'Users' },
    { value: '15', label: 'Лет опыта', icon: 'Calendar' },
    { value: '50+', label: 'Инструкторов', icon: 'UserCheck' }
  ];

  const courses = [
    {
      title: "Базовый курс категории B",
      description: "Полный курс обучения вождению легкового автомобиля",
      price: "25,000₽",
      duration: "2-3 месяца",
      lessons: "40 часов теории + 40 часов практики",
      category: "Категория B",
      features: ["Теоретические занятия", "Практическое вождение", "Подготовка к экзамену"]
    },
    {
      title: "Ускоренный курс", 
      description: "Интенсивное обучение за короткий срок",
      price: "35,000₽",
      duration: "1 месяц",
      lessons: "30 часов теории + 30 часов практики",
      category: "Категория B",
      features: ["Ежедневные занятия", "Индивидуальный подход", "Быстрая подготовка"]
    },
    {
      title: "Мотоцикл категории A",
      description: "Обучение вождению мотоцикла",
      price: "20,000₽", 
      duration: "1-2 месяца",
      lessons: "20 часов теории + 25 часов практики",
      category: "Категория A",
      features: ["Теория ПДД", "Практика на площадке", "Вождение в городе"]
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Высокий процент сдачи',
      description: '95% наших учеников сдают экзамен с первого раза благодаря качественной подготовке'
    },
    {
      icon: 'Car',
      title: 'Современный автопарк',
      description: 'Новые автомобили 2022-2024 года с механической и автоматической коробкой передач'
    },
    {
      icon: 'Users',
      title: 'Опытные инструкторы',
      description: 'Профессиональные инструкторы с многолетним стажем и индивидуальным подходом'
    },
    {
      icon: 'Clock',
      title: 'Гибкое расписание',
      description: 'Удобное время занятий, включая вечерние часы и выходные дни'
    },
    {
      icon: 'MapPin',
      title: 'Удобное расположение',
      description: 'Несколько филиалов по городу, близко к метро и остановкам общественного транспорта'
    },
    {
      icon: 'Shield',
      title: 'Официальная лицензия',
      description: 'Лицензированная автошкола с полным пакетом разрешительных документов'
    }
  ];

  const services = [
    {
      icon: 'BookOpen',
      title: 'Теоретические занятия',
      description: 'Изучение ПДД в современных аудиториях с интерактивными материалами',
      link: '/theory'
    },
    {
      icon: 'Car',
      title: 'Практическое вождение',
      description: 'Индивидуальные занятия с инструктором на учебном автомобиле',
      link: '/practice'
    },
    {
      icon: 'FileText',
      title: 'Подготовка документов',
      description: 'Помощь в оформлении всех необходимых документов для получения прав',
      link: '/documents'
    },
    {
      icon: 'Heart',
      title: 'Медицинская комиссия',
      description: 'Прохождение медкомиссии в партнерских медицинских центрах',
      link: '/medical'
    }
  ];

  const instructors = [
    {
      name: "Александр Петров",
      experience: "15 лет опыта",
      specialty: "Категория B, C",
      rating: 4.9,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Главный инструктор с большим опытом подготовки водителей"
    },
    {
      name: "Мария Иванова", 
      experience: "12 лет опыта",
      specialty: "Категория B, A",
      rating: 4.8,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Специалист по обучению женщин вождению"
    },
    {
      name: "Сергей Козлов",
      experience: "8 лет опыта", 
      specialty: "Категория B",
      rating: 4.7,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Молодой перспективный инструктор"
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Отличная автошкола! Инструкторы профессиональные, машины в хорошем состоянии. Сдала экзамен с первого раза!",
      rating: 5,
      course: "Базовый курс",
      date: "15 марта 2024"
    },
    {
      name: "Дмитрий Волков", 
      text: "Быстро и качественно обучили. Особенно понравился ускоренный курс - за месяц получил права.",
      rating: 5,
      course: "Ускоренный курс",
      date: "8 марта 2024"
    },
    {
      name: "Елена Кузнецова",
      text: "Замечательные инструкторы, терпеливые и внимательные. Рекомендую всем!",
      rating: 4,
      course: "Базовый курс",
      date: "1 марта 2024"
    }
  ];

  const news = [
    {
      title: "Новые изменения в ПДД с 1 апреля 2024",
      description: "Обзор последних изменений в правилах дорожного движения",
      date: "25 марта 2024",
      image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
      link: "/news/pdd-changes-2024"
    },
    {
      title: "Открытие нового филиала на Юго-Западе",
      description: "Теперь наши услуги доступны и в районе Юго-Западная",
      date: "20 марта 2024",
      image: "/img/4efb27a7-19c6-4871-82ad-80166ad44199.jpg",
      link: "/news/new-branch"
    },
    {
      title: "Скидки для студентов до конца месяца",
      description: "Специальные условия обучения для студентов ВУЗов",
      date: "15 марта 2024",
      image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
      link: "/news/student-discount"
    }
  ];

  const faq = [
    {
      question: "Сколько длится обучение?",
      answer: "Стандартный курс длится 2-3 месяца, ускоренный - 1 месяц. Все зависит от выбранной программы и интенсивности занятий."
    },
    {
      question: "Какие документы нужны для поступления?",
      answer: "Паспорт, медицинская справка, фотографии 3x4 см (6 шт.), справка об отсутствии лишения прав."
    },
    {
      question: "Можно ли заниматься в выходные?",
      answer: "Да, мы работаем 7 дней в неделю. Занятия проводятся с 8:00 до 20:00, включая выходные дни."
    }
  ];

  const partners = [
    { name: "ГИБДД", logo: "/img/placeholder.svg" },
    { name: "Медцентр Здоровье", logo: "/img/placeholder.svg" },
    { name: "Автосалон Премиум", logo: "/img/placeholder.svg" },
    { name: "Страховая компания", logo: "/img/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
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
                <Link to="/courses">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Выбрать курс
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-2">
                    <Icon name="Play" size={20} className="mr-2" />
                    О нас подробнее
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <Icon name={stat.icon as any} size={24} className="text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg" 
                  alt="Обучение вождению"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🚗 Новые авто 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем качественное обучение вождению с гарантией результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <Icon name={advantage.icon as any} size={32} className="text-orange-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Курсы обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий курс обучения вождению
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
                    <div className="space-y-1">
                      {course.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Подробнее о курсе
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для получения водительских прав
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
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
                  <p className="text-sm text-blue-600 mb-2">{instructor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-4">{instructor.description}</p>
                  
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
                  
                  <Link to="/instructors">
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
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
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" size="lg">
                Все отзывы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Новости и статьи
            </h2>
            <p className="text-xl text-gray-600">
              Актуальная информация о ПДД и обучении
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link to={article.link}>
                    <Button variant="outline" size="sm">
                      Читать далее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о обучении
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Icon name="HelpCircle" size={20} className="text-orange-500" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600 pl-7">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                Все вопросы и ответы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши партнеры
            </h2>
            <p className="text-xl text-gray-600">
              Мы сотрудничаем с ведущими организациями
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Building" size={32} className="text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать обучение?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию и узнайте все подробности о наших курсах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
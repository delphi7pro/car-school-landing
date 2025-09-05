import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('B');

  const categories = {
    'A': {
      name: 'Категория A',
      description: 'Мотоциклы',
      icon: 'Bike'
    },
    'B': {
      name: 'Категория B',
      description: 'Легковые автомобили',
      icon: 'Car'
    },
    'C': {
      name: 'Категория C',
      description: 'Грузовые автомобили',
      icon: 'Truck'
    },
    'D': {
      name: 'Категория D',
      description: 'Автобусы',
      icon: 'Bus'
    }
  };

  const courses = {
    'A': [
      {
        title: "Базовый курс категории A",
        description: "Полное обучение вождению мотоцикла с нуля",
        price: "20,000₽",
        duration: "1-2 месяца",
        theory: "20 часов",
        practice: "18 часов",
        features: [
          "Изучение устройства мотоцикла",
          "Правила дорожного движения для мотоциклистов",
          "Практика на закрытой площадке",
          "Вождение в городских условиях",
          "Подготовка к экзамену в ГИБДД"
        ],
        popular: false
      },
      {
        title: "Ускоренный курс A",
        description: "Интенсивное обучение за 3 недели",
        price: "28,000₽",
        duration: "3 недели",
        theory: "16 часов",
        practice: "18 часов",
        features: [
          "Ежедневные занятия",
          "Индивидуальный график",
          "Ускоренная подготовка к экзамену",
          "Дополнительные практические занятия"
        ],
        popular: true
      }
    ],
    'B': [
      {
        title: "Базовый курс категории B",
        description: "Полный курс обучения вождению легкового автомобиля",
        price: "25,000₽",
        duration: "2-3 месяца",
        theory: "40 часов",
        practice: "40 часов",
        features: [
          "Теоретические занятия в группе",
          "Индивидуальные практические занятия",
          "Автомобили с МКПП и АКПП",
          "Подготовка к экзамену в ГИБДД",
          "Помощь в оформлении документов"
        ],
        popular: true
      },
      {
        title: "Ускоренный курс B",
        description: "Интенсивное обучение за 1 месяц",
        price: "35,000₽",
        duration: "1 месяц",
        theory: "30 часов",
        practice: "30 часов",
        features: [
          "Ежедневные занятия",
          "Гибкий график",
          "Приоритетная запись на экзамен",
          "Дополнительные консультации"
        ],
        popular: false
      },
      {
        title: "VIP курс B",
        description: "Премиум обучение с персональным инструктором",
        price: "50,000₽",
        duration: "1-2 месяца",
        theory: "Индивидуально",
        practice: "50 часов",
        features: [
          "Персональный инструктор",
          "Индивидуальный график",
          "Автомобиль премиум-класса",
          "Сопровождение на экзамене",
          "Гарантия сдачи с первого раза"
        ],
        popular: false
      }
    ],
    'C': [
      {
        title: "Базовый курс категории C",
        description: "Обучение вождению грузовых автомобилей",
        price: "40,000₽",
        duration: "2-3 месяца",
        theory: "32 часа",
        practice: "44 часа",
        features: [
          "Устройство грузового автомобиля",
          "Особенности управления грузовиком",
          "Правила перевозки грузов",
          "Практика на различных типах грузовиков",
          "Подготовка к экзамену"
        ],
        popular: true
      }
    ],
    'D': [
      {
        title: "Базовый курс категории D",
        description: "Обучение вождению автобусов",
        price: "45,000₽",
        duration: "2-3 месяца",
        theory: "32 часа",
        practice: "44 часа",
        features: [
          "Устройство автобуса",
          "Особенности управления автобусом",
          "Правила перевозки пассажиров",
          "Практика на учебном автобусе",
          "Подготовка к экзамену"
        ],
        popular: true
      }
    ]
  };

  const additionalServices = [
    {
      title: "Повышение квалификации",
      description: "Курсы для действующих водителей",
      price: "От 5,000₽",
      icon: "GraduationCap",
      features: [
        "Обновление знаний ПДД",
        "Практические навыки",
        "Сертификат о прохождении"
      ]
    },
    {
      title: "Восстановление навыков",
      description: "Для водителей с большим перерывом",
      price: "От 8,000₽",
      icon: "RefreshCw",
      features: [
        "Индивидуальные занятия",
        "Восстановление уверенности",
        "Актуальные изменения в ПДД"
      ]
    },
    {
      title: "Экстремальное вождение",
      description: "Курсы контраварийного вождения",
      price: "От 15,000₽",
      icon: "Zap",
      features: [
        "Техники безопасного вождения",
        "Управление в экстремальных ситуациях",
        "Практика на специальной площадке"
      ]
    }
  ];

  const courseProgram = {
    theory: [
      "Правила дорожного движения",
      "Основы безопасности дорожного движения",
      "Устройство и техническое обслуживание транспортных средств",
      "Основы управления транспортными средствами",
      "Первая помощь при дорожно-транспортных происшествиях",
      "Ответственность за правонарушения в области дорожного движения"
    ],
    practice: [
      "Посадка, пуск двигателя, начало движения, переключение передач",
      "Остановка и стоянка на различных участках дороги",
      "Повороты в ограниченном пространстве, разворот",
      "Движение задним ходом",
      "Проезд регулируемых и нерегулируемых перекрестков",
      "Проезд пешеходных переходов и мест остановок маршрутных ТС",
      "Движение по автомагистралям",
      "Вождение в различных дорожных и метеорологических условиях"
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Курсы обучения вождению
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите подходящий курс обучения. Мы предлагаем программы для всех категорий транспортных средств 
                с различной интенсивностью и продолжительностью.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {Object.entries(categories).map(([key, category]) => (
                    <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                      <Icon name={category.icon as any} size={20} />
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{key}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(categories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                      <p className="text-lg text-gray-600">{category.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courses[key as keyof typeof courses]?.map((course, index) => (
                        <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${course.popular ? 'border-2 border-orange-500' : ''}`}>
                          {course.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-orange-500 text-white px-4 py-1">
                                Популярный
                              </Badge>
                            </div>
                          )}
                          
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                {categories[key as keyof typeof categories].name}
                              </Badge>
                              <div className="text-2xl font-bold text-orange-500">{course.price}</div>
                            </div>
                            <CardTitle className="text-xl">{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                          </CardHeader>
                          
                          <CardContent>
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Clock" size={16} className="text-gray-500" />
                                <span>Продолжительность: {course.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="BookOpen" size={16} className="text-gray-500" />
                                <span>Теория: {course.theory}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Car" size={16} className="text-gray-500" />
                                <span>Практика: {course.practice}</span>
                              </div>
                            </div>

                            <div className="space-y-2 mb-6">
                              <h4 className="font-semibold text-gray-900">Что включено:</h4>
                              {course.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-start gap-2 text-sm">
                                  <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <Button className="w-full bg-orange-500 hover:bg-orange-600">
                              Записаться на курс
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Дополнительные услуги
              </h2>
              <p className="text-xl text-gray-600">
                Специальные программы для различных потребностей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon as any} size={32} className="text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-orange-500 mb-4">{service.price}</div>
                    
                    <div className="space-y-2 mb-6 text-left">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      Узнать подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Program */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Программа обучения
              </h2>
              <p className="text-xl text-gray-600">
                Подробная программа теоретических и практических занятий
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" size={24} className="text-blue-600" />
                    Теоретическая подготовка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {courseProgram.theory.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Car" size={24} className="text-orange-600" />
                    Практическая подготовка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {courseProgram.practice.map((skill, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Преимущества обучения у нас
              </h2>
              <p className="text-xl text-gray-600">
                Что делает наши курсы особенными
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">95% успеха</h3>
                <p className="text-gray-600">Высокий процент сдачи экзамена с первого раза</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Опытные инструкторы</h3>
                <p className="text-gray-600">Профессиональные инструкторы с большим стажем</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Новый автопарк</h3>
                <p className="text-gray-600">Современные автомобили 2022-2024 года</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Гибкий график</h3>
                <p className="text-gray-600">Удобное расписание, включая выходные</p>
              </div>
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
              Выберите подходящий курс и запишитесь на обучение. Мы поможем вам получить права быстро и качественно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на курс
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Courses;
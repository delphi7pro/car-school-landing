import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState('B');

  const fleetStats = [
    { label: 'Автомобилей', value: '100+', icon: 'Car' },
    { label: 'Средний возраст', value: '2 года', icon: 'Calendar' },
    { label: 'Категорий', value: '4', icon: 'Award' },
    { label: 'Филиалов', value: '5', icon: 'MapPin' }
  ];

  const vehicles = {
    'B': [
      {
        id: 1,
        model: "Lada Vesta",
        year: 2024,
        transmission: "МКПП",
        fuel: "Бензин",
        features: ["Кондиционер", "ABS", "Подушки безопасности", "Парктроник"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Современный российский автомобиль с отличными характеристиками для обучения",
        quantity: 15,
        location: "Все филиалы"
      },
      {
        id: 2,
        model: "Hyundai Solaris",
        year: 2023,
        transmission: "АКПП",
        fuel: "Бензин",
        features: ["Автомат", "Климат-контроль", "ESP", "Камера заднего вида"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Популярный автомобиль с автоматической коробкой передач",
        quantity: 12,
        location: "Центральный, Северный филиалы"
      },
      {
        id: 3,
        model: "Volkswagen Polo",
        year: 2023,
        transmission: "МКПП",
        fuel: "Бензин",
        features: ["Механика", "Кондиционер", "ABS", "Подогрев сидений"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Надежный европейский автомобиль для качественного обучения",
        quantity: 10,
        location: "Южный, Западный филиалы"
      },
      {
        id: 4,
        model: "Renault Logan",
        year: 2024,
        transmission: "МКПП",
        fuel: "Бензин",
        features: ["Просторный салон", "Экономичный", "ABS", "Подушки безопасности"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Практичный автомобиль для начинающих водителей",
        quantity: 8,
        location: "Восточный филиал"
      }
    ],
    'A': [
      {
        id: 5,
        model: "Honda CB 600F",
        year: 2023,
        transmission: "6-ступенчатая",
        fuel: "Бензин",
        features: ["ABS", "Защитные дуги", "Подогрев ручек", "LED-фары"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Спортивный мотоцикл для обучения категории A",
        quantity: 5,
        location: "Центральный филиал"
      },
      {
        id: 6,
        model: "Yamaha MT-07",
        year: 2024,
        transmission: "6-ступенчатая",
        fuel: "Бензин",
        features: ["Трекшн-контроль", "ABS", "LED-освещение", "Цифровая панель"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Современный мотоцикл с передовыми технологиями",
        quantity: 3,
        location: "Северный филиал"
      }
    ],
    'C': [
      {
        id: 7,
        model: "КАМАЗ-4308",
        year: 2023,
        transmission: "МКПП",
        fuel: "Дизель",
        features: ["Гидроусилитель", "Кондиционер", "ABS", "Тахограф"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Надежный грузовик для обучения категории C",
        quantity: 4,
        location: "Промышленная зона"
      },
      {
        id: 8,
        model: "ГАЗ-3309",
        year: 2024,
        transmission: "МКПП",
        fuel: "Дизель",
        features: ["Малотоннажный", "Маневренный", "Экономичный", "ABS"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Компактный грузовик для городского обучения",
        quantity: 3,
        location: "Центральный филиал"
      }
    ],
    'D': [
      {
        id: 9,
        model: "ПАЗ-320435",
        year: 2023,
        transmission: "МКПП",
        fuel: "Дизель",
        features: ["Низкопольный", "Кондиционер", "ABS", "Система контроля"],
        image: "/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg",
        description: "Современный автобус для обучения категории D",
        quantity: 2,
        location: "Автобусный парк"
      }
    ]
  };

  const maintenance = [
    {
      title: "Ежедневное ТО",
      description: "Проверка всех систем перед началом занятий",
      icon: "CheckCircle"
    },
    {
      title: "Плановое обслуживание",
      description: "Регулярное техническое обслуживание по графику",
      icon: "Settings"
    },
    {
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля",
      icon: "Monitor"
    },
    {
      title: "Замена расходников",
      description: "Своевременная замена масла, фильтров и других расходников",
      icon: "RefreshCw"
    }
  ];

  const safety = [
    {
      title: "Системы безопасности",
      items: ["ABS", "ESP", "Подушки безопасности", "Ремни безопасности", "Детские замки"]
    },
    {
      title: "Дополнительное оборудование",
      items: ["Дублирующие педали", "Зеркала для инструктора", "Знаки 'Учебное ТС'", "Огнетушители"]
    },
    {
      title: "Страхование",
      items: ["ОСАГО", "КАСКО", "Страхование пассажиров", "Техосмотр", "Лицензии"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Автопарк автошколы
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Современный автопарк из более чем 100 автомобилей различных категорий. 
                Все транспортные средства находятся в отличном техническом состоянии.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {fleetStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={stat.icon as any} size={32} className="text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Транспортные средства по категориям
              </h2>
              <p className="text-xl text-gray-600">
                Выберите категорию для просмотра доступных автомобилей
              </p>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-4 mb-8 max-w-2xl mx-auto">
                <TabsTrigger value="B">Категория B</TabsTrigger>
                <TabsTrigger value="A">Категория A</TabsTrigger>
                <TabsTrigger value="C">Категория C</TabsTrigger>
                <TabsTrigger value="D">Категория D</TabsTrigger>
              </TabsList>

              {Object.entries(vehicles).map(([category, categoryVehicles]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryVehicles.map((vehicle) => (
                      <Card key={vehicle.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={vehicle.image}
                            alt={vehicle.model}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{vehicle.model}</h3>
                            <Badge className="bg-orange-500">{vehicle.year}</Badge>
                          </div>

                          <p className="text-gray-600 mb-4">{vehicle.description}</p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Settings" size={16} className="text-gray-500" />
                              <span>КПП: {vehicle.transmission}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Fuel" size={16} className="text-gray-500" />
                              <span>Топливо: {vehicle.fuel}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="Hash" size={16} className="text-gray-500" />
                              <span>Количество: {vehicle.quantity} шт.</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Icon name="MapPin" size={16} className="text-gray-500" />
                              <span>{vehicle.location}</span>
                            </div>
                          </div>

                          <div className="space-y-2 mb-6">
                            <h4 className="font-semibold text-gray-900">Оснащение:</h4>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-orange-500 hover:bg-orange-600">
                            <Icon name="Calendar" size={16} className="mr-2" />
                            Записаться на обучение
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Техническое обслуживание
              </h2>
              <p className="text-xl text-gray-600">
                Мы следим за техническим состоянием всех автомобилей
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {maintenance.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Безопасность и оснащение
              </h2>
              <p className="text-xl text-gray-600">
                Все автомобили оснащены современными системами безопасности
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safety.map((category, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" size={24} className="text-green-600" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Хотите увидеть автопарк?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Приезжайте к нам и лично оцените качество наших автомобилей. Мы проведем экскурсию по автопарку.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="MapPin" size={20} className="mr-2" />
                Посетить автопарк
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="Phone" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Fleet;
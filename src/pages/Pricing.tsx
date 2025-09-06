import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('B');

  const pricingPlans = {
    'B': [
      {
        name: "Базовый",
        description: "Стандартный курс обучения",
        price: 25000,
        duration: "2-3 месяца",
        features: [
          "40 часов теории",
          "40 часов практики",
          "Учебные материалы",
          "Подготовка к экзамену",
          "Помощь в оформлении документов"
        ],
        popular: false,
        color: "blue"
      },
      {
        name: "Стандарт",
        description: "Расширенный курс с дополнительными занятиями",
        price: 32000,
        duration: "2-3 месяца",
        features: [
          "40 часов теории",
          "50 часов практики",
          "Учебные материалы",
          "Дополнительные занятия",
          "Подготовка к экзамену",
          "Помощь в оформлении документов",
          "Консультации инструктора"
        ],
        popular: true,
        color: "orange"
      },
      {
        name: "Премиум",
        description: "VIP обучение с персональным подходом",
        price: 45000,
        duration: "1-2 месяца",
        features: [
          "Индивидуальная теория",
          "60 часов практики",
          "Персональный инструктор",
          "Автомобиль премиум-класса",
          "Гибкий график",
          "Сопровождение на экзамене",
          "Гарантия сдачи с первого раза"
        ],
        popular: false,
        color: "purple"
      }
    ],
    'A': [
      {
        name: "Базовый A",
        description: "Обучение вождению мотоцикла",
        price: 20000,
        duration: "1-2 месяца",
        features: [
          "20 часов теории",
          "18 часов практики",
          "Защитная экипировка",
          "Подготовка к экзамену"
        ],
        popular: false,
        color: "blue"
      },
      {
        name: "Интенсив A",
        description: "Ускоренное обучение",
        price: 28000,
        duration: "3 недели",
        features: [
          "16 часов теории",
          "25 часов практики",
          "Защитная экипировка",
          "Ежедневные занятия",
          "Индивидуальный график"
        ],
        popular: true,
        color: "orange"
      }
    ],
    'C': [
      {
        name: "Базовый C",
        description: "Обучение вождению грузовиков",
        price: 40000,
        duration: "2-3 месяца",
        features: [
          "32 часа теории",
          "44 часа практики",
          "Изучение устройства грузовика",
          "Правила перевозки грузов"
        ],
        popular: true,
        color: "orange"
      }
    ],
    'D': [
      {
        name: "Базовый D",
        description: "Обучение вождению автобусов",
        price: 45000,
        duration: "2-3 месяца",
        features: [
          "32 часа теории",
          "44 часа практики",
          "Изучение устройства автобуса",
          "Правила перевозки пассажиров"
        ],
        popular: true,
        color: "orange"
      }
    ]
  };

  const additionalServices = [
    {
      name: "Дополнительное занятие",
      price: 1500,
      unit: "за занятие",
      description: "Дополнительная практика с инструктором"
    },
    {
      name: "Повторный экзамен",
      price: 2000,
      unit: "за попытку",
      description: "Пересдача внутреннего экзамена"
    },
    {
      name: "Медицинская справка",
      price: 3000,
      unit: "за справку",
      description: "Оформление медсправки в партнерской клинике"
    },
    {
      name: "Восстановление навыков",
      price: 8000,
      unit: "за курс",
      description: "Курс для водителей с большим перерывом"
    },
    {
      name: "Экстремальное вождение",
      price: 15000,
      unit: "за курс",
      description: "Курс контраварийного вождения"
    },
    {
      name: "Индивидуальный инструктор",
      price: 2500,
      unit: "за занятие",
      description: "Персональные занятия с опытным инструктором"
    }
  ];

  const discounts = [
    {
      title: "Студенческая скидка",
      discount: "15%",
      description: "Для студентов ВУЗов и колледжей",
      icon: "GraduationCap",
      conditions: "При предъявлении студенческого билета"
    },
    {
      title: "Семейная скидка",
      discount: "10%",
      description: "При обучении двух и более членов семьи",
      icon: "Users",
      conditions: "Скидка на второго и последующих учеников"
    },
    {
      title: "Корпоративная скидка",
      discount: "20%",
      description: "Для сотрудников организаций",
      icon: "Building",
      conditions: "От 5 человек от одной организации"
    },
    {
      title: "Пенсионная скидка",
      discount: "12%",
      description: "Для пенсионеров",
      icon: "Heart",
      conditions: "При предъявлении пенсионного удостоверения"
    }
  ];

  const paymentMethods = [
    {
      name: "Наличные",
      description: "Оплата в офисе автошколы",
      icon: "Banknote"
    },
    {
      name: "Банковская карта",
      description: "Visa, MasterCard, МИР",
      icon: "CreditCard"
    },
    {
      name: "Банковский перевод",
      description: "Безналичный расчет",
      icon: "Building"
    },
    {
      name: "Рассрочка",
      description: "Беспроцентная рассрочка до 6 месяцев",
      icon: "Calendar"
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    if (popular) {
      return "border-2 border-orange-500 shadow-xl";
    }
    
    switch (color) {
      case 'blue':
        return "border border-blue-200 hover:border-blue-300";
      case 'orange':
        return "border border-orange-200 hover:border-orange-300";
      case 'purple':
        return "border border-purple-200 hover:border-purple-300";
      default:
        return "border border-gray-200 hover:border-gray-300";
    }
  };

  const getButtonClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return "bg-blue-500 hover:bg-blue-600";
      case 'orange':
        return "bg-orange-500 hover:bg-orange-600";
      case 'purple':
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
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
                Цены на обучение
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Прозрачные цены без скрытых платежей. Выберите подходящий тариф 
                и начните обучение уже сегодня.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-4 mb-12 max-w-2xl mx-auto">
                <TabsTrigger value="B">Категория B</TabsTrigger>
                <TabsTrigger value="A">Категория A</TabsTrigger>
                <TabsTrigger value="C">Категория C</TabsTrigger>
                <TabsTrigger value="D">Категория D</TabsTrigger>
              </TabsList>

              {Object.entries(pricingPlans).map(([category, plans]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                      <Card 
                        key={index} 
                        className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${getColorClasses(plan.color, plan.popular)}`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-orange-500 text-white px-4 py-1">
                              Популярный
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl">{plan.name}</CardTitle>
                          <CardDescription className="text-base">{plan.description}</CardDescription>
                          <div className="mt-4">
                            <div className="text-4xl font-bold text-gray-900">
                              {plan.price.toLocaleString()}₽
                            </div>
                            <div className="text-sm text-gray-600 mt-1">{plan.duration}</div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="space-y-3 mb-8">
                            {plan.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-3">
                                <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button className={`w-full ${getButtonClasses(plan.color)}`}>
                            <Icon name="CreditCard" size={16} className="mr-2" />
                            Выбрать тариф
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

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Дополнительные услуги
              </h2>
              <p className="text-xl text-gray-600">
                Расширьте свое обучение дополнительными услугами
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                      <div className="text-2xl font-bold text-orange-500 mb-2">
                        {service.price.toLocaleString()}₽
                      </div>
                      <div className="text-sm text-gray-600 mb-4">{service.unit}</div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Button variant="outline" className="w-full">
                        Заказать услугу
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Discounts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Скидки и акции
              </h2>
              <p className="text-xl text-gray-600">
                Воспользуйтесь выгодными предложениями
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {discounts.map((discount, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={discount.icon as any} size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{discount.title}</h3>
                    <div className="text-3xl font-bold text-green-600 mb-2">{discount.discount}</div>
                    <p className="text-gray-600 mb-3">{discount.description}</p>
                    <p className="text-xs text-gray-500">{discount.conditions}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Способы оплаты
              </h2>
              <p className="text-xl text-gray-600">
                Выберите удобный способ оплаты обучения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={method.icon as any} size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{method.name}</h3>
                    <p className="text-gray-600">{method.description}</p>
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
                Часто задаваемые вопросы о ценах
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Что входит в стоимость обучения?
                  </h3>
                  <p className="text-gray-600">
                    В стоимость входят теоретические и практические занятия, учебные материалы, 
                    подготовка к экзамену и помощь в оформлении документов.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Можно ли оплатить обучение в рассрочку?
                  </h3>
                  <p className="text-gray-600">
                    Да, мы предоставляем беспроцентную рассрочку до 6 месяцев. 
                    Первый взнос составляет 30% от стоимости курса.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Есть ли дополнительные платежи?
                  </h3>
                  <p className="text-gray-600">
                    Нет скрытых платежей. Все дополнительные услуги оплачиваются отдельно 
                    и только по вашему желанию.
                  </p>
                </CardContent>
              </Card>
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
              Выберите подходящий тариф и получите скидку при записи сегодня!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Выбрать тариф
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

export default Pricing;
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Contact = () => {
  const [selectedBranch, setSelectedBranch] = useState('central');

  const contactInfo = {
    phone: "+7 (495) 123-45-67",
    email: "info@autodrive-school.ru",
    workingHours: "Пн-Вс: 8:00 - 20:00",
    address: "г. Москва, ул. Тверская, 15"
  };

  const branches = [
    {
      id: 'central',
      name: 'Центральный филиал',
      address: 'ул. Тверская, 15',
      phone: '+7 (495) 123-45-67',
      email: 'central@autodrive-school.ru',
      hours: 'Пн-Вс: 8:00 - 20:00',
      metro: 'м. Тверская',
      director: 'Петров А.И.',
      services: ['Все категории', 'Теория', 'Практика', 'Экзамены'],
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 'north',
      name: 'Северный филиал',
      address: 'ул. Дмитровская, 25',
      phone: '+7 (495) 123-45-68',
      email: 'north@autodrive-school.ru',
      hours: 'Пн-Сб: 9:00 - 19:00',
      metro: 'м. Дмитровская',
      director: 'Иванова М.С.',
      services: ['Категории A, B', 'Теория', 'Практика'],
      coordinates: { lat: 55.8094, lng: 37.5811 }
    },
    {
      id: 'south',
      name: 'Южный филиал',
      address: 'ул. Варшавская, 42',
      phone: '+7 (495) 123-45-69',
      email: 'south@autodrive-school.ru',
      hours: 'Пн-Вс: 9:00 - 19:00',
      metro: 'м. Варшавская',
      director: 'Сидоров В.П.',
      services: ['Категории B, C', 'Теория', 'Практика'],
      coordinates: { lat: 55.6531, lng: 37.6066 }
    },
    {
      id: 'west',
      name: 'Западный филиал',
      address: 'ул. Кутузовская, 18',
      phone: '+7 (495) 123-45-70',
      email: 'west@autodrive-school.ru',
      hours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00',
      metro: 'м. Кутузовская',
      director: 'Козлова Е.А.',
      services: ['Категория B', 'Теория', 'Практика'],
      coordinates: { lat: 55.7423, lng: 37.5350 }
    },
    {
      id: 'east',
      name: 'Восточный филиал',
      address: 'ул. Измайловская, 33',
      phone: '+7 (495) 123-45-71',
      email: 'east@autodrive-school.ru',
      hours: 'Пн-Сб: 8:00 - 18:00',
      metro: 'м. Измайловская',
      director: 'Волков С.Н.',
      services: ['Категории B, C, D', 'Теория', 'Практика'],
      coordinates: { lat: 55.7887, lng: 37.7516 }
    }
  ];

  const socialMedia = [
    {
      name: 'ВКонтакте',
      url: 'https://vk.com/autodrive_school',
      icon: 'MessageCircle',
      followers: '15.2K'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/autodrive_school',
      icon: 'Send',
      followers: '8.5K'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/74951234567',
      icon: 'MessageSquare',
      followers: 'Чат'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@autodrive_school',
      icon: 'Play',
      followers: '12.8K'
    }
  ];

  const faqItems = [
    {
      question: "Как записаться на обучение?",
      answer: "Вы можете записаться по телефону, через сайт или лично в любом из наших филиалов. Мы работаем ежедневно с 8:00 до 20:00."
    },
    {
      question: "Какие документы нужны для поступления?",
      answer: "Паспорт, медицинская справка, фотографии 3x4 см (6 шт.), справка об отсутствии лишения прав."
    },
    {
      question: "Сколько длится обучение?",
      answer: "Стандартный курс длится 2-3 месяца, ускоренный - 1 месяц. Все зависит от выбранной программы и интенсивности занятий."
    },
    {
      question: "Можно ли заниматься в выходные?",
      answer: "Да, мы работаем 7 дней в неделю. Занятия проводятся с 8:00 до 20:00, включая выходные дни."
    }
  ];

  const selectedBranchData = branches.find(branch => branch.id === selectedBranch);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Контакты
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить 
                на ваши вопросы и помочь с выбором курса обучения.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Позвонить
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={32} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Написать
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Режим работы</h3>
                  <p className="text-gray-600">{contactInfo.workingHours}</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Расписание
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={32} className="text-purple-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    На карте
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Branches */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Свяжитесь с нами
                </h2>
                <p className="text-gray-600 mb-8">
                  Заполните форму, и мы свяжемся с вами в течение 15 минут
                </p>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Имя *</label>
                          <Input placeholder="Ваше имя" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <Input placeholder="+7 (___) ___-__-__" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Интересующий курс</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите курс" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="base-b">Базовый курс B</SelectItem>
                            <SelectItem value="intensive-b">Ускоренный курс B</SelectItem>
                            <SelectItem value="vip-b">VIP курс B</SelectItem>
                            <SelectItem value="category-a">Категория A</SelectItem>
                            <SelectItem value="category-c">Категория C</SelectItem>
                            <SelectItem value="category-d">Категория D</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea 
                          placeholder="Расскажите, что вас интересует..."
                          rows={4}
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="consent" className="rounded" />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          Согласен на обработку персональных данных
                        </label>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить сообщение
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Branches */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Наши филиалы
                </h2>
                <p className="text-gray-600 mb-8">
                  Выберите ближайший к вам филиал
                </p>

                <Tabs value={selectedBranch} onValueChange={setSelectedBranch}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="central">Центр</TabsTrigger>
                    <TabsTrigger value="north">Север</TabsTrigger>
                    <TabsTrigger value="south">Юг</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="west">Запад</TabsTrigger>
                    <TabsTrigger value="east">Восток</TabsTrigger>
                  </TabsList>

                  {branches.map((branch) => (
                    <TabsContent key={branch.id} value={branch.id}>
                      <Card>
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                              <Icon name="MapPin" size={16} className="text-gray-500" />
                              <span>{branch.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Icon name="Train" size={16} className="text-gray-500" />
                              <span>{branch.metro}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Icon name="Phone" size={16} className="text-gray-500" />
                              <span>{branch.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Icon name="Mail" size={16} className="text-gray-500" />
                              <span>{branch.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Icon name="Clock" size={16} className="text-gray-500" />
                              <span>{branch.hours}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Icon name="User" size={16} className="text-gray-500" />
                              <span>Директор: {branch.director}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Услуги:</h4>
                            <div className="flex flex-wrap gap-2">
                              {branch.services.map((service, index) => (
                                <Badge key={index} variant="secondary">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                              <Icon name="Navigation" size={16} className="mr-2" />
                              Маршрут
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Icon name="Phone" size={16} className="mr-2" />
                              Позвонить
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Мы в социальных сетях
              </h2>
              <p className="text-xl text-gray-600">
                Следите за новостями и полезными советами
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {socialMedia.map((social, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={social.icon as any} size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{social.name}</h3>
                    <p className="text-gray-600 mb-4">{social.followers} подписчиков</p>
                    <Button variant="outline" className="w-full">
                      Подписаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-xl text-gray-600">
                Ответы на популярные вопросы
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
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
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Как нас найти
              </h2>
              <p className="text-xl text-gray-600">
                Все наши филиалы удобно расположены рядом с метро
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Интерактивная карта с филиалами</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Здесь будет отображена карта с отмеченными филиалами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Готовы начать обучение?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите бесплатную консультацию по выбору курса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать в чат
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
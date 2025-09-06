import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviewStats = [
    { label: 'Общий рейтинг', value: '4.8', icon: 'Star' },
    { label: 'Всего отзывов', value: '1,247', icon: 'MessageSquare' },
    { label: 'Положительных', value: '94%', icon: 'ThumbsUp' },
    { label: 'За этот месяц', value: '156', icon: 'Calendar' }
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна Смирнова",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "15 марта 2024",
      course: "Базовый курс B",
      instructor: "Петров А.И.",
      text: "Отличная автошкола! Инструкторы профессиональные, машины в хорошем состоянии. Александр Иванович очень терпеливый и внимательный инструктор. Сдала экзамен с первого раза! Рекомендую всем.",
      helpful: 23,
      verified: true
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "8 марта 2024",
      course: "Ускоренный курс B",
      instructor: "Иванова М.С.",
      text: "Быстро и качественно обучили. Особенно понравился ускоренный курс - за месяц получил права. Мария Сергеевна - замечательный инструктор, всё объясняет понятно и доступно.",
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      name: "Елена Кузнецова",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 4,
      date: "1 марта 2024",
      course: "Базовый курс B",
      instructor: "Сидоров В.П.",
      text: "Замечательные инструкторы, терпеливые и внимательные. Виктор Петрович помог преодолеть страх вождения. Единственный минус - иногда приходилось ждать свободного времени для занятий.",
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      name: "Михаил Петров",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "25 февраля 2024",
      course: "Категория A",
      instructor: "Козлов Д.С.",
      text: "Обучался на категорию А. Дмитрий Сергеевич - настоящий профессионал! Научил не только ездить, но и чувствовать мотоцикл. Экзамен сдал без проблем. Спасибо за качественное обучение!",
      helpful: 21,
      verified: true
    },
    {
      id: 5,
      name: "Ольга Морозова",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "20 февраля 2024",
      course: "VIP курс B",
      instructor: "Александров И.П.",
      text: "VIP курс полностью оправдал ожидания. Индивидуальный подход, гибкий график, автомобиль премиум-класса. Игорь Петрович - инструктор высшего класса. Рекомендую тем, кто ценит качество!",
      helpful: 12,
      verified: true
    },
    {
      id: 6,
      name: "Сергей Николаев",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 4,
      date: "15 февраля 2024",
      course: "Категория C",
      instructor: "Кузнецов А.С.",
      text: "Обучался на категорию С. Андрей Сергеевич отлично знает свое дело, много практических советов. Грузовики в хорошем состоянии. Единственное - хотелось бы больше часов практики.",
      helpful: 9,
      verified: true
    },
    {
      id: 7,
      name: "Татьяна Белова",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "10 февраля 2024",
      course: "Базовый курс B",
      instructor: "Смирнова Е.В.",
      text: "Елена Викторовна - замечательный инструктор! Очень терпеливая, особенно с женщинами-новичками. Помогла преодолеть все страхи и неуверенность. Теперь вожу с удовольствием!",
      helpful: 27,
      verified: true
    },
    {
      id: 8,
      name: "Алексей Федоров",
      avatar: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      rating: 5,
      date: "5 февраля 2024",
      course: "Восстановление навыков",
      instructor: "Петров А.И.",
      text: "После 10-летнего перерыва решил восстановить навыки вождения. Александр Иванович помог быстро вспомнить все и адаптироваться к современным условиям движения. Очень доволен!",
      helpful: 14,
      verified: true
    }
  ];

  const ratingDistribution = [
    { stars: 5, count: 892, percentage: 72 },
    { stars: 4, count: 274, percentage: 22 },
    { stars: 3, count: 62, percentage: 5 },
    { stars: 2, count: 12, percentage: 1 },
    { stars: 1, count: 7, percentage: 0 }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesCategory = selectedCategory === 'all' || review.course.includes(selectedCategory);
    return matchesRating && matchesCategory;
  });

  const renderStars = (rating: number, size: number = 16) => {
    return [...Array(5)].map((_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={size} 
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
      />
    ));
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
                Отзывы учеников
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Читайте честные отзывы наших выпускников о качестве обучения, 
                инструкторах и общем опыте получения водительских прав.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {reviewStats.map((stat, index) => (
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

        {/* Rating Distribution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Распределение оценок
                </h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {renderStars(5, 24)}
                  <span className="text-3xl font-bold text-gray-900 ml-2">4.8</span>
                </div>
                <p className="text-gray-600">Основано на 1,247 отзывах</p>
              </div>

              <div className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 w-16 text-right">
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Фильтр по рейтингу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все оценки</SelectItem>
                    <SelectItem value="5">5 звезд</SelectItem>
                    <SelectItem value="4">4 звезды</SelectItem>
                    <SelectItem value="3">3 звезды</SelectItem>
                    <SelectItem value="2">2 звезды</SelectItem>
                    <SelectItem value="1">1 звезда</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Фильтр по курсу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все курсы</SelectItem>
                    <SelectItem value="A">Категория A</SelectItem>
                    <SelectItem value="B">Категория B</SelectItem>
                    <SelectItem value="C">Категория C</SelectItem>
                    <SelectItem value="D">Категория D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-orange-500 hover:bg-orange-600"
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Оставить отзыв
              </Button>
            </div>
          </div>
        </section>

        {/* Review Form */}
        {showReviewForm && (
          <section className="py-8 bg-blue-50">
            <div className="container mx-auto px-4">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                  <CardDescription>
                    Поделитесь своим опытом обучения в нашей автошколе
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Курс обучения</label>
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
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Оценка</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} className="hover:scale-110 transition-transform">
                            <Icon name="Star" size={24} className="text-gray-300 hover:text-yellow-400" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Отзыв</label>
                      <Textarea 
                        placeholder="Расскажите о своем опыте обучения..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Отправить отзыв
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowReviewForm(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Reviews List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Отзывы ({filteredReviews.length})
                </h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Сначала новые</SelectItem>
                    <SelectItem value="oldest">Сначала старые</SelectItem>
                    <SelectItem value="highest">Высокий рейтинг</SelectItem>
                    <SelectItem value="lowest">Низкий рейтинг</SelectItem>
                    <SelectItem value="helpful">Самые полезные</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                                {review.verified && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                                    <Icon name="Check" size={12} className="mr-1" />
                                    Проверен
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-gray-600">{review.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mb-3">
                            <Badge variant="outline">{review.course}</Badge>
                            <Badge variant="outline">Инструктор: {review.instructor}</Badge>
                          </div>

                          <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                              <Icon name="ThumbsUp" size={16} />
                              Полезно ({review.helpful})
                            </button>
                            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                              <Icon name="MessageSquare" size={16} />
                              Ответить
                            </button>
                            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                              <Icon name="Share2" size={16} />
                              Поделиться
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Загрузить еще отзывы
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Станьте частью наших довольных учеников
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам выпускников, которые успешно получили права в нашей автошколе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Записаться на курс
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

export default Reviews;
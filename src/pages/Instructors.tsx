import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');

  const instructors = [
    {
      id: 1,
      name: "Александр Петрович Сидоров",
      position: "Главный инструктор",
      experience: "20 лет",
      categories: ["B", "C", "D"],
      rating: 4.9,
      reviews: 156,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Опытный инструктор с большим стажем работы. Специализируется на подготовке водителей категорий B, C и D.",
      achievements: ["Лучший инструктор 2023", "Более 500 успешных выпускников", "Сертификат повышения квалификации"],
      phone: "+7 (495) 123-45-67",
      schedule: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00"
    },
    {
      id: 2,
      name: "Мария Александровна Козлова",
      position: "Старший инструктор",
      experience: "15 лет",
      categories: ["B", "A"],
      rating: 4.8,
      reviews: 134,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Специалист по обучению женщин вождению. Терпеливый и внимательный подход к каждому ученику.",
      achievements: ["Специалист по женскому вождению", "Сертификат психологии обучения", "300+ выпускников"],
      phone: "+7 (495) 123-45-68",
      schedule: "Пн-Сб: 8:00-17:00"
    },
    {
      id: 3,
      name: "Сергей Николаевич Волков",
      position: "Инструктор категории B",
      experience: "12 лет",
      categories: ["B"],
      rating: 4.7,
      reviews: 98,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Молодой и энергичный инструктор. Использует современные методы обучения.",
      achievements: ["Инновационные методы обучения", "Высокий процент сдачи", "200+ выпускников"],
      phone: "+7 (495) 123-45-69",
      schedule: "Вт-Вс: 10:00-19:00"
    },
    {
      id: 4,
      name: "Дмитрий Иванович Петров",
      position: "Инструктор категории A",
      experience: "18 лет",
      categories: ["A", "A1"],
      rating: 4.9,
      reviews: 87,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Эксперт по мотоциклам. Обучает безопасному вождению двухколесного транспорта.",
      achievements: ["Мастер спорта по мотоспорту", "Специалист по мотоциклам", "150+ выпускников"],
      phone: "+7 (495) 123-45-70",
      schedule: "Пн-Пт: 11:00-20:00"
    },
    {
      id: 5,
      name: "Елена Викторовна Смирнова",
      position: "Инструктор категории B",
      experience: "10 лет",
      categories: ["B"],
      rating: 4.6,
      reviews: 76,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Специализируется на обучении начинающих водителей. Индивидуальный подход к каждому.",
      achievements: ["Педагогическое образование", "Курсы повышения квалификации", "180+ выпускников"],
      phone: "+7 (495) 123-45-71",
      schedule: "Пн-Сб: 9:00-18:00"
    },
    {
      id: 6,
      name: "Андрей Сергеевич Кузнецов",
      position: "Инструктор категории C",
      experience: "16 лет",
      categories: ["C", "CE"],
      rating: 4.8,
      reviews: 65,
      image: "/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg",
      description: "Опытный инструктор по грузовым автомобилям. Профессиональный водитель с большим стажем.",
      achievements: ["Водитель-дальнобойщик", "Эксперт по грузовикам", "120+ выпускников"],
      phone: "+7 (495) 123-45-72",
      schedule: "Пн-Пт: 8:00-17:00"
    }
  ];

  const stats = [
    { label: 'Инструкторов', value: '50+', icon: 'Users' },
    { label: 'Средний стаж', value: '15 лет', icon: 'Calendar' },
    { label: 'Выпускников', value: '2000+', icon: 'GraduationCap' },
    { label: 'Средний рейтинг', value: '4.8', icon: 'Star' }
  ];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || instructor.categories.includes(selectedCategory);
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === '10+' && parseInt(instructor.experience) >= 10) ||
                             (selectedExperience === '15+' && parseInt(instructor.experience) >= 15) ||
                             (selectedExperience === '20+' && parseInt(instructor.experience) >= 20);
    
    return matchesSearch && matchesCategory && matchesExperience;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-600/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Наши инструкторы
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Команда профессиональных инструкторов с многолетним опытом и индивидуальным подходом к каждому ученику
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
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

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <Input
                  placeholder="Поиск по имени или специализации..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-xs"
                />
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="max-w-xs">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="A">Категория A</SelectItem>
                    <SelectItem value="B">Категория B</SelectItem>
                    <SelectItem value="C">Категория C</SelectItem>
                    <SelectItem value="D">Категория D</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="max-w-xs">
                    <SelectValue placeholder="Опыт работы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любой опыт</SelectItem>
                    <SelectItem value="10+">10+ лет</SelectItem>
                    <SelectItem value="15+">15+ лет</SelectItem>
                    <SelectItem value="20+">20+ лет</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-gray-600">
                Найдено: {filteredInstructors.length} инструкторов
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInstructors.map((instructor) => (
                <Card key={instructor.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <div className="relative mb-4">
                        <img 
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                      <p className="text-orange-500 font-semibold mb-2">{instructor.position}</p>
                      <p className="text-sm text-gray-600 mb-3">Опыт: {instructor.experience}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {instructor.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="bg-blue-100 text-blue-700">
                            Категория {category}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={i < Math.floor(instructor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {instructor.rating} ({instructor.reviews} отзывов)
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm text-center">{instructor.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Достижения:</h4>
                        {instructor.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs">
                            <Icon name="Award" size={12} className="text-orange-500" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Phone" size={16} className="text-gray-500" />
                          <span>{instructor.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-gray-500" />
                          <span>{instructor.schedule}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Записаться к инструктору
                      </Button>
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
              Выберите своего инструктора
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Каждый наш инструктор - профессионал своего дела. Выберите того, кто подходит именно вам.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Instructors;
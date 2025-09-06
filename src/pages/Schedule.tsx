import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const branches = [
    { id: 'central', name: 'Центральный филиал', address: 'ул. Тверская, 15' },
    { id: 'north', name: 'Северный филиал', address: 'ул. Дмитровская, 25' },
    { id: 'south', name: 'Южный филиал', address: 'ул. Варшавская, 42' },
    { id: 'west', name: 'Западный филиал', address: 'ул. Кутузовская, 18' },
    { id: 'east', name: 'Восточный филиал', address: 'ул. Измайловская, 33' }
  ];

  const theorySchedule = [
    {
      id: 1,
      subject: "Правила дорожного движения",
      instructor: "Петров А.И.",
      time: "09:00 - 10:30",
      room: "Аудитория 1",
      branch: "central",
      capacity: 25,
      enrolled: 18,
      category: "B"
    },
    {
      id: 2,
      subject: "Основы безопасности",
      instructor: "Иванова М.С.",
      time: "11:00 - 12:30",
      room: "Аудитория 2",
      branch: "central",
      capacity: 30,
      enrolled: 22,
      category: "B"
    },
    {
      id: 3,
      subject: "Устройство автомобиля",
      instructor: "Сидоров В.П.",
      time: "14:00 - 15:30",
      room: "Аудитория 1",
      branch: "north",
      capacity: 20,
      enrolled: 15,
      category: "B"
    },
    {
      id: 4,
      subject: "Первая помощь",
      instructor: "Козлова Е.А.",
      time: "16:00 - 17:30",
      room: "Медкабинет",
      branch: "south",
      capacity: 15,
      enrolled: 12,
      category: "B"
    },
    {
      id: 5,
      subject: "ПДД для мотоциклистов",
      instructor: "Волков С.Н.",
      time: "18:00 - 19:30",
      room: "Аудитория 3",
      branch: "central",
      capacity: 15,
      enrolled: 8,
      category: "A"
    }
  ];

  const practiceSchedule = [
    {
      id: 1,
      instructor: "Александров И.П.",
      time: "08:00 - 09:30",
      vehicle: "Lada Vesta",
      student: "Свободно",
      branch: "central",
      category: "B",
      type: "city"
    },
    {
      id: 2,
      instructor: "Петрова М.А.",
      time: "10:00 - 11:30",
      vehicle: "Hyundai Solaris",
      student: "Иванов А.",
      branch: "central",
      category: "B",
      type: "city"
    },
    {
      id: 3,
      instructor: "Сидоров В.К.",
      time: "12:00 - 13:30",
      vehicle: "VW Polo",
      student: "Свободно",
      branch: "north",
      category: "B",
      type: "highway"
    },
    {
      id: 4,
      instructor: "Козлов Д.С.",
      time: "14:00 - 15:30",
      vehicle: "Honda CB 600F",
      student: "Петров С.",
      branch: "central",
      category: "A",
      type: "area"
    },
    {
      id: 5,
      instructor: "Морозов А.В.",
      time: "16:00 - 17:30",
      vehicle: "КАМАЗ-4308",
      student: "Свободно",
      branch: "east",
      category: "C",
      type: "area"
    }
  ];

  const examSchedule = [
    {
      id: 1,
      type: "Теоретический экзамен",
      time: "09:00 - 12:00",
      location: "ГИБДД ЮВАО",
      instructor: "Петров А.И.",
      students: 15,
      category: "B"
    },
    {
      id: 2,
      type: "Практический экзамен",
      time: "14:00 - 17:00",
      location: "ГИБДД Центр",
      instructor: "Иванова М.С.",
      students: 8,
      category: "B"
    },
    {
      id: 3,
      type: "Внутренний экзамен",
      time: "10:00 - 13:00",
      location: "Центральный филиал",
      instructor: "Сидоров В.П.",
      students: 12,
      category: "A"
    }
  ];

  const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const getAvailableSlots = (schedule: any[]) => {
    return schedule.filter(item => 
      (selectedBranch === 'all' || item.branch === selectedBranch) &&
      (selectedType === 'all' || item.category === selectedType)
    );
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
                Расписание занятий
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Удобное расписание теоретических и практических занятий. 
                Выберите подходящее время и запишитесь на обучение.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Выберите филиал" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все филиалы</SelectItem>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.id}>
                      {branch.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-64">
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
            </div>
          </div>
        </section>

        {/* Schedule Tabs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="theory" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 max-w-2xl mx-auto">
                <TabsTrigger value="theory">Теория</TabsTrigger>
                <TabsTrigger value="practice">Практика</TabsTrigger>
                <TabsTrigger value="exams">Экзамены</TabsTrigger>
              </TabsList>

              {/* Theory Schedule */}
              <TabsContent value="theory">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Теоретические занятия</h3>
                    <div className="space-y-4">
                      {getAvailableSlots(theorySchedule).map((lesson) => (
                        <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                  {lesson.subject}
                                </h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <Icon name="User" size={16} />
                                    <span>Преподаватель: {lesson.instructor}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Clock" size={16} />
                                    <span>{lesson.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="MapPin" size={16} />
                                    <span>{lesson.room}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Users" size={16} />
                                    <span>Мест: {lesson.enrolled}/{lesson.capacity}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge className="bg-blue-500">
                                  Категория {lesson.category}
                                </Badge>
                                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                  Записаться
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Календарь</h3>
                    <Card>
                      <CardContent className="pt-6">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Practice Schedule */}
              <TabsContent value="practice">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Практические занятия</h3>
                    <div className="space-y-4">
                      {getAvailableSlots(practiceSchedule).map((lesson) => (
                        <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                  Практическое вождение
                                </h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <Icon name="User" size={16} />
                                    <span>Инструктор: {lesson.instructor}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Clock" size={16} />
                                    <span>{lesson.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Car" size={16} />
                                    <span>{lesson.vehicle}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="UserCheck" size={16} />
                                    <span className={lesson.student === 'Свободно' ? 'text-green-600' : 'text-red-600'}>
                                      {lesson.student}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge className="bg-green-500">
                                  Категория {lesson.category}
                                </Badge>
                                <Badge variant="secondary">
                                  {lesson.type === 'city' ? 'Город' : lesson.type === 'highway' ? 'Трасса' : 'Площадка'}
                                </Badge>
                                <Button 
                                  size="sm" 
                                  className="bg-orange-500 hover:bg-orange-600"
                                  disabled={lesson.student !== 'Свободно'}
                                >
                                  {lesson.student === 'Свободно' ? 'Записаться' : 'Занято'}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Типы занятий</h3>
                    <Card className="mb-4">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">Площадка - начальные навыки</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-sm">Город - городское вождение</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <span className="text-sm">Трасса - скоростное движение</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Exams Schedule */}
              <TabsContent value="exams">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Расписание экзаменов</h3>
                    <div className="space-y-4">
                      {examSchedule.map((exam) => (
                        <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                  {exam.type}
                                </h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <Icon name="Clock" size={16} />
                                    <span>{exam.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="MapPin" size={16} />
                                    <span>{exam.location}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="User" size={16} />
                                    <span>Сопровождающий: {exam.instructor}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Icon name="Users" size={16} />
                                    <span>Учеников: {exam.students}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge className="bg-purple-500">
                                  Категория {exam.category}
                                </Badge>
                                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                  Записаться
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Подготовка к экзамену</h3>
                    <Card className="mb-4">
                      <CardContent className="pt-6">
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-blue-500" />
                            <span>Документы для экзамена</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} className="text-green-500" />
                            <span>Прибытие за 30 минут</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Phone" size={16} className="text-orange-500" />
                            <span>Связь с инструктором</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Branches Info */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши филиалы
              </h2>
              <p className="text-xl text-gray-600">
                Выберите удобный для вас филиал
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch) => (
                <Card key={branch.id} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="MapPin" size={32} className="text-orange-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{branch.name}</h3>
                      <p className="text-gray-600 mb-4">{branch.address}</p>
                      <Button variant="outline" className="w-full">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Показать на карте
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
              Запишитесь на удобное время
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Выберите подходящее расписание и начните обучение уже сегодня. 
              Мы работаем 7 дней в неделю для вашего удобства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на занятие
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация по расписанию
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Schedule;
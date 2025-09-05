import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/layout/Layout';

const About = () => {
  const achievements = [
    { number: '15', label: 'лет на рынке', icon: 'Calendar' },
    { number: '2000+', label: 'выпускников', icon: 'Users' },
    { number: '95%', label: 'сдают с первого раза', icon: 'Trophy' },
    { number: '50+', label: 'инструкторов', icon: 'UserCheck' },
    { number: '5', label: 'филиалов', icon: 'MapPin' },
    { number: '100+', label: 'автомобилей', icon: 'Car' }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Основание автошколы',
      description: 'Открытие первого филиала с 5 инструкторами и 10 автомобилями'
    },
    {
      year: '2012',
      title: 'Расширение автопарка',
      description: 'Приобретение современных учебных автомобилей с АКПП'
    },
    {
      year: '2015',
      title: 'Получение высшей категории',
      description: 'Присвоение статуса автошколы высшей категории'
    },
    {
      year: '2018',
      title: 'Открытие новых филиалов',
      description: 'Расширение сети до 3 филиалов по городу'
    },
    {
      year: '2021',
      title: 'Цифровизация обучения',
      description: 'Внедрение онлайн-платформы для теоретических занятий'
    },
    {
      year: '2024',
      title: 'Современные технологии',
      description: 'Использование VR-симуляторов и интерактивных методов обучения'
    }
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Приоритет безопасности во всех аспектах обучения'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Высокие стандарты обучения и профессионализм'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Персональный подход к каждому ученику'
    },
    {
      icon: 'Clock',
      title: 'Пунктуальность',
      description: 'Соблюдение расписания и обязательств'
    }
  ];

  const team = [
    {
      name: 'Иван Петрович Сидоров',
      position: 'Директор автошколы',
      experience: '20 лет в сфере образования',
      description: 'Основатель и руководитель автошколы с большим опытом в области подготовки водителей',
      image: '/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg'
    },
    {
      name: 'Мария Александровна Козлова',
      position: 'Заместитель директора',
      experience: '15 лет опыта',
      description: 'Отвечает за качество обучения и методическую работу',
      image: '/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg'
    },
    {
      name: 'Александр Николаевич Волков',
      position: 'Главный инструктор',
      experience: '18 лет стажа',
      description: 'Координирует работу инструкторов и контролирует качество практических занятий',
      image: '/img/1cd7e01b-d52e-4080-85c8-2bead7b7d1bf.jpg'
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
                О нашей автошколе
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Уже 15 лет мы помогаем людям получить водительские права и стать уверенными участниками дорожного движения. 
                Наша миссия - качественное обучение вождению с гарантией результата.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={achievement.icon as any} size={32} className="text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Наша миссия
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Мы стремимся сделать дороги безопаснее, готовя ответственных и квалифицированных водителей. 
                  Наша цель - не просто научить управлять автомобилем, а воспитать культуру безопасного вождения.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Каждый наш выпускник получает не только водительские права, но и уверенность в своих навыках, 
                  знание правил дорожного движения и понимание ответственности за безопасность на дороге.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="Users" size={20} className="mr-2" />
                  Познакомиться с командой
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="/img/58c55be2-a599-4509-acda-31e5b12bbab8.jpg"
                  alt="Обучение в автошколе"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">15 лет</div>
                  <div className="text-sm">успешной работы</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Наши ценности
              </h2>
              <p className="text-xl text-gray-600">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon as any} size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                История развития
              </h2>
              <p className="text-xl text-gray-600">
                Основные этапы становления нашей автошколы
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
                
                {timeline.map((event, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <Badge className="mb-3 bg-orange-500">{event.year}</Badge>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Руководство автошколы
              </h2>
              <p className="text-xl text-gray-600">
                Опытные профессионалы, которые руководят нашей работой
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{member.position}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Licenses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Лицензии и сертификаты
              </h2>
              <p className="text-xl text-gray-600">
                Мы работаем официально и имеем все необходимые разрешения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="FileCheck" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Лицензия ГИБДД</h3>
                  <p className="text-sm text-gray-600">№ 123456 от 15.03.2009</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Сертификат качества</h3>
                  <p className="text-sm text-gray-600">ISO 9001:2015</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Страхование</h3>
                  <p className="text-sm text-gray-600">Полис ОСАГО на все ТС</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" size={32} className="text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Членство в ассоциации</h3>
                  <p className="text-sm text-gray-600">Ассоциация автошкол России</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Присоединяйтесь к нашей семье водителей
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Станьте частью большой семьи наших выпускников. Мы поможем вам получить права и стать уверенным водителем.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на обучение
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
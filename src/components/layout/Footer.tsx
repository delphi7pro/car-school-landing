import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const quickLinks = [
    { name: 'О нас', href: '/about' },
    { name: 'Курсы обучения', href: '/courses' },
    { name: 'Инструкторы', href: '/instructors' },
    { name: 'Автопарк', href: '/fleet' },
    { name: 'Расписание', href: '/schedule' }
  ];

  const services = [
    { name: 'Теоретические занятия', href: '/theory' },
    { name: 'Практические занятия', href: '/practice' },
    { name: 'Экзамены', href: '/exams' },
    { name: 'Документы', href: '/documents' },
    { name: 'Медкомиссия', href: '/medical' }
  ];

  const categories = [
    { name: 'Категория A', href: '/category-a' },
    { name: 'Категория B', href: '/category-b' },
    { name: 'Категория C', href: '/category-c' },
    { name: 'Категория D', href: '/category-d' },
    { name: 'Повышение квалификации', href: '/advanced' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Icon name="Car" size={28} className="text-orange-500" />
              <span className="text-xl font-bold">АвтоДрайв</span>
            </div>
            <p className="text-gray-300 mb-4">
              Современная автошкола с 15-летним опытом. Высокое качество обучения и 95% успешной сдачи экзаменов.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 АвтоДрайв. Все права защищены. Лицензия ГИБДД № 123456
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
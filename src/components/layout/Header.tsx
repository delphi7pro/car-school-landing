import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Курсы', href: '/courses' },
    { name: 'Инструкторы', href: '/instructors' },
    { name: 'Автопарк', href: '/fleet' },
    { name: 'Расписание', href: '/schedule' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Контакты', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-orange-500" />
            <span className="text-2xl font-bold text-orange-500">
              АвтоДрайв
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive(item.href) ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                        isActive(item.href) ? 'text-orange-500' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-orange-500 hover:bg-orange-600 mt-4">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
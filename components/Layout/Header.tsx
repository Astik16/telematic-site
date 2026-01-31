import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Преимущества', href: '#benefits' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
           <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-brand-dark font-black">T</div>
           ТЕЛЕМАТИК
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79990000000" className="text-white font-medium flex items-center gap-2 hover:text-brand-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>+7 (XXX) XXX-XX-XX</span>
          </a>
          <Button size="sm" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-slate-800 p-4 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-base font-medium text-slate-300 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-slate-800 my-2" />
            <a href="tel:+79990000000" className="text-white font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </a>
            <Button className="w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}>
              Заказать звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
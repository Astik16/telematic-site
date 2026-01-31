import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart3, ShieldCheck, Cog, Video, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'ГЛОНАСС/GPS Мониторинг',
    description: 'Отслеживание местоположения, скорости и маршрутов транспорта в реальном времени с точностью до 3 метров.',
    icon: <MapPin className="w-8 h-8" />
  },
  {
    title: 'Контроль топлива',
    description: 'Установка высокоточных датчиков уровня топлива. Исключение сливов, недоливов и «левых» чеков.',
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    title: 'Тахография',
    description: 'Установка, калибровка и обслуживание тахографов. Выпуск карт водителя. Соответствие законодательству РФ.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: 'Видеоконтроль',
    description: 'Системы видеонаблюдения для транспорта. Фиксация дорожной обстановки и поведения водителя.',
    icon: <Video className="w-8 h-8" />
  },
  {
    title: 'Интеграция с 1С',
    description: 'Автоматическая выгрузка путевых листов и отчетов в вашу учетную систему. Никакого ручного ввода.',
    icon: <Database className="w-8 h-8" />
  },
  {
    title: 'Техническое обслуживание',
    description: 'Оперативный выезд сервисных инженеров по КБР. Диагностика и ремонт оборудования.',
    icon: <Cog className="w-8 h-8" />
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Комплексные решения</h2>
            <p className="text-slate-400 text-lg">
              Мы не просто продаем датчики — мы выстраиваем систему контроля, которая работает на прибыль вашего бизнеса.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-brand-surface border border-slate-800 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
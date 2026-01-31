import React from 'react';
import { Shield, Clock, Wrench, BarChart } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-brand-secondary" />,
      title: "Быстрый монтаж",
      text: "Оборудуем один автомобиль за 40 минут. Возможен монтаж в выходные и ночное время, чтобы не прерывать рабочие процессы."
    },
    {
      icon: <Shield className="w-10 h-10 text-brand-secondary" />,
      title: "Пожизненная гарантия",
      text: "Мы уверены в качестве оборудования. Предоставляем расширенную гарантию на монтажные работы и терминалы на весь срок обслуживания."
    },
    {
      icon: <Wrench className="w-10 h-10 text-brand-secondary" />,
      title: "Собственный сервис в Нальчике",
      text: "Оперативная выездная бригада по всей КБР. Вам не нужно ждать специалистов из других регионов."
    },
    {
      icon: <BarChart className="w-10 h-10 text-brand-secondary" />,
      title: "Доказанная эффективность",
      text: "В среднем наши клиенты сокращают расходы на ГСМ на 25% и на 15% снижают пробег за счет оптимизации логистики."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Почему выбирают нас</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Работаем честно, профессионально и с полной ответственностью за результат.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-brand-surface p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="mb-6 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center border border-slate-800">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 py-12 text-sm text-slate-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-xl font-bold text-white mb-4 block">ООО «Телематик»</a>
            <p className="mb-4">
              Профессиональный спутниковый мониторинг транспорта и контроль топлива в Нальчике и Кабардино-Балкарии.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Мониторинг транспорта</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Контроль топлива</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Установка тахографов</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Видеонаблюдение</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Реквизиты</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <p className="mb-2">г. Нальчик, ул. [Улица], д. [Дом]</p>
            <p className="mb-2"><a href="tel:+70000000000" className="text-white hover:text-brand-accent">+7 (XXX) XXX-XX-XX</a></p>
            <p><a href="mailto:info@telematic-kbr.ru" className="hover:text-brand-accent">info@telematic-kbr.ru</a></p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ООО «Телематик». Все права защищены.</p>
          <p>Разработано для бизнеса и госсектора.</p>
        </div>
      </div>
    </footer>
  );
};
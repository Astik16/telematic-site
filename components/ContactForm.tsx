import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Спасибо за заявку! Мы свяжемся с вами в течение 15 минут.");
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Свяжитесь с нами</h2>
            <p className="text-slate-400 text-lg mb-10">
              Готовы обсудить проект? Оставьте заявку на бесплатную консультацию или аудит вашего автопарка.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-surface border border-slate-700 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Телефон</h3>
                  <p className="text-slate-400">+7 (XXX) XXX-XX-XX</p>
                  <p className="text-sm text-slate-500 mt-1">Пн-Пт с 9:00 до 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-surface border border-slate-700 flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Офис</h3>
                  <p className="text-slate-400">г. Нальчик, ул. [Улица], д. [Дом]</p>
                  <p className="text-sm text-slate-500 mt-1">Работаем по всей Кабардино-Балкарии</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-surface border border-slate-700 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-slate-400">info@telematic-kbr.ru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Ваше имя</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="Иван Иванов"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">Обязательное поле</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Телефон</label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="+7 (999) 000-00-00"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">Обязательное поле</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    {...register("email")}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="example@mail.ru"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Комментарий (необязательно)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                  placeholder="Количество техники, задачи..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-slate-500 text-center">
                Нажимая кнопку, вы даете согласие на обработку персональных данных.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const LeadMagnet: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-accent to-brand-secondary relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-brand-dark/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              Бесплатно
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Чек-лист: 7 способов сократить расходы на автопарк
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Проверьте свой бизнес по нашему списку и найдите точки роста, о которых вы могли не знать. PDF-файл придет вам мгновенно.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 text-slate-300 text-sm">
                 <FileText className="w-4 h-4" /> PDF, 2.4 MB
               </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
             <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-white font-medium mb-4">Куда отправить чек-лист?</p>
                <div className="flex flex-col gap-3">
                   <Button variant="primary" className="w-full justify-between group bg-white text-brand-dark hover:bg-slate-100">
                     Скачать в Telegram 
                     <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                   </Button>
                   <Button variant="outline" className="w-full justify-between text-white border-white/30 hover:bg-white/10">
                     Скачать в WhatsApp
                     <Download className="w-4 h-4" />
                   </Button>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 text-center">
                  Мы не рассылаем спам. Только полезные материалы.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
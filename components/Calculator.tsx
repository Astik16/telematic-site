import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Truck, Car, Construction, Building2 } from 'lucide-react';
import { Button } from './ui/Button';
import { VehicleType, CalculatorState } from '../types';

export const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    vehicleType: VehicleType.CARGO,
    count: 5,
    fuelControl: true,
    region: 'Nalchik',
  });

  const [result, setResult] = useState({ cost: 0, savings: 0 });

  useEffect(() => {
    // Logic for estimation (Approximated for realism)
    let baseFuelSpend = 0;
    
    switch (state.vehicleType) {
      case VehicleType.PASSENGER: baseFuelSpend = 15000; break;
      case VehicleType.CARGO: baseFuelSpend = 120000; break;
      case VehicleType.SPECIAL: baseFuelSpend = 90000; break;
      case VehicleType.MUNICIPAL: baseFuelSpend = 60000; break;
    }

    // Savings logic: 
    // Basic monitoring saves ~10% on logistics/idling.
    // Fuel control adds ~15-20% savings on theft/efficiency.
    const savingsPercent = state.fuelControl ? 0.25 : 0.10;
    
    // Service cost (subscription) approx 400-800 rub/mo depending on features
    const serviceCostPerUnit = state.fuelControl ? 800 : 500;

    const totalServiceCost = serviceCostPerUnit * state.count;
    const totalSavings = (baseFuelSpend * savingsPercent * state.count) - totalServiceCost;

    setResult({
      cost: totalServiceCost,
      savings: Math.floor(totalSavings)
    });

  }, [state]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, count: parseInt(e.target.value) }));
  };

  const vehicles = [
    { type: VehicleType.CARGO, icon: <Truck className="w-6 h-6" /> },
    { type: VehicleType.SPECIAL, icon: <Construction className="w-6 h-6" /> },
    { type: VehicleType.PASSENGER, icon: <Car className="w-6 h-6" /> },
    { type: VehicleType.MUNICIPAL, icon: <Building2 className="w-6 h-6" /> },
  ];

  return (
    <section id="calculator" className="py-24 bg-brand-surface relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Рассчитайте экономию</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Узнайте, сколько ваш бизнес может сэкономить, внедрив систему мониторинга «Телематик».</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark p-8 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <div className="space-y-8">
              {/* Type Selection */}
              <div>
                <label className="block text-slate-300 mb-3 text-sm font-medium uppercase tracking-wider">Тип транспорта</label>
                <div className="grid grid-cols-2 gap-3">
                  {vehicles.map((v) => (
                    <button
                      key={v.type}
                      onClick={() => setState(prev => ({ ...prev, vehicleType: v.type }))}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 ${
                        state.vehicleType === v.type 
                        ? 'bg-brand-accent/10 border-brand-accent text-brand-accent' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      {v.icon}
                      <span className="mt-2 text-sm font-medium">{v.type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Count Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 text-sm font-medium uppercase tracking-wider">Количество единиц</label>
                  <span className="text-2xl font-bold text-white">{state.count}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={state.count} 
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1</span>
                  <span>100+</span>
                </div>
              </div>

              {/* Fuel Control Switch */}
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${state.fuelControl ? 'bg-brand-secondary/20 text-brand-secondary' : 'bg-slate-800 text-slate-500'}`}>
                    <CalcIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Контроль топлива</h4>
                    <p className="text-xs text-slate-400">Датчики уровня топлива (ДУТ)</p>
                  </div>
                </div>
                <button 
                  onClick={() => setState(prev => ({ ...prev, fuelControl: !prev.fuelControl }))}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${state.fuelControl ? 'bg-brand-secondary' : 'bg-slate-700'}`}
                >
                  <span className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${state.fuelControl ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 p-[1px]">
                <div className="bg-brand-dark rounded-2xl p-8 h-full flex flex-col justify-center">
                    <h3 className="text-xl text-slate-400 mb-8 font-medium">Результат внедрения (ежемесячно)</h3>
                    
                    <div className="space-y-8">
                        <div>
                            <div className="text-sm text-slate-500 mb-1">Ориентировочная стоимость обслуживания</div>
                            <div className="text-3xl font-bold text-white">
                                {result.cost.toLocaleString('ru-RU')} ₽ <span className="text-sm font-normal text-slate-500">/ мес</span>
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-slate-800">
                            <div className="text-sm text-brand-secondary mb-1 font-bold uppercase tracking-wide">Ваша чистая выгода</div>
                            <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-teal-400">
                                {result.savings.toLocaleString('ru-RU')} ₽
                            </div>
                            <p className="text-slate-400 text-sm mt-3">
                                *Расчет приблизительный. Реальная экономия зависит от текущего состояния автопарка и маршрутов.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Button className="w-full" size="lg">
                            Получить детальный расчет на WhatsApp
                        </Button>
                        <p className="text-center text-xs text-slate-500 mt-3">
                            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
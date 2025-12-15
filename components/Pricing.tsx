import React from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingProps {
  onOpenModal: () => void;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  isDark = false, 
  delay = 0,
  onAction 
}: { 
  title: string, 
  price: string, 
  description: string, 
  isDark?: boolean, 
  delay?: number,
  onAction: () => void 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className={`relative p-6 md:p-14 rounded-[2rem] md:rounded-[2.5rem] flex flex-col h-full group ${
      isDark 
        ? 'bg-dark text-white shadow-2xl shadow-terracotta/5 ring-1 ring-white/10' 
        : 'bg-white text-dark border border-dark/5 shadow-xl'
    } transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl`}
  >
    {isDark && (
      <div className="absolute top-6 right-0 transform translate-x-2 md:top-8">
         <div className="bg-terracotta text-white text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 uppercase tracking-widest rounded-l-full shadow-lg flex items-center gap-2">
           <Star size={12} fill="currentColor" /> Recommended
         </div>
      </div>
    )}
    
    <div className="mb-8 md:mb-12 relative">
      <h3 className={`text-xs md:text-sm font-bold mb-4 md:mb-6 uppercase tracking-[0.2em] border-b pb-4 inline-block ${isDark ? 'text-white/50 border-white/10' : 'text-dark/50 border-dark/10'}`}>
        {title}
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl md:text-7xl font-display font-black tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">{price}</span>
      </div>
    </div>

    <div className="mb-8 md:mb-14 flex-grow">
      <p className={`text-base md:text-lg font-medium leading-relaxed ${isDark ? 'text-white/80' : 'text-dark/80'}`}>
        {description}
      </p>
    </div>

    <button 
      onClick={onAction}
      className={`w-full py-4 md:py-6 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 group/btn transition-all duration-300 ${
        isDark 
          ? 'bg-white text-dark hover:bg-terracotta hover:text-white shadow-lg' 
          : 'bg-dark text-white hover:bg-terracotta shadow-lg hover:shadow-terracotta/30'
      }`}
    >
      <span>Выбрать</span>
      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <Section id="pricing" className="bg-sand/30">
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24">
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-8 text-dark tracking-tighter">
          Как можно <span className="text-terracotta underline decoration-4 decoration-terracotta/30 underline-offset-8">поработать</span>
        </h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto items-stretch">
        <PricingCard 
          title="Разведка"
          price="$35"
          description="Подойдёт, если есть конкретный вопрос или хочешь просто попробовать и понять, откликается ли тебе такой формат. Длительность — 60 минут."
          onAction={onOpenModal}
          delay={0}
        />

        <PricingCard 
          title="Трансформация"
          price="$150"
          description="Подойдёт, если хочешь не просто разобраться, а реально сдвинуться и закрепить изменения — пять встреч дают пространство, где можно копнуть глубже. Каждая сессия — 60 минут."
          isDark={true}
          onAction={onOpenModal}
          delay={0.2}
        />
      </div>

      <div className="mt-12 md:mt-24 text-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block p-1.5 md:p-2 pr-2 md:pr-6 rounded-[2rem] md:rounded-full bg-white border border-dark/5 shadow-xl shadow-dark/5 max-w-full"
        >
          <button 
            onClick={onOpenModal}
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 group w-full"
          >
             <span className="bg-dark text-white px-5 py-3 md:py-2.5 rounded-full text-sm font-bold uppercase w-full sm:w-auto tracking-wide group-hover:bg-terracotta transition-colors">Free</span>
             <span className="text-dark font-bold group-hover:text-terracotta transition-colors text-sm pb-2 md:pb-0 px-2 md:px-0 text-center">
               Познакомимся и поймём, есть ли смысл работать дальше
             </span>
             <ArrowRight size={16} className="hidden sm:block text-dark/30 group-hover:text-terracotta transition-colors" />
          </button>
        </motion.div>
      </div>
    </Section>
  );
};
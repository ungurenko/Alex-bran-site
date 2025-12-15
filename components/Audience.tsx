import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';

interface CardProps {
  index: number;
  title: string;
  desc: string;
  color: string;
  num: string;
  total: number;
}

const Card: React.FC<CardProps> = ({ index, title, desc, color, num }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const baseOffset = isMobile ? 60 : 100;
  const step = isMobile ? 12 : 20;
  const topOffset = baseOffset + index * step;
  
  return (
    <div 
      className={`sticky mb-4 md:mb-8 transition-all duration-300`}
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      <div 
        className={`relative flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[-5px_-5px_15px_2px_rgba(0,0,0,0.03),5px_5px_15px_2px_rgba(0,0,0,0.05)] md:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.05),10px_10px_30px_4px_rgba(0,0,0,0.1)] min-h-[auto] md:min-h-[420px] items-center justify-between border border-dark/5 overflow-hidden group transition-transform duration-500 md:hover:scale-[1.02]`}
        style={{ backgroundColor: color }}
      >
        <span className="absolute -bottom-4 -left-2 md:-bottom-12 md:-left-12 text-[6rem] md:text-[18rem] font-black text-dark/5 select-none pointer-events-none group-hover:text-dark/10 transition-colors leading-none tracking-tighter">
          {num}
        </span>

        <div className="md:w-1/2 relative z-10 w-full">
          <div className="flex items-center gap-4 mb-4 md:mb-8">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-dark/20 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/50 backdrop-blur-sm">
              Ситуация {num}
            </span>
            <span className="h-px w-8 md:w-12 bg-dark/20"></span>
          </div>
          
          <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-6 leading-[1.1] md:leading-[1.05] text-dark tracking-tight">
            {title}
          </h3>
        </div>
        <div className="md:w-1/2 md:pl-16 md:border-l border-dark/10 pt-2 md:pt-0 relative z-10 w-full flex items-center">
          <p className="text-base md:text-2xl text-dark/70 font-medium leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Audience: React.FC = () => {
  const items = [
    {
      num: "01",
      title: "Много идей, ноль решений",
      desc: "Хочешь расти, но не можешь выбрать, куда именно — идей много, а решения ни одного, и чем дольше думаешь, тем больше каша в голове.",
      color: "#FFFFFF"
    },
    {
      num: "02",
      title: "Жизнь в напряжении",
      desc: "Зарабатываешь, но живёшь в постоянном напряжении: дедлайны, тревога, сравнение с теми, у кого «всё получается», и ты уже устал от этого режима.",
      color: "#F6F5F2"
    },
    {
      num: "03",
      title: "Страх перед масштабом",
      desc: "Понимаешь, что способен на большее, но каждый раз что-то останавливает — страх ошибиться, внутренний критик или привычка откладывать на потом.",
      color: "#ECE9E4"
    }
  ];

  return (
    <Section id="audience" className="bg-sand/20 pb-20 md:pb-40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-32 text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-dark mb-4 md:mb-8 tracking-tighter">
            Скорее всего, ты здесь, <br className="hidden md:block" />
            <span className="text-terracotta relative inline-block">
              потому что
              <svg className="absolute w-full h-2 md:h-4 -bottom-1 left-0 text-terracotta" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="relative flex flex-col">
          {items.map((item, i) => (
            <Card key={i} index={i} {...item} total={items.length} />
          ))}
        </div>
      </div>
    </Section>
  );
};
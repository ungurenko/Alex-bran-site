import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const TextReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap overflow-hidden align-bottom mr-[0.25em] pb-[0.2em] -mb-[0.2em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Parallax effects
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 200]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, -150]), springConfig);
  const imageScale = useSpring(useTransform(scrollY, [0, 1000], [1, 1.1]), springConfig);

  return (
    <section className="relative min-h-[100svh] pt-28 md:pt-32 pb-20 px-4 md:px-12 flex flex-col justify-center bg-cream bg-noise overflow-hidden">
      
      {/* Abstract Background Shapes - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="hidden md:block absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-dark/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="max-w-[1500px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-10 lg:gap-12 items-center mb-16 lg:mb-0">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 md:mb-12"
          >
            <div className="h-[2px] w-8 md:w-12 bg-terracotta"></div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-dark/60">Коучинг для экспертов</span>
          </motion.div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl xl:text-[5.5rem] leading-[1.05] md:leading-[1.0] tracking-tighter text-dark uppercase mb-8 md:mb-12 flex flex-col items-start">
            <TextReveal text="Хватит выбирать" delay={0.1} />
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6">
               <TextReveal text="Между всем" delay={0.2} />
               <TextReveal text="Сразу —" delay={0.25} className="text-terracotta" />
            </div>
             <TextReveal text="Пора определиться" delay={0.3} />
             <div className="flex items-center gap-4">
                 <TextReveal text="И пойти" delay={0.4} className="text-terracotta" />
             </div>
          </h1>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start mt-4 md:mt-6">
             <motion.button 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 20 }}
              onClick={onOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-terracotta text-white h-20 w-20 md:h-36 md:w-36 rounded-full flex items-center justify-center shrink-0 cursor-hover shadow-[0_20px_40px_-10px_rgba(235,94,40,0.4)] will-change-transform z-30"
            >
              <span className="absolute text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-300">START</span>
              <ArrowDownRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 group-hover:opacity-100 absolute transition-all duration-300 group-hover:-rotate-45 text-white" />
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-md pt-2 text-center sm:text-left"
            >
              <p className="text-base md:text-xl text-dark/70 font-medium leading-relaxed mb-4">
                Коучинг для тех, кто давно перерос свой уровень, но почему-то топчется на месте.
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-dark/40">
                30 минут — разберёмся, что на самом деле буксует
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 relative h-[350px] md:h-[600px] lg:h-[800px] w-full flex items-center justify-center mt-8 lg:mt-0">
           {/* Background Shape */}
           <motion.div 
              style={{ y: y2 }} 
              className="absolute top-10 right-0 lg:right-10 w-3/4 h-3/4 bg-sand/80 border border-dark/5 rounded-t-[80px] md:rounded-t-[120px] -z-10 will-change-transform hidden md:block"
           />
           
           {/* Main Image Container */}
           <motion.div 
             style={{ y: y1, scale: imageScale }}
             initial={{ clipPath: 'inset(100% 0 0 0)' }}
             animate={{ clipPath: 'inset(0 0 0 0)' }}
             transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
             className="relative w-full h-full max-h-[500px] md:max-h-[700px] rounded-t-[60px] md:rounded-t-[200px] rounded-b-[30px] md:rounded-b-[60px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] will-change-transform"
           >
             <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent z-10 mix-blend-multiply"></div>
             <img 
               src="https://i.imgur.com/lu47nrh.jpeg" 
               alt="Alexey Bran Expert Coach" 
               loading="eager"
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
             />
             
             {/* Floating badge */}
             <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-20 bg-white/20 backdrop-blur-xl border border-white/30 p-3 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 max-w-[180px] md:max-w-[240px] shadow-lg">
               <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-terracotta flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-inner shrink-0">5+</div>
               <span className="text-white text-[10px] md:text-xs font-bold leading-tight tracking-wide">Лет опыта</span>
             </div>
           </motion.div>
        </div>

      </div>
      
      {/* Infinite Marquee */}
      <div className="absolute bottom-0 left-0 w-full py-3 md:py-4 bg-terracotta text-white overflow-hidden border-t border-dark/10 z-20">
        <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-12 font-display font-black text-xl md:text-3xl opacity-90 uppercase tracking-widest will-change-transform items-center">
           <span>Определись</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Действуй</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Результат</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Ясность</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Определись</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Действуй</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Результат</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
           <span>Ясность</span> <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span> 
        </div>
      </div>
    </section>
  );
};
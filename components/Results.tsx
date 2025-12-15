import React from 'react';
import { Section } from './ui/Section';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Compass, Target, Battery } from 'lucide-react';
import { clsx } from 'clsx';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", spotlightColor = "rgba(235, 94, 40, 0.15)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-10 hidden md:block"
        style={{
          opacity,
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};

export const Results: React.FC = () => {
  return (
    <Section id="results" className="bg-cream/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-end">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-dark leading-[0.9]">
            После работы <br/><span className="text-terracotta italic font-serif">со мной</span>
          </h2>
          <p className="text-dark/60 text-lg md:text-xl font-medium max-w-md pb-4 border-l-2 border-terracotta pl-6 md:pl-8 mb-2">
            Не абстрактное «счастье», а конкретные, измеримые изменения в твоем подходе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Card 1 */}
          <SpotlightCard className="bg-dark text-white group cursor-default min-h-[300px] border border-white/5">
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
            <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden gap-6">
               <div className="hidden md:block absolute top-0 right-0 w-[200px] h-[200px] bg-terracotta/20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-terracotta mb-4 backdrop-blur-md border border-white/10 group-hover:bg-terracotta group-hover:text-white transition-colors duration-500 shadow-lg">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">Выбор пути</h3>
                <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                  Ты наконец выберешь, куда идёшь — не потому что я скажу «иди туда», а потому что сам разберёшься, чего хочешь.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2 */}
          <SpotlightCard className="bg-white group min-h-[300px] border border-dark/5">
             <div className="p-8 h-full flex flex-col justify-between gap-6">
               <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-dark mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Target size={32} strokeWidth={1.5} />
               </div>
               <div>
                 <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-dark">План</h3>
                 <p className="text-dark/60 text-lg leading-relaxed">
                   Перестанешь бояться ошибиться и бесконечно всё взвешивать, потому что появится план на ближайшие месяцы, который ты сам и составишь.
                 </p>
               </div>
             </div>
          </SpotlightCard>

          {/* Card 3 */}
          <SpotlightCard spotlightColor="rgba(235, 94, 40, 0.3)" className="bg-terracotta text-white min-h-[300px] border border-transparent shadow-xl shadow-terracotta/20">
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="p-8 h-full flex flex-col justify-between relative z-10 gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4 backdrop-blur-md border border-white/10 shadow-lg">
                  <Battery size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">Действие</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  И начнёшь делать — спокойно, последовательно, без геройства и откатов в исходную точку.
                </p>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </Section>
  );
};
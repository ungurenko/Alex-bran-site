import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section className="py-24 md:py-40 px-5 md:px-12 bg-charcoal text-white overflow-hidden relative isolate min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-terracotta rounded-full blur-[120px] md:blur-[250px] -z-10 opacity-30 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] leading-[0.95] mb-8 md:mb-12 tracking-tighter mix-blend-lighten uppercase">
            Можно ещё полгода думать, а можно <span className="text-terracotta inline-block hover:scale-105 transition-transform duration-500 cursor-default">поговорить.</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed px-4">
             Понять, в чём дело, и сдвинуться с места.
          </p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        >
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-6 bg-white text-dark px-12 md:px-20 py-8 md:py-12 rounded-full text-xl md:text-3xl font-black shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_100px_-20px_rgba(235,94,40,0.6)] hover:scale-105 transition-all duration-500 overflow-hidden w-full sm:w-auto hover:bg-terracotta hover:text-white cursor-hover"
          >
             <span className="relative z-10 transition-colors">Записаться на встречу</span>
             <ArrowDownRight className="relative z-10 transition-colors group-hover:-rotate-45 duration-500 hidden sm:block" size={40} strokeWidth={3} />
          </button>
          
          <p className="mt-10 md:mt-14 text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            30 минут, и если не подойдёт — так и скажу
          </p>
        </motion.div>
      </div>
    </section>
  );
};
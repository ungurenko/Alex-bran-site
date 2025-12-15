import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Sparkles, Brain, ShieldCheck } from 'lucide-react';

export const Method: React.FC = () => {
  return (
    <Section className="bg-[#050505] text-cream relative overflow-hidden py-24 md:py-40">
      {/* Lamp Effect Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-terracotta rounded-full blur-[120px] md:blur-[250px] opacity-15 pointer-events-none"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-terracotta to-transparent opacity-30"></div>
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative group"
            >
               <div className="absolute -inset-1 bg-gradient-to-tr from-terracotta/20 to-transparent rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                 <img 
                   src="https://i.imgur.com/vckBDGB.jpeg" 
                   alt="Method Atmosphere" 
                   className="relative z-10 grayscale contrast-125 brightness-75 w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-20"></div>
               </div>
               
               {/* Floating quote card */}
               <motion.div 
                 initial={{ y: 40, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="absolute -bottom-8 md:-bottom-12 -right-4 md:-right-8 bg-[#151515]/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl max-w-[280px] md:max-w-sm z-30"
               >
                 <Sparkles className="text-terracotta mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />
                 <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed italic">"Сила не в том, чтобы давить, а в том, чтобы убрать лишнее."</p>
               </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 md:space-y-16 order-1 lg:order-2">
            <div>
              <span className="text-terracotta font-bold tracking-[0.2em] uppercase text-xs mb-4 md:mb-6 block flex items-center gap-3">
                <span className="w-8 h-px bg-terracotta"></span>
                Мой подход
              </span>
              <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-[0.95] tracking-tight">
                Не гуру. <br/>
                <span className="text-white/30">Не учитель жизни.</span>
              </h2>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-6 md:gap-8 group cursor-default">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white transition-all duration-300 shadow-lg">
                  <Brain size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white group-hover:text-terracotta transition-colors">Точные вопросы</h4>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg group-hover:text-white/80 transition-colors">
                    Я задаю вопросы, хорошие и точные, которые помогают тебе самому увидеть, что происходит. Я не лезу с советами, не давлю и не делаю вид, что знаю твою жизнь лучше тебя.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8 group cursor-default">
                 <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white transition-all duration-300 shadow-lg">
                  <ShieldCheck size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white group-hover:text-terracotta transition-colors">Твои решения</h4>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg group-hover:text-white/80 transition-colors">
                    Моя работа — помочь тебе вернуть ясность, а решения ты принимаешь сам, потому что только так они и держатся.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
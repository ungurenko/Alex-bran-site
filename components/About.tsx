import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3">
              <span className="inline-block px-3 py-1 border border-dark rounded-full text-xs font-bold uppercase tracking-widest mb-6">Reality Check</span>
            </div>
            <div className="md:w-2/3">
              <h2 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-dark -tracking-wide mb-12">
                Знаний у тебя достаточно, <br/>
                <span className="text-terracotta">курсов тоже.</span>
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start border-t border-dark/10 pt-16 mt-8">
            <div className="relative pl-8 border-l-2 border-dark">
              <p className="text-xl md:text-2xl text-dark font-medium leading-tight mb-8">
                Ты не глупый и разбираешься в том, что делаешь, но почему-то вместо движения — бесконечные сомнения, анализ и ощущение, что сам себе мешаешь.
              </p>
              <p className="text-lg text-dark/70 font-medium">
                Я не буду давать тебе советы, как жить, и мотивировать на подвиги тоже не буду, потому что это не работает дольше двух дней.
              </p>
            </div>
            
            <div className="relative bg-cream p-8 rounded-3xl">
               <p className="text-lg md:text-xl text-dark leading-relaxed font-medium">
                Я помогаю честно посмотреть на то, что происходит, понять, где застрял, и сдвинуться — уже своими силами.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from './ui/Section';

export const Bio: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-12 gap-12 items-center">
         <div className="md:col-span-5 order-2 md:order-1">
           <img 
             src="https://i.imgur.com/kgAikib.jpeg" 
             alt="Алексей Бран" 
             className="w-full h-auto rounded-2xl shadow-xl object-cover"
           />
         </div>
         <div className="md:col-span-7 order-1 md:order-2">
           <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
             Кто я
           </h2>
           <div className="space-y-6 text-lg text-dark/80">
             <p className="font-medium text-xl">
               Меня зовут Алексей Бран, и я работаю с людьми, которые вроде бы всё умеют — зарабатывать, создавать, разбираться в своём деле — но почему-то буксуют.
             </p>
             <p>
               Обычно проблема не в навыках, обычно что-то внутри тормозит, и я помогаю это «что-то» найти и разобрать — через разговор, вопросы и спокойный взгляд со стороны.
             </p>
             <p>
               Я не учу жить и не даю готовых решений, а просто помогаю тебе вернуть контакт с собственной головой.
             </p>
             <div className="pt-4">
                <img src="https://picsum.photos/200/80?grayscale&blur=2" alt="Signature" className="h-16 opacity-50" />
             </div>
           </div>
         </div>
      </div>
    </Section>
  );
};
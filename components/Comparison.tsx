import React from 'react';
import { Section } from './ui/Section';

export const Comparison: React.FC = () => {
  return (
    <Section className="bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-12">
          Почему это, а не очередной курс
        </h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-sand overflow-hidden p-8 md:p-12 space-y-8">
           <div className="prose prose-lg max-w-none text-dark/80">
              <p className="mb-6">
                <span className="font-bold text-terracotta">Ты уже знаешь достаточно.</span> Проблема не в нехватке информации. Ещё один курс или книга не сдвинут тебя с места, потому что затык — внутри.
              </p>
              
              <div className="pl-6 border-l-4 border-terracotta/20 my-8 py-2">
                <p className="italic text-xl">
                  Коучинг — это не про советы. Я не буду говорить тебе, что делать. Ты взрослый человек и сам способен принимать решения — просто сейчас этот механизм сбоит. Моя задача — починить.
                </p>
              </div>

              <p>
                Результат зависит от тебя, но я создаю условия. Это не магия и не волшебная таблетка. Это работа. Но работа, которая даёт изменения, потому что мы работаем с причиной, а не следствием.
              </p>
           </div>
        </div>
      </div>
    </Section>
  );
};
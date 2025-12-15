import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqItem } from '../types';

const items: FaqItem[] = [
  {
    question: "Коучинг — это когда тебя мотивируют и говорят, что ты молодец?",
    answer: "Нет, я не буду тебя хвалить просто так и вдохновлять на подвиги — я помогаю разобраться, что реально мешает, и иногда это неприятно, но зато честно."
  },
  {
    question: "Я уже ходил к коучу, психологу или наставнику — не особо помогло",
    answer: "Бывает, что не совпадает формат или человек, поэтому на бесплатной встрече ты поймёшь, откликается тебе мой подход или нет — без обязательств."
  },
  {
    question: "Может, мне просто нужно больше дисциплины, а не коуч?",
    answer: "Может быть, но если «просто взять и сделать» не работает уже давно, то скорее всего дело не в дисциплине."
  },
  {
    question: "Одной сессии хватит?",
    answer: "Зависит от запроса — иногда хватает, чтобы сдвинуться, но для устойчивых изменений лучше работать пакетом."
  },
  {
    question: "Что будет на бесплатной встрече?",
    answer: "Просто поговорим: ты расскажешь, что происходит, я скажу, вижу ли, чем могу помочь, и никаких обязательств — это разговор, а не продажа."
  }
];

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-sand last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
    >
      <span className={`font-display font-bold text-lg md:text-xl transition-colors pr-8 ${isOpen ? 'text-terracotta' : 'text-dark group-hover:text-terracotta/70'}`}>
        {item.question}
      </span>
      <span className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? <Minus className="text-terracotta" /> : <Plus className="text-dark/40" />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-dark/70 leading-relaxed max-w-2xl">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream">
      <h2 className="font-display font-bold text-4xl mb-12 text-center">Возможно, ты сейчас думаешь</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-sand">
        {items.map((item, i) => (
          <AccordionItem 
            key={i} 
            item={item} 
            isOpen={openIndex === i} 
            onClick={() => setOpenIndex(openIndex === i ? null : i)} 
          />
        ))}
      </div>
    </Section>
  );
};
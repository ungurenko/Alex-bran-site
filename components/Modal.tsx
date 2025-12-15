import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 p-3 md:p-2 text-dark/40 hover:text-dark hover:bg-gray-100 rounded-full transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="p-6 md:p-10 overflow-y-auto">
          {step === 'form' ? (
            <>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 text-dark pr-8">
                Запись на встречу
              </h3>
              <p className="text-dark/60 mb-6 md:mb-8 text-sm md:text-base">
                Оставь контакты, я свяжусь с тобой в Telegram, чтобы выбрать время.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Как тебя зовут?</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all text-base"
                    placeholder="Иван"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Ник в Telegram</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all text-base"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">О чем хочешь поговорить? (Кратко)</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all resize-none text-base"
                    placeholder="Уперся в потолок, не могу начать..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-terracotta text-white font-bold py-4 rounded-xl hover:bg-terracotta-dark transition-colors flex items-center justify-center gap-2 mt-4 text-base md:text-lg"
                >
                  <span>Отправить</span>
                  <Send size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Заявка отправлена!</h3>
              <p className="text-dark/60 mb-8">
                Спасибо. Я напишу тебе в Telegram в течение 24 часов.
              </p>
              <button 
                onClick={onClose}
                className="bg-gray-100 text-dark font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
        
        {/* Decorative bottom bar */}
        <div className="h-2 bg-terracotta w-full shrink-0"></div>
      </motion.div>
    </div>
  );
};
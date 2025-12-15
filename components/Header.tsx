import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Empty string restores default
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Суть', href: '#about' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Результаты', href: '#results' },
    { label: 'Тарифы', href: '#pricing' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled && !isMobileMenuOpen
            ? 'bg-cream/80 backdrop-blur-xl backdrop-saturate-150 border-b border-dark/5 py-4' 
            : 'bg-transparent border-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 flex items-center justify-between">
          <a href="#" className="font-display font-black text-2xl tracking-tighter text-dark z-[110] relative group mix-blend-difference text-white md:mix-blend-normal md:text-dark">
            ALEXEY<span className="text-terracotta transition-all duration-300 group-hover:text-terracotta-dark">BRAN</span>.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-xs lg:text-sm font-bold uppercase tracking-widest text-dark/60 hover:text-dark transition-colors relative group cursor-hover"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="bg-dark text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-terracotta transition-colors shadow-xl shadow-dark/10 hover:shadow-terracotta/20 cursor-hover"
            >
              Записаться
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-[110] text-dark mix-blend-difference text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-dark z-[95] flex flex-col items-center justify-center gap-6 md:hidden text-cream"
          >
             <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.href} 
                initial={{ opacity: 0, y: 40, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-5xl font-black tracking-tight hover:text-terracotta transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal();
              }}
              className="mt-8 bg-terracotta text-white text-lg px-12 py-5 rounded-full font-bold shadow-2xl shadow-terracotta/30 active:scale-95 transition-transform"
            >
              Начать работу
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
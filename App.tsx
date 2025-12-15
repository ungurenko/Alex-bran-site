import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Results } from './components/Results';
import { Audience } from './components/Audience';
import { Method } from './components/Method';
import { Pricing } from './components/Pricing';
import { Bio } from './components/Bio';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-cream selection:bg-terracotta selection:text-white overflow-x-hidden">
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <About />
        <Audience />
        <Results />
        <Method />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <Bio />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer />

      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
}
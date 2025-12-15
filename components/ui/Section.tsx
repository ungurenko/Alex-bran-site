import React from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={clsx("py-16 md:py-32 px-4 md:px-12 w-full relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
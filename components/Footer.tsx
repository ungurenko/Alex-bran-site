import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white/40 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {new Date().getFullYear()} Алексей Бран. Все права защищены.
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};
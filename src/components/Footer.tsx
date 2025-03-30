import React from 'react';
// Instalar npm install react-icons

const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-8 bg-terceira text-white">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="relative z-10 pb-8">
            <img
              src="/assets/Logo/logo-sem-fundo-dois.png"
              alt="Logo"
              className="w-64"
            />
          </div>
        </div>

        <ul className="hidden md:flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#services">Services</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#about-page">About</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">Instagram</a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="py-6 text-sm text-center text-white border-t border-[#d7a647]">© 2025 Andrad's. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

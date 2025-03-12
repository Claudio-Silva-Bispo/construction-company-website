import React from 'react';
import Image from 'next/image';
// Instalar npm install react-icons
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footercontent" className="bg-white text-white">
      <div className="container p-5">
        <div className="grid md:flex md:flex-row justify-between">
          
          <div className="flex items-center pt-10 mb-5">
            <Image width={100} height={100} src="/assets/Logo/logo.png" alt="Logo da empresa" className="h-20 w-20" />
          </div>

          <div className="grid m:grid-cols-3 sm:flex justify-center items-center gap-3 mb-10">
            <button className="text-gray-700 hover:text-gray-400 text-start">Termos de Uso</button>
            <button className="text-gray-700 hover:text-gray-400 text-start"><a href="/Documetation">Documentação</a></button>
            <button className="text-gray-700 hover:text-gray-400 text-start"><a href="/AboutCompany">About</a></button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          
          <div className="text-sm mb-5 sm:mb-0 text-gray-400">
            © Copyright 2024. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/CacauShow" target="_blank" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53] focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaFacebookF className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="https://www.instagram.com/cacaulovers" target="_blank" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53] focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaInstagram className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="mailto:contato@cacaushow.com.br" title="Email" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53]focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaEnvelope className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="Telefone" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53] focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaPhone className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="WhatsApp" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53] focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaWhatsapp className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="SMS" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#9b4819] hover:bg-gray-50 text-gray-50 hover:text-[#bd8f53] focus:ring hover:ring focus:ring-opacity-75 focus:ring-[#bd8f53] hover:ring-[#bd8f53]">
              <FaSms className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

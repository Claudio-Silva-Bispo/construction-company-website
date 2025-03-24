import React from 'react';
import Image from 'next/image';
// Instalar npm install react-icons
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footercontent" className="bg-white text-white">
      <div className="container p-5">

        <div className="text-sm mb-5 sm:mb-0 text-gray-400 text-center">
          © Copyright 2024. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

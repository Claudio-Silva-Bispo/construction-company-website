import { faBars, faBuilding, faCalendarAlt, faCalendarTimes, faChevronDown, faGlobe, faHome, faPhone, faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
// Instalar npm install primeicons
// Desinstalar npm uninstall primeicons
//import 'primeicons/primeicons.css';
import Link from 'next/link';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'Sobre nós', path: '#about-page', icon: faBuilding },
    { item: 'Contato', path: '#contact', icon: faPhone },
    { item: 'Serviços', path: '#services', icon: faCalendarTimes },
    { item: 'Feedback', path: '#receber-feedback', icon: faThumbsUp },
    { item: 'Dicas', path: '#tips', icon: faShareAlt },
    { item: 'Galeria', path: '/Gallery', icon: faGlobe },
  ];

  const sections = [

    {
      title: 'Sobre nós',
      icon: faBuilding,
      description: 'Aprenda mais sobre nós',
      path: '/AboutCompany',
    },
    {
      title: 'Contato',
      icon: faPhone,
      description: 'Get in touch with us',
      path: '/ContactSection',
    },
    {
      title: 'Feedback',
      icon: faThumbsUp,
      description: 'O que nossos clientes andam falando',
      path: '/Testimonials',
    },
    {
      title: 'Galeria Personalizada',
      icon: faGlobe,
      description: 'Fotos dos principais serviços',
      path: '/Gallery',
    },
  ];

  // Rotas 

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        // Se estiver na home, rolar para a seção
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso contrário, navega para a home e rola para a seção
        router.push(`/`).then(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      router.push(hash);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 fixed top-0 w-full z-50 text-gray-700 max-w-[1280px]">
      <div className="container flex justify-between h-10 mx-auto w-full">
        <div className="hidden md:flex md:h-10 md:w-40">
          <a href="/"><Image width={40} height={40} src={""} alt="Logo da empresa" /></a>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-lg">
          <Link href="/" className="px-4 py-2 hover:bg-terceira hover:text-white rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link href="#quote" className="px-4 py-2 hover:bg-terceira hover:text-white rounded-md flex items-center space-x-2" onClick={() => handleHashLinkClick('#FormQuote')}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Orçamento</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button onClick={handleDropdownToggle} className="px-4 py-2 hover:bg-terceira hover:text-white rounded-md flex items-center space-x-2">
              <span>Seções</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <Link key={section.title} href={section.path} className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md" onClick={() => handleHashLinkClick(section.path)}>
                      <div className="bg-gray-200 p-2 rounded-md w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-sm text-gray-600">{section.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
        <div className="hidden lg:flex items-center">
          <a href="tel:+5511999999999" className="px-4 py-2 bg-terceira hover:text-white text-white rounded-md">Contato +(206) 9999-8888</a>
        </div>
        <button onClick={toggleMobileMenu} className="ml-auto lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-terceira z-40 flex flex-col lg:hidden text-white">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='text-white' />
            </svg>
          </button>

          <ul className="flex flex-col items-start space-y-4 px-3">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full border-b border-white last:border-none">
                <Link href={menuItem.path} className="text-lg text-white flex items-center space-x-3 py-3" onClick={() => { handleHashLinkClick(menuItem.path); toggleMobileMenu(); }}>
                  <FontAwesomeIcon icon={menuItem.icon} />
                  <span>{menuItem.item}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-5 w-full m:flex m:justify-center hidden">
            <Image width={100} height={100} src={""} alt="Logo da empresa" className="w-44 h-auto hidden" />
          </div>
        </div>
      )}
    </header>
  );
}

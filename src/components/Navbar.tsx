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
  const heroRef = useRef<HTMLElement | null>(null);

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'About Us', path: '#about-page', icon: faBuilding },
    { item: 'Contact', path: '#contact', icon: faPhone },
    { item: 'Services', path: '#services', icon: faCalendarTimes },
    { item: 'Feedback', path: '#feedback', icon: faThumbsUp },
    // { item: 'Gallery', path: '/Gallery', icon: faGlobe },
  ];

  const sections = [
    {
      title: 'Sobre nós',
      icon: faBuilding,
      description: 'About our company',
      path: '#about-page',
    },
    {
      title: 'Contato',
      icon: faPhone,
      description: 'Get in touch with us',
      path: '#contact',
    },
    {
      title: 'Services',
      icon: faGlobe,
      description: 'Services we offer',
      path: '#services',
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

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    heroRef.current = heroSection;

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.3 } // Visível em pelo menos 30% da tela
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="p-4 fixed top-0 w-full z-50 text-gray-700 max-w-[1240px]">
      <div className="container flex justify-between h-10 mx-auto w-full">
        <div className="hidden md:flex md:h-10 md:w-40">
          <a href="/"><Image width={200} height={40} src={"/assets/Logo/logo-sem-fundo-dois.png"} alt="Logo da empresa" /></a>
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
              <div className="absolute left-[-50px] transform -translate-x-1/2 mt-2 w-[80vw] xl:w-[60vw] bg-white shadow-lg rounded-md z-50">
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
          <a href="tel:+14259719002" className="px-4 py-2 bg-terceira hover:text-white text-white rounded-md">Contato +(425) 971-9002</a>
        </div>
          <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`ml-auto lg:hidden p-4 ${isHeroVisible ? 'text-white' : 'text-gray-800'}`}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-terceira z-40 flex flex-col lg:hidden text-white max-h-[100vh]">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 p-5">
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

          <div className="flex flex-col items-center md:items-center max-w-2xl">
            
            <div>
              <img
                src="/assets/Logo/logo-sem-fundo-dois.png"
                alt="Logo"
                className="w-64"
              />
            </div>

            <div className="flex flex-col justify-center text-center leading-none">
              <h1 className="text-white text-4xl font-titulo drop-shadow-lg">
                Andrad's
              </h1>
              <p className="text-white text-lg md:text-lg lg:text-xl drop-shadow font-titulo font-light uppercase tracking-wide pl-6">
                Power & Build Solutions
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const Services = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      id: "construction",
      number: "1",
      title: "Residential and Commercial Construction",
      description: "Complete construction solutions for homes and businesses in Seattle, built to the highest quality standards.",
      image: ['/assets/Service/residencial-comercial/imagem-um.jpg', '/assets/Service/residencial-comercial/imagem2.jpg', '/assets/Service/residencial-comercial/imagem3.jpg'],
      color: "#d7a647",
      // Cores para texto em mobile
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "renovation",
      number: "2",
      title: "Property Renovation",
      description: "Transform your Seattle property with our comprehensive renovation services for both indoor and outdoor spaces.",
      image: ['/assets/Service/renovacao-residencial/imagem1.jpg', '/assets/Service/renovacao-residencial/imagem2.jpg', '/assets/Service/renovacao-residencial/imagem3.jpg'],
      color: "#fae9bd",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "repair",
      number: "3",
      title: "Structural Repairs",
      description: "Specialized repair services for damage caused by Seattle's unique climate, including moisture damage and seismic adaptations.",
      image: ['/assets/Service/reparo-estrutural/imagem1.jpg', '/assets/Service/reparo-estrutural/imagem2.jpg', '/assets/Service/reparo-estrutural/imagem3.jpg'],
      color: "#FEF4EB",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "maintenance",
      number: "4",
      title: "Preventive Maintenance",
      description: "Regular maintenance programs to protect your real estate investment in Seattle and prevent costly repairs in the future.",
      image: ['/assets/Service/manutencao/imagem1.jpg', '/assets/Service/manutencao/imagem2.jpg', '/assets/Service/manutencao/imagem3.jpg'],
      color: "#0C1D37",
      titleColor: "#fff",
      keywordColor: "#fff",
      descriptionColor: "#fff"
    },
    {
      id: "floor",
      number: "5",
      title: "Floor Installation and Repair",
      description: "Comprehensive floor installation, repair, and maintenance services for all types of surfaces, including wood, laminate, ceramic, and natural stone.",
      image: ['/assets/Service/piso/imagem1.jpg', '/assets/Service/piso/imagem2.jpg', '/assets/Service/piso/imagem3.jpg'],
      color: "#E8F6FA",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "painting",
      number: "6",
      title: "Interior and Exterior Painting",
      description: "Professional painting services for interiors and exteriors, using high-quality products that withstand Seattle's humid climate.",
      image: ['/assets/Service/pinturas/imagem1.jpg', '/assets/Service/pinturas/imagem2.jpg', '/assets/Service/pinturas/imagem3.jpg'],
      color: "#E6E6FA",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "pressure",
      number: "7",
      title: "Pressure Washing",
      description: "Deep cleaning of exterior surfaces such as sidewalks, decks, façades, and roofs to remove mold, mildew, and accumulated dirt.",
      image: ['/assets/Service/lavagem/imagem1.jpg', '/assets/Service/lavagem/imagem2.jpg', '/assets/Service/lavagem/imagem3.jpg'],
      color: "#F0FFF0",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    },
    {
      id: "demolition",
      number: "8",
      title: "Demolition and Debris Removal",
      description: "Safe demolition services and efficient removal of debris and unwanted materials, with sustainable disposal practices.",
      image: ['/assets/Service/demolicao/imagem1.jpg', '/assets/Service/demolicao/imagem2.jpg', '/assets/Service/demolicao/imagem3.jpg'],
      color: "#fff",
      titleColor: "#1a1a1a",
      descriptionColor: "#2d2d2d",
      keywordColor: "#1a1a1a"
    }
  ];


  // Bolinhas dos cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: any) => {
    setCurrentSlide(index);
  };

  // Estado atual da etapa ativa
  const [activeStep, setActiveStep] = useState(steps[0].id);
  const sectionRef = useRef(null);

  // Função para obter a cor da etapa ativa
  const getActiveColor = () => {
    const step = steps.find(s => s.id === activeStep);
    return step ? step.color : steps[0].color;
  };

  // Função para obter o step atual completo
  const getActiveStep = () => {
    return steps.find(s => s.id === activeStep) || steps[0];
  };

  useEffect(() => {
    const stepElements = document.querySelectorAll('.step-container');
    const stepOffsets = Array.from(stepElements).map(el => ({
      id: el.getAttribute('data-step'),
      offset: el.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.3
    }));

    // Função para atualizar a cor de fundo com base na posição de rolagem
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      // Encontrar a etapa atual com base na posição de rolagem
      let currentStep = stepOffsets[0].id;

      for (let i = 0; i < stepOffsets.length; i++) {
        if (scrollPosition >= stepOffsets[i].offset) {
          currentStep = stepOffsets[i].id;
        }
      }

      setActiveStep(currentStep || steps[0].id);
    };

    // Adicionar o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Chamar uma vez para definir a cor inicial
    handleScroll();

    // Limpar o evento ao desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const currentStep = getActiveStep();

  return (
    <>
      <Head>
        <title>Construction Services in Seattle | Andrad PBS Solution</title>
        <meta 
          name="description" 
          content="Professional construction services in Seattle and surrounding areas. Residential and commercial construction, renovations, structural repairs, floor installation, painting, pressure washing, and demolition. Licensed and insured contractors." 
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="construction seattle, home construction, commercial construction, renovation seattle, structural repairs, floor installation, painting services, pressure washing, demolition services, seattle contractors, home improvement seattle, remodeling seattle"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Construction Services in Seattle | Andrad PBS Solution" />
        <meta property="og:description" content="Professional construction, renovation, and repair services in Seattle and surrounding areas" />
        <meta property="og:url" content="https://www.andradpbsolution.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.andradpbsolution.com/services" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Construction and Renovation Services",
              "provider": {
                "@type": "Organization",
                "name": "Andrad PBS Solution",
                "url": "https://www.andradpbsolution.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Seattle",
                "containedIn": {
                  "@type": "State",
                  "name": "Washington"
                }
              },
              "description": "Professional construction, renovation, and repair services for residential and commercial properties in Seattle and surrounding areas",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential and Commercial Construction",
                      "description": "Complete construction solutions for homes and businesses in Seattle, built to the highest quality standards"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Renovation",
                      "description": "Transform your Seattle property with comprehensive renovation services for indoor and outdoor spaces"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Structural Repairs",
                      "description": "Specialized repair services for damage caused by Seattle's unique climate, including moisture damage and seismic adaptations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Preventive Maintenance",
                      "description": "Regular maintenance programs to protect your real estate investment and prevent costly repairs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Floor Installation and Repair",
                      "description": "Comprehensive floor installation, repair, and maintenance services for wood, laminate, ceramic, and natural stone"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior and Exterior Painting",
                      "description": "Professional painting services using high-quality products that withstand Seattle's humid climate"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pressure Washing",
                      "description": "Deep cleaning of exterior surfaces including sidewalks, decks, façades, and roofs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Demolition and Debris Removal",
                      "description": "Safe demolition services and efficient debris removal with sustainable disposal practices"
                    }
                  }
                ]
              },
              "offers": {
                "@type": "AggregateOffer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>

      <div
        id="services"
        ref={sectionRef}
        className={`min-h-screen w-full overflow-x-hidden transition-all duration-800 ease-in-out`}
        style={{ backgroundColor: getActiveColor() }}
      >
        {/* Indicadores de etapas (à esquerda) */}
        <div className="hidden fixed left-5 top-1/2 transform -translate-y-1/2 xl:flex flex-col gap-5 z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`w-2.5 h-2.5 rounded-full ${activeStep === step.id ? "bg-black" : "bg-gray-400"} transition-all duration-300 ease-in-out`}
            />
          ))}
        </div>

        {/* Título da seção */}
        <div className="py-12 text-center">
          <h2 className="relative text-5xl md:text-6xl font-bold font-sans text-primeira">
            Services
            <span className="absolute left-[calc(50%-50px)] top-full w-[60px] h-[4px] bg-primeira"></span>
            <span className="absolute left-[calc(50%-40px)] top-[calc(100%+10px)] w-[80px] h-[4px] bg-primeira"></span>
          </h2>
        </div>

        {/* Conteúdo das etapas */}
        <div className="py-12 p-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="step-container"
              data-step={step.id}
              style={{ height: "100vh" }}
            >
              <div className="flex flex-col md:flex-row mx-auto gap-12 items-center">
                {/* Lado esquerdo (texto) */}
                <div className="max-w-xl flex flex-col">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mb-5 text-lg">
                      {step.number}
                    </div>
                    <h3
                      className="text-3xl md:text-6xl mb-2 md:mb-4 font-titulo font-bold"
                      style={{ 
                        color: step.titleColor,
                        textShadow: step.color === '#fff' || step.color === '#F0FFF0' || step.color === '#fae9bd' || step.color === '#E8F6FA' || step.color === '#E6E6FA' || step.color === '#FEF4EB'
                          ? 'none' 
                          : '1px 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <p
                      className="text-md md:text-xl leading-relaxed font-descritivo font-regular"
                      style={{ 
                        color: step.descriptionColor,
                        textShadow: step.color === '#fff' || step.color === '#F0FFF0' || step.color === '#fae9bd' || step.color === '#E8F6FA' || step.color === '#E6E6FA' || step.color === '#FEF4EB'
                          ? 'none' 
                          : '1px 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Lado direito (imagem) */}
                <div className="border border-gray-300 shadow-md rounded-lg bg-white flex flex-col items-center text-center h-[50vh] md:h-[70vh] w-full">
                  <div className="flex-1 flex justify-center items-center w-full h-full overflow-hidden p-1">
                    <img
                      src={step.image[currentSlide]}
                      alt={`${step.title} - Image ${currentSlide + 1}`}
                      className="w-full h-full object-fill"
                    />
                  </div>

                  {/* Indicadores de carrossel */}
                  <div className="flex justify-center space-x-2 mt-4 pb-5">
                    {Array(3)
                      .fill(0)
                      .map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleIndicatorClick(index)}
                          className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primeira' : 'bg-gray-300'
                            }`}
                        ></button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
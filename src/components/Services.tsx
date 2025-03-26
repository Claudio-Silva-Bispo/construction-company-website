import { useEffect, useRef, useState } from "react";

const Services = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      id: "construction",
      number: "1",
      title: "Construção Residencial e Comercial",
      description: "Soluções completas de construção para residências e empresas em Seattle, construídas com os mais altos padrões de qualidade.",
      image: ['/assets/Service/residencial-comercial/imagem-um.jpg', '/assets/Service/residencial-comercial/imagem2.jpg', '/assets/Service/residencial-comercial/imagem3.jpg'],
      color: "#F3FAEC" // Verde
    },
    {
      id: "renovation",
      number: "2",
      title: "Renovação de Propriedades",
      description: "Transforme sua propriedade em Seattle com nossos serviços abrangentes de renovação para espaços internos e externos.",
      image: ['/assets/Service/renovacao-residencial/imagem1.jpg', '/assets/Service/renovacao-residencial/imagem2.jpg', '/assets/Service/renovacao-residencial/imagem3.jpg'],
      color: "#E8F6FA" // Azul
    },
    {
      id: "repair",
      number: "3",
      title: "Reparos Estruturais",
      description: "Serviços especializados de reparo para danos causados pelo clima único de Seattle, incluindo danos por umidade e adaptações sísmicas.",
      image: ['/assets/Service/reparo-estrutural/imagem1.jpg', '/assets/Service/reparo-estrutural/imagem2.jpg', '/assets/Service/reparo-estrutural/imagem3.jpg'],
      color: "#FEF4EB" // Laranja
    },
    {
      id: "maintenance",
      number: "4",
      title: "Manutenção Preventiva",
      description: "Programas regulares de manutenção para proteger seu investimento imobiliário em Seattle e prevenir reparos custosos no futuro.",
      image: ['/assets/Service/manutencao/imagem1.jpg', '/assets/Service/manutencao/imagem2.jpg', '/assets/Service/manutencao/imagem3.jpg'],
      color: "#0C1D37", // Azul escuro
      titleColor: "#fff",
      keywordColor: "#fff",
      descriptionColor: "#fff"
    },
    {
      id: "floor",
      number: "5",
      title: "Instalação e Reparo de Pisos",
      description: "Serviços completos de instalação, reparo e manutenção de pisos para todos os tipos de superfícies, incluindo madeira, laminado, cerâmica e pedra natural.",
      image: ['/assets/Service/piso/imagem1.jpg', '/assets/Service/piso/imagem2.jpg', '/assets/Service/piso/imagem3.jpg'],
      color: "#F0F8FF" // Azul claro
    },
    {
      id: "electrical",
      number: "6",
      title: "Serviços Elétricos",
      description: "Instalação, reparo e manutenção de sistemas elétricos residenciais e comerciais, garantindo segurança e eficiência energética.",
      image: ['/assets/Service/eletrica/imagem1.jpg', '/assets/Service/eletrica/imagem2.jpg', '/assets/Service/eletrica/imagem3.jpg'],
      color: "#FFFACD" // Amarelo claro
    },
    {
      id: "painting",
      number: "7",
      title: "Pintura Interior e Exterior",
      description: "Serviços de pintura profissional para interiores e exteriores, usando produtos de alta qualidade que resistem ao clima úmido de Seattle.",
      image: ['/assets/Service/pinturas/imagem1.jpg', '/assets/Service/pinturas/imagem2.jpg', '/assets/Service/pinturas/imagem3.jpg'],
      color: "#E6E6FA" // Lavanda
    },
    {
      id: "pressure",
      number: "8",
      title: "Lavagem à Pressão",
      description: "Limpeza profunda de superfícies exteriores como calçadas, decks, fachadas e telhados para remover mofo, limo e sujeira acumulada.",
      image: ['/assets/Service/lavagem/imagem1.jpg', '/assets/Service/lavagem/imagem2.jpg', '/assets/Service/lavagem/imagem3.jpg'],
      color: "#F0FFF0" // Verde pastel
    },
    {
      id: "demolition",
      number: "9",
      title: "Demolição e Remoção de Entulho",
      description: "Serviços seguros de demolição e remoção eficiente de entulho e materiais indesejados, com práticas sustentáveis de descarte.",
      image: ['/assets/Service/demolicao/imagem1.jpg', '/assets/Service/demolicao/imagem2.jpg', '/assets/Service/demolicao/imagem3.jpg'],
      color: "#FFF0F5", // Rosa claro
      textColor: "#fff"
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

  return (
    <div
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
        <h2 className="relative text-5xl md:text-6xl font-bold font-sans md:pt-20 text-primeira">
          Serviços
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
                    style={{ color: step.titleColor }}
                  >
                    {step.title.split(' ').map((word, index) =>
                      word === "Propriedades" ? (
                        <span key={index} style={{ color: step.keywordColor }}>
                          {word}
                        </span>
                      ) : (
                        word + " "
                      )
                    )}
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <p
                    className="text-md md:text-xl leading-relaxed font-descritivo font-regular"
                    style={{ color: step.descriptionColor }}
                  >
                    {step.description.split(' ').map((word, index) =>
                      word === "Propriedades" ? (
                        <span key={index} style={{ color: step.keywordColor }}>
                          {word}
                        </span>
                      ) : (
                        word + " "
                      )
                    )}
                  </p>
                </div>
              </div>

              {/* Lado direito (imagem) */}

              <div className="border border-gray-300 shadow-md rounded-lg bg-white flex flex-col items-center text-center h-[40vh] md:h-[70vh] w-full">
                <div className="flex-1 flex justify-center items-center w-full h-full overflow-hidden p-1">
                  <img
                    src={step.image[currentSlide]}
                    alt={`Imagem ${currentSlide + 1}`}
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
  );
};

export default Services;

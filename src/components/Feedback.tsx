import React, { useEffect, useRef, useState } from 'react';

const feedbacks = [
    "Os reparos realizados em minha residência foram excelentes! A equipe foi extremamente profissional e eficiente, entregando um serviço de alta qualidade. Super recomendo!",
    "Contratei os serviços de construção da empresa para minha nova loja comercial, e fiquei muito satisfeito com o resultado. Desde o início do projeto até a entrega, tudo foi feito com perfeição e atenção aos detalhes.",
    "Tive uma experiência incrível com os serviços de reforma. Eles transformaram completamente meu escritório, deixando o espaço moderno e funcional. A equipe foi muito atenciosa e cumpriu os prazos.",
    "A manutenção feita em minha casa foi impecável! Resolveram problemas que outras empresas nunca conseguiram. Estou impressionado com a qualidade do serviço e o suporte prestado.",
    "Contratei a empresa para construir uma nova área em nosso espaço comercial, e fiquei impressionado com a organização e o profissionalismo da equipe. Cumpriram todos os prazos e entregaram exatamente o que prometemos aos nossos clientes. Não poderia estar mais satisfeito!",
    "Os reparos em minha residência foram realizados com rapidez e eficiência. A equipe foi muito educada e prestativa, garantindo que tudo fosse feito com cuidado e atenção aos detalhes. Com certeza voltarei a contratar os serviços!"
];


export default function Feedback() {
    const [feedbackAtivo, setFeedbackAtivo] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeedbackAtivo((feedbackAtual) => (feedbackAtual + 1) % feedbacks.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    // Função para lidar com o movimento do slider
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section className='feedback-background min-h-[70vh] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 bg-terceira' id='feedback' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {/* Left side - Feedbacks */}
            <div className="w-full md:w-1/2 flex flex-col gap-10 py-16 md:py-20">
                <div className="text-center md:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-white pt-10 md:pt-0 flex flex-col gap-3">
                    <h3 className="text-4xl md:text-5xl text-white mb-5 md:mb-0 text-center md:text-left font-bold">Qualidade & entrega</h3>

                    <span className="text-md md:text-lg tracking-wider text-white max-w-md mx-auto md:mx-0 text-center md:text-left">
                        Veja o que as pessoas estão dizendo sobre os nossos serviços de reparos e construções e como conseguimos entregar os serviços com qualidade.
                    </span>
                </div>

                <p className="text-xl md:text-2xl text-center md:text-left max-w-md mx-auto md:mx-0 text-white leading-normal">
                    "{feedbacks[feedbackAtivo]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-white hover:ring-white "><a href="/Gallery">Galeria de serviços</a></button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-white hover:ring-white"><a href="#contact">Orçamento grátis</a></button>
                </div>
            </div>

        </section>
    );
}
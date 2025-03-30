import React, { useEffect, useRef, useState } from 'react';

const feedbacks = [
    "The repairs at my home were outstanding! The team was highly professional and efficient, delivering top-quality service. Highly recommend them!",
    "I hired the company for my new store's construction, and the result exceeded my expectations. From project start to finish, everything was done with great attention to detail.",
    "I had an amazing experience with the renovation. They transformed my office completely, making it modern and functional. The team was attentive and met all deadlines.",
    "The maintenance at my house was flawless! They resolved issues that others couldn't. I'm impressed by the service quality and the support they offered.",
    "I hired the company to build a new area for our business, and I was impressed with the teams organization and professionalism. They met deadlines and delivered exactly what was promised.",
    "The repairs at my home were done quickly and efficiently. The team was polite and careful, ensuring everything was done with attention to detail. I ll definitely hire them again!",
    "The floor installation was done with precision. The team ensured everything was aligned and completed quickly. The results are stunning, and I highly recommend them.",
    "Im impressed with the floor installation service. The team worked efficiently, ensuring that every tile was perfectly placed. The quality of work exceeded my expectations.",
    "The cleaning service was thorough and professional. They did an excellent job removing all dirt and stains, leaving the place looking spotless and fresh. Highly satisfied.",
    "The floor installation team was fantastic! They worked meticulously to ensure everything was perfectly installed, and the space looks amazing. Very happy with the outcome."
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
                <div className="text-center md:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-[#d7a647] pt-10 md:pt-0 flex flex-col gap-3">
                    <h3 className="text-4xl md:text-5xl text-white mb-5 md:mb-0 text-center md:text-left font-bold">Quality & Delivery</h3>

                    <span className="text-md md:text-lg tracking-wider text-white max-w-md mx-auto md:mx-0 text-center md:text-left">
                        See what people are saying about our repair and construction services and how we deliver quality results.
                    </span>
                </div>

                <p className="text-xl md:text-2xl text-center md:text-left max-w-md mx-auto md:mx-0 text-white leading-normal">
                    "{feedbacks[feedbackAtivo]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-white hover:ring-white "><a href="/Gallery">Service Gallery</a></button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-white hover:ring-white"><a href="#contact">Free Estimate</a></button>
                </div>
            </div>

        </section>
    );
}
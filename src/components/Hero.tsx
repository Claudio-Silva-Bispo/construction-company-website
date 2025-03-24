import { useEffect, useState } from "react";
import VideoComponent from "./VideoComponent";

export default function Hero() {
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLinePosition((prevPosition) => (prevPosition + 1) % 101);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white max-h-screen h-[100vh] p-10 mb-60 md:pt-40">
      <section className="bg-[url('/assets/hero/background.svg')] flex flex-col md:flex-row h-full w-full">
        <div className="max-w-lg mx-auto transform flex-grow">
          <h1 className="relative flex flex-col mb-2 leading-[88px] text-[80px] z-10">
            <span className="relative inline-flex w-fit">
              <span className="relative pt-20 text-3xl md:text-5xl text-terceira font-titulo font-bold">Transformando Espaços</span>
              <span className="absolute top-0 left-0 w-full h-full px-[10px] -ml-[10px] overflow-hidden">
                <span className="absolute top-0 right-[100%] h-full w-full bg-[#1ac6ff] opacity-20 z-[-1]"></span>
              </span>
            </span>
            <span className="relative inline-flex w-fit">
              <span className="relative text-2xl md:text-2xl font-titulo font-bold text-terceira">de Sonhos em Realidade</span>
              <span className="absolute top-0 left-0 w-full h-full px-[10px] -ml-[10px] overflow-hidden">
                <span className="absolute top-0 right-[100%] h-full w-full bg-[#1ac6ff] opacity-20 z-[-1]"></span>
              </span>
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl leading-6 mb-10 pt-5 md:pt-10 font-bold text-segunda font-descritivo font-regular">
          Oferecemos serviços especializados de construção, incluindo pequenos reparos, reformas e pintura, para transformar sua visão em realidade.
          </h2>

          <a
            href="#"
            className="bg-primeira text-white px-8 py-4 rounded-lg text-xl font-semibold"
          >
            Entre em contato
          </a>
        </div>

        <div className="flex justify-center items-center w-full pt-20 md:pt-0">
          <VideoComponent videoSrc="/assets/GIF/video-construcao-casa-melhorada.mp4" />
        </div>
      </section>
    </main>
  );
}

import { useEffect, useState } from "react";
import VideoComponent from "./VideoComponent";

export default function Main() {
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLinePosition((prevPosition) => (prevPosition + 1) % 101);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white h-[100vh] p-5 md:mb-60 md:pt-40 flex items-center justify-center">
      <section className="relative flex flex-col md:flex-row h-full w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero/background.svg')" }}>
        <div className="max-w-lg mx-auto transform lg:flex-grow flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="relative flex flex-col mb-2 leading-[88px] text-[40px] md:text-[80px] z-10">
            <span className="relative inline-flex w-fit">
              <span className="relative pt-10 md:pt-20 text-4xl md:text-5xl text-terceira font-titulo font-bold">
                Andrad's PBS
              </span>
              <span className="absolute top-0 left-0 w-full h-full px-[10px] -ml-[10px] overflow-hidden">
                <span className="absolute top-0 right-[100%] h-full w-full bg-[#1ac6ff] opacity-20 z-[-1]"></span>
              </span>
            </span>
            <span className="relative inline-flex w-fit">
              <span className="relative text-xl md:text-6xl font-titulo font-bold text-terceira">
                Power & Building Solution
              </span>
              <span className="absolute top-0 left-0 w-full h-full px-[10px] -ml-[10px] overflow-hidden">
                <span className="absolute top-0 right-[100%] h-full w-full bg-[#1ac6ff] opacity-20 z-[-1]"></span>
              </span>
            </span>
          </h1>
          <h2 className="text-md md:text-2xl leading-6 mb-5 md:mb-10 pt-3 md:pt-10 text-segunda font-descritivo font-regular">
            Oferecemos serviços especializados de construção, incluindo pequenos reparos, reformas e pintura, para transformar sua visão em realidade.
          </h2>

          <div className="w-full flex justify-center md:justify-start">
            <a
              href="#"
              className="bg-primeira text-white px-8 py-4 rounded-lg text-md md:text-xl font-semibold"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center w-full pt-10 md:pt-0">
          <VideoComponent videoSrc="/assets/GIF/video-construcao-casa-melhorada.mp4" />
        </div>
      </section>
    </main>
  );
}
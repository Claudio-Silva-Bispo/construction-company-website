export default function Hero() {
  return (
    <main className="max-h-screen h-[95vh] md:h-[80vh] relative flex flex-col justify-between items-center" id="hero">
      {/* Imagem de fundo */}
      <section className="bg-[url('/assets/hero/background.png')] bg-no-repeat bg-cover bg-center h-full w-full absolute inset-0"></section>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center md:items-center max-w-2xl">
            
            <div className="hidden md:flex relative md:left-[-90px]">
              <img
                src="/assets/Logo/logo-sem-fundo-dois.png"
                alt="Logo"
                className="hidden md:block w-80"
              />
            </div>

            <div className="relative flex flex-col justify-center leading-none md:left-[-120px] pt-20 md:pt-0">
              <h1 className="text-white text-7xl md:text-8xl font-titulo drop-shadow-lg">
                Andrad's
              </h1>
              <p className="text-white text-lg md:text-lg lg:text-xl drop-shadow font-titulo font-light uppercase tracking-wide pl-2">
                Power & Build Solutions
              </p>
            </div>

          </div>  
        </div>

        <p className="text-white text-lg md:text-xl max-w-2xl text-left md:text-justify md:text-center mt-4 pt-4 md:pt-0 font-descritivo">
        We are specialists in civil construction, offering high-quality services for renovations, small repairs, and painting. Our dedicated team works to transform spaces, ensuring efficient and customized solutions tailored to your needs.
        </p>

        {/* Botão responsivo */}
        <div className="w-full md:w-auto flex justify-center mt-4 gap-5">
          <a
            href="#contact"
            className="bg-[#d7a647] text-white px-8 py-4 rounded-lg text-md md:text-xl font-semibold w-full md:w-auto text-center"
          >
            Get in Touch
          </a>
          <a
            href="#"
            className="hidden md:flex bg-[#d7a647] text-white px-8 py-4 rounded-lg text-md md:text-xl font-semibold w-full md:w-auto text-center"
          >
            Free Quote
          </a>
        </div>
      </div>

      {/* Logo separado para telas menores (sm) */}
      <div className="relative z-10 pb-8 md:hidden">
        <img
          src="/assets/Logo/logo-sem-fundo-dois.png"
          alt="Logo"
          className="w-64"
        />
      </div>
    </main>
  );
}

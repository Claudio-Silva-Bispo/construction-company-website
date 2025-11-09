import Head from "next/head";

export default function Hero() {
  return (
    <>
      <Head>
        <title>Seattle Construction, Structural Repair, and Renovation Contractor | Andrad PBS Solution</title>

        <meta
        name="description"
        content="Andrad PBS Solution: Your licensed general contractor for high-quality residential and commercial construction services in Seattle, Bellevue, and Redmond. Specializing in structural repair, full home renovations, custom painting, flooring, and meticulous finishing. Free quotes available."
        />

        <meta
        name="keywords"
        content="seattle general contractor, structural repair seattle, home renovation seattle, commercial construction, licensed contractor, painting services puget sound, flooring installation, basement finishing, residential remodeling, seattle, bellevue, redmond construction, contractor services"
        />

        <meta name="author" content="Andrad PBS Solution" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Andrad PBS Solution | Construction & Home Improvement in Seattle" />
        <meta property="og:description" content="Professional construction and renovation services for residential and commercial properties in Seattle and surrounding areas." />
        <meta property="og:image" content="https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png" />
        <meta property="og:url" content="https://www.andradpbsolution.com" />
        <meta property="og:site_name" content="Andrad PBS Solution" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Andrad PBS Solution | Construction & Renovation Experts" />
        <meta name="twitter:description" content="Professional construction and renovation services for residential and commercial properties in Seattle and surrounding areas." />
        <meta name="twitter:image" content="https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png" />

        <link rel="canonical" href="https://www.andradpbsolution.com" />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Andrad PBS Solution",
        "url": "https://www.andradpbsolution.com",
        "logo": "https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png",
        "description": "Professional construction and renovation services in Seattle, WA. Licensed and insured contractors for residential and commercial projects.",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US"
        },
        "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-425-971-9002",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Portuguese"]
        },
        "sameAs": [
        "https://instagram.com/andradsolution"
        ],
        "priceRange": "$$$",
        "areaServed": {
        "@type": "State",
        "name": "Washington"
        },
        "serviceType": [
        "Construction",
        "Renovation",
        "Structural Repair",
        "Painting",
        "Flooring Installation",
        "Demolition",
        "General Contractor"
        ]
        })
        }}
        />
    </Head>

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
    </>
  );
}

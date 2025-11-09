import Main from '@/components/Main'
import AboutPage from '@/components/AboutPage'
import Contact from '@/components/Contact'
import Feedback from '@/components/Feedback'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Head from 'next/head'

export default function Home() {

  return (
    <>
    <Head>
      <title>Licensed Construction & Renovation Services in Seattle | Andrad PBS Solution</title>

      <meta
      name="description"
      content="Andrad PBS Solution offers professional residential and commercial construction services in Seattle and the Greater Puget Sound region. Expert structural repair, renovations, painting, flooring, and demolition."
      />

      <meta
      name="keywords"
      content="seattle construction, residential contractor, commercial renovation, structural repair, painting seattle, flooring installation, pressure washing, demolition services, licensed contractor seattle, home improvement"
      />

      <meta name="author" content="Andrad PBS Solution" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Andrad PBS Solution | Construction & Home Improvement in Seattle" />
      <meta property="og:description" content="Professional construction and renovation services for residential and commercial properties in Seattle and surrounding areas." />
      <meta property="og:image" content="https://www.google.com/search?q=https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png" />
      <meta property="og:url" content="https://www.andradpbsolution.com" />
      <meta property="og:site_name" content="Andrad PBS Solution" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Andrad PBS Solution | Construction & Renovation Experts" />
      <meta name="twitter:description" content="Professional construction and renovation services for residential and commercial properties in Seattle and surrounding areas." />
      <meta name="twitter:image" content="https://www.google.com/search?q=https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png" />

      <link rel="canonical" href="https://www.andradpbsolution.com" />

      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
      __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Andrad PBS Solution",
      "url": "https://www.andradpbsolution.com",
      "logo": "https://www.google.com/search?q=https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois.png",
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
      "Demolition"
      ]
      })
      }}
      />
    </Head>
    <div>
      {/*<Main />*/}
      <Hero />
      <Services />
      <Contact />
      <AboutPage />
      <Feedback />
    </div>
    </>

  )
}
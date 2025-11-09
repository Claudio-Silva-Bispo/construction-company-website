import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
        
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Head } from 'next/document';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo/favicon-64.png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Andrad PBS Solution",
        "url": "https://www.andradpbsolution.com",
        "logo": "https://www.google.com/search?q=https://www.andradpbsolution.com/assets/Logo/logo-sem-fundo-dois",
        "description": "Professional construction and renovation services in Seattle, WA. Licensed and insured contractors for residential and commercial projects.",
        "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-425-971-9002",
        "contactType": "Customer Service",
        "areaServed": "Seattle"
        },
        "sameAs": [
        "https://instagram.com/andradsolution"
        ]
        })
        }}
        />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.andradpbsolution.com",
        "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.google.com/search?q=https://www.andradpbsolution.com/search%3Fq%3D{search_term_string}",
        "query-input": "required name=search_term_term_string"
        }
        })
        }}
        />

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
        {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Construction Services",
        "description": "Residential and commercial construction, renovations, structural repairs, and more.",
        "url": "https://www.andradpbsolution.com/#services"
        },
        {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Portfolio",
        "description": "View our completed projects and quality workmanship in the Seattle area.",
        "url": "https://www.google.com/search?q=https://www.andradpbsolution.com/#services"
        },
        {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "About Us",
        "description": "Learn about our mission, experience, and commitment to quality construction.",
        "url": "https://www.google.com/search?q=https://www.andradpbsolution.com/#about-page"
        },
        {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Contact Us",
        "description": "Get a free quote, call us, or send a message to discuss your project.",
        "url": "https://www.google.com/search?q=https://www.andradpbsolution.com/#contact"
        }
        ]
        })
        }}
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        {<Navbar />}
          <main className="flex-1">
            <Component {...pageProps} />
            
          </main>
          <Footer />
      </div>
    </>
  );
}

export default MyApp;

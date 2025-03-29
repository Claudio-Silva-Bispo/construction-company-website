import Main from '@/components/Main'
import AboutPage from '@/components/AboutPage'
import Contact from '@/components/Contact'
import Feedback from '@/components/Feedback'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {

  return (
    <div>
      {/*<Main />*/}
      <Hero />
      <Services />
      <Contact />
      <AboutPage />
      <Feedback />
    </div>

  )
}
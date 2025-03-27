import AboutPage from '@/components/AboutPage'
import Contact from '@/components/Contact'
import ReceivedFeedbacks from '@/components/ReceivedFeedbacks'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {

  return (
    <div>
      <Hero />
      <Services />
      <Contact />
      <AboutPage />
      <ReceivedFeedbacks />
    </div>

  )
}
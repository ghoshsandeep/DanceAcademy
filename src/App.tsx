import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MobileBottomNav } from './components/layout/MobileBottomNav'
import { About } from './components/sections/About'
import { Academy } from './components/sections/Academy'
import { Achievements } from './components/sections/Achievements'
import { Classes } from './components/sections/Classes'
import { Contact } from './components/sections/Contact'
import { Credentials } from './components/sections/Credentials'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Join } from './components/sections/Join'
import { MoreThanDance } from './components/sections/MoreThanDance'
import { Testimonials } from './components/sections/Testimonials'
import { Tradition } from './components/sections/Tradition'

function App() {
  return (
    <>
      <Header />
      <main className="pb-[calc(var(--bottom-nav-height)+var(--safe-bottom)+1.5rem)] lg:pb-0">
        <Hero />
        <Credentials />
        <About />
        <Academy />
        <Classes />
        <MoreThanDance />
        <Tradition />
        <Achievements />
        <Gallery />
        <Testimonials />
        <Join />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}

export default App

import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MobileBottomNav } from './components/layout/MobileBottomNav'
import { About } from './components/sections/About'
import { Academy } from './components/sections/Academy'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Credentials } from './components/sections/Credentials'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Join } from './components/sections/Join'
import { Performances } from './components/sections/Performances'
import { Qualifications } from './components/sections/Qualifications'
import { MoreThanDance } from './components/sections/MoreThanDance'
import { Reveal } from './components/ui/Reveal'
import { Training } from './components/sections/Training'
import { Tradition } from './components/sections/Tradition'

function App() {
  return (
    <>
      <Header />
      <main className="pb-[calc(var(--bottom-nav-height)+var(--safe-bottom)+1.5rem)] lg:pb-0">
        <Hero />
        <Reveal>
          <Credentials />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Academy />
        </Reveal>
        <Reveal>
          <Training />
        </Reveal>
        <Reveal>
          <MoreThanDance />
        </Reveal>
        <Reveal>
          <Tradition />
        </Reveal>
        <Reveal>
          <Qualifications />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
        <Reveal>
          <Performances />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
        <Reveal>
          <Join />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  )
}

export default App

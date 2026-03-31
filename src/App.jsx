import { motion as Motion } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { MobileNav } from './components/layout/MobileNav'
import { Sidebar } from './components/layout/Sidebar'
import { clubData, navItems } from './data/clubData'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FixturesPage } from './pages/FixturesPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { JoinUsPage } from './pages/JoinUsPage'
import { NewsPage } from './pages/NewsPage'
import { SponsorsPage } from './pages/SponsorsPage'
import { SquadPage } from './pages/SquadPage'

function App() {
  const sectionIds = navItems.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-contrast">
      <MobileNav activeSection={activeSection} onNavigate={scrollToSection} />
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
        <Motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-w-0 flex-1"
        >
          <HomePage onSquadClick={() => scrollToSection('squad')} onNewsClick={() => scrollToSection('news')} />
          <AboutPage clubData={clubData} />
          <SquadPage clubData={clubData} />
          <NewsPage clubData={clubData} />
          <FixturesPage clubData={clubData} />
          <GalleryPage clubData={clubData} />
          <SponsorsPage clubData={clubData} />
          <ContactPage clubData={clubData} />
          <JoinUsPage />
          <Footer />
        </Motion.main>
      </div>
    </div>
  )
}

export default App

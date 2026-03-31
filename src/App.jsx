import { motion as Motion } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { MobileNav } from './components/layout/MobileNav'
import { Sidebar } from './components/layout/Sidebar'
import { academyData, navItems } from './data/academyData'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutPage } from './pages/AboutPage'
import { CoachesPage } from './pages/CoachesPage'
import { ContactPage } from './pages/ContactPage'
import { FounderPage } from './pages/FounderPage'
import { GalleryPage } from './pages/GalleryPage'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'
import { JoinUsPage } from './pages/JoinUsPage'
import { ProgramsPage } from './pages/ProgramsPage'

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
          <HomePage onJoinClick={() => scrollToSection('join-us')} />
          <AboutPage academyData={academyData} />
          <HistoryPage academyData={academyData} />
          <FounderPage academyData={academyData} />
          <ProgramsPage academyData={academyData} />
          <CoachesPage academyData={academyData} />
          <GalleryPage academyData={academyData} />
          <ContactPage academyData={academyData} />
          <JoinUsPage />
          <Footer />
        </Motion.main>
      </div>
    </div>
  )
}

export default App

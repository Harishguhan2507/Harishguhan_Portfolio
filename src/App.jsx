import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FocusAreas from './sections/FocusAreas'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        <HeroSection />
        <AboutSection />
        <FocusAreas />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Contact } from './sections/Contact'
import { Diagnosis } from './sections/Diagnosis'
import { Hero } from './sections/Hero'
import { Insight } from './sections/Insight'
import { Measure, Process } from './sections/Measure'
import { Pillars } from './sections/Pillars'
import { Solutions } from './sections/Solutions'

function App() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <Hero />
        <Insight />
        <Pillars />
        <Diagnosis />
        <Solutions />
        <Measure />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

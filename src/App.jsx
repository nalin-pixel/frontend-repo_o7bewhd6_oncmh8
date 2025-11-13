import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E13]">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Reviews />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0B0E13] text-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Luna Cafe — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

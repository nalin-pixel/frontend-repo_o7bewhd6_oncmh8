import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0E13] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Freshly brewed moments, daily
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold leading-tight">
            A modern cafe experience with a touch of magic
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Sip exceptional coffee, savor artisan bites, and enjoy a calming space designed with heart. Welcome to your new favorite corner of the city.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#menu" className="inline-flex items-center rounded-full bg-amber-400/90 hover:bg-amber-300 text-black font-medium px-5 py-2.5 transition">
              Explore Menu
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 transition">
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

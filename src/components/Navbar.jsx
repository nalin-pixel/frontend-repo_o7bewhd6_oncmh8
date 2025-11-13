import { useState, useEffect } from 'react'
import { Menu, X, Coffee, Instagram, Facebook, Twitter } from 'lucide-react'

function useScrollShadow() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollShadow()

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 transition">
              <Coffee className="h-5 w-5 text-amber-300" />
            </div>
            <div className="font-semibold tracking-wide text-white">Luna Cafe</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-amber-400/90 hover:bg-amber-300 text-black font-medium px-4 py-2 transition">
              Reserve
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="px-3 py-2 rounded-lg bg-white/5 text-white/90 hover:bg-white/10">
                  {n.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10"><Instagram className="h-4 w-4"/></a>
                <a href="#" className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10"><Facebook className="h-4 w-4"/></a>
                <a href="#" className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10"><Twitter className="h-4 w-4"/></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

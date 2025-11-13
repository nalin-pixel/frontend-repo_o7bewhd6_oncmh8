import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will reach out soon.')
  }

  return (
    <section id="contact" className="relative bg-[#0B0E13] text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold">Visit us</h2>
          <p className="mt-2 text-white/70 max-w-xl">123 Lunar Way, Aurora District, Open daily 7am–7pm</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">Hours</div>
            <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
              {[
                ['Mon–Fri', '7:00 — 19:00'],
                ['Sat', '8:00 — 19:00'],
                ['Sun', '8:00 — 16:00'],
              ].map(([d, h]) => (
                <div key={d} className="flex items-center justify-between">
                  <span className="text-white/80">{d}</span>
                  <span className="text-white/60">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-medium">Book a table</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
            <input required type="date" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
            <input required type="time" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
            <input required type="number" min="1" max="10" placeholder="Guests" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
            <input placeholder="Phone" className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" />
          </div>
          <textarea placeholder="Notes (optional)" className="mt-4 w-full rounded-lg bg-black/20 border border-white/10 px-4 py-2.5 outline-none focus:ring-2 ring-amber-300/40" rows="4" />
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center rounded-full bg-amber-400/90 hover:bg-amber-300 text-black font-medium px-5 py-2.5 transition">Submit</button>
            <span className="text-sm text-emerald-300/90">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

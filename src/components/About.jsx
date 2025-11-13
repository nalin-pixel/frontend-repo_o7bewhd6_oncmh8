import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0B0E13] text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold">Handcrafted. Heart-led.</h2>
          <p className="mt-3 text-white/70">Were a neighborhood cafe focused on seasonal ingredients, thoughtful brewing, and a warm, design-forward space to unwind or get inspired.</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: 'Roasts', v: '6+' },
              { k: 'Origins', v: '12' },
              { k: 'Bakery', v: 'Fresh' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-semibold text-amber-300">{s.v}</div>
                <div className="text-xs text-white/70 mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-amber-300/20 via-white/10 to-transparent border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen opacity-70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

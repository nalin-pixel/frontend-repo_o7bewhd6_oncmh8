import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya P.', text: 'The latte art is gorgeous and the vibe is just right. My go-to work spot.', rating: 5 },
  { name: 'Alex R.', text: 'Incredible pour over selection, and the staff knows their beans.', rating: 5 },
  { name: 'Jin L.', text: 'Loved the modern aesthetic. The almond croissant is perfection.', rating: 5 },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0B0E13] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold">What guests say</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-300" />)}
              </div>
              <p className="mt-3 text-white/80">{r.text}</p>
              <div className="mt-4 text-sm text-white/60">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const items = [
  { title: 'Signature Latte', desc: 'Velvety espresso with house-made syrup', price: '$5.50' },
  { title: 'Pour Over', desc: 'Single-origin beans brewed to perfection', price: '$4.50' },
  { title: 'Matcha Cream', desc: 'Ceremonial-grade matcha with silky foam', price: '$5.00' },
  { title: 'Cold Brew', desc: 'Slow-steeped, bold and refreshing', price: '$4.75' },
  { title: 'Almond Croissant', desc: 'Buttery layers with almond filling', price: '$3.50' },
  { title: 'Avocado Toast', desc: 'Sourdough, smashed avo, chili flakes', price: '$7.50' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-[#0B0E13] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold">Our Favorites</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Crafted beverages and bites, curated seasonally. We source responsibly and brew with intention.</p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <motion.div key={i.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{i.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{i.desc}</p>
                </div>
                <span className="text-amber-300 font-semibold">{i.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

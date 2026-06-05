import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data'

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-16 border-y border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/[0.03] via-transparent to-accent-500/[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card gradient-border p-6 text-center group hover:bg-white/[0.06] transition-colors duration-300"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

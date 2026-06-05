import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBox, FiCpu, FiUsers, FiHeadphones } from 'react-icons/fi'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data'

const icons = [FiBox, FiCpu, FiUsers, FiHeadphones]
const colors = [
  { icon: 'text-brand-400',  glow: 'rgba(14,165,233,0.18)',  border: 'border-brand-500/20',  bg: 'bg-brand-500/[0.06]' },
  { icon: 'text-accent-400', glow: 'rgba(139,92,246,0.18)', border: 'border-accent-500/20', bg: 'bg-accent-500/[0.06]' },
  { icon: 'text-emerald-400',glow: 'rgba(16,185,129,0.18)', border: 'border-emerald-500/20',bg: 'bg-emerald-500/[0.06]' },
  { icon: 'text-yellow-400', glow: 'rgba(234,179,8,0.18)',  border: 'border-yellow-500/20', bg: 'bg-yellow-500/[0.06]' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-16">
      {/* Background gradient strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/[0.04] via-accent-500/[0.03] to-brand-500/[0.04]" />
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="absolute inset-x-0 bottom-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = icons[i]
            const c = colors[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className={`glass-card gradient-border ${c.bg} p-5 sm:p-6 text-center group hover:-translate-y-1 transition-all duration-300`}
                style={{ boxShadow: inView ? `0 4px 24px ${c.glow}` : 'none' }}
              >
                {/* Icon badge */}
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>

                {/* Counter */}
                <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-gray-400 text-sm font-body">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

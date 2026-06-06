import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBox, FiCpu, FiUsers, FiHeadphones } from 'react-icons/fi'
import AnimatedCounter from '../ui/AnimatedCounter'
import { stats } from '../../data'

const icons  = [FiBox, FiCpu, FiUsers, FiHeadphones]
const colors = ['text-brand-500', 'text-brand-500', 'text-gray-900', 'text-brand-500']

export default function Stats() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border-x border-gray-200">
          {stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#F4F6F9] px-6 py-10 text-center group hover:bg-white transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
                <div className={`font-display font-extrabold text-3xl sm:text-4xl mb-2 ${colors[i]}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

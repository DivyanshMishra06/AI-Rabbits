import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool, FiArrowRight, FiCheck } from 'react-icons/fi'
import { services } from '../../data'

const iconMap = { FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool }

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="orb w-[500px] h-[500px] bg-brand-500/[0.05] top-1/2 -left-32 -translate-y-1/2" />
      <div className="orb w-[400px] h-[400px] bg-accent-500/[0.04] bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">What I Offer</span>
          <h2 className="section-title mb-4">
            Services Designed to{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From simple business websites to complex SaaS platforms — I build digital products that look great, perform flawlessly, and convert.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="glass-card gradient-border group relative overflow-hidden flex flex-col"
                style={{ padding: 0 }}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-6 flex flex-col flex-1 relative">
                  {/* BG hover fill */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                  {/* Tag badge */}
                  {service.tag && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/15 text-brand-400 border border-brand-500/25">
                      {service.tag}
                    </span>
                  )}

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {Icon && <Icon className={`w-5 h-5 ${service.accent}`} />}
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                          <span className={`w-4 h-4 rounded-full ${service.accent.replace('text-', 'bg-')} bg-opacity-20 flex items-center justify-center shrink-0`}>
                            <FiCheck className={`w-2.5 h-2.5 ${service.accent}`} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <div>
                        <span className="text-gray-600 text-xs">Starting at</span>
                        <p className={`font-display font-bold text-base ${service.accent}`}>{service.startingPrice}</p>
                      </div>
                      <Link
                        to="/services"
                        className={`flex items-center gap-1.5 text-sm font-medium ${service.accent} opacity-60 hover:opacity-100 transition-opacity group/link`}
                      >
                        Learn more
                        <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2 px-8 py-3">
            View All Services
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

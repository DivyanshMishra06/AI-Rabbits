import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool, FiArrowRight } from 'react-icons/fi'
import { services } from '../../data'

const iconMap = {
  FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool,
}

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="orb w-96 h-96 bg-brand-500/[0.04] top-1/2 left-0 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-card gradient-border p-6 group hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* BG gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                    {service.tag}
                  </span>
                )}

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} border ${service.border} flex items-center justify-center mb-4`}>
                    {Icon && <Icon className={`w-5 h-5 ${service.accent}`} />}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.shortDesc}</p>

                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className={`w-1.5 h-1.5 rounded-full ${service.accent.replace('text-', 'bg-')} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-600 text-xs">Starting at</span>
                      <p className={`font-display font-bold text-base ${service.accent}`}>{service.startingPrice}</p>
                    </div>
                    <Link
                      to="/services"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
                    >
                      Learn more
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

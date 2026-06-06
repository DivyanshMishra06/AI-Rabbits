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
    <section ref={ref} className="py-24 relative bg-white">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="tag mb-4 inline-block">What We Offer</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="section-title mb-3">
                Services Designed to{' '}
                <span className="gradient-text">Drive Results</span>
              </h2>
              <p className="section-subtitle max-w-xl">
                From business websites to complex SaaS platforms — we engineer digital products that perform, convert, and scale.
              </p>
            </div>
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2 shrink-0 self-start lg:self-auto">
              All Services
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 pt-8 border-t border-gray-200">
            {[
              { v: '50+',    l: 'Projects Delivered' },
              { v: '100%',   l: 'On-Time Delivery' },
              { v: '30-day', l: 'Free Post-Launch Support' },
              { v: 'Global', l: 'Clientele' },
            ].map((b) => (
              <div key={b.l} className="flex items-center gap-2 text-sm">
                <span className="text-brand-500 font-display font-bold">{b.v}</span>
                <span className="text-gray-500">{b.l}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="glass-card overflow-hidden flex flex-col group relative border-t-2"
                style={{ borderTopColor: 'rgba(227,24,55,0.6)' }}
              >
                {/* Service image header */}
                <div className="relative h-40 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-8 h-8 rounded-lg bg-white/90 border border-white/30 flex items-center justify-center shadow-sm backdrop-blur-sm">
                      {Icon && <Icon className="w-4 h-4 text-brand-500" />}
                    </div>
                  </div>
                  {service.tag && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-500 text-white shadow-sm">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative overflow-hidden">
                  {/* Hover red corner */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 100% 0%, rgba(227,24,55,0.05) 0%, transparent 70%)' }}
                  />

                  <h3 className="font-display font-bold text-base text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{service.shortDesc}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <FiCheck className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider">Starting at</p>
                      <p className="text-brand-500 font-display font-bold text-sm mt-0.5">{service.startingPrice}</p>
                    </div>
                    <Link to="/services" className="flex items-center gap-1 text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors group/link">
                      Learn more
                      <FiArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4"
          style={{ borderLeftColor: '#E31837' }}
        >
          <div>
            <p className="font-display font-bold text-gray-900 text-base mb-1">Not sure which service fits your needs?</p>
            <p className="text-gray-600 text-sm">Book a free 30-minute consultation and our team will guide you.</p>
          </div>
          <Link to="/contact" className="btn-accent flex items-center gap-2 whitespace-nowrap shrink-0">
            Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

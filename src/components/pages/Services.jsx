import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool, FiArrowRight, FiCheck } from 'react-icons/fi'
import PageWrapper from '../ui/PageWrapper'
import CTA from '../sections/CTA'
import { services } from '../../data'

const iconMap = { FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool }

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[service.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      id={service.id}
      className="glass-card overflow-hidden border-l-4"
      style={{ borderLeftColor: '#E31837' }}
    >
      <div className="p-7">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="icon-badge w-12 h-12">
              {Icon && <Icon className="w-6 h-6 text-brand-500" />}
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-gray-900">{service.title}</h2>
              {service.tag && (
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20">
                  {service.tag}
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">Starting at</span>
            <p className="font-display font-bold text-2xl text-brand-500">{service.startingPrice}</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Features */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-brand-500" />
              Features
            </h3>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-brand-500" />
              Benefits
            </h3>
            <ul className="space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-sm text-brand-500 leading-none">→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-brand-500" />
              Process
            </h3>
            <ol className="space-y-2">
              {service.process.map((p, i) => (
                <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/25 flex items-center justify-center text-[10px] font-mono text-brand-500 shrink-0">
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Link to="/contact" className="btn-accent inline-flex items-center gap-2">
          Get a Quote
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero — light */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#F4F6F9] lg:pt-[calc(9rem+28px)]">
        <div className="absolute inset-x-0 bottom-0 section-divider-light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Services</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Everything You Need to{' '}
              <span className="gradient-text">Go Digital</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              From idea to deployment — we cover the full spectrum of web development services with a focus on quality, speed, and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </PageWrapper>
  )
}

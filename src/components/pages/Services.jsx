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
      className="glass-card gradient-border overflow-hidden"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${service.color.replace('/20', '')}`} />
      <div className="p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} flex items-center justify-center`}>
              {Icon && <Icon className={`w-7 h-7 ${service.accent}`} />}
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-white">{service.title}</h2>
              {service.tag && (
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                  {service.tag}
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-500 text-xs">Starting at</span>
            <p className={`font-display font-bold text-2xl ${service.accent}`}>{service.startingPrice}</p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-8">{service.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Features */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className={`w-1.5 h-4 rounded-full bg-gradient-to-b ${service.color.replace('/20', '')}`} />
              Features
            </h3>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                  <FiCheck className={`w-4 h-4 ${service.accent} shrink-0 mt-0.5`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className={`w-1.5 h-4 rounded-full bg-gradient-to-b ${service.color.replace('/20', '')}`} />
              Benefits
            </h3>
            <ul className="space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className={`text-lg leading-none ${service.accent}`}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className={`w-1.5 h-4 rounded-full bg-gradient-to-b ${service.color.replace('/20', '')}`} />
              Process
            </h3>
            <ol className="space-y-2">
              {service.process.map((p, i) => (
                <li key={p} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} border ${service.border} flex items-center justify-center text-[10px] font-mono ${service.accent} shrink-0`}>
                    {i + 1}
                  </span>
                  {p}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
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
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-96 h-96 bg-brand-500/[0.06] top-0 right-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Services</span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-6 leading-tight">
              Everything You Need to{' '}
              <span className="gradient-text">Go Digital</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              From idea to deployment — I cover the full spectrum of web development services with a focus on quality, speed, and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </PageWrapper>
  )
}

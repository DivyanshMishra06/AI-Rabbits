import { motion } from 'framer-motion'
import { FiGlobe, FiShield, FiZap, FiTrendingUp } from 'react-icons/fi'

const highlights = [
  { icon: FiZap,        label: 'Agile Delivery',      sub: 'Sprint-based, on-time' },
  { icon: FiShield,     label: 'Enterprise Security',  sub: 'OWASP & SSL A+' },
  { icon: FiGlobe,      label: 'Global Reach',         sub: 'Clients in 10+ countries' },
  { icon: FiTrendingUp, label: 'Proven ROI',           sub: '3× avg revenue lift' },
]

export default function ClientsStrip() {
  return (
    <section className="relative py-14 overflow-hidden bg-[#F4F6F9]">
      <div className="absolute inset-x-0 top-0 section-divider-light" />
      <div className="absolute inset-x-0 bottom-0 section-divider-light" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-brand-500 text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-2">
            Trusted by Businesses Across India &amp; Worldwide
          </p>
          <h3 className="font-display font-bold text-2xl text-gray-900">
            Turning Ideas into{' '}
            <span className="gradient-text">Powerful Digital Products</span>
          </h3>
        </motion.div>

        {/* Split: image left + feature cards right */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left — large image panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden lg:w-2/5 min-h-[260px] border border-gray-200 shadow-sm"
          >
            <img
              src="/images/clients-team.jpg"
              alt="AI Rabbits team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-brand-400 text-[11px] font-mono font-bold tracking-[0.18em] uppercase mb-2">
                Our Clients
              </p>
              <h4 className="font-display font-bold text-white text-xl leading-tight mb-1">
                30+ Clients Worldwide
              </h4>
              <p className="text-white/65 text-sm font-mono">India · USA · UK · UAE · Canada</p>
            </div>
            <div className="absolute top-5 right-5">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-[11px] font-mono">Active Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Right — feature cards */}
          <div className="lg:flex-1 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5 group hover:-translate-y-1 transition-all duration-200 border-t-2"
                style={{ borderTopColor: 'rgba(227,24,55,0.3)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/8 border border-brand-500/20 flex items-center justify-center mb-3 group-hover:bg-brand-500/15 transition-colors">
                  <h.icon className="w-5 h-5 text-brand-500" />
                </div>
                <p className="font-display font-bold text-sm text-gray-900 mb-0.5">{h.label}</p>
                <p className="text-gray-500 text-xs font-mono">{h.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

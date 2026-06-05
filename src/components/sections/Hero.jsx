import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi'

const floatingCards = [
  {
    icon: <FiZap className="w-4 h-4 text-yellow-400" />,
    title: 'Performance',
    value: '99 / 100',
    sub: 'PageSpeed Score',
    color: 'from-yellow-500/10 to-orange-500/10',
    border: 'border-yellow-500/20',
    delay: 0,
    position: 'top-16 right-8 md:top-24 md:right-16',
  },
  {
    icon: <FiShield className="w-4 h-4 text-emerald-400" />,
    title: 'Security',
    value: 'A+',
    sub: 'SSL Rating',
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
    delay: 0.15,
    position: 'bottom-32 right-4 md:bottom-40 md:right-12',
  },
  {
    icon: <FiTrendingUp className="w-4 h-4 text-brand-400" />,
    title: 'Uptime',
    value: '99.9%',
    sub: 'Guaranteed',
    color: 'from-brand-500/10 to-accent-500/10',
    border: 'border-brand-500/20',
    delay: 0.3,
    position: 'top-40 left-4 md:top-52 md:left-8',
  },
]

const techBadges = ['React', 'Node.js', 'MongoDB', 'Tailwind', 'TypeScript', 'Next.js']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="orb w-[600px] h-[600px] bg-brand-500/[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="orb w-96 h-96 bg-accent-500/[0.06] top-0 right-0" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl text-white leading-[1.1] mb-6"
            >
              Custom Websites &{' '}
              <span className="gradient-text">Web Applications</span>{' '}
              for Modern Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I design and develop fast, scalable, secure, and modern digital products that help businesses grow online and automate operations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Start Your Project
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="btn-secondary flex items-center gap-2">
                <FiPlay className="w-4 h-4" />
                View Portfolio
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <span className="text-gray-600 text-xs font-mono self-center mr-1">Built with:</span>
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="tag text-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative flex items-center justify-center">
            {/* Main dashboard card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Dashboard mockup */}
              <div className="glass-card gradient-border p-5 shadow-2xl shadow-black/40">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4 h-6 bg-white/[0.05] rounded-md border border-white/[0.06] flex items-center px-3">
                    <span className="text-gray-600 text-[10px] font-mono">divyanshdevstudio.com</span>
                  </div>
                  <div className="w-8 h-6 bg-brand-500/20 rounded border border-brand-500/30 flex items-center justify-center">
                    <span className="text-brand-400 text-[8px] font-mono">✓</span>
                  </div>
                </div>

                {/* Chart area */}
                <div className="bg-white/[0.02] rounded-xl border border-white/[0.05] p-4 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-gray-500 text-[10px] font-mono">Revenue Growth</p>
                      <p className="text-white text-lg font-display font-bold">₹4,28,000</p>
                    </div>
                    <span className="text-emerald-400 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                      +28.4%
                    </span>
                  </div>
                  {/* Fake bar chart */}
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 75, 100, 85, 72].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                        style={{ height: `${h}%`, originY: 1 }}
                        className={`flex-1 rounded-sm ${i === 9 ? 'bg-gradient-to-t from-brand-600 to-brand-400' : 'bg-white/10'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Projects', value: '50+', color: 'text-brand-400' },
                    { label: 'Clients', value: '30+', color: 'text-accent-400' },
                    { label: 'Rating', value: '5.0★', color: 'text-yellow-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.03] border border-white/[0.05] rounded-lg p-2.5 text-center">
                      <p className={`font-display font-bold text-sm ${stat.color}`}>{stat.value}</p>
                      <p className="text-gray-600 text-[10px] font-mono mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating info cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + card.delay, duration: 0.5 }}
                className={`absolute ${card.position} hidden sm:block`}
                style={{ animation: `float ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
              >
                <div className={`glass-card bg-gradient-to-br ${card.color} border ${card.border} px-3 py-2.5 rounded-xl shadow-lg`}>
                  <div className="flex items-center gap-2 mb-1">
                    {card.icon}
                    <span className="text-gray-400 text-[10px] font-mono">{card.title}</span>
                  </div>
                  <p className="text-white text-sm font-display font-bold">{card.value}</p>
                  <p className="text-gray-500 text-[9px]">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand-500/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

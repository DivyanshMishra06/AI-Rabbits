import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi'

const floatingCards = [
  {
    icon: <FiZap className="w-4 h-4 text-yellow-400" />,
    title: 'Performance',
    value: '99 / 100',
    sub: 'PageSpeed Score',
    gradient: 'from-yellow-500/20 to-orange-500/10',
    border: 'border-yellow-500/30',
    glow: '0 8px 28px rgba(234,179,8,0.15)',
    delay: 0,
    position: 'top-16 right-4 md:top-24 md:right-10',
  },
  {
    icon: <FiShield className="w-4 h-4 text-emerald-400" />,
    title: 'Security',
    value: 'A+',
    sub: 'SSL & OWASP',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    glow: '0 8px 28px rgba(16,185,129,0.15)',
    delay: 0.2,
    position: 'bottom-32 right-0 md:bottom-44 md:right-6',
  },
  {
    icon: <FiTrendingUp className="w-4 h-4 text-brand-400" />,
    title: 'Uptime',
    value: '99.9%',
    sub: 'Guaranteed SLA',
    gradient: 'from-brand-500/20 to-accent-500/10',
    border: 'border-brand-500/30',
    glow: '0 8px 28px rgba(14,165,233,0.15)',
    delay: 0.4,
    position: 'top-40 left-0 md:top-52 md:left-6',
  },
]

const techBadges = [
  { name: 'React',       cls: 'text-brand-400  border-brand-500/30  bg-brand-500/10' },
  { name: 'Next.js',     cls: 'text-white       border-white/20      bg-white/5' },
  { name: 'Node.js',     cls: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  { name: 'TypeScript',  cls: 'text-blue-400    border-blue-500/30   bg-blue-500/10' },
  { name: 'Tailwind',    cls: 'text-cyan-400    border-cyan-500/30   bg-cyan-500/10' },
  { name: 'MongoDB',     cls: 'text-green-400   border-green-500/30  bg-green-500/10' },
  { name: 'PostgreSQL',  cls: 'text-sky-400     border-sky-500/30    bg-sky-500/10' },
  { name: 'Docker',      cls: 'text-blue-300    border-blue-400/30   bg-blue-400/10' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Layered background */}
      <div className="absolute inset-0 bg-surface-900" />
      <div className="absolute inset-0 aurora-bg" />

      {/* Dot grid with radial fade */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(56,189,248,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Glow orbs */}
      <div className="orb w-[700px] h-[500px] bg-brand-500/[0.07] top-1/2 left-1/3 -translate-y-1/2 animate-pulse-slow" />
      <div className="orb w-[450px] h-[450px] bg-accent-500/[0.07] -top-24 right-[-8%] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="orb w-[350px] h-[300px] bg-rose-500/[0.04] bottom-0 left-[8%] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <div className="text-center lg:text-left min-w-0 overflow-hidden">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-7"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-[2rem] sm:text-5xl xl:text-[3.6rem] text-white leading-[1.1] mb-6"
            >
              Custom Websites &{' '}
              <span className="gradient-text">Web Applications</span>{' '}
              for Modern Businesses
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Fast, scalable, secure, and stunning digital products that help businesses grow online — from landing pages to full SaaS platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <Link to="/contact" className="btn-primary flex items-center gap-2 px-7 py-3.5">
                Start Your Project
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="btn-secondary flex items-center gap-2 px-7 py-3.5">
                <FiPlay className="w-4 h-4" />
                View Portfolio
              </Link>
            </motion.div>

            {/* Tech badge marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <p className="text-gray-600 text-xs font-mono mb-3 text-center lg:text-left tracking-wider uppercase">
                Built with modern tech:
              </p>
              <div className="marquee-container">
                <div className="marquee-track">
                  {[...techBadges, ...techBadges].map((tech, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border flex-shrink-0 ${tech.cls}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right — Dashboard Mockup ── */}
          <div className="relative flex items-center justify-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[440px]"
            >
              {/* Glow halo */}
              <div className="absolute inset-0 bg-brand-500/[0.08] blur-3xl rounded-3xl scale-110 animate-pulse-slow" />

              {/* Dashboard card */}
              <div className="relative glass-card gradient-border p-5 shadow-2xl shadow-black/50">

                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/90" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90" />
                  </div>
                  <div className="flex-1 h-6 bg-white/[0.06] rounded-lg border border-white/[0.08] flex items-center px-3 gap-2">
                    <FiShield className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="text-gray-500 text-[10px] font-mono truncate">airabbits.com/dashboard</span>
                  </div>
                </div>

                {/* Chart area */}
                <div className="bg-white/[0.02] rounded-xl border border-white/[0.05] p-4 mb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">Revenue Growth</p>
                      <p className="text-white text-xl font-display font-bold mt-0.5">₹4,28,000</p>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 block">
                        +28.4% ↑
                      </span>
                      <p className="text-gray-600 text-[9px] font-mono mt-1">vs last month</p>
                    </div>
                  </div>
                  {/* Animated bar chart */}
                  <div className="flex items-end gap-1 h-20">
                    {[38, 62, 44, 78, 54, 88, 68, 93, 74, 100, 84, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.65 + i * 0.05, duration: 0.4 }}
                        style={{ height: `${h}%`, originY: 1 }}
                        className={`flex-1 rounded-sm ${
                          i === 9
                            ? 'bg-gradient-to-t from-brand-600 to-brand-300 shadow-sm shadow-brand-500/40'
                            : i >= 7
                            ? 'bg-white/[0.12]'
                            : 'bg-white/[0.07]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mini stat row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Projects', value: '50+', color: 'text-brand-400',  bg: 'bg-brand-500/10',  border: 'border-brand-500/20' },
                    { label: 'Clients',  value: '30+', color: 'text-accent-400', bg: 'bg-accent-500/10', border: 'border-accent-500/20' },
                    { label: 'Rating',   value: '5.0★', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
                  ].map((s) => (
                    <div key={s.label} className={`${s.bg} border ${s.border} rounded-xl p-2.5 text-center`}>
                      <p className={`font-display font-bold text-sm ${s.color}`}>{s.value}</p>
                      <p className="text-gray-600 text-[10px] font-mono mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + card.delay, duration: 0.5 }}
                className={`absolute ${card.position} hidden sm:block z-10`}
                style={{
                  animation: `float ${5 + i * 1.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                <div
                  className={`glass-card bg-gradient-to-br ${card.gradient} border ${card.border} px-4 py-3 rounded-2xl backdrop-blur-xl`}
                  style={{ boxShadow: card.glow }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {card.icon}
                    <span className="text-gray-400 text-[10px] font-mono uppercase tracking-wider">{card.title}</span>
                  </div>
                  <p className="text-white text-base font-display font-bold leading-tight">{card.value}</p>
                  <p className="text-gray-500 text-[9px] font-mono mt-0.5">{card.sub}</p>
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
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-mono tracking-wider">scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-brand-500/90 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

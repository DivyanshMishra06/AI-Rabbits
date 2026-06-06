import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiZap,        label: 'Agile Delivery' },
  { icon: FiShield,     label: 'Enterprise Security' },
  { icon: FiTrendingUp, label: 'Proven Results' },
]

const techBadges = [
  'React', 'Next.js', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker',
  'AWS', 'GraphQL', 'Redis', 'Kubernetes',
]

const stats = [
  { value: '50+',   label: 'Projects Delivered' },
  { value: '30+',   label: 'Clients Worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '3+',    label: 'Years of Excellence' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F] lg:pt-[28px]">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Birlasoft-style red laser beam lines — right side */}
      <div className="absolute right-0 top-0 w-[55%] h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lines radiating from focal point (750, 400) */}
          <line x1="750" y1="400" x2="0" y2="30" stroke="#E31837" strokeWidth="1.8">
            <animate attributeName="opacity" values="0.55;0.2;0.55" dur="4s" repeatCount="indefinite" begin="0s" />
          </line>
          <line x1="750" y1="400" x2="120" y2="0" stroke="#E31837" strokeWidth="1.2">
            <animate attributeName="opacity" values="0.4;0.12;0.4" dur="3.5s" repeatCount="indefinite" begin="0.6s" />
          </line>
          <line x1="750" y1="400" x2="320" y2="0" stroke="#E31837" strokeWidth="0.9">
            <animate attributeName="opacity" values="0.3;0.08;0.3" dur="4.8s" repeatCount="indefinite" begin="1.1s" />
          </line>
          <line x1="750" y1="400" x2="550" y2="0" stroke="#E31837" strokeWidth="0.6">
            <animate attributeName="opacity" values="0.22;0.06;0.22" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
          </line>
          <line x1="750" y1="400" x2="0" y2="200" stroke="#E31837" strokeWidth="1.4">
            <animate attributeName="opacity" values="0.45;0.15;0.45" dur="5s" repeatCount="indefinite" begin="0.8s" />
          </line>
          <line x1="750" y1="400" x2="0" y2="380" stroke="#E31837" strokeWidth="1">
            <animate attributeName="opacity" values="0.35;0.1;0.35" dur="4.2s" repeatCount="indefinite" begin="1.4s" />
          </line>
          <line x1="750" y1="400" x2="0" y2="580" stroke="#E31837" strokeWidth="1.2">
            <animate attributeName="opacity" values="0.4;0.12;0.4" dur="3.8s" repeatCount="indefinite" begin="0.2s" />
          </line>
          <line x1="750" y1="400" x2="0" y2="750" stroke="#E31837" strokeWidth="0.9">
            <animate attributeName="opacity" values="0.3;0.08;0.3" dur="4.5s" repeatCount="indefinite" begin="0.9s" />
          </line>
          <line x1="750" y1="400" x2="200" y2="800" stroke="#E31837" strokeWidth="0.7">
            <animate attributeName="opacity" values="0.25;0.07;0.25" dur="3.6s" repeatCount="indefinite" begin="1.6s" />
          </line>
          <line x1="750" y1="400" x2="450" y2="800" stroke="#E31837" strokeWidth="0.6">
            <animate attributeName="opacity" values="0.2;0.06;0.2" dur="4.3s" repeatCount="indefinite" begin="0.4s" />
          </line>
          {/* Cross-hatch lines for lattice depth */}
          <line x1="0" y1="0" x2="800" y2="450" stroke="#E31837" strokeWidth="0.4" opacity="0.12" />
          <line x1="0" y1="200" x2="800" y2="600" stroke="#E31837" strokeWidth="0.3" opacity="0.09" />
          <line x1="100" y1="0" x2="800" y2="700" stroke="#E31837" strokeWidth="0.4" opacity="0.1" />
          <line x1="0" y1="350" x2="800" y2="300" stroke="#E31837" strokeWidth="0.3" opacity="0.08" />
          {/* Focal point glow */}
          <circle cx="750" cy="400" r="6" fill="#E31837" opacity="0.2" />
          <circle cx="750" cy="400" r="18" fill="none" stroke="#E31837" strokeWidth="1" opacity="0.12" />
          <circle cx="750" cy="400" r="45" fill="none" stroke="#E31837" strokeWidth="0.5" opacity="0.07" />
          <circle cx="750" cy="400" r="90" fill="none" stroke="#E31837" strokeWidth="0.4" opacity="0.04" />
        </svg>
      </div>

      {/* Radial dark-red glow behind focal point */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 90% 50%, rgba(227,24,55,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left content ── */}
          <div className="min-w-0">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/8"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-400 text-xs font-mono font-bold tracking-[0.18em] uppercase">
                Accepting New Projects
              </span>
            </motion.div>

            {/* Headline — Birlasoft-style large white text */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.5rem] text-white leading-[1.06] tracking-tight mb-6 text-balance"
            >
              Engineering{' '}
              <span className="text-brand-400">Digital Solutions</span>
              <br />
              That Drive Business Growth
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              AI Rabbits is a professional IT services company delivering custom web applications, SaaS platforms, and enterprise software for businesses across India and worldwide.
            </motion.p>

            {/* Bullet points */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2.5 mb-10"
            >
              {[
                'End-to-end product development from idea to launch',
                'Dedicated team with transparent project management',
                'Post-launch support, maintenance & scaling',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <FiCheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link to="/contact" className="btn-accent flex items-center gap-2 px-7 py-3.5 text-base">
                Start a Project
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-7 py-3.5 text-base font-display font-semibold rounded-lg border border-white/20 text-white hover:bg-white/8 hover:border-white/35 transition-all duration-200 flex items-center gap-2"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Tech marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-gray-600 text-[10px] font-mono tracking-[0.18em] uppercase mb-3">
                Technologies we work with
              </p>
              <div className="marquee-container">
                <div className="marquee-track">
                  {[...techBadges, ...techBadges].map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded text-[11px] font-mono font-medium border border-white/10 text-gray-500 bg-white/[0.03] flex-shrink-0"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right — dark enterprise metrics card ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0"
          >
            {/* Main card */}
            <div
              className="rounded-xl border p-6 shadow-2xl"
              style={{ background: 'rgb(15 15 22)', borderColor: 'rgb(40 40 55)' }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.07]">
                <div>
                  <p className="text-gray-500 text-[11px] font-mono uppercase tracking-wider mb-1">
                    Project Dashboard
                  </p>
                  <p className="text-white font-display font-bold text-base">AI Rabbits · 2025</p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="rounded-lg p-4"
                    style={{ background: 'rgb(22 22 32)', border: '1px solid rgb(40 40 55)' }}
                  >
                    <p className="font-display font-extrabold text-2xl text-brand-400 leading-tight">{s.value}</p>
                    <p className="text-gray-500 text-xs font-mono mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Revenue bar */}
              <div
                className="rounded-lg p-4 mb-5"
                style={{ background: 'rgb(22 22 32)', border: '1px solid rgb(40 40 55)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">Revenue Generated for Clients</p>
                    <p className="text-white font-display font-bold text-xl mt-0.5">₹12.4 Cr+</p>
                  </div>
                  <span className="text-emerald-400 text-xs font-mono">+34% YoY</span>
                </div>
                <div className="flex items-end gap-1 h-14">
                  {[30, 48, 38, 62, 55, 74, 60, 88, 72, 96, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.35 }}
                      style={{ height: `${h}%`, originY: 1 }}
                      className={`flex-1 rounded-sm ${i >= 9 ? 'bg-brand-500' : 'bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-3 gap-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 py-3 rounded-lg"
                    style={{ background: 'rgba(227,24,55,0.06)', border: '1px solid rgba(227,24,55,0.15)' }}
                  >
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span className="text-[10px] font-mono text-gray-400 text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 rounded-xl border px-4 py-3 shadow-lg hidden sm:flex items-center gap-3"
              style={{ background: 'rgb(22 22 32)', borderColor: 'rgba(251,146,60,0.3)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}>
                ⭐
              </div>
              <div>
                <p className="text-white font-display font-bold text-sm">5.0 Rating</p>
                <p className="text-gray-500 text-[10px] font-mono">100% Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider — red glow line transitioning to white sections */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}

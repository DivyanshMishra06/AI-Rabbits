import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMenu, FiX, FiPhone, FiChevronDown, FiArrowRight,
  FiMonitor, FiCode, FiShoppingBag, FiLayers, FiCpu, FiTool,
  FiGrid, FiBookOpen, FiStar,
  FiUsers, FiTarget, FiZap,
} from 'react-icons/fi'

const servicesMenu = [
  { icon: FiMonitor,     title: 'Website Development',   desc: 'Stunning, fast-loading business websites',    href: '/services', tag: 'Popular' },
  { icon: FiCode,        title: 'Web App Development',   desc: 'Scalable web apps & SaaS platforms',          href: '/services', tag: 'High Value' },
  { icon: FiShoppingBag, title: 'E-Commerce',            desc: 'Online stores that convert and scale',        href: '/services' },
  { icon: FiLayers,      title: 'SaaS Products',         desc: 'End-to-end SaaS product development',        href: '/services', tag: 'Enterprise' },
  { icon: FiCpu,         title: 'Custom Software',       desc: 'Bespoke business automation solutions',      href: '/services' },
  { icon: FiTool,        title: 'Maintenance & Support', desc: 'Keep your product running at peak',          href: '/services' },
]

const workMenu = [
  { icon: FiGrid,     color: 'text-brand-500 bg-brand-500/8 border-brand-500/20',   title: 'All Projects',  desc: 'Browse our complete portfolio',  href: '/portfolio' },
  { icon: FiBookOpen, color: 'text-purple-600 bg-purple-50 border-purple-200',      title: 'Case Studies',  desc: 'Deep-dives into our best work',  href: '/portfolio' },
  { icon: FiStar,     color: 'text-amber-600 bg-amber-50 border-amber-200',         title: 'Featured Work', desc: 'Our most impactful deliveries',  href: '/portfolio' },
]

const aboutMenu = [
  { icon: FiUsers,  color: 'text-brand-500 bg-brand-500/8 border-brand-500/20',   title: 'Our Team',         desc: '15+ experts across tech & design', href: '/about' },
  { icon: FiTarget, color: 'text-emerald-600 bg-emerald-50 border-emerald-200',   title: 'Mission & Vision', desc: 'What drives us every day',          href: '/about' },
  { icon: FiZap,    color: 'text-orange-600 bg-orange-50 border-orange-200',      title: 'Tech Stack',       desc: 'Technologies we work with',        href: '/about' },
]

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services',  label: 'Services',   menu: 'services' },
  { href: '/portfolio', label: 'Work',       menu: 'work' },
  { href: '/about',     label: 'Who We Are', menu: 'about' },
  { href: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeMenu,     setActiveMenu]     = useState(null)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const closeTimer = useRef(null)
  const location   = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveMenu(null) }, [location.pathname])

  const openMenu     = (name) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveMenu(name) }
  const scheduleClose = ()    => { closeTimer.current = setTimeout(() => setActiveMenu(null), 160) }
  const keepOpen     = ()     => { if (closeTimer.current) clearTimeout(closeTimer.current) }

  return (
    <>
      {/* Top announcement strip */}
      <div className="fixed top-0 inset-x-0 z-[51] bg-[#0A0A0F] text-white/60 text-[11px] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1.5">
          <span className="font-mono tracking-wide">AI Rabbits Worldwide &nbsp;·&nbsp; India's Premier IT Solutions Partner</span>
          <div className="flex items-center gap-5 font-mono">
            <a href="tel:+919876543210" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FiPhone className="w-3 h-3" />
              +91 98765 43210
            </a>
            <a href="mailto:airabbits@dm.com" className="hover:text-white transition-colors">airabbits@dm.com</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed inset-x-0 z-50 transition-all duration-300 lg:top-[28px] top-0 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.12)] border-b border-gray-100 py-3'
            : 'bg-white/98 border-b border-gray-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity duration-200 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6.5" y="1" width="3.5" height="9" rx="1.75" fill="white"/>
                  <rect x="14" y="1" width="3.5" height="9" rx="1.75" fill="white"/>
                  <circle cx="12" cy="18" r="5.5" fill="white"/>
                  <circle cx="10" cy="17" r="1.1" fill="#E31837"/>
                  <circle cx="14" cy="17" r="1.1" fill="#E31837"/>
                  <ellipse cx="12" cy="20" rx="0.8" ry="0.6" fill="#E31837" opacity="0.7"/>
                </svg>
              </div>
              <div className="leading-none">
                <p className="font-display font-extrabold text-[16px] text-gray-900 tracking-tight">AI RABBITS</p>
                <p className="text-[9px] font-mono text-brand-500 tracking-[0.15em] uppercase">IT Solutions</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active  = location.pathname === link.href
                const hasMenu = !!link.menu
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => hasMenu && openMenu(link.menu)}
                    onMouseLeave={() => hasMenu && scheduleClose()}
                  >
                    <Link
                      to={link.href}
                      className={`relative px-5 py-3 text-xl font-body font-bold rounded-lg transition-colors duration-150 flex items-center gap-1.5 ${
                        active
                          ? 'text-brand-500 bg-brand-500/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-2 bottom-0.5 h-0.5 bg-brand-500 rounded-full"
                        />
                      )}
                      {link.label}
                      {hasMenu && (
                        <FiChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeMenu === link.menu ? 'rotate-180 text-brand-500' : 'text-gray-400'
                          }`}
                        />
                      )}
                    </Link>

                    {/* Small dropdowns for Work & Who We Are */}
                    {(link.menu === 'work' || link.menu === 'about') && (
                      <AnimatePresence>
                        {activeMenu === link.menu && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0,  scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-[60] overflow-hidden"
                            onMouseEnter={keepOpen}
                            onMouseLeave={scheduleClose}
                          >
                            <div className="p-2">
                              {(link.menu === 'work' ? workMenu : aboutMenu).map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.href}
                                  className="flex items-center gap-3.5 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group/dd"
                                >
                                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                                    <item.icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-display font-semibold text-sm text-gray-900 group-hover/dd:text-brand-500 transition-colors">{item.title}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                                  </div>
                                  <FiArrowRight className="w-3.5 h-3.5 text-gray-300 shrink-0 group-hover/dd:text-brand-500 group-hover/dd:translate-x-0.5 transition-all" />
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-gray-100 px-4 py-2.5 bg-gray-50/50">
                              <Link to={link.href} className="text-xs font-medium text-brand-500 hover:text-brand-600 flex items-center gap-1 transition-colors">
                                View all {link.label === 'Work' ? 'projects' : 'company info'}
                                <FiArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="btn-accent text-sm px-5 py-2.5 flex items-center gap-2 shadow-sm">
                Start a Project
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Services mega menu — full-width panel ── */}
        <AnimatePresence>
          {activeMenu === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-2xl z-[60]"
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex gap-8">

                  {/* Left — 3×2 service grid */}
                  <div className="flex-1">
                    <p className="text-[10px] font-mono font-bold text-gray-400 tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                      <span className="w-5 h-0.5 bg-brand-500 rounded-full inline-block" />
                      Development &amp; Digital Services
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {servicesMenu.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-150 group/svc"
                        >
                          {/* Large icon */}
                          <div className="w-12 h-12 rounded-xl bg-brand-500/8 border border-brand-500/15 flex items-center justify-center shrink-0 group-hover/svc:bg-brand-500 group-hover/svc:border-brand-500 transition-all duration-200">
                            <item.icon className="w-6 h-6 text-brand-500 group-hover/svc:text-white transition-colors duration-200" />
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <p className="font-display font-semibold text-sm text-gray-900 group-hover/svc:text-brand-500 transition-colors leading-tight">
                                {item.title}
                              </p>
                              {item.tag && (
                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-500 border border-brand-500/20 leading-none whitespace-nowrap">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right — consultation CTA card */}
                  <div className="w-52 shrink-0">
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full flex flex-col">
                      <img
                        src="/images/navbar-consultation.jpg"
                        alt="Free consultation"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 flex-1 flex flex-col">
                        <p className="font-display font-bold text-sm text-gray-900 mb-1 leading-snug">
                          Not sure which service fits?
                        </p>
                        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                          Book a free 30-min consultation — our team will guide you.
                        </p>
                        <Link
                          to="/contact"
                          className="btn-accent text-xs px-3 py-2.5 flex items-center gap-1.5 justify-center"
                        >
                          Free Consultation
                          <FiArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white border-l border-gray-200 z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.5" y="1" width="3.5" height="9" rx="1.75" fill="white"/>
                      <rect x="14" y="1" width="3.5" height="9" rx="1.75" fill="white"/>
                      <circle cx="12" cy="18" r="5.5" fill="white"/>
                      <circle cx="10" cy="17" r="1.1" fill="#E31837"/>
                      <circle cx="14" cy="17" r="1.1" fill="#E31837"/>
                      <ellipse cx="12" cy="20" rx="0.8" ry="0.6" fill="#E31837" opacity="0.7"/>
                    </svg>
                  </div>
                  <span className="font-display font-extrabold text-sm text-gray-900 tracking-tight">AI RABBITS</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const hasMenu   = !!link.menu
                  const isExpanded = expandedMobile === link.menu
                  const subItems  = link.menu === 'services' ? servicesMenu
                                   : link.menu === 'work'     ? workMenu
                                   : link.menu === 'about'    ? aboutMenu
                                   : []

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      {hasMenu ? (
                        <div>
                          <button
                            onClick={() => setExpandedMobile(isExpanded ? null : link.menu)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              location.pathname === link.href
                                ? 'bg-brand-500/8 text-brand-500 border border-brand-500/20'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {link.label}
                            <FiChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-brand-500' : 'text-gray-400'}`}
                            />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-1 ml-2 space-y-0.5 pb-1">
                                  {subItems.map((item) => (
                                    <Link
                                      key={item.title}
                                      to={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group/mob"
                                    >
                                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                                        item.color || 'text-brand-500 bg-brand-500/8 border-brand-500/20'
                                      }`}>
                                        <item.icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-display font-semibold text-sm text-gray-900 group-hover/mob:text-brand-700 transition-colors">{item.title}</p>
                                        <p className="text-gray-400 text-xs truncate">{item.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            location.pathname === link.href
                              ? 'bg-brand-500/8 text-brand-500 border border-brand-500/20'
                              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-accent w-full text-center block"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

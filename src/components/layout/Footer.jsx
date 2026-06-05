import { Link } from 'react-router-dom'
import { FiCode, FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services' },
    { label: 'Web Applications', href: '/services' },
    { label: 'E-Commerce', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
    { label: 'Custom Software', href: '/services' },
    { label: 'Maintenance', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/[0.06] bg-surface-800/50">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <FiCode style={{ color: 'white' }} className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[15px] text-slate-900 dark:text-white">AI Rabbits</span>
                <span className="font-display font-bold text-[11px] text-brand-400 tracking-[0.15em] uppercase">Dev Studio</span>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Transforming ideas into powerful digital products. Custom websites, web apps & software solutions that help businesses grow.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:divyansh@ai.com" className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 transition-colors">
                <FiMail className="w-4 h-4 text-brand-500 shrink-0" />
                airabbits@dm.com
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 transition-colors">
                <FiPhone className="w-4 h-4 text-brand-500 shrink-0" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400">
                <FiMapPin className="w-4 h-4 text-brand-500 shrink-0" />
                India (Available Worldwide)
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: FiGithub, href: '#', label: 'GitHub' },
                { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FiTwitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-white hover:bg-brand-500/10 dark:hover:bg-brand-500/20 hover:border-brand-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            © {year} AI Rabbits. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400 dark:text-gray-500">
            Built with
            <span className="text-red-400 mx-1">♥</span>
            using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

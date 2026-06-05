import { Link } from 'react-router-dom'
import { FiCode, FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi'

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services' },
    { label: 'Web Applications',    href: '/services' },
    { label: 'E-Commerce',          href: '/services' },
    { label: 'SaaS Development',    href: '/services' },
    { label: 'Custom Software',     href: '/services' },
    { label: 'Maintenance',         href: '/services' },
  ],
  Company: [
    { label: 'About',     href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact',   href: '/contact' },
    { label: 'Blog',      href: '#' },
  ],
}

const socials = [
  { icon: FiGithub,   href: '#', label: 'GitHub'   },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn'  },
  { icon: FiTwitter,  href: '#', label: 'Twitter'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-800/50 overflow-hidden">
      {/* Gradient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      {/* Subtle orbs */}
      <div className="orb w-[400px] h-[300px] bg-brand-500/[0.03] -top-20 left-0" />
      <div className="orb w-[300px] h-[300px] bg-accent-500/[0.03] bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/35 group-hover:shadow-brand-500/55 transition-shadow duration-300">
                <FiCode style={{ color: 'white' }} className="w-5 h-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[15px] text-slate-900 dark:text-white">AI Rabbits</span>
                <span className="font-display font-bold text-[11px] text-brand-400 tracking-[0.15em] uppercase">Dev Studio</span>
              </div>
            </Link>

            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Transforming ideas into powerful digital products. Custom websites, web apps &amp; software solutions that help businesses grow.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:airabbits@dm.com"
                className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 dark:hover:text-brand-400 transition-colors group/link"
              >
                <span className="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover/link:bg-brand-500/20 transition-colors">
                  <FiMail className="w-3.5 h-3.5 text-brand-500" />
                </span>
                airabbits@dm.com
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 dark:hover:text-brand-400 transition-colors group/link"
              >
                <span className="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover/link:bg-brand-500/20 transition-colors">
                  <FiPhone className="w-3.5 h-3.5 text-brand-500" />
                </span>
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-gray-400">
                <span className="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-3.5 h-3.5 text-brand-500" />
                </span>
                India (Available Worldwide)
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 hover:shadow-sm hover:shadow-brand-500/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-500 dark:text-gray-400 hover:text-brand-400 dark:hover:text-brand-400 transition-colors duration-200"
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
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            © {year} AI Rabbits. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-slate-400 dark:text-gray-500">
            Built with
            <FiHeart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            using React &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}

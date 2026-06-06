import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services' },
    { label: 'Web Applications',    href: '/services' },
    { label: 'E-Commerce',          href: '/services' },
    { label: 'SaaS Development',    href: '/services' },
    { label: 'Custom Software',     href: '/services' },
  ],
  Company: [
    { label: 'Who We Are',  href: '/about' },
    { label: 'Our Work',    href: '/portfolio' },
    { label: 'Contact',     href: '/contact' },
    { label: 'Blog',        href: '#' },
  ],
}

const socials = [
  { icon: FiGithub,   href: '#', label: 'GitHub'  },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter,  href: '#', label: 'Twitter'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0A0A0F] border-t border-white/[0.06] overflow-hidden">
      {/* Top red glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity duration-200">
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
                <p className="font-display font-extrabold text-[15px] text-white tracking-tight">AI RABBITS</p>
                <p className="text-[9px] font-mono text-brand-400 tracking-[0.15em] uppercase">IT Solutions</p>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Transforming ideas into powerful digital products. Custom websites, web apps &amp; enterprise software solutions that help businesses grow.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              {[
                { icon: FiMail,   href: 'mailto:airabbits@dm.com',    label: 'airabbits@dm.com' },
                { icon: FiPhone,  href: 'https://wa.me/919876543210', label: '+91 98765 43210' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-brand-400 transition-colors group/link"
                >
                  <span className="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover/link:bg-brand-500/20 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-brand-400" />
                  </span>
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-7 h-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                  <FiMapPin className="w-3.5 h-3.5 text-brand-400" />
                </span>
                India (Available Worldwide)
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-500 hover:text-brand-400 hover:border-brand-500/40 hover:bg-brand-500/10 transition-all flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-white text-xs uppercase tracking-[0.12em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-brand-400 transition-colors duration-150"
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
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {year} AI Rabbits. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

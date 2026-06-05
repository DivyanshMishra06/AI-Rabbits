import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageWrapper from '../ui/PageWrapper'

const projectTypes = [
  'Business Website', 'Landing Page', 'Web Application', 'E-Commerce Store',
  'SaaS Product', 'Dashboard / Admin Panel', 'Custom Software', 'Website Redesign', 'Other',
]

const budgets = [
  'Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000',
  '₹60,000 – ₹1,00,000', 'Above ₹1,00,000', 'Let\'s Discuss',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', projectType: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  const inputClass = (field) =>
    `w-full bg-white/[0.04] border ${errors[field] ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 font-body focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.06] transition-all duration-200`

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-96 h-96 bg-brand-500/[0.06] top-0 right-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Get In Touch</span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref} className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-5"
            >
              {/* Contact cards */}
              {[
                {
                  icon: <FiMail className="w-5 h-5 text-brand-400" />,
                  label: 'Email',
                  value: 'divyansh@ai.com',
                  href: 'mailto:divyansh@ai.com',
                  color: 'from-brand-500/10 to-cyan-500/10',
                  border: 'border-brand-500/20',
                },
                {
                  icon: <FaWhatsapp className="w-5 h-5 text-emerald-400" />,
                  label: 'WhatsApp',
                  value: '+91 98765 43210',
                  href: 'https://wa.me/919876543210',
                  color: 'from-emerald-500/10 to-teal-500/10',
                  border: 'border-emerald-500/20',
                },
                {
                  icon: <FiPhone className="w-5 h-5 text-purple-400" />,
                  label: 'Phone',
                  value: '+91 98765 43210',
                  href: 'tel:+919876543210',
                  color: 'from-purple-500/10 to-pink-500/10',
                  border: 'border-purple-500/20',
                },
                {
                  icon: <FiMapPin className="w-5 h-5 text-orange-400" />,
                  label: 'Location',
                  value: 'India (Remote Worldwide)',
                  href: null,
                  color: 'from-orange-500/10 to-amber-500/10',
                  border: 'border-orange-500/20',
                },
              ].map((contact) => (
                <div key={contact.label} className={`glass-card bg-gradient-to-br ${contact.color} border ${contact.border} p-4 flex items-center gap-4`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${contact.color} border ${contact.border} flex items-center justify-center shrink-0`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-white text-sm hover:text-brand-400 transition-colors font-medium">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability */}
              <div className="glass-card gradient-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-mono font-medium">Available for Projects</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently accepting new projects. Typical response time is <strong className="text-white">under 24 hours</strong>.
                </p>
              </div>

              {/* Social */}
              <div className="glass-card gradient-border p-5">
                <h3 className="font-display font-semibold text-white text-sm mb-4">Connect on Social</h3>
                <div className="flex gap-2">
                  {[
                    { icon: FiGithub, href: '#', label: 'GitHub' },
                    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                    { icon: FiTwitter, href: '#', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex-1 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500/10 hover:border-brand-500/20 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="glass-card gradient-border p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center mb-5">
                    <FiCheck className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent! 🎉</h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    Thank you for reaching out! I'll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',projectType:'',budget:'',message:'' }) }}
                    className="mt-6 btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card gradient-border p-7 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        className={inputClass('phone')}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={e => handleChange('company', e.target.value)}
                        className={inputClass('company')}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Project Type</label>
                      <select
                        value={form.projectType}
                        onChange={e => handleChange('projectType', e.target.value)}
                        className={`${inputClass('projectType')} appearance-none`}
                      >
                        <option value="" className="bg-surface-800">Select a type...</option>
                        {projectTypes.map(t => (
                          <option key={t} value={t} className="bg-surface-800">{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-mono mb-1.5">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={e => handleChange('budget', e.target.value)}
                        className={`${inputClass('budget')} appearance-none`}
                      >
                        <option value="" className="bg-surface-800">Select budget...</option>
                        {budgets.map(b => (
                          <option key={b} value={b} className="bg-surface-800">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-mono mb-1.5">Project Details *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project — what you want to build, your goals, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    By submitting, you agree that I may contact you about your project. No spam, ever.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

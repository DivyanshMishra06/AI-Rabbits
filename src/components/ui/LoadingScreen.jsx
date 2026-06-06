import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Logo mark */}
        <div className="w-14 h-14 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="font-display font-extrabold text-xl text-gray-900 tracking-tight">AI RABBITS</h1>
          <p className="text-brand-500 text-xs font-mono mt-1 tracking-[0.15em] uppercase">IT Solutions</p>
        </div>

        {/* Loading bar */}
        <div className="w-40 h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 bg-brand-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-surface-900 flex flex-col items-center justify-center"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb w-96 h-96 bg-brand-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-brand-500/40"
        >
          <FiCode className="text-white w-8 h-8" />
        </motion.div>

        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-white">AI Rabbits</h1>
          <p className="text-brand-400 text-sm font-mono mt-1">Transforming Ideas Into Products</p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

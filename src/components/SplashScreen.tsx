import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 300);
          setTimeout(onComplete, 900);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, #0a0f1e 0%, #050811 100%)',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Soft gradient blobs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo + glowing ring */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="relative w-32 h-32 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #2563EB, #7C3AED, #06B6D4, #2563EB)',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0f1e]" />
              </motion.div>

              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.5), transparent 70%)' }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Logo */}
              <motion.img
                src="/nexoratech.jpg"
                alt="Nexora Tech logo"
                className="relative z-10 w-20 h-20 rounded-2xl object-cover"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Company name */}
            <motion.h1
              className="mt-8 text-3xl font-bold tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="gradient-text">Nexora Tech</span>
            </motion.h1>
            <motion.p
              className="mt-2 text-sm text-white/50 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Building Intelligent Software
            </motion.p>

            {/* Progress */}
            <div className="mt-10 w-56">
              <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4)' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <p className="mt-3 text-center text-xs text-white/40 font-mono">{progress}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

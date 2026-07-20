import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function SectionReveal({ children, delay = 0, y = 30, className = '' }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = 16;
    const steps = (duration * 1000) / stepTime;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="counter-number">
      {display}
      {suffix}
    </span>
  );
}

export function PageHeader({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {badge && (
          <motion.span
            className="tag-badge mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          className="section-title mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="section-subtitle max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function RippleButton({ children, onClick, className = '', type = 'button' }: { children: React.ReactNode; onClick?: () => void; className?: string; type?: 'button' | 'submit' }) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { x, y, id }]);
    setTimeout(() => setRipples((r) => r.filter((rip) => rip.id !== id)), 600);
    onClick?.();
  };

  return (
    <button type={type} onClick={handleClick} className={`relative overflow-hidden ${className}`}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.6s ease-out forwards',
          }}
        />
      ))}
      <style>{`@keyframes ripple { to { width: 400px; height: 400px; opacity: 0; } }`}</style>
    </button>
  );
}

export function MouseParallax({ children, className = '', strength = 20 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set(((e.clientX - cx) / rect.width) * strength);
      y.set(((e.clientY - cy) / rect.height) * strength);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [x, y, strength]);

  return (
    <motion.div ref={ref} style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}

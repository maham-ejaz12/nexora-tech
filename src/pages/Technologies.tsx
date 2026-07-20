import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { technologies } from '../data/content';

export default function Technologies() {
  const [selected, setSelected] = useState<typeof technologies[number] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <PageHeader
        badge="Our Tech Stack"
        title="Technologies we master."
        subtitle="We work with the most powerful, battle-tested technologies across the modern software stack. Click any technology to learn more."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((t) => (
              <StaggerItem key={t.name}>
                <motion.button
                  onClick={() => setSelected(t)}
                  className="glass-card glass-card-hover p-6 text-center h-full w-full cursor-pointer"
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl mb-3">{t.icon}</div>
                  <p className="font-semibold text-sm mb-1">{t.name}</p>
                  <div className="w-8 h-1 rounded-full mx-auto" style={{ background: t.color }} />
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
            { title: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Java', 'C#'] },
            { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
            { title: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
          ].map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-bold mb-4 text-blue-400">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => <li key={item} className="text-white/70 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />

      {/* Technology modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              className="relative max-w-lg w-full glass-card p-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-25"
                style={{ background: `radial-gradient(circle, ${selected.color}, transparent 70%)` }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl border border-white/10"
                    style={{ background: `linear-gradient(135deg, ${selected.color}22, transparent)` }}
                  >
                    {selected.icon}
                  </div>
                  <div>
                    <span className="tag-badge mb-1">Technology</span>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{selected.name}</h3>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">{selected.description}</p>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2"><Cpu size={16} className="text-blue-400" /><h4 className="font-semibold text-sm">Primary Use</h4></div>
                    <p className="text-white/60 text-sm pl-6">{selected.primaryUse}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2"><Layers size={16} className="text-blue-400" /><h4 className="font-semibold text-sm">Key Features</h4></div>
                    <div className="grid grid-cols-2 gap-2 pl-6">
                      {selected.keyFeatures.map((f) => (
                        <div key={f} className="flex items-start gap-1.5 text-white/70 text-sm">
                          <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0 mt-0.5" /> {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2"><Sparkles size={16} className="text-blue-400" /><h4 className="font-semibold text-sm">Why Nexora Tech Uses It</h4></div>
                    <p className="text-white/70 text-sm">{selected.why}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

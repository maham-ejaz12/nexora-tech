import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '../components/ui';
import CTA from '../components/CTA';
import { faqs } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        badge="FAQ"
        title="Frequently asked questions."
        subtitle="Everything you need to know about working with Nexora Tech. Can't find an answer? Reach out to us."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold pr-4">{f.q}</span>
                <span className="text-blue-400 flex-shrink-0">
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-white/70 text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Still have questions?" subtitle="Our team is ready to help. Get in touch and we will respond within 24 hours." />
    </>
  );
}

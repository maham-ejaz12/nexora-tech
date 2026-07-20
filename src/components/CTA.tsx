import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA({ title = 'Ready to build something intelligent?', subtitle = 'Let us turn your vision into a product your users will love.', }: { title?: string; subtitle?: string; }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))', border: '1px solid rgba(255,255,255,0.1)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)' }} />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary justify-center">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+14155550199" className="btn-outline justify-center">
                <Phone size={18} /> Book a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

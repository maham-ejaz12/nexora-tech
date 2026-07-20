import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Factory, HeartPulse, GraduationCap, Landmark, Truck, ShoppingBag, Users, Building2, Bot, Database, Contact, type LucideIcon } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { solutions } from '../data/content';

const iconMap: Record<string, LucideIcon> = {
  Factory, HeartPulse, GraduationCap, Landmark, Truck, ShoppingBag, Users, Building2, Bot, Database, Contact,
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return <Navigate to="/solutions" replace />;
  const Icon = iconMap[sol.icon] || Factory;
  const related = solutions.filter((s) => s.slug !== sol.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/solutions" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Solutions
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5 border border-white/10">
                <Icon size={28} className="text-blue-400" />
              </div>
              <span className="tag-badge mb-4">Industry Solution</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{sol.title}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">{sol.overview}</p>
              <Link to="/contact" className="btn-primary"><span>Get Started</span><ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden glow-blue premium-img-wrap">
              <img src={sol.image} alt={sol.title} className="w-full h-[400px] object-cover premium-img" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Key Features</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sol.features.map((f) => (
              <StaggerItem key={f}>
                <div className="glass-card p-5 flex items-start gap-3 h-full">
                  <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Business Benefits</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sol.benefits.map((b) => (
              <StaggerItem key={b}>
                <div className="glass-card p-5 h-full flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0"><CheckCircle2 size={16} className="text-blue-400" /></div>
                  <span className="text-white/80 text-sm">{b}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Related Solutions</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => {
              const RIcon = iconMap[r.icon] || Factory;
              return (
                <StaggerItem key={r.slug}>
                  <Link to={`/solutions/${r.slug}`} className="glass-card glass-card-hover p-6 h-full block group">
                    <RIcon size={24} className="text-blue-400 mb-3" />
                    <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{r.title}</h3>
                    <p className="text-white/60 text-sm">{r.shortDesc}</p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}

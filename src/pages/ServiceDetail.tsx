import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, Layers, GitBranch, Award, HelpCircle, ArrowLeft } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { services } from '../data/content';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5 border border-white/10">
                <Icon size={28} className="text-blue-400" />
              </div>
              <span className="tag-badge mb-4">Service</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{service.title}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">{service.overview}</p>
              <Link to="/contact" className="btn-primary"><span>Get Started</span><ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden glow-blue premium-img-wrap">
              <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover premium-img" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><Cpu size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Technologies We Use</h2></div>
          </SectionReveal>
          <StaggerContainer className="flex flex-wrap gap-3">
            {service.technologies.map((t) => (
              <StaggerItem key={t}>
                <span className="px-4 py-2 rounded-lg glass-card text-sm font-medium">{t}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><Layers size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Key Features</h2></div>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((f) => (
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

      {/* Process */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><GitBranch size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Development Process</h2></div>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.process.map((p, i) => (
              <StaggerItem key={p}>
                <div className="glass-card p-5 h-full">
                  <div className="text-blue-400 font-bold text-sm mb-2">Step {i + 1}</div>
                  <h3 className="font-semibold mb-1">{p}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><Award size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Benefits</h2></div>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((b) => (
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

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><HelpCircle size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">FAQ</h2></div>
          </SectionReveal>
          <StaggerContainer className="space-y-4">
            {service.faqs.map((f) => (
              <StaggerItem key={f.q}>
                <details className="glass-card p-5 group">
                  <summary className="font-semibold cursor-pointer flex items-center justify-between list-none">
                    {f.q}
                    <span className="text-blue-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">{f.a}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Related Services</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <StaggerItem key={r.slug}>
                  <Link to={`/services/${r.slug}`} className="glass-card glass-card-hover p-6 h-full block group">
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

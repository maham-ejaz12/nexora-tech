import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Mail, CheckCircle2, Target, Lightbulb, TrendingUp, Cpu } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/portfolio" replace />;
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);
  const fallback = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedFinal = related.length ? related : fallback;

  return (
    <>
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="tag-badge mb-4">{project.category} · {project.year}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{project.title}</h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">{project.overview}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary"><span>Live Demo</span><ExternalLink size={18} /></a>
              <Link to="/contact" className="btn-outline"><Mail size={18} /> Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden glow-blue premium-img-wrap">
            <img src={project.image} alt={project.title} className="w-full h-[400px] sm:h-[500px] object-cover premium-img" />
          </motion.div>
        </div>
      </section>

      {/* Overview + features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionReveal className="mb-6">
              <div className="flex items-center gap-3 mb-3"><Target size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Overview</h2></div>
              <p className="text-white/70 leading-relaxed">{project.overview}</p>
            </SectionReveal>
            <SectionReveal delay={0.1} className="mb-6">
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <StaggerContainer className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <StaggerItem key={f}>
                    <div className="flex items-start gap-2 text-white/80 text-sm"><CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" /> {f}</div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionReveal>
          </div>
          <div>
            <SectionReveal>
              <div className="glass-card p-6 mb-6">
                <h3 className="font-bold mb-4">Project Info</h3>
                <dl className="space-y-3 text-sm">
                  <div><dt className="text-white/50">Client</dt><dd className="font-medium">{project.client}</dd></div>
                  <div><dt className="text-white/50">Category</dt><dd className="font-medium">{project.category}</dd></div>
                  <div><dt className="text-white/50">Year</dt><dd className="font-medium">{project.year}</dd></div>
                </dl>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4"><Cpu size={18} className="text-blue-400" /><h3 className="font-bold">Technologies</h3></div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">{t}</span>)}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <SectionReveal>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4"><Lightbulb size={20} className="text-yellow-400" /><h3 className="text-xl font-bold">Challenges</h3></div>
              <ul className="space-y-3">
                {project.challenges.map((c) => <li key={c} className="text-white/70 text-sm flex items-start gap-2"><span className="text-yellow-400 mt-1">•</span> {c}</li>)}
              </ul>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4"><CheckCircle2 size={20} className="text-green-400" /><h3 className="text-xl font-bold">Solutions</h3></div>
              <ul className="space-y-3">
                {project.solutions.map((s) => <li key={s} className="text-white/70 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">•</span> {s}</li>)}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8">
            <div className="flex items-center gap-3 mb-2"><TrendingUp size={22} className="text-blue-400" /><h2 className="text-2xl font-bold">Client Results</h2></div>
            <p className="text-white/70 leading-relaxed mb-6">{project.clientResults}</p>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((r) => (
              <StaggerItem key={r}>
                <div className="glass-card p-5 text-center h-full">
                  <p className="text-xl font-bold gradient-text-blue">{r}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-6"><h2 className="text-2xl font-bold">Gallery</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
              'https://images.pexels.com/photos/5468192/pexels-photo-5468192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
              'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
            ].map((g, i) => (
              <StaggerItem key={i}>
                <div className="rounded-xl overflow-hidden h-48 premium-img-wrap">
                  <img src={g} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="w-full h-full object-cover premium-img" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Related Projects</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {relatedFinal.map((r) => (
              <StaggerItem key={r.slug}>
                <Link to={`/portfolio/${r.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group">
                  <div className="h-40 overflow-hidden"><img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">{r.title}</h3>
                    <p className="text-white/50 text-xs mt-1">{r.category}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}

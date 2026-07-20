import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Linkedin, Twitter, Github, Award, Briefcase, Cpu, CheckCircle2 } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { team } from '../data/content';

export default function TeamMember() {
  const { slug } = useParams();
  const member = team.find((m) => m.slug === slug);
  if (!member) return <Navigate to="/team" replace />;

  return (
    <>
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/team" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Team
          </Link>
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden glow-blue premium-img-wrap">
                <img src={member.photo} alt={member.name} className="w-full h-96 object-cover premium-img" />
              </div>
              <div className="glass-card p-5 mt-5">
                <h3 className="font-semibold mb-3">Connect</h3>
                <div className="flex gap-3">
                  <a href={`mailto:hello@nexoratech.com`} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all" aria-label="Email"><Mail size={18} /></a>
                  <a href={member.social.linkedin} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  <a href={member.social.twitter} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all" aria-label="Twitter"><Twitter size={18} /></a>
                  <a href={member.social.github} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all" aria-label="GitHub"><Github size={18} /></a>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2">
              <span className="tag-badge mb-4">{member.position}</span>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{member.bio}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-2"><Briefcase size={18} className="text-blue-400" /><h3 className="font-semibold text-sm">Experience</h3></div>
                  <p className="text-white/70">{member.experience}</p>
                </div>
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-2"><Award size={18} className="text-blue-400" /><h3 className="font-semibold text-sm">Certifications</h3></div>
                  <ul className="space-y-1">
                    {member.certifications.map((c) => <li key={c} className="text-white/70 text-sm flex items-start gap-1"><CheckCircle2 size={14} className="text-blue-400 flex-shrink-0 mt-0.5" /> {c}</li>)}
                  </ul>
                </div>
              </div>

              <SectionReveal className="mb-8">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((s) => <span key={s} className="px-3 py-1.5 rounded-lg glass-card text-sm">{s}</span>)}
                </div>
              </SectionReveal>

              <SectionReveal className="mb-8">
                <div className="flex items-center gap-2 mb-4"><Cpu size={20} className="text-blue-400" /><h2 className="text-xl font-bold">Technologies</h2></div>
                <div className="flex flex-wrap gap-2">
                  {member.technologies.map((t) => <span key={t} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">{t}</span>)}
                </div>
              </SectionReveal>

              <SectionReveal className="mb-8">
                <h2 className="text-xl font-bold mb-4">Notable Projects</h2>
                <StaggerContainer className="space-y-3">
                  {member.projects.map((p) => (
                    <StaggerItem key={p}>
                      <div className="glass-card p-4 flex items-center justify-between">
                        <span className="text-white/80 text-sm font-medium">{p}</span>
                        <Link to="/portfolio" className="text-blue-400 text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">View <ArrowRight size={14} /></Link>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </SectionReveal>

              <Link to="/contact" className="btn-primary"><span>Get in Touch</span><ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

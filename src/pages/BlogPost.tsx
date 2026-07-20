import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, MessageCircle, Heart, Send } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { blogPosts } from '../data/content';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = post.relatedPosts.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean) as typeof blogPosts;

  return (
    <>
      <article className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((t) => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{t}</span>)}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-6">
              <span className="flex items-center gap-1"><User size={14} /> {post.author} · {post.authorRole}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden mb-8 glow-blue premium-img-wrap">
            <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover premium-img" />
          </motion.div>

          {/* Table of contents */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-white/70">Table of Contents</h3>
            <ul className="space-y-2">
              {post.content.filter((c) => c.type === 'h2').map((c, i) => (
                <li key={i} className="text-sm text-white/60 hover:text-blue-400 transition-colors cursor-pointer">{i + 1}. {c.text}</li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === 'h2') return <motion.h2 key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold mt-10 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{block.text}</motion.h2>;
              return <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/75 leading-relaxed">{block.text}</motion.p>;
            })}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 mt-10 pt-6 border-t border-white/10">
            <span className="text-white/60 text-sm font-medium">Share:</span>
            {['Twitter', 'LinkedIn', 'Facebook'].map((s) => (
              <button key={s} className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500/50 transition-all" aria-label={`Share on ${s}`}>
                <Share2 size={16} />
              </button>
            ))}
          </div>

          {/* Comments UI */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2"><MessageCircle size={20} className="text-blue-400" /> Comments</h3>
            <div className="glass-card p-5 mb-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Sarah Mitchell</p>
                  <p className="text-white/60 text-sm mt-1">Excellent breakdown. The section on observability really resonated with our team's experience.</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
                    <button className="flex items-center gap-1 hover:text-blue-400 transition-colors"><Heart size={12} /> 24</button>
                    <button className="hover:text-blue-400 transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-4">
              <textarea placeholder="Add a comment..." rows={3} className="w-full bg-transparent text-white placeholder-white/40 focus:outline-none resize-none text-sm" />
              <div className="flex justify-end mt-2">
                <button className="btn-primary !py-2 !px-4 text-sm"><span>Post Comment</span><Send size={14} /></button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Related Articles</h2></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <Link to={`/blog/${r.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                  <div className="h-40 overflow-hidden"><img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover premium-img" /></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors line-clamp-2">{r.title}</h3>
                    <p className="text-white/50 text-xs mt-1">{r.readTime}</p>
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

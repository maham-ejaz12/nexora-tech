import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { blogPosts } from '../data/content';

export default function Blog() {
  const [params] = useSearchParams();
  const q = params.get('q')?.toLowerCase() || '';
  const posts = q ? blogPosts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))) : blogPosts;

  return (
    <>
      <PageHeader
        badge="Blog"
        title="Insights from our engineers."
        subtitle="Deep dives on software architecture, AI, cloud, and engineering culture — written by the team that builds them."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {q && <p className="text-white/60 text-sm mb-6">Showing results for "{q}"</p>}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((t) => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{t}</span>)}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Monitor, Smartphone } from 'lucide-react';import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { projects } from '../data/content';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        badge="Our Portfolio"
        title="Products we have shipped."
        subtitle="A selection of projects across industries — each one engineered to create real business impact."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === c ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'glass-card text-white/70 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link to={`/portfolio/${p.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                    {/* Laptop mockup */}
                    <div className="relative h-56 overflow-hidden bg-[#0d1320]">
                      <div className="absolute inset-x-4 top-3 bottom-6 rounded-lg overflow-hidden border border-white/10 premium-img-wrap">
                        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-white/10 rounded-b-xl" />
                      <span className="absolute top-3 left-3 tag-badge z-10">{p.category}</span>
                      <span className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] text-white/70">
                        <Smartphone size={10} /> Mobile
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                      <p className="text-white/60 text-sm mb-3 line-clamp-2">{p.overview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">{p.client}</span>
                        <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          View <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatePresence>
        </div>
      </section>

      <CTA />
    </>
  );
}

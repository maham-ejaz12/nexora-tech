import { useEffect, useState, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ArrowRight, CornerDownLeft } from 'lucide-react';
import { services, solutions, projects, blogPosts, technologies, pricingPlans } from '../data/content';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

type SearchResult = {
  type: string;
  title: string;
  subtitle: string;
  path: string;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setActiveIndex(0);
  }, [searchQuery]);

  const results = useMemo<SearchResult[]>(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const out: SearchResult[] = [];
    const match = (s: string) => s.toLowerCase().includes(q);

    navItems.forEach((n) => {
      if (match(n.name)) out.push({ type: 'Page', title: n.name, subtitle: 'Page', path: n.path });
    });
    services.forEach((s) => {
      if (match(s.title) || match('service')) out.push({ type: 'Service', title: s.title, subtitle: 'Service', path: `/services/${s.slug}` });
    });
    solutions.forEach((s) => {
      if (match(s.title)) out.push({ type: 'Solution', title: s.title, subtitle: 'Solution', path: `/solutions/${s.slug}` });
    });
    projects.forEach((p) => {
      if (match(p.title) || match(p.category) || match('portfolio')) out.push({ type: 'Project', title: p.title, subtitle: `${p.category} Project`, path: `/portfolio/${p.slug}` });
    });
    blogPosts.forEach((b) => {
      if (match(b.title) || b.tags.some((t) => match(t))) out.push({ type: 'Blog', title: b.title, subtitle: 'Article', path: `/blog/${b.slug}` });
    });
    technologies.forEach((t) => {
      if (match(t.name)) out.push({ type: 'Technology', title: t.name, subtitle: 'Technology', path: '//technologies' });
    });
    pricingPlans.forEach((p) => {
      if (match(p.name) || match('pricing')) out.push({ type: 'Pricing', title: p.name, subtitle: 'Pricing Plan', path: '/pricing' });
    });
    // Contact quick link
    if (match('contact')) out.push({ type: 'Page', title: 'Contact', subtitle: 'Page', path: '/contact' });
    return out.slice(0, 8);
  }, [searchQuery]);

  const go = (path: string) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[activeIndex]) go(results[activeIndex].path);
    } else if (e.key === 'Escape') {
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10, 15, 30, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/nexoratech.jpg"
                alt="Nexora Tech"
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl object-cover transition-transform group-hover:scale-105"
              />
              <span className="text-lg lg:text-xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nexora<span className="gradient-text-blue"> Tech</span>
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen((s) => !s)}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden p-2 rounded-lg text-white hover:bg-white/5"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Search panel */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 px-4 sm:px-6 lg:px-8 py-4"
              style={{ background: 'rgba(10,15,30,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search services, solutions, projects, blog, technologies..."
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                {results.length > 0 && (
                  <motion.ul
                    className="mt-3 space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {results.map((r, i) => (
                      <li key={`${r.path}-${i}`}>
                        <button
                          onMouseEnter={() => setActiveIndex(i)}
                          onClick={() => go(r.path)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                            activeIndex === i ? 'bg-blue-500/15 border border-blue-500/30' : 'hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          <div>
                            <p className="font-medium text-sm text-white">{r.title}</p>
                            <p className="text-xs text-white/40">{r.subtitle}</p>
                          </div>
                          <span className="text-xs text-blue-400">{r.type}</span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {searchQuery.trim() && results.length === 0 && (
                  <p className="mt-4 text-center text-white/40 text-sm">No results found. Try a different query.</p>
                )}

                {results.length > 0 && (
                  <div className="mt-3 flex items-center justify-between text-xs text-white/40">
                    <span className="flex items-center gap-1"><CornerDownLeft size={12} /> to open</span>
                    <span>↑ ↓ to navigate · Esc to close</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-[#0a0f1e] border-l border-white/10 xl:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="/nexoratech.jpg" alt="Nexora Tech" className="w-9 h-9 rounded-xl object-cover" />
                  <span className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Nexora Tech</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="p-5 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" className="btn-primary mt-4 justify-center">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

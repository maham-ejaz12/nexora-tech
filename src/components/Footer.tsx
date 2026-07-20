import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Youtube, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070b16] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/nexoratech.jpg" alt="Nexora Tech" className="w-10 h-10 rounded-xl object-cover" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nexora<span className="gradient-text-blue"> Tech</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              We build intelligent software for the future. From custom development to AI solutions, we help enterprises transform ideas into impactful digital products.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Github, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Custom Software', path: '/services/custom-software-development' },
                { name: 'AI Solutions', path: '/services/ai-solutions' },
                { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
                { name: 'Mobile Apps', path: '/services/mobile-app-development' },
                { name: 'Cyber Security', path: '/services/cyber-security' },
                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/90">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Get the latest insights on software, AI, and digital transformation.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-500/50"
              />
              <button type="submit" className="btn-primary justify-center text-sm !py-2.5">
                <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                {!subscribed && <ArrowRight size={16} />}
              </button>
            </form>
            <div className="mt-5 space-y-2 text-sm text-white/50">
              <div className="flex items-center gap-2"><Mail size={14} /> hello@nexoratech.com</div>
              <div className="flex items-center gap-2"><Phone size={14} /> +1 (415) 555-0199</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco · London · Singapore</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div><p className="text-white/50 text-sm">© {new Date().getFullYear()} Nexora Tech. All rights reserved.</p>
            <p className="text-white/40 text-xs mt-1">Demo Project • Created for learning and portfolio purposes only. This website does not represent a real company or business.</p>
          </div>
          <div className="flex gap-6 text-sm"><Link to="/contact" className="text-white/50 hover:text-white transition-colors">Privacy    Policy</Link>
            <Link to="/contact" className="text-white/50 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="text-white/50 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

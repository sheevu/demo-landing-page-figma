import { useEffect, useMemo, useState } from 'react';
import AuroraLanding from './components/variants/AuroraLanding.jsx';
import NeonLanding from './components/variants/NeonLanding.jsx';
import DawnLanding from './components/variants/DawnLanding.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, PhoneCall, Menu } from 'lucide-react';

const variants = {
  aurora: { label: 'Aurora Glow', component: AuroraLanding, description: 'Original palette inspired by the design mock with glassmorphism and neon gradients.' },
  neon: { label: 'Neon Nights', component: NeonLanding, description: 'High-contrast layout with stacked glass modules and marquee pods.' },
  dawn: { label: 'Dawn Rise', component: DawnLanding, description: 'Warm sunrise gradients, mindful layouts and interactive flows.' }
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portal', href: '#portal' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Testimonials', href: '#testimonials' }
];

export default function App() {
  const [activeVariant, setActiveVariant] = useState('aurora');
  const [navOpen, setNavOpen] = useState(false);

  const ActiveComponent = useMemo(() => variants[activeVariant].component, [activeVariant]);

  useEffect(() => {
    document.documentElement.dataset.theme = activeVariant === 'aurora' ? 'aurora' : activeVariant === 'neon' ? 'neon' : 'dawn';
  }, [activeVariant]);

  const handleNavClose = () => setNavOpen(false);

  return (
    <div>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backdropFilter: 'blur(18px)',
          background: 'rgba(6, 8, 20, 0.82)',
          borderBottom: '1px solid rgba(120, 132, 255, 0.18)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '1rem 0' }}>
          <a href="#about" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(114, 92, 255, 0.65), rgba(98, 202, 255, 0.65))',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700,
                fontSize: '1.1rem'
              }}
            >
              S
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>Sudarshan AI Labs</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Lucknow • MSME Growth Engine</p>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              className="secondary-btn nav-toggle"
              style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center' }}
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>
            <div
              style={{
                position: navOpen ? 'absolute' : 'static',
                top: navOpen ? '5rem' : undefined,
                right: navOpen ? '1.5rem' : undefined,
                display: navOpen ? 'grid' : 'flex',
                gridTemplateColumns: navOpen ? '1fr' : undefined,
                gap: '1rem',
                alignItems: 'center',
                background: navOpen ? 'rgba(12, 16, 34, 0.95)' : 'transparent',
                padding: navOpen ? '1.5rem' : 0,
                borderRadius: navOpen ? '20px' : 0,
                border: navOpen ? '1px solid rgba(120, 132, 255, 0.2)' : 'none'
              }}
              className="nav-stack"
              data-open={navOpen}
            >
              <div className="theme-switcher" style={{ flexWrap: 'wrap' }}>
                <Palette size={18} />
                {Object.entries(variants).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveVariant(key);
                      handleNavClose();
                    }}
                    className={activeVariant === key ? 'active' : ''}
                  >
                    {value.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
                    onClick={handleNavClose}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/919696969696"
                  className="primary-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
                  onClick={handleNavClose}
                >
                  <PhoneCall size={18} /> ₹89 Launchpad
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeVariant}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <section style={{ padding: '2rem 0', borderBottom: '1px solid rgba(120, 132, 255, 0.1)' }}>
            <div className="container" style={{ display: 'grid', gap: '0.8rem' }}>
              <div className="badge" style={{ justifySelf: 'flex-start' }}>
                Variant Mode
              </div>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>{variants[activeVariant].label}</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '620px' }}>{variants[activeVariant].description}</p>
            </div>
          </section>
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      <footer style={{ padding: '2.4rem 0', borderTop: '1px solid rgba(120, 132, 255, 0.1)', background: 'rgba(6, 8, 20, 0.85)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Sudarshan AI Labs. Swadeshi AI for MSMEs across Bharat.
          </p>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <a href="#pricing">Pricing</a>
            <a href="#services">Services</a>
            <a href="#cta">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

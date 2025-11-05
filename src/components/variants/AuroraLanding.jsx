import { motion } from 'framer-motion';
import {
  heroContent,
  valueCards,
  portalSteps,
  howItWorks,
  services,
  uspHighlights,
  missionPoints,
  testimonials,
  pricing,
  eeatHighlights
} from '../../data/content.js';
import { useMemo, useState } from 'react';
import { Sparkles, Zap, Wand2, MessageCircle, ShieldCheck, Play } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
};

export default function AuroraLanding() {
  const [activeService, setActiveService] = useState(services[0]);

  const heroBadge = useMemo(
    () => (
      <motion.span className="badge" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Sparkles size={16} /> {heroContent.badge}
      </motion.span>
    ),
    []
  );

  return (
    <div className="container" data-variant="aurora">
      <section className="section" style={{ paddingTop: '5rem' }}>
        <div className="hero-grid">
          <div>
            {heroBadge}
            <motion.h1
              className="section-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {heroContent.title}
            </motion.h1>
            <motion.p className="section-subtitle" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {heroContent.subtitle}
            </motion.p>
            <motion.p
              style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {heroContent.description}
            </motion.p>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              {heroContent.ctas.map((cta) => (
                <a key={cta.label} href={cta.href} className={cta.primary ? 'primary-btn animate-pulse-glow' : 'secondary-btn'}>
                  {cta.label}
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ marginTop: '1.75rem', fontSize: '1.05rem', color: 'var(--accent-2)' }}
            >
              {heroContent.hindiSupport}
            </motion.p>

            <motion.div className="metrics-row" initial="hidden" animate="visible" variants={cardVariants}>
              {heroContent.metrics.map((metric, idx) => (
                <motion.div key={metric.value} className="metric-card" custom={idx} variants={cardVariants}>
                  <span className="metric-value gradient-text">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="glass-panel"
            style={{ position: 'relative', padding: '2.4rem', minHeight: '540px', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glow-ring"></div>
            <div className="noise-layer"></div>
            <motion.div
              className="floating-orb orb-1"
              animate={{ y: [0, -16, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            />
            <motion.div
              className="floating-orb orb-2"
              animate={{ y: [0, 20, 0], opacity: [0.35, 0.5, 0.35] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>AI Launchpad in Motion</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
                  Watch how Sudarshan Launchpad auto-builds your digital storefront, WhatsApp workflows and Hindi CRM with a single
                  payment.
                </p>
              </div>
              <motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <Play size={18} /> Play product simulation
              </motion.button>
              <div className="marquee" style={{ marginTop: '1.5rem' }}>
                <div className="marquee-track">
                  {[...heroContent.highlights, ...heroContent.highlights].map((chip, index) => (
                    <span key={`${chip}-${index}`} className="tag">
                      <Zap size={16} /> {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="services">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Empowering Bharat’s Businesses</h2>
          <p className="section-subtitle">
            Sudarshan AI Labs is India’s first Swadeshi AI ecosystem. From Lucknow to Leh, we digitise MSMEs, startups and local sellers within 30 minutes.
          </p>
        </motion.div>
        <div className="grid" style={{ marginTop: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {valueCards.map((card, idx) => (
            <motion.div key={card.title} className="glass-panel" style={{ padding: '1.8rem' }} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={cardVariants}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start', gap: '2.5rem' }}>
          <motion.div className="glass-panel" style={{ padding: '2.2rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="badge" style={{ marginBottom: '1.2rem' }}>
              <Wand2 size={16} /> Sudarshan Portal
            </div>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>Uni-Commerce Platform</h3>
            <p className="section-subtitle">
              Re-imagining how India sells, markets and manages commerce online with AI-powered dashboards.
            </p>
            <div className="timeline" style={{ marginTop: '2rem' }}>
              {portalSteps.map((step) => (
                <div key={step.title} className="timeline-item">
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.45rem', fontSize: '0.95rem' }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="glass-panel" style={{ padding: '2.2rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="badge" style={{ marginBottom: '1.2rem' }}>
              <MessageCircle size={16} /> Agentic AI Playbook
            </div>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>How Vyapaar AGI Works</h3>
            <p className="section-subtitle">Five AI automations that turn any offline dukaan into a digital powerhouse.</p>
            <div className="timeline" style={{ marginTop: '2rem' }}>
              {howItWorks.map((step) => (
                <div key={step.title} className="timeline-item">
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.45rem', fontSize: '0.95rem' }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="services-grid">
        <motion.div className="glass-panel" style={{ padding: '2.2rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="grid" style={{ gridTemplateColumns: 'minmax(240px, 280px) 1fr', gap: '2.5rem' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1.2rem' }}>
                <ShieldCheck size={16} /> Growth Control Center
              </div>
              <h3 className="section-title" style={{ fontSize: '2rem' }}>AI-first Services</h3>
              <p className="section-subtitle">Actionable, measurable and local-first services for MSMEs, creators & startups.</p>
              <motion.div
                className="glass-panel"
                style={{ marginTop: '1.8rem', padding: '1.2rem', background: 'rgba(8, 12, 32, 0.65)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.6rem' }}>Featured Service</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{activeService.benefit}</p>
              </motion.div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {services.map((service) => (
                <motion.button
                  key={service.name}
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  className="glass-panel"
                  style={{
                    textAlign: 'left',
                    padding: '1.5rem',
                    background: activeService.name === service.name ? 'rgba(60, 86, 166, 0.35)' : 'rgba(12, 16, 34, 0.55)',
                    borderColor: activeService.name === service.name ? 'rgba(140, 188, 255, 0.55)' : 'rgba(120, 132, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{service.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.65rem', fontSize: '0.95rem' }}>{service.benefit}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section" id="pricing">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Pick a pack, scale your dhandha</h2>
          <p className="section-subtitle">Transparent pricing for MSMEs to control their digital destiny in INR.</p>
        </motion.div>
        <div className="grid" style={{ marginTop: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {pricing.map((plan, idx) => (
            <motion.div key={plan.name} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={cardVariants} custom={idx}>
              <div
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '-1rem',
                  transform: 'rotate(12deg)',
                  background: 'linear-gradient(120deg, rgba(255,255,255,0.12), rgba(140,180,255,0.45))',
                  padding: '0.35rem 1.5rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em'
                }}
              >
                {plan.ribbon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{plan.name}</h3>
              <p style={{ fontSize: '2.4rem', marginTop: '1rem', fontWeight: 700 }}>{plan.price}</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>{plan.description}</p>
              <ul style={{ marginTop: '1.4rem', display: 'grid', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldCheck size={16} color="var(--accent-2)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="primary-btn" style={{ marginTop: '1.8rem', width: '100%' }}>
                Book on WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="mission">
        <motion.div className="glass-panel" style={{ padding: '2.4rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1.2rem' }}>
                <Sparkles size={16} /> Dharmic Digital Frontier
              </div>
              <h3 className="section-title" style={{ fontSize: '2rem' }}>Impact & Mission</h3>
              <p className="section-subtitle">Technology serving Dharma — uplifting society with purposeful innovation.</p>
              <ul style={{ marginTop: '1.4rem', display: 'grid', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                {missionPoints.map((point) => (
                  <li key={point} style={{ display: 'flex', gap: '0.6rem' }}>
                    <span style={{ color: 'var(--accent-3)' }}>✺</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Why Sudarshan Leads</h4>
              <ul style={{ display: 'grid', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                {uspHighlights.map((usp) => (
                  <li key={usp} style={{ display: 'flex', gap: '0.6rem' }}>
                    <span style={{ color: 'var(--accent-2)' }}>✶</span>
                    <span>{usp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>EEAT Highlights</h4>
              <div className="grid" style={{ gap: '1rem' }}>
                {eeatHighlights.map((item) => (
                  <div key={item.pillar} className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(9, 12, 34, 0.65)' }}>
                    <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-2)' }}>
                      {item.pillar}
                    </p>
                    <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section" id="testimonials">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">What Lucknow says</h2>
          <p className="section-subtitle">Direct words from local experiments powered by Sudarshan Launchpad.</p>
        </motion.div>
        <div className="testimonials-grid" style={{ marginTop: '2.2rem' }}>
          {testimonials.map((testimonial, idx) => (
            <motion.div key={testimonial.author} className="glass-panel" style={{ padding: '1.8rem' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={cardVariants} custom={idx}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{testimonial.quote}</p>
              <p style={{ marginTop: '1.1rem', fontWeight: 600 }}>{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="cta" style={{ paddingBottom: '5rem' }}>
        <motion.div className="glass-panel" style={{ padding: '2.4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="glow-ring"></div>
          <div className="noise-layer"></div>
          <motion.h2 className="section-title" style={{ marginBottom: '1rem' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Launch your AI HQ for ₹89
          </motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto' }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            Join the Swadeshi AI revolution today. Digitise your business in 30 minutes with bilingual AI, WhatsApp CRM and Udyam support included.
          </motion.p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <button className="primary-btn">Start with ₹89 now</button>
            <button className="secondary-btn">DM on WhatsApp</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

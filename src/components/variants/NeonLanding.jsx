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
import { useMemo } from 'react';
import { Flame, Sparkle, MessageCircleHeart, Rocket, ShieldCheck, Brain, ArrowUpRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.6, ease: 'easeOut' }
  })
};

const FeatureBadge = ({ icon: Icon, label }) => (
  <span className="tag">
    <Icon size={16} /> {label}
  </span>
);

export default function NeonLanding() {
  const heroHighlight = useMemo(
    () => (
      <motion.div
        className="glass-panel"
        style={{ padding: '1.4rem', display: 'inline-flex', alignItems: 'center', gap: '1rem', backdropFilter: 'blur(20px)' }}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flame size={20} color="var(--accent-3)" />
        <div>
          <p style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-2)' }}>Vyapaar Growth Signal</p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Weekly WhatsApp playbooks for Hindi-first campaigns.</p>
        </div>
      </motion.div>
    ),
    []
  );

  return (
    <div className="container" data-variant="neon">
      <section className="section" style={{ paddingTop: '5rem' }}>
        <div className="glass-panel" style={{ padding: '2.8rem', position: 'relative', overflow: 'hidden' }}>
          <div className="glow-ring"></div>
          <div className="noise-layer"></div>
          <div style={{ display: 'grid', gap: '2.8rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center' }}>
            <div>
              {heroHighlight}
              <motion.h1
                className="section-title"
                style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginTop: '2rem' }}
                initial="hidden"
                animate="show"
                variants={fadeIn}
              >
                India’s Chillest AI Marketing HQ from Lucknow
              </motion.h1>
              <motion.p className="section-subtitle" style={{ marginTop: '1rem' }} initial="hidden" animate="show" variants={fadeIn} custom={1}>
                Sudarshan AI Labs builds Uni-commerce portals, Hindi-ready content and always-on campaigns for Gomti Nagar and your mohalla.
              </motion.p>
              <motion.div className="hero-actions" style={{ marginTop: '2.2rem' }} initial="hidden" animate="show" variants={fadeIn} custom={2}>
                <button className="primary-btn" style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center' }}>
                  Launch my AI HQ <ArrowUpRight size={18} />
                </button>
                <button className="secondary-btn">Schedule growth call</button>
              </motion.div>
              <motion.div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }} initial="hidden" animate="show" variants={fadeIn} custom={3}>
                {heroContent.highlights.slice(0, 4).map((item) => (
                  <FeatureBadge key={item} icon={Sparkle} label={item} />
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel"
              style={{ padding: '2rem', background: 'linear-gradient(145deg, rgba(40, 32, 78, 0.7), rgba(14, 12, 38, 0.9))', borderRadius: '26px' }}
            >
              <div style={{ display: 'grid', gap: '1.4rem' }}>
                {heroContent.metrics.map((metric) => (
                  <div key={metric.value} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 700 }} className="gradient-text">
                      {metric.value}
                    </span>
                    <p style={{ flex: 1, textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.95rem', marginLeft: '1.2rem' }}>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ marginTop: '2rem', padding: '1.2rem', borderRadius: '18px', background: 'rgba(90, 38, 114, 0.32)' }}
              >
                <p style={{ color: 'var(--accent-3)', fontWeight: 600, fontSize: '0.95rem' }}>Hindi Support Line</p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{heroContent.hindiSupport}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid" style={{ gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {valueCards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="glass-panel"
              style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={idx}
            >
              <div className="glow-ring"></div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.8rem' }}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <motion.div className="glass-panel" style={{ padding: '2.8rem', display: 'grid', gap: '2.8rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>
                <Rocket size={16} /> Launch ritual
              </div>
              <h3 className="section-title" style={{ fontSize: '2rem' }}>₹89 Uni-commerce Launch</h3>
              <p className="section-subtitle">Everything your dukaan needs, orchestrated by Sudarshan Portal.</p>
            </div>
            <div className="tag-cloud">
              {portalSteps.map((step) => (
                <FeatureBadge key={step.title} icon={Brain} label={step.title} />
              ))}
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {howItWorks.map((step, idx) => (
              <motion.div key={step.title} className="glass-panel" style={{ padding: '1.8rem', background: 'rgba(16, 20, 44, 0.7)' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-70px' }} variants={fadeIn} custom={idx}>
                <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-2)' }}>Step {idx + 1}</p>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '0.75rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section">
        <div className="grid" style={{ gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: '2.5rem' }}>
          <motion.div className="glass-panel" style={{ padding: '2.2rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <MessageCircleHeart size={16} /> MSME Love Stack
            </div>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>Service pods</h3>
            <p className="section-subtitle">Curated pods tailored for MSMEs, creators and startups.</p>
            <ul style={{ marginTop: '2rem', display: 'grid', gap: '0.9rem', color: 'var(--text-secondary)' }}>
              {uspHighlights.map((usp) => (
                <li key={usp} style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-3)' }}>✺</span>
                  <span>{usp}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="glass-panel"
            style={{ padding: '2.2rem' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {services.map((service, idx) => (
                <motion.div key={service.name} className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(6, 10, 32, 0.62)' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeIn} custom={idx}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{service.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>{service.benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="pricing-neon">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">Pick a pack, scale your dhandha with full control.</p>
        </motion.div>
        <div className="grid" style={{ marginTop: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {pricing.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className="glass-panel"
              style={{ padding: '2.4rem', borderRadius: '28px', position: 'relative', overflow: 'hidden' }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeIn}
              custom={idx}
            >
              <div className="glow-ring"></div>
              <p style={{ color: 'var(--accent-3)', letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase' }}>{plan.ribbon}</p>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '0.6rem' }}>{plan.name}</h3>
              <p style={{ fontSize: '2.6rem', fontWeight: 700, marginTop: '0.8rem' }}>{plan.price}</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.7rem' }}>{plan.description}</p>
              <ul style={{ marginTop: '1.4rem', display: 'grid', gap: '0.65rem' }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
                    <ShieldCheck size={16} color="var(--accent-2)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="primary-btn" style={{ marginTop: '2rem', width: '100%' }}>
                Book on WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <motion.div className="glass-panel" style={{ padding: '2.6rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Mission: Atmanirbhar Bharat</h2>
          <p className="section-subtitle">Ethical AI, vernacular-first playbooks and transparent growth rituals.</p>
          <div className="grid" style={{ marginTop: '2.4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.8rem' }}>Mission Points</h4>
              <ul style={{ display: 'grid', gap: '0.85rem', color: 'var(--text-secondary)' }}>
                {missionPoints.map((point) => (
                  <li key={point} style={{ display: 'flex', gap: '0.6rem' }}>
                    <span style={{ color: 'var(--accent-2)' }}>✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.8rem' }}>EEAT Confidence</h4>
              <ul style={{ display: 'grid', gap: '0.85rem', color: 'var(--text-secondary)' }}>
                {eeatHighlights.map((item) => (
                  <li key={item.pillar}>
                    <strong style={{ color: 'var(--accent-3)' }}>{item.pillar}</strong>
                    <p style={{ marginTop: '0.35rem' }}>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.8rem' }}>Campaign Pods</h4>
              <ul style={{ display: 'grid', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                {services.slice(0, 3).map((service) => (
                  <li key={service.name}>
                    <strong>{service.name}</strong>
                    <p style={{ marginTop: '0.35rem' }}>{service.benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Lucknow Scene Map</h2>
          <p className="section-subtitle">Hyperlocal results from real Sudarshan campaigns.</p>
        </motion.div>
        <div className="testimonials-grid" style={{ marginTop: '2.2rem' }}>
          {testimonials.map((testimonial, idx) => (
            <motion.div key={testimonial.author} className="glass-panel" style={{ padding: '2rem' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeIn} custom={idx}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{testimonial.quote}</p>
              <p style={{ marginTop: '1.1rem', fontWeight: 600 }}>{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '5rem' }}>
        <motion.div className="glass-panel" style={{ padding: '2.8rem', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Join the Swadeshi AI Revolution</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Digitise your business in 30 minutes. Bilingual AI, WhatsApp CRM and Udyam support included.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <button className="primary-btn">Start with ₹89 now</button>
            <button className="secondary-btn">Chat with a mentor</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

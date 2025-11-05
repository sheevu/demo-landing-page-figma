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
import { useState } from 'react';
import { Sun, Compass, Sparkles, Leaf, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

const riseAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: 'easeOut' }
  })
};

export default function DawnLanding() {
  const [selectedStep, setSelectedStep] = useState(howItWorks[0]);

  return (
    <div className="container" data-variant="dawn">
      <section className="section" style={{ paddingTop: '5rem' }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div initial="hidden" animate="show" variants={riseAnimation}>
            <span className="badge" style={{ background: 'rgba(255, 196, 145, 0.18)', borderColor: 'rgba(255, 196, 145, 0.35)', color: 'var(--accent)' }}>
              <Sun size={16} /> Dharmic Digital Frontier
            </span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.6rem, 4.2vw, 3.6rem)', marginTop: '1.8rem' }}>
              Vyapaar ka AI Yug – हर दुकानदार की डिजिटल क्रांति
            </h1>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Empathy-led AI for Bharat’s MSMEs. Sudarshan AI Labs fuses Sanskriti with Silicon for ethical, inclusive growth.
            </p>
            <div className="hero-actions" style={{ marginTop: '2.2rem' }}>
              <button className="primary-btn" style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center' }}>
                Start ₹89 Journey <ArrowRight size={18} />
              </button>
              <button className="secondary-btn">Claim Udyam Certificate</button>
            </div>
            <div style={{ marginTop: '2.4rem', display: 'grid', gap: '1.2rem' }}>
              {heroContent.metrics.map((metric, idx) => (
                <motion.div key={metric.value} className="glass-panel" style={{ padding: '1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={riseAnimation} custom={idx}>
                  <div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{metric.label}</p>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem' }}>{heroContent.description}</p>
                  </div>
                  <span className="gradient-text" style={{ fontSize: '2rem', fontWeight: 700 }}>{metric.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="glass-panel" style={{ padding: '2.6rem', position: 'relative', overflow: 'hidden' }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="glow-ring"></div>
            <div className="noise-layer"></div>
            <div style={{ display: 'grid', gap: '1.8rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Empowering Bharat’s Businesses</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
                  Every Indian business should own its digital identity. We make it possible in 30 minutes.
                </p>
              </div>
              <div className="grid" style={{ gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                {valueCards.map((card) => (
                  <div key={card.title} className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(42, 26, 48, 0.55)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{card.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.55rem', fontSize: '0.9rem' }}>{card.description}</p>
                  </div>
                ))}
              </div>
              <div className="tag-cloud">
                {heroContent.highlights.map((item) => (
                  <span key={item} className="tag">
                    <Sparkles size={16} /> {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <motion.div className="glass-panel" style={{ padding: '2.6rem', display: 'grid', gap: '2.4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem', background: 'rgba(255, 214, 185, 0.18)', borderColor: 'rgba(255, 214, 185, 0.35)', color: 'var(--accent)' }}>
              <Compass size={16} /> Vyapaar AGI Journey
            </span>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>How it works</h3>
            <p className="section-subtitle">Five mindful automations guiding your digital leap.</p>
            <div style={{ marginTop: '2rem', display: 'grid', gap: '0.8rem' }}>
              {howItWorks.map((step) => (
                <button
                  key={step.title}
                  onClick={() => setSelectedStep(step)}
                  className="glass-panel"
                  style={{
                    textAlign: 'left',
                    padding: '1rem 1.2rem',
                    borderRadius: '16px',
                    borderColor: selectedStep.title === step.title ? 'rgba(255, 200, 160, 0.6)' : 'rgba(120, 132, 255, 0.2)',
                    background: selectedStep.title === step.title ? 'rgba(255, 202, 160, 0.18)' : 'rgba(16, 12, 38, 0.45)',
                    cursor: 'pointer'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem', fontSize: '0.92rem' }}>{step.detail}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255, 196, 145, 0.12)', border: '1px solid rgba(255, 196, 145, 0.32)' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600 }}>Focus of the week</h4>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.8rem' }}>{selectedStep.detail}</p>
            <div style={{ marginTop: '1.8rem', display: 'grid', gap: '0.7rem', color: 'var(--text-secondary)' }}>
              {portalSteps.slice(0, 3).map((step) => (
                <div key={step.title} style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-2)' }}>➤</span>
                  <span>{step.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.2rem' }}>
          {services.map((service, idx) => (
            <motion.div key={service.name} className="glass-panel" style={{ padding: '1.8rem' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={riseAnimation} custom={idx}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{service.name}</h4>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>{service.benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" id="pricing-dawn">
        <motion.div className="glass-panel" style={{ padding: '2.6rem' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Pick a pack, scale your dhandha</h2>
          <p className="section-subtitle">Transparent growth rituals for every stage of your vyapaar.</p>
          <div className="grid" style={{ marginTop: '2.4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.8rem' }}>
            {pricing.map((plan, idx) => (
              <motion.div key={plan.name} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', background: 'rgba(20, 12, 32, 0.65)' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={riseAnimation} custom={idx}>
                <p style={{ color: 'var(--accent-3)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{plan.ribbon}</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0.6rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '0.8rem' }}>{plan.price}</p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.6rem' }}>{plan.description}</p>
                <ul style={{ marginTop: '1.2rem', display: 'grid', gap: '0.5rem' }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: 'var(--text-secondary)' }}>
                      <ShieldCheck size={16} color="var(--accent-2)" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="primary-btn" style={{ marginTop: '1.6rem', width: '100%' }}>
                  Book on WhatsApp
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div className="glass-panel" style={{ padding: '2.6rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <h3 className="section-title" style={{ fontSize: '1.9rem' }}>Why Sudarshan leads</h3>
            <ul style={{ display: 'grid', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              {uspHighlights.map((usp) => (
                <li key={usp} style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent)' }}>✺</span>
                  <span>{usp}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem' }}>Mission</h4>
            <ul style={{ display: 'grid', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              {missionPoints.map((point) => (
                <li key={point} style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-2)' }}>➤</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem' }}>EEAT Highlights</h4>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {eeatHighlights.map((item) => (
                <div key={item.pillar} className="glass-panel" style={{ padding: '1.2rem', background: 'rgba(255, 214, 185, 0.1)', borderColor: 'rgba(255, 214, 185, 0.3)' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>{item.pillar}</p>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Stories of Lucknow, Surat and Varanasi entrepreneurs thriving with Sudarshan.</p>
        </motion.div>
        <div className="testimonials-grid" style={{ marginTop: '2.2rem' }}>
          {testimonials.map((testimonial, idx) => (
            <motion.div key={testimonial.author} className="glass-panel" style={{ padding: '1.8rem' }} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={riseAnimation} custom={idx}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{testimonial.quote}</p>
              <p style={{ marginTop: '1.1rem', fontWeight: 600 }}>{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '5rem' }}>
        <motion.div className="glass-panel" style={{ padding: '2.6rem', display: 'grid', gap: '2.4rem', alignItems: 'center', textAlign: 'center' }} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <h2 className="section-title">Join the Swadeshi AI movement</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Digitise your business in 30 minutes — bilingual AI, WhatsApp CRM and Udyam support included.
            </p>
          </div>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <button className="primary-btn">Start with ₹89 now</button>
            <button className="secondary-btn">Talk to a human expert</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Leaf size={16} /> Ethical AI for Bharat
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={16} /> Lucknow HQ, serving pan-India
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

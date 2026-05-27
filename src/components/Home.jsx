import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: '✂️', title: 'Expert Stylists', text: 'Choose from our team of certified professionals with years of experience.' },
    { icon: '💇‍♀️', title: 'Premium Styles', text: 'From classic cuts to trending looks — we bring your vision to life.' },
    { icon: '💳', title: 'Easy Booking', text: 'Book your preferred stylist instantly. Secure UPI payments.' },
  ];

  const testimonials = [
    { name: 'Sneha K.', text: '"Absolutely love how Priya does my balayage! Best salon in Hyderabad."', rating: 5 },
    { name: 'Rahul M.', text: '"Arun\'s beard grooming is unmatched. Been coming here for 2 years!"', rating: 5 },
    { name: 'Anita R.', text: '"Neah styled my wedding hair — it was absolutely breathtaking."', rating: 5 },
  ];

  return (
    <>
      {/* HERO */}
      <section id="hero" className="salon-hero">
        <div className="hero-geo"></div>
        <div className="hero-grid-line"></div>
        <div className="hero-content">
          <div className="hero-tag hero-anim-fade hero-anim-fade-1">
            <span>Kukatpally, Hyderabad</span>
          </div>
          <h1 className="hero-h1 hero-anim-fade hero-anim-fade-2">
            Your Look,<br />
            <em>Your Stylist</em>
          </h1>
          <p className="hero-sub hero-anim-fade hero-anim-fade-3">
            Book your favorite stylist — not just any available slot. Premium haircuts, colors, and treatments tailored to you.
          </p>
          <div className="hero-actions hero-anim-fade hero-anim-fade-4">
            <Link to="/stylists" className="btn-primary"><span>Book a Stylist</span></Link>
            <Link to="/styles" className="btn-ghost">
              <span>Explore Styles</span>
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-scroll-hint hero-anim-fade hero-anim-fade-5">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="services" style={{ padding: '6rem 0', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="section-tag reveal"><span>Why Choose Us</span></div>
          <div className="services-header" style={{ marginBottom: '3rem' }}>
            <h2 className="section-h2 reveal">Premium Salon<br /><em style={{ color: 'var(--gold)' }}>Experience</em></h2>
            <p className="services-desc reveal">
              We believe every haircut deserves the right stylist. Browse our expert team, see their styles, and book with confidence.
            </p>
          </div>
          <div className="services-grid reveal">
            {features.map((f, i) => (
              <div className="service-card" key={i} style={{ cursor: 'default' }}>
                <div className="service-num">{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 className="service-title">{f.title}</h3>
                <p className="service-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '6rem 0', background: 'var(--green-deep)', color: 'var(--white)' }}>
        <div className="section-inner">
          <div className="section-tag reveal" style={{ '--gold': 'var(--gold)' }}>
            <span style={{ color: 'var(--gold)' }}>Testimonials</span>
          </div>
          <h2 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '3rem' }}>
            What Our <em style={{ color: 'var(--gold-light)' }}>Clients Say</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="reveal" style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,146,42,0.15)',
                padding: '2rem',
                borderRadius: '0',
              }}>
                <div style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.15em' }}>
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  {t.text}
                </p>
                <strong style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--gold-light)' }}>{t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', background: 'var(--white)', textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}><span>Ready?</span></div>
          <h2 className="section-h2 reveal" style={{ marginBottom: '1rem' }}>
            Book Your <em style={{ color: 'var(--gold)' }}>Appointment Today</em>
          </h2>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Choose your preferred stylist, pick a service, and pay securely with UPI. It's that simple.
          </p>
          <div className="reveal">
            <Link to="/stylists" className="btn-primary"><span>Book Now</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

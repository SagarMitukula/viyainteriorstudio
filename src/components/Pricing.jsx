import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pricingData } from '../data/stylists';

export default function Pricing() {
  const [activeCat, setActiveCat] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const icons = ['💇‍♀️', '🧔', '🎨', '✨'];

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-tag reveal"><span>Pricing</span></div>
          <h1 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Transparent <em style={{ color: 'var(--gold-light)' }}>Pricing</em>
          </h1>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: 500 }}>
            No surprises. What you see is what you pay. Premium services at honest prices.
          </p>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '4rem' }}>
        {/* Category Tabs */}
        <div className="reveal" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1rem' }}>
          {pricingData.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCat(i)}
              className={`pricing-tab ${activeCat === i ? 'active' : ''}`}
            >
              <span style={{ marginRight: '0.4rem' }}>{icons[i]}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Price Table */}
        <div className="reveal" style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)' }}>
          <div style={{ background: 'var(--green-deep)', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', color: 'var(--gold-light)', fontWeight: 400 }}>
              {icons[activeCat]} {pricingData[activeCat].category}
            </h3>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>All prices inclusive of tax</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pricingData[activeCat].items.map((item, i) => (
              <div key={item.name} className="pricing-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 2rem', borderBottom: i < pricingData[activeCat].items.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                transition: 'background 0.3s',
              }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.2rem' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {item.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <strong style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', color: 'var(--gold)' }}>₹{item.price.toLocaleString('en-IN')}</strong>
                  <Link to={`/booking?service=${encodeURIComponent(item.name)}&price=${item.price}`} className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.65rem' }}>
                    <span>Book</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="reveal" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--gold-pale)', border: '1px solid var(--gold)' }}>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--bronze)' }}>
            <strong>💡 Note:</strong> Prices may vary based on hair length, thickness, and stylist seniority. 
            Final pricing will be confirmed at the salon. We accept UPI, cards, and cash.
          </p>
        </div>
      </div>
    </div>
  );
}

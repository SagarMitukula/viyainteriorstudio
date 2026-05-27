import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import stylists from '../data/stylists';
import { useAuth } from '../context/AuthContext';

const avatarColors = ['#c8922a', '#8b5e3c', '#254d38', '#4a7a35', '#5c3560'];

export default function StylistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const stylist = stylists.find((s) => s.id === Number(id));
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!stylist) {
    return (
      <div className="page-content" style={{ padding: '8rem 4rem', textAlign: 'center' }}>
        <h2>Stylist not found</h2>
        <Link to="/stylists" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}><span>Back to Stylists</span></Link>
      </div>
    );
  }

  const idx = stylists.indexOf(stylist);
  const avatarColor = `linear-gradient(135deg, ${avatarColors[idx % avatarColors.length]}, ${avatarColors[(idx + 1) % avatarColors.length]})`;

  const handleBook = (service) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedService(service);
    navigate(`/booking?stylist=${stylist.id}&service=${encodeURIComponent(service.name)}&price=${service.price}`);
  };

  return (
    <div className="page-content">
      <div className="page-hero" style={{ minHeight: 'auto', padding: '10rem 0 4rem' }}>
        <div className="section-inner">
          <Link to="/stylists" className="btn-ghost" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
            <span className="arrow" style={{ transform: 'rotate(180deg)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span>Back to Stylists</span>
          </Link>
          <div className="stylist-detail-header reveal">
            <div className="stylist-detail-avatar" style={{ background: avatarColor }}>
              <span>{stylist.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="stylist-detail-info">
              <div className="stylist-card-rating" style={{ marginBottom: '0.5rem' }}>
                <span className="stars">{'★'.repeat(Math.floor(stylist.rating))}</span>
                <span>{stylist.rating}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>({stylist.reviews} reviews)</span>
              </div>
              <h1 className="stylist-detail-name">{stylist.name}</h1>
              <p className="stylist-detail-title">{stylist.title}</p>
              <p className="stylist-detail-experience">🎓 {stylist.experience} · 📍 Kukatpally, Hyderabad</p>
              <div className="stylist-detail-avail">
                {stylist.availability.map((d) => (
                  <span key={d} className="avail-badge">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '4rem' }}>
        {/* BIO */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <h2 className="section-h2" style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>About</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: 600 }}>{stylist.bio}</p>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}><strong>Education:</strong> {stylist.education}</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            {stylist.certifications.map((c) => (
              <span key={c} style={{ background: 'var(--gold-pale)', color: 'var(--bronze)', padding: '0.25rem 0.75rem', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.05em' }}>{c}</span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-h2" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Services &amp; Pricing</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(0,0,0,0.06)' }}>
            {stylist.services.map((svc) => (
              <div key={svc.name} className="service-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'var(--white)', padding: '1.25rem 1.5rem', transition: 'background 0.3s',
              }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.25rem' }}>{svc.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {svc.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <strong style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', color: 'var(--gold)' }}>₹{svc.price.toLocaleString('en-IN')}</strong>
                  <button
                    onClick={() => handleBook(svc)}
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}
                  >
                    <span>Book</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-h2" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Certifications</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {stylist.certifications.map((c) => (
              <div key={c} style={{
                border: '1px solid var(--gold)',
                padding: '1.5rem 2rem',
                textAlign: 'center',
                minWidth: 160,
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
                <p style={{ fontSize: '0.82rem', fontWeight: 500 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

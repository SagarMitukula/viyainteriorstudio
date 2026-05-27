import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import stylists from '../data/stylists';

const avatarColors = ['#c8922a', '#8b5e3c', '#254d38', '#4a7a35', '#5c3560'];

export default function Stylists() {
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

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-tag reveal"><span>Our Team</span></div>
          <h1 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Meet Your <em style={{ color: 'var(--gold-light)' }}>Stylists</em>
          </h1>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: 500 }}>
            Each of our stylists brings unique expertise. Browse their profiles, check their work, and book the one who's right for you.
          </p>
        </div>
      </div>
      <div className="section-inner" style={{ padding: '4rem' }}>
        <div className="stylists-grid">
          {stylists.map((s, idx) => (
            <Link to={`/stylist/${s.id}`} key={s.id} className="stylist-card reveal">
              <div className="stylist-card-img" style={{ background: `linear-gradient(135deg, ${avatarColors[idx % avatarColors.length]}, ${avatarColors[(idx + 1) % avatarColors.length]})` }}>
                <span className="stylist-avatar-initial">{s.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="stylist-card-body">
                <div className="stylist-card-rating">
                  <span className="stars">{'★'.repeat(Math.floor(s.rating))}</span>
                  <span>{s.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({s.reviews} reviews)</span>
                </div>
                <h3 className="stylist-card-name">{s.name}</h3>
                <p className="stylist-card-title">{s.title}</p>
                <p className="stylist-card-specialty">{s.specialty}</p>
                <div className="stylist-card-meta">
                  <span>🎓 {s.experience}</span>
                  <span>📅 {s.availability.length} days/week</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

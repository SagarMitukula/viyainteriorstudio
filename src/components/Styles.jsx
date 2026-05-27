import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../data/stylists';

export default function Styles() {
  const [filter, setFilter] = useState('All');

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

  const categories = ['All', ...new Set(styles.map((s) => s.category))];
  const filtered = filter === 'All' ? styles : styles.filter((s) => s.category === filter);

  const gradientMap = {
    'Styling': 'linear-gradient(135deg, #c8922a, #8b5e3c)',
    'Cuts': 'linear-gradient(135deg, #254d38, #1a3a2a)',
    'Color': 'linear-gradient(135deg, #5c3560, #8b5e3c)',
    'Treatments': 'linear-gradient(135deg, #1e2d3a, #354a6b)',
    'Grooming': 'linear-gradient(135deg, #2d4a1e, #4a7a35)',
  };

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-tag reveal"><span>Gallery</span></div>
          <h1 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Explore <em style={{ color: 'var(--gold-light)' }}>Styles</em>
          </h1>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: 500 }}>
            Browse our collection of hairstyles — from classic cuts to trending colors. Find the look that inspires you.
          </p>
        </div>
      </div>

      <div className="section-inner" style={{ padding: '3rem 4rem 5rem' }}>
        {/* Filter */}
        <div className="styles-filter reveal" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'filter-btn active' : 'filter-btn'}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="styles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((style, i) => (
            <div key={style.id} className="style-card reveal" style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden', transition: 'transform 0.4s, box-shadow 0.4s' }}>
              <div className="style-card-img" style={{
                height: 200,
                background: gradientMap[style.category] || 'linear-gradient(135deg, var(--green-light), var(--green-mid))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.06\'/%3E%3C/svg%3E")', opacity: 0.5 }}></div>
                <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1, opacity: 0.4, filter: 'grayscale(0.5)' }}>
                  {style.category === 'Cuts' ? '✂️' : style.category === 'Color' ? '🎨' : style.category === 'Styling' ? '💇‍♀️' : style.category === 'Treatments' ? '✨' : '🧔'}
                </span>
                <span className="style-cat-badge" style={{
                  position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', color: 'var(--white)',
                  padding: '0.25rem 0.75rem', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', zIndex: 2,
                }}>{style.category}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.5rem' }}>{style.name}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>{style.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', color: 'var(--gold)' }}>{style.price}</strong>
                  <Link to="/stylists" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.65rem' }}>
                    <span>Book</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

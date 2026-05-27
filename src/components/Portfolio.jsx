const items = [
  {
    wide: true,
    cat: 'Residential · Kukatpally',
    name: 'The Prasad Residence — 3BHK Luxury Flat',
    bgStyle: {},
    geo: (
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
        <rect x="10" y="10" width="80" height="80" />
        <rect x="20" y="20" width="60" height="60" />
        <line x1="10" y1="10" x2="20" y2="20" />
        <line x1="90" y1="10" x2="80" y2="20" />
        <line x1="90" y1="90" x2="80" y2="80" />
        <line x1="10" y1="90" x2="20" y2="80" />
      </svg>
    )
  },
  {
    wide: false,
    cat: 'Commercial · KPHB',
    name: 'Nexus Tech Office',
    bgStyle: { background: 'linear-gradient(135deg,#2d4a1e,#4a7a35)' },
    geo: (
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="10" />
      </svg>
    )
  },
  {
    wide: false,
    cat: 'Residential · Madhapur',
    name: 'Lakeview Penthouse',
    bgStyle: { background: 'linear-gradient(135deg,#3a2d1e,#6b5235)' },
    geo: (
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
        <polygon points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" />
      </svg>
    )
  },
  {
    wide: true,
    cat: 'Hospitality · Banjara Hills',
    name: 'Olive & Oak Café — Concept Design',
    bgStyle: { background: 'linear-gradient(135deg,#1e2d3a,#354a6b)' },
    geo: (
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
        <line x1="50" y1="0" x2="50" y2="100" />
        <line x1="0" y1="50" x2="100" y2="50" />
      </svg>
    )
  },
  {
    wide: false,
    cat: 'Residential · Miyapur',
    name: 'Serene Villa — Master Suite',
    bgStyle: { background: 'linear-gradient(135deg,#2d1e2d,#5c3560)' },
    geo: (
      <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
        <rect x="15" y="15" width="30" height="30" />
        <rect x="55" y="15" width="30" height="30" />
        <rect x="15" y="55" width="30" height="30" />
        <rect x="55" y="55" width="30" height="30" />
      </svg>
    )
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-inner">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
          <div>
            <div className="section-tag"><span>Our Work</span></div>
            <h2 className="section-h2">Featured Projects</h2>
          </div>
          <a href="#contact" style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
            View All →
          </a>
        </div>
      </div>
      <div className="section-inner" style={{ paddingTop: 0 }}>
        <div className="portfolio-grid reveal">
          {items.map((item, i) => (
            <div className={`portfolio-item ${item.wide ? 'span2' : ''}`} key={i}>
              <div className="portfolio-bg" style={item.bgStyle}></div>
              <div className="portfolio-geo">{item.geo}</div>
              <div className="portfolio-overlay">
                <div className="portfolio-cat">{item.cat}</div>
                <div className="portfolio-name">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

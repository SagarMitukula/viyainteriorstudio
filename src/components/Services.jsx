const services = [
  {
    num: '01',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="28" rx="1" />
        <path d="M14 10V6M34 10V6M6 20h36" />
      </svg>
    ),
    title: 'Residential Design',
    text: 'Complete home interior solutions — living rooms, bedrooms, kitchens, and more — tailored to your lifestyle and aesthetic preferences.'
  },
  {
    num: '02',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="32" rx="1" />
        <path d="M8 20h32M20 8v32M28 8v32M8 28h32" />
      </svg>
    ),
    title: 'Commercial Spaces',
    text: 'Inspiring office environments and retail spaces designed to boost productivity, reflect brand identity, and impress clients.'
  },
  {
    num: '03',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 38V18l14-10 14 10v20" />
        <rect x="18" y="26" width="12" height="12" />
        <path d="M24 8v10" />
      </svg>
    ),
    title: 'Turnkey Projects',
    text: 'End-to-end project management from concept development to final furnishing — seamless, stress-free, and delivered on schedule.'
  },
  {
    num: '04',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="30" width="8" height="12" />
        <rect x="20" y="20" width="8" height="22" />
        <rect x="34" y="10" width="8" height="32" />
      </svg>
    ),
    title: '3D Visualization',
    text: 'Photorealistic renders so you can experience your new space before a single nail is hammered — clarity and confidence, guaranteed.'
  },
  {
    num: '05',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l6 4" />
      </svg>
    ),
    title: 'Modular Furniture',
    text: 'Bespoke modular kitchens, wardrobes, and storage solutions crafted to maximise space while reflecting your personal taste.'
  },
  {
    num: '06',
    icon: (
      <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36l8-8 6 6 10-12" />
        <circle cx="36" cy="12" r="5" />
      </svg>
    ),
    title: 'Renovation & Refresh',
    text: 'Breathe new life into existing spaces with targeted renovations, colour consultancy, and smart upgrades that transform the ordinary.'
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="services-header reveal">
          <div>
            <div className="section-tag"><span>What We Do</span></div>
            <h2 className="section-h2">Crafting Spaces,<br />Elevating Lives</h2>
          </div>
          <p className="services-desc">
            From intimate residences to expansive commercial environments, our team brings vision and technical mastery together — delivering interiors that are beautiful, functional, and timeless.
          </p>
        </div>
        <div className="services-grid reveal">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              {s.icon}
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

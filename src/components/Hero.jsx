export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-geo"></div>
      <div className="hero-grid-line"></div>
      <div className="hero-content">
        <div className="hero-tag hero-anim-fade hero-anim-fade-1">
          <span>Kukatpally, Hyderabad</span>
        </div>
        <h1 className="hero-h1 hero-anim-fade hero-anim-fade-2">
          Spaces That Tell<br />
          <em>Your Story</em>
        </h1>
        <p className="hero-sub hero-anim-fade hero-anim-fade-3">
          Viya Interior Studio transforms houses into homes and offices into inspiring environments — with precision, artistry, and an unwavering commitment to craft.
        </p>
        <div className="hero-actions hero-anim-fade hero-anim-fade-4">
          <a href="#contact" className="btn-primary"><span>Start Your Project</span></a>
          <a href="#portfolio" className="btn-ghost">
            <span>View Work</span>
            <span className="arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint hero-anim-fade hero-anim-fade-5">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

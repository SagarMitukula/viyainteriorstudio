const steps = [
  {
    num: '01',
    title: 'Discovery',
    text: 'We listen intently to understand your vision, lifestyle, budget, and the story you want your space to tell.'
  },
  {
    num: '02',
    title: 'Concept Design',
    text: 'Our designers develop mood boards, space plans, and material palettes that bring your vision to life on paper first.'
  },
  {
    num: '03',
    title: 'Execution',
    text: 'Skilled craftsmen and project managers execute flawlessly, keeping you informed every step of the way.'
  },
  {
    num: '04',
    title: 'Handover',
    text: 'We deliver a fully styled, client-ready space — and stay on to ensure your complete satisfaction beyond move-in day.'
  }
];

export default function Process() {
  return (
    <section id="process">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}><span>How We Work</span></div>
          <h2 className="section-h2">Our Design Process</h2>
        </div>
        <div className="process-steps reveal">
          {steps.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="process-num">{s.num}</div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

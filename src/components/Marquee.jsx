const items = [
  'Residential Design', 'Commercial Spaces', 'Modular Kitchens',
  '3D Visualization', 'Turnkey Projects', 'Renovation & Refresh'
];

export default function Marquee() {
  const track = [];
  for (let i = 0; i < 4; i++) {
    items.forEach((t) => {
      track.push(<span key={`${t}-${i}`}>{t}</span>);
      track.push(<span key={`dot-${t}-${i}`} className="marquee-dot">✦</span>);
    });
  }

  return (
    <div className="marquee-band">
      <div className="marquee-track">{track}</div>
    </div>
  );
}

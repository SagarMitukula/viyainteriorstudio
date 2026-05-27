import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleHover = (el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    };

    document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(handleHover);

    document.addEventListener('mousemove', handleMouse);

    let animId;
    const loop = () => {
      if (dot) {
        dot.style.left = mouse.current.x + 'px';
        dot.style.top = mouse.current.y + 'px';
      }
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      if (ring) {
        ring.style.left = ringPos.current.x + 'px';
        ring.style.top = ringPos.current.y + 'px';
      }
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef}>
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}

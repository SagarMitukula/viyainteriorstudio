import { useEffect, useState, useCallback } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const totalImages = 96;
  const images = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    src: `/images/projects/project-${i + 1}.jpg`,
    alt: `Interior Design Project ${i + 1}`,
  }));

  const handleImageLoad = useCallback((id) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, navigateLightbox]);

  return (
    <div className="page-content">
      {/* Hero */}
      <div className="page-hero">
        <div className="section-inner">
          <div className="section-tag reveal"><span>Our Portfolio</span></div>
          <h1 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Our <em style={{ color: 'var(--gold-light)' }}>Projects</em>
          </h1>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: 500 }}>
            Explore our curated collection of interior design projects — from elegant residences to inspiring commercial spaces.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="section-inner" style={{ padding: '4rem' }}>
        <div className="projects-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`project-card reveal ${loaded[image.id] ? 'loaded' : ''}`}
              style={{ animationDelay: `${(index % 12) * 0.05}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="project-card-img-wrapper">
                <div className="project-card-loader">
                  <div className="loader-spinner"></div>
                </div>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                  className={`project-card-img ${loaded[image.id] ? 'visible' : ''}`}
                />
                <div className="project-card-overlay">
                  <div className="project-card-overlay-content">
                    <span className="project-card-number">Project {String(image.id).padStart(2, '0')}</span>
                    <span className="project-card-view-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M22 12c0 2-4 8-10 8S2 14 2 12s4-8 10-8 10 6 10 8z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: '6rem 0', background: 'var(--green-deep)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}>
            <span style={{ color: 'var(--gold)' }}>Get in Touch</span>
          </div>
          <h2 className="section-h2 reveal" style={{ color: 'var(--white)', marginBottom: '1rem' }}>
            Transform Your <em style={{ color: 'var(--gold-light)' }}>Space</em>
          </h2>
          <p className="reveal" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto 2.5rem' }}>
            Ready to bring your vision to life? Contact us for a consultation and let's create something beautiful together.
          </p>
          <div className="reveal">
            <a href="https://wa.me/919133111888" className="btn-primary" target="_blank" rel="noopener noreferrer">
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateLightbox(-1)} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="lightbox-image-wrapper">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
              />
            </div>
            <button className="lightbox-nav lightbox-next" onClick={() => navigateLightbox(1)} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <div className="lightbox-counter">
              {images.findIndex((img) => img.id === selectedImage.id) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

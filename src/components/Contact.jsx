export default function Contact() {
  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.28 9.9 19.79 19.79 0 01.22 1.26 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const MapIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message')
    };
    const mailtoLink = `mailto:viyainteriors19@gmail.com?subject=Enquiry from ${data.name}&body=Name: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AProject Type: ${data.projectType}%0AMessage: ${data.message}`;
    window.location.href = mailtoLink;
    document.getElementById('form-msg').innerHTML = '<p>✓ Thank you! Your enquiry has been submitted.</p>';
    form.reset();
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-tag"><span>Let's Talk</span></div>
            <h2 className="section-h2">Ready to Transform<br />Your Space?</h2>
            <p className="contact-intro">
              Reach out to us for a free consultation. Our team will get back to you within 24 hours.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="ci-icon"><PhoneIcon /></div>
                <div className="ci-content">
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:9133111888">9133111888</a>
                  <a href="tel:9502762033">9502762033</a>
                  <a href="tel:9951981892">9951981892</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon"><EmailIcon /></div>
                <div className="ci-content">
                  <strong>Email</strong>
                  <a href="mailto:viyainteriors19@gmail.com">viyainteriors19@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon"><MapIcon /></div>
                <div className="ci-content">
                  <strong>Studio Address</strong>
                  <span>Flat No. 103, MSV Narayana Residency, Road No. 6, Madhavaram Colony, Kukatpally – 500072, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="e.g. Rahul Sharma" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select id="projectType" name="projectType">
                  <option value="">Select a service</option>
                  <option value="Residential Interior Design">Residential Interior Design</option>
                  <option value="Commercial / Office Design">Commercial / Office Design</option>
                  <option value="Modular Kitchen / Wardrobe">Modular Kitchen / Wardrobe</option>
                  <option value="Turnkey Project">Turnkey Project</option>
                  <option value="3D Visualization">3D Visualization</option>
                  <option value="Renovation & Refresh">Renovation & Refresh</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" placeholder="Describe your space, budget, timeline, and any specific requirements…"></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Enquiry →</button>
              <div id="form-msg"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

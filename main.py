from fasthtml.common import *

app, rt = fast_app(
    hdrs=(
        Link(rel="preconnect", href="https://fonts.googleapis.com"),
        Link(rel="preconnect", href="https://fonts.gstatic.com", crossorigin=""),
        Link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"),
        Style(open("static/style.css").read()),
    ),
    live=True,
)


# ── COMPONENTS ──────────────────────────────────────────────────────────────

def nav():
    return Nav(
        A(
            Div("V", cls="nav-logo-icon"),
            Div(
                Span("VIYA"),
                Span("Interior Studio"),
                cls="nav-logo-text"
            ),
            href="#hero", cls="nav-logo"
        ),
        Ul(
            Li(A("Services", href="#services")),
            Li(A("About",    href="#about")),
            Li(A("Process",  href="#process")),
            Li(A("Portfolio",href="#portfolio")),
            Li(A("Contact",  href="#contact")),
            cls="nav-links"
        ),
        A("Get a Quote", href="#contact", cls="nav-cta"),
        Div(Span(), Span(), Span(), cls="menu-btn", id="menuBtn"),
        id="navbar"
    )


def hero():
    return Section(
        Div(cls="hero-geo"),
        Div(cls="hero-grid-line"),
        Div(
            Div(Span("Kukatpally, Hyderabad"), cls="hero-tag"),
            H1("Spaces That Tell ", Em("Your Story"), cls="hero-h1"),
            P("Viya Interior Studio transforms houses into homes and offices into inspiring environments — with precision, artistry, and an unwavering commitment to craft.", cls="hero-sub"),
            Div(
                A(Span("Start Your Project"), href="#contact", cls="btn-primary"),
                A("View Work",
                  Span(
                      NotStr('<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'),
                      cls="arrow"
                  ),
                  href="#portfolio", cls="btn-ghost"
                ),
                cls="hero-actions"
            ),
            cls="hero-content"
        ),
        Div(
            Div(cls="scroll-line"),
            Span("Scroll"),
            cls="hero-scroll-hint"
        ),
        id="hero"
    )


def marquee_band():
    items = ["Residential Design","Commercial Spaces","Modular Kitchens","3D Visualization","Turnkey Projects","Renovation & Refresh"]
    tracks = []
    for _ in range(4):
        for t in items:
            tracks += [Span(t), Span("✦", cls="marquee-dot")]
    return Div(Div(*tracks, cls="marquee-track", id="marqueeTrack"), cls="marquee-band")


def service_card(num, icon_svg, title, text):
    return Div(
        Div(num, cls="service-num"),
        NotStr(icon_svg),
        H3(title, cls="service-title"),
        P(text, cls="service-text"),
        cls="service-card"
    )


def services():
    cards = [
        ("01",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="10" width="36" height="28" rx="1"/><path d="M14 10V6M34 10V6M6 20h36"/></svg>',
         "Residential Design",
         "Complete home interior solutions — living rooms, bedrooms, kitchens, and more — tailored to your lifestyle and aesthetic preferences."),
        ("02",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="8" width="32" height="32" rx="1"/><path d="M8 20h32M20 8v32M28 8v32M8 28h32"/></svg>',
         "Commercial Spaces",
         "Inspiring office environments and retail spaces designed to boost productivity, reflect brand identity, and impress clients."),
        ("03",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 38V18l14-10 14 10v20"/><rect x="18" y="26" width="12" height="12"/><path d="M24 8v10"/></svg>',
         "Turnkey Projects",
         "End-to-end project management from concept development to final furnishing — seamless, stress-free, and delivered on schedule."),
        ("04",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="30" width="8" height="12"/><rect x="20" y="20" width="8" height="22"/><rect x="34" y="10" width="8" height="32"/></svg>',
         "3D Visualization",
         "Photorealistic renders so you can experience your new space before a single nail is hammered — clarity and confidence, guaranteed."),
        ("05",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="16"/><path d="M24 14v10l6 4"/></svg>',
         "Modular Furniture",
         "Bespoke modular kitchens, wardrobes, and storage solutions crafted to maximise space while reflecting your personal taste."),
        ("06",
         '<svg class="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 36l8-8 6 6 10-12"/><circle cx="36" cy="12" r="5"/></svg>',
         "Renovation & Refresh",
         "Breathe new life into existing spaces with targeted renovations, colour consultancy, and smart upgrades that transform the ordinary."),
    ]
    return Section(
        Div(
            Div(
                Div(
                    Div(Span("What We Do"), cls="section-tag"),
                    H2("Crafting Spaces,", Br(), "Elevating Lives", cls="section-h2"),
                ),
                P("From intimate residences to expansive commercial environments, our team brings vision and technical mastery together — delivering interiors that are beautiful, functional, and timeless.", cls="services-desc"),
                cls="services-header reveal"
            ),
            Div(*[service_card(*c) for c in cards], cls="services-grid reveal"),
            cls="section-inner"
        ),
        id="services"
    )


def about():
    return Section(
        Div(
            Div(
                Div(
                    Div(cls="about-rect-1"),
                    Div(cls="about-rect-2"),
                    Div(cls="about-rect-3"),
                    Div(Strong("8+"), Small("Years of Excellence"), cls="about-badge"),
                    cls="about-visual reveal"
                ),
                Div(
                    Div(Span("Our Story"), cls="section-tag"),
                    H2("Where Aesthetics", Br(), "Meet Function", cls="section-h2"),
                    P("Founded with a passion for transforming spaces, Viya Interior Studio has grown into one of Kukatpally's most trusted design practices. We believe every space has a story to tell — and we are dedicated to telling it beautifully.", cls="about-body"),
                    P("Our multidisciplinary team combines creative design thinking with rigorous project management, ensuring every client receives an experience that is personal, professional, and truly exceptional.", cls="about-body"),
                    Div(
                        Div(Strong("200+"), Span("Projects Completed"), cls="stat"),
                        Div(Strong("98%"),  Span("Client Satisfaction"), cls="stat"),
                        Div(Strong("15+"),  Span("Design Awards"),       cls="stat"),
                        cls="about-stats"
                    ),
                    cls="reveal"
                ),
                cls="about-grid"
            ),
            cls="section-inner"
        ),
        id="about"
    )


def process():
    steps = [
        ("01", "Discovery",     "We listen intently to understand your vision, lifestyle, budget, and the story you want your space to tell."),
        ("02", "Concept Design","Our designers develop mood boards, space plans, and material palettes that bring your vision to life on paper first."),
        ("03", "Execution",     "Skilled craftsmen and project managers execute flawlessly, keeping you informed every step of the way."),
        ("04", "Handover",      "We deliver a fully styled, client-ready space — and stay on to ensure your complete satisfaction beyond move-in day."),
    ]
    return Section(
        Div(
            Div(
                Div(Span("How We Work"), cls="section-tag"),
                H2("Our Design Process", cls="section-h2"),
                cls="reveal", style="text-align:center; margin-bottom:1rem;"
            ),
            Div(
                *[Div(Div(n, cls="process-num"), H3(t, cls="process-title"), P(d, cls="process-text"), cls="process-step")
                  for n, t, d in steps],
                cls="process-steps reveal"
            ),
            cls="section-inner"
        ),
        id="process"
    )


def portfolio():
    items = [
        (True,  "Residential · Kukatpally", "The Prasad Residence — 3BHK Luxury Flat",
         '<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5"><rect x="10" y="10" width="80" height="80"/><rect x="20" y="20" width="60" height="60"/><line x1="10" y1="10" x2="20" y2="20"/><line x1="90" y1="10" x2="80" y2="20"/><line x1="90" y1="90" x2="80" y2="80"/><line x1="10" y1="90" x2="20" y2="80"/></svg>'),
        (False, "Commercial · KPHB",       "Nexus Tech Office",
         '<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5"><circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="25"/><circle cx="50" cy="50" r="10"/></svg>'),
        (False, "Residential · Madhapur",  "Lakeview Penthouse",
         '<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5"><polygon points="50,10 90,30 90,70 50,90 10,70 10,30"/><polygon points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"/></svg>'),
        (True,  "Hospitality · Banjara Hills","Olive & Oak Café — Concept Design",
         '<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/><line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/></svg>'),
        (False, "Residential · Miyapur",   "Serene Villa — Master Suite",
         '<svg viewBox="0 0 100 100" fill="none" stroke="white" stroke-width="0.5"><rect x="15" y="15" width="30" height="30"/><rect x="55" y="15" width="30" height="30"/><rect x="15" y="55" width="30" height="30"/><rect x="55" y="55" width="30" height="30"/></svg>'),
    ]
    cards = [
        Div(
            Div(cls="portfolio-bg"),
            Div(NotStr(svg), cls="portfolio-geo"),
            Div(
                Div(cat, cls="portfolio-cat"),
                Div(name, cls="portfolio-name"),
                cls="portfolio-overlay"
            ),
            cls=f"portfolio-item {'span2' if wide else ''}"
        )
        for wide, cat, name, svg in items
    ]
    return Section(
        Div(
            Div(
                Div(Div(Span("Our Work"), cls="section-tag"), H2("Featured Projects", cls="section-h2")),
                A("View All →", href="#contact", style="font-size:0.75rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);text-decoration:none;"),
                cls="reveal", style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.5rem;"
            ),
            cls="section-inner"
        ),
        Div(Div(*cards, cls="portfolio-grid reveal"), cls="section-inner", style="padding-top:0;"),
        id="portfolio"
    )


def contact_form():
    services_opts = ["", "Residential Interior Design", "Commercial / Office Design",
                     "Modular Kitchen / Wardrobe", "Turnkey Project", "3D Visualization", "Renovation & Refresh"]
    return Form(
        Div(
            Div(Label("Your Name"),   Input(type="text",  placeholder="e.g. Rahul Sharma",  required=True), cls="form-group"),
            Div(Label("Phone Number"),Input(type="tel",   placeholder="+91 98765 43210",    required=True), cls="form-group"),
            cls="form-row"
        ),
        Div(Label("Email Address"), Input(type="email", placeholder="you@example.com"), cls="form-group"),
        Div(
            Label("Project Type"),
            Select(*[Option(o, value=o) for o in services_opts]),
            cls="form-group"
        ),
        Div(Label("Tell Us About Your Project"),
            Textarea(placeholder="Describe your space, budget, timeline, and any specific requirements…"),
            cls="form-group"),
        Button("Send Enquiry →", type="submit", cls="btn-submit"),
        cls="contact-form",
        hx_post="/enquiry", hx_target="#form-msg", hx_swap="innerHTML"
    )


def contact():
    phone_icon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.28 9.9 19.79 19.79 0 01.22 1.26 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>'
    email_icon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
    map_icon  = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'

    return Section(
        Div(
            Div(
                Div(
                    Div(Span("Let's Talk"), cls="section-tag"),
                    H2("Ready to Transform", Br(), "Your Space?", cls="section-h2"),
                    P("Reach out to us for a free consultation. Our team will get back to you within 24 hours.", cls="contact-intro"),
                    Div(
                        Div(
                            Div(NotStr(phone_icon), cls="ci-icon"),
                            Div(
                                Strong("Phone / WhatsApp"),
                                A("9133111888", href="tel:9133111888"),
                                A("9502762033", href="tel:9502762033"),
                                A("9951981892", href="tel:9951981892"),
                                cls="ci-content"
                            ),
                            cls="contact-item"
                        ),
                        Div(
                            Div(NotStr(email_icon), cls="ci-icon"),
                            Div(
                                Strong("Email"),
                                A("viyainteriors19@gmail.com", href="mailto:viyainteriors19@gmail.com"),
                                cls="ci-content"
                            ),
                            cls="contact-item"
                        ),
                        Div(
                            Div(NotStr(map_icon), cls="ci-icon"),
                            Div(
                                Strong("Studio Address"),
                                Span("Flat No. 103, MSV Narayana Residency, Road No. 6, Madhavaram Colony, Kukatpally – 500072, Hyderabad"),
                                cls="ci-content"
                            ),
                            cls="contact-item"
                        ),
                        cls="contact-items"
                    ),
                    cls="reveal"
                ),
                Div(contact_form(), Div(id="form-msg"), cls="reveal"),
                cls="contact-grid"
            ),
            cls="section-inner"
        ),
        id="contact"
    )


def footer():
    ig_icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'
    fb_icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>'
    wa_icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>'
    return Footer(
        Div("© 2025 Viya Interior Studio · All rights reserved · Kukatpally, Hyderabad", cls="footer-copy"),
        Div(
            A(NotStr(ig_icon), href="#",  title="Instagram"),
            A(NotStr(fb_icon), href="#",  title="Facebook"),
            A(NotStr(wa_icon), href="https://wa.me/919133111888", title="WhatsApp"),
            cls="footer-socials"
        )
    )


def cursor_and_scripts():
    return NotStr("""
<div class="cursor" id="cursorDot"><div class="cursor-dot"></div></div>
<div class="cursor-ring" id="cursorRing"></div>
<script>
// Cursor
const dot  = document.querySelector('.cursor-dot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
document.querySelectorAll('a,button,.service-card,.portfolio-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('hovered'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('hovered'));
});
(function loop(){
  dot.style.left=mx+'px'; dot.style.top=my+'px';
  rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(loop);
})();

// Nav scroll
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',scrollY>60));

// Reveal on scroll
const obs=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
}),{threshold:0.1});
document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));
</script>
""")


# ── ROUTES ────────────────────────────────────────────────────────────────

@rt("/")
def get():
    return Html(
        Head(
            Meta(charset="UTF-8"),
            Meta(name="viewport", content="width=device-width, initial-scale=1.0"),
            Title("Viya Interior Studio – Luxury Interiors, Kukatpally"),
            Meta(name="description", content="Premium interior design services in Kukatpally, Hyderabad."),
        ),
        Body(
            cursor_and_scripts(),
            nav(),
            hero(),
            marquee_band(),
            services(),
            about(),
            process(),
            portfolio(),
            contact(),
            footer(),
        )
    )


@rt("/enquiry", methods=["POST"])
def post_enquiry():
    return Div(
        P("✓ Thank you! We'll get back to you within 24 hours.", 
          style="color:#c8922a;font-size:0.9rem;padding:1rem 0;")
    )


# ── ENTRY POINT ──────────────────────────────────────────────────────────

if __name__ == "__main__":
    serve()

import os

css_path = r"c:\Users\vigas\Desktop\stitchlyyy\css\style.css"

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the start of the override block
override_marker = "/* =========================================================\n   GLOBAL HERO OVERRIDE FOR ALL PAGES\n========================================================= */"
if override_marker in content:
    # Truncate content right before the override marker
    content = content[:content.find(override_marker)]

# Append the new distinct styles
distinct_styles = """
/* =========================================================
   DISTINCT CREATIVE HERO STYLES
========================================================= */

/* 1. Legal & Informational Pages (Minimalist Gradient, 50vh) */
.page-header {
  height: 50vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 120px 20px 40px !important;
  background: linear-gradient(135deg, var(--color-navy) 0%, #1a1a2e 100%) !important;
  border-bottom: 2px solid var(--color-gold) !important;
}
.page-header h1, .page-header p, .page-header span {
  color: #fff !important;
}
.page-header .section-eyebrow {
  color: var(--color-gold) !important;
  letter-spacing: 4px;
}

/* 2. Blog Pages (Soft Cream, 60vh, Dark Text) */
.blog-hero, .blog-detail-hero {
  height: 60vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 120px 20px 40px !important;
  background: var(--color-cream) !important;
  border-bottom: 1px solid var(--border-color) !important;
}
.blog-hero h1, .blog-hero p, .blog-detail-hero h1, .blog-detail-hero p {
  color: var(--color-text-primary) !important;
}
.blog-hero .section-eyebrow, .blog-detail-hero .section-eyebrow {
  color: var(--color-gold) !important;
}
body.dark-mode .blog-hero, body.dark-mode .blog-detail-hero {
  background: #111 !important;
}
body.dark-mode .blog-hero h1, body.dark-mode .blog-hero p, body.dark-mode .blog-detail-hero h1, body.dark-mode .blog-detail-hero p {
  color: #fff !important;
}

/* 3. Service & Process Pages (Cinematic 70vh Image Header) */
.stitching-hero, .services-hero, .pricing-hero, .contact-hero {
  height: 70vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 120px 20px 40px !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
.services-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../assets/images/hero_tailoring_1788338041106.jpg') !important;
}
.stitching-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('../assets/images/service_tailoring_1788338093887.jpg') !important;
}
.contact-hero, .pricing-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('../assets/images/about/team_stylist.jpg') !important;
}
.stitching-hero h1, .stitching-hero p, .services-hero h1, .services-hero p, .pricing-hero h1, .pricing-hero p, .contact-hero h1, .contact-hero p {
  color: #fff !important;
}
.stitching-hero .section-eyebrow, .services-hero .section-eyebrow, .pricing-hero .section-eyebrow, .contact-hero .section-eyebrow {
  color: var(--color-gold) !important;
}

/* 4. Visual Galleries & Fabrics (Full 100vh Immersive Image) */
.fabrics-hero, .gallery-hero, .measure-hero, .details-hero {
  height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 120px 20px 40px !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
.fabrics-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('../assets/images/fabrics_hero.jpg') !important;
}
.gallery-hero, .details-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('../assets/images/collection_1_1788338059856.jpg') !important;
}
.measure-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../assets/images/about/about_craftsmanship.jpg') !important;
}
.fabrics-hero h1, .fabrics-hero p, .gallery-hero h1, .gallery-hero p, .measure-hero h1, .measure-hero p, .details-hero h1, .details-hero p {
  color: #fff !important;
}
.fabrics-hero .section-eyebrow, .gallery-hero .section-eyebrow, .measure-hero .section-eyebrow, .details-hero .section-eyebrow {
  color: var(--color-gold) !important;
}

/* Fix flex containers inside heroes */
.page-header .section-container,
.blog-hero .section-container, .blog-detail-hero .section-container,
.stitching-hero .section-container, .services-hero .section-container, .pricing-hero .section-container, .contact-hero .section-container,
.fabrics-hero .section-container, .gallery-hero .section-container, .measure-hero .section-container, .details-hero .section-container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  margin: auto !important;
}
"""

with open(css_path, "w", encoding="utf-8") as f:
    f.write(content + distinct_styles)

print("CSS distinct styles applied successfully!")

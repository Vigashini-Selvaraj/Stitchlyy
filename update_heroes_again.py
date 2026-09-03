import os
import re

css_path = r"c:\Users\vigas\Desktop\stitchlyyy\css\style.css"

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# I will replace the distinct_styles block entirely to reflect the user's new request.
override_marker = "/* =========================================================\n   DISTINCT CREATIVE HERO STYLES\n========================================================= */"
if override_marker in content:
    content = content[:content.find(override_marker)]

new_styles = """
/* =========================================================
   DISTINCT CREATIVE HERO STYLES
========================================================= */

/* 1. Legal, Info & Measurement Pages (Minimalist Gradient, no image) */
.page-header, .measure-hero {
  min-height: 50vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 160px 20px 80px !important;
  background: linear-gradient(135deg, var(--color-navy) 0%, #1a1a2e 100%) !important;
  background-image: none !important;
  border-bottom: 2px solid var(--color-gold) !important;
}
.page-header h1, .page-header p, .page-header span,
.measure-hero h1, .measure-hero p, .measure-hero span {
  color: #fff !important;
}
.page-header .section-eyebrow, .measure-hero .section-eyebrow {
  color: var(--color-gold) !important;
  letter-spacing: 4px;
}

/* 2. Blog, Pricing & Contact Pages (Soft Cream, no image) */
.blog-hero, .blog-detail-hero, .pricing-hero, .contact-hero {
  min-height: 60vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 160px 20px 80px !important;
  background: var(--color-cream) !important;
  background-image: none !important;
  border-bottom: 1px solid var(--border-color) !important;
}
.blog-hero h1, .blog-hero p, .blog-detail-hero h1, .blog-detail-hero p,
.pricing-hero h1, .pricing-hero p, .contact-hero h1, .contact-hero p {
  color: var(--color-text-primary) !important;
}
.blog-hero .section-eyebrow, .blog-detail-hero .section-eyebrow,
.pricing-hero .section-eyebrow, .contact-hero .section-eyebrow {
  color: var(--color-gold) !important;
}
body.dark-mode .blog-hero, body.dark-mode .blog-detail-hero,
body.dark-mode .pricing-hero, body.dark-mode .contact-hero {
  background: #111 !important;
}
body.dark-mode .blog-hero h1, body.dark-mode .blog-hero p, body.dark-mode .blog-detail-hero h1, body.dark-mode .blog-detail-hero p,
body.dark-mode .pricing-hero h1, body.dark-mode .pricing-hero p, body.dark-mode .contact-hero h1, body.dark-mode .contact-hero p {
  color: #fff !important;
}

/* 3. Service & Process Pages (Cinematic 70vh Image Header) */
.stitching-hero, .services-hero {
  min-height: 70vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 160px 20px 80px !important;
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
.stitching-hero h1, .stitching-hero p, .services-hero h1, .services-hero p {
  color: #fff !important;
}
.stitching-hero .section-eyebrow, .services-hero .section-eyebrow {
  color: var(--color-gold) !important;
}

/* 4. Visual Galleries & Fabrics (Elongated Immersive Image) */
.fabrics-hero, .gallery-hero, .details-hero {
  min-height: 110vh !important; /* Elongated further as requested */
  height: auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 180px 20px 80px !important;
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
.fabrics-hero h1, .fabrics-hero p, .gallery-hero h1, .gallery-hero p, .details-hero h1, .details-hero p {
  color: #fff !important;
}
.fabrics-hero .section-eyebrow, .gallery-hero .section-eyebrow, .details-hero .section-eyebrow {
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
    f.write(content + new_styles)

# Update collections.css to elongate
coll_path = r"c:\Users\vigas\Desktop\stitchlyyy\css\collections.css"
with open(coll_path, "r", encoding="utf-8") as f:
    coll_content = f.read()

coll_content = coll_content.replace("height: 100vh;", "min-height: 110vh;\n  height: auto;\n  padding-top: 180px;")

with open(coll_path, "w", encoding="utf-8") as f:
    f.write(coll_content)

print("Styles updated successfully!")

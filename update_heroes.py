import os

css_path = r"c:\Users\vigas\Desktop\stitchlyyy\css\style.css"

css_to_append = """
/* =========================================================
   GLOBAL HERO OVERRIDE FOR ALL PAGES
========================================================= */
.page-header, 
.blog-detail-hero,
.blog-hero,
.details-hero,
.contact-hero,
.stitching-hero,
.gallery-hero,
.fabrics-hero,
.measure-hero,
.pricing-hero,
.services-hero {
  height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 120px 20px 40px !important;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/collections_hero.jpg') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  border-bottom: none !important;
}

.page-header h1, .page-header p, .page-header span, .page-header div,
.blog-detail-hero h1, .blog-detail-hero p, .blog-detail-hero span, .blog-detail-hero div,
.blog-hero h1, .blog-hero p, .blog-hero span, .blog-hero div,
.details-hero h1, .details-hero p, .details-hero span, .details-hero div,
.contact-hero h1, .contact-hero p, .contact-hero span, .contact-hero div,
.stitching-hero h1, .stitching-hero p, .stitching-hero span, .stitching-hero div,
.gallery-hero h1, .gallery-hero p, .gallery-hero span, .gallery-hero div,
.fabrics-hero h1, .fabrics-hero p, .fabrics-hero span, .fabrics-hero div,
.measure-hero h1, .measure-hero p, .measure-hero span, .measure-hero div,
.pricing-hero h1, .pricing-hero p, .pricing-hero span, .pricing-hero div,
.services-hero h1, .services-hero p, .services-hero span, .services-hero div {
  color: #fff !important;
}

.page-header .section-eyebrow,
.blog-detail-hero .section-eyebrow,
.blog-hero .section-eyebrow,
.details-hero .section-eyebrow,
.contact-hero .section-eyebrow,
.stitching-hero .section-eyebrow,
.gallery-hero .section-eyebrow,
.fabrics-hero .section-eyebrow,
.measure-hero .section-eyebrow,
.pricing-hero .section-eyebrow,
.services-hero .section-eyebrow {
  color: var(--color-gold) !important;
}

/* Specific overrides for flex-direction of content containers inside hero if they exist */
.page-header .section-container,
.blog-detail-hero .section-container,
.blog-hero .section-container,
.details-hero .section-container,
.contact-hero .section-container,
.stitching-hero .section-container,
.gallery-hero .section-container,
.fabrics-hero .section-container,
.measure-hero .section-container,
.pricing-hero .section-container,
.services-hero .section-container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: auto;
  margin-bottom: auto;
}
"""

with open(css_path, "a", encoding="utf-8") as f:
    f.write(css_to_append)

print("CSS appended successfully!")

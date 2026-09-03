import os

css_path = r"c:\Users\vigas\Desktop\stitchlyyy\css\style.css"

overrides = """
/* SPECIFIC HERO BACKGROUND IMAGES */
.fabrics-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/fabrics_hero.jpg') !important;
}

.services-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/hero_tailoring_1788338041106.jpg') !important;
}

.stitching-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/service_tailoring_1788338093887.jpg') !important;
}

.gallery-hero, .details-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/collection_1_1788338059856.jpg') !important;
}

.measure-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/about/about_craftsmanship.jpg') !important;
}

.blog-hero, .blog-detail-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/about/team_stylist.jpg') !important;
}

.page-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('../assets/images/about/about_hero.jpg') !important;
}
"""

with open(css_path, "a", encoding="utf-8") as f:
    f.write(overrides)

print("CSS appended successfully!")

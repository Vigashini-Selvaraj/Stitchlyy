import os
import re

def inject_sections(filepath, sections):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist.")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Create the block of HTML to inject
    injection = "\n\n" + "\n\n".join(sections) + "\n\n  "

    # Replace </main> with the injected content + </main>
    # Ensure we only replace the last occurrence or use regex
    if "</main>" in content:
        content = content.replace("</main>", injection + "</main>")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully injected sections into {filepath}")
    else:
        print(f"Error: </main> not found in {filepath}")

newsletter_html = """
    <!-- ===================================================
         NEWSLETTER
    ==================================================== -->
    <section class="newsletter-section section-padding" style="background: var(--surface-hover); text-align: center;">
      <div class="section-container">
        <span class="section-eyebrow">STAY UPDATED</span>
        <h2 class="section-title">Join the <span>STITCHLY</span> family.</h2>
        <p style="margin-top: 1rem; color: var(--text-secondary); max-width: 500px; margin-left: auto; margin-right: auto;">Subscribe to our newsletter for the latest styling tips, exclusive offers, and behind-the-scenes looks.</p>
        <form style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem; max-width: 500px; margin-left: auto; margin-right: auto;">
          <input type="email" placeholder="Enter your email" style="padding: 1rem; flex: 1; border: 1px solid var(--border-color); border-radius: 4px; font-family: 'Manrope', sans-serif;">
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
"""

contact_html = """
    <!-- ===================================================
         CONTACT SUPPORT
    ==================================================== -->
    <section class="contact-support-section section-padding" style="text-align: center;">
      <div class="section-container">
        <span class="section-eyebrow">NEED HELP?</span>
        <h2 class="section-title">We're here for <span>you.</span></h2>
        <p style="margin-top: 1rem; color: var(--text-secondary); max-width: 600px; margin-left: auto; margin-right: auto;">Whether you have a question about your order, need sizing advice, or just want to chat about fabrics, our team is ready to assist.</p>
        <div style="margin-top: 2rem;">
          <a href="contact.html" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
"""

testimonial_html = """
    <!-- ===================================================
         TESTIMONIAL
    ==================================================== -->
    <section class="testimonial-section section-padding" style="background: var(--color-navy); color: white;">
      <div class="section-container" style="text-align: center;">
        <i data-lucide="quote" style="width: 48px; height: 48px; color: var(--color-gold); margin-bottom: 2rem;"></i>
        <h2 style="font-family: 'Fraunces', serif; font-size: 2rem; font-weight: 500; font-style: italic; max-width: 800px; margin: 0 auto; line-height: 1.4;">"STITCHLY completely transformed my wardrobe. The fit is impeccable, and the attention to detail is truly unmatched. I've never felt more confident."</h2>
        <p style="margin-top: 2rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem;">— Ananya S., Loyal Client</p>
      </div>
    </section>
"""

faq_mini_html = """
    <!-- ===================================================
         FAQ MINI
    ==================================================== -->
    <section class="faq-mini-section section-padding" style="background: var(--surface-color);">
      <div class="section-container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span class="section-eyebrow">FAQ</span>
          <h2 class="section-title">Common <span>Questions</span></h2>
        </div>
        <div style="max-width: 800px; margin: 0 auto; display: grid; gap: 2rem; text-align: left;">
          <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: 'Fraunces', serif;">How long does custom stitching take?</h3>
            <p style="color: var(--text-secondary); font-family: 'Manrope', sans-serif;">Typically, our bespoke process takes 2-3 weeks from the initial measurement to the final fitting.</p>
          </div>
          <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: 'Fraunces', serif;">Can I provide my own fabric?</h3>
            <p style="color: var(--text-secondary); font-family: 'Manrope', sans-serif;">Yes! While we offer a curated selection of premium fabrics, we are happy to craft garments using materials you provide.</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="faq.html" class="btn btn-secondary">Read All FAQs</a>
        </div>
      </div>
    </section>
"""

process_html = """
    <!-- ===================================================
         OUR PROMISE
    ==================================================== -->
    <section class="process-section section-padding" style="text-align: center;">
      <div class="section-container">
        <span class="section-eyebrow">OUR PROMISE</span>
        <h2 class="section-title">The STITCHLY <span>Standard.</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem;">
          <div>
            <i data-lucide="ruler" style="width: 32px; height: 32px; color: var(--color-gold); margin-bottom: 1rem;"></i>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: 'Fraunces', serif;">Precision Fit</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Tailored to your exact measurements.</p>
          </div>
          <div>
            <i data-lucide="star" style="width: 32px; height: 32px; color: var(--color-gold); margin-bottom: 1rem;"></i>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: 'Fraunces', serif;">Premium Quality</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">The finest fabrics and thread.</p>
          </div>
          <div>
            <i data-lucide="truck" style="width: 32px; height: 32px; color: var(--color-gold); margin-bottom: 1rem;"></i>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: 'Fraunces', serif;">Timely Delivery</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Delivered on schedule, every time.</p>
          </div>
        </div>
      </div>
    </section>
"""


# Full pages (need ~5 sections to pad them out)
full_pages = [
    'blog.html',
    'custom-stitching.html',
    'fabrics.html',
    'measurement-guide.html',
    'services.html',
    'collection-details.html'
]
full_sections = [testimonial_html, faq_mini_html, process_html, contact_html, newsletter_html]

# Footer/Legal pages (need ~2 sections so they aren't totally blank)
legal_pages = [
    'faq.html',
    'privacy-policy.html',
    'terms.html'
]
legal_sections = [contact_html, newsletter_html]

for page in full_pages:
    inject_sections(page, full_sections)

for page in legal_pages:
    inject_sections(page, legal_sections)

print("Done padding pages!")

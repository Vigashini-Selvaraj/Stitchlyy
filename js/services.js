/**
 * STITCHLY Services & Custom Stitching Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Category Filter Tab Logic
  const tabButtons = document.querySelectorAll('.services-tab-btn');
  const serviceCards = document.querySelectorAll('.service-listing-card');
  const countBadge = document.querySelector('.services-count-badge');

  if (tabButtons.length > 0 && serviceCards.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active class toggle
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        let visibleCount = 0;

        serviceCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category') || '';
          if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (countBadge) {
          countBadge.textContent = `Showing ${visibleCount} service${visibleCount !== 1 ? 's' : ''}`;
        }
      });
    });
  }

  // Interactive Garment Type Selector in Hub
  const garmentCards = document.querySelectorAll('.garment-type-card');
  const selectedGarmentInput = document.getElementById('inquiry-garment-select');

  if (garmentCards.length > 0) {
    garmentCards.forEach(gCard => {
      gCard.addEventListener('click', () => {
        garmentCards.forEach(c => c.classList.remove('active'));
        gCard.classList.add('active');

        const garmentValue = gCard.getAttribute('data-garment');
        if (selectedGarmentInput) {
          selectedGarmentInput.value = garmentValue;
        }

        // Scroll smoothly to inquiry form or options
        const inquirySec = document.getElementById('custom-stitching-inquiry');
        if (inquirySec && gCard.classList.contains('active-scroll')) {
          inquirySec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Quick Stitching Inquiry Form Submission
  const inquiryForm = document.getElementById('stitching-inquiry-form');
  const formFeedback = document.getElementById('inquiry-form-feedback');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = inquiryForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Processing Request...`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();

        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.innerHTML = `
            <div style="background: rgba(190, 151, 85, 0.15); border: 1px solid var(--color-gold); padding: 14px 18px; border-radius: 8px; color: #fff; margin-top: 15px; text-align: center; font-family: 'Manrope', sans-serif;">
              <strong>✨ Stitching Request Received!</strong><br>
              <span style="font-size: 0.88rem; color: #ccc;">Our master tailor will review your details and contact you within 24 hours to confirm measurements & fabric details.</span>
            </div>
          `;
          inquiryForm.reset();
        }
      }, 1200);
    });
  }
});

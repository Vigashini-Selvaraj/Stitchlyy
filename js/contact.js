document.addEventListener('DOMContentLoaded', () => {
  // File Upload Logic
  const fileInput = document.getElementById('designUpload');
  const fileNameDisplay = document.getElementById('fileNameDisplay');

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', (e) => {
      const fileName = e.target.files[0]?.name;
      if (fileName) {
        fileNameDisplay.textContent = `Selected: ${fileName}`;
      } else {
        fileNameDisplay.textContent = '';
      }
    });
  }

  // Form Submission Logic
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real scenario, you'd send this data to a server
      alert('Thank you for reaching out! Your message has been sent successfully. Our team will contact you shortly.');
      contactForm.reset();
      if (fileNameDisplay) {
        fileNameDisplay.textContent = '';
      }
    });
  }

  // FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = question.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

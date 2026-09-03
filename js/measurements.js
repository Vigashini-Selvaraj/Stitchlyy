document.addEventListener('DOMContentLoaded', () => {
  // Tab Switching Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const guideContents = document.querySelectorAll('.guide-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      guideContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show corresponding content
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Unit Toggle Logic
  const unitBtns = document.querySelectorAll('.toggle-btn');
  const unitLabels = document.querySelectorAll('.unit-label');

  unitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const unit = btn.getAttribute('data-unit');
      unitLabels.forEach(label => {
        label.textContent = unit;
      });
    });
  });

  // Save Measurements form submission (UI only)
  const saveBtn = document.getElementById('saveMeasurementsBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Measurements saved successfully to your STITCHLY profile!');
    });
  }
});

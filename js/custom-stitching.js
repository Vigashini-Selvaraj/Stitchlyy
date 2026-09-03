// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    
  const form = document.getElementById('customStitchingForm');
  
  // Summary Elements
  const sumGarment = document.getElementById('sumGarment');
  const sumFabric = document.getElementById('sumFabric');
  const sumEmbroidery = document.getElementById('sumEmbroidery');
  const sumSize = document.getElementById('sumSize');
  const sumRef = document.getElementById('sumRef');

  // Listen to all form changes to update summary
  form.addEventListener('change', updateSummary);

  function updateSummary() {
      // Get selected values
      const garment = document.querySelector('input[name="garmentType"]:checked')?.value || 'Lehenga';
      const fabric = document.querySelector('input[name="fabricType"]:checked')?.value || 'Raw Silk';
      const embroidery = document.querySelector('input[name="embroidery"]:checked')?.value || 'Minimal';
      
      const sizingMethod = document.querySelector('input[name="sizingMethod"]:checked')?.value || 'Standard';
      
      let sizeText = '';
      if (sizingMethod === 'Standard') {
          const stdSize = document.getElementById('standardSize').value;
          sizeText = `Standard (${stdSize})`;
      } else {
          sizeText = 'Custom Measurements';
      }

      // Update UI
      sumGarment.innerText = garment;
      sumFabric.innerText = fabric;
      sumEmbroidery.innerText = embroidery;
      sumSize.innerText = sizeText;
  }

  // Toggle Standard vs Custom Size Inputs
  const standardSizeBtn = document.getElementById('standardSizeBtn');
  const customSizeBtn = document.getElementById('customSizeBtn');
  const standardSizeSection = document.getElementById('standardSizeSection');
  const customSizeSection = document.getElementById('customSizeSection');

  standardSizeBtn.addEventListener('change', () => {
      if(standardSizeBtn.checked) {
          standardSizeSection.style.display = 'flex';
          customSizeSection.style.display = 'none';
      }
  });

  customSizeBtn.addEventListener('change', () => {
      if(customSizeBtn.checked) {
          standardSizeSection.style.display = 'none';
          customSizeSection.style.display = 'block';
      }
  });


  // File Upload Handling
  const fileUploadZone = document.getElementById('fileUploadZone');
  const fileInput = document.getElementById('fileInput');
  const fileUploadName = document.getElementById('fileUploadName');

  fileUploadZone.addEventListener('click', () => {
      fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
          const fileName = e.target.files[0].name;
          fileUploadName.innerText = `Uploaded: ${fileName}`;
          sumRef.innerText = '1 Image Attached';
          sumRef.style.color = 'var(--color-gold)';
      }
  });

  // Drag and Drop support
  fileUploadZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileUploadZone.style.borderColor = 'var(--color-gold)';
      fileUploadZone.style.background = 'rgba(163, 130, 88, 0.05)';
  });

  fileUploadZone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      fileUploadZone.style.borderColor = 'var(--border-color)';
      fileUploadZone.style.background = 'transparent';
  });

  fileUploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      fileUploadZone.style.borderColor = 'var(--border-color)';
      fileUploadZone.style.background = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
          fileInput.files = e.dataTransfer.files;
          const fileName = e.dataTransfer.files[0].name;
          fileUploadName.innerText = `Uploaded: ${fileName}`;
          sumRef.innerText = '1 Image Attached';
          sumRef.style.color = 'var(--color-gold)';
      }
  });

});

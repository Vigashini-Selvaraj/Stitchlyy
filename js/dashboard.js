/**
 * STITCHLY - Customer Dashboard Logic
 */

// --- MOCK DATA ---
const mockFabrics = [
  { id: 'f1', name: 'Banarasi Silk', material: 'Silk', color: 'Gold/Red', price: '$45/m', image: 'assets/images/fabrics/banarasi.png' },
  { id: 'f2', name: 'Chanderi', material: 'Cotton Silk', color: 'Pastel Green', price: '$25/m', image: 'assets/images/fabrics/chanderi.png' },
  { id: 'f3', name: 'Pure Chiffon', material: 'Chiffon', color: 'Midnight Blue', price: '$35/m', image: 'assets/images/fabrics/chiffon.png' },
  { id: 'f4', name: 'Raw Cotton', material: 'Cotton', color: 'Off White', price: '$15/m', image: 'assets/images/fabrics/cotton.png' },
  { id: 'f5', name: 'Georgette', material: 'Georgette', color: 'Ruby Red', price: '$28/m', image: 'assets/images/fabrics/georgrette.png' },
  { id: 'f6', name: 'Floral Organza', material: 'Organza', color: 'Multi', price: '$32/m', image: 'assets/images/fabrics/organza.png' },
];

const mockMeasurements = [
  { id: 'm1', name: 'Wedding Blouse', unit: 'CM', date: 'Oct 01, 2026', bust: '85', waist: '70', shoulder: '38', length: '35' },
  { id: 'm2', name: 'Casual Kurti', unit: 'IN', date: 'Sep 15, 2026', bust: '34', waist: '28', shoulder: '15', length: '40' },
  { id: 'm3', name: 'Evening Gown', unit: 'CM', date: 'Aug 10, 2026', bust: '86', waist: '71', shoulder: '38', length: '145' }
];

const mockReferences = [
  { id: 'r1', name: 'Bridal Inspiration', date: 'Oct 05, 2026', category: 'Lehenga', image: 'assets/dress_collection_1.jpg' },
  { id: 'r2', name: 'Summer Dress Idea', date: 'Sep 20, 2026', category: 'Dress', image: 'assets/dress_collection_3.jpg' },
  { id: 'r3', name: 'Party Wear', date: 'Sep 10, 2026', category: 'Gown', image: 'assets/dress_collection_4.jpg' }
];

const mockAppointments = [
  { id: 'a1', date: 'Oct 12, 2026', time: '10:30 AM', type: 'In-Store Measurement', location: 'STITCHLY NYC Studio', status: 'Upcoming' },
  { id: 'a2', date: 'Sep 05, 2026', time: '02:00 PM', type: 'Virtual Consultation', location: 'Zoom', status: 'Completed' }
];

const mockOrders = [
  { id: 'ST-8992', garment: 'Bridal Lehenga', date: 'Oct 08, 2026', price: '$450.00', status: 'Stitching', delivery: 'Oct 25, 2026', image: 'assets/dress_collection_1.jpg' },
  { id: 'ST-8850', garment: 'Summer Floral Dress', date: 'Sep 10, 2026', price: '$120.00', status: 'Delivered', delivery: 'Sep 25, 2026', image: 'assets/dress_collection_2.jpg' },
  { id: 'ST-8711', garment: 'Silk Kurti', date: 'Aug 05, 2026', price: '$85.00', status: 'Delivered', delivery: 'Aug 15, 2026', image: 'assets/dress_collection_5.jpg' }
];

// --- NAVIGATION LOGIC ---
function switchView(viewId) {
  // Hide all views
  document.querySelectorAll('.dashboard-view').forEach(view => {
    view.classList.remove('active-view');
  });
  
  // Show target view
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add('active-view');
  }
  
  // Update sidebar active state
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    }
  });

  // Re-initialize icons for new view
  if (window.lucide) {
    lucide.createIcons();
  }

  // Close mobile sidebar if open
  document.getElementById('dashboardSidebar').classList.remove('open');
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {

  // Setup Sidebar Links
  document.querySelectorAll('.sidebar-link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(e.currentTarget.getAttribute('data-view'));
    });
  });

  // Mobile Toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('dashboardSidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Make switchView globally accessible for inline onclicks
  window.switchView = switchView;

  // Render Data
  renderFabrics();
  renderMeasurements();
  renderReferences();
  renderAppointments();
  renderOrders();
  renderInvoices();
  
  // Setup Wizard
  setupWizard();

  // Sidebar Toggles Logic
  const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
  const sidebarThemeIcon = document.getElementById('sidebarThemeIcon');
  if (sidebarThemeToggle && sidebarThemeIcon) {
    sidebarThemeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      sidebarThemeIcon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
      if (window.lucide) lucide.createIcons();
    });
  }

  const sidebarDirToggle = document.getElementById('sidebarDirectionToggle');
  const sidebarDirText = document.getElementById('sidebarDirectionText');
  if (sidebarDirToggle && sidebarDirText) {
    sidebarDirToggle.addEventListener('click', () => {
      const isRtl = document.documentElement.dir === 'rtl';
      document.documentElement.dir = isRtl ? 'ltr' : 'rtl';
      sidebarDirText.textContent = isRtl ? 'RTL' : 'LTR';
    });
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});

// --- RENDER FUNCTIONS ---

function renderFabrics() {
  const gridHtml = mockFabrics.map(f => `
    <div class="fabric-card">
      <img src="${f.image}" alt="${f.name}">
      <div class="fabric-info">
        <h4>${f.name}</h4>
        <p>${f.material} • ${f.color}</p>
        <p class="price">${f.price}</p>
        <button class="btn-outline w-100 mt-10">Select</button>
      </div>
    </div>
  `).join('');
  
  const savedGrid = document.getElementById('savedFabricGrid');
  if (savedGrid) savedGrid.innerHTML = gridHtml;

  const wizardGrid = document.getElementById('wizardFabricGrid');
  if (wizardGrid) {
    // For wizard, add selectable behavior
    wizardGrid.innerHTML = mockFabrics.map(f => `
      <div class="fabric-card wizard-fabric-card">
        <img src="${f.image}" alt="${f.name}">
        <div class="fabric-info">
          <h4>${f.name}</h4>
          <p>${f.price}</p>
        </div>
      </div>
    `).join('');
  }
}

function renderMeasurements() {
  const container = document.getElementById('measurementsList');
  if (!container) return;

  container.innerHTML = mockMeasurements.map(m => `
    <div class="dash-card mb-20 flex-between" style="align-items: center;">
      <div>
        <h3 style="border:none; margin:0; padding:0;">${m.name}</h3>
        <p style="color:var(--color-text-secondary); font-size:0.9rem; margin-top:5px;">Last updated: ${m.date}</p>
      </div>
      <div>
        <span style="display:inline-block; padding:5px 10px; background:rgba(163,130,88,0.1); color:var(--color-gold); border-radius:4px; font-weight:bold; margin-right:15px;">${m.unit}</span>
        <button class="btn-outline" style="padding: 8px 15px;">Edit</button>
      </div>
    </div>
  `).join('');
}

function renderReferences() {
  const container = document.getElementById('referenceList');
  if (!container) return;

  container.innerHTML = `<div class="fabric-grid">` + mockReferences.map(r => `
    <div class="fabric-card">
      <img src="${r.image}" alt="${r.name}">
      <div class="fabric-info">
        <h4>${r.name}</h4>
        <p>${r.category} • ${r.date}</p>
        <button class="btn-outline w-100 mt-10 text-danger" style="border-color:#d32f2f; color:#d32f2f;">Remove</button>
      </div>
    </div>
  `).join('') + `</div>`;
}

function renderAppointments() {
  const container = document.getElementById('appointmentList');
  if (!container) return;

  container.innerHTML = mockAppointments.map(a => `
    <div class="dash-card mb-20 flex-between" style="align-items: center;">
      <div>
        <h3 style="border:none; margin:0; padding:0;">${a.type}</h3>
        <p style="color:var(--color-text-secondary); font-size:0.9rem; margin-top:5px;">
          <i data-lucide="calendar" style="width:14px;height:14px;"></i> ${a.date} at ${a.time}
        </p>
        <p style="color:var(--color-text-secondary); font-size:0.9rem; margin-top:2px;">
          <i data-lucide="map-pin" style="width:14px;height:14px;"></i> ${a.location}
        </p>
      </div>
      <div style="text-align:right;">
        <span style="display:inline-block; padding:5px 10px; background:${a.status==='Upcoming' ? 'rgba(163,130,88,0.1)' : 'rgba(76,175,80,0.1)'}; color:${a.status==='Upcoming' ? 'var(--color-gold)' : '#4CAF50'}; border-radius:4px; font-weight:bold; margin-bottom:10px;">${a.status}</span>
        <br>
        ${a.status === 'Upcoming' ? '<button class="btn-outline" style="padding: 8px 15px;">Reschedule</button>' : ''}
      </div>
    </div>
  `).join('');
}

function renderOrders() {
  const container = document.getElementById('orderList');
  if (!container) return;

  container.innerHTML = mockOrders.map(o => `
    <div class="dash-card mb-20">
      <div class="active-order-summary" style="margin-bottom:0;">
        <div class="order-img">
          <img src="${o.image}" alt="${o.garment}">
        </div>
        <div class="order-details-info" style="flex-grow:1;">
          <div class="flex-between">
            <h4>${o.garment}</h4>
            <span style="font-weight:bold;">${o.price}</span>
          </div>
          <p>Order #${o.id} • ${o.date}</p>
          <p class="expected">Status: <span style="color:var(--color-gold);">${o.status}</span></p>
          <div class="mt-10">
            <button class="btn-outline" style="padding: 8px 15px;" onclick="switchView('order-details')">View Details</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderInvoices() {
  const tbody = document.querySelector('#invoiceTable tbody');
  if (!tbody) return;

  tbody.innerHTML = mockOrders.map((o, idx) => `
    <tr>
      <td>INV-2026-0${99-idx}</td>
      <td>${o.id}</td>
      <td>${o.date}</td>
      <td style="font-weight:bold;">${o.price}</td>
      <td><span style="color:#4CAF50;">Paid</span></td>
      <td>
        <button class="btn-outline" style="padding: 5px 10px; font-size:0.8rem;">
          <i data-lucide="download" style="width:14px;height:14px;"></i> Download
        </button>
      </td>
    </tr>
  `).join('');
}

// --- WIZARD LOGIC ---
function setupWizard() {
  let currentStep = 1;
  const totalSteps = 7;
  
  const panels = document.querySelectorAll('.wizard-panel');
  const stepIndicators = document.querySelectorAll('.wizard-steps .step');
  const btnPrev = document.getElementById('wizardPrev');
  const btnNext = document.getElementById('wizardNext');

  function updateWizard() {
    panels.forEach((p, index) => {
      p.classList.toggle('active', index + 1 === currentStep);
    });
    stepIndicators.forEach((s, index) => {
      s.classList.toggle('active', index + 1 === currentStep);
    });

    if (btnPrev) btnPrev.disabled = currentStep === 1;
    if (btnNext) {
      if (currentStep === totalSteps) {
        btnNext.textContent = 'Place Custom Order';
      } else {
        btnNext.textContent = 'Next Step';
      }
    }
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizard();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateWizard();
      } else {
        alert("Mock: Custom Order Placed successfully!");
        switchView('orders');
        currentStep = 1;
        updateWizard();
      }
    });
  }

  // Selection Card toggling
  document.querySelectorAll('.select-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Remove active from siblings
      const siblings = e.target.parentElement.querySelectorAll('.select-card');
      siblings.forEach(s => s.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // Fabric Card toggling inside Wizard
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.wizard-fabric-card');
    if (card) {
      const siblings = card.parentElement.querySelectorAll('.wizard-fabric-card');
      siblings.forEach(s => s.classList.remove('selected'));
      card.classList.add('selected');
    }
  });

}

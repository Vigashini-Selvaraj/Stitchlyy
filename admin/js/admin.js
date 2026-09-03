// STITCHLY ADMIN CORE JS

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Toggle
  const toggleBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('admin-sidebar');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-open');
      } else {
        sidebar.classList.toggle('collapsed');
        // Save state to localStorage
        localStorage.setItem('stitchly_sidebar', sidebar.classList.contains('collapsed'));
      }
    });
  }

  // Restore sidebar state
  if (window.innerWidth > 768) {
    const isCollapsed = localStorage.getItem('stitchly_sidebar') === 'true';
    if (isCollapsed && sidebar) {
      sidebar.classList.add('collapsed');
    }
  }
  
  // Close mobile sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('mobile-open')) {
      if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('mobile-open');
      }
    }
  });

  // Theme Toggles (Top header and Sidebar)
  const themeToggle = document.getElementById('theme-toggle');
  const sidebarThemeToggle = document.getElementById('sidebarThemeToggle');
  const sidebarThemeIcon = document.getElementById('sidebarThemeIcon');
  
  // Check local storage for theme
  const currentTheme = localStorage.getItem('stitchly_theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    if (sidebarThemeIcon) sidebarThemeIcon.setAttribute('data-lucide', 'sun');
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
      localStorage.setItem('stitchly_theme', 'dark');
      if (themeToggle) themeToggle.innerHTML = '<i data-lucide="sun"></i>';
      if (sidebarThemeIcon) sidebarThemeIcon.setAttribute('data-lucide', 'sun');
    } else {
      localStorage.setItem('stitchly_theme', 'light');
      if (themeToggle) themeToggle.innerHTML = '<i data-lucide="moon"></i>';
      if (sidebarThemeIcon) sidebarThemeIcon.setAttribute('data-lucide', 'moon');
    }
    
    // Re-render icons if needed
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', handleThemeToggle);
  }
  if (sidebarThemeToggle) {
    sidebarThemeToggle.addEventListener('click', handleThemeToggle);
  }

  // RTL Toggle
  const sidebarDirectionToggle = document.getElementById('sidebarDirectionToggle');
  const sidebarDirectionText = document.getElementById('sidebarDirectionText');
  
  const currentDir = localStorage.getItem('stitchly_direction') || 'ltr';
  document.documentElement.dir = currentDir;
  if (sidebarDirectionText) {
    sidebarDirectionText.textContent = currentDir === 'rtl' ? 'LTR' : 'RTL';
  }

  if (sidebarDirectionToggle) {
    sidebarDirectionToggle.addEventListener('click', () => {
      const newDir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.dir = newDir;
      localStorage.setItem('stitchly_direction', newDir);
      
      if (sidebarDirectionText) {
        sidebarDirectionText.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }
});

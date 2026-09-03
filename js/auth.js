/**
 * STITCHLY Authentication Logic
 * Handles Role toggling on Login and Register pages.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- LOGIN PAGE LOGIC ---
  const roleBtnUser = document.getElementById('roleBtnUser');
  const roleBtnAdmin = document.getElementById('roleBtnAdmin');
  const googleAuthSection = document.getElementById('googleAuthSection');

  if (roleBtnUser && roleBtnAdmin) {
    
    roleBtnUser.addEventListener('click', () => {
      // Set Active State
      roleBtnUser.classList.add('active');
      roleBtnAdmin.classList.remove('active');
      
      // Show Google Auth
      if (googleAuthSection) {
        googleAuthSection.classList.remove('hidden-element');
      }
    });

    roleBtnAdmin.addEventListener('click', () => {
      // Set Active State
      roleBtnAdmin.classList.add('active');
      roleBtnUser.classList.remove('active');
      
      // Hide Google Auth
      if (googleAuthSection) {
        googleAuthSection.classList.add('hidden-element');
      }
    });
  }


  // --- REGISTER PAGE LOGIC ---
  const regRoleBtnUser = document.getElementById('regRoleBtnUser');
  const regRoleBtnAdmin = document.getElementById('regRoleBtnAdmin');
  
  const userFields = document.getElementById('userFields');
  const adminFields = document.getElementById('adminFields');
  const registerBtnText = document.getElementById('registerBtnText');

  if (regRoleBtnUser && regRoleBtnAdmin) {
    
    regRoleBtnUser.addEventListener('click', () => {
      // Set Active State
      regRoleBtnUser.classList.add('active');
      regRoleBtnAdmin.classList.remove('active');
      
      // Show User Fields, Hide Admin Fields
      if (userFields && adminFields) {
        userFields.classList.remove('hidden-element');
        adminFields.classList.add('hidden-element');
        
        // Update required attributes
        toggleRequired(userFields, true);
        toggleRequired(adminFields, false);
      }

      // Update Button Text
      if (registerBtnText) {
        registerBtnText.textContent = "Create User Account";
      }
    });

    regRoleBtnAdmin.addEventListener('click', () => {
      // Set Active State
      regRoleBtnAdmin.classList.add('active');
      regRoleBtnUser.classList.remove('active');
      
      // Show Admin Fields, Hide User Fields
      if (userFields && adminFields) {
        adminFields.classList.remove('hidden-element');
        userFields.classList.add('hidden-element');
        
        // Update required attributes
        toggleRequired(adminFields, true);
        toggleRequired(userFields, false);
      }

      // Update Button Text
      if (registerBtnText) {
        registerBtnText.textContent = "Create Admin Account";
      }
    });
  }

  // Helper to toggle 'required' attribute on inputs within a container
  function toggleRequired(container, isRequired) {
    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => {
      // Only modify inputs that are supposed to be required
      if (input.type !== 'checkbox' || (input.type === 'checkbox' && input.id === 'terms')) {
         input.required = isRequired;
      }
    });
  }

  // --- PASSWORD TOGGLE LOGIC ---
  const togglePasswordBtns = document.querySelectorAll('.toggle-password');
  
  togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const eyeIcon = btn.querySelector('.icon-eye');
      const eyeOffIcon = btn.querySelector('.icon-eye-off');
      
      if (input.type === 'password') {
        input.type = 'text';
        if (eyeIcon) eyeIcon.classList.add('hidden-element');
        if (eyeOffIcon) eyeOffIcon.classList.remove('hidden-element');
      } else {
        input.type = 'password';
        if (eyeIcon) eyeIcon.classList.remove('hidden-element');
        if (eyeOffIcon) eyeOffIcon.classList.add('hidden-element');
      }
    });
  });

});


  // --- LOGIN & REGISTER SUBMIT LOGIC ---
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const roleBtnAdmin = document.getElementById('roleBtnAdmin');
      if (roleBtnAdmin && roleBtnAdmin.classList.contains('active')) {
        window.location.href = 'admin/index.html';
      } else {
        window.location.href = 'user-dashboard.html';
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const regRoleBtnAdmin = document.getElementById('regRoleBtnAdmin');
      if (regRoleBtnAdmin && regRoleBtnAdmin.classList.contains('active')) {
        window.location.href = 'admin/index.html';
      } else {
        window.location.href = 'user-dashboard.html';
      }
    });
  }


  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

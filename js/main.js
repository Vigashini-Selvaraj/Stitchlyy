/* =========================================================
   STITCHLY - MAIN JAVASCRIPT
   Shared Navbar + Footer + Theme + RTL + Navigation
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     NAVBAR
  ======================================================= */

  const navbarHTML = `
    <header class="site-navbar" id="siteNavbar">
      <div class="navbar-container">

        <!-- Logo -->
        <a href="index.html" class="navbar-logo" aria-label="STITCHLY Home">
          <img src="assets/logoo1.png" alt="STITCHLY" class="logo-light">
          <img src="assets/logoo1_dark.png" alt="STITCHLY" class="logo-dark">
        </a>

        <!-- Desktop Navigation: 6 Main Pages from Architecture Guide -->
        <nav class="desktop-navigation" aria-label="Main navigation">
          <a href="index.html" data-page="index.html" class="nav-link">Home</a>
          <a href="about.html" data-page="about.html" class="nav-link">About</a>
          
          <div class="nav-dropdown">
            <a href="services.html" data-page="services.html" class="nav-link" style="display:flex;align-items:center;">Services <i data-lucide="chevron-down" style="width: 14px; height: 14px; margin-left: 4px;"></i></a>
            <div class="nav-dropdown-menu">
              <a href="services.html" data-page="services.html" class="nav-dropdown-link">All Services</a>
              <a href="custom-stitching.html" data-page="custom-stitching.html" class="nav-dropdown-link">Custom Stitching</a>
              <a href="fabrics.html" data-page="fabrics.html" class="nav-dropdown-link">Fabrics</a>
              <a href="measurement-guide.html" data-page="measurement-guide.html" class="nav-dropdown-link">Measurement Guide</a>
              <a href="pricing.html" data-page="pricing.html" class="nav-dropdown-link">Pricing</a>
              <a href="design-gallery.html" data-page="design-gallery.html" class="nav-dropdown-link">Design Gallery</a>
            </div>
          </div>

          <a href="collections.html" data-page="collections.html" class="nav-link">Collections</a>
          <a href="blog.html" data-page="blog.html" class="nav-link">Blog</a>
          <a href="contact.html" data-page="contact.html" class="nav-link">Contact</a>
        </nav>

        <!-- Desktop Actions -->
        <div class="navbar-actions">

          <!-- RTL -->
          <button
            type="button"
            class="nav-icon-button direction-toggle"
            id="directionToggle"
            aria-label="Change text direction"
            title="Change text direction"
            style="font-size: 0.85rem; font-weight: bold; width: auto; padding: 0 10px;"
          >
            <span id="directionText">RTL</span>
          </button>

          <!-- Theme -->
          <button
            type="button"
            class="nav-icon-button theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <i data-lucide="moon" id="themeIcon"></i>
          </button>

          <!-- Profile -->
          <div class="profile-wrapper">
            <button
              type="button"
              class="nav-icon-button profile-button"
              id="profileToggle"
              aria-label="Open profile menu"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <i data-lucide="user-round"></i>
            </button>

            <div
              class="profile-dropdown"
              id="profileDropdown"
              hidden
            >
              <a href="login.html" class="profile-dropdown-link">
                <i data-lucide="log-in"></i>
                <span>Login / Register</span>
              </a>

              <a href="user-dashboard.html" class="profile-dropdown-link">
                <i data-lucide="layout-dashboard"></i>
                <span>User Dashboard</span>
              </a>

              <a href="admin/index.html" class="profile-dropdown-link">
                <i data-lucide="shield-check"></i>
                <span>Admin Dashboard</span>
              </a>
            </div>
          </div>

          <!-- Mobile Menu -->
          <button
            type="button"
            class="mobile-menu-button"
            id="mobileMenuToggle"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileNavigation"
          >
            <i data-lucide="menu" id="mobileMenuIcon"></i>
          </button>

        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        class="mobile-navigation"
        id="mobileNavigation"
      >

        <div class="mobile-nav-list">
          <a href="index.html" data-page="index.html" class="mobile-nav-link">
            <i data-lucide="house"></i>
            <span>Home</span>
          </a>

          <a href="about.html" data-page="about.html" class="mobile-nav-link">
            <i data-lucide="info"></i>
            <span>About</span>
          </a>

          <details class="mobile-nav-details">
            <summary class="mobile-nav-link">
              <span style="display:flex;align-items:center;gap:12px;"><i data-lucide="briefcase"></i> Services</span>
              <i data-lucide="chevron-down"></i>
            </summary>
            <div class="mobile-dropdown-menu">
              <a href="services.html" class="mobile-nav-link" style="border-bottom:none;"><span>All Services</span></a>
              <a href="custom-stitching.html" class="mobile-nav-link" style="border-bottom:none;"><span>Custom Stitching</span></a>
              <a href="fabrics.html" class="mobile-nav-link" style="border-bottom:none;"><span>Fabrics</span></a>
              <a href="measurement-guide.html" class="mobile-nav-link" style="border-bottom:none;"><span>Measurement Guide</span></a>
              <a href="pricing.html" class="mobile-nav-link" style="border-bottom:none;"><span>Pricing</span></a>
              <a href="design-gallery.html" class="mobile-nav-link" style="border-bottom:none;"><span>Design Gallery</span></a>
            </div>
          </details>

          <a href="collections.html" data-page="collections.html" class="mobile-nav-link">
            <i data-lucide="layers"></i>
            <span>Collections</span>
          </a>

          <a href="blog.html" data-page="blog.html" class="mobile-nav-link">
            <i data-lucide="book-open"></i>
            <span>Blog</span>
          </a>

          <a href="contact.html" data-page="contact.html" class="mobile-nav-link">
            <i data-lucide="mail"></i>
            <span>Contact</span>
          </a>
        </div>

        <div class="mobile-profile-section">

          <div class="mobile-section-title">
            <i data-lucide="user-round"></i>
            <span>Account</span>
          </div>

          <a href="login.html" class="mobile-profile-link">
            <i data-lucide="log-in"></i>
            <span>Login / Register</span>
          </a>

          <a href="user-dashboard.html" class="mobile-profile-link">
            <i data-lucide="layout-dashboard"></i>
            <span>User Dashboard</span>
          </a>

          <a href="admin/index.html" class="mobile-profile-link">
            <i data-lucide="shield-check"></i>
            <span>Admin Dashboard</span>
          </a>

        </div>
      </div>
    </header>
  `;


  /* =======================================================
     FOOTER
  ======================================================= */

  const footerHTML = `
    <footer class="site-footer">

      <div class="footer-container">

        <div class="footer-grid">

          <!-- Brand -->
          <div class="footer-brand">

            <a href="index.html" class="footer-logo">
              <img src="assets/logoo1_footer.png" alt="STITCHLY">
            </a>

            <p>
              Personalized clothing, crafted around you.
              Discover beautifully tailored pieces designed
              to fit your style, comfort, and personality.
            </p>

          </div>


          <!-- Quick Links -->
          <div class="footer-column">

            <h3>Quick Links</h3>

            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="collections.html">Collections</a></li>
              <li><a href="custom-stitching.html">Custom Stitching</a></li>
              <li><a href="fabrics.html">Fabrics</a></li>
              <li><a href="measurement-guide.html">Measurement Guide</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="design-gallery.html">Design Gallery</a></li>
              <li><a href="blog.html">Journal</a></li>
            </ul>

          </div>


          <!-- Support -->
          <div class="footer-column">

            <h3>Support</h3>

            <ul class="footer-links">
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
              <li>
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="terms.html">Terms & Conditions</a>
              </li>
            </ul>

          </div>


          <!-- Get In Touch -->
          <div class="footer-column footer-contact">

            <h3>Get in Touch</h3>

            <ul class="footer-links">

              <li class="footer-contact-item">
                <i data-lucide="mail"></i>
                <a href="mailto:hello@stitchly.com">
                  hello@stitchly.com
                </a>
              </li>

              <li class="footer-contact-item">
                <i data-lucide="phone"></i>
                <a href="tel:+910000000000">
                  +91 00000 00000
                </a>
              </li>

              <li class="footer-contact-item">
                <i data-lucide="map-pin"></i>
                <span>
                  Available by appointment
                </span>
              </li>

            </ul>

          </div>

        </div>


        <!-- Footer Divider -->
        <div class="footer-divider"></div>


        <!-- Footer Bottom -->
        <div class="footer-bottom">

          <p>
            © 2026 STITCHLY. All rights reserved.
          </p>

          <div class="footer-socials" style="display: flex; gap: 15px; justify-content: center; align-items: center;">
            <a href="#" aria-label="Instagram" title="Instagram"><i data-lucide="instagram" style="width: 20px; height: 20px;"></i></a>
            <a href="#" aria-label="Facebook" title="Facebook"><i data-lucide="facebook" style="width: 20px; height: 20px;"></i></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><i data-lucide="linkedin" style="width: 20px; height: 20px;"></i></a>
          </div>

          <p class="footer-made-with">
            Crafted with
            <i data-lucide="heart"></i>
            for every unique style.
          </p>

          <button
            type="button"
            class="back-to-top"
            id="backToTop"
            aria-label="Back to top"
            title="Back to top"
          >
            <i data-lucide="arrow-up"></i>
          </button>

        </div>

      </div>
    </footer>
  `;


  /* =======================================================
     INSERT NAVBAR & FOOTER
  ======================================================= */

  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");

  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }

  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }


  /* =======================================================
     INITIALIZE LUCIDE ICONS
  ======================================================= */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  /* =======================================================
     THEME
  ======================================================= */

  initializeTheme();


  /* =======================================================
     RTL / LTR
  ======================================================= */

  initializeDirection();


  /* =======================================================
     NAVIGATION
  ======================================================= */

  initializeNavigation();


  /* =======================================================
     PROFILE DROPDOWN
  ======================================================= */

  initializeProfile();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  initializeMobileMenu();


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  initializeBackToTop();


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeProfileDropdown();
    closeMobileMenu();

  });

});


/* =========================================================
   THEME INITIALIZATION
========================================================= */

function initializeTheme() {

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  if (!themeToggle) {
    return;
  }

  const savedTheme = localStorage.getItem("stitchly-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.documentElement.classList.add("dark");
  } else {
    document.body.classList.remove("dark-mode");
    document.documentElement.classList.remove("dark");
  }

  updateThemeIcon();


  themeToggle.addEventListener("click", () => {

    const isDark =
      document.body.classList.toggle("dark-mode");

    document.documentElement.classList.toggle(
      "dark",
      isDark
    );

    localStorage.setItem(
      "stitchly-theme",
      isDark ? "dark" : "light"
    );

    updateThemeIcon();

  });


  function updateThemeIcon() {

    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) {
      return;
    }

    const iconName = document.body.classList.contains("dark-mode") ? "sun" : "moon";
    themeToggle.innerHTML = `<i data-lucide="${iconName}" id="themeIcon"></i>`;

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

  }

}


/* =========================================================
   RTL / LTR INITIALIZATION
========================================================= */

function initializeDirection() {

  const directionToggle =
    document.getElementById("directionToggle");

  const directionText =
    document.getElementById("directionText");

  if (!directionToggle) {
    return;
  }

  const savedDirection =
    localStorage.getItem("stitchly-direction") || "ltr";

  setDirection(savedDirection);


  directionToggle.addEventListener("click", () => {

    const currentDirection =
      document.documentElement.dir || "ltr";

    const newDirection =
      currentDirection === "rtl"
        ? "ltr"
        : "rtl";

    setDirection(newDirection);

  });


  function setDirection(direction) {

    document.documentElement.dir = direction;

    localStorage.setItem(
      "stitchly-direction",
      direction
    );

    if (directionText) {
      directionText.textContent =
        direction === "rtl"
          ? "LTR"
          : "RTL";
    }

  }

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initializeNavigation() {

  const currentPath =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();

  const currentPage =
    currentPath || "index.html";

  const navLinks =
    document.querySelectorAll("[data-page]");

  navLinks.forEach((link) => {

    const page =
      link
        .getAttribute("data-page")
        .toLowerCase();

    if (page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

  });

}


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

function initializeProfile() {

  const profileToggle =
    document.getElementById("profileToggle");

  const profileDropdown =
    document.getElementById("profileDropdown");

  if (!profileToggle || !profileDropdown) {
    return;
  }


  profileToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      profileToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeProfileDropdown();
    } else {

      profileDropdown.hidden = false;

      profileToggle.setAttribute(
        "aria-expanded",
        "true"
      );

      profileDropdown.classList.add("open");

    }

  });


  profileDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });


  document.addEventListener("click", () => {
    closeProfileDropdown();
  });

}


/* =========================================================
   CLOSE PROFILE DROPDOWN
========================================================= */

function closeProfileDropdown() {

  const profileToggle =
    document.getElementById("profileToggle");

  const profileDropdown =
    document.getElementById("profileDropdown");

  if (!profileToggle || !profileDropdown) {
    return;
  }

  profileDropdown.hidden = true;

  profileDropdown.classList.remove("open");

  profileToggle.setAttribute(
    "aria-expanded",
    "false"
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

  const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

  const mobileNavigation =
    document.getElementById("mobileNavigation");

  const mobileMenuIcon =
    document.getElementById("mobileMenuIcon");

  if (!mobileMenuToggle || !mobileNavigation) {
    return;
  }


  mobileMenuToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      mobileNavigation.classList.toggle("open");

    mobileMenuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    mobileMenuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close menu"
        : "Open menu"
    );

    if (mobileMenuIcon) {

      mobileMenuIcon.setAttribute(
        "data-lucide",
        isOpen ? "x" : "menu"
      );

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }

    }

  });


  /* Close menu after clicking a link */

  const mobileLinks =
    mobileNavigation.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {
      closeMobileMenu();
    });

  });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

  const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

  const mobileNavigation =
    document.getElementById("mobileNavigation");

  const mobileMenuIcon =
    document.getElementById("mobileMenuIcon");

  if (!mobileMenuToggle || !mobileNavigation) {
    return;
  }

  mobileNavigation.classList.remove("open");

  mobileMenuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileMenuToggle.setAttribute(
    "aria-label",
    "Open menu"
  );

  if (mobileMenuIcon) {

    mobileMenuIcon.setAttribute(
      "data-lucide",
      "menu"
    );

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

  }

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initializeBackToTop() {

  const backToTop =
    document.getElementById("backToTop");

  if (!backToTop) {
    return;
  }

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   HELPER - SCROLL TO SECTION
========================================================= */

function scrollToSection(sectionId) {

  const section =
    document.getElementById(sectionId);

  if (!section) {
    return;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   HELPER - NAVIGATE TO PAGE
========================================================= */

function navigateTo(page) {

  if (!page) {
    return;
  }

  window.location.href = page;

}
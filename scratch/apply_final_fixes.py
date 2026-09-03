import os

# 1. Update auth.js routing
auth_js = r'c:\Users\vigas\Desktop\stitchlyyy\js\auth.js'
with open(auth_js, 'r', encoding='utf-8') as f:
    auth_content = f.read()

# Replace index.html with user-dashboard.html for the 'else' cases
auth_content = auth_content.replace("window.location.href = 'index.html';", "window.location.href = 'user-dashboard.html';")

with open(auth_js, 'w', encoding='utf-8') as f:
    f.write(auth_content)


# 2. Update style.css for Logo Mix-Blend-Mode
style_css = r'c:\Users\vigas\Desktop\stitchlyyy\css\style.css'
with open(style_css, 'a', encoding='utf-8') as f:
    f.write('''
/* --- Logo Background Transparency Fix --- */
.navbar-logo img, .footer-logo img, .auth-logo img {
  mix-blend-mode: multiply;
}
body.dark-mode .navbar-logo img, body.dark-mode .footer-logo img, body.dark-mode .auth-logo img {
  mix-blend-mode: screen;
  filter: invert(1) hue-rotate(180deg);
}
''')


# 3. Update main.js footerHTML Support Links
main_js = r'c:\Users\vigas\Desktop\stitchlyyy\js\main.js'
with open(main_js, 'r', encoding='utf-8') as f:
    main_content = f.read()

support_target = """          <!-- Support -->
          <div class="footer-column">

            <h3>Support</h3>

            <ul>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>

          </div>"""

support_replacement = """          <!-- Support -->
          <div class="footer-column">

            <h3>Support</h3>

            <ul>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>

          </div>"""

main_content = main_content.replace(support_target, support_replacement)

with open(main_js, 'w', encoding='utf-8') as f:
    f.write(main_content)

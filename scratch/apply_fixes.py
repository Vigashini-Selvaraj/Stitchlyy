import os, re

# 1. Dark Mode Fix
admin_css = r'c:\Users\vigas\Desktop\stitchlyyy\admin\css\admin.css'
with open(admin_css, 'a', encoding='utf-8') as f:
    f.write('\n/* Dark Mode Headings Fix */\nbody.dark-mode .page-title h1, body.dark-mode .admin-info h4, body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode h4, body.dark-mode h5, body.dark-mode h6 { color: var(--color-text); }\n')

# 2. Remove Search Bar from admin HTML files
dir_path = r'c:\Users\vigas\Desktop\stitchlyyy\admin'
html_files = [f for f in os.listdir(dir_path) if f.endswith('.html')]
search_bar_regex = re.compile(r'<div class="search-bar".*?</div>', re.DOTALL)

for fname in html_files:
    fpath = os.path.join(dir_path, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = search_bar_regex.sub('', content)
    if new_content != content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Removed search bar in {fname}')

# 3. Add Login Submit Logic to auth.js
auth_js = r'c:\Users\vigas\Desktop\stitchlyyy\js\auth.js'
with open(auth_js, 'a', encoding='utf-8') as f:
    f.write('\n\n  // --- LOGIN & REGISTER SUBMIT LOGIC ---\n  const loginForm = document.getElementById(\'loginForm\');\n  if (loginForm) {\n    loginForm.addEventListener(\'submit\', (e) => {\n      e.preventDefault();\n      const roleBtnAdmin = document.getElementById(\'roleBtnAdmin\');\n      if (roleBtnAdmin && roleBtnAdmin.classList.contains(\'active\')) {\n        window.location.href = \'admin/index.html\';\n      } else {\n        window.location.href = \'index.html\';\n      }\n    });\n  }\n\n  const registerForm = document.getElementById(\'registerForm\');\n  if (registerForm) {\n    registerForm.addEventListener(\'submit\', (e) => {\n      e.preventDefault();\n      const regRoleBtnAdmin = document.getElementById(\'regRoleBtnAdmin\');\n      if (regRoleBtnAdmin && regRoleBtnAdmin.classList.contains(\'active\')) {\n        window.location.href = \'admin/index.html\';\n      } else {\n        window.location.href = \'index.html\';\n      }\n    });\n  }\n')

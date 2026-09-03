import os
import glob

admin_dir = r'c:\Users\vigas\Desktop\stitchlyyy\admin'
html_files = glob.glob(os.path.join(admin_dir, '*.html'))

logo_html = '''<a href="index.html">
          <img src="../assets/logoo1.png" alt="STITCHLY" class="logo-light" style="max-width:140px;">
          <img src="../assets/logoo1_dark.png" alt="STITCHLY" class="logo-dark" style="max-width:140px;">
        </a>'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<h2>STITCHLY.</h2>' in content:
        content = content.replace('<h2>STITCHLY.</h2>', logo_html)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

# Update admin.css with logo toggle logic
admin_css = os.path.join(admin_dir, 'css', 'admin.css')
with open(admin_css, 'a', encoding='utf-8') as f:
    f.write('\n/* Logo Toggle */\n.logo-dark { display: none; }\nbody.dark-mode .logo-light { display: none; }\nbody.dark-mode .logo-dark { display: block; }\n')

print('Admin logos updated successfully.')

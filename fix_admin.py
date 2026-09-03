import os
import glob

# 1. Update admin.css to set the correct sidebar variables
admin_css = r'c:\Users\vigas\Desktop\stitchlyyy\admin\css\admin.css'
with open(admin_css, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the --sidebar-bg variable in :root (light mode)
content = content.replace('--sidebar-bg: var(--color-navy);', '--sidebar-bg: var(--color-cream, #F5F0E6);')

# Replace the --sidebar-bg variable in dark mode
content = content.replace('--sidebar-bg: #0a0e17;', '--sidebar-bg: #050505;')

with open(admin_css, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Add padding to the admin sidebar header to fix the spacing
admin_dir = r'c:\Users\vigas\Desktop\stitchlyyy\admin'
html_files = glob.glob(os.path.join(admin_dir, '*.html'))

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # We replace <div class="sidebar-header"> with a version that has padding.
    if '<div class="sidebar-header">' in html:
        html = html.replace('<div class="sidebar-header">', '<div class="sidebar-header" style="padding-top: 30px; padding-bottom: 20px; height: auto;">')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(html)

print('Fixed sidebar colors and spacing!')

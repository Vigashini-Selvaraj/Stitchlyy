import os
import re

dir_path = r'c:\Users\vigas\Desktop\stitchlyyy\admin'
html_files = [f for f in os.listdir(dir_path) if f.endswith('.html')]

# Pattern to match the specific <li> tags for Services and Settings
# Looks for <li class="nav-item"> ... <a href="services.html" ... </li>
# Sometimes class="nav-item active"
services_pattern = re.compile(r'\s*<li class=\"nav-item(?: active)?\">\s*<a href=\"services\.html\".*?</li>', re.DOTALL)
settings_pattern = re.compile(r'\s*<li class=\"nav-item(?: active)?\">\s*<a href=\"settings\.html\".*?</li>', re.DOTALL)

for file_name in html_files:
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = services_pattern.sub('', content)
    new_content = settings_pattern.sub('', new_content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {file_name}')

import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

about_replacements = {
    'assets/images/leadperfect.png': 'assets/images/about/about_hero.jpg',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/saree gown.png',
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/western.png',
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1588693892791-c4fc8455799a?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_designer.jpg',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=85&w=1200': 'assets/images/collections/saree.png',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=85&w=1000': 'assets/images/collections/festive.png',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=85&w=1000': 'assets/images/collections/coat.png',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=85&w=1000': 'assets/images/collections/dress_manu.png',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=85&w=1800': 'assets/images/about/about_craftsmanship.jpg'
}

index_replacements = {
    'https://images.unsplash.com/photo-1598532213005-592f7d32c5f1?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_craftsmanship.jpg',
    'https://images.unsplash.com/photo-1556909211-36987daf7b4d?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/kurttii.png',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_designer.jpg',
    'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/western.png',
    'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_hero.jpg',
    'https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/anarkali.png',
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/saree gown.png',
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_hero.jpg',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg'
}

home2_replacements = {
    'https://images.unsplash.com/photo-1594938298596-189f36e4f358?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/coat.png',
    'https://images.unsplash.com/photo-1598532213005-592f7d32c5f1?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_craftsmanship.jpg',
    'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/western.png',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/coat.png',
    'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1509460913899-515f1df34fac?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/coat.png',
    'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/western.png',
    'https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_craftsmanship.jpg',
    'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/coat.png',
    'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800': 'assets/images/about/about_craftsmanship.jpg',
    'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1594938328870-9623159c8c99?auto=format&fit=crop&q=80&w=800': 'assets/images/collections/formal.png',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200': 'assets/images/about/team_stylist.jpg'
}

replace_in_file('about.html', about_replacements)
replace_in_file('index.html', index_replacements)
replace_in_file('home2.html', home2_replacements)
print('Done!')

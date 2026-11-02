"""Build the Claude-artifact versions of the books (same engine, no service worker / library link).
Writes <out>/index.html and copies the book's recordings to <out>/audio/.
Usage: python3 tools/build_artifact.py g6 /path/to/out
"""
import os, sys, shutil, importlib.util
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('b', os.path.join(R, 'tools', 'build.py'))
bid, out = sys.argv[1], sys.argv[2]
code, grade = {'g6': ('6A', 6), 'g7': ('7A', 7)}[bid]
src = open(os.path.join(R, 'tools', 'build.py'), encoding='utf8').read().split('for bid, code, grade in BOOKS')[0]
ns = {'__file__': os.path.join(R, 'tools', 'build.py')}; exec(src, ns)
rd, esb, es_check = ns['rd'], ns['esb'], ns['es_check']
b = 'books/' + bid
units = [u for u in ['u1', 'u2', 'u3', 'u4'] if os.path.exists(os.path.join(R, b, 'data', u + '.js'))]
js = '\n'.join([rd(b + '/book.js'), 'delete BOOK.libraryUrl;'] + [rd('%s/data/%s.js' % (b, u)) for u in units] + [rd(b + '/data/glossary.js')] + ([rd(b + '/data/labs.js')] if os.path.exists(os.path.join(R, b, 'data', 'labs.js')) else []) + [rd('engine/app.js')])
js = esb(js, 'js', ns['TARGET_JS']); es_check(js, bid)
css = esb(rd('engine/styles.css') + '\n' + rd(b + '/theme.css'), 'css', ns['TARGET_CSS'])
head = '<meta charset="utf-8">\n<title>English Pearls of Kuwait %s</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@500;700;800&family=Lexend:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;600;700&display=swap">\n<style>%s</style>\n' % (code, css)
body = rd('engine/body.html').replace('{{CODE}}', code).replace('{{GRADE}}', str(grade)).replace('/*JS*/', js.replace('</script', '<\\/script'))
open(os.path.join(out, 'index.html'), 'w', encoding='utf8').write(head + body)
os.makedirs(os.path.join(out, 'audio'), exist_ok=True)
for f in os.listdir(os.path.join(R, 'docs', bid, 'audio')):
    shutil.copy(os.path.join(R, 'docs', bid, 'audio', f), os.path.join(out, 'audio', f))
print(out, 'index.html', os.path.getsize(os.path.join(out, 'index.html')) // 1024, 'KB')

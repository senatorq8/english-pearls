"""Build the GitHub Pages site into docs/.
Usage:  python3 tools/build.py
Needs Node with esbuild + es-check (npm install), Python 3.
"""
import hashlib, json, os, re, shutil, subprocess, sys

R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BIN = os.path.join(R, 'node_modules', '.bin')
if not os.path.exists(os.path.join(BIN, 'esbuild')):
    BIN = '/home/claude/buildtools/node_modules/.bin'
# id, code, grade, title, short name (home screen), line under the title
BOOKS = [('g6', '6A', 6, 'English Pearls of Kuwait', 'Pearls 6A', 'Grade 6 · 6A'),
         ('g7', '7A', 7, 'English Pearls of Kuwait', 'Pearls 7A', 'Grade 7 · 7A'),
         ('g8', 'Grade 8', 8, 'Modified Target English', 'English 8', 'Grade 8')]
TARGET_JS = 'es2017,safari11,chrome61,firefox60'
TARGET_CSS = 'safari11,chrome61,firefox60'

def rd(p): return open(os.path.join(R, p), encoding='utf8').read()
def wr(p, s):
    p = os.path.join(R, p); os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, 'w', encoding='utf8').write(s)

def esb(src, loader, target):
    r = subprocess.run([os.path.join(BIN, 'esbuild'), '--loader=' + loader, '--target=' + target, '--charset=utf8', '--log-level=warning'],
                       input=src.encode('utf8'), capture_output=True)
    if r.returncode: sys.exit(r.stderr.decode())
    if r.stderr: print(r.stderr.decode())
    return r.stdout.decode('utf8')

def es_check(js, name):
    tmp = os.path.join(R, '.tmp_check.js'); open(tmp, 'w', encoding='utf8').write(js)
    r = subprocess.run([os.path.join(BIN, 'es-check'), 'es2017', tmp], capture_output=True, text=True)
    os.remove(tmp)
    if r.returncode: sys.exit(name + ': not ES2017-compatible\n' + r.stdout + r.stderr)

def build_book(bid, code, grade, title, short, sub):
    b = 'books/' + bid
    ddir = os.path.join(R, b, 'data')
    units = sorted([f[:-3] for f in os.listdir(ddir) if re.match(r'^u\d+\.js$', f)], key=lambda u: int(u[1:]))
    extras = sorted(f for f in os.listdir(ddir) if re.match(r'^labs.*\.js$', f)) + (['projects.js'] if os.path.exists(os.path.join(ddir, 'projects.js')) else [])
    vj = os.path.join(R, 'tools', 'voice', bid + '.json')
    vids = [k for k in (json.load(open(vj, encoding='utf8')) if os.path.exists(vj) else {}) if os.path.exists(os.path.join(R, 'docs', 'voice', k + '.mp3'))]
    js = '\n'.join([rd(b + '/book.js'), 'BOOK.sw = "../sw.js"; BOOK.swScope = "../"; BOOK.voiceDir = "../voice/"; BOOK.voiceIds = "%s";' % ','.join(sorted(vids))] +
                   [rd('%s/data/%s.js' % (b, u)) for u in units] +
                   ([rd(b + '/data/glossary.js')] if os.path.exists(os.path.join(ddir, 'glossary.js')) else []) + [rd('%s/data/%s' % (b, f)) for f in extras] + [rd('engine/app.js')])
    js = esb(js, 'js', TARGET_JS); es_check(js, bid)
    css = esb(rd('engine/styles.css') + '\n' + rd(b + '/theme.css'), 'css', TARGET_CSS)
    fill = lambda s: s.replace('{{CODE}}', code).replace('{{GRADE}}', str(grade)).replace('{{TITLE}}', title).replace('{{SHORT}}', short).replace('{{SUB}}', sub)
    html = fill(rd('engine/page-head.html')).replace('/*CSS*/', css) + \
           fill(rd('engine/body.html')).replace('/*JS*/', js.replace('</script', '<\\/script')) + '\n</body>\n</html>\n'
    wr('docs/%s/index.html' % bid, html)
    print('docs/%s/index.html  %d KB  (%d units, %d voice clips)' % (bid, len(html) // 1024, len(units), len(vids)))

for bk in BOOKS: build_book(*bk)
shutil.copy(os.path.join(R, 'engine/library.html'), os.path.join(R, 'docs/index.html'))
open(os.path.join(R, 'docs/.nojekyll'), 'w').close()

manifest = {
    "name": "English Pearls of Kuwait", "short_name": "English Pearls",
    "description": "Interactive English books for Grades 6, 7 and 8 (Kuwait MOE). Prepared by: Abdullah Alenezi",
    "start_url": "./", "scope": "./", "display": "standalone", "orientation": "any",
    "background_color": "#eef3f6", "theme_color": "#0b5c8c", "lang": "en",
    "icons": [{"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
              {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
              {"src": "icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]}
wr('docs/manifest.webmanifest', json.dumps(manifest, ensure_ascii=False, indent=2))

# Service worker: precache the app shell + small pictures; book page scans are cached when first opened.
pre = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/icon-32.png']
for bid in [bk[0] for bk in BOOKS]:
    pre += [bid + '/', bid + '/index.html']
    for sub in ('covers', 'crops'):
        d = os.path.join(R, 'docs', bid, 'img', sub)
        pre += sorted('%s/img/%s/%s' % (bid, sub, f) for f in os.listdir(d) if f.endswith('.jpg'))
h = hashlib.sha1()
for p in pre:
    fp = os.path.join(R, 'docs', p)
    if os.path.isfile(fp): h.update(open(fp, 'rb').read())
version = h.hexdigest()[:10]
sw = rd('engine/sw.template.js').replace('__VERSION__', version).replace('__PRECACHE__', json.dumps(pre, indent=1))
wr('docs/sw.js', sw)
print('docs/sw.js  cache version', version, '·', len(pre), 'precached files')

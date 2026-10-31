# English Pearls of Kuwait – Interactive Books

Interactive versions of the Kuwait MOE English course books **English Pearls of Kuwait**
for **Grade 6 (6A)** and **Grade 7 (7A)**: 4 units and 28 lessons per book, with word cards,
read-aloud, reading, grammar, listening, speaking and writing practice, games, points and badges,
and a teacher mode with answers and lesson notes.

**Prepared by: Abdullah Alenezi**

الكتب التفاعلية لسلسلة «English Pearls of Kuwait» للصف السادس (6A) والصف السابع (7A).
إعداد: أ. عبدالله العنزي

---

## Open the site

After GitHub Pages is switched on (see below) the books are at:

- Library: `https://senatorq8.github.io/english-pearls/`
- Grade 6A: `https://senatorq8.github.io/english-pearls/g6/`
- Grade 7A: `https://senatorq8.github.io/english-pearls/g7/`

### Switch on GitHub Pages (one time)

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Choose branch **main** and folder **/docs**, then **Save**.
4. Wait 1–2 minutes and open the link above.

تفعيل الموقع (مرة واحدة): Settings ← Pages ← Source: Deploy from a branch ← Branch: main ← Folder: /docs ← Save.

## What works

- Works on iPad, iPhone, Android, Chromebook and computers (Safari 11+ / Chrome 61+).
- Install as an app (Add to Home Screen); works offline after the first visit.
- Voice recording with the microphone (after the browser asks for permission).
- Progress, points and badges are saved on each device (no accounts).
- Read-aloud uses the device's own English voice (a generated voice, not the book recording).

Not included: the book's original listening recordings (the lessons link to the book's QR codes,
which need an MOE account) and automatic pronunciation scoring.

## Repository layout

```
engine/            the app (app.js, styles.css, page templates, library page, service worker template)
books/g6/, g7/     each book: book.js (table of contents), theme.css, data/u1–u4.js (lessons), glossary
docs/              the built website that GitHub Pages serves (+ book page scans and pictures in docs/<book>/img)
tools/             build.py, validate.js, SCHEMA.md (lesson data format)
```

## Edit a lesson and rebuild

```bash
npm install            # once (esbuild + es-check)
npm run validate       # checks every lesson file
npm run build          # writes docs/g6/index.html, docs/g7/index.html, docs/sw.js
git add -A && git commit -m "Update lessons" && git push
```

The build makes the code compatible with older iPads and phones and refuses to finish if it is not.

## Copyright

The book texts and page images are © Ministry of Education – State of Kuwait. This site is an
interactive classroom version. The pages are marked `noindex` so search engines do not list them.

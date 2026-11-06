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
- The book's own listening recordings play inside the listening lessons.
- Every grammar lesson has two Extra Practice screens: a **Grammar Lab** (buttons and a slider
  change a pop-up sentence live) and **Predict, Then Reveal** (a common mistake: predict, then lift a paper flap).
- Up to 3 stars per unit (a "star passport"); mistakes never take stars or points away.
- Arrow keys or a sideways swipe move between lesson steps. Dark mode (Settings or the Contents menu).
- Teacher mode: "Show on board" shows one activity alone, big, for the class screen.

Not included: automatic pronunciation scoring.

## Repository layout

```
engine/            the app (app.js, styles.css, page templates, library page, service worker template)
books/g6/, g7/     each book: book.js (table of contents), theme.css, data/u1–u4.js (lessons), glossary,
                   data/labs.js (Grammar Lab + Predict for each grammar lesson; list every sentence with
                   `node tools/lab-dump.js g7`)
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

## Augmented reality (pilot: Grade 8, Unit 10)

`docs/ar/scan.html?set=g8-u10` opens the phone camera and recognises the printed book pages 75–81
(MindAR image tracking). A recognised page offers: open its lesson, listen to the page (the book's natural voice),
and a 3D model from the page standing on the paper. `docs/ar/words.html?set=g8-u10` shows the unit's words as
3D models that students can place in their room (model-viewer: Scene Viewer on Android, Quick Look on iPhone).

- Sets (pages, lessons, models): `tools/ar/sets.config.js`. Sentences and "Listen" texts are copied from the book data.
- Models: original low-poly models in `tools/ar/models.js` (no third-party assets).
- Rebuild: `npm install && npm run ar` (renders models + page targets, then copies pages and libraries into `docs/ar/`),
  then `python3 tools/voice-make.py …` for any new texts in `tools/voice/ar.json`, and `node tools/ar/make.js` again.
- To add a unit: add a set to `sets.config.js`, add `BOOK.ar = { uN: { set, pages } }` to the book's `book.js`.

# Lesson data schema — English Pearls of Kuwait (Grade 6, Book 6A) interactive book

Each unit lives in its own file `data/uN.js` and registers itself:

```js
BOOK.addUnit({
  id: "u2", num: 2, title: "School & Responsibility",
  pages: [31, 43],            // printed book page range (cover → last lesson page)
  cover: 31,                  // printed page number of the unit cover image
  outcomes: { listening: [...], speaking: [...], reading: [...], writing: [...] }, // copied from the book's "Learning Outcomes" page
  lessons: [ LESSON, ... ]    // exactly 7, in book order
});
```

PRINTED PAGE NUMBERS: the printed page number = PDF page − 1. Page text is in
`(extract page text with pdftotext; printed page = PDF page − 1)`
and page images in `docs/<book>/img/pages/pMMM.jpg` (MMM = printed page, 3 digits).
Always LOOK at the page image too (Read tool) — the text extraction scrambles columns, tables, speech bubbles.

## Ground rules (from the teacher — non‑negotiable)
* The book is the source. Copy its texts, instructions, questions, word lists, tables, examples verbatim (fix only obvious extraction breaks).
* Never invent text and attribute it to the book. Anything you create (extra examples, extra games, extra listening scripts, Arabic glosses, model answers) is either marked `source:"extra"` (shown as "Extra Practice") or is a clearly-labelled support item (Arabic meaning, hint, "Suggested answer").
* The book prints NO answer key. Where you derive an answer from the book's own text, put it in `answer`/`model` and the engine labels it "Suggested answer (from the text)". If an answer depends on audio we don't have, DO NOT guess: use `open:true` / `needsAudio:true`.
* No original listening recordings exist in our files. Listening lessons: render the book's tasks with `needsAudio:true` (no auto-check), plus ONE `source:"extra"` listening activity with your own short script (TTS, clearly labelled as generated voice, not the book recording).
* If two options are both correct, accept both (`answer: [0,2]` for mcq; multiple strings for fill). E.g. "to" and "in order to" are both correct for purpose with base verb; "so that" needs subject + verb.
* Short, direct English instructions (Grade 6, many weak readers). Arabic is OPTIONAL support in `ar` fields.
* Every accepted answer must be correct English. Re‑check every item.

## LESSON
```js
{
  id: "u2l1", num: 1, skill: "Reading",            // Reading | Grammar | Listening | Speaking | Writing
  title: "From My First Day Until Today",           // exactly as in the Table of Contents
  pages: [34, 35],                                   // printed pages
  status: "complete",
  canDo: ["I can analyse explicit and implicit details ..."],   // the book's "I can" statement(s), verbatim
  goals: ["Read a story about school.", "Learn 12 new words.", "Answer questions about the text."], // 2–4 very short goals in easy words (yours)
  goalsAr: ["أقرأ قصة عن المدرسة.", ...],            // same goals in Arabic
  linkers: ["because", "also", ...],                 // only if the page has a Linkers Bank
  warmup: {                                          // 1–2 minute visual starter
    title: "Before You Read",                        // the book's heading if it has one
    image: "crops/u2l1-warmup.jpg" | null,           // optional crop (see Images)
    emoji: "🏫",                                     // fallback visual if no image
    prompts: ["...book questions verbatim..."],
    seconds: 90
  },
  vocab: [                                           // the lesson's Vocabulary list, in book order (empty [] if none)
    { w: "nervous", pos: "adjective", emoji: "😬", def: "worried or a little afraid",   // simple English definition (glossary if present)
      ex: "I was nervous on my first day.",          // simple sentence; use the book's sentence if the text has one
      exFromBook: true,                              // true only if `ex` is copied from the book
      ar: "متوتر", ipa: "/ˈnɜː.vəs/" }               // ipa from the GLOSSARY pages 74–78 when listed there, else omit
  ],
  sections: [ SECTION, ... ],                        // in book order, then extras at the end
  game: GAME,                                        // one short game tied to the lesson (source extra)
  teacher: {
    notes: ["How to run the lesson in 3–5 bullets"],
    pair: ["pair activity idea", ...],
    group: ["group activity idea", ...],
    quick: [{ q: "Quick check question", a: "answer" }, ...]   // 3–5 exit questions
  }
}
```

## SECTION
```js
{ type: "reading", title: "Generations Together", page: 20,
  paras: ["paragraph 1 verbatim", "paragraph 2", ...],   // full book text; keep underlined word as [[them]] and target vocab is auto-highlighted
  speaker: null }                                         // or for emails: use `blocks` instead of paras:
//   blocks: [{ head: "To: Ahmed\nSubject: ...", paras: [...] }, ...]

{ type: "grammar", title: "Present Simple", page: 22,
  steps: [                                   // step‑by‑step explanation; step 1 = the book's rule box
    { title: "When do we use it?", text: "We use the present simple for routines and facts.", textAr: "...",
      examples: [ "{s:She} {v:brushes} {o:her teeth} {t:every day}." ] }   // colour tokens: s subject, v verb, a auxiliary/modal, o object, t time/keyword, c connector, n negative, q question word, p purpose
  ],
  table: { head: ["Connector","Purpose","Form","Example"], rows: [[...],[...]] },   // optional, the book's table verbatim
  worked: { q: "Correct: My dad doesn't drives a blue car.", steps: ["Find the helper: doesn't", "After doesn't we use the base verb", "drives → drive"], a: "My dad doesn't drive a blue car." },  // a worked example BEFORE practice
  notes: ["Extra tip", ...] }

{ type: "activity", title: "Read and correct the underlined verbs.", page: 22,
  source: "book" | "extra",
  stage: "guided" | "independent",           // grammar: worked → guided → independent
  instructions: "Short instruction.", instructionsAr: "...",
  items: [ ITEM, ... ] }

{ type: "discuss", title: "Think, Pair, Share", page: 22, source: "book",
  prompts: ["What do you do every morning before school?", ...], image: null, emoji: "💬" }

{ type: "speak", title: "Classmate Interview", page: 24, source: "book",
  instructions: "...",
  dialogue: [ { who: "A", text: "When do you wake up every morning?" }, { who: "B", text: "" } ],   // "" = student's turn
  starters: ["I usually ...", "I always ..."],
  record: true }                              // show the record‑yourself panel

{ type: "write", title: "My Dream Home", page: 29, source: "book",
  instructions: "...",
  wordBank: ["because", "also", ...],
  frame: [ { label: "Topic sentence", hint: "Write your main idea clearly." }, ... ],  // the book's plan boxes
  model: "Model paragraph (yours, mark modelFromBook:false) or the book's example sentences",
  modelFromBook: false,
  checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "My words are in the right order.", "I answered the task."],   // engine adds book checklist if given in `bookChecklist`
  bookChecklist: ["I started with an interesting opening sentence.", ...],
  minWords: 30 }

{ type: "listen", title: "My Favourite Things", page: 23, source: "book",
  needsAudio: true,                            // book recording not in our files
  audioLink: "https://moekuwait-my.sharepoint.com/...",  // the URL decoded from the book's QR code (see books/<book>/QR_LINKS.txt, keyed by printed page). We could NOT open it from here; the engine shows it as "Open the book's QR audio link".
  instructions: "...", items: [ITEM...] }      // items shown as note-taking (open) — no auto-check

{ type: "listen", title: "Extra Practice: ...", source: "extra",
  script: [ { who: "Sara", text: "..." }, ... ],   // your own short script (60–120 words), read by TTS
  items: [ITEM...] }                               // auto-checked questions on YOUR script
```

## ITEM (inside activity / listen)
```js
{ t: "mcq",   q: "Choose another title for the passage:", options: ["a..","b..","c..","d.."], answer: 1,   // or [0,2] if several are correct
  hint: "Think about the main idea.", why: "The text is about family life in the traditional home." }

{ t: "fill",  q: "My dad doesn't ____ a blue car.", answer: ["drive"],          // one blank `____` per item; list = all accepted answers (case-insensitive)
  bank: ["drive","drives"],                                                     // optional word chips (tap to fill)
  hint: "...", why: "..." }

{ t: "fix",   q: "My dad doesn't {drives} a blue car.", answer: ["drive"], hint, why }   // the {wrong} word is underlined; student types the correction

{ t: "match", q: "Match each family member to their role.", pairs: [["Grandparents","guided younger generations with wisdom."], ...], hint, why }
            // tap left then tap right (no drag needed); right column is shuffled

{ t: "order", q: "Put the words in order.", words: ["I","wear","a","helmet","to","protect","my","head."],
  answer: ["I wear a helmet to protect my head."],                 // all accepted orders
  hint, why }

{ t: "short", q: "What does the underlined word “them” refer to?",
  model: "Family members / the families.",                         // shown after an attempt
  keywords: [["famil"], ["member","people"]],                       // optional: groups of stems; every group must be matched by at least one stem → "Well done!"; else engine says "Compare with the suggested answer" (never marks wrong)
  open: false,                                                      // true = personal answer, never auto-judged
  hint: "Look at the sentence before the word." }

{ t: "choose", q: "Underline the correct answer: Soud (have got / has got) a big family.", options: ["have got","has got"], answer: 1, why }   // inline choice, same logic as mcq

{ t: "table", q: "Complete the table.", head: ["Traditional activity","Who participates?","When?"],
  rows: [ ["zuwara", {answer:["all the relatives","relatives","the family"], model:"All the relatives"}, {answer:["every friday","friday","on friday"], model:"Every Friday"}] ],
  open: false }                    // cells: plain string = fixed text; object = input (checked if answer given; open if open:true)
```

## GAME (one per lesson, source extra, uses the lesson's content)
```js
{ kind: "match-emoji",  title: "Word & Picture", from: "vocab" }      // auto from vocab list
{ kind: "scramble",     title: "Sentence Builder", sentences: ["I wear a helmet to protect my head.", ...] }  // 4–6 sentences
{ kind: "quiz",         title: "Quick Quiz", items: [ITEM mcq/choose ...] }                               // 5–8 fast items
{ kind: "sort",         title: "Sort it!", buckets: ["Countable","Uncountable"], cards: [["apple",0],["rice",1], ...] }
{ kind: "spell",        title: "Missing Letters", from: "vocab" }      // complete the word
```
Optional timer is handled by the engine.

## Images
Optional crops from page images: write a small python script (PIL) that crops from
`docs/<book>/img/pages/pMMM.jpg` (925×1149 px) and saves to `docs/<book>/img/crops/<lessonid>-<name>.jpg`
(quality 72, max width 700). Use only for warm-up / discussion pictures. Verify the crop visually.

## File format
Plain JavaScript (no imports), UTF-8, valid ES2017. Strings use double quotes; escape properly.
Validate with `node ./tools/validate.js data/uN.js` when done.

BOOK.labs = Object.assign(BOOK.labs || {}, {
  /* Extra Practice for the Unit 6 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */

  /* ── Unit 6 · Lesson 2 · Question Tags (Past simple) (p. 48) ── */
  u6l2: {
    lab: {
      title: "Grammar Lab: The Tag Machine",
      intro: "Choose who, what happened, and positive or negative. Watch the tag flip.",
      introAr: "اختر الفاعل والحدث ونوع الجملة، وشاهد السؤال الذيلي ينقلب.",
      controls: [
        { id: "subj", label: "Who?", options: ["You", "He", "She", "They", "Amani", "Your brothers"], start: "You" },
        { id: "act", label: "What?", options: [
          { v: "visit", t: "visited the island" }, { v: "know", t: "knew about that" }, { v: "eat", t: "ate all the candy" },
          { v: "speak", t: "spoke to the teacher" }, { v: "busy", t: "was / were busy" }] },
        { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }] }
      ],
      build(st) {
        const PRON = { You: "you", He: "he", She: "she", They: "they", Amani: "she", "Your brothers": "they" }[st.subj];
        const plural = PRON === "you" || PRON === "they";
        const pronNote = st.subj === PRON.charAt(0).toUpperCase() + PRON.slice(1) ? "" : " In the tag, " + st.subj + " → " + PRON + ".";
        const pronNoteAr = pronNote ? " في السؤال الذيلي نستخدم الضمير بدل الاسم." : "";
        if (st.act === "busy") {
          const be = plural ? "were" : "was";
          if (st.form === "+") return {
            s: "{s:" + st.subj + "} {v:" + be + "} busy, {n:" + be + "n't} {s:" + PRON + "}?", badge: "positive → negative tag", badgeKind: "good",
            rule: "{v:" + be + "} …, {n:" + be + "n't} + {s:pronoun}?",
            note: "The sentence has " + be + ", so the tag uses " + be + "n't (not didn't)." + pronNote,
            noteAr: "الجملة فيها " + be + "، لذلك نستخدم " + be + "n't في السؤال الذيلي." + pronNoteAr
          };
          return {
            s: "{s:" + st.subj + "} {n:" + be + "n't} busy, {a:" + be + "} {s:" + PRON + "}?", badge: "negative → positive tag", badgeKind: "warn",
            rule: "{n:" + be + "n't} …, {a:" + be + "} + {s:pronoun}?",
            note: "Negative sentence → positive tag: " + be + " " + PRON + "?" + pronNote,
            noteAr: "جملة منفية ← سؤال ذيلي مثبت." + pronNoteAr
          };
        }
        const V = { visit: ["visited", "visit", "the island"], know: ["knew", "know", "about that"], eat: ["ate", "eat", "all the candy"], speak: ["spoke", "speak", "to the teacher"] }[st.act];
        if (st.form === "+") return {
          s: "{s:" + st.subj + "} {v:" + V[0] + "} " + V[2] + ", {n:didn't} {s:" + PRON + "}?", badge: "positive → negative tag", badgeKind: "good",
          rule: "{v:past simple} …, {n:didn't} + {s:pronoun}?",
          note: V[0] + " is positive past simple → the tag is didn't " + PRON + "?" + pronNote,
          noteAr: "جملة مثبتة بالماضي البسيط ← didn't + ضمير." + pronNoteAr
        };
        return {
          s: "{s:" + st.subj + "} {n:didn't} {v:" + V[1] + "} " + V[2] + ", {a:did} {s:" + PRON + "}?", badge: "negative → positive tag", badgeKind: "warn",
          rule: "{n:didn't} + {v:base verb} …, {a:did} + {s:pronoun}?",
          note: "Negative sentence (didn't " + V[1] + ") → positive tag: did " + PRON + "?" + pronNote,
          noteAr: "جملة منفية ← سؤال ذيلي مثبت: did + ضمير." + pronNoteAr
        };
      }
    },
    predict: {
      q: "Amani ate all the candy, ____?", options: ["didn't Amani?", "didn't she?"], answer: 1,
      reveal: "{s:Amani} {v:ate} all the candy, {n:didn't} {s:she}?", mistake: "Common mistake: repeating the name in the tag.",
      why: "A question tag always uses a pronoun: Amani → she.",
      whyAr: "في السؤال الذيلي نستخدم الضمير دائمًا وليس الاسم: Amani ← she."
    }
  },

  /* ── Unit 6 · Lesson 5 · Order of Adjectives (p. 50) ── */
  u6l5: {
    lab: {
      title: "Grammar Lab: The Adjective Train",
      intro: "Add adjectives from each group. They always line up in the same order: Opinion – Size – Age – Shape – Colour – Origin – Material.",
      introAr: "أضف صفات من كل مجموعة، وستصطف دائمًا بالترتيب نفسه: رأي – حجم – عمر – شكل – لون – مصدر – مادة.",
      controls: [
        { id: "op", label: "Opinion", options: [{ v: "", t: "—" }, "beautiful", "nice"], start: "beautiful" },
        { id: "size", label: "Size", options: [{ v: "", t: "—" }, "small", "large"], start: "small" },
        { id: "age", label: "Age", options: [{ v: "", t: "—" }, "old", "new"], start: "" },
        { id: "shape", label: "Shape", options: [{ v: "", t: "—" }, "round", "square"], start: "" },
        { id: "col", label: "Colour", options: [{ v: "", t: "—" }, "red", "brown"], start: "" },
        { id: "orig", label: "Origin", options: [{ v: "", t: "—" }, "Kuwaiti", "Italian"], start: "" },
        { id: "mat", label: "Material", options: [{ v: "", t: "—" }, "wooden", "metal"], start: "wooden" }
      ],
      build(st) {
        const groups = [["op", "o", "opinion"], ["size", "s", "size"], ["age", "a", "age"], ["shape", "c", "shape"], ["col", "t", "colour"], ["orig", "p", "origin"], ["mat", "v", "material"]];
        const chosen = groups.filter((g) => st[g[0]]);
        const words = chosen.map((g) => st[g[0]]);
        const art = words.length && /^[aeiouAEIOU]/.test(words[0]) ? "an" : "a";
        const adjs = chosen.map((g) => "{" + g[1] + ":" + st[g[0]] + "}").join(", ");
        const s = "I bought " + art + " " + (adjs ? adjs + " " : "") + "box.";
        const order = chosen.map((g) => g[2]).join(" → ");
        if (!chosen.length) return { s, badge: "no adjectives", badgeKind: "warn", rule: "Opinion – Size – Age – Shape – Colour – Origin – Material + {s:noun}", note: "Choose some adjectives to describe the box.", noteAr: "اختر بعض الصفات لوصف الصندوق." };
        return {
          s, badge: chosen.length + (chosen.length === 1 ? " adjective" : " adjectives"), badgeKind: chosen.length > 3 ? "warn" : "good",
          rule: "Opinion – Size – Age – Shape – Colour – Origin – Material + {s:noun}",
          note: (chosen.length > 1 ? "Order: " + order + ". " : "") + (art === "an" ? "We say “an” because " + words[0] + " starts with a vowel sound. " : "") + (chosen.length > 3 ? "Correct order, but in real life we usually use only 2–3 adjectives." : "The order never changes, even when you skip a group."),
          noteAr: (art === "an" ? "نستخدم an لأن الصفة الأولى تبدأ بصوت متحرك. " : "") + (chosen.length > 3 ? "الترتيب صحيح، لكننا عادةً نستخدم صفتين أو ثلاثًا فقط." : "الترتيب لا يتغيّر حتى لو تركنا بعض المجموعات.")
        };
      }
    },
    predict: {
      q: "My brother has a (large – brown – scary) dog. Which is correct?", options: ["a large, brown, scary dog", "a scary, large, brown dog", "a brown, scary, large dog"], answer: 1,
      reveal: "a {o:scary}, {s:large}, {t:brown} dog", mistake: "Common mistake: putting the opinion adjective last.",
      why: "Opinion (scary) comes first, then size (large), then colour (brown).",
      whyAr: "صفة الرأي (scary) تأتي أولًا، ثم الحجم (large)، ثم اللون (brown)."
    }
  }
});

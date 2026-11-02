BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Unit 2 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */
  const THIRD = ["He", "She", "Ali", "Sara"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const low = (s) => (["He", "She", "You", "We", "They"].indexOf(s) >= 0 ? s.toLowerCase() : s);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return {
    /* ── Unit 2 · Lesson 2 · Present perfect (ever) (p. 22) ── */
    u2l2: {
      lab: {
        title: "Grammar Lab: The Experience Machine",
        intro: "Choose a person and an experience. Make a positive, a negative or a question with ever.",
        introAr: "اختر شخصًا وتجربة، وكوّن جملة مثبتة أو منفية أو سؤالًا مع ever.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Ali", "Ali and Sara"], start: "Ali" },
          { id: "exp", label: "Experience", options: [
            { v: "food", t: "eat Italian food" }, { v: "museum", t: "visit a museum" }, { v: "country", t: "be to another country" },
            { v: "play", t: "act in a play" }, { v: "balloon", t: "fly in a hot air balloon" }, { v: "sky", t: "go skydiving" }] },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Question" }] }
        ],
        build(st) {
          const E = { food: ["eat", "eaten", "Italian food"], museum: ["visit", "visited", "a museum"], country: ["be", "been", "to another country"], play: ["act", "acted", "in a play"], balloon: ["fly", "flown", "in a hot air balloon"], sky: ["go", "gone", "skydiving"] }[st.exp];
          const th = isThird(st.subj), hv = th ? "has" : "have";
          const ppNote = E[0] + " → " + E[1] + " (past participle).";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:" + hv + "} {v:" + E[1] + "} " + E[2] + ".", badge: hv + " + past participle", badgeKind: "good",
            rule: th ? "{s:he / she / one name} + {a:has} + {v:past participle}" : "{s:I / you / we / they} + {a:have} + {v:past participle}",
            note: (th ? st.subj + " = one person → has. " : st.subj + " → have. ") + ppNote,
            noteAr: th ? "مع شخص واحد (he / she) نستخدم has ثم التصريف الثالث للفعل." : "مع I و you و we و they نستخدم have ثم التصريف الثالث للفعل." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:" + hv + "n’t} {v:" + E[1] + "} " + E[2] + ".", badge: hv + "n’t + past participle", badgeKind: "warn",
            rule: "{s:subject} + {n:" + hv + "n’t} + {v:past participle}",
            note: "Negative: " + hv + "n’t + past participle, like the book: Sara hasn’t acted in a play. " + ppNote,
            noteAr: "النفي: " + hv + "n’t ثم التصريف الثالث، مثل: Sara hasn’t acted in a play." };
          const qs = (st.subj === "I" || st.subj === "We") ? "you" : low(st.subj), qth = isThird(st.subj), qhv = qth ? "Has" : "Have";
          const ans = { I: "I", You: "I", We: "we", They: "they", He: "he", She: "she", Ali: "he", "Ali and Sara": "they" }[st.subj];
          const shv = qth ? "has" : "have";
          return { s: "{a:" + qhv + "} {s:" + qs + "} {t:ever} {v:" + E[1] + "} " + E[2] + "?", badge: qhv + " … ever …?", badgeKind: "future",
            rule: "{a:Have / Has} + {s:subject} + {t:ever} + {v:past participle}?",
            note: "Questions about experiences start with " + qhv + ". ever = at any time in your life. Short answers: Yes, " + ans + " " + shv + ". / No, " + ans + " " + shv + "n’t.",
            noteAr: "السؤال عن التجارب يبدأ بـ Have أو Has، و ever تعني «في أي وقت من حياتك»." };
        }
      },
      predict: {
        q: "Have you ever ____ to another country?", options: ["went", "been", "go"], answer: 1,
        reveal: "{a:Have} {s:you} {t:ever} {v:been} to another country?", mistake: "Common mistake: using the past simple (went) after have.",
        why: "After have / has we use the past participle: be → been. (went is the past simple.)",
        whyAr: "بعد have / has نستخدم التصريف الثالث للفعل: been، وليس الماضي البسيط went."
      }
    },

    /* ── Unit 2 · Lesson 4 · Expressing purpose (p. 24) ── */
    u2l4: {
      lab: {
        title: "Grammar Lab: Why? The Purpose Builder",
        intro: "Choose an action and a word from the book’s list. Look at what comes after the word.",
        introAr: "اختر فعلًا وكلمة من قائمة الكتاب، وانظر ماذا يأتي بعد الكلمة.",
        controls: [
          { id: "act", label: "Action", options: [
            { v: "hands", t: "wash hands frequently" }, { v: "money", t: "save money" }, { v: "books", t: "read books" },
            { v: "adel", t: "Adel trained hard" }, { v: "bus", t: "Ahmed leaves home early" }] },
          { id: "con", label: "Word", options: ["to", "in order to", "so that"] }
        ],
        build(st) {
          const A = {
            hands: { a: "{s:I} {v:wash} {o:my hands} {t:frequently}", inf: "{v:avoid} {p:infections}", fin: "{s:I} {n:don’t} {v:catch} {p:infections}", sub: "I", vb: "don’t catch", base: "avoid" },
            money: { a: "{s:I} {v:save} {o:money}", inf: "{v:buy} {p:my own things}", fin: "{s:I} {a:can} {v:buy} {p:my own things}", sub: "I", vb: "can buy", base: "buy" },
            books: { a: "{s:I} {v:read} {o:books}", inf: "{v:learn} {p:new information}", fin: "{s:I} {a:can} {v:learn} {p:new information}", sub: "I", vb: "can learn", base: "learn" },
            adel: { a: "{s:Adel} {v:trained} {t:hard}", inf: "{v:master} {p:the skills}", fin: "{s:he} {a:could} {v:master} {p:the skills}", sub: "he", vb: "could master", base: "master" },
            bus: { a: "{s:Ahmed} {v:leaves} {o:home} {t:early}", inf: "{v:catch} {p:the bus}", fin: "{s:he} {a:can} {v:catch} {p:the bus}", sub: "he", vb: "can catch", base: "catch" }
          }[st.act];
          if (st.con === "so that") return { s: A.a + " {c:so that} " + A.fin + ".", badge: "so that + subject + verb", badgeKind: "warn",
            rule: "{c:so that} + {s:subject} + {a:can / could} + {v:verb}",
            note: "After so that we need a subject (" + A.sub + ") and a verb (" + A.vb + ")." + (st.act === "adel" ? " Past sentence → could." : ""),
            noteAr: "بعد so that نحتاج فاعلًا ثم فعلًا: " + A.sub + " " + A.vb + "." };
          return { s: A.a + " {c:" + st.con + "} " + A.inf + ".", badge: "to = in order to · both are correct ✓", badgeKind: "good",
            rule: "{c:" + st.con + "} + {v:base verb}",
            note: st.con === "to" ? "to + base verb (" + A.base + "). You can also say in order to — same meaning." : "in order to + base verb (" + A.base + "). It means the same as to, just more formal.",
            noteAr: "to و in order to بالمعنى نفسه وكلاهما صحيح، وبعدهما الفعل الأساسي " + A.base + "." };
        }
      },
      predict: {
        q: "He kept practising ____ he could improve his skills.", options: ["to", "in order to", "so that"], answer: 2,
        reveal: "{s:He} {v:kept} practising {c:so that} {s:he} {a:could} {v:improve} his skills.", mistake: "Common mistake: using to before a subject.",
        why: "After the gap comes a subject (he) + could improve. to and in order to need a base verb right after them, so we need so that.",
        whyAr: "بعد الفراغ يأتي فاعل (he) ثم could improve، لذلك نحتاج so that. أما to و in order to فيأتي بعدهما الفعل الأساسي مباشرة."
      }
    }
  };
})());

BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 2 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */

  // subject → [subject in a question, subject in a short answer, has?]
  const PP_SUBJ = {
    I: ["you", "I", false], You: ["you", "I", false], We: ["we", "we", false], They: ["they", "they", false],
    He: ["he", "he", true], She: ["she", "she", true], Salma: ["Salma", "she", true], Hamad: ["Hamad", "he", true]
  };
  const PP_ACT = {
    invent: ["invented", "a robot"], visit: ["visited", "the science fair"], read: ["read", "this book"],
    tablet: ["tried", "the new tablet"], build: ["built", "a robot car"]
  };
  const hasFor = (p) => (p === "he" || p === "she" || p === "Salma" || p === "Hamad");
  const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1);

  // past simple statements for question tags
  const QT = {
    cls: { s: "The class", p: "it", be: ["was", "wasn’t"], rest: "amazing" },
    exp: { s: "The experiments", p: "they", be: ["were", "weren’t"], rest: "easy" },
    gifts: { s: "The gifts", p: "they", be: ["were", "weren’t"], rest: "wrapped" },
    weather: { s: "The weather", p: "it", be: ["was", "wasn’t"], rest: "hot yesterday" },
    dalal: { s: "Dalal", p: "she", v: ["finished", "finish"], rest: "her project" },
    players: { s: "The players", p: "they", v: ["won", "win"], rest: "the match" },
    you: { s: "You", p: "you", v: ["went", "go"], rest: "to the cinema last night" },
    we: { s: "We", p: "we", v: ["travelled", "travel"], rest: "to Dubai last weekend" },
    ali: { s: "Ali", p: "he", v: ["won", "win"], rest: "the reading award" }
  };

  return {
    /* ── Learning Unit 2 · Lesson 2 · Present Perfect (p. 37) ── */
    u2l2: {
      lab: {
        title: "Grammar Lab: The Present Perfect Builder",
        intro: "Choose a person, an experience and a form. Watch have / has and the past participle (V3).",
        introAr: "اختر شخصًا وتجربة وشكل الجملة، وشاهد have / has والتصريف الثالث للفعل.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Salma", "Hamad"], start: "Salma" },
          { id: "act", label: "Experience", options: [
            { v: "invent", t: "invent a robot" }, { v: "visit", t: "visit the science fair" }, { v: "read", t: "read this book" },
            { v: "tablet", t: "try the new tablet" }, { v: "build", t: "build a robot car" }] },
          { id: "form", label: "Form", kind: "slider", options: [
            { v: "pos", t: "✓ affirmative" }, { v: "already", t: "already" }, { v: "neg", t: "✗ not … yet" },
            { v: "never", t: "never" }, { v: "q", t: "? ever" }, { v: "ans", t: "short answer" }], start: "pos" }
        ],
        build(st) {
          const A = PP_ACT[st.act], P = PP_SUBJ[st.subj];
          const third = P[2];
          const have = third ? "has" : "have", haveNeg = third ? "hasn’t" : "haven’t";
          const subj = "{s:" + st.subj + "}", v3 = "{v:" + A[0] + "} " + A[1];
          const qAux = hasFor(P[0]) ? "Has" : "Have";
          const question = "{a:" + qAux + "} {s:" + P[0] + "} {t:ever} " + v3 + "?";
          const iNote = st.subj === "I" ? " We ask other people, so I → you." : "";
          const iNoteAr = st.subj === "I" ? " نسأل غيرنا، لذلك نقول you بدل I." : "";
          switch (st.form) {
            case "already": return { s: subj + " {a:" + have + "} {t:already} " + v3 + ".", badge: "✓ already", badgeKind: "good",
              rule: "{s:subject} + {a:" + have + "} + {t:already} + {v:V3}",
              note: "already goes between " + have + " and the past participle: " + have + " already " + A[0] + ".",
              noteAr: "تأتي already بين " + have + " والتصريف الثالث للفعل." };
            case "neg": return { s: subj + " {n:" + haveNeg + "} " + v3 + " {t:yet}.", badge: "✗ negative", badgeKind: "warn",
              rule: "{s:subject} + {n:" + haveNeg + "} + {v:V3} … {t:yet}",
              note: "Negative: " + haveNeg + " + past participle. yet goes at the end of the sentence.",
              noteAr: "النفي: " + haveNeg + " + التصريف الثالث، وتأتي yet في آخر الجملة." };
            case "never": return { s: subj + " {a:" + have + "} {t:never} " + v3 + ".", badge: "never = not at any time", badgeKind: "warn",
              rule: "{s:subject} + {a:" + have + "} + {t:never} + {v:V3}",
              note: "never already has a negative meaning, so we use " + have + " (not " + haveNeg + "): " + have + " never " + A[0] + ".",
              noteAr: "كلمة never معناها منفي، لذلك نستخدم " + have + " وليس " + haveNeg + "." };
            case "q": return { s: question, badge: "? Yes/No question", badgeKind: "future",
              rule: "{a:Have / Has} + {s:subject} + {t:ever} + {v:V3}?",
              note: "Yes/No question: " + qAux + " + " + P[0] + " + ever + past participle. We use ever to ask about experiences." + iNote,
              noteAr: "سؤال Yes/No: نبدأ بـ " + qAux + " ثم الفاعل ثم ever ثم التصريف الثالث، ونستخدم ever للسؤال عن التجارب." + iNoteAr };
            case "ans": {
              const a = P[1], aHave = hasFor(a) ? "has" : "have", aNeg = hasFor(a) ? "hasn’t" : "haven’t";
              return { from: question, fromLabel: "Question", s: "Yes, {s:" + a + "} {a:" + aHave + "}. / No, {s:" + a + "} {n:" + aNeg + "}.", badge: "short answers", badgeKind: "good",
                rule: "Yes, {s:pronoun} + {a:have / has}. / No, {s:pronoun} + {n:haven’t / hasn’t}.",
                note: "In short answers we use a pronoun and have / has without the past participle." + (P[0] !== P[1] && st.subj !== "I" ? " " + st.subj + " → " + a + "." : ""),
                noteAr: "في الإجابة القصيرة نستخدم الضمير مع have / has بدون التصريف الثالث." };
            }
            default: return { s: subj + " {a:" + have + "} " + v3 + ".", badge: "✓ affirmative", badgeKind: "good",
              rule: "{s:subject} + {a:" + have + "} + {v:V3}",
              note: (third ? st.subj + " = he / she → has." : st.subj + " → have.") + " Then the past participle: " + A[0] + ".",
              noteAr: third ? "مع he / she نستخدم has ثم التصريف الثالث للفعل." : "مع I / you / we / they نستخدم have ثم التصريف الثالث للفعل." };
          }
        }
      },
      predict: {
        q: "I have worked as a teacher ____ 10 years.", options: ["since", "for"], answer: 1,
        reveal: "{s:I} {a:have} {v:worked} as a teacher {t:for} 10 years.", mistake: "Common mistake: using since with a length of time.",
        why: "10 years is a length of time, so we use for. We use since with the start time: since 2015.",
        whyAr: "عشر سنوات مدة زمنية، لذلك نستخدم for. ونستخدم since مع بداية الوقت مثل since 2015."
      }
    },

    /* ── Learning Unit 2 · Lesson 6 · Question Tags (Past Simple) (p. 42) ── */
    u2l6: {
      lab: {
        title: "Grammar Lab: The Question Tag Switch",
        intro: "Choose a sentence. Switch it between positive and negative. Watch the question tag change.",
        introAr: "اختر جملة وبدّلها بين المثبت والمنفي، وشاهد كيف يتغيّر السؤال الذيلي.",
        controls: [
          { id: "sent", label: "Sentence", options: [
            { v: "cls", t: "The class … amazing" }, { v: "exp", t: "The experiments … easy" }, { v: "gifts", t: "The gifts … wrapped" },
            { v: "weather", t: "The weather … hot" }, { v: "dalal", t: "Dalal … her project" }, { v: "players", t: "The players … the match" },
            { v: "you", t: "You … to the cinema" }, { v: "we", t: "We … to Dubai" }, { v: "ali", t: "Ali … the award" }], start: "cls" },
          { id: "pol", label: "Sentence is", options: [{ v: "pos", t: "✓ positive" }, { v: "neg", t: "✗ negative" }] },
          { id: "tone", label: "Intonation", options: [{ v: "rise", t: "↗ I am not sure" }, { v: "fall", t: "↘ I am sure" }] }
        ],
        build(st) {
          const x = QT[st.sent], pos = st.pol === "pos";
          const toneBadge = st.tone === "rise" ? "↗ rising: not sure" : "↘ falling: sure / confirming";
          let s, rule, note, noteAr;
          if (x.be) {
            const helper = pos ? x.be[1] : x.be[0];
            s = "{s:" + x.s + "} " + (pos ? "{v:" + x.be[0] + "}" : "{n:" + x.be[1] + "}") + " " + x.rest + ", {q:" + helper + " " + x.p + "}?";
            rule = pos ? "{v:" + x.be[0] + "} → {q:" + x.be[1] + " + pronoun}?" : "{n:" + x.be[1] + "} → {q:" + x.be[0] + " + pronoun}?";
            note = "The sentence has " + (pos ? x.be[0] : x.be[1]) + ", so the tag uses " + helper + ". " + (pos ? "Positive sentence → negative tag." : "Negative sentence → positive tag.") + " " + x.s + " → " + x.p + ".";
            noteAr = "في الجملة " + (pos ? x.be[0] : x.be[1]) + "، لذلك نستخدم " + helper + " في السؤال الذيلي. " + (pos ? "الجملة مثبتة فالسؤال منفي." : "الجملة منفية فالسؤال مثبت.");
          } else {
            s = "{s:" + x.s + "} " + (pos ? "{v:" + x.v[0] + "}" : "{n:didn’t} {v:" + x.v[1] + "}") + " " + x.rest + ", {q:" + (pos ? "didn’t" : "did") + " " + x.p + "}?";
            rule = pos ? "{v:past simple verb} → {q:didn’t + pronoun}?" : "{n:didn’t} + {v:base verb} → {q:did + pronoun}?";
            note = (pos ? x.v[0] + " is a past simple verb, so the tag uses didn’t. Positive sentence → negative tag." : "The sentence has didn’t, so the tag uses did. Negative sentence → positive tag.") + " " + x.s + " → " + x.p + ".";
            noteAr = pos ? "الفعل في الماضي البسيط والجملة مثبتة، لذلك نستخدم didn’t في السؤال الذيلي." : "في الجملة didn’t، لذلك نستخدم did في السؤال الذيلي.";
          }
          return { s, badge: toneBadge, badgeKind: st.tone === "rise" ? "future" : "good", rule,
            note: note + (st.tone === "rise" ? " Say the tag with your voice going up: you are not sure." : " Say the tag with your voice going down: you are sure."),
            noteAr: noteAr + (st.tone === "rise" ? " ارفع صوتك في آخر السؤال لأنك غير متأكد." : " اخفض صوتك في آخر السؤال لأنك متأكد.") };
        }
      },
      predict: {
        q: "Dalal finished her project, ____?", options: ["didn’t she", "wasn’t she", "didn’t Dalal"], answer: 0,
        reveal: "{s:Dalal} {v:finished} her project, {q:didn’t she}?", mistake: "Common mistake: using was or the name in the tag.",
        why: "finished is a past simple verb (not was / were), so the tag uses didn’t, and the tag needs a pronoun: Dalal → she.",
        whyAr: "الفعل finished في الماضي البسيط وليس was أو were، لذلك نستخدم didn’t، ونضع الضمير she بدل الاسم Dalal."
      }
    }
  };
})());

BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 4 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g9 */
  const THIRD = ["He", "She", "My sister", "My brother"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const low = (s) => (s === "I" ? s : s.charAt(0).toLowerCase() + s.slice(1));

  return {
    /* ── Learning Unit 4 · Lesson 2 · Present Perfect & Present Perfect Continuous (p. 64) ── */
    u4l2: {
      lab: {
        title: "Grammar Lab: Result or Activity?",
        intro: "Choose a person, a job at home and the sentence type. Watch has / have, been, the v3 and -ing change.",
        introAr: "اختر شخصًا وعملًا في البيت ونوع الجملة، وشاهد كيف تتغيّر has / have و been والتصريف الثالث و ing.",
        controls: [
          { id: "subj", label: "Who?", options: ["You", "We", "They", "My parents", "He", "She", "My sister", "My brother"], start: "He" },
          { id: "act", label: "Doing what?", options: [
            { v: "car", t: "wash the car" }, { v: "kitchen", t: "clean the kitchen" }, { v: "book", t: "read this book" },
            { v: "fence", t: "paint the fence" }, { v: "lunch", t: "cook lunch" }, { v: "room", t: "tidy the bedroom" }], start: "car" },
          { id: "form", label: "Sentence", options: [
            { v: "pp", t: "✔ Present perfect (result)" }, { v: "ppc", t: "✔ Present perfect continuous (activity)" },
            { v: "neg", t: "✖ Negative + yet" }, { v: "q", t: "? Have / Has … ?" }, { v: "how", t: "? How long … ?" }], start: "pp" },
          { id: "kw", label: "Keyword", options: ["just", "already"], show: (st) => st.form === "pp" },
          { id: "time", label: "How long?", options: ["for two hours", "since nine o’clock", "for a long time"], show: (st) => st.form === "ppc" },
          { id: "qkw", label: "Keyword", options: ["yet", "ever"], show: (st) => st.form === "q" }
        ],
        build(st) {
          // [base, v3, -ing, rest, spelling note for v3, spelling note for -ing]
          const A = {
            car: ["wash", "washed", "washing", " the car", "wash → washed (regular: add -ed).", "wash → washing."],
            kitchen: ["clean", "cleaned", "cleaning", " the kitchen", "clean → cleaned (regular: add -ed).", "clean → cleaning."],
            book: ["read", "read", "reading", " this book", "read → read (irregular: same spelling, but we say /red/).", "read → reading."],
            fence: ["paint", "painted", "painting", " the fence", "paint → painted (regular: add -ed).", "paint → painting."],
            lunch: ["cook", "cooked", "cooking", " lunch", "cook → cooked (regular: add -ed).", "cook → cooking."],
            room: ["tidy", "tidied", "tidying", " the bedroom", "tidy → tidied (y → ied).", "tidy → tidying (keep the y)."]
          }[st.act];
          const th = isThird(st.subj);
          const have = th ? "has" : "have";
          if (st.form === "pp") {
            return { s: "{s:" + st.subj + "} {a:" + have + "} {t:" + st.kw + "} {v:" + A[1] + "}" + A[3] + ".",
              badge: "✅ result: the job is finished", badgeKind: "good",
              rule: "{s:subject} + {a:" + have + "} + {t:" + st.kw + "} + {v:past participle (v3)}",
              note: st.subj + " → " + have + ". “" + st.kw + "” goes between " + have + " and the v3. " + A[4],
              noteAr: "مع " + st.subj + " نستخدم " + have + "، وتأتي " + st.kw + " بين " + have + " والتصريف الثالث. الجملة تركّز على النتيجة." };
          }
          if (st.form === "ppc") {
            const since = /^since/.test(st.time);
            return { s: "{s:" + st.subj + "} {a:" + have + " been} {v:" + A[2] + "}" + A[3] + " {t:" + st.time + "}.",
              badge: "⏳ activity: it is still going on", badgeKind: "good",
              rule: "{s:subject} + {a:" + have + " been} + {v:verb-ing} + {t:" + (since ? "since + starting time" : "for + length of time") + "}",
              note: st.subj + " → " + have + " been. " + A[5] + (since ? " Use since with the starting time." : " Use for with the length of time."),
              noteAr: "مع " + st.subj + " نستخدم " + have + " been ثم الفعل مع ing. " + (since ? "نستخدم since مع بداية الوقت." : "نستخدم for مع طول المدة.") };
          }
          if (st.form === "neg") {
            const neg = th ? "hasn’t" : "haven’t";
            return { s: "{s:" + st.subj + "} {n:" + neg + "} {v:" + A[1] + "}" + A[3] + " {t:yet}.",
              badge: neg + " + v3 … yet", badgeKind: "warn",
              rule: "{s:subject} + {n:" + neg + "} + {v:v3} + … + {t:yet}",
              note: "Negative: " + have + " + not = " + neg + ". yet goes at the end: the job is not finished, but we expect it to finish.",
              noteAr: "النفي: " + have + " + not = " + neg + "، وتأتي yet في آخر الجملة." };
          }
          const Have = th ? "Has" : "Have";
          if (st.form === "q") {
            const s = st.qkw === "yet"
              ? "{a:" + Have + "} {s:" + low(st.subj) + "} {v:" + A[1] + "}" + A[3] + " {t:yet}?"
              : "{a:" + Have + "} {s:" + low(st.subj) + "} {t:ever} {v:" + A[1] + "}" + A[3] + "?";
            return { s, badge: Have + " + subject + v3?",
              rule: st.qkw === "yet" ? "{a:Have / Has} + {s:subject} + {v:v3} + … + {t:yet}?" : "{a:Have / Has} + {s:subject} + {t:ever} + {v:v3} …?",
              note: Have + " comes before the subject. " + (st.qkw === "yet" ? "yet goes at the end of the question." : "ever goes before the v3. It means “at any time in your life”."),
              noteAr: "نضع " + Have + " قبل الفاعل. " + (st.qkw === "yet" ? "وتأتي yet في آخر السؤال." : "وتأتي ever قبل التصريف الثالث.") };
          }
          return { s: "{q:How long} {a:" + have + "} {s:" + low(st.subj) + "} {a:been} {v:" + A[2] + "}" + A[3] + "?",
            badge: "How long + " + have + " + subject + been + verb-ing?",
            rule: "{q:How long} + {a:have / has} + {s:subject} + {a:been} + {v:verb-ing}?",
            note: "Ask “How long …?” about an activity that started in the past and is still going on. Answer with for or since.",
            noteAr: "نسأل How long عن نشاط بدأ في الماضي وما زال مستمرًّا، ونجيب بـ for أو since." };
        }
      },
      predict: {
        q: "She ____ her homework yet.", options: ["hasn’t finish", "hasn’t finished", "haven’t finished"], answer: 1,
        reveal: "{s:She} {n:hasn’t} {v:finished} her homework {t:yet}.", mistake: "Common mistake: forgetting the past participle (v3) after has / have.",
        why: "She → has, so the negative is hasn’t. After hasn’t we use the past participle (v3): finished. yet goes at the end.",
        whyAr: "مع She نستخدم has، والنفي hasn’t، وبعدها نستخدم التصريف الثالث finished، وتأتي yet في آخر الجملة."
      }
    },

    /* ── Learning Unit 4 · Lesson 6 · Quantifiers (some, any, much, many, few, little) (p. 69) ── */
    u4l6: {
      lab: {
        title: "Grammar Lab: The Party Shopping List",
        intro: "Choose who, an item and the sentence type. Watch the quantifier change for countable (C) and uncountable (U) nouns.",
        introAr: "اختر الشخص والغرض ونوع الجملة، وشاهد كيف تتغيّر أداة الكمية مع الاسم المعدود (C) وغير المعدود (U).",
        controls: [
          { id: "subj", label: "Who?", options: ["We", "They", "She", "My brother"], start: "We" },
          { id: "noun", label: "Item", options: [
            { v: "snacks", t: "snacks (C)" }, { v: "plates", t: "plates (C)" }, { v: "cups", t: "cups (C)" }, { v: "apples", t: "apples (C)" },
            { v: "money", t: "money (U)" }, { v: "sugar", t: "sugar (U)" }, { v: "rice", t: "rice (U)" }, { v: "time", t: "time (U)" }], start: "snacks" },
          { id: "form", label: "Sentence", options: [
            { v: "some", t: "✔ some" }, { v: "small", t: "✔ a small amount" }, { v: "neg", t: "✖ none at all" },
            { v: "negbig", t: "✖ not a large amount" }, { v: "q", t: "? Do … have any …?" }, { v: "how", t: "? How many / How much" }], start: "some" }
        ],
        build(st) {
          const C = ["snacks", "plates", "cups", "apples"].indexOf(st.noun) >= 0;
          const th = isThird(st.subj);
          const hv = th ? "has" : "have", dont = th ? "doesn’t" : "don’t", Do = th ? "Does" : "Do", doo = th ? "does" : "do";
          const n = st.noun, kind = C ? "countable (C)" : "uncountable (U)";
          const kindAr = C ? "اسم معدود" : "اسم غير معدود";
          if (st.form === "some") {
            return { s: "{s:" + st.subj + "} {v:" + hv + "} {t:some} " + n + ".", badge: "some → affirmative", badgeKind: "good",
              rule: "{s:subject} + {v:" + hv + "} + {t:some} + noun (C or U)",
              note: "“" + n + "” is " + kind + ". some goes with countable and uncountable nouns in affirmative sentences.",
              noteAr: "كلمة " + n + " " + kindAr + "، و some تأتي مع المعدود وغير المعدود في الجمل المثبتة." };
          }
          if (st.form === "small") {
            const q = C ? "few" : "little";
            return { s: "{s:" + st.subj + "} {v:" + hv + "} very {t:" + q + "} " + n + ".", badge: "a small " + (C ? "number" : "amount") + " → " + q, badgeKind: "good",
              rule: C ? "{t:few} + countable noun" : "{t:little} + uncountable noun",
              note: "“" + n + "” is " + kind + ", so we use " + q + " for a small " + (C ? "number" : "amount") + ".",
              noteAr: "كلمة " + n + " " + kindAr + "، لذلك نستخدم " + q + " للدلالة على " + (C ? "عدد قليل." : "كمية قليلة.") };
          }
          if (st.form === "neg") {
            return { s: "{s:" + st.subj + "} {n:" + dont + "} {v:have} {t:any} " + n + ".", badge: "any → negative", badgeKind: "warn",
              rule: "{s:subject} + {n:" + dont + "} + {v:have} + {t:any} + noun",
              note: "Negative sentence → any. It goes with countable and uncountable nouns. After " + dont + " we use have.",
              noteAr: "في الجملة المنفية نستخدم any مع المعدود وغير المعدود، وبعد " + dont + " نستخدم have." };
          }
          if (st.form === "negbig") {
            const q = C ? "many" : "much";
            return { s: "{s:" + st.subj + "} {n:" + dont + "} {v:have} {t:" + q + "} " + n + ".", badge: (C ? "C" : "U") + " → " + q, badgeKind: "warn",
              rule: C ? "{n:not} + {t:many} + countable noun" : "{n:not} + {t:much} + uncountable noun",
              note: "“" + n + "” is " + kind + " → " + q + ". " + (C ? "many goes with countable nouns." : "much goes with uncountable nouns."),
              noteAr: "كلمة " + n + " " + kindAr + "، لذلك نستخدم " + q + "." };
          }
          if (st.form === "q") {
            return { s: "{a:" + Do + "} {s:" + low(st.subj) + "} {v:have} {t:any} " + n + "?", badge: "any → question",
              rule: "{a:Do / Does} + {s:subject} + {v:have} + {t:any} + noun?",
              note: "In questions we use any, with countable and uncountable nouns.",
              noteAr: "في السؤال نستخدم any مع المعدود وغير المعدود." };
          }
          const hq = C ? "How many" : "How much";
          return { s: "{q:" + hq + "} " + n + " {a:" + doo + "} {s:" + low(st.subj) + "} {v:have}?", badge: (C ? "C" : "U") + " → " + hq,
            rule: C ? "{q:How many} + countable noun?" : "{q:How much} + uncountable noun?",
            note: "“" + n + "” is " + kind + ", so we ask “" + hq + " …?”.",
            noteAr: "كلمة " + n + " " + kindAr + "، لذلك نسأل بـ " + hq + "." };
        }
      },
      predict: {
        q: "I try not to spend ____ money on things I don’t need.", options: ["many", "much", "few"], answer: 1,
        reveal: "I try not to spend {t:much} money on things I don’t need.", mistake: "Common mistake: using many with an uncountable noun.",
        why: "money is uncountable (U). We use much with uncountable nouns, not many or few.",
        whyAr: "كلمة money اسم غير معدود، لذلك نستخدم much وليس many أو few."
      }
    }
  };
})());

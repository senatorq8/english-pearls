BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 1 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g9 */
  const NAMES = ["Fahad", "Ali", "Sara", "Laila", "Hanan"];
  const low = (s) => (s === "I" || NAMES.indexOf(s) >= 0 ? s : s.charAt(0).toLowerCase() + s.slice(1));
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Lesson 2: was / were
  const WAS = ["I", "He", "She", "Fahad"];
  const beFor = (s) => (WAS.indexOf(s) >= 0 ? "was" : "were");
  // longer action: [verb-ing, rest]
  const LONG = { read: ["reading", " a book"], homework: ["doing", " homework"], tv: ["watching", " TV"], dinner: ["eating", " dinner"], study: ["studying", " for the test"] };
  // shorter action: [subject, past simple verb, rest, base verb]
  const SHORT = { phone: ["the phone", "rang", "", "ring"], rain: ["it", "started", " to rain", "start"], lights: ["the lights", "went", " out", "go"], cousin: ["my cousin", "called", "", "call"] };

  // Lesson 6: [person A, person B, kind of B: s = he/she, p = they, i = I]
  const PAIR = { ali: ["Ali", "his brother", "s"], friends: ["Ali", "his friends", "p"], sara: ["Sara", "Laila", "s"], hanan: ["Hanan", "her sisters", "p"], me: ["My partner", "I", "i"] };
  // [he/she form, base form, negative he/she, negative I/they, rest, modal?]
  const ACT = {
    apples: ["likes", "like", "doesn’t like", "don’t like", " apples", false],
    tennis: ["plays", "play", "doesn’t play", "don’t play", " tennis", false],
    swim: ["can swim", "can swim", "can’t swim", "can’t swim", "", true],
    comics: ["enjoys", "enjoy", "doesn’t enjoy", "don’t enjoy", " reading comic books", false]
  };
  const verbTok = (v, modal) => (modal ? "{a:" + v.split(" ")[0] + "} {v:" + v.split(" ")[1] + "}" : "{v:" + v + "}");
  const negTok = (v, modal) => (modal ? "{n:" + v.split(" ")[0] + "} {v:" + v.split(" ")[1] + "}" : "{n:" + v.split(" ")[0] + "} {v:" + v.split(" ")[1] + "}");

  return {
    /* ── Learning Unit 1 · Lesson 2 · Past Simple & Past Continuous (p. 22) ── */
    u1l2: {
      lab: {
        title: "Grammar Lab: The Interrupted Action Machine",
        intro: "Choose a person, a longer action and a shorter action that interrupts it. Then choose the sentence type. Watch was / were + -ing and the past simple.",
        introAr: "اختر شخصًا وحدثًا طويلًا وحدثًا قصيرًا يقطعه، ثم اختر نوع الجملة. وشاهد was / were مع ing والماضي البسيط.",
        controls: [
          { id: "subj", label: "Who?", options: ["I", "You", "We", "They", "He", "She", "Fahad", "The friends"], start: "Fahad" },
          { id: "long", label: "Longer action ⏳", options: [
            { v: "read", t: "read a book" }, { v: "homework", t: "do homework" }, { v: "tv", t: "watch TV" },
            { v: "dinner", t: "eat dinner" }, { v: "study", t: "study for the test" }], start: "read" },
          { id: "short", label: "Shorter action ⚡", options: [
            { v: "phone", t: "the phone / ring" }, { v: "rain", t: "it / start to rain" }, { v: "lights", t: "the lights / go out" }, { v: "cousin", t: "my cousin / call" }], start: "phone" },
          { id: "form", label: "Sentence", options: [{ v: "while", t: "While …, …" }, { v: "when", t: "… when …" }, { v: "neg", t: "✖ Negative" }, { v: "yn", t: "? Yes/No question" }, { v: "q", t: "? What question" }] }
        ],
        build(st) {
          const L = LONG[st.long], E = SHORT[st.short], be = beFor(st.subj);
          const longPart = "{v:" + L[0] + "}" + L[1];
          const shortPart = "{s:" + E[0] + "} {v:" + E[1] + "}" + E[2];
          const spell = E[3] + " → " + E[1] + (E[1] === E[3] + "ed" ? " (add -ed)." : " (irregular verb).");
          const spellAr = E[1] === E[3] + "ed" ? "نضيف ed للفعل في الماضي البسيط." : "الفعل " + E[3] + " شاذ، وماضيه " + E[1] + ".";
          if (st.form === "while") {
            return { s: "{c:While} {s:" + low(st.subj) + "} {a:" + be + "} " + longPart + ", " + shortPart + ".",
              badge: "⏳ longer action + ⚡ shorter action", badgeKind: "good",
              rule: "{c:While} + {s:subject} + {a:was / were} + {v:verb-ing}, + {v:past simple}",
              note: "While goes before the longer action: " + st.subj + " → " + be + " " + L[0] + ". The shorter action interrupts it, so it is in the past simple: " + spell,
              noteAr: "نضع while قبل الحدث الطويل (" + be + " + الفعل مع ing)، والحدث القصير الذي قطعه يكون في الماضي البسيط. " + spellAr };
          }
          if (st.form === "when") {
            return { s: "{s:" + st.subj + "} {a:" + be + "} " + longPart + " {c:when} " + shortPart + ".",
              badge: "⏳ longer action + ⚡ shorter action", badgeKind: "good",
              rule: "{s:subject} + {a:was / were} + {v:verb-ing} … {c:when} + {v:past simple}",
              note: "The longer action comes first: " + be + " " + L[0] + ". when goes before the shorter action in the past simple: " + spell,
              noteAr: "الحدث الطويل أولًا (" + be + " + الفعل مع ing)، ثم when قبل الحدث القصير في الماضي البسيط. " + spellAr };
          }
          if (st.form === "neg") {
            const neg = be + "n’t";
            return { s: "{s:" + st.subj + "} {n:" + neg + "} " + longPart + " {c:when} " + shortPart + ".",
              badge: neg + " + verb-ing", badgeKind: "warn",
              rule: "{s:subject} + {n:wasn’t / weren’t} + {v:verb-ing} … {c:when} + {v:past simple}",
              note: "Negative past continuous: " + be + " + not = " + neg + ". The shorter action stays in the past simple: " + E[1] + ".",
              noteAr: "النفي في الماضي المستمر: " + be + " + not = " + neg + "، ويبقى الحدث القصير في الماضي البسيط." };
          }
          const qs = st.subj === "I" ? "you" : low(st.subj), qbe = st.subj === "I" ? "were" : be;
          if (st.form === "yn") {
            return { s: "{a:" + cap(qbe) + "} {s:" + qs + "} " + longPart + " {c:when} " + shortPart + "?",
              badge: "? Was / Were + subject + verb-ing?", badgeKind: "future",
              rule: "{a:Was / Were} + {s:subject} + {v:verb-ing} … {c:when} + {v:past simple}?",
              note: "Yes/No question: " + cap(qbe) + " comes before the subject, then " + L[0] + ". The shorter action stays in the past simple: " + E[1] + "." + (st.subj === "I" ? " We ask other people, so I → you." : ""),
              noteAr: "في سؤال Yes/No نضع " + qbe + " قبل الفاعل ثم الفعل مع ing، ويبقى الحدث القصير في الماضي البسيط." + (st.subj === "I" ? " نسأل غيرنا، لذلك نقول you بدل I." : "") };
          }
          return { s: "{q:What} {a:" + qbe + "} {s:" + qs + "} {v:doing} {c:when} " + shortPart + "?",
            badge: "? What + was / were + subject + doing?", badgeKind: "future",
            rule: "{q:What} + {a:was / were} + {s:subject} + {v:doing} + {c:when} + {v:past simple}?",
            note: "Ask about the longer action with What + " + qbe + " + " + qs + " + doing. The shorter action stays in the past simple: " + E[1] + "." + (st.subj === "I" ? " We ask other people, so I → you." : ""),
            noteAr: "نسأل عن الحدث الطويل بـ What + " + qbe + " + الفاعل + doing، ويبقى الحدث القصير في الماضي البسيط." + (st.subj === "I" ? " نسأل غيرنا، لذلك نقول you بدل I." : "") };
        }
      },
      predict: {
        q: "While Ali ____ up the mountain, the others were taking photos.", options: ["climbed", "was climbing", "were climbing"], answer: 1,
        reveal: "{c:While} {s:Ali} {a:was} {v:climbing} up the mountain, {s:the others} {a:were} {v:taking} photos.", mistake: "Common mistake: using the past simple for an action that was in progress.",
        why: "Two actions were happening at the same time, so both are in the past continuous. Ali = he, so we use was: was climbing.",
        whyAr: "كان الحدثان يحدثان في الوقت نفسه، لذلك نستخدم الماضي المستمر في الاثنين، و Ali مفرد فنستخدم was."
      }
    },

    /* ── Learning Unit 1 · Lesson 6 · Both…and / Neither…nor (p. 27) ── */
    u1l6: {
      lab: {
        title: "Grammar Lab: Join the Two Sentences",
        intro: "Choose two people and an activity. Choose both… and or neither… nor. Watch the two sentences become one, and watch the verb.",
        introAr: "اختر شخصين ونشاطًا، ثم اختر both… and أو neither… nor. وشاهد كيف تصبح الجملتان جملة واحدة، وكيف يتغيّر الفعل.",
        controls: [
          { id: "pair", label: "Who?", options: [
            { v: "ali", t: "Ali + his brother" }, { v: "friends", t: "Ali + his friends" }, { v: "sara", t: "Sara + Laila" },
            { v: "hanan", t: "Hanan + her sisters" }, { v: "me", t: "My partner + I" }], start: "sara" },
          { id: "act", label: "Activity", options: [
            { v: "apples", t: "like apples" }, { v: "tennis", t: "play tennis" }, { v: "swim", t: "can swim" }, { v: "comics", t: "enjoy reading comic books" }], start: "apples" },
          { id: "form", label: "Join with", options: [{ v: "both", t: "✔ both… and" }, { v: "neither", t: "✖ neither… nor" }] }
        ],
        build(st) {
          const P = PAIR[st.pair], A = ACT[st.act], modal = A[5];
          const bThird = P[2] === "s";
          const bName = P[2] === "i" ? "I" : cap(P[1]);
          if (st.form === "both") {
            const from = "{s:" + P[0] + "} " + verbTok(A[0], modal) + A[4] + ". {s:" + bName + "} " + verbTok(bThird ? A[0] : A[1], modal) + A[4] + ".";
            return { from, fromLabel: "Two sentences",
              s: "{c:Both} {s:" + low(P[0]) + "} {c:and} {s:" + P[1] + "} " + verbTok(A[1], modal) + A[4] + ".",
              badge: "✔ both… and = plural", badgeKind: "good",
              rule: "{c:Both} + {s:A} + {c:and} + {s:B} + {v:plural verb}",
              note: modal ? "can does not change: Both … and … can swim." : "Both… and is always plural, so the verb has no -s: " + A[1] + ".",
              noteAr: modal ? "الفعل can لا يتغيّر مع both… and." : "both… and تُعامل معاملة الجمع دائمًا، لذلك يأتي الفعل بدون s: " + A[1] + "." };
          }
          const negA = A[2], negB = bThird ? A[2] : A[3];
          const from = "{s:" + P[0] + "} " + negTok(negA, modal) + A[4] + ". {s:" + bName + "} " + negTok(negB, modal) + A[4] + ".";
          const v = bThird ? A[0] : A[1];
          const who = P[2] === "i" ? "I" : P[1];
          const kind = P[2] === "s" ? "singular" : "plural";
          return { from, fromLabel: "Two sentences",
            s: "{c:Neither} {s:" + low(P[0]) + "} {c:nor} {s:" + P[1] + "} " + verbTok(v, modal) + A[4] + ".",
            badge: "✖ neither… nor: no don’t / doesn’t", badgeKind: "warn",
            rule: "{c:Neither} + {s:A} + {c:nor} + {s:B} + {v:verb that agrees with B}",
            note: "Neither… nor is already negative, so " + (modal ? "can’t becomes can" : "we take away don’t / doesn’t") + ". " + (modal ? "can does not change: can swim." : "The verb agrees with the closest noun: " + who + (P[2] === "i" ? "" : " (" + kind + ")") + " → " + v + "."),
            noteAr: "neither… nor منفية أصلًا، لذلك نحذف أداة النفي. " + (modal ? "والفعل can لا يتغيّر." : "ويتّفق الفعل مع الاسم الأقرب إليه: " + who + " ← " + v + ".") };
        }
      },
      predict: {
        q: "Neither my brother nor my cousins ____ football on Fridays.", options: ["plays", "play", "don’t play"], answer: 1,
        reveal: "{c:Neither} {s:my brother} {c:nor} {s:my cousins} {v:play} football on Fridays.", mistake: "Common mistake: using don’t after neither… nor, or making the verb agree with the first noun.",
        why: "Neither… nor is already negative, so we do not use don’t. The verb agrees with the closest noun: my cousins (they) → play.",
        whyAr: "neither… nor منفية أصلًا فلا نستخدم don’t، ويتّفق الفعل مع الاسم الأقرب my cousins وهو جمع، فنقول play."
      }
    }
  };
})());

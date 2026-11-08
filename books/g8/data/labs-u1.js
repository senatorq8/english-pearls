BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 1 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */
  const THIRD = ["He", "She", "Sara", "My brother", "The girl"];
  const NAMES = ["Sara"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const BE = (s) => (s === "I" ? "am" : isThird(s) ? "is" : "are");
  const low = (s) => (s === "I" || NAMES.indexOf(s) >= 0 ? s : s.charAt(0).toLowerCase() + s.slice(1));
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return {
    /* ── Learning Unit 1 · Lesson 2 · Present Simple (p. 23) ── */
    u1l2: {
      lab: {
        title: "Grammar Lab: Sara’s Routine Machine",
        intro: "Choose a person, a routine and the sentence type. For affirmative sentences, slide the adverb of frequency. Watch the -s jump in and out.",
        introAr: "اختر شخصًا وعادة ونوع الجملة، وفي جمل الإثبات حرّك ظرف التكرار. وشاهد حرف s وهو يظهر ويختفي.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Sara", "My brother"], start: "Sara" },
          { id: "verb", label: "Routine", options: [
            { v: "wake", t: "wake up at 6:00 a.m." }, { v: "eat", t: "eat fruit for breakfast" }, { v: "play", t: "play games after school" },
            { v: "study", t: "study English in the library" }, { v: "watch", t: "watch TV in the evening" }, { v: "go", t: "go home at 2:00 p.m." }] },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Affirmative" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Do/Does question" }, { v: "wh", t: "? Wh question" }] },
          { id: "freq", label: "How often?", kind: "slider", options: ["always", "usually", "often", "sometimes", "never"], start: "usually", show: (st) => st.form === "+" }
        ],
        build(st) {
          // [base, he/she ending, rest of the sentence, Wh question word, Wh rest]
          const V = {
            wake: ["wake", "s", " up at 6:00 a.m.", "What time", " up"],
            eat: ["eat", "s", " fruit for breakfast", "What", " for breakfast"],
            play: ["play", "s", " games after school", "When", " games"],
            study: ["stud", "ies", " English in the library", "Where", " English"],
            watch: ["watch", "es", " TV in the evening", "When", " TV"],
            go: ["go", "es", " home at 2:00 p.m.", "What time", " home"]
          }[st.verb];
          const base = st.verb === "study" ? "study" : V[0];
          const th = isThird(st.subj);
          const rest = V[2], stop = /\.$/.test(rest) ? "" : ".";
          if (st.form === "+") {
            const verb = th ? "{v:" + V[0] + "}{x:" + V[1] + "}" : "{v:" + base + "}";
            const ending = st.verb === "study" ? "y → ies (studies)" : V[1] === "es" ? "add -es (" + base + "es)" : "add -s (" + base + "s)";
            return { s: "{s:" + st.subj + "} {t:" + st.freq + "} " + verb + rest + stop,
              badge: th ? "he / she / it → " + ending : "no -s", badgeKind: th ? "good" : null,
              rule: th ? "{s:he / she / it} + {t:adverb} + {v:verb}{x:-s / -es}" : "{s:I / we / you / they} + {t:adverb} + {v:bare infinitive}",
              note: "“" + st.freq + "” is an adverb of frequency. It goes before the verb." + (th ? " " + st.subj + " = he / she → " + ending + "." : " With " + st.subj + " the verb has no -s."),
              noteAr: "كلمة " + st.freq + " ظرف تكرار ويأتي قبل الفعل." + (th ? " ومع he / she نضيف s أو es أو ies إلى الفعل." : " ومع I / we / you / they يبقى الفعل بدون s.") };
          }
          if (st.form === "-") {
            const neg = th ? "doesn’t" : "don’t";
            return { s: "{s:" + st.subj + "} {n:" + neg + "} {v:" + base + "}" + rest + stop,
              badge: neg + " + bare infinitive", badgeKind: "warn",
              rule: th ? "{s:he / she / it} + {n:doesn’t} + {v:verb}" : "{s:I / we / you / they} + {n:don’t} + {v:verb}",
              note: th ? "doesn’t already has the s, so the verb has no -s: doesn’t " + base + "." : "I / we / you / they → don’t + verb.",
              noteAr: th ? "كلمة doesn’t فيها s، لذلك يأتي الفعل بعدها بدون s." : "مع I / we / you / they نستخدم don’t ثم الفعل." };
          }
          const aux = th ? "Does" : "Do";
          if (st.form === "?") {
            return { s: "{a:" + aux + "} {s:" + low(st.subj) + "} {v:" + base + "}" + rest + "?",
              badge: aux + " + subject + verb?",
              rule: "{a:Do / Does} + {s:subject} + {v:verb}?",
              note: th ? "Does goes with he / she / it. The verb has no -s." : "Do goes with I / we / you / they.",
              noteAr: th ? "نستخدم Does مع he / she / it، ويبقى الفعل بدون s." : "نستخدم Do مع I / we / you / they." };
          }
          return { s: "{q:" + V[3] + "} {a:" + aux.toLowerCase() + "} {s:" + low(st.subj) + "} {v:" + base + "}" + V[4] + "?",
            badge: "Wh + " + aux.toLowerCase() + " + subject + verb?",
            rule: "{q:What / Where / When} + {a:do / does} + {s:subject} + {v:verb}?",
            note: "Start with the question word, then " + aux.toLowerCase() + ", then the subject and the verb with no -s.",
            noteAr: "نبدأ بأداة الاستفهام ثم " + aux.toLowerCase() + " ثم الفاعل ثم الفعل بدون s." };
        }
      },
      predict: {
        q: "Ali ____ junk food during the week.", options: ["doesn’t eats", "doesn’t eat", "don’t eat"], answer: 1,
        reveal: "{s:Ali} {n:doesn’t} {v:eat} junk food during the week.", mistake: "Common mistake: adding -s to the verb after doesn’t.",
        why: "Ali = he, so we use doesn’t. doesn’t already has the s, so the verb stays without -s: doesn’t eat.",
        whyAr: "علي = he لذلك نستخدم doesn’t، وهي تحمل حرف s، فيأتي الفعل بعدها بدون s."
      }
    },

    /* ── Learning Unit 1 · Lesson 6 · Present Continuous (p. 28) ── */
    u1l6: {
      lab: {
        title: "Grammar Lab: Live from Al-Shaheed Park",
        intro: "You are the reporter! Choose who you can see, what they are doing and the sentence type. Watch am / is / are and -ing.",
        introAr: "أنت المراسل! اختر من تراه وماذا يفعل ونوع الجملة، وشاهد am / is / are و ing.",
        controls: [
          { id: "subj", label: "Who?", options: ["I", "You", "We", "They", "He", "She", "The girl", "The children"], start: "The girl" },
          { id: "act", label: "Doing what?", options: [
            { v: "photo", t: "take photos" }, { v: "read", t: "read a story" }, { v: "eat", t: "eat sandwiches" },
            { v: "football", t: "play football" }, { v: "swim", t: "swim in the pool" }, { v: "walk", t: "walk in the park" }], start: "photo" },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Affirmative" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Yes/No question" }, { v: "wh", t: "? Wh- question" }] },
          { id: "time", label: "Time", options: ["now", "at the moment", "right now"] }
        ],
        build(st) {
          // [base, -ing form, rest, Wh word, Wh rest, spelling note]
          const A = {
            photo: ["take", "taking", " photos near the fountain", "Where", " photos", "take → taking: drop the e, then add -ing."],
            read: ["read", "reading", " a story", "What", "", "read → reading: just add -ing."],
            eat: ["eat", "eating", " sandwiches", "What", "", "eat → eating: just add -ing."],
            football: ["play", "playing", " football", "What", "", "play → playing: just add -ing."],
            swim: ["swim", "swimming", " in the pool", "Where", "", "swim → swimming: double the m, then add -ing."],
            walk: ["walk", "walking", " in the park", "Where", "", "walk → walking: just add -ing."]
          }[st.act];
          const be = BE(st.subj), t = " {t:" + st.time + "}";
          const ing = "{v:" + A[1] + "}";
          if (st.form === "+") {
            return { s: "{s:" + st.subj + "} {a:" + be + "} " + ing + A[2] + t + ".", badge: "⏱ happening " + st.time, badgeKind: "good",
              rule: "{s:" + st.subj + "} + {a:" + be + "} + {v:verb-ing}",
              note: st.subj + " → " + be + ". " + A[5],
              noteAr: "مع " + st.subj + " نستخدم " + be + " ثم الفعل مع ing، لأن الحدث يحصل الآن." };
          }
          if (st.form === "-") {
            const neg = be === "am" ? "am not" : be + "n’t";
            return { s: "{s:" + st.subj + "} {n:" + neg + "} " + ing + A[2] + t + ".", badge: neg + " + verb-ing", badgeKind: "warn",
              rule: "{s:" + st.subj + "} + {n:" + neg + "} + {v:verb-ing}",
              note: "Negative: " + (be === "am" ? "I am not (we do not say “amn’t”)." : be + " + not = " + neg + ".") + " " + A[5],
              noteAr: be === "am" ? "النفي مع I يكون am not." : "النفي: " + be + " + not = " + neg + "." };
          }
          if (st.form === "?") {
            return { s: "{a:" + cap(be) + "} {s:" + low(st.subj) + "} " + ing + A[2] + t + "?", badge: cap(be) + " + subject + verb-ing?",
              rule: "{a:Am / Is / Are} + {s:subject} + {v:verb-ing}?",
              note: "In a Yes/No question, " + be + " comes before the subject. " + A[5],
              noteAr: "في سؤال Yes/No نضع " + be + " قبل الفاعل." };
          }
          return { s: "{q:" + A[3] + "} {a:" + be + "} {s:" + low(st.subj) + "} " + ing + A[4] + t + "?", badge: "WH-Q + " + be + " + subject + verb-ing?",
            rule: "{q:WH-Q} + {a:am / is / are} + {s:subject} + {v:verb-ing}?",
            note: "Start with the question word (" + A[3] + "), then " + be + ", then the subject and the verb-ing.",
            noteAr: "نبدأ بأداة الاستفهام ثم " + be + " ثم الفاعل ثم الفعل مع ing." };
        }
      },
      predict: {
        q: "____ Nadia doing her English project at the moment?", options: ["Does", "Is", "Are"], answer: 1,
        reveal: "{a:Is} {s:Nadia} {v:doing} her English project {t:at the moment}?", mistake: "Common mistake: using Do / Does in a present continuous question.",
        why: "doing (verb-ing) and “at the moment” tell us it is the present continuous. Nadia = she, so the question starts with Is.",
        whyAr: "الفعل doing وعبارة at the moment تدلّان على المضارع المستمر، و Nadia مفرد مؤنث، لذلك نبدأ السؤال بـ Is."
      }
    }
  };
})());

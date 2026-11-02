BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Unit 1 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */
  const THIRD = ["He", "She", "Nour", "Abdulaziz"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const BE = (s) => (s === "I" ? "am" : isThird(s) ? "is" : "are");

  return {
    /* ── Unit 1 · Lesson 2 · The -ing form (gerund); the infinitive (p. 16) ── */
    u1l2: {
      lab: {
        title: "Grammar Lab: -ing or to?",
        intro: "Choose the first word and a sport. Watch the verb change: -ing or to + verb?",
        introAr: "اختر الكلمة الأولى والرياضة، وشاهد الفعل يتغيّر: ing أم to + فعل؟",
        controls: [
          { id: "start", label: "Starter", options: [
            { v: "subj", t: "(subject) … is good for you" }, { v: "enjoy", t: "I enjoy" }, { v: "goodat", t: "I am good at" },
            { v: "interested", t: "I am interested in" }, { v: "need", t: "I need" }, { v: "promise", t: "I promise" },
            { v: "important", t: "It is important" }, { v: "prefer", t: "I prefer" }], start: "enjoy" },
          { id: "act", label: "Sport", options: [{ v: "swim", t: "swim" }, { v: "football", t: "play football" }, { v: "weights", t: "lift weights" }, { v: "bike", t: "ride a bike" }, { v: "run", t: "run" }] },
          { id: "pf", label: "prefer +", options: [{ v: "ing", t: "-ing" }, { v: "to", t: "to + verb" }], show: (st) => st.start === "prefer" }
        ],
        build(st) {
          const A = { swim: ["swim", "swimming", ""], football: ["play", "playing", " football"], weights: ["lift", "lifting", " weights"], bike: ["ride", "riding", " a bike"], run: ["run", "running", ""] }[st.act];
          const ing = "{v:" + A[1] + "}" + A[2], inf = "{p:to " + A[0] + "}" + A[2];
          const Ing = "{v:" + A[1].charAt(0).toUpperCase() + A[1].slice(1) + "}" + A[2];
          const ingNote = { badge: "-ing", badgeKind: "good" }, toNote = { badge: "to + base verb", badgeKind: "warn" };
          switch (st.start) {
            case "subj": return Object.assign({ s: Ing + " is good for you.", rule: "{v:verb-ing} = the subject", note: "The -ing form can be the subject of the sentence, like the book’s example: Walking every day is very good for you.", noteAr: "يمكن أن تكون صيغة ing فاعلًا في بداية الجملة، مثل: Walking every day is very good for you." }, ingNote);
            case "enjoy": return Object.assign({ s: "{s:I} {v:enjoy} " + ing + ".", rule: "{v:enjoy} + {v:verb-ing}", note: "After enjoy we use -ing: enjoy " + A[1] + ".", noteAr: "بعد enjoy نستخدم صيغة ing." }, ingNote);
            case "goodat": return Object.assign({ s: "{s:I} am good {c:at} " + ing + ".", rule: "{c:preposition} + {v:verb-ing}", note: "at is a preposition. After a preposition we use -ing.", noteAr: "at حرف جر، وبعد حرف الجر نستخدم صيغة ing." }, ingNote);
            case "interested": return Object.assign({ s: "{s:I} am interested {c:in} " + ing + ".", rule: "{c:preposition} + {v:verb-ing}", note: "in is a preposition. After a preposition we use -ing.", noteAr: "in حرف جر، وبعد حرف الجر نستخدم صيغة ing." }, ingNote);
            case "need": return Object.assign({ s: "{s:I} {v:need} " + inf + " more.", rule: "{v:need} + {p:to + base verb}", note: "After need we use to + base verb: need to " + A[0] + ".", noteAr: "بعد need نستخدم to + الفعل الأساسي." }, toNote);
            case "promise": return Object.assign({ s: "{s:I} {v:promise} " + inf + " every day.", rule: "{v:promise} + {p:to + base verb}", note: "After promise we use to + base verb: promise to " + A[0] + ".", noteAr: "بعد promise نستخدم to + الفعل الأساسي." }, toNote);
            case "important": return Object.assign({ s: "It is important " + inf + " regularly.", rule: "{v:It is important} + {p:to + base verb}", note: "After It is important we use to + base verb, like the book: It is important to warm up.", noteAr: "بعد It is important نستخدم to + الفعل الأساسي." }, toNote);
            default:
              return { s: "{s:I} {v:prefer} " + (st.pf === "to" ? inf : ing) + ".", badge: "both are correct ✓", badgeKind: "good",
                rule: "{v:prefer} + {v:verb-ing} / {p:to + base verb}",
                note: "prefer can take both forms with the same meaning: I prefer " + A[1] + A[2] + ". = I prefer to " + A[0] + A[2] + ".",
                noteAr: "الفعل prefer يأتي بعده ing أو to بالمعنى نفسه، وكلاهما صحيح." };
          }
        }
      },
      predict: {
        q: "Which sentence is correct?", options: ["I enjoy to play football.", "I enjoy playing football."], answer: 1,
        reveal: "{s:I} {v:enjoy} {v:playing} football.", mistake: "Common mistake: using to after enjoy.",
        why: "After enjoy we always use the -ing form: enjoy playing, enjoy swimming.",
        whyAr: "بعد enjoy نستخدم دائمًا صيغة ing مثل enjoy playing، ولا نستخدم to."
      }
    },

    /* ── Unit 1 · Lesson 4 · Present simple or Present continuous (p. 18) ── */
    u1l4: {
      lab: {
        title: "Grammar Lab: Habit or Now? The Time Slider",
        intro: "Choose a person and a sport. Slide from habits (never … often) to now. Watch the verb change.",
        introAr: "اختر شخصًا ورياضة، ثم حرّك الشريط من العادات إلى الآن، وشاهد الفعل يتغيّر.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Nour"], start: "Nour" },
          { id: "act", label: "Sport", options: [{ v: "run", t: "run" }, { v: "swim", t: "swim" }, { v: "tennis", t: "play tennis" }, { v: "jump", t: "do the long jump" }, { v: "bike", t: "ride a bike" }] },
          { id: "time", label: "Time", kind: "slider", options: ["never", "sometimes", "often", "usually", "at the moment", "now"], start: "usually" }
        ],
        build(st) {
          const V = { run: ["run", "s", "running", ""], swim: ["swim", "s", "swimming", ""], tennis: ["play", "s", "playing", " tennis"], jump: ["do", "es", "doing", " the long jump"], bike: ["ride", "s", "riding", " a bike"] }[st.act];
          const th = isThird(st.subj);
          if (st.time === "now" || st.time === "at the moment") {
            return { s: "{s:" + st.subj + "} {a:" + BE(st.subj) + "} {v:" + V[2] + "}" + V[3] + " {t:" + st.time + "}.", badge: "⏱ happening now", badgeKind: "future",
              rule: "{s:" + st.subj + "} + {a:" + BE(st.subj) + "} + {v:verb-ing}",
              note: "“" + st.time + "” → the action is happening now → present continuous (am / is / are + -ing).",
              noteAr: "الكلمة " + st.time + " تعني أن الحدث يحصل الآن، فنستخدم المضارع المستمر: am / is / are + ing." };
          }
          const verb = th ? "{v:" + V[0] + "}{x:" + V[1] + "}" : "{v:" + V[0] + "}";
          return { s: "{s:" + st.subj + "} {t:" + st.time + "} " + verb + V[3] + ".", badge: "🔁 habit", badgeKind: "good",
            rule: th ? "{s:he / she} + {t:" + st.time + "} + {v:verb}{x:-s}" : "{s:I / you / we / they} + {t:" + st.time + "} + {v:base verb}",
            note: "“" + st.time + "” tells us how often → present simple. The adverb goes before the verb." + (th ? " " + st.subj + " = he / she → add -" + V[1] + "." : ""),
            noteAr: "الكلمة " + st.time + " تبيّن عدد المرات، فنستخدم المضارع البسيط، ويأتي الظرف قبل الفعل." + (th ? " ومع he / she نضيف " + V[1] + " للفعل." : "") };
        }
      },
      predict: {
        q: "Look! Nour ____ the long jump now.", options: ["does", "is doing"], answer: 1,
        reveal: "Look! {s:Nour} {a:is} {v:doing} the long jump {t:now}.", mistake: "Common mistake: using the present simple for an action happening now.",
        why: "now (and Look!) means the action is happening at this moment → present continuous: is doing.",
        whyAr: "كلمة now وكلمة Look! تعنيان أن الحدث يحصل الآن، لذلك نستخدم المضارع المستمر is doing."
      }
    }
  };
})());

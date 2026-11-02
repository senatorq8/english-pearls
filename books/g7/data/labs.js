/* Extra Practice for the grammar lessons of Book 7A (not in the book; shown as "Extra Practice").
   lab:     a "Grammar Lab" — buttons / a slider change a pop-up sentence live, following the lesson's own rule box.
   predict: "Predict, Then Reveal" — one common mistake; the student predicts, then lifts a paper flap.
   Every sentence the lab can build was listed and checked (node tools/lab-dump.js g7). */
(function () {
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const low = (s) => (s === "I" ? s : s.charAt(0).toLowerCase() + s.slice(1));
  const THIRD = ["He", "She", "It", "My father", "My brother", "My uncle", "This house", "Ahmed"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const BE = (s) => (s === "I" ? "am" : isThird(s) ? "is" : "are");
  const FORMS = [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Question" }];

  BOOK.labs = {
    /* ── Unit 1 · Lesson 2 · Present Simple (p. 22) ── */
    u1l2: {
      lab: {
        title: "Grammar Lab: The -s Machine",
        intro: "Change the subject, the verb and the sentence type. Watch the -s jump in and out.",
        introAr: "غيّر الفاعل والفعل ونوع الجملة، وشاهد حرف s وهو يدخل ويخرج.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "My father"], start: "She" },
          { id: "verb", label: "Verb", options: [{ v: "wake", t: "wake up early" }, { v: "play", t: "play football" }, { v: "watch", t: "watch TV" }, { v: "go", t: "go to school" }, { v: "study", t: "study English" }, { v: "help", t: "help at home" }] },
          { id: "form", label: "Sentence", options: FORMS }
        ],
        build(st) {
          const V = { wake: ["wake", "s", "up early"], play: ["play", "s", "football"], watch: ["watch", "es", "TV"], go: ["go", "es", "to school"], study: ["stud", "ies", "English"], help: ["help", "s", "at home"] }[st.verb];
          const base = st.verb, rest = V[2], th = isThird(st.subj);
          if (st.form === "+") {
            if (th) return { s: "{s:" + st.subj + "} {v:" + V[0] + "}{x:" + V[1] + "} " + rest + " {t:every day}.", badge: "he / she / it → add -" + V[1], badgeKind: "good", rule: "{s:he / she / it} + {v:verb}{x:-s}",
              note: base === "study" ? "study ends in a consonant + y: y → ies (studies)." : V[1] === "es" ? base + " → " + base + "es: add -es." : "One person (he, she, it) → add -s to the verb.",
              noteAr: base === "study" ? "الفعل study ينتهي بحرف ساكن ثم y، فنحذف y ونضيف ies." : V[1] === "es" ? "نضيف es للفعل " + base + "." : "مع he و she و it (شخص واحد) نضيف s للفعل." };
            return { s: "{s:" + st.subj + "} {v:" + base + "} " + rest + " {t:every day}.", badge: "no -s", rule: "{s:I / you / we / they} + {v:base verb}", note: "I, you, we and they → the base verb, no -s.", noteAr: "مع I و you و we و they نستخدم الفعل الأصلي بدون s." };
          }
          if (st.form === "-") {
            if (th) return { s: "{s:" + st.subj + "} {n:doesn’t} {v:" + base + "} " + rest + " {t:every day}.", badge: "doesn’t → no -s on the verb", badgeKind: "warn", rule: "{n:doesn’t} + {v:base verb}", note: "doesn’t already has the s. So the verb has no -s: doesn’t " + base + ".", noteAr: "كلمة doesn’t فيها s، لذلك يبقى الفعل بدون s." };
            return { s: "{s:" + st.subj + "} {n:don’t} {v:" + base + "} " + rest + " {t:every day}.", badge: "no -s", rule: "{n:don’t} + {v:base verb}", note: "I, you, we, they → don’t + base verb.", noteAr: "مع I و you و we و they نستخدم don’t ثم الفعل الأصلي." };
          }
          const aux = th ? "Does" : "Do";
          return { s: "{a:" + aux + "} {s:" + low(st.subj) + "} {v:" + base + "} " + rest + " {t:every day}?", badge: aux + " + subject + base verb", rule: "{a:Do / Does} + {s:subject} + {v:base verb}?",
            note: th ? "Does takes the s. The verb stays in the base form." : "Do + I / you / we / they + base verb.", noteAr: th ? "كلمة Does تأخذ الـ s، ويبقى الفعل في صورته الأصلية." : "نبدأ السؤال بـ Do مع I و you و we و they." };
        }
      },
      predict: {
        q: "Which sentence is correct?", options: ["Dalal doesn’t sleeps late.", "Dalal doesn’t sleep late."], answer: 1,
        reveal: "{s:Dalal} {n:doesn’t} {v:sleep} late.", mistake: "Common mistake: keeping the -s after doesn’t.",
        why: "doesn’t already has the s. After doesn’t, use the base verb with no -s.",
        whyAr: "كلمة doesn’t فيها حرف s أصلًا، لذلك يأتي بعدها الفعل في صورته الأصلية بدون s."
      }
    },

    /* ── Unit 1 · Lesson 6 · Have got / Has got (p. 27) ── */
    u1l6: {
      lab: {
        title: "Grammar Lab: have got or has got?",
        intro: "Choose who has it, what they have, and the sentence type.",
        introAr: "اختر الفاعل والشيء ونوع الجملة، وشاهد have got و has got.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "This house"], start: "He" },
          { id: "thing", label: "Thing", options: ["a garage", "a quiet room", "a big garden", "a bookshelf"] },
          { id: "form", label: "Sentence", options: FORMS }
        ],
        build(st) {
          const th = isThird(st.subj), hv = th ? "has" : "have";
          const rule = th ? "{s:he / she / it} + {v:has got}" : "{s:I / you / we / they} + {v:have got}";
          const note = th ? st.subj + " = one person or thing → has got." : st.subj + " → have got.";
          const noteAr = th ? "مع he و she و it (شخص أو شيء واحد) نستخدم has got." : "مع I و you و we و they نستخدم have got.";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {v:" + hv + " got} {o:" + st.thing + "}.", badge: hv + " got", badgeKind: "good", rule, note, noteAr };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:" + hv + "n’t got} {o:" + st.thing + "}.", badge: hv + "n’t got", badgeKind: "warn", rule: th ? "{s:he / she / it} + {n:hasn’t got}" : "{s:I / you / we / they} + {n:haven’t got}", note, noteAr };
          return { s: "{a:" + cap(hv) + "} {s:" + low(st.subj) + "} {v:got} {o:" + st.thing + "}?", badge: cap(hv) + " … got?", rule: "{a:Have / Has} + {s:subject} + {v:got} …?", note: "In questions, have / has comes first.", noteAr: "في السؤال نبدأ بـ Have أو Has." };
        }
      },
      predict: {
        q: "Soud and Ali ____ a big room.", options: ["has got", "have got"], answer: 1,
        reveal: "{s:Soud and Ali} {v:have got} a big room.", mistake: "Common mistake: seeing a name and choosing has got, even when there are two names.",
        why: "Soud and Ali = two people = they. With they we use have got.",
        whyAr: "سعود وعلي = شخصان = they، ومع they نستخدم have got."
      }
    },

    /* ── Unit 2 · Lesson 2 · Have to / Don’t have to (p. 36) ── */
    u2l2: {
      lab: {
        title: "Grammar Lab: Necessary or not?",
        intro: "Choose a person and a rule. Is it necessary, or not necessary?",
        introAr: "اختر شخصًا وقاعدة: هل هي ضرورية أم غير ضرورية؟",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "My brother"], start: "She" },
          { id: "act", label: "Action", options: ["wear a school uniform", "study harder", "go to school early", "bring food", "cook dinner"] },
          { id: "form", label: "Necessary?", options: [{ v: "+", t: "✔ have to (necessary)" }, { v: "-", t: "✖ don’t have to (not necessary)" }] }
        ],
        build(st) {
          const th = isThird(st.subj), parts = st.act.split(" "), v = parts[0], rest = parts.slice(1).join(" ");
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:" + (th ? "has" : "have") + " to} {v:" + v + "} {o:" + rest + "}.", badge: "necessary", badgeKind: "good",
            rule: th ? "{s:he / she / it} + {a:has to} + {v:base verb}" : "{s:I / you / we / they} + {a:have to} + {v:base verb}",
            note: (th ? "He / she / it → has to. " : "I / you / we / they → have to. ") + "The verb stays in the base form: " + v + ".", noteAr: "بعد have to و has to يأتي الفعل في صورته الأصلية بدون s." };
          return { s: "{s:" + st.subj + "} {n:" + (th ? "doesn’t" : "don’t") + " have to} {v:" + v + "} {o:" + rest + "}.", badge: "not necessary", badgeKind: "warn",
            rule: th ? "{s:he / she / it} + {n:doesn’t have to} + {v:base verb}" : "{s:I / you / we / they} + {n:don’t have to} + {v:base verb}",
            note: "don’t / doesn’t have to = it is not necessary (you can, but you do not need to).", noteAr: "don’t have to تعني «ليس ضروريًا»، وليست «ممنوعًا»." };
        }
      },
      predict: {
        q: "“You don’t have to bring food.” What does it mean?", options: ["Bringing food is not allowed.", "Bringing food is not necessary."], answer: 1,
        reveal: "{s:You} {n:don’t have to} {v:bring} food. = It is not necessary.", mistake: "Common mistake: thinking don’t have to means “not allowed”.",
        why: "don’t have to = not necessary. You can bring food if you want, but you do not need to.",
        whyAr: "don’t have to تعني «ليس ضروريًا» وليست «ممنوعًا». يمكنك أن تحضر الطعام إذا أردت، لكنك غير مضطر."
      }
    },

    /* ── Unit 2 · Lesson 6 · Modal Verbs (p. 41) ── */
    u2l6: {
      lab: {
        title: "Grammar Lab: The Modal Machine",
        intro: "Choose a modal. Change the subject. Does the verb change?",
        introAr: "اختر الفعل المساعد وغيّر الفاعل. هل يتغيّر الفعل؟",
        controls: [
          { id: "modal", label: "Modal", options: ["must", "should", "may", "can"], start: "can" },
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They"], start: "He" },
          { id: "verb", label: "Verb", options: [{ v: "{v:swim}", t: "swim" }, { v: "{v:help} {o:others}", t: "help others" }, { v: "{v:be} polite", t: "be polite" }, { v: "{v:listen} to the teacher", t: "listen to the teacher" }, { v: "{v:drive} safely", t: "drive safely" }] }
        ],
        build(st) {
          const job = { must: "strong obligation", should: "advice", may: "possibility", can: "ability" }[st.modal];
          const jobAr = { must: "إلزام قوي", should: "نصيحة", may: "احتمال", can: "قدرة" }[st.modal];
          const th = isThird(st.subj);
          return { s: "{s:" + st.subj + "} {a:" + st.modal + "} " + st.verb + ".", badge: st.modal + " = " + job, badgeKind: "good", rule: "{a:modal} + {v:base verb}",
            note: th ? "Even with " + low(st.subj) + ": no -s after a modal." : "Modal + base verb. No -s, no -ing, no to.",
            noteAr: st.modal + " = " + jobAr + ". بعد الفعل المساعد يأتي الفعل الأصلي بدون s وبدون ing وبدون to." };
        }
      },
      predict: {
        q: "Which sentence is correct?", options: ["You should to listen to your teacher.", "You should listen to your teacher.", "You should listening to your teacher."], answer: 1,
        reveal: "{s:You} {a:should} {v:listen} to your teacher.", mistake: "Common mistake: adding to or -ing after a modal.",
        why: "After a modal verb, use the base verb: no to, no -ing, no -s.",
        whyAr: "بعد الأفعال المساعدة مثل should نستخدم الفعل في صورته الأصلية: بدون to وبدون ing وبدون s."
      }
    },

    /* ── Unit 3 · Lesson 2 · Purpose Connectors (p. 50) ── */
    u3l2: {
      lab: {
        title: "Grammar Lab: Why? The Purpose Builder",
        intro: "Choose an action and a connector. Look at what comes after the connector.",
        introAr: "اختر فعلًا وأداة ربط، وانظر ماذا يأتي بعد الأداة.",
        controls: [
          { id: "act", label: "Action", options: [{ v: "helmet", t: "I wear a helmet" }, { v: "study", t: "I study hard" }, { v: "lights", t: "We turn off the lights" }, { v: "hands", t: "Wash your hands" }, { v: "bus", t: "Ahmed leaves home early" }] },
          { id: "con", label: "Connector", options: ["to", "in order to", "so that"] }
        ],
        build(st) {
          const A = {
            helmet: ["{s:I} {v:wear} {o:a helmet}", "I", "protect", "my head"],
            study: ["{s:I} {v:study} {t:hard}", "I", "pass", "the exam"],
            lights: ["{s:We} {v:turn off} {o:the lights}", "we", "save", "electricity"],
            hands: ["{v:Wash} {o:your hands} {t:regularly}", "you", "avoid", "illness"],
            bus: ["{s:Ahmed} {v:leaves} {o:home} {t:early}", "he", "catch", "the bus"]
          }[st.act];
          if (st.con === "so that") return { s: A[0] + " {c:so that} {s:" + A[1] + "} {a:can} {v:" + A[2] + "} {p:" + A[3] + "}.", badge: "so that + subject + verb", badgeKind: "warn",
            rule: "{c:so that} + {s:subject} + {a:can} + {v:base verb}", note: "After so that we need a subject (" + A[1] + ") and a verb (can " + A[2] + ").", noteAr: "بعد so that نحتاج فاعلًا ثم فعلًا، مثل: " + A[1] + " can " + A[2] + "." };
          return { s: A[0] + " {c:" + st.con + "} {v:" + A[2] + "} {p:" + A[3] + "}.", badge: "to = in order to · both are correct ✓", badgeKind: "good",
            rule: "{c:" + st.con + "} + {v:base verb}", note: st.con === "to" ? "to + base verb. You can also say in order to — same meaning." : "in order to + base verb. It means the same as to, just more formal.",
            noteAr: "to و in order to بنفس المعنى وكلاهما صحيح، وبعدهما الفعل الأصلي " + A[2] + "." };
        }
      },
      predict: {
        q: "I wear a helmet ____ protect my head.", options: ["to", "in order to", "Both are correct"], answer: 2,
        reveal: "{s:I} {v:wear} {o:a helmet} {c:to} {p:protect my head}. = {c:in order to} {p:protect my head}.", mistake: "Common mistake: thinking only one of them can be right.",
        why: "to and in order to have the same meaning. Both come before a base verb (protect). in order to is a little more formal.",
        whyAr: "to و in order to بنفس المعنى، وكلاهما يأتي قبل الفعل الأصلي protect. الفرق أن in order to أكثر رسمية."
      }
    },

    /* ── Unit 3 · Lesson 6 · Present Continuous (p. 55) ── */
    u3l6: {
      lab: {
        title: "Grammar Lab: Now or Future? The Time Slider",
        intro: "Build the sentence. Then slide the time. Does the verb change?",
        introAr: "كوّن الجملة ثم حرّك شريط الوقت. هل يتغيّر الفعل؟",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "He", "She", "We", "They", "My uncle"] },
          { id: "act", label: "Action", options: [{ v: "packing the car", t: "pack the car" }, { v: "travelling", t: "travel" }, { v: "watching a movie", t: "watch a movie" }, { v: "visiting Grandma", t: "visit Grandma" }, { v: "moving to a new house", t: "move to a new house" }] },
          { id: "time", label: "Time", kind: "slider", options: ["now", "at the moment", "tonight", "tomorrow", "next week"] }
        ],
        build(st) {
          const p = st.act.split(" "), v = p[0], rest = p.slice(1).join(" ");
          const future = ["tonight", "tomorrow", "next week"].indexOf(st.time) >= 0;
          return { s: "{s:" + st.subj + "} {a:" + BE(st.subj) + "} {v:" + v + "}" + (rest ? " " + rest : "") + " {t:" + st.time + "}.",
            badge: future ? "📅 future plan" : "⏱ happening now", badgeKind: future ? "future" : "good",
            rule: "{s:" + st.subj + "} + {a:" + BE(st.subj) + "} + {v:verb-ing}",
            note: future ? "Same verb form! The keyword " + st.time + " tells us it is a future plan." : "The keyword " + st.time + " tells us it is happening now.",
            noteAr: future ? "صيغة الفعل نفسها، لكن الكلمة " + st.time + " تخبرنا أنها خطة في المستقبل." : "الكلمة " + st.time + " تخبرنا أن الحدث يحصل الآن." };
        }
      },
      predict: {
        q: "“We are visiting Grandma tomorrow.” When does this happen?", options: ["Now, at this moment", "In the future (a plan we made)"], answer: 1,
        reveal: "{s:We} {a:are} {v:visiting} Grandma {t:tomorrow}.", mistake: "Common mistake: thinking the present continuous is only for now.",
        why: "The verb form is the same for now and for plans. The keyword tomorrow tells us it is a future plan.",
        whyAr: "صيغة الفعل واحدة للحاضر وللخطط، لكن الكلمة tomorrow تخبرنا أنها خطة في المستقبل."
      }
    },

    /* ── Unit 4 · Lesson 2 · Countable / Uncountable (p. 64) ── */
    u4l2: {
      lab: {
        title: "Grammar Lab: Can we count it?",
        intro: "Choose a noun. Is it countable? Then choose how many and the sentence type.",
        introAr: "اختر اسمًا: هل هو معدود؟ ثم اختر العدد ونوع الجملة.",
        controls: [
          { id: "noun", label: "Noun", options: ["apple", "egg", "banana", "candle", "dish", "rice", "water", "sugar", "milk", "food"] },
          { id: "num", label: "How many?", options: [{ v: "1", t: "one" }, { v: "2", t: "more than one" }], show: (st) => ["rice", "water", "sugar", "milk", "food"].indexOf(st.noun) < 0 },
          { id: "form", label: "Sentence", options: FORMS }
        ],
        build(st) {
          const unc = ["rice", "water", "sugar", "milk", "food"].indexOf(st.noun) >= 0;
          const vowel = /^[aeiou]/.test(st.noun);
          let det, noun;
          if (unc) { det = st.form === "+" ? "some" : "any"; noun = "{o:" + st.noun + "}"; }
          else if (st.num === "1") { det = vowel ? "an" : "a"; noun = "{o:" + st.noun + "}"; }
          else { det = st.form === "+" ? "some" : "any"; noun = "{o:" + st.noun + "}{x:" + (st.noun === "dish" ? "es" : "s") + "}"; }
          const s = st.form === "+" ? "{s:We} {v:have} {t:" + det + "} " + noun + "." : st.form === "-" ? "{s:We} {n:don’t} {v:have} {t:" + det + "} " + noun + "." : "{a:Do} {s:you} {v:have} {t:" + det + "} " + noun + "?";
          let note, noteAr;
          if (unc) { note = st.noun + " is uncountable: no a / an and no -s. Use " + det + (st.form === "+" ? " in positive sentences." : " in negatives and questions."); noteAr = "كلمة " + st.noun + " غير معدودة: لا نستخدم a أو an ولا نضيف s. نستخدم some في الإثبات و any في النفي والسؤال."; }
          else if (st.num === "1") { note = vowel ? "an before a vowel sound: an " + st.noun + "." : "a before a consonant sound: a " + st.noun + "."; noteAr = vowel ? "نستخدم an قبل الكلمة التي تبدأ بصوت حرف علة." : "نستخدم a قبل الكلمة التي تبدأ بصوت حرف ساكن."; }
          else { note = "More than one → add -" + (st.noun === "dish" ? "es" : "s") + ". Use " + det + (st.form === "+" ? " in positive sentences." : " in negatives and questions."); noteAr = "أكثر من واحد: نضيف s، ونستخدم some في الإثبات و any في النفي والسؤال."; }
          return { s, badge: unc ? "uncountable ✗ 1, 2, 3" : "countable ✓ 1, 2, 3", badgeKind: unc ? "warn" : "good", rule: unc ? "{t:some / any} + {o:uncountable noun}" : st.num === "1" ? "{t:a / an} + {o:one thing}" : "{t:some / any} + {o:noun}{x:-s}", note, noteAr };
        }
      },
      predict: {
        q: "We need some ____ for the cake.", options: ["sugars", "sugar"], answer: 1,
        reveal: "We need {t:some} {o:sugar} for the cake.", mistake: "Common mistake: adding -s to uncountable nouns.",
        why: "Sugar is uncountable. Uncountable nouns have no -s and no a / an.",
        whyAr: "كلمة sugar غير معدودة، والأسماء غير المعدودة لا نضيف لها s ولا نستخدم معها a أو an."
      }
    },

    /* ── Unit 4 · Lesson 6 · Passive Voice (p. 69) ── */
    u4l6: {
      lab: {
        title: "Grammar Lab: Active → Passive",
        intro: "Choose a sentence and a form. Watch the object move to the front.",
        introAr: "اختر جملة وصيغة، وشاهد المفعول به ينتقل إلى أول الجملة.",
        controls: [
          { id: "sen", label: "Sentence", options: [{ v: "candy", t: "Ahmed eats candy." }, { v: "houses", t: "People decorate houses." }, { v: "dishes", t: "Families prepare dishes." }, { v: "party", t: "My friends invite me to the party." }] },
          { id: "form", label: "Form", options: [{ v: "", t: "present simple" }, { v: "can", t: "can" }, { v: "should", t: "should" }, { v: "must", t: "must" }] },
          { id: "by", label: "Doer", options: [{ v: "y", t: "with by + doer" }, { v: "n", t: "without by" }] }
        ],
        build(st) {
          const D = {
            candy: { doer: "Ahmed", v1: "eat", v1s: "eats", v3: "eaten", obj: "candy", ps: "Candy", be: "is", tail: "", by: "by Ahmed" },
            houses: { doer: "People", v1: "decorate", v1s: "decorate", v3: "decorated", obj: "houses", ps: "Houses", be: "are", tail: "", by: "by people" },
            dishes: { doer: "Families", v1: "prepare", v1s: "prepare", v3: "prepared", obj: "dishes", ps: "Dishes", be: "are", tail: "", by: "by families" },
            party: { doer: "My friends", v1: "invite", v1s: "invite", v3: "invited", obj: "me", ps: "I", be: "am", tail: " to the party", by: "by my friends" }
          }[st.sen];
          const from = "{s:" + D.doer + "} " + (st.form ? "{a:" + st.form + "} {v:" + D.v1 + "}" : "{v:" + D.v1s + "}") + " {o:" + D.obj + "}" + D.tail + ".";
          const s = "{s:" + D.ps + "} {a:" + (st.form ? st.form + " be" : D.be) + "} {v:" + D.v3 + "}" + D.tail + (st.by === "y" ? " {o:" + D.by + "}" : "") + ".";
          return { from, fromLabel: "Active", s, badge: "Passive · verb 3: " + D.v3, badgeKind: "good",
            rule: st.form ? "{s:subject} + {a:modal + be} + {v:verb 3}" : "{s:subject} + {a:am / is / are} + {v:verb 3}",
            note: st.form ? "With a modal: " + st.form + " + be + " + D.v3 + ". (not " + st.form + " " + D.be + ")" : D.ps + " → " + D.be + " + verb 3 (" + D.v3 + ")." + (st.by === "n" ? " We can leave out by + doer when it is not important." : ""),
            noteAr: st.form ? "مع الأفعال المساعدة: " + st.form + " + be + التصريف الثالث." : "المفعول به " + D.obj + " صار فاعلًا، ثم am أو is أو are، ثم التصريف الثالث " + D.v3 + "." };
        }
      },
      predict: {
        q: "Dishes should ____ prepared by families.", options: ["are", "be", "to be"], answer: 1,
        reveal: "{s:Dishes} {a:should be} {v:prepared} by families.", mistake: "Common mistake: using are or to be after a modal in the passive.",
        why: "Passive with a modal: modal + be + verb 3. After should, use be (not are, not to be).",
        whyAr: "المبني للمجهول مع الأفعال المساعدة: modal + be + التصريف الثالث. بعد should نستخدم be فقط."
      }
    }
  };
})();

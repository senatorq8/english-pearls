/* Extra Practice for the grammar lessons of Book 6A (not in the book; shown as "Extra Practice").
   lab:     a "Grammar Lab" — buttons / a slider change a pop-up sentence live, following the lesson's own rule box.
   predict: "Predict, Then Reveal" — one common mistake; the student predicts, then lifts a paper flap.
   Every sentence the lab can build was listed and checked (node tools/lab-dump.js g6). */
(function () {
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const NAMES = ["Ali", "Hamad", "Sara"];
  const low = (s) => (s === "I" || NAMES.indexOf(s) >= 0 ? s : s.charAt(0).toLowerCase() + s.slice(1));
  const THIRD = ["He", "She", "It", "Ali", "Hamad", "Sara", "My grandfather", "My father"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const PRON = { I: "I", You: "you", We: "we", They: "they", He: "he", She: "she", Sara: "she", Ali: "he" };
  const FORMS = [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Question" }];

  BOOK.labs = {
    /* ── Unit 1 · Lesson 2 · Past Simple (p. 22) ── */
    u1l2: {
      lab: {
        title: "Grammar Lab: The Past Machine",
        intro: "Choose a subject, a verb and a time. Is the verb regular (-ed) or irregular?",
        introAr: "اختر الفاعل والفعل والوقت. هل الفعل منتظم (ed) أم شاذ؟",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They", "My father"] },
          { id: "verb", label: "Verb", options: [{ v: "play", t: "play football" }, { v: "visit", t: "visit Failaka" }, { v: "cook", t: "cook a meal" }, { v: "study", t: "study English" }, { v: "eat", t: "eat dates" }, { v: "sleep", t: "sleep early" }, { v: "read", t: "read a story" }] },
          { id: "form", label: "Sentence", options: FORMS },
          { id: "time", label: "Time", kind: "slider", options: ["yesterday", "last night", "last year", "two days ago"] }
        ],
        build(st) {
          const V = { play: ["play", "ed", "football"], visit: ["visit", "ed", "Failaka"], cook: ["cook", "ed", "a meal"], study: ["stud", "ied", "English"], eat: ["ate", "", "dates"], sleep: ["slept", "", "early"], read: ["read", "", "a story"] }[st.verb];
          const reg = !!V[1], rest = V[2], base = st.verb;
          if (st.form === "+") return { s: "{s:" + st.subj + "} {v:" + V[0] + "}" + (reg ? "{x:" + V[1] + "}" : "") + " " + rest + " {t:" + st.time + "}.",
            badge: reg ? "regular: + ed" : "irregular: learn it!", badgeKind: reg ? "good" : "warn", rule: "{s:any subject} + {v:verb 2}",
            note: reg ? (base === "study" ? "study → studied (y → ied)." : base + " → " + base + "ed.") + " The same verb for everyone." : base + " → " + V[0] + (base === "read" ? " (same spelling, different sound: /red/)." : ". This verb is irregular.") + " The same verb for everyone.",
            noteAr: reg ? "فعل منتظم: نضيف ed، والفعل نفسه مع كل الفواعل." : "فعل شاذ: تصريفه الثاني " + V[0] + "، والفعل نفسه مع كل الفواعل." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:didn’t} {v:" + base + "} " + rest + " {t:" + st.time + "}.", badge: "didn’t + base verb", badgeKind: "warn", rule: "{n:didn’t} + {v:base verb}",
            note: "didn’t already shows the past. So the verb goes back to the base form: " + base + ".", noteAr: "كلمة didn’t تدل على الماضي، لذلك يرجع الفعل إلى صورته الأصلية " + base + "." };
          return { s: "{a:Did} {s:" + low(st.subj) + "} {v:" + base + "} " + rest + " {t:" + st.time + "}?", badge: "Did + subject + base verb", rule: "{a:Did} + {s:subject} + {v:base verb}?",
            note: "Did shows the past. The verb stays in the base form: " + base + ".", noteAr: "نبدأ السؤال بـ Did، ويبقى الفعل في صورته الأصلية." };
        }
      },
      predict: {
        q: "She didn’t ____ TV yesterday.", options: ["watched", "watch"], answer: 1,
        reveal: "{s:She} {n:didn’t} {v:watch} TV {t:yesterday}.", mistake: "Common mistake: using the past form after didn’t.",
        why: "didn’t already shows the past. After didn’t, use the base verb (no -ed).",
        whyAr: "كلمة didn’t تدل على الماضي، لذلك نستخدم بعدها الفعل الأصلي بدون ed."
      }
    },

    /* ── Unit 1 · Lesson 6 · Used to (p. 27) ── */
    u1l6: {
      lab: {
        title: "Grammar Lab: used to / use to",
        intro: "Change the sentence type. Watch the d come and go.",
        introAr: "غيّر نوع الجملة، وشاهد حرف d وهو يظهر ويختفي.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They", "People", "My grandfather"], start: "People" },
          { id: "act", label: "Past habit", options: [{ v: "{v:travel} by boat", t: "travel by boat" }, { v: "{v:live} in a clay house", t: "live in a clay house" }, { v: "{v:dive} for pearls", t: "dive for pearls" }, { v: "{v:fish} in the sea", t: "fish in the sea" }] },
          { id: "form", label: "Sentence", options: FORMS }
        ],
        build(st) {
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:use}{x:d} {a:to} " + st.act + ".", badge: "used to", badgeKind: "good", rule: "{s:any subject} + {a:used to} + {v:verb}",
            note: "used to = a past habit that is not true now. The same for every subject.", noteAr: "used to تعني عادة في الماضي لم تعد موجودة الآن، وهي نفسها مع كل الفواعل." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:didn’t} {a:use to} " + st.act + ".", badge: "didn’t use to · no d!", badgeKind: "warn", rule: "{n:didn’t} + {a:use to} + {v:verb}",
            note: "After didn’t, write use to (take away the d).", noteAr: "بعد didn’t نكتب use to بدون حرف d." };
          return { s: "{a:Did} {s:" + low(st.subj) + "} {a:use to} " + st.act + "?", badge: "Did … use to? · no d!", badgeKind: "warn", rule: "{a:Did} + {s:subject} + {a:use to} + {v:verb}?",
            note: "After Did, write use to (no d).", noteAr: "بعد Did نكتب use to بدون حرف d." };
        }
      },
      predict: {
        q: "Did people ____ travel by boat?", options: ["used to", "use to"], answer: 1,
        reveal: "{a:Did} {s:people} {a:use to} {v:travel} by boat?", mistake: "Common mistake: keeping the d after did / didn’t.",
        why: "After did or didn’t, write use to (no d). Did already shows the past.",
        whyAr: "بعد did أو didn’t نكتب use to بدون d، لأن did تدل على الماضي."
      }
    },

    /* ── Unit 2 · Lesson 2 · Preference Verbs (p. 36) ── */
    u2l2: {
      lab: {
        title: "Grammar Lab: What do you like doing?",
        intro: "Choose a person, a preference verb and an activity. Watch the -s and the -ing.",
        introAr: "اختر شخصًا وفعل تفضيل ونشاطًا، وشاهد s و ing.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Hamad"], start: "Hamad" },
          { id: "pv", label: "Preference verb", options: ["like", "enjoy", "love", "prefer"], start: "enjoy" },
          { id: "act", label: "Activity", options: [{ v: "draw", t: "draw" }, { v: "swim", t: "swim" }, { v: "take", t: "take photos" }, { v: "read", t: "read" }, { v: "ride", t: "ride a bike" }, { v: "go", t: "go to the cinema" }] },
          { id: "form", label: "Sentence", options: FORMS }
        ],
        build(st) {
          const A = { draw: ["drawing", "", "draw → drawing: just add -ing."], swim: ["swimming", "", "swim → swimming: double the m, then add -ing."], take: ["taking", "photos", "take → taking: drop the e, then add -ing."], read: ["reading", "", "read → reading: just add -ing."], ride: ["riding", "a bike", "ride → riding: drop the e, then add -ing."], go: ["going", "to the cinema", "go → going: just add -ing."] }[st.act];
          const ing = "{o:" + A[0] + "}" + (A[1] ? " " + A[1] : ""), th = isThird(st.subj);
          const after = st.pv === "enjoy" ? " After enjoy, use -ing only." : " After " + st.pv + " you can also use to + verb.";
          const afterAr = st.pv === "enjoy" ? " بعد enjoy نستخدم ing فقط." : " بعد " + st.pv + " يمكن أيضًا استخدام to مع الفعل.";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {v:" + st.pv + "}" + (th ? "{x:s}" : "") + " " + ing + ".", badge: th ? "he / she / it → " + st.pv + "s + -ing" : st.pv + " + -ing", badgeKind: "good",
            rule: th ? "{s:he / she / it} + {v:" + st.pv + "}{x:s} + {o:verb-ing}" : "{s:I / you / we / they} + {v:" + st.pv + "} + {o:verb-ing}", note: A[2] + after, noteAr: (th ? "مع he و she نضيف s لفعل التفضيل، ثم الفعل مع ing." : "فعل التفضيل بدون s، ثم الفعل مع ing.") + afterAr };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:" + (th ? "doesn’t" : "don’t") + "} {v:" + st.pv + "} " + ing + ".", badge: (th ? "doesn’t" : "don’t") + " + " + st.pv + " (no -s)", badgeKind: "warn",
            rule: "{n:don’t / doesn’t} + {v:" + st.pv + "} + {o:verb-ing}", note: "After doesn’t / don’t: " + st.pv + " has no -s. " + A[2], noteAr: "بعد don’t و doesn’t يأتي فعل التفضيل بدون s." };
          return { s: "{a:" + (th ? "Does" : "Do") + "} {s:" + low(st.subj) + "} {v:" + st.pv + "} " + ing + "?", badge: (th ? "Does" : "Do") + " … " + st.pv + " + -ing?", rule: "{a:Do / Does} + {s:subject} + {v:" + st.pv + "} + {o:verb-ing}?", note: A[2], noteAr: "نبدأ السؤال بـ Do أو Does، وفعل التفضيل بدون s." };
        }
      },
      predict: {
        q: "I enjoy ____ .", options: ["to swim", "swimming", "Both are correct"], answer: 1,
        reveal: "{s:I} {v:enjoy} {o:swimming}.", mistake: "Common mistake: using to after enjoy.",
        why: "After enjoy, use -ing only. (After like, both are correct: I like swimming. / I like to swim.)",
        whyAr: "بعد enjoy نستخدم ing فقط. أما بعد like فكلاهما صحيح: I like swimming و I like to swim."
      }
    },

    /* ── Unit 2 · Lesson 6 · First Conditional (p. 41) ── */
    u2l6: {
      lab: {
        title: "Grammar Lab: If … will …",
        intro: "Choose a person and a situation. Move the If part to the front or to the end.",
        introAr: "اختر شخصًا وموقفًا، وحرّك جملة If إلى البداية أو النهاية.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Sara"], start: "Sara" },
          { id: "sit", label: "Situation", options: [{ v: "late", t: "wake up late → miss the bus" }, { v: "study", t: "study hard → pass the exam" }, { v: "homework", t: "finish the homework → go to the park" }, { v: "london", t: "visit London → see Big Ben" }] },
          { id: "order", label: "Order", options: [{ v: "if1", t: "If part first" }, { v: "if2", t: "If part second" }] },
          { id: "short", label: "will", options: [{ v: "will", t: "will" }, { v: "ll", t: "’ll (short)" }] }
        ],
        build(st) {
          const X = { late: ["wake", "s", "up late", "miss", "the bus"], study: ["stud", "ies", "hard", "pass", "the exam"], homework: ["finish", "es", "the homework", "go", "to the park"], london: ["visit", "s", "London", "see", "Big Ben"] }[st.sit];
          const th = isThird(st.subj), base = st.sit === "study" ? "study" : X[0];
          const ifVerb = th ? "{v:" + X[0] + "}{x:" + X[1] + "}" : "{v:" + base + "}";
          const pr = PRON[st.subj];
          const subjFirst = st.order === "if1" ? (st.subj === "Sara" ? "Sara" : low(st.subj)) : st.subj;
          const resSubj = st.order === "if1" ? pr : subjFirst;
          const will = (who) => (st.short === "ll" && NAMES.indexOf(who) < 0 ? "{s:" + who + "}{a:’ll}" : "{s:" + who + "} {a:will}");
          const ifPart = "{c:If} {s:" + (st.order === "if1" ? subjFirst : pr) + "} " + ifVerb + " " + X[2];
          const result = will(st.order === "if1" ? resSubj : cap(resSubj)) + " {v:" + X[3] + "} " + X[4];
          const s = st.order === "if1" ? ifPart + ", " + result + "." : result + " " + ifPart.replace("{c:If}", "{c:if}") + ".";
          return { s, badge: "No will in the If part!", badgeKind: "warn", rule: "{c:If} + {v:present simple}, {a:will} + {v:base verb}",
            note: (st.short === "ll" && st.order === "if2" && st.subj === "Sara" ? "After a name we write will in full: Sara will. " : "") + (th ? "In the If part, " + st.subj + " → add -" + X[1] + ": " + (base === "study" ? "studies" : X[0] + X[1]) + ". " : "") + (st.order === "if1" ? "If part first → put a comma." : "If part second → no comma."),
            noteAr: "في جملة If نستخدم المضارع البسيط، وفي الجملة الأخرى will مع الفعل الأصلي. " + (st.order === "if1" ? "إذا بدأنا بـ If نضع فاصلة." : "إذا جاءت If في الوسط لا نضع فاصلة.") };
        }
      },
      predict: {
        q: "If it ____ tomorrow, we will stay at home.", options: ["will rain", "rains"], answer: 1,
        reveal: "{c:If} {s:it} {v:rains} {t:tomorrow}, {s:we} {a:will} {v:stay} at home.", mistake: "Common mistake: putting will in the If part.",
        why: "Never put will after If. Use the present simple: If it rains, … Then use will in the other part.",
        whyAr: "لا نضع will بعد If. نستخدم المضارع البسيط: If it rains، ثم will في الجزء الآخر."
      }
    },

    /* ── Unit 3 · Lesson 2 · Present Continuous (p. 50) ── */
    u3l2: {
      lab: {
        title: "Grammar Lab: What is happening now?",
        intro: "Choose a person, an action, the sentence type and a time word.",
        introAr: "اختر شخصًا ونشاطًا ونوع الجملة وكلمة الوقت.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They", "Ali"], start: "Ali" },
          { id: "act", label: "Action", options: [{ v: "riding a bike", t: "ride a bike" }, { v: "reading a story", t: "read a story" }, { v: "planting a tree", t: "plant a tree" }, { v: "playing football", t: "play football" }, { v: "sitting under a tree", t: "sit under a tree" }] },
          { id: "form", label: "Sentence", options: FORMS },
          { id: "time", label: "Time", kind: "slider", options: ["now", "right now", "at the moment", "today"] }
        ],
        build(st) {
          const p = st.act.split(" "), v = p[0], rest = p.slice(1).join(" ");
          const be = st.subj === "I" ? "am" : isThird(st.subj) ? "is" : "are";
          const neg = st.subj === "I" ? "am not" : be === "is" ? "isn’t" : "aren’t";
          const spell = { riding: "ride → riding: drop the e.", reading: "read → reading: add -ing.", planting: "plant → planting: add -ing.", playing: "play → playing: add -ing.", sitting: "sit → sitting: double the t." }[v];
          const tail = " " + rest + " {t:" + st.time + "}";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:" + be + "} {v:" + v + "}" + tail + ".", badge: "⏱ happening now", badgeKind: "good", rule: "{s:" + st.subj + "} + {a:" + be + "} + {v:verb-ing}", note: spell, noteAr: "نستخدم am مع I، و is مع he و she و it، و are مع we و you و they، ثم الفعل مع ing." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:" + neg + "} {v:" + v + "}" + tail + ".", badge: neg + " + verb-ing", badgeKind: "warn", rule: "{s:subject} + {n:am not / isn’t / aren’t} + {v:verb-ing}", note: spell, noteAr: "في النفي نضع not بعد am أو is أو are." };
          return { s: "{a:" + cap(be) + "} {s:" + low(st.subj) + "} {v:" + v + "}" + tail + "?", badge: cap(be) + " + subject + verb-ing?", rule: "{a:Am / Is / Are} + {s:subject} + {v:verb-ing}?", note: spell, noteAr: "في السؤال نبدأ بـ Am أو Is أو Are." };
        }
      },
      predict: {
        q: "The children ____ football now.", options: ["play", "are playing", "is playing"], answer: 1,
        reveal: "{s:The children} {a:are} {v:playing} football {t:now}.", mistake: "Common mistake: using the present simple for actions happening now.",
        why: "now → present continuous. The children = they → are + playing.",
        whyAr: "كلمة now تعني المضارع المستمر. The children = they، لذلك نستخدم are مع playing."
      }
    },

    /* ── Unit 3 · Lesson 6 · Future Simple (p. 55) ── */
    u3l6: {
      lab: {
        title: "Grammar Lab: Plans and Promises",
        intro: "Choose a person, will / won’t and an action. Then slide the time.",
        introAr: "اختر شخصًا و will أو won’t ونشاطًا، ثم حرّك الوقت.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They", "Ali"], start: "Ali" },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ will (plan)" }, { v: "-", t: "✖ won’t (promise not to)" }, { v: "?", t: "? Will …?" }] },
          { id: "act", label: "Action", options: [{ v: "{v:plant} a tree", t: "plant a tree" }, { v: "{v:recycle} bottles", t: "recycle bottles" }, { v: "{v:clean} the beach", t: "clean the beach" }, { v: "{v:save} water", t: "save water" }, { v: "{v:visit} Grandma", t: "visit Grandma" }] },
          { id: "time", label: "Time", kind: "slider", options: ["tonight", "tomorrow", "this weekend", "next week"] }
        ],
        build(st) {
          const th = isThird(st.subj);
          const n = th ? " Even with " + low(st.subj) + ": no -s after will." : "";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:will} " + st.act + " {t:" + st.time + "}.", badge: "will = a plan", badgeKind: "good", rule: "{s:any subject} + {a:will} + {v:base verb}", note: "will + base verb. No -s, no -ing, no to." + n, noteAr: "will مع كل الفواعل، وبعدها الفعل الأصلي بدون s وبدون ing وبدون to." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:won’t} " + st.act + " {t:" + st.time + "}.", badge: "won’t = will not", badgeKind: "warn", rule: "{s:any subject} + {n:won’t} + {v:base verb}", note: "won’t = will not. Then the base verb." + n, noteAr: "won’t = will not، وبعدها الفعل الأصلي." };
          return { s: "{a:Will} {s:" + low(st.subj) + "} " + st.act + " {t:" + st.time + "}?", badge: "Will + subject + base verb?", rule: "{a:Will} + {s:subject} + {v:base verb}?", note: "Start the question with Will.", noteAr: "نبدأ السؤال بـ Will." };
        }
      },
      predict: {
        q: "Ali will ____ tonight.", options: ["reads", "read", "reading"], answer: 1,
        reveal: "{s:Ali} {a:will} {v:read} {t:tonight}.", mistake: "Common mistake: adding -s or -ing after will.",
        why: "After will, use the base verb: no -s, no -ing.",
        whyAr: "بعد will نستخدم الفعل الأصلي بدون s وبدون ing."
      }
    },

    /* ── Unit 4 · Lesson 2 · Relative Pronouns (p. 64) ── */
    u4l2: {
      lab: {
        title: "Grammar Lab: Join two sentences",
        intro: "Choose a noun. Then try a relative pronoun. Is it right?",
        introAr: "اختر اسمًا ثم جرّب ضمير الوصل. هل هو صحيح؟",
        controls: [
          { id: "noun", label: "Noun", options: [{ v: "boy", t: "the boy (person)" }, { v: "teacher", t: "my teacher (person)" }, { v: "cat", t: "the cat (animal)" }, { v: "book", t: "a book (thing)" }, { v: "shop", t: "the shop (place)" }, { v: "park", t: "the park (place)" }, { v: "day", t: "the day (time)" }] },
          { id: "rp", label: "Try a pronoun", options: ["who", "which", "when", "where"] }
        ],
        build(st) {
          const N = {
            boy: ["This is the boy. The boy plays football.", "This is {o:the boy} ", " plays football.", "who", "the boy is a person"],
            teacher: ["This is my teacher. My teacher helps me with English.", "This is {o:my teacher} ", " helps me with English.", "who", "my teacher is a person"],
            cat: ["I saw the cat. The cat drank the milk.", "I saw {o:the cat} ", " drank the milk.", "which", "a cat is an animal"],
            book: ["I have a book. The book has many pictures.", "I have {o:a book} ", " has many pictures.", "which", "a book is a thing"],
            shop: ["This is the shop. I buy books in the shop.", "This is {o:the shop} ", " I buy books.", "where", "the shop is a place"],
            park: ["This is the park. We play in the park after school.", "This is {o:the park} ", " we play after school.", "where", "the park is a place"],
            day: ["Do you remember the day? We went to the zoo on that day.", "Do you remember {o:the day} ", " we went to the zoo?", "when", "the day is a time"]
          }[st.noun];
          const ok = st.rp === N[3];
          const AR = { who: "للأشخاص", which: "للأشياء والحيوانات", when: "للوقت", where: "للمكان" };
          return { from: N[0], fromLabel: "Two sentences", s: N[1] + (ok ? "{c:" : "{n:") + st.rp + "}" + N[2], badge: ok ? "✓ Right! " + st.rp + " → " + N[4] : "✗ Try again: " + N[4] + " → " + N[3], badgeKind: ok ? "good" : "bad",
            rule: "{c:who} people · {c:which} things / animals · {c:when} time · {c:where} place",
            note: ok ? "Correct! " + cap(N[4]) + ", so we use " + N[3] + "." : "Not this one. " + cap(N[4]) + ", so we use " + N[3] + ". Tap " + N[3] + ".",
            noteAr: N[3] + " تُستخدم " + AR[N[3]] + "." };
        }
      },
      predict: {
        q: "I saw a cat ____ drank the milk.", options: ["who", "which", "where"], answer: 1,
        reveal: "I saw {o:a cat} {c:which} drank the milk.", mistake: "Common mistake: using who for animals.",
        why: "who is for people. A cat is an animal, so we use which.",
        whyAr: "who للأشخاص فقط. القطة حيوان، لذلك نستخدم which."
      }
    },

    /* ── Unit 4 · Lesson 6 · Past Continuous with when / while (p. 69) ── */
    u4l6: {
      lab: {
        title: "Grammar Lab: when or while?",
        intro: "Choose a long action and a short action. Then try when and while, first and second.",
        introAr: "اختر حدثًا طويلًا وحدثًا قصيرًا، ثم جرّب when و while في البداية والوسط.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "He", "She", "We", "They"] },
          { id: "long", label: "Long action", options: [{ v: "reading a story", t: "read a story" }, { v: "cooking dinner", t: "cook dinner" }, { v: "walking home", t: "walk home" }, { v: "playing football", t: "play football" }, { v: "studying", t: "study" }] },
          { id: "short", label: "Short action", options: [{ v: "the phone|rang", t: "the phone rang" }, { v: "it|started to rain", t: "it started to rain" }, { v: "my friend|called", t: "my friend called" }, { v: "the lights|went out", t: "the lights went out" }] },
          { id: "con", label: "Connector", options: ["when", "while"] },
          { id: "order", label: "Order", options: [{ v: "1", t: "connector first" }, { v: "2", t: "connector second" }] }
        ],
        build(st) {
          const be = ["I", "He", "She"].indexOf(st.subj) >= 0 ? "was" : "were";
          const lp = st.long.split(" "), lv = lp[0], lr = lp.slice(1).join(" ");
          const sp = st.short.split("|");
          const L = (who) => "{s:" + who + "} {a:" + be + "} {v:" + lv + "}" + (lr ? " " + lr : "");
          const Sh = (first) => "{s:" + (first ? cap(sp[0]) : sp[0]) + "} {v:" + sp[1].split(" ")[0] + "}" + (sp[1].indexOf(" ") > 0 ? " " + sp[1].slice(sp[1].indexOf(" ") + 1) : "");
          const lowS = low(st.subj);
          let s;
          if (st.con === "when") s = st.order === "1" ? "{c:When} " + Sh(false) + ", " + L(lowS) + "." : L(st.subj) + " {c:when} " + Sh(false) + ".";
          else s = st.order === "1" ? "{c:While} " + L(lowS) + ", " + Sh(false) + "." : Sh(true) + " {c:while} " + L(lowS) + ".";
          return { s, badge: st.con === "when" ? "after when → past simple (short action)" : "after while → past continuous (long action)", badgeKind: st.con === "when" ? "warn" : "good",
            rule: "{s:I / he / she / it} + {a:was} · {s:we / you / they} + {a:were} + {v:verb-ing}",
            note: (st.order === "1" ? "The sentence starts with " + st.con + " → put a comma after the first part." : "No comma in the middle.") + " " + st.subj + " → " + be + ".",
            noteAr: (st.con === "when" ? "بعد when يأتي الحدث القصير بالماضي البسيط." : "بعد while يأتي الحدث الطويل بالماضي المستمر.") + (st.order === "1" ? " إذا بدأت الجملة بها نضع فاصلة." : "") };
        }
      },
      predict: {
        q: "While I ____ home, I saw my teacher.", options: ["walked", "was walking"], answer: 1,
        reveal: "{c:While} {s:I} {a:was} {v:walking} home, {s:I} {v:saw} my teacher.", mistake: "Common mistake: using the past simple after while.",
        why: "After while, use the past continuous for the long action: was walking.",
        whyAr: "بعد while نستخدم الماضي المستمر للحدث الطويل: was walking."
      }
    }
  };
})();

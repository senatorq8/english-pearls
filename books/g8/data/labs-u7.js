/* Extra Practice for the grammar lessons of Unit 7 (Grade 8, Module 3). Not in the book; shown as "Extra Practice".
   Every sentence the labs can build was listed and checked with: node tools/lab-dump.js g8 */
(function () {
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const low = (s) => (s === "I" ? s : s.charAt(0).toLowerCase() + s.slice(1));

  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 7 · Lesson 2 · Contrastive Connectors: although / however (p. 58) ── */
    u7l2: {
      lab: {
        title: "Grammar Lab: The Contrast Machine",
        intro: "Choose two ideas and a pattern. Watch where although, however and the comma go.",
        introAr: "اختر فكرتين ونمط الجملة، وانظر أين تأتي although و however والفاصلة.",
        controls: [
          { id: "idea", label: "Ideas", options: [
            { v: "rain", t: "raining / played football" },
            { v: "tired", t: "Ali was tired / finished homework" },
            { v: "phone", t: "old phone / works well" },
            { v: "study", t: "studied hard / didn’t pass" },
            { v: "tech", t: "technology (from the text)" }] },
          { id: "pat", label: "Pattern", options: [
            { v: "a1", t: "Although …, …" },
            { v: "a2", t: "… although …" },
            { v: "h", t: "… . However, …" }] }
        ],
        build(st) {
          // a = first (contrast) idea, b = surprising second idea; a2/b2 = the same ideas when the order changes (names first)
          const D = {
            rain: { a: "it was raining", b: "we played football", b2: "we played football", a2: "it was raining" },
            tired: { a: "Ali was tired", b: "he finished his homework", b2: "Ali finished his homework", a2: "he was tired" },
            phone: { a: "my phone is old", b: "it works very well", b2: "my phone works very well", a2: "it is old" },
            study: { a: "Sara studied hard", b: "she didn’t pass the test", b2: "Sara didn’t pass the test", a2: "she studied hard" },
            tech: { a: "using technology excessively is unhealthy", b: "using it in the right way is a huge benefit", b2: "using technology in the right way is a huge benefit", a2: "using it excessively is unhealthy" }
          }[st.idea];
          if (st.pat === "a1") return { s: "{c:Although} " + D.a + ", " + D.b + ".", from: cap(D.a) + ". " + cap(D.b) + ".", fromLabel: "Two ideas",
            badge: "Although + subject + verb + comma", badgeKind: "good", rule: "{c:Although} + {s:subject} + {v:verb} …, + second idea",
            note: "Although starts the sentence, so we put a comma after the first idea. No but!", noteAr: "عندما تأتي although في بداية الجملة نضع فاصلة بعد الفكرة الأولى، ولا نستخدم but." };
          if (st.pat === "a2") return { s: cap(D.b2) + " {c:although} " + D.a2 + ".", from: cap(D.a) + ". " + cap(D.b) + ".", fromLabel: "Two ideas",
            badge: "although in the middle · no comma", badgeKind: "good", rule: "main idea + {c:although} + {s:subject} + {v:verb}",
            note: "although is in the middle, so we do not need a comma. It still needs a subject and a verb after it.", noteAr: "عندما تأتي although في وسط الجملة لا نحتاج إلى فاصلة، وبعدها فاعل وفعل." };
          return { s: cap(D.a) + ". {c:However}, " + D.b + ".", from: cap(D.a) + ". " + cap(D.b) + ".", fromLabel: "Two ideas",
            badge: "However + comma", badgeKind: "warn", rule: "First sentence. {c:However}, + second sentence.",
            note: "However starts the second idea. Put a comma after however.", noteAr: "however تبدأ الفكرة الثانية، وبعدها فاصلة." };
        }
      },
      predict: {
        q: "Which sentence is correct?", options: ["Although it was raining, but we played football.", "Although it was raining, we played football."], answer: 1,
        reveal: "{c:Although} {s:it} {v:was} raining, {s:we} {v:played} football.", mistake: "Common mistake: using although and but in the same sentence.",
        why: "although already shows the contrast. We do not add but.",
        whyAr: "كلمة although تبيّن التناقض وحدها، فلا نضيف but في الجملة نفسها."
      }
    },

    /* ── Unit 7 · Lesson 5 · Present Continuous for Future Arrangements (p. 60) ── */
    u7l5: {
      lab: {
        title: "Grammar Lab: My Diary Planner",
        intro: "Choose a person, an arrangement, a day and the sentence type.",
        introAr: "اختر شخصًا وموعدًا ويومًا ونوع الجملة.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "He", "She", "We", "They", "Omar", "Fatma"], start: "Fatma" },
          { id: "act", label: "Arrangement", options: [
            { v: "seeing|the dentist", t: "see the dentist" },
            { v: "meeting|a friend", t: "meet a friend" },
            { v: "flying|to Dubai", t: "fly to Dubai" },
            { v: "visiting|grandma", t: "visit grandma" },
            { v: "playing|football", t: "play football" },
            { v: "working|on the English project", t: "work on the English project" }] },
          { id: "time", label: "When?", kind: "slider", options: ["tonight", "tomorrow", "on Friday", "on Saturday", "next week"] },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Question" }] }
        ],
        build(st) {
          const p = st.act.split("|"), ing = p[0], rest = p[1];
          const be = st.subj === "I" ? "am" : ["He", "She", "Omar", "Fatma"].indexOf(st.subj) >= 0 ? "is" : "are";
          const neg = be === "am" ? "am not" : be === "is" ? "isn’t" : "aren’t";
          const rule = "{s:" + st.subj + "} + {a:" + be + "} + {v:verb-ing} + {t:future time}";
          if (st.form === "+") return { s: "{s:" + st.subj + "} {a:" + be + "} {v:" + ing + "} " + rest + " {t:" + st.time + "}.", badge: "📅 future arrangement", badgeKind: "future", rule,
            note: st.subj + " → " + be + ". The time (" + st.time + ") shows it is an arranged plan, not happening now.", noteAr: "مع " + st.subj + " نستخدم " + be + ". كلمة الوقت " + st.time + " تبيّن أنها خطة مرتّبة في المستقبل." };
          if (st.form === "-") return { s: "{s:" + st.subj + "} {n:" + neg + "} {v:" + ing + "} " + rest + " {t:" + st.time + "}.", badge: "not planned", badgeKind: "warn", rule: "{s:" + st.subj + "} + {n:" + neg + "} + {v:verb-ing}",
            note: "Negative: " + neg + " + verb-ing.", noteAr: "النفي: " + neg + " + الفعل مع ing." };
          return { s: "{a:" + cap(be) + "} {s:" + low(st.subj) + "} {v:" + ing + "} " + rest + " {t:" + st.time + "}?", badge: "question", badgeKind: "good", rule: "{a:" + cap(be) + "} + {s:" + low(st.subj) + "} + {v:verb-ing} …?",
            note: "Question: " + cap(be) + " comes before the subject.", noteAr: "في السؤال يأتي " + cap(be) + " قبل الفاعل." };
        }
      },
      predict: {
        q: "You have an appointment with the dentist. Which is better? “I ____ the dentist tomorrow.”", options: ["see", "am seeing"], answer: 1,
        reveal: "{s:I} {a:am} {v:seeing} the dentist {t:tomorrow}.", mistake: "Common mistake: using the present simple for a personal arrangement.",
        why: "For a plan you have already arranged, use the present continuous: am / is / are + verb-ing + a future time.",
        whyAr: "للخطط التي رتّبناها مسبقًا نستخدم المضارع المستمر: am / is / are + الفعل مع ing + وقت في المستقبل."
      }
    }
  });
})();

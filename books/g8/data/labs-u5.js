BOOK.labs = Object.assign(BOOK.labs || {}, {
  /* Extra Practice for the Unit 5 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */

  /* ── Unit 5 · Lesson 2 · Comparative and Superlative (p. 42) ── */
  u5l2: {
    lab: {
      title: "Grammar Lab: The Comparing Machine",
      intro: "Choose an adjective. Slide from one thing → two things → the top of the group. Watch -er / -est or more / the most.",
      introAr: "اختر صفة وحرّك من شيء واحد إلى المقارنة بين شيئين ثم الأعلى في المجموعة.",
      controls: [
        { id: "adj", label: "Adjective", options: ["cheap", "old", "big", "hot", "easy", "expensive", "interesting", "good"], start: "cheap" },
        { id: "deg", label: "Compare", kind: "slider", options: [{ v: "0", t: "one thing" }, { v: "1", t: "two things" }, { v: "2", t: "the top of a group" }], start: "1" }
      ],
      build(st) {
        const A = {
          cheap: { a: "This bag", b: "that bag", g: "in the shop", c: ["cheap", "er"], s: ["cheap", "est"], kind: "short" },
          old: { a: "This market", b: "the new mall", g: "in Kuwait", c: ["old", "er"], s: ["old", "est"], kind: "short" },
          big: { a: "This island", b: "Failaka", g: "in Kuwait", c: ["bigg", "er"], s: ["bigg", "est"], kind: "double" },
          hot: { a: "Today", b: "yesterday", g: "of the year", c: ["hott", "er"], s: ["hott", "est"], kind: "double", day: true },
          easy: { a: "This exercise", b: "the other one", g: "in the book", c: ["easi", "er"], s: ["easi", "est"], kind: "y" },
          expensive: { a: "This bag", b: "that bag", g: "in the shop", kind: "long" },
          interesting: { a: "This museum", b: "the zoo", g: "in the city", kind: "long" },
          good: { a: "This restaurant", b: "that one", g: "in the city", c: ["better"], s: ["best"], kind: "irr" }
        }[st.adj];
        const isBe = A.day ? "is" : "is";
        const noun = { cheap: "bag", old: "market", big: "island", hot: "day", easy: "exercise", expensive: "bag", interesting: "museum", good: "restaurant" }[st.adj];
        const notes = {
          short: ["Short adjective: add -er / -est.", "صفة قصيرة: نضيف er أو est."],
          double: ["Short adjective ending in vowel + consonant: double the last letter (" + st.adj + " → " + (A.c ? A.c[0] + "er" : "") + ").", "صفة قصيرة تنتهي بحرف متحرك ثم ساكن: نضاعف الحرف الأخير."],
          y: ["Adjective ending in -y: y → i, then -er / -est (easier, the easiest).", "صفة تنتهي بـ y: نحوّلها إلى i ثم نضيف er أو est."],
          long: ["Long adjective: more … than / the most … .", "صفة طويلة: نستخدم more … than و the most."],
          irr: ["Irregular: good → better → the best.", "صفة شاذة: good ← better ← the best."]
        }[A.kind];
        const subj = A.day ? "Today" : A.a;
        if (st.deg === "0") return {
          s: "{s:" + subj + "} " + isBe + " {v:" + st.adj + "}.", badge: "one thing", badgeKind: "good",
          rule: "{s:subject} + is + {v:adjective}", note: "One thing: no comparing, use the adjective as it is.", noteAr: "شيء واحد: نستخدم الصفة كما هي."
        };
        if (st.deg === "1") {
          const comp = A.kind === "long" ? "{a:more} {v:" + st.adj + "}" : A.kind === "irr" ? "{v:" + A.c[0] + "}" : "{v:" + A.c[0] + "}{x:" + A.c[1] + "}";
          return {
            s: "{s:" + subj + "} " + (A.day ? "is" : "is") + " " + comp + " {c:than} " + A.b + ".", badge: "comparative + than", badgeKind: "good",
            rule: A.kind === "long" ? "{a:more} + {v:adjective} + {c:than}" : "{v:adjective-er} + {c:than}",
            note: "Two things → comparative + than. " + notes[0], noteAr: "المقارنة بين شيئين + than. " + notes[1]
          };
        }
        const sup = A.kind === "long" ? "{t:the most} {v:" + st.adj + "}" : A.kind === "irr" ? "{t:the} {v:" + A.s[0] + "}" : "{t:the} {v:" + A.s[0] + "}{x:" + A.s[1] + "}";
        return {
          s: "{s:" + subj + "} is " + sup + " " + noun + " " + A.g + ".", badge: "superlative", badgeKind: "future",
          rule: A.kind === "long" ? "{t:the most} + {v:adjective}" : "{t:the} + {v:adjective-est}",
          note: "The top of a group → the + superlative. " + notes[0], noteAr: "الأعلى في مجموعة: the + صيغة التفضيل. " + notes[1]
        };
      }
    },
    predict: {
      q: "Which sentence is correct?", options: ["Luxor is more older than Souq Al-Mubarakiya.", "Luxor is older than Souq Al-Mubarakiya."], answer: 1,
      reveal: "{s:Luxor} is {v:old}{x:er} {c:than} Souq Al-Mubarakiya.", mistake: "Common mistake: using more and -er together.",
      why: "old is a short adjective, so we only add -er. We never say “more older”.",
      whyAr: "old صفة قصيرة، فنضيف er فقط. لا نقول more older."
    }
  },

  /* ── Unit 5 · Lesson 4 · (not) as … as (p. 43) ── */
  u5l4: {
    lab: {
      title: "Grammar Lab: Equal or Not Equal?",
      intro: "Choose two things. Are they equal, or not equal?",
      introAr: "اختر شيئين: هل هما متساويان أم غير متساويين؟",
      controls: [
        { id: "pair", label: "Compare", options: [
          { v: "eng", t: "English / Maths" }, { v: "ex", t: "this exercise / the other one" }, { v: "day", t: "today / yesterday" },
          { v: "soup", t: "tomato soup / mushroom soup" }, { v: "tower", t: "left tower / right tower" }] },
        { id: "form", label: "Meaning", options: [{ v: "eq", t: "= equal (as … as)" }, { v: "neq", t: "≠ not equal (not as … as)" }] }
      ],
      build(st) {
        const P = {
          eng: { a: "English", b: "Maths", adj: "difficult", comp: "more difficult", B: "Maths" },
          ex: { a: "This exercise", b: "the other one", adj: "easy", comp: "easier", B: "The other one" },
          day: { a: "Today", b: "yesterday", adj: "windy", comp: "windier", B: "Yesterday", past: true },
          soup: { a: "The tomato soup", b: "the mushroom soup", adj: "delicious", comp: "more delicious", B: "The mushroom soup" },
          tower: { a: "The left tower", b: "the right tower", adj: "tall", comp: "taller", B: "The right tower" }
        }[st.pair];
        const bVerb = P.past ? "was" : "is";
        if (st.form === "eq") return {
          s: "{s:" + P.a + "} is {c:as} {o:" + P.adj + "} {c:as} " + P.b + ".", badge: "equal", badgeKind: "good",
          rule: "{c:as} + {o:adjective} + {c:as}",
          note: "as … as: the two things are equal in some way. The adjective stays the same: " + P.adj + ".",
          noteAr: "as … as تعني أن الشيئين متساويان، والصفة تبقى كما هي."
        };
        return {
          s: "{s:" + P.a + "} is {n:not} {c:as} {o:" + P.adj + "} {c:as} " + P.b + ".", badge: "not equal", badgeKind: "warn",
          rule: "{n:not} + {c:as} + {o:adjective} + {c:as}",
          note: "not as … as: they are not equal. It means: " + P.B + " " + bVerb + " " + P.comp + ".",
          noteAr: "not as … as تعني أنهما غير متساويين، فالشيء الثاني أكثر في هذه الصفة."
        };
      }
    },
    predict: {
      q: "Which sentence is correct?", options: ["Silver is not as heavier as gold.", "Silver is not as heavy as gold."], answer: 1,
      reveal: "{s:Silver} is {n:not} {c:as} {o:heavy} {c:as} gold.", mistake: "Common mistake: using the comparative (-er) between as … as.",
      why: "Between as and as we use the adjective as it is: as heavy as (not as heavier as).",
      whyAr: "بين as و as نستخدم الصفة في صورتها الأصلية: as heavy as."
    }
  }
});

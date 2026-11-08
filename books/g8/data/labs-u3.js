BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 3 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */

  /* ── Comparatives and superlatives: one natural sentence frame per adjective ── */
  // kind: one = 1 syllable (+er / +est), dbl = 1 syllable, double the last letter, y = 2 syllables ending in -y,
  //       long = 2 or more syllables (more / the most), irr = irregular
  const ADJ = {
    sweet:     { kind: "one",  stem: "sweet", base: ["A mango", "is", "sweet", "."], comp: ["A mango", "a lemon"], sup: ["A mango", "fruit in the basket"] },
    light:     { kind: "one",  stem: "light", base: ["A feather", "is", "light", "."], comp: ["A feather", "a book"], sup: ["A feather", "thing in my bag"] },
    strong:    { kind: "one",  stem: "strong", base: ["A lion", "is", "strong", "."], comp: ["A lion", "a cat"], sup: ["The lion", "animal in the zoo"] },
    hot:       { kind: "dbl",  stem: "hot", dbl: "t", base: ["Summer", "is", "hot", "."], comp: ["Summer", "winter"], sup: ["Summer", "season of the year"] },
    healthy:   { kind: "y",    stem: "health", base: ["An apple", "is", "healthy", "."], comp: ["An apple", "a chocolate bar"], sup: ["An apple", "snack on the table"] },
    happy:     { kind: "y",    stem: "happ", base: ["Ali", "is", "happy", "."], comp: ["Ali", "his brother"], sup: ["Ali", "boy in the class"] },
    important: { kind: "long", stem: "important", base: ["Sleep", "is", "important", "."], comp: ["Sleep", "video games"], sup: ["Sleep", "habit for good health"] },
    difficult: { kind: "long", stem: "difficult", base: ["This test", "is", "difficult", "."], comp: ["This test", "the last one"], sup: ["This test", "one of the year"] },
    good:      { kind: "irr",  comp: ["Water", "soda"], cw: "better", sw: "best", base: ["Water", "is", "good", " for you."], sup: ["Water", "drink for your body"] },
    bad:       { kind: "irr",  comp: ["Junk food", "fruit"], cw: "worse", sw: "worst", base: ["Junk food", "is", "bad", " for you."], sup: ["Junk food", "food for your body"] }
  };
  const RULE = {
    one:  "1 syllable: add -er / -est.",
    dbl:  "1 syllable ending in one vowel + one consonant: double the last letter, then add -er / -est.",
    y:    "2 syllables ending in -y: change y to i, then add -er / -est.",
    long: "2 or more syllables: use more / the most.",
    irr:  "Irregular: good → better → the best; bad → worse → the worst."
  };
  const RULE_AR = {
    one: "صفة من مقطع واحد: نضيف er للمقارنة و est للتفضيل.",
    dbl: "صفة من مقطع واحد تنتهي بحرف متحرك واحد ثم حرف ساكن: نضاعف الحرف الأخير ثم نضيف er أو est.",
    y: "صفة من مقطعين تنتهي بـ y: نحوّل y إلى i ثم نضيف er أو est.",
    long: "صفة من مقطعين أو أكثر: نستخدم more للمقارنة و the most للتفضيل.",
    irr: "صفة شاذّة: good ← better ← the best، و bad ← worse ← the worst."
  };
  function compForm(a) {
    if (a.kind === "one") return "{v:" + a.stem + "}{x:er}";
    if (a.kind === "dbl") return "{v:" + a.stem + "}{x:" + a.dbl + "er}";
    if (a.kind === "y") return "{v:" + a.stem + "}{x:ier}";
    if (a.kind === "long") return "{x:more} {v:" + a.stem + "}";
    return "{x:" + a.cw + "}";
  }
  function supForm(a) {
    if (a.kind === "one") return "{x:the} {v:" + a.stem + "}{x:est}";
    if (a.kind === "dbl") return "{x:the} {v:" + a.stem + "}{x:" + a.dbl + "est}";
    if (a.kind === "y") return "{x:the} {v:" + a.stem + "}{x:iest}";
    if (a.kind === "long") return "{x:the most} {v:" + a.stem + "}";
    return "{x:the} {x:" + a.sw + "}";
  }
  const plainOf = (s) => s.replace(/\{[a-z]:([^}]+)\}/g, "$1");

  /* ── Order of adjectives ── */
  const CATS = [
    { id: "op", label: "Opinion", tk: "q", opts: ["nice", "beautiful", "strange"] },
    { id: "size", label: "Size", tk: "t", opts: ["big", "small"] },
    { id: "age", label: "Age", tk: "a", opts: ["old", "new"] },
    { id: "shape", label: "Shape", tk: "c", opts: ["round", "square"] },
    { id: "col", label: "Colour", tk: "v", opts: ["red", "blue"] }
  ];
  const NONE = { v: "-", t: "— none —" };

  return {
    /* ── Unit 3 · Lesson 2 · Comparatives and Superlatives (p. 51) ── */
    u3l2: {
      lab: {
        title: "Grammar Lab: The Compare Machine",
        intro: "Choose an adjective. Slide from the adjective to the comparative and the superlative. Watch the word change.",
        introAr: "اختر صفة، ثم حرّك الشريط من الصفة إلى صيغة المقارنة ثم صيغة التفضيل، وشاهد الكلمة تتغيّر.",
        controls: [
          { id: "adj", label: "Adjective", options: ["sweet", "light", "strong", "hot", "healthy", "happy", "important", "difficult", "good", "bad"], start: "healthy" },
          { id: "form", label: "Form", kind: "slider", options: [{ v: "base", t: "adjective" }, { v: "comp", t: "comparative" }, { v: "sup", t: "superlative" }], start: "comp" }
        ],
        build(st) {
          const a = ADJ[st.adj], R = RULE[a.kind];
          if (st.form === "base") {
            const b = a.base;
            return { s: "{s:" + b[0] + "} " + b[1] + " {v:" + b[2] + "}" + (b[3] === "." ? "." : b[3]), badge: "one thing", badgeKind: "good",
              rule: "{v:" + b[2] + "} = the adjective",
              note: "The adjective describes one thing. Slide to compare two things, or one thing in a group.",
              noteAr: "الصفة تصف شيئًا واحدًا. حرّك الشريط للمقارنة بين شيئين أو لتفضيل شيء في مجموعة." };
          }
          if (st.form === "comp") {
            const word = compForm(a), s = "{s:" + a.comp[0] + "} is " + word + " {c:than} " + a.comp[1] + ".";
            return { s, badge: "⚖️ two things", badgeKind: "warn",
              rule: "{v:" + st.adj + "} → " + word + " {c:than}",
              note: "We compare two things → comparative + than. " + R + " (" + plainOf(word) + " than)",
              noteAr: "نقارن بين شيئين فنستخدم صيغة المقارنة مع than. " + RULE_AR[a.kind] };
          }
          const word = supForm(a), s = "{s:" + a.sup[0] + "} is " + word + " " + a.sup[1] + ".";
          return { s, badge: "🏆 one in a group", badgeKind: "future",
            rule: "{v:" + st.adj + "} → " + word,
            note: "One thing is above all the others in its group → the + superlative. " + R + " (" + plainOf(word) + ")",
            noteAr: "شيء واحد يتفوّق على كل ما في مجموعته فنستخدم the مع صيغة التفضيل. " + RULE_AR[a.kind] };
        }
      },
      predict: {
        q: "Which sentence is correct?", options: ["An apple is more healthier than a chocolate bar.", "An apple is healthier than a chocolate bar."], answer: 1,
        reveal: "{s:An apple} is {v:health}{x:ier} {c:than} a chocolate bar.", mistake: "Common mistake: using more and -er together.",
        why: "healthy ends in -y, so we change y to i and add -er: healthier. We do not add more as well.",
        whyAr: "الصفة healthy تنتهي بـ y، فنحوّلها إلى i ونضيف er لتصبح healthier، ولا نضيف more معها."
      }
    },

    /* ── Unit 3 · Lesson 6 · Order of Adjectives (p. 56) ── */
    u3l6: {
      lab: {
        title: "Grammar Lab: The Adjective Train",
        intro: "Choose an adjective for each type, in any order you like. The train always puts them in the right order: opinion, size, age, shape, colour.",
        introAr: "اختر صفة من كل نوع بأي ترتيب تريده، وسيضعها القطار دائمًا بالترتيب الصحيح: الرأي، الحجم، العمر، الشكل، اللون.",
        controls: CATS.map((c, i) => ({ id: c.id, label: c.label, options: [NONE].concat(c.opts.map((o) => ({ v: o, t: o }))), start: ["nice", "small", "-", "-", "blue"][i] })),
        build(st) {
          const used = CATS.filter((c) => st[c.id] !== "-");
          const words = used.map((c) => "{" + c.tk + ":" + st[c.id] + "}");
          const first = used.length ? st[used[0].id] : "bag";
          const art = /^[aeiou]/.test(first) ? "an" : "a";
          const s = "I have " + art + " " + (words.length ? words.join(" ") + " " : "") + "bag.";
          if (!used.length) return { s, badge: "no adjectives yet", badgeKind: "warn", rule: "a + {o:noun}",
            note: "Choose some adjectives. Remember the order: opinion, size, age, shape, colour.",
            noteAr: "اختر بعض الصفات، وتذكّر الترتيب: الرأي، الحجم، العمر، الشكل، اللون." };
          const rule = used.map((c) => "{" + c.tk + ":" + c.label.toLowerCase() + "}").join(" + ") + " + {o:noun}";
          return { s, badge: used.length + (used.length === 1 ? " adjective" : " adjectives") + " ✓", badgeKind: "good", rule,
            note: (used.length > 1 ? "The order is " + used.map((c) => c.label.toLowerCase()).join(" → ") + ", then the noun. " : "One adjective goes straight before the noun. ") + (art === "an" ? "We say “an” because “" + first + "” starts with a vowel sound." : "We say “a” because “" + first + "” starts with a consonant sound."),
            noteAr: (used.length > 1 ? "الترتيب: الرأي ثم الحجم ثم العمر ثم الشكل ثم اللون، ثم الاسم. " : "الصفة الواحدة تأتي قبل الاسم مباشرة. ") + (art === "an" ? "نستخدم an لأن الكلمة الأولى تبدأ بصوت متحرك." : "نستخدم a لأن الكلمة الأولى تبدأ بصوت ساكن.") };
        }
      },
      predict: {
        q: "Which is correct? She has a ____ bag.", options: ["blue small nice", "nice small blue"], answer: 1,
        reveal: "She has a {q:nice} {t:small} {v:blue} bag.", mistake: "Common mistake: putting the colour first.",
        why: "The order is opinion → size → colour: nice (opinion), small (size), blue (colour). The colour goes last, just before the noun.",
        whyAr: "الترتيب: الرأي ثم الحجم ثم اللون، فاللون يأتي في النهاية قبل الاسم مباشرة."
      }
    }
  };
})());

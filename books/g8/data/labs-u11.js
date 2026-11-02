/* Extra Practice for the grammar lessons of Unit 11 (not in the book; shown as "Extra Practice").
   Every sentence the labs can build was listed and checked (node tools/lab-dump.js g8). */
(function () {
  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 11 · Lesson 2 · Suffixes (-ment/ -able/ -ed/ -less/ -ful) (p. 83) ── */
    u11l2: {
      lab: {
        title: "Grammar Lab: The Suffix Factory",
        intro: "Choose a suffix. Watch it join the end of the word and change its meaning.",
        introAr: "اختر لاحقة وشاهدها تلتصق بآخر الكلمة وتغيّر معناها.",
        controls: [
          { id: "suf", label: "Suffix", options: [{ v: "ment", t: "-ment" }, { v: "able", t: "-able" }, { v: "ed", t: "-ed" }, { v: "less", t: "-less" }, { v: "ful", t: "-ful" }], start: "ful" },
          { id: "ex", label: "Example", options: [{ v: "0", t: "example 1" }, { v: "1", t: "example 2" }] }
        ],
        build(st) {
          const D = {
            ment: { m: "action or process", mAr: "فعل أو عملية", type: "noun", ex: [["improve", "The teacher wanted to see {o:improve}{x:ment} in my grades."], ["enjoy", "We had a lot of {o:enjoy}{x:ment} at the party."]] },
            able: { m: "can be done", mAr: "يمكن فعله", type: "adjective", ex: [["wash", "This jacket is {o:wash}{x:able}."], ["drink", "This water is clean. It is {o:drink}{x:able}."]] },
            ed: { m: "past tense verb", mAr: "فعل في الزمن الماضي", type: "past verb", ex: [["help", "Yesterday, my brother {v:help}{x:ed} me with my homework."], ["treat", "The doctors {v:treat}{x:ed} the patient from the inside."]] },
            less: { m: "without", mAr: "بدون", type: "adjective", ex: [["fear", "The {o:fear}{x:less} boy saved the cat."], ["use", "My old phone is broken. It is {o:use}{x:less} now."]] },
            ful: { m: "full of", mAr: "مليء بـ", type: "adjective", ex: [["help", "I like to be {o:help}{x:ful} at home."], ["care", "Be {o:care}{x:ful} when you cross the road."]] }
          }[st.suf];
          const e = D.ex[+st.ex], root = e[0], word = root + st.suf;
          return { s: e[1], badge: "-" + st.suf + " = " + D.m, badgeKind: st.suf === "less" ? "warn" : "good",
            rule: "{o:" + root + "} + {x:-" + st.suf + "} = {o:" + word + "}",
            note: root + " + -" + st.suf + " = " + word + " (" + D.type + "). -" + st.suf + " means “" + D.m + "”.",
            noteAr: root + " + ‎-" + st.suf + " = " + word + ". اللاحقة ‎-" + st.suf + " تعني: " + D.mAr + "." };
        }
      },
      predict: {
        q: "The ____ boy saved the cat.", options: ["fearful", "fearless", "feared"], answer: 1,
        reveal: "The {o:fear}{x:less} boy saved the cat.", mistake: "Common mistake: choosing -ful when the meaning is “without”.",
        why: "A boy who saves a cat is brave: he has no fear. -less = without, so fearless = without fear. fearful = afraid.",
        whyAr: "الولد الذي ينقذ القطة شجاع، أي بدون خوف. اللاحقة ‎-less تعني «بدون»، فـ fearless تعني شجاع، أما fearful فتعني خائف."
      }
    },

    /* ── Unit 11 · Lesson 5 · Double comparatives (p. 85) ── */
    u11l5: {
      lab: {
        title: "Grammar Lab: The more …, the more …",
        intro: "Choose an idea. Then change the If sentence into a double comparative.",
        introAr: "اختر فكرة، ثم حوّل جملة If إلى مقارنة مزدوجة.",
        controls: [
          { id: "idea", label: "Idea", options: [{ v: "read", t: "read / learn" }, { v: "grow", t: "grow / wise" }, { v: "exercise", t: "exercise / healthy" }, { v: "study", t: "study / good marks" }, { v: "leave", t: "leave early / arrive soon" }, { v: "sun", t: "bright sun / happy" }], start: "exercise" },
          { id: "form", label: "Form", options: [{ v: "if", t: "If sentence (1st conditional)" }, { v: "dc", t: "Double comparative" }], start: "dc" }
        ],
        build(st) {
          const D = {
            read: { iff: "{c:If} {s:I} {v:read} more books, {s:I} {a:will} {v:learn} more.", dc: "{t:The more} books {s:I} {v:read}, {t:the more} {s:I} {v:learn}.", c1: "more", c2: "more", w: "many → more; much → more" },
            grow: { iff: "{c:If} {s:we} {v:grow} older, {s:we} {a:will} {v:become} wiser.", dc: "{t:The older} {s:we} {v:grow}, {t:the wiser} {s:we} {v:become}.", c1: "older", c2: "wiser", w: "old → older; wise → wiser" },
            exercise: { iff: "{c:If} {s:we} {v:exercise} more, {s:we} {a:will} {v:become} healthier.", dc: "{t:The more} {s:we} {v:exercise}, {t:the healthier} {s:we} {v:become}.", c1: "more", c2: "healthier", w: "healthy → healthier" },
            study: { iff: "{c:If} {s:you} {v:study} harder, your marks {a:will} {v:be} better.", dc: "{t:The harder} {s:you} {v:study}, {t:the better} your marks {a:will} {v:be}.", c1: "harder", c2: "better", w: "hard → harder; good → better" },
            leave: { iff: "{c:If} {s:you} {v:leave} earlier, {s:you} {a:will} {v:arrive} sooner.", dc: "{t:The earlier} {s:you} {v:leave}, {t:the sooner} {s:you} {v:arrive}.", c1: "earlier", c2: "sooner", w: "early → earlier; soon → sooner" },
            sun: { iff: "{c:If} the sun {v:is} brighter, {s:I} {a:will} {v:be} happier.", dc: "{t:The brighter} the sun {v:is}, {t:the happier} {s:I} {a:will} {v:be}.", c1: "brighter", c2: "happier", w: "bright → brighter; happy → happier" }
          }[st.idea];
          if (st.form === "if") return { s: D.iff, badge: "1st conditional", badgeKind: "future",
            rule: "{c:If} + {v:present simple}, {a:will} + {v:base verb}",
            note: "First conditional: If + present simple, will + base verb. Now switch to “Double comparative” to say it another way.",
            noteAr: "الجملة الشرطية الأولى: If + المضارع البسيط، will + الفعل الأساسي. انتقل إلى المقارنة المزدوجة لتقول المعنى نفسه بطريقة أخرى." };
          return { from: D.iff, fromLabel: "If sentence", s: D.dc, badge: "The " + D.c1 + " …, the " + D.c2 + " …", badgeKind: "good",
            rule: "{t:The + comparative}, {t:the + comparative}",
            note: "Two comparatives, each with the: " + D.w + ". Put a comma between the two parts.",
            noteAr: "صيغتا مقارنة، وقبل كل واحدة the، وبين الجزأين فاصلة." };
        }
      },
      predict: {
        q: "The more you practise, the ____ you become.", options: ["good", "better", "best"], answer: 1,
        reveal: "{t:The more} you practise, {t:the better} you become.", mistake: "Common mistake: using the normal adjective or the superlative after the.",
        why: "A double comparative needs a comparative in both parts: good → better (not good, not best).",
        whyAr: "المقارنة المزدوجة تحتاج إلى صيغة المقارنة في الجزأين: good تصبح better، وليس good أو best."
      }
    }
  });
})();

/* Extra Practice for the grammar lessons of Unit 12 (not in the book; shown as "Extra Practice").
   Every sentence the labs can build was listed and checked (node tools/lab-dump.js g8). */
(function () {
  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 12 · Lesson 2 · Indefinite Pronouns (p. 89) ── */
    u12l2: {
      lab: {
        title: "Grammar Lab: The Pronoun Grid",
        intro: "Choose a row (every / some / any / no) and a column (person / place / thing). Read the sentence.",
        introAr: "اختر الصف (every / some / any / no) والعمود (شخص / مكان / شيء) واقرأ الجملة.",
        controls: [
          { id: "row", label: "Start", options: ["every", "some", "any", "no"], start: "every" },
          { id: "col", label: "Kind", options: [{ v: "body", t: "person (-body)" }, { v: "where", t: "place (-where)" }, { v: "thing", t: "thing (-thing)" }] }
        ],
        build(st) {
          const w = st.row + st.col;
          const S = {
            everybody: "{s:Everybody} {v:is} happy with the pictures of the Earth.",
            somebody: "{s:Somebody} {v:is} at the door.",
            anybody: "{a:Is} {s:anybody} at home?",
            nobody: "{s:Nobody} {v:lives} on the moon.",
            everywhere: "{s:I} {v:looked} {t:everywhere} for my keys.",
            somewhere: "Let’s {v:go} {t:somewhere} quiet.",
            anywhere: "{s:I} {n:can’t} {v:find} my book {t:anywhere}.",
            nowhere: "There {v:is} {t:nowhere} to sit.",
            everything: "{s:Everything} in this museum {v:is} from space.",
            something: "{s:I} {v:want} {o:something} to drink.",
            anything: "{a:Is} there {o:anything} I can do to help?",
            nothing: "There {v:is} {o:nothing} in the box."
          }[w];
          const kind = { body: "a person", where: "a place", thing: "a thing" }[st.col];
          const kindAr = { body: "شخص", where: "مكان", thing: "شيء" }[st.col];
          const M = { every: ["every- = all", "‎every- تعني «كل»."], some: ["some- = in positive sentences", "‎some- تُستخدم في الجمل المثبتة."], any: ["any- = in questions and negatives", "‎any- تُستخدم في الأسئلة والنفي."], no: ["no- = negative meaning, so the verb stays positive", "‎no- معناها منفي، لذلك يبقى الفعل مثبتًا."] }[st.row];
          return { s: S, badge: w + " = " + kind, badgeKind: st.row === "no" ? "warn" : st.row === "any" ? "future" : "good",
            rule: "{t:" + st.row + "} + {x:" + st.col + "} = {o:" + w + "}",
            note: w + " is " + kind + ". " + M[0] + ".", noteAr: "كلمة " + w + " تدل على " + kindAr + ". " + M[1] };
        }
      },
      predict: {
        q: "There isn’t ____ in the fridge.", options: ["nothing", "anything", "Both are correct"], answer: 1,
        reveal: "There {n:isn’t} {o:anything} in the fridge. = There {v:is} {o:nothing} in the fridge.", mistake: "Common mistake: two negatives together (isn’t nothing).",
        why: "isn’t is already negative, so we use anything. With nothing, the verb must be positive: There is nothing in the fridge.",
        whyAr: "isn’t منفية أصلًا، لذلك نستخدم anything. أما مع nothing فيكون الفعل مثبتًا: There is nothing in the fridge."
      }
    },

    /* ── Unit 12 · Lesson 4 · Need to … (p. 91) ── */
    u12l4: {
      lab: {
        title: "Grammar Lab: Necessary or not?",
        intro: "Choose a person, an action and the form. Is it necessary, not necessary, now or in the past?",
        introAr: "اختر شخصًا وفعلًا وصيغة: هل هو ضروري أم غير ضروري، الآن أم في الماضي؟",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "My brother"], start: "He" },
          { id: "act", label: "Action", options: [{ v: "study", t: "study for the test" }, { v: "feed", t: "feed the cats" }, { v: "fix", t: "fix the iPad" }, { v: "pay", t: "pay for the tickets" }, { v: "bring", t: "bring a pen" }] },
          { id: "form", label: "Form", options: [{ v: "p+", t: "✔ present: need to" }, { v: "p-", t: "✖ present: don’t need to" }, { v: "past+", t: "✔ past: needed to" }, { v: "past-", t: "✖ past: didn’t need to" }] }
        ],
        build(st) {
          const th = ["He", "She", "My brother"].indexOf(st.subj) >= 0;
          const A = { study: ["study", "for the test"], feed: ["feed", "the cats"], fix: ["fix", "the iPad"], pay: ["pay", "for the tickets"], bring: ["bring", "a pen"] }[st.act];
          const tail = " {v:" + A[0] + "} {o:" + A[1] + "}";
          const past = st.form.indexOf("past") === 0, neg = st.form.slice(-1) === "-";
          const time = past ? " {t:yesterday}" : " {t:today}";
          let aux, rule, note, noteAr;
          if (!past && !neg) { aux = "{a:" + (th ? "needs to" : "need to") + "}"; rule = th ? "{s:he / she / it} + {a:needs to} + {v:base verb}" : "{s:I / you / we / they} + {a:need to} + {v:base verb}"; note = (th ? "he / she / it → needs to. " : "") + "need to = it is necessary."; noteAr = "need to تعني «من الضروري»." + (th ? " ومع he و she و it نقول needs to." : ""); }
          else if (!past && neg) { aux = "{n:" + (th ? "doesn’t" : "don’t") + " need to}"; rule = th ? "{s:he / she / it} + {n:doesn’t need to} + {v:base verb}" : "{s:I / you / we / they} + {n:don’t need to} + {v:base verb}"; note = "Present negative: " + (th ? "doesn’t" : "don’t") + " need to = it is not necessary."; noteAr = "النفي في المضارع: " + (th ? "doesn’t" : "don’t") + " need to تعني «ليس ضروريًا»."; }
          else if (past && !neg) { aux = "{a:needed to}"; rule = "{s:subject} + {a:needed to} + {v:base verb}"; note = "Past: needed to (the same for every subject) = it was necessary."; noteAr = "في الماضي نقول needed to مع جميع الفاعلين، وتعني «كان ضروريًا»."; }
          else { aux = "{n:didn’t need to}"; rule = "{s:subject} + {n:didn’t need to} + {v:base verb}"; note = "Past negative: didn’t need to (the same for every subject) = it was not necessary."; noteAr = "النفي في الماضي: didn’t need to مع جميع الفاعلين، وتعني «لم يكن ضروريًا»."; }
          return { s: "{s:" + st.subj + "} " + aux + tail + time + ".", badge: (neg ? "not necessary" : "necessary") + (past ? " · past" : " · present"), badgeKind: neg ? "warn" : past ? "future" : "good", rule, note: note + " After need to: the base verb (" + A[0] + ").", noteAr: noteAr + " وبعد need to يأتي الفعل الأساسي " + A[0] + "." };
        }
      },
      predict: {
        q: "The iPad was working well. The technician ____ fix it.", options: ["didn’t needed to", "didn’t need to", "doesn’t need to"], answer: 1,
        reveal: "{s:The technician} {n:didn’t need to} {v:fix} it.", mistake: "Common mistake: adding -ed to need after didn’t.",
        why: "It is in the past (was working), so we use didn’t need to. After didn’t, need stays in the base form: not “needed”.",
        whyAr: "الجملة في الماضي، لذلك نستخدم didn’t need to. وبعد didn’t يبقى need في صورته الأساسية بدون ed."
      }
    }
  });
})();

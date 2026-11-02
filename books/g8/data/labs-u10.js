/* Extra Practice for the grammar lessons of Unit 10 (not in the book; shown as "Extra Practice").
   Every sentence the labs can build was listed and checked (node tools/lab-dump.js g8). */
(function () {
  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 10 · Lesson 2 · Reflexive Pronouns (p. 77) ── */
    u10l2: {
      lab: {
        title: "Grammar Lab: The Mirror Machine",
        intro: "Choose who did it, what they did, and how we say it. Watch the reflexive pronoun change.",
        introAr: "اختر الفاعل والفعل وطريقة القول، وشاهد الضمير الانعكاسي يتغيّر.",
        controls: [
          { id: "subj", label: "Subject", options: ["I", { v: "You1", t: "You (one person)" }, "He", "She", "We", { v: "You2", t: "You (two or more)" }, "They", "My sister", "My brothers"], start: "She" },
          { id: "act", label: "Action", options: [{ v: "cake", t: "made a cake" }, { v: "hw", t: "did the homework" }, { v: "room", t: "cleaned the room" }, { v: "bike", t: "fixed the bike" }] },
          { id: "use", label: "Meaning", options: [{ v: "by", t: "by … = alone" }, { v: "emph", t: "emphasis (really that person)" }] }
        ],
        build(st) {
          const R = { I: "myself", You1: "yourself", He: "himself", She: "herself", We: "ourselves", You2: "yourselves", They: "themselves", "My sister": "herself", "My brothers": "themselves" }[st.subj];
          const S = (st.subj === "You1" || st.subj === "You2") ? "You" : st.subj;
          const A = { cake: "{v:made} {o:a cake}", hw: "{v:did} {o:the homework}", room: "{v:cleaned} {o:the room}", bike: "{v:fixed} {o:the bike}" }[st.act];
          const plural = /selves$/.test(R);
          const rule = "{s:" + (st.subj === "You1" ? "you (one)" : st.subj === "You2" ? "you (two or more)" : S === "My sister" ? "my sister = she" : S === "My brothers" ? "my brothers = they" : S.toLowerCase() === "i" ? "I" : S.toLowerCase()) + "} → {x:" + R + "}";
          const noteBase = plural ? "More than one person → -selves (" + R + ")." : "One person → -self (" + R + ").";
          const noteArBase = plural ? "أكثر من شخص: نستخدم ‎-selves (" + R + ")." : "شخص واحد: نستخدم ‎-self (" + R + ").";
          if (st.use === "by") return { s: "{s:" + S + "} " + A + " by {x:" + R + "}.", badge: "by " + R + " = alone", badgeKind: "good", rule,
            note: noteBase + " by " + R + " = alone, without help.", noteAr: noteArBase + " و by " + R + " تعني بدون مساعدة." };
          return { s: "{s:" + S + "} " + A + " {x:" + R + "}.", badge: "emphasis", badgeKind: "warn", rule,
            note: noteBase + " Here " + R + " makes it strong: really " + (S === "I" ? "me" : S === "You" ? "you" : S === "We" ? "us" : S.toLowerCase() === "they" ? "them" : S === "He" ? "him" : S === "She" ? "her" : S.toLowerCase()) + ", not somebody else.",
            noteAr: noteArBase + " وهنا يفيد التأكيد: هو نفسه وليس شخصًا آخر." };
        }
      },
      predict: {
        q: "The children cleaned the classroom by ____.", options: ["themself", "theirselves", "themselves"], answer: 2,
        reveal: "{s:The children} {v:cleaned} {o:the classroom} by {x:themselves}.", mistake: "Common mistake: themself or theirselves for more than one person.",
        why: "The children = they. they → themselves. More than one person → -selves. “theirselves” is not a word.",
        whyAr: "The children تعني they، وضميرها الانعكاسي themselves. للجمع نستخدم ‎-selves، وكلمة theirselves غير موجودة."
      }
    },

    /* ── Unit 10 · Lesson 4 · a few / a little / many / much (pp. 78–79) ── */
    u10l4: {
      lab: {
        title: "Grammar Lab: Count it or not?",
        intro: "Choose a noun and the sentence type. Does it take a few / many or a little / much?",
        introAr: "اختر اسمًا ونوع الجملة: هل نستخدم a few / many أم a little / much؟",
        controls: [
          { id: "noun", label: "Noun", options: ["books", "photos", "friends", "dinars", "money", "time", "milk", "sand"], start: "books" },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Positive" }, { v: "-", t: "✖ Negative" }, { v: "?", t: "? Question" }] }
        ],
        build(st) {
          const unc = ["money", "time", "milk", "sand"].indexOf(st.noun) >= 0;
          const w = st.form === "+" ? (unc ? "a little" : "a few") : (unc ? "much" : "many");
          const s = st.form === "+" ? "{s:I} {v:have} {t:" + w + "} {o:" + st.noun + "}." : st.form === "-" ? "{s:I} {n:don’t have} {t:" + w + "} {o:" + st.noun + "}." : "{a:Do} {s:you} {v:have} {t:" + w + "} {o:" + st.noun + "}?";
          const kind = unc ? "uncountable" : "countable";
          return { s, badge: kind + " → " + (unc ? "a little / much" : "a few / many"), badgeKind: unc ? "warn" : "good",
            rule: unc ? "{t:much / a little} + {o:an uncountable noun}" : "{t:many / a few} + {o:a countable noun}",
            note: st.noun + " is " + kind + ". " + (st.form === "+" ? (unc ? "Positive: a little = a small amount." : "Positive: a few = a small number.") : (unc ? "much is mainly used in negative sentences and questions." : "Negative sentences and questions: many.")),
            noteAr: (unc ? "كلمة " + st.noun + " غير معدودة. " : "كلمة " + st.noun + " معدودة. ") + (st.form === "+" ? (unc ? "في الإثبات نستخدم a little (كمية قليلة)." : "في الإثبات نستخدم a few (عدد قليل).") : (unc ? "نستخدم much غالبًا في النفي والسؤال." : "نستخدم many في النفي والسؤال.")) };
        }
      },
      predict: {
        q: "There isn’t ____ milk in the fridge.", options: ["many", "much"], answer: 1,
        reveal: "There {n:isn’t} {t:much} {o:milk} in the fridge.", mistake: "Common mistake: using many with uncountable nouns.",
        why: "milk is uncountable. Uncountable + negative → much. many is only for countable nouns (many bottles).",
        whyAr: "كلمة milk غير معدودة، ومع النفي نستخدم much. أما many فهي للأسماء المعدودة فقط."
      }
    }
  });
})();

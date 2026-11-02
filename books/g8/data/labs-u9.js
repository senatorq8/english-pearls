/* Extra Practice for the grammar lessons of Unit 9 (Grade 8, Module 3). Not in the book; shown as "Extra Practice".
   Every sentence the labs can build was listed and checked with: node tools/lab-dump.js g8 */
(function () {
  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 9 · Lesson 2 · Reported Speech (imperatives) (p. 70) ── */
    u9l2: {
      lab: {
        title: "Grammar Lab: The Reporting Machine",
        intro: "Choose a command, positive or negative, the reporting verb and the listener. Watch the quotation marks disappear.",
        introAr: "اختر الأمر، مثبتًا أو منفيًا، وفعل النقل والمستمع، وشاهد علامات التنصيص تختفي.",
        controls: [
          { id: "cmd", label: "Command", options: [
            { v: "door", t: "close the door" },
            { v: "donkey", t: "get off the donkey" },
            { v: "listen", t: "listen to them" },
            { v: "books", t: "open your books" }] },
          { id: "pol", label: "Positive / negative", options: [{ v: "+", t: "✔ Do it" }, { v: "-", t: "✖ Don’t do it" }] },
          { id: "rv", label: "Reporting verb", options: [{ v: "asked", t: "asked (request)" }, { v: "told", t: "told (command)" }] },
          { id: "who", label: "Said to", options: [{ v: "son", t: "his son" }, { v: "me", t: "me" }, { v: "friends", t: "his friends" }] }
        ],
        build(st) {
          const L = { son: { obj: "his son", poss: "his", said: "his son" }, me: { obj: "me", poss: "my", said: "me" }, friends: { obj: "his friends", poss: "their", said: "his friends" } }[st.who];
          const C = {
            door: { v: "close", rest: " the door", restR: " the door" },
            donkey: { v: "get off", rest: " the donkey", restR: " the donkey" },
            listen: { v: "listen", rest: " to them", restR: " to them" },
            books: { v: "open", rest: " your books", restR: " " + L.poss + " books" }
          }[st.cmd];
          const neg = st.pol === "-";
          const direct = "“" + (neg ? "Don’t " + C.v : C.v.charAt(0).toUpperCase() + C.v.slice(1)) + C.rest + ",” he said to " + L.said + ".";
          const s = "{s:He} {v:" + st.rv + "} {o:" + L.obj + "} " + (neg ? "{n:not to}" : "{c:to}") + " {v:" + C.v + "}" + C.restR + ".";
          const pron = st.cmd === "books" ? " your → " + L.poss + "." : "";
          const pronAr = st.cmd === "books" ? " ونغيّر your إلى " + L.poss + "." : "";
          return { from: direct, fromLabel: "Direct speech", s, badge: neg ? "not to + base verb" : "to + base verb", badgeKind: neg ? "warn" : "good",
            rule: "{s:He} + {v:" + st.rv + "} + {o:person} + " + (neg ? "{n:not to}" : "{c:to}") + " + {v:base verb}",
            note: (neg ? "Don’t disappears → not to + " + C.v + "." : "Remove the quotation marks → to + " + C.v + ".") + (st.rv === "asked" ? " asked = a request." : " told = a command.") + pron,
            noteAr: (neg ? "تختفي Don’t ونستخدم not to + الفعل." : "نحذف علامات التنصيص ونستخدم to + الفعل.") + (st.rv === "asked" ? " asked للطلب." : " told للأمر.") + pronAr };
        }
      },
      predict: {
        q: "“Don’t touch the oven,” Mum said to me. Which sentence is correct?", options: ["Mum told me don’t touch the oven.", "Mum told me not to touch the oven."], answer: 1,
        reveal: "{s:Mum} {v:told} {o:me} {n:not to} {v:touch} the oven.", mistake: "Common mistake: keeping “don’t” in reported speech.",
        why: "In reported speech, Don’t + verb becomes not to + base verb.",
        whyAr: "في الكلام المنقول تتحوّل Don’t + الفعل إلى not to + الفعل في صورته الأساسية."
      }
    },

    /* ── Unit 9 · Lesson 4 · Phrasal Verbs (with look) (p. 72) ── */
    u9l4: {
      lab: {
        title: "Grammar Lab: One Verb, Many Meanings",
        intro: "Keep the verb look. Change the small word after it. Watch the meaning change.",
        introAr: "أبقِ الفعل look وغيّر الكلمة الصغيرة بعده، وشاهد كيف يتغيّر المعنى.",
        controls: [
          { id: "prep", label: "look + …", options: ["at", "for", "after", "up", "out"], start: "for" },
          { id: "ex", label: "Example", options: [{ v: "0", t: "example 1" }, { v: "1", t: "example 2" }] }
        ],
        build(st) {
          const D = {
            at: { m: "use your eyes to see", mAr: "ينظر إلى", ex: ["{s:The astronomer} {a:was} {v:looking at} {o:the sky}.", "{v:Look at} {o:this picture}!"] },
            for: { m: "search for", mAr: "يبحث عن", ex: ["{s:He} {a:was} {v:looking for} {o:something}.", "{s:He} {v:looked for} {o:his keys} everywhere."] },
            after: { m: "take care of", mAr: "يعتني بـ", ex: ["{a:Can} {s:you} {v:look after} {o:my cat} while I am on holiday?", "{s:My grandmother} {v:looks after} {o:the baby}."] },
            up: { m: "search in a reference book", mAr: "يبحث في كتاب مرجعي", ex: ["{v:Look} {o:it} {v:up} in a dictionary.", "{s:I} {v:looked up} {o:the word} in a dictionary."] },
            out: { m: "be careful", mAr: "انتبه / احذر", ex: ["{v:Look out}! There’s a boy crossing the street.", "{v:Look out}! The floor is wet."] }
          }[st.prep];
          return { s: D.ex[+st.ex], badge: "look " + st.prep + " = " + D.m, badgeKind: st.prep === "out" ? "warn" : "good",
            rule: "{v:look} + {c:" + st.prep + "} = " + D.m,
            note: st.prep === "up" ? "look up = search in a reference book. With it, say look it up." : "look " + st.prep + " = " + D.m + ".",
            noteAr: "look " + st.prep + " تعني: " + D.mAr + "." };
        }
      },
      predict: {
        q: "I can’t find my phone. Can you help me look ____ it?", options: ["after", "for", "up"], answer: 1,
        reveal: "{a:Can} {s:you} {v:help} {o:me} {v:look for} {o:it}?", mistake: "Common mistake: mixing up look for (search) and look after (take care of).",
        why: "You want to find the phone, so you search for it: look for.",
        whyAr: "أنت تريد أن تجد الهاتف، أي تبحث عنه، لذلك نستخدم look for."
      }
    }
  });
})();

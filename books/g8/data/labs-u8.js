/* Extra Practice for the grammar lessons of Unit 8 (Grade 8, Module 3). Not in the book; shown as "Extra Practice".
   Every sentence the labs can build was listed and checked with: node tools/lab-dump.js g8 */
(function () {
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  BOOK.labs = Object.assign(BOOK.labs || {}, {
    /* ── Unit 8 · Lesson 2 · Past Perfect Tense (p. 64) ── */
    u8l2: {
      lab: {
        title: "Grammar Lab: Which Came First?",
        intro: "Choose two past actions and a time word. The earlier action always takes had + past participle.",
        introAr: "اختر حدثين في الماضي وكلمة زمن. الحدث الأقدم يأخذ دائمًا had + التصريف الثالث.",
        controls: [
          { id: "ev", label: "Actions", options: [
            { v: "storm", t: "villagers left → storm started" },
            { v: "kids", t: "kids finished → I arrived" },
            { v: "train", t: "train left → we got to the station" },
            { v: "film", t: "film started → we arrived" }] },
          { id: "con", label: "Time word", options: ["after", "before", "by the time", "when"] }
        ],
        build(st) {
          // e = earlier action [subject, past participle, rest]; l = later action in the past simple [subject, verb, rest]
          const D = {
            storm: { e: ["the villagers", "left", " the forest"], l: ["the storm", "started", ""] },
            kids: { e: ["my kids", "finished", " their meal"], l: ["I", "arrived", ""] },
            train: { e: ["the train", "left", ""], l: ["we", "got", " to the station"] },
            film: { e: ["the film", "started", ""], l: ["we", "arrived", " at the cinema"] }
          }[st.ev];
          const pp = (c, already) => "{s:" + c(D.e[0]) + "} {a:had}" + (already ? " already" : "") + " {v:" + D.e[1] + "}" + D.e[2];
          const ps = (c) => "{s:" + c(D.l[0]) + "} {v:" + D.l[1] + "}" + D.l[2];
          const id = (x) => x;
          const from = "1️⃣ " + D.e[0] + " " + D.e[1] + D.e[2] + " → 2️⃣ " + D.l[0] + " " + D.l[1] + D.l[2];
          const base = { from, fromLabel: "Order of events", badgeKind: "good", note: "", noteAr: "" };
          if (st.con === "after") return Object.assign(base, { s: ps(cap) + " {c:after} " + pp(id) + ".", badge: "after + past perfect",
            rule: "past simple + {c:after} + {a:had} + {v:past participle}", note: "after comes before the earlier action: had " + D.e[1] + ".", noteAr: "بعد after يأتي الحدث الأقدم بصيغة had + التصريف الثالث." });
          if (st.con === "before") return Object.assign(base, { s: pp(cap) + " {c:before} " + ps(id) + ".", badge: "before + past simple",
            rule: "{a:had} + {v:past participle} + {c:before} + past simple", note: "before comes before the later action (past simple: " + D.l[1] + "). The earlier action uses had " + D.e[1] + ".", noteAr: "بعد before يأتي الحدث الأحدث بالماضي البسيط، والحدث الأقدم بصيغة had + التصريف الثالث." });
          if (st.con === "by the time") return Object.assign(base, { s: "{c:By the time} " + ps(id) + ", " + pp(id) + ".", badge: "By the time + past simple, past perfect",
            rule: "{c:By the time} + past simple, + {a:had} + {v:past participle}", note: "By the time + the later action (past simple), then a comma and the earlier action (had " + D.e[1] + ").", noteAr: "By the time + الحدث الأحدث بالماضي البسيط، ثم فاصلة، ثم الحدث الأقدم بالماضي التام." });
          return Object.assign(base, { s: "{c:When} " + ps(id) + ", " + pp(id, true) + ".", badge: "When … had already …", badgeKind: "warn",
            rule: "{c:When} + past simple, + {a:had already} + {v:past participle}", note: "had already shows the first action was finished before the second one.", noteAr: "كلمة already مع had تبيّن أن الحدث الأول انتهى قبل الحدث الثاني." });
        }
      },
      predict: {
        q: "By the time we got to the station, the train ____.", options: ["left", "had left"], answer: 1,
        reveal: "{c:By the time} {s:we} {v:got} to the station, {s:the train} {a:had} {v:left}.", mistake: "Common mistake: using the past simple for both actions.",
        why: "The train left first. The earlier action uses the past perfect: had + past participle (had left).",
        whyAr: "القطار غادر أولًا، والحدث الأقدم يأخذ الماضي التام: had + التصريف الثالث (had left)."
      }
    },

    /* ── Unit 8 · Lesson 5 · both … and (p. 66) ── */
    u8l5: {
      lab: {
        title: "Grammar Lab: Two Become One",
        intro: "Choose a pattern and two sentences. Watch both … and join them.",
        introAr: "اختر النمط وجملتين، وشاهد كيف تربطهما both … and.",
        controls: [
          { id: "kind", label: "What is different?", options: [{ v: "subj", t: "two subjects" }, { v: "adj", t: "two describing words" }] },
          { id: "subj", label: "Sentences", options: [
            { v: "tel", t: "telephone / telegraph" },
            { v: "kids", t: "Ali / Sara" },
            { v: "eng", t: "British / American people" },
            { v: "info", t: "books / the internet" }], show: (st) => st.kind === "subj" },
          { id: "adj", label: "Sentences", options: [
            { v: "baby", t: "smart / sensitive" },
            { v: "sky", t: "interesting / dangerous" },
            { v: "actors", t: "talented / skillful" },
            { v: "park", t: "green / quiet" }], show: (st) => st.kind === "adj" }
        ],
        build(st) {
          if (st.kind === "subj") {
            const D = {
              tel: { from: "The telephone was invented in the 19th century. The telegraph was invented in the 19th century.", s: "{c:Both} {s:the telephone} {c:and} {s:the telegraph} {v:were} invented in the 19th century.", ch: "was → were", chAr: "was ← were" },
              kids: { from: "Ali is clever. Sara is clever.", s: "{c:Both} {s:Ali} {c:and} {s:Sara} {v:are} clever.", ch: "is → are", chAr: "is ← are" },
              eng: { from: "British people speak English. American people speak English.", s: "{c:Both} {s:British people} {c:and} {s:American people} {v:speak} English.", ch: "speak stays the same (people is already plural)", chAr: "الفعل speak لا يتغيّر لأن people جمع أصلًا" },
              info: { from: "Books are sources of information. The internet is a source of information.", s: "{c:Both} {s:books} {c:and} {s:the internet} {v:are} sources of information.", ch: "is a source → are sources", chAr: "is a source ← are sources" }
            }[st.subj];
            return { from: D.from, fromLabel: "Two sentences", s: D.s, badge: "Both + A + and + B + plural verb", badgeKind: "good",
              rule: "{c:Both} + {s:A} + {c:and} + {s:B} + {v:plural verb}", note: "Two subjects = plural: " + D.ch + ".", noteAr: "فاعلان = جمع: " + D.chAr + "." };
          }
          const D = {
            baby: { from: "The baby is smart. The baby is sensitive.", s: "{s:The baby} {v:is} {c:both} smart {c:and} sensitive." },
            sky: { from: "Sky diving is interesting. Sky diving is dangerous.", s: "{s:Sky diving} {v:is} {c:both} interesting {c:and} dangerous." },
            actors: { from: "Famous actors are talented. Famous actors are skillful.", s: "{s:Famous actors} {v:are} {c:both} talented {c:and} skillful." },
            park: { from: "The park is green. The park is quiet.", s: "{s:The park} {v:is} {c:both} green {c:and} quiet." }
          }[st.adj];
          return { from: D.from, fromLabel: "Two sentences", s: D.s, badge: "same subject · verb does not change", badgeKind: "warn",
            rule: "{s:subject} + {v:verb} + {c:both} + adjective + {c:and} + adjective", note: "The subject is the same, so we write it once. Put both … and around the two describing words.", noteAr: "الفاعل نفسه فنكتبه مرة واحدة، ونضع both … and حول الصفتين." };
        }
      },
      predict: {
        q: "Both Ali and Sara ____ clever.", options: ["is", "are"], answer: 1,
        reveal: "{c:Both} {s:Ali} {c:and} {s:Sara} {v:are} clever.", mistake: "Common mistake: keeping the singular verb (is) after two names.",
        why: "Both Ali and Sara = two people, so the verb is plural: are.",
        whyAr: "Both Ali and Sara تعني شخصين، لذلك نستخدم فعل الجمع are."
      }
    }
  });
})();

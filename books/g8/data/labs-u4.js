BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 4 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */
  const PLURAL = ["You", "We", "They", "My friends"];
  const WAS = (s) => (PLURAL.indexOf(s) >= 0 ? "were" : "was");
  const low = (s) => (s === "I" ? "I" : s.charAt(0).toLowerCase() + s.slice(1));

  return {
    /* ── Unit 4 · Lesson 2 · Past Continuous (as/ while/ when) (p. 65) ── */
    u4l2: {
      lab: {
        title: "Grammar Lab: The Long Action and the Short Action",
        intro: "Choose a person, a long action and a short action. Then choose when, while or as. Watch the sentence change.",
        introAr: "اختر شخصًا وحدثًا طويلًا وحدثًا قصيرًا، ثم اختر when أو while أو as، وشاهد الجملة تتغيّر.",
        controls: [
          { id: "subj", label: "Person", options: ["I", "You", "We", "They", "He", "She", "My brother", "My friends"], start: "My brother" },
          { id: "act", label: "Long action", options: [{ v: "walk", t: "walk home" }, { v: "football", t: "play football" }, { v: "cook", t: "cook dinner" }, { v: "study", t: "study for a test" }, { v: "fix", t: "fix the car" }, { v: "tv", t: "watch TV" }], start: "football" },
          { id: "ev", label: "Short action", options: [{ v: "storm", t: "the sandstorm started" }, { v: "lights", t: "the lights went out" }, { v: "phone", t: "the phone rang" }] },
          { id: "link", label: "Linking word", options: [{ v: "when", t: "… when …" }, { v: "When", t: "When …, …" }, { v: "while", t: "While …, …" }, { v: "as", t: "As …, …" }] }
        ],
        build(st) {
          const A = { walk: ["walking", " home"], football: ["playing", " football"], cook: ["cooking", " dinner"], study: ["studying", " for a test"], fix: ["fixing", " the car"], tv: ["watching", " TV"] }[st.act];
          const E = { storm: ["the sandstorm", "started"], lights: ["the lights", "went out"], phone: ["the phone", "rang"] }[st.ev];
          const be = WAS(st.subj);
          const longPart = (S) => "{s:" + S + "} {a:" + be + "} {v:" + A[0] + "}" + A[1];
          const shortPart = (S) => S + " {v:" + E[1] + "}";
          const base = { badge: "long: " + be + " + -ing · short: past simple", badgeKind: "good" };
          if (st.link === "when") return Object.assign({ s: longPart(st.subj) + " {c:when} " + shortPart(E[0]) + ".",
            rule: "{a:was / were} + {v:verb-ing} + {c:when} + {v:past simple}",
            note: "The long action is in the past continuous (" + be + " " + A[0] + "). The short action after when is in the past simple (" + E[1] + "). No comma is needed.",
            noteAr: "الحدث الطويل بالماضي المستمر، والحدث القصير بعد when بالماضي البسيط، ولا نحتاج فاصلة هنا." }, base);
          if (st.link === "When") return Object.assign({ s: "{c:When} " + shortPart(E[0]) + ", " + longPart(low(st.subj)) + ".",
            rule: "{c:When} + {v:past simple}, {a:was / were} + {v:verb-ing}",
            note: "When can start the sentence. Put a comma after the first part. The meaning does not change.",
            noteAr: "يمكن أن تبدأ الجملة بـ When، ونضع فاصلة بعد الجزء الأول، والمعنى لا يتغيّر." }, base);
          const L = st.link === "while" ? "While" : "As";
          return Object.assign({ s: "{c:" + L + "} " + longPart(low(st.subj)) + ", " + shortPart(E[0]) + ".",
            rule: "{c:" + L + "} + {a:was / were} + {v:verb-ing}, {v:past simple}",
            note: L + " goes before the long action (past continuous). Put a comma after the first part, like the book: While I was doing my English project, my friend called me.",
            noteAr: "تأتي " + L + " قبل الحدث الطويل (الماضي المستمر)، ونضع فاصلة بعد الجزء الأول." }, base);
        }
      },
      predict: {
        q: "I ____ my homework when the lights went out.", options: ["did", "was doing"], answer: 1,
        reveal: "{s:I} {a:was} {v:doing} my homework {c:when} the lights {v:went} out.", mistake: "Common mistake: using the past simple for the long action.",
        why: "Doing homework is the long action that was happening, so we use was + verb-ing. The lights went out is the short action (past simple).",
        whyAr: "حلّ الواجب حدث طويل كان مستمرًا، فنستخدم was + ing، وانقطاع الكهرباء حدث قصير بالماضي البسيط."
      }
    },

    /* ── Unit 4 · Lesson 6 · Passive Voice (Past Simple) (p. 70) ── */
    u4l6: {
      lab: {
        title: "Grammar Lab: Active ➜ Passive",
        intro: "Choose a sentence. Switch from active to passive. Then show or hide the doer (by …).",
        introAr: "اختر جملة، وحوّلها من المبني للمعلوم إلى المبني للمجهول، ثم أظهر الفاعل (by …) أو أخفِه.",
        controls: [
          { id: "item", label: "Sentence", options: [
            { v: "mosque", t: "the mosque" }, { v: "jobs", t: "new jobs" }, { v: "oil", t: "the first oil field" }, { v: "bridges", t: "the bridges" },
            { v: "car", t: "my car" }, { v: "paintings", t: "the paintings" }, { v: "towers", t: "Kuwait Towers" }], start: "mosque" },
          { id: "voice", label: "Voice", options: [{ v: "active", t: "active" }, { v: "passive", t: "passive" }], start: "passive" },
          { id: "by", label: "Doer", options: [{ v: "yes", t: "with by + doer" }, { v: "no", t: "without the doer" }], show: (st) => st.voice === "passive" }
        ],
        build(st) {
          // [doer (active subject), active verb, object (active), passive subject, was/were, participle, time/place, doer after by]
          const D = {
            mosque: ["Engineers", "built", "the mosque", "The mosque", "was", "built", " in 1998", "engineers"],
            jobs: ["The government", "created", "new jobs", "New jobs", "were", "created", "", "the government"],
            oil: ["Engineers", "discovered", "the first oil field", "The first oil field", "was", "discovered", "", "engineers"],
            bridges: ["Workers", "built", "the bridges", "The bridges", "were", "built", " last year", "workers"],
            car: ["A mechanic", "repaired", "my car", "My car", "was", "repaired", " last week", "a mechanic"],
            paintings: ["The school", "displayed", "beautiful paintings", "Beautiful paintings", "were", "displayed", " in the Art Fair", "the school"],
            towers: ["Engineers", "built", "Kuwait Towers", "Kuwait Towers", "were", "built", " in 1979", "engineers"]
          }[st.item];
          const active = "{s:" + D[0] + "} {v:" + D[1] + "} {o:" + D[2] + "}" + D[6] + ".";
          if (st.voice === "active") return { s: active, badge: "active: who did it?", badgeKind: "warn",
            rule: "{s:doer} + {v:past simple} + {o:object}",
            note: "In the active sentence the doer (" + D[0].toLowerCase() + ") is the subject. Switch to passive to focus on " + D[2] + ".",
            noteAr: "في الجملة المبنية للمعلوم يكون الفاعل في البداية. حوّلها إلى المبني للمجهول لتركّز على الحدث." };
          const by = st.by === "yes" ? " by " + D[7] : "";
          const plural = D[4] === "were";
          return { from: active, fromLabel: "Active", s: "{o:" + D[3] + "} {a:" + D[4] + "} {v:" + D[5] + "}" + D[6] + by + ".",
            badge: "passive: " + D[4] + " + past participle", badgeKind: "good",
            rule: "{o:" + (plural ? "plural" : "singular") + "} + {a:" + D[4] + "} + {v:past participle}" + (by ? " + by + doer" : ""),
            note: "“" + D[2] + "” becomes the subject. " + (plural ? "It is plural → were. " : "It is singular → was. ") + "“" + D[5] + "” is the past participle." + (by ? " by + doer tells us who did it." : " We do not need the doer: the action is more important."),
            noteAr: (plural ? "الفاعل الجديد جمع فنستخدم were" : "الفاعل الجديد مفرد فنستخدم was") + "، ثم التصريف الثالث للفعل." + (by ? " ونضيف by + الفاعل لنعرف من قام بالفعل." : " ولا نحتاج ذكر الفاعل لأن الحدث أهم.") };
        }
      },
      predict: {
        q: "The bridges ____ last year.", options: ["was built", "were built", "were build"], answer: 1,
        reveal: "{o:The bridges} {a:were} {v:built} last year.", mistake: "Common mistakes: was with a plural subject, or the base verb instead of the past participle.",
        why: "The bridges is plural → were. Then use the past participle: build → built.",
        whyAr: "كلمة bridges جمع فنستخدم were، ثم التصريف الثالث للفعل built وليس build."
      }
    }
  };
})());

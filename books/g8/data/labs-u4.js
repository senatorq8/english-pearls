BOOK.labs = Object.assign(BOOK.labs || {}, {
  /* Extra Practice for the Unit 4 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */

  /* ── Unit 4 · Lesson 2 · The Passive Voice (Past Simple) (p. 36) ── */
  u4l2: {
    lab: {
      title: "Grammar Lab: The Passive Machine",
      intro: "Choose a sentence. Switch between active and passive. Watch the object move to the front.",
      introAr: "اختر جملة وبدّل بين المبني للمعلوم والمبني للمجهول، وشاهد المفعول به ينتقل إلى البداية.",
      controls: [
        { id: "ex", label: "Sentence", options: [
          { v: "school", t: "a free school" }, { v: "test", t: "the test" }, { v: "pictures", t: "some pictures" },
          { v: "soldiers", t: "the injured soldiers" }, { v: "emails", t: "the emails" }], start: "school" },
        { id: "voice", label: "Voice", options: [{ v: "act", t: "Active" }, { v: "pas", t: "Passive" }], start: "pas" },
        { id: "by", label: "The doer", options: [{ v: "yes", t: "with by + doer" }, { v: "no", t: "without the doer" }], show: (st) => st.voice === "pas" }
      ],
      build(st) {
        const D = {
          school: { doer: "Clara", verb: "opened", obj: "a free school", Obj: "A free school", be: "was", pp: "opened", rest: "" },
          test: { doer: "The teacher", verb: "cancelled", obj: "the test", Obj: "The test", be: "was", pp: "cancelled", rest: "" },
          pictures: { doer: "My brother", verb: "took", obj: "some pictures", Obj: "Some pictures", be: "were", pp: "taken", rest: " in the old town" },
          soldiers: { doer: "Clara's organisation", verb: "cared for", obj: "the injured soldiers", Obj: "The injured soldiers", be: "were", pp: "cared for", rest: "" },
          emails: { doer: "Ahmed", verb: "sent", obj: "the emails", Obj: "The emails", be: "were", pp: "sent", rest: " yesterday" }
        }[st.ex];
        const low = (s) => (s === "Clara" || s === "Ahmed" || s === "Clara's organisation" ? s : s.charAt(0).toLowerCase() + s.slice(1));
        const active = "{s:" + D.doer + "} {v:" + D.verb + "} {o:" + D.obj + "}" + D.rest + ".";
        if (st.voice === "act") return {
          s: active, badge: "active", badgeKind: "good",
          rule: "{s:doer} + {v:past simple} + {o:object}",
          note: "Active: the doer (" + D.doer + ") comes first.",
          noteAr: "المبني للمعلوم: الفاعل يأتي أولًا."
        };
        const plural = D.be === "were";
        const byPart = st.by === "yes" ? " {t:by " + low(D.doer) + "}" : "";
        const s = "{o:" + D.Obj + "} {a:" + D.be + "} {v:" + D.pp + "}" + (st.ex === "emails" ? byPart + D.rest : D.rest + byPart) + ".";
        return {
          from: active, fromLabel: "Active",
          s, badge: "passive · " + D.be, badgeKind: st.by === "yes" ? "good" : "warn",
          rule: "{o:object} + {a:was / were} + {v:past participle}" + (st.by === "yes" ? " + {t:by + doer}" : ""),
          note: (plural ? D.Obj + " = more than one → were. " : D.Obj + " = one thing → was. ") + (D.verb === D.pp ? D.pp + " is the past participle." : D.verb + " → " + D.pp + " (past participle).") + (st.by === "yes" ? "" : " We left out the doer: the action is more important."),
          noteAr: (plural ? "الجمع ← were. " : "المفرد ← was. ") + "بعدها التصريف الثالث للفعل" + (st.by === "yes" ? " ثم by + الفاعل." : "، وحذفنا الفاعل لأن الحدث أهم.")
        };
      }
    },
    predict: {
      q: "Which sentence is correct?", options: ["Some pictures was taken in the old town.", "Some pictures were taken in the old town."], answer: 1,
      reveal: "{o:Some pictures} {a:were} {v:taken} in the old town.", mistake: "Common mistake: using was with a plural subject.",
      why: "Some pictures = more than one, so we use were + the past participle (taken).",
      whyAr: "Some pictures جمع، لذلك نستخدم were ثم التصريف الثالث taken."
    }
  },

  /* ── Unit 4 · Lesson 5 · Past Continuous Tense (p. 38) ── */
  u4l5: {
    lab: {
      title: "Grammar Lab: Long Action, Short Action",
      intro: "Choose who, the long action and the short action. Then switch between while and when.",
      introAr: "اختر الفاعل والحدث الطويل والحدث القصير، ثم بدّل بين while و when.",
      controls: [
        { id: "subj", label: "Who?", options: ["I", "He", "She", "We", "They", "My sister"], start: "I" },
        { id: "long", label: "Long action", options: [{ v: "watch", t: "watch TV" }, { v: "walk", t: "walk home" }, { v: "play", t: "play football" }, { v: "cook", t: "cook dinner" }] },
        { id: "short", label: "Short action", options: [{ v: "phone", t: "the phone rang" }, { v: "rain", t: "it started to rain" }, { v: "lights", t: "the lights went out" }, { v: "friend", t: "my friend arrived" }] },
        { id: "link", label: "Linker", options: [{ v: "while", t: "while" }, { v: "when", t: "when" }] }
      ],
      build(st) {
        const ING = { watch: "watching TV", walk: "walking home", play: "playing football", cook: "cooking dinner" }[st.long];
        const SH = { phone: "the phone rang", rain: "it started to rain", lights: "the lights went out", friend: "my friend arrived" }[st.short];
        const SHt = { phone: "{s:the phone} {v:rang}", rain: "{s:it} {v:started} to rain", lights: "{s:the lights} {v:went out}", friend: "{s:my friend} {v:arrived}" }[st.short];
        const be = ["I", "He", "She", "My sister"].indexOf(st.subj) >= 0 ? "was" : "were";
        const parts = ING.split(" "), v = parts[0], rest = parts.slice(1).join(" ");
        const lowSubj = st.subj === "I" ? "I" : st.subj.charAt(0).toLowerCase() + st.subj.slice(1);
        if (st.link === "while") return {
          s: "{c:While} {s:" + lowSubj + "} {a:" + be + "} {v:" + v + "} " + rest + ", " + SHt + ".",
          badge: "while + past continuous", badgeKind: "good",
          rule: "{c:While} + {a:was / were} + {v:verb-ing}, + {v:past simple}",
          note: "While goes with the long action: " + lowSubj + " " + be + " " + v + ". The short action (" + SH + ") is in the past simple.",
          noteAr: "while تأتي مع الحدث الطويل (الماضي المستمر)، والحدث القصير بالماضي البسيط."
        };
        return {
          s: "{s:" + st.subj + "} {a:" + be + "} {v:" + v + "} " + rest + " {c:when} " + SHt + ".",
          badge: "when + past simple", badgeKind: "good",
          rule: "{a:was / were} + {v:verb-ing} + {c:when} + {v:past simple}",
          note: "When goes with the short action: " + SH + ". The long action is in the past continuous: " + be + " " + v + ".",
          noteAr: "when تأتي مع الحدث القصير (الماضي البسيط)، والحدث الطويل بالماضي المستمر."
        };
      }
    },
    predict: {
      q: "Which sentence is correct?", options: ["They was playing football when it started to rain.", "They were playing football when it started to rain."], answer: 1,
      reveal: "{s:They} {a:were} {v:playing} football {c:when} {s:it} {v:started} to rain.", mistake: "Common mistake: using was with they.",
      why: "they, we and you take were: they were playing.",
      whyAr: "مع they و we و you نستخدم were."
    }
  }
});

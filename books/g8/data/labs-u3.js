BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Unit 3 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g8 */
  const THIRD = ["He", "She", "Antonio"];
  const isThird = (s) => THIRD.indexOf(s) >= 0;
  const low = (s) => (["He", "She", "You", "We", "They"].indexOf(s) >= 0 ? s.toLowerCase() : s);
  const SINCE = ["2015", "April", "last summer"];

  return {
    /* ── Unit 3 · Lesson 2 · Present perfect + for / since (p. 28) ── */
    u3l2: {
      lab: {
        title: "Grammar Lab: since or for? The Time Slider",
        intro: "Choose a person and an activity. Slide the time. Is it a starting point (since) or a length of time (for)?",
        introAr: "اختر شخصًا ونشاطًا، ثم حرّك شريط الوقت: هل هو نقطة بداية (since) أم مدة (for)؟",
        controls: [
          { id: "subj", label: "Subject", options: ["I", "You", "We", "They", "He", "She", "Antonio"], start: "Antonio" },
          { id: "act", label: "Activity", options: [
            { v: "live", t: "live in this neighbourhood" }, { v: "study", t: "study English" }, { v: "school", t: "be in this school" },
            { v: "garage", t: "work at the garage" }, { v: "football", t: "play football" }], start: "garage" },
          { id: "time", label: "Time", kind: "slider", options: ["2015", "two years", "April", "a month", "last summer", "a long time"] },
          { id: "form", label: "Sentence", options: [{ v: "+", t: "✔ Statement" }, { v: "?", t: "? How long …?" }] }
        ],
        build(st) {
          const A = { live: ["lived", "in this neighbourhood"], study: ["studied", "English"], school: ["been", "in this school"], garage: ["worked", "at the garage"], football: ["played", "football"] }[st.act];
          const since = SINCE.indexOf(st.time) >= 0, prep = since ? "since" : "for";
          const why = since ? "“" + st.time + "” is a starting point → since." : "“" + st.time + "” is a length of time → for.";
          const whyAr = since ? "«" + st.time + "» نقطة بداية، لذلك نستخدم since." : "«" + st.time + "» مدة زمنية، لذلك نستخدم for.";
          if (st.form === "?") {
            const qs = (st.subj === "I" || st.subj === "We") ? "you" : low(st.subj), hv = isThird(st.subj) ? "has" : "have";
            return { s: "{q:How long} {a:" + hv + "} {s:" + qs + "} {v:" + A[0] + "} " + A[1] + "?", badge: "How long …? → " + prep, badgeKind: "future",
              rule: "{q:How long} + {a:have / has} + {s:subject} + {v:past participle}?",
              note: "Answer: " + prep.charAt(0).toUpperCase() + prep.slice(1) + " " + st.time + ". " + why,
              noteAr: "نجيب عن How long بـ for أو since. " + whyAr };
          }
          const hv = isThird(st.subj) ? "has" : "have";
          return { s: "{s:" + st.subj + "} {a:" + hv + "} {v:" + A[0] + "} " + A[1] + " {t:" + prep + " " + st.time + "}.", badge: since ? "since = starting point" : "for = length of time", badgeKind: since ? "good" : "warn",
            rule: "{s:subject} + {a:" + hv + "} + {v:past participle} + {t:" + prep + "} …",
            note: why + " The action started in the past and is still true now → present perfect.",
            noteAr: whyAr + " بدأ الفعل في الماضي وما زال مستمرًا، لذلك نستخدم المضارع التام." };
        }
      },
      predict: {
        q: "I have lived here ____ 2015.", options: ["for", "since"], answer: 1,
        reveal: "{s:I} {a:have} {v:lived} here {t:since 2015}.", mistake: "Common mistake: using for with a year.",
        why: "2015 is a starting point (when it began), so we use since. for is for a length of time (for 10 years).",
        whyAr: "2015 نقطة بداية، لذلك نستخدم since. أما for فتأتي مع المدة مثل for 10 years."
      }
    },

    /* ── Unit 3 · Lesson 4 · Intensifiers (too … to / so … that) (p. 29) ── */
    u3l4: {
      lab: {
        title: "Grammar Lab: Two Sentences → One",
        intro: "Choose a situation. Join the two sentences with too … to or so … that.",
        introAr: "اختر موقفًا واربط الجملتين باستخدام too … to أو so … that.",
        controls: [
          { id: "sit", label: "Situation", options: [{ v: "tajiri", t: "the Tajiri" }, { v: "exercise", t: "the exercise" }, { v: "news", t: "the news" }, { v: "mobile", t: "the mobile" }, { v: "tea", t: "the tea" }], start: "tajiri" },
          { id: "how", label: "Join with", options: [{ v: "two", t: "two sentences" }, { v: "too", t: "too … to" }, { v: "so", t: "so … that" }], start: "too" }
        ],
        build(st) {
          const D = {
            tajiri: { two: "The Tajiri was very mean. He didn’t want to share the smell of his food with others.", too: "{s:The Tajiri} {v:was} {t:too} mean {c:to} {p:share} the smell of his food with others.", so: "{s:The Tajiri} {v:was} {t:so} mean {c:that} {s:he} {n:didn’t want} to share the smell of his food with others." },
            exercise: { two: "The exercise was very difficult. I couldn’t do it.", too: "{s:The exercise} {v:was} {t:too} difficult {c:to} {p:do}.", so: "{s:The exercise} {v:was} {t:so} difficult {c:that} {s:I} {n:couldn’t} {v:do} it." },
            news: { two: "The news is very good. It cannot be true.", too: "{s:The news} {v:is} {t:too} good {c:to} {p:be true}.", so: "{s:The news} {v:is} {t:so} good {c:that} {s:it} {n:cannot} {v:be} true." },
            mobile: { two: "This mobile is very expensive. I cannot afford it.", too: "{s:This mobile} {v:is} {t:too} expensive {c:to} {p:afford}.", so: "{s:This mobile} {v:is} {t:so} expensive {c:that} {s:I} {n:cannot} {v:afford} it." },
            tea: { two: "The tea was very hot. I couldn’t drink it.", too: "{s:The tea} {v:was} {t:too} hot {c:to} {p:drink}.", so: "{s:The tea} {v:was} {t:so} hot {c:that} {s:I} {n:couldn’t} {v:drink} it." }
          }[st.sit];
          if (st.how === "two") return { s: D.two, badge: "very + two sentences", badgeKind: "warn", rule: "very + adjective. + a second sentence",
            note: "Two short sentences. Now join them: choose too … to or so … that.", noteAr: "جملتان قصيرتان. اربطهما الآن باستخدام too … to أو so … that." };
          if (st.how === "too") return { s: D.too, from: D.two, fromLabel: "two sentences", badge: "too … to = negative meaning", badgeKind: "good",
            rule: "{t:too} + adjective + {c:to} + {p:base verb}",
            note: "too … to already has a negative meaning, so we remove not / cannot / couldn’t, and we do not repeat the object (it) at the end.",
            noteAr: "too … to معناها منفي، لذلك نحذف not أو couldn’t ولا نكرّر it في النهاية." };
          return { s: D.so, from: D.two, fromLabel: "two sentences", badge: "so … that + a full sentence", badgeKind: "future",
            rule: "{t:so} + adjective + {c:that} + {s:subject} + {v:verb}",
            note: "so … that is followed by a full sentence (subject + verb). We keep the negative and the object.",
            noteAr: "بعد so … that تأتي جملة كاملة (فاعل + فعل)، ونُبقي النفي والمفعول به." };
        }
      },
      predict: {
        q: "This mobile is too expensive ____.", options: ["to afford it", "to afford", "that I afford"], answer: 1,
        reveal: "{s:This mobile} {v:is} {t:too} expensive {c:to} {p:afford}.", mistake: "Common mistake: adding “it” at the end of a too … to sentence.",
        why: "With too … to we do not repeat the object: too expensive to afford. (With so … that we keep it: so expensive that I cannot afford it.)",
        whyAr: "مع too … to لا نكرّر المفعول it في النهاية. أما مع so … that فنُبقيه: so expensive that I cannot afford it."
      }
    }
  };
})());

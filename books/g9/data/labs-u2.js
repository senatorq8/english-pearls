BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 2 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g9 */

  // subject → [pronoun in the main clause, possessive, he/she/it?]
  const SUBJ = {
    I: ["I", "my", false], You: ["you", "your", false], We: ["we", "our", false], They: ["they", "their", false],
    He: ["he", "his", true], She: ["she", "her", true], Ahmed: ["he", "his", true]
  };
  // situation: [if-clause verb (base), he/she form, past form, rest of the if-clause, result verb, result rest, negative result?]
  const SIT = {
    click: ["click", "clicks", "clicked", " on a strange link", "lose", " [p] personal information", false],
    update: ["update", "updates", "updated", " [p] passwords", "keep", " [p] accounts safe", false],
    wifi: ["use", "uses", "used", " free Wi-Fi at the airport", "put", " [p] accounts at risk", false],
    report: ["report", "reports", "reported", " the scam to the IT department", "help", " other students", false],
    careful: ["be", "is", "were", " more careful", "click", " on fake links", true]
  };
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const lowSubj = (s) => (s === "I" || s === "Ahmed" ? s : s.toLowerCase());

  // relative clauses: [the noun phrase before, noun, kind, relative clause, rest of the sentence, two short sentences]
  const REL = {
    teacher: ["The ", "teacher", "person", " helps us", " is very friendly.", "The teacher is very friendly. The teacher helps us."],
    scammer: ["The ", "person", "person", " sent the message", " was a scammer.", "The person was a scammer. The person sent the message."],
    app: ["This is the ", "app", "thing", " helps me study English", ".", "This is the app. The app helps me study English."],
    link: ["Ahmed clicked on a ", "link", "thing", " looked real", ".", "Ahmed clicked on a link. The link looked real."],
    library: ["That’s the ", "library", "place", " we study for our exams", ".", "That’s the library. We study for our exams there."],
    school: ["The school is the ", "place", "place", " the IT teacher works", ".", "The school is the place. The IT teacher works there."],
    day: ["Friday was the ", "day", "time", " he lost access to his account", ".", "Friday was the day. He lost access to his account on that day."],
    year: ["2023 was the ", "year", "time", " AI tools became popular", ".", "2023 was the year. AI tools became popular in that year."]
  };
  const PRON = { person: "who", thing: "which", place: "where", time: "when" };
  const AR_KIND = { person: "شخص", thing: "شيء", place: "مكان", time: "زمن" };

  return {
    /* ── Learning Unit 2 · Lesson 2 · Conditionals: First & Second (p. 36) ── */
    u2l2: {
      lab: {
        title: "Grammar Lab: The If Switch",
        intro: "Choose a person, a situation and the type. Switch between a real situation (Type 1) and an imaginary one (Type 2). Watch the verbs and will / would change.",
        introAr: "اختر شخصًا وموقفًا ونوع الجملة الشرطية. بدّل بين موقف حقيقي (النوع الأول) وموقف خيالي (النوع الثاني)، وشاهد كيف تتغيّر الأفعال و will / would.",
        controls: [
          { id: "subj", label: "Who?", options: ["I", "You", "We", "They", "He", "She", "Ahmed"], start: "Ahmed" },
          { id: "sit", label: "Situation", options: [
            { v: "click", t: "click on a strange link" }, { v: "update", t: "update passwords" }, { v: "wifi", t: "use free airport Wi-Fi" },
            { v: "report", t: "report the scam" }, { v: "careful", t: "be more careful" }], start: "click" },
          { id: "type", label: "Type", options: [{ v: "1", t: "Type 1 · real / possible" }, { v: "2", t: "Type 2 · imaginary / untrue" }] },
          { id: "order", label: "Order", options: [{ v: "if1", t: "If-clause first" }, { v: "if2", t: "If-clause second" }] }
        ],
        build(st) {
          const S = SUBJ[st.subj], X = SIT[st.sit];
          const third = S[2];
          const t1 = st.type === "1";
          let ifVerb;
          if (X[0] === "be") ifVerb = t1 ? (st.subj === "I" ? "am" : third ? "is" : "are") : "were";
          else ifVerb = t1 ? (third ? X[1] : X[0]) : X[2];
          const modal = t1 ? (X[6] ? "won’t" : "will") : (X[6] ? "wouldn’t" : "would");
          const mTok = X[6] ? "{n:" + modal + "}" : "{a:" + modal + "}";
          const ifRest = X[3].replace("[p]", S[1]), resRest = X[5].replace("[p]", S[1]);
          let s;
          if (st.order === "if1") {
            s = "{c:If} {s:" + lowSubj(st.subj) + "} {v:" + ifVerb + "}" + ifRest + ", {s:" + S[0] + "} " + mTok + " {v:" + X[4] + "}" + resRest + ".";
          } else {
            // the full subject goes in the main clause; the if-clause uses the pronoun
            const mainSubj = st.subj === "Ahmed" ? "Ahmed" : cap(S[0]);
            s = "{s:" + mainSubj + "} " + mTok + " {v:" + X[4] + "}" + resRest + " {c:if} {s:" + S[0] + "} {v:" + ifVerb + "}" + ifRest + ".";
          }
          const comma = st.order === "if1" ? " The if-clause comes first, so we put a comma after it." : " The if-clause comes second, so there is no comma.";
          const commaAr = st.order === "if1" ? " جاءت جملة if أولًا، لذلك نضع بعدها فاصلة." : " جاءت جملة if ثانيًا، لذلك لا نضع فاصلة.";
          if (t1) {
            return { s,
              badge: "Type 1 · real / possible situation", badgeKind: "good",
              rule: "{c:If} + {v:present simple} → {a:will} + {v:bare infinitive}",
              note: "This can really happen, so we use Type 1: " + ifVerb + " is present simple, then " + modal + " + " + X[4] + "." + comma,
              noteAr: "هذا موقف حقيقي أو ممكن، لذلك نستخدم النوع الأول: المضارع البسيط بعد if، ثم will مع الفعل في صورته الأصلية." + commaAr };
          }
          return { s,
            badge: "Type 2 · imaginary / untrue situation", badgeKind: "warn",
            rule: "{c:If} + {v:past simple} → {a:would} + {v:bare infinitive}",
            note: (X[0] === "be" ? "In Type 2 we use were with every subject: if " + lowSubj(st.subj) + " were. " : "This is imaginary, so we use Type 2: " + ifVerb + " is past simple. ") + "Then " + modal + " + " + X[4] + "." + comma,
            noteAr: (X[0] === "be" ? "في النوع الثاني نستخدم were مع كل الفاعلين. " : "هذا موقف خيالي، لذلك نستخدم النوع الثاني: الماضي البسيط بعد if. ") + "ثم would مع الفعل في صورته الأصلية." + commaAr };
        }
      },
      predict: {
        q: "If I ____ Ahmed, I would tell the IT department immediately.", options: ["am", "will be", "were"], answer: 2,
        reveal: "{c:If} {s:I} {v:were} Ahmed, {s:I} {a:would} {v:tell} the IT department immediately.", mistake: "Common mistake: using am or will in the if-clause of an imaginary situation.",
        why: "I am not Ahmed, so this is imaginary: Type 2. If + past simple → would. In Type 2 we say “If I were …”. We never use will in the if-clause.",
        whyAr: "أنا لست أحمد، فهذا موقف خيالي من النوع الثاني: if + الماضي البسيط ثم would. ونقول If I were، ولا نستخدم will بعد if."
      }
    },

    /* ── Learning Unit 2 · Lesson 6 · Defining Relative Clauses (p. 41) ── */
    u2l6: {
      lab: {
        title: "Grammar Lab: The Relative Clause Joiner",
        intro: "Choose a noun. Watch which relative pronoun it needs: who, which, that, where or when. Then join two short sentences into one.",
        introAr: "اختر اسمًا وشاهد ضمير الوصل الذي يحتاجه: who أو which أو that أو where أو when، ثم اربط جملتين قصيرتين في جملة واحدة.",
        controls: [
          { id: "noun", label: "Noun", options: [
            { v: "teacher", t: "🧑‍🏫 the teacher" }, { v: "scammer", t: "🕵️ the person" }, { v: "app", t: "📱 the app" }, { v: "link", t: "🔗 a link" },
            { v: "library", t: "📚 the library" }, { v: "school", t: "🏫 the place" }, { v: "day", t: "📅 the day" }, { v: "year", t: "🗓️ the year" }], start: "teacher" },
          { id: "pron", label: "Pronoun", options: [{ v: "main", t: "who / which / where / when" }, { v: "that", t: "that" }],
            show: (st) => ["teacher", "scammer", "app", "link"].indexOf(st.noun) >= 0 },
          { id: "view", label: "Show", options: [{ v: "one", t: "One sentence" }, { v: "join", t: "Join two sentences" }] }
        ],
        build(st) {
          const R = REL[st.noun], kind = R[2];
          const canThat = kind === "person" || kind === "thing";
          const pron = canThat && st.pron === "that" ? "that" : PRON[kind];
          const s = R[0] + "{t:" + R[1] + "} {c:" + pron + "}" + R[3] + R[4];
          const out = { s,
            badge: kind + " → " + (kind === "person" ? "who / that" : kind === "thing" ? "which / that" : PRON[kind]),
            badgeKind: "good",
            rule: "{t:noun} + {c:" + pron + "} + relative clause",
            note: "“" + R[1] + "” is a " + kind + ", so we use " + (canThat ? (kind === "person" ? "who or that" : "which or that") : PRON[kind]) + ". The relative clause comes right after the noun and gives essential information.",
            noteAr: "كلمة " + R[1] + " تدلّ على " + AR_KIND[kind] + "، لذلك نستخدم " + (canThat ? (kind === "person" ? "who أو that" : "which أو that") : PRON[kind]) + ". وتأتي جملة الوصل بعد الاسم مباشرة وتعطي معلومة أساسية." };
          if (st.view === "join") { out.from = R[5]; out.fromLabel = "Two sentences"; }
          return out;
        }
      },
      predict: {
        q: "That’s the café ____ we meet.", options: ["which", "where", "who"], answer: 1,
        reveal: "That’s the {t:café} {c:where} we meet.", mistake: "Common mistake: using which for a place when a new subject and verb come after it.",
        why: "The café is a place, and a new subject and verb (we meet) come after it, so we use where. who is only for people.",
        whyAr: "المقهى مكان، وجاء بعده فاعل وفعل جديدان (we meet)، لذلك نستخدم where. أمّا who فهي للأشخاص فقط."
      }
    }
  };
})());

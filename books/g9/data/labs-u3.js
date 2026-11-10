BOOK.labs = Object.assign(BOOK.labs || {}, (function () {
  /* Extra Practice for the Learning Unit 3 grammar lessons (not in the book; shown as "Extra Practice").
     Every sentence was listed and checked with: node tools/lab-dump.js g9 */

  /* ── Passive voice: one food sentence per item ──
     [doer, present (he/she/it or they form), past, past participle, object (active), new subject (passive), plural?, rest, doer after by] */
  const PASS = {
    machboos: ["My mother", "cooks", "cooked", "cooked", "Machboos", "Machboos", false, " for lunch", "my mother"],
    sushi: ["The chef", "prepares", "prepared", "prepared", "sushi", "Sushi", false, " in the kitchen", "the chef"],
    pasta: ["Italians", "eat", "ate", "eaten", "pasta", "Pasta", false, " with tomato sauce", "Italians"],
    dates: ["Farmers", "grow", "grew", "grown", "dates", "Dates", true, " in Kuwait", "farmers"],
    sauces: ["The cook", "adds", "added", "added", "different sauces", "Different sauces", true, " to the pasta", "the cook"],
    dishes: ["Our family", "serves", "served", "served", "special dishes", "Special dishes", true, " during Eid", "our family"],
    harees: ["My grandmother", "makes", "made", "made", "Harees", "Harees", false, " in Ramadan", "my grandmother"]
  };
  const BASE = { cooks: "cook", prepares: "prepare", eat: "eat", grow: "grow", adds: "add", serves: "serve", makes: "make" };

  /* ── Comparatives and superlatives with food ──
     kind: one = 1 syllable (+er / +est), dbl = double the last letter, y = 2 syllables ending in -y,
           long = more / the most, irr = irregular. noLess = “less / the least” does not sound natural here.
     more: [subject, than …] / less: [subject, than …] (the other way round, so the sentence stays true)
     supMore / supLess: [subject, group] */
  const ADJ = {
    sweet: { kind: "one", stem: "sweet", base: "A mango is sweet.", more: ["A mango", "a lemon"], less: ["A lemon", "a mango"], supMore: ["A mango", "fruit in the basket"], supLess: ["A lemon", "fruit in the basket"] },
    big: { kind: "dbl", stem: "big", dbl: "g", noLess: true, base: "A watermelon is big.", more: ["A watermelon", "an apple"], supMore: ["A watermelon", "fruit in the basket"] },
    salty: { kind: "y", stem: "salt", base: "Chips are salty.", plural: true, more: ["Chips", "apples"], less: ["Apples", "chips"], supMore: ["Chips", "snack on the table"], supLess: ["Apples", "snack on the table"] },
    healthy: { kind: "y", stem: "health", base: "Salad is healthy.", more: ["Salad", "fried chicken"], less: ["Fried chicken", "salad"], supMore: ["Salad", "dish on the menu"], supLess: ["Fried chicken", "dish on the menu"] },
    spicy: { kind: "y", stem: "spic", base: "Machboos is spicy.", more: ["Machboos", "plain rice"], less: ["Plain rice", "Machboos"], supMore: ["Machboos", "dish on the table"], supLess: ["Plain rice", "dish on the table"] },
    popular: { kind: "long", stem: "popular", base: "Pizza is popular in my class.", more: ["Pizza", "sushi in my class"], less: ["Sushi", "pizza in my class"], supMore: ["Pizza", "food in my class"], supLess: ["Sushi", "food in my class"] },
    expensive: { kind: "long", stem: "expensive", base: "Sushi is expensive.", more: ["Sushi", "pasta"], less: ["Pasta", "sushi"], supMore: ["Sushi", "dish on the menu"], supLess: ["Pasta", "dish on the menu"] },
    good: { kind: "irr", noLess: true, cw: "better", sw: "best", base: "Water is good for you.", more: ["Water", "soda"], supMore: ["Water", "drink for your body"] },
    bad: { kind: "irr", noLess: true, cw: "worse", sw: "worst", base: "Fried food is bad for your heart.", more: ["Fried food", "grilled food"], supMore: ["Fried food", "choice for your heart"] }
  };
  const RULE = {
    one: "1 syllable: add -er / -est.",
    dbl: "1 syllable ending in one vowel + one consonant: double the last letter, then add -er / -est.",
    y: "2 syllables ending in -y: change y to i, then add -er / -est.",
    long: "2 or more syllables (not ending in -y): use more / the most.",
    irr: "Irregular: good → better → the best; bad → worse → the worst."
  };
  const RULE_AR = {
    one: "صفة من مقطع واحد: نضيف er للمقارنة و est للتفضيل.",
    dbl: "صفة من مقطع واحد تنتهي بحرف متحرك واحد ثم حرف ساكن: نضاعف الحرف الأخير ثم نضيف er أو est.",
    y: "صفة من مقطعين تنتهي بـ y: نحوّل y إلى i ثم نضيف er أو est.",
    long: "صفة من مقطعين أو أكثر (لا تنتهي بـ y): نستخدم more للمقارنة و the most للتفضيل.",
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
    return "{x:the " + a.sw + "}";
  }
  const word = (adj) => (ADJ[adj].kind === "y" ? ADJ[adj].stem + "y" : adj);
  const plainOf = (s) => s.replace(/\{[a-z]:([^}]+)\}/g, "$1");
  const beOf = (subj) => (/s$/.test(subj) && subj !== "Machboos" ? "are" : "is");

  return {
    /* ── Learning Unit 3 · Lesson 2 · Passive Voice (Present simple - Past simple - Modals) (p. 50) ── */
    u3l2: {
      lab: {
        title: "Grammar Lab: The Passive Kitchen",
        intro: "Choose a food sentence and a tense. Switch from active to passive. Then show or hide the doer (by …).",
        introAr: "اختر جملة عن الطعام وزمنًا، ثم حوّلها من المبني للمعلوم إلى المبني للمجهول، وأظهر الفاعل (by …) أو أخفِه.",
        controls: [
          { id: "item", label: "Sentence", options: [
            { v: "machboos", t: "Machboos" }, { v: "sushi", t: "sushi" }, { v: "pasta", t: "pasta" }, { v: "dates", t: "dates" },
            { v: "sauces", t: "sauces" }, { v: "dishes", t: "special dishes" }, { v: "harees", t: "Harees" }], start: "machboos" },
          { id: "tense", label: "Tense", kind: "slider", options: [{ v: "pres", t: "present simple" }, { v: "past", t: "past simple" }, { v: "modal", t: "modal (can)" }], start: "pres" },
          { id: "voice", label: "Voice", options: [{ v: "passive", t: "passive" }, { v: "active", t: "active" }] },
          { id: "by", label: "Doer", options: [{ v: "no", t: "without the doer" }, { v: "yes", t: "with by + doer" }], show: (st) => st.voice === "passive" }
        ],
        build(st) {
          const D = PASS[st.item];
          const verb = st.tense === "pres" ? D[1] : st.tense === "past" ? D[2] : BASE[D[1]];
          const active = "{s:" + D[0] + "} " + (st.tense === "modal" ? "{a:can} " : "") + "{v:" + verb + "} {o:" + D[4] + "}" + D[7] + ".";
          if (st.voice === "active") return { s: active, badge: "active: the doer is the subject", badgeKind: "warn",
            rule: st.tense === "modal" ? "{s:doer} + {a:can} + {v:verb} + {o:object}" : "{s:doer} + {v:" + (st.tense === "pres" ? "present simple" : "past simple") + "} + {o:object}",
            note: "In the active sentence the doer (" + D[8] + ") comes first. Switch to passive to focus on " + D[4] + ".",
            noteAr: "في الجملة المبنية للمعلوم يأتي الفاعل أولًا. حوّلها إلى المبني للمجهول لتركّز على الطعام." };
          const pl = D[6];
          const be = st.tense === "pres" ? (pl ? "are" : "is") : st.tense === "past" ? (pl ? "were" : "was") : "can be";
          const by = st.by === "yes" ? " by " + D[8] : "";
          const ruleBe = st.tense === "pres" ? "am / is / are" : st.tense === "past" ? "was / were" : "modal + be";
          return { from: active, fromLabel: "Active", s: "{o:" + D[5] + "} {a:" + be + "} {v:" + D[3] + "}" + D[7] + by + ".",
            badge: "passive: " + be + " + past participle", badgeKind: "good",
            rule: "{o:new subject} + {a:" + ruleBe + "} + {v:past participle}" + (by ? " + by + doer" : ""),
            note: "“" + D[5] + "” becomes the subject. " + (st.tense === "modal" ? "With a modal, be never changes: can be. " : (pl ? "It is plural → " + be + ". " : "It is singular → " + be + ". ")) + "“" + D[3] + "” is the past participle." + (by ? " by + doer tells us who does it." : " We do not need the doer: the food is more important."),
            noteAr: (st.tense === "modal" ? "مع الفعل الناقص نستخدم can be دائمًا" : pl ? "الفاعل الجديد جمع فنستخدم " + be : "الفاعل الجديد مفرد فنستخدم " + be) + "، ثم التصريف الثالث للفعل." + (by ? " ونضيف by + الفاعل لنعرف من قام بالفعل." : " ولا نحتاج ذكر الفاعل لأن الطعام أهم.") };
        }
      },
      predict: {
        q: "Many different sauces ____ to pasta.", options: ["can added", "can be added", "can be add"], answer: 1,
        reveal: "{o:Many different sauces} {a:can be} {v:added} to pasta.", mistake: "Common mistakes: forgetting be after the modal, or using the base verb instead of the past participle.",
        why: "Passive modals: modal + be + past participle → can be added.",
        whyAr: "المبني للمجهول مع الأفعال الناقصة: الفعل الناقص + be + التصريف الثالث للفعل، أي can be added."
      }
    },

    /* ── Learning Unit 3 · Lesson 6 · Comparatives and Superlatives (p. 55) ── */
    u3l6: {
      lab: {
        title: "Grammar Lab: The Food Compare Machine",
        intro: "Choose an adjective. Slide from the adjective to the comparative and the superlative. Then try more or less.",
        introAr: "اختر صفة، ثم حرّك الشريط من الصفة إلى صيغة المقارنة ثم صيغة التفضيل، وجرّب more أو less.",
        controls: [
          { id: "adj", label: "Adjective", options: ["sweet", "big", "salty", "healthy", "spicy", "popular", "expensive", "good", "bad"], start: "healthy" },
          { id: "form", label: "Form", kind: "slider", options: [{ v: "base", t: "adjective" }, { v: "comp", t: "comparative" }, { v: "sup", t: "superlative" }], start: "comp" },
          { id: "dir", label: "More or less?", options: [{ v: "more", t: "⬆ more / -er" }, { v: "less", t: "⬇ less / the least" }], show: (st) => st.form !== "base" && !ADJ[st.adj].noLess }
        ],
        build(st) {
          const a = ADJ[st.adj], R = RULE[a.kind], w = word(st.adj);
          if (st.form === "base") {
            return { s: a.base.replace(w, "{v:" + w + "}"), badge: "one thing", badgeKind: "good",
              rule: "{v:" + w + "} = the adjective",
              note: "The adjective describes one thing. Slide to compare two things, or one thing in a group.",
              noteAr: "الصفة تصف شيئًا واحدًا. حرّك الشريط للمقارنة بين شيئين أو لتفضيل شيء في مجموعة." };
          }
          const less = st.dir === "less" && !a.noLess;
          if (st.form === "comp") {
            const pair = less ? a.less : a.more;
            const form = less ? "{x:less} {v:" + w + "}" : compForm(a);
            return { s: "{s:" + pair[0] + "} " + beOf(pair[0]) + " " + form + " {c:than} " + pair[1] + ".", badge: "⚖️ two things", badgeKind: "warn",
              rule: "{v:" + w + "} → " + form + " {c:than}",
              note: "We compare two things → comparative + than. " + (less ? "less + adjective shows a lower degree (the opposite of more)." : R) + " (" + plainOf(form) + " than)",
              noteAr: "نقارن بين شيئين فنستخدم صيغة المقارنة مع than. " + (less ? "less + الصفة تدلّ على درجة أقل، وهي عكس more." : RULE_AR[a.kind]) };
          }
          const pair = less ? a.supLess : a.supMore;
          const form = less ? "{x:the least} {v:" + w + "}" : supForm(a);
          return { s: "{s:" + pair[0] + "} " + beOf(pair[0]) + " " + form + " " + pair[1] + ".", badge: "🏆 one in a group", badgeKind: "future",
            rule: "{v:" + w + "} → " + form,
            note: "One thing in a group of three or more → the + superlative. " + (less ? "the least + adjective shows the lowest degree." : R) + " (" + plainOf(form) + ")",
            noteAr: "شيء واحد في مجموعة من ثلاثة أو أكثر فنستخدم the مع صيغة التفضيل. " + (less ? "the least + الصفة تدلّ على أقل درجة." : RULE_AR[a.kind]) };
        }
      },
      predict: {
        q: "Sushi is ____ dish in this restaurant.", options: ["the expensivest", "the most expensive", "more expensive"], answer: 1,
        reveal: "Sushi is {x:the most} {v:expensive} dish in this restaurant.", mistake: "Common mistake: adding -est to a long adjective.",
        why: "We compare sushi with all the dishes in the restaurant → superlative. expensive has three syllables, so we use the most: the most expensive.",
        whyAr: "نقارن السوشي بكل الأطباق في المطعم، فنستخدم صيغة التفضيل. والصفة expensive طويلة (ثلاثة مقاطع) فنستخدم the most."
      }
    }
  };
})());

// Unit 5 — Incredible Places (Module 2 "Our Amazing World", printed pages 41–46; module cover p. 33)
BOOK.addUnit({
  id: "u5", num: 5, title: "Incredible Places", titleAr: "أماكن مذهلة",
  module: 2, moduleTitle: "Our Amazing World",
  pages: [41, 46],
  cover: 33,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Talk about and describe amazing places",
      "Compare and contrast",
      "Set rules",
      "Express opinions",
      "Make predictions about the future"
    ],
    "language structures": [
      "Use comparatives and superlatives",
      "Use (more ...than/the most...)",
      "Use \"(not) as....as\""
    ],
    "Module 2 – you are expected to": [
      "Listen to fiction and nonfiction texts.",
      "Take part in dialogues and discussions.",
      "Use different writing strategies including planning and editing."
    ],
    "Module 2 – activities": [
      "Listening to a folktale",
      "Talking about similarities and differences",
      "Searching for information to prepare presentations"
    ]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u5l1", num: 1, skill: "Reading",
      title: "Incredible Places",
      pages: [41, 42],
      status: "complete",
      canDo: ["Talk about and describe amazing places"],
      goals: ["Read about three amazing places.", "Learn 8 new words.", "Decide if sentences are true or false.", "Match words with their meanings."],
      goalsAr: ["أقرأ عن ثلاثة أماكن مذهلة.", "أتعلّم 8 كلمات جديدة.", "أحدّد إن كانت الجمل صحيحة أم خاطئة.", "أصِل الكلمات بمعانيها."],
      warmup: {
        title: "Before you read: Think, Pair, Share",
        image: "crops/u5l1-warmup.jpg",
        emoji: "🏝️",
        prompts: ["1. In pairs, talk about some of the amazing places around the world", "Islands – Mountains – Rivers – Lakes – Oases – Waterfalls"],
        seconds: 120
      },
      vocab: [
        { w: "equator", pos: "noun", emoji: "🌍", def: "the imaginary line around the middle of the Earth", ex: "Vaadhoo Island is located on the equator to the southwest of Sri Lanka in the Indian Ocean.", exFromBook: true, ar: "خط الاستواء" },
        { w: "unique", pos: "adjective", emoji: "🦄", def: "very special; not like anything else", ex: "Vaadhoo is a unique place where you can have an unforgettable experience.", exFromBook: true, ar: "فريد / مميّز" },
        { w: "glow", pos: "verb", emoji: "✨", def: "to give a soft, warm light", ex: "The island has white sand and is surrounded by warm waters that seem to glow in the dark.", exFromBook: true, ar: "يتوهّج / يلمع" },
        { w: "reflect", pos: "verb", emoji: "🪞", def: "to show a picture of something, like a mirror", ex: "The water near the beach looks like a mirror reflecting the sky and stars.", exFromBook: true, ar: "يعكس" },
        { w: "antiquity", pos: "noun", emoji: "🏺", def: "a very old object from ancient times (often: antiquities)", ex: "It contains about a third of the most valuable monuments, temples, tombs and antiquities in the whole world.", exFromBook: true, ar: "أثر / تحفة أثرية" },
        { w: "bargain", pos: "noun", emoji: "🏷️", def: "something you buy for a low price", ex: "Visitors can spend hours in this market strolling around and doing some bargain hunting.", exFromBook: true, ar: "صفقة / شيء رخيص" },
        { w: "atmosphere", pos: "noun", emoji: "🏮", def: "the feeling that a place gives you", ex: "Visitors can enjoy the traditional souq atmosphere.", exFromBook: true, ar: "أجواء" },
        { w: "sightseeing", pos: "noun", emoji: "📸", def: "visiting interesting places as a tourist", ex: "It's a great place for shopping, eating or for sightseeing.", exFromBook: true, ar: "مشاهدة المعالم السياحية" }
      ],
      sections: [
        { type: "reading", title: "Incredible Places", page: 41,
          instructions: "Read about the three places.",
          blocks: [
            { head: "Sea of stars", paras: ["Vaadhoo Island is located on the equator to the southwest of Sri Lanka in the Indian Ocean. It is part of the Maldives. Vaadhoo is a unique place where you can have an unforgettable experience. The island has white sand and is surrounded by warm waters that seem to glow in the dark. The glow is created by tiny sea organisms. The water near the beach looks like a mirror reflecting the sky and stars."] },
            { head: "Luxor City", paras: ["Is located on the east bank of the Nile River in southern Egypt. Luxor has been described as the world's greatest open-air museum. It contains about a third of the most valuable monuments, temples, tombs and antiquities in the whole world. Luxor is one of the most important ancient sites. It was the capital of Egypt when the pharaohs ruled from the 16th-11th centuries BC."] },
            { head: "Souq Al-Mubarakiya", paras: ["Is one of the oldest markets in Kuwait. It has been around for more than 200 years. Visitors can spend hours in this market strolling around and doing some bargain hunting. From Safat Square, a local landmark, to the new SoMo (south Mubarakiya) area, visitors can enjoy the traditional souq atmosphere. It's a great place for shopping, eating or for sightseeing."] }
          ],
          speaker: null },

        { type: "activity", title: "2. Read about the three places and decide if the following sentences are true (T) or false (F). Justify your answers.", page: 42, source: "book",
          instructions: "True or false? Read the “why” to see the justification from the text.", instructionsAr: "صحيحة أم خاطئة؟ برّر إجابتك من النص.",
          items: [
            { t: "mcq", q: "1. Both the Sea of Stars and Luxor are in Asia.", options: ["T", "F"], answer: 1,
              hint: "Where is Luxor?", why: "Luxor is in southern Egypt, on the Nile River (Africa). Only Vaadhoo (the Maldives) is in Asia." },
            { t: "mcq", q: "2. The Sea of Stars glows because of some living things.", options: ["T", "F"], answer: 0,
              hint: "What creates the glow?", why: "“The glow is created by tiny sea organisms.” Organisms are living things." },
            { t: "mcq", q: "3. In Souq Al-Mubarakiya, visitors can buy items at low prices.", options: ["T", "F"], answer: 0,
              hint: "Look for “bargain”.", why: "“Visitors can spend hours in this market … doing some bargain hunting.” A bargain is something at a low price." },
            { t: "mcq", q: "4. Luxor has new monuments, temples and tombs.", options: ["T", "F"], answer: 1,
              hint: "Are they new or old?", why: "Luxor is one of the most important ancient sites; its monuments, temples and tombs are very old, not new." }
          ] },

        { type: "activity", title: "3. Match the following words with their definitions:", page: 42, source: "book",
          instructions: "Tap a word, then tap its definition. One definition is extra.", instructionsAr: "صِل الكلمة بتعريفها. يوجد تعريف زائد.",
          items: [
            { t: "match", q: "Match the words with their definitions.",
              pairs: [
                ["1. unforgettable", "special, unusual and difficult or impossible to forget."],
                ["2. organism", "a living thing such as a plant or animal."],
                ["3. stroll", "walk in a leisurely, relaxed way."]
              ],
              hint: "The extra definition is “a title for ancient Egyptian kings” (= pharaoh).",
              why: "unforgettable = impossible to forget; organism = a living thing; stroll = walk in a relaxed way. “A title for ancient Egyptian kings” is the extra one (pharaoh)." }
          ] },

        { type: "activity", title: "Extra Practice: Which place is it?", source: "extra", stage: "guided",
          instructions: "Choose the place.", instructionsAr: "اختر المكان.",
          items: [
            { t: "mcq", q: "It is in the Maldives.", options: ["Sea of stars", "Luxor City", "Souq Al-Mubarakiya"], answer: 0, why: "Vaadhoo Island “is part of the Maldives”." },
            { t: "mcq", q: "It has been around for more than 200 years.", options: ["Sea of stars", "Luxor City", "Souq Al-Mubarakiya"], answer: 2, why: "Souq Al-Mubarakiya “has been around for more than 200 years”." },
            { t: "mcq", q: "It was the capital of Egypt.", options: ["Sea of stars", "Luxor City", "Souq Al-Mubarakiya"], answer: 1, why: "Luxor “was the capital of Egypt when the pharaohs ruled”." },
            { t: "mcq", q: "Its water looks like a mirror.", options: ["Sea of stars", "Luxor City", "Souq Al-Mubarakiya"], answer: 0, why: "“The water near the beach looks like a mirror reflecting the sky and stars.”" },
            { t: "mcq", q: "It is called the world's greatest open-air museum.", options: ["Sea of stars", "Luxor City", "Souq Al-Mubarakiya"], answer: 1, why: "“Luxor has been described as the world's greatest open-air museum.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل الجمل بكلمة مناسبة.",
          items: [
            { t: "fill", q: "1. The lake was so still that it ____ the mountains.", answer: ["reflected"], bank: ["reflected", "glow", "bargain", "sightseeing"], why: "reflect = show a picture like a mirror (past: reflected)." },
            { t: "fill", q: "2. These stickers ____ in the dark.", answer: ["glow"], bank: ["reflected", "glow", "bargain", "sightseeing"], why: "glow = give a soft light." },
            { t: "fill", q: "3. I bought this jacket for only 3 KD. It was a real ____!", answer: ["bargain"], bank: ["reflected", "glow", "bargain", "sightseeing"], why: "bargain = something at a low price." },
            { t: "fill", q: "4. We went ____ in Cairo and saw the pyramids.", answer: ["sightseeing"], bank: ["reflected", "glow", "bargain", "sightseeing"], why: "go sightseeing = visit interesting places." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: pairs name one example for each word (islands, mountains, rivers, lakes, oases, waterfalls).",
          "Show where the Maldives, Egypt and Kuwait are on a map before reading.",
          "Read each text; students say one amazing fact about each place.",
          "Exercise 2: students must justify each answer with a sentence from the text.",
          "Exercise 3: one definition is extra (a title for ancient Egyptian kings = pharaoh)."
        ],
        pair: ["A describes one of the three places without saying its name; B guesses.", "Pairs write one more true/false sentence and test another pair."],
        group: ["Groups choose one place and make a travel advert for it."],
        quick: [
          { q: "Why does the Sea of Stars glow?", a: "Because of tiny sea organisms." },
          { q: "Where is Luxor?", a: "On the east bank of the Nile River in southern Egypt." },
          { q: "What can visitors do in Souq Al-Mubarakiya?", a: "Stroll around, do bargain hunting, shop, eat and go sightseeing." },
          { q: "What does “unique” mean?", a: "Very special; not like anything else." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u5l2", num: 2, skill: "Grammar",
      title: "Comparative and Superlative",
      pages: [42, 42],
      status: "complete",
      canDo: ["Use comparatives and superlatives", "Use (more ...than/the most...)", "Compare and contrast"],
      goals: ["Compare two things with -er than / more … than.", "Use the -est / the most … for the top one.", "Compare Kuwait with other countries."],
      goalsAr: ["أقارن بين شيئين باستخدام er than أو more … than.", "أستخدم the -est أو the most للأعلى درجة.", "أقارن الكويت بدول أخرى."],
      warmup: {
        title: "Which one?",
        image: null,
        emoji: "⚖️",
        prompts: ["Which is bigger: Kuwait or China?", "Which is the oldest place in the reading: the Sea of Stars, Luxor or Souq Al-Mubarakiya?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Comparative and superlative", page: 42,
          steps: [
            { title: "Step 1 — The book's box",
              text: "cheap → cheaper than … → … the cheapest. expensive → more expensive than .. → …the most expensive.",
              textAr: "cheap ← cheaper than ← the cheapest. expensive ← more expensive than ← the most expensive.",
              examples: [
                "{s:cheap} → {v:cheaper} {c:than} … → … {t:the} {v:cheapest}",
                "{s:expensive} → {a:more} {v:expensive} {c:than} .. → …{t:the most} {v:expensive}"
              ] },
            { title: "Step 2 — Short adjectives: -er / -est", source: "extra",
              text: "One-syllable adjectives add -er (comparative) and -est (superlative). Spelling: big → bigger (double the last letter), large → larger (+r), easy → easier (y → i).",
              textAr: "الصفات القصيرة نضيف لها er للمقارنة و est للتفضيل. انتبه للتهجئة: big ← bigger، easy ← easier.",
              examples: [
                "{s:Souq Al-Mubarakiya} is {v:old}{x:er} {c:than} SoMo.",
                "{s:Luxor} is one of {t:the} {v:old}{x:est} places in the world.",
                "{s:Bahrain} is {v:small}{x:er} {c:than} Kuwait."
              ] },
            { title: "Step 3 — Long adjectives: more / the most", source: "extra",
              text: "Adjectives with two or more syllables (expensive, interesting, important, beautiful) use more … than and the most … .",
              textAr: "الصفات الطويلة نستخدم معها more … than و the most.",
              examples: [
                "Going to the beach is {a:more} {v:interesting} {c:than} visiting historical sites.",
                "Luxor is one of {t:the most} {v:important} ancient sites."
              ] },
            { title: "Step 4 — Irregular adjectives", source: "extra",
              text: "good → better → the best. bad → worse → the worst. far → farther / further → the farthest / furthest.",
              textAr: "صفات شاذة: good ← better ← the best، bad ← worse ← the worst.",
              examples: [
                "For some people, visiting Souq Al-Mubarakiya is {v:better} {c:than} the Sea of Stars.",
                "This is {t:the} {v:best} day of my life."
              ] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Never use more with -er. Use the before a superlative. Use than after a comparative.",
              textAr: "لا تجمع more مع er، وضع the قبل صيغة التفضيل، و than بعد صيغة المقارنة.",
              examples: [
                "✗ {n:more better} → ✓ {v:better}",
                "✗ Kuwait is hotter {n:that} Canada. → ✓ hotter {c:than}",
                "✗ It is {n:most} expensive shop. → ✓ It is {t:the most} expensive shop."
              ] }
          ],
          table: {
            head: ["Adjective", "Comparative", "Superlative"],
            rows: [
              ["cheap", "cheaper than …", "… the cheapest"],
              ["expensive", "more expensive than ..", "…the most expensive"]
            ]
          },
          worked: {
            q: "Complete: Luxor is one of the ____ places mentioned in the articles. (old)",
            steps: [
              "Look before the gap: “one of the” → we need a superlative.",
              "old is a short adjective (one syllable).",
              "Short adjective + -est → oldest."
            ],
            a: "Luxor is one of the oldest places mentioned in the articles."
          },
          notes: [
            "Two things → comparative (+ than). Three or more things → superlative (the …).",
            "“one of the + superlative + plural noun”: one of the oldest places.",
            "Adjectives ending in -y: happy → happier → the happiest."
          ] },

        { type: "activity", title: "4. In pairs, complete the following sentences with the comparatives or superlatives of the adjectives between brackets:", page: 42, source: "book", stage: "guided",
          instructions: "Write the comparative or superlative.", instructionsAr: "اكتب صيغة المقارنة أو التفضيل.",
          items: [
            { t: "fill", q: "1. Luxor is one of the ____ places mentioned in the articles. (old)", answer: ["oldest"],
              hint: "“one of the …” → superlative.", why: "one of the + superlative: oldest." },
            { t: "fill", q: "2. For some people, visiting Souq Al-Mubarakiya is ____ than the Sea of Stars. (good)", answer: ["better"],
              hint: "good is irregular.", why: "than → comparative. good → better." },
            { t: "fill", q: "3. Sometimes, going to the beach is ____ than visiting historical sites. (interesting)", answer: ["more interesting"],
              hint: "interesting is a long adjective.", why: "Long adjective → more interesting than." }
          ] },

        { type: "write", title: "5. In your notebook, write some sentences comparing Kuwait to the following countries: (China – Turkey – Bahrain – Canada). Think of size, population, climate ...etc.", page: 42, source: "book",
          instructions: "Write some sentences comparing Kuwait to China, Turkey, Bahrain and Canada. Think of size, population, climate …",
          wordBank: ["bigger than", "smaller than", "hotter than", "colder than", "more crowded than", "the biggest", "the hottest", "population"],
          frame: [
            { label: "China", hint: "China is … than Kuwait." },
            { label: "Turkey", hint: "Turkey has a … population than Kuwait." },
            { label: "Bahrain", hint: "Bahrain is … than Kuwait." },
            { label: "Canada", hint: "Canada is … than Kuwait. / … is the … of the five countries." }
          ],
          model: "China is much bigger than Kuwait, and it has a bigger population.\nTurkey is colder than Kuwait in winter.\nBahrain is smaller than Kuwait.\nCanada is colder than Kuwait. It is the biggest of the five countries.\nKuwait is the hottest of the five countries in summer.",
          modelFromBook: false,
          checklist: ["I used comparatives with than.", "I used at least one superlative with the.", "I wrote about size, population or climate."],
          minWords: 30 },

        { type: "discuss", title: "💡 Tip", page: 42, source: "book",
          prompts: ["Search the net or books for amazing places around the world and tell your class about them. You can prepare a presentation OR you can bring pictures."],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the correct form", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "choose", q: "A plane is (faster / more fast) than a car.", options: ["faster", "more fast"], answer: 0, why: "fast is short → faster." },
            { t: "choose", q: "Gold is (more expensive / expensiver) than silver.", options: ["more expensive", "expensiver"], answer: 0, why: "expensive is long → more expensive." },
            { t: "choose", q: "Canada is (bigger / biger) than Kuwait.", options: ["bigger", "biger"], answer: 0, why: "big → bigger (double g)." },
            { t: "choose", q: "Today is (the hottest / the most hot) day of the year.", options: ["the hottest", "the most hot"], answer: 0, why: "hot → the hottest (double t)." },
            { t: "choose", q: "My test result was (worse / badder) than yours.", options: ["worse", "badder"], answer: 0, why: "bad → worse (irregular)." },
            { t: "choose", q: "This is the (most beautiful / beautifullest) beach in Kuwait.", options: ["most beautiful", "beautifullest"], answer: 0, why: "beautiful is long → the most beautiful." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Write the form", source: "extra", stage: "guided",
          instructions: "Write the comparative or the superlative.", instructionsAr: "اكتب الصيغة المناسبة.",
          items: [
            { t: "fill", q: "1. The Kuwait Towers are ____ than my house. (tall)", answer: ["taller"], why: "tall → taller than." },
            { t: "fill", q: "2. Al Hamra Tower is the ____ building in Kuwait. (tall)", answer: ["tallest"], why: "the + tallest." },
            { t: "fill", q: "3. Maths is ____ than Art for me. (difficult)", answer: ["more difficult"], why: "difficult is long → more difficult." },
            { t: "fill", q: "4. Yesterday was ____ than today. (sunny)", answer: ["sunnier"], why: "sunny → sunnier (y → ier)." },
            { t: "fill", q: "5. This is the ____ restaurant in the city. (good)", answer: ["best"], why: "good → better → the best." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "Luxor is {more older} than Souq Al-Mubarakiya.", answer: ["older"], hint: "old is short.", why: "Never use more with -er: older." },
            { t: "fix", q: "Bahrain is smaller {that} Kuwait.", answer: ["than"], hint: "Comparative + …", why: "Comparative + than." },
            { t: "fix", q: "The Louvre is the {larger} museum in the world.", answer: ["largest"], hint: "the + superlative", why: "the + largest (superlative)." },
            { t: "short", q: "Write a sentence comparing two places in Kuwait.", model: "The Avenues is bigger than Souq Al-Mubarakiya, but the souq is older.", open: true, hint: "… is …er than … / … is more … than …" }
          ] }
      ],
      game: { kind: "quiz", title: "Compare It!",
        items: [
          { t: "mcq", q: "cheap → ____", options: ["cheaper", "more cheap", "cheapper"], answer: 0, why: "cheap + er." },
          { t: "mcq", q: "expensive → the ____", options: ["expensivest", "most expensive", "more expensive"], answer: 1, why: "Long adjective → the most expensive." },
          { t: "mcq", q: "good → ____ → the best", options: ["gooder", "better", "more good"], answer: 1, why: "Irregular: good, better, the best." },
          { t: "mcq", q: "Luxor is ____ than the souq.", options: ["older", "oldest", "the oldest"], answer: 0, why: "than → comparative: older." },
          { t: "mcq", q: "It's one of the ____ markets in Kuwait.", options: ["older", "oldest", "more old"], answer: 1, why: "one of the + superlative: oldest." },
          { t: "mcq", q: "Which is correct?", options: ["more better", "better", "most better"], answer: 1, why: "better is already a comparative." }
        ] },
      teacher: {
        notes: [
          "Use the book box: cheap / cheaper than / the cheapest; expensive / more expensive than / the most expensive.",
          "Teach the spelling rules (bigger, larger, easier) and the irregulars (good, bad).",
          "Pairs complete the 3 book sentences; check with the worked example.",
          "Exercise 5: give quick facts (China and Canada are much bigger; Bahrain is smaller; Canada is colder) and let students write.",
          "Tip: students choose an amazing place and present it with pictures."
        ],
        pair: ["“Which is …er?” A asks (Which is bigger: a cat or a camel?), B answers with a full sentence.", "Pairs compare two items in the classroom using 3 adjectives."],
        group: ["Groups rank 4 Kuwaiti places (the souq, the Towers, the Avenues, Failaka) by age, size, fun and write superlative sentences."],
        quick: [
          { q: "Comparative of “cheap”?", a: "cheaper (than)" },
          { q: "Superlative of “expensive”?", a: "the most expensive" },
          { q: "Comparative of “good”?", a: "better" },
          { q: "Correct: Kuwait is hotter that Canada.", a: "Kuwait is hotter than Canada." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u5l3", num: 3, skill: "Listening",
      title: "Describing Places",
      pages: [43, 43],
      status: "complete",
      canDo: ["Talk about and describe amazing places"],
      goals: ["Talk about the desert.", "Write words about the desert.", "Listen to Fahad and complete a table."],
      goalsAr: ["أتحدث عن الصحراء.", "أكتب كلمات متعلقة بالصحراء.", "أستمع إلى فهد وأكمل الجدول."],
      warmup: {
        title: "Speaking",
        image: null,
        emoji: "🏜️",
        prompts: ["1. a. Have you ever been to a desert? Where was it? What was it like? Discuss with your partners."],
        seconds: 120
      },
      vocab: [
        { w: "destination", pos: "noun", emoji: "📍", def: "the place where someone is going", ex: "Our holiday destination was a desert camp.", exFromBook: false, ar: "وجهة" }
      ],
      sections: [
        { type: "activity", title: "1. b. Write as many words related to the desert as possible.", page: 43, source: "book",
          instructions: "Write words about the desert.", instructionsAr: "اكتب أكبر عدد من الكلمات المتعلقة بالصحراء.",
          items: [
            { t: "short", q: "Desert words:", open: true, model: "sand, camel, tent, hot, dry, oasis, dune, cactus, sun, fox, scorpion, palm tree", hint: "Think: animals, plants, weather, things you see." }
          ] },

        { type: "listen", title: "2. Listen to Fahad talking about his holiday and complete the following table:", page: 43, source: "book",
          needsAudio: true, track: "5.1",
          instructions: "Listen to Fahad (track 5.1). Complete the table.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["", "Fahad's holiday"],
              rows: [
                ["Destination", { open: true }],
                ["Transport", { open: true }],
                ["Animals", { open: true }],
                ["Weather", { open: true }]
              ] }
          ] },

        { type: "listen", title: "Extra Practice: Sara's Desert Trip (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Teacher", text: "Sara, where did you go in the winter holiday?" },
            { who: "Sara", text: "We went camping in the desert near Al-Jahra. It was only one hour from our house." },
            { who: "Teacher", text: "How did you get there?" },
            { who: "Sara", text: "We went by car. My father drove a big four-wheel drive." },
            { who: "Teacher", text: "Did you see any animals?" },
            { who: "Sara", text: "Yes! We saw camels and a small desert fox at night. The camels were bigger than I expected." },
            { who: "Teacher", text: "What was the weather like?" },
            { who: "Sara", text: "It was sunny in the day, but the nights were very cold. The desert at night is not as warm as the city." }
          ],
          items: [
            { t: "mcq", q: "Destination:", options: ["the desert near Al-Jahra", "Failaka Island", "a hotel in Dubai", "the mountains"], answer: 0, why: "“We went camping in the desert near Al-Jahra.”" },
            { t: "mcq", q: "Transport:", options: ["by plane", "by bus", "by car", "by camel"], answer: 2, why: "“We went by car. My father drove a big four-wheel drive.”" },
            { t: "mcq", q: "Animals:", options: ["horses and birds", "camels and a desert fox", "only camels", "goats and sheep"], answer: 1, why: "“We saw camels and a small desert fox at night.”" },
            { t: "mcq", q: "Weather:", options: ["rainy all day", "hot day and night", "sunny in the day, very cold at night", "windy and cloudy"], answer: 2, why: "“It was sunny in the day, but the nights were very cold.”" },
            { t: "mcq", q: "How far was the camp from Sara's house?", options: ["one hour", "two hours", "one day", "ten minutes"], answer: 0, why: "“It was only one hour from our house.”" },
            { t: "mcq", q: "Who drove the car?", options: ["Sara", "her mother", "her father", "her brother"], answer: 2, why: "“My father drove a big four-wheel drive.”" },
            { t: "fill", q: "The desert at night is not as ____ as the city.", answer: ["warm"], bank: ["warm", "cold", "big"], why: "“The desert at night is not as warm as the city.”" }
          ] },

        { type: "activity", title: "Extra Practice: Desert words", source: "extra", stage: "guided",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "A place in the desert with water and palm trees is an (oasis / island).", options: ["oasis", "island"], answer: 0, why: "An oasis has water in the desert." },
            { t: "choose", q: "People sleep in a (tent / tower) when they go camping.", options: ["tent", "tower"], answer: 0, why: "Campers sleep in tents." },
            { t: "choose", q: "The (camel / dolphin) can walk for days in the desert.", options: ["camel", "dolphin"], answer: 0, why: "Camels live in the desert." },
            { t: "choose", q: "The place you travel to is your (destination / transport).", options: ["destination", "transport"], answer: 0, why: "destination = where you are going." }
          ] }
      ],
      game: { kind: "sort", title: "Desert or Sea?", buckets: ["Desert", "Sea"],
        cards: [["camel", 0], ["dolphin", 1], ["sand dune", 0], ["coral", 1], ["tent", 0], ["boat", 1], ["oasis", 0], ["pearl", 1]] },
      teacher: {
        notes: [
          "Discuss 1a in groups; collect desert words on the board for 1b.",
          "Before listening, check the table headings: destination, transport, animals, weather.",
          "Play track 5.1 (teacher's audio) twice. The book recording is not inside this app; check answers with the class.",
          "If there is no audio, use the Extra script about Sara's desert trip (same table)."
        ],
        pair: ["Pairs ask each other about a holiday: Where did you go? How did you travel? What animals did you see? What was the weather like?"],
        group: ["Desert word race: groups write as many desert words as they can in 2 minutes."],
        quick: [
          { q: "What does “destination” mean?", a: "The place where you are going." },
          { q: "Name three desert animals.", a: "camel, fox, lizard … (any)" },
          { q: "What four things are in Fahad's table?", a: "Destination, transport, animals, weather." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u5l4", num: 4, skill: "Grammar",
      title: "(not) as……as",
      pages: [43, 44],
      status: "complete",
      canDo: ["Use \"(not) as....as\"", "Compare and contrast"],
      goals: ["Use as … as for things that are equal.", "Use not as … as for things that are not equal.", "Compare pictures."],
      goalsAr: ["أستخدم as … as للأشياء المتساوية.", "أستخدم not as … as للأشياء غير المتساوية.", "أقارن بين الصور."],
      warmup: {
        title: "Equal or not equal?",
        image: null,
        emoji: "🐝",
        prompts: ["Are you as tall as your best friend?", "Is English as difficult as Maths for you?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [
        { w: "counting", pos: "noun", emoji: "🔢", def: "saying numbers in order to find how many", ex: "Counting with fingers isn't as fast as using a calculator.", exFromBook: false, ar: "العدّ" }
      ],
      sections: [
        { type: "grammar", title: "(not) as……as", page: 43,
          steps: [
            { title: "Step 1 — The book's rule",
              text: "We use (as …. as) to make comparisons between things which are equal in some way: He was as busy as a bee. We use (not as …. as) to make comparisons between things which aren't equal: Silver is not as heavy as gold.",
              textAr: "نستخدم as … as للمقارنة بين أشياء متساوية، و not as … as للمقارنة بين أشياء غير متساوية.",
              examples: [
                "{s:He} {v:was} {c:as} {o:busy} {c:as} a bee.",
                "{s:Silver} {v:is} {n:not} {c:as} {o:heavy} {c:as} gold."
              ] },
            { title: "Step 2 — The form", source: "extra",
              text: "as + adjective (base form) + as. Do not use -er or more in the middle.",
              textAr: "as + الصفة في صورتها الأصلية + as، بدون er أو more.",
              examples: [
                "{s:The left tower} {v:is} {c:as} {o:tall} {c:as} the right tower. (equal)",
                "{s:English} {v:is} {n:not} {c:as} {o:difficult} {c:as} Maths."
              ] },
            { title: "Step 3 — What does “not as … as” mean?", source: "extra",
              text: "A is not as … as B = B is more … than A.",
              textAr: "A is not as … as B تعني أن B أكثر من A في هذه الصفة.",
              examples: [
                "{s:Silver} is {n:not} {c:as} heavy {c:as} gold. = Gold is {v:heavier} than silver.",
                "{s:Today} is {n:not} {c:as} windy {c:as} yesterday. = Yesterday was {v:windier}."
              ] },
            { title: "Step 4 — Be careful!", source: "extra",
              text: "Use the base adjective between as … as. Short form: isn't as … as / wasn't as … as.",
              textAr: "استخدم الصفة الأصلية بين as و as.",
              examples: [
                "✗ as {n:taller} as → ✓ as {o:tall} as",
                "✗ not as {n:more expensive} as → ✓ not as {o:expensive} as",
                "Counting with fingers {n:isn't} {c:as} {o:fast} {c:as} using a calculator."
              ] }
          ],
          worked: {
            q: "Complete: English is ____ Maths. (not/ difficult)",
            steps: [
              "The brackets say “not” → the two things are not equal.",
              "Form: not + as + adjective + as.",
              "The adjective stays the same: difficult (not more difficult)."
            ],
            a: "English is not as difficult as Maths."
          },
          notes: [
            "as … as = equal. not as … as = not equal.",
            "We can say “as … as” with verbs too: He runs as fast as his brother.",
            "Famous expressions: as busy as a bee, as cold as ice, as light as a feather."
          ] },

        { type: "activity", title: "Complete the following sentences with (not) as...as:", page: 43, source: "book", stage: "guided",
          instructions: "Write (not) as … as with the adjective.", instructionsAr: "أكمل باستخدام (not) as … as.",
          items: [
            { t: "fill", q: "1. English is ____ Maths. (not/ difficult)", answer: ["not as difficult as"], hint: "not + as + difficult + as", why: "“not” is in the brackets → not as difficult as." },
            { t: "fill", q: "2. This exercise is ____ the other one (easy).", answer: ["as easy as"], hint: "No “not” → equal.", why: "Equal → as easy as." },
            { t: "fill", q: "3. Today is ____ yesterday (not/ windy).", answer: ["not as windy as"], hint: "not + as + windy + as", why: "Not equal → not as windy as." },
            { t: "fill", q: "4. The tomato soup was ____ the mushroom soup (delicious).", answer: ["as delicious as"], hint: "No “not” → equal.", why: "Equal → as delicious as." }
          ] },

        { type: "activity", title: "4. Compare the pictures using (not) as...... as:", page: 44, source: "book", stage: "independent",
          image: "crops/u5l4-pictures.jpg",
          instructions: "Look at the pictures. Complete each sentence with (not) as … as.", instructionsAr: "قارن بين الصور مستخدمًا (not) as … as.",
          items: [
            { t: "short", q: "1. I don't like the old car because …", model: "I don't like the old car because it isn't as fast as the new car.", keywords: [["as"], ["fast", "modern", "nice", "beautiful", "new", "good"]], hint: "it isn't as … as the yellow car." },
            { t: "short", q: "2. The suitcase is …", model: "The suitcase is as big as the box. / The suitcase is not as heavy as the box.", keywords: [["as"]], hint: "Compare the suitcase and the box: size? weight?" },
            { t: "short", q: "3. Counting with fingers isn't …", model: "Counting with fingers isn't as fast as using a calculator.", keywords: [["as"], ["fast", "quick", "easy", "accurate"]], hint: "… as … as using a calculator." },
            { t: "short", q: "4. The left tower is …", model: "The left tower is as tall as the right tower.", keywords: [["as tall as", "as high as", "as big as"]], hint: "The two towers look the same." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Equal or not?", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "“Silver is not as heavy as gold.” This means …", options: ["Gold is heavier than silver.", "Silver is heavier than gold.", "They are equal."], answer: 0, why: "not as heavy as → gold is heavier." },
            { t: "mcq", q: "“Ali is as tall as Sami.” This means …", options: ["Ali is taller.", "Sami is taller.", "They are the same height."], answer: 2, why: "as … as = equal." },
            { t: "choose", q: "My bag is as (heavy / heavier) as yours.", options: ["heavy", "heavier"], answer: 0, why: "as + base adjective + as." },
            { t: "choose", q: "A bike is not (as fast as / as faster as) a car.", options: ["as fast as", "as faster as"], answer: 0, why: "Use the base adjective: as fast as." },
            { t: "choose", q: "The museum was not as (crowded / more crowded) as the mall.", options: ["crowded", "more crowded"], answer: 0, why: "No more in the middle: as crowded as." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Rewrite (on your own)", source: "extra", stage: "independent",
          instructions: "Rewrite with not as … as. Keep the same meaning.", instructionsAr: "أعد الكتابة باستخدام not as … as بالمعنى نفسه.",
          items: [
            { t: "short", q: "A car is faster than a bike. → A bike …", model: "A bike is not as fast as a car.", keywords: [["not as fast as", "isn't as fast as"]], hint: "A bike is not as … as …" },
            { t: "short", q: "Gold is more expensive than silver. → Silver …", model: "Silver is not as expensive as gold.", keywords: [["not as expensive as", "isn't as expensive as"]], hint: "Silver is not as … as …" },
            { t: "short", q: "Kuwait is hotter than Canada. → Canada …", model: "Canada is not as hot as Kuwait.", keywords: [["not as hot as", "isn't as hot as"]], hint: "Canada is not as … as …" },
            { t: "fix", q: "My brother is as {taller} as my father.", answer: ["tall"], hint: "as + base adjective + as", why: "Use the base adjective: as tall as." }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder",
        sentences: [
          "He was as busy as a bee.",
          "Silver is not as heavy as gold.",
          "English is not as difficult as Maths.",
          "This exercise is as easy as the other one.",
          "The left tower is as tall as the right tower."
        ] },
      teacher: {
        notes: [
          "Write the two book examples on the board: equal (as busy as a bee) and not equal (not as heavy as gold).",
          "Show the link: Silver is not as heavy as gold = Gold is heavier than silver.",
          "Do the 4 book sentences, then exercise 4 with the pictures (open answers — accept any correct comparison).",
          "Use the Grammar Lab to switch between equal and not equal."
        ],
        pair: ["Pairs compare two objects from their bags: My pencil is as long as yours. / My bag isn't as heavy as yours."],
        group: ["Groups write 3 “as … as” expressions (as cold as ice, as light as a feather) and draw them."],
        quick: [
          { q: "What does as … as show?", a: "That two things are equal in some way." },
          { q: "Complete: Today is ___ yesterday. (not / windy)", a: "not as windy as" },
          { q: "Correct: She is as taller as me.", a: "She is as tall as me." },
          { q: "Silver is not as heavy as gold. Which is heavier?", a: "Gold." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — SPEAKING ─────────────────────────
    {
      id: "u5l5", num: 5, skill: "Speaking",
      title: "Speaking: Similarities and Differences",
      pages: [44, 44],
      status: "complete",
      canDo: ["Compare and contrast", "Use \"(not) as....as\""],
      goals: ["Talk about how you and your partners are the same or different.", "Use (not) as … as.", "Write sentences about you and your partners."],
      goalsAr: ["أتحدث عن أوجه الشبه والاختلاف بيني وبين زملائي.", "أستخدم (not) as … as.", "أكتب جملًا عني وعن زملائي."],
      warmup: {
        title: "Who is like you?",
        image: null,
        emoji: "🧑‍🤝‍🧑",
        prompts: ["Who in your class is as tall as you?", "What can your friend do that you can't do?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [
        { w: "height", pos: "noun", emoji: "📏", def: "how tall someone or something is", ex: "My height is 150 cm.", exFromBook: false, ar: "الطول" },
        { w: "skill", pos: "noun", emoji: "🛠️", def: "something you can do well because you practised", ex: "Drawing is my best skill.", exFromBook: false, ar: "مهارة" }
      ],
      sections: [
        { type: "speak", title: "5. a. Talk about the similarities and differences between you and your partners using (not) as..........as.", page: 44, source: "book",
          instructions: "You can talk about age, height, skills…etc. (Think about interesting abilities you and your friends have.)",
          dialogue: [
            { who: "A", text: "I'm 13. How old are you?" },
            { who: "B", text: "" },
            { who: "A", text: "So you're as old as me! Can you swim fast?" },
            { who: "B", text: "" }
          ],
          starters: ["I'm as tall as …", "… is not as old as me.", "I can't swim as fast as …", "My drawing isn't as good as …", "We are both …"],
          record: true },

        { type: "write", title: "5. b. Write some sentences about you and your partners", page: 44, source: "book",
          instructions: "Write some sentences about you and your partners. Use (not) as … as.",
          wordBank: ["as old as", "as tall as", "not as fast as", "as good at … as", "both", "but"],
          frame: [
            { label: "Age", hint: "I am as old as … / … is not as old as …" },
            { label: "Height", hint: "… is as tall as … / I'm not as tall as …" },
            { label: "Skills", hint: "I can't … as well as … / … is as good at … as …" }
          ],
          model: "I am as old as Ahmed. We are both 13.\nI am not as tall as Yousef, but I am taller than Ali.\nAhmed can't run as fast as Yousef.\nMy handwriting is not as neat as Ali's, but I am as good at Maths as him.",
          modelFromBook: false,
          checklist: ["I used as … as and not as … as.", "I wrote about age, height or skills.", "I used the base adjective between as … as."],
          minWords: 30 },

        { type: "discuss", title: "💡 Tip", page: 44, source: "book",
          prompts: ["Visit the NASA website and find how earth is similar to or different from Mars or other planets, then explain the information to your classmates. www.nasa.gov"],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Me and my partner", source: "extra", stage: "guided",
          instructions: "Read the facts. Choose the true sentence.", instructionsAr: "اقرأ المعلومات واختر الجملة الصحيحة.",
          items: [
            { t: "mcq", q: "Ali is 13. Sami is 13.", options: ["Ali is as old as Sami.", "Ali is not as old as Sami."], answer: 0, why: "Same age → as old as." },
            { t: "mcq", q: "Fahad is 160 cm. Bader is 150 cm.", options: ["Bader is as tall as Fahad.", "Bader is not as tall as Fahad."], answer: 1, why: "Bader is shorter → not as tall as." },
            { t: "mcq", q: "Huda runs 100 m in 15 seconds. Mona runs it in 15 seconds.", options: ["Huda runs as fast as Mona.", "Huda doesn't run as fast as Mona."], answer: 0, why: "Same time → as fast as." },
            { t: "mcq", q: "Nasser's drawing is excellent. Omar's drawing is OK.", options: ["Omar's drawing is as good as Nasser's.", "Omar's drawing is not as good as Nasser's."], answer: 1, why: "Nasser's is better → Omar's is not as good as Nasser's." }
          ] }
      ],
      game: { kind: "quiz", title: "As … As Quiz",
        items: [
          { t: "mcq", q: "I am 12. My cousin is 12. I am ____ my cousin.", options: ["as old as", "not as old as", "older than"], answer: 0, why: "Same age → as old as." },
          { t: "mcq", q: "Earth is not as big as Jupiter. Which is bigger?", options: ["Earth", "Jupiter"], answer: 1, why: "not as big as → Jupiter is bigger." },
          { t: "mcq", q: "She can't sing as ____ as her sister.", options: ["well", "better", "best"], answer: 0, why: "as + well + as (base form)." },
          { t: "mcq", q: "Which word means “how tall you are”?", options: ["height", "skill", "age"], answer: 0, why: "height = how tall." },
          { t: "mcq", q: "Which is correct?", options: ["He is as taller as me.", "He is as tall as me."], answer: 1, why: "as + base adjective + as." }
        ] },
      teacher: {
        notes: [
          "Groups of 3–4: each student says 3 facts about himself (age, height, a skill). The group makes as … as sentences.",
          "Encourage interesting abilities: swimming, drawing, gaming, cooking, memory.",
          "Students write their sentences in 5b; volunteers read them aloud.",
          "Tip: for homework, students find one way Earth is similar to or different from Mars (NASA website)."
        ],
        pair: ["Find 3 things you are equal in and 3 things you are not equal in."],
        group: ["Line up by height and make sentences: Ahmed is not as tall as Ali, but he is as tall as Sami."],
        quick: [
          { q: "Say a sentence with “as old as”.", a: "I am as old as my cousin. (any)" },
          { q: "What three things can you compare about your partners?", a: "Age, height, skills." },
          { q: "Correct: I'm not as faster as him.", a: "I'm not as fast as him." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u5l6", num: 6, skill: "Reading",
      title: "Famous Museums",
      pages: [45, 46],
      status: "complete",
      canDo: ["Talk about and describe amazing places", "Express opinions"],
      goals: ["Read about three famous museums.", "Learn 6 new words.", "Find the topic sentence.", "Answer questions about the texts."],
      goalsAr: ["أقرأ عن ثلاثة متاحف مشهورة.", "أتعلّم 6 كلمات جديدة.", "أجد الجملة الرئيسية.", "أجيب عن أسئلة حول النصوص."],
      warmup: {
        title: "1. Before you read: Think, Pair, Share",
        image: "crops/u5l6-warmup.jpg",
        emoji: "🏛️",
        prompts: ["Make a list of museums in Kuwait. Then compare your list to the other groups. Talk about the ones you enjoyed visiting and why."],
        seconds: 120
      },
      vocab: [
        { w: "collection", pos: "noun", emoji: "🗃️", def: "a group of things that someone has gathered and kept", ex: "The museum has a collection of over thirty thousand items.", exFromBook: true, ar: "مجموعة" },
        { w: "pleasure", pos: "noun", emoji: "😊", def: "a feeling of happiness and enjoyment", ex: "The museum is a source of pleasure and information for its visitors.", exFromBook: true, ar: "متعة / سرور" },
        { w: "house", pos: "verb", emoji: "🏛️", def: "to have or keep something inside a building", ex: "It houses the most impressive art collection in the world.", exFromBook: true, ar: "يضمّ / يحتوي" },
        { w: "impressive", pos: "adjective", emoji: "🤩", def: "very good, big or special, so you admire it", ex: "It houses the most impressive art collection in the world.", exFromBook: true, ar: "مثير للإعجاب" },
        { w: "sculpture", pos: "noun", emoji: "🗿", def: "a piece of art made from stone, wood or metal", ex: "It has sculptures from the Middle Ages.", exFromBook: true, ar: "تمثال / منحوتة" },
        { w: "exhibit", pos: "noun", emoji: "🖼️", def: "an object that people can see in a museum", ex: "It is located in Washington DC and contains many exhibits.", exFromBook: true, ar: "معروض / قطعة معروضة" }
      ],
      sections: [
        { type: "reading", title: "2. Read the following texts about famous museums around the world. Find the topic sentence in each one.", page: 45,
          instructions: "Read about the three museums.",
          blocks: [
            { head: "Tareq Rajab Museum of Islamic Calligraphy", paras: ["is the largest Islamic calligraphy museum in Kuwait. The museum has a collection of over thirty thousand items. It first opened to the public in 1980 and It includes beautiful manuscripts of the Qur'an from around the Islamic world. There are also metal and glass objects and a collection of silver jewellery. There are also early gold pieces [[that]] were found in the Muslim World. The museum is a source of pleasure and information for its visitors."] },
            { head: "The Louvre Museum", paras: ["is the world's largest museum. It is a historic place in Paris, France and one of the city's biggest tourist attractions. It is on the right side of the Seine River. It houses the most impressive art collection in the world with ancient Egyptian, Greek and Roman antiquities. It has sculptures from the Middle Ages. It also has furniture, objects and paintings."] },
            { head: "Smithsonian Institution", paras: ["is the world's largest museum, education and research complex. It has 19 museums and the National Zoo. The SI is building the future by preserving heritage, discovering new knowledge and sharing resources with the world. It was founded in 1846 to share knowledge. It is located in Washington DC and contains many exhibits. There are over 137 million items in the Smithsonian."] }
          ],
          speaker: null },

        { type: "activity", title: "2. Find the topic sentence in each one.", page: 45, source: "book",
          instructions: "The topic sentence tells the main idea of the text. Choose it.", instructionsAr: "الجملة الرئيسية تعبّر عن الفكرة العامة للنص. اخترها.",
          items: [
            { t: "mcq", q: "Tareq Rajab Museum of Islamic Calligraphy:", options: ["Tareq Rajab Museum of Islamic Calligraphy is the largest Islamic calligraphy museum in Kuwait.", "There are also metal and glass objects and a collection of silver jewellery.", "It first opened to the public in 1980."], answer: 0,
              hint: "Which sentence tells us what the whole text is about?", why: "The first sentence gives the main idea; the other sentences give details about the museum." },
            { t: "mcq", q: "The Louvre Museum:", options: ["It has sculptures from the Middle Ages.", "The Louvre Museum is the world's largest museum.", "It is on the right side of the Seine River."], answer: 1,
              hint: "Main idea, not a detail.", why: "“The Louvre Museum is the world's largest museum.” The other sentences are details." },
            { t: "mcq", q: "Smithsonian Institution:", options: ["It has 19 museums and the National Zoo.", "There are over 137 million items in the Smithsonian.", "The Smithsonian Institution is the world's largest museum, education and research complex."], answer: 2,
              hint: "Main idea, not a detail.", why: "The first sentence gives the main idea; the number of museums and items are details." }
          ] },

        { type: "activity", title: "3. Read the texts again to answer the following questions:", page: 46, source: "book",
          instructions: "Answer the questions.", instructionsAr: "أجب عن الأسئلة.",
          items: [
            { t: "short", q: "1. How is the Tareq Rajab Museum a source of information?",
              model: "It has a collection of over thirty thousand items: manuscripts of the Qur'an from around the Islamic world, metal and glass objects, silver jewellery and early gold pieces found in the Muslim World. Visitors learn about Islamic art and history from them.",
              keywords: [["manuscript", "qur", "collection", "items", "jewellery", "gold"]],
              hint: "What does it include?" },
            { t: "short", q: "2. What's the aim of the Smithsonian Institution?",
              model: "Its aim is to build the future by preserving heritage, discovering new knowledge and sharing resources with the world. It was founded to share knowledge.",
              keywords: [["heritage", "knowledge", "sharing", "share"]],
              hint: "Read: “The SI is building the future by …”" },
            { t: "short", q: "3. Discuss the differences between the three museums.",
              model: "Tareq Rajab Museum is in Kuwait and has Islamic calligraphy and art. The Louvre is in Paris and is the world's largest museum, with art, antiquities and sculptures. The Smithsonian is in Washington DC; it is a museum, education and research complex with 19 museums and a zoo.",
              keywords: [["kuwait", "paris", "washington"]],
              hint: "Where is each one? What does each one have?" },
            { t: "short", q: "4. What do you think the words 'collection' and 'houses' mean? Why?",
              model: "collection = a group of things kept together (thirty thousand items). houses = has / keeps inside (the Louvre houses an art collection).",
              keywords: [["group", "many things", "set"], ["has", "contain", "keep"]],
              hint: "Read the sentences with these words." },
            { t: "short", q: "5. What does the word 'heritage' make you think of?", open: true,
              model: "It makes me think of old Kuwaiti houses, pearl diving, the dhow boats and our traditions.",
              hint: "Think of Kuwait's past (Unit 4 — Pearl Diving)." }
          ] },

        { type: "activity", title: "Extra Practice: Which museum?", source: "extra", stage: "guided",
          instructions: "Choose the museum.", instructionsAr: "اختر المتحف.",
          items: [
            { t: "mcq", q: "It first opened in 1980.", options: ["Tareq Rajab Museum", "The Louvre", "The Smithsonian"], answer: 0, why: "“It first opened to the public in 1980.”" },
            { t: "mcq", q: "It is in Paris.", options: ["Tareq Rajab Museum", "The Louvre", "The Smithsonian"], answer: 1, why: "“It is a historic place in Paris, France.”" },
            { t: "mcq", q: "It was founded in 1846.", options: ["Tareq Rajab Museum", "The Louvre", "The Smithsonian"], answer: 2, why: "“It was founded in 1846 to share knowledge.”" },
            { t: "mcq", q: "It has 19 museums and a zoo.", options: ["Tareq Rajab Museum", "The Louvre", "The Smithsonian"], answer: 2, why: "“It has 19 museums and the National Zoo.”" },
            { t: "mcq", q: "In the first text, “that” in “early gold pieces that were found” refers to …", options: ["the gold pieces", "the museum", "the visitors"], answer: 0, why: "The gold pieces were found in the Muslim World." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: groups list museums in Kuwait (Kuwait National Museum, Tareq Rajab Museum, Sheikh Abdullah Al Salem Cultural Centre, Al-Sadu House, Bait Al-Othman …) and share.",
          "Explain: a topic sentence = the main idea, usually the first sentence.",
          "Read each text; students underline the topic sentence and one detail.",
          "Question 4: students guess meanings from context, then check the Words cards."
        ],
        pair: ["A asks a question about one museum; B finds the answer in the text."],
        group: ["Groups compare the three museums in a table: place – year – what it has."],
        quick: [
          { q: "What is a topic sentence?", a: "The sentence that gives the main idea of a paragraph." },
          { q: "Which is the world's largest museum?", a: "The Louvre Museum." },
          { q: "How many items are in the Smithsonian?", a: "Over 137 million." },
          { q: "What does “exhibit” mean?", a: "An object that people can see in a museum." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING (Speaking and Writing) ─────────────────────────
    {
      id: "u5l7", num: 7, skill: "Writing",
      title: "Speaking and Writing: Museums of the Future",
      pages: [46, 46],
      status: "complete",
      canDo: ["Set rules", "Make predictions about the future", "Express opinions"],
      goals: ["Talk about an optical illusion.", "Discuss museums and museum rules.", "Write about museums in a hundred years."],
      goalsAr: ["أتحدث عن خداع بصري.", "أناقش المتاحف وقواعد زيارتها.", "أكتب عن المتاحف بعد مئة عام."],
      warmup: {
        title: "4. Look at the following optical illusion, what do you see?",
        image: "crops/u5l7-illusion.jpg",
        emoji: "🌀",
        prompts: ["Look at the following optical illusion, what do you see?", "What do you know about this painting?"],
        seconds: 90
      },
      vocab: [
        { w: "illusion", pos: "noun", emoji: "🌀", def: "something that looks different from what it really is", ex: "Look at the following optical illusion, what do you see?", exFromBook: true, ar: "وهم / خداع بصري" }
      ],
      sections: [
        { type: "discuss", title: "5. a. In groups, discuss the following questions and take notes:", page: 46, source: "book",
          prompts: [
            "1. Why do countries build museums?",
            "2. What items can be displayed in museums?",
            "3. What benefits do we get from visiting museums?",
            "4. What are some rules that should be followed when visiting a museum?"
          ],
          image: null, emoji: "🏛️" },

        { type: "activity", title: "5. a. Take notes", page: 46, source: "book",
          instructions: "Write short notes for each question.", instructionsAr: "اكتب ملاحظات قصيرة لكل سؤال.",
          items: [
            { t: "short", q: "1. Why do countries build museums?", open: true, model: "To keep their heritage and teach people about their history and art.", hint: "To keep … / To teach …" },
            { t: "short", q: "2. What items can be displayed in museums?", open: true, model: "Old tools, clothes, jewellery, paintings, sculptures, manuscripts, coins.", hint: "Think of the three museums in the reading." },
            { t: "short", q: "3. What benefits do we get from visiting museums?", open: true, model: "We learn about the past and other cultures, and we enjoy beautiful art.", hint: "We learn … / We enjoy …" },
            { t: "short", q: "4. What are some rules that should be followed when visiting a museum?", open: true, model: "Don't touch the exhibits. Don't eat or drink. Speak quietly. Don't use flash when you take photos.", hint: "Don't … / You should … / You must …" }
          ] },

        { type: "write", title: "5. b. In a hundred years, what items do you think will be displayed in museums? Write a description of the exhibits that you can see.", page: 46, source: "book",
          instructions: "Imagine a museum in a hundred years. What items will be displayed? Describe the exhibits.",
          wordBank: ["will be displayed", "I think", "probably", "In the future", "exhibit", "collection", "old-fashioned"],
          frame: [
            { label: "Introduction", hint: "In a hundred years, museums will …" },
            { label: "Exhibit 1", hint: "I think there will be … . People will look at it and …" },
            { label: "Exhibit 2", hint: "Visitors will also see … ." },
            { label: "Conclusion", hint: "These exhibits will show people how we lived in …" }
          ],
          model: "In a hundred years, museums will show how we live today. I think smartphones will be displayed in glass boxes, and children will laugh at how big and slow they were. There will probably be a collection of petrol cars, because all cars will be electric or flying. Visitors will also see school books made of paper and old laptops. These exhibits will show people how we lived at the beginning of the 21st century.",
          modelFromBook: false,
          checklist: ["I used will to make predictions.", "I described at least two exhibits.", "I checked capital letters, full stops and spelling."],
          minWords: 50 },

        { type: "discuss", title: "💡 Tip", page: 46, source: "book",
          prompts: ["If you could create your own museum, what would your museum be? What types of exhibits would you have?"],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Museum rules and predictions", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "choose", q: "You (must not / must) touch the exhibits.", options: ["must not", "must"], answer: 0, why: "A museum rule: do not touch the exhibits." },
            { t: "choose", q: "Visitors should (speak / speaking) quietly.", options: ["speak", "speaking"], answer: 0, why: "should + base verb." },
            { t: "choose", q: "In the future, robots (will / are) be displayed in museums.", options: ["will", "are"], answer: 0, why: "Prediction: will + base verb." },
            { t: "choose", q: "I think people (will visit / visit will) museums online.", options: ["will visit", "visit will"], answer: 0, why: "will comes before the verb." }
          ] }
      ],
      game: { kind: "sort", title: "Museum Rules", buckets: ["Do ✔", "Don't ✖"],
        cards: [["speak quietly", 0], ["touch the exhibits", 1], ["follow the guide", 0], ["eat near the paintings", 1], ["read the information cards", 0], ["run in the halls", 1], ["switch off the flash", 0], ["climb on the sculptures", 1]] },
      teacher: {
        notes: [
          "Show the optical illusion: students say what they see (lines that seem to move / a shape in the middle).",
          "Groups discuss the 4 questions and take notes; one student reports to the class.",
          "Collect museum rules on the board (Set rules): Don't touch … / You must … / You should …",
          "Students write about museums in 100 years using will.",
          "Tip: each student designs his own museum and lists 3 exhibits."
        ],
        pair: ["A is a museum guard, B is a visitor; A gives the rules."],
        group: ["Groups design “The Museum of 2125” poster with 4 exhibits and short descriptions."],
        quick: [
          { q: "Give one museum rule.", a: "Don't touch the exhibits. (any)" },
          { q: "Why do countries build museums?", a: "To keep their heritage and teach people. (any)" },
          { q: "Make a prediction: In 100 years, …", a: "In 100 years, mobile phones will be displayed in museums. (any)" }
        ]
      }
    }
  ]
});

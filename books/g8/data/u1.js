// Unit 1 — Healthy Living (Module 1: Life Experiences, printed pages 15–20)
BOOK.addUnit({
  id: "u1", num: 1, title: "Healthy Living", titleAr: "الحياة الصحية",
  module: 1, moduleTitle: "Life Experiences",
  pages: [15, 20],
  cover: 13,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Talk about healthy living",
      "Describe pictures",
      "Make comparisons",
      "Give advice",
      "Talk about daily routines",
      "Talk about sporting habits",
      "Express opinions",
      "Express agreement/ disagreement"
    ],
    "language structures": [
      "Use infinitive/gerund",
      "Use simple present/ present continuous",
      "Use adverbs of frequency",
      "Form questions",
      "Make negatives"
    ],
    "module 1 – you are expected to": [
      "Determine the purpose of different texts",
      "Exchange information and personal opinions about different topics.",
      "Write connected paragraphs (email, short story) for different purposes."
    ],
    "module 1 – activities": [
      "Identifying the main ideas of texts",
      "Discussing familiar topics",
      "Designing a poster",
      "Retelling a story"
    ]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u1l1", num: 1, skill: "Reading",
      title: "Healthy Living",
      pages: [15, 16],
      status: "complete",
      canDo: ["Talk about healthy living.", "Describe pictures."],
      goals: ["Name sports from pictures.", "Read a text about exercise.", "Learn 7 new words.", "Find topic sentences and concluding sentences."],
      goalsAr: ["أسمّي الرياضات من الصور.", "أقرأ نصًا عن التمارين الرياضية.", "أتعلّم 7 كلمات جديدة.", "أحدّد الجملة الرئيسية والجملة الختامية."],
      warmup: {
        title: "Before you read",
        image: "crops/u1l1-warmup.jpg",
        emoji: "🏃",
        prompts: ["In pairs, match the pictures with the sports.", "Which sport do you like? Which sport do you do?"],
        seconds: 90
      },
      vocab: [
        { w: "sprinting", pos: "noun", emoji: "🏃", def: "running very fast for a short distance", ex: "Sprinting is a race over a short distance.", exFromBook: false, ar: "العدو السريع" },
        { w: "extremely", pos: "adverb", emoji: "‼️", def: "very, very much", ex: "It doesn’t have to be extremely difficult to keep fit.", exFromBook: true, ar: "للغاية / جدًا" },
        { w: "resistance", pos: "noun", emoji: "🏋️", def: "exercise where your muscles push or lift against a weight", ex: "Resistance training, such as push-ups and weight-lifting, is for building muscles.", exFromBook: true, ar: "المقاومة" },
        { w: "flexible", pos: "adjective", emoji: "🤸", def: "able to bend your body easily", ex: "Stretching activities, such as yoga, make you more flexible.", exFromBook: true, ar: "مرن" },
        { w: "regimen", pos: "noun", emoji: "📋", def: "a plan of exercise (or food) that you follow regularly", ex: "In general, it is important to have an exercise regimen which contains all the above types of exercise.", exFromBook: true, ar: "نظام / برنامج منتظم" },
        { w: "session", pos: "noun", emoji: "⏱️", def: "a period of time when you do one activity", ex: "A good exercise session has a warm-up of about 5–10 minutes.", exFromBook: true, ar: "حصّة / جلسة" },
        { w: "cool down", pos: "phrasal verb", emoji: "🧘", def: "to do slow, easy exercise at the end so your body can relax", ex: "Finally, stretching exercises will help you cool down.", exFromBook: true, ar: "يهدّئ الجسم (بعد التمرين)" }
      ],
      sections: [
        { type: "activity", title: "1. In pairs, match the pictures with the sports.", page: 15, source: "book",
          instructions: "Look at the 8 pictures. Write the number of the picture next to each sport. Cycling = 8 (the example).",
          instructionsAr: "انظر إلى الصور الثماني واكتب رقم الصورة بجانب كل رياضة. مثال: Cycling = 8.",
          image: "crops/u1l1-warmup.jpg",
          items: [
            { t: "fill", q: "Cycling → picture ____", answer: ["8"], hint: "This is the example.", why: "Picture 8 shows a person on a bicycle." },
            { t: "fill", q: "Basketball → picture ____", answer: ["1"], hint: "Look for a ball.", why: "Picture 1 shows a player bouncing a ball." },
            { t: "fill", q: "Weightlifting → picture ____", answer: ["2"], hint: "Look for a heavy bar.", why: "Picture 2 shows a person lifting a heavy bar with weights." },
            { t: "fill", q: "Skating → picture ____", answer: ["5"], hint: "Look for skates on the feet.", why: "Picture 5 shows an ice skater on one leg." },
            { t: "fill", q: "Skiing → picture ____", answer: ["3"], hint: "Look for skis and poles.", why: "Picture 3 shows a person on skis with poles." },
            { t: "fill", q: "Throwing the javelin → picture ____", answer: ["4"], hint: "Look for a long spear.", why: "Picture 4 shows a person throwing a javelin (a long spear)." },
            { t: "fill", q: "High jump → picture ____", answer: ["6"], hint: "Look for a bar and a jump.", why: "Picture 6 shows a person jumping backwards over a bar." },
            { t: "fill", q: "Sprinting → picture ____", answer: ["7"], hint: "Look for a fast runner.", why: "Picture 7 shows a person running very fast." }
          ] },

        { type: "reading", title: "Keeping Fit", page: 15,
          instructions: "2. Read the following text and match each title with the right paragraph.",
          paras: [
            "(A) When you are fit, studying becomes easier, and you can do daily tasks better. [[It doesn’t have to be extremely difficult to keep fit.]] Walking is easy and doesn’t need any special equipment. Try to take the stairs rather than the lift. Even playing a friendly game of football helps you keep fit.",
            "(B) There are three main types of exercise – aerobic, resistance and stretching. Aerobic exercise is when you make your heart and lungs work. Examples of this are swimming and roller skating. Resistance training, such as push-ups and weight-lifting, is for building muscles. Stretching activities, such as yoga, make you more flexible. [[In general, it is important to have an exercise regimen which contains all the above types of exercise.]]",
            "(C) It is important to have routine for training. A good exercise session has a warm-up of about 5–10 minutes. This could be walking or jogging. Then, move to exercises such as push-ups to help you strengthen your muscles. Include aerobic exercise like cycling and basketball. Finally, stretching exercises will help you cool down."
          ],
          speaker: null,
          note: "The text has no title in the book. The underlined sentences are for exercise 4." },

        { type: "activity", title: "2. Match each title with the right paragraph.", page: 15, source: "book",
          instructions: "Tap a title, then tap its paragraph.", instructionsAr: "صِل كل عنوان بالفقرة المناسبة.",
          items: [
            { t: "match", q: "Match each title with the right paragraph.",
              pairs: [["Types of Exercise", "Paragraph B"], ["How to Exercise", "Paragraph C"], ["Tips on How to Keep Fit", "Paragraph A"]],
              hint: "B lists three types. C gives the order: warm-up, then…, finally…",
              why: "B: “three main types of exercise”. C: warm-up → push-ups → aerobic → stretching (how to exercise). A: easy tips (walk, take the stairs, play football)." }
          ] },

        { type: "activity", title: "3. Read the second paragraph and write the missing information about each picture.", page: 16, source: "book",
          instructions: "Use paragraph B (and C) to complete the three cards. The red words are given in the book.",
          instructionsAr: "استخدم الفقرة الثانية لإكمال المعلومات عن كل صورة.",
          items: [
            { t: "table", q: "Complete the information about each picture.", open: true,
              head: ["Picture", "Sport / Exercise", "Type", "Good for"],
              rows: [
                ["🏀 Picture 1", "Sport: Basketball", { model: "Aerobic" }, { model: "It makes your heart and lungs work." }],
                ["💪 Picture 2", { model: "Push-ups" }, "Type: Resistance", { model: "Building muscles." }],
                ["🧘 Picture 3", { model: "Stretching (e.g. yoga)" }, { model: "Stretching" }, "Good for: It makes you more flexible."]
              ] }
          ] },

        { type: "grammar", title: "Remember:", page: 16,
          steps: [
            { title: "Topic sentences, supporting details and concluding sentences",
              text: "1. The topic sentence is the sentence that expresses the main idea of a paragraph. 2. The supporting details explain and clarify the main idea. 3. The concluding sentence rephrases the main idea.",
              textAr: "1. الجملة الرئيسية تعبّر عن الفكرة الرئيسية للفقرة. 2. التفاصيل الداعمة تشرح الفكرة الرئيسية وتوضّحها. 3. الجملة الختامية تعيد صياغة الفكرة الرئيسية.",
              examples: [] },
            { title: "How to find them (Extra)", source: "extra",
              text: "The topic sentence is often at the start of the paragraph. The supporting details give examples (walking, the stairs, football). The concluding sentence is at the end and often starts with words like “In general,” or “In conclusion,”.",
              textAr: "غالبًا تأتي الجملة الرئيسية في بداية الفقرة، والتفاصيل الداعمة تعطي أمثلة، والجملة الختامية في النهاية وتبدأ غالبًا بـ In general أو In conclusion.",
              examples: [] }
          ] },

        { type: "activity", title: "4. Look at the underlined sentences in each paragraph and decide whether they are: Topic sentences / Supporting details / Concluding sentences", page: 16, source: "book",
          instructions: "Read each underlined sentence. Choose the right type.", instructionsAr: "اقرأ كل جملة تحتها خط واختر نوعها.",
          items: [
            { t: "mcq", q: "Paragraph A: “It doesn’t have to be extremely difficult to keep fit.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0,
              hint: "Do the other sentences in A give examples of this idea?", why: "It gives the main idea of A (keeping fit can be easy). The next sentences (walking, the stairs, football) are supporting details." },
            { t: "mcq", q: "Paragraph B: “In general, it is important to have an exercise regimen which contains all the above types of exercise.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2,
              hint: "Where is it? What does “In general” do?", why: "It is the last sentence. It starts with “In general” and rephrases the main idea (all three types of exercise)." }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? (The last one: what kind of sentence is it?)", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Walking needs special equipment.", options: ["True", "False"], answer: 1, hint: "Paragraph A.", why: "“Walking is easy and doesn’t need any special equipment.”" },
            { t: "mcq", q: "There are three main types of exercise.", options: ["True", "False"], answer: 0, hint: "Paragraph B.", why: "Aerobic, resistance and stretching." },
            { t: "mcq", q: "Swimming is an example of aerobic exercise.", options: ["True", "False"], answer: 0, hint: "Paragraph B.", why: "“Examples of this are swimming and roller skating.”" },
            { t: "mcq", q: "A good warm-up is about 30 minutes.", options: ["True", "False"], answer: 1, hint: "Paragraph C.", why: "“A good exercise session has a warm-up of about 5–10 minutes.”" },
            { t: "mcq", q: "Stretching at the end helps you cool down.", options: ["True", "False"], answer: 0, hint: "The last sentence.", why: "“Finally, stretching exercises will help you cool down.”" },
            { t: "mcq", q: "“Stretching activities, such as yoga, make you more flexible.” Is this sentence a topic sentence, a supporting detail or a concluding sentence?", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1,
              hint: "Does it explain one part of the main idea?", why: "It explains one of the three types of exercise in paragraph B, so it is a supporting detail." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "Yoga makes your body more (flexible / extremely).", options: ["flexible", "extremely"], answer: 0, why: "flexible = able to bend easily." },
            { t: "choose", q: "Our football training (session / resistance) lasts one hour.", options: ["session", "resistance"], answer: 0, why: "A session is a period of time for one activity." },
            { t: "choose", q: "After the race, walk slowly to (cool down / sprinting).", options: ["cool down", "sprinting"], answer: 0, why: "cool down = relax the body after exercise." },
            { t: "choose", q: "Push-ups are (resistance / aerobic) training.", options: ["resistance", "aerobic"], answer: 0, why: "The text says push-ups and weight-lifting are resistance training." },
            { t: "choose", q: "My exercise (regimen / session) has running, push-ups and yoga every week.", options: ["regimen", "session"], answer: 0, why: "A regimen is the whole plan you follow regularly." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the silhouettes. Pairs match the sports (Cycling = 8 is done). Check quickly.",
          "Pre-teach the 7 words with emoji and Arabic (sprinting, extremely, resistance, flexible, regimen, session, cool down).",
          "Read A, B, C. Pairs match the three titles, then complete the three picture cards (ex. 3).",
          "Read the Remember box aloud. Then do ex. 4: A = topic sentence, B = concluding sentence (it starts with “In general”).",
          "The book has no answer key: answers here come from the text."
        ],
        pair: ["A says a sport; B says its type (aerobic / resistance / stretching) and one benefit.", "Pairs give each paragraph a new title of their own."],
        group: ["Groups plan a 20-minute exercise session (warm-up → muscles → aerobic → cool down) and present it."],
        quick: [
          { q: "What are the three main types of exercise?", a: "Aerobic, resistance and stretching." },
          { q: "What does a good session start with?", a: "A warm-up of about 5–10 minutes (walking or jogging)." },
          { q: "What does “flexible” mean?", a: "Able to bend your body easily." },
          { q: "Which sentence rephrases the main idea?", a: "The concluding sentence." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u1l2", num: 2, skill: "Grammar",
      title: "The -ing Form (Gerund); the Infinitive",
      pages: [16, 16],
      status: "complete",
      canDo: ["Use infinitive/gerund."],
      goals: ["Use the -ing form (gerund).", "Use to + base verb (infinitive).", "Know which words take -ing and which take to.", "Write sentences about sport."],
      goalsAr: ["أستخدم صيغة ing (اسم الفعل).", "أستخدم to + الفعل الأساسي (المصدر).", "أعرف الكلمات التي يأتي بعدها ing والتي يأتي بعدها to.", "أكتب جملًا عن الرياضة."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "🏋️",
        prompts: ["Look at the weightlifter. What does he need to do before a competition?", "What sports do you enjoy?"],
        seconds: 60
      },
      vocab: [
        { w: "warm up", pos: "phrasal verb", emoji: "🔥", def: "to do gentle exercise before sport", ex: "It is important to warm up for 10 minutes before the game.", exFromBook: false, ar: "يُحمّي (يُسخّن) الجسم" },
        { w: "enjoy", pos: "verb", emoji: "😊", def: "to like doing something", ex: "I enjoy playing football with my friends.", exFromBook: false, ar: "يستمتع بـ" },
        { w: "interested in", pos: "adjective + preposition", emoji: "🤔", def: "wanting to know or do more about something", ex: "My sister is interested in learning karate.", exFromBook: false, ar: "مهتمّ بـ" },
        { w: "prefer", pos: "verb", emoji: "👍", def: "to like one thing more than another", ex: "I prefer swimming to running.", exFromBook: false, ar: "يفضّل" },
        { w: "promise", pos: "verb", emoji: "🤝", def: "to say that you will certainly do something", ex: "I promise to exercise every day.", exFromBook: false, ar: "يَعِد" }
      ],
      sections: [
        { type: "grammar", title: "Grammar in context: the -ing form (gerund); the infinitive", page: 16,
          steps: [
            { title: "Step 1 — From the book",
              text: "Grammar in context: the -ing form (gerund); the infinitive. The book’s example (exercise 5): “Walking every day is very good for you.”",
              textAr: "القواعد في سياق: صيغة ing (اسم الفعل) والمصدر (to + الفعل). مثال الكتاب: Walking every day is very good for you.",
              examples: ["{v:Walking} every day is very good for you."] },
            { title: "Step 2 — The -ing form as the subject", source: "extra",
              text: "We can use verb + -ing like a noun. It can be the subject at the start of the sentence.",
              textAr: "يمكن أن نستخدم الفعل + ing كأنه اسم، ويأتي فاعلًا في بداية الجملة.",
              examples: ["{v:Walking} every day is very good for you.", "{v:Swimming} is my favourite sport."] },
            { title: "Step 3 — -ing after a preposition", source: "extra",
              text: "After a preposition (for, at, in, about…) we use the -ing form: good for, good at, interested in.",
              textAr: "بعد حرف الجر (for, at, in…) نستخدم صيغة ing.",
              examples: ["Resistance training is good {c:for} {v:building} the body.", "Ali is good {c:at} {v:running}.", "I am interested {c:in} {v:playing} tennis."] },
            { title: "Step 4 — -ing after enjoy", source: "extra",
              text: "After enjoy we use the -ing form, not to.",
              textAr: "بعد enjoy نستخدم صيغة ing وليس to.",
              examples: ["{s:I} {v:enjoy} {o:playing} football.", "{s:She} {v:enjoys} {o:cycling} with her family."] },
            { title: "Step 5 — The infinitive (to + base verb)", source: "extra",
              text: "After need, promise, want and It is important … we use to + base verb.",
              textAr: "بعد need و promise و want و It is important نستخدم to + الفعل الأساسي.",
              examples: ["{s:You} {v:need} {p:to train} hard.", "{s:I} {v:promise} {p:to exercise} every day.", "It is important {p:to warm up} for 10 minutes before the game."] },
            { title: "Step 6 — Both are correct: prefer and try", source: "extra",
              text: "prefer can take -ing or to + base verb, with the same meaning. try can also take both; try to + verb = make an effort to do something (like the text on page 15: “Try to take the stairs rather than the lift.”).",
              textAr: "الفعل prefer يأتي بعده ing أو to بالمعنى نفسه. والفعل try يأتي بعده الاثنان، و try to تعني يحاول.",
              examples: ["{s:I} {v:prefer} {o:swimming}. = {s:I} {v:prefer} {p:to swim}.", "{v:Try} {p:to take} the stairs rather than the lift."] },
            { title: "Step 7 — Be careful!",
              text: "Look at the word before the gap. enjoy / a preposition → -ing. need / promise / It is important → to + base verb.",
              textAr: "انظر إلى الكلمة قبل الفراغ: enjoy أو حرف جر ← ing. وبعد need / promise / It is important ← to + فعل.",
              source: "extra",
              examples: ["✗ I enjoy {n:to swim}. → ✓ I enjoy {v:swimming}.", "✗ She is good at {n:swim}. → ✓ good at {v:swimming}", "✗ I promise {n:exercising}. → ✓ I promise {p:to exercise}."] }
          ],
          table: {
            head: ["Word before", "Form", "Example"],
            rows: [
              ["(start of the sentence – subject)", "verb + -ing", "Walking every day is very good for you."],
              ["enjoy", "verb + -ing", "I enjoy playing football."],
              ["good at / good for / interested in", "preposition + verb + -ing", "She is good at swimming."],
              ["need / promise / want / it is important", "to + base verb", "I promise to exercise every day."],
              ["prefer / try", "-ing or to + base verb", "I prefer swimming. / I prefer to swim."]
            ]
          },
          worked: {
            q: "Complete: Resistance training is good for ____ the body. (build)",
            steps: [
              "Look at the word before the gap: “for”.",
              "“for” is a preposition.",
              "After a preposition we use the -ing form.",
              "build → building."
            ],
            a: "Resistance training is good {c:for} {v:building} the body."
          },
          notes: ["This table is Extra Practice: the book gives only the heading and the exercises.", "When a verb ends in -e, drop the e: exercise → exercising, practise → practising."] },

        { type: "activity", title: "5. Fill in the spaces with the correct form of the verbs in the following list", page: 16, source: "book", stage: "guided",
          instructions: "Use the verbs: train / warm up / walk / build. (walk is done in the example.) Write the -ing form or to + verb.",
          instructionsAr: "استخدم الأفعال: train / warm up / walk / build. اكتب صيغة ing أو to + الفعل.",
          items: [
            { t: "fill", q: "1. ____ every day is very good for you. (example)", answer: ["Walking"], hint: "The verb is the subject at the start.", why: "The -ing form can be the subject: Walking." },
            { t: "fill", q: "2. You need ____ hard for the weight lifting competition.", answer: ["to train"], hint: "need + to + base verb.", why: "After need we use to + base verb: to train." },
            { t: "fill", q: "3. It is important ____ for 10 minutes before the game.", answer: ["to warm up"], hint: "It is important + to + base verb.", why: "After “It is important” we use to + base verb: to warm up." },
            { t: "fill", q: "4. Resistance training is good for ____ the body.", answer: ["building"], hint: "“for” is a preposition.", why: "After a preposition (for) we use the -ing form: building." }
          ] },

        { type: "write", title: "6. Use the words in the list to write sentences about sport with the infinitive or the gerund. Check with your partner for mistakes.", page: 16, source: "book",
          instructions: "Use: enjoy / good at / try / interested in / prefer / promise. Write 4 sentences. Then check your partner’s sentences.",
          wordBank: ["enjoy", "good at", "try", "interested in", "prefer", "promise"],
          frame: [
            { label: "1.", hint: "I enjoy …ing …" },
            { label: "2.", hint: "My friend is good at …ing …" },
            { label: "3.", hint: "I am interested in …ing …" },
            { label: "4.", hint: "I promise to … / I prefer … / I try to …" }
          ],
          model: "I enjoy playing basketball with my friends.\nMy brother is good at swimming.\nI am interested in learning karate.\nI promise to exercise three times a week.",
          modelFromBook: false,
          checklist: ["After enjoy, good at and interested in I used -ing.", "After promise I used to + base verb.", "I started each sentence with a capital letter.", "I ended each sentence with a full stop."],
          minWords: 20 },

        { type: "discuss", title: "Tip: Visit the school library", page: 16, source: "book",
          prompts: ["Visit the school library. Search for books about lifestyles (food, activities, sports) and make a presentation about how you can make yours better and healthier. Share your ideas with the class."],
          image: null, emoji: "📚", seconds: 120 },

        { type: "activity", title: "Extra Practice: Step 1 — -ing or to?", source: "extra", stage: "guided",
          instructions: "Choose the correct form. Sometimes both are correct.", instructionsAr: "اختر الصيغة الصحيحة. أحيانًا تكون الاثنتان صحيحتين.",
          items: [
            { t: "mcq", q: "I enjoy ____ football after school.", options: ["playing", "to play"], answer: 0, hint: "enjoy + ?", why: "enjoy + -ing: I enjoy playing." },
            { t: "mcq", q: "You need ____ more water when it is hot.", options: ["drinking", "to drink"], answer: 1, hint: "need + ?", why: "need + to + base verb: to drink." },
            { t: "mcq", q: "Sara is good at ____.", options: ["swimming", "to swim"], answer: 0, hint: "at is a preposition.", why: "Preposition + -ing: good at swimming." },
            { t: "mcq", q: "I promise ____ my homework on time.", options: ["doing", "to do"], answer: 1, hint: "promise + ?", why: "promise + to + base verb: to do." },
            { t: "mcq", q: "My father prefers ____ in the morning.", options: ["walking", "to walk"], answer: [0, 1], hint: "prefer can take both.", why: "prefer + -ing and prefer + to + verb have the same meaning." },
            { t: "mcq", q: "____ is a good way to keep fit.", options: ["Cycling", "To cycling"], answer: 0, hint: "The verb is the subject.", why: "The -ing form is the subject: Cycling is…" }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🚶 Make a sentence.", words: ["Walking", "is", "good", "for", "your", "heart."], answer: ["Walking is good for your heart."], hint: "Start with the -ing subject.", why: "-ing subject + is + good for…" },
            { t: "order", q: "🏊 Make a sentence.", words: ["She", "is", "interested", "in", "learning", "to", "swim."], answer: ["She is interested in learning to swim."], hint: "interested in + -ing.", why: "interested in + learning; learn + to swim." },
            { t: "order", q: "🤝 Make a sentence.", words: ["I", "promise", "to", "eat", "more", "vegetables."], answer: ["I promise to eat more vegetables."], hint: "promise + to + verb.", why: "promise + to + base verb." },
            { t: "order", q: "⚽ Make a sentence.", words: ["They", "enjoy", "playing", "football", "together."], answer: ["They enjoy playing football together."], hint: "enjoy + -ing.", why: "enjoy + playing." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct form.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "I enjoy {to run} in the park.", answer: ["running"], hint: "enjoy + -ing.", why: "After enjoy we use -ing: running." },
            { t: "fix", q: "He is good at {jump}.", answer: ["jumping"], hint: "at is a preposition.", why: "Preposition + -ing: jumping." },
            { t: "fix", q: "You need {training} hard before the race.", answer: ["to train"], hint: "need + to + verb.", why: "need + to + base verb: to train." },
            { t: "fix", q: "{Swim} is fun in summer.", answer: ["Swimming"], hint: "The verb is the subject.", why: "The subject needs the -ing form: Swimming." },
            { t: "short", q: "Write your own sentence with “interested in”.", model: "I am interested in playing tennis.", open: true, hint: "interested in + verb-ing." }
          ] }
      ],
      game: { kind: "sort", title: "-ing or to?",
        buckets: ["+ -ing", "+ to + verb"],
        cards: [["enjoy", 0], ["good at", 0], ["interested in", 0], ["good for", 0], ["need", 1], ["promise", 1], ["want", 1], ["It is important", 1]] },
      teacher: {
        notes: [
          "Warm-up: point at the weightlifter. Ask: What does he need to do? (He needs to train hard.)",
          "Teach: -ing as subject; -ing after prepositions and enjoy; to + verb after need, promise, it is important. prefer/try take both.",
          "Do the worked example (good for + building), then exercise 5.",
          "Exercise 6: students write 4 sentences, then swap and check their partner’s sentences.",
          "Tip: the library presentation can be a homework project."
        ],
        pair: ["“I enjoy…” chain: A says “I enjoy swimming.” B says “I promise to …” and continues.", "Partners check each other’s exercise 6 sentences with the table."],
        group: ["Groups sort word cards (enjoy, need, good at, promise…) into “-ing” and “to” boxes on the board."],
        quick: [
          { q: "Complete: I enjoy ___ (play) football.", a: "playing" },
          { q: "Complete: You need ___ (train) hard.", a: "to train" },
          { q: "What form comes after a preposition?", a: "The -ing form (e.g. good at swimming)." },
          { q: "Can we say “I prefer swimming” and “I prefer to swim”?", a: "Yes, both are correct." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u1l3", num: 3, skill: "Listening",
      title: "Athletics",
      pages: [17, 17],
      status: "complete",
      canDo: ["Talk about sporting habits.", "Describe pictures."],
      goals: ["Name sports equipment.", "Listen to people talking about sport.", "Complete a table while listening."],
      goalsAr: ["أسمّي الأدوات الرياضية.", "أستمع إلى أشخاص يتحدّثون عن الرياضة.", "أكمل جدولًا أثناء الاستماع."],
      warmup: {
        title: "Athletics",
        image: "crops/u1l3-warmup.jpg",
        emoji: "🏹",
        prompts: ["Which sports goes with each piece of equipment?", "What are the benefits / dangers of these sports?"],
        seconds: 90
      },
      vocab: [
        { w: "arrow", pos: "noun", emoji: "🏹", def: "a thin stick with a sharp point that you shoot from a bow", ex: "He shot an arrow at the target.", exFromBook: false, ar: "سهم" },
        { w: "boxing gloves", pos: "noun", emoji: "🥊", def: "big, soft gloves that boxers wear", ex: "Boxers wear boxing gloves to protect their hands.", exFromBook: false, ar: "قفازات الملاكمة" },
        { w: "cue", pos: "noun", emoji: "🎱", def: "a long stick used to hit the balls in billiards", ex: "Hold the cue with both hands.", exFromBook: false, ar: "عصا البلياردو" },
        { w: "cleats", pos: "noun", emoji: "👟", def: "sports shoes with hard points under them so you do not slip on grass", ex: "Football players wear cleats on the grass.", exFromBook: false, ar: "حذاء رياضي بنتوءات (للملاعب العشبية)" },
        { w: "pins", pos: "noun", emoji: "🎳", def: "the white bottle-shaped objects you knock down in bowling", ex: "She knocked down all ten pins.", exFromBook: false, ar: "قوارير البولينج" },
        { w: "fishing rod", pos: "noun", emoji: "🎣", def: "a long stick with a line that you use to catch fish", ex: "My grandfather took his fishing rod to the sea.", exFromBook: false, ar: "صنّارة صيد" }
      ],
      sections: [
        { type: "activity", title: "1. Match the pictures with the right equipment.", page: 17, source: "book",
          instructions: "Which sport goes with each piece of equipment? Write the name of the sport.",
          instructionsAr: "اكتب اسم الرياضة المناسبة لكل أداة.",
          image: "crops/u1l3-warmup.jpg",
          items: [
            { t: "table", q: "Write the name of each sport.",
              head: ["", "Sports Equipment", "Name of Sports"],
              rows: [
                ["1", "Bow and arrows", { answer: ["archery"], model: "archery" }],
                ["2", "Boxing gloves", { answer: ["boxing"], model: "boxing" }],
                ["3", "Billiards cue/ balls", { answer: ["billiards", "pool", "snooker"], model: "billiards" }],
                ["4", "Cleats", { answer: ["football", "soccer", "baseball", "rugby", "american football"], model: "football" }],
                ["5", "Bowling ball/ pins", { answer: ["bowling", "tenpin bowling", "ten-pin bowling"], model: "bowling" }],
                ["6", "Fishing rod", { answer: ["fishing"], model: "fishing" }]
              ],
              hint: "The sport name is often like the equipment name: boxing gloves → boxing.",
              why: "Bow and arrows → archery; gloves → boxing; cue → billiards; cleats → football (also baseball, rugby); ball and pins → bowling; rod → fishing." }
          ] },

        { type: "discuss", title: "1. Talk about the sports", page: 17, source: "book",
          prompts: ["Which sports goes with each piece of equipment?", "What are the benefits / dangers of these sports?"],
          image: "crops/u1l3-warmup.jpg", emoji: "💬", seconds: 120 },

        { type: "listen", title: "2. a. Guess what these sports are, then listen and check", page: 17, source: "book",
          track: "1.1",
          needsAudio: true,
          instructions: "Track 1.1. First guess: what are these sports? Write your guess. Then listen and check.",
          items: [
            { t: "short", q: "Sprinting:", open: true, hint: "Guess first: is it running, jumping or throwing?" },
            { t: "short", q: "Shot put:", open: true, hint: "Guess first: is it running, jumping or throwing?" }
          ] },

        { type: "listen", title: "2. b. Choose what the speakers were talking about.", page: 17, source: "book",
          track: "1.1",
          needsAudio: true,
          instructions: "Track 1.1. Write the letter: a. Famous Athletes  b. Sports Races  c. Doing Sports  d. The Olympic Games",
          items: [
            { t: "short", q: "The speakers were talking about: (a / b / c / d)", open: true, hint: "Listen to the whole recording. What is the main topic?" }
          ] },

        { type: "listen", title: "3. Listen again and complete the table.", page: 17, source: "book",
          track: "1.1",
          needsAudio: true,
          instructions: "Track 1.1. Listen again. Write the missing information.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["", "Favourite sport", "How often", "Today"],
              rows: [
                ["Ayman", { open: true }, { open: true }, "He is doing long jump."],
                ["Maha", { open: true }, "Two or three times a week", { open: true }],
                ["Fawzi", "Throwing (Javelin, shot put and discus)", { open: true }, { open: true }]
              ] }
          ] },

        { type: "listen", title: "Extra Practice: Sports Day (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Teacher", text: "Good morning! Today is Sports Day. Bader, what is your favourite sport?" },
            { who: "Bader", text: "My favourite sport is sprinting. I run on the track three times a week. Today I am running the one hundred metres." },
            { who: "Teacher", text: "Great! And you, Dana?" },
            { who: "Dana", text: "I love archery. I practise with my bow and arrows every Saturday. Today I am helping the younger students." },
            { who: "Teacher", text: "And Yousef?" },
            { who: "Yousef", text: "I like the shot put. I throw a heavy metal ball. I train every day after school, and today I am competing for my class." }
          ],
          items: [
            { t: "mcq", q: "What is Bader’s favourite sport?", options: ["archery", "sprinting", "the shot put", "football"], answer: 1, why: "“My favourite sport is sprinting.”" },
            { t: "mcq", q: "How often does Bader run on the track?", options: ["every day", "once a week", "three times a week", "on Saturdays"], answer: 2, why: "“I run on the track three times a week.”" },
            { t: "mcq", q: "What does Dana use?", options: ["a bow and arrows", "boxing gloves", "a fishing rod", "a cue"], answer: 0, why: "“I practise with my bow and arrows.”" },
            { t: "mcq", q: "What is Dana doing today?", options: ["She is running.", "She is helping the younger students.", "She is throwing a ball.", "She is swimming."], answer: 1, why: "“Today I am helping the younger students.”" },
            { t: "mcq", q: "When does Yousef train?", options: ["every Saturday", "twice a week", "every day after school", "in the morning"], answer: 2, why: "“I train every day after school.”" },
            { t: "fill", q: "In the shot put, you throw a heavy metal ____.", answer: ["ball"], bank: ["ball", "arrow", "pin"], why: "“I throw a heavy metal ball.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Equipment & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the equipment photo. Students number the pictures and name the sports (archery, boxing, billiards, football, bowling, fishing).",
          "Discuss the benefits and dangers of each sport (e.g. boxing → strong body / injuries).",
          "Exercise 2a: students guess first (sprinting = running fast; shot put = throwing a heavy ball). Then play track 1.1.",
          "Play track 1.1 again for exercise 3. There is no answer key: accept answers that match the recording.",
          "If the recording is not available, use the Extra Practice script (computer voice)."
        ],
        pair: ["A names a piece of equipment; B names the sport and one benefit.", "Pairs compare their tables before class feedback."],
        group: ["Groups of 3: each student is Ayman, Maha or Fawzi and tells the group about “his/her” sport."],
        quick: [
          { q: "Which sport uses a bow and arrows?", a: "Archery." },
          { q: "What is sprinting?", a: "Running very fast for a short distance." },
          { q: "What do bowlers knock down?", a: "Pins." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u1l4", num: 4, skill: "Grammar",
      title: "Present Simple or Present Continuous",
      pages: [18, 18],
      status: "complete",
      canDo: ["Use simple present/ present continuous.", "Use adverbs of frequency.", "Talk about sporting habits."],
      goals: ["Talk about habits with the present simple.", "Talk about now with the present continuous.", "Use usually, sometimes and never.", "Design a gym poster."],
      goalsAr: ["أتحدّث عن العادات بالمضارع البسيط.", "أتحدّث عمّا يحدث الآن بالمضارع المستمر.", "أستخدم usually و sometimes و never.", "أصمّم ملصقًا لنادٍ رياضي."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "🏃",
        prompts: ["What sport do you usually do?", "What are you doing at the moment?"],
        seconds: 60
      },
      vocab: [
        { w: "gym", pos: "noun", emoji: "🏋️", def: "a place with machines where people exercise", ex: "My father goes to the gym three times a week.", exFromBook: false, ar: "نادٍ رياضي (صالة رياضية)" },
        { w: "logo", pos: "noun", emoji: "🔰", def: "a small picture or symbol of a company or club", ex: "Our gym logo is a red heart.", exFromBook: false, ar: "شعار" },
        { w: "benefit", pos: "noun", emoji: "✅", def: "a good result; something that helps you", ex: "One benefit of swimming is a strong heart.", exFromBook: false, ar: "فائدة" }
      ],
      sections: [
        { type: "grammar", title: "Grammar in context: Present simple or Present continuous", page: 18,
          steps: [
            { title: "Step 1 — From the book",
              text: "The book’s table has two columns: “often / usually” and “at the moment / now”. Its examples: “He often goes running.” “She is doing the long jump now.” The expressions in exercise 5: sometimes / usually / never / at the moment / now (usually 75% – sometimes 50% – never 0%).",
              textAr: "جدول الكتاب فيه عمودان: often / usually للعادات، و at the moment / now لما يحدث الآن.",
              examples: ["{s:He} {t:often} {v:goes} running.", "{s:She} {a:is} {v:doing} the long jump {t:now}."] },
            { title: "Step 2 — Present simple = habits and routines", source: "extra",
              text: "We use the present simple for things we do again and again. With he / she / it, add -s or -es to the verb.",
              textAr: "نستخدم المضارع البسيط للعادات والأشياء المتكرّرة، ومع he / she / it نضيف s أو es للفعل.",
              examples: ["{s:I} {t:usually} {v:play} football on Fridays.", "{s:Maha} {v:trains} {t:two or three times a week}."] },
            { title: "Step 3 — Present continuous = happening now", source: "extra",
              text: "We use am / is / are + verb-ing for actions happening now or at the moment.",
              textAr: "نستخدم am / is / are + الفعل مع ing لما يحدث الآن.",
              examples: ["{s:I} {a:am} {v:reading} {t:at the moment}.", "{s:They} {a:are} {v:running} {t:now}."] },
            { title: "Step 4 — Adverbs of frequency: where do they go?", source: "extra",
              text: "always (100%) – usually (75%) – often – sometimes (50%) – never (0%). They go before the main verb, but after am / is / are.",
              textAr: "ظروف التكرار تأتي قبل الفعل الرئيسي، وبعد am / is / are.",
              examples: ["{s:He} {t:never} {v:eats} fast food.", "{s:She} {a:is} {t:usually} tired after training."] },
            { title: "Step 5 — Negatives and questions", source: "extra",
              text: "Present simple: don’t / doesn’t + base verb; Do / Does …? Present continuous: am not / isn’t / aren’t + -ing; Am / Is / Are …?",
              textAr: "النفي والسؤال: في البسيط don’t / doesn’t و Do / Does، وفي المستمر isn’t / aren’t و Is / Are.",
              examples: ["{s:He} {n:doesn’t} {v:swim} every day.", "{q:Does} {s:she} {v:play} tennis?", "{s:They} {n:aren’t} {v:playing} {t:now}.", "{q:Is} {s:he} {v:running} {t:at the moment}?"] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Look for the keyword: often / usually / every day → present simple. now / at the moment / Look! → present continuous.",
              textAr: "ابحث عن الكلمة الدالة: often / usually ← مضارع بسيط. now / at the moment ← مضارع مستمر.",
              examples: ["✗ He {n:is often going} running. → ✓ He often {v:goes} running.", "✗ She {n:does} the long jump now. → ✓ She {a:is} {v:doing} the long jump now."] }
          ],
          table: {
            head: ["", "often / usually", "at the moment / now"],
            rows: [
              ["Abdulaziz", "He often goes running.", "…"],
              ["Nour", "…", "She is doing the long jump now."]
            ]
          },
          worked: {
            q: "Complete: Look! Hanan ____ (swim) in the pool now.",
            steps: [
              "Find the keyword: “now” (and “Look!”).",
              "now → the action is happening at this moment → present continuous.",
              "Hanan = she → is.",
              "is + swim + -ing → is swimming (double the m)."
            ],
            a: "Look! {s:Hanan} {a:is} {v:swimming} in the pool {t:now}."
          },
          notes: ["Some verbs are not usually used in the continuous: like, love, know, want. Say “I like football”, not “I am liking football”."] },

        { type: "listen", title: "4. Listen and make notes about Abdulaziz, Nour and Hanan.", page: 18, source: "book",
          track: "1.2",
          needsAudio: true,
          instructions: "Track 1.2. Listen. Write what each person often / usually does, and what he/she is doing at the moment / now.",
          items: [
            { t: "table", q: "Make notes.", open: true,
              head: ["", "often / usually", "at the moment / now"],
              rows: [
                ["Abdulaziz", "He often goes running.", { open: true }],
                ["Nour", { open: true }, "She is doing the long jump now."],
                ["Hanan", { open: true }, { open: true }]
              ] }
          ] },

        { type: "write", title: "5. In pairs, discuss and write sentences about your partner’s sporting habits using the following expressions:", page: 18, source: "book",
          instructions: "Ask your partner about sport. Then write 4 sentences. Use: sometimes / usually / never / at the moment / now.",
          wordBank: ["sometimes", "usually", "never", "at the moment", "now"],
          frame: [
            { label: "1.", hint: "My partner usually …" },
            { label: "2.", hint: "He / She sometimes …" },
            { label: "3.", hint: "He / She never …" },
            { label: "4.", hint: "At the moment, he / she is …ing …" }
          ],
          model: "My partner usually plays football on Fridays.\nHe sometimes goes swimming with his brother.\nHe never plays tennis.\nAt the moment, he is training for the school race.",
          modelFromBook: false,
          checklist: ["I used the present simple with usually / sometimes / never.", "I added -s to the verb with he / she.", "I used is + -ing with now / at the moment.", "I started with a capital letter and ended with a full stop."],
          minWords: 20 },

        { type: "write", title: "6. Design a poster for a gym. Give it a name, agree on a logo and discuss the benefits. Draw the logo and write the benefits in the spaces.", page: 18, source: "book",
          instructions: "Work in a group. Agree on a name and a logo. Draw the logo on paper. Write the benefits of your gym here.",
          wordBank: ["healthy", "strong", "flexible", "fit", "muscles", "heart", "energy", "classes", "trainers"],
          frame: [
            { label: "Name", hint: "e.g. Fit & Fun Gym" },
            { label: "Logo", hint: "Describe your logo: colours, shape, picture…" },
            { label: "Benefits", hint: "At our gym, you can … / It helps you …", lines: 5 }
          ],
          model: "Name: Strong Hearts Gym\nLogo: a red heart with a blue dumbbell inside it.\nBenefits: At our gym, you can build your muscles and make your heart strong. Our trainers help you every day. We have yoga classes to make you flexible. You feel healthy and full of energy.",
          modelFromBook: false,
          checklist: ["Our gym has a name.", "We described the logo.", "We wrote at least three benefits.", "We checked spelling and capital letters."],
          minWords: 20 },

        { type: "listen", title: "Extra Practice: At the Sports Club (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. Listen to three people. What do they usually do? What are they doing now?",
          script: [
            { who: "Reporter", text: "Hello! I’m at the sports club. Fahad, what do you usually do here?" },
            { who: "Fahad", text: "I usually swim. I come here four times a week. But at the moment I am lifting weights, because I want strong arms." },
            { who: "Reporter", text: "And you, Mariam?" },
            { who: "Mariam", text: "I sometimes play tennis, but I usually do yoga. Right now I am resting. I am drinking some water." },
            { who: "Reporter", text: "Khalid, are you running?" },
            { who: "Khalid", text: "No, I’m not running now. I am talking to my coach. I never miss training on Mondays." }
          ],
          items: [
            { t: "mcq", q: "What does Fahad usually do?", options: ["He lifts weights.", "He swims.", "He plays tennis.", "He runs."], answer: 1, why: "“I usually swim.”" },
            { t: "mcq", q: "What is Fahad doing at the moment?", options: ["He is swimming.", "He is resting.", "He is lifting weights.", "He is talking to his coach."], answer: 2, why: "“At the moment I am lifting weights.”" },
            { t: "mcq", q: "What does Mariam usually do?", options: ["yoga", "tennis", "swimming", "running"], answer: 0, why: "“I sometimes play tennis, but I usually do yoga.”" },
            { t: "mcq", q: "What is Mariam doing right now?", options: ["She is doing yoga.", "She is drinking some water.", "She is playing tennis.", "She is running."], answer: 1, why: "“Right now I am resting. I am drinking some water.”" },
            { t: "mcq", q: "Is Khalid running now?", options: ["Yes, he is.", "No, he isn’t."], answer: 1, why: "“No, I’m not running now. I am talking to my coach.”" },
            { t: "fill", q: "Khalid ____ misses training on Mondays.", answer: ["never"], bank: ["never", "usually", "always"], why: "“I never miss training on Mondays.”" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Simple or continuous?", source: "extra", stage: "guided",
          instructions: "Look at the keyword. Choose the correct verb.", instructionsAr: "انظر إلى الكلمة الدالة واختر الفعل الصحيح.",
          items: [
            { t: "choose", q: "Abdulaziz often (goes / is going) running.", options: ["goes", "is going"], answer: 0, why: "often = habit → present simple." },
            { t: "choose", q: "Be quiet! The baby (sleeps / is sleeping) now.", options: ["sleeps", "is sleeping"], answer: 1, why: "now → present continuous." },
            { t: "choose", q: "My sister usually (plays / is playing) basketball after school.", options: ["plays", "is playing"], answer: 0, why: "usually → present simple." },
            { t: "choose", q: "At the moment, we (do / are doing) our homework.", options: ["do", "are doing"], answer: 1, why: "At the moment → present continuous." },
            { t: "choose", q: "He (never eats / is never eating) fast food.", options: ["never eats", "is never eating"], answer: 0, why: "never = a habit → present simple." },
            { t: "choose", q: "Look! They (run / are running) in the race.", options: ["run", "are running"], answer: 1, why: "Look! = happening now → present continuous." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Write the verb", source: "extra", stage: "guided",
          instructions: "Write the correct form of the verb in brackets.", instructionsAr: "اكتب الصيغة الصحيحة للفعل بين القوسين.",
          items: [
            { t: "fill", q: "Maha ____ (train) two or three times a week.", answer: ["trains"], hint: "a habit + she → -s", why: "Habit, she → trains." },
            { t: "fill", q: "Nour ____ (do) the long jump now.", answer: ["is doing"], hint: "now → is + -ing", why: "now → present continuous: is doing." },
            { t: "fill", q: "I ____ (not / like) cold weather.", answer: ["don’t like", "do not like"], hint: "like is not used in the continuous.", why: "Present simple negative: don’t like." },
            { t: "fill", q: "____ your brother usually play tennis?", answer: ["Does"], hint: "your brother = he", why: "Present simple question with he: Does … play?" },
            { t: "fill", q: "We ____ (not / watch) TV at the moment.", answer: ["aren’t watching", "are not watching"], hint: "at the moment → are + not + -ing", why: "Present continuous negative: aren’t watching." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — On your own", source: "extra", stage: "independent",
          instructions: "Fix the mistake, then write about yourself.", instructionsAr: "صحّح الخطأ ثم اكتب عن نفسك.",
          items: [
            { t: "fix", q: "She {go} to the gym every Monday.", answer: ["goes"], hint: "she + -es", why: "Habit with she: goes." },
            { t: "fix", q: "They {playing} football now.", answer: ["are playing"], hint: "now → are + -ing", why: "Present continuous needs are: are playing." },
            { t: "fix", q: "He {is usually walking} to school.", answer: ["usually walks"], hint: "usually → present simple.", why: "Habit → usually walks." },
            { t: "short", q: "Write one sentence about what you usually do on Fridays and one about what you are doing now.", model: "I usually visit my grandparents on Fridays. Now I am studying English.", open: true, hint: "usually + present simple; now + am + -ing." }
          ] }
      ],
      game: { kind: "sort", title: "Habit or Now?",
        buckets: ["Present simple (habit)", "Present continuous (now)"],
        cards: [["He often goes running.", 0], ["She is doing the long jump now.", 1], ["I usually swim on Fridays.", 0], ["They are playing at the moment.", 1], ["We never eat fast food.", 0], ["Look! He is jumping.", 1], ["She sometimes plays tennis.", 0], ["I am reading now.", 1]] },
      teacher: {
        notes: [
          "Warm-up: ask “What do you usually do after school?” and “What are you doing now?” Write the two answers in two columns.",
          "Teach the two columns from the book’s table (often / usually vs at the moment / now), then the -s rule and am/is/are + -ing.",
          "Play track 1.2 for exercise 4 (notes about Abdulaziz, Nour and Hanan). No answer key: check with the recording.",
          "Exercise 5: pairs interview each other, then write 4 sentences.",
          "Exercise 6: groups design the gym poster on paper (name, logo, benefits) and present it."
        ],
        pair: ["Mime game: A mimes a sport; B says “You are swimming!” Then B asks “How often do you swim?”"],
        group: ["Gym poster: each group presents its name, logo and three benefits; the class votes for the best gym."],
        quick: [
          { q: "Which tense for habits?", a: "Present simple (He often goes running)." },
          { q: "Which tense for now / at the moment?", a: "Present continuous (She is doing the long jump now)." },
          { q: "Where does “never” go: He ___ eats ___ fast food?", a: "Before the verb: He never eats fast food." },
          { q: "Make it negative: She is running.", a: "She isn’t running." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — READING ─────────────────────────
    {
      id: "u1l5", num: 5, skill: "Reading",
      title: "Healthy Diet",
      pages: [19, 20],
      status: "complete",
      canDo: ["Express opinions.", "Make comparisons.", "Express agreement/ disagreement."],
      goals: ["Read a text about vegetarianism.", "Find the main idea of each paragraph.", "Learn 7 new words.", "Say if I agree with the writer."],
      goalsAr: ["أقرأ نصًا عن النظام الغذائي النباتي.", "أجد الفكرة الرئيسية لكل فقرة.", "أتعلّم 7 كلمات جديدة.", "أقول هل أتفق مع الكاتب."],
      warmup: {
        title: "Before you read — Think, pair, share",
        image: "crops/u1l5-warmup.jpg",
        emoji: "🥗",
        prompts: ["What does this picture show?", "What are the main food groups?"],
        seconds: 90
      },
      vocab: [
        { w: "strict", pos: "adjective", emoji: "📏", def: "that must be followed exactly", ex: "They follow a strict diet that includes fruits, vegetables, cereal grains, nuts, seeds and sometimes eggs and dairy products.", exFromBook: true, ar: "صارم" },
        { w: "risk", pos: "noun", emoji: "⚠️", def: "the chance that something bad will happen", ex: "The main advantage is that there is less risk of obesity and heart disease.", exFromBook: true, ar: "خطر" },
        { w: "obesity", pos: "noun", emoji: "⚖️", def: "being very fat in a way that is bad for your health", ex: "The main advantage is that there is less risk of obesity and heart disease.", exFromBook: true, ar: "السِّمنة" },
        { w: "amount", pos: "noun", emoji: "🔢", def: "how much of something there is", ex: "The diet includes high amounts of vitamin C, folic acid and fiber.", exFromBook: true, ar: "كمية" },
        { w: "gain", pos: "verb", emoji: "⚡", def: "to get something, often slowly", ex: "Lastly, more energy is gained from vegetables because they are the primary source of the food chain.", exFromBook: true, ar: "يكتسب" },
        { w: "lack", pos: "verb", emoji: "🚫", def: "to not have something, or not have enough of it", ex: "Vegetarians who do not consume milk or dairy products can lack vitamin D as well.", exFromBook: true, ar: "يفتقر إلى" },
        { w: "adequate", pos: "adjective", emoji: "👌", def: "enough for what you need", ex: "These nutrients are all found in the vegetarian diet but not in adequate amounts.", exFromBook: true, ar: "كافٍ" }
      ],
      sections: [
        { type: "reading", title: "Healthy Diet", page: 19,
          instructions: "2. Read the following text and write the main idea of each paragraph.",
          paras: [
            "Vegetarianism has become popular worldwide. Some people stop eating meat because they believe it to be the key to a healthy life. They follow a strict diet that includes fruits, vegetables, cereal grains, nuts, seeds and sometimes eggs and dairy products.",
            "A vegetarian diet has its advantages. The main advantage is that there is less risk of obesity and heart disease. The diet includes high amounts of vitamin C, folic acid and fiber. This diet helps to avoid diseases because of the vegetables which are an excellent source of antioxidants. A vegetarian diet helps in digestion because vegetables contain more fiber. Lastly, more energy is gained from vegetables because they are the primary source of the food chain.",
            "Being a vegetarian, also, has its downside. It can negatively affect your health. This diet is low in calcium, proteins, iron, vitamin B12 and zinc. Vegetarians who do not consume milk or dairy products can lack vitamin D as well. These nutrients are all found in the vegetarian diet but not in adequate amounts. Athletes for instance cannot be vegetarians because they need huge amounts of protein that is found in meat.",
            "In conclusion, I think that eating a balanced diet is important for maintaining good health and keeping the body in top condition. I think a balanced diet does not cut out any food group. It consists of a wide variety of foods, served in the correct amounts to support our body and keep us energised, motivated and healthy."
          ],
          speaker: null },

        { type: "activity", title: "2. Write the main idea of each paragraph.", page: 19, source: "book",
          instructions: "Read each paragraph again. What is it about? Write one short sentence.", instructionsAr: "اكتب الفكرة الرئيسية لكل فقرة في جملة قصيرة.",
          items: [
            { t: "short", q: "Paragraph 1", model: "Vegetarianism has become popular worldwide: some people stop eating meat and follow a strict diet.", keywords: [["vegetarian"], ["popular", "meat", "diet"]], hint: "Read the first sentence." },
            { t: "short", q: "Paragraph 2", model: "The advantages of a vegetarian diet.", keywords: [["advantage", "good", "benefit"]], hint: "Read the first sentence: “A vegetarian diet has its …”" },
            { t: "short", q: "Paragraph 3", model: "The downside (disadvantages) of being a vegetarian.", keywords: [["downside", "disadvantage", "bad", "negative"]], hint: "Read the first sentence: “Being a vegetarian, also, has its …”" },
            { t: "short", q: "Paragraph 4", model: "The writer’s opinion: a balanced diet is important for good health.", keywords: [["balanced"]], hint: "It starts with “In conclusion, I think…”." }
          ] },

        { type: "activity", title: "3. Answer the following questions:", page: 20, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What does vegetarianism mean?",
              model: "Not eating meat: following a strict diet of fruits, vegetables, cereal grains, nuts, seeds and sometimes eggs and dairy products.",
              keywords: [["meat"]], hint: "Read paragraph 1." },
            { t: "short", q: "2. Which paragraph is against vegetarianism? How can you tell?",
              model: "Paragraph 3. It starts with “Being a vegetarian, also, has its downside” and says it can negatively affect your health (low in calcium, proteins, iron, vitamin B12 and zinc).",
              keywords: [["3", "three", "third"], ["downside", "negative", "low", "lack"]], hint: "Which paragraph talks about problems?" },
            { t: "short", q: "3. What is the writer’s opinion of vegetarianism?",
              model: "The writer thinks a balanced diet is better: it does not cut out any food group and has a wide variety of foods in the correct amounts.",
              keywords: [["balanced"]], hint: "Read paragraph 4 (In conclusion, I think…)." },
            { t: "short", q: "4. Do you agree with the writer? Why? Why not?",
              model: "I agree with the writer because our body needs all the food groups, for example protein from meat and calcium from milk.",
              open: true, hint: "I agree / I don’t agree with the writer because …" }
          ] },

        { type: "activity", title: "Extra Practice: Advantage or downside?", source: "extra", stage: "guided",
          instructions: "Is it an advantage or a downside of a vegetarian diet (from the text)?", instructionsAr: "هل هي ميزة أم عيب للنظام النباتي حسب النص؟",
          items: [
            { t: "mcq", q: "less risk of obesity and heart disease", options: ["Advantage", "Downside"], answer: 0, why: "Paragraph 2: “The main advantage is that there is less risk of obesity and heart disease.”" },
            { t: "mcq", q: "low in calcium, proteins, iron, vitamin B12 and zinc", options: ["Advantage", "Downside"], answer: 1, why: "Paragraph 3 (the downside)." },
            { t: "mcq", q: "helps in digestion", options: ["Advantage", "Downside"], answer: 0, why: "“A vegetarian diet helps in digestion because vegetables contain more fiber.”" },
            { t: "mcq", q: "can lack vitamin D", options: ["Advantage", "Downside"], answer: 1, why: "“Vegetarians who do not consume milk or dairy products can lack vitamin D as well.”" },
            { t: "mcq", q: "Why can’t athletes be vegetarians, according to the text?", options: ["They need huge amounts of protein that is found in meat.", "They don’t like vegetables.", "They need less energy."], answer: 0, why: "Paragraph 3, last sentence." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with: risk – lack – adequate – amount – strict", instructionsAr: "أكمل بالكلمات.",
          items: [
            { t: "fill", q: "Eating too much sugar increases the ____ of obesity.", answer: ["risk"], bank: ["risk", "lack", "adequate", "amount", "strict"], why: "risk = the chance of something bad." },
            { t: "fill", q: "Drink an ____ amount of water every day: about eight glasses.", answer: ["adequate"], bank: ["risk", "lack", "adequate", "amount", "strict"], why: "adequate = enough." },
            { t: "fill", q: "People who don’t eat fish or meat may ____ some vitamins.", answer: ["lack"], bank: ["risk", "lack", "adequate", "amount", "strict"], why: "lack = not have enough." },
            { t: "fill", q: "The doctor gave him a ____ diet with no sweets at all.", answer: ["strict"], bank: ["risk", "lack", "adequate", "amount", "strict"], why: "strict = must be followed exactly." },
            { t: "fill", q: "Eat a small ____ of salt.", answer: ["amount"], bank: ["risk", "lack", "adequate", "amount", "strict"], why: "amount = how much." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the food plate. Students name the main food groups (fruit, vegetables, grains, protein, dairy).",
          "Pre-teach the 7 words (strict, risk, obesity, amount, gain, lack, adequate).",
          "Read paragraph by paragraph. After each one, students write its main idea in the table (ex. 2).",
          "Exercise 3: questions 1–3 from the text; question 4 is an opinion question (agree / disagree).",
          "Language for opinions: I think… / In my opinion… / I agree with the writer because… / I don’t agree because…"
        ],
        pair: ["A reads an advantage; B finds a downside. Then swap.", "Pairs say if they agree or disagree with the writer and give one reason each."],
        group: ["Mini-debate: half the group lists advantages of a vegetarian diet, half lists downsides; then they agree on a balanced menu."],
        quick: [
          { q: "What is the main advantage of a vegetarian diet?", a: "Less risk of obesity and heart disease." },
          { q: "Which paragraph gives the writer’s opinion?", a: "Paragraph 4 (In conclusion, I think…)." },
          { q: "What does “adequate” mean?", a: "Enough." },
          { q: "Why can’t athletes be vegetarians (according to the text)?", a: "They need huge amounts of protein that is found in meat." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — WRITING ─────────────────────────
    {
      id: "u1l6", num: 6, skill: "Writing",
      title: "Speaking and Writing: A Healthy Lifestyle",
      pages: [20, 20],
      status: "complete",
      canDo: ["Talk about healthy living.", "Give advice.", "Talk about daily routines."],
      goals: ["Talk about a healthy lifestyle in a group.", "Make notes in a diagram.", "Write a two-paragraph report."],
      goalsAr: ["أتحدّث مع مجموعتي عن نمط الحياة الصحي.", "أدوّن ملاحظاتي في مخطط.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "Speaking and Writing",
        image: null,
        emoji: "🍎",
        prompts: ["What does a healthy life style mean to you?", "What do you do every day to keep fit and healthy?"],
        seconds: 90
      },
      vocab: [
        { w: "lifestyle", pos: "noun", emoji: "🌱", def: "the way a person lives", ex: "Eating well and sleeping early are part of a healthy lifestyle.", exFromBook: false, ar: "نمط الحياة" },
        { w: "balanced diet", pos: "noun", emoji: "🥗", def: "food from all the food groups in the right amounts", ex: "Eating a balanced diet keeps you healthy.", exFromBook: false, ar: "نظام غذائي متوازن" },
        { w: "report", pos: "noun", emoji: "📝", def: "a piece of writing that gives facts and information about a topic", ex: "We wrote a report about keeping fit.", exFromBook: false, ar: "تقرير" }
      ],
      sections: [
        { type: "write", title: "4. In groups, talk about what a healthy life style means to you. Discuss and write your notes in the diagram below to present them to other groups.", page: 20, source: "book",
          instructions: "Healthy lifestyle: the book gives the first idea (Eating a balanced diet). Write 7 more ideas.",
          wordBank: ["sleeping early", "drinking water", "exercising", "walking", "eating fruit and vegetables", "less sugar", "less screen time", "playing sports"],
          frame: [
            { label: "1", hint: "Eating a balanced diet (from the book)" },
            { label: "2", hint: "e.g. Drinking enough water" },
            { label: "3", hint: "" }, { label: "4", hint: "" }, { label: "5", hint: "" },
            { label: "6", hint: "" }, { label: "7", hint: "" }, { label: "8", hint: "" }
          ],
          model: "1. Eating a balanced diet\n2. Drinking enough water\n3. Exercising every day\n4. Sleeping eight hours\n5. Walking instead of using the car\n6. Eating less sugar and fast food\n7. Spending less time on screens\n8. Washing hands often",
          modelFromBook: false,
          checklist: ["We wrote eight ideas.", "Each idea is short (a few words).", "We are ready to present our ideas to another group."],
          minWords: 15 },

        { type: "speak", title: "4. Present your diagram to other groups", page: 20, source: "book",
          instructions: "Present your notes to other groups.",
          dialogue: [
            { who: "A", text: "For us, a healthy lifestyle means eating a balanced diet." },
            { who: "B", text: "" },
            { who: "C", text: "" }
          ],
          starters: ["For us, a healthy lifestyle means …", "First, … / Also, … / Finally, …", "We think it is important to …", "Do you agree? / I agree. / I don’t agree, because …"],
          record: true },

        { type: "write", title: "5. Expand your notes to write a report of two paragraphs explaining the things everybody should do to keep fit and healthy.", page: 20, source: "book",
          instructions: "Use your notes from the diagram. Paragraph 1: food and drink. Paragraph 2: exercise and daily habits.",
          wordBank: ["should", "it is important to", "first", "also", "in addition", "finally", "for example", "because", "in conclusion"],
          frame: [
            { label: "Introduction", hint: "Begin with a question: Do you want to feel strong and full of energy?" },
            { label: "Paragraph 1", hint: "Food and drink: Everybody should eat a balanced diet. For example, …", lines: 4 },
            { label: "Paragraph 2", hint: "Exercise and habits: It is also important to … Finally, …", lines: 4 }
          ],
          model: "Do you want to feel strong and full of energy every day? Then you should eat well. Everybody should eat a balanced diet with fruit, vegetables, grains, protein and dairy products. It is important to drink enough water and to eat less sugar and fast food, because they increase the risk of obesity.\n\nIn addition, everybody should exercise. Walking for thirty minutes a day is easy and good for your heart. Try to take the stairs rather than the lift. Before sport, warm up, and after it, stretch to cool down. Finally, sleep eight hours a night. In conclusion, a healthy lifestyle is not difficult, and it makes studying and daily tasks easier.",
          modelFromBook: false,
          bookChecklist: [
            "begin with an interesting introduction such as a question.",
            "develop the body by adding facts and details.",
            "edit your writing, checking spelling and punctuation."
          ],
          checklist: ["I wrote two paragraphs.", "I used should / it is important to.", "I used linkers (first, also, finally…)."],
          minWords: 70 },

        { type: "activity", title: "Extra Practice: Healthy or unhealthy?", source: "extra", stage: "guided",
          instructions: "Choose the best advice.", instructionsAr: "اختر النصيحة الأفضل.",
          items: [
            { t: "mcq", q: "Which is the best question to begin a report?", options: ["Do you want to live a long and healthy life?", "Healthy life.", "my report is about health"], answer: 0, why: "The book says: begin with an interesting introduction such as a question." },
            { t: "mcq", q: "Which sentence gives advice?", options: ["Everybody should drink enough water.", "Water is wet.", "I drank water yesterday."], answer: 0, why: "should + base verb gives advice." },
            { t: "mcq", q: "Which is a supporting detail for “Exercise is important.”?", options: ["Walking every day makes your heart strong.", "I like blue.", "My school is big."], answer: 0, why: "It explains why exercise is important." },
            { t: "fix", q: "Everybody {should eats} a balanced diet.", answer: ["should eat"], hint: "should + base verb.", why: "After should we use the base verb: should eat." }
          ] }
      ],
      game: { kind: "sort", title: "Healthy or Unhealthy?",
        buckets: ["Healthy 👍", "Unhealthy 👎"],
        cards: [["Eating a balanced diet", 0], ["Sleeping eight hours", 0], ["Drinking enough water", 0], ["Walking every day", 0], ["Eating fast food every day", 1], ["Staying up very late", 1], ["Sitting at a screen all day", 1], ["Drinking a lot of fizzy drinks", 1]] },
      teacher: {
        notes: [
          "Warm-up: ask “What does a healthy life style mean to you?” Collect ideas on the board.",
          "Exercise 4: groups complete the diagram (8 boxes; the first is done) and present it to another group.",
          "Exercise 5: show how to turn notes into sentences (Eating a balanced diet → Everybody should eat a balanced diet because…).",
          "Go through the book’s Remember box: a question to begin, facts and details, then edit spelling and punctuation.",
          "The model report is not from the book; use it after students have written."
        ],
        pair: ["Pairs swap reports and check them with the Remember box (question at the start? facts? spelling?)."],
        group: ["Gallery walk: groups put their diagrams on the wall; others add one more idea with a sticky note."],
        quick: [
          { q: "How should a report begin (book)?", a: "With an interesting introduction such as a question." },
          { q: "Give one thing everybody should do to keep fit.", a: "e.g. Exercise every day / eat a balanced diet." },
          { q: "What do you check when you edit?", a: "Spelling and punctuation." }
        ]
      }
    }
  ]
});

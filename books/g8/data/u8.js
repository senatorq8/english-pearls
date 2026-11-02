// Unit 8 — Digital Communication (Module 3 "Keeping in Touch", printed pages 63–68, module cover p. 55)
BOOK.addUnit({
  id: "u8", num: 8, title: "Digital Communication", titleAr: "التواصل الرقمي",
  module: 3, moduleTitle: "Keeping in Touch",
  pages: [63, 68],
  cover: 55,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Describe events",
      "Talk about preferences",
      "Ask about the future",
      "Describe pictures",
      "Express opinions"
    ],
    "language structures": [
      "Use the past perfect tense",
      "Use (before/after/by the time/because) with the past perfect",
      "Use “both ...and”",
      "Form questions"
    ],
    "module 3 — you are expected to": [
      "Explain the meaning of different types of texts (argumentative, expository, narrative .etc).",
      "Express points of view on a variety of topics.",
      "Write different types of paragraphs."
    ],
    "module 3 — activities": [
      "Role-playing different situations",
      "Providing and choosing titles for different texts",
      "Describing personal experiences"
    ]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u8l1", num: 1, skill: "Reading",
      title: "Expository Text: Digital Communication",
      pages: [63, 64],
      status: "complete",
      canDo: ["Describe events", "Express opinions"],
      goals: ["Read an expository text about communication.", "Match paragraphs with headings.", "Find the topic sentence and supporting details.", "Learn 5 new words."],
      goalsAr: ["أقرأ نصًا تفسيريًا عن التواصل.", "أطابق الفقرات مع عناوينها.", "أحدّد الجملة الرئيسية والتفاصيل الداعمة.", "أتعلّم 5 كلمات جديدة."],
      warmup: {
        title: "Before you read",
        image: "crops/u8l1-warmup.jpg",
        emoji: "🗿",
        prompts: ["Answer the following question: How do you usually communicate with your friends?", "Look at the old stone picture. How did people share ideas long ago?"],
        seconds: 90
      },
      vocab: [
        { w: "convey", pos: "verb", emoji: "📨", def: "to give information, ideas or feelings to someone", ex: "Communication helps us convey information.", exFromBook: true, ar: "يَنقل / يُوصل" },
        { w: "gradually", pos: "adverb", emoji: "📈", def: "slowly, little by little, over a period of time", ex: "It has improved over the years as the ways we communicate have changed gradually.", exFromBook: true, ar: "تدريجيًا" },
        { w: "exchange", pos: "verb", emoji: "🔄", def: "to give something and get something back", ex: "They used them to exchange ideas.", exFromBook: true, ar: "يتبادل" },
        { w: "efficiently", pos: "adverb", emoji: "⚡", def: "quickly and well, without wasting time or effort", ex: "Now, communication happens much more efficiently.", exFromBook: true, ar: "بكفاءة" },
        { w: "reaction", pos: "noun", emoji: "😮", def: "what you say, do or feel because of something", ex: "Meeting in person allows us to show our true personalities, emotions and reactions.", exFromBook: true, ar: "ردّة فعل" }
      ],
      sections: [
        { type: "reading", title: "Digital Communication (Expository Text)", page: 63,
          instructions: "Read the text. Then match the paragraphs with their headings.",
          paras: [
            "We all have ideas, feelings and opinions that we want to communicate to other people. Communication helps us convey information, it has improved over the years as the ways we communicate have changed gradually.",
            "Oral culture was very important in the past. People had to store all their knowledge in their memories before writing was invented. Older people told stories and facts to the younger generations. Later, people learned to carve and paint pictures on stones. They used them to exchange ideas. After writing was invented, people were able to write down everything they knew.",
            "The inventions of printing, telephone, radio, television and computer changed the way we communicate. Nowadays, we get a lot of our information from the internet. Today, communication satellites send signals across the globe. Consequently, we can experience world events as they happen. Now, communication happens much more efficiently.",
            "Today’s technology has made communication faster and easier. We can watch news stories from all over the world, learn facts and information and talk to our families and friends even from miles away. However, we must remember to talk to people face to face because communication is more than just words. Meeting in person allows us to show our true personalities, emotions and reactions."
          ],
          speaker: null },

        { type: "activity", title: "2. Read the text and match the paragraphs with their headings:", page: 63, source: "book",
          instructions: "Tap a paragraph, then tap its heading.", instructionsAr: "طابق كل فقرة مع العنوان المناسب.",
          items: [
            { t: "match", q: "Match the paragraphs with their headings.",
              pairs: [["Paragraph 1", "The importance of Communication"], ["Paragraph 2", "Communication in the Past"], ["Paragraph 3", "Development of Communication"], ["Paragraph 4", "Modern communication"]],
              hint: "Read the first sentence of each paragraph.",
              why: "P1: communication helps us convey information (importance). P2: “Oral culture was very important in the past.” P3: inventions changed the way we communicate (development). P4: “Today’s technology …” (modern communication)." }
          ] },

        { type: "activity", title: "3. Read again and answer the following questions:", page: 64, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "• Why is communication important?",
              model: "Because we all have ideas, feelings and opinions that we want to communicate to other people. Communication helps us convey information.",
              keywords: [["convey", "information", "ideas", "feelings", "opinions"]], hint: "Paragraph 1." },
            { t: "short", q: "• What was the main source of information in the past?",
              model: "Oral culture: people stored knowledge in their memories, and older people told stories and facts to the younger generations.",
              keywords: [["oral", "older people", "stories", "memor"]], hint: "Paragraph 2." },
            { t: "short", q: "• Explain how technology has made communication easy and fast.",
              model: "We get a lot of information from the internet, and satellites send signals across the globe, so we can experience world events as they happen. We can watch news from all over the world and talk to our families and friends even from miles away.",
              keywords: [["internet", "satellite", "news", "miles", "world"]], hint: "Paragraphs 3 and 4." },
            { t: "short", q: "• Why should we talk to people face to face?",
              model: "Because communication is more than just words. Meeting in person allows us to show our true personalities, emotions and reactions.",
              keywords: [["more than", "emotion", "personalit", "reaction"]], hint: "Paragraph 4, the last two sentences." },
            { t: "short", q: "• What is the auther’s purpose for writing this text?",
              model: "To inform / explain to readers how communication has developed from the past to today (it is an expository text).",
              keywords: [["inform", "explain", "develop", "change", "history"]], hint: "Expository text = it explains or gives information." },
            { t: "table", q: "• Identify the topic sentence, the supporting details and the concluding sentence in the third paragraph.",
              head: ["Part", "Sentence(s) from paragraph 3"],
              rows: [
                ["Topic sentence", { open: true, model: "The inventions of printing, telephone, radio, television and computer changed the way we communicate." }],
                ["Supporting details", { open: true, model: "Nowadays, we get a lot of our information from the internet. Today, communication satellites send signals across the globe. Consequently, we can experience world events as they happen." }],
                ["Concluding sentence", { open: true, model: "Now, communication happens much more efficiently." }]
              ] }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Before writing, people stored knowledge in their memories.", options: ["True", "False"], answer: 0, why: "“People had to store all their knowledge in their memories before writing was invented.”" },
            { t: "mcq", q: "People carved and painted pictures on paper.", options: ["True", "False"], answer: 1, why: "They carved and painted pictures on stones." },
            { t: "mcq", q: "Satellites help us experience world events as they happen.", options: ["True", "False"], answer: 0, why: "“…satellites send signals across the globe. Consequently, we can experience world events as they happen.”" },
            { t: "mcq", q: "The writer thinks we don’t need to meet people in person any more.", options: ["True", "False"], answer: 1, why: "“We must remember to talk to people face to face.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the text.", instructionsAr: "أكمل بكلمة من النص.",
          items: [
            { t: "fill", q: "The weather got warmer ____, day by day.", answer: ["gradually"], bank: ["gradually", "efficiently", "convey", "exchange"], why: "gradually = slowly, little by little." },
            { t: "fill", q: "Friends ____ gifts at Eid.", answer: ["exchange"], bank: ["exchange", "convey", "reaction", "gradually"], why: "exchange = give and get back." },
            { t: "fill", q: "His ____ to the good news was a big smile.", answer: ["reaction"], bank: ["reaction", "exchange", "efficiently", "convey"], why: "reaction = what you do or feel because of something." },
            { t: "fill", q: "A good picture can ____ a strong message.", answer: ["convey"], bank: ["convey", "reaction", "gradually", "efficiently"], why: "convey = give information or feelings." },
            { t: "fill", q: "The new machine works quickly and ____.", answer: ["efficiently"], bank: ["efficiently", "gradually", "exchange", "reaction"], why: "efficiently = well, without wasting time." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: How do you usually communicate with your friends? Show the old stone carving (Egyptian temple picture).",
          "Pre-teach the 5 words. Read paragraph by paragraph and ask: Past or now?",
          "Matching headings: students read the first sentence of each paragraph.",
          "Expository text: it explains/gives information. Model the topic sentence → details → concluding sentence in paragraph 3.",
          "Note: the book prints “auther’s” (= author’s) in exercise 3."
        ],
        pair: ["A asks a question from exercise 3; B answers from the text. Swap.", "Pairs make a mini timeline: memories → stones → writing → printing → telephone → internet."],
        group: ["Groups each take one paragraph and present its main idea in one sentence."],
        quick: [
          { q: "What was important in the past before writing?", a: "Oral culture (memories, older people telling stories)." },
          { q: "What do communication satellites do?", a: "They send signals across the globe." },
          { q: "Why should we meet people face to face?", a: "Communication is more than words; we can show our personalities, emotions and reactions." },
          { q: "What is the topic sentence of paragraph 3?", a: "The inventions of printing, telephone, radio, television and computer changed the way we communicate." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u8l2", num: 2, skill: "Grammar",
      title: "Past Perfect Tense",
      pages: [64, 64],
      status: "complete",
      canDo: ["Use the past perfect tense", "Use (before/after/by the time/because) with the past perfect"],
      goals: ["Show which past action happened first.", "Use had + past participle.", "Use before, after, by the time and because."],
      goalsAr: ["أبيّن أي حدث في الماضي وقع أولًا.", "أستخدم had + التصريف الثالث.", "أستخدم before و after و by the time و because."],
      warmup: {
        title: "Which happened first?",
        image: null,
        emoji: "⏪",
        prompts: ["The storm started. The villagers left the forest. Which happened first?", "You arrived home. Your family finished dinner. Which happened first?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Past Perfect Tense", page: 64,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "The past perfect tense is used to express an action that happened before another one in the past. (had + past participle)",
              textAr: "يُستخدم الماضي التام للتعبير عن حدث وقع قبل حدث آخر في الماضي. (had + التصريف الثالث)",
              examples: [
                "e.g. {s:The storm} {v:started} {c:after} {s:the villagers} {a:had} {v:left} the forest."
              ] },
            { title: "Step 2 — Two actions on a timeline", source: "extra",
              text: "First action (earlier) → past perfect: had left. Second action (later) → past simple: started.",
              textAr: "الحدث الأول (الأقدم) ← الماضي التام had left. الحدث الثاني (الأحدث) ← الماضي البسيط started.",
              examples: [
                "1️⃣ {s:the villagers} {a:had} {v:left} the forest → 2️⃣ {s:the storm} {v:started}"
              ] },
            { title: "Step 3 — had + past participle (for every subject)", source: "extra",
              text: "had is the same for I, you, he, she, it, we and they. Then use the past participle (verb 3): pass → passed, see → seen, finish → finished, leave → left, go → gone.",
              textAr: "had لا تتغيّر مع جميع الضمائر، وبعدها التصريف الثالث للفعل.",
              examples: [
                "{s:I} {a:had} {v:passed} the exam.",
                "{s:My kids} {a:had} {v:finished} their meal.",
                "{s:She} {a:had} {v:seen} that man before."
              ] },
            { title: "Step 4 — Time words: before, after, by the time, because", source: "extra",
              text: "after + past perfect. before + past simple. by the time + past simple, then past perfect. because + past perfect (the earlier reason).",
              textAr: "after يأتي بعدها الماضي التام، و before يأتي بعدها الماضي البسيط، و by the time + ماضٍ بسيط ثم ماضٍ تام، و because + ماضٍ تام للسبب الأقدم.",
              examples: [
                "{s:I} {v:felt} great {c:after} {s:I} {a:had} {v:passed} the exam.",
                "{s:We} {a:had} {v:eaten} {c:before} {s:the guests} {v:arrived}.",
                "{c:By the time} {s:I} {v:arrived}, {s:my kids} {a:had} {v:finished} their meal.",
                "{s:He} {v:was} hungry {c:because} {s:he} {a:hadn’t} {v:eaten} breakfast."
              ] },
            { title: "Step 5 — Negatives and questions", source: "extra",
              text: "Negative: hadn’t + past participle. Question: Had + subject + past participle …?",
              textAr: "النفي: hadn’t + التصريف الثالث. السؤال: نبدأ بـ Had.",
              examples: [
                "{s:I} {n:hadn’t} {v:seen} that film before.",
                "{a:Had} {s:you} {v:finished} your homework before dinner?"
              ] }
          ],
          worked: {
            q: "Complete: When we arrived at the cinema, the film ____ (start).",
            steps: [
              "Which action happened first? The film started first; then we arrived.",
              "The earlier action → past perfect: had + past participle.",
              "start → started (verb 3)."
            ],
            a: "When {s:we} {v:arrived} at the cinema, {s:the film} {a:had} {v:started}."
          },
          notes: [
            "Past perfect = the earlier of two past actions.",
            "With after, the order is already clear, so the past simple is sometimes used too (after I passed). The past perfect makes the order very clear.",
            "By the time … → the other action uses the past perfect."
          ] },

        { type: "activity", title: "Choose the correct form of the verbs to complete the following sentences:", page: 64, source: "book", stage: "guided",
          instructions: "Write the correct form of each verb. Which action happened first?", instructionsAr: "اكتب الصيغة الصحيحة لكل فعل. أي حدث وقع أولًا؟",
          items: [
            { t: "table", q: "1. I ……… (feel) great after I ……… (pass) the exam.",
              head: ["feel", "pass"],
              rows: [[{ answer: ["felt"], model: "felt" }, { answer: ["had passed", "'d passed", "passed"], model: "had passed" }]] },
            { t: "table", q: "2. By the time I ……… (arrive), my kids ……… (finish) their meal.",
              head: ["arrive", "finish"],
              rows: [[{ answer: ["arrived"], model: "arrived" }, { answer: ["had finished", "'d finished", "had already finished"], model: "had finished" }]] },
            { t: "fill", q: "3. I couldn’t remember where I ____ (see) that man.", answer: ["had seen", "'d seen"], hint: "Seeing the man happened before “couldn’t remember”.",
              why: "The earlier action (seeing the man) → past perfect: had seen." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Which happened first?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Which action happened first?", instructionsAr: "أي الحدثين وقع أولًا؟",
          items: [
            { t: "mcq", q: "The storm started after the villagers had left the forest.", options: ["The storm started.", "The villagers left the forest."], answer: 1, why: "had left = past perfect = the earlier action." },
            { t: "mcq", q: "By the time I arrived, my kids had finished their meal.", options: ["I arrived.", "My kids finished their meal."], answer: 1, why: "had finished = the earlier action." },
            { t: "mcq", q: "She was sad because she had lost her phone.", options: ["She was sad.", "She lost her phone."], answer: 1, why: "had lost = the earlier action (the reason)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Choose the correct form", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "When we got to the station, the train ____.", options: ["had left", "has left", "leaves"], answer: 0, why: "The train left first → had left." },
            { t: "mcq", q: "We ____ dinner before the guests arrived.", options: ["had cooked", "have cooked", "cook"], answer: 0, why: "Cooking happened first → had cooked." },
            { t: "mcq", q: "Ali was tired because he ____ all day.", options: ["had worked", "has worked", "works"], answer: 0, why: "because + the earlier reason → had worked." },
            { t: "mcq", q: "By the time the teacher came, we ____ the test.", options: ["had finished", "finish", "have finished"], answer: 0, why: "By the time + past simple, then past perfect." },
            { t: "mcq", q: "I had never ____ snow before I went to London.", options: ["see", "saw", "seen"], answer: 2, why: "had + past participle: seen." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix it and write (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake. Then write your own sentences.", instructionsAr: "صحّح الخطأ ثم اكتب جملك.",
          items: [
            { t: "fix", q: "After she had {finish} her homework, she watched TV.", answer: ["finished"], why: "had + past participle: finished." },
            { t: "fix", q: "By the time we arrived, the film {has} started.", answer: ["had"], why: "Past perfect: had + started." },
            { t: "fix", q: "I {had see} that man before.", answer: ["had seen"], why: "see → seen (past participle)." },
            { t: "short", q: "Finish the sentence: By the time I got to school, …", model: "By the time I got to school, the bell had rung.", keywords: [["had"]], hint: "Use had + past participle." },
            { t: "short", q: "Write a sentence with “because” and the past perfect.", model: "I was happy because I had passed my English test.", open: true, hint: "I was … because I had …" }
          ] }
      ],
      game: { kind: "quiz", title: "Past Perfect Quiz",
        items: [
          { t: "choose", q: "The storm started after the villagers (had left / have left) the forest.", options: ["had left", "have left"], answer: 0, why: "had + past participle." },
          { t: "choose", q: "By the time I arrived, the kids (finished / had finished) their meal.", options: ["finished", "had finished"], answer: 1, why: "By the time + past simple → past perfect for the other action." },
          { t: "mcq", q: "What is the past participle of “see”?", options: ["saw", "seen", "seed"], answer: 1, why: "see – saw – seen." },
          { t: "mcq", q: "The past perfect shows …", options: ["the earlier of two past actions", "an action happening now", "a future plan"], answer: 0, why: "Book rule: an action that happened before another one in the past." },
          { t: "choose", q: "I couldn’t remember where I (had seen / have seen) that man.", options: ["had seen", "have seen"], answer: 0, why: "The seeing happened first → had seen." }
        ] },
      teacher: {
        notes: [
          "Warm-up: draw a timeline with two actions. Ask: Which came first?",
          "Read the book rule and the example (storm / villagers). Draw it on the timeline.",
          "Teach had + past participle; drill irregular verbs (see–seen, leave–left, go–gone, eat–eaten).",
          "Book task: three sentences. Item 1: accept “had passed” (target) and also “passed” — with after both are correct.",
          "Extra Steps 1–3, then the Grammar Lab (before / after / by the time / when)."
        ],
        pair: ["Timeline cards: A reads two actions; B says one sentence with after / before / by the time.", "Pairs tell what they had done before school this morning: Before I came to school, I had …"],
        group: ["Story chain: each student adds a sentence with the past perfect to a group story."],
        quick: [
          { q: "Form of the past perfect?", a: "had + past participle." },
          { q: "Complete: By the time I arrived, the bus ___ (leave).", a: "had left" },
          { q: "Which action is in the past perfect: the first or the second?", a: "The first (earlier) action." },
          { q: "Past participle of “finish”?", a: "finished" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — SPEAKING ─────────────────────────
    {
      id: "u8l3", num: 3, skill: "Speaking",
      title: "“Modern technology has improved communication around the world.”",
      pages: [64, 64],
      status: "complete",
      canDo: ["Express opinions", "Describe events"],
      goals: ["Discuss how technology changed the way we communicate.", "Make notes in a table.", "Respect each speaker."],
      goalsAr: ["أناقش كيف غيّرت التكنولوجيا طريقة تواصلنا.", "أدوّن ملاحظات في جدول.", "أحترم كل متحدث."],
      warmup: {
        title: "Speaking",
        image: null,
        emoji: "🌐",
        prompts: ["Do you agree: “Modern technology has improved communication around the world.”?", "Give one example from your life."],
        seconds: 60
      },
      vocab: [
        { w: "socialization", pos: "noun", emoji: "🤝", def: "learning how to live and talk with other people in society", ex: "Social media helps socialization with people far away.", exFromBook: false, ar: "التنشئة الاجتماعية / التواصل مع الناس" },
        { w: "relationship", pos: "noun", emoji: "👨‍👩‍👦", def: "the way two or more people feel and behave towards each other", ex: "Video calls help family relationships.", exFromBook: false, ar: "علاقة" },
        { w: "source", pos: "noun", emoji: "📰", def: "a place where you get something, like information", ex: "The internet is an important source of information.", exFromBook: false, ar: "مصدر" },
        { w: "gaming", pos: "noun", emoji: "🎮", def: "playing video games", ex: "Modern gaming lets friends play together online.", exFromBook: false, ar: "الألعاب الإلكترونية" }
      ],
      sections: [
        { type: "discuss", title: "5. In groups, discuss how modern technology has positively changed the way we communicate.", page: 64, source: "book",
          instructions: "“Modern technology has improved communication around the world.” Discuss in groups.",
          prompts: ["How has modern technology changed socialization?", "How has it changed family relationships?", "How has it changed our sources of information?", "How has it changed modern gaming?"],
          starters: ["In my opinion, …", "Thanks to technology, we can …", "For example, …", "I agree with you, and …", "I see your point, but …"],
          image: null, emoji: "💬", seconds: 300 },

        { type: "activity", title: "In a table (in your notebook), make notes about the following:", page: 64, source: "book",
          instructions: "Make notes about each topic: How has modern technology changed it positively?", instructionsAr: "دوّن ملاحظات عن كل موضوع: كيف غيّرته التكنولوجيا الحديثة إيجابيًا؟",
          items: [
            { t: "table", q: "socialization - family relationships - sources of information - modern gaming", open: true,
              head: ["Topic", "How modern technology changed it positively"],
              rows: [
                ["socialization", { open: true, model: "We can make friends and keep in touch with people around the world." }],
                ["family relationships", { open: true, model: "Families can talk on video calls even when they live in different countries." }],
                ["sources of information", { open: true, model: "We can find news and information quickly on the internet." }],
                ["modern gaming", { open: true, model: "Friends can play together online and work as a team." }]
              ] }
          ] },

        { type: "speak", title: "Remember to:", page: 64, source: "book",
          instructions: "Share your group’s notes with the class. Remember to:",
          steps: ["respect each speaker.", "listen politely, even if you disagree with your partner’s ideas."],
          dialogue: [
            { who: "A", text: "I think modern technology has improved family relationships." },
            { who: "B", text: "" },
            { who: "A", text: "What about sources of information?" },
            { who: "B", text: "" }
          ],
          starters: ["I agree, because …", "That’s a good point. Also, …", "I respect your idea, but I think …", "For example, my family …"],
          record: true },

        { type: "activity", title: "Extra Practice: Polite or not?", source: "extra", stage: "guided",
          instructions: "Which sentence is polite in a discussion?", instructionsAr: "أي جملة مهذّبة في النقاش؟",
          items: [
            { t: "mcq", q: "You disagree with your partner.", options: ["“You are wrong. Stop talking.”", "“I see your point, but I think …”"], answer: 1, why: "We listen politely, even if we disagree." },
            { t: "mcq", q: "Your partner is speaking.", options: ["Wait and listen.", "Start talking at the same time."], answer: 0, why: "Respect each speaker." },
            { t: "mcq", q: "You agree with your partner.", options: ["“I agree with you, and also …”", "“Whatever.”"], answer: 0, why: "A polite way to agree and add an idea." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Write the quote on the board. Quick vote: agree / disagree.",
          "Groups of 4: each student takes one topic (socialization, family relationships, sources of information, modern gaming).",
          "Students make notes in the table, then share with the group.",
          "Read the “Remember to” box before the discussion; give feedback on polite language.",
          "Vocabulary here is ours (topic words from the page), not from the book’s word list."
        ],
        pair: ["Pairs compare their tables and add one idea each.", "A gives an opinion; B agrees or disagrees politely using a starter."],
        group: ["Group reporter presents the group’s four notes to the class."],
        quick: [
          { q: "Name one way technology helps family relationships.", a: "e.g. video calls with family far away." },
          { q: "What should you do when you disagree?", a: "Listen politely and respect the speaker." },
          { q: "Give one modern source of information.", a: "e.g. the internet / news apps." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — LISTENING ─────────────────────────
    {
      id: "u8l4", num: 4, skill: "Listening",
      title: "History of Communication",
      pages: [65, 65],
      status: "complete",
      canDo: ["Talk about preferences", "Describe events"],
      goals: ["Say which means of communication you prefer.", "Listen and complete a timeline.", "Talk and write about communication in the past."],
      goalsAr: ["أقول أي وسيلة تواصل أفضّل.", "أستمع وأكمل خطًا زمنيًا.", "أتحدث وأكتب عن التواصل في الماضي."],
      warmup: {
        title: "Answer the following questions:",
        image: "crops/u8l4-warmup.jpg",
        emoji: "✉️",
        prompts: ["Which of the following means of communication do you prefer? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "means", pos: "noun", emoji: "📡", def: "a way of doing something (a means / many means — same form)", ex: "Which of the following means of communication do you prefer?", exFromBook: true, ar: "وسيلة / وسائل" },
        { w: "messenger", pos: "noun", emoji: "🏃", def: "a person who carries a message to someone", ex: "Long ago, kings sent messengers to other cities.", exFromBook: false, ar: "رسول / ساعي" },
        { w: "timeline", pos: "noun", emoji: "📅", def: "a line that shows events in the order they happened", ex: "Listen and complete the timeline.", exFromBook: false, ar: "خط زمني" },
        { w: "smoke signal", pos: "noun", emoji: "🔥", def: "smoke from a fire used to send a message far away", ex: "People used smoke signals to send messages.", exFromBook: false, ar: "إشارة دخان" }
      ],
      sections: [
        { type: "discuss", title: "1. Answer the following questions:", page: 65, source: "book",
          prompts: ["Which of the following means of communication do you prefer? Why?"],
          starters: ["I prefer … because …", "I like texting more than …", "Talking face to face is better because …"],
          image: "crops/u8l4-warmup.jpg", emoji: "📱", seconds: 120 },

        { type: "listen", title: "2. Listen and complete the following table:", page: 65, source: "book",
          needsAudio: true, track: "8.1",
          instructions: "Listen (track 8.1). Complete the timeline: write the date or the means of communication.",
          items: [
            { t: "table", q: "History of communication", open: true,
              head: ["Timeline", "Means of Communication"],
              rows: [
                ["1200 BC", { open: true }],
                [{ open: true }, "Messengers"],
                ["900 BC", { open: true }],
                [{ open: true }, "The World Wide Web"],
                [{ open: true }, "The ‘One Price’ post"],
                ["1850s", { open: true }],
                ["1876", { open: true }]
              ] }
          ] },

        { type: "discuss", title: "Speaking and Writing — 3. a. In groups, talk about how people used to communicate in the past discussing the following questions:", page: 65, source: "book",
          prompts: ["1. What means of communication did people use before technology?", "2. What difficulties did people face?", "3. What was the main role of grandparents in communication?"],
          starters: ["People used to …", "It took a long time to …", "Grandparents used to tell …", "In the past, people had to …"],
          image: null, emoji: "🔥", seconds: 240 },

        { type: "write", title: "b. In your notebook, use your ideas to write a paragraph about communication in the past.", page: 65, source: "book",
          instructions: "Use your group’s ideas. Write one paragraph.",
          wordBank: ["used to", "messengers", "letters", "pigeons", "smoke signals", "stories", "grandparents", "slow", "difficult"],
          frame: [
            { label: "Topic sentence", hint: "In the past, people communicated in very different ways." },
            { label: "Means of communication", hint: "They used to … / Some people sent …" },
            { label: "Difficulties", hint: "It was difficult because …" },
            { label: "Grandparents / conclusion", hint: "Grandparents used to … Today, …" }
          ],
          model: "In the past, people communicated in very different ways. Before technology, they used to send messengers, write letters or use pigeons to carry messages. Some people even used smoke signals. It was difficult because messages took a long time to arrive, and sometimes they got lost. Grandparents had an important role: they used to tell stories and pass on the family history to the children. Today, communication is much faster, but we can still learn a lot from the old ways.",
          modelFromBook: false,
          checklist: ["I started with a topic sentence.", "I wrote about means of communication and difficulties.", "I started each sentence with a capital letter and ended with a full stop."],
          minWords: 60 },

        { type: "listen", title: "Extra Practice: Grandpa’s Letters (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Sara", text: "Grandpa, how did you talk to your brother when he studied abroad?" },
            { who: "Grandpa", text: "I wrote letters to him. A letter took about three weeks to arrive, so I waited a long time for his answer." },
            { who: "Sara", text: "Did you have a phone?" },
            { who: "Grandpa", text: "We had one phone in the whole house. Calls to other countries were very expensive, so we only called on Eid." },
            { who: "Sara", text: "Now I send you voice messages every day!" },
            { who: "Grandpa", text: "Yes, and I love them. But I still prefer to see you face to face." }
          ],
          items: [
            { t: "mcq", q: "How did Grandpa talk to his brother?", options: ["He sent emails.", "He wrote letters.", "He used video calls."], answer: 1, why: "“I wrote letters to him.”" },
            { t: "mcq", q: "How long did a letter take to arrive?", options: ["three days", "three weeks", "three months"], answer: 1, why: "“A letter took about three weeks to arrive.”" },
            { t: "mcq", q: "Why did they only call on Eid?", options: ["Calls were very expensive.", "They had no phone.", "The brother was busy."], answer: 0, why: "“Calls to other countries were very expensive.”" },
            { t: "fill", q: "Sara sends Grandpa voice ____ every day.", answer: ["messages"], why: "“Now I send you voice messages every day!”" },
            { t: "mcq", q: "What does Grandpa prefer?", options: ["letters", "voice messages", "seeing Sara face to face"], answer: 2, why: "“I still prefer to see you face to face.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the five pictures (smartphone, face to face, email, letter, home phone). Students say which they prefer and why.",
          "Play track 8.1 (book audio). Students complete the timeline. There is no answer key — check with the recording.",
          "Groups discuss the three questions about the past, then write the paragraph.",
          "Vocabulary: only “means” is in the book’s word list; the other words are support words (ours).",
          "If the book audio is not available, use the Extra script (computer voice)."
        ],
        pair: ["Preference survey: A asks “Which do you prefer, … or …? Why?” B answers. Swap.", "Pairs check each other’s timeline after listening."],
        group: ["Groups make a poster timeline of communication from the past to today."],
        quick: [
          { q: "What does “means of communication” mean?", a: "Ways of communicating (phone, letter, email…)." },
          { q: "Name one way people communicated before technology.", a: "e.g. messengers, letters, pigeons, smoke signals, stories." },
          { q: "What was the role of grandparents?", a: "e.g. telling stories and passing on knowledge/family history." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — GRAMMAR ─────────────────────────
    {
      id: "u8l5", num: 5, skill: "Grammar",
      title: "‘both … and’",
      pages: [66, 66],
      status: "complete",
      canDo: ["Use “both ...and”", "Describe pictures"],
      goals: ["Join two sentences with both … and.", "Use both … and with two subjects or two adjectives.", "Describe pictures with both … and."],
      goalsAr: ["أربط جملتين باستخدام both … and.", "أستخدم both … and مع فاعلين أو صفتين.", "أصف صورًا باستخدام both … and."],
      warmup: {
        title: "Two in one",
        image: null,
        emoji: "✌️",
        prompts: ["Ali is clever. Sara is clever. Can you say it in one sentence?", "The park is green. The park is quiet. Can you say it in one sentence?"],
        seconds: 60
      },
      vocab: [
        { w: "sensitive", pos: "adjective", emoji: "🥺", def: "easily affected by what people say or do; noticing small changes", ex: "The baby is both smart and sensitive.", exFromBook: true, ar: "حسّاس" },
        { w: "talented", pos: "adjective", emoji: "🌟", def: "having a natural ability to do something well", ex: "Famous actors are both talented and skillful.", exFromBook: false, ar: "موهوب" },
        { w: "skillful", pos: "adjective", emoji: "🛠️", def: "very good at doing something because of practice", ex: "Famous actors are both talented and skillful.", exFromBook: false, ar: "ماهر" }
      ],
      sections: [
        { type: "grammar", title: "‘both … and’", page: 66,
          steps: [
            { title: "Step 1 — The book’s examples",
              text: "The telephone was invented in the 19th century. The telegraph was invented in the 19th century. → Both the telephone and the telegraph were invented in the 19th century. The baby is smart. The baby is sensitive. → The baby is both smart and sensitive.",
              textAr: "أمثلة الكتاب: نربط جملتين فيهما المعلومة نفسها باستخدام both … and.",
              examples: [
                "{c:Both} {s:the telephone} {c:and} {s:the telegraph} {v:were} invented in the 19th century.",
                "{s:The baby} {v:is} {c:both} smart {c:and} sensitive."
              ] },
            { title: "Step 2 — Two subjects → plural verb", source: "extra",
              text: "Both A and B = two things, so the verb is plural: was → were, is → are, has → have.",
              textAr: "Both A and B تعني شيئين، لذلك يصبح الفعل للجمع: was ← were و is ← are.",
              examples: [
                "{s:Ali} {v:is} clever. {s:Sara} {v:is} clever. → {c:Both} {s:Ali} {c:and} {s:Sara} {v:are} clever."
              ] },
            { title: "Step 3 — Two adjectives (or two verbs)", source: "extra",
              text: "When the subject is the same, put both … and around the two describing words. The verb does not change.",
              textAr: "إذا كان الفاعل نفسه نضع both … and حول الصفتين، ولا يتغيّر الفعل.",
              examples: [
                "{s:Sky diving} {v:is} {c:both} interesting {c:and} dangerous.",
                "{s:She} {c:both} {v:sings} {c:and} {v:dances}."
              ] },
            { title: "Step 4 — Be careful!", source: "extra",
              text: "Use and (not or, not but) with both. Do not repeat the same words twice.",
              textAr: "نستخدم and مع both وليس or أو but، ولا نكرّر الكلمات نفسها.",
              examples: [
                "✗ Both Ali {n:or} Sara are clever. → ✓ {c:Both} Ali {c:and} Sara are clever.",
                "✗ Both Ali and Sara {n:is} clever. → ✓ … {v:are} clever."
              ] }
          ],
          worked: {
            q: "Join: “Books are sources of information. The internet is a source of information.”",
            steps: [
              "What is the same in both sentences? “… a source / sources of information”.",
              "The two different things are the subjects: books, the internet.",
              "Both + books + and + the internet. Two things → are + sources (plural)."
            ],
            a: "{c:Both} {s:books} {c:and} {s:the internet} {v:are} sources of information."
          },
          notes: [
            "Two subjects: Both A and B + plural verb.",
            "Same subject, two adjectives: subject + verb + both A and B."
          ] },

        { type: "activity", title: "a. Write full sentences using (both…and):", page: 66, source: "book", stage: "guided",
          instructions: "Write one sentence for each line. Use both … and.", instructionsAr: "اكتب جملة واحدة لكل سطر باستخدام both … and.",
          items: [
            { t: "short", q: "• Famous actors/talented/skillful", model: "Famous actors are both talented and skillful.", keywords: [["both"], ["talented"], ["and"], ["skil"]], hint: "Same subject, two adjectives: … are both … and …" },
            { t: "short", q: "• Sky diving/interesting/dangerous.", model: "Sky diving is both interesting and dangerous.", keywords: [["both"], ["interesting"], ["and"], ["dangerous"]], hint: "Same subject, two adjectives: … is both … and …" },
            { t: "short", q: "• British people/American people/English", model: "Both British people and American people speak English. (Also correct: Both British and American people speak English.)", keywords: [["both"], ["british"], ["american"], ["english"]], hint: "Two subjects, one verb: Both … and … speak English." }
          ] },

        { type: "activity", title: "b. Use (both…and) to form sentences about the following pictures:", page: 66, source: "book", stage: "independent",
          instructions: "Look at the four pictures. Write a sentence with both … and for each one.", instructionsAr: "انظر إلى الصور الأربع واكتب جملة لكل صورة باستخدام both … and.",
          image: "crops/u8l5-pictures.jpg",
          items: [
            { t: "short", q: "1. (a pigeon and a message in a bottle)", model: "Both pigeons and bottles were used to carry messages in the past.", open: true, hint: "Both … and … were used to …" },
            { t: "short", q: "2. (a rainy street)", model: "The weather is both rainy and cold.", open: true, hint: "The weather is both … and …" },
            { t: "short", q: "3. (books and a laptop with Google)", model: "Both books and the internet are sources of information.", open: true, hint: "Both books and … are …" },
            { t: "short", q: "4. (a green park)", model: "The park is both green and peaceful.", open: true, hint: "The park is both … and …" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "Both Ali and Sara ____ clever.", options: ["is", "are"], answer: 1, why: "Two people → are." },
            { t: "mcq", q: "The film was both funny ____ exciting.", options: ["and", "or", "but"], answer: 0, why: "both … and." },
            { t: "mcq", q: "Both my father and my uncle ____ doctors.", options: ["is", "are"], answer: 1, why: "Two people → are." },
            { t: "mcq", q: "Which sentence is correct?", options: ["My sister is both kind and helpful.", "My sister is both kind or helpful."], answer: 0, why: "both … and (not or)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Join the sentences", source: "extra", stage: "independent",
          instructions: "Put the words in order to join the two sentences.", instructionsAr: "رتّب الكلمات لتربط الجملتين.",
          items: [
            { t: "order", q: "Kuwait is hot. Dubai is hot.", words: ["Both", "Kuwait", "and", "Dubai", "are", "hot."], answer: ["Both Kuwait and Dubai are hot.", "Both Dubai and Kuwait are hot."], why: "Two subjects → Both … and … + are." },
            { t: "order", q: "The test was long. The test was difficult.", words: ["The", "test", "was", "both", "long", "and", "difficult."], answer: ["The test was both long and difficult."], why: "Same subject, two adjectives." },
            { t: "short", q: "Join: “Football is popular. Basketball is popular.”", model: "Both football and basketball are popular.", keywords: [["both"], ["and"], ["are"]], hint: "Two subjects → are." }
          ] }
      ],
      game: { kind: "scramble", title: "Both … and Builder",
        sentences: [
          "Both the telephone and the telegraph were invented in the 19th century.",
          "The baby is both smart and sensitive.",
          "Sky diving is both interesting and dangerous.",
          "Both books and the internet are sources of information.",
          "Famous actors are both talented and skillful."
        ] },
      teacher: {
        notes: [
          "Warm-up: two students stand up. “Ahmed is tall. Fahad is tall.” → Both Ahmed and Fahad are tall.",
          "Read the two book examples. Show the two patterns: Both A and B + plural verb / subject + verb + both A and B.",
          "Book task a: three sentences. Accept “Both British and American people speak English.” too.",
          "Book task b: use the four pictures; accept any correct sentence with both … and.",
          "Extra practice, then the Grammar Lab."
        ],
        pair: ["“Find two”: pairs find two classmates with the same thing and say Both … and … have/are …", "Pairs describe each picture on p. 66 orally before writing."],
        group: ["Groups compare two countries/cities and write three sentences with both … and."],
        quick: [
          { q: "Join: Ali is clever. Sara is clever.", a: "Both Ali and Sara are clever." },
          { q: "Join: The baby is smart. The baby is sensitive.", a: "The baby is both smart and sensitive." },
          { q: "Both … ___ ?", a: "and" },
          { q: "Both my brother and I ___ (be) students.", a: "are" }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u8l6", num: 6, skill: "Reading",
      title: "Future Communication (Informative Text)",
      pages: [67, 68],
      status: "complete",
      canDo: ["Ask about the future", "Form questions"],
      goals: ["Read about three creative gadgets.", "Write a name for each gadget.", "Answer questions about the text.", "Learn 7 new words."],
      goalsAr: ["أقرأ عن ثلاثة أجهزة مبتكرة.", "أكتب اسمًا لكل جهاز.", "أجيب عن أسئلة حول النص.", "أتعلّم 7 كلمات جديدة."],
      warmup: {
        title: "Before you read — Think, Pair, Share",
        image: "crops/u8l6-warmup.jpg",
        emoji: "🔮",
        prompts: ["If you could ask someone from the future about communication, what questions would you ask?"],
        seconds: 90
      },
      vocab: [
        { w: "wearable", pos: "adjective", emoji: "⌚", def: "made to be worn on your body", ex: "The next step in wearable technology will be a bracelet.", exFromBook: true, ar: "قابل للارتداء" },
        { w: "bracelet", pos: "noun", emoji: "📿", def: "a piece of jewellery that you wear around your wrist", ex: "The next step in wearable technology will be a bracelet that will make your skin your new touch screen.", exFromBook: true, ar: "سِوار" },
        { w: "skin", pos: "noun", emoji: "✋", def: "the outer layer of your body", ex: "A bracelet that will make your skin your new touch screen.", exFromBook: true, ar: "جِلد / بشرة" },
        { w: "access", pos: "noun", emoji: "🔓", def: "the chance or right to use or get something", ex: "It’s another creative gadget that is being designed to help users get access to the latest news.", exFromBook: true, ar: "وصول / إمكانية الدخول" },
        { w: "activate", pos: "verb", emoji: "▶️", def: "to make something start working", ex: "The reader will be able to activate content ranging from audio to advertisements by touching various parts of the page.", exFromBook: true, ar: "يُفعّل / يُشغّل" },
        { w: "various", pos: "adjective", emoji: "🎨", def: "many different", ex: "…by touching various parts of the page.", exFromBook: true, ar: "مختلف / متنوّع" },
        { w: "directly", pos: "adverb", emoji: "🎯", def: "straight, without stopping or going through something else", ex: "They will have three tiny lasers and a micro mirror to reflect pictures directly into your eyes.", exFromBook: true, ar: "مباشرةً" }
      ],
      sections: [
        { type: "reading", title: "2. Read the short texts and write a name for each creative gadget.", page: 67,
          instructions: "Read about three gadgets of the future: (A), (B) and (C).",
          blocks: [
            { head: "(A) ……………………", paras: ["The next step in wearable technology will be a bracelet that will make your skin your new touch screen. It will be able to project a touchscreen onto your arm, making it possible for you to easily access and use your apps without having to take out your phone. You can play games, answer your calls, check the weather, find your way and keep whatever you want on your arm."] },
            { head: "(B) ……………………", paras: ["It’s another creative gadget that is being designed to help users get access to the latest news. This gadget works by connecting a smart newspaper to the internet. The reader will be able to activate content ranging from audio to advertisements by touching various parts of the page."] },
            { head: "(C) ……………………", paras: ["They look like normal lenses but they will have three tiny lasers and a micro mirror to reflect pictures directly into your eyes. There is no need to wear a smart watch, have a mobile phone, tablet or TV because these lenses can let you watch movies or read your messages without opening your eyes."] }
          ],
          speaker: null },

        { type: "activity", title: "Write a name for each creative gadget.", page: 67, source: "book",
          instructions: "Give each gadget a name.", instructionsAr: "اكتب اسمًا لكل جهاز.",
          items: [
            { t: "short", q: "(A) …", model: "The Touch-Screen Bracelet / Smart Skin Bracelet", open: true, hint: "It is a bracelet that turns your skin into a screen." },
            { t: "short", q: "(B) …", model: "The Smart Newspaper", open: true, hint: "A newspaper connected to the internet." },
            { t: "short", q: "(C) …", model: "Smart Contact Lenses", open: true, hint: "They look like normal lenses." }
          ] },

        { type: "activity", title: "3. Read again and answer the following questions:", page: 68, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What is the function of the bracelet?",
              model: "It projects a touchscreen onto your arm, so your skin becomes your touch screen. You can use your apps (play games, answer calls, check the weather, find your way) without taking out your phone.",
              keywords: [["touch", "screen", "skin", "arm"]], hint: "Text (A)." },
            { t: "short", q: "2. In what way is the newspaper creative?",
              model: "It is connected to the internet, so the reader can activate content, from audio to advertisements, by touching various parts of the page.",
              keywords: [["internet", "touch", "activate", "audio"]], hint: "Text (B)." },
            { t: "short", q: "3. How will the lenses replace smart devices?",
              model: "They reflect pictures directly into your eyes, so you can watch movies or read your messages without a smart watch, mobile phone, tablet or TV — even without opening your eyes.",
              keywords: [["eye"], ["movie", "message", "picture", "watch", "read"]], hint: "Text (C)." }
          ] },

        { type: "activity", title: "Extra Practice: Which gadget?", source: "extra", stage: "guided",
          instructions: "Choose A, B or C.", instructionsAr: "اختر A أو B أو C.",
          items: [
            { t: "mcq", q: "It has three tiny lasers and a micro mirror.", options: ["A — the bracelet", "B — the newspaper", "C — the lenses"], answer: 2, why: "Text (C)." },
            { t: "mcq", q: "You can check the weather on your arm.", options: ["A — the bracelet", "B — the newspaper", "C — the lenses"], answer: 0, why: "Text (A)." },
            { t: "mcq", q: "You touch parts of the page to play audio.", options: ["A — the bracelet", "B — the newspaper", "C — the lenses"], answer: 1, why: "Text (B)." },
            { t: "mcq", q: "You can read messages without opening your eyes.", options: ["A — the bracelet", "B — the newspaper", "C — the lenses"], answer: 2, why: "Text (C)." }
          ] },

        { type: "activity", title: "Extra Practice: Questions about the future", source: "extra", stage: "independent",
          instructions: "Make questions to ask someone from the future.", instructionsAr: "كوّن أسئلة لتسألها لشخص من المستقبل.",
          items: [
            { t: "order", q: "Make a question.", words: ["Will", "people", "use", "mobile", "phones?"], answer: ["Will people use mobile phones?"], why: "Will + subject + base verb …?" },
            { t: "order", q: "Make a question.", words: ["How", "will", "we", "read", "the", "news?"], answer: ["How will we read the news?"], why: "Question word + will + subject + verb?" },
            { t: "short", q: "Write your own question for someone from the future.", model: "What will communication be like in the year 2100?", open: true, hint: "What / How / Will …?" }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students write one question for a visitor from the future. Share a few.",
          "Pre-teach the 7 words with the pictures (bracelet on an arm, newspaper, contact lens).",
          "Read A, B and C; students suggest names and vote for the best.",
          "Answer exercise 3 from the text.",
          "Extra: questions about the future (Will … ?) — links to the speech act “Ask about the future”."
        ],
        pair: ["A describes one gadget without saying its letter; B guesses A, B or C.", "Pairs invent a fourth gadget and give it a name."],
        group: ["Groups present a future gadget: name, function, why it is useful."],
        quick: [
          { q: "What will the bracelet make your skin?", a: "Your new touch screen." },
          { q: "How does the smart newspaper work?", a: "It is connected to the internet." },
          { q: "What do the lenses have?", a: "Three tiny lasers and a micro mirror." },
          { q: "What does “activate” mean?", a: "To make something start working." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u8l7", num: 7, skill: "Writing",
      title: "The Development of Communication in the Future",
      pages: [68, 68],
      status: "complete",
      canDo: ["Express opinions", "Talk about preferences"],
      goals: ["Plan a two-paragraph report.", "Write about a past means of communication you would bring back.", "Write about communication in the future."],
      goalsAr: ["أخطط لتقرير من فقرتين.", "أكتب عن وسيلة تواصل قديمة أودّ إعادتها.", "أكتب عن التواصل في المستقبل."],
      warmup: {
        title: "Writing competition",
        image: null,
        emoji: "🏆",
        prompts: ["Which old means of communication would you like to bring back? Why?", "What will communication be like in 50 years?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "write", title: "4. Your school is organising a writing competition entitled: “The Development of Communication in the Future.”", page: 68, source: "book",
          instructions: "Plan and write a report of two paragraphs to take part in this competition. 1. In the 1st paragraph, write what means of communication from the past you would like to bring back and why (messages in bottles, pigeons, smoke signals ..etc). 2. In the 2nd paragraph, write about what you think communication will be like in the future. 3. Fill in the following organizer with your notes, then write your report in your notebook.",
          wordBank: ["I would like to bring back", "because", "In the past,", "In the future,", "I think", "will", "Both … and …", "In conclusion,"],
          frame: [
            { label: "Organizer — From the past", hint: "notes: pigeons / messages in bottles / smoke signals … why?" },
            { label: "Organizer — In the Future", hint: "notes: bracelets / smart lenses / … what will it be like?" },
            { label: "Paragraph 1 (from the past)", hint: "Introduction that attracts attention + the means you would bring back and why." },
            { label: "Paragraph 2 (in the future)", hint: "Topic sentence + details + a final thought stating your opinion." }
          ],
          model: "Have you ever imagined sending a letter with a bird? In the past, people used pigeons to carry messages, and I would like to bring this back. Pigeons were clever and loyal, and receiving a message from a bird must have been exciting. It was slower than texting, but every message was special, so people wrote carefully and thought about their words.\n\nIn the future, I think communication will be faster and more amazing than today. We will probably wear smart bracelets and lenses instead of carrying phones, and we will talk to people around the world in our own language with instant translation. However, in my opinion, technology should never replace meeting people face to face, because a real smile is worth more than a thousand messages.",
          modelFromBook: false,
          checklist: ["I wrote two paragraphs.", "Paragraph 1 is about the past; paragraph 2 is about the future.", "I started each sentence with a capital letter and ended with a full stop."],
          bookChecklist: [
            "Did I include an Introduction that attracts the reader’s attention?",
            "Did I make sure that each paragraph consists of a topic sentence and details that support the topic sentence? Did I end with a final thought stating my opinion?",
            "Did I edit my writing?"
          ],
          minWords: 100 },

        { type: "activity", title: "Extra Practice: A good opening", source: "extra", stage: "guided",
          instructions: "Which opening attracts the reader’s attention?", instructionsAr: "أي بداية تجذب انتباه القارئ؟",
          items: [
            { t: "mcq", q: "Choose the best introduction.", options: ["“This is my report.”", "“Have you ever imagined reading your messages without opening your eyes?”", "“Communication.”"], answer: 1, why: "A question makes the reader curious." },
            { t: "mcq", q: "Which sentence states an opinion as a final thought?", options: ["“Pigeons have two wings.”", "“In my opinion, the future of communication will be amazing.”"], answer: 1, why: "“In my opinion” gives a final thought with the writer’s view." }
          ] }
      ],
      game: { kind: "sort", title: "Past or Future?", buckets: ["From the past", "In the future"],
        cards: [["pigeons", 0], ["smoke signals", 0], ["messages in bottles", 0], ["messengers", 0], ["touch-screen bracelets", 1], ["smart lenses", 1], ["smart newspapers", 1], ["instant translation", 1]] },
      teacher: {
        notes: [
          "Brainstorm two lists on the board: From the past / In the future (use units 8 texts and the listening).",
          "Students fill in the organizer (book p. 68), then write two paragraphs.",
          "Teach an attractive introduction: a question, a surprising fact.",
          "Students edit their writing with the book checklist.",
          "The model is ours (not from the book). Show it after students write."
        ],
        pair: ["Pairs swap reports and check one item of the checklist each.", "A reads the introduction; B says if it attracts attention and why."],
        group: ["Mini competition: groups choose the best report and read it to the class."],
        quick: [
          { q: "What is paragraph 1 about?", a: "A means of communication from the past you would bring back, and why." },
          { q: "What is paragraph 2 about?", a: "What communication will be like in the future." },
          { q: "How can you attract the reader’s attention?", a: "e.g. start with a question or a surprising fact." }
        ]
      }
    }
  ]
});

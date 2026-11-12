BOOK.addUnit({
  id: "u1", num: 1, title: "Family and Home", titleAr: "العائلة والمنزل",
  pages: [17, 29], cover: 17,
  outcomes: {
    listening: [
      "Identify main ideas and specific details from spoken texts about familiar personal topics and routines.",
      "Recall essential information clearly presented in listening activities about preferences and daily habits.",
      "Explain reasons behind personal choices, habits, and favourite activities from spoken texts.",
      "Infer speakers’ feelings and attitudes based on their tone and vocabulary use."
    ],
    speaking: [
      "Express personal experiences and routines clearly and coherently.",
      "Describe familiar topics effectively using simple language structures and linking words.",
      "Participate confidently in short dialogues, demonstrating cultural understanding and values.",
      "Present organised ideas and responses of routines and personal experiences orally, using clear language and suitable linkers."
    ],
    reading: [
      "Recognise main ideas and detailed information from reading texts about family life, traditions, and daily routines.",
      "Identify explicit and implicit meanings within texts describing personal experiences and cultural traditions.",
      "Analyse the relationships between ideas presented in descriptive texts about traditional homes, culture, and routines.",
      "Interpret the writer’s purpose, viewpoint, and underlying values in texts about cultural and family practices."
    ],
    writing: [
      "Write simple sentences and short paragraphs accurately using present simple tense and “has/have got” to describe routines and possessions.",
      "Compose clear, structured descriptive paragraphs about personal routines, homes, and cultural experiences.",
      "Develop logically organised reports with appropriate topic sentences, supporting details, and conclusions.",
      "Evaluate written texts effectively for clarity, punctuation, grammar accuracy, and coherence, using suitable revision strategies."
    ]
  },
  lessons: [
    /* ───────────────────────── LESSON 1 ───────────────────────── */
    {
      id: "u1l1", num: 1, skill: "Reading", title: "Generations Together", pages: [20, 21], status: "complete",
      canDo: ["I can analyse explicit and implicit information effectively from reading texts about traditional Kuwaiti family life and cultural values."],
      goals: ["Read about the traditional Kuwaiti home.", "Learn 12 new words.", "Find the main idea and details.", "Talk about family values."],
      goalsAr: ["أقرأ عن البيت الكويتي القديم.", "أتعلم ١٢ كلمة جديدة.", "أجد الفكرة الرئيسية والتفاصيل.", "أتحدث عن قيم العائلة."],
      warmup: {
        title: "Before You Read", image: "crops/u1l1-warmup.jpg", emoji: "🏠", seconds: 90,
        instructions: "Look at the two homes, then discuss these questions.",
        prompts: ["What are the differences?", "Which one shows your culture?", "Which one would you prefer to live in? Why?"]
      },
      vocab: [
        { w: "bond", pos: "verb", emoji: "🤝", def: "to develop a close connection or strong relationship with someone", ex: "These houses were designed to bond family members with each other.", exFromBook: true, ar: "يربط", ipa: "/bɒnd/" },
        { w: "strongly", pos: "adverb", emoji: "💪", def: "very much or in a very serious way", ex: "A value that still strongly shapes Kuwaiti life today.", exFromBook: true, ar: "بقوة", ipa: "/ˈstrɒŋ.li/" },
        { w: "courtyard", pos: "noun", emoji: "🏛️", def: "an area of flat ground outside, partly or completely surrounded by buildings", ex: "At the centre of every traditional home was a large courtyard.", exFromBook: true, ar: "ساحة أو باحة", ipa: "/ˈkɔːt.jɑːd/" },
        { w: "gather", pos: "verb", emoji: "👨‍👩‍👧‍👦", def: "to come together in a group", ex: "Family members would gather to talk, share meals, and celebrate special events.", exFromBook: true, ar: "يتجمّع", ipa: "/ˈɡæð.ər/" },
        { w: "spacious", pos: "adjective", emoji: "📐", def: "large and with a lot of space", ex: "These homes were spacious and open.", exFromBook: true, ar: "واسع", ipa: "/ˈspeɪ.ʃəs/" },
        { w: "happily", pos: "adverb", emoji: "😊", def: "in a happy way", ex: "The family stayed happily connected.", exFromBook: false, ar: "بسعادة", ipa: "/ˈhæp.əl.i/" },
        { w: "elder", pos: "noun", emoji: "👴", def: "an older person, especially one with a respected position", ex: "We show respect for elders.", exFromBook: false, ar: "كبير السن", ipa: "/ˈel.dər/" },
        { w: "hospitality", pos: "noun", emoji: "☕", def: "being friendly and welcoming to guests and visitors", ex: "Guests are always welcomed with Arabic coffee, dates, and warm smiles.", exFromBook: true, ar: "ضيافة", ipa: "/ˌhɒs.pɪˈtæl.ə.ti/" },
        { w: "role", pos: "noun", emoji: "🎭", def: "the part or job someone has in a situation", ex: "Each family member had a clear role.", exFromBook: true, ar: "دور", ipa: "/rəʊl/" },
        { w: "manage", pos: "verb", emoji: "🗂️", def: "to succeed in doing or dealing with something difficult", ex: "Women managed the home with care.", exFromBook: true, ar: "يتمكّن من", ipa: "/ˈmæn.ɪdʒ/" },
        { w: "wisdom", pos: "noun", emoji: "🦉", def: "the ability to make good decisions from experience and knowledge", ex: "The grandparents held the family together with their love and wisdom.", exFromBook: true, ar: "حكمة", ipa: "/ˈwɪz.dəm/" },
        { w: "united", pos: "adjective", emoji: "🔗", def: "joined together as a group", ex: "The traditional Kuwaiti home reflected a united spirit of respect and love.", exFromBook: true, ar: "متّحد أو متواصل", ipa: "/juːˈnaɪ.tɪd/" }
      ],
      sections: [
        { type: "reading", title: "Generations Together", page: 20,
          instructions: "Read the text and do the tasks that follow.",
          paras: [
            "The traditional Kuwaiti home was more than just a place to live. It was the heart of family life. In the past, families lived in large, connected homes, often under one roof with grandparents, parents, and children. These houses were designed to bond family members with each other, a value that still strongly shapes Kuwaiti life today.",
            "At the centre of every traditional home was a large courtyard where family members would gather to talk, share meals, and celebrate special events. These homes were spacious and open, allowing [[them]] to stay happily connected. Today, most homes do not have courtyards, but the feeling of being close is still present. Respect for elders, kindness, and a spirit of hospitality are values Kuwaitis still practise today. Guests are always welcomed with Arabic coffee, dates, and warm smiles, which shows the importance of hospitality in everyday life.",
            "Each family member had a clear role, and everyone supported one another. Men protected their families and worked to provide for their needs, while women managed the home with care. Boys worked with their fathers, and girls helped their mothers at home. These traditions taught children important values such as wisdom, respect, and cooperation. In fact, these values still guide Kuwaiti families today.",
            "The grandparents held the family together with their love and wisdom, guiding the younger generation with gentle hearts and strong values.",
            "Children also gathered around their grandparents to enjoy *ghatawi*, traditional riddles. Boys played marbles, known as *teyal*, while girls enjoyed playing *haila*, a hopping game. However, the children’s favourite activity of all was playing hide and seek, *seda ma’seda*, a joyful game that filled the courtyard with laughter.",
            "In short, the traditional Kuwaiti home reflected a united spirit of respect and love, just as the Kuwaiti culture continues to do today."
          ],
          image: "crops/u1l1-games.jpg",
          note: "On the printed page the first line (“The traditional Kuwaiti home was more than just a place to live.”) sits above paragraph 1. Here it is joined to paragraph 1 so the paragraph numbers match the book’s questions."
        },
        { type: "activity", title: "a. Choose the correct answer.", page: 21, source: "book", stage: "independent",
          instructions: "Choose the correct answer.",
          items: [
            { t: "mcq", q: "1. Choose another title for the passage:", options: ["Building Houses with Bricks", "The Heart of Kuwaiti Family Life", "Modern Homes Around the World", "How to Decorate Your Living Room"], answer: 1,
              hint: "What is the whole text about? Read the first two sentences again.", why: "The text says the home “was the heart of family life”. It is about family life, not building or decorating." },
            { t: "mcq", q: "2. The writer’s purpose is to show that traditional Kuwaiti homes were:", options: ["full of joy, values, and strong family love.", "peaceful places for quiet time and sleeping.", "beautiful and expensive houses for big families.", "simple buildings used mainly for protecting people."], answer: 0,
              hint: "Read the last paragraph: “In short, …”", why: "The last paragraph says the home “reflected a united spirit of respect and love”, and the text talks about laughter, values and family love." }
          ] },
        { type: "activity", title: "b. Answer the following questions.", page: 21, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", q: "1. What does the underlined word “them” in the 2nd paragraph refer to?", model: "“them” refers to the family members.",
              keywords: [["famil", "member", "people"]], hint: "Read the sentence before “them”. Who would gather in the courtyard?" },
            { t: "short", q: "2. Mention the traditional Kuwaiti kids’ games.", model: "Ghatawi (traditional riddles), teyal (marbles), haila (a hopping game) and seda ma’seda (hide and seek).",
              keywords: [["ghatawi", "riddle", "teyal", "marble", "haila", "hop", "seda", "hide"]], hint: "Look at paragraph 5. The games are in italics." }
          ] },
        { type: "activity", title: "Role & Value", page: 21, source: "book", stage: "independent",
          instructions: "Match each family member to their role. Then, write a matching value from the list below. (Values can be repeated)",
          items: [
            { t: "match", q: "Match each family member to their role.",
              pairs: [["Grandparents", "guided younger generations with wisdom."], ["Father", "provided for the family’s needs and protected them."], ["Mother", "managed the home with care."], ["Son", "helped father with work."], ["Daughter", "helped mother at home."]],
              hint: "Paragraphs 3 and 4 tell you the role of each person.", why: "Paragraph 3: men protected and provided, women managed the home, boys worked with fathers, girls helped mothers. Paragraph 4: grandparents guided with wisdom." },
            { t: "table", q: "Now write a matching value for each family member. (respect (elderly/ heritage), teamwork, responsibility, kindness, cooperation, hospitality)",
              head: ["Family Member", "Value"],
              rows: [["1. Grandparents", { open: true, model: "respect (elderly / heritage) or kindness" }], ["2. Father", { open: true, model: "responsibility" }], ["3. Mother", { open: true, model: "responsibility or kindness" }], ["4. Son", { open: true, model: "cooperation or teamwork" }], ["5. Daughter", { open: true, model: "cooperation or teamwork" }]],
              open: true, note: "Values can be repeated and more than one answer is possible. Explain your choice." }
          ] },
        { type: "speak", title: "Mini Drama – Kuwaiti Home Role Play", page: 21, source: "book", image: "crops/u1l1-drama.jpg",
          instructions: "Pair up with a classmate to do the following.",
          steps: ["Pick one value: respect, teamwork, or kindness.", "Pick two roles: grandparent & child or parent & child.", "Write short lines that show the value.", "Act out your mini scene in a traditional Kuwaiti home. Then, switch roles."],
          dialogue: [{ who: "Child", text: "I’ll sit next to you, Grandma, to help you if you need anything." }, { who: "Grandma", text: "Thank you, dear. That’s very kind." }],
          starters: ["Can I help you with …?", "Let me carry …", "Thank you, dear. That’s very …", "Let’s … together."],
          record: true }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Warm-up (2 min): show the two homes; students compare old and modern homes.", "Pre-teach 4–5 words with the flip cards (courtyard, gather, hospitality, role, wisdom).", "First reading for gist (task a), second reading for detail (task b, Role & Value).", "Finish with the Mini Drama in pairs; invite 2 pairs to perform."],
        pair: ["Mini Drama: grandparent & child showing respect, teamwork or kindness.", "Partner quiz: one reads a word, the other says the meaning or an example."],
        group: ["Groups of 4: draw a traditional Kuwaiti home and label the courtyard, rooms and family roles.", "Games corner: each group explains one traditional game (ghatawi, teyal, haila, seda ma’seda)."],
        quick: [{ q: "Where did families gather in a traditional home?", a: "In the courtyard." }, { q: "Name one value Kuwaitis still practise today.", a: "Respect for elders / kindness / hospitality." }, { q: "How are guests welcomed?", a: "With Arabic coffee, dates and warm smiles." }, { q: "What is *teyal*?", a: "Marbles." }]
      }
    },

    /* ───────────────────────── LESSON 2 ───────────────────────── */
    {
      id: "u1l2", num: 2, skill: "Grammar", title: "Present Simple", pages: [22], status: "complete",
      canDo: ["I can use the present simple tense accurately to clearly describe daily routines and habitual actions."],
      goals: ["Use the present simple for routines and facts.", "Add -s with he / she / it.", "Make negatives and questions with do / does."],
      goalsAr: ["أستخدم المضارع البسيط للعادات والحقائق.", "أضيف ‎-s‎ مع he / she / it.", "أكوّن النفي والسؤال باستخدام do / does."],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u1l2-warmup.jpg", emoji: "⏰", seconds: 90,
        instructions: "Discuss the following.",
        prompts: ["What do you do every morning before school?", "Do you have the same routine every day?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Present Simple", page: 22,
          steps: [
            { title: "When do we use it?", text: "We use the present simple for routines and facts.", textAr: "نستخدم المضارع البسيط للعادات اليومية والحقائق.",
              examples: ["{s:I} {v:pray} five times a day.", "{s:She} {v:brushes} her teeth {t:every day}."] },
            { title: "Affirmative: I / you / we / they + base verb", text: "With I, you, we and they we use the base verb (no -s).", textAr: "مع I / you / we / they نستخدم الفعل في صورته الأساسية.",
              examples: ["{s:I} {v:pray} five times a day.", "{s:We} {v:eat} breakfast together."] },
            { title: "Affirmative: he / she / it + verb + s", text: "With he, she and it we add -s (or -es) to the verb.", textAr: "مع he / she / it نضيف ‎-s‎ أو ‎-es‎ إلى الفعل.",
              examples: ["{s:She} {v:brushes} her teeth {t:every day}.", "{s:My father} {v:drives} to work."],
              tip: "brush → brushes, watch → watches, go → goes, study → studies" },
            { title: "Negative: don’t / doesn’t + base verb", text: "Use don’t (I/you/we/they) or doesn’t (he/she/it). After don’t / doesn’t the verb has NO -s.", textAr: "نستخدم don’t أو doesn’t، وبعدهما يأتي الفعل بدون ‎-s‎.",
              examples: ["{s:I} {n:don’t} {v:play} video games {t:at night}.", "{s:Dalal} {n:doesn’t} {v:sleep} late."] },
            { title: "Yes / No Questions", text: "Do / Does + subject + base verb?", textAr: "Do / Does + الفاعل + الفعل الأساسي؟",
              examples: ["{a:Does} {s:your brother} {v:like} music?", "{a:Do} {s:you} {v:wake} up early?"] },
            { title: "Wh- Questions", text: "Wh-Q + do / does + subject + base verb?", textAr: "أداة الاستفهام + do / does + الفاعل + الفعل الأساسي؟",
              examples: ["{q:When} {a:do} {s:you} {v:go} to school?", "{q:What} {a:does} {s:he} {v:eat} for lunch?"] },
            { title: "Key words", text: "These words often go with the present simple: always, usually, sometimes, every day / week / month.", textAr: "كلمات دالة: always, usually, sometimes, every day/week/month",
              examples: ["{s:I} {t:always} {v:help} my mother.", "{s:We} {t:usually} {v:visit} Grandpa {t:every Friday}."] }
          ],
          worked: { q: "Correct the underlined verb: My dad doesn’t drives a blue car.", steps: ["Find the helper verb: doesn’t.", "Rule: after doesn’t we use the base verb (no -s).", "drives → drive."], a: "My dad doesn’t drive a blue car." }
        },
        { type: "activity", title: "Extra Practice: -s or no -s?", source: "extra", stage: "guided",
          instructions: "Tap the correct verb. Look at the subject first.",
          items: [
            { t: "choose", q: "She ____ her teeth every day.", options: ["brush", "brushes"], answer: 1, hint: "The subject is “she”.", why: "he / she / it + verb + s (brush → brushes)." },
            { t: "choose", q: "I ____ five times a day.", options: ["pray", "prays"], answer: 0, hint: "The subject is “I”.", why: "I + base verb (no -s)." },
            { t: "choose", q: "Dalal ____ sleep late.", options: ["don’t", "doesn’t"], answer: 1, hint: "Dalal = she.", why: "he / she / it → doesn’t." },
            { t: "choose", q: "____ your brother like music?", options: ["Do", "Does"], answer: 1, hint: "your brother = he.", why: "Does + he/she/it + base verb." },
            { t: "choose", q: "When ____ you go to school?", options: ["do", "does"], answer: 0, hint: "The subject is “you”.", why: "Wh-Q + do + I/you/we/they + base verb." }
          ] },
        { type: "activity", title: "Read and correct the underlined verbs.", page: 22, source: "book", stage: "independent",
          instructions: "Read and correct the underlined verbs.",
          items: [
            { t: "fix", q: "1. My dad doesn’t {drives} a blue car.", answer: ["drive"], hint: "What comes after doesn’t?", why: "After doesn’t we use the base verb: doesn’t drive." },
            { t: "fix", q: "2. I {woke} up early every morning.", answer: ["wake"], hint: "“every morning” = a routine. Which tense?", why: "A routine needs the present simple. I + base verb: I wake up." },
            { t: "fix", q: "3. My mother {preparing} breakfast every day.", answer: ["prepares"], hint: "My mother = she.", why: "she + verb + s: My mother prepares breakfast." },
            { t: "fix", q: "4. Respectful students {doesn’t} make fun of others.", answer: ["don’t", "don't", "do not"], hint: "Students = they.", why: "they + don’t: Respectful students don’t make fun of others." },
            { t: "fix", q: "5. What {do} he eat for lunch?", answer: ["does"], hint: "The subject is “he”.", why: "Wh-Q + does + he + base verb: What does he eat for lunch?" }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a question.", words: ["Does", "your", "brother", "like", "music?"], answer: ["Does your brother like music?"], why: "Does + subject + base verb." },
            { t: "order", q: "Make a negative sentence.", words: ["Dalal", "doesn’t", "sleep", "late."], answer: ["Dalal doesn’t sleep late."], why: "Subject + doesn’t + base verb." },
            { t: "order", q: "Make a Wh- question.", words: ["When", "do", "you", "go", "to", "school?"], answer: ["When do you go to school?"], why: "Wh-Q + do + subject + base verb." }
          ] },
        { type: "speak", title: "a. Interview your partner.", page: 22, source: "book",
          instructions: "Ask questions about their daily routine with their family, then switch turns.",
          dialogue: [{ who: "A", text: "1. Do you …………?" }, { who: "B", text: "" }, { who: "A", text: "2. When do you …..?" }, { who: "B", text: "" }, { who: "A", text: "3. Does your ….…..?" }, { who: "B", text: "" }, { who: "A", text: "4. What does your ……..?" }, { who: "B", text: "" }],
          starters: ["Do you help your mother at home?", "When do you have dinner?", "Does your father go to the mosque?", "What does your sister do after school?", "Yes, I do. / No, I don’t.", "Yes, he does. / No, he doesn’t."],
          record: true },
        { type: "write", title: "b. Review your interview notes on your friend’s daily family routine.", page: 22, source: "book",
          instructions: "Write 2–3 present simple sentences (e.g., “Every evening, Sara helps her mother cook dinner.”) Read your notes clearly to the class.",
          wordBank: ["every evening", "always", "usually", "sometimes", "every Friday", "helps", "visits", "goes", "has", "eats"],
          frame: [{ label: "Sentence 1", hint: "Every morning, my friend …" }, { label: "Sentence 2", hint: "He / She usually …" }, { label: "Sentence 3", hint: "On Fridays, his / her family …" }],
          model: "Every morning, Fahad prays Fajr with his father. He usually has breakfast with his family. On Fridays, his family visits his grandmother.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I added -s after he / she.", "I wrote 2–3 sentences about my friend’s routine."],
          minWords: 15 }
      ],
      game: { kind: "quiz", title: "Present Simple Race", items: [
        { t: "choose", q: "My sister ____ to school by bus.", options: ["go", "goes"], answer: 1, why: "she → goes" },
        { t: "choose", q: "They ____ football every Friday.", options: ["play", "plays"], answer: 0, why: "they → base verb" },
        { t: "choose", q: "He ____ like fish.", options: ["don’t", "doesn’t"], answer: 1, why: "he → doesn’t" },
        { t: "choose", q: "____ you read every night?", options: ["Do", "Does"], answer: 0, why: "you → Do" },
        { t: "choose", q: "My grandfather ____ the newspaper every morning.", options: ["reads", "read"], answer: 0, why: "he → reads" },
        { t: "choose", q: "What time ____ your father come home?", options: ["do", "does"], answer: 1, why: "your father = he → does" }
      ] },
      teacher: {
        notes: ["Think, Pair, Share (2 min) on morning routines.", "Present the rule step by step; let students colour subject (blue) and verb (green) in their notebooks.", "Model the worked example, then the guided ‘-s or no -s’ task, then the book task.", "Interview in pairs; 3 students read their notes aloud."],
        pair: ["Interview: Do you…? / When do you…? / Does your…? / What does your…?", "Partner dictation: one says a sentence, the other changes it to he/she."],
        group: ["Routine chain: each student adds one sentence about a family routine using a key word (always, usually, sometimes)."],
        quick: [{ q: "Correct: She go to school by bus.", a: "She goes to school by bus." }, { q: "Make negative: I play video games at night.", a: "I don’t play video games at night." }, { q: "Make a question: He likes music.", a: "Does he like music?" }, { q: "Choose: What do/does your mother cook?", a: "does" }]
      }
    },

    /* ───────────────────────── LESSON 3 ───────────────────────── */
    {
      id: "u1l3", num: 3, skill: "Listening", title: "My Favourite Things", pages: [23], status: "complete",
      canDo: ["I can identify key explicit and implicit details clearly from spoken descriptions about people’s favourite activities and their reasons."],
      goals: ["Listen for names, activities and reasons.", "Take notes in a table.", "Talk about your favourite thing."],
      goalsAr: ["أستمع للأسماء والأنشطة والأسباب.", "أدوّن الملاحظات في جدول.", "أتحدث عن الشيء المفضل لديّ."],
      linkers: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next"],
      warmup: {
        title: "Before You Listen", image: "crops/u1l3-warmup.jpg", emoji: "⚽", seconds: 90,
        instructions: "Discuss the following questions.",
        prompts: ["What do you enjoy doing in your free time?", "What is your favourite thing to do? Why?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "Listen to three students talking about their favourite things.", page: 23, source: "book", needsAudio: true,
          audio: "audio/7A-p23.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EXf9hi7WMxBKnc5Uk0HtBwEBrXrsnR4vOF_s2Iz1NKDHAw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=xbSs0h",
          instructions: "Listen to three students talking about their favourite things. Then, complete the following table.",
          items: [
            { t: "table", q: "Complete the table while you listen.", head: ["Name", "Favourite thing", "Reasons"],
              rows: [["Dalal", "Drawing", { open: true }], ["Yousif", { open: true }, "It’s exciting and keeps him active and healthy."], ["Rashed", { open: true }, { open: true }]], open: true }
          ] },
        { type: "listen", title: "Listen again, then answer the following questions.", page: 23, source: "book", needsAudio: true,
          audio: "audio/7A-p23.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EXf9hi7WMxBKnc5Uk0HtBwEBrXrsnR4vOF_s2Iz1NKDHAw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=xbSs0h",
          instructions: "Listen again, then answer the following questions.",
          items: [
            { t: "short", q: "1. What do Youssef and his cousins do after their football game?", open: true },
            { t: "short", q: "2. Where does Dalal keep her best drawings?", open: true },
            { t: "short", q: "3. Who taught Rashid how to recite Qur’an?", open: true },
            { t: "short", q: "4. Why do you think Dalal’s friends ask her to draw pictures for them?", open: true },
            { t: "short", q: "5. Do you think they are all happy or sad? Why?", open: true }
          ] },
        { type: "speak", title: "Practise with your partner making sentences of your own.", page: 23, source: "book",
          instructions: "Ask and answer. Remember to use at least two words from the linkers bank.",
          dialogue: [{ who: "A", text: "What is your favourite thing to do?" }, { who: "B", text: "My favourite thing to do is …….." }, { who: "A", text: "When do you usually do it?" }, { who: "B", text: "I do it ………" }, { who: "A", text: "How does it make you feel?" }, { who: "B", text: "It makes me feel …….." }],
          example: "What’s your favourite thing and why do you like it? — My favourite thing is playing chess because it keeps me smart!",
          starters: ["My favourite thing to do is …", "I do it every … / after …", "It makes me feel happy / relaxed / proud …", "because …", "also …", "in addition, …"],
          record: true },
        { type: "listen", title: "Extra Practice: Three friends and their hobbies", source: "extra",
          instructions: "Listen to the generated voice. Then answer the questions.",
          script: [
            { who: "Noura", text: "Hi, I’m Noura. My favourite thing is reading stories. I usually read before I sleep because it relaxes me." },
            { who: "Fahad", text: "I’m Fahad. I love swimming. I swim with my brother every Saturday. It keeps me strong and healthy." },
            { who: "Maryam", text: "My name is Maryam. My favourite thing is baking with my mother. First, we choose a recipe. Next, we bake a cake. Finally, we share it with our grandparents. It makes me feel proud." }
          ],
          items: [
            { t: "mcq", q: "What is Noura’s favourite thing?", options: ["swimming", "reading stories", "baking"], answer: 1, why: "Noura says: “My favourite thing is reading stories.”" },
            { t: "mcq", q: "When does Fahad swim?", options: ["every Friday", "every Saturday", "every evening"], answer: 1, why: "Fahad says: “I swim with my brother every Saturday.”" },
            { t: "mcq", q: "Who does Maryam share the cake with?", options: ["her friends", "her teacher", "her grandparents"], answer: 2, why: "Maryam says: “we share it with our grandparents.”" },
            { t: "mcq", q: "How does baking make Maryam feel?", options: ["proud", "tired", "bored"], answer: 0, why: "Maryam says: “It makes me feel proud.”" },
            { t: "mcq", q: "Why does Noura read before she sleeps?", options: ["because it is homework", "because it relaxes her", "because her brother reads"], answer: 1, why: "Noura says: “because it relaxes me.”" }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["My favourite thing is playing chess.", "It keeps me smart.", "I usually read before I sleep.", "It makes me feel proud.", "I swim every Saturday because it keeps me healthy."] },
      teacher: {
        notes: ["Discuss the warm-up questions with the picture.", "Play the book recording (QR code on page 23) twice: first for the table, then for questions 1–5.", "The recording is not built into this app; the answers depend on the recording, so check them with the class.", "Pairs practise the dialogue frame using two linkers."],
        pair: ["Ask and answer: What is your favourite thing to do? When…? How does it make you feel?", "Partner survey: find two things you both enjoy."],
        group: ["Class bar chart: groups count favourite activities and report: “Most of us like … because …”."],
        quick: [{ q: "Complete: My favourite thing to do is …", a: "Students’ own answers." }, { q: "Give one linker from the bank.", a: "because / also / first / finally / therefore / in addition / for example / next" }, { q: "What is Dalal’s favourite thing?", a: "Drawing (given in the table)." }]
      }
    },

    /* ───────────────────────── LESSON 4 ───────────────────────── */
    {
      id: "u1l4", num: 4, skill: "Speaking", title: "My Daily Routines", pages: [24], status: "complete",
      canDo: ["I can present clear, structured descriptions of daily routines and personal habits orally, using appropriate linking words."],
      goals: ["Ask and answer about daily routines.", "Use always, usually, often, sometimes, never.", "Play “Guess the Routine”."],
      goalsAr: ["أسأل وأجيب عن الروتين اليومي.", "أستخدم ظروف التكرار.", "ألعب لعبة «خمّن الروتين»."],
      linkers: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next"],
      warmup: {
        title: "Discuss with your partner.", image: "crops/u1l4-warmup.jpg", emoji: "🌅", seconds: 90,
        instructions: "Discuss with your partner.",
        prompts: ["What is your favourite time of day?", "What do you usually do then?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Remember: how often?", page: 24,
          steps: [
            { title: "Frequency words (from the book’s “Remember” note)", text: "Always → Usually → Often → Sometimes → Never. They usually go before the main verb.", textAr: "دائمًا ← عادةً ← غالبًا ← أحيانًا ← أبدًا. تأتي غالبًا قبل الفعل الرئيسي.",
              examples: ["{s:I} {t:always} {v:wake} up at six.", "{s:We} {t:sometimes} {v:go} to the park.", "{s:He} {t:never} {v:sleeps} late."] }
          ] },
        { type: "speak", title: "Classmate Interview", page: 24, source: "book",
          instructions: "Learn about your partner’s daily habits and routines.",
          dialogue: [{ who: "A", text: "When do you wake up every morning?" }, { who: "B", text: "" }, { who: "A", text: "How do you usually spend your time after school?" }, { who: "B", text: "" }, { who: "A", text: "What activity do you always enjoy during the day?" }, { who: "B", text: "" }, { who: "A", text: "Where do you often go at the weekend?" }, { who: "B", text: "" }],
          starters: ["I wake up at … every morning.", "After school, I usually …", "I always enjoy … because …", "At the weekend, I often go to …"],
          record: true },
        { type: "speak", title: "Speaking Game: “Guess the Routine”", page: 24, source: "book",
          instructions: "Let’s play “Guess the Routine” game.",
          steps: ["Choose one of your daily activities in secret.", "Give your partner clues about it, but don’t say the activity’s name!", "Your partner should guess the secret activity from your clues. Then, switch roles."],
          dialogue: [{ who: "A", text: "I do it every day to keep my teeth clean and healthy." }, { who: "B", text: "Brushing your teeth!" }],
          starters: ["I do it every morning / evening …", "I do it with my …", "I need a … to do it.", "Is it …?"],
          record: false },
        { type: "activity", title: "Extra Practice: Guess the routine", source: "extra", stage: "guided",
          instructions: "Read the clue. Choose the routine.",
          items: [
            { t: "mcq", q: "“I do it five times a day. I go to the mosque or I do it at home.”", options: ["praying", "cooking", "swimming"], answer: 0, why: "Muslims pray five times a day." },
            { t: "mcq", q: "“I do it after school. I sit at my desk and use my books and pencil.”", options: ["sleeping", "doing homework", "playing football"], answer: 1, why: "Desk + books + pencil after school = homework." },
            { t: "mcq", q: "“I do it every night in my bed. I close my eyes.”", options: ["reading", "eating", "sleeping"], answer: 2, why: "Bed + close my eyes = sleeping." }
          ] },
        { type: "write", title: "Write about your habits and routine.", page: 24, source: "book",
          instructions: "Write 2-3 sentences in your notebook about your habits and routine. Use the present simple tense. Also, use at least two linkers from the bank.",
          wordBank: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next", "always", "usually", "often", "sometimes", "never"],
          frame: [{ label: "Sentence 1", hint: "First, I … every morning." }, { label: "Sentence 2", hint: "Next / Also, I usually …" }, { label: "Sentence 3", hint: "Finally, I … because …" }],
          model: "First, I wake up at six and pray Fajr. Next, I usually have breakfast with my family. Finally, I always do my homework after school because I want to do well.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used the present simple.", "I used at least two linkers."],
          minWords: 15 }
      ],
      game: { kind: "quiz", title: "How often?", items: [
        { t: "order", q: "Put the words in order.", words: ["I", "always", "wake", "up", "early."], answer: ["I always wake up early."], why: "Frequency word goes before the main verb." },
        { t: "order", q: "Put the words in order.", words: ["She", "never", "sleeps", "late."], answer: ["She never sleeps late."], why: "never + verb (with -s for she)." },
        { t: "order", q: "Put the words in order.", words: ["We", "usually", "visit", "Grandma", "on", "Fridays."], answer: ["We usually visit Grandma on Fridays."], why: "Subject + frequency word + verb." },
        { t: "choose", q: "100% of the time = ____", options: ["never", "always", "sometimes"], answer: 1, why: "always = every time" },
        { t: "choose", q: "0% of the time = ____", options: ["never", "usually", "often"], answer: 0, why: "never = not at any time" }
      ] },
      teacher: {
        notes: ["Warm-up with the Morning / Afternoon / Evening-Night pictures.", "Review frequency words from the ‘Remember’ note.", "Classmate Interview: model one exchange with a strong student first.", "Guess the Routine: 3 minutes per pair, then two pairs perform."],
        pair: ["Classmate Interview (4 questions).", "Guess the Routine game."],
        group: ["‘Find someone who…’ walk-around: always walks to school / never drinks coffee / often reads at night."],
        quick: [{ q: "Put in order: usually / I / at seven / have breakfast", a: "I usually have breakfast at seven." }, { q: "Which word means 0%?", a: "never" }, { q: "Ask your partner one question about the weekend.", a: "e.g. Where do you often go at the weekend?" }]
      }
    },

    /* ───────────────────────── LESSON 5 ───────────────────────── */
    {
      id: "u1l5", num: 5, skill: "Reading", title: "Sharing My Culture", pages: [25, 26], status: "complete",
      canDo: ["I can recognise explicit details clearly from personal emails describing Kuwaiti family traditions, cultural activities, and values."],
      goals: ["Read two friendly emails.", "Learn the parts of an email.", "Find details about Kuwaiti traditions."],
      goalsAr: ["أقرأ رسالتين بريديتين وديتين.", "أتعرّف أجزاء البريد الإلكتروني.", "أجد تفاصيل عن العادات الكويتية."],
      warmup: {
        title: "Before You Read", image: "crops/u1l5-warmup.jpg", emoji: "📧", seconds: 60,
        instructions: "Discuss with your partner.",
        prompts: ["How do you enjoy your time with your family?"]
      },
      vocab: [
        { w: "culture", pos: "noun", emoji: "🕌", def: "the way of life, beliefs, and customs of a group", ex: "I’m really interested in your culture.", exFromBook: true, ar: "ثقافة", ipa: "/ˈkʌl.tʃər/" },
        { w: "share", pos: "verb", emoji: "🗣️", def: "to tell someone about your thoughts, ideas or stories", ex: "My grandparents share amazing stories about Kuwait’s past.", exFromBook: true, ar: "يشارك", ipa: "/ʃeər/" },
        { w: "heritage", pos: "noun", emoji: "🏺", def: "the history and traditions of a country that continue to be important", ex: "It’s a special part of our Kuwaiti heritage.", exFromBook: true, ar: "تاريخ", ipa: "/ˈher.ɪ.tɪdʒ/" },
        { w: "tradition", pos: "noun", emoji: "🎑", def: "a way of acting that people have followed for a long time", ex: "It’s a tradition where all the relatives gather to enjoy delicious food.", exFromBook: true, ar: "تقاليد", ipa: "/trəˈdɪʃ.ən/" },
        { w: "brilliant", pos: "adjective", emoji: "🌟", def: "very good", ex: "We have a brilliant time together.", exFromBook: true, ar: "جميل أو رائع", ipa: "/ˈbrɪl.jənt/" },
        { w: "close", pos: "adjective", emoji: "🫂", def: "having a strong emotional connection", ex: "We are a very close family.", exFromBook: true, ar: "متقارب", ipa: "/kləʊs/" },
        { w: "look forward to", pos: "phrasal verb", emoji: "🤩", def: "to feel excited and happy about something that is going to happen", ex: "I always look forward to these gatherings!", exFromBook: true, ar: "يتطلّع إلى", ipa: "/ˈlʊk ˌfɔː.wəd ˌtuː/" },
        { w: "weekly", pos: "adjective", emoji: "📅", def: "happening once a week", ex: "It’s a weekly gathering.", exFromBook: true, ar: "أسبوعي", ipa: "/ˈwiːk.li/" },
        { w: "extremely", pos: "adverb", emoji: "💯", def: "very", ex: "I feel extremely proud to be a part of it.", exFromBook: true, ar: "بشدة", ipa: "/ɪkˈstriːm.li/" },
        { w: "relax", pos: "verb", emoji: "😌", def: "to become less active and calm", ex: "We also relax, laugh, and show respect.", exFromBook: true, ar: "يرتاح", ipa: "/rɪˈlæks/" },
        { w: "definitely", pos: "adverb", emoji: "✅", def: "without any doubt; certainly", ex: "You should definitely visit us one day!", exFromBook: true, ar: "بشكل مؤكد", ipa: "/ˈdef.ɪ.nət.li/" }
      ],
      sections: [
        { type: "reading", title: "Sharing My Culture", page: 25, kind: "email",
          blocks: [
            { head: "To: Ahmed\nSubject: Tell Me About Your Kuwaiti Family", paras: ["Dear Ahmed,", "Hello, I hope you and your family are doing well. First, I would love to learn more about your life in Kuwait. In addition, could you tell me more about your family as well? I’m really interested in your culture. Take care!", "Best regards,\nTom"] },
            { head: "To: Tom\nSubject: My Family in Kuwait", paras: ["Dear Tom,", "Hello, we are well, thank you. I hope you are well too! First, let me tell you about my family. I live in a large house near Kuwait City with my parents, my younger sister, Lulwa, and my older brother, Jassim. In addition, my father is a doctor at Jaber Hospital, and my mother teaches Arabic at a school. I love spending time with my grandparents because they share amazing stories about Kuwait’s past and heritage.", "Every Friday, we usually go to the mosque for *Al-jumu’ah* prayer. After that, we have a big family lunch at my grandfather’s house. We call it *zuwara*. It’s a tradition where all the relatives gather to enjoy delicious food and have a brilliant time together. As a result, we are a very close family, and I always look forward to these gatherings!", "Sometimes, I also go with my dad to the *Diwaniya*. It’s a weekly gathering where men talk about life, sports, and news. It’s a special part of our Kuwaiti heritage, and I feel extremely proud to be a part of it. We also [[relax]], laugh, and show respect for each other’s opinions. I have many friends there too. Finally, you should definitely visit us one day!", "Write back and tell me more about your family and friends, too!", "Best regards,\nAhmed"] }
          ] },
        { type: "activity", title: "Read the passage and match the questions to the correct answers.", page: 26, source: "book", stage: "guided",
          instructions: "Read the passage and match the questions to the correct answers. Then, check with a partner.",
          items: [
            { t: "match", q: "Match the questions to the answers.",
              pairs: [["1. Why is it important to write a clear subject line in an email?", "To show what the email is about before reading it."], ["2. Where do you write the name of the person receiving the email?", "At the top, after “Dear”"], ["3. How should you begin an email to a friend?", "With a polite greeting"], ["4. What kind of language would you use when writing to a friend?", "Friendly and informal"], ["5. How should you end your email politely?", "Take care! Best regards"]],
              hint: "Look at how Tom and Ahmed start and finish their emails.", why: "Both emails start with “Dear …” and a greeting, use friendly language, and end with “Take care! / Best regards”." }
          ] },
        { type: "activity", title: "a. Choose the correct answer.", page: 26, source: "book", stage: "independent",
          instructions: "Choose the correct answer.",
          items: [
            { t: "mcq", q: "1. Ahmed’s email is mainly about:", options: ["A visiting tour to Kuwait.", "A typical Friday in Kuwait City.", "Ahmed’s family life and cultural traditions.", "Ahmed’s school subjects and favourite teachers."], answer: 2, hint: "Tom asked about Ahmed’s life and family.", why: "Ahmed writes about his family, zuwara and the Diwaniya: family life and traditions." },
            { t: "mcq", q: "2. The opposite of the underlined word “relax” in the 2nd email is:", options: ["run", "worry", "enjoy", "gather"], answer: 1, hint: "relax = become calm. What is the opposite of calm?", why: "relax means to become calm; worry is the opposite feeling." }
          ] },
        { type: "activity", title: "b. Answer the following questions.", page: 26, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", q: "1. How many siblings does Ahmed have, and what are their names?", model: "He has two siblings: his younger sister, Lulwa, and his older brother, Jassim.", keywords: [["two", "2"], ["lulwa"], ["jassim"]], hint: "Look at the first paragraph of Ahmed’s email." },
            { t: "short", q: "2. What does Ahmed enjoy doing with his grandparents? Why?", model: "He loves spending time with them because they share amazing stories about Kuwait’s past and heritage.", keywords: [["spend", "time", "stor"], ["stor", "past", "heritage"]], hint: "Find the word “because”." }
          ] },
        { type: "activity", title: "Traditional Kuwaiti Activities", page: 26, source: "book", stage: "independent",
          instructions: "a. Complete the table. Use the email to fill in who participates in each traditional activity and when it takes place.",
          items: [
            { t: "table", q: "Complete the table.", head: ["Traditional activity", "Who participates?", "When?"],
              rows: [
                ["zuwara", { answer: ["all the relatives", "the relatives", "relatives", "all relatives", "the family", "family", "ahmed's family", "ahmed’s family"], model: "All the relatives" }, { answer: ["every friday", "friday", "on friday", "on fridays", "fridays", "after al-jumu'ah prayer", "after al-jumu’ah prayer", "every friday after al-jumu’ah prayer"], model: "Every Friday (after Al-jumu’ah prayer)" }],
                [{ answer: ["diwaniya", "the diwaniya"], model: "Diwaniya" }, { answer: ["men", "ahmed and his dad", "ahmed and his father", "the men"], model: "Men (Ahmed sometimes goes with his dad)" }, { answer: ["weekly", "every week", "once a week"], model: "Weekly" }]
              ] }
          ] },
        { type: "discuss", title: "b. Share a Kuwaiti tradition you celebrate with your family. Why is it important?", page: 26, source: "book", image: "crops/u1l5-diwaniya.jpg",
          prompts: ["Share a Kuwaiti tradition you celebrate with your family.", "Why is it important?"],
          starters: ["In my family, we …", "We do it every …", "It is important because …"] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Warm-up: How do you enjoy your time with your family?", "Read Tom’s email aloud; ask: What does Tom want to know?", "Students read Ahmed’s email silently, then do the email-skills matching (task 2).", "Tasks 3a, 3b and the table; finish with students sharing a tradition."],
        pair: ["Check task 2 with a partner (the book asks this).", "Role-play: one is Tom asking questions, the other is Ahmed answering."],
        group: ["Each group writes a short reply from Tom telling Ahmed about his own family (use First, In addition, Finally)."],
        quick: [{ q: "What do we call the big family lunch on Friday?", a: "zuwara" }, { q: "What is the Diwaniya?", a: "A weekly gathering where men talk about life, sports and news." }, { q: "How should you end an email politely?", a: "Take care! Best regards" }, { q: "Opposite of relax?", a: "worry" }]
      }
    },

    /* ───────────────────────── LESSON 6 ───────────────────────── */
    {
      id: "u1l6", num: 6, skill: "Grammar", title: "Have got / Has got", pages: [27], status: "complete",
      canDo: ["I can apply the grammatical structure “have got / has got” accurately in descriptive sentences about personal possessions and home features."],
      goals: ["Say what people have with have got / has got.", "Make negatives: haven’t got / hasn’t got.", "Describe your dream room."],
      goalsAr: ["أعبّر عن الملكية باستخدام have got / has got.", "أكوّن النفي: haven’t got / hasn’t got.", "أصف غرفة أحلامي."],
      warmup: {
        title: "Look at the picture of a bedroom.", image: "crops/u1l6-warmup.jpg", emoji: "🛏️", seconds: 90,
        instructions: "Look at the picture of a bedroom. What do you see? Discuss with your partner.",
        prompts: ["What do you like in the room?", "What would you add to make it your dream room?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Have got / Has got", page: 27,
          steps: [
            { title: "What is it for?", text: "Use have/has got to say what you or other people have.", textAr: "نستخدم have got / has got للتعبير عمّا يملكه الشخص.",
              examples: ["{s:I} {v:have got} a quiet room.", "{s:He} {v:has got} a garage."] },
            { title: "I / You / We / They → have got", text: "Use have got with I, you, we and they.", textAr: "مع I / you / we / they نستخدم have got.",
              examples: ["{s:I} {v:have got} a quiet room.", "{s:They} {v:have got} a bookshelf."], tip: "Short form: I’ve got, we’ve got, they’ve got" },
            { title: "He / She / It → has got", text: "Use has got with he, she and it (and one person or thing).", textAr: "مع he / she / it (أو اسم مفرد) نستخدم has got.",
              examples: ["{s:He} {v:has got} a garage.", "{s:This house} {v:has got} a blue door."], tip: "Short form: he’s got, she’s got" },
            { title: "Negative", text: "haven’t got (I/you/we/they) – hasn’t got (he/she/it).", textAr: "النفي: haven’t got / hasn’t got.",
              examples: ["{s:We} {n:haven’t got} a big garden.", "{s:She} {n:hasn’t got} a TV in her room."] }
          ],
          table: { head: ["", "Have got", "Has got"], rows: [["Pronouns", "I / You / We / They", "He / She / It"], ["✔ Affirmative", "I have got a quiet room.", "He has got a garage."], ["✖ Negative", "We haven’t got a big garden.", "She hasn’t got a TV in her room."]] },
          worked: { q: "Choose: Soud (have got / has got) a big family.", steps: ["Who is the subject? Soud = he.", "he / she / it → has got."], a: "Soud has got a big family." }
        },
        { type: "activity", title: "Underline the correct answers in the following sentences.", page: 27, source: "book", stage: "guided",
          instructions: "Tap the correct answer.",
          items: [
            { t: "choose", q: "1. Soud ____ a big family.", options: ["have got", "has got"], answer: 1, hint: "Soud = he.", why: "he → has got." },
            { t: "choose", q: "2. My cousins ____ their books today.", options: ["haven’t got", "hasn’t got"], answer: 0, hint: "My cousins = they.", why: "they → haven’t got." },
            { t: "choose", q: "3. I ____ enough money for the cinema.", options: ["haven’t got", "hasn’t got"], answer: 0, hint: "The subject is “I”.", why: "I → haven’t got." },
            { t: "choose", q: "4. Aisha and Sama ____ matching dresses.", options: ["have got", "has got"], answer: 0, hint: "Aisha and Sama = they.", why: "they → have got." }
          ] },
        { type: "activity", title: "Fill in the spaces using has / have got, or the negative forms hasn’t / haven’t got.", page: 27, source: "book", stage: "independent",
          instructions: "Fill in the spaces using has / have got, or the negative forms hasn’t / haven’t got.",
          items: [
            { t: "fill", q: "1. This house ____ a blue door. It suits it very well.", answer: ["has got", "’s got", "'s got"], bank: ["have got", "has got", "haven’t got", "hasn’t got"], hint: "This house = it.", why: "it → has got." },
            { t: "fill", q: "2. We ____ a garage. There are two cars inside it.", answer: ["have got", "’ve got", "'ve got"], bank: ["have got", "has got", "haven’t got", "hasn’t got"], hint: "The subject is “we”. Is it positive?", why: "we → have got (there are two cars, so it is positive)." },
            { t: "fill", q: "3. They (not) ____ a TV, but they have a bookshelf.", answer: ["haven’t got", "haven't got", "have not got"], bank: ["have got", "has got", "haven’t got", "hasn’t got"], hint: "(not) = negative. They = ?", why: "they + negative → haven’t got." },
            { t: "fill", q: "4. My brother (not) ____ any electronics in his room.", answer: ["hasn’t got", "hasn't got", "has not got"], bank: ["have got", "has got", "haven’t got", "hasn’t got"], hint: "My brother = he. (not) = negative.", why: "he + negative → hasn’t got." }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "Correct the word in brackets.",
          items: [
            { t: "fix", q: "My sister {have} got a new bike.", answer: ["has"], hint: "My sister = she.", why: "she → has got." },
            { t: "fix", q: "We {hasn’t} got a swimming pool.", answer: ["haven’t", "haven't", "have not"], hint: "The subject is “we”.", why: "we → haven’t got." },
            { t: "order", q: "Put the words in order.", words: ["My", "room", "has", "got", "a", "big", "window."], answer: ["My room has got a big window."], why: "Subject + has got + thing." }
          ] },
        { type: "speak", title: "Take turns asking and answering the following questions.", page: 27, source: "book",
          instructions: "Talk about: what things your dream room has; what is inside the room; what makes it special or different.",
          dialogue: [{ who: "A", text: "What has your dream room got?" }, { who: "B", text: "My dream room has got ……" }],
          starters: ["My dream room has got …", "There is …", "There are …", "It is special because …"],
          record: true }
      ],
      game: { kind: "quiz", title: "have got or has got?", items: [
        { t: "choose", q: "Dad ____ a new car.", options: ["have got", "has got"], answer: 1, why: "Dad = he → has got" },
        { t: "choose", q: "You ____ a nice smile.", options: ["have got", "has got"], answer: 0, why: "you → have got" },
        { t: "choose", q: "The kitchen ____ a big window.", options: ["have got", "has got"], answer: 1, why: "it → has got" },
        { t: "choose", q: "My friends ____ bikes.", options: ["haven’t got", "hasn’t got"], answer: 0, why: "they → haven’t got" },
        { t: "choose", q: "Mona ____ a laptop.", options: ["haven’t got", "hasn’t got"], answer: 1, why: "she → hasn’t got" },
        { t: "choose", q: "I ____ two brothers.", options: ["have got", "has got"], answer: 0, why: "I → have got" }
      ] },
      teacher: {
        notes: ["Warm-up: describe the bedroom picture.", "Present the table (pronouns → have/has got), use colours for subject and verb.", "Worked example, then ‘Underline’ (guided) and ‘Fill in’ (independent).", "Pairs: What has your dream room got?"],
        pair: ["Dream room interview with sentence starters.", "Memory game: look at the bedroom picture for 30 seconds, then say what it has got."],
        group: ["Draw and present a dream room poster: “Our dream room has got …”."],
        quick: [{ q: "Complete: She ___ a TV in her room. (negative)", a: "hasn’t got" }, { q: "Complete: We ___ a big garden. (positive)", a: "have got" }, { q: "Correct: He have got a garage.", a: "He has got a garage." }]
      }
    },

    /* ───────────────────────── LESSON 7 ───────────────────────── */
    {
      id: "u1l7", num: 7, skill: "Writing", title: "My Dream Home", pages: [28, 29], status: "complete",
      canDo: ["I can compose clear and logically structured descriptive paragraphs detailing a dream home and enjoyable activities using suitable linking words."],
      goals: ["Describe a house with has got / there is / there are.", "Plan two paragraphs.", "Write a report about your dream home."],
      goalsAr: ["أصف منزلًا باستخدام has got و there is/are.", "أخطط لفقرتين.", "أكتب تقريرًا عن منزل أحلامي."],
      linkers: ["because", "also", "first", "finally", "for example", "next"],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u1l7-warmup.jpg", emoji: "🏡", seconds: 120,
        instructions: "Look at the pictures of the different houses. Choose one house at a time and answer the questions with your partner.",
        prompts: ["What kind of house is this?", "What has this house got? (Use “has got” / “there is/are”)", "Would you like to live in this house? Why or why not?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "a. Match each room with an activity.", page: 28, source: "book", stage: "guided",
          instructions: "Think about your dream home. What can you do there? Match each room with an activity.",
          items: [
            { t: "match", q: "Match each room with an activity.", pairs: [["1. Bedroom", "sleep and relax"], ["2. Living room", "watch TV with your family"], ["3. Kitchen", "cook with your parents"], ["4. Garden", "play outside or plant flowers"], ["5. Game room", "play games with friends"]],
              hint: "Think: where do you cook? where do you sleep?", why: "Each room is used for one activity: we sleep in the bedroom, cook in the kitchen, plant flowers in the garden…" }
          ] },
        { type: "write", title: "b. Write three sentences about your dream home.", page: 28, source: "book",
          instructions: "Choose one of the houses or imagine your own dream home. Think about the rooms it has and what you can do in each one. Write three sentences.",
          wordBank: ["new", "big", "small", "modern", "fun", "clean", "quiet", "peaceful", "comfortable"],
          wordBankLabel: "Adjectives to describe",
          frame: [{ label: "what your dream home is like", hint: "My dream home is …" }, { label: "the rooms it has got", hint: "It has got …" }, { label: "what you can do there", hint: "I can … there." }],
          model: "My dream home is modern. It has got a game room where I can play with my friends. There is also a garden. I can plant beautiful flowers there.", modelFromBook: true,
          modelLabel: "c. Share your ideas with your class. You can say:",
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used has got / there is / there are.", "I wrote three sentences about my dream home."],
          minWords: 15 },
        { type: "activity", title: "Extra Practice: Topic sentence or detail?", source: "extra", stage: "guided",
          instructions: "A topic sentence gives the main idea. Choose the best topic sentence.",
          items: [
            { t: "mcq", q: "Which is the best topic sentence for Paragraph (1): My dream home?", options: ["It has got a blue door.", "My dream home is very nice and comfortable, with lovely rooms and many fun activities to do there.", "I can plant flowers."], answer: 1, why: "A topic sentence gives the main idea of the whole paragraph. The other two are details. (This sentence is from the book, page 29.)" },
            { t: "mcq", q: "Which sentence is a good concluding sentence?", options: ["There is a kitchen.", "It has got three bedrooms.", "I feel very happy in my dream home."], answer: 2, why: "The book says: “End with how you feel or your final idea.”" }
          ] },
        { type: "write", title: "Plan and write a report of two paragraphs", page: 29, source: "book",
          instructions: "Plan and write a report of two paragraphs describing your dream home and the activities you can enjoy there. a. Fill in the following plan. b. Use the ideas in the plan to write the report in your notebook.",
          example: "My dream home is very nice and comfortable, with lovely rooms and many fun activities to do there.",
          wordBank: ["because", "also", "first", "finally", "for example", "next"],
          wordBankLabel: "Linkers Bank",
          frame: [
            { label: "Paragraph (1): My dream home — Topic sentence", hint: "Write your main idea clearly." },
            { label: "Paragraph (1) — Supporting details", hint: "Add 2–3 specific details or examples.", lines: 3 },
            { label: "Paragraph (1) — Concluding sentence", hint: "End with how you feel or your final idea." },
            { label: "Paragraph (2): The activities I can enjoy there — Topic sentence", hint: "Write your main idea clearly." },
            { label: "Paragraph (2) — Supporting details", hint: "Add 2–3 specific details or examples.", lines: 3 },
            { label: "Paragraph (2) — Concluding sentence", hint: "End with how you feel or your final idea." }
          ],
          model: "My dream home is very nice and comfortable, with lovely rooms and many fun activities to do there. First, it has got a big living room with a soft sofa. It has also got three bedrooms and a modern kitchen. For example, my bedroom has got a big window and a desk. I feel very happy in my dream home.\n\nThere are many activities I can enjoy in my dream home. First, I can watch TV with my family in the living room. Next, I can cook with my parents in the kitchen. Finally, I can play outside in the garden because it is big and green. My dream home is a fun place for everyone.",
          modelFromBook: false,
          bookChecklist: ["I started with an interesting opening sentence.", "I used new words that I learned from the unit.", "I used punctuation and capital letters correctly.", "I used AI tools to help me proofread my writing.", "I used suitable linkers.", "I ended my paragraphs clearly.", "I checked my spelling."],
          bookNote: "Let AI help you grow, not do the work for you.",
          checklist: ["Capital letters at the start of sentences.", "Full stops at the end of sentences.", "Words in the right order.", "Two paragraphs: my dream home + the activities."],
          minWords: 60 }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["My dream home is modern.", "It has got a game room.", "There is also a garden.", "I can plant beautiful flowers there.", "I can cook with my parents in the kitchen."] },
      teacher: {
        notes: ["Think, Pair, Share with the three houses (has got / there is / there are).", "Room–activity matching, then three sentences with adjectives.", "Show the topic sentence from page 29; explain topic sentence → details → conclusion.", "Students fill in the plan, then write the report in their notebooks."],
        pair: ["Peer check with the paragraph writing checklist.", "Describe a house picture; partner guesses which house (1, 2 or 3)."],
        group: ["Groups design a dream home floor plan and each member writes about one room."],
        quick: [{ q: "What is a topic sentence?", a: "The sentence that gives the main idea of the paragraph." }, { q: "Give two linkers from the bank.", a: "because, also, first, finally, for example, next" }, { q: "Complete: In the kitchen, I can …", a: "cook with my parents." }]
      }
    }
  ]
});

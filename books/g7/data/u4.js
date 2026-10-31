// Unit 4 — Celebrations Around the World (English Pearls of Kuwait, Grade 7, Book 7A), printed pages 59–71
BOOK.addUnit({
  id: "u4", num: 4, title: "Celebrations Around the World",
  pages: [59, 71],
  cover: 59,
  outcomes: {
    listening: [
      "Identify main points and detailed information from spoken texts related to cultural celebrations and social behaviours.",
      "Recall specific details about traditions, preparations, and common practices from listening activities.",
      "Explain the reasons behind common behavioural expectations and social ethics during celebrations.",
      "Interpret implications of negative behaviours during events, clearly understanding their impact on communities."
    ],
    speaking: [
      "Express simple ideas about traditions, customs, and personal experiences related to celebrations.",
      "Describe common positive and negative behaviours during cultural and social events effectively.",
      "Discuss logical suggestions clearly on how to improve behaviours and interactions during celebrations.",
      "Present structured explanations and advice, using suitable vocabulary and connectors in conversations about respecting social norms."
    ],
    reading: [
      "Recognise main ideas and specific information clearly from descriptive and expositry texts about various cultural celebrations.",
      "Identify explicit details about social traditions, cultural values, and activities associated with celebrations.",
      "Analyse the purpose and significance of different global and local celebrations as described in texts.",
      "Evaluate the cultural importance of respectful behaviours and positive attitudes presented in various readings."
    ],
    writing: [
      "Write simple sentences clearly using correct grammatical structures (quantifiers and passive voice) to describe common practices during celebrations.",
      "Compose coherent paragraphs describing preparations, activities, and customs related to familiar celebrations.",
      "Develop logically structured reports clearly explaining the processes, preparations, and enjoyable aspects of celebrations.",
      "Review and edit written texts carefully for coherence, grammar accuracy, punctuation, and effective use of linking words."
    ]
  },
  lessons: [

  // ───────────────────────── LESSON 1 — READING (pp. 62–63)
  {
    id: "u4l1", num: 1, skill: "Reading",
    title: "Celebrations Around the World",
    pages: [62, 63],
    status: "complete",
    canDo: ["I can analyse explicit and implicit details effectively from descriptive reading texts about different cultural celebrations around the world and their values."],
    goals: ["Read about four festivals around the world.", "Learn 13 new words.", "Complete a table and answer questions.", "Write about my own celebration."],
    goalsAr: ["أقرأ عن أربعة مهرجانات حول العالم.", "أتعلّم ١٣ كلمة جديدة.", "أُكمل جدولًا وأجيب عن الأسئلة.", "أكتب عن احتفال حضرته."],
    warmup: {
      title: "Before You Read",
      image: "crops/u4l1-warmup.jpg",
      emoji: "🎉",
      prompts: ["What is your favorite food and why?", "Have you ever celebrated a special food day?", "How can sharing food bring people closer together?"],
      seconds: 90
    },
    vocab: [
      { w: "celebration", pos: "noun", emoji: "🎉", def: "a happy event for a special day", ex: "People worldwide enjoy different festivals and celebrations that bring families and communities together.", exFromBook: true, ar: "احتفال", ipa: "/ˌsel.əˈbreɪ.ʃən/" },
      { w: "togetherness", pos: "noun", emoji: "🤝", def: "the feeling of being friendly and close with other people", ex: "Eid gives our family a feeling of togetherness.", exFromBook: false, ar: "الترابط والتآلف", ipa: "/təˈɡeð.ə.nəs/" },
      { w: "warmly", pos: "adverb", emoji: "🤗", def: "in a very friendly way", ex: "Every spring, families gather warmly under cherry trees.", exFromBook: true, ar: "بحرارة وودّ", ipa: "/ˈwɔːm.li/" },
      { w: "preparation", pos: "noun", emoji: "📝", def: "getting ready for something", ex: "They make careful preparations, such as picnics with rice balls and sweets.", exFromBook: true, ar: "تحضير / استعداد", ipa: "/ˌprep.ərˈeɪ.ʃən/" },
      { w: "exchange", pos: "verb", emoji: "🔄", def: "to give something to someone and get something from them", ex: "People exchange smiles and experiences, enjoying each other’s company.", exFromBook: true, ar: "يتبادل", ipa: "/ɪksˈtʃeɪndʒ/" },
      { w: "appreciate", pos: "verb", emoji: "🙏", def: "to see how good someone or something is and value it", ex: "This tradition reminds people to appreciate their loved ones.", exFromBook: true, ar: "يُقدِّر", ipa: "/əˈpriːʃieɪt/" },
      { w: "harmony", pos: "noun", emoji: "🌸", def: "when people or things are peaceful and fit well together", ex: "This joyful event highlights harmony with nature and simple pleasures.", exFromBook: true, ar: "انسجام", ipa: "/ˈhɑː.mə.ni/" },
      { w: "joyful", pos: "adjective", emoji: "😄", def: "very happy", ex: "Eid is a joyful time for families.", exFromBook: false, ar: "مُبهِج / سعيد جدًّا", ipa: "/ˈdʒɔɪ.fəl/" },
      { w: "waste", pos: "verb", emoji: "🗑️", def: "to use too much of something or use it badly", ex: "Please don’t waste food at parties.", exFromBook: false, ar: "يُهدِر", ipa: "/weɪst/" },
      { w: "strengthen", pos: "verb", emoji: "💪", def: "to make something stronger", ex: "Flying kites helps strengthen family bonds and friendships.", exFromBook: true, ar: "يُقوّي", ipa: "/ˈstreŋ.θən/" },
      { w: "eagerly", pos: "adverb", emoji: "🤩", def: "in a way that shows you want something very much", ex: "The children eagerly waited for the fireworks.", exFromBook: false, ar: "بلهفة وحماس", ipa: "/ˈiː.ɡə.li/" },
      { w: "festive", pos: "adjective", emoji: "🎊", def: "happy and suitable for a festival", ex: "The streets look festive on National Day.", exFromBook: false, ar: "احتفاليّ", ipa: "/ˈfes.tɪv/" },
      { w: "respectfully", pos: "adverb", emoji: "🙇", def: "in a polite way that shows respect", ex: "They teach us to live respectfully, enjoy life, and stay connected.", exFromBook: true, ar: "باحترام", ipa: "/rɪˈspekt.fəl.i/" }
    ],
    sections: [
      { type: "reading", title: "Celebrations Around the World", page: 62,
        paras: [
          "People worldwide enjoy different festivals and celebrations that bring families and communities together, creating feelings of happiness and togetherness. These events show traditions, values, and the importance of respecting different cultures.",
          "In Japan, people celebrate Hanami, which means “Flower Viewing.” Every spring, families gather warmly under cherry trees. They make careful preparations, such as picnics with rice balls and sweets. They exchange stories, take memorable photos, and appreciate the beauty of nature. This joyful event highlights harmony with nature and simple pleasures.",
          "India’s Kite Festival marks the change of season with excitement. Families decorate colourful kites and prepare sweet snacks. They are careful not to waste food by planning the right amounts of what they need to eat. Flying kites helps strengthen family bonds and friendships. Children eagerly compete to keep their kites flying the longest, creating a friendly [[atmosphere]] of fun.",
          "In Russia, the White Nights Festival celebrates long summer days. Organisers plan concerts and fireworks, creating exciting activities around the city. People exchange smiles and experiences, enjoying each other’s company. Everyone participates actively, making this festive occasion memorable and joyful.",
          "China’s Mid-Autumn Festival is important for family unity. Families start preparations by cleaning homes and baking mooncakes, pastries with a sweet filling. They respectfully light lanterns, gather under the full moon, and share stories. This tradition reminds people to appreciate their loved ones.",
          "Celebrations around the world help us learn about different cultures and respect them. They teach us to live respectfully, enjoy life, and stay connected. Each celebration brings people together happily and makes our lives richer."
        ],
        speaker: null },

      { type: "activity", title: "a. Complete the following table with information from the passage.", page: 63, source: "book",
        instructions: "Read the passage again. Write the missing information in the table.",
        instructionsAr: "اقرأ النص مرة أخرى واكتب المعلومات الناقصة في الجدول.",
        items: [
          { t: "table", q: "Complete the table.", head: ["Country", "Celebration", "What people prepare/do"],
            rows: [
              ["Japan", { answer: ["Hanami", "Hanami (Flower Viewing)", "Flower Viewing"], model: "Hanami (“Flower Viewing”)" },
                { open: true, model: "Families gather under cherry trees, make picnics with rice balls and sweets, exchange stories, take photos and appreciate the beauty of nature." }],
              ["India", "Kite Festival",
                { open: true, model: "Families decorate colourful kites, prepare sweet snacks, plan the right amounts of food and fly kites." }],
              ["China", { answer: ["Mid-Autumn Festival", "the Mid-Autumn Festival", "Mid Autumn Festival"], model: "Mid-Autumn Festival" },
                "People clean homes, bake mooncakes pastries, gather under the full moon, and share stories."]
            ],
            hint: "Look at paragraph 2 for Japan, paragraph 3 for India and paragraph 5 for China." }
        ] },

      { type: "activity", title: "b. Which celebration or festival would you like to attend? Why?", page: 63, source: "book",
        instructions: "Give your own answer and a reason.",
        instructionsAr: "اكتب رأيك مع ذكر السبب.",
        items: [
          { t: "short", q: "Which celebration or festival would you like to attend? Why?", open: true,
            model: "I would like to attend the Kite Festival in India because I love flying kites with my friends.",
            hint: "Start with: I would like to attend … because …" }
        ] },

      { type: "activity", title: "a. Choose the correct answer from a, b, c or d.", page: 63, source: "book",
        instructions: "Choose the correct answer.",
        instructionsAr: "اختر الإجابة الصحيحة.",
        items: [
          { t: "mcq", q: "What does the underlined word “atmosphere” in the 3rd paragraph mean?",
            options: ["The air around us", "The happy feeling", "The festival rules", "A type of food"], answer: 1,
            hint: "Read the words after it: “a friendly atmosphere of fun”.",
            why: "In the text, “a friendly atmosphere of fun” means the happy feeling at the festival, not the air." }
        ] },

      { type: "activity", title: "b. Answer the following questions.", page: 63, source: "book",
        instructions: "Answer the questions. Use the passage to help you.",
        instructionsAr: "أجب عن الأسئلة مستعينًا بالنص.",
        items: [
          { t: "short", q: "1. Why do you think families in Japan gather under cherry trees each spring?",
            model: "To celebrate Hanami (“Flower Viewing”) and appreciate the beauty of nature and the cherry flowers. It is a joyful time in harmony with nature.",
            keywords: [["beaut", "flower", "nature", "cherry", "hanami"]],
            hint: "Look at paragraph 2. What does “Hanami” mean?" },
          { t: "short", q: "2. How does flying kites during India’s Kite Festival help build friendships?",
            model: "Flying kites helps strengthen family bonds and friendships. Children compete together in a friendly atmosphere of fun.",
            keywords: [["bond", "together", "friend", "fun", "compete", "strengthen"]],
            hint: "Look at paragraph 3: “Flying kites helps strengthen …”" },
          { t: "short", q: "3. Why do families in China clean their homes before the Mid-Autumn Festival?",
            model: "Cleaning homes is part of their preparations. They get their homes ready to gather with their families, because the festival is important for family unity.",
            keywords: [["prepar", "ready", "family", "unity", "together"]],
            hint: "Look at paragraph 5: “Families start preparations by …”" },
          { t: "short", q: "4. Why did the writer write this passage?",
            model: "To show how people around the world celebrate different festivals, and to teach us to learn about different cultures and respect them.",
            keywords: [["cultur", "celebrat", "festival", "world", "respect"]],
            hint: "Read the last paragraph." }
        ] },

      { type: "activity", title: "Read the words below, find and write their synonyms from the reading passage. Then, use each synonym in your own sentence.", page: 63, source: "book",
        instructions: "Find a word in the passage with the same meaning. Then write your own sentence.",
        instructionsAr: "ابحث في النص عن مرادف لكل كلمة، ثم استخدمه في جملة من تأليفك.",
        items: [
          { t: "table", q: "Complete the table.", head: ["Word", "Synonym from the passage", "Sentence"],
            rows: [
              ["party", { answer: ["celebration", "celebrations", "festival", "festivals", "occasion", "event", "events"], model: "celebration" },
                { open: true, model: "We had a big celebration for my brother’s graduation." }],
              ["happy", { answer: ["joyful", "festive"], model: "joyful" },
                { open: true, model: "Eid is a joyful time for my family." }],
              ["planning", { answer: ["preparation", "preparations"], model: "preparation(s)" },
                { open: true, model: "We make preparations for Ramadan in Sha’ban." }]
            ],
            hint: "Look for the bold words in the passage." }
        ] },

      { type: "write", title: "My Celebration Story", page: 63, source: "book",
        instructions: "Choose a celebration or a festival you have attended. Write 3 sentences answering the following questions. Then, share with the class. (Celebrations you can discuss: Eid, National Day, Graduation, World Chocolate Day)",
        wordBank: ["Eid", "National Day", "Graduation", "World Chocolate Day", "joyful", "celebration", "preparations"],
        frame: [
          { label: "What was the celebration? When did it happen?", hint: "The celebration was … It happened in/on …" },
          { label: "What did people do, eat or wear?", hint: "People … / We ate … / We wore …" },
          { label: "What did you enjoy most?", hint: "I enjoyed … most." }
        ],
        model: "I attended Eid Al-Fitr at my grandfather’s house after Ramadan. People wore new clothes, ate sweets and gave money gifts to the children. I enjoyed meeting all my cousins most.",
        modelFromBook: false,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I wrote 3 sentences.", "I answered the three questions."],
        minWords: 25 },

      // ── extras for weak students
      { type: "activity", title: "Extra Practice: Countries and Festivals", source: "extra", stage: "guided",
        instructions: "Match each country to its festival.",
        instructionsAr: "صِل كل دولة بمهرجانها.",
        items: [
          { t: "match", q: "Match the country to the festival.",
            pairs: [["Japan", "Hanami"], ["India", "Kite Festival"], ["Russia", "White Nights Festival"], ["China", "Mid-Autumn Festival"]],
            hint: "Each paragraph starts with the country.", why: "Paragraphs 2–5 each describe one country’s festival." }
        ] },
      { type: "activity", title: "Extra Practice: New Words", source: "extra", stage: "guided",
        instructions: "Tap a word to fill the gap.",
        instructionsAr: "اضغط على الكلمة المناسبة لملء الفراغ.",
        items: [
          { t: "fill", q: "Every spring, families gather ____ under cherry trees.", answer: ["warmly"], bank: ["warmly", "waste", "strengthen", "eagerly", "respectfully"], why: "The passage says families gather warmly (in a friendly way)." },
          { t: "fill", q: "They are careful not to ____ food.", answer: ["waste"], bank: ["warmly", "waste", "strengthen", "eagerly", "respectfully"], why: "We should not waste (use badly) food." },
          { t: "fill", q: "Flying kites helps ____ family bonds and friendships.", answer: ["strengthen"], bank: ["warmly", "waste", "strengthen", "eagerly", "respectfully"], why: "strengthen = make stronger." },
          { t: "fill", q: "Children ____ compete to keep their kites flying the longest.", answer: ["eagerly"], bank: ["warmly", "waste", "strengthen", "eagerly", "respectfully"], why: "eagerly = with great interest; it describes how they compete." },
          { t: "fill", q: "They ____ light lanterns and gather under the full moon.", answer: ["respectfully"], bank: ["warmly", "waste", "strengthen", "eagerly", "respectfully"], why: "In China, families light lanterns respectfully." }
        ] },
      { type: "activity", title: "Extra Practice: Quick Facts", source: "extra", stage: "independent",
        instructions: "Choose the correct answer.",
        instructionsAr: "اختر الإجابة الصحيحة.",
        items: [
          { t: "mcq", q: "When do families in Japan celebrate Hanami?", options: ["In winter", "In spring", "In summer"], answer: 1, hint: "Paragraph 2", why: "“Every spring, families gather warmly under cherry trees.”" },
          { t: "mcq", q: "What do families in China bake?", options: ["Rice balls", "Mooncakes", "Sweet snacks"], answer: 1, hint: "Paragraph 5", why: "“baking mooncakes, pastries with a sweet filling.”" },
          { t: "mcq", q: "What do organisers plan for the White Nights Festival?", options: ["Kites and picnics", "Concerts and fireworks", "Lanterns and stories"], answer: 1, hint: "Paragraph 4", why: "“Organisers plan concerts and fireworks.”" },
          { t: "mcq", q: "How do Indian families avoid wasting food?", options: ["They plan the right amounts.", "They eat outside.", "They cook less on the weekend."], answer: 0, hint: "Paragraph 3", why: "“by planning the right amounts of what they need to eat.”" }
        ] }
    ],
    game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
    teacher: {
      notes: [
        "Warm-up (2 min): show the picture and ask the three Before You Read questions.",
        "Pre-teach the 13 bold words with the vocab cards; model pronunciation.",
        "Read the passage paragraph by paragraph; after each paragraph ask: Which country? What do people do?",
        "Students complete the table (Task 3a) in pairs, then check answers together.",
        "Finish with Task 6: each student writes 3 sentences and reads them to a partner."
      ],
      pair: ["Partner A names a country; partner B says the festival and one thing people do.", "Pairs find the synonyms for party, happy and planning, then compare sentences."],
      group: ["Groups of four: each student becomes an ‘expert’ on one festival and tells the group about it.", "Group poster: ‘Celebrations in Kuwait’ using five new words."],
      quick: [
        { q: "What does “Hanami” mean?", a: "Flower Viewing" },
        { q: "Give a synonym for “happy” from the text.", a: "joyful (or festive)" },
        { q: "What does “strengthen” mean?", a: "to make something stronger" },
        { q: "Which festival celebrates long summer days?", a: "The White Nights Festival in Russia" }
      ]
    }
  },

  // ───────────────────────── LESSON 2 — GRAMMAR (p. 64)
  {
    id: "u4l2", num: 2, skill: "Grammar",
    title: "Countable and Uncountable Nouns (a, an, some, any)",
    pages: [64, 64],
    status: "complete",
    canDo: ["I can use quantifiers (a, an, some, any) accurately with countable and uncountable nouns in sentences related to food and celebrations."],
    goals: ["Know countable and uncountable nouns.", "Use a and an with one thing.", "Use some and any correctly."],
    goalsAr: ["أميّز الأسماء المعدودة وغير المعدودة.", "أستخدم a و an مع الشيء المفرد.", "أستخدم some و any بشكل صحيح."],
    linkers: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because"],
    warmup: {
      title: "Look at the picture and discuss the following:",
      image: "crops/u4l2-warmup.jpg",
      emoji: "🍽️",
      prompts: ["What foods and items can you see on this celebration table?", "Name things you can count and things you can’t."],
      seconds: 90
    },
    vocab: [],
    sections: [
      { type: "grammar", title: "Countable and Uncountable Nouns (a, an, some, any)", page: 64,
        steps: [
          { title: "Countable and Uncountable Nouns", text: "We use countable and uncountable nouns to show whether something can be counted or not.", textAr: "نستخدم الأسماء المعدودة وغير المعدودة لنُبيّن هل يمكن عدّ الشيء أم لا.",
            examples: ["{o:one apple} – {o:two apples} (countable)", "{o:rice}, {o:water}, {o:sugar} (uncountable)"] },
          { title: "Countable nouns: one thing → a / an", text: "Use a / an with one thing. Use “a” before a consonant sound (like b, c, d, f...). Use “an” before words that start with a vowel sound (a, e, i, o, u).", textAr: "نستخدم a أو an مع الشيء الواحد: a قبل الصوت الساكن، و an قبل الصوت المتحرّك.",
            examples: ["{t:a} {o:flag} – {t:a} {o:house} – {t:a} {o:banana}", "{t:an} {o:apple} – {t:an} {o:orange} – {t:an} {o:egg}"] },
          { title: "Countable nouns: more than one → some / any", text: "Use some / any with more than one thing.", textAr: "نستخدم some أو any مع أكثر من شيء واحد.",
            examples: ["{s:We} {v:have} {t:some} {o:dishes}.", "{s:We} {v:do}{n:n’t} {v:have} {t:any} {o:candles}."] },
          { title: "Uncountable nouns → some / any", text: "We cannot count uncountable nouns. Use some / any. Do not use a / an.", textAr: "الأسماء غير المعدودة لا تُعدّ، فنستخدم معها some أو any، ولا نستخدم a أو an.",
            examples: ["{t:some} {o:food}", "{t:any} {o:tea}"] },
          { title: "When do we use any?", text: "Use any in questions and negative sentences. Use some in positive sentences.", textAr: "نستخدم any في الأسئلة والجمل المنفية، و some في الجمل المثبتة.",
            examples: ["{v:Do} {s:you} {v:have} {t:any} {o:milk}?", "{s:We} {v:do}{n:n’t} {v:have} {t:any} {o:sugar}.", "{s:I} {v:drink} {t:some} {o:water}."] }
        ],
        table: { head: ["Nouns", "Purpose", "Example"],
          rows: [
            ["Countable Nouns", "We can count them", "Use a / an with one thing. (a flag - an apple)"],
            ["Countable Nouns", "We can count them", "Use some / any with more than one thing. (some dishes - any candles)"],
            ["Uncountable Nouns", "We cannot count them", "Use some / any. (some food - any tea)"],
            ["", "", "Use any in questions and negative sentences. - Do you have any milk? - We don’t have any sugar."]
          ] },
        worked: { q: "Fill in: There isn’t ____ food left.",
          steps: ["Can we count “food”? No → it is uncountable, so a / an is wrong.", "Is the sentence positive, negative or a question? “isn’t” → negative.", "Negative sentence → use any."],
          a: "There isn’t any food left." },
        notes: [
          "Tip from the book: use “a” before a consonant sound (a house – a banana); use “an” before a vowel sound (an orange – an egg).",
          "Offers and requests: we usually use “some” in questions that offer or ask for something: “Would you like some tea?” “Can I have some water, please?” (“any” is also possible, so both are accepted here.)",
          "a / an never go with uncountable nouns: ✗ a rice ✓ some rice."
        ] },

      { type: "activity", title: "Match the sentence beginnings to their correct endings.", page: 64, source: "book", stage: "guided",
        instructions: "Tap a beginning, then tap the correct ending.",
        instructionsAr: "اضغط على بداية الجملة ثم على نهايتها الصحيحة.",
        items: [
          { t: "match", q: "Match the sentence beginnings to their correct endings.",
            pairs: [["1. I drink some …", "water after running."], ["2. Do you have any …", "pencils in your bag?"], ["3. There aren’t any …", "cookies in the jar."]],
            hint: "A question needs a question mark (?).",
            why: "1: water is uncountable → some water. 2: a question with “Do you…” ends with “?”. 3: “aren’t” is plural → any cookies." }
        ] },

      { type: "activity", title: "Fill in the blanks with (a, an, some, or any).", page: 64, source: "book", stage: "independent",
        instructions: "Write a, an, some or any.",
        instructionsAr: "اكتب a أو an أو some أو any.",
        items: [
          { t: "fill", q: "1. We bought ____ rice for our lunch.", answer: ["some"], bank: ["a", "an", "some", "any"], hint: "Can you count rice? Is the sentence positive?", why: "Rice is uncountable and the sentence is positive → some." },
          { t: "fill", q: "2. Do you have ____ pen?", answer: ["a"], bank: ["a", "an", "some", "any"], hint: "“pen” is one thing. Does it start with a vowel sound?", why: "“pen” is singular countable and starts with a consonant sound /p/ → a." },
          { t: "fill", q: "3. I ate ____ apple before dinner.", answer: ["an"], bank: ["a", "an", "some", "any"], hint: "“apple” starts with a vowel sound.", why: "One apple; “apple” starts with the vowel sound /æ/ → an." },
          { t: "fill", q: "4. There isn’t ____ food left.", answer: ["any"], bank: ["a", "an", "some", "any"], hint: "Look at “isn’t”.", why: "Food is uncountable and the sentence is negative → any." }
        ] },

      { type: "write", title: "What’s in Your Fridge?", page: 64, source: "book",
        instructions: "a. Think about your fridge at home. Write 3 sentences in your notebook using (a / an / some / any).",
        wordBank: ["a", "an", "some", "any", "milk", "eggs", "an orange", "juice", "cheese", "water", "apples", "a watermelon"],
        frame: [
          { label: "Sentence 1 (a / an)", hint: "There is a … / There is an … in my fridge." },
          { label: "Sentence 2 (some)", hint: "I have some … in the fridge." },
          { label: "Sentence 3 (any)", hint: "We don’t have any … ." }
        ],
        model: "There is a big watermelon in my fridge. I have some milk and some eggs. We don’t have any juice today.",
        modelFromBook: false,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I used a or an with one thing.", "I used any in my negative sentence or question."],
        minWords: 15 },

      { type: "speak", title: "b. Ask and answer using ‘any’.", page: 64, source: "book",
        instructions: "Work with a partner. Ask about the things in your fridge. Answer with some or any.",
        dialogue: [
          { who: "A", text: "I have some milk in the fridge. Do you have any fruits?" },
          { who: "B", text: "Yes, I have some. / No, I don’t have any." },
          { who: "A", text: "" },
          { who: "B", text: "" }
        ],
        starters: ["I have some … in the fridge.", "Do you have any …?", "Yes, I have some.", "No, I don’t have any."],
        record: true },

      // ── extras
      { type: "activity", title: "Extra Practice: a, an, some or any?", source: "extra", stage: "guided",
        instructions: "Choose the correct word.",
        instructionsAr: "اختر الكلمة الصحيحة.",
        items: [
          { t: "choose", q: "I want (a / an) orange.", options: ["a", "an"], answer: 1, why: "“orange” starts with a vowel sound → an." },
          { t: "choose", q: "My brother has (a / an) banana.", options: ["a", "an"], answer: 0, why: "“banana” starts with a consonant sound /b/ → a." },
          { t: "choose", q: "We need (a / some) sugar for the cake.", options: ["a", "some"], answer: 1, why: "Sugar is uncountable → some, not a." },
          { t: "choose", q: "Are there (a / any) candles on the table?", options: ["a", "any"], answer: 1, why: "“candles” is plural and it is a question → any." },
          { t: "choose", q: "There is (a / an) egg in the fridge.", options: ["a", "an"], answer: 1, why: "“egg” starts with a vowel sound → an." },
          { t: "choose", q: "Would you like (a / some / any) tea?", options: ["a", "some", "any"], answer: [1, 2], why: "Tea is uncountable, so not “a”. In offers we usually say “some”, but “any” is also correct." }
        ] },
      { type: "activity", title: "Extra Practice: Correct the mistake", source: "extra", stage: "guided",
        instructions: "The underlined word is wrong. Write the correct word.",
        instructionsAr: "الكلمة المسطّرة خاطئة، اكتب الكلمة الصحيحة.",
        items: [
          { t: "fix", q: "I ate {a} apple.", answer: ["an"], hint: "apple → vowel sound", why: "Before a vowel sound we use an." },
          { t: "fix", q: "We don’t have {some} rice.", answer: ["any"], hint: "Look at “don’t”.", why: "Negative sentence → any." },
          { t: "fix", q: "Do you have {an} pen?", answer: ["a"], hint: "pen → consonant sound", why: "“pen” is one thing and starts with a consonant sound → a." },
          { t: "fix", q: "Can I have {a} water, please?", answer: ["some", "any"], hint: "Can we count water?", why: "Water is uncountable, so we cannot use a. In requests we usually use some (any is also possible)." }
        ] },
      { type: "activity", title: "Extra Practice: Celebration table", source: "extra", stage: "independent",
        instructions: "Write a, an, some or any.",
        instructionsAr: "اكتب a أو an أو some أو any.",
        items: [
          { t: "fill", q: "We don’t have ____ milk.", answer: ["any"], why: "Negative + uncountable → any." },
          { t: "fill", q: "My brother ate ____ dates after Iftar.", answer: ["some"], why: "Positive sentence + plural countable → some." },
          { t: "fill", q: "Is there ____ juice left?", answer: ["any", "some"], why: "Question + uncountable → any (some is also possible when we expect “yes”)." },
          { t: "fill", q: "I need ____ umbrella.", answer: ["an"], why: "“umbrella” starts with a vowel sound /ʌ/ → an." },
          { t: "fill", q: "There are ____ flags on the wall.", answer: ["some"], why: "Positive sentence + plural → some." },
          { t: "fill", q: "Mum made ____ cake for the party.", answer: ["a"], why: "One cake; consonant sound /k/ → a." }
        ] }
    ],
    game: { kind: "sort", title: "Sort it!", buckets: ["Countable", "Uncountable"],
      cards: [["apple", 0], ["dates", 0], ["candle", 0], ["flag", 0], ["balloon", 0], ["cookie", 0], ["egg", 0], ["dish", 0],
              ["rice", 1], ["water", 1], ["milk", 1], ["sugar", 1], ["tea", 1], ["food", 1], ["juice", 1], ["bread", 1]] },
    teacher: {
      notes: [
        "Warm-up: show the celebration table picture; students name foods. Write them in two columns (can count / can’t count) without labels, then reveal the labels.",
        "Teach the rule box and table step by step; drill a/an with the Tip (consonant vs vowel sound).",
        "Model the worked example aloud (think-aloud: Can I count it? Positive or negative?).",
        "Guided: Task 2 matching together. Independent: Task 3 alone, then peer-check.",
        "Task 4: students write about their fridge, then ask and answer with ‘any’ in pairs."
      ],
      pair: ["Fridge interview: Do you have any …? Yes, I have some. / No, I don’t have any.", "One partner says a noun; the other says a/an/some + noun."],
      group: ["Party shopping list: groups plan an Eid party list using a, an and some (e.g. a cake, some juice).", "Sort race: groups sort word cards into countable and uncountable."],
      quick: [
        { q: "a or an: ___ egg", a: "an" },
        { q: "Is “rice” countable or uncountable?", a: "uncountable" },
        { q: "Complete: We don’t have ___ sugar.", a: "any" },
        { q: "Complete: I drink ___ water after running.", a: "some" }
      ]
    }
  },

  // ───────────────────────── LESSON 3 — LISTENING (p. 65)
  {
    id: "u4l3", num: 3, skill: "Listening",
    title: "Behaviours in Celebrations",
    pages: [65, 65],
    status: "complete",
    canDo: ["I can analyse clearly explicit and implicit details from spoken texts describing appropriate and inappropriate behaviours during various celebrations."],
    goals: ["Listen to four people talk about celebrations.", "Find good and bad behaviours.", "Suggest solutions to bad behaviours."],
    goalsAr: ["أستمع إلى أربعة أشخاص يتحدثون عن الاحتفالات.", "أميّز السلوكيات الجيدة والسيئة.", "أقترح حلولًا للسلوكيات السيئة."],
    linkers: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because"],
    warmup: {
      title: "Before You Listen",
      image: "crops/u4l3-warmup.jpg",
      emoji: "🎈",
      prompts: ["Guess what the lesson will be about from the picture.", "What celebrations do you enjoy most? why?", "Have you ever noticed any negative behaviours during celebrations?"],
      seconds: 90
    },
    vocab: [],
    sections: [
      { type: "listen", title: "Listen to four speakers talking about some celebrations.", page: 65, source: "book",
        needsAudio: true,
        audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/ETY2f7mpHKJChErqHG9i6a0BmUBKE5nxqeV_XbQAnetLRA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=AH42d3",
        instructions: "Listen to four speakers talking about some celebrations. They will discuss preparations, activities, and negative behaviours. Match each person to the correct celebration place.",
        items: [
          { t: "table", q: "Match each person to the correct celebration place. (Restaurant / Gulf Street / Home / 360 Mall)", head: ["Person", "Celebration place"],
            rows: [["a. Dana", { open: true }], ["b. Aisha", { open: true }], ["c. Soud", { open: true }], ["d. Abdullah", { open: true }]],
            open: true }
        ] },

      { type: "listen", title: "Listen again. Then, do the tasks that follow.", page: 65, source: "book",
        needsAudio: true,
        audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/ETY2f7mpHKJChErqHG9i6a0BmUBKE5nxqeV_XbQAnetLRA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=AH42d3",
        instructions: "a. Underline the correct answer.",
        items: [
          { t: "choose", q: "1. What decorations were used at Dana’s birthday?", options: ["balloons and candles", "lights and flowers"], open: true },
          { t: "choose", q: "2. The positive thing Aisha’s family did at the end was:", options: ["leaving the restaurant early", "taking beautiful photos"], open: true },
          { t: "choose", q: "3. What exciting activity did Soud mention at the 360 Mall?", options: ["shows", "cooking"], open: true },
          { t: "choose", q: "4. The thing that made everyone proud and happy on the Liberation Day was:", options: ["spraying foam", "watching fireworks"], open: true }
        ] },

      { type: "listen", title: "b. Answer the following questions.", page: 65, source: "book",
        needsAudio: true,
        audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/ETY2f7mpHKJChErqHG9i6a0BmUBKE5nxqeV_XbQAnetLRA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=AH42d3",
        instructions: "Answer the following questions.",
        items: [
          { t: "short", q: "1. Why do you think food was wasted at Dana’s party?", open: true, hint: "Think: Did they prepare too much food?" },
          { t: "short", q: "2. In what ways can loud noise during celebrations such as Aisha’s affect the people around?", open: true, hint: "Think about other people in the restaurant." },
          { t: "short", q: "3. Was line-skipping fair during Soud’s celebration? And why?", open: true, hint: "Start with: No, it wasn’t fair because …" },
          { t: "short", q: "4. Why should people follow traffic rules on celebrations like Liberation Day?", open: true, hint: "Think about safety and accidents." }
        ] },

      { type: "discuss", title: "Suggest two solutions for each negative behaviour you heard from the speakers about celebrations.", page: 65, source: "book",
        prompts: [
          "Wasting food at Dana’s party: solution 1 … / solution 2 …",
          "Loud noise at Aisha’s celebration: solution 1 … / solution 2 …",
          "Line-skipping at Soud’s celebration: solution 1 … / solution 2 …",
          "Breaking traffic rules on Liberation Day: solution 1 … / solution 2 …",
          "Use linkers: First, … Also, … so that …"
        ],
        image: null, emoji: "💡" },

      { type: "discuss", title: "Home Research (Using AI)", page: 65, source: "book",
        prompts: [
          "Use AI at home to find effective solutions for common negative behaviours during celebrations.",
          "Note: You can ask the AI, “What are safe ways to celebrate without any negative behaviours?”"
        ],
        image: null, emoji: "🤖" },

      // ── extra listening (own script, TTS)
      { type: "listen", title: "Extra Practice: Eid at Grandpa’s House (generated voice, not the book recording)", source: "extra",
        script: [
          { who: "Yousef", text: "Hello! My name is Yousef. Last Eid, my family celebrated at my grandpa’s house." },
          { who: "Yousef", text: "First, we cleaned the house and put up colourful lights. Next, my mother prepared sweets and Arabic coffee for the guests." },
          { who: "Yousef", text: "On Eid morning, we wore new clothes and visited our relatives. The children got Eidiya, money gifts, from the elders." },
          { who: "Yousef", text: "One negative thing happened. Some cousins shouted and played loudly late at night, and our old neighbour couldn’t sleep. My grandpa asked them kindly to stop." },
          { who: "Yousef", text: "In the end, we took a big family photo. It was a happy day!" }
        ],
        items: [
          { t: "mcq", q: "Where did Yousef’s family celebrate Eid?", options: ["At a restaurant", "At his grandpa’s house", "At the mall"], answer: 1, why: "He says: “my family celebrated at my grandpa’s house.”" },
          { t: "mcq", q: "What did his mother prepare?", options: ["Sweets and Arabic coffee", "Cake and juice", "Rice and fish"], answer: 0, why: "“my mother prepared sweets and Arabic coffee for the guests.”" },
          { t: "mcq", q: "What is Eidiya?", options: ["New clothes", "Money gifts", "A family photo"], answer: 1, why: "“Eidiya, money gifts, from the elders.”" },
          { t: "mcq", q: "What was the negative behaviour?", options: ["Wasting food", "Loud noise late at night", "Breaking traffic rules"], answer: 1, why: "Some cousins shouted and played loudly late at night." },
          { t: "mcq", q: "What did the family do at the end?", options: ["They took a family photo.", "They watched fireworks.", "They went to the beach."], answer: 0, why: "“In the end, we took a big family photo.”" },
          { t: "short", q: "Suggest one solution for the loud noise.", open: true, model: "We should play quietly at night so that neighbours can sleep.", hint: "Use: We should … so that …" }
        ] }
    ],
    game: { kind: "sort", title: "Good or Bad Behaviour?", buckets: ["Positive behaviour", "Negative behaviour"],
      cards: [["taking family photos", 0], ["throwing trash in bins", 0], ["waiting in line", 0], ["following traffic rules", 0], ["thanking the waiter", 0],
              ["wasting food", 1], ["making loud noise", 1], ["skipping the line", 1], ["spraying foam at cars", 1], ["littering in the street", 1]] },
    teacher: {
      notes: [
        "The book audio is not in our files: open the QR link on the page (or play it from the book’s QR code) for Tasks 2–4.",
        "Before listening: picture prediction and the two questions (2 min).",
        "First listening: students match each speaker to a place. Second listening: underline answers (4a), then discuss 4b in pairs.",
        "The questions tell us the negative behaviours: wasting food (Dana), loud noise (Aisha), line-skipping (Soud), traffic rules on Liberation Day. Use these for Task 5 solutions.",
        "If the audio is not available, use the Extra Practice listening (generated voice) and its auto-checked questions."
      ],
      pair: ["Pairs suggest two solutions for each negative behaviour (Task 5) using ‘should’ and ‘so that’.", "Pairs retell one speaker’s story in 3 sentences."],
      group: ["Groups make a ‘Celebrate Safely’ list of five rules for Liberation Day.", "Home Research: groups compare the AI answers they found and choose the best three ideas."],
      quick: [
        { q: "Name one negative behaviour during celebrations.", a: "e.g. wasting food, loud noise, line-skipping, breaking traffic rules" },
        { q: "Why is line-skipping not fair?", a: "Because other people waited for their turn." },
        { q: "Give one solution for wasting food.", a: "e.g. Prepare only what we need / share extra food with people in need." }
      ]
    }
  },

  // ───────────────────────── LESSON 4 — SPEAKING (p. 66)
  {
    id: "u4l4", num: 4, skill: "Speaking",
    title: "Celebrating with Respect",
    pages: [66, 66],
    status: "complete",
    canDo: ["I can discuss clearly structured solutions orally, addressing negative behaviours during celebrations, and suggesting respectful alternatives."],
    goals: ["Talk about negative behaviours at celebrations.", "Match problems to solutions.", "Give advice with should and must."],
    goalsAr: ["أتحدث عن السلوكيات السلبية في الاحتفالات.", "أطابق كل مشكلة بحلّها.", "أقدّم النصيحة باستخدام should و must."],
    linkers: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because"],
    warmup: {
      title: "Look at the pictures. Choose a celebration, then, discuss the following.",
      image: "crops/u4l4-warmup.jpg",
      emoji: "🎓",
      prompts: ["What do people usually do in this celebration?", "What negative behaviours might happen? How to avoid them?"],
      seconds: 120
    },
    vocab: [],
    sections: [
      { type: "activity", title: "Discuss the following. Then, match each negative behaviour to its suitable solution.", page: 66, source: "book",
        instructions: "Tap a negative behaviour, then tap its solution.",
        instructionsAr: "اضغط على السلوك السلبي ثم على الحلّ المناسب له.",
        items: [
          { t: "match", q: "Match each negative behaviour to its suitable solution.",
            pairs: [
              ["1. Wasting food at birthdays.", "We shouldn't have more than what we need."],
              ["2. Disrespecting waiters at restaurants.", "We should respect all people."],
              ["3. Littering during Hala February.", "We must throw trash in garbage bins."],
              ["4. Breaking traffic rules on National Day.", "We must follow traffic rules strictly."]
            ],
            hint: "Look for words that go together: food – need, trash – bins, traffic – traffic.",
            why: "Each solution fixes its problem: take only what we need (food), respect people (waiters), use bins (litter), follow rules (traffic)." }
        ] },

      { type: "discuss", title: "Discuss two respectful behaviours people should practise for each celebration (birthday, graduation, Hala February, National Day).", page: 66, source: "book",
        prompts: ["Birthday: People should … / They should also …", "Graduation: People should …", "Hala February: People should …", "National Day: People should …"],
        image: null, emoji: "🤝" },

      { type: "speak", title: "a. Choose one celebration and discuss the following. b. Share your ideas with the other groups.", page: 66, source: "book",
        instructions: "Choose one celebration. Answer the questions with your group. Use the sentence starters. Then share your ideas with the other groups.",
        dialogue: [
          { who: "A", text: "What is the celebration?" },
          { who: "B", text: "" },
          { who: "A", text: "What is the negative behaviour?" },
          { who: "B", text: "" },
          { who: "A", text: "How does it affect others? How does it make them feel?" },
          { who: "B", text: "" },
          { who: "A", text: "What should people do instead? Why?" },
          { who: "B", text: "" }
        ],
        starters: ["The celebration I will talk about is …", "One negative behaviour that sometimes happens is …", "It might make people feel …, …, or ...", "People should …"],
        record: true },

      { type: "speak", title: "Celebration Talk Show", page: 66, source: "book",
        instructions: "In groups, choose one common problem that happens during celebrations. (e.g. wasting (food / water / electricity), littering, noise, traffic). Each student will choose one role: (host, celebration expert, parent, student, police officer).",
        dialogue: [
          { who: "Host", text: "What is the problem? Why is it happening?" },
          { who: "Celebration expert", text: "" },
          { who: "Host", text: "How does it affect people and the environment?" },
          { who: "Parent", text: "" },
          { who: "Host", text: "What solutions does society provide? (e.g. laws, campaigns, school awareness, family advice)" },
          { who: "Police officer", text: "" },
          { who: "Student", text: "" }
        ],
        starters: ["The problem is … because …", "It affects people because …", "It is bad for the environment because …", "First, … Also, … Finally, …", "We should … so that …"],
        record: true },

      // ── extras
      { type: "activity", title: "Extra Practice: Respectful or not?", source: "extra", stage: "guided",
        instructions: "Choose the respectful behaviour.",
        instructionsAr: "اختر السلوك المحترم.",
        items: [
          { t: "mcq", q: "At a birthday party, you should …", options: ["take only the food you need", "throw cake at friends", "leave food on every plate"], answer: 0, why: "Taking only what we need stops food waste." },
          { t: "mcq", q: "At a restaurant, you should …", options: ["shout at the waiter", "say “please” and “thank you” to the waiter", "leave without paying"], answer: 1, why: "We should respect all people, including waiters." },
          { t: "mcq", q: "During Hala February, you should …", options: ["drop bottles on the beach", "throw trash in garbage bins", "spray water at cars"], answer: 1, why: "We must throw trash in garbage bins." },
          { t: "mcq", q: "On National Day, drivers must …", options: ["drive very fast", "follow traffic rules", "stop in the middle of the road"], answer: 1, why: "Following traffic rules keeps everyone safe." },
          { t: "mcq", q: "At a graduation ceremony, you should …", options: ["clap for the graduates", "talk loudly on the phone", "push people to take photos"], answer: 0, why: "Clapping shows respect and happiness for the graduates." }
        ] },
      { type: "speak", title: "Extra Practice: Model talk", source: "extra",
        instructions: "Read the model with a partner. Then make your own talk about another celebration.",
        dialogue: [
          { who: "A", text: "The celebration I will talk about is National Day." },
          { who: "A", text: "One negative behaviour that sometimes happens is spraying foam at cars." },
          { who: "A", text: "It might make people feel angry, sad, or unsafe." },
          { who: "A", text: "People should celebrate with flags and songs because it is safe and respectful." },
          { who: "B", text: "" }
        ],
        starters: ["The celebration I will talk about is …", "One negative behaviour that sometimes happens is …", "It might make people feel …", "People should … because …"],
        record: true }
    ],
    game: { kind: "scramble", title: "Sentence Builder",
      sentences: ["We should respect all people.", "We must throw trash in garbage bins.", "We must follow traffic rules strictly.", "We shouldn't have more than what we need.", "People should celebrate safely."] },
    teacher: {
      notes: [
        "Warm-up: show the three pictures (graduation, National Day, birthday); each pair chooses one and answers the two questions.",
        "Task 2: discuss, then match problems to solutions; check with the whole class.",
        "Task 3: pairs list two respectful behaviours for each celebration; collect ideas on the board.",
        "Task 4: groups use the questions and sentence starters, then share with other groups.",
        "Task 5 Talk Show: give each student a role card; the host reads the questions. Praise linkers (first, also, because, so that)."
      ],
      pair: ["Problem–solution ping-pong: A says a problem, B gives a solution with should/must.", "Pairs record their Task 4 talk with the record panel and listen again."],
      group: ["Celebration Talk Show (Task 5) with roles: host, celebration expert, parent, student, police officer.", "Groups make a poster: ‘Celebrate with Respect’ with four rules."],
      quick: [
        { q: "Give a solution for littering.", a: "We must throw trash in garbage bins." },
        { q: "How should we treat waiters?", a: "We should respect all people." },
        { q: "Finish: It might make people feel …", a: "e.g. sad, angry or uncomfortable" }
      ]
    }
  },

  // ───────────────────────── LESSON 5 — READING (pp. 67–68)
  {
    id: "u4l5", num: 5, skill: "Reading",
    title: "Celebrating Ramadan in Kuwait",
    pages: [67, 68],
    status: "complete",
    canDo: ["I can analyse key explicit and implicit details clearly from descriptive texts about Ramadan traditions, values, and cultural practices in Kuwait."],
    goals: ["Read about Ramadan traditions in Kuwait.", "Learn 12 new words.", "Answer questions about the text.", "Make a poster about values."],
    goalsAr: ["أقرأ عن عادات شهر رمضان في الكويت.", "أتعلّم ١٢ كلمة جديدة.", "أجيب عن أسئلة حول النص.", "أصمّم ملصقًا عن القيم."],
    warmup: {
      title: "Before You Listen",
      image: "crops/u4l5-warmup.jpg",
      emoji: "🌙",
      prompts: ["What do people usually do during Ramadan and Gergee’an?", "How do these traditions keep people together?", "What values or good behaviours do these celebrations teach us?"],
      seconds: 90
    },
    vocab: [
      { w: "include", pos: "verb", emoji: "➕", def: "to make something part of something else", ex: "Ramadan includes fasting and prayers.", exFromBook: false, ar: "يتضمّن", ipa: "/ɪnˈkluːd/" },
      { w: "religious", pos: "adjective", emoji: "🕌", def: "related to religion", ex: "Fasting is a religious practice.", exFromBook: false, ar: "دينيّ", ipa: "/rɪˈlɪdʒ.əs/" },
      { w: "community", pos: "noun", emoji: "🏘️", def: "all the people living in one area", ex: "Gergee’an brings our community together.", exFromBook: false, ar: "مجتمع", ipa: "/kəˈmjuː.nə.ti/" },
      { w: "cheerfully", pos: "adverb", emoji: "😊", def: "in a happy and positive way", ex: "We cheerfully welcome guests at Iftar.", exFromBook: false, ar: "بمرح وسرور", ipa: "/ˈtʃɪə.fəl.i/" },
      { w: "typically", pos: "adverb", emoji: "🔁", def: "usually; in the normal way", ex: "Guests typically accept what is offered as a sign of respect and gratitude.", exFromBook: true, ar: "عادةً", ipa: "/ˈtɪp.ɪ.kəl.i/" },
      { w: "sign", pos: "noun", emoji: "👍", def: "something that shows a feeling or a fact", ex: "A smile is a sign of kindness.", exFromBook: false, ar: "علامة", ipa: "/saɪn/" },
      { w: "gratitude", pos: "noun", emoji: "💌", def: "the feeling of being thankful", ex: "I wrote a card to show my gratitude.", exFromBook: false, ar: "امتنان", ipa: "/ˈɡræt.ɪ.tʃuːd/" },
      { w: "well-mannered", pos: "adjective", emoji: "👌", def: "polite and pleasant", ex: "A well-mannered person always accepts food and drinks politely.", exFromBook: true, ar: "مهذّب", ipa: "/ˌwel ˈmæn.əd/" },
      { w: "generosity", pos: "noun", emoji: "🎁", def: "being happy to give help or things to others", ex: "This tradition teaches the values of generosity, respect, and care for others.", exFromBook: true, ar: "كرم", ipa: "/ˌdʒen.əˈrɒs.ə.ti/" },
      { w: "thrilling", pos: "adjective", emoji: "🎢", def: "very exciting", ex: "One of the most thrilling traditions during Ramadan is Gergee’an.", exFromBook: true, ar: "مثير جدًّا", ipa: "/ˈθrɪl.ɪŋ/" },
      { w: "collect", pos: "verb", emoji: "🧺", def: "to bring or gather things together", ex: "Children collect sweets and nuts from neighbours.", exFromBook: false, ar: "يجمع", ipa: "/kəˈlekt/" },
      { w: "tolerance", pos: "noun", emoji: "🕊️", def: "accepting beliefs and ways that are different from your own", ex: "They teach us kindness, respect, tolerance, and unity.", exFromBook: true, ar: "تسامح", ipa: "/ˈtɒl.ər.əns/" }
    ],
    sections: [
      { type: "reading", title: "Celebrating Ramadan in Kuwait", page: 67,
        paras: [
          "Ramadan is a special month for Muslims. It includes many religious practices, such as fasting and prayers, that bring people closer to their faith and each other. It also includes social and fun gatherings that help everyone feel part of a caring community. At the end of Ramadan, people celebrate Eid Al-Fitr, marking the [[conclusion]] of fasting.",
          "In Ramadan, people cheerfully welcome guests at Iftar: the first meal that is eaten at sunset, or at ghabga: the second meal that is eaten at evening. Guests typically accept what is offered as a sign of respect and gratitude. A well-mannered person always accepts food and drinks politely. People in Kuwait often share their food by sending neqsa, a small part of the meal, to neighbours, loved ones, and those in need. This tradition teaches the values of generosity, respect, and care for others.",
          "Muslims, in Ramadan, perform special prayers called Taraweeh every night after the Isha prayer. They also spend more time reading the holy Qur’an. People visit relatives to strengthen bonds and give Zakat, a charitable donation, to help those in need. These religious practices help people grow stronger in their faith and feel closer to Allah.",
          "One of the most thrilling traditions during Ramadan is Gergee’an. Children wear colourful clothes and walk joyfully from house to house with their friends. [[They]] sing cheerful songs and collect sweets and nuts from neighbours. Gergee’an is more than just fun; it shows the importance of sharing, friendship, and community spirit. Finally, as soon as Ramadan ends, people start celebrating Eid Al-Fitr. They dress nicely, visit relatives and friends, and give away money to their loved ones and those in need.",
          "Celebrations in Kuwait are filled with life and meaning. They are not only about food and fun, but also about values. They teach us kindness, respect, tolerance, and unity."
        ],
        speaker: null },

      { type: "activity", title: "a. Choose the correct answer from a, b, c or d.", page: 68, source: "book",
        instructions: "Choose the correct answer.",
        instructionsAr: "اختر الإجابة الصحيحة.",
        items: [
          { t: "mcq", q: "1. What is a suitable title for the passage?",
            options: ["The History of Kuwait’s Holidays", "Ramadan Traditions and Values in Kuwait", "Popular Foods in Kuwaiti Celebrations", "How to Celebrate Gergee’an"], answer: 1,
            hint: "Which title covers the WHOLE passage?",
            why: "The passage is about many Ramadan traditions (Iftar, neqsa, Taraweeh, Gergee’an, Eid) and the values they teach. Gergee’an is only one part." },
          { t: "mcq", q: "2. The opposite of the underlined word “conclusion” in the 1st paragraph is:",
            options: ["end", "beginning", "middle", "closing"], answer: 1,
            hint: "“conclusion” = end. What is the opposite of end?",
            why: "Eid Al-Fitr marks the conclusion (end) of fasting. The opposite of end is beginning." },
          { t: "mcq", q: "3. Choose the correct part of speech for the underlined word in the sentence: “People in Kuwait cheerfully welcome guests and enjoy eating Iftar.”",
            options: ["verb", "noun", "adverb", "adjective"], answer: 2,
            hint: "It describes HOW people welcome guests. It ends in -ly.",
            why: "“cheerfully” describes the verb “welcome” (how they welcome), so it is an adverb." }
        ] },

      { type: "activity", title: "b. Answer the following questions.", page: 68, source: "book",
        instructions: "Answer the questions. Use the passage to help you.",
        instructionsAr: "أجب عن الأسئلة مستعينًا بالنص.",
        items: [
          { t: "short", q: "1. What does the word neqsa mean?",
            model: "Neqsa is a small part of the meal that people send to neighbours, loved ones, and those in need.",
            keywords: [["part", "some"], ["meal", "food"]],
            hint: "Look at paragraph 2: “sending neqsa, …”" },
          { t: "short", q: "2. Why do you think children enjoy celebrating Gergee’an?",
            model: "Because they wear colourful clothes, walk from house to house with their friends, sing cheerful songs and collect sweets and nuts. It is fun and thrilling.",
            keywords: [["sweet", "nut", "song", "sing", "friend", "colourful", "fun", "thrilling"]],
            hint: "Look at paragraph 4. What do the children do?" },
          { t: "short", q: "3. How do Ramadan gatherings help strengthen relationships among family and friends?",
            model: "People welcome guests at Iftar and ghabga, share food (neqsa) with neighbours, and visit relatives to strengthen bonds. This brings people closer to each other.",
            keywords: [["visit", "share", "together", "guest", "bond", "closer", "welcome"]],
            hint: "Look at paragraphs 1, 2 and 3." }
        ] },

      { type: "activity", title: "Fill in the spaces with the most suitable words from the list.", page: 68, source: "book",
        instructions: "(collect - tolerance - gratitude - well-mannered)",
        instructionsAr: "املأ الفراغات بالكلمات المناسبة من القائمة.",
        items: [
          { t: "fill", q: "1. Commenting kindly on social media shows that the person is ____.", answer: ["well-mannered", "well mannered"], bank: ["collect", "tolerance", "gratitude", "well-mannered"], hint: "We need an adjective after “is”.", why: "A kind, polite person is well-mannered (adjective after “is”)." },
          { t: "fill", q: "2. The student showed his ____ by writing a thanking letter to his teacher.", answer: ["gratitude"], bank: ["collect", "tolerance", "gratitude", "well-mannered"], hint: "A thank-you letter shows a feeling.", why: "gratitude = the feeling of being thankful." },
          { t: "fill", q: "3. Volunteers ____ food and offer it to people in need.", answer: ["collect"], bank: ["collect", "tolerance", "gratitude", "well-mannered"], hint: "We need a verb after “Volunteers”.", why: "collect = bring things together; it is the verb of the sentence." }
        ] },

      { type: "write", title: "How Celebrations Make Us Better", page: 68, source: "book",
        instructions: "a. Make a poster by writing a short paragraph about: • joyful events from the passage. • a value to learn from (e.g., kindness, generosity, respect) • a sentence using one new word you learned today. b. Present your poster to the class.",
        wordBank: ["generosity", "gratitude", "tolerance", "community", "thrilling", "well-mannered", "kindness", "respect", "because", "also"],
        frame: [
          { label: "Joyful events from the passage", hint: "e.g. Iftar, Gergee’an, Eid Al-Fitr" },
          { label: "A value to learn from", hint: "From … we learn …" },
          { label: "A sentence with one new word", hint: "Use a word like generosity, gratitude or tolerance." }
        ],
        model: "Ramadan in Kuwait is full of joyful events. Families welcome guests at Iftar, and children enjoy Gergee’an. From these celebrations, we learn generosity, because people send neqsa to their neighbours and help those in need. Gergee’an is the most thrilling tradition for me.",
        modelFromBook: false,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I wrote about a joyful event and a value.", "I used one new word from the lesson."],
        minWords: 30 },

      // ── extras
      { type: "activity", title: "Extra Practice: Word meanings", source: "extra", stage: "guided",
        instructions: "Match each word to its meaning.",
        instructionsAr: "صِل كل كلمة بمعناها.",
        items: [
          { t: "match", q: "Match the word to its meaning.",
            pairs: [["gratitude", "being thankful"], ["thrilling", "very exciting"], ["collect", "bring things together"], ["generosity", "giving to others"], ["typically", "usually"]],
            hint: "Look at the vocab cards.", why: "These are the glossary meanings in simple words." }
        ] },
      { type: "activity", title: "Extra Practice: Check the facts", source: "extra", stage: "independent",
        instructions: "Choose the correct answer.",
        instructionsAr: "اختر الإجابة الصحيحة.",
        items: [
          { t: "mcq", q: "When is Iftar eaten?", options: ["At sunset", "At noon", "In the morning"], answer: 0, hint: "Paragraph 2", why: "“Iftar: the first meal that is eaten at sunset.”" },
          { t: "mcq", q: "When do Muslims pray Taraweeh?", options: ["Before Fajr", "Every night after the Isha prayer", "On Friday only"], answer: 1, hint: "Paragraph 3", why: "“every night after the Isha prayer.”" },
          { t: "mcq", q: "What is Zakat?", options: ["A special meal", "A charitable donation", "A song for children"], answer: 1, hint: "Paragraph 3", why: "“Zakat, a charitable donation, to help those in need.”" },
          { t: "mcq", q: "What does the underlined word “They” in paragraph 4 refer to?", options: ["Neighbours", "Children", "Relatives"], answer: 1, hint: "Read the sentence before it.", why: "“Children wear colourful clothes … They sing cheerful songs …” – They = children." },
          { t: "mcq", q: "What do people do when Ramadan ends?", options: ["They start celebrating Eid Al-Fitr.", "They start fasting.", "They stop visiting relatives."], answer: 0, hint: "Paragraph 4", why: "“as soon as Ramadan ends, people start celebrating Eid Al-Fitr.”" }
        ] }
    ],
    game: { kind: "spell", title: "Missing Letters", from: "vocab" },
    teacher: {
      notes: [
        "Note: the book prints the warm-up heading as “Before You Listen”, but this is a reading lesson – treat it as a pre-reading discussion.",
        "Warm-up: show the Ramadan lantern and Gergee’an pictures; ask the three questions.",
        "Pre-teach the 12 bold words; link them to students’ own Ramadan experiences.",
        "Read paragraph by paragraph; students underline the Ramadan traditions (Iftar, ghabga, neqsa, Taraweeh, Zakat, Gergee’an, Eid).",
        "Tasks 3–4 individually, then check in pairs. Task 5 poster in groups and present."
      ],
      pair: ["Pairs ask each other: What does your family do in Ramadan?", "Pairs explain one tradition (neqsa, Gergee’an, Zakat) in their own words."],
      group: ["Poster task (Task 5): groups of four make one poster and present it.", "Tradition chain: each student adds one Ramadan tradition and one value it teaches."],
      quick: [
        { q: "What is ghabga?", a: "The second meal that is eaten at evening." },
        { q: "What is the opposite of “conclusion”?", a: "beginning" },
        { q: "What part of speech is “cheerfully”?", a: "adverb" },
        { q: "Name one value Gergee’an teaches.", a: "sharing, friendship or community spirit" }
      ]
    }
  },

  // ───────────────────────── LESSON 6 — GRAMMAR (p. 69)
  {
    id: "u4l6", num: 6, skill: "Grammar",
    title: "Passive Voice (Present Simple - Modals)",
    pages: [69, 69],
    status: "complete",
    canDo: ["I can apply passive voice structures (present simple and modals) accurately and clearly in sentences describing actions and events during celebrations."],
    goals: ["Know when we use the passive voice.", "Make passive sentences: am/is/are + verb 3.", "Make passive sentences with modals: modal + be + verb 3."],
    goalsAr: ["أعرف متى نستخدم المبني للمجهول.", "أكوّن جملًا بالمبني للمجهول: am/is/are + التصريف الثالث.", "أكوّن جملًا بالمبني للمجهول مع الأفعال الناقصة: modal + be + التصريف الثالث."],
    warmup: {
      title: "Discuss the picture.",
      image: "crops/u4l6-warmup.jpg",
      emoji: "🍬",
      prompts: ["Sweets and decorations are prepared in Ramadan. Who prepares them?", "Neqsa is sent in Ramadan. Who sends it?"],
      seconds: 90
    },
    vocab: [],
    sections: [
      { type: "grammar", title: "Passive Voice (Present Simple - Modals)", page: 69,
        steps: [
          { title: "What is the passive voice?", text: "Passive voice is when the action is more important than who does it.", textAr: "نستخدم المبني للمجهول عندما يكون الفعل أهمّ ممّن قام به.",
            examples: ["Active: {s:Ahmed} {v:eats} {o:candy}.", "Passive: {s:Candy} {a:is} {v:eaten} {o:by Ahmed}."] },
          { title: "1. Passive Voice - Present Simple", text: "subject + am/is/are + past participle (verb 3)", textAr: "الفاعل الجديد + am/is/are + التصريف الثالث للفعل",
            examples: ["{s:Houses} {a:are} {v:decorated} {o:by people}.", "{s:I} {a:am} {v:invited} {o:to the party}.", "{s:Neqsa} {a:is} {v:sent} {t:in Ramadan}."] },
          { title: "2. Passive Voice - Modals", text: "subject + modals + be + past participle (verb 3). Modals to use: can - ability, could - possibility, should - advice, must - rule.", textAr: "الفاعل الجديد + فعل ناقص + be + التصريف الثالث. (can قدرة، could احتمال، should نصيحة، must قاعدة)",
            examples: ["{s:Dishes} {a:should be} {v:prepared} {o:by families}.", "{s:Guests} {a:can be} {v:invited} {t:warmly}."] },
          { title: "How to change active → passive", text: "1) The object becomes the new subject. 2) Use am/is/are (or modal + be). 3) Change the verb to verb 3. 4) Add by + doer only if it is important.", textAr: "١) المفعول به يصبح فاعلًا. ٢) نضع am/is/are أو (فعل ناقص + be). ٣) نحوّل الفعل إلى التصريف الثالث. ٤) نضيف by + الفاعل عند الحاجة فقط.",
            examples: ["{s:People} {v:decorate} {o:houses}. → {s:Houses} {a:are} {v:decorated} {o:by people}.", "{s:Families} {a:should} {v:prepare} {o:dishes}. → {s:Dishes} {a:should be} {v:prepared} {o:by families}."] }
        ],
        table: { head: ["Active Voice", "Passive Voice"],
          rows: [
            ["1. Ahmed eats candy.", "1. Candy is eaten by Ahmed."],
            ["2. People decorate houses.", "2. Houses are decorated by people."],
            ["3. Families should prepare dishes.", "3. Dishes should be prepared by families."],
            ["4. My friends invite me to the party.", "4. I am invited to the party."]
          ] },
        worked: { q: "Change to passive: People decorate houses.",
          steps: ["Find the object: houses → it becomes the subject.", "“houses” is plural, present simple → are.", "decorate → verb 3: decorated.", "Add the doer: by people (optional)."],
          a: "Houses are decorated by people." },
        notes: [
          "The “by + doer” part is optional. We leave it out when the doer is not important or is clear: “I am invited to the party.”",
          "After a modal, always use “be” (base form): ✓ should be prepared ✗ should is prepared ✗ should prepared.",
          "Irregular verb 3: eat → eaten, wear → worn, send → sent, give → given, throw → thrown (see Irregular Verbs, pages 79–80)."
        ] },

      { type: "activity", title: "Read and circle the correct passive voice form.", page: 69, source: "book", stage: "guided",
        instructions: "Choose the correct passive form.",
        instructionsAr: "اختر صيغة المبني للمجهول الصحيحة.",
        items: [
          { t: "choose", q: "1. Delicious meals (prepared / are prepared) carefully.", options: ["prepared", "are prepared"], answer: 1, why: "Present simple passive needs are + verb 3: are prepared (meals = plural)." },
          { t: "choose", q: "2. Guests (can be invited / can invite) warmly to gatherings.", options: ["can be invited", "can invite"], answer: 0, why: "Modal passive = can + be + verb 3. Guests do not invite; they are invited." },
          { t: "choose", q: "3. Special clothes (must wear / must be worn) during Gergee’an.", options: ["must wear", "must be worn"], answer: 1, why: "Clothes cannot wear; they are worn. must + be + worn (verb 3 of wear)." },
          { t: "choose", q: "4. Food (is not waste / is not wasted) by anyone.", options: ["is not waste", "is not wasted"], answer: 1, why: "After is (not) we need verb 3: wasted." }
        ] },

      { type: "activity", title: "Change these active sentences into passive voice sentences using modals.", page: 69, source: "book", stage: "independent",
        instructions: "Write the passive sentence. Keep the same modal.",
        instructionsAr: "حوّل الجمل إلى المبني للمجهول مع الإبقاء على الفعل الناقص نفسه.",
        items: [
          { t: "fill", q: "1. Hamad can prepare healthy meals at home. → Healthy meals ____ by Hamad at home.", answer: ["can be prepared"], hint: "can + be + verb 3", why: "Modal passive: can + be + prepared." },
          { t: "fill", q: "2. People should recycle plastic bottles. → ____ by people.", answer: ["Plastic bottles should be recycled"], hint: "Start with the object: Plastic bottles …", why: "The object “plastic bottles” becomes the subject; should + be + recycled." },
          { t: "short", q: "3. Gamers must follow the rules in online games. → Write the passive sentence.",
            model: "The rules must be followed by gamers in online games. (also correct: The rules in online games must be followed (by gamers).)",
            keywords: [["rule"], ["must be followed"]],
            hint: "Start with: The rules must be …",
            why: "The object “the rules” becomes the subject; must + be + followed. “by gamers” is optional." }
        ] },

      { type: "write", title: "Write 3 sentences using the passive voice.", page: 69, source: "book",
        instructions: "• Your sentences should describe what usually happens during celebrations. • Give advice for good behaviour during celebrations.",
        wordBank: ["is", "are", "should be", "must be", "can be", "prepared", "cooked", "welcomed", "decorated", "given", "thrown", "respected"],
        frame: [
          { label: "Sentence 1: what usually happens (am/is/are + verb 3)", hint: "e.g. Houses are decorated …" },
          { label: "Sentence 2: advice (should be + verb 3)", hint: "e.g. Guests should be …" },
          { label: "Sentence 3: a rule (must be + verb 3)", hint: "e.g. Trash must be …" }
        ],
        model: "Special dishes must be cooked.\nGuests should be welcomed respectfully.",
        modelFromBook: true,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I used am/is/are or a modal + be.", "I used verb 3 (past participle)."],
        minWords: 15 },

      // ── extras
      { type: "activity", title: "Extra Practice: Choose the passive", source: "extra", stage: "guided",
        instructions: "Choose the correct passive form.",
        instructionsAr: "اختر صيغة المبني للمجهول الصحيحة.",
        items: [
          { t: "choose", q: "Lanterns (are lit / light) at night.", options: ["are lit", "light"], answer: 0, why: "Lanterns cannot light; they are lit (are + verb 3)." },
          { t: "choose", q: "The house (is cleaned / cleans) before Eid.", options: ["is cleaned", "cleans"], answer: 0, why: "The house does not clean; it is cleaned (is + verb 3)." },
          { t: "choose", q: "Gifts (should be given / should give) to the children.", options: ["should be given", "should give"], answer: 0, why: "Modal passive: should + be + given." },
          { t: "choose", q: "Trash (must be thrown / must throw) in the bin.", options: ["must be thrown", "must throw"], answer: 0, why: "Modal passive: must + be + thrown (verb 3 of throw)." },
          { t: "choose", q: "Money (is given / is give) to people in need.", options: ["is given", "is give"], answer: 0, why: "After is we need verb 3: given." }
        ] },
      { type: "activity", title: "Extra Practice: Correct the mistake", source: "extra", stage: "guided",
        instructions: "The underlined part is wrong. Write the correct word(s).",
        instructionsAr: "الجزء المسطّر خاطئ، اكتب التصحيح.",
        items: [
          { t: "fix", q: "Dishes {is} prepared by families.", answer: ["are"], hint: "Dishes = plural", why: "Plural subject → are." },
          { t: "fix", q: "Guests should be {welcome} warmly.", answer: ["welcomed"], hint: "After be → verb 3", why: "should + be + verb 3 → welcomed." },
          { t: "fix", q: "The flag {raised} on National Day.", answer: ["is raised"], hint: "Present simple passive needs is/are.", why: "The flag does not raise itself → is raised." }
        ] },
      { type: "activity", title: "Extra Practice: Active → Passive", source: "extra", stage: "independent",
        instructions: "Complete the passive sentence.",
        instructionsAr: "أكمل الجملة بالمبني للمجهول.",
        items: [
          { t: "fill", q: "People light lanterns. → Lanterns ____.", answer: ["are lit", "are lit by people"], why: "are + lit (verb 3 of light). “by people” is optional." },
          { t: "fill", q: "Children collect sweets. → Sweets ____ by children.", answer: ["are collected"], why: "Plural subject “sweets” → are + collected." },
          { t: "fill", q: "We should respect elders. → Elders ____.", answer: ["should be respected", "should be respected by us"], why: "should + be + respected. “by us” is usually left out." },
          { t: "fill", q: "You must follow traffic rules. → Traffic rules ____.", answer: ["must be followed", "must be followed by you"], why: "must + be + followed. “by you” is usually left out." },
          { t: "fill", q: "Families can share food. → Food ____ by families.", answer: ["can be shared"], why: "can + be + shared." }
        ] }
    ],
    game: { kind: "scramble", title: "Sentence Builder",
      sentences: ["Sweets are prepared in Ramadan.", "Neqsa is sent to neighbours.", "Guests should be welcomed respectfully.", "Food must not be wasted.", "Houses are decorated with lights."] },
    teacher: {
      notes: [
        "Warm-up: discuss the picture questions. Elicit that the doer (people/families) is not important – the action is.",
        "Teach the rule box: two formulas (am/is/are + V3; modal + be + V3). Colour-code subject, helper and verb 3 on the board.",
        "Go through the book’s Active/Passive table; ask: What happened to the object? Where did “by” come from?",
        "Worked example aloud, then Task 2 (guided) together and Task 3 (independent) alone.",
        "Accept answers with or without the by-phrase when the doer is not important."
      ],
      pair: ["Active–passive ping-pong: A says an active sentence about Ramadan; B changes it to passive.", "Pairs write two pieces of advice for Eid with ‘should be’."],
      group: ["‘Celebration Rules’ poster: five rules with must be / should be (e.g. Trash must be thrown in the bin).", "Verb 3 race: groups write verb 3 for: eat, wear, send, give, prepare, invite."],
      quick: [
        { q: "Passive of: People decorate houses.", a: "Houses are decorated (by people)." },
        { q: "Formula of passive with modals?", a: "subject + modal + be + verb 3" },
        { q: "Verb 3 of “wear”?", a: "worn" },
        { q: "Correct: Food is not waste.", a: "Food is not wasted." }
      ]
    }
  },

  // ───────────────────────── LESSON 7 — WRITING (pp. 70–71)
  {
    id: "u4l7", num: 7, skill: "Writing",
    title: "My Own Celebration!",
    pages: [70, 71],
    status: "complete",
    canDo: ["I can compose clearly structured descriptive reports explaining detailed preparations, activities, and processes related to personal celebrations."],
    goals: ["Know topic, supporting and concluding sentences.", "Use linkers like first, then and so that.", "Plan and write a two-paragraph report about a celebration."],
    goalsAr: ["أميّز الجملة الرئيسة والجمل الداعمة والجملة الختامية.", "أستخدم أدوات الربط مثل first و then و so that.", "أخطّط لتقرير من فقرتين عن احتفال وأكتبه."],
    linkers: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because"],
    warmup: {
      title: "Look at the pictures then do the following tasks.",
      image: "crops/u4l7-warmup.jpg",
      emoji: "🎂",
      prompts: ["What celebration do you see in each picture (1–4)?", "Which celebration is most important to your family? Why?"],
      seconds: 90
    },
    vocab: [],
    sections: [
      { type: "activity", title: "a. Match each preparation to the suitable celebration.", page: 70, source: "book",
        instructions: "Look at pictures 1–4. Match each preparation to its celebration.",
        instructionsAr: "انظر إلى الصور من ١ إلى ٤، وصِل كل تحضير بالاحتفال المناسب.",
        items: [
          { t: "match", q: "Match each preparation to the suitable celebration (picture).",
            pairs: [
              ["People dress nicely and prepare coffee and sweets for guests.", "4 – Eid (family gathering)"],
              ["They prepare flags and join car parades to celebrate.", "3 – National Day"],
              ["Students gather to take photos and receive certificates.", "1 – Graduation"],
              ["People prepare balloons and candles to decorate for the celebration.", "2 – Birthday"]
            ],
            hint: "Look for key words: coffee and sweets, flags, certificates, candles.",
            why: "Picture 4 shows a family with coffee and sweets; picture 3 shows Kuwaiti flags; picture 1 shows a graduate with a certificate; picture 2 shows a birthday cake with a candle." }
        ] },

      { type: "activity", title: "b. Which celebration is most important to your family? Why?", page: 70, source: "book",
        instructions: "Give your own answer and a reason.",
        instructionsAr: "اكتب رأيك مع ذكر السبب.",
        items: [
          { t: "short", q: "Which celebration is most important to your family? Why?", open: true,
            model: "Eid Al-Fitr is the most important celebration to my family because we all meet at my grandfather’s house.",
            hint: "… is the most important celebration to my family because …" }
        ] },

      { type: "activity", title: "Read the following paragraph sentences. Write (T) for the topic sentence, (S) for the supporting details, and (C) for the concluding sentence.", page: 70, source: "book", stage: "guided",
        instructions: "Choose T, S or C for each sentence.",
        instructionsAr: "اختر T للجملة الرئيسة، و S للجمل الداعمة، و C للجملة الختامية.",
        items: [
          { t: "choose", q: "People wear new clothes and exchange money gifts.", options: ["T", "S", "C"], answer: 1, why: "It gives a detail about what people do on Eid → supporting detail." },
          { t: "choose", q: "These activities make Eid Al-Fitr joyful for everyone.", options: ["T", "S", "C"], answer: 2, why: "“These activities” sums up the details and ends the paragraph → concluding sentence." },
          { t: "choose", q: "Eid Al-Fitr is a special time for Kuwaiti families to celebrate together.", options: ["T", "S", "C"], answer: 0, why: "It gives the main idea of the whole paragraph → topic sentence." },
          { t: "choose", q: "Families cook special dishes and decorate their houses.", options: ["T", "S", "C"], answer: 1, why: "It gives another detail → supporting detail." }
        ] },

      { type: "activity", title: "Fill in the blanks of the following paragraph with suitable linkers from the list", page: 70, source: "book", stage: "guided",
        instructions: "(so that – in order to – first – then – finally) “first” is already used. Celebrating birthdays is very special for my family. First, we prepare balloons and candles _______ have a nice decoration. _______, we prepare a tasty cake and some snacks _______ everyone enjoys the food. _______, we get ready to welcome the guests. Birthdays are always happy celebrations at home.",
        instructionsAr: "املأ الفراغات بأدوات الربط المناسبة من القائمة.",
        items: [
          { t: "fill", q: "First, we prepare balloons and candles ____ have a nice decoration.", answer: ["in order to", "to"], bank: ["so that", "in order to", "then", "finally"], hint: "The next word is a base verb (have).", why: "Before a base verb we use “in order to” (or “to”) for purpose." },
          { t: "fill", q: "____, we prepare a tasty cake and some snacks.", answer: ["Then", "Next"], bank: ["so that", "in order to", "then", "finally"], hint: "This is the second step.", why: "“Then” shows the next step after “First”." },
          { t: "fill", q: "We prepare a tasty cake and some snacks ____ everyone enjoys the food.", answer: ["so that"], bank: ["so that", "in order to", "then", "finally"], hint: "After the gap: subject + verb (everyone enjoys).", why: "“so that” is followed by a subject + verb: so that everyone enjoys." },
          { t: "fill", q: "____, we get ready to welcome the guests.", answer: ["Finally", "Then", "Next"], bank: ["so that", "in order to", "then", "finally"], hint: "This is the last step.", why: "“Finally” shows the last step (the book’s list leaves “finally” for this gap)." }
        ] },

      { type: "write", title: "Look at the picture below. Then, write a sentence for each paragraph part.", page: 70, source: "book",
        image: "crops/u4l7-graduation.jpg",
        instructions: "Look at the graduation picture. Write a topic sentence, a supporting detail and a concluding sentence.",
        wordBank: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because", "graduation", "certificate", "proud", "photos"],
        frame: [
          { label: "1. Topic sentence: Celebrating …", hint: "Celebrating graduation is …" },
          { label: "2. Supporting detail:", hint: "What do people do? (photos, certificate, family)" },
          { label: "3. Concluding sentence: Finally, …", hint: "Finally, …" }
        ],
        model: "Celebrating graduation is a special day for my family. My brother receives his certificate, and we take many photos together. Finally, we go home happily and enjoy a delicious cake.",
        modelFromBook: false,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I began the topic sentence with “Celebrating”.", "I began the concluding sentence with “Finally,”."],
        minWords: 20 },

      { type: "write", title: "Plan and write a report of two paragraphs", page: 71, source: "book",
        instructions: "People prepare their homes, food, and clothes to make a special celebration. Plan and write a report of two paragraphs explaining how you prepare for a celebration and what activities of this celebration you enjoy doing. a. Fill in the following plan. b. Use the ideas in your plan to write the report in your notebook.",
        wordBank: ["first", "next", "also", "in addition", "finally", "in order to", "so that", "to", "because"],
        frame: [
          { label: "Paragraph (1): The preparations for the celebration – Topic sentence", hint: "e.g. Eid Al-Fitr is a special celebration for my family." },
          { label: "Paragraph (1) – Supporting details", hint: "What do you prepare? (home, food, clothes) Use first, next, in addition, so that." },
          { label: "Paragraph (1) – Concluding sentence", hint: "e.g. These preparations make our home ready for Eid." },
          { label: "Paragraph (2): The activities I enjoy doing – Topic sentence", hint: "e.g. There are many activities I enjoy on Eid." },
          { label: "Paragraph (2) – Supporting details", hint: "What do you do? Who do you visit? Use also, because, then." },
          { label: "Paragraph (2) – Concluding sentence", hint: "Finally, … / … is the happiest time for me." }
        ],
        model: "Eid Al-Fitr is a special celebration for my family. First, we clean our house and decorate it with lights. Next, my mother buys new clothes for us so that we look nice on Eid morning. In addition, we prepare Arabic coffee, dates and sweets in order to welcome our guests. These preparations make our home ready for a happy Eid.\n\nThere are many activities I enjoy doing on Eid. In the morning, I go to the Eid prayer with my father. Then, we visit our grandparents and relatives. I also enjoy receiving Eidiya because I can save it or buy a new book. Finally, my whole family has lunch together. Eid is the happiest time of the year for me.",
        modelFromBook: false,
        checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "My words are in the right order.", "I answered the task."],
        bookChecklist: ["I started with an interesting opening sentence.", "I used new words that I learned from the unit.", "I used punctuation and capital letters correctly.", "I used AI tools to help me proofread my writing.", "I used suitable linkers.", "I ended my paragraphs clearly.", "I checked my spelling."],
        minWords: 80 },

      // ── extras
      { type: "activity", title: "Extra Practice: Linkers", source: "extra", stage: "guided",
        instructions: "Choose the correct linker.",
        instructionsAr: "اختر أداة الربط الصحيحة.",
        items: [
          { t: "choose", q: "We buy flags (so that / in order to) celebrate National Day.", options: ["so that", "in order to"], answer: 1, why: "Before a base verb (celebrate) we use in order to (or to)." },
          { t: "choose", q: "We clean the house (so that / to) guests feel welcome.", options: ["so that", "to"], answer: 0, why: "After the gap there is a subject + verb (guests feel) → so that." },
          { t: "choose", q: "I love Eid (because / finally) I see all my cousins.", options: ["because", "finally"], answer: 0, why: "“because” gives a reason." },
          { t: "choose", q: "We decorate the house. (Also / Because), we bake a cake.", options: ["Also", "Because"], answer: 0, why: "“Also” adds another idea." }
        ] },
      { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
        instructions: "Put the words in order.",
        instructionsAr: "رتّب الكلمات لتكوين جملة صحيحة.",
        items: [
          { t: "order", q: "Put the words in order (topic sentence).", words: ["Eid", "is", "a", "special", "time", "for", "my", "family."], answer: ["Eid is a special time for my family."], why: "Subject (Eid) + verb (is) + the rest." },
          { t: "order", q: "Put the words in order (supporting detail).", words: ["First,", "we", "prepare", "balloons", "and", "candles."], answer: ["First, we prepare balloons and candles."], why: "Linker + subject + verb + object." },
          { t: "order", q: "Put the words in order (concluding sentence).", words: ["Finally,", "we", "take", "a", "family", "photo."], answer: ["Finally, we take a family photo."], why: "“Finally,” starts the last sentence." }
        ] }
    ],
    game: { kind: "scramble", title: "Sentence Builder",
      sentences: ["First, we clean our house.", "Next, we prepare sweets for the guests.", "We buy new clothes so that we look nice.", "We prepare flags in order to celebrate.", "Finally, we take a family photo."] },
    teacher: {
      notes: [
        "Warm-up: show pictures 1–4; students name each celebration, then match the preparations (Task 1a).",
        "Task 2: explain topic (T), supporting (S) and concluding (C) sentences with the Eid example; students rebuild the paragraph in the right order (T – S – S – C).",
        "Task 3: revise purpose linkers – in order to/to + base verb; so that + subject + verb.",
        "Task 4: write three sentences about the graduation picture.",
        "Task 5: students fill in the plan first, then write the two paragraphs; finish with the book checklist (they can use an AI tool at home to proofread)."
      ],
      pair: ["Pairs swap their plans and give one tip (missing linker, missing concluding sentence).", "Pairs say the T/S/C sentences aloud in the right order."],
      group: ["Groups write one shared report about National Day: each student writes one sentence with a linker.", "Gallery walk: groups read other reports and tick the checklist."],
      quick: [
        { q: "Which sentence gives the main idea?", a: "The topic sentence" },
        { q: "Complete: We prepare snacks ___ everyone enjoys the food.", a: "so that" },
        { q: "Which linker shows the last step?", a: "Finally" },
        { q: "How many paragraphs are in your report?", a: "Two: preparations and activities" }
      ]
    }
  }

  ]
});

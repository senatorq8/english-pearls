// Unit 6 — Surprising Records (Module 2 "Our Amazing World", printed pages 47–52; module cover p. 33)
BOOK.addUnit({
  id: "u6", num: 6, title: "Surprising Records", titleAr: "أرقام قياسية مدهشة",
  module: 2, moduleTitle: "Our Amazing World",
  pages: [47, 52],
  cover: 33,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Talk about records",
      "Make suggestions",
      "Describe places/things",
      "Make guesses",
      "Make decisions and choices"
    ],
    "language structures": [
      "Use question tags",
      "Use adjectives in the correct order",
      "Use punctuation"
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
      id: "u6l1", num: 1, skill: "Reading",
      title: "Breaking News",
      pages: [47, 48],
      status: "complete",
      canDo: ["Talk about records"],
      goals: ["Read an interview about Kuwait records.", "Learn 7 new words.", "Answer questions about the interview."],
      goalsAr: ["أقرأ مقابلة عن الأرقام القياسية في الكويت.", "أتعلّم 7 كلمات جديدة.", "أجيب عن أسئلة حول المقابلة."],
      warmup: {
        title: "1. Before you read: Think, Pair, Share",
        image: "crops/u6l1-warmup.jpg",
        emoji: "📰",
        prompts: ["Describe some news that you recently heard. Was it interesting? funny? informative?"],
        seconds: 90
      },
      vocab: [
        { w: "fictional", pos: "adjective", emoji: "🎭", def: "not real; made up by a writer", ex: "The characters in this interview are fictional.", exFromBook: true, ar: "خيالي" },
        { w: "thrilled", pos: "adjective", emoji: "🤩", def: "very happy and excited", ex: "We are thrilled you found time in your busy schedule to meet with us.", exFromBook: true, ar: "سعيد جدًا / متحمّس" },
        { w: "schedule", pos: "noun", emoji: "📅", def: "a plan of what you will do and when", ex: "My schedule is very busy this week.", exFromBook: false, ar: "جدول المواعيد" },
        { w: "actually", pos: "adverb", emoji: "☝️", def: "in fact; really (used to correct or add information)", ex: "Well, actually it took more than two years because, as you know, records are broken every year.", exFromBook: true, ar: "في الواقع" },
        { w: "conduct", pos: "verb", emoji: "🎤", def: "to organise and do an activity, like an interview", ex: "Look around, you are conducting this interview in one of Kuwait's oldest records.", exFromBook: true, ar: "يُجري" },
        { w: "spoil", pos: "verb", emoji: "🙊", def: "to ruin something, e.g. by telling the end of a story", ex: "We don't want to spoil it for other people who would love to read it.", exFromBook: true, ar: "يُفسِد / يحرق (الأحداث)" },
        { w: "luxury", pos: "adjective", emoji: "💎", def: "very expensive and comfortable", ex: "Don't forget the exciting luxury shops you'll find there.", exFromBook: true, ar: "فاخر" }
      ],
      sections: [
        { type: "reading", title: "Breaking News", page: 47,
          instructions: "Read the interview. (The characters in this interview are fictional.)",
          paras: [
            "Our news reporter, Dana Ali, went to the National Library of Kuwait to meet one of the experts in Kuwait history, Mr. John Ramzi. Dana contacted him to talk about Kuwait records.",
            "Dana: Hello Mr. Ramzi. We are thrilled you found time in your busy schedule to meet with us to talk about your latest book “Kuwait Records 2018”. You worked on this book for two years, didn't you?",
            "John: Well, actually it took more than two years because, as you know, records are broken every year.",
            "Dana: Can you share with us some of your favourite records that haven't been broken yet?",
            "John: Look around, you are conducting this interview in one of Kuwait's oldest records, ‘the National Library of Kuwait’. It is the oldest public library in Kuwait. You knew about that, didn't you?",
            "Dana: Yes, I did. I read your book and I loved it. We don't want to spoil it for other people who would love to read it, but can you tell us about other favourites of yours?",
            "John: Sure, one of my favourites is the biggest island in Kuwait and the second biggest island in the Arabian Gulf, Bubiyan Island. What's unique about this island is that its sand is saltier than the water in the gulf. Currently, there is no one living on the island except for birds. Did you visit it?",
            "Dana: No, I didn't, but our cameraman did. He said it's interesting. What about Al- Hamra Tower? Is it a Kuwaiti record as well?",
            "John: Yes, it is, and a great skyscraper if I may add. It is the tallest building in Kuwait and the 23rd tallest in the world. It's more than 400 meters high and it took six years to build. It was included in the list of the best inventions of 2011 by TIME magazine which is published in New York. Don't forget the exciting luxury shops you'll find there, the variety of dining options and the eight-screen grand cinema.",
            "Dana: Wow! That's quite impressive. Thank you, Mr. Ramzy for this interview, it makes me feel proud to be a Kuwaiti. We hope to speak again soon about your next book.",
            "John: Thank you Dana the pleasure was mine."
          ],
          speaker: null },

        { type: "activity", title: "2. Read the interview and answer the following questions:", page: 48, source: "book",
          instructions: "Answer the questions.", instructionsAr: "أجب عن الأسئلة.",
          items: [
            { t: "short", q: "• What is the connection between the book and the interview's location?",
              model: "The book is about Kuwait records, and the interview is in the National Library of Kuwait, which is one of Kuwait's oldest records (the oldest public library in Kuwait).",
              keywords: [["library"], ["record", "oldest"]],
              hint: "Where are they? What is the book about?" },
            { t: "short", q: "• Why is Bubiyan Island mentioned in the book?",
              model: "Because it is the biggest island in Kuwait and the second biggest island in the Arabian Gulf. Also, its sand is saltier than the water in the gulf.",
              keywords: [["biggest", "saltier", "salt"]],
              hint: "Read John's answer about Bubiyan." },
            { t: "short", q: "• Which Kuwaiti record does Mr. Ramzi think is the most fascinating and why?",
              model: "Possible answer: Al Hamra Tower, because it is the tallest building in Kuwait and the 23rd tallest in the world; it was in TIME magazine's list of the best inventions of 2011. (Some students may choose Bubiyan Island — accept it with a reason from the text.)",
              keywords: [["hamra", "bubiyan", "library"], ["because", "tallest", "biggest", "oldest", "saltier"]],
              hint: "Which record does he describe with the most excitement?" }
          ] },

        { type: "activity", title: "Extra Practice: Find the facts", source: "extra", stage: "guided",
          instructions: "Choose the correct answer from the interview.", instructionsAr: "اختر الإجابة الصحيحة من المقابلة.",
          items: [
            { t: "mcq", q: "What is the name of Mr. Ramzi's latest book?", options: ["Kuwait History", "Kuwait Records 2018", "Amazing Islands", "TIME"], answer: 1, why: "“…your latest book “Kuwait Records 2018”.”" },
            { t: "mcq", q: "Who lives on Bubiyan Island now?", options: ["many families", "fishermen", "no one except for birds", "the cameraman"], answer: 2, why: "“…there is no one living on the island except for birds.”" },
            { t: "mcq", q: "How high is Al Hamra Tower?", options: ["more than 400 meters", "about 200 meters", "23 meters", "less than 100 meters"], answer: 0, why: "“It's more than 400 meters high.”" },
            { t: "mcq", q: "How long did it take to build Al Hamra Tower?", options: ["two years", "six years", "eight years", "23 years"], answer: 1, why: "“…it took six years to build.”" },
            { t: "mcq", q: "Did Dana visit Bubiyan Island?", options: ["Yes, she did.", "No, she didn't, but the cameraman did."], answer: 1, why: "“No, I didn't, but our cameraman did.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the box.", instructionsAr: "أكمل بكلمة مناسبة.",
          items: [
            { t: "fill", q: "1. I was ____ when I won the competition!", answer: ["thrilled"], bank: ["thrilled", "spoil", "luxury", "fictional"], why: "thrilled = very happy and excited." },
            { t: "fill", q: "2. Don't tell me the end of the film! You will ____ it.", answer: ["spoil"], bank: ["thrilled", "spoil", "luxury", "fictional"], why: "spoil = ruin (by telling the end)." },
            { t: "fill", q: "3. They stayed in a ____ hotel with a big pool.", answer: ["luxury"], bank: ["thrilled", "spoil", "luxury", "fictional"], why: "luxury = very expensive and comfortable." },
            { t: "fill", q: "4. Sindbad is a ____ character; he was not a real person.", answer: ["fictional"], bank: ["thrilled", "spoil", "luxury", "fictional"], why: "fictional = not real." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students share a piece of news they heard recently (interesting? funny? informative?).",
          "Point out the note: the characters in the interview are fictional, but the places are real.",
          "Read the interview in pairs: one student is Dana, one is John.",
          "Answer the 3 questions; for question 3 accept any record with a reason from the text.",
          "Notice the question tags (didn't you?, did you?) — they prepare the next lesson."
        ],
        pair: ["Read the interview aloud as a role play, then swap roles.", "A says a record from the text; B says why it is special."],
        group: ["Groups write 3 more questions Dana could ask Mr. Ramzi."],
        quick: [
          { q: "Where did Dana meet Mr. Ramzi?", a: "At the National Library of Kuwait." },
          { q: "What is unique about Bubiyan Island?", a: "Its sand is saltier than the water in the gulf." },
          { q: "What is the tallest building in Kuwait?", a: "Al Hamra Tower." },
          { q: "What does “thrilled” mean?", a: "Very happy and excited." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u6l2", num: 2, skill: "Grammar",
      title: "Question Tags (Past simple)",
      pages: [48, 48],
      status: "complete",
      canDo: ["Use question tags"],
      goals: ["Add a question tag to a past simple sentence.", "Positive sentence → negative tag.", "Negative sentence → positive tag."],
      goalsAr: ["أضيف سؤالًا ذيليًا إلى جملة في الماضي البسيط.", "جملة مثبتة ← سؤال ذيلي منفي.", "جملة منفية ← سؤال ذيلي مثبت."],
      warmup: {
        title: "Check what you know",
        image: null,
        emoji: "🏷️",
        prompts: ["Dana said: “You worked on this book for two years, didn't you?” Is she sure? Why does she ask?", "How do we say this in Arabic? (… أليس كذلك؟)"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Question Tags (Past simple)", page: 48,
          steps: [
            { title: "Step 1 — The book's examples",
              text: "You worked on this book for two years, didn't you? You knew about that, didn't you? You didn't visit the island, did you?",
              textAr: "أمثلة الكتاب من المقابلة.",
              examples: [
                "{s:You} {v:worked} on this book for two years, {n:didn't} {s:you}?",
                "{s:You} {v:knew} about that, {n:didn't} {s:you}?",
                "{s:You} {n:didn't} {v:visit} the island, {a:did} {s:you}?"
              ] },
            { title: "Step 2 — What is a question tag?", source: "extra",
              text: "A question tag is a short question at the end of a sentence. We use it to check information or to ask someone to agree. It is like “… أليس كذلك؟” in Arabic.",
              textAr: "السؤال الذيلي سؤال قصير في نهاية الجملة، نستخدمه للتأكد من معلومة أو لطلب الموافقة.",
              examples: [
                "{s:It} {v:was} cold yesterday, {n:wasn't} {s:it}?"
              ] },
            { title: "Step 3 — Positive → negative tag", source: "extra",
              text: "Past simple positive sentence (worked, knew, ate) → didn't + pronoun. With was / were → wasn't / weren't + pronoun.",
              textAr: "جملة مثبتة بالماضي البسيط ← didn't + ضمير. مع was / were ← wasn't / weren't + ضمير.",
              examples: [
                "{s:They} {v:spoke} to the teacher, {n:didn't} {s:they}?",
                "{s:They} {v:were} busy, {n:weren't} {s:they}?"
              ] },
            { title: "Step 4 — Negative → positive tag", source: "extra",
              text: "Negative sentence (didn't …, wasn't …) → positive tag: did / was / were + pronoun.",
              textAr: "جملة منفية ← سؤال ذيلي مثبت: did / was / were + ضمير.",
              examples: [
                "{s:Amani} {n:didn't} {v:eat} all the candy, {a:did} {s:she}?",
                "{s:It} {n:wasn't} hot, {a:was} {s:it}?"
              ] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Use a pronoun in the tag, not the name (Amani → she, the boys → they). Use the same helper verb as the sentence (was → wasn't, did → didn't).",
              textAr: "استخدم ضميرًا في السؤال الذيلي وليس الاسم، واستخدم الفعل المساعد نفسه.",
              examples: [
                "✗ Amani ate all the candy, didn't {n:Amani}? → ✓ didn't {s:she}?",
                "✗ It was cold, {n:didn't} it? → ✓ {n:wasn't} it?"
              ] }
          ],
          table: {
            head: ["Sentence", "Tag"],
            rows: [
              ["positive past simple (worked, knew)", "didn't + pronoun?"],
              ["negative past simple (didn't visit)", "did + pronoun?"],
              ["was / were (positive)", "wasn't / weren't + pronoun?"],
              ["wasn't / weren't (negative)", "was / were + pronoun?"]
            ]
          },
          worked: {
            q: "Complete: They spoke to the teacher about the project, ____ they?",
            steps: [
              "Find the verb: spoke (past simple, positive). There is no was / were.",
              "Positive sentence → negative tag.",
              "Past simple helper: did → didn't.",
              "The pronoun “they” is already there."
            ],
            a: "They spoke to the teacher about the project, didn't they?"
          },
          notes: [
            "Use a comma before the tag and a question mark at the end (punctuation!).",
            "Pronouns in tags: I, you, he, she, it, we, they.",
            "Short answers: Yes, I did. / No, I didn't."
          ] },

        { type: "activity", title: "Complete the following sentences:", page: 48, source: "book", stage: "guided",
          instructions: "Write the missing words.", instructionsAr: "أكمل الجمل.",
          items: [
            { t: "fill", q: "1. They spoke to the teacher about the project, ____ they?", answer: ["didn't"],
              hint: "spoke = positive past simple.", why: "Positive past simple → negative tag: didn't they?" },
            { t: "fill", q: "2. Amani ____ (eat) all the candy, did she?", answer: ["didn't eat", "did not eat"],
              hint: "The tag is positive (did she?).", why: "Positive tag → the sentence must be negative: didn't eat." },
            { t: "fill", q: "3. It ____ (be) cold yesterday, wasn't it?", answer: ["was"],
              hint: "The tag is wasn't it.", why: "Negative tag wasn't → positive sentence with was." },
            { t: "fill", q: "4. They were busy when you called, ____?", answer: ["weren't they"],
              hint: "were → ?", why: "Positive sentence with were → weren't they?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the tag", source: "extra", stage: "guided",
          instructions: "Choose the correct question tag.", instructionsAr: "اختر السؤال الذيلي الصحيح.",
          items: [
            { t: "choose", q: "You visited Failaka Island, (didn't you / did you)?", options: ["didn't you", "did you"], answer: 0, why: "Positive → negative tag." },
            { t: "choose", q: "Ali didn't come to school, (did he / didn't he)?", options: ["did he", "didn't he"], answer: 0, why: "Negative → positive tag." },
            { t: "choose", q: "The film was good, (wasn't it / didn't it)?", options: ["wasn't it", "didn't it"], answer: 0, why: "was → wasn't it." },
            { t: "choose", q: "Your friends were at the party, (weren't they / wasn't they)?", options: ["weren't they", "wasn't they"], answer: 0, why: "were → weren't + they." },
            { t: "choose", q: "Sara wrote a story, (didn't she / didn't Sara)?", options: ["didn't she", "didn't Sara"], answer: 0, why: "Use a pronoun: Sara → she." },
            { t: "choose", q: "You weren't late, (were you / weren't you)?", options: ["were you", "weren't you"], answer: 0, why: "Negative → positive tag: were you?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Write the tag", source: "extra", stage: "guided",
          instructions: "Write the question tag.", instructionsAr: "اكتب السؤال الذيلي.",
          items: [
            { t: "fill", q: "1. Mr. Ramzi wrote a book, ____?", answer: ["didn't he"], why: "Mr. Ramzi → he; wrote (positive) → didn't he?" },
            { t: "fill", q: "2. The cameraman visited the island, ____?", answer: ["didn't he", "didn't she"], why: "visited (positive) → didn't + he/she?" },
            { t: "fill", q: "3. The library was old, ____?", answer: ["wasn't it"], why: "was → wasn't it?" },
            { t: "fill", q: "4. You didn't read the book, ____?", answer: ["did you"], why: "Negative → did you?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct tag.", instructionsAr: "صحّح السؤال الذيلي.",
          items: [
            { t: "fix", q: "You knew about that, {did you}?", answer: ["didn't you"], hint: "knew is positive.", why: "Positive → negative tag: didn't you?" },
            { t: "fix", q: "It was cold yesterday, {didn't it}?", answer: ["wasn't it"], hint: "The verb is was.", why: "was → wasn't it?" },
            { t: "fix", q: "Amani didn't eat the candy, {didn't she}?", answer: ["did she"], hint: "The sentence is negative.", why: "Negative → positive tag: did she?" },
            { t: "short", q: "Write a sentence with a question tag about your last holiday.", model: "You went to Dubai last summer, didn't you?", open: true, hint: "…, didn't you? / …, did you?" }
          ] }
      ],
      game: { kind: "quiz", title: "Tag It!",
        items: [
          { t: "mcq", q: "You saw the news, ____?", options: ["didn't you", "did you", "weren't you"], answer: 0, why: "Positive past simple → didn't you?" },
          { t: "mcq", q: "He didn't call, ____?", options: ["didn't he", "did he", "was he"], answer: 1, why: "Negative → did he?" },
          { t: "mcq", q: "They were tired, ____?", options: ["weren't they", "didn't they", "wasn't they"], answer: 0, why: "were → weren't they?" },
          { t: "mcq", q: "It wasn't easy, ____?", options: ["wasn't it", "was it", "did it"], answer: 1, why: "Negative → was it?" },
          { t: "mcq", q: "Dana and John met at the library, ____?", options: ["didn't they", "didn't Dana", "did they"], answer: 0, why: "Dana and John → they; positive → didn't they?" }
        ] },
      teacher: {
        notes: [
          "Find the question tags in the interview first (didn't you? x2, Did you visit it?).",
          "Teach the rule with two colours: positive sentence → negative tag; negative sentence → positive tag.",
          "Show the special case of was / were (wasn't it?, weren't they?).",
          "Practise intonation: falling tone when you are sure, rising tone when you really ask.",
          "Book task: 4 sentences; then Extra Steps 1–3 and the Grammar Lab."
        ],
        pair: ["A says a sentence about B's weekend (You played football, …). B adds the tag and answers.", "Pairs interview each other like Dana and John using 3 question tags."],
        group: ["Tag ball: a student says a sentence, throws the ball; the catcher says the tag."],
        quick: [
          { q: "Positive past simple sentence → which tag?", a: "didn't + pronoun?" },
          { q: "Complete: It was cold yesterday, ___?", a: "wasn't it" },
          { q: "Complete: Amani didn't eat the candy, ___?", a: "did she" },
          { q: "Complete: They were busy, ___?", a: "weren't they" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — WRITING ─────────────────────────
    {
      id: "u6l3", num: 3, skill: "Writing",
      title: "Writing: A New Tourist Attraction",
      pages: [48, 48],
      status: "complete",
      canDo: ["Make suggestions", "Describe places/things"],
      goals: ["Think of a new attraction for Kuwait.", "Plan: location, activity, time.", "Write a descriptive paragraph."],
      goalsAr: ["أفكّر في معلم سياحي جديد للكويت.", "أخطّط: المكان والنشاط والوقت.", "أكتب فقرة وصفية."],
      warmup: {
        title: "Visitors to Kuwait",
        image: null,
        emoji: "🎡",
        prompts: ["What places do tourists visit in Kuwait?", "Which place do you show your visitors first? Why?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "4. Design a new tourist attraction for Kuwait.", page: 48, source: "book",
          prompts: ["What new tourist attraction, event, festival, competition or building do you think Kuwait needs to attract more visitors?"],
          image: null, emoji: "🏗️" },

        { type: "write", title: "4. Design a new tourist attraction for Kuwait.", page: 48, source: "book",
          instructions: "Think of one and write a paragraph describing the (location, activity, time … etc)",
          wordBank: ["located", "visitors", "unique", "spectacular", "festival", "every year", "families", "I think", "should"],
          frame: [
            { label: "Name and type", hint: "My idea is a … called …" },
            { label: "Location", hint: "It will be located in / on / near …" },
            { label: "Activity", hint: "Visitors can … / There will be …" },
            { label: "Time", hint: "It will be open … / It will take place every …" },
            { label: "Why Kuwait needs it", hint: "I think it will attract more visitors because …" }
          ],
          model: "My idea is a pearl diving festival called “Pearls of the Gulf”. It will be located on Failaka Island. Visitors can sail on a traditional boom, try safe diving with a guide and watch old Kuwaiti sea songs. There will also be a market for handmade jewellery and Kuwaiti food. The festival will take place every year in April, when the weather is warm but not too hot. I think it will attract more visitors because it is unique and it shows our heritage in a fun way.",
          modelFromBook: false,
          checklist: ["I described the location, activity and time.", "I gave a reason why Kuwait needs it.", "I used adjectives to describe the place.", "I used capital letters, commas and full stops correctly."],
          minWords: 60 },

        { type: "activity", title: "Extra Practice: Plan check", source: "extra", stage: "guided",
          instructions: "Which part of the plan is each sentence? Choose.", instructionsAr: "ما الجزء من الخطة الذي تمثله كل جملة؟",
          items: [
            { t: "mcq", q: "“It will be located near the Kuwait Towers.”", options: ["location", "activity", "time"], answer: 0, why: "located near … = where it is." },
            { t: "mcq", q: "“Visitors can ride camels and fly kites.”", options: ["location", "activity", "time"], answer: 1, why: "What visitors do = activity." },
            { t: "mcq", q: "“It will be open every weekend in winter.”", options: ["location", "activity", "time"], answer: 2, why: "When = time." },
            { t: "mcq", q: "Which sentence is a suggestion?", options: ["Kuwait should build a big water park.", "Kuwait is a small country.", "I visited a museum."], answer: 0, why: "should + verb makes a suggestion." }
          ] }
      ],
      game: { kind: "sort", title: "Location, Activity or Time?", buckets: ["Location", "Activity", "Time"],
        cards: [["on Failaka Island", 0], ["near the sea", 0], ["in Kuwait City", 0], ["swim with dolphins", 1], ["watch fireworks", 1], ["try Kuwaiti food", 1], ["every Friday", 2], ["in February", 2], ["from 4 p.m. to 10 p.m.", 2]] },
      teacher: {
        notes: [
          "Brainstorm: attraction, event, festival, competition or building. Write ideas on the board.",
          "Each student chooses one idea and fills the plan: location, activity, time.",
          "Students write a paragraph (60+ words); remind them about punctuation (Use punctuation).",
          "Gallery walk: the class votes for the best new attraction."
        ],
        pair: ["Pairs ask each other: Where is it? What can visitors do? When is it open?", "Partners check each other's punctuation."],
        group: ["Groups design an advert poster for their attraction."],
        quick: [
          { q: "What three things must your paragraph describe?", a: "Location, activity, time." },
          { q: "Give one suggestion for Kuwait tourism.", a: "Kuwait should build a … (any)" },
          { q: "Which word means “very impressive to look at”?", a: "spectacular" }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — LISTENING ─────────────────────────
    {
      id: "u6l4", num: 4, skill: "Listening",
      title: "Guinness Records",
      pages: [49, 49],
      status: "complete",
      canDo: ["Talk about records", "Make guesses"],
      goals: ["Read records and match them with pictures.", "Guess what records are about.", "Listen and write the missing words."],
      goalsAr: ["أقرأ أرقامًا قياسية وأصِلها بالصور.", "أخمّن موضوع الأرقام القياسية.", "أستمع وأكتب الكلمات الناقصة."],
      warmup: {
        title: "Guinness World Records",
        image: null,
        emoji: "🏆",
        prompts: ["Do you know the Guinness Book of World Records?", "Can you name a world record?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [
        { w: "spectacular", pos: "adjective", emoji: "🎆", def: "very exciting and beautiful to look at", ex: "In 2012, Kuwait set off 77,282 fireworks and entered the Guinness Book of World Records for the biggest and most spectacular fireworks show in history.", exFromBook: true, ar: "مذهل / رائع" },
        { w: "donate", pos: "verb", emoji: "🎁", def: "to give money or things to help people", ex: "A company in Singapore created the world's Most Expensive Coffee Pod and donated the proceeds to charity.", exFromBook: true, ar: "يتبرّع" },
        { w: "carpet", pos: "noun", emoji: "🧶", def: "a thick cloth that covers a floor", ex: "There is a big red carpet in our living room.", exFromBook: false, ar: "سجّادة" },
        { w: "return", pos: "adjective", emoji: "🔁", def: "going to a place and coming back", ex: "We bought return tickets to London.", exFromBook: false, ar: "ذهاب وعودة" }
      ],
      sections: [
        { type: "reading", title: "1. a. Read the following records and match them with the pictures:", page: 49,
          image: "crops/u6l4-records.jpg",
          paras: [
            "In 2011, Jyoti Kisanji Amge from India entered the Guinness Book of World Records as the shortest living woman in the world. She is 62.8 cm tall.",
            "In 2012, Kuwait set off 77,282 fireworks and entered the Guinness Book of World Records for the biggest and most spectacular fireworks show in history.",
            "in 2017 a company in Singapore created the world's Most Expensive Coffee Pod and donated the proceeds to charity. It's made of coffee and gold dust."
          ],
          speaker: null },

        { type: "activity", title: "1. a. Match the records with the pictures.", page: 49, source: "book",
          instructions: "Tap a record, then tap its picture. One picture is extra.", instructionsAr: "صِل كل رقم قياسي بالصورة المناسبة. توجد صورة زائدة.",
          items: [
            { t: "match", q: "Match each record with its picture (1–4).",
              pairs: [
                ["The shortest living woman (2011)", "Picture 3"],
                ["Kuwait's fireworks show (2012)", "Picture 2"],
                ["The Most Expensive Coffee Pod (2017)", "Picture 1"]
              ],
              hint: "Picture 4 (the man with the big ice cream) is not used.",
              why: "Picture 1 shows coffee, picture 2 shows fireworks over the Kuwait Towers, picture 3 shows a very short woman." }
          ] },

        { type: "activity", title: "1. b. Look at the pictures, guess and explain what you think these records are about.", page: 49, source: "book",
          image: "crops/u6l4-guess.jpg",
          instructions: "Look at the three pictures. Guess the record.", instructionsAr: "انظر إلى الصور وخمّن موضوع كل رقم قياسي.",
          items: [
            { t: "short", q: "Picture 1 (the tortoise on a running track):", open: true, model: "I think it is the fastest tortoise in the world.", hint: "I think it is the …est …" },
            { t: "short", q: "Picture 2 (the man with many burgers):", open: true, model: "Maybe he ate the most hamburgers in a short time.", hint: "Maybe he … the most …" },
            { t: "short", q: "Picture 3 (the man with a very long moustache):", open: true, model: "I guess he has the longest moustache in the world.", hint: "I guess he has the longest …" }
          ] },

        { type: "listen", title: "Listening 2. Listen and write the missing words. (Amazing Records)", page: 49, source: "book",
          needsAudio: true, track: "6.1",
          instructions: "Listen (track 6.1) and write the missing words.",
          items: [
            { t: "short", q: "A: The ____ hotel in the world is in Japan, dating back to the year ____ .", open: true, hint: "Two missing words: an adjective (-est) and a year." },
            { t: "short", q: "B: The ____ carpet in the world is Persian and was sold for $2,487,178.", open: true, hint: "An adjective (-est / most …)." },
            { t: "short", q: "C: The ____ taxi ride was ____ kilometres. It was a return trip from ____ to Cape Town, South Africa.", open: true, hint: "An adjective, a number and a place." }
          ] },

        { type: "listen", title: "Extra Practice: Record Time — Kuwait Records (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. The facts come from pages 47 and 49 of the book. Listen and answer.",
          script: [
            { who: "Host", text: "Welcome to Record Time! Today, Faisal tells us about Kuwaiti records." },
            { who: "Faisal", text: "Did you know that Kuwait has a Guinness World Record? In 2012, Kuwait set off 77,282 fireworks. It was the biggest fireworks show in history." },
            { who: "Host", text: "Wow! What about buildings?" },
            { who: "Faisal", text: "Al Hamra Tower is the tallest building in Kuwait. It is more than 400 metres high, and it took six years to build." },
            { who: "Host", text: "And islands?" },
            { who: "Faisal", text: "Bubiyan is the biggest island in Kuwait. Its sand is saltier than the water in the Gulf. No one lives there except for birds." },
            { who: "Host", text: "Amazing! Thank you, Faisal." }
          ],
          items: [
            { t: "mcq", q: "When did Kuwait set the fireworks record?", options: ["2011", "2012", "2017", "2018"], answer: 1, why: "“In 2012, Kuwait set off 77,282 fireworks.”" },
            { t: "mcq", q: "How many fireworks did Kuwait set off?", options: ["7,282", "77,282", "772,820", "2,012"], answer: 1, why: "“77,282 fireworks.”" },
            { t: "mcq", q: "Which is the tallest building in Kuwait?", options: ["the Kuwait Towers", "the National Library", "Al Hamra Tower", "Liberation Tower"], answer: 2, why: "“Al Hamra Tower is the tallest building in Kuwait.”" },
            { t: "mcq", q: "How long did it take to build the tower?", options: ["two years", "four years", "six years", "ten years"], answer: 2, why: "“…it took six years to build.”" },
            { t: "mcq", q: "Who lives on Bubiyan Island?", options: ["fishermen", "no one except for birds", "many families", "Faisal"], answer: 1, why: "“No one lives there except for birds.”" },
            { t: "fill", q: "Its sand is ____ than the water in the Gulf.", answer: ["saltier"], bank: ["saltier", "saltiest", "more salty"], why: "Comparative of salty: saltier." }
          ] }
      ],
      game: { kind: "quiz", title: "Record Quiz",
        items: [
          { t: "mcq", q: "How tall is Jyoti Kisanji Amge?", options: ["62.8 cm", "162.8 cm", "28.6 cm"], answer: 0, why: "“She is 62.8 cm tall.”" },
          { t: "mcq", q: "Where is Jyoti from?", options: ["India", "Singapore", "Kuwait"], answer: 0, why: "“…Jyoti Kisanji Amge from India…”" },
          { t: "mcq", q: "What is the expensive coffee pod made of?", options: ["coffee and silver", "coffee and gold dust", "chocolate and gold"], answer: 1, why: "“It's made of coffee and gold dust.”" },
          { t: "mcq", q: "What did the company do with the money?", options: ["kept it", "donated it to charity", "built a hotel"], answer: 1, why: "“…donated the proceeds to charity.”" },
          { t: "mcq", q: "A “return” trip means …", options: ["one way only", "going and coming back", "a very long trip"], answer: 1, why: "return = going there and coming back." }
        ] },
      teacher: {
        notes: [
          "Read the three records together; students match them with pictures 1–3 (picture 4 is extra).",
          "1b: students guess in pairs using I think / Maybe / I guess — no right or wrong answers.",
          "Play track 6.1 (teacher's audio) twice for the missing words. The book recording is not inside this app.",
          "If there is no audio, use the Extra script (facts from the book: fireworks, Al Hamra Tower, Bubiyan)."
        ],
        pair: ["A reads a record; B points to the picture.", "Pairs guess the 3 records in 1b and compare with another pair."],
        group: ["Groups invent a funny class record (the longest pencil, the most push-ups) and present it."],
        quick: [
          { q: "Which record did Kuwait set in 2012?", a: "The biggest and most spectacular fireworks show in history." },
          { q: "Which picture is extra in 1a?", a: "Picture 4 (the man with the big ice cream)." },
          { q: "What does “donate” mean?", a: "To give money or things to help people." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — GRAMMAR ─────────────────────────
    {
      id: "u6l5", num: 5, skill: "Grammar",
      title: "Order of Adjectives",
      pages: [50, 50],
      status: "complete",
      canDo: ["Use adjectives in the correct order", "Describe places/things", "Make guesses"],
      goals: ["Put adjectives in the correct order.", "Describe things with three adjectives.", "Talk about a record you want to break."],
      goalsAr: ["أرتّب الصفات بالترتيب الصحيح.", "أصف الأشياء بثلاث صفات.", "أتحدث عن رقم قياسي أريد تحطيمه."],
      warmup: {
        title: "Describe it!",
        image: null,
        emoji: "🎒",
        prompts: ["Look at your school bag. Say three words to describe it (colour, size, material).", "Which word comes first?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [
        { w: "oval", pos: "adjective", emoji: "🥚", def: "shaped like an egg", ex: "It's a delicious oval-shaped orange fruit that has a big seed in it.", exFromBook: true, ar: "بيضاوي" }
      ],
      sections: [
        { type: "grammar", title: "Order of Adjectives", page: 50,
          steps: [
            { title: "Step 1 — The book's table and examples",
              text: "Opinion → Size → Age → Shape → Colour → Origin → Material. e.g. I bought a wonderful, small, wooden coffee table. There is a pair of nice, white, leather trainers.",
              textAr: "الرأي ← الحجم ← العمر ← الشكل ← اللون ← المصدر ← المادة.",
              examples: [
                "I bought a {o:wonderful}, {s:small}, {v:wooden} coffee table.",
                "There is a pair of {o:nice}, {t:white}, {v:leather} trainers."
              ] },
            { title: "Step 2 — Remember the order: OSASCOM", source: "extra",
              text: "Opinion (beautiful, bad) – Size (large) – Age (old) – Shape (round, square) – Colour (red) – Origin (Kuwaiti) – Material (wooden, metal) + NOUN.",
              textAr: "تذكّر الترتيب بكلمة OSASCOM: رأي – حجم – عمر – شكل – لون – مصدر – مادة ثم الاسم.",
              examples: [
                "a {o:beautiful} {s:large} {a:old} {c:round} {t:red} {p:Kuwaiti} {v:wooden} box"
              ] },
            { title: "Step 3 — Opinion before fact", source: "extra",
              text: "Opinion adjectives (what you think: nice, scary, delicious) always come first. Fact adjectives (size, age, colour…) come after.",
              textAr: "صفات الرأي تأتي أولًا، ثم صفات الحقائق.",
              examples: [
                "a {o:scary} {s:large} {t:brown} dog",
                "a {o:delicious} {c:oval}-shaped {t:orange} fruit"
              ] },
            { title: "Step 4 — Be careful!", source: "extra",
              text: "Material is closest to the noun. Colour comes after size and age. We usually use only 2–3 adjectives in one sentence.",
              textAr: "المادة تكون الأقرب إلى الاسم، واللون بعد الحجم والعمر.",
              examples: [
                "✗ a {n:leather new black} bag → ✓ a {a:new} {t:black} {v:leather} bag",
                "✗ his {n:German old small} car → ✓ his {s:small} {a:old} {p:German} car"
              ] }
          ],
          table: {
            head: ["Opinion", "Size", "Age", "Shape", "Colour", "Origin", "Material"],
            rows: [
              ["Beautiful", "large", "old", "round", "red", "Kuwaiti", "wooden"],
              ["bad", "", "", "square", "", "", "metal"]
            ]
          },
          worked: {
            q: "Reorder: Have you seen my (leather – new – black) bag?",
            steps: [
              "Find the group of each adjective: leather = material, new = age, black = colour.",
              "Order: age → colour → material.",
              "new → black → leather."
            ],
            a: "Have you seen my new black leather bag?"
          },
          notes: [
            "The order: Opinion – Size – Age – Shape – Colour – Origin – Material.",
            "The book's examples use commas between the adjectives (a wonderful, small, wooden coffee table). Both styles are used.",
            "a or an depends on the first adjective: an old box, a new box, an Italian car."
          ] },

        { type: "activity", title: "3. a. Add more adjectives to each of the following categories.", page: 50, source: "book", stage: "guided",
          instructions: "Write more adjectives in the empty boxes.", instructionsAr: "أضف صفات أخرى في الفراغات.",
          items: [
            { t: "table", q: "Add more adjectives to each category.", open: true,
              head: ["Opinion", "Size", "Age", "Shape", "Colour", "Origin", "Material"],
              rows: [
                ["Beautiful", "large", "old", "round", "red", "Kuwaiti", "wooden"],
                ["bad", { open: true, model: "small" }, { open: true, model: "new" }, "square", { open: true, model: "blue" }, { open: true, model: "Italian" }, "metal"],
                [{ open: true, model: "lovely" }, { open: true, model: "tiny" }, { open: true, model: "young" }, { open: true, model: "oval" }, { open: true, model: "green" }, { open: true, model: "Japanese" }, { open: true, model: "plastic" }]
              ] }
          ] },

        { type: "activity", title: "3. b. Reorder the adjectives in the following sentences:", page: 50, source: "book", stage: "guided",
          instructions: "e.g. I bought a wonderful, small, wooden coffee table. There is a pair of nice, white, leather trainers. Put the words in the correct order.",
          instructionsAr: "رتّب الصفات بالترتيب الصحيح.",
          items: [
            { t: "order", q: "1. Have you seen my (leather – new – black) bag?", words: ["Have", "you", "seen", "my", "leather", "new", "black", "bag?"],
              answer: ["Have you seen my new black leather bag?"], hint: "age → colour → material", why: "new (age) → black (colour) → leather (material)." },
            { t: "order", q: "2. My brother has a (large – brown – scary) dog. I'm afraid of it.", words: ["My", "brother", "has", "a", "large", "brown", "scary", "dog."],
              answer: ["My brother has a scary large brown dog."], hint: "opinion → size → colour", why: "scary (opinion) → large (size) → brown (colour)." },
            { t: "order", q: "3. My father would like to sell his (German – old – small) car.", words: ["My", "father", "would", "like", "to", "sell", "his", "German", "old", "small", "car."],
              answer: ["My father would like to sell his small old German car."], hint: "size → age → origin", why: "small (size) → old (age) → German (origin)." }
          ] },

        { type: "speak", title: "Speaking 4. Describe three items using at least three adjectives, then ask the other groups to guess what the items are. (Use correct adjective order)", page: 50, source: "book",
          instructions: "e.g. It's a delicious oval-shaped orange fruit that has a big seed in it.",
          dialogue: [
            { who: "A", text: "It's a delicious oval-shaped orange fruit that has a big seed in it. What is it?" },
            { who: "B", text: "" },
            { who: "A", text: "Your turn. Describe your item." },
            { who: "B", text: "" }
          ],
          starters: ["It's a beautiful small … that …", "It's a big old … made of …", "Is it a …?", "I think it's a …"],
          record: true },

        { type: "speak", title: "Speaking 5. Tell your partner about a record you would like to break, why you want to break it, how, where and when.", page: 50, source: "book",
          instructions: "Tell your partner: which record, why, how, where and when.",
          dialogue: [
            { who: "A", text: "Which record would you like to break?" },
            { who: "B", text: "" },
            { who: "A", text: "Why? How will you do it?" },
            { who: "B", text: "" },
            { who: "A", text: "Where and when?" },
            { who: "B", text: "" }
          ],
          starters: ["I'd like to break the record for the …est …", "I want to break it because …", "I will practise …", "I will do it in … in …"],
          record: true },

        { type: "discuss", title: "💡 Tip", page: 50, source: "book",
          prompts: ["Search for more Guinness World Records that interest you. Share them with your class. You can visit http://kids.guinnessworldrecords.com/"],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Step 1 — Which group?", source: "extra", stage: "guided",
          instructions: "Choose the group of each adjective.", instructionsAr: "اختر نوع كل صفة.",
          items: [
            { t: "mcq", q: "wooden", options: ["Colour", "Material", "Size"], answer: 1, why: "wooden = made of wood (material)." },
            { t: "mcq", q: "Japanese", options: ["Origin", "Age", "Opinion"], answer: 0, why: "Japanese = where it is from (origin)." },
            { t: "mcq", q: "delicious", options: ["Shape", "Opinion", "Material"], answer: 1, why: "delicious = what you think (opinion)." },
            { t: "mcq", q: "square", options: ["Shape", "Size", "Colour"], answer: 0, why: "square = a shape." },
            { t: "mcq", q: "ancient", options: ["Age", "Origin", "Material"], answer: 0, why: "ancient = very old (age)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Choose the correct order", source: "extra", stage: "guided",
          instructions: "Choose the correct phrase.", instructionsAr: "اختر العبارة ذات الترتيب الصحيح.",
          items: [
            { t: "mcq", q: "Choose:", options: ["a red big ball", "a big red ball"], answer: 1, why: "size → colour." },
            { t: "mcq", q: "Choose:", options: ["a beautiful old Kuwaiti house", "an old Kuwaiti beautiful house"], answer: 0, why: "opinion → age → origin." },
            { t: "mcq", q: "Choose:", options: ["a metal round table", "a round metal table"], answer: 1, why: "shape → material." },
            { t: "mcq", q: "Choose:", options: ["a new white cotton dishdasha", "a white cotton new dishdasha"], answer: 0, why: "age → colour → material." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Describe it (on your own)", source: "extra", stage: "independent",
          instructions: "Write the adjectives in the correct order.", instructionsAr: "اكتب الصفات بالترتيب الصحيح.",
          items: [
            { t: "fill", q: "1. She has a ____ cat. (white – lovely – small)", answer: ["lovely small white", "lovely, small, white"], why: "opinion (lovely) → size (small) → colour (white)." },
            { t: "fill", q: "2. We ate at a ____ restaurant. (Italian – nice – new)", answer: ["nice new Italian", "nice, new, Italian"], why: "opinion → age → origin." },
            { t: "fill", q: "3. My grandfather has an ____ box. (wooden – old – square)", answer: ["old square wooden", "old, square, wooden"], why: "age → shape → material." },
            { t: "short", q: "Describe an item in your house with three adjectives.", model: "We have a big old brown wooden cupboard.", open: true, hint: "size → age → colour → material" }
          ] }
      ],
      game: { kind: "sort", title: "Sort the Adjectives", buckets: ["Opinion", "Size", "Colour", "Material"],
        cards: [["beautiful", 0], ["scary", 0], ["large", 1], ["tiny", 1], ["brown", 2], ["white", 2], ["leather", 3], ["wooden", 3]] },
      teacher: {
        notes: [
          "Copy the book table on the board; students add adjectives to each column (3a).",
          "Teach OSASCOM: Opinion – Size – Age – Shape – Colour – Origin – Material.",
          "3b: students reorder the three sentences; check with the worked example.",
          "Speaking 4: groups describe items with 3 adjectives; others guess. Speaking 5: pairs talk about a record they want to break.",
          "Tip: students find a Guinness record online and share it next lesson."
        ],
        pair: ["A describes something in the classroom with 3 adjectives; B guesses."],
        group: ["Adjective line-up: 7 students each hold one adjective card and stand in the correct order."],
        quick: [
          { q: "What is the order of adjectives?", a: "Opinion – Size – Age – Shape – Colour – Origin – Material." },
          { q: "Reorder: a (leather – new – black) bag", a: "a new black leather bag" },
          { q: "Reorder: a (large – brown – scary) dog", a: "a scary large brown dog" },
          { q: "Which is closest to the noun: colour or material?", a: "Material." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u6l6", num: 6, skill: "Reading",
      title: "Timeless Gold",
      pages: [51, 52],
      status: "complete",
      canDo: ["Describe places/things", "Make guesses"],
      goals: ["Guess from pictures.", "Read about gold treasures.", "Write a title for each paragraph.", "Learn 6 new words."],
      goalsAr: ["أخمّن من الصور.", "أقرأ عن كنوز الذهب.", "أكتب عنوانًا لكل فقرة.", "أتعلّم 6 كلمات جديدة."],
      warmup: {
        title: "1. Before you read",
        image: "crops/u6l6-warmup.jpg",
        emoji: "🪙",
        prompts: ["Look at the pictures, can you guess what they are about?"],
        seconds: 90
      },
      vocab: [
        { w: "countless", pos: "adjective", emoji: "♾️", def: "too many to count", ex: "In 2011, one trillion dollars' worth of jewellery and countless silk sacks filled with diamonds and gold were found in India.", exFromBook: true, ar: "لا يُحصى" },
        { w: "royal", pos: "adjective", emoji: "👑", def: "of or about kings and queens", ex: "These items were given to the temple over thousands of years by the royal families who ruled that area.", exFromBook: true, ar: "ملكي" },
        { w: "pure", pos: "adjective", emoji: "🥇", def: "not mixed with anything else", ex: "The mask of the king weighs almost 18 kilograms and it is made of pure gold.", exFromBook: true, ar: "خالص / نقي" },
        { w: "marble", pos: "noun", emoji: "🏛️", def: "a hard, smooth stone used in buildings", ex: "The mosque has marble minarets and several golden domes.", exFromBook: true, ar: "رخام" },
        { w: "import", pos: "verb", emoji: "🚢", def: "to bring things in from another country", ex: "Everything in the mosque was imported.", exFromBook: true, ar: "يستورد" },
        { w: "chandelier", pos: "noun", emoji: "💡", def: "a big decorated light that hangs from the ceiling", ex: "The marble is from Italy, the granite from Shanghai, the crystal chandeliers from England and the carpets from Saudi Arabia.", exFromBook: true, ar: "ثريّا" }
      ],
      sections: [
        { type: "reading", title: "Timeless Gold", page: 51,
          paras: [
            "1 In 2011, one trillion dollars' worth of jewellery and countless silk sacks filled with diamonds and gold were found in India. They were underground in a temple. These items were given to the temple over thousands of years by the royal families who ruled that area.",
            "2 The tomb of the young king Tutankhamen was discovered in 1922. The tomb was filled with many treasures, including necklaces and other jewellery, all made of gold. The mask of the king weighs almost 18 kilograms and it is made of pure gold.",
            "3 The Omar Ali Saifuddien Mosque is a spectacular piece of art, located in Brunei. Brunei is located on the north coast of the island of Borneo in Southeast Asia. The mosque has marble minarets and several golden domes. The most amazing thing is that the main dome is covered in pure gold. Everything in the mosque was [[imported]]. The marble is from Italy, the granite from Shanghai, the crystal chandeliers from England and the carpets from Saudi Arabia."
          ],
          speaker: null },

        { type: "activity", title: "2. Read the text and write a suitable title for each paragraph.", page: 51, source: "book",
          instructions: "Write a title for each paragraph.", instructionsAr: "اكتب عنوانًا مناسبًا لكل فقرة.",
          items: [
            { t: "table", q: "Write a title for each paragraph.", open: true,
              head: ["Paragraph", "Title"],
              rows: [
                ["Paragraph 1", { open: true, model: "Treasures Under an Indian Temple" }],
                ["Paragraph 2", { open: true, model: "The Golden Tomb of Tutankhamen" }],
                ["Paragraph 3", { open: true, model: "A Golden Mosque in Brunei" }]
              ] }
          ] },

        { type: "activity", title: "3. Read again and choose the correct answers from a, b, c and d:", page: 52, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. What is the author's purpose for writing paragraphs 2 and 3?",
              options: ["a. to talk about the owners of the treasures.", "b. to explain the importance of finding treasures.", "c. to provide accurate descriptions of the treasures.", "d. to give information about Islamic places in the world."], answer: 2,
              hint: "What do paragraphs 2 and 3 tell us: owners, importance or details?", why: "Paragraphs 2 and 3 describe the treasures in detail: 18 kilograms of pure gold, marble minarets, golden domes, where everything came from." },
            { t: "mcq", q: "2. Which word in the text means “brought in from another country”?",
              options: ["a. ruled", "b. made", "c. covered", "d. imported"], answer: 3,
              hint: "Read the sentence after it: the marble is from Italy…", why: "“Everything in the mosque was imported. The marble is from Italy…” = brought in from other countries." }
          ] },

        { type: "activity", title: "Extra Practice: Which paragraph?", source: "extra", stage: "guided",
          instructions: "Choose the paragraph.", instructionsAr: "اختر الفقرة.",
          items: [
            { t: "mcq", q: "It was discovered in 1922.", options: ["Paragraph 1", "Paragraph 2", "Paragraph 3"], answer: 1, why: "“The tomb of the young king Tutankhamen was discovered in 1922.”" },
            { t: "mcq", q: "The treasure was found underground in a temple.", options: ["Paragraph 1", "Paragraph 2", "Paragraph 3"], answer: 0, why: "“They were underground in a temple.”" },
            { t: "mcq", q: "Its main dome is covered in pure gold.", options: ["Paragraph 1", "Paragraph 2", "Paragraph 3"], answer: 2, why: "“…the main dome is covered in pure gold.”" },
            { t: "mcq", q: "Where are the carpets in the mosque from?", options: ["Italy", "England", "Saudi Arabia", "Shanghai"], answer: 2, why: "“…and the carpets from Saudi Arabia.”" },
            { t: "mcq", q: "How much does Tutankhamen's mask weigh?", options: ["almost 8 kilograms", "almost 18 kilograms", "almost 80 kilograms", "one trillion kilograms"], answer: 1, why: "“The mask of the king weighs almost 18 kilograms.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the box.", instructionsAr: "أكمل بكلمة مناسبة.",
          items: [
            { t: "fill", q: "1. The king and queen live in a ____ palace.", answer: ["royal"], bank: ["royal", "pure", "countless", "chandelier"], why: "royal = of kings and queens." },
            { t: "fill", q: "2. This ring is made of ____ gold.", answer: ["pure"], bank: ["royal", "pure", "countless", "chandelier"], why: "pure = not mixed." },
            { t: "fill", q: "3. There are ____ stars in the sky.", answer: ["countless"], bank: ["royal", "pure", "countless", "chandelier"], why: "countless = too many to count." },
            { t: "fill", q: "4. A big crystal ____ hangs in the hall.", answer: ["chandelier"], bank: ["royal", "pure", "countless", "chandelier"], why: "A chandelier hangs from the ceiling." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the pictures (temple treasure, Tutankhamen's mask, the golden mosque). Students guess what the texts are about.",
          "Pre-teach the 6 words; show Brunei and Borneo on a map.",
          "Read paragraph by paragraph; students suggest titles (exercise 2) — accept any title that gives the main idea.",
          "Exercise 3: discuss why c is the best answer (accurate descriptions = details).",
          "Point out the passive (were found, was discovered, was imported) — link to Unit 4."
        ],
        pair: ["A reads a detail; B says which paragraph it is from."],
        group: ["Groups rank the three treasures from most to least amazing and explain why."],
        quick: [
          { q: "When was Tutankhamen's tomb discovered?", a: "In 1922." },
          { q: "Where is the Omar Ali Saifuddien Mosque?", a: "In Brunei." },
          { q: "Which word means “brought in from another country”?", a: "imported" },
          { q: "What is the main dome covered in?", a: "Pure gold." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING (Speaking and Writing) ─────────────────────────
    {
      id: "u6l7", num: 7, skill: "Writing",
      title: "Speaking and Writing: A Buried Treasure",
      pages: [52, 52],
      status: "complete",
      canDo: ["Make decisions and choices", "Use punctuation"],
      goals: ["Discuss a difficult choice in a group.", "Reach an agreement.", "Write a report with your opinion and reasons."],
      goalsAr: ["نناقش اختيارًا صعبًا في مجموعة.", "نصل إلى اتفاق.", "أكتب تقريرًا برأيي وأسبابي."],
      warmup: {
        title: "Imagine…",
        image: "crops/u6l7-treasure.jpg",
        emoji: "💰",
        prompts: ["Look at the treasure box. What can you see inside?", "How would you feel if you found it?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "4. a. Work in groups to discuss the following question:", page: 52, source: "book",
          prompts: [
            "Imagine you found a buried treasure that is worth millions with nothing that tells who the owner is. Would you keep it or give it to the police to search for its owner?",
            "Reach an agreement, then tell your class about your decision, explaining your reasons."
          ],
          image: null, emoji: "👥" },

        { type: "speak", title: "4. a. Tell your class about your decision", page: 52, source: "book",
          instructions: "Reach an agreement in your group, then tell your class about your decision, explaining your reasons.",
          dialogue: [
            { who: "A", text: "What should we do with the treasure?" },
            { who: "B", text: "" },
            { who: "A", text: "Why? Do you all agree?" },
            { who: "B", text: "" }
          ],
          starters: ["We decided to …", "We would give it to the police because …", "We would keep it because …", "We all agree that …", "Finally, we chose … because …"],
          record: true },

        { type: "write", title: "4. b. In your notebook, write a report explaining what you would do if you found a treasure.", page: 52, source: "book",
          instructions: "Write a report explaining what you would do if you found a treasure.",
          wordBank: ["In my opinion", "I would", "because", "for example", "also", "however", "To sum up", "honest"],
          frame: [
            { label: "Opinion", hint: "Make sure to state your opinion clearly at the beginning." },
            { label: "Reasons and examples", hint: "Explain your opinion by giving strong reasons and examples." },
            { label: "Conclusion", hint: "Conclude your report by summarising the main points that you made." }
          ],
          bookNote: "Don't forget to edit your paragraphs checking for spelling and punctuation.",
          bookChecklist: [
            "I stated my opinion clearly at the beginning.",
            "I explained my opinion by giving strong reasons and examples.",
            "I concluded my report by summarising the main points that I made.",
            "I edited my paragraphs checking for spelling and punctuation."
          ],
          model: "If I found a buried treasure, I would give it to the police. In my opinion, this is the right and honest thing to do.\n\nFirst, the treasure is not mine. It may belong to a family who lost it, or it may be part of our country's heritage, like the treasures in old tombs and temples. Second, the police can search for the owner, and if it is very old, it can go to a museum where everyone can enjoy it. For example, Tutankhamen's golden mask is now in a museum, and millions of people have seen it.\n\nTo sum up, I would not keep the treasure because it is not mine, the owner may need it, and it could become part of our history for everyone.",
          modelFromBook: false,
          checklist: ["I used capital letters and full stops.", "I used commas after linking words (First, … / To sum up, …)."],
          minWords: 80 },

        { type: "discuss", title: "💡 Tip", page: 52, source: "book",
          prompts: ["Search the internet to find out about other lost treasures. Bring pictures to your class."],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Punctuation check", source: "extra", stage: "guided",
          instructions: "Choose the sentence with correct punctuation.", instructionsAr: "اختر الجملة ذات علامات الترقيم الصحيحة.",
          items: [
            { t: "mcq", q: "Choose:", options: ["In my opinion, I would give it to the police.", "in my opinion I would give it to the police"], answer: 0, why: "Capital letter at the start, comma after “In my opinion”, full stop at the end." },
            { t: "mcq", q: "Choose:", options: ["Would you keep it.", "Would you keep it?"], answer: 1, why: "A question ends with a question mark." },
            { t: "mcq", q: "Choose:", options: ["To sum up, honesty is important.", "To sum up honesty, is important."], answer: 0, why: "The comma comes after the linker “To sum up”." },
            { t: "mcq", q: "Choose:", options: ["The treasure was found in egypt.", "The treasure was found in Egypt."], answer: 1, why: "Names of countries start with a capital letter." }
          ] }
      ],
      game: { kind: "quiz", title: "Report Quiz",
        items: [
          { t: "mcq", q: "Where do you state your opinion in the report?", options: ["at the beginning", "only at the end", "nowhere"], answer: 0, why: "“Make sure to state your opinion clearly at the beginning.”" },
          { t: "mcq", q: "How do you explain your opinion?", options: ["with strong reasons and examples", "with one word", "with a picture only"], answer: 0, why: "“Explain your opinion by giving strong reasons and examples.”" },
          { t: "mcq", q: "What do you do in the conclusion?", options: ["start a new idea", "summarise the main points", "ask a question"], answer: 1, why: "“Conclude your report by summarising the main points that you made.”" },
          { t: "mcq", q: "Which linker starts a conclusion?", options: ["First,", "For example,", "To sum up,"], answer: 2, why: "To sum up = in conclusion." },
          { t: "mcq", q: "If I found a treasure, I ____ give it to the police.", options: ["would", "will to", "am"], answer: 0, why: "Imaginary situation: I would + base verb." }
        ] },
      teacher: {
        notes: [
          "Groups discuss the dilemma for 4 minutes; they must reach one decision (Make decisions and choices).",
          "Each group tells the class its decision and two reasons.",
          "Show the 3-part report plan: opinion → reasons and examples → conclusion.",
          "Students write and then edit for spelling and punctuation (the book's red note).",
          "Tip: students find other lost treasures and bring pictures."
        ],
        pair: ["Partners swap reports and check punctuation with the checklist."],
        group: ["Class vote: keep it or give it to the police? Each side gives its best reason."],
        quick: [
          { q: "What are the three parts of the report?", a: "Opinion at the beginning, reasons and examples, conclusion." },
          { q: "What must you check when you edit?", a: "Spelling and punctuation." },
          { q: "Complete: If I found a treasure, I ___ …", a: "would (give it to the police / keep it …)" }
        ]
      }
    }
  ]
});

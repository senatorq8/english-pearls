// Learning Unit 1 — Kuwait Then and Now: Living the Change (printed pages 18, 21–30)
// Book text is copied from the Student's Book. Answers come from the answer key written on the pages.
// Everything marked source: "extra" is not in the book.
BOOK.addUnit({
  id: "u1", num: 1, title: "Kuwait Then and Now: Living the Change", titleAr: "الكويت بين الماضي والحاضر: نعيش التغيير",
  pages: [18, 30], cover: 18,
  status: "complete",
  lessons: [

    /* ───────────────────────── LESSON 1 — READING (pp. 21–22) ───────────────────────── */
    {
      id: "u1l1", num: 1, skill: "Reading", title: "Discover the New Kuwait!", pages: [21, 22], status: "complete",
      canDo: [
        "I can analyse both explicit and implicit details to extract the main idea and information from a written text about discovering the new Kuwait.",
        "I can infer the meaning of unfamiliar vocabulary items from text clues in the reading passage."
      ],
      goals: ["Read about three popular places in Kuwait.", "Learn 9 new words.", "Find the main idea and details.", "Plan and talk about a new place for Kuwait."],
      goalsAr: ["أقرأ عن ثلاثة أماكن مشهورة في الكويت.", "أتعلّم 9 كلمات جديدة.", "أجد الفكرة الرئيسية والتفاصيل.", "أخطّط لمكان جديد في الكويت وأتحدّث عنه."],
      warmup: {
        title: "Before You Read", image: "crops/u1l1-places.jpg", emoji: "🏙️", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["a. Have you visited any of these places?", "b. Do you know the names of these places?", "c. What do you think people can do there?"]
      },
      vocab: [
        { w: "rich", pos: "adjective", emoji: "💎", def: "full of interesting or valuable things", ex: "Kuwait is a country with a rich history and exciting modern developments.", exFromBook: true, ar: "غنيّ" },
        { w: "wonderful", pos: "adjective", emoji: "🤩", def: "very good; great", ex: "It offers many wonderful places for people to visit, learn, and enjoy.", exFromBook: true, ar: "رائع" },
        { w: "landmark", pos: "noun", emoji: "🗼", def: "a building or place that is easy to recognise", ex: "The Scientific Centre in Salmiya is one of Kuwait’s most famous landmarks.", exFromBook: true, ar: "مَعْلَم بارز" },
        { w: "recently", pos: "adverb", emoji: "🆕", def: "not long ago", ex: "It recently opened a new area with digital exhibits, hands-on experiments, and modern displays.", exFromBook: true, ar: "مؤخرًا / حديثًا" },
        { w: "digital", pos: "adjective", emoji: "💻", def: "using computers and electronic technology", ex: "It recently opened a new area with digital exhibits, hands-on experiments, and modern displays.", exFromBook: true, ar: "رقميّ" },
        { w: "become", pos: "verb", emoji: "🔄", def: "to start to be something", ex: "The Scientific Centre has become one of the most popular weekend destinations for families.", exFromBook: true, ar: "يصبح" },
        { w: "museum", pos: "noun", emoji: "🏛️", def: "a building where people can see old, interesting or important things", ex: "It is one of the largest museums in the country.", exFromBook: true, ar: "متحف" },
        { w: "locate", pos: "verb", emoji: "📍", def: "(be located) to be in a particular place", ex: "It is located in Salmiya and has many exciting galleries.", exFromBook: true, ar: "يقع (في مكان)" },
        { w: "provide", pos: "verb", emoji: "🎁", def: "to give someone something that they need", ex: "Despite being in a busy city, it provides a peaceful escape where people can exercise, enjoy nature, and visit cultural exhibitions.", exFromBook: true, ar: "يوفّر / يقدّم" }
      ],
      sections: [
        { type: "reading", title: "Discover the New Kuwait!", page: 21,
          instructions: "2. Read the following passage and do the tasks that follow.",
          paras: [
            "Kuwait is a country with a rich history and exciting modern developments. It offers many wonderful places for people to visit, learn, and enjoy. Three of the most popular attractions in Kuwait are the Scientific Centre, Sheikh Abdullah Al Salem Cultural Centre, and Al Shaheed Park.",
            "The Scientific Centre in Salmiya is one of Kuwait’s most famous landmarks. It educates visitors about the environment, marine life, and science. It recently opened a new area with digital exhibits, hands-on experiments, and modern displays. Children enjoy the Discovery Place, while adults relax at the seaside café or watch documentaries at the IMAX theatre. The Scientific Centre has become one of the most popular weekend destinations for families.",
            "Another popular attraction in Kuwait is the Sheikh Abdullah Al Salem Cultural Centre. It is one of the largest museums in the country. It is located in Salmiya and has many exciting galleries. Students and families can learn about science, space, history, and the natural world. An outstanding feature is that the centre uses modern technology. Many visitors enjoy spending the day there to explore and discover new things. They can also enjoy a cup of coffee at the cafés inside the centre.",
            "The third attraction is Al Shaheed Park, which is located in the heart of Kuwait City. It is the largest park in Kuwait and has beautiful gardens, museums, and walking paths. Despite being in a busy city, it provides a peaceful escape where people can exercise, enjoy nature, and visit cultural exhibitions. The park is not only a place for relaxation, but it also hosts shows and public events throughout the year."
          ],
          speaker: null,
          note: "Text type: Expository. Book tip: We use the present simple tense to write about facts." },

        { type: "activity", title: "3. Choose another title for the passage.", page: 21, source: "book",
          instructions: "Choose another title for the passage.", instructionsAr: "اختر عنوانًا آخر للنص.",
          items: [
            { t: "mcq", q: "Choose another title for the passage.", options: ["Kuwait’s Best Parks", "Popular Museums in Kuwait", "Exploring Top Places in Kuwait", "A Look at Kuwait’s History and Culture"], answer: 2,
              hint: "The passage is about three different places: a science centre, a cultural centre and a park.",
              why: "The passage describes three popular places to visit in Kuwait, so “Exploring Top Places in Kuwait” fits. It is not only about parks, only about museums or only about history." }
          ] },

        { type: "activity", title: "4. a. Read the passage again and complete the table.", page: 22, source: "book",
          instructions: "Read the passage again and complete the table. Row 1 is done for you.", instructionsAr: "اقرأ النص مرة أخرى وأكمل الجدول. الصف الأول محلول.",
          items: [
            { t: "table", q: "Complete the table.",
              head: ["P", "Place Name", "Things to Do"],
              rows: [
                ["1", "The Scientific Centre", "enjoy the Discovery Place / relax at the seaside café"],
                ["2", { answer: ["Sheikh Abdullah Al Salem Cultural Centre", "the Sheikh Abdullah Al Salem Cultural Centre", "Sheikh Abdullah Al-Salem Cultural Centre", "Abdullah Al Salem Cultural Centre", "Sheikh Abdullah Al Salem Cultural Center", "Abdullah Al Salem Cultural Center", "the Cultural Centre", "Cultural Centre", "the Cultural Center", "Cultural Center"], model: "Sheikh Abdullah Al Salem Cultural Centre" }, { model: "learn about science, space and history / drink coffee there" }],
                ["3", "Al Shaheed Park", { model: "exercise, enjoy nature / visit cultural exhibitions and shows" }]
              ],
              hint: "Paragraph 3 is about the second place. Paragraph 4 is about the third place.",
              why: "Row 2: Sheikh Abdullah Al Salem Cultural Centre: learn about science, space and history / drink coffee there. Row 3: Al Shaheed Park: exercise, enjoy nature / visit cultural exhibitions and shows.",
              note: "Only the place name is checked. Compare your “Things to Do” with the suggested answers." }
          ] },

        { type: "activity", title: "4. b. Decide which attraction helps you learn and which one is mostly for fun and relaxation?", page: 22, source: "book",
          instructions: "Decide which attraction helps you learn and which one is mostly for fun and relaxation?", instructionsAr: "حدّد أيّ مكان يساعدك على التعلّم، وأيّها للمتعة والاسترخاء غالبًا.",
          items: [
            { t: "short", q: "Which attraction helps you learn, and which one is mostly for fun and relaxation?",
              model: "The Cultural Centre helps you learn, and Al Shaheed Park is for fun and relaxation.",
              keywords: [["cultural", "scientific", "museum"], ["park"]],
              hint: "Which place has galleries about science and history? Which place has gardens and walking paths?" }
          ] },

        { type: "activity", title: "5. Find words in the passage that mean:", page: 22, source: "book",
          instructions: "Find words in the passage that mean:", instructionsAr: "ابحث في النص عن كلمات تحمل المعاني التالية.",
          items: [
            { t: "fill", q: "2nd paragraph: a building or place that is easily recognised → ____", answer: ["landmark", "landmarks"], hint: "Read the first sentence of paragraph 2.", why: "“The Scientific Centre in Salmiya is one of Kuwait’s most famous landmarks.”" },
            { t: "fill", q: "3rd paragraph: to be in a particular place → ____", answer: ["located", "is located", "locate"], hint: "“It is ____ in Salmiya.”", why: "“It is located in Salmiya and has many exciting galleries.”" },
            { t: "fill", q: "4th paragraph: to give someone something that they need → ____", answer: ["provides", "provide"], hint: "“… it ____ a peaceful escape …”", why: "“Despite being in a busy city, it provides a peaceful escape …”" }
          ] },

        { type: "write", title: "6. Think of a new place you would love to have in Kuwait. Fill in each part of the map with your creative ideas.", page: 22, source: "book",
          instructions: "Think of a new place you would love to have in Kuwait. Fill in each part of the map with your creative ideas.",
          frame: [
            { label: "A new place I’d like to have in Kuwait is", hint: "e.g. a water park" },
            { label: "Location", hint: "Where is it?" },
            { label: "Things to Do", hint: "What can people do there?" },
            { label: "Food and Drinks", hint: "What can people eat and drink there?" },
            { label: "Why I Like It", hint: "Give a reason." }
          ],
          model: "A new place I’d like to have in Kuwait is a snow park.\nLocation: In Al Khiran.\nThings to Do: Skiing and playing in the snow.\nFood and Drinks: Hot chocolate and snacks.\nWhy I Like It: It is cool in the hot summer.",
          modelFromBook: false,
          checklist: ["I wrote the name of my new place.", "I filled in all four parts of the map.", "I started with a capital letter and ended with a full stop."],
          minWords: 15 },

        { type: "speak", title: "7. Role Play", page: 22, source: "book",
          instructions: "a. Work in pairs and talk about your new place. b. Take turns being the speaker and the listener.",
          dialogue: [
            { who: "A", text: "What’s your new place?" }, { who: "B", text: "" },
            { who: "A", text: "Why do you think it would be a good idea for Kuwait?" }, { who: "B", text: "" },
            { who: "A", text: "Where is it located, and what can people do there?" }, { who: "B", text: "" },
            { who: "A", text: "What makes it fun or useful?" }, { who: "B", text: "" }
          ],
          starters: ["My place is…", "I think it’s great because…", "It’s located in…", "People can…"],
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the passage.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالنص.",
          items: [
            { t: "mcq", q: "The Scientific Centre is in Salmiya.", options: ["True", "False"], answer: 0, hint: "Paragraph 2, first sentence.", why: "“The Scientific Centre in Salmiya is one of Kuwait’s most famous landmarks.”" },
            { t: "mcq", q: "Adults can watch documentaries at the IMAX theatre.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“… adults relax at the seaside café or watch documentaries at the IMAX theatre.”" },
            { t: "mcq", q: "The Cultural Centre is the largest park in Kuwait.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "Al Shaheed Park is the largest park in Kuwait. The Cultural Centre is one of the largest museums." },
            { t: "mcq", q: "Al Shaheed Park is in Salmiya.", options: ["True", "False"], answer: 1, hint: "Paragraph 4, first sentence.", why: "“Al Shaheed Park, which is located in the heart of Kuwait City.”" },
            { t: "mcq", q: "Visitors can drink coffee inside the Cultural Centre.", options: ["True", "False"], answer: 0, hint: "Paragraph 3, last sentence.", why: "“They can also enjoy a cup of coffee at the cafés inside the centre.”" },
            { t: "mcq", q: "Al Shaheed Park hosts shows and public events.", options: ["True", "False"], answer: 0, hint: "Paragraph 4, last sentence.", why: "“… it also hosts shows and public events throughout the year.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
          items: [
            { t: "fill", q: "The Kuwait Towers are a famous ____ in Kuwait City.", answer: ["landmark"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "landmark = a building or place that is easy to recognise." },
            { t: "fill", q: "Our school ____ opened a new computer lab.", answer: ["recently"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "recently = not long ago." },
            { t: "fill", q: "The park ____ a quiet place to relax.", answer: ["provides"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "provide = give people something they need." },
            { t: "fill", q: "We saw old coins and maps at the ____.", answer: ["museum"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "A museum is a building where you can see old and interesting things." },
            { t: "fill", q: "Our teacher uses a ____ screen to show videos.", answer: ["digital"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "digital = using computer technology." },
            { t: "fill", q: "We had a ____ day at the beach.", answer: ["wonderful"], bank: ["landmark", "recently", "provides", "museum", "digital", "wonderful"], why: "wonderful = very good." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the four photos. Pairs answer a–c. Do not give the names yet.",
          "Pre-teach the 9 words (rich, wonderful, landmark, recently, digital, become, museum, locate, provide). They are bold in the passage.",
          "Read the passage paragraph by paragraph. Point out the book tip: we use the present simple to write about facts.",
          "Ex. 3: answer c (Exploring Top Places in Kuwait). Ex. 4a: row 2 = Sheikh Abdullah Al Salem Cultural Centre (learn about science, space and history / drink coffee there); row 3 = exercise, enjoy nature / visit cultural exhibitions and shows.",
          "Ex. 4b: accept any well-supported answer (the Cultural Centre or the Scientific Centre for learning; Al Shaheed Park for fun and relaxation).",
          "Ex. 5: landmark, located, provides. Ex. 6–7: groups fill in the map, then pairs do the role play with the questions and answers in the book."
        ],
        pair: ["Role play (ex. 7): A asks the four questions, B answers with the starters. Then swap.", "A says a place; B says one thing people can do there."],
        group: ["Groups design a new place for Kuwait on a poster (ex. 6 map) and present it. The class votes for the best idea."],
        quick: [
          { q: "Where is the Scientific Centre?", a: "In Salmiya." },
          { q: "Which place is the largest park in Kuwait?", a: "Al Shaheed Park." },
          { q: "What does “landmark” mean?", a: "A building or place that is easily recognised." },
          { q: "Which tense do we use to write about facts?", a: "The present simple." }
        ]
      }
    },

    /* ───────────────────────── LESSON 2 — GRAMMAR (p. 23) ───────────────────────── */
    {
      id: "u1l2", num: 2, skill: "Grammar", title: "Present Simple", pages: [23], status: "complete",
      canDo: [
        "I can apply the present simple tense accurately in spoken and written communication to form affirmative, negative, and interrogative sentences related to daily routines and activities.",
        "I can perform short interviews confidently in pairs about daily habits using appropriate questions and answers."
      ],
      goals: ["Find the verbs in a text about a daily routine.", "Use the present simple: affirmative, negative and questions.", "Use adverbs of frequency.", "Interview a partner about daily habits."],
      goalsAr: ["أجد الأفعال في نص عن الروتين اليومي.", "أستخدم المضارع البسيط في الإثبات والنفي والسؤال.", "أستخدم ظروف التكرار.", "أجري مقابلة مع زميلي عن عاداته اليومية."],
      warmup: {
        title: "Grammar in context", image: "crops/u1l2-sara.jpg", emoji: "⏰", seconds: 60, source: "extra",
        instructions: "Look at Sara. Talk with your partner.",
        prompts: ["What time do you wake up every morning?", "How do you go to school?", "What is your favourite school subject?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Present Simple", page: 23,
          steps: [
            { title: "Present Simple: when do we use it?",
              text: "We use the present simple to talk about habits, permanent situations, states, and general truths. Adverbs of Frequency: always, usually, often, sometimes, never, every day/week...",
              textAr: "نستخدم المضارع البسيط للتحدّث عن العادات والمواقف الدائمة والحالات والحقائق العامة. ظروف التكرار: always, usually, often, sometimes, never, every day/week",
              examples: ["{s:She} {v:plays} tennis {t:every weekend}.", "{s:I} {t:usually} {v:eat} fruit {t:every day}."] },
            { title: "Affirmative",
              text: "I/we/you/they + bare infinitive. he/she/it + bare infinitive +s/es.",
              textAr: "مع I/we/you/they نستخدم الفعل في صورته الأصلية، ومع he/she/it نضيف s أو es للفعل.",
              examples: ["- {s:She} {v:plays} tennis every weekend.", "- {s:I} {t:usually} {v:eat} fruit every day."] },
            { title: "Negative",
              text: "I/we/you/they + don’t + verb. he/she/it + doesn’t + verb.",
              textAr: "النفي: don’t مع I/we/you/they، و doesn’t مع he/she/it، ثم الفعل في صورته الأصلية.",
              examples: ["- {s:Children} {n:don’t} {v:play} outside when it rains.", "- {s:The café} {n:doesn’t} {v:open} at 9:00 a.m. in the morning.", "- {s:Students} {t:never} {v:arrive} late to school."] },
            { title: "Do/Does Questions",
              text: "Do + I/we/you/they + verb? Does + he/she/it + verb?",
              textAr: "السؤال: Do مع I/we/you/they، و Does مع he/she/it، ثم الفاعل ثم الفعل.",
              examples: ["- {a:Do} {s:you} {v:drink} water every day?", "- {a:Does} {s:Nora} {v:exercise} every week?"] },
            { title: "Wh Questions",
              text: "What / Where + do / does + subject + verb?",
              textAr: "أسئلة Wh: أداة الاستفهام + do / does + الفاعل + الفعل.",
              examples: ["- {q:What} {a:do} {s:you} {v:eat} for breakfast?", "- {q:Where} {a:does} {s:your father} {v:work}?"] },
            { title: "Spelling: -s, -es or -ies", source: "extra",
              text: "Most verbs: add -s (plays, makes). Verbs ending in -ch, -sh, -o, -s, -x: add -es (watches, goes). Consonant + y: y → ies (study → studies).",
              textAr: "أغلب الأفعال نضيف لها s، والأفعال المنتهية بـ ch, sh, o, s, x نضيف لها es، والمنتهية بحرف ساكن ثم y نحوّل y إلى ies.",
              examples: ["{s:My mother} {v:make}{x:s} my breakfast.", "{s:He} {v:watch}{x:es} TV.", "{s:She} {v:stud}{x:ies} English."] },
            { title: "Where do adverbs of frequency go?", source: "extra",
              text: "Adverbs of frequency usually go before the main verb (She always plays…). They go after am / is / are (He is never late). every day / every week usually go at the end.",
              textAr: "ظروف التكرار تأتي غالبًا قبل الفعل الرئيسي، وبعد am / is / are، أما every day و every week فتأتي في آخر الجملة.",
              examples: ["{s:She} {t:always} {v:plays} tennis with her friends.", "{s:He} {v:is} {t:never} late.", "{s:I} {v:read} a story {t:every week}."] }
          ],
          table: {
            head: ["", "Affirmative", "Negative", "Question"],
            rows: [
              ["I/we/you/they", "I play.", "I don’t play.", "Do you play?"],
              ["he/she/it", "She plays.", "She doesn’t play.", "Does she play?"]
            ]
          },
          worked: {
            q: "Complete: Ali ______ (not / eat) junk food during the week.",
            steps: ["Find the subject: Ali = he.", "The sentence is negative: he → doesn’t.", "After doesn’t, use the bare infinitive (no -s): eat."],
            a: "{s:Ali} {n:doesn’t} {v:eat} junk food during the week."
          },
          notes: ["The summary table is Extra Practice. It uses the rules from the book’s grammar box.", "The book also shows a frequency scale: Always, Usually, Often, Sometimes, Never."] },

        { type: "activity", title: "1. a. Read the passage and underline all the verbs.", page: 23, source: "book", stage: "guided",
          instructions: "Read the passage. Write all the other verbs you find. “is” and “live” are underlined for you.", instructionsAr: "اقرأ النص واكتب كل الأفعال الأخرى التي تجدها. الفعلان is و live محلولان.",
          image: "crops/u1l2-sara.jpg",
          items: [
            { t: "short", q: "My name [[is]] Sara. I [[live]] in Kuwait City. Every morning, I wake up at 6:00 a.m. My mother makes my breakfast, and my father drives me to school. My school starts at 7:30 a.m., and my favourite school subject is English because we play games and learn new words. After school, I go home at 2:00 p.m.\n\nWrite the other verbs.",
              model: "is, live, wake (up), makes, drives, starts, is, play, learn, go",
              keywords: [["wake"], ["makes"], ["drives"], ["starts"], ["play"], ["learn"], ["go"]],
              hint: "A verb tells us what someone does. Find 8 more: one in every part of the routine." },
            { t: "short", q: "1. b. Talk about Sara’s habits. What does she do every day?", open: true,
              model: "Sara wakes up at 6:00 a.m. Her mother makes her breakfast, and her father drives her to school. She goes home at 2:00 p.m.",
              hint: "Use she: Sara wakes up… / She goes…" }
          ] },

        { type: "activity", title: "2. Fill in the blanks with the correct form of the verbs in brackets using the present simple.", page: 23, source: "book", stage: "guided",
          instructions: "Fill in the blanks with the correct form of the verbs in brackets using the present simple.", instructionsAr: "املأ الفراغات بالصيغة الصحيحة للأفعال بين القوسين باستخدام المضارع البسيط.",
          items: [
            { t: "fill", q: "a. She always ____ (play) tennis with her friends at the sports club.", answer: ["plays"], hint: "She = he/she/it.", why: "he/she/it + bare infinitive + s: plays." },
            { t: "fill", q: "b. They usually ____ (study) science together in the school library after class.", answer: ["study"], hint: "They = I/we/you/they.", why: "They + bare infinitive (no -s): study." },
            { t: "fill", q: "c. Ali ____ (not / eat) junk food during the week because he prefers healthy meals.", answer: ["doesn’t eat", "does not eat"], hint: "Ali = he. Negative.", why: "he + doesn’t + verb: doesn’t eat." },
            { t: "fill", q: "d. Dalia ____ (never / use) her phone during lessons because her teacher is very strict.", answer: ["never uses"], hint: "never goes before the verb. Dalia = she.", why: "never + verb + s (she): never uses." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the correct form", source: "extra", stage: "guided",
          instructions: "Look at the subject first. Then choose the correct word.", instructionsAr: "انظر إلى الفاعل أولًا ثم اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "My father ____ me to school.", options: ["drive", "drives"], answer: 1, hint: "My father = he.", why: "he + verb + s: drives." },
            { t: "choose", q: "We ____ games and learn new words.", options: ["play", "plays"], answer: 0, hint: "The subject is we.", why: "we + bare infinitive: play." },
            { t: "choose", q: "Sara ____ up at 6:00 a.m.", options: ["wake", "wakes"], answer: 1, hint: "Sara = she.", why: "she + verb + s: wakes." },
            { t: "choose", q: "My brother ____ English every evening.", options: ["studys", "studies"], answer: 1, hint: "Consonant + y.", why: "study → studies (y → ies)." },
            { t: "choose", q: "Children ____ play outside when it rains.", options: ["don’t", "doesn’t"], answer: 0, hint: "Children = they.", why: "they + don’t + verb." },
            { t: "choose", q: "____ Nora exercise every week?", options: ["Do", "Does"], answer: 1, hint: "Nora = she.", why: "Does + he/she/it + verb?" },
            { t: "choose", q: "Where ____ your father work?", options: ["do", "does"], answer: 1, hint: "your father = he.", why: "Wh + does + he/she/it + verb?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "⏰ Make a sentence.", words: ["I", "always", "do", "my", "homework."], answer: ["I always do my homework."], hint: "The adverb goes before the verb.", why: "Subject + adverb of frequency + verb." },
            { t: "order", q: "🏫 Make a negative sentence.", words: ["Students", "never", "arrive", "late", "to", "school."], answer: ["Students never arrive late to school."], hint: "never goes before the verb.", why: "Subject + never + verb." },
            { t: "order", q: "🥣 Make a question.", words: ["What", "do", "you", "eat", "for", "breakfast?"], answer: ["What do you eat for breakfast?"], hint: "Wh + do + subject + verb?", why: "What + do + you + eat …?" },
            { t: "order", q: "💧 Make a question.", words: ["Does", "your", "sister", "drink", "water", "every", "day?"], answer: ["Does your sister drink water every day?"], hint: "Does + subject + verb?", why: "Does + your sister + drink …?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "يوجد خطأ واحد. اكتب الكلمة الصحيحة.",
          items: [
            { t: "fix", q: "She {go} to school at 7:00 a.m.", answer: ["goes"], hint: "she + verb + es.", why: "go → goes." },
            { t: "fix", q: "My mother doesn’t {makes} breakfast on Fridays.", answer: ["make"], hint: "What comes after doesn’t?", why: "doesn’t + bare infinitive: make." },
            { t: "fix", q: "{Does} you drink water every day?", answer: ["Do"], hint: "The subject is you.", why: "Do + you + verb?" },
            { t: "fix", q: "Ali {watchs} TV in the evening.", answer: ["watches"], hint: "watch ends in -ch.", why: "watch → watches." },
            { t: "short", q: "Write one sentence about your own routine with “usually”.", open: true, model: "I usually wake up at 6:30 a.m.", hint: "I + usually + verb …" }
          ] },

        { type: "speak", title: "3. a. Interview your partner. Take turns to ask the following questions:", page: 23, source: "book",
          image: "crops/u1l2-interview.jpg",
          instructions: "Interview your partner. Take turns to ask the following questions.",
          dialogue: [
            { who: "A", text: "What time do you usually wake up?" }, { who: "B", text: "" },
            { who: "A", text: "Do you eat breakfast every morning?" }, { who: "B", text: "" },
            { who: "A", text: "What subjects do you like at school?" }, { who: "B", text: "" },
            { who: "A", text: "What does your father do?" }, { who: "B", text: "" }
          ],
          starters: ["I usually wake up at …", "Yes, I do. / No, I don’t.", "I like … and …", "My father is a … He works in …", "Always / Usually / Often / Sometimes / Never"],
          record: true },

        { type: "write", title: "3. b. Write four sentences in your notebook about your partner’s daily routine.", page: 23, source: "book",
          instructions: "Write four sentences about your partner’s daily routine. Use his answers from the interview.",
          wordBank: ["always", "usually", "often", "sometimes", "never", "every day"],
          frame: [
            { label: "1.", hint: "My partner usually wakes up at …" },
            { label: "2.", hint: "He eats / doesn’t eat breakfast …" },
            { label: "3.", hint: "He likes …" },
            { label: "4.", hint: "His father …" }
          ],
          model: "My partner usually wakes up at 6:00 a.m.\nHe always eats breakfast with his family.\nHe likes English and science.\nHis father works in a hospital.",
          modelFromBook: false,
          checklist: ["I added -s or -es to the verb after he / she.", "I used an adverb of frequency.", "I started each sentence with a capital letter and ended it with a full stop."],
          minWords: 20 }
      ],
      game: { kind: "quiz", title: "Present Simple Race", items: [
        { t: "choose", q: "My school ____ at 7:30 a.m.", options: ["start", "starts"], answer: 1, why: "My school = it → starts." },
        { t: "choose", q: "They ____ science in the library.", options: ["study", "studies"], answer: 0, why: "they → study." },
        { t: "choose", q: "The café ____ open at 9:00 a.m.", options: ["don’t", "doesn’t"], answer: 1, why: "The café = it → doesn’t." },
        { t: "choose", q: "____ you drink water every day?", options: ["Do", "Does"], answer: 0, why: "you → Do." },
        { t: "choose", q: "She ____ uses her phone during lessons.", options: ["never", "don’t"], answer: 0, why: "never + verb-s." },
        { t: "choose", q: "Where ____ your father work?", options: ["do", "does"], answer: 1, why: "your father = he → does." }
      ] },
      teacher: {
        notes: [
          "Ex. 1a: students read about Sara and find the verbs. Answers: is, live (examples), wake (up), makes, drives, starts, is, play, learn, go.",
          "Ex. 1b: students retell Sara’s day with she (Sara wakes up… her father drives her…). Point out the -s.",
          "Present the grammar box: affirmative, negative, Do/Does questions and Wh questions. Use the frequency scale (always → never).",
          "Ex. 2 answers: a. plays  b. study  c. doesn’t eat  d. never uses.",
          "Ex. 3: pairs interview each other with the four questions, then write four sentences about the partner (he/she + verb-s)."
        ],
        pair: ["Interview (ex. 3a): A asks, B answers; then swap.", "Partner check: swap the four sentences and check the -s after he / she."],
        group: ["Routine chain: each student says one sentence about a classmate with an adverb of frequency."],
        quick: [
          { q: "Complete: She always ___ (play) tennis.", a: "plays" },
          { q: "Make it negative: Ali eats junk food.", a: "Ali doesn’t eat junk food." },
          { q: "Make a question: Nora exercises every week.", a: "Does Nora exercise every week?" },
          { q: "Where does “never” go? (Dalia / never / use / her phone)", a: "Before the verb: Dalia never uses her phone." }
        ]
      }
    },

    /* ───────────────────────── LESSON 3 — LISTENING (p. 24) ───────────────────────── */
    {
      id: "u1l3", num: 3, skill: "Listening", title: "Life in Old Kuwait and Today", pages: [24], status: "complete",
      canDo: [
        "I can determine the main idea and both explicit and implicit details from a spoken text about life in Kuwait, then and now.",
        "I can appreciate others’ ideas by listening attentively and responding respectfully in discussions about past and present lifestyles"
      ],
      goals: ["Talk about free time and life in old Kuwait.", "Listen for the main idea.", "Complete a table: in the past and nowadays.", "Write three sentences about my daily life."],
      goalsAr: ["أتحدّث عن وقت الفراغ والحياة في الكويت قديمًا.", "أستمع لأحدّد الفكرة الرئيسية.", "أكمل جدولًا عن الماضي والحاضر.", "أكتب ثلاث جمل عن حياتي اليومية."],
      warmup: {
        title: "Think, Pair, Share", image: null, emoji: "🏠", seconds: 90,
        instructions: "1. Think, Pair, Share",
        prompts: ["a. How do you spend your free time with your family?", "b. What do you think life was like for children in old Kuwait?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to the text. Then, complete the tasks that follow.", page: 24, source: "book", needsAudio: true,
          instructions: "a. The text was mainly about:",
          items: [
            { t: "mcq", keyed: true, q: "a. The text was mainly about:", options: ["popular video games.", "traditional Kuwaiti food and clothing.", "the weather in Kuwait during summer and winter.", "how life in Kuwait has changed from the past to today."], answer: 3,
              hint: "Look at the lesson title: Life in Old Kuwait and Today.", why: "The text compares life in the past with life nowadays." }
          ] },

        { type: "listen", title: "2. b. Complete the table to compare life in the past with life nowadays.", page: 24, source: "book", needsAudio: true,
          instructions: "Complete the table to compare life in the past with life nowadays.",
          items: [
            { t: "table", keyed: true, open: true, q: "Complete the table.",
              head: ["Item", "In the Past", "Nowadays"],
              rows: [
                ["Houses", { model: "Small houses of mud or stone" }, { model: "Modern houses or apartments" }],
                ["Family Gatherings", { model: "Sat outside, visited and told stories" }, { model: "Malls, restaurants and cinemas" }],
                ["Children’s Games", { model: "Tag, marbles and skipping rope" }, { model: "Video games, TV and smartphones" }]
              ] }
          ] },

        { type: "listen", title: "2. c. Listen to the text again and answer the following questions.", page: 24, source: "book", needsAudio: true,
          instructions: "Listen to the text again and answer the following questions.",
          items: [
            { t: "short", keyed: true, open: true, q: "1. How is life now different from life in the old days?", model: "It is more modern and comfortable." },
            { t: "short", keyed: true, open: true, q: "2. Why did people sit outside in the evenings in the past?", model: "There were no air conditioners." },
            { t: "short", keyed: true, open: true, q: "3. Do you think children in the past had more fun than today? Why?", model: "Yes, they played outside.", hint: "Give your opinion and one reason. Yes, because … / No, because …" }
          ] },

        { type: "write", title: "3. A Day in My Life", page: 24, source: "book",
          instructions: "Write three sentences about your daily life in Kuwait. Talk about your routine, how your family spends time together and what you usually do for fun.",
          wordBank: ["always", "usually", "sometimes", "often", "every day", "on weekends"],
          frame: [
            { label: "1. My routine", hint: "I usually wake up at … and …" },
            { label: "2. My family time", hint: "On weekends, my family always …" },
            { label: "3. Fun", hint: "I often … with my friends …" }
          ],
          model: "I usually wake up at six and go to school. On weekends, my family always visits my grandparents. I often play football with my friends in the park.",
          modelFromBook: false,
          bookChecklist: ["Use present simple tense.", "Mention a place you often go to or one thing you enjoy doing.", "Use adverbs of frequency: always, usually, sometimes...", "Use time expressions: every day, on weekends…"],
          bookNote: "Writing Tips from the book.",
          minWords: 25 },

        { type: "activity", title: "Extra Practice: In the past or nowadays?", source: "extra", stage: "guided",
          instructions: "Read each phrase. Is it about life in the past or life nowadays?", instructionsAr: "هل العبارة عن الحياة في الماضي أم في الوقت الحاضر؟",
          items: [
            { t: "mcq", q: "Children played with marbles and skipping ropes.", options: ["In the past", "Nowadays"], answer: 0, why: "Marbles and skipping rope were traditional games." },
            { t: "mcq", q: "Families meet in malls, restaurants and cinemas.", options: ["In the past", "Nowadays"], answer: 1, why: "Malls and cinemas are part of modern life." },
            { t: "mcq", q: "People lived in small houses of mud or stone.", options: ["In the past", "Nowadays"], answer: 0, why: "Old Kuwaiti houses were made of mud or stone." },
            { t: "mcq", q: "Children play video games on smartphones.", options: ["In the past", "Nowadays"], answer: 1, why: "Smartphones are modern." },
            { t: "mcq", q: "People sat outside in the evenings because there were no air conditioners.", options: ["In the past", "Nowadays"], answer: 0, why: "Air conditioners came later." }
          ] }
      ],
      game: { kind: "sort", title: "Then or Now?",
        buckets: ["In the past 🐪", "Nowadays 📱"],
        cards: [["mud houses", 0], ["marbles", 0], ["skipping rope", 0], ["telling stories outside", 0], ["apartments", 1], ["cinemas", 1], ["video games", 1], ["smartphones", 1]] },
      teacher: {
        notes: [
          "Think, Pair, Share (ex. 1): students think alone, talk in pairs, then share with the class.",
          "The recording is not in this app: play it from the book (QR code on page 24).",
          "Ex. 2a answer: 4 (how life in Kuwait has changed from the past to today).",
          "Ex. 2b answers: Houses: small houses of mud or stone / modern houses or apartments. Family gatherings: sat outside, visited and told stories / malls, restaurants and cinemas. Children’s games: tag, marbles and skipping rope / video games, TV and smartphones.",
          "Ex. 2c answers: 1. It is more modern and comfortable. 2. There were no air conditioners. 3. Open answer (e.g. Yes, they played outside).",
          "Ex. 3: go through the Writing Tips first. The model is one possible answer."
        ],
        pair: ["A says something from the past (We played marbles); B says the modern version (Now children play video games).", "Partners check each other’s three sentences with the Writing Tips."],
        group: ["Groups make a two-column poster: In the Past / Nowadays (houses, gatherings, games)."],
        quick: [
          { q: "What was the text mainly about?", a: "How life in Kuwait has changed from the past to today." },
          { q: "What were old houses made of?", a: "Mud or stone." },
          { q: "Name one children’s game from the past.", a: "Tag / marbles / skipping rope." },
          { q: "Why did people sit outside in the evenings?", a: "There were no air conditioners." }
        ]
      }
    },

    /* ───────────────────────── LESSON 4 — SPEAKING (p. 25) ───────────────────────── */
    {
      id: "u1l4", num: 4, skill: "Speaking", title: "A Journey Through Time in Kuwait", pages: [25], status: "complete",
      canDo: [
        "I can organise ideas appropriately from short discussions about Kuwait into structured points to support a clear argument.",
        "I can participate actively in spoken communication by presenting and responding to ideas in a debate about life in the past and nowadays.",
        "I can respect others’ ideas by listening attentively and responding politely during a debate."
      ],
      goals: ["Compare life in old Kuwait and Kuwait today.", "Give reasons for my side in a class debate.", "Give my opinion and disagree politely."],
      goalsAr: ["أقارن الحياة في الكويت قديمًا وحديثًا.", "أذكر أسبابًا تدعم رأي فريقي في مناظرة صفّية.", "أعبّر عن رأيي وأختلف مع الآخرين بأدب."],
      warmup: {
        title: "A Journey Through Time in Kuwait", image: "crops/u1l4-then-now.jpg", emoji: "⏳", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["a. What do you know about life in old Kuwait?", "b. What do you enjoy about life in Kuwait today?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "2. Think about how life has changed. Then, complete the table.", page: 25, source: "book",
          instructions: "Think about how life has changed. Then, complete the table.", instructionsAr: "فكّر كيف تغيّرت الحياة، ثم أكمل الجدول.",
          image: "crops/u1l4-then-now.jpg",
          items: [
            { t: "table", open: true, q: "Complete the table.",
              head: ["Item", "In the Past", "Nowadays"],
              rows: [
                ["Entertainment", { model: "Storytelling and outdoor games" }, { model: "Video games, malls and cinemas" }],
                ["Education", { model: "Al-Katateeb (simple schools)" }, { model: "Modern schools and online lessons" }],
                ["Transportation", { model: "Camels and wooden boats" }, { model: "Cars, buses and planes" }]
              ] }
          ] },

        { type: "speak", title: "3. Class Debate", page: 25, source: "book",
          instructions: "a. Choose your side. Group A: I’d rather live in old Kuwait. Group B: I’d rather live in modern Kuwait.",
          steps: ["Each group will:", "1. discuss and write three main reasons to support their side.", "2. choose two speakers to represent the group.", "3. choose one note-taker to write key points."],
          dialogue: [
            { who: "A", text: "In my opinion, life in old Kuwait was better because families spent more time together." },
            { who: "B", text: "" }
          ],
          starters: ["To support your opinion:", "In my opinion,", "I believe that…", "From my point of view…", "Personally, I think…", "To disagree respectfully:", "I respect your opinion, but…", "I see your point, however…", "That may be true, but let me explain…", "Can you explain more about…?"],
          note: "Tips: Listen carefully to your classmates. Respond politely. Use appropriate expressions. When presenting, look at your classmates and smile.",
          record: true },

        { type: "write", title: "3. a. Each group will discuss and write three main reasons to support their side.", page: 25, source: "book",
          instructions: "Choose your side (Group A or Group B). Write three main reasons. b. Use the following language expressions to support your discussion.",
          wordBankLabel: "Language to Use (Expressions)",
          wordBank: ["In my opinion", "I believe that", "From my point of view", "Personally, I think", "I respect your opinion, but", "I see your point, however", "That may be true, but let me explain"],
          frame: [
            { label: "My side", hint: "Group A: I’d rather live in old Kuwait. / Group B: I’d rather live in modern Kuwait." },
            { label: "Reason 1", hint: "In my opinion, …" },
            { label: "Reason 2", hint: "I believe that …" },
            { label: "Reason 3", hint: "Personally, I think …" }
          ],
          model: "My side: Group B: I’d rather live in modern Kuwait.\nReason 1: In my opinion, modern houses are more comfortable because they have air conditioning.\nReason 2: I believe that modern schools and online lessons help us learn more.\nReason 3: Personally, I think cars and planes make travelling easy and fast.",
          modelFromBook: false,
          checklist: ["I wrote three reasons.", "I used an expression to give my opinion.", "My reasons are about entertainment, education, transportation or houses."],
          minWords: 25 },

        { type: "activity", title: "3. c. What did you learn from the other group’s points?", page: 25, source: "book",
          instructions: "What did you learn from the other group’s points?", instructionsAr: "ماذا تعلّمت من نقاط المجموعة الأخرى؟",
          items: [
            { t: "short", open: true, q: "c. What did you learn from the other group’s points?", model: "Both times have good points.", hint: "I learned that … / I see their point: …" }
          ] },

        { type: "activity", title: "Extra Practice: Support or disagree?", source: "extra", stage: "guided",
          instructions: "Read the expression. Is it for supporting your opinion or for disagreeing respectfully?", instructionsAr: "هل العبارة لدعم رأيك أم للاختلاف بأدب؟",
          items: [
            { t: "mcq", q: "From my point of view…", options: ["To support your opinion", "To disagree respectfully"], answer: 0, why: "It introduces your own opinion." },
            { t: "mcq", q: "I see your point, however…", options: ["To support your opinion", "To disagree respectfully"], answer: 1, why: "It accepts the other idea, then gives a different one." },
            { t: "mcq", q: "Personally, I think…", options: ["To support your opinion", "To disagree respectfully"], answer: 0, why: "It gives your personal opinion." },
            { t: "mcq", q: "That may be true, but let me explain…", options: ["To support your opinion", "To disagree respectfully"], answer: 1, why: "It disagrees politely." },
            { t: "mcq", q: "Which answer is polite in a debate?", options: ["You are wrong!", "I respect your opinion, but I think modern life is easier.", "That’s a silly idea."], answer: 1, why: "We respect others’ ideas and respond politely." }
          ] }
      ],
      game: { kind: "sort", title: "Support or Disagree?",
        buckets: ["To support your opinion 👍", "To disagree respectfully 🤝"],
        cards: [["In my opinion,", 0], ["I believe that…", 0], ["From my point of view…", 0], ["Personally, I think…", 0], ["I respect your opinion, but…", 1], ["I see your point, however…", 1], ["That may be true, but let me explain…", 1], ["Can you explain more about…?", 1]] },
      teacher: {
        notes: [
          "Ex. 1: discuss with the picture (in the past / nowadays).",
          "Ex. 2 (sample answers): Entertainment: storytelling and outdoor games / video games, malls and cinemas. Education: Al-Katateeb (simple schools) / modern schools and online lessons. Transportation: camels and wooden boats / cars, buses and planes.",
          "Ex. 3: split the class into Group A (old Kuwait) and Group B (modern Kuwait). Each group writes three reasons, chooses two speakers and one note-taker.",
          "Teach the expressions in the book’s table before the debate, and the tips (listen, respond politely, look at your classmates and smile).",
          "Ex. 3c: open answer (sample: Both times have good points)."
        ],
        pair: ["Practise in pairs first: A gives an opinion with “In my opinion,…”; B disagrees with “I see your point, however…”."],
        group: ["Class debate: Group A vs Group B; the note-takers report the key points at the end."],
        quick: [
          { q: "Give one expression to support your opinion.", a: "In my opinion, / I believe that… / From my point of view… / Personally, I think…" },
          { q: "Give one expression to disagree respectfully.", a: "I respect your opinion, but… / I see your point, however…" },
          { q: "How did people travel in the past?", a: "By camels and wooden boats." },
          { q: "What were Al-Katateeb?", a: "Simple schools in old Kuwait." }
        ]
      }
    },

    /* ───────────────────────── LESSON 5 — READING (pp. 26–27) ───────────────────────── */
    {
      id: "u1l5", num: 5, skill: "Reading", title: "Smart Apps for Smart Living", pages: [26, 27], status: "complete",
      canDo: [
        "I can interpret the main idea and both explicit and implicit details in a written text about social media and online communication.",
        "I can infer the meaning of new vocabulary from a written text about social media and online communication to use them in meaningful contexts."
      ],
      goals: ["Read a blog about social media in Kuwait.", "Learn 11 new words.", "Match headings with paragraphs.", "Write advice about staying safe on social media."],
      goalsAr: ["أقرأ مدوّنة عن وسائل التواصل الاجتماعي في الكويت.", "أتعلّم 11 كلمة جديدة.", "أطابق العناوين مع الفقرات.", "أكتب نصائح للأمان على وسائل التواصل."],
      warmup: {
        title: "Before You Read", image: null, emoji: "📱", seconds: 90,
        instructions: "1. Think about the following questions.",
        prompts: ["a. How did people communicate in Kuwait 70 years ago? What about now?", "b. What are the most popular social media apps in Kuwait today?"]
      },
      vocab: [
        { w: "receive", pos: "verb", emoji: "📩", def: "to get something that someone sends or gives you", ex: "They received news from the radio, TV, or newspapers.", exFromBook: true, ar: "يستلم / يتلقّى" },
        { w: "nowadays", pos: "adverb", emoji: "📅", def: "at the present time; these days", ex: "Nowadays, people in Kuwait are using social media apps almost all the time.", exFromBook: true, ar: "في هذه الأيام" },
        { w: "social", pos: "adjective", emoji: "👥", def: "about people and spending time with other people", ex: "Nowadays, people in Kuwait are using social media apps almost all the time.", exFromBook: true, ar: "اجتماعيّ" },
        { w: "almost", pos: "adverb", emoji: "🤏", def: "nearly; not completely", ex: "Nowadays, people in Kuwait are using social media apps almost all the time.", exFromBook: true, ar: "تقريبًا" },
        { w: "fond", pos: "adjective", emoji: "❤️", def: "(fond of) liking something very much", ex: "They are particularly fond of some apps, such as Instagram and Snapchat.", exFromBook: true, ar: "مولع بـ / محبّ لـ" },
        { w: "communicate", pos: "verb", emoji: "💬", def: "to share ideas and information with other people", ex: "In fact, some people, especially teenagers, communicate more online than they do face-to-face.", exFromBook: true, ar: "يتواصل" },
        { w: "deliver", pos: "verb", emoji: "🚚", def: "to take things to a person’s house or place", ex: "These products are often delivered to their houses within a few hours.", exFromBook: true, ar: "يوصّل (الطلبات)" },
        { w: "convenient", pos: "adjective", emoji: "👌", def: "easy and useful for you", ex: "This method is both convenient and helpful.", exFromBook: true, ar: "مريح / مناسب" },
        { w: "previously", pos: "adverb", emoji: "⏪", def: "before; in the past", ex: "Previously, they relied on textbooks and wrote everything by hand.", exFromBook: true, ar: "سابقًا" },
        { w: "instant", pos: "adjective", emoji: "⚡", def: "happening immediately, with no waiting", ex: "Today, social media gives us instant access to search for educational videos, articles, and tips.", exFromBook: true, ar: "فوريّ" },
        { w: "tutorial", pos: "noun", emoji: "🎓", def: "a lesson or video that shows you how to do something", ex: "Platforms like YouTube and Instagram often share tutorials, language lessons, and science lessons.", exFromBook: true, ar: "درس تعليميّ (شرح)" }
      ],
      sections: [
        { type: "reading", title: "“Smart Apps for Smart Living”", page: 26,
          instructions: "2. Read the blog and do the tasks that follow.",
          speaker: "www.aliblog.com · Ali Ahmad, Kuwait",
          paras: [
            "In the past, life in Kuwait was quite different. People spent time with friends and family at home, in parks, or at the mall. Teenagers often played outside or read books. To contact someone, they would use a landline phone or write a letter. They received news from the radio, TV, or newspapers.",
            "Nowadays, people in Kuwait are using social media apps almost all the time. They are particularly fond of some apps, such as Instagram and Snapchat. They are using these apps to send messages, record voice notes, and share photos of special memories. In fact, some people, especially teenagers, communicate more online than they do face-to-face.",
            "In addition, shopping habits have also changed with the use of social media. In the past, families would visit the market or a shopping mall. Nowadays, many people use online apps to order food, clothes, and other items. These products are often delivered to their houses within a few hours. This method is both convenient and helpful.",
            "Students also use social media to learn in different ways. Previously, they relied on textbooks and wrote everything by hand. Today, social media gives us instant access to [[search]] for educational videos, articles, and tips. Platforms like YouTube and Instagram often share tutorials, language lessons, and science lessons. Students find learning with technology more enjoyable and effective."
          ],
          note: "Text type: Expository (a blog). The underlined word “search” is for exercise 6. Book tip: “previously” is a linking word that shows time and helps connect ideas. Example: Previously, they relied on textbooks, etc." },

        { type: "activity", title: "3. Write the paragraph number (1–4) next to each heading.", page: 26, source: "book",
          instructions: "Write the paragraph number (1–4) next to each heading.", instructionsAr: "اكتب رقم الفقرة (1–4) بجانب كل عنوان.",
          items: [
            { t: "fill", q: "____ Popular Apps in Kuwait", answer: ["2"], hint: "Which paragraph names Instagram and Snapchat?", why: "Paragraph 2: “They are particularly fond of some apps, such as Instagram and Snapchat.”" },
            { t: "fill", q: "____ Kuwait in the Past", answer: ["1"], hint: "Which paragraph starts with “In the past”?", why: "Paragraph 1: “In the past, life in Kuwait was quite different.”" },
            { t: "fill", q: "____ Learning Online", answer: ["4"], hint: "Which paragraph is about students?", why: "Paragraph 4: “Students also use social media to learn in different ways.”" },
            { t: "fill", q: "____ Shopping Online", answer: ["3"], hint: "Which paragraph is about shopping habits?", why: "Paragraph 3: “… shopping habits have also changed with the use of social media.”" }
          ] },

        { type: "activity", title: "4. How have the following aspects of life changed over time? Complete the table and record your preferences along with a reason.", page: 27, source: "book",
          instructions: "Complete the table and record your preferences along with a reason. The first row is done for you.", instructionsAr: "أكمل الجدول واكتب ما تفضّله مع ذكر السبب. الصف الأول محلول.",
          items: [
            { t: "table", open: true, q: "Complete the table.",
              head: ["Life Aspects", "In the Past", "Nowadays", "My Preference / Why?"],
              rows: [
                ["Communication", "Landline phone", "Social media apps", "Social media / fast & easy"],
                ["Shopping", { model: "Visited the market or mall" }, { model: "Online shopping apps" }, { model: "Online / convenient" }],
                ["Learning", { model: "Textbooks, wrote by hand" }, { model: "Videos and tutorials" }, { model: "Online / more enjoyable" }]
              ] }
          ] },

        { type: "activity", title: "5. Answer the following questions.", page: 27, source: "book",
          instructions: "Answer the following questions.", instructionsAr: "أجب عن الأسئلة التالية.",
          items: [
            { t: "short", open: true, q: "a. What are the possible advantages and disadvantages of using social media for learning?", model: "Learning is fun and easy, but it can waste time.", hint: "One advantage: … One disadvantage: …" },
            { t: "short", open: true, q: "b. How does social media affect your social life?", model: "I talk to friends more, but meet them less.", hint: "I … more, but …" }
          ] },

        { type: "activity", title: "6. Look at the dictionary entry and do the following tasks.", page: 27, source: "book",
          instructions: "Dictionary entry: search /sɜ:ʧ/ — Noun: • an attempt to find someone or something by looking carefully. Verb: • to look carefully for someone or something.",
          instructionsAr: "اقرأ مدخل القاموس لكلمة search، ثم نفّذ المهام.",
          items: [
            { t: "mcq", q: "a. The word “search’ in the 4th paragraph is used as:", options: ["an adverb", "a noun", "a verb"], answer: 2,
              hint: "Read the sentence: “… instant access to search for educational videos …”. to + ?",
              why: "“to search for educational videos” = to look carefully for something. It comes after “to”, so it is a verb." },
            { t: "short", open: true, q: "b. Use the word “search” in a sentence of your own.", model: "I search for information about Kuwait on the internet.", hint: "I search for … on the internet." }
          ] },

        { type: "activity", title: "7. For each word in the table, choose one synonym and one antonym from the box below. Then write a sentence with the word.", page: 27, source: "book",
          instructions: "Synonyms: comfortable, enjoyed, earlier. Antonyms: disliked, now, hard. Some answers are done for you.",
          instructionsAr: "اختر لكل كلمة مرادفًا وضدًّا من الصندوق، ثم اكتب جملة بالكلمة. بعض الإجابات محلولة.",
          items: [
            { t: "table", q: "Choose one synonym and one antonym. Then write a sentence.",
              head: ["Word", "Synonym", "Antonym", "Sentence"],
              rows: [
                ["convenient", "comfortable", { answer: ["hard"], model: "hard" }, { model: "Online shopping is convenient." }],
                ["previously", { answer: ["earlier"], model: "earlier" }, "now", { model: "Previously, people wrote letters." }],
                ["fond of", { answer: ["enjoyed"], model: "enjoyed" }, { answer: ["disliked"], model: "disliked" }, "We’re fond of camping."]
              ],
              hint: "Synonym = the same meaning. Antonym = the opposite meaning. Each word in the box is used once.",
              why: "convenient ≠ hard; previously = earlier; fond of = enjoyed, ≠ disliked.",
              note: "Only the synonyms and antonyms are checked. Your sentences are your own." }
          ] },

        { type: "write", title: "8. Staying Safe on Social Media", page: 27, source: "book",
          instructions: "Write three sentences to give warnings and advice about the use of social media. You can use the hint and sentence starters. Hint: Think of a problem: (less family time, cyberbullying, fake news, etc.",
          wordBankLabel: "Sentence Starters (from the book)",
          wordBank: ["Be careful", "Watch out for", "Don’t forget to", "You should never", "Avoid"],
          frame: [
            { label: "1.", hint: "Be careful …" },
            { label: "2.", hint: "You should never …" },
            { label: "3.", hint: "Don’t forget to …" }
          ],
          model: "Be careful with fake news and always check the source.\nYou should never share your password with anyone.\nDon’t forget to spend time with your family.",
          modelFromBook: false,
          checklist: ["I wrote three sentences.", "Each sentence gives a warning or advice.", "I used a sentence starter."],
          minWords: 18 },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the blog.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالمدوّنة.",
          items: [
            { t: "mcq", q: "In the past, teenagers often played outside or read books.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“Teenagers often played outside or read books.”" },
            { t: "mcq", q: "In the past, people received news from social media.", options: ["True", "False"], answer: 1, hint: "Paragraph 1, last sentence.", why: "They received news from the radio, TV, or newspapers." },
            { t: "mcq", q: "Some teenagers communicate more online than face-to-face.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“… some people, especially teenagers, communicate more online than they do face-to-face.”" },
            { t: "mcq", q: "Online orders often arrive after a few weeks.", options: ["True", "False"], answer: 1, hint: "Paragraph 3.", why: "“These products are often delivered to their houses within a few hours.”" },
            { t: "mcq", q: "Previously, students relied on textbooks.", options: ["True", "False"], answer: 0, hint: "Paragraph 4.", why: "“Previously, they relied on textbooks and wrote everything by hand.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
          items: [
            { t: "fill", q: "I watched a ____ on YouTube to learn how to draw.", answer: ["tutorial"], bank: ["tutorial", "convenient", "deliver", "communicate", "instant"], why: "A tutorial shows you how to do something." },
            { t: "fill", q: "Online shopping is ____ because you can buy things from home.", answer: ["convenient"], bank: ["tutorial", "convenient", "deliver", "communicate", "instant"], why: "convenient = easy and useful for you." },
            { t: "fill", q: "The shop will ____ the new phone to our house tomorrow.", answer: ["deliver"], bank: ["tutorial", "convenient", "deliver", "communicate", "instant"], why: "deliver = take things to someone’s house." },
            { t: "fill", q: "We ____ with our cousins by video calls.", answer: ["communicate"], bank: ["tutorial", "convenient", "deliver", "communicate", "instant"], why: "communicate = share ideas and news with people." },
            { t: "fill", q: "Text messages are ____: they arrive in one second.", answer: ["instant"], bank: ["tutorial", "convenient", "deliver", "communicate", "instant"], why: "instant = with no waiting." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): think, then share. Collect old and new ways to communicate on the board.",
          "Pre-teach the 11 words (receive, nowadays, social, almost, fond, communicate, deliver, convenient, previously, instant, tutorial).",
          "Ex. 3 answers: Popular Apps in Kuwait = 2; Kuwait in the Past = 1; Learning Online = 4; Shopping Online = 3.",
          "Ex. 4 (sample): Shopping: visited the market or mall / online shopping apps / online, convenient. Learning: textbooks, wrote by hand / videos and tutorials / online, more enjoyable. Preferences are personal.",
          "Ex. 6a: a verb (to search for = to look carefully for). Ex. 7: convenient → hard; previously → earlier; fond of → enjoyed / disliked.",
          "Ex. 8: brainstorm problems (less family time, cyberbullying, fake news) before writing."
        ],
        pair: ["A reads a heading; B finds the paragraph and reads the key sentence.", "Partners compare their preferences in ex. 4 and give a reason."],
        group: ["Groups make a “Stay Safe Online” poster with three warnings and three pieces of advice."],
        quick: [
          { q: "How did people receive news in the past?", a: "From the radio, TV, or newspapers." },
          { q: "Which apps are people in Kuwait fond of?", a: "Instagram and Snapchat." },
          { q: "What is a synonym of “previously”?", a: "Earlier." },
          { q: "Is “search” in paragraph 4 a noun or a verb?", a: "A verb." }
        ]
      }
    },

    /* ───────────────────────── LESSON 6 — GRAMMAR (p. 28) ───────────────────────── */
    {
      id: "u1l6", num: 6, skill: "Grammar", title: "Present Continuous", pages: [28], status: "complete",
      canDo: [
        "I can apply the present continuous tense accurately in spoken and written communication to form affirmative, negative, and interrogative sentences about current actions and ongoing activities.",
        "I can perform a short spoken description of a live situation confidently about activities in Kuwait using appropriate expressions."
      ],
      goals: ["Describe what people are doing now.", "Use am / is / are + verb-ing.", "Make negatives and questions.", "Give a live report from Al-Shaheed Park."],
      goalsAr: ["أصف ما يفعله الناس الآن.", "أستخدم am / is / are مع الفعل + ing.", "أكوّن النفي والسؤال.", "أقدّم تقريرًا مباشرًا من حديقة الشهيد."],
      warmup: {
        title: "Look at the pictures", image: "crops/u1l6-devices.jpg", emoji: "📱", seconds: 60,
        instructions: "1. Look at the pictures and answer the questions.",
        prompts: ["What is the boy doing?", "What are the girls doing right now?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Present Continuous", page: 28,
          steps: [
            { title: "Present Continuous: when do we use it?",
              text: "We use it to talk about actions that are happening now. Time Expressions: now, at the moment...",
              textAr: "نستخدم المضارع المستمر للتحدّث عن أفعال تحدث الآن. كلمات دالة: now, at the moment",
              examples: ["{s:He} {a:is} {v:eating} {t:now}.", "{s:They} {a:are} {v:playing} {t:at the moment}."] },
            { title: "Affirmative Sentences",
              text: "am / is / are + verb-ing.",
              textAr: "الإثبات: am / is / are + الفعل مع ing.",
              examples: ["{s:I} {a:am} {v:doing} my homework.", "{s:He} {a:is} {v:eating} {t:now}.", "{s:They} {a:are} {v:playing} {t:at the moment}."] },
            { title: "Negative Sentences",
              text: "am not / isn’t / aren’t + verb-ing.",
              textAr: "النفي: am not / isn’t / aren’t + الفعل مع ing.",
              examples: ["{s:I} {n:am not} {v:watching} TV {t:now}.", "{s:The girl} {n:isn’t} {v:reading} a story.", "{s:They} {n:aren’t} {v:studying} at school {t:now}."] },
            { title: "Questions: Yes/No Questions",
              text: "Am/Is/Are + subject + verb-ing?",
              textAr: "سؤال Yes/No: Am/Is/Are + الفاعل + الفعل مع ing؟",
              examples: ["{a:Are} {s:you} {v:using} your laptop?"] },
            { title: "Questions: Wh- Questions",
              text: "WH-Q + am/is/are + subject + verb-ing?",
              textAr: "سؤال Wh: أداة الاستفهام + am/is/are + الفاعل + الفعل مع ing؟",
              examples: ["{q:What} {a:are} {s:you} {v:doing} {t:right now}?"] },
            { title: "Which helper: am, is or are?", source: "extra",
              text: "I → am. He / she / it / one person or thing → is. You / we / they / two or more → are.",
              textAr: "مع I نستخدم am، ومع he/she/it أو المفرد نستخدم is، ومع you/we/they أو الجمع نستخدم are.",
              examples: ["{s:I} {a:am} {v:reading}.", "{s:My tablet} {a:is} {v:working}.", "{s:The children} {a:are} {v:playing}."] },
            { title: "Spelling of -ing", source: "extra",
              text: "Most verbs: add -ing (read → reading). Verbs ending in -e: drop the e (take → taking, use → using). Short verbs ending in one vowel + one consonant: double the consonant (swim → swimming, sit → sitting).",
              textAr: "أغلب الأفعال نضيف لها ing، والأفعال المنتهية بـ e نحذف e، والأفعال القصيرة المنتهية بحرف متحرك واحد ثم ساكن نضاعف الحرف الأخير.",
              examples: ["{s:She} {a:is} {v:tak}{x:ing} photos.", "{s:They} {a:are} {v:swimm}{x:ing} in the pool."] }
          ],
          worked: {
            q: "Complete: Nadia ______ (do) her English project at the moment? (Make a question.)",
            steps: ["Find the time expression: at the moment → present continuous.", "Nadia = she → is.", "A Yes/No question starts with Is: Is + Nadia + verb-ing?", "do → doing."],
            a: "{a:Is} {s:Nadia} {v:doing} her English project {t:at the moment}?"
          },
          notes: ["Other time expressions you can use: right now, Look!, Listen!"] },

        { type: "activity", title: "1. Look at the pictures and answer the questions.", page: 28, source: "book", stage: "guided",
          instructions: "What is the boy doing? What are the girls doing right now? Complete the sentences.", instructionsAr: "انظر إلى الصور وأكمل الجمل: ماذا يفعل الولد؟ ماذا تفعل البنات الآن؟",
          image: "crops/u1l6-devices.jpg",
          items: [
            { t: "short", q: "a. She is …", model: "She is looking at her tablet.", keywords: [["tablet", "screen", "pad"]], hint: "Picture 1: what is in her hands?" },
            { t: "short", q: "b. He is …", model: "He is using his laptop.", keywords: [["laptop", "computer"]], hint: "Picture 3: what is on the table?" },
            { t: "short", q: "c. They are …", model: "They are using their devices.", keywords: [["using", "looking", "playing", "reading", "watching"]], hint: "All three are using something: a tablet, a phone and a laptop." }
          ] },

        { type: "activity", title: "2. Fill in the spaces with the correct form of the verbs in brackets using the present continuous.", page: 28, source: "book", stage: "guided",
          instructions: "Fill in the spaces with the correct form of the verbs in brackets using the present continuous.", instructionsAr: "املأ الفراغات بالصيغة الصحيحة للأفعال بين القوسين باستخدام المضارع المستمر.",
          items: [
            { t: "fill", q: "a. She ____ (read) an interesting story in the school library at the moment.", answer: ["is reading"], hint: "She → is + verb-ing.", why: "She is reading." },
            { t: "fill", q: "b. They ____ (not / play) outside now because the weather is very hot.", answer: ["aren’t playing", "are not playing"], hint: "They → are + not + verb-ing.", why: "They aren’t playing." },
            { t: "fill", q: "c. My tablet ____ (not / work) properly at the moment.", answer: ["isn’t working", "is not working"], hint: "My tablet = it → is + not.", why: "My tablet isn’t working." },
            { t: "fill", q: "d. ____ (be) Nadia ……… (do) her English project at the moment?", answer: ["Is"], hint: "Nadia = she. The question starts with the helper.", why: "Is Nadia doing her English project at the moment?" },
            { t: "fill", q: "d. Is (be) Nadia ____ (do) her English project at the moment?", answer: ["doing"], hint: "verb + ing.", why: "Is Nadia doing her English project at the moment?" },
            { t: "fill", q: "e. What ____ (be) you ……… (eat) for lunch now?", answer: ["are"], hint: "you → are.", why: "What are you eating for lunch now?" },
            { t: "fill", q: "e. What are (be) you ____ (eat) for lunch now?", answer: ["eating"], hint: "verb + ing.", why: "What are you eating for lunch now?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — am, is or are?", source: "extra", stage: "guided",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "I ____ doing my homework.", options: ["am", "is", "are"], answer: 0, why: "I → am." },
            { t: "choose", q: "They ____ playing at the moment.", options: ["am", "is", "are"], answer: 2, why: "They → are." },
            { t: "choose", q: "He is ____ now.", options: ["eat", "eating"], answer: 1, why: "is + verb-ing." },
            { t: "choose", q: "The girl ____ reading a story.", options: ["isn’t", "aren’t"], answer: 0, why: "The girl = she → isn’t." },
            { t: "choose", q: "____ you using your laptop?", options: ["Are", "Do"], answer: 0, why: "Present continuous question: Are + you + verb-ing?" },
            { t: "choose", q: "What ____ you doing right now?", options: ["are", "do"], answer: 0, why: "WH-Q + are + you + verb-ing?" },
            { t: "choose", q: "A girl is ____ photos near the fountain.", options: ["takeing", "taking"], answer: 1, why: "take → taking (drop the e)." },
            { t: "choose", q: "The children are ____ in the pool.", options: ["swiming", "swimming"], answer: 1, why: "swim → swimming (double the m)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct words.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "She {reading} a book now.", answer: ["is reading"], hint: "Something is missing before reading.", why: "She is reading." },
            { t: "fix", q: "They {isn’t} studying at school now.", answer: ["aren’t", "are not"], hint: "They → are.", why: "They aren’t studying." },
            { t: "fix", q: "{Do} you using your laptop?", answer: ["Are"], hint: "using = verb-ing.", why: "Are you using your laptop?" },
            { t: "fix", q: "My brother is {rideing} his bike at the moment.", answer: ["riding"], hint: "ride ends in -e.", why: "ride → riding." },
            { t: "order", q: "❓ Make a question.", words: ["What", "is", "Nadia", "doing", "now?"], answer: ["What is Nadia doing now?"], hint: "WH-Q + is + subject + verb-ing?", why: "What + is + Nadia + doing?" },
            { t: "short", q: "Write two sentences about what people in your house are doing now.", open: true, model: "My mother is cooking lunch. My little brother is watching TV.", hint: "My … is …ing. / My … are …ing." }
          ] },

        { type: "speak", title: "3. Imagine you are a reporter giving a live update from Al-Shaheed Park.", page: 28, source: "book",
          image: "crops/u1l6-reporter.jpg",
          instructions: "Imagine you are a reporter giving a live update from Al-Shaheed Park.",
          steps: ["Use the present continuous to describe what people are doing right now.", "Talk about what families and children are doing, eating, playing, etc."],
          dialogue: [{ who: "Reporter (you)", text: "" }],
          example: "A girl is taking photos near the fountain.",
          note: "Tip: Start with who you see: “I can see a boy…” Add where and what to make it interesting: “A girl is taking photos near the fountain.” Speak clearly and use full sentences.",
          starters: ["Hello! I’m live from Al-Shaheed Park.", "I can see a boy…", "A girl is taking photos near the fountain.", "Some children are playing…", "A family is eating…", "People are walking…"],
          record: true }
      ],
      game: { kind: "sort", title: "am, is or are?",
        buckets: ["am", "is", "are"],
        cards: [["I", 0], ["He", 1], ["The girl", 1], ["My tablet", 1], ["Nadia", 1], ["They", 2], ["You", 2], ["The children", 2], ["We", 2]] },
      teacher: {
        notes: [
          "Ex. 1: students describe the pictures. Sample answers: a. She is looking at her tablet. b. He is using his laptop. c. They are using their devices. Accept other correct sentences.",
          "Present the grammar box: actions happening now; time expressions now, at the moment; affirmative, negative, Yes/No and Wh- questions.",
          "Ex. 2 answers: a. is reading  b. aren’t playing  c. isn’t working  d. Is … doing  e. are … eating.",
          "Ex. 3: students prepare a 30-second live report from Al-Shaheed Park. Use the tips: start with who you see, add where and what, speak clearly."
        ],
        pair: ["Mime: A mimes an action; B guesses with “Are you …ing?” / “You are …ing!”", "Live report rehearsal: A reports, B gives one tip, then swap."],
        group: ["Groups prepare a short live news report from a place in Kuwait (a park, a mall, the beach) and present it."],
        quick: [
          { q: "When do we use the present continuous?", a: "For actions that are happening now." },
          { q: "Make it negative: They are playing outside.", a: "They aren’t playing outside." },
          { q: "Make a question: Nadia is doing her project.", a: "Is Nadia doing her project?" },
          { q: "Spell the -ing form of take.", a: "taking" }
        ]
      }
    },

    /* ───────────────────────── LESSON 7 — WRITING (pp. 29–30) ───────────────────────── */
    {
      id: "u1l7", num: 7, skill: "Writing", title: "Kuwait Across Time", pages: [29, 30], status: "complete",
      canDo: [
        "I can organise ideas to compare Kuwait in the past and present.",
        "I can identify the function of different linking words used to connect ideas within a paragraph.",
        "I can produce a structured written expository report comparing past and present life."
      ],
      linkers: ["because", "also", "for example", "in addition", "in conclusion"],
      goals: ["Compare jobs, education and communication then and now.", "Learn what linking words do.", "Plan a report with an outline.", "Write a two-paragraph report."],
      goalsAr: ["أقارن الوظائف والتعليم والتواصل بين الماضي والحاضر.", "أتعرّف على وظيفة أدوات الربط.", "أخطّط لتقرير باستخدام مخطّط.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u1l7-then-now.jpg", emoji: "🕰️", seconds: 90,
        instructions: "1. Think, Pair, Share",
        prompts: ["a. How people lived in the past and how they live now.", "b. Complete the table with your answers."]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. b. Complete the table with your answers.", page: 29, source: "book",
          instructions: "Complete the table with your answers.", instructionsAr: "أكمل الجدول بإجاباتك.",
          items: [
            { t: "table", open: true, q: "Complete the table.",
              head: ["Items", "In the past", "Nowadays"],
              rows: [
                ["Jobs", { model: "Pearl diving and fishing" }, { model: "Engineers, doctors and teachers" }],
                ["Education", { model: "Al-Katateeb (simple schools)" }, { model: "Modern schools and universities" }],
                ["Communication", { model: "Letters and landline phones" }, { model: "Social media apps" }]
              ] }
          ] },

        { type: "activity", title: "2. Match each linking word to its correct function.", page: 29, source: "book",
          instructions: "Match each linking word to its correct function. “In conclusion” is done for you.", instructionsAr: "صِل كل أداة ربط بوظيفتها. In conclusion محلولة.",
          items: [
            { t: "match", q: "Match each linking word to its correct function.",
              pairs: [["In conclusion", "To close a piece of writing"], ["Also, in addition", "To add more information"], ["Because", "To give a reason"], ["For example", "To give a specific example"]],
              hint: "“Because” answers the question “Why?”.",
              why: "In conclusion → to close; also / in addition → to add information; because → to give a reason; for example → to give a specific example." }
          ] },

        { type: "write", title: "3. Complete the table with your own ideas to plan a two-paragraph report comparing life in Kuwait in the past and nowadays.", page: 29, source: "book",
          instructions: "Complete the table with your own ideas. The book gives ideas for the introduction.",
          example: "Introduction: Life in Kuwait has changed a lot over time. In the past, people lived in simple ways, but nowadays life is more modern.",
          frame: [
            { label: "Introduction", hint: "Introduce the topic, explaining how life in Kuwait has changed over time with at least one sentence.", lines: 2 },
            { label: "Body Paragraph 1", hint: "Describe life in Kuwait in the past (e.g. houses, jobs, transport, lifestyle). Start with a topic sentence and include at least two supporting details.", lines: 3 },
            { label: "Body Paragraph 2", hint: "Describe life in Kuwait nowadays (e.g. technology, buildings, education, lifestyle). Start with a topic sentence and include at least two supporting details.", lines: 3 },
            { label: "Conclusion", hint: "Write at least one sentence comparing life in the past and nowadays. Summarise the main idea.", lines: 2 }
          ],
          model: "Introduction: Life in Kuwait has changed a lot over time. In the past, people lived in simple ways, but nowadays life is more modern.\nBody Paragraph 1: In the past, people lived simply. They lived in mud houses and fished.\nBody Paragraph 2: Nowadays, life is very modern. We have tall towers and smartphones.\nConclusion: Life is easier now, but we miss the past.",
          modelFromBook: false,
          checklist: ["My introduction says how life has changed.", "Each body paragraph has a topic sentence and two details.", "My conclusion compares the past and nowadays."],
          minWords: 30 },

        { type: "write", title: "4. Plan and write a two-paragraph report comparing life in Kuwait in the past with life nowadays. a. Complete the following outline with your ideas.", page: 30, source: "book",
          instructions: "Complete the following outline with your ideas.",
          example: "Life in Kuwait has changed greatly over time. In the past, people lived very differently from the way they live today.",
          wordBank: ["because", "also", "for example", "in addition", "in conclusion"],
          wordBankLabel: "Linkers Bank",
          frame: [
            { label: "Introduction", hint: "Life in Kuwait has changed …", lines: 2 },
            { label: "Paragraph 1: Life in Kuwait in the past — Topic sentence", hint: "In the past, life in Kuwait was …" },
            { label: "Paragraph 1 — Supporting details (at least two)", hint: "People lived in … / Many men worked as …", lines: 2 },
            { label: "Paragraph 1 — Concluding sentence", hint: "In short, …" },
            { label: "Paragraph 2: Life in Kuwait nowadays — Topic sentence", hint: "Nowadays, life in Kuwait is …" },
            { label: "Paragraph 2 — Supporting details (at least two)", hint: "People live in … / They use …", lines: 2 },
            { label: "Paragraph 2 — Concluding sentence", hint: "In addition, …" },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Introduction: Life in Kuwait has changed a lot over time. In the past, people lived differently.\nParagraph 1 – Topic sentence: In the past, life in Kuwait was simple and hard.\nSupporting details: People lived in small mud houses without electricity. Many men worked as pearl divers and fishermen.\nConcluding sentence: In short, people worked hard and helped each other.\nParagraph 2 – Topic sentence: Nowadays, life in Kuwait is modern and comfortable.\nSupporting details: People live in big houses with air conditioning. They use cars, smartphones and the internet every day.\nConcluding sentence: In addition, life today is easier and faster.\nConclusion: In conclusion, life has changed a lot, but we still value our traditions.",
          modelFromBook: false,
          checklist: ["I wrote a topic sentence for each paragraph.", "I wrote at least two supporting details in each paragraph.", "I wrote a concluding sentence for each paragraph.", "I used linkers from the Linkers Bank."],
          minWords: 60 },

        { type: "write", title: "4. b. Use the ideas in your plan to write the report in your notebook. c. Use the following checklist to edit your writing.", page: 30, source: "book",
          instructions: "Use the ideas in your plan to write the report. Then use the checklist (Remember to:) to edit your writing.",
          wordBank: ["because", "also", "for example", "in addition", "in conclusion"],
          wordBankLabel: "Linkers Bank",
          frame: [
            { label: "Introduction", hint: "Life in Kuwait has changed …", lines: 2 },
            { label: "Paragraph 1: Life in Kuwait in the past", hint: "Topic sentence + two supporting details + concluding sentence", lines: 5 },
            { label: "Paragraph 2: Life in Kuwait nowadays", hint: "Topic sentence + two supporting details + concluding sentence", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Life in Kuwait has changed a lot over time. In the past, people lived very differently from the way they live today.\n\nIn the past, life in Kuwait was simple and hard. People lived in small mud houses without electricity. Many men worked as pearl divers and fishermen because the sea was very important. In short, people worked hard and helped each other.\n\nNowadays, life in Kuwait is modern and comfortable. People live in big houses with air conditioning. They also use cars, smartphones and the internet every day. In addition, life today is easier and faster.\n\nIn conclusion, life has changed a lot, but we still value our traditions.",
          modelFromBook: false,
          bookChecklist: [
            "begin with a clear introduction about life in Kuwait (past vs nowadays).",
            "write two paragraphs: one about the past and one about nowadays.",
            "include a clear topic sentence in each paragraph.",
            "add at least two supporting details in each paragraph.",
            "write a concluding sentence for each paragraph.",
            "check your writing for grammar, spelling, and punctuation.",
            "use AI tools wisely and responsibly to improve your writing."
          ],
          bookNote: "Remember to: (from the book). ATTENTION: Use AI wisely and responsibly.",
          minWords: 90 },

        { type: "activity", title: "Extra Practice: Choose the linker", source: "extra", stage: "guided",
          instructions: "Complete each sentence with a linker from the Linkers Bank.", instructionsAr: "أكمل كل جملة بأداة ربط من بنك أدوات الربط.",
          items: [
            { t: "fill", q: "People sat outside in the evenings ____ there were no air conditioners.", answer: ["because"], bank: ["because", "also", "for example", "in addition", "in conclusion"], why: "because gives a reason." },
            { t: "fill", q: "Children played traditional games, ____, tag and marbles.", answer: ["for example"], bank: ["because", "also", "for example", "in addition", "in conclusion"], why: "for example gives a specific example." },
            { t: "fill", q: "People use smartphones. They ____ use cars every day.", answer: ["also"], bank: ["because", "also", "for example", "in addition", "in conclusion"], why: "also adds more information." },
            { t: "fill", q: "Life today is modern. ____, it is easier and faster.", answer: ["In addition"], bank: ["because", "also", "for example", "in addition", "in conclusion"], why: "In addition adds more information at the start of a sentence." },
            { t: "fill", q: "____, life has changed a lot, but we still value our traditions.", answer: ["In conclusion"], bank: ["because", "also", "for example", "in addition", "in conclusion"], why: "In conclusion closes a piece of writing." }
          ] }
      ],
      game: { kind: "sort", title: "Past or Nowadays?",
        buckets: ["In the past 🐚", "Nowadays 🏙️"],
        cards: [["pearl diving", 0], ["fishing", 0], ["Al-Katateeb", 0], ["letters", 0], ["engineers and doctors", 1], ["universities", 1], ["social media apps", 1], ["smartphones", 1]] },
      teacher: {
        notes: [
          "Think, Pair, Share (ex. 1): use the photos. Sample answers: Jobs: pearl diving and fishing / engineers, doctors and teachers. Education: Al-Katateeb / modern schools and universities. Communication: letters and landline phones / social media apps.",
          "Ex. 2 answers: In conclusion → to close a piece of writing; Also, in addition → to add more information; Because → to give a reason; For example → to give a specific example.",
          "Ex. 3: plan the report in the table (introduction, two body paragraphs, conclusion). The book gives the introduction ideas.",
          "Ex. 4a: complete the outline (topic sentence, two supporting details, concluding sentence for each paragraph). Ex. 4b–c: write the report and edit it with the “Remember to” checklist.",
          "Talk about using AI tools wisely and responsibly: to check, not to write for you."
        ],
        pair: ["Partners swap reports and tick the “Remember to” checklist for each other.", "A reads a sentence; B says which linker could join it to the next one."],
        group: ["Groups make a “Kuwait Across Time” timeline poster: jobs, education, communication, houses."],
        quick: [
          { q: "Which linker gives a reason?", a: "Because." },
          { q: "Which linker closes a piece of writing?", a: "In conclusion." },
          { q: "What does each body paragraph need?", a: "A topic sentence, at least two supporting details and a concluding sentence." },
          { q: "Name one job in old Kuwait.", a: "Pearl diving / fishing." }
        ]
      }
    }
  ]
});

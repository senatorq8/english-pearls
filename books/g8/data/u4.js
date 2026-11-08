// Learning Unit 4 — Careers and Future Jobs (printed pages 62–72; cover p. 62)
// Source: English Pearls of Kuwait, Grade 8 (new edition), First Term, Student's Book.
// Answers come from the blue answer key printed over the pages; open tasks use those only as models.
BOOK.addUnit({
  id: "u4", num: 4, title: "Careers and Future Jobs", titleAr: "المهن ووظائف المستقبل",
  pages: [62, 72],
  cover: 62,
  status: "complete",
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u4l1", num: 1, skill: "Reading",
      title: "Jobs in Kuwait: Then and Now",
      pages: [63, 64],
      status: "complete",
      canDo: [
        "I can determine main ideas and key details about jobs in Kuwait in the past and present.",
        "I can compare jobs in Kuwait in the past and present by identifying tools, challenges and skills needed.",
        "I can infer the meaning of new vocabulary from a written text about jobs in Kuwait to use them in meaningful contexts."
      ],
      goals: ["Talk about jobs in the past and today.", "Read a text about jobs in Kuwait.", "Learn 11 new words.", "Compare jobs: tools, challenges and skills."],
      goalsAr: ["أتحدّث عن الوظائف في الماضي واليوم.", "أقرأ نصًا عن الوظائف في الكويت.", "أتعلّم 11 كلمة جديدة.", "أقارن بين الوظائف: الأدوات والتحديات والمهارات."],
      warmup: {
        title: "Think, Pair, Share",
        image: "crops/u4l1-jobs.jpg",
        emoji: "👷",
        prompts: ["What jobs did your great-grandparents do?", "What jobs do people do now?", "What do you think jobs in the future will be like?"],
        seconds: 120
      },
      vocab: [
        { w: "face", pos: "verb", emoji: "🌊", def: "to have a difficult thing or problem in front of you", ex: "Fishermen often faced strong winds and high waves while out at sea.", exFromBook: true, ar: "يواجه" },
        { w: "patience", pos: "noun", emoji: "⏳", def: "being able to wait or keep calm without getting angry", ex: "They needed skills such as strength, patience, and knowledge of the sea.", exFromBook: true, ar: "الصبر" },
        { w: "discovery", pos: "noun", emoji: "🛢️", def: "finding something for the first time", ex: "After the discovery of oil, life in Kuwait changed rapidly.", exFromBook: true, ar: "اكتشاف" },
        { w: "rapidly", pos: "adverb", emoji: "⚡", def: "very quickly", ex: "After the discovery of oil, life in Kuwait changed rapidly.", exFromBook: true, ar: "بسرعة" },
        { w: "opportunity", pos: "noun", emoji: "🚪", def: "a chance to do something good", ex: "Many new job opportunities appeared, especially in education.", exFromBook: true, ar: "فرصة" },
        { w: "appear", pos: "verb", emoji: "✨", def: "to start to exist; to come into view", ex: "Many new job opportunities appeared, especially in education.", exFromBook: true, ar: "يظهر" },
        { w: "require", pos: "verb", emoji: "📋", def: "to need something", ex: "Teaching required communication skills, patience, and a love of learning.", exFromBook: true, ar: "يتطلّب" },
        { w: "career", pos: "noun", emoji: "💼", def: "the job or kind of work you do for a long time", ex: "Today, one of the most popular career choices among young people is being a content creator.", exFromBook: true, ar: "مهنة / مسيرة مهنية" },
        { w: "programmer", pos: "noun", emoji: "💻", def: "a person who writes computer programs", ex: "Some also work as programmers or designers to create engaging content.", exFromBook: true, ar: "مبرمج" },
        { w: "designer", pos: "noun", emoji: "🎨", def: "a person who plans how things will look", ex: "Some also work as programmers or designers to create engaging content.", exFromBook: true, ar: "مصمّم" },
        { w: "comfortably", pos: "adverb", emoji: "🛋️", def: "in a relaxed and easy way", ex: "Content creators face online pressure, but they work from home comfortably.", exFromBook: true, ar: "براحة" }
      ],
      sections: [
        { type: "reading", title: "Jobs in Kuwait: Then and Now", page: 63,
          instructions: "2. Read the passage and complete the tasks.",
          paras: [
            "In the past, many people worked as fishermen. They used wooden boats called *dhows*, strong nets, and hand-made traps. Fishing was hard and dangerous because of the rough seas and the long hours. Fishermen often faced strong winds and high waves while out at sea. They needed skills such as strength, patience, and knowledge of the sea. Despite the difficulties, they took pride in their work. Their work helped feed families and support the community.",
            "After the discovery of oil, life in Kuwait changed rapidly. Many new job opportunities appeared, especially in education. One important job was teaching. Teachers helped build the future by educating children. They used chalkboards, books, and taught in simple classrooms. Teaching required communication skills, patience, and a love of learning. Teachers were respected in society and played a significant role in Kuwait’s development during that time.",
            "Today, one of the most popular career choices among young people is being a content creator. They are people who make videos, write blogs, or post on social media. Some also work as programmers or designers to create engaging content. They use smartphones, cameras, and editing apps. It may seem easy, but this job requires creativity, consistency, and tech skills. Content creators face online pressure, but they work from home comfortably. This job reflects how technology has changed how people work and connect."
          ],
          image: "crops/u4l1-jobs.jpg",
          speaker: null,
          note: "Book box (p. 63): This passage is an example of a chronological text. It tells events in the order they happened from the past to the present." },

        { type: "activity", title: "3. Write another title for the passage.", page: 63, source: "book",
          instructions: "Think about the main idea of all three paragraphs. Write a new title.",
          instructionsAr: "فكّر في الفكرة الرئيسية للفقرات الثلاث، ثم اكتب عنوانًا آخر للنص.",
          items: [
            { t: "short", q: "Another title for the passage:", open: true, model: "How Jobs Changed in Kuwait", hint: "The text goes from the past, to after oil, to today." }
          ] },

        { type: "activity", title: "4. Read the passage again and complete the following tasks.", page: 64, source: "book",
          instructions: "a. Write one job for each period.",
          instructionsAr: "اقرأ النص مرة أخرى واكتب وظيفة واحدة لكل فترة زمنية.",
          items: [
            { t: "table", q: "a. Write one job for each period.",
              head: ["Long Ago", "After Oil Discovery", "Today"],
              rows: [[
                { answer: ["fisherman", "fishermen", "a fisherman"], model: "fisherman" },
                { answer: ["teacher", "teachers", "a teacher"], model: "teacher" },
                { answer: ["content creator", "content creators", "a content creator", "programmer", "a programmer", "designer", "a designer"], model: "content creator" }
              ]],
              hint: "Paragraph 1 = long ago, paragraph 2 = after oil, paragraph 3 = today.",
              why: "Long ago: fishermen. After oil: teaching. Today: content creators (also programmers or designers)." }
          ] },

        { type: "activity", title: "4. b. Answer the following questions.", page: 64, source: "book",
          instructions: "Answer the questions from the passage.",
          instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What qualities do both fishermen and teachers share?", model: "Patience.", keywords: [["patien"]],
              hint: "Look for a word in paragraph 1 and in paragraph 2." },
            { t: "short", q: "2. How did the discovery of oil affect life in Kuwait?", model: "It changed rapidly.", keywords: [["chang", "opportunit", "new job"]],
              hint: "Read the first sentence of paragraph 2." },
            { t: "short", q: "3. Think of other careers that appear in today's life.", open: true, model: "Programmer, designer.",
              hint: "Look at paragraph 3, or use your own ideas." }
          ] },

        { type: "activity", title: "5. Complete the table to compare the different jobs.", page: 64, source: "book",
          instructions: "Use the passage. Write the tools, challenges and skills for each job. Some boxes are done in the book.",
          instructionsAr: "استخدم النص واكتب الأدوات والتحديات والمهارات لكل وظيفة.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["Job Title", "Tools", "Challenges", "Skills"],
              rows: [
                ["Fisherman", { model: "dhows, nets and traps" }, { model: "rough seas" }, "strength, patience"],
                ["Teacher", "chalkboards, books,", { model: "building the future" }, { model: "communication" }],
                ["Content Creator", { model: "phones and cameras" }, "online pressure", { model: "creativity, tech skills" }]
              ],
              note: "Printed in the book: “chalkboards, books,” (with a comma at the end)." }
          ] },

        { type: "activity", title: "6. Classify the following words under the right headings. Then, find one word for each type from the passage.", page: 64, source: "book",
          instructions: "worked – sea – dangerous – about – comfortably. First match each word with its heading. Then find one more word for each heading in the passage.",
          instructionsAr: "صنّف الكلمات تحت العناوين الصحيحة، ثم ابحث في النص عن كلمة واحدة لكل نوع.",
          items: [
            { t: "match", q: "Classify the words: worked – sea – dangerous – about – comfortably",
              pairs: [["sea", "noun"], ["worked", "verb"], ["dangerous", "adjective"], ["comfortably", "adverb"], ["about", "preposition"]],
              hint: "Adverbs often end in -ly. Verbs here end in -ed.",
              why: "sea = a thing (noun); worked = an action (verb); dangerous describes a noun (adjective); comfortably describes how (adverb); about = a preposition." },
            { t: "table", q: "Find one word for each type from the passage.", open: true,
              head: ["noun", "verb", "adjective", "adverb", "preposition"],
              rows: [[{ model: "boats" }, { model: "used" }, { model: "wooden" }, { model: "rapidly" }, { model: "in" }]] }
          ] },

        { type: "speak", title: "7. Group Poster", page: 64, source: "book",
          instructions: "a. In groups, choose one job from the past and one job from today (e.g. pearl diver, cybersecurity engineer). Prepare for your poster. b. Each group presents its poster to the class.",
          steps: ["The tools they use", "The challenges they face", "The skills they need", "How they feel about their work"],
          image: "crops/u4l1-jobs.jpg",
          note: "The sentence starters below are from the book.",
          starters: ["This job requires…", "In the past, workers used…", "One challenge they face is…", "They feel proud because…"],
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "In the past, fishermen used metal boats.", options: ["True", "False"], answer: 1, hint: "Paragraph 1.", why: "They used wooden boats called dhows." },
            { t: "mcq", q: "Fishing was hard and dangerous.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“Fishing was hard and dangerous because of the rough seas and the long hours.”" },
            { t: "mcq", q: "After the discovery of oil, many new jobs appeared in education.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“Many new job opportunities appeared, especially in education.”" },
            { t: "mcq", q: "Teachers were not respected in society.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "“Teachers were respected in society.”" },
            { t: "mcq", q: "Content creators work from home.", options: ["True", "False"], answer: 0, hint: "Paragraph 3.", why: "“…they work from home comfortably.”" },
            { t: "mcq", q: "Being a content creator does not need any skills.", options: ["True", "False"], answer: 1, hint: "Paragraph 3.", why: "“this job requires creativity, consistency, and tech skills.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "A good teacher needs a lot of (patience / career).", options: ["patience", "career"], answer: 0, why: "patience = keeping calm while you wait or help others." },
            { t: "choose", q: "The town grew (rapidly / comfortably) after the new road opened.", options: ["rapidly", "comfortably"], answer: 0, why: "rapidly = very quickly." },
            { t: "choose", q: "This job (requires / appears) good computer skills.", options: ["requires", "appears"], answer: 0, why: "require = need." },
            { t: "choose", q: "A (programmer / designer) writes computer programs.", options: ["programmer", "designer"], answer: 0, why: "A programmer writes programs; a designer plans how things look." },
            { t: "choose", q: "The new company gave young people a great job (opportunity / discovery).", options: ["opportunity", "discovery"], answer: 0, why: "opportunity = a chance." },
            { t: "choose", q: "Pearl divers (faced / required) many dangers at sea.", options: ["faced", "required"], answer: 0, why: "face = have a difficult thing in front of you." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the three pictures. Pairs answer a–c (Think, Pair, Share), then share with the class.",
          "Pre-teach the 11 words with the emoji and Arabic: face, patience, discovery, rapidly, opportunity, appear, require, career, programmer, designer, comfortably.",
          "Read the three paragraphs. Point out the book box: a chronological text goes from the past to the present.",
          "Ex. 3–5: pairs write a new title, the three jobs on the timeline, answer 4b and complete the table. Ex. 6: classify the five words, then find more in the text.",
          "Ex. 7: groups prepare a poster (past job + today’s job) with the book’s sentence starters and present it."
        ],
        pair: ["A names a job from the text; B says one tool, one challenge and one skill.", "Pairs write a new title for each paragraph."],
        group: ["Group Poster (ex. 7): one past job and one job from today (e.g. pearl diver, cybersecurity engineer)."],
        quick: [
          { q: "What did fishermen use in the past?", a: "Wooden boats called dhows, strong nets and hand-made traps." },
          { q: "How did the discovery of oil affect life in Kuwait?", a: "It changed rapidly (many new job opportunities appeared)." },
          { q: "Name two skills a content creator needs.", a: "Creativity, consistency, tech skills (any two)." },
          { q: "What kind of word is “comfortably”?", a: "An adverb." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u4l2", num: 2, skill: "Grammar",
      title: "Past Continuous (as/ while/ when)",
      pages: [65, 65],
      status: "complete",
      canDo: [
        "I can apply the past continuous accurately in spoken and written communication to talk about ongoing actions in the past.",
        "I can engage in a spoken dialogue about past events, showing openness to listening to peers, respecting their contributions, and responding appropriately while using the past continuous and past simple with as, while, and when."
      ],
      goals: ["Use was/were + verb-ing for a longer action in the past.", "Use the past simple for a short action.", "Join the two actions with as, while and when.", "Ask and answer about past events."],
      goalsAr: ["أستخدم was/were + فعل ing لحدث مستمر في الماضي.", "أستخدم الماضي البسيط لحدث قصير.", "أربط الحدثين بـ as و while و when.", "أسأل وأجيب عن أحداث في الماضي."],
      warmup: {
        title: "Look at the picture and discuss.",
        image: "crops/u4l2-starfish.jpg",
        emoji: "⭐",
        prompts: ["What was the boy doing when he found the starfish?", "Which action stopped the longer action?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Look at the picture and discuss.", page: 65, source: "book",
          instructions: "Read the book’s sentence: “The boy was walking by the shore when he found a starfish.” Then answer.",
          instructionsAr: "اقرأ جملة الكتاب ثم أجب عن السؤالين.",
          image: "crops/u4l2-starfish.jpg",
          items: [
            { t: "short", q: "a. What was the boy doing when he found the starfish?", model: "He was walking by the shore.", keywords: [["was walking", "walking"]],
              hint: "Look for was + verb-ing in the sentence." },
            { t: "mcq", q: "b. Which action stopped the longer action?", options: ["The boy was walking by the shore.", "He found a starfish."], answer: 1,
              hint: "Which action is short and happened at one moment?", why: "“He found a starfish” is the short action (past simple). It stopped the longer action “was walking” (past continuous)." }
          ] },

        { type: "grammar", title: "Grammar: Past Continuous (as/ while/ when)", page: 65,
          steps: [
            { title: "Step 1 — From the book",
              text: "The past continuous describes ongoing actions in the past. The past simple is used for a shorter action that happened at a specific time. Key words: as, while, when",
              textAr: "الماضي المستمر يصف أحداثًا كانت مستمرة في الماضي. والماضي البسيط يُستخدم لحدث أقصر وقع في وقت محدد. الكلمات المفتاحية: as و while و when.",
              examples: ["{s:The boy} {a:was} {v:walking} by the shore {c:when} he {v:found} a starfish.", "{c:While} {s:I} {a:was} {v:doing} my English project, my friend {v:called} me."] },
            { title: "Step 2 — was or were?", source: "extra",
              text: "I / he / she / it / one person → was + verb-ing. You / we / they / two or more people → were + verb-ing.",
              textAr: "مع I و he و she و it والمفرد نستخدم was، ومع you و we و they والجمع نستخدم were.",
              examples: ["{s:My brother} {a:was} {v:playing} football.", "{s:People} {a:were} {v:driving} on the highway."] },
            { title: "Step 3 — when + the short action", source: "extra",
              text: "The long action is in the past continuous. The short action that stops it is in the past simple. We often put when before the short action.",
              textAr: "الحدث الطويل بالماضي المستمر، والحدث القصير الذي يقطعه بالماضي البسيط، وغالبًا تأتي when قبل الحدث القصير.",
              examples: ["{s:My dad} {a:was} {v:fixing} the car {c:when} he {v:heard} the sandstorm warning."] },
            { title: "Step 4 — while / as + the long action", source: "extra",
              text: "while and as usually go before the long action (past continuous). They mean “during the time that…”.",
              textAr: "تأتي while و as عادة قبل الحدث الطويل (الماضي المستمر)، ومعناهما: في أثناء.",
              examples: ["{c:As} {s:my neighbour} {a:was} {v:closing} the windows, dust {v:blew} into the room.", "{c:While} {s:I} {a:was} {v:studying}, the lights {v:went} out."] },
            { title: "Step 5 — The comma", source: "extra",
              text: "When the sentence starts with while, as or when, put a comma after the first part. No comma is needed when when is in the middle.",
              textAr: "إذا بدأت الجملة بـ while أو as أو when نضع فاصلة بعد الجزء الأول، ولا نحتاج فاصلة إذا جاءت when في وسط الجملة.",
              examples: ["{c:While} I {a:was} {v:walking} home, the sandstorm {v:started}.", "I {a:was} {v:walking} home {c:when} the sandstorm {v:started}."] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Use was/were + verb-ing, not was + base verb. Use the past simple (not -ing) for the short action.",
              textAr: "استخدم was/were + فعل ing وليس was + الفعل الأساسي، واستخدم الماضي البسيط للحدث القصير.",
              examples: ["✗ My brother {n:was play} football. → ✓ My brother {a:was} {v:playing} football.", "✗ People {n:was} driving. → ✓ People {a:were} {v:driving}.", "✗ when he {n:was hearing} the warning → ✓ when he {v:heard} the warning"] }
          ],
          table: {
            head: ["Form"],
            rows: [["Subject + {a:was}/{a:were} + {v:verb-ing}"], ["{c:While} I {a:was} {v:doing} my English project, my friend {v:called} me."]]
          },
          worked: {
            q: "Complete: My dad was fixing the car when he ____ (hear) the sandstorm warning.",
            steps: [
              "Find the two actions: “was fixing the car” (long) and “hear the warning” (short).",
              "The long action is already in the past continuous: was fixing.",
              "The short action comes after when, so we use the past simple.",
              "hear → heard (irregular verb)."
            ],
            a: "{s:My dad} {a:was} {v:fixing} the car {c:when} he {v:heard} the sandstorm warning."
          },
          notes: ["Spelling: drive → driving (drop the e), close → closing, but play → playing, fix → fixing."] },

        { type: "activity", title: "2. A sandstorm suddenly started in your area. What was everyone doing when the sandstorm started?", page: 65, source: "book", stage: "guided",
          instructions: "Write the correct form of the verb: past continuous (was/were + verb-ing) or past simple.",
          instructionsAr: "اكتب الصيغة الصحيحة للفعل: الماضي المستمر (was/were + ing) أو الماضي البسيط.",
          items: [
            { t: "fill", q: "a. I was walking home when the sandstorm suddenly ____ (start).", answer: ["started"], hint: "The short action after when.", why: "The short action is in the past simple: started." },
            { t: "fill", q: "b. My brother ____ (play) football when the wind blew dust into his eyes.", answer: ["was playing"], hint: "A long action. My brother = he.", why: "Long action → past continuous: was playing." },
            { t: "fill", q: "c. People ____ (drive) on the highway when the sky turned orange.", answer: ["were driving"], hint: "People = they.", why: "People is plural → were driving." },
            { t: "fill", q: "d. My dad was fixing the car when he ____ (hear) the sandstorm warning.", answer: ["heard"], hint: "The short action after when. hear is irregular.", why: "Past simple of hear: heard." },
            { t: "fill", q: "e. As my neighbour ____ (close) the windows, dust blew into the room.", answer: ["was closing"], hint: "As + the long action.", why: "As + past continuous: was closing." }
          ] },

        { type: "speak", title: "3. Dialogue: Talking About Past Events", page: 65, source: "book",
          instructions: "a. Work in pairs. Take turns being Student A and Student B. b. Use the past continuous and the past simple to ask and answer questions.",
          dialogue: [
            { who: "Student A", text: "What were you doing when the power went out?" },
            { who: "Student B", text: "I was studying for my test when the lights went out." },
            { who: "Student A", text: "Oh no! What did you do then?" },
            { who: "Student B", text: "" },
            { who: "Student A", text: "" },
            { who: "Student B", text: "" }
          ],
          note: "Remember! Use “when” or “while”. Use the past continuous, and the past simple. Write correct questions. Write clear sentences.",
          record: true },

        { type: "activity", title: "3. Dialogue: write the missing lines", page: 65, source: "book",
          instructions: "Write the last three lines of the dialogue. Use the past continuous and the past simple.",
          instructionsAr: "اكتب الأسطر الثلاثة الأخيرة من الحوار مستخدمًا الماضي المستمر والماضي البسيط.",
          items: [
            { t: "short", q: "Student B: (What did you do then?)", open: true, model: "I used a torch and read my notes.", hint: "Use the past simple: I used… / I lit…" },
            { t: "short", q: "Student A: (Ask about another person.)", open: true, model: "What was your sister doing?", hint: "What was / were … doing?" },
            { t: "short", q: "Student B: (Answer the question.)", open: true, model: "She was cooking when it happened.", hint: "… was + verb-ing when …" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — was or were?", source: "extra", stage: "guided",
          instructions: "Choose was or were.", instructionsAr: "اختر was أو were.",
          items: [
            { t: "choose", q: "My sister (was / were) cooking when the lights went out.", options: ["was", "were"], answer: 0, why: "My sister = she → was." },
            { t: "choose", q: "The children (was / were) playing outside when it started to rain.", options: ["was", "were"], answer: 1, why: "The children = they → were." },
            { t: "choose", q: "I (was / were) reading when my friend called me.", options: ["was", "were"], answer: 0, why: "I → was." },
            { t: "choose", q: "We (was / were) watching TV when the power went out.", options: ["was", "were"], answer: 1, why: "We → were." },
            { t: "choose", q: "While Ali (was walking / walked) to school, he saw an accident.", options: ["was walking", "walked"], answer: 0, why: "While + the long action → past continuous." },
            { t: "choose", q: "I was sleeping when the phone (rang / was ringing).", options: ["rang", "was ringing"], answer: 0, why: "when + the short action → past simple." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🌪️ Make a sentence.", words: ["I", "was", "walking", "home", "when", "the", "storm", "started."], answer: ["I was walking home when the storm started."], hint: "Long action first, then when + short action.", why: "was walking (long) + when + started (short)." },
            { t: "order", q: "🍳 Make a sentence.", words: ["She", "was", "cooking", "when", "the", "lights", "went", "out."], answer: ["She was cooking when the lights went out."], hint: "Start with She.", why: "was cooking (long) + when + went out (short)." },
            { t: "order", q: "📞 Make a sentence.", words: ["While", "we", "were", "eating,", "my", "uncle", "arrived."], answer: ["While we were eating, my uncle arrived."], hint: "Start with While.", why: "While + past continuous, then the past simple." },
            { t: "order", q: "❓ Make a question.", words: ["What", "were", "you", "doing", "when", "the", "power", "went", "out?"], answer: ["What were you doing when the power went out?"], hint: "What + were + you + doing…?", why: "Question: What + was/were + subject + verb-ing…?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct form.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "My friends {was} playing football when it started to rain.", answer: ["were"], hint: "My friends = they.", why: "Plural subject → were playing." },
            { t: "fix", q: "I was {read} a book when you called.", answer: ["reading"], hint: "was + verb-ing.", why: "Past continuous: was reading." },
            { t: "fix", q: "He was driving to work when he {see} the accident.", answer: ["saw"], hint: "The short action → past simple.", why: "see → saw." },
            { t: "fix", q: "While she was {cook}, the phone rang.", answer: ["cooking"], hint: "while + was + verb-ing.", why: "Past continuous: was cooking." },
            { t: "short", q: "Write your own sentence with while and the past continuous.", open: true, model: "While I was doing my homework, my mother called me.", hint: "While + I was + verb-ing, … + past simple." }
          ] }
      ],
      game: { kind: "sort", title: "was or were?",
        buckets: ["was + verb-ing", "were + verb-ing"],
        cards: [["I", 0], ["My brother", 0], ["She", 0], ["My dad", 0], ["People", 1], ["We", 1], ["You", 1], ["My friends", 1]] },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the boy and the starfish. Ask a and b. Read the book’s sentence: The boy was walking by the shore when he found a starfish.",
          "Teach the box: long action → was/were + verb-ing; short action → past simple. Key words: as, while, when.",
          "Do the worked example, then the Grammar Lab and exercise 2 (the sandstorm).",
          "Ex. 3: pairs read the first three lines of the dialogue and make the last three. Then they swap roles (Student A and B).",
          "Finish with the Predict challenge and the extra steps if there is time."
        ],
        pair: ["“What were you doing when…?” chain: A asks about the power cut, the sandstorm or the bell; B answers with was + -ing and when.", "Partners check each other’s sentences: was/were, -ing, and the past simple."],
        group: ["Groups write a short sandstorm story with five people: what was each person doing when the storm started?"],
        quick: [
          { q: "Complete: My brother ___ (play) football when the wind blew.", a: "was playing" },
          { q: "Complete: People ___ (drive) when the sky turned orange.", a: "were driving" },
          { q: "Which tense do we use for the short action?", a: "The past simple (e.g. heard, started)." },
          { q: "Do we use while with the long or the short action?", a: "Usually with the long action (past continuous)." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u4l3", num: 3, skill: "Listening",
      title: "Street Interviews",
      pages: [66, 66],
      status: "complete",
      canDo: [
        "I can determine the main idea and both explicit and implicit details from a spoken text about street interviews.",
        "I can write short descriptions of jobs based on spoken context using appropriate vocabulary and structure."
      ],
      goals: ["Talk about your dream job.", "Listen to street interviews about jobs.", "Note skills and challenges in a table.", "Write clues and guess jobs."],
      goalsAr: ["أتحدّث عن وظيفة أحلامي.", "أستمع إلى مقابلات في الشارع عن الوظائف.", "أدوّن المهارات والتحديات في جدول.", "أكتب تلميحات وأخمّن الوظائف."],
      warmup: {
        title: "Before you listen",
        instructions: "Discuss the following questions.",
        image: null,
        emoji: "🎤",
        prompts: ["What is your dream job?", "What skills do you think your dream job requires?", "What challenges might you face?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to the street reporter asking three people about their jobs. Complete the following tasks.", page: 66, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "a. The interview was mainly about:",
          items: [
            { t: "mcq", q: "a. The interview was mainly about:", keyed: true,
              options: ["how to apply for a new job.", "hobbies people do in their free time.", "people’s favourite travel destinations.", "different jobs, required skills, and challenges."], answer: 3,
              hint: "What did the reporter ask the three people about?", why: "Answer key: 4. The three people talk about their jobs, the skills they need and the challenges they face." }
          ] },

        { type: "listen", title: "2. b. Listen again and complete the table with the person's name, job title, required skills and challenges faced.", page: 66, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "Listen again. Write the missing names, skills and challenges.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["", "Person", "Job", "Required Skills", "Challenges Faced"],
              rows: [
                ["1", "Dr Waleed", "Neurosurgeon", { model: "Focus, strong hands" }, { model: "Long hours and pressure" }],
                ["2", { model: "Ali" }, "Chef", "Creativity, speed, teamwork", { model: "Staying calm in rush hours" }],
                ["3", { model: "Hamad" }, "Oil Field Worker", { model: "Technical skills, mental toughness" }, "remote areas with extreme weather"]
              ],
              note: "Write while you listen. Tap Save to compare with the answers from the book.",
              hint: "Listen for the names of the chef and the oil field worker.",
              why: "Answer key: Dr Waleed – focus, strong hands / long hours and pressure. Ali (chef) – staying calm in rush hours. Hamad (oil field worker) – technical skills, mental toughness." }
          ] },

        { type: "listen", title: "2. c. Answer the following questions.", page: 66, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "Use your notes from the table and your own ideas.",
          items: [
            { t: "short", q: "1. Which of these jobs would you like to do in the future, and why?", model: "A chef, I love cooking.", hint: "I would like to be a … because …" },
            { t: "short", q: "2. What do you think is the most difficult part of each job?", model: "Pressure, rush hours, weather.", hint: "Look at the “Challenges Faced” column." }
          ] },

        { type: "write", title: "3. Guess the Job!", page: 66, source: "book",
          instructions: "a. Work in groups to guess the name of different jobs. 1. Choose a job from the list. 2. Write 3 - 4 clues about the job to describe it (without saying the job’s name).",
          notes: ["Job Title List: teacher, engineer, artist, police officer, nurse, driver, scientist, vet, firefighter, etc."],
          frame: [
            { label: "Clue 1", hint: "I wear a/an …" },
            { label: "Clue 2", hint: "I help people …" },
            { label: "Clue 3", hint: "I need …" },
            { label: "Clue 4", hint: "I work in a …" }
          ],
          model: "I wear a uniform and a helmet.\nI help people when there is a fire.\nI need a big red truck and water.\nI work in a fire station.\n(Job: firefighter)",
          modelFromBook: false,
          checklist: ["I did not say the job’s name.", "I wrote 3 or 4 clues.", "Each clue starts with a capital letter and ends with a full stop."],
          minWords: 15 },

        { type: "discuss", title: "3. b. Read your clues to your classmates. Can they guess your job?", page: 66, source: "book",
          prompts: ["Read your clues to your classmates. Can they guess your job?"],
          image: null, emoji: "🕵️", seconds: 120 },

        { type: "activity", title: "Extra Practice: Jobs, skills and challenges", source: "extra", stage: "guided",
          instructions: "Use the table in exercise 2b. Match each job with its skills.", instructionsAr: "استخدم جدول التمرين 2b وصِل كل وظيفة بمهاراتها.",
          items: [
            { t: "match", q: "Match the job with the required skills.",
              pairs: [["Neurosurgeon", "focus, strong hands"], ["Chef", "creativity, speed, teamwork"], ["Oil field worker", "technical skills, mental toughness"]],
              why: "These are the answers in the table (ex. 2b)." },
            { t: "match", q: "Match the job with the challenge.",
              pairs: [["Neurosurgeon", "long hours and pressure"], ["Chef", "staying calm in rush hours"], ["Oil field worker", "remote areas with extreme weather"]],
              why: "These are the answers in the table (ex. 2b)." }
          ] }
      ],
      game: { kind: "quiz", title: "Guess the Job!",
        items: [
          { t: "mcq", q: "I wear a white coat. I help sick animals. I work in a clinic.", options: ["vet", "driver", "artist"], answer: 0, why: "A vet helps sick animals." },
          { t: "mcq", q: "I wear a uniform. I help people stay safe. I work in a police station.", options: ["nurse", "police officer", "scientist"], answer: 1, why: "A police officer keeps people safe." },
          { t: "mcq", q: "I need paints and brushes. I make pictures.", options: ["artist", "engineer", "teacher"], answer: 0, why: "An artist paints pictures." },
          { t: "mcq", q: "I help students learn. I work in a school.", options: ["firefighter", "teacher", "vet"], answer: 1, why: "A teacher works in a school." },
          { t: "mcq", q: "I help sick people. I work in a hospital with doctors.", options: ["nurse", "driver", "engineer"], answer: 0, why: "A nurse looks after sick people." },
          { t: "mcq", q: "I do experiments. I work in a lab.", options: ["scientist", "police officer", "artist"], answer: 0, why: "A scientist does experiments in a laboratory." },
          { t: "mcq", q: "I need a bus. I take people to different places.", options: ["vet", "driver", "nurse"], answer: 1, why: "A driver takes people to places." }
        ] },
      teacher: {
        notes: [
          "Before you listen (ex. 1): pairs discuss their dream job, its skills and its challenges.",
          "Play track 4.1 (the book’s QR recording; it is not inside this app). Ex. 2a: choose the main idea.",
          "Play it again for the table (ex. 2b). Then ex. 2c: students give their own opinions.",
          "Answer key (from the book): 2a → 4 (different jobs, required skills, and challenges). 2b → Dr Waleed: focus, strong hands / long hours and pressure; 2 Ali (chef): staying calm in rush hours; 3 Hamad (oil field worker): technical skills, mental toughness.",
          "Ex. 3 Guess the Job!: groups write 3–4 clues (I wear…, I help people…, I need…, I work in a…) and read them to the class."
        ],
        pair: ["A describes a job from the table in one sentence; B names the person and the job.", "Pairs ask each other: Which job would you like to do? Why?"],
        group: ["Guess the Job! (ex. 3): each group reads its clues, the other groups guess."],
        quick: [
          { q: "What was the interview mainly about?", a: "Different jobs, required skills, and challenges." },
          { q: "What does a chef need?", a: "Creativity, speed and teamwork." },
          { q: "What challenge does an oil field worker face?", a: "Remote areas with extreme weather." },
          { q: "Give one clue for a firefighter.", a: "e.g. I wear a helmet. / I work in a fire station." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — SPEAKING ─────────────────────────
    {
      id: "u4l4", num: 4, skill: "Speaking",
      title: "Brave Workers, Risky Jobs",
      pages: [67, 67],
      status: "complete",
      canDo: [
        "I can present opinions clearly in spoken communication about high-risk jobs, giving clear reasons and relevant examples.",
        "I can demonstrate confidence and respect when presenting about high-risk jobs, using appropriate voice, intonation, and body language."
      ],
      goals: ["Talk about dangerous jobs.", "Rank jobs and give reasons.", "Name safety equipment and skills.", "Present a poster about a high-risk job."],
      goalsAr: ["أتحدّث عن الوظائف الخطرة.", "أرتّب الوظائف وأذكر الأسباب.", "أسمّي معدّات السلامة والمهارات.", "أقدّم ملصقًا عن وظيفة عالية الخطورة."],
      warmup: {
        title: "Think, Pair, Share",
        image: "crops/u4l4-jobs.jpg",
        emoji: "🚒",
        prompts: ["Why are these jobs dangerous?", "Can you name other dangerous jobs?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "activity", title: "2. Rank the given jobs from the most to the least dangerous. For each job, complete the following:", page: 67, source: "book",
          instructions: "a. Reasons: Explain why you placed the job at that danger level. Consider possible risks, the working environment, and common accidents. b. Equipment & Skills: List the essential safety equipment needed and the key skills required to perform the job safely and effectively.",
          instructionsAr: "رتّب الوظائف من الأخطر إلى الأقل خطورة، واكتب لكل وظيفة الأسباب ومعدّات السلامة والمهارات المطلوبة.",
          image: "crops/u4l4-jobs.jpg",
          items: [
            { t: "table", q: "Firefighter – Deep-sea Diver – Oil-field Worker", open: true,
              head: ["", "Most Dangerous Jobs", "Reasons", "Equipment or Skills"],
              rows: [
                ["1", { model: "Deep-sea Diver" }, { model: "Deep water, little air" }, { model: "Oxygen tank, swimming" }],
                ["2", { model: "Firefighter" }, { model: "Fire, smoke and heat" }, { model: "Helmet, fireproof suit" }],
                ["3", { model: "Oil-field Worker" }, { model: "Machines, extreme weather" }, { model: "Helmet, technical skills" }]
              ],
              note: "This is your opinion. Your order can be different. Give a reason for each job." }
          ] },

        { type: "activity", title: "3. Why are these jobs important to society? Explain your reasons.", page: 67, source: "book",
          instructions: "Discuss in groups. Then write your answer.",
          instructionsAr: "ناقش في مجموعتك لماذا هذه الوظائف مهمة للمجتمع، ثم اكتب إجابتك.",
          items: [
            { t: "short", q: "Why are these jobs important to society?", open: true, model: "They keep people safe and help our country.", hint: "They help… / They keep… / Without them…" }
          ] },

        { type: "speak", title: "Group Presentation", page: 67, source: "book",
          instructions: "a. In groups, choose a high-risk job from the list or a job of your choice: soldier – lifeguard – builder – electrician – policeman. b. Design a poster to present information about the high-risk job. You may talk about:",
          steps: ["The nature of the job.", "Why it is important for you.", "The dangers or risks involved.", "The reasons for choosing the job."],
          note: "Suggested Clues: Use full sentences. Listen to your classmates. Use words like dangerous, risky, accident, safety, etc. Smile and look at the audience when you speak.",
          record: true },

        { type: "discuss", title: "c. Group Feedback", page: 67, source: "book",
          prompts: ["Which poster did you admire the most? Why?", "Which job surprised you the most? Why?"],
          image: null, emoji: "👏", seconds: 120 },

        { type: "activity", title: "Extra Practice: Safety first", source: "extra", stage: "guided",
          instructions: "Match each job with its safety equipment. Then choose the right word.", instructionsAr: "صِل كل وظيفة بمعدّات السلامة الخاصة بها، ثم اختر الكلمة الصحيحة.",
          items: [
            { t: "match", q: "Match the job with the safety equipment.",
              pairs: [["Deep-sea diver", "an oxygen tank"], ["Firefighter", "a fireproof suit"], ["Builder", "a hard hat"], ["Lifeguard", "a rescue float"], ["Electrician", "rubber gloves"]],
              why: "Each job needs special equipment to keep the worker safe." },
            { t: "choose", q: "Firefighting is a (risky / safe) job.", options: ["risky", "safe"], answer: 0, why: "risky = dangerous." },
            { t: "choose", q: "Builders wear helmets to stay safe if there is an (accident / safety).", options: ["accident", "safety"], answer: 0, why: "An accident is something bad that happens suddenly." },
            { t: "choose", q: "Lifeguards are important for our (safety / danger) at the beach.", options: ["safety", "danger"], answer: 0, why: "safety = being safe." },
            { t: "choose", q: "Deep-sea diving is (dangerous / comfortable) because there is little air.", options: ["dangerous", "comfortable"], answer: 0, why: "Little air and deep water make it dangerous." }
          ] },

        { type: "speak", title: "Extra Practice: Give your opinion", source: "extra",
          instructions: "Practise with a partner. Give your opinion and a reason.",
          dialogue: [
            { who: "A", text: "Which job do you think is the most dangerous?" },
            { who: "B", text: "" },
            { who: "A", text: "Why do you think so?" },
            { who: "B", text: "" },
            { who: "A", text: "What equipment do they need to stay safe?" },
            { who: "B", text: "" }
          ],
          starters: ["In my opinion, … is the most dangerous job.", "I think so because …", "For example, …", "They need … to stay safe.", "This job is important because …"],
          record: true }
      ],
      game: { kind: "scramble", title: "Sentence Builder",
        sentences: [
          "Firefighters work in fire, smoke and heat.",
          "Deep-sea divers need an oxygen tank.",
          "In my opinion, diving is the most dangerous job.",
          "These jobs keep people safe.",
          "Builders wear helmets for safety."
        ] },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the firefighter, the deep-sea diver and the oil-field worker. Pairs answer a and b.",
          "Ex. 2: groups rank the three jobs and fill in reasons and equipment or skills. Any order is fine if the reasons are clear.",
          "Ex. 3: groups explain why these jobs are important to society.",
          "Group Presentation: each group chooses a high-risk job (soldier, lifeguard, builder, electrician, policeman or their own) and designs a poster. Remind them of the book’s tips: full sentences, listen to classmates, use dangerous / risky / accident / safety, smile and look at the audience.",
          "c. Group Feedback: the class says which poster they admired and which job surprised them."
        ],
        pair: ["A names a risky job; B gives one danger and one piece of safety equipment.", "Partners practise the “Give your opinion” dialogue and swap roles."],
        group: ["Poster presentation about a high-risk job (2–3 minutes per group)."],
        quick: [
          { q: "Why is firefighting dangerous?", a: "Fire, smoke and heat (any clear reason)." },
          { q: "What does a deep-sea diver need?", a: "An oxygen tank (and swimming skills)." },
          { q: "Name two other dangerous jobs.", a: "e.g. soldier, lifeguard, builder, electrician, policeman." },
          { q: "Why are these jobs important?", a: "They keep people safe and help our country (any good reason)." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — READING ─────────────────────────
    {
      id: "u4l5", num: 5, skill: "Reading",
      title: "Living the Dream: Job Stories",
      pages: [68, 69],
      status: "complete",
      canDo: [
        "I can analyse the main idea and both explicit and implicit details from a written text about job descriptions.",
        "I can determine the writer’s purpose from a written text about job stories, showing how the author’s intention is conveyed through language and content choices.",
        "I can infer word meaning from a written text about job stories to use them in meaningful contexts."
      ],
      goals: ["Read three job stories from around the world.", "Find the main idea and the writer’s purpose.", "Learn 13 new words.", "Write a short post about your future job."],
      goalsAr: ["أقرأ ثلاث قصص عن وظائف من حول العالم.", "أحدّد الفكرة الرئيسية وهدف الكاتب.", "أتعلّم 13 كلمة جديدة.", "أكتب منشورًا قصيرًا عن وظيفتي في المستقبل."],
      warmup: {
        title: "Before You Read",
        instructions: "Read only the job titles in the WorldJobs Feed. In groups, discuss the following questions.",
        image: "crops/u4l5-feed.jpg",
        emoji: "🌍",
        prompts: ["Which job is the most interesting to you? Why?", "Which of these jobs do you think is common in Kuwait? Which are rare?"],
        seconds: 90
      },
      vocab: [
        { w: "robotics", pos: "noun", emoji: "🤖", def: "the science of making and using robots", ex: "I work as a robotics engineer.", exFromBook: true, ar: "علم الروبوتات" },
        { w: "design", pos: "verb", emoji: "📐", def: "to plan and draw how something will be made", ex: "Every day, I help design and build new machines.", exFromBook: true, ar: "يصمّم" },
        { w: "machine", pos: "noun", emoji: "⚙️", def: "a thing with moving parts that does work", ex: "Every day, I help design and build new machines.", exFromBook: true, ar: "آلة" },
        { w: "space", pos: "noun", emoji: "🚀", def: "the area outside the Earth where the stars and planets are", ex: "I am a space scientist, studying planets and stars.", exFromBook: true, ar: "الفضاء" },
        { w: "planet", pos: "noun", emoji: "🪐", def: "a large round object that moves around a star, like Earth or Mars", ex: "The Mars rocket was sent to study the planet’s atmosphere.", exFromBook: true, ar: "كوكب" },
        { w: "launch", pos: "verb", emoji: "🛫", def: "to start something big, or to send a rocket into the sky", ex: "I am proud that the UAE launched the Emirates Mars Mission (Al-Amal) in 2020.", exFromBook: true, ar: "يُطلق" },
        { w: "mission", pos: "noun", emoji: "🎯", def: "an important trip or job with a special aim", ex: "I am proud that the UAE launched the Emirates Mars Mission (Al-Amal) in 2020.", exFromBook: true, ar: "مهمّة" },
        { w: "incredibly", pos: "adverb", emoji: "🤩", def: "very, very; extremely", ex: "Now, many new jobs are being created in the field of space science which is incredibly exciting for young scientists.", exFromBook: true, ar: "بشكل مذهل / للغاية" },
        { w: "retired", pos: "adjective", emoji: "👴", def: "no longer working because you are older", ex: "I am a retired wildlife photographer from Brazil.", exFromBook: true, ar: "متقاعد" },
        { w: "wildlife", pos: "noun", emoji: "🦜", def: "animals and plants that live in nature", ex: "I am a retired wildlife photographer from Brazil.", exFromBook: true, ar: "الحياة البرية" },
        { w: "rainforest", pos: "noun", emoji: "🌳", def: "a thick, wet forest in a hot part of the world", ex: "I took many amazing photos in the Amazon rainforest.", exFromBook: true, ar: "غابة مطيرة" },
        { w: "protect", pos: "verb", emoji: "🛡️", def: "to keep someone or something safe", ex: "Our team protected wild animals and often visited forests and rivers to photograph nature.", exFromBook: true, ar: "يحمي" },
        { w: "widely", pos: "adverb", emoji: "🌐", def: "by many people or in many places", ex: "Our work was widely enjoyed by many people, and it helped them learn about the environment.", exFromBook: true, ar: "على نطاق واسع" }
      ],
      sections: [
        { type: "reading", title: "WorldJobs Feed", page: 68,
          instructions: "2. Read the “WorldJobs Feed: Dream Job Holders” and complete the tasks.",
          blocks: [
            { head: "Akira, Japan\nRobotics Engineer · 👍 201",
              paras: ["My name is Akira and I live in Japan. I work as a robotics engineer. Robots are used in many hospitals and factories here. Every day, I help design and build new machines. I enjoy my job because technology makes people’s lives easier and safer."] },
            { head: "Fatima, UAE\nSpace Scientist · 👍 231",
              paras: ["Hello, I am Fatima from the United Arab Emirates. I am a space scientist, studying planets and stars. I am proud that the UAE launched the Emirates Mars Mission (Al-Amal) in 2020. The Mars rocket was sent to study the planet’s atmosphere. This was a great achievement for our country. Now, many new jobs are being created in the field of space science which is incredibly exciting for young scientists."] },
            { head: "Leo, Brazil\nWildlife Photographer · 👍 112",
              paras: ["My name is Leo. I am a retired wildlife photographer from Brazil. I took many amazing photos in the Amazon rainforest. Our team protected wild animals and often visited forests and rivers to photograph nature. Our work was widely enjoyed by many people, and [[it]] helped them learn about the environment. I felt proud of my job because we made a real difference and cared for the environment."] }
          ],
          image: "crops/u4l5-feed.jpg",
          note: "The underlined word “it” is for exercise 4b. Book box (p. 68): Use the passive voice e.g. “Our work was enjoyed ” to focus on the action, not the person." },

        { type: "activity", title: "3. The WorldJobs Feed is mainly about:", page: 68, source: "book",
          instructions: "Write the main idea of the WorldJobs Feed.",
          instructionsAr: "اكتب الفكرة الرئيسية للنص.",
          items: [
            { t: "short", q: "The WorldJobs Feed is mainly about:", model: "People’s dream jobs around the world.", keywords: [["job"], ["dream", "world", "people", "countr", "different"]],
              hint: "Three people from three countries talk about their jobs." }
          ] },

        { type: "activity", title: "4. Read the WorldJobs Feed again and complete the following tasks.", page: 69, source: "book",
          instructions: "a. In pairs, answer the following questions.",
          instructionsAr: "اقرأ النص مرة أخرى، وأجب مع زميلك عن الأسئلة.",
          items: [
            { t: "short", q: "1. What is Akira’s job?", model: "A robotics engineer.", keywords: [["robot"], ["engineer"]], hint: "Read Akira’s post." },
            { t: "short", q: "2. Why is the Mars Mission important for the UAE?", model: "It was a great achievement.", keywords: [["achievement", "atmosphere", "proud"]], hint: "Read Fatima’s post: “This was a great …”" },
            { t: "short", q: "3. How did Leo’s work help people?", model: "They learned about the environment.", keywords: [["learn"], ["environment", "nature"]], hint: "Read the sentence with the underlined word “it”." },
            { t: "short", q: "4. What do the three people in the passage have in common?", model: "They are proud of their jobs.", keywords: [["proud", "enjoy", "love", "like", "happy"]], hint: "How do they feel about their jobs?" }
          ] },

        { type: "activity", title: "4. b. Choose the correct answer from a,b,c or d.", page: 69, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. The pronoun \"it\" in the 3rd paragraph refers to:", options: ["nature", "our work", "Brazil", "team"], answer: 1,
              hint: "Read the sentence: “Our work was widely enjoyed by many people, and it helped them…”", why: "What helped people learn about the environment? Our work." },
            { t: "mcq", q: "2. The main purpose of the writer is to:", options: ["explain how to choose a job.", "show how to apply for a job.", "share real people’s job experiences.", "compare jobs in technology."], answer: 2,
              hint: "Each person tells the story of their own job.", why: "Akira, Fatima and Leo share their own job experiences." }
          ] },

        { type: "activity", title: "5. a. Read the sentences and write the meanings of the underlined words using the glossary at the end of the book.", page: 69, source: "book",
          instructions: "Write the meaning of the underlined word.",
          instructionsAr: "اكتب معنى الكلمة التي تحتها خط.",
          items: [
            { t: "fill", q: "1. The UAE [[launched]] the Emirates Mars Mission (Al-Amal) in 2020. (____)", answer: ["started", "began", "sent", "sent off", "started it"],
              hint: "The rocket left the Earth in 2020. The mission …", why: "launched = started (the mission) / sent (the rocket) into space." },
            { t: "fill", q: "2. Our team [[protected]] animals. (____)", answer: ["kept safe", "kept them safe", "kept animals safe", "saved", "looked after", "guarded"],
              hint: "Two words: kept + …", why: "protected = kept safe." }
          ] },

        { type: "activity", title: "5. b. Use one of the underlined words to form a new sentence.", page: 69, source: "book",
          instructions: "Use launch or protect in a sentence of your own.", instructionsAr: "استخدم إحدى الكلمتين launch أو protect في جملة جديدة.",
          items: [
            { t: "short", q: "My sentence:", open: true, model: "We should protect wild animals and plants.", hint: "We should protect … / Kuwait launched …" }
          ] },

        { type: "write", title: "6. Social Media Post", page: 69, source: "book",
          instructions: "a. Write 2 - 3 sentences about a job you would like to do in the future. Explain why you chose this job.",
          frame: [{ label: "WorldJobs Feed", hint: "I would like to be a … in the future. …", lines: 4 }],
          model: "I would like to be a doctor in the future. I want to help sick people and save lives. I chose this job because I love science.",
          modelFromBook: false,
          modelLabel: "Sample answer (from the answer key – yours can be different)",
          bookNote: "Did I .......",
          bookChecklist: ["explain why I chose this job?", "check my spelling?", "check my punctuation marks?", "draw a profile picture?"],
          checklist: ["I wrote 2 or 3 sentences.", "I used because to give a reason."],
          minWords: 20 },

        { type: "discuss", title: "6. b. Share your post with your group or the class.", page: 69, source: "book",
          prompts: ["Share your post with your group or the class."],
          image: null, emoji: "📱", seconds: 120 },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Akira lives in Japan.", options: ["True", "False"], answer: 0, why: "“My name is Akira and I live in Japan.”" },
            { t: "mcq", q: "Robots are not used in hospitals in Japan.", options: ["True", "False"], answer: 1, why: "“Robots are used in many hospitals and factories here.”" },
            { t: "mcq", q: "The UAE launched the Mars Mission in 2020.", options: ["True", "False"], answer: 0, why: "“…launched the Emirates Mars Mission (Al-Amal) in 2020.”" },
            { t: "mcq", q: "Leo still works as a photographer.", options: ["True", "False"], answer: 1, why: "He is retired: he does not work now." },
            { t: "mcq", q: "Leo took photos in the Amazon rainforest.", options: ["True", "False"], answer: 0, why: "“I took many amazing photos in the Amazon rainforest.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "My grandfather does not work now. He is (retired / incredibly).", options: ["retired", "incredibly"], answer: 0, why: "retired = no longer working." },
            { t: "choose", q: "Mars is a (planet / machine).", options: ["planet", "machine"], answer: 0, why: "Mars is a planet." },
            { t: "choose", q: "We must (protect / launch) the sea turtles.", options: ["protect", "launch"], answer: 0, why: "protect = keep safe." },
            { t: "choose", q: "Lions and parrots are (wildlife / robotics).", options: ["wildlife", "robotics"], answer: 0, why: "wildlife = animals and plants in nature." },
            { t: "choose", q: "English is (widely / retired) spoken around the world.", options: ["widely", "retired"], answer: 0, why: "widely = by many people, in many places." },
            { t: "choose", q: "The scientists will (launch / protect) a new rocket next year.", options: ["launch", "protect"], answer: 0, why: "launch = send a rocket into the sky." }
          ] },

        { type: "activity", title: "Extra Practice: Find the passive", source: "extra", stage: "independent",
          instructions: "The book box says: use the passive voice to focus on the action. Which sentence is passive?", instructionsAr: "أيّ جملة في المبني للمجهول؟",
          items: [
            { t: "mcq", q: "Which sentence is passive?", options: ["Robots are used in many hospitals and factories here.", "I help design and build new machines."], answer: 0, why: "are + used (past participle) = passive." },
            { t: "mcq", q: "Which sentence is passive?", options: ["I took many amazing photos.", "The Mars rocket was sent to study the planet’s atmosphere."], answer: 1, why: "was + sent (past participle) = passive." },
            { t: "mcq", q: "Which sentence is passive?", options: ["Our work was widely enjoyed by many people.", "Our team protected wild animals."], answer: 0, why: "was + enjoyed = passive. We focus on the work, not the people." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before you read (ex. 1): students read only the three job titles and discuss the two questions in groups.",
          "Pre-teach the 13 words with emoji and Arabic (robotics, design, machine, space, planet, launch, mission, incredibly, retired, wildlife, rainforest, protect, widely).",
          "Read the three posts. Ex. 3: main idea (people’s dream jobs around the world).",
          "Ex. 4a in pairs; 4b: “it” = our work; the writer’s purpose = share real people’s job experiences.",
          "Ex. 5: launched = started; protected = kept safe; then a new sentence. Ex. 6: a 2–3 sentence post, then share it."
        ],
        pair: ["A reads a job title; B says the name, the country and one detail.", "Partners check each other’s post with the “Did I …” checklist."],
        group: ["Groups make a “WorldJobs Feed” wall: each student adds a post about a future job."],
        quick: [
          { q: "What is Akira’s job?", a: "A robotics engineer." },
          { q: "What does “it” refer to in Leo’s post?", a: "Our work." },
          { q: "What does “retired” mean?", a: "No longer working (because you are older)." },
          { q: "What is the writer’s main purpose?", a: "To share real people’s job experiences." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — GRAMMAR ─────────────────────────
    {
      id: "u4l6", num: 6, skill: "Grammar",
      title: "Passive Voice (Past Simple)",
      pages: [70, 70],
      status: "complete",
      canDo: [
        "I can use the past simple passive accurately in written, oral communication to describe actions and events in different contexts.",
        "I can transform active sentences into the past simple passive in written communication accurately in different contexts.."
      ],
      goals: ["Use was/were + past participle.", "Change active sentences into the passive.", "Write about Kuwait’s achievements."],
      goalsAr: ["أستخدم was/were + التصريف الثالث للفعل.", "أحوّل الجمل من المبني للمعلوم إلى المبني للمجهول.", "أكتب عن إنجازات الكويت."],
      warmup: {
        title: "Look at the following pictures of achievements in Kuwait.",
        image: "crops/u4l6-achievements.jpg",
        emoji: "🏛️",
        prompts: ["1- The first oil field was discovered in 1933.", "2- The first hospital in Kuwait was built in 1914.", "3- The first school in Kuwait was opened in 1911."],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Passive Voice (Past Simple)", page: 70,
          steps: [
            { title: "Step 1 — From the book",
              text: "The passive voice is used to focus on the action rather than on who did it. Form: was/were + past participle",
              textAr: "نستخدم المبني للمجهول لنركّز على الحدث وليس على من قام به. الصيغة: was/were + التصريف الثالث للفعل.",
              examples: ["The first oil field {a:was} {v:discovered} in 1933.", "The first hospital in Kuwait {a:was} {v:built} in 1914.", "The first school in Kuwait {a:was} {v:opened} in 1911."] },
            { title: "Step 2 — was or were?", source: "extra",
              text: "One thing (singular) → was. Two or more things (plural) → were.",
              textAr: "مع المفرد نستخدم was، ومع الجمع نستخدم were.",
              examples: ["{s:The mosque} {a:was} {v:built} in 1998.", "{s:New jobs} {a:were} {v:created} by the government."] },
            { title: "Step 3 — The past participle", source: "extra",
              text: "Regular verbs add -ed: open → opened, discover → discovered, repair → repaired. Irregular verbs change: build → built, make → made, send → sent.",
              textAr: "الأفعال المنتظمة نضيف لها ed، والأفعال الشاذة يتغيّر شكلها مثل build ← built و make ← made.",
              examples: ["My car {a:was} {v:repaired} last week.", "This film {a:was} {v:made} ten years ago."] },
            { title: "Step 4 — From active to passive", source: "extra",
              text: "1. The object of the active sentence becomes the subject. 2. Add was/were + past participle. 3. Add by + the doer only if it is important.",
              textAr: "1. المفعول به في الجملة المعلومة يصبح فاعلًا. 2. نضيف was/were + التصريف الثالث. 3. نضيف by + الفاعل فقط إذا كان مهمًا.",
              examples: ["Active: {s:Engineers} {v:built} {o:the mosque} in 1998.", "Passive: {o:The mosque} {a:was} {v:built} in 1998 by engineers."] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Do not forget was/were, and use the past participle, not the base verb.",
              textAr: "لا تنسَ was/were، واستخدم التصريف الثالث للفعل وليس الفعل الأساسي.",
              examples: ["✗ The bridges {n:was} built. → ✓ The bridges {a:were} {v:built}.", "✗ My car {n:was repair}. → ✓ My car {a:was} {v:repaired}.", "✗ The mosque {n:built} in 1998. → ✓ The mosque {a:was} {v:built} in 1998."] }
          ],
          table: {
            head: ["Active voice", "Passive Voice"],
            rows: [
              ["Engineers built the mosque in 1998.", "The mosque {a:was} {v:built} in 1998 by engineers."],
              ["The government created new jobs.", "New jobs {a:were} {v:created} by the government."]
            ]
          },
          worked: {
            q: "Complete: The bridges ____ (build) last year.",
            steps: [
              "Who did it? We do not know. We focus on the bridges → passive.",
              "The bridges = plural → were.",
              "build is irregular: build → built.",
              "were + built."
            ],
            a: "{s:The bridges} {a:were} {v:built} last year."
          },
          notes: ["Form (book): was/were + past participle."] },

        { type: "activity", title: "2. Complete the sentences with the past passive form of the verbs.", page: 70, source: "book", stage: "guided",
          instructions: "Write was/were + past participle.", instructionsAr: "اكتب was/were + التصريف الثالث للفعل.",
          items: [
            { t: "fill", q: "a. My car ____ (repair) last week.", answer: ["was repaired"], hint: "My car = one thing.", why: "Singular → was + repaired." },
            { t: "fill", q: "b. The bridges ____ (build) last year.", answer: ["were built"], hint: "The bridges = plural. build is irregular.", why: "Plural → were + built." },
            { t: "fill", q: "c. This film ____ (make) ten years ago.", answer: ["was made"], hint: "make is irregular.", why: "Singular → was + made." },
            { t: "fill", q: "d. Beautiful paintings ____ (display) in the Art Fair.", answer: ["were displayed"], hint: "paintings = plural.", why: "Plural → were + displayed." }
          ] },

        { type: "activity", title: "3. “Kuwait’s Great Achievements” Poster", page: 70, source: "book", stage: "independent",
          instructions: "a. Write 3 sentences using passive voice (Past Simple) to show national achievements. Use the Info Guide: Kuwait Towers → 1979 · The Internet → 1990 · The Avenues → 2007.",
          instructionsAr: "اكتب ثلاث جمل في المبني للمجهول (الماضي البسيط) عن إنجازات وطنية، واستخدم السنوات في دليل المعلومات.",
          items: [
            { t: "fill", q: "Kuwait Towers ____ (build)", answer: ["were built in 1979", "were built"], hint: "Info Guide: Kuwait Towers → 1979.", why: "Kuwait Towers (plural) were built in 1979." },
            { t: "fill", q: "The Internet ____ (launch)", answer: ["was launched in 1990", "was launched"], hint: "Info Guide: The Internet → 1990.", why: "The Internet was launched in 1990." },
            { t: "fill", q: "The Avenues ____ (open)", answer: ["was opened in 2007", "was opened"], hint: "Info Guide: The Avenues → 2007.", why: "The Avenues (one shopping centre) was opened in 2007." }
          ] },

        { type: "write", title: "3. b. Design a small poster with a title, sentences, and images to show Kuwaiti's achievements.", page: 70, source: "book",
          instructions: "Write a title and three passive sentences for your poster. Then add pictures in your notebook or on paper.",
          frame: [
            { label: "Title", hint: "Kuwait’s Great Achievements" },
            { label: "Sentence 1", hint: "… was/were + past participle in …" },
            { label: "Sentence 2", hint: "… was/were + past participle in …" },
            { label: "Sentence 3", hint: "… was/were + past participle in …" }
          ],
          model: "Kuwait’s Great Achievements\nThe first school in Kuwait was opened in 1911.\nKuwait Towers were built in 1979.\nThe Avenues was opened in 2007.",
          modelFromBook: false,
          checklist: ["I used was or were + past participle.", "I used was with one thing and were with plural.", "I wrote the year with in.", "Each sentence ends with a full stop."],
          minWords: 15 },

        { type: "activity", title: "Extra Practice: Step 1 — was or were?", source: "extra", stage: "guided",
          instructions: "Choose was or were.", instructionsAr: "اختر was أو were.",
          items: [
            { t: "choose", q: "The first school in Kuwait (was / were) opened in 1911.", options: ["was", "were"], answer: 0, why: "One school → was." },
            { t: "choose", q: "Many new hospitals (was / were) built after the discovery of oil.", options: ["was", "were"], answer: 1, why: "hospitals = plural → were." },
            { t: "choose", q: "The letters (was / were) sent yesterday.", options: ["was", "were"], answer: 1, why: "letters = plural → were." },
            { t: "choose", q: "The window (was broken / broke) by the wind.", options: ["was broken", "broke"], answer: 0, why: "by the wind → passive: was broken." },
            { t: "choose", q: "The poster was (design / designed) by our group.", options: ["design", "designed"], answer: 1, why: "was + past participle: designed." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Active to passive", source: "extra", stage: "guided",
          instructions: "Put the words in order to make the passive sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة في المبني للمجهول.",
          items: [
            { t: "order", q: "Active: Engineers built the bridge in 2010.", words: ["The", "bridge", "was", "built", "in", "2010."], answer: ["The bridge was built in 2010."], hint: "Start with the object: The bridge.", why: "The bridge (singular) + was + built." },
            { t: "order", q: "Active: The teacher opened the windows.", words: ["The", "windows", "were", "opened", "by", "the", "teacher."], answer: ["The windows were opened by the teacher."], hint: "Start with The windows.", why: "windows (plural) + were + opened + by the teacher." },
            { t: "order", q: "Active: My brother made this cake.", words: ["This", "cake", "was", "made", "by", "my", "brother."], answer: ["This cake was made by my brother."], hint: "Start with This cake.", why: "This cake + was + made (irregular)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "يوجد خطأ واحد. اكتب الكلمة الصحيحة.",
          items: [
            { t: "fix", q: "The new jobs {was} created by the government.", answer: ["were"], hint: "jobs = plural.", why: "Plural → were created." },
            { t: "fix", q: "The mosque was {build} in 1998.", answer: ["built"], hint: "was + past participle.", why: "build → built." },
            { t: "fix", q: "My bike was {repair} last week.", answer: ["repaired"], hint: "was + past participle (-ed).", why: "repair → repaired." },
            { t: "fix", q: "The first hospital in Kuwait {were} built in 1914.", answer: ["was"], hint: "hospital = singular.", why: "Singular → was built." },
            { t: "short", q: "Write one sentence in the passive about your school.", open: true, model: "Our school was built in 2005.", hint: "Our school was opened / built in …" }
          ] }
      ],
      game: { kind: "sort", title: "was or were?",
        buckets: ["was + past participle", "were + past participle"],
        cards: [["My car", 0], ["The first school", 0], ["This film", 0], ["The mosque", 0], ["The bridges", 1], ["New jobs", 1], ["Beautiful paintings", 1], ["Kuwait Towers", 1]] },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the three pictures. Read the three sentences. Ask: Who discovered / built / opened them? (We do not know, it is not important.)",
          "Teach the box: the passive focuses on the action; was/were + past participle. Use the active/passive table.",
          "Do the worked example, the Grammar Lab and exercise 2.",
          "Ex. 3a: students use the Info Guide to write about Kuwait Towers, the Internet and the Avenues. Ex. 3b: small poster (title, sentences, images).",
          "Finish with the Predict challenge and the extra steps."
        ],
        pair: ["A says an active sentence (Engineers built the bridge.); B changes it into the passive.", "Pairs quiz each other on past participles: build → built, make → made, open → opened."],
        group: ["Groups make the “Kuwait’s Great Achievements” poster and read their sentences to the class."],
        quick: [
          { q: "Form of the past simple passive?", a: "was/were + past participle" },
          { q: "Complete: The bridges ___ (build) last year.", a: "were built" },
          { q: "Make passive: The government created new jobs.", a: "New jobs were created by the government." },
          { q: "Why do we use the passive?", a: "To focus on the action, not on who did it." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u4l7", num: 7, skill: "Writing",
      title: "My Dream Job",
      pages: [71, 72],
      status: "complete",
      canDo: [
        "I can write a two-paragraph expository report about my dream job, after planning and organising ideas into a topic sentence, supporting details, and a concluding sentence.",
        "I can use appropriate linking words accurately to connect ideas, maintaining coherence in my writing report.",
        "I can write a well-structured expository report about a dream job and the required skills using correct structure and formatting."
      ],
      goals: ["Match skills with jobs.", "Find the topic sentence and supporting details.", "Use and, in addition, as a result, although.", "Plan and write a two-paragraph report."],
      goalsAr: ["أطابق المهارات مع الوظائف.", "أحدّد الجملة الرئيسية والتفاصيل الداعمة.", "أستخدم and و in addition و as a result و although.", "أخطّط وأكتب تقريرًا من فقرتين."],
      linkers: ["and", "in addition", "as a result", "although"],
      warmup: {
        title: "My Dream Job",
        source: "extra",
        image: null,
        emoji: "🧑‍✈️",
        prompts: ["What job would you like to do in the future?", "What skills do you need for this job?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. a. Match each skill with the most suitable job title from the list.", page: 71, source: "book",
          instructions: "(builder – chef – teacher – doctor – artist – pilot)",
          instructionsAr: "صِل كل مجموعة مهارات بالوظيفة الأنسب من القائمة.",
          items: [
            { t: "match", q: "Skill → Job",
              pairs: [
                ["Using colours well, being creative, paying attention to details", "artist"],
                ["Working hard, solving problems, good at science", "doctor"],
                ["Explaining ideas, speaking clearly, caring for students, and managing a class", "teacher"],
                ["Making good decisions, staying calm, following rules, keep passengers safe", "pilot"],
                ["Creative, working fast, following recipes", "chef"],
                ["Using tools safely, being strong, following plans", "builder"]
              ],
              hint: "Look for key words: colours, science, students, passengers, recipes, tools.",
              why: "colours → artist; science → doctor; students → teacher; passengers → pilot; recipes → chef; tools and plans → builder." }
          ] },

        { type: "activity", title: "1. b. Discuss the following questions.", page: 71, source: "book",
          instructions: "Discuss with your partner. Then write your answers.",
          instructionsAr: "ناقش زميلك ثم اكتب إجاباتك.",
          items: [
            { t: "short", q: "1- Which job would you like? Why?", open: true, model: "A pilot, I love travelling.", hint: "I would like to be a … because …" },
            { t: "short", q: "2- Do you think one skill can fit more than one job?", open: true, model: "Yes, like being creative.", hint: "Yes, like … / No, because …" }
          ] },

        { type: "reading", title: "2. Read the paragraph carefully.", page: 71,
          instructions: "Read the paragraph carefully. Then, complete the tasks below to analyse how the writer organises and connects ideas.",
          paras: [
            "Technology has greatly changed the way students learn in the classroom. Many schools now use tablets instead of textbooks, allowing students to access information quickly and interact with learning materials. In addition, teachers use digital tools like smart boards and learning apps to make lessons more engaging. Some students even take virtual classes from home. [[As a result]], learning today is faster, more flexible, and more connected than ever before. [[Although]] technology makes learning easier, some students still prefer traditional books and face-to-face classes."
          ],
          speaker: null,
          note: "The underlined linking words (As a result, Although) are for task c." },

        { type: "activity", title: "2. a. Underline the topic sentence (the main idea of the paragraph).", page: 71, source: "book",
          instructions: "Choose the topic sentence.", instructionsAr: "اختر الجملة الرئيسية (الفكرة الرئيسية للفقرة).",
          items: [
            { t: "mcq", q: "Which sentence is the topic sentence?",
              options: ["Technology has greatly changed the way students learn in the classroom.", "Some students even take virtual classes from home.", "As a result, learning today is faster, more flexible, and more connected than ever before."], answer: 0,
              hint: "The topic sentence gives the main idea. It is often the first sentence.", why: "The first sentence gives the main idea: technology has changed how students learn." }
          ] },

        { type: "activity", title: "2. b. Highlight two supporting details that explain or give examples.", page: 71, source: "book",
          instructions: "Choose one supporting detail in each question.", instructionsAr: "اختر تفصيلًا داعمًا في كل سؤال.",
          items: [
            { t: "mcq", q: "Supporting detail 1:",
              options: ["Technology has greatly changed the way students learn in the classroom.", "Many schools now use tablets instead of textbooks", "Although technology makes learning easier"], answer: 1,
              hint: "Which one gives an example?", why: "Tablets instead of textbooks is an example of how technology changed learning." },
            { t: "mcq", q: "Supporting detail 2:",
              options: ["teachers use digital tools like smart boards and learning apps", "Technology has greatly changed the way students learn in the classroom.", "some students still prefer traditional books and face-to-face classes"], answer: 0,
              hint: "Look for the word “like” (it gives examples).", why: "Smart boards and learning apps are examples of digital tools." }
          ] },

        { type: "activity", title: "2. c. Read the underlined linking words in the paragraph.", page: 71, source: "book",
          instructions: "Then, complete the following sentences by writing their correct function from the box. Function Box: add extra information · contrast two ideas · show cause and effect · give an example",
          instructionsAr: "اكتب وظيفة كل أداة ربط من الصندوق.",
          items: [
            { t: "fill", q: "- as a result is used to ____", answer: ["show cause and effect"], bank: ["add extra information", "contrast two ideas", "show cause and effect", "give an example"],
              hint: "What happened because of technology?", why: "as a result shows the effect (result) of a cause." },
            { t: "fill", q: "- although is used to ____", answer: ["contrast two ideas"], bank: ["add extra information", "contrast two ideas", "show cause and effect", "give an example"],
              hint: "Technology makes learning easier, but some students prefer books.", why: "although joins two different (opposite) ideas." }
          ] },

        { type: "write", title: "3. Plan and write a two-paragraph report describing your dream job and explaining the required skills to succeed in this job.", page: 72, source: "book",
          instructions: "Choosing the right job can help you build a successful and happy future. a. Complete the following outline with your ideas. b. Use the ideas in your plan to write the report in your notebook. c. Use the following checklist to edit your writing.",
          wordBank: ["and", "in addition", "as a result", "although"],
          wordBankLabel: "Linker Bank",
          frame: [
            { label: "Introduction", hint: "Choosing a dream job is …" },
            { label: "Paragraph 1: My dream job – Topic sentence", hint: "My dream job is to become a …" },
            { label: "Paragraph 1 – Supporting details (at least two)", hint: "I want to … / … work in …", lines: 3 },
            { label: "Paragraph 1 – Concluding sentence", hint: "That is why …" },
            { label: "Paragraph 2: Required skills to succeed in this job – Topic sentence", hint: "A … needs many skills to succeed." },
            { label: "Paragraph 2 – Supporting details (at least two)", hint: "First, … In addition, …", lines: 3 },
            { label: "Paragraph 2 – Concluding sentence", hint: "As a result, …" },
            { label: "Conclusion", hint: "In conclusion, …" }
          ],
          model: "Choosing a dream job is important for a happy future.\nMy dream job is to become a doctor. I want to help sick people and save lives. Doctors work in hospitals and clinics. That is why I love this job.\nA doctor needs many skills to succeed. First, doctors must be patient and caring. In addition, they need to study science hard. As a result, they can treat people well.\nIn conclusion, I will work hard to make my dream come true.",
          modelFromBook: false,
          modelLabel: "Sample answer (from the answer key – yours can be different)",
          bookNote: "Remember to:",
          bookChecklist: [
            "begin with a clear introduction about your dream job.",
            "write two paragraphs: one about your dream job and one about the skills needed.",
            "include a clear topic sentence in each paragraph.",
            "write at least two supporting details with examples in each paragraph.",
            "use linking words (e.g. in addition, as a result, although).",
            "write full sentences with correct grammar and spelling.",
            "end each paragraph with a concluding sentence.",
            "write a conclusion that summarises your ideas."
          ],
          note: "ATTENTION: Use AI wisely and responsibly.",
          minWords: 70 },

        { type: "activity", title: "Extra Practice: Choose the linking word", source: "extra", stage: "guided",
          instructions: "Choose the best linking word.", instructionsAr: "اختر أداة الربط المناسبة.",
          items: [
            { t: "choose", q: "Pilots must stay calm (and / although) follow the rules.", options: ["and", "although"], answer: 0, why: "and adds another idea." },
            { t: "choose", q: "Chefs work fast. (In addition / Although), they follow recipes carefully.", options: ["In addition", "Although"], answer: 0, why: "In addition adds extra information." },
            { t: "choose", q: "He studied science hard. (As a result / Although), he became a doctor.", options: ["As a result", "Although"], answer: 0, why: "As a result shows the effect." },
            { t: "choose", q: "(Although / As a result) the job is difficult, she loves it.", options: ["Although", "As a result"], answer: 0, why: "Although contrasts two ideas: difficult ↔ loves it." },
            { t: "choose", q: "Builders use tools safely. (As a result / Although), there are fewer accidents.", options: ["As a result", "Although"], answer: 0, why: "Fewer accidents is the result." }
          ] },

        { type: "activity", title: "Extra Practice: Which part of the paragraph?", source: "extra", stage: "independent",
          instructions: "Read the sentence from a report about a pilot. Is it a topic sentence, a supporting detail or a concluding sentence?", instructionsAr: "حدّد نوع الجملة: رئيسية أم داعمة أم ختامية.",
          items: [
            { t: "mcq", q: "“My dream job is to become a pilot.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It gives the main idea of the paragraph." },
            { t: "mcq", q: "“Pilots fly people to many different countries.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It explains the main idea with an example." },
            { t: "mcq", q: "“That is why I want to be a pilot.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2, why: "It ends the paragraph and repeats the main idea." }
          ] }
      ],
      game: { kind: "sort", title: "What does the linker do?",
        buckets: ["add extra information", "show cause and effect", "contrast two ideas"],
        cards: [["and", 0], ["in addition", 0], ["also", 0], ["as a result", 1], ["so", 1], ["although", 2], ["but", 2], ["however", 2]] },
      teacher: {
        notes: [
          "Ex. 1a: pairs match the six skill groups with the jobs (artist, doctor, teacher, pilot, chef, builder). Ex. 1b: quick discussion.",
          "Ex. 2: read the model paragraph. a. topic sentence = the first sentence; b. supporting details = tablets instead of textbooks / digital tools like smart boards and learning apps; c. as a result = show cause and effect, although = contrast two ideas.",
          "Ex. 3a: students complete the outline (introduction, two paragraphs, conclusion). Show the sample plan only after they try.",
          "Ex. 3b–c: they write the report in their notebooks and edit it with the “Remember to” checklist. Remind them: use AI wisely and responsibly."
        ],
        pair: ["Partners swap outlines and find each other’s topic sentences and linking words.", "A says a job; B says two skills for it."],
        group: ["Groups build a class “Dream Jobs” wall with one report from each group."],
        quick: [
          { q: "Which job needs following recipes?", a: "Chef." },
          { q: "What is a topic sentence?", a: "The sentence with the main idea of the paragraph." },
          { q: "What does “although” do?", a: "It contrasts two ideas." },
          { q: "How many paragraphs are in the report?", a: "Two (plus an introduction and a conclusion)." }
        ]
      }
    }
  ]
});

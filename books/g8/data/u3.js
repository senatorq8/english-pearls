// Unit 3 — How We Live (Module 1: Life Experiences, printed pages 27–32)
BOOK.addUnit({
  id: "u3", num: 3, title: "How We Live", titleAr: "كيف نعيش",
  module: 1, moduleTitle: "Life Experiences",
  pages: [27, 32],
  cover: 13,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Make inferences",
      "Make decisions and choices",
      "Describe characters",
      "Retell part of a story",
      "Express opinions",
      "Ask for and give information",
      "Express wishes",
      "Talk about abilities"
    ],
    "language structures": [
      "Use present perfect",
      "Use (since/for)",
      "Form questions using “How long”",
      "Use intensifiers (too… to/so…that)",
      "Use capitalization and punctuation",
      "Use ‘can/cannot’"
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
      id: "u3l1", num: 1, skill: "Reading",
      title: "How We Live",
      pages: [27, 28],
      status: "complete",
      canDo: ["Make inferences.", "Make decisions and choices.", "Describe characters.", "Express opinions."],
      goals: ["Read a story about a mechanic.", "Give the story a title.", "Find the characters, setting and events.", "Learn 8 new words."],
      goalsAr: ["أقرأ قصة عن ميكانيكي.", "أضع عنوانًا للقصة.", "أحدّد الشخصيات والمكان والأحداث.", "أتعلّم 8 كلمات جديدة."],
      warmup: {
        title: "Before you read — Discuss in pairs:",
        image: "crops/u3l1-warmup.jpg",
        emoji: "📖",
        prompts: ["Do you enjoy reading stories? Why?", "Name a story you know. What is it about?"],
        seconds: 90
      },
      vocab: [
        { w: "separate", pos: "adjective", emoji: "🧩", def: "not joined; different", ex: "It has three separate workshops and he employs forty mechanics and over a hundred other staff.", exFromBook: true, ar: "منفصل" },
        { w: "employ", pos: "verb", emoji: "👷", def: "to give someone a job and pay them", ex: "It’s hard to keep track of all the workers, so dad employs a foreman named Antonio.", exFromBook: true, ar: "يوظّف" },
        { w: "foreman", pos: "noun", emoji: "🦺", def: "the person who checks and leads a group of workers", ex: "Dad employs a foreman named Antonio.", exFromBook: true, ar: "رئيس العمّال" },
        { w: "wage", pos: "noun", emoji: "💵", def: "money you get for your work (often every week)", ex: "He also pays the men’s wages.", exFromBook: true, ar: "أجر" },
        { w: "instead of", pos: "preposition", emoji: "🔄", def: "in the place of; not doing one thing but doing another", ex: "He would sit under a tree and spend the days singing to himself instead of working.", exFromBook: true, ar: "بدلًا من" },
        { w: "trap", pos: "noun", emoji: "🪤", def: "a clever plan to catch someone", ex: "After a while, Antonio found out what Don was doing. He set a trap.", exFromBook: true, ar: "فخّ" },
        { w: "drop out", pos: "phrasal verb", emoji: "⬇️", def: "(here) to fall or jump down out of something; also: to leave school or a course early", ex: "All of a sudden, Antonio dropped out of the tree and looked him in the eye.", exFromBook: true, ar: "يسقط من / ينسحب" },
        { w: "jobless", pos: "adjective", emoji: "🚫💼", def: "without a job", ex: "Since then he has been jobless.", exFromBook: true, ar: "عاطل عن العمل" }
      ],
      sections: [
        { type: "reading", title: "2. Read this story and give it a title.", page: 27,
          paras: [
            "My dad runs a garage just outside the city. It’s the biggest garage in town. It’s a family business and my dad is really proud of what he has achieved. All the rich people bring their expensive cars to him to be serviced and repaired. Last year, a mechanic named Don came to work for my dad, but he didn’t stay long.",
            "Dad’s garage is huge. It has three separate workshops and he employs forty mechanics and over a hundred other staff. It’s hard to keep track of all the workers, so dad employs a foreman named Antonio. He’s a short, heavy man, and he moves slowly, but he has a lot of power. His job is to check what the mechanics are doing and to tell them what they’re supposed to do. He also pays the men’s wages.",
            "At first, Don worked hard. He was young, tall, slim and quick with his hands. He fixed the cars faster and better than anyone. He was a rising star among the mechanics in the workshops.",
            "After a while, Don became too proud of himself and started cheating. That was the beginning of his real trouble. He found a quiet place outside the garage, where no one could see or hear him. He would sit under a tree and spend the days singing to himself instead of working.",
            "‘You like to think I’m working, but I’m not,’ he sang.",
            "After a while, Antonio found out what Don was doing. He set a trap.",
            "One morning, before Don arrived at work, he climbed up the tree and waited for Don to arrive.",
            "An hour later, Don, as usual, came to sit under the tree. ‘You like to think I’m working, but I’m not,’ he started singing.",
            "All of a sudden, Antonio dropped out of the tree and looked him in the eye. He sang to the same tune Don had used:",
            "‘You like to think I’m going to pay you, but I’m not!’",
            "And that’s how Don lost his job at my dad’s garage. Since then he has been jobless."
          ],
          speaker: null },

        { type: "activity", title: "2. Give the story a title.", page: 27, source: "book",
          instructions: "Read this story and give it a title.", instructionsAr: "اقرأ القصة واقترح لها عنوانًا.",
          items: [
            { t: "short", q: "My title:", model: "The Singing Mechanic / The Lazy Mechanic and the Clever Foreman", open: true, hint: "Who is the story about? What happened?" }
          ] },

        { type: "activity", title: "3. Answer these questions about the story:", page: 28, source: "book",
          instructions: "Answer the questions. Use the story.", instructionsAr: "أجب عن الأسئلة من القصة.",
          items: [
            { t: "short", q: "What was Don like? How did he work at first?",
              model: "He was young, tall, slim and quick with his hands. At first, he worked hard: he fixed the cars faster and better than anyone.",
              keywords: [["young", "tall", "slim", "quick"], ["hard", "fast", "better"]], hint: "Read paragraph 3 (At first, …)." },
            { t: "short", q: "Why did Don cheat at work?",
              model: "Because he became too proud of himself.", keywords: [["proud"]], hint: "Read paragraph 4 (After a while, …)." },
            { t: "short", q: "How did Antonio solve the problem?",
              model: "He set a trap: he climbed up the tree before Don arrived. When Don started singing, Antonio dropped out of the tree and sang, ‘You like to think I’m going to pay you, but I’m not!’ So Don lost his job.",
              keywords: [["trap", "tree"]], hint: "Read the end of the story." },
            { t: "short", q: "What message do you think the writer of the story is trying to share?",
              model: "Work hard and be honest; if you cheat, you will lose in the end. Don’t become too proud of yourself.",
              open: true, hint: "Lessons learned: what should we learn from Don?" }
          ] },

        { type: "activity", title: "4. a. Fill in this table with the required information from the story.", page: 28, source: "book",
          instructions: "Write the characters, the setting and the events. The first event is given: “Don started working as a mechanic.” The second starts: “Later, he …”.",
          instructionsAr: "اكتب الشخصيات والمكان والزمان والأحداث.",
          items: [
            { t: "table", q: "Characters – Setting – Events", open: true,
              head: ["Characters", "Setting", "Events"],
              rows: [
                [{ model: "Don (a mechanic)" }, { model: "Dad’s garage, just outside the city" }, "• Don started working as a mechanic."],
                [{ model: "Antonio (the foreman)" }, { model: "The workshops" }, { model: "Later, he became too proud and started cheating: he sat under a tree singing instead of working." }],
                [{ model: "The writer’s dad (the owner)" }, { model: "A quiet place under a tree outside the garage" }, { model: "Antonio found out and set a trap: he waited up in the tree." }],
                [{ model: "The writer (the storyteller)" }, { model: "Last year / one morning" }, { model: "Antonio dropped out of the tree and Don lost his job." }]
              ] }
          ] },

        { type: "activity", title: "4. b. If you were in Antonio’s place, how would you solve the problem?", page: 28, source: "book",
          instructions: "Give your own idea.", instructionsAr: "اكتب فكرتك الخاصة.",
          items: [
            { t: "short", q: "If I were in Antonio’s place, I would …", model: "If I were in Antonio’s place, I would talk to Don first and give him a second chance. If he cheated again, I would tell the owner.", open: true, hint: "If I were in Antonio’s place, I would …" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "The garage is inside the city.", options: ["True", "False"], answer: 1, why: "“My dad runs a garage just outside the city.”" },
            { t: "mcq", q: "Dad employs forty mechanics.", options: ["True", "False"], answer: 0, why: "“…he employs forty mechanics and over a hundred other staff.”" },
            { t: "mcq", q: "Antonio is tall and quick.", options: ["True", "False"], answer: 1, why: "Antonio is “a short, heavy man, and he moves slowly”. Don is tall and quick." },
            { t: "mcq", q: "Antonio pays the men’s wages.", options: ["True", "False"], answer: 0, why: "“He also pays the men’s wages.”" },
            { t: "mcq", q: "Don has had a new job since he left the garage.", options: ["True", "False"], answer: 1, why: "“Since then he has been jobless.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "The factory (employs / traps) 200 workers.", options: ["employs", "traps"], answer: 0, why: "employ = give people jobs." },
            { t: "choose", q: "I drank water (instead of / separate) juice.", options: ["instead of", "separate"], answer: 0, why: "instead of = in the place of." },
            { t: "choose", q: "Workers get their (wages / workshops) at the end of the week.", options: ["wages", "workshops"], answer: 0, why: "wages = money for work." },
            { t: "choose", q: "After he lost his job, he was (jobless / separate) for a year.", options: ["jobless", "separate"], answer: 0, why: "jobless = without a job." },
            { t: "choose", q: "The boys sleep in two (separate / jobless) rooms.", options: ["separate", "jobless"], answer: 0, why: "separate = not joined, different." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: pairs discuss the two questions about stories. Show the garage picture and ask students to guess the story.",
          "Pre-teach the 8 words (separate, employ, foreman, wage, instead of, trap, drop out, jobless).",
          "Read the story with expression (the songs!). Students suggest titles (ex. 2).",
          "Exercise 3 (lessons learned), then the Characters – Setting – Events table (4a) and 4b (If I were Antonio, I would…).",
          "The book has no answer key: the suggested answers come from the story."
        ],
        pair: ["Pairs act out the end of the story: Don sings his song, Antonio answers with his song.", "A describes Don; B describes Antonio (looks + character)."],
        group: ["Groups retell the story in 5 pictures (comic strip) with one sentence under each picture."],
        quick: [
          { q: "What was Antonio’s job?", a: "He was the foreman: he checked the mechanics and paid their wages." },
          { q: "Why did Don start cheating?", a: "He became too proud of himself." },
          { q: "What does “jobless” mean?", a: "Without a job." },
          { q: "What is the setting of the story?", a: "Dad’s garage just outside the city (and the tree outside it)." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u3l2", num: 2, skill: "Grammar",
      title: "Present Perfect + for / since",
      pages: [28, 28],
      status: "complete",
      canDo: ["Use present perfect.", "Use (since/for).", "Form questions using “How long”."],
      goals: ["Use the present perfect for things that started in the past and continue now.", "Use since (a starting point) and for (a length of time).", "Ask “How long have you …?”", "Report about my partner."],
      goalsAr: ["أستخدم المضارع التام لأشياء بدأت في الماضي وما زالت مستمرة.", "أستخدم since لنقطة البداية و for للمدة.", "أسأل: How long have you …؟", "أتحدّث عن زميلي."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "⏳",
        prompts: ["How long have you studied English?", "How long have you lived in your house?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar in context: (present perfect + for / since)", page: 28,
          steps: [
            { title: "Step 1 — From the book",
              text: "Since: 2010 • April • this morning. For: 3 hours/days • a month • a short time. Example: A: How long have you studied English? B: For four years, since I was nine years old. My partner has lived in this neighbourhood since he/she was born.",
              textAr: "since + بداية الوقت: 2010، April، this morning. و for + المدة: 3 hours، a month، a short time.",
              examples: ["{s:I} {a:have} {v:studied} English {t:for four years}.", "{s:I} {a:have} {v:studied} English {t:since I was nine years old}.", "{s:My partner} {a:has} {v:lived} in this neighbourhood {t:since he/she was born}.", "{q:How long} {a:have} {s:you} {v:studied} English?"] },
            { title: "Step 2 — When do we use it?", source: "extra",
              text: "We use the present perfect with for / since for something that started in the past and is still true now.",
              textAr: "نستخدم المضارع التام مع for / since لشيء بدأ في الماضي وما زال مستمرًا حتى الآن.",
              examples: ["{s:Antonio} {a:has} {v:worked} as a foreman {t:for a long time}. (He still works there.)", "Since then {s:he} {a:has} {v:been} jobless. (from the story – he is still jobless)"] },
            { title: "Step 3 — since = the starting point", source: "extra",
              text: "since + a point in time: a year, a month, a day, a time, or a sentence (since I was nine).",
              textAr: "since + نقطة زمنية محدّدة: سنة، شهر، يوم، أو جملة مثل since I was nine.",
              examples: ["{t:since 2010}", "{t:since April}", "{t:since this morning}", "{t:since the garage was first opened}"] },
            { title: "Step 4 — for = how long (a period)", source: "extra",
              text: "for + a length of time: hours, days, a month, years, a long time.",
              textAr: "for + مدة زمنية: ساعات، أيام، شهر، سنوات، وقت طويل.",
              examples: ["{t:for 3 hours}", "{t:for a month}", "{t:for 20 years}", "{t:for a short time}"] },
            { title: "Step 5 — Questions with How long", source: "extra",
              text: "How long + have / has + subject + past participle …? Answer with for or since.",
              textAr: "السؤال: How long + have / has + الفاعل + التصريف الثالث؟ والإجابة بـ for أو since.",
              examples: ["{q:How long} {a:have} {s:you} {v:known} your best friend? — {t:For six years.}", "{q:How long} {a:has} {s:she} {v:had} this mobile? — {t:Since January.}"] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Do not use the present simple or the past simple with for / since when the action is still true now.",
              textAr: "لا نستخدم المضارع البسيط مع for / since للأشياء المستمرة حتى الآن.",
              examples: ["✗ I {n:live} here since 2015. → ✓ I {a:have} {v:lived} here since 2015.", "✗ She has been here {n:since} two hours. → ✓ {t:for} two hours"] }
          ],
          table: {
            head: ["Since:", "For:"],
            rows: [["2010", "3 hours/days"], ["April", "a month"], ["this morning", "a short time"]]
          },
          worked: {
            q: "Complete: Antonio ____ (work) as a foreman ____ a long time.",
            steps: [
              "Antonio still works as a foreman → present perfect.",
              "Antonio = he → has + past participle → has worked.",
              "“a long time” is a length of time, not a starting point.",
              "Length of time → for."
            ],
            a: "{s:Antonio} {a:has} {v:worked} as a foreman {t:for a long time}."
          },
          notes: ["Quick test: Can you put “from … until now” → since. Can you count it (3 hours, 20 years) → for.", "“has been working” is also correct: Antonio has been working as a foreman for a long time."] },

        { type: "activity", title: "5. Correct the verbs in brackets and use since or for.", page: 28, source: "book", stage: "guided",
          instructions: "Write the present perfect. Then choose since or for.", instructionsAr: "اكتب الفعل في المضارع التام ثم اختر since أو for.",
          items: [
            { t: "fill", q: "1. The writer’s father ____ (be) the owner of this garage … 20 years.", answer: ["has been"], hint: "He is still the owner → has + past participle.", why: "be → been: has been." },
            { t: "choose", q: "1. The writer’s father has been the owner of this garage (since / for) 20 years.", options: ["since", "for"], answer: 1, why: "20 years = a length of time → for." },
            { t: "fill", q: "2. The number of customers ____ (increase) … the garage was first opened.", answer: ["has increased", "has been increasing"], hint: "The number = it → has + past participle.", why: "increase → increased: has increased (has been increasing is also correct)." },
            { t: "choose", q: "2. The number of customers has increased (since / for) the garage was first opened.", options: ["since", "for"], answer: 0, why: "“the garage was first opened” = the starting point → since." },
            { t: "fill", q: "3. Antonio ____ (work) as a foreman … a long time.", answer: ["has worked", "has been working"], hint: "Antonio = he → has + past participle.", why: "work → worked: has worked (has been working is also correct)." },
            { t: "choose", q: "3. Antonio has worked as a foreman (since / for) a long time.", options: ["since", "for"], answer: 1, why: "a long time = a length of time → for." }
          ] },

        { type: "speak", title: "6. a. Ask and answer questions using “How long…?” and “for” / “since”.", page: 28, source: "book",
          instructions: "Take notes while asking about these ideas: (live in this neighbourhood / know your best friend / have this mobile / be in this school …etc.)",
          dialogue: [
            { who: "A", text: "How long have you studied English?" },
            { who: "B", text: "For four years, since I was nine years old." },
            { who: "A", text: "How long have you lived in this neighbourhood?" },
            { who: "B", text: "" },
            { who: "A", text: "How long have you known your best friend?" },
            { who: "B", text: "" }
          ],
          starters: ["How long have you had this mobile?", "How long have you been in this school?", "For … years.", "Since I was … years old.", "Since 2020."],
          record: true },

        { type: "write", title: "6. b. Use your notes to report to your group about your partner.", page: 28, source: "book",
          instructions: "Write your notes, then report to your group.",
          example: "My partner has lived in this neighbourhood since he/she was born.",
          wordBank: ["has lived", "has known", "has had", "has been", "for", "since", "years", "was born"],
          frame: [
            { label: "Neighbourhood", hint: "My partner has lived in this neighbourhood since …" },
            { label: "Best friend", hint: "He / She has known his / her best friend for …" },
            { label: "Mobile", hint: "He / She has had this mobile for / since …" },
            { label: "School", hint: "He / She has been in this school since …" }
          ],
          model: "My partner has lived in this neighbourhood since he was born.\nHe has known his best friend for six years.\nHe has had this mobile since last summer.\nHe has been in this school for two years.",
          modelFromBook: false,
          checklist: ["I used has + past participle.", "I used for with a length of time.", "I used since with a starting point."],
          minWords: 20 },

        { type: "write", title: "Tip: Write a summary", page: 28, source: "book",
          instructions: "With reference to a story you have read, or a movie you have watched, write a summary describing: the characters, the setting and the plot.",
          wordBank: ["The story is about", "The main characters are", "It takes place in", "First,", "Then,", "In the end,"],
          frame: [
            { label: "The characters", hint: "The main characters are …" },
            { label: "The setting", hint: "The story takes place in …" },
            { label: "The plot", hint: "First, … Then, … In the end, …", lines: 4 }
          ],
          model: "The main characters are Don, a young mechanic, and Antonio, the foreman. The story takes place in a big garage just outside the city. First, Don works hard. Then, he becomes too proud and sings under a tree instead of working. In the end, Antonio sets a trap and Don loses his job.",
          modelFromBook: false,
          checklist: ["I wrote about the characters, the setting and the plot.", "I used sequence words (first, then, in the end)."],
          minWords: 40 },

        { type: "activity", title: "Extra Practice: Step 1 — since or for?", source: "extra", stage: "guided",
          instructions: "Choose since or for.", instructionsAr: "اختر since أو for.",
          items: [
            { t: "choose", q: "I have lived here (since / for) 2015.", options: ["since", "for"], answer: 0, why: "2015 = a starting point → since." },
            { t: "choose", q: "She has had her phone (since / for) two months.", options: ["since", "for"], answer: 1, why: "two months = a length of time → for." },
            { t: "choose", q: "We have been at school (since / for) 7 o’clock.", options: ["since", "for"], answer: 0, why: "7 o’clock = a starting point → since." },
            { t: "choose", q: "He has known Ali (since / for) a long time.", options: ["since", "for"], answer: 1, why: "a long time = a period → for." },
            { t: "choose", q: "They haven’t eaten (since / for) this morning.", options: ["since", "for"], answer: 0, why: "this morning = a starting point → since." },
            { t: "choose", q: "I have studied English (since / for) I was nine years old.", options: ["since", "for"], answer: 0, why: "since + a sentence (the start: I was nine)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — How long…?", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a question.", instructionsAr: "رتّب الكلمات لتكوّن سؤالًا.",
          items: [
            { t: "order", q: "🏠 Make a question.", words: ["How", "long", "have", "you", "lived", "in", "this", "neighbourhood?"], answer: ["How long have you lived in this neighbourhood?"], hint: "How long + have + you + past participle.", why: "How long + have + subject + past participle." },
            { t: "order", q: "📱 Make a question.", words: ["How", "long", "has", "she", "had", "this", "mobile?"], answer: ["How long has she had this mobile?"], hint: "she → has.", why: "How long + has + she + had." },
            { t: "fill", q: "How long ____ you known your best friend?", answer: ["have"], bank: ["have", "has", "did"], why: "you → have." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — On your own", source: "extra", stage: "independent",
          instructions: "Fix the mistake, then write about yourself.", instructionsAr: "صحّح الخطأ ثم اكتب عن نفسك.",
          items: [
            { t: "fix", q: "I {know} my best friend since 2019.", answer: ["have known"], hint: "Still true now + since → present perfect.", why: "have + known (past participle of know)." },
            { t: "fix", q: "He has worked here {since} ten years.", answer: ["for"], hint: "ten years = a length of time.", why: "Length of time → for." },
            { t: "fix", q: "She {have} been in this school since September.", answer: ["has"], hint: "she → has.", why: "she → has been." },
            { t: "short", q: "How long have you studied English? Answer with for AND since.", model: "I have studied English for seven years, since I was six years old.", open: true, hint: "I have studied English for … years, since I was …" }
          ] }
      ],
      game: { kind: "sort", title: "since or for?",
        buckets: ["since", "for"],
        cards: [["2010", 0], ["April", 0], ["this morning", 0], ["I was nine", 0], ["3 hours", 1], ["a month", 1], ["a short time", 1], ["20 years", 1]] },
      teacher: {
        notes: [
          "Warm-up: ask “How long have you studied English?” Write the answer with for and with since.",
          "Use the book’s two boxes: since = a starting point; for = a length of time.",
          "Do the worked example, then exercise 5 (verb + since/for). Accept “has been working” where it fits.",
          "Exercise 6: pairs ask How long…? questions and take notes, then report to the group (My partner has lived … since …).",
          "Tip: the summary (characters, setting, plot) can be homework; the Don story is a good model."
        ],
        pair: ["Timeline: A draws a line from the past to now with one event (moved house 2018). B makes the sentence: You have lived there since 2018 / for … years."],
        group: ["Find the longest: groups ask How long have you … (had your bag / known your teacher …) and report the longest time."],
        quick: [
          { q: "since or for: ___ 2010", a: "since" },
          { q: "since or for: ___ a month", a: "for" },
          { q: "Make a question: you / live / here (How long)", a: "How long have you lived here?" },
          { q: "Correct: I live here since 2015.", a: "I have lived here since 2015." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u3l3", num: 3, skill: "Listening",
      title: "People’s Stories",
      pages: [29, 29],
      status: "complete",
      canDo: ["Make inferences.", "Describe characters.", "Retell part of a story.", "Express opinions."],
      goals: ["Find the odd word out.", "Listen to a story about a rich man and a poor man.", "Describe the characters.", "Retell the story in a group."],
      goalsAr: ["أجد الكلمة المختلفة.", "أستمع إلى قصة عن رجل غني ورجل فقير.", "أصف الشخصيات.", "أعيد سرد القصة مع مجموعتي."],
      warmup: {
        title: "Before you listen",
        image: "crops/u3l3-warmup.jpg",
        emoji: "🍲",
        prompts: ["Look at the man and his food. Describe him.", "Do you think he shares his food? Why? Why not?"],
        seconds: 60
      },
      vocab: [
        { w: "inhale", pos: "verb", emoji: "👃", def: "to breathe air (or a smell) into your body", ex: "He inhaled the smell of the food.", exFromBook: false, ar: "يستنشق" },
        { w: "leftover", pos: "noun", emoji: "🍱", def: "food that is not eaten at the end of a meal", ex: "We ate the leftovers the next day.", exFromBook: false, ar: "بقايا الطعام" },
        { w: "stingy", pos: "adjective", emoji: "🤑", def: "not liking to give or share money or things", ex: "The stingy man never shared his food.", exFromBook: false, ar: "بخيل" },
        { w: "furious", pos: "adjective", emoji: "😡", def: "very angry", ex: "He was furious when he saw the broken window.", exFromBook: false, ar: "غاضب جدًا" },
        { w: "hearty", pos: "adjective", emoji: "🍛", def: "(of a meal) big and good; (of a person) warm and friendly", ex: "We had a hearty breakfast before the trip.", exFromBook: false, ar: "وفير / ودود" },
        { w: "justice", pos: "noun", emoji: "⚖️", def: "fair treatment for everyone", ex: "The judge wanted justice for both men.", exFromBook: false, ar: "العدالة" },
        { w: "crowd", pos: "noun", emoji: "👥", def: "a large group of people in one place", ex: "A big crowd watched the match.", exFromBook: false, ar: "حشد" },
        { w: "unfairly", pos: "adverb", emoji: "🙅", def: "in a way that is not right or not equal", ex: "The referee treated our team unfairly.", exFromBook: false, ar: "بشكل غير عادل" }
      ],
      sections: [
        { type: "activity", title: "1. Find the odd one out. Justify your answer.", page: 29, source: "book",
          instructions: "Choose the word that is different. Then say why.", instructionsAr: "اختر الكلمة المختلفة واذكر السبب.",
          items: [
            { t: "mcq", q: "1. taste – smell – leftover – inhale", options: ["taste", "smell", "leftover", "inhale"], answer: 2,
              hint: "Three of them are things you do with your mouth or nose.", why: "leftover is food (a noun). taste, smell and inhale are actions with the mouth or nose." },
            { t: "mcq", q: "2. stingy – furious – hearty – angry", options: ["stingy", "furious", "hearty", "angry"], answer: [0, 2],
              hint: "furious and angry mean almost the same.", why: "Two good justifications: hearty is the only positive word (warm, friendly, big meal); or stingy is not about anger (furious = very angry). Justify your choice." },
            { t: "mcq", q: "3. court – justice – crowd – fairness", options: ["court", "justice", "crowd", "fairness"], answer: 2,
              hint: "Three words are about law and being fair.", why: "crowd = a large group of people. court, justice and fairness are about law and being fair." },
            { t: "short", q: "Justify one answer in a full sentence.", model: "Leftover is the odd one out because it is food, but taste, smell and inhale are actions.", open: true, hint: "… is the odd one out because …" }
          ] },

        { type: "listen", title: "2. a. Listen to the story and decide if these statements are true (T) or false (F). Correct the false ones.", page: 29, source: "book",
          track: "3.1",
          needsAudio: true,
          instructions: "Track 3.1. Write T or F. Correct the false ones. (The book’s letters are a, c, d.)",
          items: [
            { t: "short", q: "a. The tajiri was very generous. ( )", open: true },
            { t: "short", q: "c. The maskini gave his goat to the tajiri. ( )", open: true },
            { t: "short", q: "d. The maskini was unfairly judges by the village chief. ( )", open: true }
          ] },

        { type: "listen", title: "2. b. Listen again and write a description of each of:", page: 29, source: "book",
          track: "3.1",
          needsAudio: true,
          instructions: "Track 3.1. Listen again. Describe each character.",
          items: [
            { t: "short", q: "1. The tajiri:", open: true, hint: "What is he like? Use adjectives (stingy, rich, …)." },
            { t: "short", q: "2. The maskini:", open: true, hint: "What is he like?" },
            { t: "short", q: "3. The village chief:", open: true, hint: "What is he like? Was he fair?" }
          ] },

        { type: "discuss", title: "3. a. Discuss the following questions, then share your ideas with the class.", page: 29, source: "book",
          prompts: ["What do you think of what the Tajiri and the village chief did?", "How would you solve the problem between the tajiri and the maskini if you were the village chief?"],
          image: null, emoji: "⚖️", seconds: 150,
          starters: ["I think the tajiri was … because …", "If I were the village chief, I would …", "It wasn’t fair because …"] },

        { type: "speak", title: "3. b. Retell the story:", page: 29, source: "book",
          instructions: "Each member of the group should retell part of the story.",
          dialogue: [
            { who: "Student 1", text: "" },
            { who: "Student 2", text: "" },
            { who: "Student 3", text: "" },
            { who: "Student 4", text: "" }
          ],
          starters: ["Once upon a time, there was a …", "One day, …", "Then, …", "After that, …", "In the end, …"],
          record: true },

        { type: "listen", title: "Extra Practice: The Generous Fisherman (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a different short story read by a computer voice. Listen and answer.",
          script: [
            { who: "Narrator", text: "Long ago, in a small town by the sea, there lived a rich merchant called Hamad. He was very stingy. He never shared his food or his money with anyone." },
            { who: "Narrator", text: "Near his big house lived a poor fisherman called Saleh. Saleh had very little, but he was generous. Every evening, he shared his fish with hungry people." },
            { who: "Narrator", text: "One night, there was a terrible storm. Hamad’s boat broke on the rocks, and he was in the cold water. Saleh heard him shouting. He rowed out in his small boat and saved him." },
            { who: "Narrator", text: "The next day, Hamad invited the whole town to a hearty meal. From that day, he was never stingy again." }
          ],
          items: [
            { t: "mcq", q: "What was Hamad like at the beginning?", options: ["generous", "stingy", "poor", "brave"], answer: 1, why: "“He was very stingy.”" },
            { t: "mcq", q: "What was Saleh’s job?", options: ["a merchant", "a fisherman", "a judge", "a farmer"], answer: 1, why: "“a poor fisherman called Saleh”." },
            { t: "mcq", q: "What happened to Hamad’s boat?", options: ["It broke on the rocks.", "Someone stole it.", "He sold it.", "It was in the garage."], answer: 0, why: "“Hamad’s boat broke on the rocks.”" },
            { t: "mcq", q: "How did Saleh help Hamad?", options: ["He gave him money.", "He rowed out and saved him.", "He called the police.", "He gave him fish."], answer: 1, why: "“He rowed out in his small boat and saved him.”" },
            { t: "mcq", q: "How did Hamad change?", options: ["He became poorer.", "He was never stingy again.", "He left the town.", "He bought a new boat."], answer: 1, why: "He invited the whole town to a hearty meal and was never stingy again." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the picture of the man with lots of food. Pre-teach the vocabulary with the odd-one-out task (ex. 1).",
          "Background: in Swahili, tajiri means a rich man and maskini means a poor man.",
          "Play track 3.1 for 2a (T/F – the book’s letters are a, c, d) and again for 2b (descriptions). No answer key: check with the recording.",
          "Exercise 3: groups discuss fairness, then each member retells one part of the story.",
          "If the recording is not available, use the Extra Practice story (computer voice) for listening practice; it is a different story."
        ],
        pair: ["A says an adjective (stingy, generous, furious, fair); B says which character it describes and why."],
        group: ["Story chain: each student retells one part in order; the group helps with sequence words."],
        quick: [
          { q: "What does “stingy” mean?", a: "Not liking to share money or things." },
          { q: "Which word is the odd one out: court, justice, crowd, fairness?", a: "crowd" },
          { q: "What does “furious” mean?", a: "Very angry." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u3l4", num: 4, skill: "Grammar",
      title: "Intensifiers (too … to / so … that)",
      pages: [29, 29],
      status: "complete",
      canDo: ["Use intensifiers (too… to/so…that)."],
      goals: ["Join two sentences with too … to.", "Join two sentences with so … that.", "Describe people and things with strong meaning."],
      goalsAr: ["أربط جملتين باستخدام too … to.", "أربط جملتين باستخدام so … that.", "أصف الأشخاص والأشياء بمعنى قوي."],
      warmup: {
        title: "Grammar in context",
        image: "crops/u3l3-warmup.jpg",
        emoji: "🤏",
        prompts: ["The Tajiri was very mean. Did he share the smell of his food?", "Think of something that is very expensive. Can you buy it?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar in context: Intensifiers ( too … to / so … that )", page: 29,
          steps: [
            { title: "Step 1 — From the book",
              text: "The Tajiri was very mean. He didn’t want to share the smell of his food with others. → The Tajiri was too mean to share the smell of his food with others. → The Tajiri was so mean that he didn’t want to share the smell of his food with others.",
              textAr: "مثال الكتاب: نربط الجملتين باستخدام too … to أو so … that.",
              examples: [
                "The Tajiri was very mean. He didn’t want to share the smell of his food with others.",
                "{s:The Tajiri} {v:was} {t:too} mean {c:to} {p:share} the smell of his food with others.",
                "{s:The Tajiri} {v:was} {t:so} mean {c:that} {s:he} {n:didn’t want} to share the smell of his food with others."
              ] },
            { title: "Step 2 — too + adjective + to + base verb", source: "extra",
              text: "too = more than is good. too … to has a NEGATIVE meaning, so we do not write not. After to we use the base verb.",
              textAr: "too تعني «أكثر من اللازم»، و too … to معناها منفي، لذلك لا نكتب not، وبعد to يأتي الفعل الأساسي.",
              examples: ["{s:The box} {v:is} {t:too} heavy {c:to} {p:carry}. (= I can’t carry it.)", "{s:He} {v:is} {t:too} young {c:to} {p:drive}."] },
            { title: "Step 3 — so + adjective + that + subject + verb", source: "extra",
              text: "so … that shows a result. After that we write a full sentence: subject + verb (often can’t / couldn’t / didn’t).",
              textAr: "so … that تبيّن النتيجة، وبعد that نكتب جملة كاملة: فاعل + فعل.",
              examples: ["{s:The box} {v:is} {t:so} heavy {c:that} {s:I} {n:can’t} {v:carry} it.", "{s:The film} {v:was} {t:so} funny {c:that} {s:we} {v:laughed} a lot."] },
            { title: "Step 4 — for + person", source: "extra",
              text: "With too … to we can add for + a person.",
              textAr: "يمكن أن نضيف for + الشخص مع too … to.",
              examples: ["{s:The exercise} {v:was} {t:too} difficult {o:for me} {c:to} {p:do}."] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "With too … to, do not repeat the object (it) at the end. With so … that, keep it.",
              textAr: "مع too … to لا نكرّر المفعول (it) في النهاية، أما مع so … that فنبقيه.",
              examples: ["✗ This mobile is too expensive to afford {n:it}. → ✓ too expensive to afford.", "✓ This mobile is so expensive that I cannot afford {o:it}.", "✗ The tea is too hot to {n:not} drink. → ✓ too hot to drink"] }
          ],
          table: {
            head: ["Two sentences", "too … to", "so … that"],
            rows: [["The Tajiri was very mean. He didn’t want to share the smell of his food with others.", "The Tajiri was too mean to share the smell of his food with others.", "The Tajiri was so mean that he didn’t want to share the smell of his food with others."]]
          },
          worked: {
            q: "Rewrite with too … to: The water was very cold. We couldn’t swim in it.",
            steps: [
              "Find the adjective: cold → too cold.",
              "too … to already means “couldn’t”, so remove couldn’t.",
              "to + base verb: to swim in.",
              "Do not add “it” at the end."
            ],
            a: "{s:The water} {v:was} {t:too} cold {c:to} {p:swim} in."
          },
          notes: ["very + adjective → too … to (negative meaning) OR so … that + a sentence.", "so … that: keep can’t / couldn’t / didn’t in the second part."] },

        { type: "activity", title: "Rewrite the following sentences using (too…to/ so…that):", page: 29, source: "book", stage: "guided",
          instructions: "Write each sentence twice: once with too … to and once with so … that.", instructionsAr: "أعد كتابة كل جملة مرتين: مرة بـ too … to ومرة بـ so … that.",
          items: [
            { t: "short", q: "• The exercise was very difficult. I couldn’t do it. → (too … to)",
              model: "The exercise was too difficult (for me) to do.", keywords: [["too difficult"], ["to do"]], hint: "too difficult + (for me) + to + do. No “it” at the end." },
            { t: "short", q: "• The exercise was very difficult. I couldn’t do it. → (so … that)",
              model: "The exercise was so difficult that I couldn’t do it.", keywords: [["so difficult that"], ["couldn"]], hint: "so difficult that + I couldn’t do it." },
            { t: "short", q: "• The news is very good. It cannot be true. → (too … to)",
              model: "The news is too good to be true.", keywords: [["too good"], ["to be true"]], hint: "too good + to be true." },
            { t: "short", q: "• The news is very good. It cannot be true. → (so … that)",
              model: "The news is so good that it cannot be true.", keywords: [["so good that"], ["can"]], hint: "so good that + it cannot be true." },
            { t: "short", q: "• This mobile is very expensive. I cannot afford it. → (too … to)",
              model: "This mobile is too expensive (for me) to afford.", keywords: [["too expensive"], ["to afford"]], hint: "too expensive + (for me) + to afford." },
            { t: "short", q: "• This mobile is very expensive. I cannot afford it. → (so … that)",
              model: "This mobile is so expensive that I cannot afford it.", keywords: [["so expensive that"], ["afford"]], hint: "so expensive that + I cannot afford it." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — too or so?", source: "extra", stage: "guided",
          instructions: "Look at the words after the adjective. to + verb → too. that + sentence → so.", instructionsAr: "انظر إلى ما بعد الصفة: to + فعل ← too. و that + جملة ← so.",
          items: [
            { t: "choose", q: "The bag was (too / so) heavy to carry.", options: ["too", "so"], answer: 0, why: "… to carry → too … to." },
            { t: "choose", q: "The bag was (too / so) heavy that I couldn’t carry it.", options: ["too", "so"], answer: 1, why: "… that I couldn’t → so … that." },
            { t: "choose", q: "He was (too / so) tired that he slept early.", options: ["too", "so"], answer: 1, why: "that + sentence → so." },
            { t: "choose", q: "She is (too / so) young to drive a car.", options: ["too", "so"], answer: 0, why: "to + base verb → too." },
            { t: "choose", q: "The story was so funny (that / to) everyone laughed.", options: ["that", "to"], answer: 0, why: "so … that + subject + verb." },
            { t: "choose", q: "The soup was too hot (that / to) eat.", options: ["that", "to"], answer: 1, why: "too … to + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات.",
          items: [
            { t: "order", q: "🌊 Make a sentence.", words: ["The", "sea", "was", "too", "rough", "to", "swim", "in."], answer: ["The sea was too rough to swim in."], hint: "too + adjective + to + verb.", why: "too rough to swim in." },
            { t: "order", q: "😴 Make a sentence.", words: ["I", "was", "so", "tired", "that", "I", "fell", "asleep."], answer: ["I was so tired that I fell asleep."], hint: "so + adjective + that + I + verb.", why: "so tired that + a full sentence." },
            { t: "order", q: "🍲 Make a sentence.", words: ["The", "Tajiri", "was", "too", "mean", "to", "share", "his", "food."], answer: ["The Tajiri was too mean to share his food."], hint: "too mean to share.", why: "too + adjective + to + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix it (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Write the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "The tea is too hot {that} drink.", answer: ["to"], hint: "too … to.", why: "too + adjective + to + base verb." },
            { t: "fix", q: "He was {too} angry that he shouted.", answer: ["so"], hint: "… that + sentence.", why: "so … that + subject + verb." },
            { t: "fix", q: "The shirt is too small to {wearing}.", answer: ["wear"], hint: "to + base verb.", why: "to + base verb: wear." },
            { t: "short", q: "Write one sentence about your school day with too … to or so … that.", model: "Today the homework was so long that I finished it at nine o’clock.", open: true, hint: "… too … to … / … so … that …" }
          ] }
      ],
      game: { kind: "quiz", title: "too … to or so … that?",
        items: [
          { t: "choose", q: "It was (too / so) cold to go out.", options: ["too", "so"], answer: 0, why: "too … to + verb." },
          { t: "choose", q: "It was (too / so) cold that we stayed home.", options: ["too", "so"], answer: 1, why: "so … that + sentence." },
          { t: "mcq", q: "The car is too expensive ____.", options: ["to buy", "to buy it", "that buy"], answer: 0, why: "too … to + verb, no “it” at the end." },
          { t: "mcq", q: "She was so happy ____.", options: ["that she cried", "to cried", "that cry"], answer: 0, why: "so … that + subject + verb." },
          { t: "mcq", q: "“He is too short to reach the shelf.” means:", options: ["He can reach the shelf.", "He can’t reach the shelf."], answer: 1, why: "too … to has a negative meaning." }
        ] },
      teacher: {
        notes: [
          "Warm-up: remind students of the Tajiri from the listening story. Was he generous?",
          "Read the book’s box: one pair of sentences → too … to and so … that.",
          "Stress: too … to = negative meaning, no “not”, no “it” at the end; so … that + a full sentence.",
          "Do the worked example, then the three book sentences (each with both structures).",
          "Accept “for me” in the too … to sentences (too difficult for me to do)."
        ],
        pair: ["A says “It was very …” + a result; B joins it with too … to or so … that."],
        group: ["Groups write three funny “so … that” sentences about the story characters and read them aloud."],
        quick: [
          { q: "Join: The box is very heavy. I can’t lift it. (too)", a: "The box is too heavy to lift." },
          { q: "Join: The film was very good. We watched it twice. (so)", a: "The film was so good that we watched it twice." },
          { q: "What comes after “too + adjective”?", a: "to + base verb." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — WRITING ─────────────────────────
    {
      id: "u3l5", num: 5, skill: "Writing",
      title: "Writing: A Story about the Poor and the Rich",
      pages: [30, 30],
      status: "complete",
      canDo: ["Describe characters.", "Use capitalization and punctuation."],
      goals: ["Plan a story with a story map.", "Write a story about the poor and the rich.", "Use adjectives, sequence words and suspense.", "Check capital letters and punctuation."],
      goalsAr: ["أخطّط لقصة باستخدام خريطة القصة.", "أكتب قصة عن الفقير والغني.", "أستخدم الصفات وكلمات الترتيب والتشويق.", "أراجع الحروف الكبيرة وعلامات الترقيم."],
      warmup: {
        title: "Writing",
        image: null,
        emoji: "✍️",
        prompts: ["Think of a story about a rich person and a poor person.", "Who is good? Who is bad? What goes wrong?"],
        seconds: 60
      },
      vocab: [
        { w: "character", pos: "noun", emoji: "🧑", def: "a person in a story", ex: "The main characters are a rich man and a poor man.", exFromBook: false, ar: "شخصية" },
        { w: "setting", pos: "noun", emoji: "🏝️", def: "when and where a story happens", ex: "The setting is a small village, long ago.", exFromBook: false, ar: "المكان والزمان (الإطار)" },
        { w: "plot", pos: "noun", emoji: "📖", def: "the events of a story", ex: "The plot has a problem and a solution.", exFromBook: false, ar: "الحبكة" },
        { w: "suspense", pos: "noun", emoji: "😱", def: "the feeling of waiting to know what will happen", ex: "Use some suspense to attract the readers.", exFromBook: true, ar: "التشويق" }
      ],
      sections: [
        { type: "write", title: "5. a. Fill in the missing information needed to help you write a story about the poor and the rich.", page: 30, source: "book",
          instructions: "Fill in the story map: Characters, Setting, Title, Problem, Solution.",
          wordBank: ["rich", "poor", "stingy", "generous", "kind", "furious", "village", "long ago", "one day"],
          frame: [
            { label: "Characters: Who?", hint: "a stingy rich merchant, a kind poor fisherman…" },
            { label: "Setting: When and where?", hint: "long ago, in a small village by the sea…" },
            { label: "Title", hint: "e.g. The Generous Fisherman" },
            { label: "Problem: What went wrong?", hint: "One day, …" },
            { label: "Solution: How did it end?", hint: "In the end, …" }
          ],
          model: "Characters: Faris, a rich and stingy farmer; Nasser, a poor but kind shepherd.\nSetting: Long ago, in a village near the desert.\nTitle: The Lost Camels\nProblem: Faris’s camels ran away in a sandstorm.\nSolution: Nasser found them and brought them back; Faris learned to be generous.",
          modelFromBook: false,
          checklist: ["I filled in all five boxes."],
          minWords: 25 },

        { type: "write", title: "5. b. Use your notes to write the story.", page: 30, source: "book",
          instructions: "Use your story map. Write your story in 3 or 4 paragraphs.",
          wordBank: ["Once upon a time,", "First,", "Then,", "Suddenly,", "After that,", "Finally,", "In the end,", "rich", "poor", "stingy", "generous", "furious"],
          frame: [
            { label: "Beginning (characters and setting)", hint: "Long ago, in a small village, there lived …", lines: 3 },
            { label: "Middle (the problem – add suspense!)", hint: "One day, … Suddenly, …", lines: 4 },
            { label: "End (the solution)", hint: "Finally, … In the end, …", lines: 3 }
          ],
          model: "The Lost Camels\n\nLong ago, in a village near the desert, there lived a rich farmer called Faris. He had a big house and a hundred camels, but he was very stingy. Near the village lived Nasser, a poor but kind shepherd.\n\nOne evening, a terrible sandstorm came. The wind was so strong that nobody could see. In the morning, Faris looked at his farm and shouted, “My camels! Where are my camels?” They had run away into the desert. Faris was furious, but he was too afraid to go into the desert alone.\n\nFirst, Nasser took some water. Then, he walked into the desert and followed the tracks in the sand. Suddenly, he heard a sound behind a big dune. It was the camels! Finally, he brought them all back to the village.\n\nIn the end, Faris thanked Nasser and gave him ten camels. From that day, Faris was never stingy again.",
          modelFromBook: false,
          bookChecklist: [
            "use suitable adjectives to describe the characters.",
            "use connectors to show the sequence of events (first, then …etc)",
            "use some suspense to attract the readers.",
            "check your writing for capitalization and punctuation."
          ],
          checklist: ["My story has a title.", "My story has a beginning, a middle and an end."],
          minWords: 100 },

        { type: "activity", title: "Extra Practice: Capitalization and punctuation", source: "extra", stage: "guided",
          instructions: "Each sentence has one mistake. Write the correct word or punctuation.", instructionsAr: "في كل جملة خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "Long ago, there lived a rich man called {hamad}.", answer: ["Hamad"], hint: "Names start with a capital letter.", why: "Names of people start with a capital letter: Hamad." },
            { t: "fix", q: "{one} day, a poor man came to his house.", answer: ["One"], hint: "The first word of a sentence.", why: "A sentence starts with a capital letter." },
            { t: "fix", q: "The story happened in {kuwait}.", answer: ["Kuwait"], hint: "Countries start with a capital letter.", why: "Names of countries and cities start with a capital letter." },
            { t: "fix", q: "“Where are my camels{.}” he shouted.", answer: ["?"], hint: "Is it a question?", why: "A question ends with a question mark." },
            { t: "fix", q: "On {friday}, the family visited the village.", answer: ["Friday"], hint: "Days of the week.", why: "Days of the week start with a capital letter." }
          ] },

        { type: "activity", title: "Extra Practice: Put the story in order", source: "extra", stage: "independent",
          instructions: "Match each sequence word with the right part of the story.", instructionsAr: "صِل كل كلمة ترتيب بالجزء المناسب من القصة.",
          items: [
            { t: "match", q: "Sequence of events",
              pairs: [["First,", "Nasser took some water."], ["Then,", "he walked into the desert."], ["Suddenly,", "he heard a sound behind a big dune."], ["Finally,", "he brought the camels back."]],
              hint: "First → Then → Suddenly → Finally.", why: "Connectors show the order of events." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Story Words", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: brainstorm rich/poor story ideas (the Tajiri and the maskini, the garage story).",
          "Model the story map on the board: Characters → Setting → Title → Problem → Solution.",
          "Go through the book’s Remember box: adjectives, connectors, suspense, capitalization and punctuation.",
          "Students write their story from the map. Early finishers add suspense (Suddenly, …).",
          "The model story is not from the book; show it after students write."
        ],
        pair: ["Partners swap stories and check them with the Remember box."],
        group: ["Groups read the best story aloud like a radio play (narrator + characters)."],
        quick: [
          { q: "What are the five parts of the story map?", a: "Characters, Setting, Title, Problem, Solution." },
          { q: "Give two sequence connectors.", a: "first, then (after that, finally…)" },
          { q: "Why do we use suspense?", a: "To attract the readers." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u3l6", num: 6, skill: "Reading",
      title: "Life in Space",
      pages: [31, 32],
      status: "complete",
      canDo: ["Make inferences.", "Talk about abilities.", "Use ‘can/cannot’."],
      goals: ["Read about life on a space station.", "Learn 8 new words.", "Answer questions about the text.", "Say what astronauts can and can’t do."],
      goalsAr: ["أقرأ عن الحياة في محطة الفضاء.", "أتعلّم 8 كلمات جديدة.", "أجيب عن أسئلة حول النص.", "أقول ما يستطيع روّاد الفضاء فعله وما لا يستطيعون."],
      warmup: {
        title: "Before you read",
        image: "crops/u3l6-warmup.jpg",
        emoji: "🚀",
        prompts: ["What do you think life is on a space station?", "Make notes about: (eating – drinking – clothes – sleeping – moving – entertainment… etc.)"],
        seconds: 120
      },
      vocab: [
        { w: "dispose of", pos: "phrasal verb", emoji: "🗑️", def: "to throw away, e.g. rubbish", ex: "Living in space is a bit like camping, you have to take everything you need, you use special equipment, and you have to dispose of your own rubbish.", exFromBook: true, ar: "يتخلّص من" },
        { w: "float", pos: "verb", emoji: "🎈", def: "to move slowly in the air or on water without falling", ex: "We drink through a straw, otherwise the liquids float around the cabin.", exFromBook: true, ar: "يطفو" },
        { w: "package", pos: "noun", emoji: "📦", def: "the container food comes in", ex: "We have to warm up our meals before we open the packages.", exFromBook: true, ar: "عبوة / غلاف" },
        { w: "gravity", pos: "noun", emoji: "🌍", def: "the force that pulls things down to the Earth", ex: "Food moves around in zero gravity, so we can’t eat off plates.", exFromBook: true, ar: "الجاذبية" },
        { w: "inflatable", pos: "adjective", emoji: "🛟", def: "that you fill with air before you use it", ex: "The suits have parachutes, oxygen, an inflatable boat, water and a flare gun kit.", exFromBook: true, ar: "قابل للنفخ" },
        { w: "flare", pos: "noun", emoji: "🔥", def: "a bright flame used as a signal", ex: "The suits have parachutes, oxygen, an inflatable boat, water and a flare gun kit.", exFromBook: true, ar: "شعلة إشارة" },
        { w: "casual", pos: "adjective", emoji: "👕", def: "informal, for everyday use", ex: "Inside the station, we wear casual clothes with lots of pockets.", exFromBook: true, ar: "غير رسمي (عادي)" },
        { w: "specialised", pos: "adjective", emoji: "👨‍🚀", def: "made for one special use", ex: "Sometimes when we walk outside in space, we wear specialised, white spacesuits with finger heaters in our gloves!", exFromBook: true, ar: "متخصّص" }
      ],
      sections: [
        { type: "discuss", title: "1. What do you think life is on a space station?", page: 31, source: "book",
          prompts: ["Make notes about: (eating – drinking – clothes – sleeping – moving – entertainment… etc.)", "eating?", "drinking?", "clothes?", "sleeping?", "moving?", "entertainment?"],
          example: "You can’t drink from a glass.",
          image: "crops/u3l6-warmup.jpg", emoji: "🚀", seconds: 150,
          starters: ["You can’t …", "You have to …", "Astronauts can …", "I think they sleep …"] },

        { type: "reading", title: "Life in Space", page: 31,
          paras: [
            "Since 2000, highly-trained astronaut teams have been travelling 350 kilometres into space to live and work. Most of these astronauts spend about three months in space. Living in space is a bit like camping, you have to take everything you need, you use special equipment, and you have to dispose of your own rubbish. We asked Bill Ross on the International Space Station to tell us about living in space."
          ],
          speaker: null },

        { type: "reading", title: "Food in space", page: 31,
          instructions: "Food — What do they eat in space?",
          paras: [
            "Almost all our food is in tins or dried. We even have to add water to drink. We drink through a straw, otherwise the liquids float around the cabin. There is no fridge, so we can’t have cold drinks. But there is a wide choice of food – soup, meat, vegetables, fruit, nuts and bread. We get three meals a day and a snack. We have to warm up our meals before we open the packages. Food moves around in zero gravity, so we can’t eat off plates. We eat from the packages and we use straps to keep our food on the table. We don’t use knives or forks – and we don’t use chairs. We simply float around the table!"
          ],
          speaker: "Bill Ross" },

        { type: "reading", title: "Clothes", page: 31,
          instructions: "Clothes — Do they need special clothes while living and working inside the space shuttle?",
          paras: [
            "When we go into space in the shuttle or when we re-enter the Earth’s atmosphere, we wear special suits called LES (Launch Entry Suits).",
            "The suits have parachutes, oxygen, an inflatable boat, water and a flare gun kit.",
            "Inside the station, we wear casual clothes with lots of pockets. Sometimes when we walk outside in space, we wear specialised, white spacesuits with finger heaters in our gloves!"
          ],
          speaker: "Bill Ross" },

        { type: "activity", title: "2. Read the text and answer the questions below.", page: 32, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. Give three reasons why being in space is like camping.",
              model: "You have to take everything you need, you use special equipment, and you have to dispose of your own rubbish.",
              keywords: [["everything", "take"], ["equipment"], ["rubbish", "dispose"]], hint: "Read the first paragraph." },
            { t: "short", q: "2. Why don’t astronauts use knives or forks in space?",
              model: "Because food moves around in zero gravity, they can’t eat off plates. They eat from the packages and use straps to keep their food on the table.",
              keywords: [["gravity", "package", "float", "plate"]], hint: "Read the end of “Food in space”." },
            { t: "short", q: "3. How do you think the tools of the LES are useful to astronauts? Explain one use for each tool.",
              model: "Parachutes: to land safely. Oxygen: to breathe. Inflatable boat: to float if they land in the sea. Water: to drink. Flare gun kit: to send a signal so that people can find them.",
              open: true, hint: "parachutes, oxygen, an inflatable boat, water and a flare gun kit: what is each one for?" }
          ] },

        { type: "activity", title: "3. Match the words from the text with their definitions.", page: 32, source: "book",
          instructions: "Choose the right definition. One definition is extra.", instructionsAr: "اختر التعريف الصحيح. يوجد تعريف زائد.",
          items: [
            { t: "mcq", q: "1. dispose of", options: ["the containers food comes in.", "an object that you fill with air before use.", "throw away, e.g. rubbish.", "a bright flame used as a signal.", "informal, for everyday use."], answer: 2, why: "“you have to dispose of your own rubbish” = throw it away." },
            { t: "mcq", q: "2. inflatable", options: ["the containers food comes in.", "an object that you fill with air before use.", "throw away, e.g. rubbish.", "a bright flame used as a signal.", "informal, for everyday use."], answer: 1, why: "An inflatable boat is filled with air before use." },
            { t: "mcq", q: "3. flare", options: ["the containers food comes in.", "an object that you fill with air before use.", "throw away, e.g. rubbish.", "a bright flame used as a signal.", "informal, for everyday use."], answer: 3, why: "A flare gun sends a bright flame as a signal." },
            { t: "mcq", q: "4. casual", options: ["the containers food comes in.", "an object that you fill with air before use.", "throw away, e.g. rubbish.", "a bright flame used as a signal.", "informal, for everyday use."], answer: 4, why: "Casual clothes are informal, for everyday use. (The extra definition, “the containers food comes in”, means packages.)" }
          ] },

        { type: "activity", title: "Extra Practice: can or can’t in space?", source: "extra", stage: "guided",
          instructions: "Read the text again. Choose can or can’t.", instructionsAr: "اختر can أو can’t حسب النص.",
          items: [
            { t: "choose", q: "In space, astronauts (can / can’t) have cold drinks.", options: ["can", "can’t"], answer: 1, why: "“There is no fridge, so we can’t have cold drinks.”" },
            { t: "choose", q: "They (can / can’t) eat off plates.", options: ["can", "can’t"], answer: 1, why: "“Food moves around in zero gravity, so we can’t eat off plates.”" },
            { t: "choose", q: "They (can / can’t) choose soup, meat, vegetables, fruit, nuts or bread.", options: ["can", "can’t"], answer: 0, why: "“But there is a wide choice of food…”" },
            { t: "choose", q: "They (can / can’t) drink through a straw.", options: ["can", "can’t"], answer: 0, why: "“We drink through a straw…”" },
            { t: "short", q: "Write one more sentence with can or can’t about life in space.", model: "Astronauts can’t sit on chairs at the table. They float around it.", open: true, hint: "Astronauts can / can’t …" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "independent",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Most astronauts spend about three months in space.", options: ["True", "False"], answer: 0, why: "“Most of these astronauts spend about three months in space.”" },
            { t: "mcq", q: "Astronauts get two meals a day.", options: ["True", "False"], answer: 1, why: "“We get three meals a day and a snack.”" },
            { t: "mcq", q: "They use straps to keep food on the table.", options: ["True", "False"], answer: 0, why: "“…we use straps to keep our food on the table.”" },
            { t: "mcq", q: "Inside the station, they wear white spacesuits all the time.", options: ["True", "False"], answer: 1, why: "Inside the station they wear casual clothes; the white spacesuits are for walking outside." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students make notes about eating, drinking, clothes, sleeping, moving and entertainment in space (book example: You can’t drink from a glass.).",
          "Pre-teach the 8 words (dispose of, float, package, gravity, inflatable, flare, casual, specialised).",
          "Read the introduction, then “Food in space” and “Clothes”. Compare with the students’ notes.",
          "Exercise 2 (three questions) and exercise 3 (match – one definition is extra: the containers food comes in = packages).",
          "Language: can / can’t for abilities in space."
        ],
        pair: ["A reads a line from the text; B says if it is about food or clothes and one detail."],
        group: ["Groups design a “space suitcase”: 8 things to take and why (to …)."],
        quick: [
          { q: "Why can’t astronauts have cold drinks?", a: "There is no fridge." },
          { q: "What does LES stand for?", a: "Launch Entry Suits." },
          { q: "What does “float” mean?", a: "To move in the air without falling." },
          { q: "How is living in space like camping? (one reason)", a: "You have to take everything you need (special equipment / dispose of your own rubbish)." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — SPEAKING ─────────────────────────
    {
      id: "u3l7", num: 7, skill: "Speaking",
      title: "Speaking: Interview an Astronaut",
      pages: [32, 32],
      status: "complete",
      canDo: ["Ask for and give information.", "Express wishes.", "Form questions using “How long”."],
      goals: ["Write six questions for an astronaut.", "Role-play an interview with a partner.", "Take turns and ask for clarification."],
      goalsAr: ["أكتب ستة أسئلة لرائد فضاء.", "أمثّل مقابلة مع زميلي.", "أتبادل الأدوار وأطلب التوضيح."],
      warmup: {
        title: "Speaking",
        image: "crops/u3l7-warmup.jpg",
        emoji: "🎤",
        prompts: ["Imagine you are a journalist. What would you like to ask an astronaut?", "Would you like to go to space? Why? Why not?"],
        seconds: 60
      },
      vocab: [
        { w: "journalist", pos: "noun", emoji: "🎤", def: "a person who writes news or interviews people for TV, radio or newspapers", ex: "Imagine you are a journalist.", exFromBook: true, ar: "صحفي" },
        { w: "astronaut", pos: "noun", emoji: "👨‍🚀", def: "a person who travels into space", ex: "Ask an astronaut about his experience of life in space.", exFromBook: false, ar: "رائد فضاء" },
        { w: "interview", pos: "noun", emoji: "🗣️", def: "a meeting where one person asks another person questions", ex: "Act out the interview in front of other pairs.", exFromBook: true, ar: "مقابلة" },
        { w: "clarification", pos: "noun", emoji: "❓", def: "an explanation that makes something clear", ex: "Listen and ask for clarification if needed.", exFromBook: true, ar: "توضيح" }
      ],
      sections: [
        { type: "write", title: "4. a. Imagine you are a journalist. Write six questions to ask an astronaut about his experience of life in space.", page: 32, source: "book",
          instructions: "You can ask about: The most difficult thing / the best moment / what they miss / …etc.",
          example: "How long have you been on the space station?",
          wordBank: ["How long have you …?", "Have you ever …?", "What is …?", "What do you miss …?", "How do you …?", "Can you …?", "Would you like to …?"],
          frame: [
            { label: "1.", hint: "How long have you been on the space station?" },
            { label: "2.", hint: "What is the most difficult thing about …?" },
            { label: "3.", hint: "What was the best moment …?" },
            { label: "4.", hint: "What do you miss …?" },
            { label: "5.", hint: "How do you sleep …?" },
            { label: "6.", hint: "Would you like to …?" }
          ],
          model: "1. How long have you been on the space station?\n2. What is the most difficult thing about living in space?\n3. What was the best moment of your trip?\n4. What do you miss most about the Earth?\n5. How do you sleep when everything floats?\n6. What do you do in your free time?",
          modelFromBook: false,
          checklist: ["I wrote six questions.", "Each question ends with a question mark.", "I used different question words (How long, What, How…)."],
          minWords: 30 },

        { type: "speak", title: "4. b. Role-playing: Work in pairs. Be a journalist and an astronaut", page: 32, source: "book",
          instructions: "Use your questions from exercise 4. • Ask your partner questions, then exchange roles. • Act out the interview in front of other pairs. Remember to: • respect turn taking. • use facial expressions. • listen and ask for clarification if needed.",
          dialogue: [
            { who: "Journalist", text: "How long have you been on the space station?" },
            { who: "Astronaut", text: "" },
            { who: "Journalist", text: "What is the most difficult thing about life in space?" },
            { who: "Astronaut", text: "" },
            { who: "Journalist", text: "What do you miss?" },
            { who: "Astronaut", text: "" }
          ],
          starters: ["I have been here for … / since …", "The most difficult thing is …", "The best moment was when …", "I miss … I wish I could …", "Sorry, can you say that again, please?", "What do you mean by …?"],
          note: "Remember to: respect turn taking · use facial expressions · listen and ask for clarification if needed.",
          record: true },

        { type: "discuss", title: "Tip: Search the internet", page: 32, source: "book",
          prompts: ["Search the internet for extra information about life in space and find out why astronauts wear white specialized spacesuits. Share your information with your class."],
          image: null, emoji: "🔎", seconds: 120 },

        { type: "activity", title: "Extra Practice: Question or answer?", source: "extra", stage: "guided",
          instructions: "Match each journalist’s question with the astronaut’s answer.", instructionsAr: "صِل كل سؤال بالإجابة المناسبة.",
          items: [
            { t: "match", q: "Journalist → Astronaut",
              pairs: [["How long have you been on the space station?", "For three months."], ["What do you eat?", "Food in tins or dried food."], ["What do you wear inside the station?", "Casual clothes with lots of pockets."], ["What do you miss?", "I miss my family and cold drinks!"]],
              hint: "Look at the question word.", why: "How long → a time; What do you eat → food; What do you wear → clothes; What do you miss → people or things." },
            { t: "order", q: "❓ Make a polite question for clarification.", words: ["Sorry,", "can", "you", "say", "that", "again,", "please?"], answer: ["Sorry, can you say that again, please?"], hint: "Start with Sorry,", why: "We ask for clarification politely." },
            { t: "fix", q: "How long {you have} been in space?", answer: ["have you"], hint: "Question order: How long + have + you…", why: "Questions: How long + have + subject + past participle." }
          ] }
      ],
      game: { kind: "quiz", title: "Interview Quiz",
        items: [
          { t: "mcq", q: "Which is a correct question?", options: ["How long have you been in space?", "How long you have been in space?", "How long you been in space?"], answer: 0, why: "How long + have + you + been." },
          { t: "mcq", q: "Which sentence asks for clarification?", options: ["What do you mean by “zero gravity”?", "I like space.", "Goodbye!"], answer: 0, why: "It asks the speaker to explain." },
          { t: "mcq", q: "“respect turn taking” means:", options: ["wait for your turn to speak", "speak all the time", "never speak"], answer: 0, why: "Take turns: one speaks, the other listens." },
          { t: "mcq", q: "Astronauts wear ____ clothes inside the station.", options: ["casual", "inflatable", "specialised white"], answer: 0, why: "From the text: casual clothes with lots of pockets." }
        ] },
      teacher: {
        notes: [
          "Warm-up: show the microphone. Ask: What would you like to ask an astronaut?",
          "Exercise 4a: students write six questions (book example: How long have you been on the space station?). Check question word order.",
          "Exercise 4b: pairs role-play, then swap roles; some pairs act out in front of others.",
          "Go through the Remember box: turn taking, facial expressions, asking for clarification.",
          "Tip: research why astronauts wear white spacesuits (homework) and share."
        ],
        pair: ["Hot seat: one student is the astronaut; the partner asks the six questions; then swap."],
        group: ["Press conference: one astronaut, three journalists; each journalist asks two questions."],
        quick: [
          { q: "Correct the question: How long you have been here?", a: "How long have you been here?" },
          { q: "How can you ask for clarification?", a: "Sorry, can you say that again, please? / What do you mean by …?" },
          { q: "Name one thing to remember in a role-play.", a: "Respect turn taking / use facial expressions / ask for clarification." }
        ]
      }
    }
  ]
});

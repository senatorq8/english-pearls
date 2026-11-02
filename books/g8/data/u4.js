// Unit 4 — The Unforgettable Past (Module 2 "Our Amazing World", printed pages 35–40; module cover p. 33)
BOOK.addUnit({
  id: "u4", num: 4, title: "The Unforgettable Past", titleAr: "الماضي الذي لا يُنسى",
  module: 2, moduleTitle: "Our Amazing World",
  pages: [35, 40],
  cover: 33,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Talk about important figures in history",
      "Give opinions",
      "Describe people",
      "Make suggestions",
      "Discuss and exchange information",
      "Talk about the past",
      "Express agreement/ disagreement",
      "Make comparisons"
    ],
    "language structures": [
      "Use simple past (active and passive)",
      "Form questions using the past simple",
      "Use past continuous",
      "Use (while/when)"
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
      id: "u4l1", num: 1, skill: "Reading",
      title: "Unforgettable Past",
      pages: [35, 36],
      status: "complete",
      canDo: ["Talk about important figures in history", "Describe people", "Give opinions"],
      goals: ["Read about Clara Barton, a special woman.", "Learn 8 new words.", "Answer questions about the text.", "Compare Clara to a great Kuwaiti woman."],
      goalsAr: ["أقرأ عن كلارا بارتون، امرأة مميّزة.", "أتعلّم 8 كلمات جديدة.", "أجيب عن أسئلة حول النص.", "أقارن كلارا بامرأة كويتية عظيمة."],
      warmup: {
        title: "Before you read",
        image: "crops/u4l1-warmup.jpg",
        emoji: "🤝",
        prompts: ["1. Which of the following charity organisations would you like to join? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "hire", pos: "verb", emoji: "🧑‍🏫", def: "to give someone a job and pay them", ex: "When her school grew, she hired another teacher to help her teach.", exFromBook: true, ar: "يوظّف" },
        { w: "raise", pos: "verb", emoji: "💰", def: "to collect money for something", ex: "She raised a lot of money that was used to open another school.", exFromBook: true, ar: "يجمع (المال)" },
        { w: "community", pos: "noun", emoji: "🏘️", def: "the people who live in one place", ex: "Her community would not let women hold this position.", exFromBook: true, ar: "المجتمع" },
        { w: "demote", pos: "verb", emoji: "⬇️", def: "to move someone to a lower job", ex: "She was demoted to “female assistant”.", exFromBook: true, ar: "يُنزِل رتبة / يخفّض منصب" },
        { w: "harsh", pos: "adjective", emoji: "🥶", def: "very difficult, unkind and unpleasant", ex: "Due to the harsh environment, Clara suffered from many health problems.", exFromBook: true, ar: "قاسٍ" },
        { w: "quit", pos: "verb", emoji: "🚪", def: "to leave your job", ex: "Clara suffered from many health problems and decided to quit her job.", exFromBook: true, ar: "يترك (العمل) / يستقيل" },
        { w: "wound", pos: "noun", emoji: "🩹", def: "a cut or injury on the body", ex: "She fed soldiers and cleaned their wounds on the battlefield.", exFromBook: true, ar: "جُرح" },
        { w: "compelled", pos: "adjective", emoji: "⛓️", def: "made to do something; you have no choice", ex: "“I may be compelled to face danger, but I never fear it.”", exFromBook: true, ar: "مُجبَر / مضطرّ" }
      ],
      sections: [
        { type: "reading", title: "2. a. Read the text and give it a suitable title.", page: 35,
          instructions: "Read the text about Clara Barton. Then give it a title.",
          paras: [
            "Clara Barton was a very special woman. She was born in 1821 in the United States. She started her career as a teacher at an early age. Clara opened a free school and became a popular and respected teacher. When her school grew, she hired another teacher to help her teach. There were over 600 students in the school. She raised a lot of money that was used to open another school.",
            "Unfortunately, Clara was not allowed to be the principal of the new school. Her community would not let women hold this position. A male principal was hired instead and was paid twice as much as Clara. She was demoted to “female assistant”.",
            "Due to the harsh environment, Clara suffered from many health problems and decided to quit her job.",
            "When the Civil war began, Clara worked as a nurse. She fed soldiers and cleaned their wounds on the battlefield. She proved that women can succeed in any job. Clara later founded an international organisation. Injured soldiers were cared for by Clara's organisation. Clara always said, “I may be compelled to face danger, but I never fear it.”"
          ],
          speaker: null },

        { type: "activity", title: "2. a. Give the text a suitable title.", page: 35, source: "book",
          instructions: "Write a good title for the text.", instructionsAr: "اكتب عنوانًا مناسبًا للنص.",
          items: [
            { t: "short", q: "A suitable title for the text:", model: "Clara Barton: A Brave Woman / The Woman Who Never Feared Danger", open: true,
              hint: "Who is the text about? What kind of person was she?" }
          ] },

        { type: "activity", title: "2. b. Answer the following questions:", page: 36, source: "book",
          instructions: "Answer the questions. Use the text and your own ideas.", instructionsAr: "أجب عن الأسئلة مستعينًا بالنص وأفكارك.",
          items: [
            { t: "short", q: "1. How would you describe Clara Barton?",
              model: "She was very special, hard-working, popular and respected. She was also brave: she never feared danger.",
              keywords: [["special", "brave", "hard", "respect", "strong", "kind", "popular"]],
              hint: "Look at the first sentence and the last sentence of the text." },
            { t: "short", q: "2. Women were not treated as equal to men during the 19th Century, explain.",
              model: "Clara was not allowed to be the principal because her community would not let women hold this position. A male principal was hired instead and was paid twice as much as Clara, and she was demoted to “female assistant”.",
              keywords: [["principal"], ["paid", "twice", "demoted", "not allowed", "let women"]],
              hint: "Read paragraph 2 (Unfortunately, …)." },
            { t: "short", q: "3. What is the purpose of the writer?",
              model: "To tell us about the life of Clara Barton and to show that women can succeed in any job.",
              keywords: [["clara", "her life", "inform", "tell"], ["women", "succeed", "any job"]],
              hint: "Why did the writer write about Clara? What did she prove?" },
            { t: "short", q: "4. Think of a great Kuwaiti woman and compare her to Clara Barton.", open: true,
              model: "Both women helped people. Clara was a teacher and a nurse, but … was …",
              hint: "Both … / Clara was …, but … was …" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Clara Barton was born in 1821.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“She was born in 1821 in the United States.”" },
            { t: "mcq", q: "There were 60 students in Clara's school.", options: ["True", "False"], answer: 1, hint: "How many students?", why: "“There were over 600 students in the school.”" },
            { t: "mcq", q: "Clara became the principal of the new school.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "“Clara was not allowed to be the principal of the new school.”" },
            { t: "mcq", q: "The male principal was paid twice as much as Clara.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“A male principal was hired instead and was paid twice as much as Clara.”" },
            { t: "mcq", q: "Clara worked as a nurse in the Civil war.", options: ["True", "False"], answer: 0, hint: "Last paragraph.", why: "“When the Civil war began, Clara worked as a nurse.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الكلمات.",
          items: [
            { t: "fill", q: "1. The company wants to ____ two new workers.", answer: ["hire"], bank: ["hire", "quit", "wound", "harsh"], why: "hire = give someone a job." },
            { t: "fill", q: "2. The nurse cleaned the ____ on his arm.", answer: ["wound"], bank: ["hire", "quit", "wound", "harsh"], why: "A wound is a cut or injury." },
            { t: "fill", q: "3. He was tired, so he decided to ____ his job.", answer: ["quit"], bank: ["hire", "quit", "wound", "harsh"], why: "quit = leave your job." },
            { t: "fill", q: "4. Life in the desert can be very ____.", answer: ["harsh"], bank: ["hire", "quit", "wound", "harsh"], why: "harsh = very difficult and unpleasant." },
            { t: "fill", q: "5. Our class wants to ____ money for the poor.", answer: ["raise"], bank: ["raise", "demote", "community"], why: "raise money = collect money." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the four logos (Marie Curie, Zakat House, Kuwait Red Crescent Society, Voluntary Work Center). Students say which one they would join and why.",
          "Pre-teach the 8 bold words with emoji and Arabic.",
          "Read the text paragraph by paragraph. After each one ask: What happened? How did Clara feel?",
          "Students write a title (2a) and compare titles in pairs; then answer 2b.",
          "Question 4 prepares the Tip on p. 36 (research a great Kuwaiti woman)."
        ],
        pair: ["Partner A reads one paragraph; partner B says one fact from it.", "Pairs compare their titles and choose the best one."],
        group: ["Groups make a timeline of Clara's life: teacher → new school → demoted → quit → nurse → international organisation."],
        quick: [
          { q: "When was Clara Barton born?", a: "In 1821." },
          { q: "Why was Clara not allowed to be the principal?", a: "Her community would not let women hold this position." },
          { q: "What did Clara do in the Civil war?", a: "She worked as a nurse: she fed soldiers and cleaned their wounds." },
          { q: "What does “quit” mean?", a: "To leave your job." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u4l2", num: 2, skill: "Grammar",
      title: "The Passive Voice (Past Simple)",
      pages: [36, 36],
      status: "complete",
      canDo: ["Use simple past (active and passive)"],
      goals: ["Change active sentences into passive.", "Use was / were + past participle.", "Find passive sentences in a text."],
      goalsAr: ["أحوّل الجمل من المبني للمعلوم إلى المبني للمجهول.", "أستخدم was / were + التصريف الثالث للفعل.", "أجد جمل المبني للمجهول في النص."],
      warmup: {
        title: "Who did it? What happened?",
        image: null,
        emoji: "🏫",
        prompts: ["Clara opened a free school. Who opened the school?", "A free school was opened by Clara. Which word comes first: Clara or the school?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "The Passive Voice (Past Simple)", page: 36,
          steps: [
            { title: "Step 1 — The book's rule",
              text: "Passive: Object + was/were + Past Participle. The passive voice is used to focus on the action rather than who did it.",
              textAr: "المبني للمجهول: المفعول به + was/were + التصريف الثالث للفعل. نستخدمه للتركيز على الحدث وليس على من قام به.",
              examples: [
                "e.g. {s:Clara} {v:opened} {o:a free school}. → {o:A free school} {a:was} {v:opened} {t:by Clara}."
              ] },
            { title: "Step 2 — How to make it", source: "extra",
              text: "1) Take the object of the active sentence and put it first. 2) Add was (one thing) or were (more than one). 3) Add the past participle (opened, cancelled, taken). 4) If it is important, add by + the doer.",
              textAr: "١) ضع المفعول به في البداية. ٢) أضف was للمفرد أو were للجمع. ٣) أضف التصريف الثالث للفعل. ٤) إذا كان مهمًا، أضف by + الفاعل.",
              examples: [
                "{s:The teacher} {v:cancelled} {o:the test}. → {o:The test} {a:was} {v:cancelled} {t:by the teacher}.",
                "{s:They} {v:took} {o:some pictures} in the old town. → {o:Some pictures} {a:were} {v:taken} in the old town."
              ] },
            { title: "Step 3 — was or were?", source: "extra",
              text: "Look at the new subject (the old object). One thing → was. More than one → were.",
              textAr: "انظر إلى الفاعل الجديد: مفرد ← was، جمع ← were.",
              examples: [
                "{o:A male principal} {a:was} {v:hired}. (one person → was)",
                "{o:Injured soldiers} {a:were} {v:cared for} {t:by Clara's organisation}. (many → were)"
              ] },
            { title: "Step 4 — Do we need “by …”?", source: "extra",
              text: "We use by + the doer only when it is important. When the doer is not important, or we do not know it, or it is just “they / people”, we leave it out.",
              textAr: "نضيف by + الفاعل فقط عندما يكون مهمًا. إذا كان غير مهم أو غير معروف أو كان they / people نحذفه.",
              examples: [
                "{s:They} {v:took} some pictures. → {o:Some pictures} {a:were} {v:taken}. (not “by them”)",
                "{o:She} {a:was} {v:demoted} to “female assistant”. (We do not need to say who did it.)"
              ] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Use the past participle (3rd form), not the past simple, after was / were. Irregular verbs: take → taken, write → written, eat → eaten, give → given.",
              textAr: "بعد was / were نستخدم التصريف الثالث للفعل وليس الماضي البسيط.",
              examples: [
                "✗ Some pictures were {n:took}. → ✓ Some pictures were {v:taken}.",
                "✗ The test {n:were} cancelled. → ✓ The test {a:was} cancelled."
              ] }
          ],
          table: {
            head: ["Active (past simple)", "Passive (past simple)"],
            rows: [
              ["Clara opened a free school.", "A free school was opened by Clara."],
              ["The community hired a male principal.", "A male principal was hired."],
              ["Clara's organisation cared for injured soldiers.", "Injured soldiers were cared for by Clara's organisation."]
            ]
          },
          worked: {
            q: "Change into passive: The students cleaned the classrooms.",
            steps: [
              "Find the object: the classrooms. It goes first.",
              "the classrooms = more than one → were.",
              "cleaned → past participle: cleaned.",
              "Who did it? the students. Add “by the students” if it is important."
            ],
            a: "The classrooms were cleaned by the students."
          },
          notes: [
            "Active: who did it is first. Passive: what happened to the thing is first.",
            "Negative passive: was not / wasn't + past participle (Clara was not allowed to be the principal).",
            "“She was born in 1821.” is also a passive form: we always say “was / were born”."
          ] },

        { type: "activity", title: "3. a. Read the text again and underline three sentences in which the passive voice is used.", page: 36, source: "book", stage: "guided",
          instructions: "Read each sentence from the Clara Barton text. Is it active or passive? Find at least three passive sentences.",
          instructionsAr: "اقرأ كل جملة من نص كلارا بارتون: هل هي مبنية للمعلوم أم للمجهول؟",
          items: [
            { t: "choose", q: "“Clara opened a free school and became a popular and respected teacher.”", options: ["active", "passive"], answer: 0, why: "Clara (the doer) + opened. No was/were + past participle." },
            { t: "choose", q: "“A male principal was hired instead and was paid twice as much as Clara.”", options: ["active", "passive"], answer: 1, why: "was hired / was paid = was + past participle → passive." },
            { t: "choose", q: "“She was demoted to “female assistant”.”", options: ["active", "passive"], answer: 1, why: "was demoted = was + past participle → passive." },
            { t: "choose", q: "“She fed soldiers and cleaned their wounds on the battlefield.”", options: ["active", "passive"], answer: 0, why: "She (the doer) + fed / cleaned → active." },
            { t: "choose", q: "“Injured soldiers were cared for by Clara's organisation.”", options: ["active", "passive"], answer: 1, why: "were cared for + by … → passive." },
            { t: "choose", q: "“Unfortunately, Clara was not allowed to be the principal of the new school.”", options: ["active", "passive"], answer: 1, why: "was not allowed = was + not + past participle → passive (negative)." },
            { t: "choose", q: "“She raised a lot of money that was used to open another school.”", options: ["active only", "it has a passive part"], answer: 1, why: "“was used” = was + past participle. The money was used (by Clara) to open another school." }
          ] },

        { type: "activity", title: "3. b. Change the following sentences into passive:", page: 36, source: "book", stage: "guided",
          instructions: "Write each sentence in the passive.", instructionsAr: "حوّل الجمل إلى المبني للمجهول.",
          items: [
            { t: "short", q: "1. The teacher cancelled the test.",
              model: "The test was cancelled by the teacher.",
              keywords: [["test was cancelled"]],
              hint: "Start with: The test … (one thing → was)" },
            { t: "short", q: "2. They took some pictures in the old town.",
              model: "Some pictures were taken in the old town.",
              keywords: [["pictures were taken"]],
              hint: "Start with: Some pictures … (many → were). take → taken. We do not need “by them”." }
          ] },

        { type: "write", title: "3. c. In your notebook, write three sentences about the pictures using the past simple passive.", page: 36, source: "book",
          image: "crops/u4l2-pictures.jpg",
          instructions: "Look at the three pictures. Write one passive sentence about each picture.",
          wordBank: ["was", "were", "baked", "eaten", "sent", "planted", "watered"],
          frame: [
            { label: "Picture 1 (cookies)", hint: "The cookies were …" },
            { label: "Picture 2 (email)", hint: "An email was …" },
            { label: "Picture 3 (tree)", hint: "A tree was …" }
          ],
          model: "The cookies were baked and put in a jar.\nAn email was sent to my friend.\nA small tree was planted and watered.",
          modelFromBook: false,
          checklist: ["I used was or were.", "I used the past participle (3rd form).", "I wrote three sentences."],
          minWords: 15 },

        { type: "activity", title: "Extra Practice: Step 1 — was or were?", source: "extra", stage: "guided",
          instructions: "Choose was or were.", instructionsAr: "اختر was أو were.",
          items: [
            { t: "choose", q: "The window (was / were) broken by the ball.", options: ["was", "were"], answer: 0, why: "The window = one thing → was." },
            { t: "choose", q: "The letters (was / were) sent yesterday.", options: ["was", "were"], answer: 1, why: "The letters = more than one → were." },
            { t: "choose", q: "A new hospital (was / were) built in 2020.", options: ["was", "were"], answer: 0, why: "A new hospital = one → was." },
            { t: "choose", q: "The soldiers (was / were) cared for by Clara.", options: ["was", "were"], answer: 1, why: "The soldiers = many → were." },
            { t: "choose", q: "The cake was (ate / eaten) by the children.", options: ["ate", "eaten"], answer: 1, why: "After was we use the past participle: eaten." },
            { t: "choose", q: "The book was (written / wrote) by a Kuwaiti writer.", options: ["written", "wrote"], answer: 0, why: "Past participle of write = written." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a passive sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة مبنية للمجهول.",
          items: [
            { t: "order", q: "🏫 Make a sentence.", words: ["A", "free", "school", "was", "opened", "by", "Clara."], answer: ["A free school was opened by Clara."], why: "Object + was + past participle + by + doer." },
            { t: "order", q: "📝 Make a sentence.", words: ["The", "test", "was", "cancelled", "by", "the", "teacher."], answer: ["The test was cancelled by the teacher."], why: "The test + was cancelled + by the teacher." },
            { t: "order", q: "📸 Make a sentence.", words: ["Some", "pictures", "were", "taken", "in", "the", "old", "town."], answer: ["Some pictures were taken in the old town."], why: "Some pictures (many) + were taken." },
            { t: "order", q: "🩹 Make a sentence.", words: ["The", "wounds", "were", "cleaned", "by", "a", "nurse."], answer: ["The wounds were cleaned by a nurse."], why: "The wounds (many) + were cleaned + by a nurse." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Change and fix (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake, then write your own passive sentences.", instructionsAr: "صحّح الخطأ ثم اكتب جملًا من عندك.",
          items: [
            { t: "fix", q: "The emails {was} sent by Ahmed.", answer: ["were"], hint: "The emails = many.", why: "Plural subject → were." },
            { t: "fix", q: "The tree was {plant} by my father.", answer: ["planted"], hint: "was + past participle.", why: "plant → planted (past participle)." },
            { t: "fix", q: "Some photos were {took} at the museum.", answer: ["taken"], hint: "take – took – taken", why: "After were we use the past participle: taken." },
            { t: "short", q: "Change into passive: My mother made a delicious cake.", model: "A delicious cake was made by my mother.", keywords: [["cake was made"]], hint: "A delicious cake was …" },
            { t: "short", q: "Write your own passive sentence about something that happened at school last week.", model: "A science competition was held at our school last week.", open: true, hint: "… was / were + past participle" }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder",
        sentences: [
          "A free school was opened by Clara.",
          "The test was cancelled by the teacher.",
          "Some pictures were taken in the old town.",
          "A male principal was hired instead.",
          "Injured soldiers were cared for by Clara's organisation."
        ] },
      teacher: {
        notes: [
          "Write the book example on the board: Clara opened a free school → A free school was opened by Clara. Circle the object and show how it moves to the front.",
          "Teach: object first → was / were → past participle → (by + doer).",
          "3a: students find the passive sentences in the Clara text (was hired, was paid, was demoted, were cared for, was not allowed, was used).",
          "3b on the board together; 3c in notebooks with the three pictures.",
          "Weak students: Extra Steps 1–2. Strong students: Step 3 and the Grammar Lab."
        ],
        pair: ["A says an active sentence about school (The cleaner cleaned the class). B changes it into passive. Swap.", "Pairs find the passive sentences in the text and underline them in two colours: was = blue, were = red."],
        group: ["Groups write 3 passive sentences about Kuwait history (e.g. The Kuwait Towers were opened in 1979.) and share them."],
        quick: [
          { q: "What is the form of the past simple passive?", a: "Object + was/were + past participle." },
          { q: "Why do we use the passive?", a: "To focus on the action rather than who did it." },
          { q: "Change: The teacher cancelled the test.", a: "The test was cancelled by the teacher." },
          { q: "was or were: The pictures ___ taken.", a: "were" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — WRITING (Speaking and Writing) ─────────────────────────
    {
      id: "u4l3", num: 3, skill: "Writing",
      title: "Speaking and Writing: A Charity Campaign",
      pages: [36, 36],
      status: "complete",
      canDo: ["Make suggestions", "Discuss and exchange information"],
      goals: ["Plan a charity campaign in a group.", "Suggest solutions to problems.", "Write a blog post to promote it."],
      goalsAr: ["نخطّط لحملة خيرية في مجموعة.", "أقترح حلولًا للمشكلات.", "أكتب منشورًا في مدوّنة للترويج لها."],
      warmup: {
        title: "Think about charity",
        image: null,
        emoji: "💝",
        prompts: ["Clara Barton founded an organisation to help people. Who needs help in your community?", "What can students do to help them?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "4. a. In groups, think of a charity campaign that you can create.", page: 36, source: "book",
          prompts: [
            "Give it a name.",
            "Discuss its services.",
            "Discuss the main difficulties that you may face while creating it.",
            "Discuss possible solutions to those difficulties."
          ],
          image: null, emoji: "👥" },

        { type: "speak", title: "4. a. Make suggestions in your group", page: 36, source: "book",
          instructions: "In groups, think of a charity campaign that you can create. Give it a name, discuss its services, the main difficulties that you may face while creating it and possible solutions to those difficulties.",
          dialogue: [
            { who: "A", text: "Let's create a campaign to help … . What shall we call it?" },
            { who: "B", text: "" },
            { who: "A", text: "What services can it give?" },
            { who: "B", text: "" },
            { who: "A", text: "What difficulties may we face? How can we solve them?" },
            { who: "B", text: "" }
          ],
          starters: ["Let's call it …", "Why don't we …?", "We could …", "How about …?", "One difficulty is … . We can solve it by …"],
          record: true },

        { type: "write", title: "4. b. In your notebook, write a post which can be displayed on your blog to promote your campaign. (You can add a logo)", page: 36, source: "book",
          instructions: "Write a blog post about your campaign. Say its name, what it does, and how people can help. You can add a logo.",
          wordBank: ["campaign", "charity", "help", "donate", "volunteer", "raise money", "join us"],
          frame: [
            { label: "Name and aim", hint: "Our campaign is called … . We want to help …" },
            { label: "Services", hint: "We will … / We collect …" },
            { label: "Difficulties and solutions", hint: "It may be difficult to … , so we will …" },
            { label: "Call to action", hint: "Join us! / You can help by …" }
          ],
          model: "Warm Hearts Campaign\nOur campaign is called “Warm Hearts”. We want to help poor families in winter. We collect warm clothes and blankets and give them to families who need them. It may be difficult to collect enough clothes, so we will put boxes in schools and malls. We also need volunteers to sort the clothes. Join us and make someone's winter warmer!",
          modelFromBook: false,
          checklist: ["I wrote the name of the campaign.", "I explained its services.", "I asked people to join or help.", "I checked capital letters and full stops."],
          minWords: 50 },

        { type: "discuss", title: "💡 Tip", page: 36, source: "book",
          prompts: ["Read books and find information about the great Kuwaiti woman you discussed in exercise 2.b, then present it to your class."],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Making suggestions", source: "extra", stage: "guided",
          instructions: "Choose the correct word to complete each suggestion.", instructionsAr: "اختر الكلمة الصحيحة لإكمال الاقتراح.",
          items: [
            { t: "choose", q: "Why don't we (sell / selling) cakes to raise money?", options: ["sell", "selling"], answer: 0, why: "Why don't we + base verb." },
            { t: "choose", q: "How about (make / making) posters for the campaign?", options: ["make", "making"], answer: 1, why: "How about + verb-ing." },
            { t: "choose", q: "Let's (ask / asking) our teachers for help.", options: ["ask", "asking"], answer: 0, why: "Let's + base verb." },
            { t: "choose", q: "We (could / can to) put boxes in the school.", options: ["could", "can to"], answer: 0, why: "could + base verb (no “to”)." }
          ] }
      ],
      game: { kind: "quiz", title: "Campaign Quiz",
        items: [
          { t: "mcq", q: "Which sentence is a suggestion?", options: ["Let's collect old books.", "I collected old books.", "Old books are heavy."], answer: 0, why: "Let's + verb makes a suggestion." },
          { t: "mcq", q: "A post on a blog should …", options: ["have a clear title", "have no title", "be one word"], answer: 0, why: "A clear title helps readers." },
          { t: "mcq", q: "Which word means “give money or things to help people”?", options: ["donate", "demote", "quit"], answer: 0, why: "donate = give to charity." },
          { t: "mcq", q: "How about ____ a charity day?", options: ["organise", "organising", "organised"], answer: 1, why: "How about + verb-ing." },
          { t: "mcq", q: "Who founded an international organisation in the text?", options: ["Clara Barton", "the male principal", "the soldiers"], answer: 0, why: "“Clara later founded an international organisation.”" }
        ] },
      teacher: {
        notes: [
          "Groups of 4: give 5 minutes to choose a name, services, difficulties and solutions. One student takes notes.",
          "Model suggestion language on the board: Let's … / Why don't we …? / How about …ing?",
          "Each group presents its campaign in 1 minute.",
          "Students write the blog post in their notebooks and design a logo.",
          "Tip: ask students to research the great Kuwaiti woman from 2b and present her next lesson."
        ],
        pair: ["Pairs swap blog posts and suggest one improvement.", "Pairs role-play: A is a reporter, B explains the campaign."],
        group: ["Gallery walk: posts and logos on the wall; students vote for the best campaign."],
        quick: [
          { q: "Give one suggestion for a charity campaign.", a: "Let's collect clothes for poor families. (any suggestion)" },
          { q: "What four things must you discuss for your campaign?", a: "Its name, its services, the main difficulties and possible solutions." },
          { q: "Complete: Why don't we ___ (raise) money?", a: "raise" }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — LISTENING ─────────────────────────
    {
      id: "u4l4", num: 4, skill: "Listening",
      title: "Folktales",
      pages: [37, 37],
      status: "complete",
      canDo: ["Talk about the past", "Form questions using the past simple"],
      goals: ["Talk about folktales.", "Listen to a folktale and answer questions.", "Write past simple questions about a story."],
      goalsAr: ["أتحدث عن الحكايات الشعبية.", "أستمع إلى حكاية شعبية وأجيب عن الأسئلة.", "أكتب أسئلة بالماضي البسيط عن قصة."],
      warmup: {
        title: "1. Discuss in pairs:",
        image: null,
        emoji: "📜",
        prompts: ["1. What is a folktale?", "2. Name some popular folktales and tell your partner a little about them."],
        seconds: 120
      },
      vocab: [
        { w: "astonished", pos: "adjective", emoji: "😲", def: "very surprised", ex: "I was astonished when I saw the glowing sea.", exFromBook: false, ar: "مندهش جدًا" },
        { w: "cottage", pos: "noun", emoji: "🛖", def: "a small, simple house, usually in the countryside", ex: "The old farmer lived in a small cottage near the lake.", exFromBook: false, ar: "كوخ / بيت ريفي صغير" },
        { w: "exceptionally", pos: "adverb", emoji: "🌟", def: "very; much more than usual", ex: "The food at the party was exceptionally good.", exFromBook: false, ar: "بشكل استثنائي" },
        { w: "beg", pos: "verb", emoji: "🙏", def: "to ask for something in a strong, worried way", ex: "The boy begged his father to let him go on the trip.", exFromBook: false, ar: "يتوسّل" },
        { w: "submissive", pos: "adjective", emoji: "🙇", def: "quietly obeying; not arguing", ex: "He became submissive and did what his mother said.", exFromBook: false, ar: "خاضع / مطيع" },
        { w: "plunge in", pos: "phrasal verb", emoji: "🤿", def: "to jump or dive quickly into water", ex: "The diver plunged in and swam to the bottom.", exFromBook: false, ar: "يغطس / يقفز في الماء" },
        { w: "humble", pos: "adjective", emoji: "🏚️", def: "simple and not big or rich", ex: "They lived a humble life in a small village.", exFromBook: false, ar: "متواضع / بسيط" }
      ],
      sections: [
        { type: "listen", title: "2. a. Listen to the folktale and answer the following questions:", page: 37, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "Listen to the folktale (track 4.1). Answer the questions.",
          items: [
            { t: "short", q: "1. Why was Huw astonished?", open: true, hint: "Listen: what did Huw see?" },
            { t: "short", q: "2. Why were the silver cows better than the black and white ones?", open: true, hint: "Think about the milk." },
            { t: "short", q: "3. Was the mother's decision wise? Why? Why not?", open: true, hint: "I think it was / wasn't wise because …" }
          ] },

        { type: "listen", title: "2. b. Listen to the folktale again and complete the following summary with words from the list:", page: 37, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "Words: plunged in - submissive - cottage - begged - exceptionally - humble. Listen again and complete the summary.",
          items: [
            { t: "short", q: "Huw lived in a ____ . One day, while Huw was playing the harp, he saw six silver cows come out of the water.", open: true, hint: "Where did Huw live?" },
            { t: "short", q: "These cows gave milk which was ____ good. It was so much better than the milk from Huw's older cows.", open: true, hint: "Which word goes before “good”?" },
            { t: "short", q: "After a few months, one of the silver cows stopped giving milk. Huw's mother decided to give the cow to the butcher. Huw ____ his mother to save the cow,", open: true, hint: "What did Huw do to his mother?" },
            { t: "short", q: "but he became ____ when she told him to be quiet and stopped arguing.", open: true, hint: "He stopped arguing. How did he become?" },
            { t: "short", q: "The next morning, the six silver cows ran to the lake and ____ . They disappeared.", open: true, hint: "What did the cows do at the lake?" }
          ] },

        { type: "activity", title: "3. With your partner, write some questions about the story and what might have happened after.", page: 37, source: "book",
          instructions: "e.g.: What did Huw do every morning? You can use these question words: (How/ Why/ What…etc)",
          instructionsAr: "اكتب مع زميلك أسئلة عن القصة وعمّا قد يكون حدث بعدها.",
          image: null,
          items: [
            { t: "short", q: "Question 1 (What …?)", open: true, model: "What did Huw do every morning?", hint: "What did … + base verb …?" },
            { t: "short", q: "Question 2 (Why …?)", open: true, model: "Why did the silver cow stop giving milk?", hint: "Why did … + base verb …?" },
            { t: "short", q: "Question 3 (How …?)", open: true, model: "How did Huw feel when the cows disappeared?", hint: "How did … feel …?" },
            { t: "short", q: "Question 4 (What happened after …?)", open: true, model: "Did the silver cows ever come back?", hint: "Did … + base verb …?" }
          ] },

        { type: "activity", title: "Extra Practice: Past simple questions", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a question.", instructionsAr: "رتّب الكلمات لتكوّن سؤالًا.",
          items: [
            { t: "order", q: "Make a question.", words: ["Where", "did", "Huw", "live?"], answer: ["Where did Huw live?"], why: "Question word + did + subject + base verb?" },
            { t: "order", q: "Make a question.", words: ["What", "did", "the", "cows", "give?"], answer: ["What did the cows give?"], why: "What + did + the cows + give?" },
            { t: "order", q: "Make a question.", words: ["Why", "did", "the", "mother", "sell", "the", "cow?"], answer: ["Why did the mother sell the cow?"], why: "Why + did + subject + base verb (sell, not sold)." },
            { t: "choose", q: "Where did the cows (go / went)?", options: ["go", "went"], answer: 0, why: "After did we use the base verb: go." }
          ] },

        { type: "listen", title: "Extra Practice: The Fisherman and the Golden Fish (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice folktale read by a computer voice. Listen and answer.",
          script: [
            { who: "Grandpa", text: "Long ago, a poor fisherman lived in a small hut near the sea. One evening, while he was fishing, he caught a golden fish." },
            { who: "Boy", text: "Did he eat it?" },
            { who: "Grandpa", text: "No! The fish begged him, “Please let me go, and I will help you.” The fisherman was kind, so he put the fish back in the water." },
            { who: "Boy", text: "What happened next?" },
            { who: "Grandpa", text: "The next morning, while he was walking along the beach, he found a big shell. Inside, there was a beautiful pearl. He sold it and bought food for the whole village." },
            { who: "Boy", text: "So the fish helped him!" },
            { who: "Grandpa", text: "Yes. Kindness always comes back to you." }
          ],
          items: [
            { t: "mcq", q: "Where did the fisherman live?", options: ["in a big palace", "in a small hut near the sea", "in a cottage near a lake", "on a ship"], answer: 1, why: "“A poor fisherman lived in a small hut near the sea.”" },
            { t: "mcq", q: "What did he catch?", options: ["a silver cow", "a black fish", "a golden fish", "a shell"], answer: 2, why: "“…he caught a golden fish.”" },
            { t: "mcq", q: "What did the fish ask him to do?", options: ["to let it go", "to cook it", "to take it home", "to sell it"], answer: 0, why: "“Please let me go, and I will help you.”" },
            { t: "mcq", q: "What did he find inside the shell?", options: ["gold coins", "a beautiful pearl", "a small fish", "nothing"], answer: 1, why: "“Inside, there was a beautiful pearl.”" },
            { t: "mcq", q: "What did he buy?", options: ["a new boat", "a house", "food for the whole village", "a harp"], answer: 2, why: "“He sold it and bought food for the whole village.”" },
            { t: "fill", q: "While he ____ along the beach, he found a big shell.", answer: ["was walking"], bank: ["was walking", "walked", "were walking"], why: "While + past continuous: he was walking." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Discuss in pairs: a folktale is an old traditional story that people told for many years (e.g. Sindbad, Ali Baba, Kuwaiti stories like Um Al-Sa'af wal Leef).",
          "Pre-teach the summary words (plunged in, submissive, cottage, begged, exceptionally, humble) with emoji.",
          "Play track 4.1 (teacher's audio) for 2a, then again for 2b. The book recording is not inside this app.",
          "2b help: each word fits only one gap by grammar and meaning (a ___ → humble cottage; ___ good → exceptionally; Huw ___ his mother → begged; became ___ → submissive; ran to the lake and ___ → plunged in). Check with the recording.",
          "Exercise 3: pairs write 4 past simple questions; they ask another pair. If there is no audio, use the Extra folktale."
        ],
        pair: ["Pairs ask and answer their questions about the story.", "A retells the story in 3 sentences; B adds what happened after."],
        group: ["Groups act out the folktale: Huw, his mother, the butcher, the cows."],
        quick: [
          { q: "What is a folktale?", a: "An old traditional story told by people for many years." },
          { q: "Which instrument was Huw playing?", a: "The harp." },
          { q: "Make a question: Huw / live / where", a: "Where did Huw live?" },
          { q: "What does “astonished” mean?", a: "Very surprised." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — GRAMMAR ─────────────────────────
    {
      id: "u4l5", num: 5, skill: "Grammar",
      title: "Past Continuous Tense",
      pages: [38, 38],
      status: "complete",
      canDo: ["Use past continuous", "Use (while/when)", "Make suggestions"],
      goals: ["Use was / were + verb-ing.", "Use while and when with two past actions.", "Discuss how to protect animals."],
      goalsAr: ["أستخدم was / were + الفعل مع ing.", "أستخدم while و when مع حدثين في الماضي.", "أناقش كيف نحمي الحيوانات."],
      warmup: {
        title: "What were you doing?",
        image: null,
        emoji: "⏰",
        prompts: ["What were you doing yesterday at 8 p.m.?", "What was your family doing at that time?"],
        seconds: 60,
        source: "extra"
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Past Continuous Tense", page: 38,
          steps: [
            { title: "Step 1 — The book's example",
              text: "e.g.: While Huw was watching over the herd, six silver cows rose out of the water.",
              textAr: "مثال الكتاب: بينما كان هيو يرعى القطيع، خرجت ست بقرات فضية من الماء.",
              examples: [
                "{c:While} {s:Huw} {a:was} {v:watching} over the herd, {s:six silver cows} {v:rose out} of the water."
              ] },
            { title: "Step 2 — How do we make it?", source: "extra",
              text: "Past continuous = was / were + verb-ing. I, he, she, it → was. You, we, they → were.",
              textAr: "الماضي المستمر = was / were + الفعل مع ing. مع I و he و she و it نستخدم was، ومع you و we و they نستخدم were.",
              examples: [
                "{s:I} {a:was} {v:playing} the harp.",
                "{s:They} {a:were} {v:giving} milk.",
                "{s:She} {a:was not} {v:listening}. / {a:Were} {s:you} {v:sleeping}?"
              ] },
            { title: "Step 3 — Long action + short action", source: "extra",
              text: "We use the past continuous for a long action in progress in the past. A short action (past simple) happens in the middle of it.",
              textAr: "نستخدم الماضي المستمر لحدث طويل كان مستمرًا في الماضي، ويقطعه حدث قصير بالماضي البسيط.",
              examples: [
                "{s:Huw} {a:was} {v:watching} the herd (long) → {s:the cows} {v:rose out} of the water (short).",
                "{s:The vet} {a:was} {v:treating} an injured tiger {c:when} {s:the phone} {v:rang}."
              ] },
            { title: "Step 4 — while or when?", source: "extra",
              text: "while + past continuous (the long action). when + past simple (the short action). The comma comes after the first part when it starts with while or when.",
              textAr: "while + الماضي المستمر (الحدث الطويل). when + الماضي البسيط (الحدث القصير).",
              examples: [
                "{c:While} {s:I} {a:was} {v:walking} home, {s:it} {v:started} to rain.",
                "{s:I} {a:was} {v:walking} home {c:when} {s:it} {v:started} to rain.",
                "{c:When} {s:I} {v:left} the club, {s:it} {a:was} already {v:snowing} heavily."
              ] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Do not forget was / were. Use were with you, we, they. Spelling: write → writing, run → running, sit → sitting.",
              textAr: "لا تنسَ was / were، واستخدم were مع you و we و they.",
              examples: [
                "✗ I {n:watching} TV. → ✓ I {a:was} {v:watching} TV.",
                "✗ They {n:was} playing. → ✓ They {a:were} {v:playing}."
              ] }
          ],
          table: {
            head: ["Subject", "Positive", "Negative", "Question"],
            rows: [
              ["I / he / she / it", "was playing", "wasn't playing", "Was he playing?"],
              ["you / we / they", "were playing", "weren't playing", "Were they playing?"]
            ]
          },
          worked: {
            q: "Choose: Fatma dropped her ID card while she (look - looks - was looking) for her purse.",
            steps: [
              "Find the linker: while.",
              "After while we use the long action → past continuous.",
              "she → was + looking.",
              "dropped (short action) happened in the middle of the long action."
            ],
            a: "Fatma dropped her ID card while she was looking for her purse."
          },
          notes: [
            "Long action → past continuous. Short action → past simple.",
            "You can start with the while / when part or with the other part: the meaning is the same.",
            "Some verbs are not usually used in the continuous: know, like, want, need (✗ I was knowing)."
          ] },

        { type: "activity", title: "4. a. Choose the correct verb to complete the following sentences:", page: 38, source: "book", stage: "guided",
          instructions: "Choose the correct verb.", instructionsAr: "اختر الفعل الصحيح.",
          items: [
            { t: "choose", q: "1. When I (leave - left - was leaving) the club, it was already snowing heavily.", options: ["leave", "left", "was leaving"], answer: 1,
              hint: "when + short action (past simple).", why: "When + past simple: left. It was already snowing (long action) when I left." },
            { t: "choose", q: "2. Fatma dropped her ID card while she (look - looks - was looking) for her purse.", options: ["look", "looks", "was looking"], answer: 2,
              hint: "while + long action.", why: "while + past continuous: was looking." },
            { t: "choose", q: "3. A new student (enter/ entered/ was entering) our class while my partner was giving a presentation.", options: ["enter", "entered", "was entering"], answer: 1,
              hint: "The long action is “was giving a presentation”.", why: "The short action is in the past simple: entered." }
          ] },

        { type: "activity", title: "4. b. Complete the following sentences:", page: 38, source: "book", stage: "independent",
          instructions: "Finish each sentence with your own idea. Use the past simple or the past continuous.", instructionsAr: "أكمل الجمل بأفكارك.",
          items: [
            { t: "short", q: "1. The vet was treating an injured tiger in the zoo, when …", open: true, model: "The vet was treating an injured tiger in the zoo, when it suddenly woke up.", hint: "when + past simple (short action)." },
            { t: "short", q: "2. I was walking along the road when …", open: true, model: "I was walking along the road when I saw an old friend.", hint: "when + past simple." },
            { t: "short", q: "3. I heard a scream while …", open: true, model: "I heard a scream while I was reading in my room.", hint: "while + was / were + verb-ing." },
            { t: "short", q: "4. While our grandma was telling us an interesting story …", open: true, model: "While our grandma was telling us an interesting story, the lights went out.", hint: "Add a short action in the past simple." }
          ] },

        { type: "discuss", title: "Speaking 5. In groups, discuss how some people mistreat animals and suggest ways to protect them. Then share your ideas with the class.", page: 38, source: "book",
          prompts: [
            "You can discuss the following points:",
            "Mistreating animals: frightening and killing them - making experiments.",
            "Protecting animals: treating animals with care - building a nature reserve.",
            "Remember to: • maintain eye contact while speaking. • speak with respect. • be confident."
          ],
          image: null, emoji: "🐾" },

        { type: "speak", title: "Speaking 5. Suggest ways to protect animals", page: 38, source: "book",
          instructions: "Share your group's ideas with the class. Remember to: maintain eye contact while speaking, speak with respect, be confident.",
          dialogue: [
            { who: "A", text: "Some people frighten animals. What can we do?" },
            { who: "B", text: "" },
            { who: "A", text: "What about animals in danger?" },
            { who: "B", text: "" }
          ],
          starters: ["Some people mistreat animals by …", "We should treat animals with care.", "Why don't we build a nature reserve?", "I suggest that …", "We could …"],
          record: true },

        { type: "activity", title: "Extra Practice: Step 1 — was or were + -ing", source: "extra", stage: "guided",
          instructions: "Choose the correct form.", instructionsAr: "اختر الصيغة الصحيحة.",
          items: [
            { t: "choose", q: "They (was / were) playing football at 5 o'clock.", options: ["was", "were"], answer: 1, why: "They → were." },
            { t: "choose", q: "My sister (was / were) cooking dinner.", options: ["was", "were"], answer: 0, why: "My sister = she → was." },
            { t: "choose", q: "I was (read / reading) a story when the phone rang.", options: ["read", "reading"], answer: 1, why: "was + verb-ing: reading." },
            { t: "choose", q: "We (were walking / walked) home when it started to rain.", options: ["were walking", "walked"], answer: 0, why: "The long action (walking home) → past continuous." },
            { t: "choose", q: "The lights went out (while / when) we were watching TV.", options: ["while", "when"], answer: 0, why: "while + past continuous (were watching)." },
            { t: "choose", q: "I was sleeping (while / when) the alarm rang.", options: ["while", "when"], answer: 1, why: "when + past simple (rang)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Complete with the verb", source: "extra", stage: "guided",
          instructions: "Write the verb in the past continuous or the past simple.", instructionsAr: "اكتب الفعل بالماضي المستمر أو البسيط.",
          items: [
            { t: "fill", q: "1. While Huw ____ (play) the harp, he saw six silver cows.", answer: ["was playing"], why: "while + past continuous: was playing." },
            { t: "fill", q: "2. The phone rang while we ____ (have) dinner.", answer: ["were having"], why: "we → were + having." },
            { t: "fill", q: "3. I was doing my homework when my friend ____ (call).", answer: ["called"], why: "when + past simple: called." },
            { t: "fill", q: "4. They ____ (not / listen) when the teacher explained the lesson.", answer: ["were not listening", "weren't listening"], why: "Negative: were not / weren't + listening." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "We {was} watching a film when the lights went out.", answer: ["were"], hint: "We → ?", why: "We → were watching." },
            { t: "fix", q: "While she was {cook}, she burnt her hand.", answer: ["cooking"], hint: "was + verb-ing", why: "was + cooking." },
            { t: "fix", q: "I was reading when my brother {was coming} in.", answer: ["came"], hint: "Short action → past simple.", why: "The short action is in the past simple: came." },
            { t: "short", q: "Write a sentence with while about yesterday.", model: "While I was walking to school, I saw a cat.", open: true, hint: "While + I was …ing, …" }
          ] }
      ],
      game: { kind: "quiz", title: "Past Continuous Quiz",
        items: [
          { t: "mcq", q: "She ____ TV when I called.", options: ["was watching", "were watching", "watching"], answer: 0, why: "She → was + watching." },
          { t: "mcq", q: "While they ____ football, it started to rain.", options: ["was playing", "were playing", "played"], answer: 1, why: "They → were playing." },
          { t: "mcq", q: "I was walking home ____ I saw an accident.", options: ["while", "when"], answer: 1, why: "when + past simple (saw)." },
          { t: "mcq", q: "____ we were sleeping, the cat ate the fish.", options: ["While", "When"], answer: 0, why: "While + past continuous (were sleeping)." },
          { t: "mcq", q: "Which is the long action? “I was cooking when the phone rang.”", options: ["was cooking", "rang"], answer: 0, why: "was cooking = long action in progress." }
        ] },
      teacher: {
        notes: [
          "Write the book example on the board; draw a long line (was watching) and a short arrow (rose out).",
          "Teach: was / were + verb-ing; while + long action; when + short action.",
          "4a: guide students to find the long action first. 4b: open answers — accept any correct sentence.",
          "Speaking 5: groups of 4; give each group the two lists (mistreating / protecting). Remind them of the Remember to box.",
          "Use the Grammar Lab to show that while and when sentences mean the same thing."
        ],
        pair: ["Memory game: “What were you doing at 7 a.m. yesterday?” — partners ask and answer.", "A says a long action (I was reading), B adds a short action (when the phone rang)."],
        group: ["Group story chain: each student adds a sentence with while or when to make a story."],
        quick: [
          { q: "How do we make the past continuous?", a: "was / were + verb-ing." },
          { q: "while or when: ___ I was sleeping, the phone rang.", a: "While" },
          { q: "Choose: When I (left / was leaving) the club, it was already snowing.", a: "left" },
          { q: "They ___ (play) when it started to rain.", a: "were playing" }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u4l6", num: 6, skill: "Reading",
      title: "Pearl Diving",
      pages: [39, 40],
      status: "complete",
      canDo: ["Talk about the past", "Discuss and exchange information"],
      goals: ["Read an article about pearl diving in Kuwait.", "Learn 6 new words.", "Match headings with paragraphs.", "Talk about Kuwaiti heritage."],
      goalsAr: ["أقرأ مقالًا عن الغوص على اللؤلؤ في الكويت.", "أتعلّم 6 كلمات جديدة.", "أصِل العناوين بالفقرات.", "أتحدث عن التراث الكويتي."],
      warmup: {
        title: "1. Before you read: Think, Pair, Share",
        image: "crops/u4l6-warmup.jpg",
        emoji: "🦪",
        prompts: ["Discuss the jobs Kuwaiti people used to have in the past.", "List the hardships in these jobs."],
        seconds: 120
      },
      vocab: [
        { w: "hardship", pos: "noun", emoji: "😓", def: "something that makes life very difficult", ex: "Pearl divers used to face many hardships in the sea.", exFromBook: true, ar: "مشقّة / معاناة" },
        { w: "generation", pos: "noun", emoji: "👨‍👦", def: "all the people of about the same age in a family or society", ex: "Every generation passed on the tradition of pearl diving by teaching their children.", exFromBook: true, ar: "جيل" },
        { w: "securely", pos: "adverb", emoji: "🔒", def: "tightly and safely, so it will not move or fall", ex: "They were tied securely to the ship with a rope around their waists.", exFromBook: true, ar: "بإحكام / بأمان" },
        { w: "throughout", pos: "preposition", emoji: "⏳", def: "during the whole time of something", ex: "They held the rope throughout the dive.", exFromBook: true, ar: "طوال" },
        { w: "tug on", pos: "phrasal verb", emoji: "🪢", def: "to pull something quickly and strongly", ex: "When a diver was ready, he tugged on the rope and was pulled up to the surface.", exFromBook: true, ar: "يشدّ / يسحب بقوة" },
        { w: "heritage", pos: "noun", emoji: "🏺", def: "the traditions and history of a country that people keep", ex: "Pearl diving is still an important part of the Kuwaiti heritage.", exFromBook: true, ar: "تراث" }
      ],
      sections: [
        { type: "reading", title: "Pearl Diving", page: 39,
          instructions: "Read the article. Consult the dictionary for the meanings of the underlined words “hardships” and “securely”.",
          paras: [
            "1 Before the discovery of oil in Kuwait, pearl diving was the main source of income for many Kuwaiti people. Pearling was important for Kuwait's economy. Pearl divers used to face many [[hardships]] in the sea. Pearling was a daily activity for sailors and divers. They often worked for 12 or 16 hours a day.",
            "2 Pearl diving was not only an industry, but a social system that held communities together. Every generation passed on the tradition of pearl diving by teaching their children and telling them stories about pearling. The methods used in pearling did not change for many years.",
            "3 Pearls hunters used many kinds of ships. The ‘Boom’ was one of the most famous ones. Divers wore wraparound skirts or black suits, a nose clip, a neck basket and a toe anchor. They were tied [[securely]] to the ship with a rope around their waists. They held the rope throughout the dive. When a diver was ready, he tugged on the rope and was pulled up to the surface.",
            "4 The tradition of pearl diving died during the 1930's because of the introduction of cultured pearls which were cheaply farmed in Japan, but pearl diving is still an important part of the Kuwaiti heritage. Nowadays festivals are held and sea trips are organised to keep this tradition alive. These trips are supported by His Highness the Amir of Kuwait."
          ],
          speaker: null },

        { type: "activity", title: "Consult the dictionary for the meanings of the underlined words “hardships” and “securely”.", page: 39, source: "book",
          instructions: "Choose the best meaning.", instructionsAr: "اختر المعنى الأنسب.",
          items: [
            { t: "mcq", q: "hardships (paragraph 1)", options: ["things that make life very difficult", "big ships", "easy jobs"], answer: 0, why: "Divers worked 12 or 16 hours a day in the sea: life was very difficult." },
            { t: "mcq", q: "securely (paragraph 3)", options: ["quickly", "tightly and safely", "sadly"], answer: 1, why: "They were tied tightly to the ship so they would be safe." }
          ] },

        { type: "activity", title: "2. Read the article and match the headings with the right paragraphs:", page: 40, source: "book",
          instructions: "Tap a heading, then tap its paragraph.", instructionsAr: "صِل كل عنوان بالفقرة المناسبة.",
          items: [
            { t: "match", q: "Match the headings with the right paragraphs.",
              pairs: [
                ["a. Keeping Pearling Alive", "Paragraph 4"],
                ["b. Pearling Before Oil", "Paragraph 1"],
                ["c. Pearling Communities", "Paragraph 2"],
                ["d. Pearling Equipment and Practice", "Paragraph 3"]
              ],
              hint: "Read the first sentence of each paragraph.",
              why: "1: before the discovery of oil. 2: a social system that held communities together. 3: ships, clothes, nose clip, rope. 4: festivals and trips keep the tradition alive." }
          ] },

        { type: "activity", title: "3. Read the article again and answer the following questions:", page: 40, source: "book",
          instructions: "Answer the questions.", instructionsAr: "أجب عن الأسئلة.",
          items: [
            { t: "short", q: "1. What equipment did divers need for pearl diving?",
              model: "Wraparound skirts or black suits, a nose clip, a neck basket, a toe anchor and a rope (to tie them to the ship).",
              keywords: [["nose clip"], ["basket", "anchor", "rope"]],
              hint: "Read paragraph 3." },
            { t: "short", q: "2. Do you think it is important to keep the tradition of pearl diving alive? Why?", open: true,
              model: "Yes, because pearl diving is an important part of the Kuwaiti heritage. It teaches young people about the hard life of their grandparents.",
              hint: "Yes / No, because …" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Pearl diving was the main source of income before oil.", options: ["True", "False"], answer: 0, why: "Paragraph 1: “…pearl diving was the main source of income for many Kuwaiti people.”" },
            { t: "mcq", q: "Divers worked for 2 or 3 hours a day.", options: ["True", "False"], answer: 1, why: "“They often worked for 12 or 16 hours a day.”" },
            { t: "mcq", q: "The methods used in pearling changed every year.", options: ["True", "False"], answer: 1, why: "“The methods used in pearling did not change for many years.”" },
            { t: "mcq", q: "Cultured pearls were cheaply farmed in Japan.", options: ["True", "False"], answer: 0, why: "Paragraph 4." },
            { t: "mcq", q: "Today, festivals and sea trips keep the tradition alive.", options: ["True", "False"], answer: 0, why: "“Nowadays festivals are held and sea trips are organised to keep this tradition alive.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the article.", instructionsAr: "أكمل بكلمة من المقال.",
          items: [
            { t: "fill", q: "1. Old houses and traditional boats are part of our ____.", answer: ["heritage"], bank: ["heritage", "generation", "throughout", "securely"], why: "heritage = traditions and history we keep." },
            { t: "fill", q: "2. My grandfather's ____ did not have mobile phones.", answer: ["generation"], bank: ["heritage", "generation", "throughout", "securely"], why: "generation = people of the same age." },
            { t: "fill", q: "3. It rained ____ the whole night.", answer: ["throughout"], bank: ["heritage", "generation", "throughout", "securely"], why: "throughout = during all the time." },
            { t: "fill", q: "4. Close the door ____ before you leave.", answer: ["securely"], bank: ["heritage", "generation", "throughout", "securely"], why: "securely = tightly and safely." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the boom. Students list old Kuwaiti jobs (pearl diver, sailor, ship builder, fisherman, water carrier) and their hardships.",
          "Students use a dictionary (or the Words cards) for “hardships” and “securely”.",
          "Read paragraph by paragraph; after each, students suggest a heading before doing exercise 2.",
          "Exercise 3.2 is personal: collect reasons on the board for the debate in the next lesson.",
          "Point out the passive in the text (were tied, was pulled up, are held, are organised, are supported) — link to Lesson 2."
        ],
        pair: ["A names one piece of diving equipment; B says what it was for.", "Pairs write two hardships of pearl divers."],
        group: ["Groups make a poster: Pearl Diving — then and now."],
        quick: [
          { q: "What was the main source of income before oil?", a: "Pearl diving." },
          { q: "What was the ‘Boom’?", a: "One of the most famous kinds of ships pearl hunters used." },
          { q: "Why did the tradition of pearl diving die?", a: "Because of cultured pearls which were cheaply farmed in Japan." },
          { q: "What does “heritage” mean?", a: "The traditions and history of a country." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING (Speaking and Writing) ─────────────────────────
    {
      id: "u4l7", num: 7, skill: "Writing",
      title: "Speaking and Writing: Life in the Past and Nowadays",
      pages: [40, 40],
      status: "complete",
      canDo: ["Express agreement/ disagreement", "Make comparisons", "Give opinions"],
      goals: ["Agree or disagree in a debate.", "Compare life in the past and now.", "Write a two-paragraph report."],
      goalsAr: ["أعبّر عن الموافقة أو عدم الموافقة في مناظرة.", "أقارن الحياة في الماضي والحاضر.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "“Older people often say that life was better in the past than it is now”",
        image: null,
        emoji: "⚖️",
        prompts: ["Do your grandparents say this?", "Do you agree or disagree? Why?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "4. a. In groups, decide whether you agree or disagree with the statement.", page: 40, source: "book",
          prompts: [
            "“Older people often say that life was better in the past than it is now”",
            "Think of reasons to support your opinion, then hold a debate with the class and explain your points of view.",
            "You can discuss the following aspects: Lifestyle – food – clothing – entertainment – jobs – transportation - types of houses – education – tools and devices ..etc",
            "Remember to: • listen carefully to other people's ideas. • paraphrase what your partner said and ask for clarification if you don't understand."
          ],
          image: null, emoji: "🗣️" },

        { type: "speak", title: "4. a. Hold a debate", page: 40, source: "book",
          instructions: "Hold a debate with the class and explain your points of view. Remember to listen carefully to other people's ideas, paraphrase what your partner said and ask for clarification if you don't understand.",
          dialogue: [
            { who: "A", text: "I think life was better in the past because people were closer to each other." },
            { who: "B", text: "" },
            { who: "A", text: "So you mean that … . Can you explain more?" },
            { who: "B", text: "" }
          ],
          starters: ["I agree because …", "I disagree because …", "In the past, people … , but nowadays …", "So you mean that …", "Sorry, could you explain what you mean by …?"],
          record: true },

        { type: "write", title: "4. b. In your notebook, plan and write a report of two paragraphs comparing life in Kuwait in the past and nowadays.", page: 40, source: "book",
          instructions: "Copy the following diagram in your notebook and fill it with similarities and differences. (Venn diagram: past – Present.) Then write two paragraphs.",
          wordBank: ["in the past", "nowadays", "used to", "but", "however", "both", "better than", "easier than", "more … than"],
          frame: [
            { label: "Diagram — past only", hint: "pearl diving, mud houses, walking or camels, small schools …" },
            { label: "Diagram — both", hint: "family visits, the sea, Kuwaiti food …" },
            { label: "Diagram — Present only", hint: "cars, phones, big malls, air conditioning …" },
            { label: "Paragraph 1: life in the past", hint: "In the past, people in Kuwait used to …" },
            { label: "Paragraph 2: life nowadays + your opinion", hint: "Nowadays, … . In my opinion, …" }
          ],
          model: "In the past, life in Kuwait was simple but hard. Many people worked as pearl divers or sailors and spent months at sea. Families lived in mud houses, and people travelled on foot or by camel. There was no electricity, so summers were very difficult.\n\nNowadays, life in Kuwait is much easier. People live in modern houses with air conditioning, and they travel by car. Children go to big schools and use computers. However, some things are the same: families still visit each other, and we still love the sea. In my opinion, life is more comfortable now, but people in the past were closer to each other.",
          modelFromBook: false,
          checklist: ["I wrote two paragraphs: the past and nowadays.", "I used comparisons (better than, easier than, more … than).", "I gave my opinion.", "I checked spelling and punctuation."],
          minWords: 80 },

        { type: "discuss", title: "💡 Tip", page: 40, source: "book",
          prompts: ["Listen to some instructions and rules about modern diving using any audio resources you prefer, then tell the instructions to your class."],
          image: null, emoji: "💡" },

        { type: "activity", title: "Extra Practice: Past or nowadays?", source: "extra", stage: "guided",
          instructions: "Choose the best word to complete each sentence.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "(In the past / Nowadays), people used camels to travel in the desert.", options: ["In the past", "Nowadays"], answer: 0, why: "“used to / used camels” describes the past." },
            { t: "choose", q: "(In the past / Nowadays), most families have air conditioning.", options: ["In the past", "Nowadays"], answer: 1, why: "“have” (present simple) → nowadays." },
            { t: "choose", q: "Life is (easier / more easy) now than in the past.", options: ["easier", "more easy"], answer: 0, why: "easy → easier (y → ier)." },
            { t: "choose", q: "Houses today are (more modern / modern than) than old houses.", options: ["more modern", "modern than"], answer: 0, why: "Long adjective → more + adjective + than." }
          ] }
      ],
      game: { kind: "sort", title: "Then or Now?", buckets: ["In the past", "Nowadays"],
        cards: [["pearl diving", 0], ["smartphones", 1], ["mud houses", 0], ["air conditioning", 1], ["travelling by camel", 0], ["online shopping", 1], ["water carriers", 0], ["electric cars", 1]] },
      teacher: {
        notes: [
          "Split the class into two sides: agree / disagree. Each group lists 3 reasons using the aspects in blue.",
          "Debate rules: listen, paraphrase (So you mean that …), ask for clarification.",
          "Draw the Venn diagram on the board and fill it with ideas from the debate.",
          "Students write two paragraphs in their notebooks: the past, then nowadays + opinion.",
          "Tip: students find modern diving rules (e.g. never dive alone, check your equipment) and share them."
        ],
        pair: ["Pairs fill the Venn diagram together, then compare with another pair.", "A gives a reason; B paraphrases it: So you mean that …"],
        group: ["Formal debate: 4 speakers per side, 1 minute each; the class votes."],
        quick: [
          { q: "Give one difference between life in the past and nowadays.", a: "In the past people travelled by camel; nowadays they travel by car. (any)" },
          { q: "How can you check you understood your partner?", a: "Paraphrase: “So you mean that …?” / ask for clarification." },
          { q: "What goes in the middle of a Venn diagram?", a: "The similarities (things that are the same)." }
        ]
      }
    }
  ]
});

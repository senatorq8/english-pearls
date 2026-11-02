// Unit 2 — Life Events (Module 1: Life Experiences, printed pages 21–26)
BOOK.addUnit({
  id: "u2", num: 2, title: "Life Events", titleAr: "أحداث الحياة",
  module: 1, moduleTitle: "Life Experiences",
  pages: [21, 26],
  cover: 13,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Ask and talk about experiences",
      "Describe pictures",
      "Express purpose",
      "Make guesses"
    ],
    "language structures": [
      "Use present perfect + ever",
      "Use (to/so that/in order to)",
      "Form questions using the present perfect"
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
      id: "u2l1", num: 1, skill: "Reading",
      title: "How to Create Your Own Blog?",
      pages: [21, 21],
      status: "complete",
      canDo: ["Ask and talk about experiences."],
      goals: ["Read a webpage about blogs.", "Learn the steps to make a blog.", "Find words with the same and opposite meanings.", "Stay safe online."],
      goalsAr: ["أقرأ صفحة إنترنت عن المدوّنات.", "أتعلّم خطوات إنشاء مدوّنة.", "أجد كلمات مرادفة وكلمات معاكسة.", "أحافظ على أماني على الإنترنت."],
      warmup: {
        title: "Before you read — Think, pair, share",
        image: "crops/u2l1-warmup.jpg",
        emoji: "💻",
        prompts: ["Have you visited any blogs?", "What have you read about?"],
        seconds: 90
      },
      vocab: [
        { w: "blog", pos: "noun", emoji: "💻", def: "a website where a person writes about their life, ideas or interests", ex: "Would you like to have your own blog?", exFromBook: true, ar: "مدوّنة" },
        { w: "led", pos: "verb (past of lead)", emoji: "➡️", def: "lead to = cause something to happen; led is the past form", ex: "These uses have led to new words like blogger and blogging.", exFromBook: true, ar: "أدّى إلى (lead / led)" },
        { w: "theme", pos: "noun", emoji: "🎨", def: "the design and colours of a website", ex: "Many themes are available for free.", exFromBook: true, ar: "قالب / تصميم" },
        { w: "provide", pos: "verb", emoji: "📧", def: "to give something that is needed", ex: "You need to provide your email address.", exFromBook: true, ar: "يقدّم / يزوّد" },
        { w: "password", pos: "noun", emoji: "🔑", def: "a secret word you use to open your account", ex: "Choose a username and password.", exFromBook: true, ar: "كلمة المرور" },
        { w: "secure", pos: "adjective", emoji: "🔒", def: "safe; other people cannot get it", ex: "Keep your password secure: never share it.", exFromBook: false, ar: "آمن / محميّ" }
      ],
      sections: [
        { type: "reading", title: "How to Create Your Own Blog?", page: 21,
          instructions: "2. Read the following webpage and answer the questions that follow:",
          paras: [
            "Would you like to have your own blog? Would you like to connect to the world? Would you like your voice to be heard, your images to be seen and your thoughts and experiences to be read by your friends? How about creating your own blog? It is easy and free to create your own blog. WordPress uses easy steps for building blogs.",
            "First, let’s have a quick look at the history of blogging. The term “weblog” was first used on December 17, 1997. Soon after, it was being used as both a noun and verb. These uses have led to new words like blogger and blogging.",
            "Steps for Creating Your Own Blog",
            "Step 1: Log into: www.wordpress.com",
            "Step 2: Choose a theme: Many themes are available for free. Choose the theme you like most. It’s easy to change themes later on.",
            "Step 3: Choose a name for your blog: Think about the name of your blog. You can use your name. For example, myname.wordpress.com or choose any other name that you like.",
            "Step 4: Choose your plan: Choose a free plan for your blog. This will help you get in touch with the world. There are free plans and paid plans.",
            "Step 5: Create your account: Choose a username and password. It is important to keep your username and password to be able to log into your account. You need to provide your email address. Now you are ready to start connecting to the world.",
            "Blogging is a great way to communicate. You can post information about Kuwait to share our culture with the world, but it is very important not to post personal information or photos. It is also important to consider our Islamic values and traditions when posting on your blog."
          ],
          speaker: "Webpage" },

        { type: "activity", title: "Answer the questions (1, 2, 5, 6).", page: 21, source: "book",
          instructions: "Answer the questions. Use the webpage.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What are the benefits of blogs?",
              model: "You can connect to the world: your voice is heard, your images are seen and your thoughts and experiences are read by your friends. Blogging is a great way to communicate, and you can share our culture with the world.",
              keywords: [["connect", "communicate", "share", "world"]], hint: "Read the first and the last paragraphs." },
            { t: "short", q: "2. Why is it important to keep your password and username secure?",
              model: "To be able to log into your account (and so that nobody else can use it).",
              keywords: [["log", "account"]], hint: "Read Step 5." },
            { t: "short", q: "5. What is the main idea of the last paragraph?",
              model: "Blogging is a great way to communicate, but we must be careful: we should not post personal information or photos, and we should consider our Islamic values and traditions.",
              keywords: [["communicat", "careful", "personal", "values"]], hint: "The first sentence + the word “but”." },
            { t: "short", q: "6. What kinds of blogs do you like? Why?",
              model: "I like sports blogs because I can read about my favourite teams.", open: true, hint: "I like … blogs because …" }
          ] },

        { type: "activity", title: "3. Find words in the passage that have the same meanings as (photos, connect).", page: 21, source: "book",
          instructions: "Find the words in the webpage.", instructionsAr: "ابحث في النص عن كلمات لها المعنى نفسه.",
          items: [
            { t: "fill", q: "photos = ____", answer: ["images"], hint: "Paragraph 1: “your … to be seen”.", why: "“your images to be seen” – images = photos." },
            { t: "fill", q: "connect = ____", answer: ["get in touch", "get in touch with", "communicate"], hint: "Step 4: “This will help you … with the world.”", why: "“get in touch with the world” = connect to the world. (communicate in the last paragraph is also close.)" }
          ] },

        { type: "activity", title: "4. Find the opposites of costly and log out in the passage.", page: 21, source: "book",
          instructions: "Find the opposite words in the webpage.", instructionsAr: "ابحث عن الكلمات المعاكسة في النص.",
          items: [
            { t: "fill", q: "costly ≠ ____", answer: ["free"], hint: "“It is easy and … to create your own blog.”", why: "costly = expensive; the opposite is free." },
            { t: "fill", q: "log out ≠ ____", answer: ["log into", "log in", "log in to"], hint: "Step 1.", why: "“Step 1: Log into: www.wordpress.com” – log into is the opposite of log out." }
          ] },

        { type: "activity", title: "Extra Practice: Put the steps in order", source: "extra", stage: "guided",
          instructions: "Match each step number with the action.", instructionsAr: "صِل رقم الخطوة بالعمل المناسب.",
          items: [
            { t: "match", q: "Steps for Creating Your Own Blog",
              pairs: [["Step 1", "Log into the website."], ["Step 2", "Choose a theme."], ["Step 3", "Choose a name for your blog."], ["Step 4", "Choose your plan."], ["Step 5", "Create your account."]],
              hint: "Read the steps in the webpage.", why: "Log in → theme → name → plan → account." }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "independent",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "The term “weblog” was first used in 1997.", options: ["True", "False"], answer: 0, why: "“…was first used on December 17, 1997.”" },
            { t: "mcq", q: "You must pay to create a blog on WordPress.", options: ["True", "False"], answer: 1, why: "“It is easy and free to create your own blog.” There are free plans and paid plans." },
            { t: "mcq", q: "It is difficult to change themes later.", options: ["True", "False"], answer: 1, why: "“It’s easy to change themes later on.”" },
            { t: "mcq", q: "You need to provide your email address.", options: ["True", "False"], answer: 0, why: "Step 5." },
            { t: "mcq", q: "It is a good idea to post your personal photos.", options: ["True", "False"], answer: 1, why: "“…it is very important not to post personal information or photos.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the laptop picture. Ask: Have you visited any blogs? What have you read about?",
          "Pre-teach the words (blog, theme, led, provide, password, secure).",
          "Read the webpage. Stop after the steps and ask students to repeat the 5 steps in order.",
          "Do questions 1–6 (3 and 4 are word tasks: images, get in touch, free, log into).",
          "Online safety: stress the last paragraph – no personal information or photos; respect our values."
        ],
        pair: ["A says a step number; B says the action. Then swap.", "Pairs plan a class blog: name, theme and three post ideas about Kuwait."],
        group: ["Groups make a poster: “Five rules for safe blogging”."],
        quick: [
          { q: "When was “weblog” first used?", a: "On December 17, 1997." },
          { q: "Which word in the text means “photos”?", a: "images" },
          { q: "What is the opposite of “costly”?", a: "free" },
          { q: "What should you NOT post on your blog?", a: "Personal information or photos." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u2l2", num: 2, skill: "Grammar",
      title: "Present Perfect (ever)",
      pages: [22, 22],
      status: "complete",
      canDo: ["Use present perfect + ever.", "Form questions using the present perfect.", "Ask and talk about experiences."],
      goals: ["Listen to Ali and Sara’s experiences.", "Use has / have + past participle.", "Ask “Have you ever …?”", "Write about my partner’s experiences."],
      goalsAr: ["أستمع إلى تجارب علي وسارة.", "أستخدم has / have + التصريف الثالث للفعل.", "أسأل: Have you ever …؟", "أكتب عن تجارب زميلي."],
      warmup: {
        title: "Grammar in context",
        image: "crops/u2l2-warmup.jpg",
        emoji: "🎭",
        prompts: ["Have you ever acted in a play?", "Have you ever visited a museum?"],
        seconds: 60
      },
      vocab: [
        { w: "cavern", pos: "noun", emoji: "🕳️", def: "a large cave", ex: "Have you ever visited any caverns?", exFromBook: true, ar: "كهف كبير" },
        { w: "voluntary", pos: "adjective", emoji: "🤲", def: "done because you want to help, without pay", ex: "Have you ever participated in voluntary work?", exFromBook: true, ar: "تطوّعي" },
        { w: "native", pos: "adjective", emoji: "🗣️", def: "a native speaker speaks a language as their first language", ex: "Have you ever spoken to a native speaker of English?", exFromBook: true, ar: "أصلي / لغته الأم" },
        { w: "hot air balloon", pos: "noun", emoji: "🎈", def: "a very big balloon with a basket that carries people in the air", ex: "Have you ever flown in a hot air balloon?", exFromBook: true, ar: "منطاد الهواء الساخن" },
        { w: "skydiving", pos: "noun", emoji: "🪂", def: "jumping from a plane and opening a parachute", ex: "Have you ever gone skydiving?", exFromBook: true, ar: "القفز بالمظلّة" }
      ],
      sections: [
        { type: "listen", title: "3. Listen and find out about Ali’s and Sara’s experiences.", page: 22, source: "book",
          track: "2.1",
          needsAudio: true,
          instructions: "Track 2.1. Listen. Write Yes or No for Ali and Sarah. The first one is done.",
          items: [
            { t: "table", q: "Ali’s and Sarah’s experiences", open: true,
              head: ["Questions", "Ali", "Sarah"],
              rows: [
                ["1. Eaten Italian food?", "No", "Yes"],
                ["2. Visited a museum?", { open: true }, { open: true }],
                ["3. Been to another country?", { open: true }, { open: true }],
                ["4. Acted in a play?", { open: true }, { open: true }],
                ["5. Made your own website?", { open: true }, { open: true }],
                ["6. Lost something important?", { open: true }, { open: true }]
              ] }
          ] },

        { type: "grammar", title: "Grammar in context: present perfect (ever)", page: 22,
          steps: [
            { title: "Step 1 — From the book",
              text: "Talk about Ali’s and Sara’s experiences. Follow the example below: Ali has acted in a play. Sara hasn’t acted in a play. Ali and Sara have visited a museum. Questions (exercise 5): Have you ever visited any caverns?",
              textAr: "مثال الكتاب: Ali has acted in a play. Sara hasn’t acted in a play. Ali and Sara have visited a museum.",
              examples: ["{s:Ali} {a:has} {v:acted} in a play.", "{s:Sara} {n:hasn’t} {v:acted} in a play.", "{s:Ali and Sara} {a:have} {v:visited} a museum.", "{a:Have} {s:you} {t:ever} {v:visited} any caverns?"] },
            { title: "Step 2 — Form: has / have + past participle", source: "extra",
              text: "We use the present perfect for experiences in our life until now (we don’t say when). he / she / it / one name → has. I / you / we / they / two names → have.",
              textAr: "نستخدم المضارع التام للتجارب في حياتنا حتى الآن دون ذكر الوقت. he / she / it → has، و I / you / we / they → have، ثم التصريف الثالث.",
              examples: ["{s:She} {a:has} {v:eaten} Italian food.", "{s:We} {a:have} {v:been} to another country."] },
            { title: "Step 3 — Past participles", source: "extra",
              text: "Regular verbs add -ed: visit → visited, act → acted, watch → watched. Many verbs are irregular: eat → eaten, be → been, make → made, lose → lost, speak → spoken, fly → flown, go → gone.",
              textAr: "الأفعال المنتظمة نضيف لها ed، وهناك أفعال شاذة مثل eaten, been, made, lost, spoken, flown, gone.",
              examples: ["{s:Ali} {a:has} {v:made} his own website.", "{s:I} {a:have} {v:flown} in a plane."] },
            { title: "Step 4 — Questions with ever", source: "extra",
              text: "Have / Has + subject + ever + past participle …? ever = at any time in your life. Short answers: Yes, I have. / No, I haven’t. Yes, she has. / No, she hasn’t.",
              textAr: "السؤال: Have / Has + الفاعل + ever + التصريف الثالث؟ و ever تعني «في أي وقت من حياتك».",
              examples: ["{a:Have} {s:you} {t:ever} {v:gone} skydiving? — Yes, I {a:have}. / No, I {n:haven’t}.", "{a:Has} {s:Sara} {t:ever} {v:lost} something important?"] },
            { title: "Step 5 — Negatives: never / hasn’t / haven’t", source: "extra",
              text: "hasn’t / haven’t + past participle, or have / has + never + past participle.",
              textAr: "النفي: hasn’t / haven’t أو never مع has / have.",
              examples: ["{s:Sara} {n:hasn’t} {v:acted} in a play.", "{s:I} {a:have} {n:never} {v:flown} in a hot air balloon."] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Use the past participle, not the past simple, after has / have. Use has with one person.",
              textAr: "بعد has / have نستخدم التصريف الثالث وليس الماضي البسيط.",
              examples: ["✗ Have you ever {n:went} skydiving? → ✓ {v:gone}", "✗ Ali {n:have} visited a museum. → ✓ Ali {a:has} visited"] }
          ],
          table: {
            head: ["Base verb", "Past simple", "Past participle"],
            rows: [
              ["eat", "ate", "eaten"], ["be", "was / were", "been"], ["make", "made", "made"], ["lose", "lost", "lost"],
              ["speak", "spoke", "spoken"], ["fly", "flew", "flown"], ["go", "went", "gone"], ["visit / act / watch", "visited / acted / watched", "visited / acted / watched"]
            ]
          },
          worked: {
            q: "Make a question: you / ever / fly / in a hot air balloon?",
            steps: [
              "Question → start with Have or Has.",
              "you → Have.",
              "Then the subject and ever: Have you ever …",
              "fly → past participle flown."
            ],
            a: "{a:Have} {s:you} {t:ever} {v:flown} in a hot air balloon?"
          },
          notes: ["The table of verbs is Extra Practice (not printed in the book).", "To say WHEN, use the past simple: I have visited the museum. I visited it last year."] },

        { type: "speak", title: "4. Talk about Ali’s and Sara’s experiences. Follow the example below.", page: 22, source: "book",
          instructions: "Use your table from exercise 3. Make sentences with has / hasn’t / have.",
          dialogue: [
            { who: "Book", text: "Ali has acted in a play. Sara hasn’t acted in a play." },
            { who: "Book", text: "Ali and Sara have visited a museum." },
            { who: "You", text: "" },
            { who: "You", text: "" }
          ],
          starters: ["Sara has eaten Italian food. Ali hasn’t eaten Italian food.", "Ali and Sara have …", "Ali has … but Sara hasn’t …", "Neither Ali nor Sara has …"],
          record: true },

        { type: "speak", title: "5. Ask and answer these questions with your partner", page: 22, source: "book",
          instructions: "A: Have you ever … – visited any caverns? – participated in voluntary work? – spoken to a native speaker of English? – flown in a hot air balloon? – watched a match in the stadium? – gone skydiving?",
          dialogue: [
            { who: "A", text: "Have you ever visited any caverns?" },
            { who: "B", text: "" },
            { who: "A", text: "Have you ever participated in voluntary work?" },
            { who: "B", text: "" },
            { who: "A", text: "Have you ever spoken to a native speaker of English?" },
            { who: "B", text: "" }
          ],
          starters: ["Yes, I have.", "No, I haven’t.", "No, I have never …", "Have you ever flown in a hot air balloon?", "Have you ever watched a match in the stadium?", "Have you ever gone skydiving?"],
          record: true },

        { type: "write", title: "5. … then write 4 sentences about you and your partner’s experiences.", page: 22, source: "book",
          instructions: "Write 4 sentences about you and your partner. Use have / has / haven’t / hasn’t / never.",
          wordBank: ["have", "has", "haven’t", "hasn’t", "never", "both", "visited", "spoken", "flown", "watched", "gone", "participated"],
          frame: [
            { label: "1.", hint: "I have … but my partner hasn’t …" },
            { label: "2.", hint: "My partner has …" },
            { label: "3.", hint: "We have both …" },
            { label: "4.", hint: "I have never …" }
          ],
          model: "I have watched a match in the stadium, but my partner hasn’t.\nMy partner has participated in voluntary work.\nWe have both spoken to a native speaker of English.\nI have never flown in a hot air balloon.",
          modelFromBook: false,
          checklist: ["I used have / has + past participle.", "I used has with he / she / my partner.", "I started with a capital letter and ended with a full stop."],
          minWords: 20 },

        { type: "listen", title: "Extra Practice: Have you ever…? (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. Listen to Fatma and Bader. Then answer.",
          script: [
            { who: "Fatma", text: "Bader, have you ever been to another country?" },
            { who: "Bader", text: "Yes, I have. I have been to Oman and Jordan. Have you?" },
            { who: "Fatma", text: "No, I haven’t. But I have visited the Scientific Center in Kuwait many times." },
            { who: "Bader", text: "Me too! Have you ever made your own website?" },
            { who: "Fatma", text: "Yes, I have! I made a website about my cats last year." },
            { who: "Bader", text: "Cool. I have never made a website. But I have acted in a school play." },
            { who: "Fatma", text: "Really? I have never acted in a play. I’m too shy!" }
          ],
          items: [
            { t: "mcq", q: "Has Bader been to another country?", options: ["Yes, he has.", "No, he hasn’t."], answer: 0, why: "“Yes, I have. I have been to Oman and Jordan.”" },
            { t: "mcq", q: "Has Fatma been to another country?", options: ["Yes, she has.", "No, she hasn’t."], answer: 1, why: "“No, I haven’t.”" },
            { t: "mcq", q: "Who has made a website?", options: ["Bader", "Fatma", "both", "nobody"], answer: 1, why: "Fatma: “I made a website about my cats last year.” Bader: “I have never made a website.”" },
            { t: "mcq", q: "Who has acted in a play?", options: ["Bader", "Fatma", "both", "nobody"], answer: 0, why: "Bader: “I have acted in a school play.”" },
            { t: "fill", q: "Fatma ____ never acted in a play.", answer: ["has"], bank: ["has", "have", "is"], why: "Fatma = she → has never acted." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — has or have? Which participle?", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "choose", q: "Ali (has / have) acted in a play.", options: ["has", "have"], answer: 0, why: "Ali = he → has." },
            { t: "choose", q: "Ali and Sara (has / have) visited a museum.", options: ["has", "have"], answer: 1, why: "Two people = they → have." },
            { t: "choose", q: "Have you ever (ate / eaten) Italian food?", options: ["ate", "eaten"], answer: 1, why: "have + past participle: eaten." },
            { t: "choose", q: "She has never (flew / flown) in a hot air balloon.", options: ["flew", "flown"], answer: 1, why: "has + past participle: flown." },
            { t: "choose", q: "(Have / Has) your brother ever gone skydiving?", options: ["Have", "Has"], answer: 1, why: "your brother = he → Has." },
            { t: "choose", q: "Have you ever been to London? — No, I (haven’t / didn’t).", options: ["haven’t", "didn’t"], answer: 0, why: "Short answer to a Have … question: No, I haven’t." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Build the question", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a question.", instructionsAr: "رتّب الكلمات لتكوّن سؤالًا.",
          items: [
            { t: "order", q: "🕳️ Make a question.", words: ["Have", "you", "ever", "visited", "a", "cavern?"], answer: ["Have you ever visited a cavern?"], hint: "Have + you + ever + participle.", why: "Have + subject + ever + past participle." },
            { t: "order", q: "🏟️ Make a question.", words: ["Has", "your", "father", "ever", "watched", "a", "match", "in", "the", "stadium?"], answer: ["Has your father ever watched a match in the stadium?"], hint: "Has + subject + ever …", why: "your father = he → Has." },
            { t: "order", q: "🗣️ Make a sentence.", words: ["I", "have", "never", "spoken", "to", "a", "native", "speaker."], answer: ["I have never spoken to a native speaker."], hint: "have + never + participle.", why: "have + never + spoken." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — On your own", source: "extra", stage: "independent",
          instructions: "Fix the mistake. Then answer about yourself.", instructionsAr: "صحّح الخطأ ثم أجب عن نفسك.",
          items: [
            { t: "fix", q: "Have you ever {went} to Egypt?", answer: ["been", "gone"], hint: "Past participle of go.", why: "have + past participle. “been to” = went and came back (the most common for experiences); “gone” is also a past participle." },
            { t: "fix", q: "Sara {have} lost her phone.", answer: ["has"], hint: "Sara = she.", why: "she → has." },
            { t: "fix", q: "We have {make} a website.", answer: ["made"], hint: "Past participle of make.", why: "make → made." },
            { t: "short", q: "Have you ever participated in voluntary work? Answer with a short answer and one more sentence.", model: "Yes, I have. I helped to clean the beach with my school.", open: true, hint: "Yes, I have. / No, I haven’t." }
          ] }
      ],
      game: { kind: "quiz", title: "Experience Quiz",
        items: [
          { t: "choose", q: "Have you ever (seen / saw) a camel?", options: ["seen", "saw"], answer: 0, why: "have + past participle: seen." },
          { t: "choose", q: "My sister (has / have) been to Japan.", options: ["has", "have"], answer: 0, why: "my sister = she → has." },
          { t: "choose", q: "They (have / has) never flown in a plane.", options: ["have", "has"], answer: 0, why: "they → have." },
          { t: "mcq", q: "Past participle of “speak”:", options: ["spoke", "spoken", "speaked"], answer: 1, why: "speak – spoke – spoken." },
          { t: "mcq", q: "Past participle of “lose”:", options: ["lost", "losed", "lose"], answer: 0, why: "lose – lost – lost." },
          { t: "mcq", q: "Have you ever gone skydiving? — No, I ____.", options: ["haven’t", "don’t", "didn’t"], answer: 0, why: "Short answer: No, I haven’t." }
        ] },
      teacher: {
        notes: [
          "Warm-up: show the theatre masks. Ask: Have you ever acted in a play? Have you ever visited a museum?",
          "Play track 2.1 (exercise 3). Students write Yes / No for Ali and Sarah. Row 1 is done. No answer key: check with the recording.",
          "Note: the book’s examples in exercise 4 say that Ali has acted in a play, Sara hasn’t, and both have visited a museum.",
          "Teach has / have + past participle, then Have you ever …? and short answers.",
          "Exercise 5: pairs ask the six questions, then write four sentences."
        ],
        pair: ["Find someone who… : students walk and ask “Have you ever …?” and write a name for each “Yes, I have.”"],
        group: ["Groups make a class chart: How many students have visited a cavern / flown in a plane / watched a match in the stadium?"],
        quick: [
          { q: "Make a question: you / ever / visit / a museum", a: "Have you ever visited a museum?" },
          { q: "has or have: Sara ___ eaten Italian food.", a: "has" },
          { q: "Past participle of “fly”?", a: "flown" },
          { q: "Short answer: Have you ever gone skydiving? (no)", a: "No, I haven’t." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — SPEAKING ─────────────────────────
    {
      id: "u2l3", num: 3, skill: "Speaking",
      title: "Personal Experiences",
      pages: [23, 24],
      status: "complete",
      canDo: ["Ask and talk about experiences.", "Describe pictures.", "Make guesses."],
      goals: ["Guess what happened in pictures.", "Ask and answer about experiences.", "Tell the class about my partner.", "Write about something that has happened to me."],
      goalsAr: ["أخمّن ما حدث في الصور.", "أسأل وأجيب عن التجارب.", "أخبر الصف عن زميلي.", "أكتب عن شيء حدث لي."],
      warmup: {
        title: "Personal Experiences",
        image: "crops/u2l3-pictures.jpg",
        emoji: "🖼️",
        prompts: ["Look at the pictures.", "How does each person feel? Why?"],
        seconds: 60
      },
      vocab: [
        { w: "experience", pos: "noun", emoji: "🌟", def: "something that happens to you and that you remember", ex: "Tell your partner about an interesting experience.", exFromBook: false, ar: "تجربة" },
        { w: "recently", pos: "adverb", emoji: "🕐", def: "a short time ago", ex: "Talk about something funny, strange, or interesting that has happened to you recently.", exFromBook: true, ar: "مؤخرًا" },
        { w: "lose", pos: "verb", emoji: "😢", def: "to not be able to find something (past: lost)", ex: "He has lost something.", exFromBook: true, ar: "يفقد / يضيّع" },
        { w: "crutches", pos: "noun", emoji: "🩼", def: "two long sticks that help you walk when your leg is hurt", ex: "He is walking with crutches because he broke his leg.", exFromBook: false, ar: "عكّازات" }
      ],
      sections: [
        { type: "activity", title: "1. Look at the pictures and answer the questions:", page: 23, source: "book",
          instructions: "Look at the four pictures. Make guesses. There is more than one good answer.",
          instructionsAr: "انظر إلى الصور الأربع وخمّن. توجد أكثر من إجابة صحيحة.",
          image: "crops/u2l3-pictures.jpg",
          items: [
            { t: "short", q: "Picture 1 (the sad man): 1. Why does he look so sad? (The book’s answer: He has lost something.) 2. What did he lose? 3. When do you think it happened?",
              model: "He has lost something. I think he lost his wallet. I think it happened this morning.", open: true, hint: "He has lost … / I think he lost … / I think it happened …" },
            { t: "short", q: "Picture 2 (the family and the house): 1. Why do they look so happy? They have … 2. How did they get the money for the house? 3. When do you think this happened?",
              model: "They have bought a new house. I think they saved money for many years. I think it happened last month.", open: true, hint: "They have bought … / I think they …" },
            { t: "short", q: "Picture 3 (the boy with crutches): 1. Will he be able to play football today? 2. Why do you think so? 3. When do you think it happened?",
              model: "No, he won’t. He has hurt (broken) his leg. I think it happened yesterday.", open: true, hint: "No, he won’t. He has … his leg." },
            { t: "short", q: "Picture 4 (Tom): 1. How do you think Tom feels now? 2. Why do you think so? 3. When do you think this happened?",
              model: "He feels very happy. He has won a race. I think it happened a few minutes ago.", open: true, hint: "He feels … He has won …" }
          ] },

        { type: "speak", title: "2. a. Work in pairs. Practise speaking about your experiences", page: 23, source: "book",
          instructions: "Ask your partner about an experience. Use the book’s questions.",
          dialogue: [
            { who: "You", text: "Have you ever …?" },
            { who: "Your partner", text: "" },
            { who: "You", text: "When did you …?" },
            { who: "Your partner", text: "" },
            { who: "You", text: "Did you enjoy it?" },
            { who: "Your partner", text: "" }
          ],
          starters: ["Have you ever eaten Moroccan food?", "Yes, I have. / No, I haven’t.", "When did you eat it?", "I ate it last summer.", "Yes, I enjoyed it very much. / No, I didn’t enjoy it."],
          record: true },

        { type: "speak", title: "2. b. Tell your class about your partner.", page: 23, source: "book",
          instructions: "Use your partner’s answers. Present perfect for the experience, past simple for when and how.",
          example: "My partner has eaten Moroccan food. He ate it in a restaurant at a shopping mall. He enjoyed it very much.",
          dialogue: [],
          starters: ["My partner has …", "He / She … it (when / where).", "He / She enjoyed it very much. / He / She didn’t enjoy it."],
          record: true },

        { type: "speak", title: "3. Talk about something funny, strange, or interesting that has happened to you recently (at home, class, health club, street, etc...).", page: 24, source: "book",
          instructions: "Tell your partner first.",
          dialogue: [],
          starters: ["Something funny has happened to me recently.", "Last week, I …", "It was very … because …", "I have never … before!"],
          record: true },

        { type: "write", title: "3. … Then write a short paragraph describing this experience using the present perfect and past simple.", page: 24, source: "book",
          instructions: "Write a short paragraph. Use the present perfect (has / have + past participle) and the past simple (when it happened).",
          wordBank: ["recently", "have / has", "never", "ever", "yesterday", "last week", "funny", "strange", "interesting", "because"],
          frame: [
            { label: "What has happened?", hint: "Something strange has happened to me recently." },
            { label: "When and where? What happened?", hint: "Last Monday, at the health club, I …", lines: 3 },
            { label: "How did you feel?", hint: "I felt … I have never … before." }
          ],
          model: "Something funny has happened to me recently. Last Thursday, I went to the health club with my brother. I put on my brother’s shoes by mistake, and they were very big! I ran on the treadmill and one shoe flew off. Everybody laughed, and I laughed too. I have never felt so silly before!",
          modelFromBook: false,
          checklist: ["I used the present perfect (has / have + past participle).", "I used the past simple for when it happened.", "I started with a capital letter and ended with a full stop."],
          minWords: 40 },

        { type: "activity", title: "Extra Practice: Present perfect or past simple?", source: "extra", stage: "guided",
          instructions: "No time → present perfect. A time (yesterday, last week, in 2020) → past simple.", instructionsAr: "بدون وقت ← المضارع التام. مع وقت محدّد ← الماضي البسيط.",
          items: [
            { t: "choose", q: "My partner (has eaten / ate) Moroccan food.", options: ["has eaten", "ate"], answer: 0, why: "An experience, no time → present perfect." },
            { t: "choose", q: "He (has eaten / ate) it in a restaurant last month.", options: ["has eaten", "ate"], answer: 1, why: "last month = a finished time → past simple." },
            { t: "choose", q: "When (have you lost / did you lose) your phone?", options: ["have you lost", "did you lose"], answer: 1, why: "When…? asks about a time → past simple." },
            { t: "choose", q: "I (have never flown / never flew) in a hot air balloon.", options: ["have never flown", "never flew"], answer: 0, why: "Life experience until now → present perfect." },
            { t: "choose", q: "Tom (has won / won) a race yesterday.", options: ["has won", "won"], answer: 1, why: "yesterday → past simple." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the four pictures. Students guess how each person feels and why.",
          "Exercise 1: model the first picture with the book’s answer (He has lost something.). Accept any logical guess.",
          "Exercise 2a: pairs use the dialogue (Have you ever…? → When did you…? → Did you enjoy it?). 2b: report to the class.",
          "Exercise 3: students tell a partner about a recent experience, then write a short paragraph.",
          "Point out: present perfect = the experience; past simple = when / where / how."
        ],
        pair: ["Interview: A asks three “Have you ever…?” questions and two follow-up questions; then swap."],
        group: ["Guess the story: one student mimes something that has happened; the group guesses (You have lost your keys!)."],
        quick: [
          { q: "Why does the man in picture 1 look sad?", a: "He has lost something." },
          { q: "Which tense do we use with “When did…?”", a: "The past simple." },
          { q: "Complete: My partner ___ eaten Moroccan food. He ___ it at a mall.", a: "has / ate" }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u2l4", num: 4, skill: "Grammar",
      title: "Expressing Purpose",
      pages: [24, 24],
      status: "complete",
      canDo: ["Use (to/so that/in order to).", "Express purpose."],
      goals: ["Say WHY people do things.", "Use to / in order to + base verb.", "Use so that + subject + verb.", "Write purpose sentences for pictures."],
      goalsAr: ["أقول لماذا يفعل الناس الأشياء.", "أستخدم to / in order to + الفعل الأساسي.", "أستخدم so that + فاعل + فعل.", "أكتب جملًا تبيّن الغرض للصور."],
      warmup: {
        title: "Grammar in context",
        image: "crops/u2l4-warmup.jpg",
        emoji: "🏀",
        prompts: ["Why do we wash our hands?", "Why do people save money?", "Why do we read books?"],
        seconds: 60
      },
      vocab: [
        { w: "achieve", pos: "verb", emoji: "🏆", def: "to succeed in doing something after working hard", ex: "Adel was very happy to achieve his goal.", exFromBook: true, ar: "يحقّق" },
        { w: "improve", pos: "verb", emoji: "📈", def: "to make something better", ex: "He spent a long time in the gym to build a strong body and to improve his fitness.", exFromBook: false, ar: "يحسّن" },
        { w: "require", pos: "verb", emoji: "📋", def: "to need", ex: "He chose point guard, a position that only requires average height.", exFromBook: true, ar: "يتطلّب" },
        { w: "master", pos: "verb", emoji: "🎯", def: "to learn to do something very well", ex: "He trained hard so that he could master the skills.", exFromBook: false, ar: "يُتقن" },
        { w: "frequently", pos: "adverb", emoji: "🔁", def: "often; many times", ex: "Wash your hands frequently.", exFromBook: false, ar: "بشكل متكرّر" },
        { w: "infection", pos: "noun", emoji: "🦠", def: "an illness caused by germs", ex: "Wash your hands frequently so that you don’t catch infections.", exFromBook: false, ar: "عدوى" }
      ],
      sections: [
        { type: "grammar", title: "Grammar in context: Expressing purpose", page: 24,
          steps: [
            { title: "Step 1 — From the book",
              text: "Grammar in context: Expressing purpose. The book’s word list: to / so that / in order to. (Exercise 4: “Read the following text and fill in the missing parts with these words.”)",
              textAr: "التعبير عن الغرض باستخدام: to / so that / in order to.",
              examples: ["{c:to} / {c:so that} / {c:in order to}"] },
            { title: "Step 2 — What is purpose?", source: "extra",
              text: "Purpose = the reason WHY we do something. These words answer the question “Why?”.",
              textAr: "الغرض هو سبب قيامنا بالشيء، وهذه الكلمات تجيب عن سؤال: لماذا؟",
              examples: ["Why did Adel join a club? → {c:To} {p:practise} the sport."] },
            { title: "Step 3 — to / in order to + base verb", source: "extra",
              text: "After to and in order to we use the base verb. They have the same meaning; in order to is more formal. Both are correct.",
              textAr: "بعد to و in order to يأتي الفعل الأساسي، ولهما المعنى نفسه، و in order to أكثر رسمية.",
              examples: ["{s:He} {v:spent} a long time in the gym {c:to} {p:build} a strong body.", "{s:He} {v:spent} a long time in the gym {c:in order to} {p:build} a strong body."] },
            { title: "Step 4 — so that + subject + verb", source: "extra",
              text: "After so that we need a subject and a verb, often can (present) or could (past).",
              textAr: "بعد so that نحتاج فاعلًا وفعلًا، وغالبًا can للحاضر و could للماضي.",
              examples: ["{s:He} {v:kept} practising {c:so that} {s:he} {a:could} {v:improve} his skills.", "{s:I} {v:save} money {c:so that} {s:I} {a:can} {v:buy} my own things."] },
            { title: "Step 5 — Negative purpose", source: "extra",
              text: "For a negative purpose use in order not to + base verb, or so that + subject + don’t / won’t / can’t + verb.",
              textAr: "للغرض المنفي: in order not to + فعل، أو so that + فاعل + don’t / won’t.",
              examples: ["{s:I} {v:wash} my hands frequently {c:in order not to} {p:catch} infections.", "{s:I} {v:wash} my hands frequently {c:so that} {s:I} {n:don’t} {v:catch} infections."] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Look at the words after the gap. A base verb → to / in order to. A subject + verb → so that.",
              textAr: "انظر إلى ما بعد الفراغ: فعل أساسي ← to / in order to. فاعل + فعل ← so that.",
              examples: ["✗ He trained {n:to} he could master the skills. → ✓ {c:so that} {s:he} {a:could}", "✗ I read books so that {n:learn} new information. → ✓ {c:to} {p:learn}"] }
          ],
          table: {
            head: ["Word", "Next comes", "Example"],
            rows: [
              ["to", "base verb", "He tried to join a basketball club to practise the sport."],
              ["in order to", "base verb (more formal)", "He spent a long time in the gym in order to build a strong body."],
              ["so that", "subject + can / could + verb", "He kept practising so that he could improve his skills."]
            ]
          },
          worked: {
            q: "Complete: Adel kept practising by himself on weekends ____ he could improve his skills. (to / so that / in order to)",
            steps: [
              "Look after the gap: “he could improve”.",
              "“he” is a subject; “could improve” is a verb.",
              "to and in order to need a base verb right after them.",
              "So the answer is so that."
            ],
            a: "Adel kept practising by himself on weekends {c:so that} {s:he} {a:could} {v:improve} his skills."
          },
          notes: ["Base verb after the gap → to OR in order to (both correct). Subject + verb after the gap → so that.", "Not every “to” shows purpose: “wanted to be”, “tried to join” are verb + to, not purpose."] },

        { type: "reading", title: "Adel’s Dream", page: 24,
          instructions: "4. Read the following text and fill in the missing parts with these words: to / so that / in order to",
          paras: [
            "Adel always wanted to be a basketball player, but he was shorter than most basketball players. He tried to join a basketball club to practise the sport ……(1)…… achieve his dream. He kept practising by himself on weekends ……(2)…… he could improve his skills. He thought about his best position, he needed a position that didn’t require a tall person. He chose point guard, a position that only requires average height. All he needed to do was to train ……(3)…… he could master the skills required for this position. He spent a long time in the gym ……(4)…… build a strong body and to improve his fitness. He went back to the first club he had tried to join ……(5)…… ask for a second chance. The coach gave him a chance ……(6)…… find out if Adel had improved. He was quite surprised to find that Adel was good enough to join the team. Adel was very happy to achieve his goal. He told everyone he knew how important it is for people to work hard ……(7)…… achieve their dreams."
          ],
          speaker: null,
          note: "The text has no title in the book; “Adel’s Dream” is only a label." },

        { type: "activity", title: "4. Fill in the missing parts with these words: to / so that / in order to", page: 24, source: "book", stage: "guided",
          instructions: "Tap a word chip. Look at the words after the gap. Sometimes two answers are correct.", instructionsAr: "اختر الكلمة المناسبة. انظر إلى ما بعد الفراغ. أحيانًا تكون إجابتان صحيحتين.",
          items: [
            { t: "fill", q: "1. He tried to join a basketball club to practise the sport ____ achieve his dream.", answer: ["in order to", "to"], bank: ["to", "so that", "in order to"], hint: "“achieve” is a base verb.", why: "Base verb after the gap → in order to or to. (“in order to” sounds better here because “to practise” comes just before.)" },
            { t: "fill", q: "2. He kept practising by himself on weekends ____ he could improve his skills.", answer: ["so that"], bank: ["to", "so that", "in order to"], hint: "“he could improve” = subject + verb.", why: "Subject + could + verb → so that." },
            { t: "fill", q: "3. All he needed to do was to train ____ he could master the skills required for this position.", answer: ["so that"], bank: ["to", "so that", "in order to"], hint: "Look for a subject after the gap.", why: "he + could master → so that." },
            { t: "fill", q: "4. He spent a long time in the gym ____ build a strong body and to improve his fitness.", answer: ["to", "in order to"], bank: ["to", "so that", "in order to"], hint: "“build” is a base verb.", why: "Base verb → to or in order to (both correct)." },
            { t: "fill", q: "5. He went back to the first club he had tried to join ____ ask for a second chance.", answer: ["to", "in order to"], bank: ["to", "so that", "in order to"], hint: "“ask” is a base verb.", why: "Base verb → to or in order to (both correct)." },
            { t: "fill", q: "6. The coach gave him a chance ____ find out if Adel had improved.", answer: ["to", "in order to"], bank: ["to", "so that", "in order to"], hint: "“find out” is a base verb.", why: "Base verb → to or in order to (both correct)." },
            { t: "fill", q: "7. He told everyone he knew how important it is for people to work hard ____ achieve their dreams.", answer: ["to", "in order to"], bank: ["to", "so that", "in order to"], hint: "“achieve” is a base verb.", why: "Base verb → to or in order to (both correct)." }
          ] },

        { type: "activity", title: "5. In your notebook, write sentences for the following pictures using the word list in exercise 4.", page: 24, source: "book", stage: "independent",
          instructions: "Use to / so that / in order to. Write one sentence for each picture.", instructionsAr: "اكتب جملة لكل صورة باستخدام to / so that / in order to.",
          image: "crops/u2l4-warmup.jpg",
          items: [
            { t: "short", q: "🧼 wash hands frequently – not to catch infections",
              model: "I wash my hands frequently in order not to catch infections. / I wash my hands frequently so that I don’t catch infections.",
              keywords: [["wash"], ["infection"]], hint: "in order not to + verb / so that I don’t + verb" },
            { t: "short", q: "💰 save money – buy my own things",
              model: "I save money to buy my own things. / I save money so that I can buy my own things.",
              keywords: [["save"], ["buy"]], hint: "to + verb / so that I can + verb" },
            { t: "short", q: "📚 read books – learn new information",
              model: "I read books in order to learn new information. / I read books so that I can learn new information.",
              keywords: [["read"], ["learn"]], hint: "in order to + verb / so that I can + verb" }
          ] },

        { type: "discuss", title: "Tip: Design a questionnaire", page: 24, source: "book",
          prompts: ["Design a questionnaire to find out about your classmates’ special experiences."],
          image: null, emoji: "📋", seconds: 120,
          starters: ["Have you ever …?", "When did you …?", "Where did you …?", "Did you enjoy it?"] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the connector", source: "extra", stage: "guided",
          instructions: "Choose the correct connector. Sometimes TWO answers are correct.", instructionsAr: "اختر أداة الربط الصحيحة. أحيانًا تكون إجابتان صحيحتين.",
          items: [
            { t: "mcq", q: "She studies hard ____ pass her exams.", options: ["to", "so that", "in order to"], answer: [0, 2], hint: "“pass” is a base verb.", why: "Base verb → to or in order to." },
            { t: "mcq", q: "We left early ____ we could find a good seat.", options: ["to", "so that", "in order to"], answer: 1, hint: "“we could find” has a subject.", why: "Subject + could + verb → so that." },
            { t: "mcq", q: "He goes to the gym ____ get fit.", options: ["to", "so that", "in order to"], answer: [0, 2], hint: "“get” is a base verb.", why: "Base verb → to or in order to." },
            { t: "mcq", q: "I wrote it down ____ I wouldn’t forget it.", options: ["to", "so that", "in order to"], answer: 1, hint: "Look for a subject.", why: "I + wouldn’t forget → so that." },
            { t: "mcq", q: "Wear a mask ____ catch infections.", options: ["in order not to", "so that not", "to not so"], answer: 0, hint: "Negative purpose + base verb.", why: "in order not to + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Join the sentences", source: "extra", stage: "independent",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات.",
          items: [
            { t: "order", q: "🏀 Make a sentence.", words: ["Adel", "trained", "hard", "so", "that", "he", "could", "join", "the", "team."], answer: ["Adel trained hard so that he could join the team."], hint: "so that + he + could + verb.", why: "Action + so that + subject + could + verb." },
            { t: "order", q: "💰 Make a sentence.", words: ["I", "save", "money", "in", "order", "to", "buy", "a", "bike."], answer: ["I save money in order to buy a bike."], hint: "in order to + base verb.", why: "Action + in order to + buy." },
            { t: "fix", q: "He goes to the library {so that} borrow books.", answer: ["to", "in order to"], hint: "“borrow” is a base verb.", why: "Base verb → to or in order to." },
            { t: "fix", q: "She sets an alarm {to} she can wake up early.", answer: ["so that"], hint: "“she can wake up” has a subject.", why: "Subject + can + verb → so that." },
            { t: "short", q: "Write your own sentence: Why do you come to school?", model: "I come to school to learn new things and so that I can meet my friends.", open: true, hint: "I come to school to … / so that I can …" }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder",
        sentences: [
          "He spent a long time in the gym to build a strong body.",
          "He kept practising so that he could improve his skills.",
          "I read books in order to learn new information.",
          "I save money so that I can buy my own things.",
          "People work hard to achieve their dreams."
        ] },
      teacher: {
        notes: [
          "Warm-up: show the three pictures (hands, money box, books). Ask “Why?” for each one.",
          "Teach: to / in order to + base verb; so that + subject + can / could + verb; negative purpose (in order not to / so that … don’t).",
          "Worked example on the board, then the Adel text (exercise 4). Accept to AND in order to wherever a base verb follows.",
          "Exercise 5: students write one sentence per picture in their notebooks (several correct answers).",
          "Tip: students design a short questionnaire about special experiences (links to lesson 3)."
        ],
        pair: ["“Why?” chain: A says an action (I go to the gym). B adds a purpose (to get fit / so that I can be strong)."],
        group: ["Groups write Adel’s story in 5 steps with a purpose in each step and act it out."],
        quick: [
          { q: "What comes after “so that”?", a: "A subject + verb (often can / could)." },
          { q: "Complete: He went back ___ ask for a second chance.", a: "to / in order to" },
          { q: "Complete: He trained ___ he could master the skills.", a: "so that" },
          { q: "Make it negative: I wash my hands to catch infections. (✗)", a: "I wash my hands in order not to catch infections." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — READING ─────────────────────────
    {
      id: "u2l5", num: 5, skill: "Reading",
      title: "Life’s Challenges",
      pages: [25, 26],
      status: "complete",
      canDo: ["Describe pictures.", "Make guesses."],
      goals: ["Read two true stories of courage.", "Learn 8 new words.", "Answer questions about the texts.", "Talk about people with disabilities in our society."],
      goalsAr: ["أقرأ قصتين حقيقيتين عن الشجاعة.", "أتعلّم 8 كلمات جديدة.", "أجيب عن أسئلة حول النصين.", "أتحدّث عن دور ذوي الإعاقة في المجتمع."],
      warmup: {
        title: "Before you read",
        image: "crops/u2l5-warmup.jpg",
        emoji: "💪",
        prompts: ["Discuss the pictures and guess what the lesson is about."],
        seconds: 90
      },
      vocab: [
        { w: "sight", pos: "noun", emoji: "👁️", def: "the ability to see", ex: "She lost her sight but did not lose her determination or hope.", exFromBook: true, ar: "البصر" },
        { w: "determination", pos: "noun", emoji: "💪", def: "the strong wish to do something even when it is difficult", ex: "She lost her sight but did not lose her determination or hope.", exFromBook: true, ar: "العزيمة / الإصرار" },
        { w: "overcome", pos: "verb", emoji: "🧗", def: "to deal with a difficult problem and succeed", ex: "She was able to overcome being blind and achieve first place in Kuwait.", exFromBook: true, ar: "يتغلّب على" },
        { w: "Braille", pos: "noun", emoji: "⠃", def: "a way of writing with raised dots that blind people read with their fingers", ex: "Braille is a method of writing that helps the blind to read with their fingers.", exFromBook: true, ar: "طريقة برايل" },
        { w: "barrier", pos: "noun", emoji: "🚧", def: "something that stops you from doing something", ex: "Her visual handicap is not a barrier between her and the world around her.", exFromBook: true, ar: "حاجز / عائق" },
        { w: "inspire", pos: "verb", emoji: "✨", def: "to give someone the wish and the energy to do something good", ex: "Ghanim has inspired people around the world.", exFromBook: true, ar: "يُلهم" },
        { w: "incredibly", pos: "adverb", emoji: "😲", def: "in a way that is very surprising, hard to believe", ex: "Ghanim has inspired people around the world by surviving and, incredibly, by becoming an athlete.", exFromBook: true, ar: "بشكل مذهل" },
        { w: "capable", pos: "adjective", emoji: "🙌", def: "able to do something well", ex: "People with disabilities are capable of giving and are active in society.", exFromBook: true, ar: "قادر" }
      ],
      sections: [
        { type: "reading", title: "Juri Al-Azmi: “Defying the Odds”", page: 25,
          instructions: "2. Read the texts and answer the questions below.",
          paras: [
            "A 16-year-old Kuwaiti girl, Juri Mohammed Al-Azmi, has always loved reading books and poetry. She lost her sight but did not lose her determination or hope. She was able to overcome being blind and achieve first place in Kuwait at the “Arab Reading Challenge” contest. She beat 16,000 Arab students by reading 50 books. She also participated in the “Arab Reading Challenge Champion” contest in the United Arab Emirates. There were 18 other Arab students who had reached the final stage of the competition.",
            "One of the difficulties facing Juri is the lack of books in Braille. Braille is a method of writing that helps the blind to read with their fingers. She said, in a statement published by the organising committee, that she loves reading, and that her visual handicap is not a barrier between her and the world around her."
          ],
          speaker: null },

        { type: "reading", title: "“My Incredible Story” by Ghanim Al Muftah", page: 25,
          paras: [
            "Qatari teenager Ghanim was born with a rare disease which stops the development of the lower spine. Doctors told his family he probably would not survive. Ghanim has inspired people around the world by surviving and, incredibly, by becoming an athlete. He shares his story of hope and determination with the world. His dream is to become a Paralympian.",
            "Ghanim said: “through my Instagram account, where I have almost one million followers, I want to say that everyone has a right to dream.” “Social media is a window to the world. [[It]] helps us get our message out there faster and we have to use it in a positive and useful way. I want people to understand that people with disabilities are capable of giving and are active in society.”"
          ],
          speaker: null },

        { type: "activity", title: "2. Read the texts and answer the questions below.", page: 25, source: "book",
          instructions: "Answer the questions. Use the two texts.", instructionsAr: "أجب عن الأسئلة من النصين.",
          items: [
            { t: "short", q: "1. How can Juri read books despite her disability?",
              model: "She reads books in Braille: she reads with her fingers.", keywords: [["braille", "finger"]], hint: "Read Juri’s second paragraph." },
            { t: "short", q: "2. What challenges is she facing?",
              model: "She has lost her sight (she is blind), and there is a lack of books in Braille.", keywords: [["braille", "lack", "sight", "blind"]], hint: "“One of the difficulties facing Juri is …”" },
            { t: "short", q: "3. How did Ghanim inspire and surprise people?",
              model: "Doctors said he probably would not survive, but he survived and, incredibly, became an athlete. He shares his story of hope and determination.", keywords: [["surviv", "athlete"]], hint: "Read Ghanim’s first paragraph." },
            { t: "short", q: "4. The underlined pronoun it refers to …",
              model: "social media", keywords: [["social media"]], hint: "Read the sentence before “It”." },
            { t: "short", q: "5. The purpose of these two stories is …",
              model: "to inspire us: they show that people with disabilities can overcome challenges, achieve their dreams and are capable of giving to society.", keywords: [["inspir", "overcome", "dream", "capable", "show"]], hint: "Why did the writer choose these two stories?" },
            { t: "short", q: "6. What do you think Ghanim means in English?",
              model: "Ghanim (غانم) means a winner – someone who gains or succeeds.", open: true, hint: "Think of the Arabic word غانم." }
          ] },

        { type: "discuss", title: "3. Think, pair, share", page: 26, source: "book",
          prompts: ["What do you think are the best things about Juri/ Ghanim?", "How do people with disabilities contribute to our society?"],
          image: null, emoji: "🤝", seconds: 120,
          starters: ["I think the best thing about Juri is her determination.", "Ghanim is inspiring because …", "People with disabilities contribute to our society by …"] },

        { type: "activity", title: "Extra Practice: Juri or Ghanim?", source: "extra", stage: "guided",
          instructions: "Who is it: Juri or Ghanim?", instructionsAr: "من هو: جوري أم غانم؟",
          items: [
            { t: "mcq", q: "This person is from Qatar.", options: ["Juri", "Ghanim"], answer: 1, why: "“Qatari teenager Ghanim…”" },
            { t: "mcq", q: "This person won first place in the Arab Reading Challenge in Kuwait.", options: ["Juri", "Ghanim"], answer: 0, why: "Juri achieved first place in Kuwait." },
            { t: "mcq", q: "This person has almost one million followers on Instagram.", options: ["Juri", "Ghanim"], answer: 1, why: "Ghanim: “my Instagram account, where I have almost one million followers”." },
            { t: "mcq", q: "This person read 50 books.", options: ["Juri", "Ghanim"], answer: 0, why: "“She beat 16,000 Arab students by reading 50 books.”" },
            { t: "mcq", q: "This person wants to become a Paralympian.", options: ["Juri", "Ghanim"], answer: 1, why: "“His dream is to become a Paralympian.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with: overcome – barrier – inspire – capable – determination", instructionsAr: "أكمل بالكلمات.",
          items: [
            { t: "fill", q: "With hard work, you can ____ many problems.", answer: ["overcome"], bank: ["overcome", "barrier", "inspire", "capable", "determination"], why: "overcome = succeed against a difficulty." },
            { t: "fill", q: "Her ____ helped her to finish the race.", answer: ["determination"], bank: ["overcome", "barrier", "inspire", "capable", "determination"], why: "determination = a strong wish to do something." },
            { t: "fill", q: "Good teachers ____ their students to work hard.", answer: ["inspire"], bank: ["overcome", "barrier", "inspire", "capable", "determination"], why: "inspire = give someone the wish to do something good." },
            { t: "fill", q: "Language is not a ____ when people want to be friends.", answer: ["barrier"], bank: ["overcome", "barrier", "inspire", "capable", "determination"], why: "barrier = something that stops you." },
            { t: "fill", q: "You are ____ of doing great things.", answer: ["capable"], bank: ["overcome", "barrier", "inspire", "capable", "determination"], why: "capable of + -ing = able to." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the four photos. Students guess what the lesson is about (challenges, determination).",
          "Pre-teach the 8 words. Explain Braille with a picture or by touching raised dots.",
          "Read Juri’s text, then Ghanim’s text. Do questions 1–6 (4: It = social media).",
          "Note: the book’s heading is printed “Life’s Challanges”; the correct spelling is Challenges.",
          "Think, pair, share (p. 26): praise kind, respectful language about people with disabilities."
        ],
        pair: ["A tells Juri’s story in 3 sentences; B tells Ghanim’s story in 3 sentences."],
        group: ["Groups make a poster: “People of determination in Kuwait and the world” with one fact about each person."],
        quick: [
          { q: "How does Juri read?", a: "In Braille, with her fingers." },
          { q: "What does “It” refer to in Ghanim’s text?", a: "Social media." },
          { q: "What is Ghanim’s dream?", a: "To become a Paralympian." },
          { q: "What does “overcome” mean?", a: "To deal with a difficult problem and succeed." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — LISTENING ─────────────────────────
    {
      id: "u2l6", num: 6, skill: "Listening",
      title: "The Interview with Peter Delaney",
      pages: [26, 26],
      status: "complete",
      canDo: ["Ask and talk about experiences."],
      goals: ["Listen to an interview about a long journey.", "Choose the correct answers.", "Tell my group about the journey."],
      goalsAr: ["أستمع إلى مقابلة عن رحلة طويلة.", "أختار الإجابات الصحيحة.", "أخبر مجموعتي عن الرحلة."],
      warmup: {
        title: "Before you listen",
        image: null,
        emoji: "🚶",
        prompts: ["Have you ever walked a very long way?", "What do you need for a long journey on foot?"],
        seconds: 60
      },
      vocab: [
        { w: "journey", pos: "noun", emoji: "🧭", def: "a trip from one place to another, often a long one", ex: "Peter started his journey a long time ago.", exFromBook: false, ar: "رحلة" },
        { w: "mile", pos: "noun", emoji: "📏", def: "a measure of distance (about 1.6 kilometres)", ex: "He has walked thousands of miles.", exFromBook: false, ar: "ميل" },
        { w: "across", pos: "preposition", emoji: "↔️", def: "from one side to the other side", ex: "They walked across the desert.", exFromBook: false, ar: "عَبْر" },
        { w: "sweater", pos: "noun", emoji: "🧥", def: "a warm piece of clothing for the top of your body", ex: "Take a sweater with you; it is cold at night.", exFromBook: false, ar: "كنزة صوف" }
      ],
      sections: [
        { type: "listen", title: "4. Listen to the interview with Peter Delaney. a. Complete the sentences with a, b, c or d.", page: 26, source: "book",
          track: "2.2",
          needsAudio: true,
          instructions: "Track 2.2. Listen. Write the letter (a, b, c or d) for each sentence.",
          items: [
            { t: "short", q: "1. Peter started his journey in …….. (a. 1999  b. 2003  c. 2005  d. 2016)", open: true },
            { t: "short", q: "2. He has walked …………… miles (a. 19,000  b. 20,000  c. 40,000  d. 36,000)", open: true },
            { t: "short", q: "3. He ……… across China. (a. has walked  b. hasn’t walked  c. will walk  d. walked)", open: true },
            { t: "short", q: "4. He ……… a sweater with him. (a. will carry  b. doesn’t carry  c. carries  d. carried)", open: true },
            { t: "short", q: "5. He has learnt more than 300 …… (a. songs  b. stories  c. films  d. poems)", open: true }
          ] },

        { type: "speak", title: "4. b. Tell your group about Peter’s journey.", page: 26, source: "book",
          instructions: "Use your answers from 4a.",
          dialogue: [],
          starters: ["Peter started his journey in …", "He has walked … miles.", "He … across China.", "He … a sweater with him.", "He has learnt more than 300 …"],
          record: true },

        { type: "listen", title: "Extra Practice: The Long Ride (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice interview read by a computer voice. Listen and answer.",
          script: [
            { who: "Host", text: "Today our guest is Salem. Salem, you have cycled a very long way. When did you start your journey?" },
            { who: "Salem", text: "I started in 2018, in Kuwait City. Since then, I have cycled about 30,000 kilometres." },
            { who: "Host", text: "Wow! Which countries have you visited?" },
            { who: "Salem", text: "I have cycled across Oman, India and Malaysia. I haven’t visited Japan yet, but I will go there next year." },
            { who: "Host", text: "What do you carry with you?" },
            { who: "Salem", text: "I always carry water, a small tent and a camera. I have taken more than 5,000 photos!" }
          ],
          items: [
            { t: "mcq", q: "When did Salem start his journey?", options: ["2008", "2018", "2020", "2015"], answer: 1, why: "“I started in 2018, in Kuwait City.”" },
            { t: "mcq", q: "How far has he cycled?", options: ["about 3,000 km", "about 13,000 km", "about 30,000 km", "about 300 km"], answer: 2, why: "“I have cycled about 30,000 kilometres.”" },
            { t: "mcq", q: "He ____ Japan.", options: ["has visited", "hasn’t visited", "visited", "visits"], answer: 1, why: "“I haven’t visited Japan yet.”" },
            { t: "mcq", q: "What does he always carry?", options: ["a sweater and a map", "water, a small tent and a camera", "books and a phone", "food and a guitar"], answer: 1, why: "“I always carry water, a small tent and a camera.”" },
            { t: "fill", q: "He has taken more than 5,000 ____.", answer: ["photos"], bank: ["photos", "songs", "books"], why: "“I have taken more than 5,000 photos!”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: ask about long walks or trips. What do you need?",
          "Read the five sentences and options before listening. Students predict.",
          "Play track 2.2 once for 4a and again to check. There is no answer key: check with the recording.",
          "4b: students retell Peter’s journey in groups, using the present perfect (He has walked…).",
          "If the recording is not available, use the Extra Practice interview (computer voice)."
        ],
        pair: ["Pairs compare their letters before class feedback.", "Role play: one is a reporter, one is a traveller. Ask: When did you start? How far have you walked?"],
        group: ["Each member retells one sentence about Peter in order."],
        quick: [
          { q: "Which tense: “He ___ walked 20,000 miles.”?", a: "Present perfect: has walked." },
          { q: "What is a journey?", a: "A (long) trip from one place to another." },
          { q: "How many options are there for each sentence?", a: "Four (a, b, c, d)." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u2l7", num: 7, skill: "Writing",
      title: "Inspiring Person",
      pages: [26, 26],
      status: "complete",
      canDo: ["Ask and talk about experiences."],
      goals: ["Plan an email with an outline.", "Write a two-paragraph email to a cousin.", "Use a greeting, a subject and an ending."],
      goalsAr: ["أخطّط لبريد إلكتروني باستخدام مخطط.", "أكتب بريدًا إلكترونيًا من فقرتين إلى قريبي.", "أستخدم التحية والموضوع والخاتمة."],
      warmup: {
        title: "Writing",
        image: null,
        emoji: "✉️",
        prompts: ["Who is a person you admire?", "Why do you admire him / her?"],
        seconds: 60
      },
      vocab: [
        { w: "admire", pos: "verb", emoji: "😍", def: "to like and respect someone very much", ex: "I admire Juri because she never gave up.", exFromBook: false, ar: "يُعجَب بـ" },
        { w: "inspiring", pos: "adjective", emoji: "✨", def: "making you want to do something good", ex: "Ghanim is an inspiring person.", exFromBook: false, ar: "مُلهِم" },
        { w: "greeting", pos: "noun", emoji: "👋", def: "the first words of a letter or email, e.g. Dear Sara,", ex: "Start your email with a greeting: Dear Ahmed,", exFromBook: false, ar: "تحية" },
        { w: "subject", pos: "noun", emoji: "📌", def: "the line in an email that says what it is about", ex: "Subject: A person I admire", exFromBook: false, ar: "الموضوع (في البريد)" }
      ],
      sections: [
        { type: "write", title: "5. a. Start by filling in the following outline: Inspiring Person", page: 26, source: "book",
          instructions: "In your notebook, write a two-paragraph email to your cousin telling him/her about an inspiring person you admire (physically challenged – athlete – writer – scientist …etc). Start by filling in the following outline.",
          wordBank: ["athlete", "writer", "scientist", "physically challenged", "determination", "hope", "overcome", "achieve", "inspire"],
          frame: [
            { label: "How you know him/her", hint: "I read about her in my English book. / He is my neighbour." },
            { label: "Why you admire him/her", hint: "I admire her because …" },
            { label: "What he/she does", hint: "She reads… / He trains…" },
            { label: "What he/she achieved", hint: "She has won… / He has become…" }
          ],
          model: "How you know him/her: I read about her in my English book.\nWhy you admire him/her: She lost her sight but did not lose her hope.\nWhat he/she does: She reads books in Braille.\nWhat he/she achieved: She won first place in Kuwait in the Arab Reading Challenge.",
          modelFromBook: false,
          checklist: ["I wrote notes in all four boxes.", "My notes are short."],
          minWords: 20 },

        { type: "write", title: "5. b. Write a two-paragraph email to your cousin about an inspiring person you admire.", page: 26, source: "book",
          instructions: "Use your outline. Paragraph 1: who the person is and how you know him/her. Paragraph 2: what he/she does and has achieved, and why you admire him/her.",
          wordBank: ["Dear", "Subject:", "I would like to tell you about", "I admire", "because", "has achieved", "also", "Best regards,", "Yours,"],
          frame: [
            { label: "To / Subject", hint: "To: my cousin … Subject: An inspiring person I admire" },
            { label: "Greeting", hint: "Dear …," },
            { label: "Paragraph 1", hint: "I would like to tell you about … I know about him/her because …", lines: 4 },
            { label: "Paragraph 2", hint: "He/She … He/She has … I admire him/her because …", lines: 4 },
            { label: "Ending", hint: "Best regards, / Yours, + your name" }
          ],
          model: "To: Noura\nSubject: An inspiring person I admire\n\nDear Noura,\n\nI hope you are well. I would like to tell you about an inspiring girl called Juri Al-Azmi. I read about her in my English book. She is a 16-year-old Kuwaiti girl who loves reading books and poetry.\n\nJuri lost her sight, but she did not lose her determination or hope. She reads books in Braille with her fingers. She won first place in Kuwait in the Arab Reading Challenge by reading 50 books! I admire her because she has shown everybody that a disability is not a barrier.\n\nBest regards,\nMaryam",
          modelFromBook: false,
          bookChecklist: [
            "Include a proper greeting.",
            "Start by filling in the following outline.",
            "Be sure to clearly say what your email is about in the subject field.",
            "You can end your informal email with: Thank you, Best regards, Yours…etc."
          ],
          checklist: ["I wrote two paragraphs.", "I used capital letters and full stops."],
          minWords: 70 },

        { type: "speak", title: "Tip: Print the email and read it to your class.", page: 26, source: "book",
          instructions: "Print the email and read it to your class.",
          dialogue: [],
          starters: ["Dear …,", "I would like to tell you about …", "I admire him / her because …", "Best regards, …"],
          record: true },

        { type: "activity", title: "Extra Practice: Parts of an email", source: "extra", stage: "guided",
          instructions: "Match each part of an email with an example.", instructionsAr: "صِل كل جزء من البريد الإلكتروني بمثال.",
          items: [
            { t: "match", q: "Match the part with the example.",
              pairs: [["Subject", "An inspiring person I admire"], ["Greeting", "Dear Ali,"], ["Body", "I would like to tell you about…"], ["Ending", "Best regards,"]],
              hint: "The greeting says hello; the ending says goodbye.", why: "Subject = what the email is about; greeting = Dear…; body = the paragraphs; ending = Best regards / Yours." },
            { t: "mcq", q: "Which ending is good for an informal email to your cousin?", options: ["Yours,", "To whom it may concern", "Subject:"], answer: 0, why: "The book suggests: Thank you, Best regards, Yours…" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students name people they admire (athletes, writers, scientists, people of determination).",
          "Fill in the outline together for Juri or Ghanim (lesson 5), then students choose their own person.",
          "Show the email layout: To, Subject, Greeting, two paragraphs, Ending.",
          "Students check their email with the book’s four points.",
          "Tip: students print (or copy) their email and read it to the class."
        ],
        pair: ["Partners swap emails and check: greeting? subject? two paragraphs? ending?"],
        group: ["Groups choose the most inspiring person from their emails and present him/her to the class."],
        quick: [
          { q: "What do we write in the subject field?", a: "What the email is about." },
          { q: "Give an informal ending.", a: "Best regards / Yours / Thank you." },
          { q: "How many paragraphs?", a: "Two." }
        ]
      }
    }
  ]
});

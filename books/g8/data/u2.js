// Learning Unit 2 — Innovation and Creation (Grade 8, new edition, First Term; cover p. 34, lessons pp. 35–44)
// Book text is copied from the printed pages. Answers come from the answer key of the source (blue handwriting).
// Anything not in the book is marked source: "extra".
BOOK.addUnit({
  id: "u2", num: 2, title: "Innovation and Creation", titleAr: "الابتكار والإبداع",
  pages: [35, 44],
  cover: 34,
  status: "complete",
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u2l1", num: 1, skill: "Reading",
      title: "Join the Future!",
      pages: [35, 36],
      status: "complete",
      canDo: [
        "I can analyse a written text about young inventors in Kuwait to identify the main idea and supporting details.",
        "I can determine the writer’s main purpose from a written text about young inventors in Kuwait.",
        "I can apply problem-solving skills to generate an original invention idea that addresses a real-life problem.",
        "I can show care for community improvement by suggesting useful invention ideas based on real-life problems and solutions."
      ],
      goals: ["Read a brochure about young inventors in Kuwait.", "Learn 13 new words.", "Find the writer’s purpose and the main idea.", "Think of an invention that solves a real problem."],
      goalsAr: ["أقرأ نشرة إعلانية عن المخترعين الصغار في الكويت.", "أتعلّم 13 كلمة جديدة.", "أحدّد هدف الكاتب والفكرة الرئيسية.", "أفكّر في اختراع يحلّ مشكلة حقيقية."],
      warmup: {
        title: "Before You Read: 1. Discuss the following.",
        image: "crops/u2l1-brochure.jpg",
        emoji: "💡",
        prompts: ["Look at the headline, logo, and photo. What do you think this brochure is about?"],
        seconds: 90
      },
      vocab: [
        { w: "brochure", pos: "noun", emoji: "📰", def: "a small thin book or paper with pictures that gives information", ex: "Look at the headline, logo, and photo. What do you think this brochure is about?", exFromBook: true, ar: "كتيب أو نشرة" },
        { w: "contribute", pos: "verb", emoji: "🤲", def: "to give or do something to help a group or a country", ex: "Have you ever wanted to contribute to your country and make a positive impact in the world?", exFromBook: true, ar: "يساهم" },
        { w: "create", pos: "verb", emoji: "🛠️", def: "to make something new", ex: "Many young people in Kuwait, just like you, have created useful inventions.", exFromBook: true, ar: "يعمل أو يصنع" },
        { w: "invention", pos: "noun", emoji: "💡", def: "a new thing that someone makes for the first time", ex: "Many young people in Kuwait, just like you, have created useful inventions.", exFromBook: true, ar: "اختراع" },
        { w: "organisation", pos: "noun", emoji: "🏢", def: "a group of people who work together for one aim, like a company or a club", ex: "The government and many organisations are working together to find talented students to provide them with support.", exFromBook: true, ar: "مؤسسة" },
        { w: "talented", pos: "adjective", emoji: "🌟", def: "very good at doing something", ex: "The government and many organisations are working together to find talented students to provide them with support.", exFromBook: true, ar: "موهوب" },
        { w: "inventor", pos: "noun", emoji: "🧑‍🔬", def: "a person who makes something new for the first time", ex: "We support inventors by giving advice, providing funding for their projects, and offering special classes to help them learn more about science and technology.", exFromBook: true, ar: "مخترع" },
        { w: "creatively", pos: "adverb", emoji: "🎨", def: "in a way that uses new and clever ideas", ex: "Many schools now have inventor's clubs, where you can work creatively with friends and show your work at school events.", exFromBook: true, ar: "إبداعيا" },
        { w: "competition", pos: "noun", emoji: "🏆", def: "an event where people try to win a prize", ex: "As a young inventor in Kuwait, you can enter exciting competitions such as the Kuwait Science Fair.", exFromBook: true, ar: "مسابقة" },
        { w: "fair", pos: "noun", emoji: "🎪", def: "a big event where people show their work or things", ex: "As a young inventor in Kuwait, you can enter exciting competitions such as the Kuwait Science Fair.", exFromBook: true, ar: "معرض" },
        { w: "scholarship", pos: "noun", emoji: "🎓", def: "money that a school or organisation gives a student to pay for study", ex: "Winners receive prizes, scholarships, and sometimes even the chance to travel and meet inventors from around the world.", exFromBook: true, ar: "منحة دراسية" },
        { w: "tool", pos: "noun", emoji: "🔧", def: "a thing you hold in your hand to make or fix something", ex: "In addition, you can use special tools and computers at our innovation centres to successfully build and test your ideas.", exFromBook: true, ar: "أداة" },
        { w: "successfully", pos: "adverb", emoji: "✅", def: "in a way that gets the result you want", ex: "In addition, you can use special tools and computers at our innovation centres to successfully build and test your ideas.", exFromBook: true, ar: "بنجاح" }
      ],
      sections: [
        { type: "reading", title: "Join the Future! Young Inventors Needed", page: 35,
          instructions: "2. Read the following brochure, then do the tasks that follow.",
          paras: [
            "Have you had any bright ideas? Have you ever wanted to contribute to your country and make a positive impact in the world?",
            "At KFAS, we believe in the power of new ideas. Many young people in Kuwait, just like you, have created useful inventions. That is why our country has special ways to help and support both adult and young inventors. The government and many organisations are working together to find talented students to provide them with support.",
            "Have you invented something new or had a creative idea? Share it with us at the Kuwait Foundation for the Advancement of Sciences (KFAS)! We support inventors by giving advice, providing funding for their projects, and offering special classes to help them learn more about science and technology. Many schools now have inventor's clubs, where you can work creatively with friends and show your work at school events.",
            "As a young inventor in Kuwait, you can enter exciting competitions such as the Kuwait Science Fair. Winners receive prizes, scholarships, and sometimes even the chance to travel and meet inventors from around the world. In addition, you can use special tools and computers at our innovation centres to successfully build and test your ideas.",
            "Remember! KFAS and your country are here to help you succeed!"
          ],
          image: "crops/u2l1-brochure.jpg",
          speaker: null,
          note: "The text is a brochure (Expository). Paragraphs 1 and 3 start with questions in blue in the book; paragraph 5 is the “Remember!” box. The book prints “inventor's clubs” here and “inventors’ club” in task 4 b. Box on the page: “KFAS is an abbreviation for the Kuwait Foundation for the Advancement of Sciences.”" },

        { type: "activity", title: "3. Why do you think KFAS made this brochure?", page: 35, source: "book",
          instructions: "Choose the best answer.", instructionsAr: "اختر الإجابة الأفضل: لماذا أعدّت KFAS هذه النشرة؟",
          items: [
            { t: "mcq", q: "Why do you think KFAS made this brochure?",
              options: ["To tell a story about a young inventor", "To join KFAS and support young inventors", "To explain how to use a computer", "To show the importance of friends"], answer: 1,
              hint: "Look at the headline: “Join the Future! Young Inventors Needed”.",
              why: "The brochure asks young inventors to share their ideas with KFAS and tells them how KFAS supports them." }
          ] },

        { type: "activity", title: "4. a. Decide if the sentences are (✓) or (✗). Justify your answers.", page: 36, source: "book",
          instructions: "Read the text again and complete the following tasks. Choose ✓ or ✗. Then justify the wrong sentences.",
          instructionsAr: "اقرأ النص مرة أخرى. اختر ✓ إذا كانت الجملة صحيحة أو ✗ إذا كانت خاطئة، ثم علّل إجابتك.",
          items: [
            { t: "mcq", q: "1. At KFAS, only adults can create useful inventions.", options: ["✓", "✗"], answer: 1,
              hint: "Paragraph 2: “Many young people in Kuwait, just like you, …”", why: "Young people can create inventions too." },
            { t: "mcq", q: "2. Inventors are supported with funding and special classes.", options: ["✓", "✗"], answer: 0,
              hint: "Paragraph 3: “We support inventors by …”", why: "“We support inventors by giving advice, providing funding for their projects, and offering special classes …”" },
            { t: "mcq", q: "3. The winners of competitions receive only prizes.", options: ["✓", "✗"], answer: 1,
              hint: "Paragraph 4: “Winners receive …”", why: "Winners also get scholarships." },
            { t: "short", q: "Justify your answer to sentence 1.", model: "Young people can create inventions too.",
              keywords: [["young", "student", "children", "kids"]], hint: "Who has created useful inventions? Read paragraph 2." },
            { t: "short", q: "Justify your answer to sentence 3.", model: "Winners also get scholarships.",
              keywords: [["scholarship", "travel", "meet inventors"]], hint: "What else do winners receive? Read paragraph 4." }
          ] },

        { type: "activity", title: "4. b. Answer the following questions.", page: 36, source: "book",
          instructions: "Answer the questions. Use the brochure.", instructionsAr: "أجب عن الأسئلة من النشرة.",
          items: [
            { t: "short", q: "1. What does KFAS stand for?", model: "Kuwait Foundation for the Advancement of Sciences.",
              keywords: [["foundation"], ["advancement"]], hint: "Read paragraph 3 or the box at the bottom of the page." },
            { t: "short", q: "2. How can joining an inventors’ club benefit students' futures?", model: "They learn and work creatively with friends.",
              keywords: [["creativ", "friend", "learn", "show their work", "school events"]], hint: "Read the last sentence of paragraph 3." }
          ] },

        { type: "activity", title: "5. Think about these inventions. What problems did they solve?", page: 36, source: "book",
          instructions: "Write the problem that each invention solved. Your words can be different.",
          instructionsAr: "اكتب المشكلة التي حلّها كل اختراع. يمكن أن تكتب بكلماتك.",
          items: [
            { t: "table", q: "What problems did it solve?", open: true,
              head: ["Invention", "What problems did it solve?"],
              rows: [
                ["airplane", { model: "long distances and unsafe roads" }],
                ["fridge", { model: "keeping food fresh and cold" }],
                ["phone", { model: "talking to people far away" }]
              ] }
          ] },

        { type: "write", title: "6. Think It - Solve It - Invent It", page: 36, source: "book",
          instructions: "a. Think of a problem at school, at home, or in your community. Work in pairs and complete the following table. b. Draw your invention here (on paper).",
          wordBankLabel: "Examples (from the book)",
          wordBank: ["lost items", "lights left on", "hard to wake up", "littering", "traffic"],
          frame: [
            { label: "The problem is", hint: "students …" },
            { label: "My invention is", hint: "a smart …" },
            { label: "It helps because", hint: "it …" }
          ],
          model: "The problem is students forget to turn off the lights in class.\nMy invention is a smart light sensor.\nIt helps because it turns off the lights when the room is empty and saves energy.",
          modelLabel: "Sample answer (from the answer key; your idea can be different)",
          modelFromBook: false,
          checklist: ["I described a real problem.", "I named my invention.", "I explained how it helps.", "I drew my invention on paper."],
          minWords: 15 },

        { type: "discuss", title: "6. c. Share your invention idea with your group. d. Vote", page: 36, source: "book",
          prompts: ["c. Share your invention idea with your group.", "d. Vote for the most creative or useful idea in your class."],
          starters: ["The problem is …", "My invention is …", "It helps because …", "I vote for … because it is very useful / creative."],
          image: null, emoji: "🗳️", seconds: 180 },

        { type: "activity", title: "Extra Practice: Main idea and details", source: "extra", stage: "guided",
          instructions: "Choose the best answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "What is the main idea of the brochure?", options: ["KFAS and Kuwait help young inventors to succeed.", "Computers are very expensive.", "Only adults can be inventors."], answer: 0,
              hint: "Read the “Remember!” box.", why: "Every paragraph tells young people how KFAS and Kuwait support inventors." },
            { t: "mcq", q: "Which sentence is a supporting detail?", options: ["Winners receive prizes, scholarships, and sometimes even the chance to travel.", "Join the Future!", "Young Inventors Needed"], answer: 0,
              hint: "A supporting detail gives information or an example.", why: "It gives a detail about what young inventors can get." },
            { t: "mcq", q: "Where can students use special tools and computers?", options: ["at KFAS innovation centres", "at the Kuwait Science Fair only", "at home"], answer: 0,
              hint: "Paragraph 4.", why: "“you can use special tools and computers at our innovation centres”" },
            { t: "mcq", q: "How does KFAS support inventors?", options: ["It gives advice, funding and special classes.", "It sells computers.", "It builds the inventions for them."], answer: 0,
              hint: "Paragraph 3.", why: "“We support inventors by giving advice, providing funding for their projects, and offering special classes.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with: inventor – competition – scholarship – talented – tools", instructionsAr: "أكمل بالكلمة المناسبة.",
          items: [
            { t: "fill", q: "Thomas Edison was a famous ____. He made the light bulb.", answer: ["inventor"], bank: ["inventor", "competition", "scholarship", "talented", "tools"], why: "inventor = a person who makes something new." },
            { t: "fill", q: "Our team won first prize in the robot ____.", answer: ["competition"], bank: ["inventor", "competition", "scholarship", "talented", "tools"], why: "competition = an event where people try to win." },
            { t: "fill", q: "She got a ____ to study science at university.", answer: ["scholarship"], bank: ["inventor", "competition", "scholarship", "talented", "tools"], why: "scholarship = money to pay for study." },
            { t: "fill", q: "Ali is a ____ student. He is very good at maths.", answer: ["talented"], bank: ["inventor", "competition", "scholarship", "talented", "tools"], why: "talented = very good at something." },
            { t: "fill", q: "We need special ____ to build the robot car.", answer: ["tools"], bank: ["inventor", "competition", "scholarship", "talented", "tools"], why: "tools = things we use to make or fix something." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the headline, the KFAS logo and the photo. Students guess what the brochure is about.",
          "Pre-teach the 13 words (brochure, contribute, create, invention, organisation, talented, inventor, creatively, competition, fair, scholarship, tool, successfully).",
          "Read the brochure. Ex. 3: the purpose is “To join KFAS and support young inventors”.",
          "Ex. 4 a: 1 ✗ (young people can create inventions too), 2 ✓, 3 ✗ (winners also get scholarships). Ex. 4 b: KFAS = Kuwait Foundation for the Advancement of Sciences.",
          "Ex. 5 and 6 are open: accept any sensible problem and invention. Pairs complete the table, draw the invention, share it and vote (ex. 6 c–d)."
        ],
        pair: ["A names an invention (car, fridge, phone…); B says the problem it solved.", "Pairs complete “The problem is … / My invention is … / It helps because …” together."],
        group: ["Groups present their invention ideas; the class votes for the most creative or useful idea."],
        quick: [
          { q: "What does KFAS stand for?", a: "Kuwait Foundation for the Advancement of Sciences." },
          { q: "Why did KFAS make the brochure?", a: "To get young inventors to join KFAS and to support them." },
          { q: "Name two things that competition winners can get.", a: "Prizes, scholarships (and sometimes the chance to travel)." },
          { q: "What does “talented” mean?", a: "Very good at doing something." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u2l2", num: 2, skill: "Grammar",
      title: "Present Perfect",
      pages: [37, 37],
      status: "complete",
      canDo: [
        "I can apply the present perfect tense accurately in spoken and written communication to form affirmative, negative, and interrogative sentences about experiences and ongoing situations.",
        "I can respond fluently to questions about experiences using appropriate present perfect structures."
      ],
      goals: ["Make present perfect sentences: have / has + past participle.", "Make negatives and questions.", "Use since, for, already, yet, ever and never.", "Talk about my experiences."],
      goalsAr: ["أكوّن جملًا بالمضارع التام: have / has + التصريف الثالث.", "أكوّن النفي والأسئلة.", "أستخدم since و for و already و yet و ever و never.", "أتحدّث عن تجاربي."],
      warmup: {
        title: "1. Look at the pictures of inventors and their inventions.",
        image: "crops/u2l2-inventors.jpg",
        emoji: "🤖",
        prompts: ["What have they done?", "Have you ever made something new?"],
        seconds: 60
      },
      vocab: [
        { w: "past participle", pos: "grammar word", emoji: "3️⃣", def: "the third form of a verb (V3), for example done, seen, worked", ex: "Affirmative Sentences: have/has + past participle (V3)", exFromBook: true, ar: "التصريف الثالث للفعل (اسم المفعول)" },
        { w: "experience", pos: "noun", emoji: "🪂", def: "something that has happened to you in your life", ex: "Talk about your experiences. Take turns to ask and answer.", exFromBook: true, ar: "تجربة" },
        { w: "since", pos: "preposition", emoji: "📍", def: "from a point in time in the past until now", ex: "We have lived in this town since 2015.", exFromBook: true, ar: "منذ (نقطة زمنية)" },
        { w: "for", pos: "preposition", emoji: "⏳", def: "used to show how long something has continued", ex: "She has worked at the bank for 14 years.", exFromBook: true, ar: "لمدة" },
        { w: "already", pos: "adverb", emoji: "✔️", def: "before now, or earlier than you expected", ex: "I have already seen that movie.", exFromBook: true, ar: "بالفعل / سابقًا" },
        { w: "yet", pos: "adverb", emoji: "⌛", def: "until now (in negatives and questions)", ex: "They haven’t finished the project yet.", exFromBook: true, ar: "بعد / حتى الآن" }
      ],
      sections: [
        { type: "grammar", title: "Grammar: Present Perfect", page: 37,
          steps: [
            { title: "Step 1 — From the book: What have they done?",
              text: "Look at the pictures of inventors and their inventions. What have they done?",
              textAr: "انظر إلى صور المخترعين واختراعاتهم. ماذا فعلوا؟",
              examples: ["The boy {a:has} {v:invented} a robot.", "The girl {a:has} {v:invented} a smartwatch for students."] },
            { title: "Step 2 — The rule (from the book)",
              text: "The present perfect tense is used to express an action which began in the past and is still true now. ✓ Affirmative Sentences: have/has + past participle (V3). ✗ Negative Sentences: have not (haven’t)/has not (hasn’t) + past participle (V3). ? Wh Questions: Wh-word + have/has + subject + past participle …? ? Yes/No Questions: Have/Has + pronoun + past participle……?",
              textAr: "نستخدم المضارع التام للتعبير عن حدث بدأ في الماضي وما زال صحيحًا الآن. الإثبات: have/has + التصريف الثالث. النفي: haven’t/hasn’t + التصريف الثالث. سؤال Wh: أداة السؤال + have/has + الفاعل + التصريف الثالث. سؤال Yes/No: Have/Has + الضمير + التصريف الثالث.",
              examples: ["{s:We} {a:have} {v:lived} in this town {t:since} 2015.", "{s:They} {n:haven’t} {v:finished} the project {t:yet}.", "{a:Have} {s:you} {t:ever} {v:been} to London?"] },
            { title: "Step 3 — have or has?", source: "extra",
              text: "I / you / we / they → have. He / she / it (and one person, like Salma) → has. Short forms: I’ve, you’ve, we’ve, they’ve, he’s, she’s.",
              textAr: "مع I و you و we و they نستخدم have، ومع he و she و it (أو اسم شخص واحد) نستخدم has.",
              examples: ["{s:I} {a:have} {v:worked} as a teacher {t:for} 10 years.", "{s:Salma} {a:has} {t:just} {v:completed} her homework."] },
            { title: "Step 4 — The past participle (V3)", source: "extra",
              text: "Regular verbs: add -ed (invent → invented, work → worked, try → tried, travel → travelled). Irregular verbs have their own V3: do → done, see → seen, be → been, read → read, build → built, write → written, take → taken.",
              textAr: "الأفعال المنتظمة نضيف لها ed، والأفعال الشاذة لها تصريف ثالث خاص مثل done و seen و been.",
              examples: ["{s:She} {n:hasn’t} {v:done} her science project {t:yet}.", "{s:Hamad} {a:has} {t:already} {v:read} the book."] },
            { title: "Step 5 — since or for?", source: "extra",
              text: "since + the start time (a point in time): since 2015, since Monday, since last year. for + a length of time: for 14 years, for two hours, for a long time.",
              textAr: "since تأتي مع بداية الوقت (نقطة زمنية)، و for تأتي مع طول المدة.",
              examples: ["We have lived in this town {t:since} 2015.", "She has worked at the bank {t:for} 14 years."] },
            { title: "Step 6 — already, just, ever, never, yet: where do they go?", source: "extra",
              text: "already, just, ever and never go between have/has and the past participle. yet goes at the end of negative sentences and questions. We use ever in questions and never in answers with a negative meaning.",
              textAr: "الكلمات already و just و ever و never تأتي بين have/has والتصريف الثالث، أما yet فتأتي في آخر جمل النفي والأسئلة.",
              examples: ["{s:I} {a:have} {t:already} {v:seen} that movie.", "{a:Have} {s:you} {t:ever} {v:cooked} a meal?", "No, {s:I} {a:have} {t:never} {v:been} to London.", "{a:Have} {s:you} {v:finished} your project {t:yet}?"] },
            { title: "Step 7 — Be careful!", source: "extra",
              text: "Use the past participle, not the base verb or the past simple. Use for with a length of time. Put yet at the end.",
              textAr: "استخدم التصريف الثالث وليس المصدر أو الماضي البسيط، واستخدم for مع طول المدة، وضع yet في آخر الجملة.",
              examples: ["✗ She has {n:finish} her project. → ✓ She has {v:finished} her project.", "✗ I have worked here {n:since} 10 years. → ✓ {t:for} 10 years", "✗ Have you ever {n:went} to Dubai? → ✓ Have you ever {v:been} to Dubai?", "✗ They haven’t finished {n:yet} the project. → ✓ They haven’t finished the project {t:yet}."] }
          ],
          table: {
            head: ["Expression", "Example"],
            rows: [
              ["since", "We have lived in this town since 2015."],
              ["for", "She has worked at the bank for 14 years."],
              ["already", "I have already seen that movie."],
              ["yet", "They haven’t finished the project yet."],
              ["ever", "Have you ever been to London?"],
              ["never", "No, I have never been to London."]
            ]
          },
          worked: {
            q: "Complete: They ____ (not / visit) the science fair yet.",
            steps: [
              "“not” and “yet” → this is a negative sentence.",
              "They → have, so the negative is haven’t.",
              "After haven’t we use the past participle (V3).",
              "visit → visited."
            ],
            a: "{s:They} {n:haven’t} {v:visited} the science fair {t:yet}."
          },
          notes: ["The book gives the rule and the expressions table. Steps 3–7 are extra help."] },

        { type: "activity", title: "2. a. Fill in the blanks with the correct present perfect form of the verbs in brackets.", page: 37, source: "book", stage: "guided",
          instructions: "Complete the following tasks with a partner. Write the present perfect form of the verb in brackets.",
          instructionsAr: "اكتب صيغة المضارع التام الصحيحة للفعل بين القوسين.",
          items: [
            { t: "fill", q: "1. She ____ (not / do) her science project yet.", answer: ["hasn’t done", "has not done"], hint: "she → has; not → hasn’t; do → V3.", why: "Negative: hasn’t + done (V3 of do)." },
            { t: "fill", q: "2. I ____ (work) as a teacher for 10 years.", answer: ["have worked"], hint: "I → have; work → worked.", why: "I + have + worked. “for 10 years” = a length of time until now." },
            { t: "fill", q: "3. Have you ____ (ever /try) the new tablet?", answer: ["ever tried"], hint: "ever goes before the past participle.", why: "Have you + ever + tried (try → tried)?" }
          ] },

        { type: "activity", title: "2. b. Read the following words and write sentences using the present perfect.", page: 37, source: "book", stage: "guided",
          instructions: "Use the words to write a sentence in the present perfect.",
          instructionsAr: "استخدم الكلمات لتكتب جملة بالمضارع التام.",
          items: [
            { t: "short", q: "1. Salma / just / complete / homework", model: "Salma has just completed her homework.",
              keywords: [["has just completed", "'s just completed"], ["homework"]], hint: "Salma → has; just goes before the V3; complete → completed." },
            { t: "short", q: "2. Hamad / already / read / the book", model: "Hamad has already read the book.",
              keywords: [["has already read", "'s already read"], ["book"]], hint: "Hamad → has; already goes before the V3; read → read." }
          ] },

        { type: "speak", title: "3. Role Play", page: 37, source: "book",
          instructions: "Talk about your experiences. Take turns to ask and answer. Use the pictures: try skydiving, cook a meal, help someone.",
          image: "crops/u2l2-roleplay.jpg",
          dialogue: [
            { who: "You", text: "Have you ever …?" },
            { who: "Your partner", text: "Yes/No …" },
            { who: "You", text: "What was it like?" },
            { who: "Your partner", text: "" }
          ],
          starters: ["Have you ever tried skydiving?", "Have you ever cooked a meal?", "Have you ever helped someone?", "Yes, I have. / No, I haven’t.", "I have … / I have never …", "It was fun / exciting / difficult."],
          note: "Sample answer (from the answer key): You: Have you ever cooked a meal? Your partner: Yes, I have. I have cooked pasta for my family. You: What was it like? It was fun.",
          record: true },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the correct word", source: "extra", stage: "guided",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "My brother has studied English (since / for) six years.", options: ["since", "for"], answer: 1, why: "six years = a length of time → for." },
            { t: "choose", q: "Ali has had his tablet (since / for) last summer.", options: ["since", "for"], answer: 0, why: "last summer = the start time → since." },
            { t: "choose", q: "Have you finished your project (yet / already)?", options: ["yet", "already"], answer: 0, why: "yet goes at the end of questions." },
            { t: "choose", q: "I have (already / yet) read this book.", options: ["already", "yet"], answer: 0, why: "already goes between have and the V3." },
            { t: "choose", q: "(Have / Has) Sara ever been to London?", options: ["Have", "Has"], answer: 1, why: "Sara = she → Has." },
            { t: "choose", q: "She has never (eat / eaten) sushi.", options: ["eat", "eaten"], answer: 1, why: "has + past participle: eaten." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🤖 Make a sentence.", words: ["He", "has", "invented", "a", "smart", "robot."], answer: ["He has invented a smart robot."], hint: "Subject + has + V3.", why: "He + has + invented + object." },
            { t: "order", q: "🪂 Make a question.", words: ["Have", "you", "ever", "tried", "skydiving?"], answer: ["Have you ever tried skydiving?"], hint: "Have + you + ever + V3?", why: "Yes/No question: Have + pronoun + ever + past participle." },
            { t: "order", q: "📁 Make a sentence.", words: ["They", "haven’t", "finished", "the", "project", "yet."], answer: ["They haven’t finished the project yet."], hint: "yet goes at the end.", why: "haven’t + V3 … yet." },
            { t: "order", q: "📚 Make a sentence.", words: ["We", "have", "lived", "here", "since", "2015."], answer: ["We have lived here since 2015."], hint: "since + the start time.", why: "have + lived + since 2015." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word or words.", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "She has {finish} her project.", answer: ["finished"], hint: "has + V3.", why: "finish → finished." },
            { t: "fix", q: "I have lived here {since} five years.", answer: ["for"], hint: "five years = a length of time.", why: "for + a length of time." },
            { t: "fix", q: "Have you ever {went} to Dubai?", answer: ["been"], hint: "Have + you + ever + V3.", why: "The V3 of go (as an experience) is been." },
            { t: "fix", q: "He {have} invented a robot.", answer: ["has"], hint: "he → ?", why: "he / she / it → has." },
            { t: "short", q: "Write one sentence about something you have never done.", model: "I have never tried skydiving.", open: true, hint: "I have never + V3 …" }
          ] }
      ],
      game: { kind: "sort", title: "since or for?",
        buckets: ["since", "for"],
        cards: [["2015", 0], ["Monday", 0], ["last summer", 0], ["I was six", 0], ["14 years", 1], ["two hours", 1], ["a long time", 1], ["ten minutes", 1]] },
      teacher: {
        notes: [
          "Warm-up: show the science fair photo. Ask “What have they done?” → The boy has invented a robot. The girl has invented a smartwatch for students.",
          "Teach the book’s box: have/has + V3; haven’t/hasn’t + V3; Wh-word + have/has + subject + V3?; Have/Has + pronoun + V3? Then the expressions table (since, for, already, yet, ever, never).",
          "Ex. 2 a: 1 hasn’t done, 2 have worked, 3 ever tried. Ex. 2 b: Salma has just completed her homework. / Hamad has already read the book.",
          "Ex. 3 Role play: pairs use the pictures (try skydiving, cook a meal, help someone). Sample: Have you ever cooked a meal? – Yes, I have. I have cooked pasta for my family. – What was it like? – It was fun."
        ],
        pair: ["“Have you ever…?” chain: A asks, B answers and asks the next person.", "A says a time word (2015, two hours); B says since or for."],
        group: ["Find someone who…: students walk and ask “Have you ever …?” and write names."],
        quick: [
          { q: "Make it negative: She has done her project.", a: "She hasn’t done her project (yet)." },
          { q: "since or for: ___ 14 years?", a: "for" },
          { q: "Where does “yet” go?", a: "At the end of a negative sentence or question." },
          { q: "What is the V3 of “be”?", a: "been" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u2l3", num: 3, skill: "Listening",
      title: "Kuwait Robotics Contest",
      pages: [38, 38],
      status: "complete",
      canDo: [
        "I can determine the main idea from a live broadcast about a Kuwait Robotics Contest.",
        "I can extract explicit and implicit details from a live spoken broadcast about a Kuwait Robotics Contest.",
        "I can value innovation and teamwork by expressing positive attitudes in discussions about a spoken text about a robotics contest in Kuwait."
      ],
      goals: ["Name things at a robot contest.", "Listen to a live broadcast and find the main idea.", "Decide if sentences are true or false.", "Write about my own robot."],
      goalsAr: ["أسمّي أشياء في مسابقة الروبوتات.", "أستمع إلى بثّ مباشر وأحدّد الفكرة الرئيسية.", "أحدّد إن كانت الجمل صحيحة أم خاطئة.", "أكتب عن الروبوت الخاص بي."],
      warmup: {
        title: "1. Think, Pair, Share",
        image: "crops/u2l3-contest.jpg",
        emoji: "🤖",
        prompts: ["a. Have you ever joined the Kuwait Robotics Contest?", "b. What do you need to build a robot car?"],
        seconds: 90
      },
      vocab: [
        { w: "drone", pos: "noun", emoji: "🛸", def: "a small flying machine with no pilot, often with a camera", ex: "Drones were used to film the race from above.", exFromBook: true, ar: "طائرة مُسيّرة (درون)" },
        { w: "referee", pos: "noun", emoji: "🟨", def: "a person who makes sure players follow the rules in a game", ex: "The referee stopped the game.", exFromBook: false, ar: "حَكَم (في المباراة)" },
        { w: "judge", pos: "noun", emoji: "🧑‍⚖️", def: "a person who decides who wins a contest", ex: "At the beginning of the race, the judges have taken their seats.", exFromBook: false, ar: "عضو لجنة التحكيم" },
        { w: "track", pos: "noun", emoji: "🏁", def: "a path or road made for races", ex: "The robot cars raced around the track.", exFromBook: false, ar: "يتابع" },
        { w: "contest", pos: "noun", emoji: "🏆", def: "a competition to find who is the best", ex: "What is the contest about?", exFromBook: true, ar: "مسابقة" },
        { w: "sensor", pos: "noun", emoji: "📡", def: "a part of a machine that notices light, heat or movement", ex: "Team Falcon cleaned their car's sensors before the race.", exFromBook: true, ar: "مستشعر / حسّاس" }
      ],
      sections: [
        { type: "activity", title: "2. Match the words with their pictures.", page: 38, source: "book",
          instructions: "Match the words with their pictures: judge – referee – track – drone. Picture 1 = drone (the example).",
          instructionsAr: "صِل كل كلمة بصورتها: judge – referee – track – drone. الصورة 1 = drone (مثال).",
          image: "crops/u2l3-match.jpg",
          items: [
            { t: "match", q: "Match each picture number with its word.",
              pairs: [["Picture 1 (example)", "drone"], ["Picture 2", "referee"], ["Picture 3", "judge"], ["Picture 4", "track"]],
              hint: "Picture 2 wears a black and white shirt. Picture 3 holds up score cards.",
              why: "1 drone (a flying machine), 2 referee (striped shirt), 3 judge (judges give scores), 4 track (a path for races)." }
          ] },

        { type: "listen", title: "3. Listen to the live broadcast of the Kuwait Robotics Contest and complete the tasks.", page: 38, source: "book",
          track: "2.1",
          needsAudio: true,
          instructions: "Track 2.1. Listen and choose the correct answer.",
          items: [
            { t: "mcq", q: "1. What is the contest about?", options: ["A Science Fair", "A Robot Car Race", "A Car Event", "A Drone Show"], answer: 1, keyed: true,
              hint: "What moves on the track?", why: "Answer key: b. A Robot Car Race." },
            { t: "mcq", q: "2. At the beginning of the race, the judges have:", options: ["prepared cars", "moved quickly", "taken their seats", "checked sensors"], answer: 2, keyed: true,
              hint: "What do judges do before a race starts?", why: "Answer key: c. taken their seats." }
          ] },

        { type: "listen", title: "4. Listen again and decide if the following sentences are True or False. Justify your answers.", page: 38, source: "book",
          track: "2.1",
          needsAudio: true,
          instructions: "Track 2.1. Listen again. Choose True or False. Then justify your answers.",
          items: [
            { t: "mcq", q: "a. The Kuwait Robotics Contest takes place at the Kuwait Science Arena.", options: ["True", "False"], answer: 0, keyed: true, why: "Answer key: T." },
            { t: "mcq", q: "b. A large crowd is shouting because the cars are moving fast.", options: ["True", "False"], answer: 1, keyed: true, why: "Answer key: F." },
            { t: "mcq", q: "c. Team Falcon cleaned their car's sensors before the race.", options: ["True", "False"], answer: 1, keyed: true, why: "Answer key: F." },
            { t: "mcq", q: "d. Drones were used to film the race from above.", options: ["True", "False"], answer: 0, keyed: true, why: "Answer key: T." },
            { t: "short", q: "Justify your answers to the false sentences (b and c).", open: true, hint: "Write what the speaker really says." }
          ] },

        { type: "activity", title: "5. Critical Thinking", page: 38, source: "book",
          instructions: "Who do you think will win the Kuwait Robotics Contest, Team Falcon or Team Horizon? Justify your answer.",
          instructionsAr: "من تتوقّع أن يفوز في مسابقة الكويت للروبوتات: فريق Falcon أم فريق Horizon؟ علّل إجابتك.",
          items: [
            { t: "short", q: "Who do you think will win the Kuwait Robotics Contest, Team Falcon or Team Horizon? Justify your answer.",
              model: "Team Horizon, because they acted fast.", open: true, hint: "I think Team … will win because …" }
          ] },

        { type: "write", title: "6. a. Imagine you have built a robot. What would your robot do?", page: 38, source: "book",
          instructions: "Write 2-3 sentences describing what your robot can do to make your life easier. Remember to use linking words: also, because, for example ….",
          wordBankLabel: "Sentence Starters and linking words (from the book)",
          wordBank: ["The Robot has", "It has helped us to", "The best thing", "also", "because", "for example"],
          frame: [{ label: "My robot", hint: "My robot has helped me to …", lines: 4 }],
          model: "My robot has helped me to clean my room. It also carries my school bag. The best thing is that it reminds me of my homework.",
          modelLabel: "Sample answer (from the answer key; your ideas can be different)",
          modelFromBook: false,
          checklist: ["I wrote 2–3 sentences.", "I used the present perfect (has helped).", "I used a linking word (also, because, for example).", "I started with a capital letter and ended with a full stop."],
          minWords: 15 },

        { type: "speak", title: "6. b. Share your robot ideas with your partner.", page: 38, source: "book",
          instructions: "Share your robot ideas with your partner. Listen carefully, then say one thing you like about your partner's robot and one question you want to ask.",
          dialogue: [
            { who: "A", text: "My robot has helped me to clean my room." },
            { who: "B", text: "" },
            { who: "A", text: "" }
          ],
          starters: ["I like your robot because …", "The best thing about your robot is …", "Can your robot …?", "How does your robot …?"],
          record: true },

        { type: "activity", title: "Extra Practice: Contest words", source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "The (judges / drones) gave the team ten points.", options: ["judges", "drones"], answer: 0, why: "Judges decide the scores." },
            { t: "choose", q: "The robot cars raced around the (track / referee).", options: ["track", "referee"], answer: 0, why: "A track is the path for a race." },
            { t: "choose", q: "A (drone / judge) flew above the race and filmed it.", options: ["drone", "judge"], answer: 0, why: "A drone is a small flying machine with a camera." },
            { t: "choose", q: "The (referee / track) blew the whistle to start the football match.", options: ["referee", "track"], answer: 0, why: "A referee controls a game." },
            { t: "choose", q: "The car stopped because its (sensors / seats) were dirty.", options: ["sensors", "seats"], answer: 0, why: "Sensors help the robot car see the track." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Contest Words", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up (ex. 1): Think, Pair, Share with the contest photo.",
          "Ex. 2: 1 drone (example), 2 referee, 3 judge, 4 track.",
          "Play track 2.1 (book QR code). The recording is not inside the app. Ex. 3 answers: 1 b (A Robot Car Race), 2 c (taken their seats).",
          "Ex. 4 answers: a T, b F, c F, d T. Play the recording again so students can justify b and c.",
          "Ex. 5: open; the answer key suggests “Team Horizon, because they acted fast.” Ex. 6: students write 2–3 sentences, then share with a partner."
        ],
        pair: ["A describes a picture (drone, referee, judge, track); B guesses the word.", "Pairs read their robot sentences; the partner says one thing they like and asks one question."],
        group: ["Groups design a robot car for the contest and present what it can do."],
        quick: [
          { q: "What is the contest about?", a: "A robot car race." },
          { q: "Who decides the winner of a contest?", a: "The judges." },
          { q: "What were the drones used for?", a: "To film the race from above." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — SPEAKING ─────────────────────────
    {
      id: "u2l4", num: 4, skill: "Speaking",
      title: "Living with Smart Devices: Yay or Nay?",
      pages: [39, 39],
      status: "complete",
      canDo: [
        "I can organise ideas logically to express an opinion about the advantages and disadvantages of using smart devices.",
        "I can present clearly structured spoken explanations about the advantages and disadvantages of smart devices using appropriate vocabulary and organised ideas."
      ],
      goals: ["Talk about smart devices I use.", "List advantages and disadvantages.", "Give a short presentation with a poster.", "Use sentence starters to give my opinion."],
      goalsAr: ["أتحدّث عن الأجهزة الذكية التي أستخدمها.", "أذكر المزايا والعيوب.", "أقدّم عرضًا قصيرًا مع ملصق.", "أستخدم بدايات الجمل لأعبّر عن رأيي."],
      warmup: {
        title: "1. Think, Pair, Share",
        image: "crops/u2l4-devices.jpg",
        emoji: "📱",
        prompts: ["a. Which of these devices do you use at home?", "b. Are they helpful for studying? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "device", pos: "noun", emoji: "📱", def: "a machine or tool made for a special job, like a tablet or a phone", ex: "Which of these devices do you use at home?", exFromBook: true, ar: "جهاز" },
        { w: "advantage", pos: "noun", emoji: "👍", def: "a good thing about something", ex: "Discuss the advantages and disadvantages of using smart devices.", exFromBook: true, ar: "ميزة / فائدة" },
        { w: "disadvantage", pos: "noun", emoji: "👎", def: "a bad thing or a problem about something", ex: "Discuss the advantages and disadvantages of using smart devices.", exFromBook: true, ar: "عيب / سلبية" },
        { w: "pros and cons", pos: "noun", emoji: "⚖️", def: "the good points and the bad points of something", ex: "Prepare a short presentation about the pros and cons of using smart devices.", exFromBook: true, ar: "الإيجابيات والسلبيات" },
        { w: "expensive", pos: "adjective", emoji: "💰", def: "costing a lot of money", ex: "A smart pen is useful, but it is expensive.", exFromBook: false, ar: "غالي الثمن" }
      ],
      sections: [
        { type: "activity", title: "2. Discuss the advantages and disadvantages of using smart devices.", page: 39, source: "book",
          instructions: "Then, complete the following table with your ideas.",
          instructionsAr: "ناقش مزايا وعيوب استخدام الأجهزة الذكية، ثم أكمل الجدول بأفكارك.",
          image: "crops/u2l4-devices.jpg",
          items: [
            { t: "table", q: "Complete the table with your ideas.", open: true,
              head: ["Device", "Advantages", "Disadvantages"],
              rows: [
                ["VR", { model: "Fun learning trips" }, { model: "Can hurt your eyes" }],
                ["Smart Pen", { model: "Easy note-taking" }, { model: "Expensive" }],
                ["Tablet", { model: "Easy to read and study" }, { model: "Wastes time on games" }],
                ["Robot", { model: "Helps with housework" }, { model: "Can break easily" }]
              ] }
          ] },

        { type: "speak", title: "3. Walk & Talk Gallery Tour", page: 39, source: "book",
          instructions: "Prepare a short presentation about the pros and cons of using smart devices. Follow the steps to present your poster:",
          steps: [
            "a. Design a poster that includes a title and a mind map of pros and cons.",
            "b. Write a short paragraph to explain your points.",
            "c. Use the sentence starters and the Confident Speaking Checklist.",
            "d. Walk around the room and listen to each other’s presentations.",
            "e. Choose your favourite idea from your classmates. Write one or two sentences to explain why you like it. Be ready to share with class."
          ],
          dialogue: [
            { who: "A", text: "In my opinion, smart devices are very useful." },
            { who: "B", text: "" },
            { who: "A", text: "" }
          ],
          starters: ["In my opinion, …", "One advantage is …", "One disadvantage is …", "For example, …", "However, …", "I agree/ disagree because …"],
          note: "Confident Speaking Checklist: Take turns while speaking. • Use the sentence starters to help you. • Don’t worry about mistakes, focus on communicating! • Sit straight with shoulders relaxed. • Make eye contact with group members when speaking. • Listen to others respectfully.",
          record: true },

        { type: "write", title: "3. b. Write a short paragraph to explain your points.", page: 39, source: "book",
          instructions: "Write a short paragraph for your poster. Use the sentence starters.",
          wordBankLabel: "Sentence Starters (from the book)",
          wordBank: ["In my opinion", "One advantage is", "One disadvantage is", "For example", "However", "I agree", "I disagree because"],
          frame: [{ label: "My paragraph", hint: "In my opinion, … One advantage is … For example, … However, one disadvantage is …", lines: 5 }],
          model: "In my opinion, smart devices are useful if we use them well. One advantage is that a tablet makes it easy to read and study. For example, I can find information for my project quickly. However, one disadvantage is that we can waste time on games. Also, a smart pen is expensive.",
          modelFromBook: false,
          checklist: ["I gave my opinion.", "I wrote at least one advantage and one disadvantage.", "I gave an example.", "I used However to show contrast."],
          minWords: 35 },

        { type: "write", title: "3. e. Choose your favourite idea from your classmates.", page: 39, source: "book",
          instructions: "Write one or two sentences to explain why you like it. Be ready to share with class.",
          frame: [{ label: "My favourite idea", hint: "I like …’s idea because …", lines: 2 }],
          model: "I like Fahad’s idea about robots because they help with housework and give families more free time.",
          modelFromBook: false,
          checklist: ["I named the idea.", "I explained why I like it (because …)."],
          minWords: 10 },

        { type: "activity", title: "Extra Practice: Advantage or disadvantage?", source: "extra", stage: "guided",
          instructions: "Is it an advantage or a disadvantage?", instructionsAr: "هل هي ميزة أم عيب؟",
          items: [
            { t: "mcq", q: "A tablet makes it easy to read and study.", options: ["Advantage", "Disadvantage"], answer: 0, why: "It is a good point." },
            { t: "mcq", q: "VR can hurt your eyes.", options: ["Advantage", "Disadvantage"], answer: 1, why: "It is a problem." },
            { t: "mcq", q: "A robot helps with housework.", options: ["Advantage", "Disadvantage"], answer: 0, why: "It is a good point." },
            { t: "mcq", q: "A robot can break easily.", options: ["Advantage", "Disadvantage"], answer: 1, why: "It is a problem." },
            { t: "mcq", q: "Which sentence starter shows contrast?", options: ["However, …", "For example, …", "One advantage is …"], answer: 0, why: "However shows contrast (like but)." }
          ] }
      ],
      game: { kind: "sort", title: "Pros or Cons?",
        buckets: ["Advantages 👍", "Disadvantages 👎"],
        cards: [["Fun learning trips", 0], ["Easy note-taking", 0], ["Easy to read and study", 0], ["Helps with housework", 0], ["Can hurt your eyes", 1], ["Expensive", 1], ["Wastes time on games", 1], ["Can break easily", 1]] },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the devices (VR headset, smart pen, tablet, robot). Ask which ones students use at home and whether they help with studying.",
          "Ex. 2: groups discuss and fill the table. Sample answers (answer key): VR – fun learning trips / can hurt your eyes; Smart Pen – easy note-taking / expensive; Tablet – easy to read and study / wastes time on games; Robot – helps with housework / can break easily.",
          "Ex. 3: groups make a poster (title + mind map of pros and cons), write a short paragraph and present it with the sentence starters and the Confident Speaking Checklist.",
          "Gallery tour: groups walk around and listen; each student writes one or two sentences about a favourite idea (ex. 3 e)."
        ],
        pair: ["A says a device; B gives one advantage and one disadvantage.", "Pairs practise the presentation with the checklist: eye contact, turns, sit straight."],
        group: ["Poster + gallery tour: each group presents for one minute; the class chooses the clearest presentation."],
        quick: [
          { q: "Give one advantage of a tablet.", a: "Easy to read and study. (any sensible answer)" },
          { q: "Give one disadvantage of VR.", a: "It can hurt your eyes. (any sensible answer)" },
          { q: "Which starter introduces a contrast?", a: "However, …" }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — READING ─────────────────────────
    {
      id: "u2l5", num: 5, skill: "Reading",
      title: "From Kuwait to the World: A Bright Idea",
      pages: [40, 41],
      status: "complete",
      canDo: [
        "I can analyse a written article about a Kuwaiti doctor’s invention to identify the best title, the main idea, and supporting details.",
        "I can infer the meaning of new vocabulary from contexts in a written article about innovation and healthcare to use them in meaningful contexts."
      ],
      goals: ["Read an article about a Kuwaiti inventor.", "Learn 12 new words.", "Choose the best title and find details.", "Prepare a podcast interview."],
      goalsAr: ["أقرأ مقالًا عن مخترع كويتي.", "أتعلّم 12 كلمة جديدة.", "أختار أفضل عنوان وأجد التفاصيل.", "أُحضّر مقابلة لبودكاست المدرسة."],
      warmup: {
        title: "Think, Pair, Share: 1. Look at the picture and discuss the following.",
        image: "crops/u2l5-doctor.jpg",
        emoji: "🩺",
        prompts: ["How can inventions change people’s lives?", "What do you think the man in the picture is famous for?"],
        seconds: 90
      },
      vocab: [
        { w: "achievement", pos: "noun", emoji: "🏅", def: "something good that you did with hard work", ex: "Dr. Ahmad Nabeel is a doctor whose achievements have greatly contributed to the improvement of modern healthcare.", exFromBook: true, ar: "إنجاز" },
        { w: "greatly", pos: "adverb", emoji: "📈", def: "very much", ex: "Dr. Ahmad Nabeel is a doctor whose achievements have greatly contributed to the improvement of modern healthcare.", exFromBook: true, ar: "بشكل كبير" },
        { w: "invent", pos: "verb", emoji: "💡", def: "to make something new for the first time", ex: "He is well known for inventing “Klens,” a special device that makes operations faster and safer.", exFromBook: true, ar: "يخترع" },
        { w: "junior", pos: "adjective", emoji: "🧑‍⚕️", def: "lower in rank or position", ex: "While working as a junior doctor, Dr. Ahmad Nabeel noticed that surgeons had to stop during surgery to clean the endoscope.", exFromBook: true, ar: "مبتدئ" },
        { w: "surgeon", pos: "noun", emoji: "🔪", def: "a doctor who does operations", ex: "While working as a junior doctor, Dr. Ahmad Nabeel noticed that surgeons had to stop during surgery to clean the endoscope.", exFromBook: true, ar: "جراح" },
        { w: "determination", pos: "noun", emoji: "💪", def: "not giving up when something is difficult", ex: "With great determination, he decided to develop a better solution.", exFromBook: true, ar: "إصرار وعزيمة" },
        { w: "develop", pos: "verb", emoji: "🧪", def: "to make something new or make it better step by step", ex: "With great determination, he decided to develop a better solution.", exFromBook: true, ar: "يطور" },
        { w: "worldwide", pos: "adverb", emoji: "🌍", def: "in all parts of the world", ex: "This invention has improved millions of surgeries worldwide.", exFromBook: true, ar: "على مستوى العالم" },
        { w: "proud", pos: "adjective", emoji: "😊", def: "happy about something good that you did", ex: "Dr. Ahmad Nabeel feels extremely proud that his work has made such a positive difference.", exFromBook: true, ar: "فخور" },
        { w: "honour", pos: "noun", emoji: "🎖️", def: "something that makes you feel proud and respected", ex: "He has received many awards, and he says it is a great honour to be a member of the National Academies of Science, Engineering, and Medicine.", exFromBook: true, ar: "شرف" },
        { w: "success", pos: "noun", emoji: "🏆", def: "getting the good result that you wanted", ex: "With determination, you can achieve great success.", exFromBook: true, ar: "نجاح" },
        { w: "improve", pos: "verb", emoji: "⬆️", def: "to make something better", ex: "His story teaches us that curiosity, hard work, and new ideas can improve people’s lives.", exFromBook: true, ar: "يحسن" }
      ],
      sections: [
        { type: "reading", title: "Dr. Ahmad Nabeel: An Inventor Who Is Transforming Surgery", page: 40,
          instructions: "2. Read the article about a Kuwaiti inventor, Dr. Ahmad Nabeel. Then, complete the tasks that follow.",
          paras: [
            "Dr. Ahmad Nabeel is a doctor whose achievements have greatly contributed to the improvement of modern healthcare. He is well known for inventing “*Klens*,” a special device that makes operations faster and safer.",
            "While working as a junior doctor, Dr. Ahmad Nabeel noticed that surgeons had to stop during surgery to clean the endoscope. This problem made operations longer and more difficult. With great determination, he decided to develop a better solution. He created *Klens*, [[which]] cleans the endoscope in less than a second. This invention has improved millions of surgeries worldwide.",
            "Dr. Ahmad Nabeel feels extremely proud that his work has made such a positive difference. He has received many awards, and he says it is a great honour to be a member of the National Academies of Science, Engineering, and Medicine. This organisation is respected worldwide and includes famous scientists like Albert Einstein.",
            "When asked what advice he would give to young people, Dr. Nabeel said, “Always follow your passion, work hard, and never stop learning. With determination, you can achieve great success.”",
            "His story teaches us that curiosity, hard work, and new ideas can improve people’s lives. Dr. Ahmad Nabeel’s journey inspires students to believe in their dreams and keep trying, no matter how difficult the challenge is."
          ],
          image: "crops/u2l5-endoscope.jpg",
          speaker: null,
          note: "The article is Expository. The underlined word “which” is for task 4, question 5. The picture shows an endoscope." },

        { type: "activity", title: "3. Choose the most suitable title for the interview.", page: 40, source: "book",
          instructions: "Choose the best title.", instructionsAr: "اختر العنوان الأنسب للنص.",
          items: [
            { t: "mcq", q: "Choose the most suitable title for the interview.", options: ["A Talented Inventor", "Modern Technology", "International Awards", "History of Medicine"], answer: 0,
              hint: "Who is the whole text about?", why: "The whole text is about Dr. Ahmad Nabeel and his invention, so “A Talented Inventor” is the best title." }
          ] },

        { type: "grammar", title: "Tip: Question Tags", page: 40,
          steps: [
            { title: "From the book",
              text: "We use Question Tags to check information and to ask for agreement e.g “Klens has helped many doctors, hasn’t it?”",
              textAr: "نستخدم الأسئلة الذيلية للتأكد من معلومة أو لطلب الموافقة.",
              examples: ["{s:Klens} {a:has} {v:helped} many doctors, {q:hasn’t it}?"] }
          ],
          notes: ["You will learn question tags in Lesson 6."] },

        { type: "activity", title: "4. Answer the following questions.", page: 41, source: "book",
          instructions: "Answer the questions. Use the article.", instructionsAr: "أجب عن الأسئلة من المقال.",
          items: [
            { t: "short", q: "1. What is the name of Dr. Ahmad’s invention?", model: "Klens.", keywords: [["klens"]], hint: "Read paragraph 1." },
            { t: "short", q: "2. What problem does *Klens* solve?", model: "Surgeons stop to clean the endoscope.", keywords: [["clean"], ["endoscope"]], hint: "Read paragraph 2." },
            { t: "short", q: "3. Why does Dr. Ahmad feel proud of his work?", model: "It has improved millions of surgeries.", keywords: [["improv", "difference", "surger"]], hint: "Read paragraphs 2 and 3." },
            { t: "short", q: "4. What advice does Dr. Ahmad give to young students?", model: "Follow your passion and work hard.", keywords: [["passion", "work hard", "learning"]], hint: "Read paragraph 4." },
            { t: "mcq", q: "5. The pronoun \"which\" in the 2nd paragraph refers to:", options: ["surgery", "this problem", "a better solution", "Klens"], answer: 3,
              hint: "Read the sentence: “He created Klens, which cleans the endoscope …”", why: "Klens cleans the endoscope, so “which” = Klens." }
          ] },

        { type: "activity", title: "5. Read the words from the interview. Complete the table.", page: 41, source: "book",
          instructions: "Use the glossary at the end of the book to help you complete the table with a definition, an example, a synonym, and or an antonym for each word.",
          instructionsAr: "استعن بقائمة المفردات في آخر الكتاب لتكمل الجدول: التعريف، مثال، مرادف، أو ضدّ لكل كلمة.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["Words", "Definition", "Example", "Synonym", "Antonym"],
              rows: [
                ["improve", "to make something better", { model: "Doctors improve health." }, { model: "develop" }, { model: "worsen" }],
                ["junior", { model: "lower in rank or position" }, { model: "He is a junior doctor." }, { model: "beginner" }, "senior"]
              ],
              note: "Your examples can be different." }
          ] },

        { type: "activity", title: "6. Fill in the blanks with the correct words from the list.", page: 41, source: "book",
          instructions: "Use the words: achievements – proud – surgeon – develop", instructionsAr: "أكمل الفراغات بالكلمات: achievements – proud – surgeon – develop",
          items: [
            { t: "fill", q: "a. Scientists hope to ____ a new medicine for cancer.", answer: ["develop"], bank: ["achievements", "proud", "surgeon", "develop"], why: "develop = make something new." },
            { t: "fill", q: "b. She studied for many years to become a heart ____ .", answer: ["surgeon"], bank: ["achievements", "proud", "surgeon", "develop"], why: "A heart surgeon is a doctor who does heart operations." },
            { t: "fill", q: "c. Amal felt very ____ when she finished her first walking marathon.", answer: ["proud"], bank: ["achievements", "proud", "surgeon", "develop"], why: "proud = happy about something good you did." },
            { t: "fill", q: "d. Finishing university while working full-time was one of his biggest ____ .", answer: ["achievements"], bank: ["achievements", "proud", "surgeon", "develop"], why: "“one of his biggest …” needs a plural noun: achievements." }
          ] },

        { type: "speak", title: "7. Podcast Interview", page: 41, source: "book",
          instructions: "Imagine you are a journalist preparing to interview Dr. Ahmad Nabeel for your school podcast. Follow these steps to prepare and carry out your interview.",
          steps: [
            "a. List the things you want to know about Dr. Ahmad. (e.g., childhood, school life, early inspirations, first invention attempts, failures, future goals)",
            "b. Write 3-4 interview questions.",
            "c. Practice asking and answering.",
            "d. One student will be the interviewer, and one will role-play as Dr. Ahmad Nabeel.",
            "e. Take turns asking and answering."
          ],
          dialogue: [
            { who: "Interviewer", text: "Good morning, Dr. Ahmad. Thank you for joining our school podcast." },
            { who: "Dr. Ahmad", text: "" },
            { who: "Interviewer", text: "What gave you the idea for Klens?" },
            { who: "Dr. Ahmad", text: "" }
          ],
          starters: ["Good morning, Dr. Ahmad. Welcome to …", "When did you first …?", "What was your first invention?", "Have you ever failed? What did you learn?", "What are your future goals?", "Thank you for your time."],
          note: "Remember to: greet politely. • take notes or record answers. • thank the speaker at the end. • use eye contact and speak clearly.",
          record: true },

        { type: "write", title: "7. b. Write 3-4 interview questions.", page: 41, source: "book",
          instructions: "Write 3-4 interview questions for Dr. Ahmad Nabeel. Think about: childhood, school life, early inspirations, first invention attempts, failures, future goals.",
          wordBank: ["What", "When", "Why", "How", "Have you ever", "Did you"],
          frame: [
            { label: "Question 1", hint: "What …?" },
            { label: "Question 2", hint: "When …?" },
            { label: "Question 3", hint: "Have you ever …?" },
            { label: "Question 4", hint: "What are your …?" }
          ],
          model: "What did you like to study at school?\nWhen did you first get the idea for Klens?\nHave you ever failed with an invention?\nWhat are your future goals?",
          modelFromBook: false,
          checklist: ["I wrote 3–4 questions.", "Each question ends with a question mark (?).", "I used different question words."],
          minWords: 15 },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Dr. Ahmad Nabeel noticed the problem when he was a junior doctor.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“While working as a junior doctor, Dr. Ahmad Nabeel noticed that surgeons had to stop during surgery to clean the endoscope.”" },
            { t: "mcq", q: "Klens cleans the endoscope in ten minutes.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "It cleans the endoscope “in less than a second”." },
            { t: "mcq", q: "Klens makes operations faster and safer.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“a special device that makes operations faster and safer”" },
            { t: "mcq", q: "Dr. Ahmad has never received an award.", options: ["True", "False"], answer: 1, hint: "Paragraph 3.", why: "“He has received many awards.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with: greatly – worldwide – honour – determination – success", instructionsAr: "أكمل بالكلمة المناسبة.",
          items: [
            { t: "fill", q: "It is a great ____ to meet the Amir of Kuwait.", answer: ["honour", "honor"], bank: ["greatly", "worldwide", "honour", "determination", "success"], why: "honour = something that makes you proud and respected." },
            { t: "fill", q: "This app is used ____, in more than 100 countries.", answer: ["worldwide"], bank: ["greatly", "worldwide", "honour", "determination", "success"], why: "worldwide = in all parts of the world." },
            { t: "fill", q: "Hard work is the key to ____.", answer: ["success"], bank: ["greatly", "worldwide", "honour", "determination", "success"], why: "success = a good result." },
            { t: "fill", q: "With ____, she finished the race although she was tired.", answer: ["determination"], bank: ["greatly", "worldwide", "honour", "determination", "success"], why: "determination = not giving up." },
            { t: "fill", q: "The new library has ____ helped the students.", answer: ["greatly"], bank: ["greatly", "worldwide", "honour", "determination", "success"], why: "greatly = very much." }
          ] }
      ],
      game: { kind: "spell", title: "Spell the Word", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up (ex. 1): show the photo of Dr. Ahmad Nabeel. Ask how inventions change people’s lives and what he is famous for.",
          "Pre-teach the 12 words; show the endoscope picture before reading paragraph 2.",
          "Ex. 3: a. A Talented Inventor. Ex. 4: 1 Klens; 2 surgeons had to stop to clean the endoscope; 3 it has improved millions of surgeries (his work has made a positive difference); 4 follow your passion and work hard (never stop learning); 5 d. Klens.",
          "Ex. 5 (open): improve – example Doctors improve health., synonym develop, antonym worsen; junior – lower in rank or position, He is a junior doctor., synonym beginner.",
          "Ex. 6: a develop, b surgeon, c proud, d achievements. Ex. 7: pairs prepare 3–4 questions and role-play the podcast interview."
        ],
        pair: ["Interviewer and Dr. Ahmad role play; then swap.", "A reads a sentence with a blank; B says the missing word."],
        group: ["Groups record a short “school podcast” with an introduction, 3–4 questions and a thank-you."],
        quick: [
          { q: "What is Klens?", a: "A device that cleans the endoscope in less than a second." },
          { q: "What does “which” refer to in paragraph 2?", a: "Klens." },
          { q: "What is the opposite of “junior”?", a: "senior" },
          { q: "What advice does Dr. Ahmad give?", a: "Follow your passion, work hard, and never stop learning." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — GRAMMAR ─────────────────────────
    {
      id: "u2l6", num: 6, skill: "Grammar",
      title: "Question Tags (Past Simple)",
      pages: [42, 42],
      status: "complete",
      canDo: [
        "I can use question tags with the past simple in spoken and written communication after positive and negative statements to check information or seek agreement.",
        "I can demonstrate effectively correct intonation patterns when using rising and falling tones in question tags."
      ],
      goals: ["Add a question tag to a past simple sentence.", "Positive sentence → negative tag; negative sentence → positive tag.", "Use rising and falling intonation.", "Write sentences about a science fair."],
      goalsAr: ["أضيف سؤالًا ذيليًا إلى جملة في الماضي البسيط.", "الجملة المثبتة يتبعها سؤال منفي، والجملة المنفية يتبعها سؤال مثبت.", "أستخدم نغمة الصوت الصاعدة والهابطة.", "أكتب جملًا عن معرض علمي."],
      warmup: {
        title: "1. Read the following dialogue.",
        image: "crops/u2l6-science-class.jpg",
        emoji: "🧪",
        prompts: ["Sara: This science class was amazing, wasn’t it?", "Nora: I agree! But the experiments weren’t easy, were they?", "What do Sara and Nora add at the end of their sentences? Why?"],
        seconds: 60
      },
      vocab: [
        { w: "question tag", pos: "grammar word", emoji: "🏷️", def: "a short question at the end of a sentence, like “wasn’t it?”", ex: "A Question Tag is a question at the end of a sentence that is used to check information or ask for agreement.", exFromBook: true, ar: "سؤال ذيلي" },
        { w: "agreement", pos: "noun", emoji: "🤝", def: "when people have the same opinion", ex: "A Question Tag is a question at the end of a sentence that is used to check information or ask for agreement.", exFromBook: true, ar: "موافقة" },
        { w: "intonation", pos: "noun", emoji: "🎵", def: "the way your voice goes up and down when you speak", ex: "Write (↗) if the tag has rising intonation or (↘) if it has falling intonation.", exFromBook: true, ar: "نغمة الصوت (التنغيم)" },
        { w: "rising", pos: "adjective", emoji: "↗️", def: "going up", ex: "Rising intonation: not sure about something.", exFromBook: true, ar: "صاعدة" },
        { w: "falling", pos: "adjective", emoji: "↘️", def: "going down", ex: "Falling intonation: sure about something /confirming", exFromBook: true, ar: "هابطة" }
      ],
      sections: [
        { type: "grammar", title: "Grammar: Question Tags (Past Simple)", page: 42,
          steps: [
            { title: "Step 1 — From the book: the dialogue",
              text: "Read the following dialogue.",
              textAr: "اقرأ الحوار التالي.",
              examples: ["Sara: This science class {v:was} amazing, {q:wasn’t it}?", "Nora: I agree! But the experiments {n:weren’t} easy, {q:were they}?"] },
            { title: "Step 2 — What is a question tag? (from the book)",
              text: "A Question Tag is a question at the end of a sentence that is used to check information or ask for agreement. Positive sentence → negative tag. Negative sentence → positive tag.",
              textAr: "السؤال الذيلي سؤال قصير في آخر الجملة نستخدمه للتأكد من معلومة أو لطلب الموافقة. الجملة المثبتة يتبعها سؤال منفي، والجملة المنفية يتبعها سؤال مثبت.",
              examples: ["The class {v:was} amazing, {q:wasn’t it}?", "Dalal {v:finished} her project, {q:didn’t she}?", "The gifts {n:weren’t} wrapped, {q:were they}?", "The players {n:didn't} win the match, {q:did they}?"] },
            { title: "Step 3 — Which helping verb?", source: "extra",
              text: "If the sentence has was or were, use was / were in the tag. If the sentence has another past simple verb (finished, won, went), use did / didn’t in the tag.",
              textAr: "إذا كان في الجملة was أو were نستخدمهما في السؤال الذيلي، وإذا كان فيها فعل ماضٍ آخر نستخدم did أو didn’t.",
              examples: ["The weather {n:wasn’t} hot yesterday, {q:was it}?", "We {v:travelled} to Dubai last weekend, {q:didn’t we}?"] },
            { title: "Step 4 — Which pronoun?", source: "extra",
              text: "The tag uses a pronoun, not a name: Dalal → she, Ali → he, the class → it, the players → they. You → you, we → we.",
              textAr: "في السؤال الذيلي نستخدم ضميرًا وليس اسمًا: Dalal ← she، Ali ← he، the class ← it.",
              examples: ["{s:Ali} won the reading award, {q:didn’t he}?", "{s:You} didn’t go to the cinema last night, {q:did you}?"] },
            { title: "Step 5 — Pronunciation (from the book)",
              text: "Rising intonation (↗): not sure about something. Falling intonation (↘): sure about something /confirming.",
              textAr: "النغمة الصاعدة: عندما لا نكون متأكدين. النغمة الهابطة: عندما نكون متأكدين ونريد التأكيد.",
              examples: ["↗ She studied in England, {q:didn't she}?", "↘ We met before, {q:didn't we}?"] },
            { title: "Step 6 — Be careful!", source: "extra",
              text: "Use a pronoun in the tag. Match the helping verb. Do not use two negatives or two positives.",
              textAr: "استخدم الضمير في السؤال الذيلي، واختر الفعل المساعد المناسب، ولا تجعل الجملة والسؤال كليهما منفيين أو مثبتين.",
              examples: ["✗ Dalal finished her project, didn’t {n:Dalal}? → ✓ {q:didn’t she}?", "✗ The class was amazing, {n:didn’t it}? → ✓ {q:wasn’t it}?", "✗ They didn’t win, {n:didn’t they}? → ✓ {q:did they}?"] }
          ],
          table: {
            head: ["Sentence", "Question Tag"],
            rows: [
              ["Positive: The class was amazing,", "Negative: wasn’t it?"],
              ["Positive: Dalal finished her project,", "Negative: didn’t she?"],
              ["Negative: The gifts weren’t wrapped,", "Positive: were they?"],
              ["Negative: The players didn't win the match,", "Positive: did they?"]
            ]
          },
          worked: {
            q: "Complete: The students cleaned the lab, ____?",
            steps: [
              "The sentence is positive → the tag is negative.",
              "“cleaned” is a past simple verb (not was / were) → use didn’t.",
              "The students → they.",
              "didn’t + they → didn’t they?"
            ],
            a: "{s:The students} {v:cleaned} the lab, {q:didn’t they}?"
          },
          notes: ["Steps 3, 4 and 6 are extra help. The book gives the dialogue, the definition, the table and the pronunciation box."] },

        { type: "activity", title: "2. Work in pairs to complete the sentences with the correct question tags.", page: 42, source: "book", stage: "guided",
          instructions: "Write the question tag. Number 1 is the example.",
          instructionsAr: "اكتب السؤال الذيلي المناسب. رقم 1 مثال.",
          items: [
            { t: "fill", q: "1. The weather wasn’t hot yesterday, ____? (example)", answer: ["was it"], hint: "This is the example in the book.", why: "Negative sentence with wasn’t → positive tag: was it?" },
            { t: "fill", q: "2. You didn’t go to the cinema last night, ____?", answer: ["did you"], hint: "Negative sentence → positive tag.", why: "didn’t → did; you → you: did you?" },
            { t: "fill", q: "3. We travelled to Dubai last weekend, ____?", answer: ["didn’t we"], hint: "Positive past simple sentence → didn’t + pronoun.", why: "travelled (past simple, positive) → didn’t we?" }
          ] },

        { type: "write", title: "3. Write 2-3 sentences about a science fair using question tags.", page: 42, source: "book",
          instructions: "Write 2-3 sentences about a science fair. End each sentence with a question tag.",
          image: "crops/u2l6-science-fair.jpg",
          example: "The science fair was interesting, wasn’t it?",
          wordBank: ["wasn’t it", "weren’t they", "didn’t he", "didn’t we", "was it", "did they"],
          frame: [
            { label: "1.", hint: "The projects were …, …?" },
            { label: "2.", hint: "Ali didn’t …, …?" },
            { label: "3.", hint: "We learned …, …?" }
          ],
          model: "The projects were amazing, weren’t they?\nAli didn’t win a prize, did he?\nWe learned a lot, didn’t we?",
          modelLabel: "Sample answer (from the answer key; your sentences can be different)",
          modelFromBook: false,
          checklist: ["Each sentence is in the past simple.", "Positive sentence → negative tag; negative sentence → positive tag.", "I used a pronoun in the tag.", "I put a comma before the tag and a question mark at the end."],
          minWords: 15 },

        { type: "listen", title: "4. Pronunciation: Listen to these sentences.", page: 42, source: "book",
          track: "2.2",
          needsAudio: true,
          instructions: "Track 2.2. Listen to these sentences. Write (↗) if the tag has rising intonation or (↘) if it has falling intonation. Rising intonation: not sure about something. Falling intonation: sure about something /confirming.",
          items: [
            { t: "choose", q: "He was your maths teacher, wasn't he?", options: ["↗ rising", "↘ falling"], answer: 0, keyed: true, why: "Answer key: ↗ (rising)." },
            { t: "choose", q: "Dana didn't come to school yesterday, did she?", options: ["↗ rising", "↘ falling"], answer: 1, keyed: true, why: "Answer key: ↘ (falling)." },
            { t: "choose", q: "Ali won the reading award, didn't he?", options: ["↗ rising", "↘ falling"], answer: 0, keyed: true, why: "Answer key: ↗ (rising)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the tag", source: "extra", stage: "guided",
          instructions: "Choose the correct question tag.", instructionsAr: "اختر السؤال الذيلي الصحيح.",
          items: [
            { t: "choose", q: "The test was easy, (wasn’t it / didn’t it)?", options: ["wasn’t it", "didn’t it"], answer: 0, why: "was → wasn’t it?" },
            { t: "choose", q: "Fahad won the race, (didn’t he / did he)?", options: ["didn’t he", "did he"], answer: 0, why: "Positive sentence → negative tag: didn’t he?" },
            { t: "choose", q: "The robots weren’t expensive, (were they / weren’t they)?", options: ["were they", "weren’t they"], answer: 0, why: "Negative sentence → positive tag: were they?" },
            { t: "choose", q: "Maryam didn’t visit the museum, (did she / didn’t she)?", options: ["did she", "didn’t she"], answer: 0, why: "Negative sentence → positive tag: did she?" },
            { t: "choose", q: "You saw the robot show, (didn’t you / weren’t you)?", options: ["didn’t you", "weren’t you"], answer: 0, why: "saw (past simple, not was/were) → didn’t you?" },
            { t: "choose", q: "Your brother was at the fair, (wasn’t he / wasn’t your brother)?", options: ["wasn’t he", "wasn’t your brother"], answer: 0, why: "The tag uses a pronoun: he." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct question tag.", instructionsAr: "يوجد خطأ في السؤال الذيلي. اكتب السؤال الصحيح.",
          items: [
            { t: "fix", q: "The class was amazing, {didn’t it}?", answer: ["wasn’t it"], hint: "The sentence has was.", why: "was → wasn’t it?" },
            { t: "fix", q: "Dalal finished her project, {didn’t Dalal}?", answer: ["didn’t she"], hint: "Use a pronoun.", why: "Dalal → she: didn’t she?" },
            { t: "fix", q: "They didn’t win the match, {didn’t they}?", answer: ["did they"], hint: "Negative sentence → positive tag.", why: "didn’t → did they?" },
            { t: "fix", q: "The gifts weren’t wrapped, {weren’t they}?", answer: ["were they"], hint: "Negative sentence → positive tag.", why: "weren’t → were they?" },
            { t: "short", q: "Write one sentence about your last school trip with a question tag.", model: "We visited the Scientific Center, didn’t we?", open: true, hint: "Past simple sentence + , + tag?" }
          ] }
      ],
      game: { kind: "quiz", title: "Tag Challenge",
        items: [
          { t: "choose", q: "Ahmad was late, ____?", options: ["wasn’t he", "didn’t he"], answer: 0, why: "was → wasn’t he?" },
          { t: "choose", q: "The girls won the prize, ____?", options: ["didn’t they", "did they"], answer: 0, why: "Positive → negative tag: didn’t they?" },
          { t: "choose", q: "You didn’t call me, ____?", options: ["did you", "didn’t you"], answer: 0, why: "Negative → positive tag: did you?" },
          { t: "choose", q: "The film wasn’t long, ____?", options: ["was it", "wasn’t it"], answer: 0, why: "Negative → positive tag: was it?" },
          { t: "choose", q: "We built a robot, ____?", options: ["didn’t we", "weren’t we"], answer: 0, why: "built (past simple) → didn’t we?" },
          { t: "choose", q: "The students were happy, ____?", options: ["weren’t they", "didn’t they"], answer: 0, why: "were → weren’t they?" }
        ] },
      teacher: {
        notes: [
          "Warm-up: read Sara and Nora’s dialogue. Ask: What do they add at the end? (wasn’t it? / were they?) Why? (to ask for agreement).",
          "Teach the book’s table: positive sentence → negative tag; negative sentence → positive tag. was/were stay; other past verbs → did/didn’t; use a pronoun.",
          "Ex. 2: 1 was it (example), 2 did you, 3 didn’t we. Ex. 3 (open): the book’s example is “The science fair was interesting, wasn’t it?”; answer key samples: The projects were amazing, weren’t they? / Ali didn’t win a prize, did he? / We learned a lot, didn’t we?",
          "Ex. 4: play track 2.2 (book QR code; not inside the app). Answer key: 1 ↗ rising, 2 ↘ falling, 3 ↗ rising. Model both tunes yourself: rising = not sure, falling = sure / confirming."
        ],
        pair: ["A says a past simple sentence; B adds the tag.", "A says a tag with rising or falling intonation; B says “not sure” or “sure”."],
        group: ["Science fair chat: groups write 3 tagged sentences about a real school event and read them with the right tune."],
        quick: [
          { q: "Add a tag: Dalal finished her project, …?", a: "didn’t she?" },
          { q: "Add a tag: The gifts weren’t wrapped, …?", a: "were they?" },
          { q: "Which intonation shows you are not sure?", a: "Rising intonation." },
          { q: "Add a tag: The class was amazing, …?", a: "wasn’t it?" }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u2l7", num: 7, skill: "Writing",
      title: "Living Smart: Pros and Cons of Daily Device Use",
      pages: [43, 44],
      status: "complete",
      canDo: [
        "I can organise ideas about the advantages and disadvantages of smart device use.",
        "I can use linking words to connect ideas logically within a paragraph.",
        "I can construct a coherent expository report presenting the pros and cons of using smart devices following the writing process."
      ],
      goals: ["List advantages and disadvantages of smart devices.", "Use the linkers: for example, in addition, however, in conclusion.", "Plan a report with an outline.", "Write a two-paragraph report."],
      goalsAr: ["أذكر مزايا الأجهزة الذكية وعيوبها.", "أستخدم أدوات الربط: for example و in addition و however و in conclusion.", "أخطّط لتقرير باستخدام مخطط.", "أكتب تقريرًا من فقرتين."],
      linkers: ["in conclusion", "for example", "in addition", "however"],
      warmup: {
        title: "1. Discuss the advantages and disadvantages of using smart devices every day.",
        image: "crops/u2l7-devices.jpg",
        emoji: "⌚",
        prompts: ["Look at the pictures. What are the advantages of smart devices?", "What are the disadvantages?"],
        seconds: 90
      },
      vocab: [
        { w: "in conclusion", pos: "linker", emoji: "🏁", def: "used to start the last part, to sum up your ideas", ex: "In conclusion, smart devices help us, but we must use them wisely.", exFromBook: false, ar: "في الختام" },
        { w: "for example", pos: "linker", emoji: "👉", def: "used to give an example", ex: "Smart devices help us learn. For example, we can watch science videos.", exFromBook: false, ar: "على سبيل المثال" },
        { w: "in addition", pos: "linker", emoji: "➕", def: "used to add another idea", ex: "Smart watches track our health. In addition, they show the time.", exFromBook: false, ar: "بالإضافة إلى ذلك" },
        { w: "however", pos: "linker", emoji: "↔️", def: "a linking word that means but and shows contrast", ex: "I was tired. However, I finished my work.", exFromBook: true, ar: "ومع ذلك / لكن" },
        { w: "privacy", pos: "noun", emoji: "🔒", def: "keeping your personal information safe from other people", ex: "Safe online practices help protect your privacy and keep your information secure.", exFromBook: true, ar: "الخصوصية" }
      ],
      sections: [
        { type: "activity", title: "2. Fill in the table with your ideas.", page: 43, source: "book",
          instructions: "Write three advantages and three disadvantages of smart devices. Use the pictures to help you.",
          instructionsAr: "اكتب ثلاث مزايا وثلاثة عيوب للأجهزة الذكية. استعن بالصور.",
          image: "crops/u2l7-devices.jpg",
          items: [
            { t: "table", q: "Fill in the table with your ideas.", open: true,
              head: ["Advantages", "Disadvantages"],
              rows: [
                [{ model: "They track health and fitness." }, { model: "People use them too much." }],
                [{ model: "They help students with learning." }, { model: "They risk our privacy." }],
                [{ model: "They control smart home devices." }, { model: "They lead to poor sleep." }]
              ] }
          ] },

        { type: "activity", title: "3. Fill in the gaps with the missing linking words from the list.", page: 43, source: "book",
          instructions: "Use: in conclusion, for example, in addition, however. Read the whole paragraph first.",
          instructionsAr: "أكمل الفراغات بأدوات الربط: in conclusion, for example, in addition, however. اقرأ الفقرة كاملة أولًا.",
          items: [
            { t: "fill", q: "Using the internet safely is important. ____, you should never share your personal details online, such as your password or home address.", answer: ["For example"], bank: ["In conclusion", "For example", "In addition", "However"], hint: "The sentence gives an example of being safe.", why: "It gives an example: For example." },
            { t: "fill", q: "____, make sure your passwords are strong and hard to guess.", answer: ["In addition"], bank: ["In conclusion", "For example", "In addition", "However"], hint: "This sentence adds another tip.", why: "It adds another idea: In addition." },
            { t: "fill", q: "____, even with strong passwords, you must also remember to always log out of websites when you finish using them.", answer: ["However"], bank: ["In conclusion", "For example", "In addition", "However"], hint: "“even with strong passwords” shows a contrast.", why: "Strong passwords are not enough: However shows contrast." },
            { t: "fill", q: "____, safe online practices help protect your privacy and keep your information secure.", answer: ["In conclusion"], bank: ["In conclusion", "For example", "In addition", "However"], hint: "This is the last sentence. It sums up.", why: "The last sentence sums up the paragraph: In conclusion." }
          ] },

        { type: "grammar", title: "Tip: However", page: 43,
          steps: [
            { title: "From the book",
              text: "“However” is a linking word that means but and shows contrast.",
              textAr: "However أداة ربط بمعنى «لكن» وتدلّ على التناقض.",
              examples: ["I was tired. {c:However}, I finished my work."] }
          ] },

        { type: "write", title: "4. a. Complete the following outline with your ideas.", page: 44, source: "book",
          instructions: "While smart devices make life easier, they also create new challenges that we need to understand. Plan and write a two-paragraph report about the advantages and disadvantages of using smart devices in daily life. a. Complete the following outline with your ideas.",
          wordBankLabel: "Linker Bank",
          wordBank: ["in conclusion", "for example", "in addition", "however", "also"],
          frame: [
            { label: "Introduction", hint: "Smart devices are …" },
            { label: "Paragraph 1: The advantages of using smart devices — Topic sentence", hint: "Smart devices have …" },
            { label: "Paragraph 1 — Supporting details (at least two)", hint: "For example, … They also …", lines: 3 },
            { label: "Paragraph 1 — Concluding sentence", hint: "In short, …" },
            { label: "Paragraph 2: The disadvantages of using smart devices — Topic sentence", hint: "However, …" },
            { label: "Paragraph 2 — Supporting details (at least two)", hint: "For example, … They can also …", lines: 3 },
            { label: "Paragraph 2 — Concluding sentence", hint: "Therefore, …" },
            { label: "Conclusion", hint: "In conclusion, …" }
          ],
          model: "Introduction: Smart devices are part of our daily life, and they have good and bad sides.\nParagraph 1 – Topic sentence: Smart devices have many advantages.\nSupporting details: For example, they help us learn new things. They also track our health and fitness.\nConcluding sentence: In short, they make our life easier.\nParagraph 2 – Topic sentence: However, smart devices have some disadvantages.\nSupporting details: For example, people use them too much and waste time. They can also lead to poor sleep.\nConcluding sentence: Therefore, we should use them carefully.\nConclusion: In conclusion, smart devices are useful if we use them wisely.",
          modelLabel: "Sample outline (from the answer key; your ideas can be different)",
          modelFromBook: false,
          checklist: ["I wrote an introduction.", "Each paragraph has a topic sentence, two supporting details and a concluding sentence.", "I wrote a conclusion."],
          minWords: 60 },

        { type: "write", title: "4. b. Use the ideas in your plan to write the report in your notebook.", page: 44, source: "book",
          instructions: "b. Use the ideas in your plan to write the report in your notebook. c. Use the following checklist to edit your writing.",
          wordBankLabel: "Linker Bank",
          wordBank: ["in conclusion", "for example", "in addition", "however"],
          frame: [
            { label: "Introduction", hint: "Smart devices are part of our daily life …", lines: 2 },
            { label: "Paragraph 1: advantages", hint: "Smart devices have many advantages. For example, …", lines: 5 },
            { label: "Paragraph 2: disadvantages", hint: "However, smart devices have some disadvantages. …", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Smart devices are part of our daily life, and they have good and bad sides.\n\nSmart devices have many advantages. For example, they help us learn new things. They also track our health and fitness. In short, they make our life easier.\n\nHowever, smart devices have some disadvantages. For example, people use them too much and waste time. They can also lead to poor sleep. Therefore, we should use them carefully.\n\nIn conclusion, smart devices are useful if we use them wisely.",
          modelLabel: "Model report (built from the answer key’s outline; not book text)",
          modelFromBook: false,
          bookNote: "ATTENTION: Use AI wisely and responsibly.",
          bookChecklist: [
            "begin with a clear introduction about smart devices.",
            "write two paragraphs: one about advantages and one about disadvantages.",
            "include a clear topic sentence in each paragraph.",
            "give at least two supporting ideas with examples in each paragraph.",
            "use linking words (e.g. in addition, however, for example, in conclusion).",
            "write full sentences with correct grammar and spelling.",
            "end each paragraph with a concluding sentence.",
            "write a final conclusion that summarises your ideas.",
            "use AI tools wisely and responsibly to improve your writing."
          ],
          minWords: 70 },

        { type: "activity", title: "Extra Practice: Which linker?", source: "extra", stage: "guided",
          instructions: "Choose the best linking word.", instructionsAr: "اختر أداة الربط المناسبة.",
          items: [
            { t: "choose", q: "Tablets help us study. (However / For example), we can read e-books on them.", options: ["However", "For example"], answer: 1, why: "The second sentence gives an example." },
            { t: "choose", q: "Smart watches track our health. (In addition / In conclusion), they show messages.", options: ["In addition", "In conclusion"], answer: 0, why: "It adds another advantage." },
            { t: "choose", q: "Phones are useful. (However / For example), they can cause poor sleep.", options: ["However", "For example"], answer: 0, why: "It shows contrast: a good point, then a bad point." },
            { t: "choose", q: "(In conclusion / For example), smart devices are good if we use them wisely.", options: ["In conclusion", "For example"], answer: 0, why: "It sums up the report at the end." },
            { t: "mcq", q: "Which sentence is a good topic sentence for paragraph 2?", options: ["However, smart devices have some disadvantages.", "They can also lead to poor sleep.", "In short, they make our life easier."], answer: 0, why: "A topic sentence gives the main idea of the paragraph." }
          ] }
      ],
      game: { kind: "sort", title: "Advantage or Disadvantage?",
        buckets: ["Advantages 👍", "Disadvantages 👎"],
        cards: [["Track health and fitness", 0], ["Help with learning", 0], ["Make housework easier", 0], ["Control smart home devices", 0], ["Cause overuse", 1], ["Risk privacy", 1], ["Lead to poor sleep", 1], ["Make mistakes", 1]] },
      teacher: {
        notes: [
          "Warm-up (ex. 1): use the two picture boxes (Advantages / Disadvantages of Smart Devices). Students explain each picture.",
          "Ex. 2: answer key samples – They track health and fitness. / They help students with learning. / They control smart home devices. – People use them too much. / They risk our privacy. / They lead to poor sleep.",
          "Ex. 3: For example – In addition – However – In conclusion. Read the “However” tip box.",
          "Ex. 4: students complete the outline (introduction, two paragraphs with topic sentence, two details and a concluding sentence, conclusion), write the report in their notebooks, then edit it with the Remember to checklist.",
          "Note: the printed number on the second page of this lesson is 43 (it should be 44)."
        ],
        pair: ["Pairs swap outlines and check: topic sentence? two details? concluding sentence?", "A says an advantage; B answers with “However, …” and a disadvantage."],
        group: ["Groups build a class outline on the board, then each student writes the report."],
        quick: [
          { q: "Which linker gives an example?", a: "For example." },
          { q: "Which linker shows contrast?", a: "However." },
          { q: "How many supporting details in each paragraph (book)?", a: "At least two." },
          { q: "How should the report end?", a: "With a final conclusion that summarises your ideas (In conclusion, …)." }
        ]
      }
    }
  ]
});

// Unit 2 — School & Responsibility (Book 7A, printed pages 31–43)
BOOK.addUnit({
  id: "u2", num: 2, title: "School & Responsibility",
  pages: [31, 43],
  cover: 31,
  status: "complete",
  outcomes: {
    listening: [
      "Identify main points and specific details from spoken texts related to everyday rules and responsibilities.",
      "Recall instructions and advice clearly presented in conversations or announcements.",
      "Explain reasons behind given responsibilities or rules from different listening materials.",
      "Interpret speakers’ intentions, feelings, or attitudes about behaving respectfully in public places."
    ],
    speaking: [
      "Express simple advice and opinions clearly using appropriate modal verbs.",
      "Describe personal responsibilities and obligations accurately in familiar contexts.",
      "Discuss structured ideas about behaviour, responsibilities, and values using suitable vocabulary.",
      "Perform short role-plays effectively demonstrating advice and obligations within a clear social context."
    ],
    reading: [
      "Recognise key information and main ideas from texts about personal growth and social responsibilities.",
      "Identify explicit and implicit meanings within texts describing personal values, attitudes, and actions.",
      "Analyse relationships between ideas presented in descriptive texts about personal experiences.",
      "Infer the writer’s viewpoint, attitude, or feelings in texts about responsible and kind actions."
    ],
    writing: [
      "Write simple, structured descriptive sentences using appropriate modal verbs to express obligations and advice.",
      "Compose organised paragraphs clearly outlining responsibilities, behaviours, and associated outcomes.",
      "Develop logically structured reports with clear introductions, supporting details, and effective conclusions."
    ]
  },
  lessons: [

    // ───────────────────────────── LESSON 1 — READING ─────────────────────────────
    {
      id: "u2l1", num: 1, skill: "Reading",
      title: "From My First Day Until Today",
      pages: [34, 35],
      status: "complete",
      canDo: ["I can analyse explicit and implicit details clearly from texts about personal experiences, growth, and responsibilities at school."],
      goals: ["Read a blog post about school life.", "Learn 11 new words.", "Answer questions about the text.", "Write a short letter to my younger self."],
      goalsAr: ["أقرأ تدوينة عن الحياة المدرسية.", "أتعلّم ١١ كلمة جديدة.", "أجيب عن أسئلة حول النص.", "أكتب رسالة قصيرة إلى نفسي عندما كنتُ أصغر."],
      warmup: {
        title: "Before You Read",
        image: "crops/u2l1-warmup.jpg",
        emoji: "🎒",
        prompts: ["What do you remember about your first day at school?", "What was your favourite subject in Grade 5?"],
        seconds: 90
      },
      vocab: [
        { w: "nervous", pos: "adjective", emoji: "😬", def: "worried or afraid of something", ex: "I was nervous on my first day at school.", exFromBook: false, ar: "متوتّر", ipa: "/ˈnɜː.vəs/" },
        { w: "responsible", pos: "adjective", emoji: "🧑‍🏫", def: "having the duty of taking care of something", ex: "I have become more responsible.", exFromBook: true, ar: "مسؤول", ipa: "/rɪˈspɑn·sə·bəl/" },
        { w: "organised", pos: "adjective", emoji: "🗂️", def: "arranged according to a particular system", ex: "My time is more organised.", exFromBook: true, ar: "منظَّم", ipa: "/ˈɔː.ɡə.naɪzd/" },
        { w: "discussion", pos: "noun", emoji: "🗣️", def: "talking about something with other people and telling them your ideas", ex: "We have a discussion in class every week.", exFromBook: false, ar: "نقاش", ipa: "/dɪˈskʌʃ.ən/" },
        { w: "regularly", pos: "adverb", emoji: "📅", def: "doing the same thing or going to the same place often", ex: "I also have to study regularly for exams.", exFromBook: true, ar: "بانتظام", ipa: "/ˈreɡ.jə.lə.li/" },
        { w: "confident", pos: "adjective", emoji: "😎", def: "sure of yourself or your abilities", ex: "I am more confident now.", exFromBook: true, ar: "واثق بنفسه", ipa: "/ˈkɒn.fɪ.dənt/" },
        { w: "cheer", pos: "verb", emoji: "📣", def: "to give a loud shout of approval or encouragement for someone", ex: "We cheer our team at every match.", exFromBook: false, ar: "يشجّع / يهتف", ipa: "/tʃɪər/" },
        { w: "value", pos: "verb", emoji: "💎", def: "to consider something important", ex: "I have also learned to value myself.", exFromBook: true, ar: "يُقدِّر", ipa: "/ˈvæl.juː/" },
        { w: "challenge", pos: "noun", emoji: "🧗", def: "something that needs a lot of effort to do successfully", ex: "Every challenge is a chance to improve.", exFromBook: true, ar: "تحدٍّ", ipa: "/ˈtʃæl.ɪndʒ/" },
        { w: "hard", pos: "adverb", emoji: "💪", def: "with a lot of effort or force", ex: "I work hard and support my friends.", exFromBook: true, ar: "بجدّ", ipa: "/hɑːd/" },
        { w: "respectful", pos: "adjective", emoji: "🙏", def: "showing politeness or honour to someone or something", ex: "Be respectful to your teachers.", exFromBook: false, ar: "محترِم", ipa: "/rɪˈspekt.fəl/" }
      ],
      sections: [
        { type: "reading", title: "From My First Day Until Today", page: 34, source: "book",
          instructions: "Read the blog post and do the tasks that follow.",
          instructionsAr: "اقرأ التدوينة ثم أجب عن الأسئلة.",
          speaker: "www.i-am-confident.blog.com",
          paras: [
            "I still remember my first day at primary school. I was shy and quiet. I was nervous, I did not know where to go or what to do. However, my teacher welcomed me warmly, and I began to learn new things. At that time, I did not use to have many responsibilities. We used to draw pictures, sing songs, and play most of the time.",
            "Now, I am in Grade 7. My life at school has changed a lot. I have become more responsible, and my time is more organised. I now write short reports, take part in group projects, and have discussions. I also have to study regularly for exams and review lessons on my own. In addition, I help my classmates and respect their ideas, even if they are different from mine. They sometimes ask me for help, and I am always happy to support [[them]]. I am more confident now and even cheer others who go through hard times. I have learned that doing your best is more important than being perfect.",
            "I have also learned to value myself. I do not compare myself to others. Instead, I try to be better than I was yesterday. When I make a mistake, I think, learn, and try again. Every challenge is a chance to improve.",
            "Finally, I believe that if I were not responsible, I would not feel so proud of myself. I work hard and support my friends. I truly enjoy learning because school teaches us how to grow as kind, respectful people."
          ] },
        { type: "activity", title: "a. Choose the correct answer.", page: 35, source: "book", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. Choose another suitable title for the blog post:", options: ["my Favourite Teacher", "how I Spend My Free Time", "my Journey of Growth at School", "rules and Schools"], answer: 2,
              hint: "What is the whole text about? First day → Grade 7.", why: "The writer tells how he changed and grew from his first day until Grade 7." },
            { t: "mcq", q: "2. What does the underlined word “them” in the 2nd paragraph refer to?", options: ["ideas", "lessons", "projects", "classmates"], answer: 3,
              hint: "Who asks the writer for help?", why: "“They sometimes ask me for help, and I am always happy to support them.” — the classmates ask for help." }
          ] },
        { type: "activity", title: "b. Answer the following questions.", page: 35, source: "book", stage: "independent",
          instructions: "Answer the following questions.", instructionsAr: "أجب عن الأسئلة التالية.",
          items: [
            { t: "short", q: "1. How did the teacher help the student on the first day?", model: "The teacher welcomed the student warmly, and the student began to learn new things.",
              keywords: [["welcom"], ["warm"]], hint: "Read paragraph 1: “However, my teacher …”" },
            { t: "short", q: "2. What important lesson can we learn from the passage?", model: "Doing your best is more important than being perfect. (Also: every challenge is a chance to improve.)",
              keywords: [["best", "challenge", "improve", "mistake", "responsib"]], hint: "Look for “I have learned that …” in paragraph 2, or read paragraph 3." }
          ] },
        { type: "activity", title: "Match the following words from the passage to their meanings.", page: 35, source: "book", stage: "guided",
          instructions: "Match each word to its meaning. Use the glossary at the end of the book to check your answers.", instructionsAr: "صِل كل كلمة بمعناها.",
          items: [
            { t: "match", q: "Match the words to their meanings.",
              pairs: [
                ["a. confident", "sure of yourself or your abilities"],
                ["b. cheer", "to give a loud shout of approval or encouragement for someone"],
                ["c. regularly", "by doing the same thing or going to the same place often"],
                ["d. challenge", "something needing great mental or physical effort in order to be done successfully"]
              ],
              hint: "Find each word in the text and read the sentence around it.", why: "These meanings are the same as the glossary (pages 74–78)." }
          ] },
        { type: "write", title: "A Letter to My Younger Self", page: 35, source: "book",
          instructions: "Imagine you could write a letter to yourself when you were in Grade 5, what advice would you give about being responsible, confident, and helping others?",
          instructionsAr: "تخيّل أنك تكتب رسالة إلى نفسك عندما كنت في الصف الخامس. ما النصيحة التي تقدّمها عن المسؤولية والثقة بالنفس ومساعدة الآخرين؟",
          wordBank: ["Don’t worry if…", "Try to …", "Help your ….", "Believe in yourself …"],
          frame: [
            { label: "Dear …", hint: "Write your name: Dear (your name)," },
            { label: "Advice 1 – being responsible", hint: "Try to … / Don’t worry if …" },
            { label: "Advice 2 – being confident", hint: "Believe in yourself …" },
            { label: "Advice 3 – helping others", hint: "Help your …" },
            { label: "Sign and date", hint: "Sign: (your name)  Date: (today)" }
          ],
          model: "Dear Ali,\nDon’t worry if you feel nervous on your first day. Try to study regularly and do your homework every day. Believe in yourself and ask questions in class. Help your classmates when they have a problem, and respect their ideas. Every challenge is a chance to improve!\nSign: Ali   Date: 29/10/2026",
          modelFromBook: false,
          checklist: ["I started with “Dear …”.", "I gave advice about being responsible, confident, and helping others.", "I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I signed and dated my letter."],
          minWords: 30 },
        { type: "activity", title: "Extra Practice: True or False?", page: 34, source: "extra", stage: "guided",
          instructions: "Read the text again. Is it true or false?", instructionsAr: "اقرأ النص مرة أخرى. هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "choose", q: "On the first day, the writer was shy and quiet.", options: ["True", "False"], answer: 0, why: "Paragraph 1: “I was shy and quiet.”" },
            { t: "choose", q: "In primary school, the writer had many responsibilities.", options: ["True", "False"], answer: 1, why: "Paragraph 1: “I did not use to have many responsibilities.”" },
            { t: "choose", q: "Now the writer takes part in group projects.", options: ["True", "False"], answer: 0, why: "Paragraph 2: “take part in group projects”." },
            { t: "choose", q: "The writer compares himself to others.", options: ["True", "False"], answer: 1, why: "Paragraph 3: “I do not compare myself to others.”" },
            { t: "choose", q: "When the writer makes a mistake, he tries again.", options: ["True", "False"], answer: 0, why: "Paragraph 3: “I think, learn, and try again.”" }
          ] },
        { type: "activity", title: "Extra Practice: Complete with a new word.", page: 34, source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "fill", q: "I was ____ on my first day. I did not know where to go.", answer: ["nervous"], bank: ["nervous", "confident", "organised"], why: "He did not know what to do, so he was worried: nervous." },
            { t: "fill", q: "My time is more ____ now. I have a plan for every day.", answer: ["organised"], bank: ["organised", "nervous", "hard"], why: "A plan means your time is arranged: organised." },
            { t: "fill", q: "I study ____ for exams every day.", answer: ["regularly", "hard"], bank: ["regularly", "respectful", "cheer"], why: "Studying every day = studying regularly. (“hard” is also correct English.)" },
            { t: "fill", q: "We ____ our friends at the football match.", answer: ["cheer"], bank: ["cheer", "value", "challenge"], why: "We shout to encourage them: cheer." },
            { t: "fill", q: "Be ____ to your teachers and classmates.", answer: ["respectful"], bank: ["respectful", "regularly", "discussion"], why: "After “be” we need an adjective: respectful." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab", source: "extra" },
      teacher: {
        notes: [
          "Start with the warm-up picture and the two Before You Read questions (2 minutes).",
          "Pre-teach the 11 words with the vocab cards; ask students to find each bold word in the blog.",
          "Read paragraph by paragraph. After paragraph 1 ask: How did he feel? After paragraph 2: What does he do now?",
          "Do Task 3a/3b in pairs, then Task 4 with the glossary. Weak students do the True/False extra first.",
          "Finish with the letter (Task 5). Use the “Things you can say” phrases on the board."
        ],
        pair: ["Partner A reads a sentence from the blog; Partner B says: past (first day) or now (Grade 7).", "Swap letters to your younger self and underline one good piece of advice."],
        group: ["Groups make a poster: “Then and Now” – three things in primary school and three things in Grade 7."],
        quick: [
          { q: "How did the writer feel on his first day?", a: "Shy, quiet and nervous." },
          { q: "Who does “them” refer to in paragraph 2?", a: "His classmates." },
          { q: "What does “confident” mean?", a: "Sure of yourself or your abilities." },
          { q: "What is more important than being perfect?", a: "Doing your best." }
        ]
      }
    },

    // ───────────────────────────── LESSON 2 — GRAMMAR ─────────────────────────────
    {
      id: "u2l2", num: 2, skill: "Grammar",
      title: "Have/Has to – Don’t/Doesn’t have to",
      pages: [36, 36],
      status: "complete",
      canDo: ["I can use “have to / has to” and “don’t have to / doesn’t have to” accurately to clearly express obligations and responsibilities."],
      goals: ["Use have to / has to for rules.", "Use don’t / doesn’t have to for things that are not necessary.", "Write sentences for a visitor to Kuwait."],
      goalsAr: ["أستخدم have to / has to للتعبير عن القواعد والالتزامات.", "أستخدم don’t / doesn’t have to لما ليس ضروريًا.", "أكتب جملًا لزائر جديد إلى الكويت."],
      linkers: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next"],
      warmup: {
        title: "Think, Pair, Share",
        image: "crops/u2l2-warmup.jpg",
        emoji: "👍",
        prompts: ["Can you think of a rule at school that students have to follow?", "Why is it important to follow the rules?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Have to / Has to – Don’t have to / Doesn’t have to", page: 36, source: "book",
          steps: [
            { title: "When do we use it?",
              text: "Use have to / has to for necessary external rules. Use don’t / doesn’t have to for things that are not necessary.",
              textAr: "نستخدم have to / has to للقواعد الضرورية المفروضة علينا من الخارج، ونستخدم don’t / doesn’t have to للأشياء غير الضرورية.",
              examples: ["{s:I} {a:have to} {v:wear} {o:a school uniform}.", "{s:They} {n:don’t have to} {v:bring} {o:food}."] },
            { title: "Which pronoun? have or has?",
              text: "I / You / We / They → have to. He / She / It → has to.",
              textAr: "مع I / You / We / They نستخدم have to، ومع He / She / It نستخدم has to.",
              examples: ["{s:She} {a:has to} {v:study} harder.", "{s:He} {n:doesn’t have to} {v:sleep} {t:now}."] },
            { title: "Always the base verb",
              text: "After have to / has to / don’t have to / doesn’t have to, use the base verb (no -s, no -ing).",
              textAr: "بعد have to وأخواتها نستخدم الفعل في صيغته الأساسية (بدون s أو ing).",
              examples: ["{s:He} {a:has to} {v:go} to school. (not goes)", "{s:She} {n:doesn’t have to} {v:cook}. (not cooks)"] }
          ],
          table: {
            head: ["", "Have to / don’t have to", "Has to / doesn’t have to"],
            rows: [
              ["Pronouns", "I / You / We / They", "He / She / It"],
              ["✔ Affirmative", "subject (I/You/We/They) + have to + base verb\n- I have to wear a school uniform.", "subject (He/She/It) + has to + base verb\n- She has to study harder."],
              ["✖ Negative", "subject + don’t have to + base verb\n- They don’t have to bring food.", "subject + doesn’t have to + base verb\n- He doesn’t have to sleep now."]
            ]
          },
          worked: {
            q: "Correct the mistake: My brother have to goes to school early.",
            steps: ["Find the subject: My brother = he.", "With he we use has to, not have to.", "After has to we use the base verb: goes → go."],
            a: "My brother has to go to school early."
          },
          notes: ["has to = he / she / it (one person or thing).", "doesn’t have to ≠ mustn’t. It means: it is not necessary, you can choose."] },
        { type: "activity", title: "Circle the correct form in the sentences. Then, match the pictures correctly with their sentences.", page: 36, source: "book", stage: "guided",
          instructions: "Choose the correct form. Then match each sentence to a picture (1 mosque, 2 supermarket, 3 school).", instructionsAr: "اختر الصيغة الصحيحة، ثم صِل كل جملة بالصورة المناسبة.",
          image: "crops/u2l2-places.jpg",
          items: [
            { t: "choose", q: "You (have to / don’t have to) take off your shoes in that place.", options: ["have to", "don’t have to"], answer: 0, why: "In the mosque (picture 1), taking off your shoes is a rule." },
            { t: "choose", q: "She (doesn’t have to / has to) bring her books every working day to that place.", options: ["doesn’t have to", "has to"], answer: 1, why: "At school (picture 3), students need their books every day – it is necessary." },
            { t: "choose", q: "He (has to / doesn’t have to) use a cart for small items in that place.", options: ["has to", "doesn’t have to"], answer: 1, why: "At the supermarket (picture 2), a cart is not necessary for small items." },
            { t: "match", q: "Match the sentences with the pictures.",
              pairs: [
                ["You have to take off your shoes in that place.", "Picture 1 – the mosque"],
                ["She has to bring her books every working day to that place.", "Picture 3 – the school"],
                ["He doesn’t have to use a cart for small items in that place.", "Picture 2 – the supermarket"]
              ],
              hint: "Where do people take off their shoes? Where do they use a cart?", why: "Shoes off → mosque; books every working day → school; cart → supermarket." }
          ] },
        { type: "activity", title: "Extra Practice: Choose have to / has to / don’t have to / doesn’t have to.", page: 36, source: "extra", stage: "guided",
          instructions: "✔ = necessary. ✖ = not necessary. Complete the sentence.", instructionsAr: "✔ = ضروري، ✖ = غير ضروري. أكمل الجملة.",
          items: [
            { t: "fill", q: "✔ We ____ listen to the teacher.", answer: ["have to"], bank: ["have to", "has to"], why: "We → have to." },
            { t: "fill", q: "✔ My brother ____ wake up early for school.", answer: ["has to"], bank: ["have to", "has to"], why: "My brother = he → has to." },
            { t: "fill", q: "✖ You ____ bring lunch. There is a canteen.", answer: ["don’t have to", "don't have to", "do not have to"], bank: ["don’t have to", "doesn’t have to"], why: "You → don’t have to. It is not necessary because there is a canteen." },
            { t: "fill", q: "✖ Sara ____ wear a coat. It is hot today.", answer: ["doesn’t have to", "doesn't have to", "does not have to"], bank: ["don’t have to", "doesn’t have to"], why: "Sara = she → doesn’t have to." },
            { t: "fill", q: "✔ The students ____ be quiet in the library.", answer: ["have to"], bank: ["have to", "has to"], why: "The students = they → have to." }
          ] },
        { type: "activity", title: "Extra Practice: Find and correct the mistake.", page: 36, source: "extra", stage: "guided",
          instructions: "The underlined word is wrong. Write the correct word.", instructionsAr: "الكلمة التي تحتها خط خاطئة. اكتب الصواب.",
          items: [
            { t: "fix", q: "He {have to} go to school on Sunday.", answer: ["has to"], hint: "He → have or has?", why: "With he we use has to." },
            { t: "fix", q: "She has to {studies} hard.", answer: ["study"], hint: "Which verb form comes after has to?", why: "After has to we use the base verb: study." },
            { t: "fix", q: "They {doesn’t} have to pay at the park.", answer: ["don’t", "don't", "do not"], hint: "They → don’t or doesn’t?", why: "With they we use don’t." },
            { t: "fix", q: "I {has to} do my homework.", answer: ["have to"], hint: "I → have or has?", why: "With I we use have to." },
            { t: "fix", q: "We don’t have to {wearing} a coat today.", answer: ["wear"], hint: "No -ing after have to.", why: "After don’t have to we use the base verb: wear." }
          ] },
        { type: "activity", title: "Extra Practice: Put the words in order.", page: 36, source: "extra", stage: "independent",
          instructions: "Tap the words to make a sentence.", instructionsAr: "رتّب الكلمات لتكوين جملة.",
          items: [
            { t: "order", q: "Put the words in order.", words: ["has", "She", "to", "clean", "her", "room."], answer: ["She has to clean her room."], why: "subject + has to + base verb + object." },
            { t: "order", q: "Put the words in order.", words: ["have", "We", "to", "wear", "a", "uniform."], answer: ["We have to wear a uniform."], why: "subject + have to + base verb + object." },
            { t: "order", q: "Put the words in order.", words: ["don’t", "Students", "have", "to", "bring", "food."], answer: ["Students don’t have to bring food."], why: "subject + don’t have to + base verb." },
            { t: "order", q: "Put the words in order.", words: ["doesn’t", "Ali", "have", "to", "get", "up", "early", "today."], answer: ["Ali doesn’t have to get up early today."], why: "Ali = he → doesn’t have to + base verb." }
          ] },
        { type: "write", title: "a. Make sentences of your own. Then, ask a partner to correct your mistakes if you have any.", page: 36, source: "book",
          instructions: "Write 3 sentences in your notebook telling a new visitor to Kuwait the things he has to and doesn’t have to do. Use at least 2 words from the linkers bank.",
          instructionsAr: "اكتب ٣ جمل لزائر جديد إلى الكويت عمّا يجب عليه فعله وما لا يلزمه فعله. استخدم كلمتين على الأقل من بنك أدوات الربط.",
          wordBank: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next", "has to", "doesn’t have to"],
          frame: [
            { label: "Sentence 1 (has to)", hint: "First, he has to …" },
            { label: "Sentence 2 (has to + reason)", hint: "He also has to … because …" },
            { label: "Sentence 3 (doesn’t have to)", hint: "Finally, he doesn’t have to … because …" }
          ],
          model: "First, a visitor has to respect the culture of Kuwait. He also has to take off his shoes in the mosque because it is a rule. Finally, he doesn’t have to wear a coat in summer because it is very hot.",
          modelFromBook: false,
          checklist: ["I wrote 3 sentences.", "I used has to and doesn’t have to.", "I used the base verb after has to.", "I used at least 2 linkers.", "I started with a capital letter and ended with a full stop."],
          minWords: 25 },
        { type: "speak", title: "b. Share your sentences with the class as a presentation.", page: 36, source: "book",
          instructions: "Read your sentences to the class. Speak clearly and look at your audience.",
          dialogue: [{ who: "You", text: "" }],
          starters: ["Welcome to Kuwait! First, you have to …", "In addition, you have to …", "You don’t have to … because …"],
          record: true }
      ],
      game: { kind: "sort", title: "Have to or Has to?", source: "extra",
        buckets: ["have to", "has to"],
        cards: [["I", 0], ["She", 1], ["We", 0], ["He", 1], ["They", 0], ["My sister", 1], ["You", 0], ["The teacher", 1], ["My friends", 0], ["It", 1]] },
      teacher: {
        notes: [
          "Warm-up: Think, Pair, Share about school rules (2 minutes).",
          "Teach the rule box and the table. Colour the subject, the helper (have to / has to) and the base verb.",
          "Go through the worked example, then Task 2 (circle and match the pictures).",
          "Weak students: do the extra fill-in and correction before writing.",
          "Task 3: students write 3 sentences for a visitor to Kuwait, check with a partner, then present."
        ],
        pair: ["Partner A says a place (mosque, school, mall); Partner B says one thing you have to do and one thing you don’t have to do there.", "Peer-check the visitor sentences: circle has to / doesn’t have to and underline the base verb."],
        group: ["Each group makes a “Welcome to Kuwait” rule poster with 4 sentences and presents it."],
        quick: [
          { q: "She ___ study harder. (have to / has to)", a: "has to" },
          { q: "Make it negative: They have to bring food.", a: "They don’t have to bring food." },
          { q: "Correct: He has to goes now.", a: "He has to go now." },
          { q: "What does “doesn’t have to” mean?", a: "It is not necessary." }
        ]
      }
    },

    // ───────────────────────────── LESSON 3 — LISTENING ─────────────────────────────
    {
      id: "u2l3", num: 3, skill: "Listening",
      title: "Rules and Ethics in Public Places",
      pages: [37, 37],
      status: "complete",
      canDo: ["I can identify clearly explicit and implicit details from spoken texts describing responsible behaviours and ethical rules in public places."],
      goals: ["Listen to people talking about public places.", "Find rules: have to / don’t have to.", "Describe the rules of a public place."],
      goalsAr: ["أستمع إلى أشخاص يتحدثون عن الأماكن العامة.", "أتعرّف على القواعد: have to / don’t have to.", "أصف قواعد مكان عام."],
      linkers: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next"],
      warmup: {
        title: "Before You Listen",
        image: "crops/u2l3-warmup.jpg",
        emoji: "🏞️",
        prompts: ["Look at these pictures of public places.", "What are the things you have to do in these places?", "What are the things you don’t have to do there?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "listen", title: "Public Places Podcast – a. Listen, then tick true (✔) or false (✖).", page: 37, source: "book",
          needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/Ed5t-zrWVWRLvit5Xjkxv-kBYncoLD_hzF4vDmOAjkktbw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=UJG9tL",
          instructions: "Listen to three people talking about what we have to/don’t have to do in public places. Then, do the tasks that follow. (Track 2.1)",
          instructionsAr: "استمع إلى ثلاثة أشخاص يتحدثون عمّا يجب فعله وما لا يلزم فعله في الأماكن العامة، ثم أجب.",
          items: [
            { t: "choose", q: "1. At malls, we have to shop in a hurry.", options: ["True ✔", "False ✖"], open: true },
            { t: "choose", q: "2. We don’t have to water plants at parks.", options: ["True ✔", "False ✖"], open: true },
            { t: "choose", q: "3. At parks, we have to throw garbage in bins.", options: ["True ✔", "False ✖"], open: true },
            { t: "choose", q: "4. We don’t have to speak quietly in restaurants.", options: ["True ✔", "False ✖"], open: true }
          ] },
        { type: "listen", title: "b. Listen again, then fill in the table. Discuss your answers with your partner.", page: 37, source: "book",
          needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/Ed5t-zrWVWRLvit5Xjkxv-kBYncoLD_hzF4vDmOAjkktbw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=UJG9tL",
          instructions: "Listen again and complete the table.",
          instructionsAr: "استمع مرة أخرى وأكمل الجدول.",
          items: [
            { t: "table", q: "Complete the table.", open: true,
              head: ["Speaker", "Place", "Have to do", "Why", "Don’t have to do"],
              rows: [
                ["Sama", "park", { open: true }, { open: true }, { open: true }],
                ["Jassim", { open: true }, "dress well", "to show respect to the public", { open: true }],
                ["Homoud", { open: true }, { open: true }, { open: true }, "eat quickly"]
              ] }
          ] },
        { type: "listen", title: "c. Answer the following questions.", page: 37, source: "book",
          needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/Ed5t-zrWVWRLvit5Xjkxv-kBYncoLD_hzF4vDmOAjkktbw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=UJG9tL",
          instructions: "Answer the questions.",
          instructionsAr: "أجب عن الأسئلة.",
          items: [
            { t: "short", q: "1. Why do you think Sama says it’s important to protect the plants and trees in the park?", open: true, hint: "Think: who enjoys the park? What happens if plants die?" },
            { t: "short", q: "2. Why does Jassim advise people not to hurry in malls even though they are busy places?", open: true, hint: "Think about safety and other people." },
            { t: "short", q: "3. How does speaking quietly in restaurants show respect to other customers?", open: true, hint: "Other people want to eat and talk calmly." },
            { t: "short", q: "4. Which speaker gives the most useful advice for behaving politely in public? Why do you think so?", open: true, hint: "Your opinion. Use: I think … because …" }
          ] },
        { type: "speak", title: "Think of a public place and describe its rules using “have to” or “don’t have to”.", page: 37, source: "book",
          instructions: "Choose a public place. For example: supermarket / mosque / hospital / airport…etc. Tell your group its rules.",
          dialogue: [{ who: "A", text: "Which place did you choose?" }, { who: "B", text: "" }, { who: "A", text: "What do you have to do there?" }, { who: "B", text: "" }, { who: "A", text: "What don’t you have to do there?" }, { who: "B", text: "" }],
          starters: ["I chose the …", "At the …, we have to … because …", "We don’t have to …", "In addition, we have to …"],
          record: true },
        { type: "listen", title: "Extra Practice: At the Library and the Hospital", source: "extra",
          instructions: "This is NOT the book recording. It is a short practice text read by a computer voice. Listen and answer.",
          instructionsAr: "هذا ليس تسجيل الكتاب، بل نص تدريبي قصير بصوت حاسوبي. استمع وأجب.",
          script: [
            { who: "Noura", text: "Hello! I’m Noura. Today I want to talk about the library. At the library, we have to speak quietly because people are reading. We also have to put the books back in the right place. We don’t have to buy the books. We can borrow them for free." },
            { who: "Fahad", text: "Hi, I’m Fahad. I visit the hospital with my grandfather every week. At the hospital, we have to wait for our turn. We also have to keep our phones on silent. We don’t have to bring food, because there is a café inside." }
          ],
          items: [
            { t: "mcq", q: "Why do we have to speak quietly at the library?", options: ["because it is late", "because people are reading", "because the books are new"], answer: 1, why: "Noura says: “because people are reading.”" },
            { t: "choose", q: "We have to buy the books at the library.", options: ["True", "False"], answer: 1, why: "Noura says: “We don’t have to buy the books.”" },
            { t: "fill", q: "At the hospital, we have to wait for our ____.", answer: ["turn"], why: "Fahad says: “we have to wait for our turn.”" },
            { t: "mcq", q: "Why don’t they have to bring food to the hospital?", options: ["There is a café inside.", "Food is not allowed.", "They eat at home."], answer: 0, why: "Fahad says: “because there is a café inside.”" },
            { t: "choose", q: "Fahad visits the hospital with his (father / grandfather).", options: ["father", "grandfather"], answer: 1, why: "Fahad says: “with my grandfather”." }
          ] }
      ],
      game: { kind: "quiz", title: "Public Places Quiz", source: "extra",
        items: [
          { t: "choose", q: "In the mosque, you (have to / don’t have to) take off your shoes.", options: ["have to", "don’t have to"], answer: 0, why: "It is a rule in the mosque." },
          { t: "choose", q: "In a hospital, you (have to / don’t have to) speak quietly.", options: ["have to", "don’t have to"], answer: 0, why: "Sick people need to rest." },
          { t: "choose", q: "At the airport, you (have to / don’t have to) show your passport.", options: ["have to", "don’t have to"], answer: 0, why: "It is a necessary rule for travel." },
          { t: "choose", q: "At the park, you (have to / don’t have to) pay to sit on a bench.", options: ["have to", "don’t have to"], answer: 1, why: "Benches in parks are free." },
          { t: "choose", q: "At the supermarket, you (have to / don’t have to) pay for the things you take.", options: ["have to", "don’t have to"], answer: 0, why: "You must pay before you leave." },
          { t: "choose", q: "My father (has to / have to) drive carefully.", options: ["has to", "have to"], answer: 0, why: "My father = he → has to." }
        ] },
      teacher: {
        notes: [
          "Warm-up: show the three pictures (park, restaurant, mall). Ask the two Before You Listen questions.",
          "The book audio (Track 2.1) is on the QR link. Play it twice: first for true/false, then for the table.",
          "Check answers with the class from the recording; the app does not auto-check these tasks.",
          "Discuss question c in pairs. Accept any reasonable answer with because.",
          "If the audio is not available, use the Extra Practice listening (computer voice)."
        ],
        pair: ["Compare the table answers with your partner before checking with the class.", "Partner A names a place; Partner B gives one rule with have to and one with don’t have to."],
        group: ["Each group chooses a place (supermarket, mosque, hospital, airport) and makes a rules card to present."],
        quick: [
          { q: "Name one thing you have to do in a restaurant.", a: "Speak quietly / be polite / wait for your food. (Any good rule.)" },
          { q: "Name one thing you have to do in a park.", a: "Throw garbage in bins / protect the plants. (Any good rule.)" },
          { q: "Make it negative: We have to hurry.", a: "We don’t have to hurry." }
        ]
      }
    },

    // ───────────────────────────── LESSON 4 — SPEAKING ─────────────────────────────
    {
      id: "u2l4", num: 4, skill: "Speaking",
      title: "Being Responsible at School",
      pages: [38, 38],
      status: "complete",
      canDo: ["I can discuss clear and structured advice effectively using modal verbs (“should/shouldn’t”) related to responsibilities and respectful behaviours."],
      goals: ["Talk about my school responsibilities.", "Give advice with should / shouldn’t.", "Give a reason with because."],
      goalsAr: ["أتحدث عن مسؤولياتي في المدرسة.", "أقدّم نصيحة باستخدام should / shouldn’t.", "أذكر السبب باستخدام because."],
      warmup: {
        title: "Discuss these questions.",
        image: "crops/u2l4-warmup.jpg",
        emoji: "🧑‍🎓",
        prompts: ["What are your school responsibilities?", "Why do you think they are important?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Helpful phrases: should / shouldn’t", page: 38, source: "book",
          steps: [
            { title: "Giving advice",
              text: "Use should for good things to do. Use shouldn’t for things that are not good. Add because to give the reason.",
              textAr: "نستخدم should لنصح الشخص بفعل شيء جيد، وshouldn’t لنصحه بعدم فعل شيء غير جيد، ونستخدم because لذكر السبب.",
              examples: ["{s:She} {a:should} {v:listen} {o:to her teacher} {c:because} it’s respectful.", "{s:I} {a:should} {v:respect} {o:my teachers} {c:because} …"] }
          ],
          table: {
            head: ["✔ should", "✖ shouldn’t"],
            rows: [["listen to teachers", "waste time"], ["do homework regularly", "forget books"], ["cooperate with classmates", "talk loudly"]]
          },
          notes: ["After should / shouldn’t, use the base verb: She should listen (not listens)."] },
        { type: "speak", title: "Look at these pictures of students at school. Give advice using (should or shouldn’t) and mention why.", page: 38, source: "book",
          instructions: "Look at each picture. Give advice with should or shouldn’t and say why.",
          image: "crops/u2l4-pictures.jpg",
          dialogue: [{ who: "You can say", text: "She should listen to her teacher because it’s respectful." }, { who: "You", text: "" }],
          starters: ["He should … because …", "She should … because …", "He shouldn’t … because …", "They should … because …"],
          record: true },
        { type: "activity", title: "Write suitable advice to each problem. Then, discuss them with the reasons.", page: 38, source: "book", stage: "independent",
          instructions: "Write advice for problems 2–4. Then discuss your reasons in your group.", instructionsAr: "اكتب نصيحة لكل مشكلة، ثم ناقش الأسباب مع مجموعتك.",
          items: [
            { t: "table", q: "Problem and advice", open: true,
              head: ["Problem", "Advice"],
              rows: [
                ["1. My classmates are still upset with me.", "You shouldn’t hurt their feelings. You should apologise to them."],
                ["2. My teacher said that I was shouting in the class.", { open: true, model: "You shouldn’t shout in the class. You should talk quietly and say sorry to your teacher." }],
                ["3. I forgot my homework!", { open: true, model: "You should tell your teacher the truth. You should check your bag every night." }],
                ["4. I can't remember what we learned yesterday.", { open: true, model: "You should review your lessons every day. You should ask your teacher or a classmate." }]
              ] }
          ] },
        { type: "activity", title: "Extra Practice: should or shouldn’t?", page: 38, source: "extra", stage: "guided",
          instructions: "Complete with should or shouldn’t.", instructionsAr: "أكمل بـ should أو shouldn’t.",
          items: [
            { t: "fill", q: "You ____ talk loudly in class because it disturbs others.", answer: ["shouldn’t", "shouldn't", "should not"], bank: ["should", "shouldn’t"], why: "Talking loudly is not good → shouldn’t." },
            { t: "fill", q: "You ____ do your homework regularly.", answer: ["should"], bank: ["should", "shouldn’t"], why: "Doing homework is a good thing → should." },
            { t: "fill", q: "You ____ waste time on video games before a test.", answer: ["shouldn’t", "shouldn't", "should not"], bank: ["should", "shouldn’t"], why: "Wasting time is not good → shouldn’t." },
            { t: "fill", q: "You ____ cooperate with your classmates.", answer: ["should"], bank: ["should", "shouldn’t"], why: "Working together is good → should." },
            { t: "fill", q: "You ____ forget your books at home.", answer: ["shouldn’t", "shouldn't", "should not"], bank: ["should", "shouldn’t"], why: "You need your books at school → shouldn’t forget them." },
            { t: "fill", q: "You ____ listen to your teachers because it’s respectful.", answer: ["should"], bank: ["should", "shouldn’t"], why: "Listening is respectful → should." }
          ] },
        { type: "speak", title: "Role Play Activity", page: 38, source: "book",
          instructions: "You are hosted on TV as a minister. Make your country a better place by giving a speech of advice using (should / shouldn’t) to the citizens of Kuwait.",
          dialogue: [{ who: "TV host", text: "Welcome, Minister. What advice do you have for the people of Kuwait?" }, { who: "Minister", text: "" }, { who: "TV host", text: "Why is that important?" }, { who: "Minister", text: "" }, { who: "TV host", text: "Thank you, Minister." }],
          starters: ["Good evening, citizens of Kuwait.", "We should keep our streets clean because …", "We shouldn’t waste water because …", "Students should …", "Thank you for listening."],
          record: true }
      ],
      game: { kind: "sort", title: "Should or Shouldn’t?", source: "extra",
        buckets: ["✔ should", "✖ shouldn’t"],
        cards: [["listen to teachers", 0], ["do homework regularly", 0], ["cooperate with classmates", 0], ["waste time", 1], ["forget books", 1], ["talk loudly", 1], ["apologise to a friend", 0], ["hurt their feelings", 1]] },
      teacher: {
        notes: [
          "Warm-up: the two discussion questions and the speech bubble “I should respect my teachers because…”.",
          "Teach the Helpful phrases (should ✔ / shouldn’t ✖). Model: She should listen to her teacher because it’s respectful.",
          "Task 2: students describe each picture with should / shouldn’t + because.",
          "Task 3 in groups: write advice for problems 2–4, then share the reasons.",
          "Task 4: short role play. Give 2 minutes to prepare a 3-sentence speech."
        ],
        pair: ["Partner A says a problem; Partner B gives advice with should / shouldn’t + because.", "Practise the TV interview: one is the host, one is the minister. Then swap."],
        group: ["Groups write a 5-sentence “speech of advice” and choose one speaker to present as the minister."],
        quick: [
          { q: "Give advice: My friend always forgets his books.", a: "He should check his bag every night. / He shouldn’t forget his books." },
          { q: "Complete: You ___ waste time. (should / shouldn’t)", a: "shouldn’t" },
          { q: "What word do we use to give a reason?", a: "because" }
        ]
      }
    },

    // ───────────────────────────── LESSON 5 — READING ─────────────────────────────
    {
      id: "u2l5", num: 5, skill: "Reading",
      title: "A Life of Kindness",
      pages: [39, 40],
      status: "complete",
      canDo: ["I can analyse explicit and implicit details clearly from informational texts highlighting personal values, kindness, and positive actions."],
      goals: ["Read a newspaper article about Dr. Abdulrahman Alsumait.", "Learn 10 new words.", "Answer questions and find word meanings."],
      goalsAr: ["أقرأ مقالًا صحفيًا عن الدكتور عبد الرحمن السميط.", "أتعلّم ١٠ كلمات جديدة.", "أجيب عن الأسئلة وأجد معاني الكلمات."],
      warmup: {
        title: "Before You Read",
        image: "crops/u2l5-warmup.jpg",
        emoji: "🤝",
        prompts: ["Have you ever helped someone? How?", "Why do you think helping others is important?", "How can we achieve our goals?"],
        seconds: 90
      },
      vocab: [
        { w: "faith", pos: "noun", emoji: "🕌", def: "great trust or confidence in something or someone", ex: "His faith was strong from the start.", exFromBook: true, ar: "إيمان", ipa: "/feɪθ/" },
        { w: "lead", pos: "verb", emoji: "🧭", def: "to guide or be in charge of a group or situation", ex: "The captain leads the team.", exFromBook: false, ar: "يقود", ipa: "/liːd/" },
        { w: "effectively", pos: "adverb", emoji: "🎯", def: "in a way that gets the result that you want", ex: "Doctors can effectively help poor people.", exFromBook: false, ar: "بفعالية", ipa: "/ɪˈfek.tɪv.li/" },
        { w: "effort", pos: "noun", emoji: "🏋️", def: "physical or mental energy used to do something", ex: "She made a great effort to finish her project.", exFromBook: false, ar: "جهد", ipa: "/ˈef.ət/" },
        { w: "patient", pos: "adjective", emoji: "⏳", def: "able to wait, or to continue doing something when it is difficult", ex: "He was very patient and did not give up on his dreams.", exFromBook: true, ar: "صبور", ipa: "/ˈpeɪ.ʃənt/" },
        { w: "friendly", pos: "adjective", emoji: "😊", def: "behaving in a pleasant, kind way towards someone", ex: "Our new neighbour is very friendly.", exFromBook: false, ar: "ودود", ipa: "/ˈfrend.li/" },
        { w: "polite", pos: "adjective", emoji: "🎩", def: "speaking and acting in a kind and correct way with other people", ex: "Be polite and say “please” and “thank you”.", exFromBook: false, ar: "مهذّب", ipa: "/pəˈlaɪt/" },
        { w: "positively", pos: "adverb", emoji: "👍", def: "in a good or positive way", ex: "He changed many lives positively.", exFromBook: true, ar: "بشكل إيجابي", ipa: "/ˈpɒz.ə.tɪv.li/" },
        { w: "recognise", pos: "verb", emoji: "🏅", def: "to show public thanks for what someone has done", ex: "The school recognised her for her hard work.", exFromBook: false, ar: "يُشيد بـ / يعترف بفضل", ipa: "/ˈrek.əɡ.naɪz/" },
        { w: "honour", pos: "verb", emoji: "🎖️", def: "to show great respect for someone, especially in public", ex: "He was honoured by many countries.", exFromBook: true, ar: "يُكرِّم", ipa: "/ˈɒn.ər/" }
      ],
      sections: [
        { type: "reading", title: "A Life of Kindness", page: 39, source: "book",
          instructions: "Read the article in Kuwait Times newspaper, then do the tasks that follow.",
          instructionsAr: "اقرأ المقال المنشور في صحيفة كويت تايمز، ثم أجب عن الأسئلة.",
          speaker: "Kuwait Times",
          paras: [
            "Dr. Abdulrahman Alsumait was a Kuwaiti philanthropist born in 1947. First, he noticed that many people around him needed help. He believed everyone should help others because kindness is very important. His faith was strong from the start. He dreamed of making a difference in the world, believing that strong faith can lead people along the right path.",
            "When Alsumait grew older, he knew he must study medicine, so he became a doctor. He believed doctors could effectively help poor people who would not have to suffer if they received good medical care. Alsumait always made a great effort to support those in need. He was very patient and did not give up on his dreams. People found him friendly and felt safe around him because he was polite and respectful.",
            "Next, Alsumait travelled to Africa because he saw many people there who did not have to live without education or healthcare. He worked very hard to build hospitals and schools. In addition, he taught others how they should help themselves and their communities. He changed many lives positively. Many people respected Alsumait because they saw his kindness clearly. When important guests visited him, [[they]] discussed ways to improve people’s lives.",
            "Finally, the world recognised him for his wonderful work. He was honoured by many countries. He showed everyone that they do not have to be rich or famous to help others."
          ] },
        { type: "activity", title: "a. Choose the correct answer.", page: 40, source: "book", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. To help others, Dr. Abdulrahman Alsumait studied:", options: ["Africa", "Education", "Medicine", "Philanthropy"], answer: 2,
              hint: "Read paragraph 2.", why: "“he knew he must study medicine, so he became a doctor.”" },
            { t: "mcq", q: "2. The underlined word “they” in the 3rd paragraph refers to:", options: ["communities", "hospitals", "schools", "guests"], answer: 3,
              hint: "Read the sentence: “When important guests visited him, they …”", why: "The guests and Alsumait discussed ways to improve people’s lives; “they” comes right after “important guests”." },
            { t: "mcq", q: "3. After reading the passage, we can describe the feelings of the writer as:", options: ["sad", "proud", "angry", "afraid"], answer: 1,
              hint: "Does the writer say good or bad things about Alsumait?", why: "The writer talks about his “wonderful work” and kindness, so the writer feels proud." }
          ] },
        { type: "activity", title: "b. Answer the following questions.", page: 40, source: "book", stage: "independent",
          instructions: "Answer the following questions.", instructionsAr: "أجب عن الأسئلة التالية.",
          items: [
            { t: "short", q: "1. Why did many people respect Alsumait and felt safe around him?", model: "People felt safe around him because he was polite and respectful. They respected him because they saw his kindness clearly.",
              keywords: [["polite", "respectful", "kind", "friendly"]], hint: "Look for “because” in paragraphs 2 and 3." },
            { t: "short", q: "2. What were the things Alsumait did to help the people in need?", model: "He became a doctor, travelled to Africa, built hospitals and schools, and taught others how to help themselves and their communities.",
              keywords: [["doctor", "medic", "hospital", "school", "Africa", "taught", "teach"]], hint: "Read paragraphs 2 and 3." },
            { t: "short", q: "3. How do you think Alsumait’s kindness and faith helped him achieve his goals?", open: true,
              model: "His faith led him along the right path, and his kindness made him patient, so he did not give up on his dreams.", hint: "Your opinion. Think about paragraph 1: “strong faith can lead people along the right path”." },
            { t: "short", q: "4. What can we learn from Alsumait’s life?", model: "We do not have to be rich or famous to help others.",
              keywords: [["rich", "famous", "help", "kind"]], hint: "Read the last sentence of the article." }
          ] },
        { type: "activity", title: "Find words in the passage that mean.", page: 40, source: "book", stage: "guided",
          instructions: "Find words in the passage for each meaning. Use the glossary at the end of the book to check your answers.", instructionsAr: "ابحث في النص عن كلمة لكل معنى.",
          items: [
            { t: "table", q: "Find the words.",
              head: ["Word", "Definition"],
              rows: [
                [{ answer: ["lead"], model: "lead" }, "to guide or be in charge of a group or situation"],
                [{ answer: ["patient"], model: "patient" }, "having the ability to wait, or to continue doing something despite difficulties"],
                [{ answer: ["effort"], model: "effort" }, "physical or mental energy used to do something"]
              ] }
          ] },
        { type: "discuss", title: "Interview your partner with the following questions inspired by Alsumait’s life.", page: 40, source: "book",
          image: "crops/u2l5-interview.jpg", emoji: "🎤",
          prompts: ["What would you do in your school or neighbourhood if you were Alsumait?", "What projects can you think of to make the world a better place?"] },
        { type: "activity", title: "Extra Practice: True or False?", page: 39, source: "extra", stage: "guided",
          instructions: "Read the article again. Is it true or false?", instructionsAr: "اقرأ المقال مرة أخرى. هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "choose", q: "Alsumait was born in 1947.", options: ["True", "False"], answer: 0, why: "Paragraph 1: “born in 1947”." },
            { t: "choose", q: "Alsumait became a teacher.", options: ["True", "False"], answer: 1, why: "Paragraph 2: “he became a doctor.”" },
            { t: "choose", q: "He gave up on his dreams.", options: ["True", "False"], answer: 1, why: "Paragraph 2: “did not give up on his dreams.”" },
            { t: "choose", q: "He built hospitals and schools in Africa.", options: ["True", "False"], answer: 0, why: "Paragraph 3: “He worked very hard to build hospitals and schools.”" },
            { t: "choose", q: "Many countries honoured him.", options: ["True", "False"], answer: 0, why: "Paragraph 4: “He was honoured by many countries.”" }
          ] },
        { type: "activity", title: "Extra Practice: Complete with a new word.", page: 39, source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "fill", q: "Wait for your turn. Be ____.", answer: ["patient"], bank: ["patient", "faith", "effort"], why: "Someone who can wait is patient." },
            { t: "fill", q: "Our neighbour always smiles and says hello. He is very ____.", answer: ["friendly"], bank: ["friendly", "effort", "lead"], why: "Smiling and saying hello is pleasant and kind: friendly." },
            { t: "fill", q: "Say “please” and “thank you”. Be ____.", answer: ["polite"], bank: ["polite", "positively", "honour"], why: "Saying please and thank you is polite." },
            { t: "fill", q: "She made a big ____ to win the race.", answer: ["effort"], bank: ["effort", "patient", "friendly"], why: "After “a big” we need a noun: effort (energy)." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab", source: "extra" },
      teacher: {
        notes: [
          "Warm-up: show the photo and ask the three Before You Read questions.",
          "Pre-teach the 10 words. Explain “philanthropist” (a person who helps others with time or money).",
          "Read the article paragraph by paragraph. Ask: What did he do first / next / finally?",
          "Task 3a and 3b in pairs. Task 4 with the glossary. Weak students start with the True/False extra.",
          "Task 5: students interview each other. Use the pictures for ideas (food, donations, recycling, planting trees)."
        ],
        pair: ["Interview your partner with the two Task 5 questions and report one answer to the class.", "Partner A reads a definition; Partner B finds the word in the text."],
        group: ["Each group plans a small kindness project for the school and presents it in 1 minute."],
        quick: [
          { q: "What did Alsumait study?", a: "Medicine." },
          { q: "Where did he build hospitals and schools?", a: "In Africa." },
          { q: "Who does “they” refer to in paragraph 3?", a: "The (important) guests." },
          { q: "What word means “able to wait”?", a: "patient" }
        ]
      }
    },

    // ───────────────────────────── LESSON 6 — GRAMMAR ─────────────────────────────
    {
      id: "u2l6", num: 6, skill: "Grammar",
      title: "Modal Verbs",
      pages: [41, 41],
      status: "complete",
      canDo: ["I can apply modal verbs (“must,” “should,” “may,” “can”) accurately in sentences to express advice, obligations, possibility, and ability clearly."],
      goals: ["Learn must, should, may and can.", "Use the base verb after modals.", "Find and correct mistakes."],
      goalsAr: ["أتعلّم must وshould وmay وcan.", "أستخدم الفعل في صيغته الأساسية بعد الأفعال الناقصة.", "أكتشف الأخطاء وأصحّحها."],
      warmup: {
        title: "Discuss the following questions.",
        image: "crops/u2l6-warmup.jpg",
        emoji: "🦸",
        prompts: ["Who is your role model?", "What do they do that makes them a role model?", "What advice do they usually give to others?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Modal Verbs", page: 41, source: "book",
          steps: [
            { title: "What are modal verbs?",
              text: "Modal verbs: verbs that tell us what someone must, should, may, or can do.",
              textAr: "الأفعال الناقصة (Modal verbs) أفعال تخبرنا بما يجب أو ينبغي أو قد أو يستطيع الشخص فعله.",
              examples: ["{s:You} {a:must} {v:drive} safely {o:in the street}.", "{s:We} {a:should} {v:be} polite {o:with people}."] },
            { title: "Four modals, four jobs",
              text: "must = strong obligation. should = advice. may = possibility. can = ability.",
              textAr: "must = إلزام قوي، should = نصيحة، may = احتمال، can = قدرة.",
              examples: ["{s:He} {a:may} {v:be} tired {t:after playing football all day}.", "{s:I} {a:can} {v:help} {o:my brother} with his homework."] },
            { title: "Remember!",
              text: "After modals, use verbs in the base form. No -s, no -ing, no to.",
              textAr: "بعد الأفعال الناقصة نستخدم الفعل في صيغته الأساسية: بدون s أو ing أو to.",
              examples: ["{s:She} {a:can} {v:swim}. (not swims)", "{s:You} {a:should} {v:listen}. (not should to listen)"] }
          ],
          table: {
            head: ["Modal", "Function", "Examples"],
            rows: [
              ["must", "strong internal/personal obligation", "You must drive safely in the street."],
              ["should", "advice", "We should be polite with people."],
              ["may", "possibility", "He may be tired after playing football all day."],
              ["can", "ability", "I can help my brother with his homework."]
            ]
          },
          worked: {
            q: "Correct the mistake: He can plays the piano.",
            steps: ["Find the modal: can.", "After a modal we use the base verb.", "plays → play"],
            a: "He can play the piano."
          },
          notes: ["Modals do not change with he / she / it: He can, She must, It may.", "Negative: must not (mustn’t), should not (shouldn’t), may not, cannot (can’t)."] },
        { type: "activity", title: "Fill in the blanks using the suitable modal verbs.", page: 41, source: "book", stage: "guided",
          instructions: "Fill in the blanks using the suitable modal verbs.", instructionsAr: "املأ الفراغات بالفعل الناقص المناسب.",
          items: [
            { t: "fill", q: "1. You ____ wear a seatbelt when you’re in a car.", answer: ["must", "should"], bank: ["must", "should", "may", "can"], hint: "Is it a rule or advice?", why: "Wearing a seatbelt is an obligation → must (should is also possible as advice)." },
            { t: "fill", q: "2. I forgot to apologise to my classmate. I ____ do it now.", answer: ["should", "must"], bank: ["must", "should", "may", "can"], hint: "What is good advice here?", why: "Advice to yourself → should (must = a strong personal obligation is also correct)." },
            { t: "fill", q: "3. They ____ join the club to meet new friends if they want.", answer: ["can", "may"], bank: ["must", "should", "may", "can"], hint: "“if they want” = it is their choice.", why: "It is a choice, not a rule → can / may." },
            { t: "fill", q: "4. We ____ make mistakes, and that’s how we learn.", answer: ["may", "can"], bank: ["must", "should", "may", "can"], hint: "Is it a rule, or something that is possible?", why: "Mistakes are possible → may / can. (Not must or should – a mistake is not a rule or advice.)" }
          ] },
        { type: "activity", title: "Grammar Detective – a. Find and correct the mistakes.", page: 41, source: "book", stage: "guided",
          instructions: "Find and correct the mistakes.", instructionsAr: "اكتشف الأخطاء وصحّحها.",
          items: [
            { t: "fix", q: "1. We can {goes} to the park after school.", answer: ["go"], hint: "After can → base verb.", why: "After a modal we use the base form: go." },
            { t: "fix", q: "2. She must {finishes} her project today.", answer: ["finish"], hint: "After must → base verb.", why: "Modals do not take -es: must finish." },
            { t: "fix", q: "3. It may {raining} later tonight.", answer: ["rain", "be raining"], hint: "After may → base verb.", why: "It may rain later tonight. (“may be raining” is also correct.)" },
            { t: "fix", q: "4. You should {to listen} to your parents.", answer: ["listen"], hint: "Do we need “to” after should?", why: "No “to” after should: You should listen to your parents." }
          ] },
        { type: "activity", title: "Extra Practice: Which modal?", page: 41, source: "extra", stage: "guided",
          instructions: "Choose the best modal.", instructionsAr: "اختر الفعل الناقص الأنسب.",
          items: [
            { t: "choose", q: "You look tired. You (should / can) sleep early.", options: ["should", "can"], answer: 0, why: "This is advice → should." },
            { t: "choose", q: "My sister (can / must) swim very well.", options: ["can", "must"], answer: 0, why: "This is ability → can." },
            { t: "choose", q: "Take an umbrella. It (may / must) rain today.", options: ["may", "must"], answer: 0, why: "This is possibility → may." },
            { t: "choose", q: "It is a school rule. Students (must / may) wear a uniform.", options: ["must", "may"], answer: 0, why: "A rule is an obligation → must." },
            { t: "choose", q: "I (can / should) speak two languages.", options: ["can", "should"], answer: 0, why: "This is ability → can." }
          ] },
        { type: "activity", title: "Extra Practice: Correct the mistake.", page: 41, source: "extra", stage: "guided",
          instructions: "The underlined words are wrong. Write the correct form.", instructionsAr: "الكلمات التي تحتها خط خاطئة. اكتب الصواب.",
          items: [
            { t: "fix", q: "He can {plays} football well.", answer: ["play"], why: "can + base verb: play." },
            { t: "fix", q: "We should {studying} for the test.", answer: ["study"], why: "should + base verb: study (no -ing)." },
            { t: "fix", q: "You {must to} wear a helmet.", answer: ["must"], why: "No “to” after must: You must wear a helmet." },
            { t: "fix", q: "She may {comes} to the party.", answer: ["come"], why: "may + base verb: come." }
          ] },
        { type: "activity", title: "Extra Practice: Put the words in order.", page: 41, source: "extra", stage: "independent",
          instructions: "Tap the words to make a sentence.", instructionsAr: "رتّب الكلمات لتكوين جملة.",
          items: [
            { t: "order", q: "Put the words in order.", words: ["should", "You", "drink", "more", "water."], answer: ["You should drink more water."], why: "subject + modal + base verb + object." },
            { t: "order", q: "Put the words in order.", words: ["can", "I", "ride", "a", "bike."], answer: ["I can ride a bike."], why: "subject + can + base verb." },
            { t: "order", q: "Put the words in order.", words: ["may", "It", "be", "cold", "tomorrow."], answer: ["It may be cold tomorrow."], why: "subject + may + be + adjective + time." },
            { t: "order", q: "Put the words in order.", words: ["must", "We", "wear", "a", "seatbelt."], answer: ["We must wear a seatbelt."], why: "subject + must + base verb + object." }
          ] },
        { type: "write", title: "b. Use the modal verbs in sentences of your own. Ask your partner for correction.", page: 41, source: "book",
          instructions: "Write sentences with must, should, may and can. Then ask your partner to check them.",
          instructionsAr: "اكتب جملًا من إنشائك باستخدام must وshould وmay وcan، ثم اطلب من زميلك تصحيحها.",
          wordBank: ["must", "should", "may", "can"],
          frame: [
            { label: "must (obligation)", hint: "I must …" },
            { label: "should (advice)", hint: "You should …" },
            { label: "may (possibility)", hint: "It may …" },
            { label: "can (ability)", hint: "I can …" }
          ],
          model: "I must finish my homework before I play. You should eat healthy food. It may be windy tomorrow. I can speak English and Arabic.",
          modelFromBook: false,
          checklist: ["I used must, should, may and can.", "I used the base verb after each modal.", "I did not put “to” after the modal.", "I started with a capital letter and ended with a full stop."],
          minWords: 20 }
      ],
      game: { kind: "quiz", title: "Modal Match", source: "extra",
        items: [
          { t: "mcq", q: "“I can help my brother.” — can shows:", options: ["advice", "ability", "possibility", "obligation"], answer: 1, why: "can = ability." },
          { t: "mcq", q: "“We should be polite.” — should shows:", options: ["advice", "ability", "possibility", "obligation"], answer: 0, why: "should = advice." },
          { t: "mcq", q: "“He may be tired.” — may shows:", options: ["advice", "ability", "possibility", "obligation"], answer: 2, why: "may = possibility." },
          { t: "mcq", q: "“You must drive safely.” — must shows:", options: ["advice", "ability", "possibility", "obligation"], answer: 3, why: "must = strong obligation." },
          { t: "choose", q: "She can (cook / cooks) rice.", options: ["cook", "cooks"], answer: 0, why: "After a modal → base verb." },
          { t: "choose", q: "You (should / should to) read every day.", options: ["should", "should to"], answer: 0, why: "No “to” after should." }
        ] },
      teacher: {
        notes: [
          "Warm-up: the role-model questions with the pictures (doctor, engineer).",
          "Teach the table: one modal = one job. Colour the modal and the base verb.",
          "Show the worked example and the Remember note: after modals, use the base form.",
          "Task 2 (fill) as guided practice; accept both answers where two modals make sense.",
          "Grammar Detective (Task 3a) in pairs, then 3b: each student writes 4 sentences and a partner checks."
        ],
        pair: ["Partner A says a modal; Partner B makes a sentence. Then swap.", "Swap your Task 3b sentences and underline the modal and the base verb."],
        group: ["Groups write 4 “Role Model Rules” (must / should / may / can) for a poster."],
        quick: [
          { q: "Which modal shows ability?", a: "can" },
          { q: "Which modal shows advice?", a: "should" },
          { q: "Correct: She must finishes her project.", a: "She must finish her project." },
          { q: "Correct: You should to listen.", a: "You should listen." }
        ]
      }
    },

    // ───────────────────────────── LESSON 7 — WRITING ─────────────────────────────
    {
      id: "u2l7", num: 7, skill: "Writing",
      title: "Responsibilities at School",
      pages: [42, 43],
      status: "complete",
      canDo: ["I can compose clear and structured reports detailing school responsibilities, appropriate behaviours, and related consequences."],
      goals: ["Say what I should and shouldn’t do at school.", "Use commas after time words.", "Plan and write a two-paragraph report."],
      goalsAr: ["أذكر ما ينبغي وما لا ينبغي أن أفعله في المدرسة.", "أستخدم الفاصلة بعد كلمات الزمن.", "أخطّط وأكتب تقريرًا من فقرتين."],
      linkers: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next"],
      warmup: {
        title: "Discuss the following questions.",
        image: null,
        emoji: "🏫",
        prompts: ["What do you do to help your classmates or teachers?", "What shouldn’t students do at school?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "activity", title: "Being Responsible – Tick if you should do ✔ – Cross ✖ if you shouldn’t.", page: 42, source: "book", stage: "guided",
          instructions: "Tick ✔ if you should do it. Cross ✖ if you shouldn’t.", instructionsAr: "ضع ✔ إذا كان ينبغي لك فعله، و✖ إذا كان لا ينبغي لك فعله.",
          items: [
            { t: "choose", q: "1. Throw trash on the floor.", options: ["✔ should", "✖ shouldn’t"], answer: 1, why: "Trash goes in the bin, not on the floor." },
            { t: "choose", q: "2. Say “Good morning” to your teacher.", options: ["✔ should", "✖ shouldn’t"], answer: 0, why: "It is polite and respectful." },
            { t: "choose", q: "3. Help a friend understand a question.", options: ["✔ should", "✖ shouldn’t"], answer: 0, why: "Being responsible means helping others." },
            { t: "choose", q: "4. Leave your homework at home.", options: ["✔ should", "✖ shouldn’t"], answer: 1, why: "You need to bring your homework to school." },
            { t: "choose", q: "5. Listen carefully in the class.", options: ["✔ should", "✖ shouldn’t"], answer: 0, why: "Listening helps you learn." }
          ] },
        { type: "grammar", title: "Tip: Being responsible means…", page: 42, source: "book",
          steps: [
            { title: "Being responsible means:",
              text: "- doing what you should do.\n- helping others and being respectful.\n- not doing things that stop you or others from learning.",
              textAr: "أن تكون مسؤولًا يعني: أن تفعل ما ينبغي عليك فعله، وأن تساعد الآخرين وتحترمهم، وألّا تفعل ما يمنعك أو يمنع غيرك من التعلّم.",
              examples: [] }
          ] },
        { type: "activity", title: "Look at the pictures below and complete the table with your ideas.", page: 42, source: "book", stage: "independent",
          instructions: "Look at the pictures. Write what you should and shouldn’t do.", instructionsAr: "انظر إلى الصور واكتب ما ينبغي وما لا ينبغي أن تفعله.",
          image: "crops/u2l7-pictures.jpg",
          items: [
            { t: "table", q: "Complete the table with your ideas.", open: true,
              head: ["✔ I should", "✖ I shouldn’t"],
              rows: [
                [{ open: true, model: "do my homework" }, { open: true, model: "shout in the class" }],
                [{ open: true, model: "help a friend who falls down" }, { open: true, model: "fight with my classmates" }],
                [{ open: true, model: "wake up early" }, { open: true, model: "be late for school" }],
                [{ open: true, model: "listen to my teacher" }, { open: true, model: "talk when the teacher is talking" }]
              ] }
          ] },
        { type: "grammar", title: "Tip: Commas after time words", page: 42, source: "book",
          steps: [
            { title: "Add a comma",
              text: "Add commas after words like “before,” “now,” “today,” and “as a result” to show time and change in your ideas clearly.",
              textAr: "ضع فاصلة بعد كلمات مثل before وnow وtoday وas a result لتوضيح الزمن والتغيّر في أفكارك.",
              examples: ["✖ As a result I became more confident.", "✔ {c:As a result,} I became more confident."] }
          ] },
        { type: "activity", title: "Extra Practice: Add the comma.", page: 42, source: "extra", stage: "guided",
          instructions: "Choose the sentence with the correct comma.", instructionsAr: "اختر الجملة التي فيها الفاصلة في مكانها الصحيح.",
          items: [
            { t: "mcq", q: "Choose the correct sentence.", options: ["Now I help my classmates.", "Now, I help my classmates.", "Now I, help my classmates."], answer: 1, why: "Put the comma right after “Now”." },
            { t: "mcq", q: "Choose the correct sentence.", options: ["Today, I am more organised.", "Today I am, more organised.", "Today I am more organised,"], answer: 0, why: "Put the comma right after “Today”." },
            { t: "mcq", q: "Choose the correct sentence.", options: ["As a result I, got good marks.", "As a result I got good marks.", "As a result, I got good marks."], answer: 2, why: "Put the comma right after “As a result”." },
            { t: "fix", q: "{Finally I} say “Good morning” to my teacher.", answer: ["Finally, I"], why: "Linkers at the start of a sentence take a comma: Finally, I …" }
          ] },
        { type: "write", title: "Plan and write a report of two paragraphs about your responsibilities at school and the things you shouldn't do.", page: 43, source: "book",
          instructions: "Being a good student means being responsible for the things I should do and being careful about the things I shouldn't do. a. Fill in the following plan. b. Use the ideas in your plan to write the report in your notebook.",
          instructionsAr: "خطّط واكتب تقريرًا من فقرتين عن مسؤولياتك في المدرسة والأشياء التي لا ينبغي أن تفعلها. املأ الخطة أولًا ثم اكتب التقرير.",
          wordBank: ["because", "also", "first", "finally", "therefore", "in addition", "for example", "next", "should", "shouldn’t", "responsible", "respectful", "regularly", "organised"],
          frame: [
            { label: "Paragraph (1): Responsibilities at school – Topic sentence", hint: "As a student, I have many responsibilities at school." },
            { label: "Paragraph (1) – Supporting details", hint: "First, I should … because … In addition, I should … For example, …" },
            { label: "Paragraph (1) – Concluding sentence", hint: "Therefore, being responsible helps me …" },
            { label: "Paragraph (2): The things I shouldn’t do – Topic sentence", hint: "There are also things I shouldn’t do at school." },
            { label: "Paragraph (2) – Supporting details", hint: "First, I shouldn’t … because … Next, I shouldn’t … Also, …" },
            { label: "Paragraph (2) – Concluding sentence", hint: "Finally, a good student … " }
          ],
          model: "As a student, I have many responsibilities at school. First, I should listen carefully in class because it helps me learn. In addition, I should do my homework regularly and bring my books every day. For example, I check my bag every night. I should also help my classmates and respect their ideas. Therefore, being responsible makes me more organised and confident.\n\nThere are also things I shouldn’t do at school. First, I shouldn’t throw trash on the floor because it makes the school dirty. Next, I shouldn’t shout in the class because it stops others from learning. Also, I shouldn’t fight with my classmates. Finally, a good student is always kind and respectful to everyone.",
          modelFromBook: false,
          checklist: ["I wrote two paragraphs.", "Each paragraph has a topic sentence, supporting details and a concluding sentence.", "I used should and shouldn’t with the base verb.", "I put a comma after linkers like First, Next and Finally."],
          bookChecklist: ["I started with an interesting opening sentence.", "I used new words that I learned from the unit.", "I used punctuation and capital letters correctly.", "I used AI tools to help me proofread my writing.", "I used suitable linkers.", "I ended my paragraphs clearly.", "I checked my spelling."],
          notes: ["ATTENTION: Use AI wisely and responsibly."],
          minWords: 80 }
      ],
      game: { kind: "scramble", title: "Sentence Builder", source: "extra",
        sentences: [
          "I should listen carefully in the class.",
          "I shouldn’t throw trash on the floor.",
          "First, I should do my homework.",
          "As a result, I became more confident.",
          "I should help a friend understand a question."
        ] },
      teacher: {
        notes: [
          "Warm-up: the two discussion questions (2 minutes).",
          "Task 2: students tick or cross the five actions, then read the “Being responsible means” tip together.",
          "Task 3 in groups: describe the pictures and fill the should / shouldn’t table.",
          "Teach the comma tip with the ✖ / ✔ example, then do the extra comma practice.",
          "Task 4: fill the plan first (topic sentence, supporting details, concluding sentence), then write the report. Show the model only after students try."
        ],
        pair: ["Swap plans: your partner checks each paragraph has a topic sentence, details and a conclusion.", "Peer-check with the book checklist before the final copy."],
        group: ["Groups make a “Responsible Student” poster: 4 should and 4 shouldn’t sentences with reasons."],
        quick: [
          { q: "Should you throw trash on the floor?", a: "No. I shouldn’t throw trash on the floor." },
          { q: "Add the comma: As a result I became more confident.", a: "As a result, I became more confident." },
          { q: "What are the three parts of a paragraph?", a: "Topic sentence, supporting details, concluding sentence." }
        ]
      }
    }
  ]
});

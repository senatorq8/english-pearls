// Unit 10 — Discoveries and Inventions (Module 4 "Exploring Abilities", printed pages 76–81, module cover p. 75)
BOOK.addUnit({
  id: "u10", num: 10, title: "Discoveries and Inventions", titleAr: "الاكتشافات والاختراعات",
  module: 4, moduleTitle: "Exploring Abilities",
  pages: [76, 81],
  cover: 75,
  status: "complete",
  outcomes: {
    "speech acts": ["Describe pictures", "Describe inventions", "Give predictions", "Make decisions", "Make comparisons"],
    "language structures": ["Use reflexive pronouns", "Use “a few/a little” with countable and uncountable nouns", "Use much/many"],
    "module 4 — you are expected to": ["Listen to complete a variety of tasks.", "Read and comprehend different types of texts (expository, informative).", "Speak about different topics."]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u10l1", num: 1, skill: "Reading",
      title: "Discoveries and Inventions",
      pages: [76, 77],
      status: "complete",
      canDo: ["Describe pictures", "Describe inventions"],
      goals: ["Read about old inventions.", "Learn 5 new words.", "Complete a table from the text.", "Find what the pronouns mean."],
      goalsAr: ["أقرأ عن اختراعات قديمة.", "أتعلّم 5 كلمات جديدة.", "أكمل جدولًا من النص.", "أعرف ماذا تعني الضمائر."],
      warmup: {
        title: "Before you read Think, Pair, Share",
        image: "crops/u10l1-warmup.jpg",
        emoji: "🛞",
        prompts: ["Look at the pictures. Name the inventions and discuss why people need them."],
        seconds: 90
      },
      vocab: [
        { w: "pot", pos: "noun", emoji: "🏺", def: "a round container for cooking or keeping things in", ex: "About 100.000 years ago, people invented the wheel, machines for digging, pots and metal tools.", exFromBook: true, ar: "وعاء / قِدر" },
        { w: "bead", pos: "noun", emoji: "📿", def: "a small ball of glass, wood or stone with a hole, used to make jewellery", ex: "As far back as 2500 BC, the first glass objects they made were probably beads, for jewellery.", exFromBook: true, ar: "خَرَزة" },
        { w: "spread", pos: "verb", emoji: "🌍", def: "to make something reach more people or places", ex: "The ancient Romans spread the skill of glass making from Egypt to the rest of the world.", exFromBook: true, ar: "ينشر" },
        { w: "ruins", pos: "noun", emoji: "🏛️", def: "the parts of old buildings or cities that are left after they are destroyed", ex: "While searching for sapodilla trees, they found the ruins of many cities from the past.", exFromBook: true, ar: "أطلال / آثار" },
        { w: "consequence", pos: "noun", emoji: "➡️", def: "a result of something that happened", ex: "In your opinion, what are the consequences of what the Chinese invented?", exFromBook: true, ar: "نتيجة / عاقبة" }
      ],
      sections: [
        { type: "reading", title: "Discoveries and Inventions (Informative Text)", page: 76,
          instructions: "Read the text and complete the table that follows:",
          paras: [
            "There were inventions in the past that were even more important than TVs and cars. In fact, people started inventing stone tools about 2.5 million years ago. About 100.000 years ago, people invented the wheel, machines for digging, pots and metal tools.",
            "The ancient Egyptians were skilled glassmakers. As far back as 2500 BC, the first glass objects they made were probably beads, for jewellery. The ancient Romans spread the skill of glass making from Egypt to the rest of the world. They made glass bottles and cups, and [[they]] also discovered how to make clear glass. They were the first people to use glass windows.",
            "The Chinese invented fast food about 3,500 years ago. [[They]] made noodles from flour and water and sold them, with delicious sauces, in cities around China.",
            "Today you can buy chewing gum everywhere in the world. Until 1870, however, it was only known in Mexico. Chewing gum comes from the Sapodilla tree. If you cut in the tree, a thick, milky liquid comes out. This liquid becomes gum and tastes very good. The Mexicans made chewing gum for [[themselves]]. While searching for sapodilla trees, they found the ruins of many cities from the past."
          ],
          speaker: null },

        { type: "activity", title: "Read the text and complete the table that follows:", page: 77, source: "book",
          instructions: "Write the invention of each place. Then write the order (1st, 2nd, 3rd) from the oldest invention to the newest.",
          instructionsAr: "اكتب اختراع كل مكان، ثم رتّبها من الأقدم إلى الأحدث.",
          items: [
            { t: "table", q: "Complete the table.",
              head: ["Place", "Invention", "Order"],
              rows: [
                ["Egypt", { answer: ["glass", "glass objects", "beads", "glass beads", "glass making", "glassmaking", "glass beads for jewellery", "glass objects (beads)"], model: "Glass objects (beads for jewellery)" }, "1st"],
                ["Mexico", { answer: ["chewing gum", "gum"], model: "Chewing gum" }, { answer: ["3rd", "third", "3"], model: "3rd" }],
                ["China", "Fast food", { answer: ["2nd", "second", "2"], model: "2nd" }]
              ],
              hint: "Egypt: 2500 BC (about 4,500 years ago). China: about 3,500 years ago. Mexico: chewing gum, known only in Mexico until 1870." }
          ] },

        { type: "activity", title: "Read the text again and answer the following questions:", page: 77, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. When did people start inventing stone tools?",
              model: "People started inventing stone tools about 2.5 million years ago.",
              keywords: [["2.5", "two and a half"], ["million"]],
              hint: "Read paragraph 1." },
            { t: "short", q: "2. How was chewing gum discovered?",
              model: "Chewing gum comes from the Sapodilla tree. If you cut in the tree, a thick, milky liquid comes out. This liquid becomes gum and tastes very good. The Mexicans made it for themselves.",
              keywords: [["sapodilla", "tree"], ["liquid", "cut"]],
              hint: "Read paragraph 4." },
            { t: "short", q: "3. In your opinion, what are the consequences of what the Chinese invented?",
              model: "Possible answer: Today fast food is everywhere. People can eat quickly, but too much fast food can be bad for our health.",
              open: true, hint: "The Chinese invented fast food. Is fast food good or bad for us today? Why?" }
          ] },

        { type: "activity", title: "What words would you use to replace the underlined pronouns in the text:", page: 77, source: "book",
          instructions: "Write the words that each pronoun refers to.", instructionsAr: "اكتب الكلمات التي يعود عليها كل ضمير.",
          items: [
            { t: "fill", q: "1. ‘they’ in the 2nd paragraph = ____", answer: ["the ancient Romans", "the Romans", "ancient Romans", "Romans"],
              hint: "Who spread the skill of glass making and made glass bottles and cups?", why: "“The ancient Romans … made glass bottles and cups, and they also discovered how to make clear glass.” they = the ancient Romans." },
            { t: "fill", q: "2. ‘They’ in the 3rd paragraph = ____", answer: ["the Chinese", "Chinese", "the Chinese people"],
              hint: "Read the sentence before “They”.", why: "“The Chinese invented fast food … They made noodles.” They = the Chinese." },
            { t: "fill", q: "3. ‘themselves’ in the 4th paragraph = ____", answer: ["the Mexicans", "Mexicans", "the Mexican people"],
              hint: "Who made chewing gum?", why: "“The Mexicans made chewing gum for themselves.” themselves = the Mexicans." }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "People invented the wheel about 100.000 years ago.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“About 100.000 years ago, people invented the wheel …”" },
            { t: "mcq", q: "The ancient Romans were the first glassmakers.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "The ancient Egyptians made the first glass objects. The Romans spread the skill." },
            { t: "mcq", q: "The Romans were the first people to use glass windows.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“They were the first people to use glass windows.”" },
            { t: "mcq", q: "The Chinese made noodles from rice and milk.", options: ["True", "False"], answer: 1, hint: "Paragraph 3.", why: "They made noodles from flour and water." },
            { t: "mcq", q: "Until 1870, chewing gum was only known in Mexico.", options: ["True", "False"], answer: 0, hint: "Paragraph 4.", why: "“Until 1870, however, it was only known in Mexico.”" }
          ] },

        { type: "activity", title: "Extra Practice: Who invented what?", source: "extra", stage: "guided",
          instructions: "Match the people to their invention or discovery.", instructionsAr: "صِل الشعوب باختراعاتها.",
          items: [
            { t: "match", q: "Match the people to the invention.",
              pairs: [["The ancient Egyptians", "glass beads for jewellery"], ["The ancient Romans", "clear glass and glass windows"], ["The Chinese", "fast food (noodles)"], ["The Mexicans", "chewing gum"]],
              hint: "One people in each paragraph.", why: "Paragraph 2: Egyptians and Romans; paragraph 3: the Chinese; paragraph 4: the Mexicans." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "My grandmother made a necklace with small glass (beads / ruins).", options: ["beads", "ruins"], answer: 0, why: "Beads are small balls used in jewellery." },
            { t: "choose", q: "We visited the (ruins / pots) of an old city.", options: ["ruins", "pots"], answer: 0, why: "Ruins = what is left of old buildings." },
            { t: "choose", q: "The news (spread / found) quickly around the school.", options: ["spread", "found"], answer: 0, why: "Spread = reach more people." },
            { t: "choose", q: "Eating too much sugar can have bad (consequences / beads).", options: ["consequences", "beads"], answer: 0, why: "Consequences = results." },
            { t: "choose", q: "Mum cooked the soup in a big (pot / ruin).", options: ["pot", "ruin"], answer: 0, why: "A pot is used for cooking." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the three pictures (a vase/pot, glass making, tyres/the wheel). Students name the inventions and say why people need them.",
          "Pre-teach the 5 words with the emoji and Arabic meaning.",
          "Read paragraph by paragraph. After each one ask: Who? What did they invent? When?",
          "Complete the table together: Egypt 1st (2500 BC), China 2nd (3,500 years ago), Mexico 3rd.",
          "Pronoun task: students draw an arrow from each underlined pronoun back to the noun."
        ],
        pair: ["A asks “Who invented …?”, B answers from the text. Then swap.", "Pairs compare their tables and explain the order."],
        group: ["Groups of 4: each student is one people (Egyptians, Romans, Chinese, Mexicans) and tells the group about their invention."],
        quick: [
          { q: "Who were skilled glassmakers?", a: "The ancient Egyptians." },
          { q: "When did the Chinese invent fast food?", a: "About 3,500 years ago." },
          { q: "Where does chewing gum come from?", a: "The Sapodilla tree." },
          { q: "What does ‘themselves’ refer to in paragraph 4?", a: "The Mexicans." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u10l2", num: 2, skill: "Grammar",
      title: "Reflexive Pronouns",
      pages: [77, 77],
      status: "complete",
      canDo: ["Use reflexive pronouns", "Describe inventions"],
      goals: ["Learn myself, yourself, himself …", "Use by + myself = alone.", "Talk about an invention with a partner."],
      goalsAr: ["أتعلّم ضمائر الانعكاس: myself و yourself و himself …", "أستخدم by myself بمعنى «وحدي».", "أتحدّث مع زميلي عن اختراع."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "🪞",
        prompts: ["Read the last paragraph and answer the following question:", "Who made the chewing gum for the Mexicans?"],
        seconds: 60
      },
      vocab: [
        { w: "president", pos: "noun", emoji: "🎖️", def: "the leader of a country, a company or a club", ex: "The president himself came to our school.", exFromBook: false, ar: "رئيس" }
      ],
      sections: [
        { type: "grammar", title: "Reflexive Pronouns", page: 77,
          steps: [
            { title: "Step 1 — The book’s table and example",
              text: "Each subject pronoun has a reflexive pronoun (look at the table). In the text: “The Mexicans made chewing gum for themselves.”",
              textAr: "لكل ضمير فاعل ضمير انعكاسي خاص به (انظر الجدول). مثال من النص: The Mexicans made chewing gum for themselves.",
              examples: ["{s:The Mexicans} {v:made} {o:chewing gum} for {o:themselves}."] },
            { title: "Step 2 — Same person (Extra)", source: "extra",
              text: "We use a reflexive pronoun when the subject and the object are the SAME person. The Mexicans made gum for the Mexicans → for themselves.",
              textAr: "نستخدم الضمير الانعكاسي عندما يكون الفاعل والمفعول به الشخص نفسه.",
              examples: ["{s:I} {v:looked at} {o:myself} in the mirror.", "{s:He} {v:hurt} {o:himself} when he fell."] },
            { title: "Step 3 — by + reflexive = alone (Extra)", source: "extra",
              text: "by myself / by herself … means alone, without help.",
              textAr: "by myself تعني «وحدي، بدون مساعدة».",
              examples: ["{s:My sister} {v:made} {o:a delicious cake} by {o:herself}. (= nobody helped her)", "{s:I} {v:did} {o:the homework} by {o:myself}."] },
            { title: "Step 4 — Reflexive for emphasis (Extra)", source: "extra",
              text: "We can put a reflexive pronoun after a noun to make it strong: it was really that person.",
              textAr: "نضع الضمير الانعكاسي بعد الاسم للتأكيد: هو نفسه.",
              examples: ["{s:The president} {o:himself} {v:came} to our school."] },
            { title: "Step 5 — Be careful! (Extra)", source: "extra",
              text: "One person → -self. More than one → -selves. You (one) → yourself; you (two or more) → yourselves. There is no “hisself” or “theirselves”.",
              textAr: "للمفرد ‎-self وللجمع ‎-selves. لا توجد كلمة hisself ولا theirselves.",
              examples: ["✗ {n:hisself} → ✓ {o:himself}", "✗ {n:theirselves} → ✓ {o:themselves}", "✗ We did it by {n:ourself}. → ✓ by {o:ourselves}"] }
          ],
          table: {
            head: ["Subject pronouns", "Reflexive pronouns"],
            rows: [["I", "myself"], ["you", "yourself"], ["he", "himself"], ["she", "herself"], ["we", "ourselves"], ["they", "themselves"], ["you", "yourselves"]]
          },
          worked: {
            q: "Complete: I did the homework by ____.",
            steps: ["Find the subject: I.", "Look at the table: I → myself.", "by myself = alone, without help."],
            a: "I did the homework by myself."
          },
          notes: ["The reflexive pronoun matches the subject: she → herself, we → ourselves.", "Plural reflexive pronouns end in -selves."] },

        { type: "activity", title: "a. Read the last paragraph and answer the following question:", page: 77, source: "book", stage: "guided",
          instructions: "Read paragraph 4 again.", instructionsAr: "اقرأ الفقرة الرابعة مرة أخرى.",
          items: [
            { t: "short", q: "Who made the chewing gum for the Mexicans?",
              model: "The Mexicans made it for themselves.",
              keywords: [["mexican", "they"], ["themselves"]],
              hint: "“The Mexicans made chewing gum for …”" }
          ] },

        { type: "activity", title: "b. Complete the following sentences:", page: 77, source: "book", stage: "guided",
          instructions: "Use a reflexive pronoun from the table.", instructionsAr: "أكمل بضمير انعكاسي من الجدول.",
          items: [
            { t: "fill", q: "1. You can walk to school by ____.", answer: ["yourself", "yourselves"], bank: ["myself", "yourself", "himself", "herself", "ourselves", "themselves", "yourselves"],
              hint: "The subject is you.", why: "you → yourself (one person) or yourselves (more than one). Both are correct." },
            { t: "fill", q: "2. The president ____ came to our school.", answer: ["himself", "herself"], bank: ["myself", "yourself", "himself", "herself", "ourselves", "themselves", "yourselves"],
              hint: "The president = he (or she).", why: "The president himself (or herself) = really the president. This is for emphasis." },
            { t: "fill", q: "3. My sister made a delicious cake by ____.", answer: ["herself"], bank: ["myself", "yourself", "himself", "herself", "ourselves", "themselves", "yourselves"],
              hint: "My sister = she.", why: "she → herself. by herself = alone." },
            { t: "fill", q: "4. I did the homework by ____.", answer: ["myself"], bank: ["myself", "yourself", "himself", "herself", "ourselves", "themselves", "yourselves"],
              hint: "The subject is I.", why: "I → myself." }
          ] },

        { type: "speak", title: "Speaking: In pairs, choose an invention and discuss the following questions:", page: 77, source: "book",
          instructions: "Choose an invention (for example: the car, the phone, glass, the wheel). Ask and answer the questions.",
          dialogue: [
            { who: "A", text: "Why was it invented?" }, { who: "B", text: "" },
            { who: "A", text: "Who uses it?" }, { who: "B", text: "" },
            { who: "A", text: "How did it change our lives?" }, { who: "B", text: "" },
            { who: "A", text: "How would you like to improve it?" }, { who: "B", text: "" }
          ],
          starters: ["It was invented to …", "Everybody uses it, for example …", "It changed our lives because …", "I would like to make it …"],
          record: true },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the reflexive pronoun", source: "extra", stage: "guided",
          instructions: "Look at the subject. Choose the right pronoun.", instructionsAr: "انظر إلى الفاعل واختر الضمير المناسب.",
          items: [
            { t: "mcq", q: "Ahmed fixed his bike by ____.", options: ["himself", "herself", "themselves"], answer: 0, hint: "Ahmed = he.", why: "he → himself." },
            { t: "mcq", q: "We painted the classroom by ____.", options: ["ourself", "ourselves", "themselves"], answer: 1, hint: "we = more than one.", why: "we → ourselves (-selves for plural)." },
            { t: "mcq", q: "The girls cooked lunch by ____.", options: ["herself", "theirselves", "themselves"], answer: 2, hint: "The girls = they.", why: "they → themselves. “theirselves” is not a word." },
            { t: "mcq", q: "Be careful! Don't hurt ____, Ali.", options: ["yourself", "yourselves", "himself"], answer: 0, hint: "You are talking to one person.", why: "you (one person) → yourself." },
            { t: "mcq", q: "I looked at ____ in the mirror.", options: ["me", "myself", "mine"], answer: 1, hint: "Subject and object are the same person.", why: "I … myself." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🎂 Make a sentence.", words: ["My", "sister", "made", "the", "cake", "by", "herself."], answer: ["My sister made the cake by herself."], why: "Subject + verb + object + by + reflexive." },
            { t: "order", q: "🚲 Make a sentence.", words: ["He", "fixed", "the", "bike", "by", "himself."], answer: ["He fixed the bike by himself."], why: "he → himself." },
            { t: "order", q: "🏫 Make a sentence.", words: ["The", "president", "himself", "came", "to", "our", "school."], answer: ["The president himself came to our school."], why: "The reflexive comes right after the noun for emphasis." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "توجد كلمة خطأ. اكتب التصحيح.",
          items: [
            { t: "fix", q: "They made the poster by {themself}.", answer: ["themselves"], hint: "they = more than one.", why: "they → themselves." },
            { t: "fix", q: "He taught {hisself} to swim.", answer: ["himself"], hint: "There is no “hisself”.", why: "he → himself." },
            { t: "fix", q: "We enjoyed {ourself} at the party.", answer: ["ourselves"], hint: "we = plural.", why: "we → ourselves." },
            { t: "fix", q: "Mona, did you make this dress {yourselves}?", answer: ["yourself"], hint: "You are talking to one person: Mona.", why: "you (one person) → yourself." },
            { t: "short", q: "Write about something you did by yourself.", model: "I cleaned my room by myself.", open: true, hint: "I … by myself." }
          ] }
      ],
      game: { kind: "quiz", title: "Reflexive Quiz",
        items: [
          { t: "choose", q: "she → (herself / himself)", options: ["herself", "himself"], answer: 0, why: "she → herself" },
          { t: "choose", q: "we → (ourselves / ourself)", options: ["ourselves", "ourself"], answer: 0, why: "Plural → -selves." },
          { t: "choose", q: "they → (theirselves / themselves)", options: ["theirselves", "themselves"], answer: 1, why: "they → themselves" },
          { t: "choose", q: "I → (myself / meself)", options: ["myself", "meself"], answer: 0, why: "I → myself" },
          { t: "choose", q: "he → (hisself / himself)", options: ["hisself", "himself"], answer: 1, why: "he → himself" },
          { t: "choose", q: "you (a group) → (yourself / yourselves)", options: ["yourself", "yourselves"], answer: 1, why: "More than one person → yourselves." }
        ] },
      teacher: {
        notes: [
          "Start with the book question: Who made the chewing gum for the Mexicans? → They made it for themselves.",
          "Drill the table: teacher says the subject pronoun, students answer with the reflexive pronoun.",
          "Teach by + reflexive = alone, and emphasis (The president himself).",
          "Do 5b, then the Speaking task in pairs.",
          "Weak students: Extra Steps 1–3."
        ],
        pair: ["Pronoun ping-pong: A says “she”, B says “herself”. Swap after 6 turns.", "Speaking task 6: pairs choose an invention and ask the four questions."],
        group: ["Groups mime an action (cutting hair, looking in the mirror); the others say the sentence: She is looking at herself."],
        quick: [
          { q: "What is the reflexive pronoun of “they”?", a: "themselves" },
          { q: "Complete: I did the homework by ___.", a: "myself" },
          { q: "What does “by herself” mean?", a: "Alone, without help." },
          { q: "Which is correct: ourself or ourselves?", a: "ourselves" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u10l3", num: 3, skill: "Listening",
      title: "Greatest Inventions of all time",
      pages: [78, 78],
      status: "complete",
      canDo: ["Describe inventions", "Give predictions", "Make comparisons"],
      goals: ["Order inventions by importance.", "Listen to a dialogue about inventions.", "Make predictions about 2050."],
      goalsAr: ["أرتّب الاختراعات حسب أهميتها.", "أستمع إلى حوار عن الاختراعات.", "أتوقّع اختراعات عام 2050."],
      warmup: {
        title: "Listening",
        image: "crops/u10l3-warmup.jpg",
        emoji: "💡",
        prompts: ["Sort the following inventions according to their importance to you:", "electric light – fridge – television – car – internet – computer"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Sort the following inventions according to their importance to you:", page: 78, source: "book",
          instructions: "Write a number in each circle: 1 = the most important to you, 6 = the least important.", instructionsAr: "اكتب رقمًا لكل اختراع: 1 = الأهم بالنسبة لك.",
          items: [
            { t: "table", q: "My order", open: true,
              head: ["Invention", "My order (1–6)"],
              rows: [["electric light", { open: true }], ["fridge", { open: true }], ["television", { open: true }], ["car", { open: true }], ["internet", { open: true }], ["computer", { open: true }]] }
          ] },

        { type: "listen", title: "2. a. Listen to the dialogue which took place between Nada and Fatima many years ago, and fill in the table with what they thought were the five most important inventions:", page: 78, source: "book",
          needsAudio: true, track: "10.1",
          instructions: "Listen to the dialogue (track 10.1). Write the five inventions and the reasons.",
          items: [
            { t: "table", q: "Fill in the table.", open: true,
              head: ["No.", "Inventions", "Reasons"],
              rows: [["1", { open: true }, { open: true }], ["2", { open: true }, { open: true }], ["3", { open: true }, { open: true }], ["4", { open: true }, { open: true }], ["5", { open: true }, { open: true }]] }
          ] },

        { type: "speak", title: "b. If you met Nada and Fatma today, what would you tell them about today’s 5 most important inventions? How about in 2050?", page: 78, source: "book",
          instructions: "Tell your partner about today’s 5 most important inventions. Then make predictions about 2050.",
          dialogue: [
            { who: "A", text: "Today, the most important invention is …" }, { who: "B", text: "" },
            { who: "A", text: "What do you think people will use in 2050?" }, { who: "B", text: "" }
          ],
          starters: ["Today, the most important invention is … because …", "It is more important than … because …", "In 2050, people will probably …", "I think we will have …"],
          record: true },

        { type: "listen", title: "Extra Practice: Grandpa’s Inventions (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Yousef", text: "Grandpa, what was the most important invention when you were young?" },
            { who: "Grandpa", text: "The fridge! Before we had a fridge, food went bad very quickly in the summer." },
            { who: "Yousef", text: "Did you have a television?" },
            { who: "Grandpa", text: "Yes, but only one, and it was black and white. The whole family watched it together in the evening." },
            { who: "Yousef", text: "And now I have a phone, a computer and the internet!" },
            { who: "Grandpa", text: "That's true. The internet is more useful than my old television, but I think the fridge is still the most important. What do you think people will invent in 2050?" },
            { who: "Yousef", text: "Maybe cars that fly!" }
          ],
          items: [
            { t: "mcq", q: "What was the most important invention for Grandpa when he was young?", options: ["the car", "the fridge", "the phone", "the computer"], answer: 1, why: "“The fridge!”" },
            { t: "mcq", q: "Why was the fridge important?", options: ["Food went bad quickly in summer.", "It was cheap.", "It played music.", "It was black and white."], answer: 0, why: "“Before we had a fridge, food went bad very quickly in the summer.”" },
            { t: "mcq", q: "What colour was Grandpa's television?", options: ["colour", "black and white", "silver", "red"], answer: 1, why: "“It was black and white.”" },
            { t: "mcq", q: "When did the family watch television?", options: ["in the morning", "at lunch", "in the evening", "at night only on Fridays"], answer: 2, why: "“The whole family watched it together in the evening.”" },
            { t: "mcq", q: "What does Yousef predict for 2050?", options: ["cars that fly", "a new fridge", "a bigger television", "robots in schools"], answer: 0, why: "“Maybe cars that fly!”" },
            { t: "fill", q: "The internet is more ____ than my old television.", answer: ["useful"], bank: ["useful", "important", "cheap"], why: "Grandpa says: “The internet is more useful than my old television.”" }
          ] }
      ],
      game: { kind: "scramble", title: "Prediction Builder",
        sentences: [
          "In 2050, people will drive flying cars.",
          "The internet is more useful than television.",
          "I think robots will help us at home.",
          "The fridge is the most important invention for my grandpa.",
          "Electric light changed our lives."
        ] },
      teacher: {
        notes: [
          "Task 1: each student numbers the six inventions, then compares with a partner and explains the top one.",
          "Task 2a: play track 10.1 (book recording) twice. There is no answer key here: check the table orally with what students heard.",
          "Task 2b: model a prediction with will (In 2050, people will …). Use the comparatives: more important than, the most important.",
          "If the audio is not available, use the Extra Practice script (computer voice)."
        ],
        pair: ["Pairs agree on ONE top-5 list and explain it to another pair.", "A is Nada (many years ago), B is a student today: compare your lists."],
        group: ["Groups make a poster “Inventions of 2050” with three predictions."],
        quick: [
          { q: "Which invention is the most important to you? Why?", a: "Personal answer, e.g. The internet, because I use it to learn." },
          { q: "Make a prediction about 2050.", a: "e.g. In 2050, people will have flying cars." },
          { q: "Compare two inventions.", a: "e.g. The car is more useful than the television." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u10l4", num: 4, skill: "Grammar",
      title: "a few / a little / many / much",
      pages: [78, 79],
      status: "complete",
      canDo: ["Use “a few/a little” with countable and uncountable nouns", "Use much/many"],
      goals: ["Know countable and uncountable nouns.", "Use a few / many with countable nouns.", "Use a little / much with uncountable nouns."],
      goalsAr: ["أميّز الأسماء المعدودة وغير المعدودة.", "أستخدم a few و many مع الأسماء المعدودة.", "أستخدم a little و much مع الأسماء غير المعدودة."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "📚",
        prompts: ["How many books are in your bag?", "How much money do you save every month?"],
        seconds: 60
      },
      vocab: [
        { w: "mainly", pos: "adverb", emoji: "🎯", def: "mostly; in most cases", ex: "much is mainly used in negative sentences and questions.", exFromBook: true, ar: "بشكل رئيسي / غالبًا" }
      ],
      sections: [
        { type: "grammar", title: "a few / a little / many / much", page: 78,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "many / a few + a countable noun → There are a few books about the history of inventions in our school library. much / a little + an uncountable noun → I save a little money every month. much is mainly used in negative sentences and questions.",
              textAr: "many و a few مع الأسماء المعدودة، و much و a little مع الأسماء غير المعدودة. ونستخدم much غالبًا في النفي والسؤال.",
              examples: ["There are {t:a few} {o:books} about the history of inventions in our school library.", "{s:I} {v:save} {t:a little} {o:money} every month."] },
            { title: "Step 2 — Countable or uncountable? (Extra)", source: "extra",
              text: "Countable nouns: we can count them (1 book, 2 books). They have a plural -s. Uncountable nouns: we cannot count them (money, milk, sand, time, rain). No -s and no a / an.",
              textAr: "الأسماء المعدودة يمكن عدّها ولها جمع بإضافة s. الأسماء غير المعدودة لا تُعدّ ولا نضيف لها s.",
              examples: ["🍎 one apple → two {o:apples} → {t:a few} apples", "🥛 milk → (no -s) → {t:a little} milk"] },
            { title: "Step 3 — Small amount: a few / a little (Extra)", source: "extra",
              text: "a few and a little mean “some, a small number / a small amount”. We use them in positive sentences.",
              textAr: "a few و a little تعنيان «قليل / بعض» وتُستخدمان في الجمل المثبتة.",
              examples: ["{s:I} {v:have} {t:a few} {o:close friends}.", "There will be {t:a little} {o:rain} this week."] },
            { title: "Step 4 — many / much in negatives and questions (Extra)", source: "extra",
              text: "many + countable, much + uncountable. much is mainly used in negative sentences and questions. Questions: How many …? / How much …?",
              textAr: "many مع المعدود و much مع غير المعدود، وتُستخدم much غالبًا في النفي والسؤال.",
              examples: ["There {n:aren’t} {t:many} {o:chairs} in our classroom.", "{s:I} {n:haven’t got} {t:much} {o:time}.", "{q:How much} {o:milk} is there? / {q:How many} {o:dinars} do you need?"] },
            { title: "Step 5 — Be careful! (Extra)", source: "extra",
              text: "Do not use a few / many with uncountable nouns, and do not use a little / much with plural nouns.",
              textAr: "لا نستخدم a few أو many مع غير المعدود، ولا a little أو much مع الجمع.",
              examples: ["✗ {n:a few} money → ✓ {t:a little} money", "✗ {n:much} books → ✓ {t:many} books"] }
          ],
          table: {
            head: ["Words", "Noun", "Example (from the book)"],
            rows: [
              ["many / a few", "a countable noun", "There are a few books about the history of inventions in our school library."],
              ["much / a little", "an uncountable noun", "I save a little money every month."]
            ]
          },
          worked: {
            q: "Complete: There aren’t ____ extra chairs in our classroom. (a few / a little / much / many)",
            steps: ["Look at the noun: chairs. We can count chairs → countable.", "Countable → a few or many.", "The sentence is negative (aren’t) → many."],
            a: "There aren’t many extra chairs in our classroom."
          },
          notes: ["Countable: books, shoes, months, photos, dinars, kilos. Uncountable: money, butter, sand, milk, rice, time, rain.", "much is mainly used in negative sentences and questions."] },

        { type: "activity", title: "a. Fill in the table with words from the list:", page: 78, source: "book", stage: "guided",
          instructions: "kilos – butter – shoes – money – months – photos – sand – milk – rice – dinars. Examples: a few kilos, a little rice. Choose a few or a little for each word.",
          instructionsAr: "اختر a few أو a little لكل كلمة.",
          items: [
            { t: "choose", q: "(a few / a little) butter", options: ["a few", "a little"], answer: 1, why: "butter is uncountable → a little." },
            { t: "choose", q: "(a few / a little) shoes", options: ["a few", "a little"], answer: 0, why: "shoes is countable (plural) → a few." },
            { t: "choose", q: "(a few / a little) money", options: ["a few", "a little"], answer: 1, why: "money is uncountable → a little." },
            { t: "choose", q: "(a few / a little) months", options: ["a few", "a little"], answer: 0, why: "months is countable → a few." },
            { t: "choose", q: "(a few / a little) photos", options: ["a few", "a little"], answer: 0, why: "photos is countable → a few." },
            { t: "choose", q: "(a few / a little) sand", options: ["a few", "a little"], answer: 1, why: "sand is uncountable → a little." },
            { t: "choose", q: "(a few / a little) milk", options: ["a few", "a little"], answer: 1, why: "milk is uncountable → a little." },
            { t: "choose", q: "(a few / a little) dinars", options: ["a few", "a little"], answer: 0, why: "dinars is countable → a few." }
          ] },

        { type: "activity", title: "b. Complete the following sentences with a few / a little / much / many:", page: 79, source: "book", stage: "guided",
          instructions: "Look at the noun and the sentence (positive or negative).", instructionsAr: "انظر إلى الاسم ونوع الجملة.",
          items: [
            { t: "fill", q: "1. I haven’t got ____ time, we’ll have to talk fast.", answer: ["much"], bank: ["a few", "a little", "much", "many"],
              hint: "time is uncountable. The sentence is negative.", why: "Uncountable + negative → much." },
            { t: "fill", q: "2. There will be ____ rain this week.", answer: ["a little"], bank: ["a few", "a little", "much", "many"],
              hint: "rain is uncountable. The sentence is positive.", why: "Uncountable + positive → a little." },
            { t: "fill", q: "3. I have ____ close friends. It’s hard to find a true friend.", answer: ["a few"], bank: ["a few", "a little", "much", "many"],
              hint: "friends is countable. It’s hard to find a true friend → a small number.", why: "Countable + small number → a few." },
            { t: "fill", q: "4. There aren’t ____ extra chairs in our classroom, we need more.", answer: ["many"], bank: ["a few", "a little", "much", "many"],
              hint: "chairs is countable. The sentence is negative.", why: "Countable + negative → many." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — How many or How much?", source: "extra", stage: "guided",
          instructions: "Choose the right question word.", instructionsAr: "اختر How many أو How much.",
          items: [
            { t: "mcq", q: "____ books are in the library?", options: ["How many", "How much"], answer: 0, why: "books → countable → How many." },
            { t: "mcq", q: "____ sugar do you want?", options: ["How many", "How much"], answer: 1, why: "sugar → uncountable → How much." },
            { t: "mcq", q: "____ photos did you take?", options: ["How many", "How much"], answer: 0, why: "photos → countable → How many." },
            { t: "mcq", q: "____ water do we need?", options: ["How many", "How much"], answer: 1, why: "water → uncountable → How much." },
            { t: "mcq", q: "We don't have ____ milk.", options: ["many", "much"], answer: 1, why: "milk → uncountable + negative → much." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "I have {a little} friends in my new school.", answer: ["a few"], hint: "friends = countable.", why: "Countable → a few." },
            { t: "fix", q: "There isn’t {many} sand in the box.", answer: ["much"], hint: "sand = uncountable.", why: "Uncountable + negative → much." },
            { t: "fix", q: "Please add {a few} butter to the pan.", answer: ["a little"], hint: "butter = uncountable.", why: "Uncountable → a little." },
            { t: "fix", q: "There aren’t {much} shops in our street.", answer: ["many"], hint: "shops = countable.", why: "Countable + negative → many." },
            { t: "short", q: "Write a sentence about your bag with a few or a little.", model: "There are a few pens in my bag.", open: true, hint: "There are a few … / There is a little …" }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! a few or a little?",
        buckets: ["a few / many (countable)", "a little / much (uncountable)"],
        cards: [["books", 0], ["shoes", 0], ["dinars", 0], ["photos", 0], ["months", 0], ["money", 1], ["milk", 1], ["sand", 1], ["butter", 1], ["time", 1]] },
      teacher: {
        notes: [
          "Show real objects: a few pens (count them) and a little water in a cup (can’t count it).",
          "Read the book box. Underline countable nouns in blue and uncountable nouns in red.",
          "Task a: students sort the words into the a few / a little table.",
          "Task b: before each gap ask two questions: countable or uncountable? positive or negative?",
          "Strong students: How many / How much questions in pairs."
        ],
        pair: ["A names a noun, B says “a few …” or “a little …”.", "Pairs ask How many / How much questions about the classroom."],
        group: ["Shopping list: groups write a list with a few / a little for a party (a few cups, a little juice)."],
        quick: [
          { q: "a few or a little: ___ money?", a: "a little money" },
          { q: "many or much: There aren’t ___ chairs.", a: "many" },
          { q: "When is much mainly used?", a: "In negative sentences and questions." },
          { q: "Is “sand” countable or uncountable?", a: "Uncountable." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — WRITING ─────────────────────────
    {
      id: "u10l5", num: 5, skill: "Writing",
      title: "Speaking and Writing: An Invention You Cannot Live Without",
      pages: [79, 79],
      status: "complete",
      canDo: ["Make decisions", "Describe inventions"],
      goals: ["Choose an invention with your group.", "Explain why it is important.", "Write an opinion paragraph."],
      goalsAr: ["أختار اختراعًا مع مجموعتي.", "أشرح لماذا هو مهم.", "أكتب فقرة رأي."],
      warmup: {
        title: "Speaking and Writing",
        image: null,
        emoji: "🤔",
        prompts: ["Which invention do you use every day?", "Can you live one day without it?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "speak", title: "4. a. Work in groups to decide on an invention that you cannot live without.", page: 79, source: "book",
          instructions: "• Name the invention and explain how important it is for you. • Discuss how the world would be different without it. • Take notes, then tell the class about your decision.",
          dialogue: [
            { who: "A", text: "I can’t live without my phone. What about you?" }, { who: "B", text: "" },
            { who: "C", text: "How would the world be different without it?" }, { who: "B", text: "" }
          ],
          starters: ["I can’t live without … because …", "It is very important for me because …", "Without it, the world would be …", "We decided on … because …"],
          record: true },

        { type: "write", title: "b. Write an opinion paragraph explaining why you think your invention is important.", page: 79, source: "book",
          instructions: "Write an opinion paragraph explaining why you think your invention is important.",
          wordBank: ["In my opinion,", "I think", "because", "For example,", "also", "Without it,", "In conclusion,"],
          frame: [
            { label: "Topic sentence", hint: "State your main idea: In my opinion, the … is the most important invention." },
            { label: "Supporting details", hint: "Give 2–3 reasons and examples: First, … For example, … Also, …" },
            { label: "Concluding sentence", hint: "End strongly: In conclusion, I can’t live without …" }
          ],
          model: "In my opinion, the mobile phone is the most important invention in my life. First, I can talk to my family and friends at any time. For example, I call my mother when school finishes. Also, I use it to search for information for my homework. Without it, I would need a camera, a map and a computer! In conclusion, I cannot live without my mobile phone.",
          modelFromBook: false,
          checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I gave reasons with because.", "I answered the task."],
          bookChecklist: ["Did I include a topic sentence stating my main idea?", "Did I add supporting details to develop the topic sentence?", "Did I end with a strong concluding sentence?", "Did I edit my paragraph?"],
          minWords: 60 },

        { type: "activity", title: "Extra Practice: Parts of a paragraph", source: "extra", stage: "guided",
          instructions: "Is it a topic sentence, a supporting detail or a concluding sentence?", instructionsAr: "هل هي جملة رئيسية أم تفصيل داعم أم جملة ختامية؟",
          items: [
            { t: "mcq", q: "“In my opinion, the fridge is the most important invention.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It states the main idea." },
            { t: "mcq", q: "“For example, it keeps our milk and meat fresh.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It gives an example to support the main idea." },
            { t: "mcq", q: "“In conclusion, I can’t imagine my life without a fridge.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2, why: "“In conclusion” ends the paragraph." },
            { t: "mcq", q: "“Also, we can keep cold water in the hot summer.”", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It adds another reason." }
          ] },

        { type: "activity", title: "Extra Practice: Order the paragraph", source: "extra", stage: "independent",
          instructions: "Put the sentences in order to make a paragraph.", instructionsAr: "رتّب الجمل لتكوّن فقرة.",
          items: [
            { t: "match", q: "Match the number to the sentence.",
              pairs: [["1st", "In my opinion, the car is a very important invention."], ["2nd", "First, it takes us to school and work quickly."], ["3rd", "Also, we can visit our family in other areas."], ["4th", "In conclusion, life would be very hard without cars."]],
              hint: "Topic sentence → details → conclusion.", why: "Start with the main idea, add details with First / Also, end with In conclusion." }
          ] }
      ],
      game: { kind: "quiz", title: "Opinion Quiz",
        items: [
          { t: "mcq", q: "Which phrase gives an opinion?", options: ["In my opinion,", "Yesterday,", "Under the table"], answer: 0, why: "In my opinion = what I think." },
          { t: "mcq", q: "Which word gives a reason?", options: ["because", "but", "or"], answer: 0, why: "because + reason." },
          { t: "mcq", q: "Which phrase ends a paragraph?", options: ["First,", "For example,", "In conclusion,"], answer: 2, why: "In conclusion = the end." },
          { t: "mcq", q: "Where does the topic sentence go?", options: ["at the start", "in the middle", "at the end"], answer: 0, why: "The topic sentence states the main idea first." }
        ] },
      teacher: {
        notes: [
          "Groups of 4: each student suggests one invention; the group votes and decides.",
          "Groups take notes (importance + how the world would be different) and tell the class.",
          "Show the paragraph frame: topic sentence → supporting details → concluding sentence.",
          "Students write; then they check with the book’s checklist."
        ],
        pair: ["Pairs swap paragraphs and tick the book checklist for each other."],
        group: ["Class vote: which invention did most groups choose?"],
        quick: [
          { q: "What is a topic sentence?", a: "The first sentence; it states the main idea." },
          { q: "Give one phrase to start your opinion.", a: "In my opinion, / I think" },
          { q: "How do you end the paragraph?", a: "With a strong concluding sentence (In conclusion, …)." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u10l6", num: 6, skill: "Reading",
      title: "Inventors who changed the world",
      pages: [80, 81],
      status: "complete",
      canDo: ["Describe inventions", "Make comparisons"],
      goals: ["Read about three famous inventors.", "Learn 7 new words.", "Choose the correct answers.", "Answer questions about the text."],
      goalsAr: ["أقرأ عن ثلاثة مخترعين مشهورين.", "أتعلّم 7 كلمات جديدة.", "أختار الإجابات الصحيحة.", "أجيب عن أسئلة حول النص."],
      warmup: {
        title: "Before you read Think, Pair, Share",
        image: "crops/u10l6-warmup.jpg",
        emoji: "🧑‍🔬",
        prompts: ["Make a list of famous inventors you know. Then compare your list with other groups."],
        seconds: 90
      },
      vocab: [
        { w: "electrical", pos: "adjective", emoji: "🔌", def: "working with electricity", ex: "On a foggy day in 1902, Willis Carrier had an idea that helped him to invent the first electrical air conditioner.", exFromBook: true, ar: "كهربائي" },
        { w: "humidity", pos: "noun", emoji: "💧", def: "the amount of water in the air", ex: "Carrier wanted to control the humidity at his printing company because the water was ruining paper.", exFromBook: true, ar: "الرطوبة" },
        { w: "found", pos: "verb", emoji: "🏢", def: "to start a company or an organisation (founded = started)", ex: "In 1915, he founded Carrier Corporation, a company that sells heating and air conditioning systems.", exFromBook: true, ar: "يؤسّس" },
        { w: "influential", pos: "adjective", emoji: "🌟", def: "able to change how other people think or act", ex: "In 1998, he was named one of TIME magazine’s “100 Most Influential People of the 20th Century”.", exFromBook: true, ar: "مؤثّر" },
        { w: "department", pos: "noun", emoji: "🗂️", def: "one part of a big company, school or organisation", ex: "He is the head of the invention development department at Sabah Al-Ahmed Center for Development and Innovation.", exFromBook: true, ar: "قسم" },
        { w: "chairman", pos: "noun", emoji: "👔", def: "the person who leads a company’s meetings and board", ex: "He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc.", exFromBook: true, ar: "رئيس مجلس الإدارة" },
        { w: "profitable", pos: "adjective", emoji: "💰", def: "making a lot of money; bringing benefit", ex: "Apple was one of the largest, most profitable and most influential tech companies on the planet.", exFromBook: true, ar: "مُربح" }
      ],
      sections: [
        { type: "reading", title: "Inventors who changed the world (Informative Text)", page: 80,
          instructions: "Read the following text and choose the correct answers:",
          blocks: [
            { head: "Willis Carrier: The Father of Air Conditioning", paras: ["Genius can strike anywhere. On a foggy day in 1902, Willis Carrier had an idea that helped him to invent the first electrical air conditioner. [[It]] was not created for people, Carrier wanted to control the humidity at his printing company because the water was ruining paper. In 1915, he founded Carrier Corporation, a company that sells heating and air conditioning systems. In 1998, he was named one of TIME magazine’s “100 Most Influential People of the 20th Century”."] },
            { head: "Sadeq Ahmed Qasem: The Inventor of ALCHEMIST", paras: ["Sadeq Qasem is a Kuwaiti inventor. He was born on December 6, 1984. Sadeq was given the best invention award and the title of “Arab Inventor” in 2010 by the Stars of Science TV show. He won the award for his invention ‘Alchemist’, a machine that scientists use to work with chemicals. He has also won many other awards. He is the head of the invention development department at Sabah Al-Ahmed Center for Development and Innovation. He has created over 20 inventions."] },
            { head: "Steve Jobs: The Man Who Thought Different", paras: ["Steve Jobs was an American businessman, designer and an inventor. He was born on February 24,1955. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc. He played a key role in the creation of the Apple II, MacBook, iPod, iPhone, and iPad. When Jobs died, at the age of 50 in 2011, he was worth $10.2 billion, and Apple was one of the largest, most [[profitable]] and most influential tech companies on the planet."] }
          ] },

        { type: "activity", title: "Read the following text and choose the correct answers:", page: 81, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. The writer’s purpose is to …", options: ["compare the three inventors.", "explain how genius can strike anywhere.", "give information about great inventors.", "describe how people become inventors."], answer: 2,
              hint: "What does the whole text do?", why: "The text gives facts about three great inventors: Carrier, Qasem and Jobs." },
            { t: "mcq", q: "2. The underlined pronoun ‘it’ in the 1st paragraph refers to …", options: ["genius", "day", "idea", "air conditioner"], answer: 3,
              hint: "What “was not created for people”?", why: "Carrier invented the first electrical air conditioner. It (the air conditioner) was not created for people, but to control humidity." },
            { t: "mcq", q: "3. The underlined word ‘profitable’ in the last paragraph means …", options: ["powerful", "advanced", "helpful", "beneficial"], answer: 3,
              hint: "Profit = money you gain.", why: "A profitable company makes money; it brings benefit → beneficial." }
          ] },

        { type: "activity", title: "Read the text again to answer the following questions:", page: 81, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. Why did Willis Carrier invent the first air conditioner?",
              model: "Because he wanted to control the humidity at his printing company. The water was ruining paper.",
              keywords: [["humidity", "water"], ["paper", "printing"]], hint: "Read the first paragraph." },
            { t: "short", q: "2. What did Sadeq Qasem receive the title of “Arab Inventor” for?",
              model: "For his invention ‘Alchemist’, a machine that scientists use to work with chemicals.",
              keywords: [["alchemist"]], hint: "Read the second paragraph." },
            { t: "short", q: "3. How did Steve Jobs contribute to the development of Apple?",
              model: "He was the chairman, CEO and co-founder of Apple Inc., and he played a key role in the creation of the Apple II, MacBook, iPod, iPhone and iPad.",
              keywords: [["founder", "chairman", "ceo", "creation", "key role"]], hint: "Read the third paragraph." }
          ] },

        { type: "activity", title: "Extra Practice: Who is it?", source: "extra", stage: "guided",
          instructions: "Match each fact to the inventor.", instructionsAr: "صِل كل معلومة بالمخترع.",
          items: [
            { t: "match", q: "Match the fact to the inventor.",
              pairs: [["Willis Carrier", "founded a company in 1915"], ["Sadeq Qasem", "a Kuwaiti inventor, born in 1984"], ["Steve Jobs", "co-founder of Apple Inc."]],
              hint: "One inventor in each paragraph.", why: "Carrier founded Carrier Corporation in 1915; Qasem is Kuwaiti; Jobs co-founded Apple." },
            { t: "mcq", q: "Who has created over 20 inventions?", options: ["Willis Carrier", "Sadeq Qasem", "Steve Jobs"], answer: 1, why: "“He has created over 20 inventions.” (paragraph 2)" },
            { t: "mcq", q: "When did Steve Jobs die?", options: ["in 1955", "in 1998", "in 2011"], answer: 2, why: "“When Jobs died, at the age of 50 in 2011 …”" },
            { t: "mcq", q: "Which TV show gave Sadeq Qasem the title “Arab Inventor”?", options: ["TIME", "Stars of Science", "Apple"], answer: 1, why: "“… by the Stars of Science TV show.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل الجمل بالكلمات.",
          items: [
            { t: "fill", q: "1. It is hot and wet today. The ____ is very high.", answer: ["humidity"], bank: ["humidity", "founded", "department", "influential", "electrical"], why: "Humidity = water in the air." },
            { t: "fill", q: "2. My father works in the sales ____ of a big company.", answer: ["department"], bank: ["humidity", "founded", "department", "influential", "electrical"], why: "A department is one part of a company." },
            { t: "fill", q: "3. He ____ his own company when he was 25.", answer: ["founded"], bank: ["humidity", "founded", "department", "influential", "electrical"], why: "found (past: founded) = start a company." },
            { t: "fill", q: "4. A kettle is an ____ machine.", answer: ["electrical"], bank: ["humidity", "founded", "department", "influential", "electrical"], why: "It works with electricity." },
            { t: "fill", q: "5. Great teachers are very ____ in our lives.", answer: ["influential"], bank: ["humidity", "founded", "department", "influential", "electrical"], why: "Influential = they change how we think and act." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: groups list famous inventors in 1 minute, then compare lists.",
          "Pre-teach the 7 words; show the “Father of Cool” picture for electrical air conditioner.",
          "Read one inventor at a time. Ask: Who? When? What did he invent or do?",
          "Exercise 2 (MCQ), then exercise 3 (open questions).",
          "Point out Sadeq Qasem is Kuwaiti — ask students if they know other Kuwaiti inventors."
        ],
        pair: ["A reads a fact, B says the inventor’s name.", "Pairs write three questions about one inventor for another pair."],
        group: ["Groups of 3: each student becomes one inventor and introduces himself (I am … I invented …)."],
        quick: [
          { q: "Who is “the Father of Air Conditioning”?", a: "Willis Carrier." },
          { q: "What is ‘Alchemist’?", a: "A machine that scientists use to work with chemicals." },
          { q: "What does ‘it’ refer to in paragraph 1?", a: "The air conditioner." },
          { q: "What does ‘profitable’ mean?", a: "Beneficial / making money." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — SPEAKING ─────────────────────────
    {
      id: "u10l7", num: 7, skill: "Speaking",
      title: "Speaking and Writing: A New Invention",
      pages: [81, 81],
      status: "complete",
      canDo: ["Describe inventions", "Describe pictures", "Make decisions"],
      goals: ["Think of a new invention with your group.", "Describe its shape, uses and benefits.", "Present it to the class."],
      goalsAr: ["أفكّر مع مجموعتي في اختراع جديد.", "أصف شكله واستخداماته وفوائده.", "أقدّمه للصف."],
      warmup: {
        title: "Speaking and Writing",
        image: null,
        emoji: "🛠️",
        prompts: ["If you could invent one thing that would make your life easier, what would you create?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "speak", title: "4. a. In groups, think of a new invention that does not exist.", page: 81, source: "book",
          instructions: "In groups, think of a new invention that does not exist. Name the invention, describe it and make notes of its uses and benefits. Then, select a member to present your invention to the class.",
          dialogue: [
            { who: "A", text: "Let’s invent something that makes homework easier." }, { who: "B", text: "" },
            { who: "C", text: "What will we call it?" }, { who: "B", text: "" },
            { who: "A", text: "Who will present it to the class?" }, { who: "C", text: "" }
          ],
          starters: ["Our invention is called …", "It looks like …", "It can …", "It is important because …"],
          record: true },

        { type: "write", title: "b. In your notebook, plan and design a presentation describing your invention by answering the following questions:", page: 81, source: "book",
          instructions: "Plan and design a presentation describing your invention. You can draw a picture of your invention.",
          wordBank: ["It is …", "It looks like …", "It is made of …", "It can …", "It helps people to …", "It is important because …"],
          frame: [
            { label: "What does the invention look like? (shape/ size/ colour..etc)", hint: "It is small and round. It is blue and silver." },
            { label: "What does it do? (different uses)", hint: "It can … It also …" },
            { label: "Why is it important? (benefits)", hint: "It is important because it saves time / helps people …" }
          ],
          model: "Our invention is called “the Smart Bag”. It is a small, blue school bag with a screen on the front. It can carry your books by itself on wheels, and it tells you if you forgot a book. It is important because students will not carry heavy bags, so their backs will not hurt.",
          modelFromBook: false,
          checklist: ["I named my invention.", "I described what it looks like.", "I wrote its uses.", "I wrote why it is important."],
          minWords: 40 },

        { type: "discuss", title: "Tip: Search the net", page: 81, source: "book",
          prompts: ["Search the net or other sources to find out how these things were invented.", "(Potato chips - Fireworks - Watches - Tea)"],
          image: null, emoji: "🔎" },

        { type: "activity", title: "Extra Practice: Which question does it answer?", source: "extra", stage: "guided",
          instructions: "Match each sentence to the question from the book.", instructionsAr: "صِل كل جملة بالسؤال المناسب.",
          items: [
            { t: "match", q: "Match the sentence to the question.",
              pairs: [["It is round, small and green.", "What does it look like?"], ["It cleans the floor and waters the plants.", "What does it do?"], ["It saves time and helps old people.", "Why is it important?"]],
              hint: "Shape / colour → look like. Uses → do. Benefits → important.", why: "The book’s plan: look like (shape/size/colour), do (uses), important (benefits)." }
          ] },

        { type: "activity", title: "Extra Practice: Describe it", source: "extra", stage: "independent",
          instructions: "Choose the best word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "My invention is (square / quickly). (shape)", options: ["square", "quickly"], answer: 0, why: "square is a shape." },
            { t: "choose", q: "It is very (light / lightly), so you can carry it.", options: ["light", "lightly"], answer: 0, why: "After is we use an adjective: light." },
            { t: "choose", q: "It (can / cans) speak three languages.", options: ["can", "cans"], answer: 0, why: "can + base verb; no -s on can." },
            { t: "short", q: "Write one sentence about your invention: what does it do?", model: "It can make my bed in the morning.", open: true, hint: "It can …" }
          ] }
      ],
      game: { kind: "scramble", title: "Invention Builder",
        sentences: [
          "Our invention is called the Smart Bag.",
          "It is small, blue and light.",
          "It can carry books by itself.",
          "It is important because it saves time.",
          "You can draw a picture of your invention."
        ] },
      teacher: {
        notes: [
          "Ask the big question: If you could invent one thing that would make your life easier, what would you create?",
          "Groups brainstorm, choose one invention and give it a name.",
          "Plan with the three book questions (look like / do / important). Students may draw the invention.",
          "One member from each group presents; the class asks one question to each group.",
          "Tip: for homework, students search how potato chips, fireworks, watches or tea were invented."
        ],
        pair: ["Before presenting, pairs practise: A asks the three questions, B answers about the invention."],
        group: ["Gallery walk: groups put their drawings on the wall; classmates add a sticky note with one benefit."],
        quick: [
          { q: "Name the three things your plan must answer.", a: "What it looks like, what it does, why it is important." },
          { q: "What does “benefits” mean?", a: "The good things / advantages it gives." },
          { q: "Describe your invention in one sentence.", a: "e.g. It is a small robot that cleans my room." }
        ]
      }
    }
  ]
});

BOOK.addUnit({
  id: "u1", num: 1, title: "Art and Expression", titleAr: "الفن والتعبير",
  pages: [17, 29], cover: 17,
  outcomes: {
    listening: [
      "Imitate repeating simple pronunciation patterns clearly after listening.",
      "Identify key factual information from an audio source biography.",
      "Analyse main ideas and key details in an informational text using a structured note-taking organiser.",
      "Evaluate supporting details in an audio biography to determine the contribution’s overall impact on cultural heritage."
    ],
    speaking: [
      "Describe essential features and sequential steps of a task or product, highlighting its purpose and required resources.",
      "Express basic personal opinions or feelings clearly in a simple context.",
      "Present information fluently, maintaining accurate pronunciation and coherent structure.",
      "Evaluate peer feedback to enhance clarity and persuasiveness in oral delivery.",
      "Produce an original craft idea with defined materials, tools, purpose, and logical sequence."
    ],
    reading: [
      "Identify explicit and implicit information in a passage about life in old Kuwait.",
      "Analyse implicit values conveyed through language and context.",
      "Evaluate contrasts between past and present features in an informational text, citing supporting evidence from the source."
    ],
    writing: [
      "Plan a descriptive paragraph on life in old Kuwait with a topic–detail–conclusion organiser.",
      "Construct accurate past-simple sentences with appropriate time expressions to describe completed actions.",
      "Compose a cohesive paragraph using accurate past-tense verbs."
    ]
  },
  lessons: [
    /* ───────────────────────── LESSON 1 ───────────────────────── */
    {
      id: "u1l1", num: 1, skill: "Reading", title: "Pearl of the Gulf", pages: [20, 21], status: "complete",
      canDo: [
        "I can identify the main ideas from a written text about Kuwait’s history and pearl diving.",
        "I can show appreciation for traditional occupations from a written text about pearl divers."
      ],
      goals: ["Read about life in old Kuwait.", "Learn 11 new words.", "Find the main idea and details.", "Talk about what makes you proud."],
      goalsAr: ["أقرأ عن الحياة في الكويت قديمًا.", "أتعلم ١١ كلمة جديدة.", "أجد الفكرة الرئيسية والتفاصيل.", "أتحدث عمّا يجعلني فخورًا."],
      warmup: {
        title: "Before You Read", image: "crops/u1l1-warmup.jpg", emoji: "🐚", seconds: 90,
        instructions: "Look at the pictures and discuss the following questions.",
        prompts: ["What do you see in the pictures?", "How is life in these pictures different from life today?"]
      },
      vocab: [
        { w: "support", pos: "verb", emoji: "🤲", def: "give help or encouragement", ex: "They worked hard every day to support their families.", exFromBook: true, ar: "يُعيل / يدعم", ipa: "/səˈpɔːt/" },
        { w: "cheerful", pos: "adjective", emoji: "😄", def: "happy and showing it", ex: "Life was not easy, but it was full of meaning, cheerful moments, and cooperation.", exFromBook: true, ar: "مُبهِج / مَرِح", ipa: "/ˈtʃɪəfl/" },
        { w: "moment", pos: "noun", emoji: "⏱️", def: "a very short period of time", ex: "Life was full of cheerful moments.", exFromBook: false, ar: "لحظة", ipa: "/ˈməʊmənt/" },
        { w: "trader", pos: "noun", emoji: "🧺", def: "a person who buys and sells goods", ex: "These traders helped Kuwait connect with other countries.", exFromBook: true, ar: "تاجر", ipa: "/ˈtreɪdə/" },
        { w: "wooden", pos: "adjective", emoji: "🪵", def: "made of wood", ex: "They travelled in wooden boats called dhows.", exFromBook: true, ar: "خشبي", ipa: "/ˈwʊdən/" },
        { w: "goods", pos: "noun", emoji: "📦", def: "items produced for sale", ex: "They travelled in wooden boats called dhows, to sell goods such as spices, dates, and clothing.", exFromBook: true, ar: "بضائع", ipa: "/ɡʊdz/" },
        { w: "craft", pos: "noun", emoji: "🧶", def: "skilful hand-making of objects", ex: "Many women made crafts from palm leaves, like baskets and fans.", exFromBook: true, ar: "حِرفة / مشغولات يدوية", ipa: "/krɑːft/" },
        { w: "palm leaf", pos: "noun", emoji: "🌴", def: "a long flat leaf of a palm tree", ex: "People used to live in houses made of clay and palm leaves.", exFromBook: true, ar: "سعف النخيل", ipa: "/pɑːm liːf/" },
        { w: "express", pos: "verb", emoji: "🎨", def: "show feelings or ideas", ex: "People used to express their feelings and share their stories through drawing, painting, poetry and music.", exFromBook: true, ar: "يُعبّر", ipa: "/ɪkˈspres/" },
        { w: "poetry", pos: "noun", emoji: "📜", def: "poems as a kind of writing", ex: "People shared their stories through drawing, painting, poetry and music.", exFromBook: false, ar: "الشِّعر", ipa: "/ˈpəʊɪtri/" },
        { w: "value", pos: "noun", emoji: "💎", def: "how useful or important something is", ex: "Today, museums, stories, and traditional festivals remind us of the value of our heritage.", exFromBook: true, ar: "قيمة", ipa: "/ˈvæljuː/" }
      ],
      sections: [
        { type: "reading", title: "Pearl of the Gulf", page: 20,
          instructions: "Read the passage and choose another title.",
          paras: [
            "A long time ago, people in Kuwait lived simple lives. They worked hard every day to support their families. There were no big shops, cars, or modern buildings. People used to live in houses made of clay and palm leaves. Life was not easy, but it was full of meaning, cheerful moments, and cooperation.",
            "Most men had jobs that kept them away from home for weeks or months. Some men worked as fishermen or pearl divers, while others were traders. They travelled in wooden boats called dhows, to sell goods such as spices, dates, and clothing. These traders helped Kuwait connect with other countries.",
            "Women stayed at home, but they also worked. [[They]] cooked food, made clothes, and raised children. Many women made crafts from palm leaves, like baskets and fans. These handmade crafts were useful and beautiful. Children did not go to modern schools. They studied at Al-Katateeb, where they learned the Holy Quran and how to read and write.",
            "Art was part of this simple life. People used to express their feelings and share their stories through drawing, painting, poetry and music. Art helped keep their traditions alive and passed them on to others. Today, museums, stories, and traditional festivals remind us of the value of our heritage. Just like pearls are treasures from the sea, our stories and culture are treasures from the past."
          ] },
        { type: "grammar", title: "Pronunciation Tip", page: 20, source: "book",
          steps: [
            { title: "Break long words into syllables", text: "Break long words into syllables, to pronounce them easily.", textAr: "قسّم الكلمات الطويلة إلى مقاطع لتنطقها بسهولة.",
              examples: ["co-op-er-a-tion", "tra-di-tion-al"] },
            { title: "Try more words from the text", source: "extra", text: "Say each part slowly. Then say the whole word.", textAr: "انطق كل مقطع ببطء، ثم انطق الكلمة كاملة.",
              examples: ["cheer-ful", "po-et-ry", "fes-ti-vals", "mu-se-ums"] }
          ] },
        { type: "activity", title: "Read the passage and choose another title.", page: 20, source: "book", stage: "independent",
          instructions: "Choose another title for the passage.",
          items: [
            { t: "mcq", q: "Choose another title:", options: ["Life in a Modern City", "A Day at School", "Life in Old Kuwait", "A Festival by the Sea"], answer: 2,
              hint: "Read the first sentence: “A long time ago, people in Kuwait …”", why: "The whole text is about how people in Kuwait lived a long time ago: their homes, jobs, crafts and art." }
          ] },
        { type: "activity", title: "Read the passage again and answer the following questions.", page: 21, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", q: "1. What are two jobs that men did in the past?", model: "Some men were fishermen or pearl divers. Others were traders.",
              keywords: [["fish", "pearl", "diver", "trader"]], hint: "Look at paragraph 2." },
            { t: "short", q: "2. What materials did people use to build houses in old Kuwait?", model: "Clay and palm leaves.",
              keywords: [["clay"], ["palm"]], hint: "Look at paragraph 1: “houses made of …”" },
            { t: "short", q: "3. What does the underlined word “They” in the 3rd paragraph refer to?", model: "“They” refers to the women.",
              keywords: [["women", "woman"]], hint: "Read the sentence before “They”." },
            { t: "short", q: "4. Why was art important to families in the past?", model: "People used art to express their feelings and share their stories. Art helped keep their traditions alive and passed them on to others.",
              keywords: [["feel", "stor", "tradition"]], hint: "Look at paragraph 4." }
          ] },
        { type: "activity", title: "Read each sentence and write (T) if it is true or (F) if it is false. Then, rewrite the false ones correctly.", page: 21, source: "book", stage: "independent",
          instructions: "Write T (true) or F (false). Then rewrite the false sentence correctly.",
          items: [
            { t: "table", q: "Write T or F.", head: ["Sentence", "T/F"],
              rows: [
                ["1. People in old Kuwait worked hard every day.", { answer: ["t", "true"], model: "T" }],
                ["2. Women made beautiful crafts.", { answer: ["t", "true"], model: "T" }],
                ["3. Women bought food and clothes from shops.", { answer: ["f", "false"], model: "F" }],
                ["4. There were no big shops or modern buildings.", { answer: ["t", "true"], model: "T" }]
              ],
              hint: "Find each idea in the text. Paragraph 1 talks about shops. Paragraph 3 talks about women.",
              why: "1: “They worked hard every day.” 2: “These handmade crafts were useful and beautiful.” 3 is false: women cooked food and made clothes. 4: “There were no big shops, cars, or modern buildings.”" },
            { t: "short", q: "Correction: rewrite the false sentence correctly.", model: "3. Women cooked food and made clothes (at home). There were no big shops.",
              keywords: [["cook", "made", "make"]], hint: "Paragraph 3: “They cooked food, made clothes, …”" }
          ] },
        { type: "activity", title: "Find one word in each paragraph that has the same meaning as the phrases below.", page: 21, source: "book", stage: "independent",
          instructions: "Find one word in each paragraph.",
          items: [
            { t: "fill", q: "Paragraph 1 – to feel happy and positive: ____", answer: ["cheerful"], hint: "It comes before “moments”.", why: "“cheerful moments” = happy, positive moments." },
            { t: "fill", q: "Paragraph 2 – people who sell goods: ____", answer: ["traders", "trader"], hint: "“… while others were …”", why: "Traders travelled in dhows to sell goods." },
            { t: "fill", q: "Paragraph 3 – things made by hand: ____", answer: ["crafts", "craft"], hint: "Women made them from palm leaves.", why: "“These handmade crafts …” — crafts are things made by hand." },
            { t: "fill", q: "Paragraph 4 – to show your feelings: ____", answer: ["express"], hint: "“People used to … their feelings.”", why: "express = show feelings or ideas." }
          ] },
        { type: "activity", title: "Extra Practice: Use the new words", source: "extra", stage: "independent",
          instructions: "Tap a word to fill the gap.",
          items: [
            { t: "fill", q: "My grandfather was a ____. He sold dates and spices.", answer: ["trader"], bank: ["trader", "wooden", "poetry", "support", "cheerful"], why: "A trader buys and sells goods." },
            { t: "fill", q: "This box is ____. It is made of wood.", answer: ["wooden"], bank: ["trader", "wooden", "poetry", "support", "cheerful"], why: "wooden = made of wood." },
            { t: "fill", q: "My sister writes poems. She loves ____.", answer: ["poetry"], bank: ["trader", "wooden", "poetry", "support", "cheerful"], why: "Poems are poetry." },
            { t: "fill", q: "I always ____ my friends when they are sad.", answer: ["support"], bank: ["trader", "wooden", "poetry", "support", "cheerful"], why: "support = give help." },
            { t: "fill", q: "Our teacher always smiles. She is very ____.", answer: ["cheerful"], bank: ["trader", "wooden", "poetry", "support", "cheerful"], why: "cheerful = happy and showing it." }
          ] },
        { type: "speak", title: "In pairs, think and talk about these questions.", page: 21, source: "book",
          instructions: "Ask and answer with your partner. Then switch roles.",
          dialogue: [
            { who: "A", text: "What are things that you like about Kuwait in the past?" },
            { who: "B", text: "I like how people worked together and helped each other." },
            { who: "A", text: "What are you proud of?" },
            { who: "B", text: "I am proud of the pearl divers because they worked hard." },
            { who: "A", text: "What are things that you like about Kuwait in the past?" },
            { who: "B", text: "" },
            { who: "A", text: "What are you proud of?" },
            { who: "B", text: "" }
          ],
          starters: ["I like how people …", "I like the … because …", "I am proud of … because …", "They worked hard / helped each other / made beautiful crafts."],
          record: true }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Warm-up (2 min): show the two pictures; students compare life then and now.", "Pre-teach 4–5 words with the flip cards (trader, goods, craft, palm leaf, express).", "First reading: choose another title. Second reading: questions, T/F and word-finding.", "Practise the Pronunciation Tip with long words from the text.", "Finish with the pair talk: What do you like? What are you proud of?"],
        pair: ["Pair talk from the speech bubbles (task 6).", "Partner quiz: one says a meaning (e.g. “people who sell goods”), the other finds the word."],
        group: ["Groups make a poster “Jobs in Old Kuwait”: fishermen, pearl divers, traders, women’s crafts.", "Each group reads one paragraph aloud, breaking long words into syllables."],
        quick: [{ q: "What were houses made of?", a: "Clay and palm leaves." }, { q: "What did traders sell?", a: "Goods such as spices, dates and clothing." }, { q: "Where did children study?", a: "At Al-Katateeb." }, { q: "Which word means “to show your feelings”?", a: "express" }]
      }
    },

    /* ───────────────────────── LESSON 2 ───────────────────────── */
    {
      id: "u1l2", num: 2, skill: "Grammar", title: "Past Simple Tense", pages: [22], status: "complete",
      canDo: [
        "I can identify past simple verb forms from sentences about past events in Kuwait.",
        "I can write past simple sentences neatly about past events in Kuwait."
      ],
      goals: ["Use the past simple for finished actions.", "Learn regular (-ed) and irregular verbs.", "Make negatives and questions with did."],
      goalsAr: ["أستخدم الماضي البسيط للأحداث المنتهية.", "أتعلم الأفعال المنتظمة (‎-ed‎) والشاذة.", "أكوّن النفي والسؤال باستخدام did."],
      warmup: {
        title: "Look at the pictures and discuss the following question.", image: "crops/u1l2-warmup.jpg", emoji: "🕰️", seconds: 90,
        instructions: "Look at the pictures and discuss the following question.",
        prompts: ["What did people do in the past?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Past Simple", page: 22,
          steps: [
            { title: "When do we use it?", text: "Use the past simple to describe actions in the past.", textAr: "نستخدم الماضي البسيط لوصف أحداث وقعت وانتهت في الماضي.",
              examples: ["{s:They} {v:read} the Holy Quran.", "{s:Men} {v:fished} in the sea.", "{s:Women} {v:cooked} meals."] },
            { title: "The same verb for everyone", text: "I / You / He / She / It / We / They + verb 2 (past form)", textAr: "نستخدم التصريف الثاني للفعل مع جميع الضمائر، بدون ‎-s‎.",
              examples: ["{s:Traders} {v:sold} different goods.", "{s:I} {v:studied} for the English exam {t:yesterday}."] },
            { title: "Regular verbs: add -ed", text: "Many verbs add -ed: play → played, express → expressed.", textAr: "الأفعال المنتظمة نضيف لها ‎-ed‎.",
              examples: ["{s:We} {v:played} football {t:last night}.", "{s:People} {v:expressed} their feelings through art."],
              tip: "Spelling: live → lived, study → studied, stop → stopped" },
            { title: "Irregular verbs: learn them", text: "Some verbs change in a different way: eat → ate, sleep → slept.", textAr: "الأفعال الشاذة لها تصريف خاص يجب حفظه.",
              examples: ["{s:I} {v:ate} dates {t:yesterday}.", "{s:The baby} {v:slept} early {t:last night}."],
              tip: "More irregular verbs: go → went, sell → sold, make → made, read → read. See the Irregular Verbs list on pages 78–79." },
            { title: "Negative: did not (didn’t) + base verb", text: "Use did not + the base verb. Do not add -ed after did not.", textAr: "النفي: did not / didn’t + الفعل في صورته الأساسية.",
              examples: ["{s:We} {n:did not} {v:play} football {t:last night}.", "{s:She} {n:didn’t} {v:watch} TV {t:yesterday}."] },
            { title: "Questions: Did + subject + base verb?", text: "Yes/No question: Did + subject + base verb? Wh- question: Wh-word + did + subject + base verb?", textAr: "السؤال: Did + الفاعل + الفعل الأساسي؟ أو أداة استفهام + did + الفاعل + الفعل الأساسي؟",
              examples: ["{a:Did} {s:they} {v:eat} dinner?", "{q:What} {a:did} {s:Laila} {v:do} {t:last Friday}?"] },
            { title: "Time expressions", text: "When talking about the past, you can use these time expressions: last night, last year, yesterday, ago, in 1990.", textAr: "كلمات دالة على الماضي: last night, last year, yesterday, ago, in 1990",
              examples: ["{s:People} {v:lived} in clay houses {t:a long time ago}.", "{s:My father} {v:visited} Failaka {t:last year}."] }
          ],
          table: { head: ["Verb", "Past form"], rows: [["play", "played"], ["express", "expressed"], ["eat", "ate"], ["sleep", "slept"]] },
          worked: { q: "Write a full sentence: live / clay houses / ago", steps: ["Choose a subject: People.", "Past form of live: live + d → lived.", "Add the place: in clay houses.", "Put the time expression at the end: a long time ago."], a: "{s:People} {v:lived} in clay houses {t:a long time ago}." },
          notes: ["The worked example is the book’s own example for task 2a."] },
        { type: "activity", title: "Extra Practice: Present or past?", source: "extra", stage: "guided",
          instructions: "Look at the time word. Tap the correct verb.",
          items: [
            { t: "choose", q: "Yesterday, I ____ football with my cousins.", options: ["play", "played"], answer: 1, hint: "“Yesterday” is in the past.", why: "yesterday → past simple: played." },
            { t: "choose", q: "Last week, my mother ____ a cake.", options: ["made", "makes"], answer: 0, hint: "“Last week” is in the past.", why: "make is irregular: make → made." },
            { t: "choose", q: "We ____ to the beach last Friday.", options: ["go", "went"], answer: 1, hint: "“last Friday” = past.", why: "go is irregular: go → went." },
            { t: "choose", q: "They did not ____ dinner last night.", options: ["eat", "ate"], answer: 0, hint: "What comes after “did not”?", why: "did not + base verb: did not eat." },
            { t: "choose", q: "____ you visit your grandmother yesterday?", options: ["Do", "Did"], answer: 1, hint: "“yesterday” = past.", why: "Past question: Did + subject + base verb." }
          ] },
        { type: "activity", title: "Extra Practice: Regular or irregular?", source: "extra", stage: "guided",
          instructions: "Write the past form of the verb in brackets.",
          items: [
            { t: "fill", q: "Traders ____ (sell) different goods.", answer: ["sold"], hint: "sell is irregular.", why: "sell → sold (irregular)." },
            { t: "fill", q: "Men ____ (fish) in the sea.", answer: ["fished"], hint: "fish is regular.", why: "fish + ed → fished." },
            { t: "fill", q: "I ____ (study) for the English exam yesterday.", answer: ["studied"], hint: "y → i + ed", why: "study → studied (change y to i, add -ed)." },
            { t: "fill", q: "We ____ (sleep) at my grandfather’s house last night.", answer: ["slept"], hint: "sleep is irregular.", why: "sleep → slept (irregular)." }
          ] },
        { type: "activity", title: "Write full sentences using the past simple tense and time expressions.", page: 22, source: "book", stage: "independent",
          instructions: "Write full sentences using the past simple tense and time expressions. Example: a. live / clay houses / ago → People lived in clay houses a long time ago.",
          items: [
            { t: "short", q: "b. make / handcraft / last week", model: "I made a handcraft last week. (Any subject is correct: My mother made a handcraft last week.)",
              keywords: [["made"], ["handcraft"], ["last week"]], hint: "make is irregular: make → made.", why: "Past simple: subject + made + … + last week." },
            { t: "short", q: "c. (not) eat / pizza / last night", model: "I didn’t eat pizza last night. / I did not eat pizza last night.",
              keywords: [["didn't eat", "did not eat"], ["pizza"], ["last night"]], hint: "(not) = negative: did not + base verb.", why: "Negative: subject + didn’t / did not + eat (base verb)." },
            { t: "short", q: "d. watch / movie / yesterday?", model: "Did you watch a movie yesterday?",
              keywords: [["did "], ["watch a", "watch the"], ["yesterday"]], hint: "The ? means it is a question. Start with Did.", why: "Question: Did + subject + watch (base verb) + … + yesterday?" }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The underlined word is wrong. Write the correct word.",
          items: [
            { t: "fix", q: "Traders {selled} different goods.", answer: ["sold"], hint: "sell is irregular.", why: "sell → sold, not “selled”." },
            { t: "fix", q: "We did not {played} football last night.", answer: ["play"], hint: "What comes after did not?", why: "did not + base verb: did not play." },
            { t: "fix", q: "I {study} for the English exam yesterday.", answer: ["studied"], hint: "“yesterday” = past.", why: "Past form: study → studied." },
            { t: "fix", q: "{Do} they eat dinner last night?", answer: ["Did"], hint: "“last night” = past.", why: "Past question: Did + subject + base verb." },
            { t: "fix", q: "What did Laila {did} last Friday?", answer: ["do"], hint: "After did we use the base verb.", why: "Wh- + did + subject + base verb: What did Laila do?" }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a sentence.", words: ["Women", "cooked", "meals", "in", "the", "past."], answer: ["Women cooked meals in the past."], why: "Subject + past verb + object + time." },
            { t: "order", q: "Make a negative sentence.", words: ["We", "did", "not", "play", "football", "last", "night."], answer: ["We did not play football last night."], why: "Subject + did not + base verb." },
            { t: "order", q: "Make a question.", words: ["What", "did", "Laila", "do", "last", "Friday?"], answer: ["What did Laila do last Friday?"], why: "Wh- + did + subject + base verb?" }
          ] },
        { type: "write", title: "Write three sentences about something you did last summer.", page: 22, source: "book",
          instructions: "Write three sentences about something you did last summer. Use the past simple.",
          wordBank: ["go → went", "play → played", "visit → visited", "eat → ate", "last summer", "with my family"],
          wordBankLabel: "Useful words: go – play – visit – eat",
          frame: [{ label: "1. Last summer I …", hint: "Last summer I went to …" }, { label: "2.", hint: "I played / visited …" }, { label: "3.", hint: "We ate …" }],
          model: "Last summer I went to the beach with my family. I played football with my cousins. We visited my grandmother and ate machboos.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used past forms (went, played, visited, ate).", "I wrote three sentences about last summer."],
          minWords: 15 }
      ],
      game: { kind: "quiz", title: "Past Simple Race", items: [
        { t: "choose", q: "go → ____", options: ["goed", "went"], answer: 1, why: "go is irregular: went." },
        { t: "choose", q: "play → ____", options: ["played", "plaid"], answer: 0, why: "play is regular: played." },
        { t: "choose", q: "eat → ____", options: ["eated", "ate"], answer: 1, why: "eat is irregular: ate." },
        { t: "choose", q: "We ____ TV last night.", options: ["watched", "watch"], answer: 0, why: "last night → past: watched." },
        { t: "choose", q: "She didn’t ____ to school yesterday.", options: ["went", "go"], answer: 1, why: "didn’t + base verb: go." },
        { t: "choose", q: "____ they visit the museum last year?", options: ["Did", "Do"], answer: 0, why: "last year → Did." }
      ] },
      teacher: {
        notes: ["Warm-up: the three pictures (read, fished, cooked). Ask “What did people do in the past?”", "Present the rule step by step; colour subject (blue), verb (green), time words (orange).", "Model the worked example (task 2a), then the guided extra tasks, then book tasks 2b–d.", "Students write three sentences about last summer and read one aloud."],
        pair: ["Ask and answer: “What did you do last weekend?” — “I visited …”", "Partner check: swap the summer sentences and circle every past verb."],
        group: ["Verb race: the teacher says a base verb; the first group to say and spell the past form gets a point."],
        quick: [{ q: "Past of “sell”?", a: "sold" }, { q: "Make negative: We played football.", a: "We didn’t (did not) play football." }, { q: "Make a question: They ate dinner.", a: "Did they eat dinner?" }, { q: "Give two past time expressions.", a: "last night, last year, yesterday, ago, in 1990" }]
      }
    },

    /* ───────────────────────── LESSON 3 ───────────────────────── */
    {
      id: "u1l3", num: 3, skill: "Listening", title: "People Who Made a Difference", pages: [23], status: "complete",
      canDo: [
        "I can identify factual details about notable Kuwaiti figures presented in an audio biography.",
        "I can express appreciation for people’s achievements from a spoken text about real-life figures."
      ],
      goals: ["Listen to facts about two famous Kuwaitis.", "Take notes in a table.", "Hear the two sounds of “th”."],
      goalsAr: ["أستمع إلى معلومات عن شخصيتين كويتيتين.", "أدوّن الملاحظات في جدول.", "أميّز صوتَي ‎“th”‎."],
      warmup: {
        title: "Before You Listen", image: "crops/u1l3-warmup.jpg", emoji: "🇰🇼", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["Where did the boys / girls study in the past in Kuwait?", "Do you know who Ayoub Hussein was? What is he famous for?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "Listen and match each phrase to the correct person.", page: 23, source: "book", needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EVaEIf5aq6ZOueyD5XfiZiUBHdD1799sGCaaDvzDZrfaoA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=W0ZYpy",
          instructions: "Track 1.1. Listen and match each phrase to the correct person: Mariam Abdel Malek, Both, or Ayoub Hussein.",
          items: [
            { t: "table", q: "Write the person for each phrase.", head: ["Phrase", "Mariam Abdel Malek / Both / Ayoub Hussein"],
              rows: [["a. Used art to show traditional life.", { open: true }], ["b. Believed that girls should learn like boys.", { open: true }], ["c. Supported learning and helped keep our culture alive.", { open: true }]], open: true }
          ] },
        { type: "listen", title: "Listen again and complete the table below.", page: 23, source: "book", needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EVaEIf5aq6ZOueyD5XfiZiUBHdD1799sGCaaDvzDZrfaoA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=W0ZYpy",
          instructions: "Track 1.1. Listen again and complete the table below.",
          items: [
            { t: "table", q: "Complete the table while you listen.", head: ["Questions", "Ayoub Hussein", "Mariam Abdel Malek"],
              rows: [["1- What was his/her work?", { open: true }, { open: true }], ["2- What was special about his/her work?", { open: true }, { open: true }], ["3- What value did we learn from them?", { open: true }, { open: true }]], open: true }
          ] },
        { type: "listen", title: "Pronunciation: The different sounds of ‘th’", page: 23, source: "book", needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EY2VTOj8vChBoKN2t8FcU44B4Pl1WQcoMOrnb_N3URRa4A?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=V8t1Uq",
          instructions: "Track 1.2. Listen and classify the words under the correct headings. (thought – this – thanked – their – through – both)",
          items: [
            { t: "table", q: "Write each word in the correct column.", head: ["unvoiced “th” /θ/ — Example: three", "voiced “th” /ð/ — Example: that"],
              rows: [[{ open: true, model: "thought" }, { open: true, model: "this" }], [{ open: true, model: "thanked" }, { open: true, model: "their" }], [{ open: true, model: "through" }, { open: true }], [{ open: true, model: "both" }, { open: true }]],
              open: true, note: "Tip: put your hand on your throat. For the voiced sound (that) you feel your throat shake. For the unvoiced sound (three) you only hear air." }
          ] },
        { type: "activity", title: "Extra Practice: Which “th” sound?", source: "extra", stage: "guided",
          instructions: "Say the word. Is the “th” voiced /ð/ (like “that”) or unvoiced /θ/ (like “three”)?",
          items: [
            { t: "choose", q: "think", options: ["unvoiced /θ/", "voiced /ð/"], answer: 0, why: "“think” sounds like “three”: only air." },
            { t: "choose", q: "mother", options: ["unvoiced /θ/", "voiced /ð/"], answer: 1, why: "“mother” sounds like “that”: your throat shakes." },
            { t: "choose", q: "Thursday", options: ["unvoiced /θ/", "voiced /ð/"], answer: 0, why: "“Thursday” sounds like “three”." },
            { t: "choose", q: "they", options: ["unvoiced /θ/", "voiced /ð/"], answer: 1, why: "“they” sounds like “that”." },
            { t: "choose", q: "month", options: ["unvoiced /θ/", "voiced /ð/"], answer: 0, why: "“month” ends with the sound in “three”." },
            { t: "choose", q: "brother", options: ["unvoiced /θ/", "voiced /ð/"], answer: 1, why: "“brother” sounds like “that”." }
          ] },
        { type: "listen", title: "Extra Practice: My great-grandmother", source: "extra",
          instructions: "Listen to the generated voice (not the book recording). This is a made-up story for practice. Then answer the questions.",
          script: [
            { who: "Fatma", text: "Hello, I’m Fatma. Today I want to tell you about my great-grandmother, Lulwa. She lived in Kuwait a long time ago." },
            { who: "Fatma", text: "When she was young, girls did not go to modern schools. She learned to read and write at home with her father." },
            { who: "Fatma", text: "Later, she taught the girls in her neighbourhood. She believed that every girl should learn. She also made beautiful Sadu with coloured threads." },
            { who: "Fatma", text: "I am proud of her because she helped other people and kept our culture alive." }
          ],
          items: [
            { t: "mcq", q: "Who is Lulwa?", options: ["Fatma’s teacher", "Fatma’s great-grandmother", "Fatma’s sister"], answer: 1, why: "Fatma says: “my great-grandmother, Lulwa”." },
            { t: "mcq", q: "Where did Lulwa learn to read and write?", options: ["at a modern school", "at home with her father", "at the mosque"], answer: 1, why: "“She learned to read and write at home with her father.”" },
            { t: "mcq", q: "Who did Lulwa teach?", options: ["the girls in her neighbourhood", "the boys at school", "the traders"], answer: 0, why: "“she taught the girls in her neighbourhood.”" },
            { t: "mcq", q: "What did she make?", options: ["pottery", "wooden boats", "Sadu with coloured threads"], answer: 2, why: "“She also made beautiful Sadu with coloured threads.”" },
            { t: "mcq", q: "Why is Fatma proud of her?", options: ["because she was rich", "because she helped other people and kept our culture alive", "because she travelled a lot"], answer: 1, why: "“I am proud of her because she helped other people and kept our culture alive.”" }
          ] }
      ],
      game: { kind: "sort", title: "Sort the “th” sounds", buckets: ["unvoiced /θ/ (three)", "voiced /ð/ (that)"],
        cards: [["think", 0], ["thank", 0], ["Thursday", 0], ["month", 0], ["birthday", 0], ["mouth", 0], ["mother", 1], ["father", 1], ["brother", 1], ["they", 1], ["the", 1], ["there", 1]] },
      teacher: {
        notes: ["Warm-up with the three pictures (Al-Katateeb, the painter, the school). Read the book’s note: “I’m proud of my country’s history.”", "Play track 1.1 (first QR code) twice: first for matching (task 2), then for the table (task 3).", "The recording is not built into this app, so check the answers with the class after listening.", "Play track 1.2 (second QR code) for the ‘th’ sounds. Students touch their throat to feel voiced /ð/."],
        pair: ["Partner talk: “Who do you admire? Why?”", "Minimal practice: one says a word with ‘th’, the other shows a card: voiced or unvoiced."],
        group: ["Each group makes a fact card about a person who made a difference in Kuwait (from the recording) and presents it."],
        quick: [{ q: "Where did children study in the past?", a: "At Al-Katateeb (from Lesson 1)." }, { q: "Is the ‘th’ in “this” voiced or unvoiced?", a: "Voiced /ð/." }, { q: "Is the ‘th’ in “both” voiced or unvoiced?", a: "Unvoiced /θ/." }, { q: "Say one value you learned from the people in the recording.", a: "Students’ own answers (check with the recording)." }]
      }
    },

    /* ───────────────────────── LESSON 4 ───────────────────────── */
    {
      id: "u1l4", num: 4, skill: "Speaking", title: "Discover Traditional Crafts", pages: [24], status: "complete",
      canDo: [
        "I can organise spoken sentences clearly when describing traditional crafts in short dialogues.",
        "I can create a new craft idea describing materials, tools and purpose logically."
      ],
      goals: ["Name four Kuwaiti crafts.", "Describe a craft: what it is made of.", "Present your own craft idea."],
      goalsAr: ["أسمّي أربع حرف كويتية.", "أصف حرفة ومِمّ تُصنع.", "أقدّم فكرة حرفة من ابتكاري."],
      linkers: ["because", "and"],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u1l4-crafts.jpg", emoji: "🧶", seconds: 90,
        instructions: "Look at the pictures. Talk with your partner.",
        prompts: ["What are the crafts called?", "What materials did people use to make them?"]
      },
      vocab: [
        { w: "wood", pos: "noun", emoji: "🪵", def: "the hard material that trees are made of", ex: "Dhows are made of wood.", exFromBook: false, ar: "خشب" },
        { w: "clay", pos: "noun", emoji: "🏺", def: "soft earth that becomes hard when it dries", ex: "This item is shaped from clay by hand.", exFromBook: true, ar: "طين / صلصال" },
        { w: "strong", pos: "adjective", emoji: "💪", def: "not easy to break", ex: "A dhow is big and strong.", exFromBook: false, ar: "قوي / متين" },
        { w: "beautiful", pos: "adjective", emoji: "🌸", def: "very nice to look at", ex: "It looks beautiful and traditional.", exFromBook: true, ar: "جميل" },
        { w: "cultural", pos: "adjective", emoji: "🕌", def: "about the traditions and way of life of a people", ex: "Sadu is an important cultural craft.", exFromBook: false, ar: "ثقافي" },
        { w: "handmade", pos: "adjective", emoji: "✋", def: "made by hand, not by a machine", ex: "These handmade crafts were useful and beautiful.", exFromBook: true, ar: "مصنوع يدويًا" },
        { w: "useful", pos: "adjective", emoji: "🧰", def: "helpful; good for doing something", ex: "A clay pot is useful for holding water.", exFromBook: false, ar: "مفيد" },
        { w: "traditional", pos: "adjective", emoji: "🏺", def: "old and done in the same way for a long time", ex: "The designs are traditional.", exFromBook: true, ar: "تقليدي" },
        { w: "important", pos: "adjective", emoji: "⭐", def: "having great value", ex: "Crafts are an important part of our heritage.", exFromBook: false, ar: "مهم" }
      ],
      sections: [
        { type: "activity", title: "a. Label each picture with the correct craft name.", page: 24, source: "book", stage: "guided",
          instructions: "Label each picture with the correct craft name. (Sadu Weaving – Pottery – Fan Weaving – Dhow Building)",
          image: "crops/u1l4-crafts.jpg",
          items: [
            { t: "fill", q: "Picture 1 (a man makes pots from clay): ____", answer: ["Pottery"], bank: ["Pottery", "Fan Weaving", "Dhow Building"], hint: "He shapes clay with his hands.", why: "Making pots from clay is pottery." },
            { t: "fill", q: "Picture 2 (a woman weaves coloured threads): ____", answer: ["Sadu Weaving", "Sadu"], hint: "The book gives this one.", why: "The book labels picture 2: Sadu Weaving." },
            { t: "fill", q: "Picture 3 (men build a big wooden boat): ____", answer: ["Dhow Building"], bank: ["Pottery", "Fan Weaving", "Dhow Building"], hint: "A dhow is a wooden boat.", why: "Building a wooden boat (dhow) is dhow building." },
            { t: "fill", q: "Picture 4 (a woman weaves palm leaves): ____", answer: ["Fan Weaving"], bank: ["Pottery", "Fan Weaving", "Dhow Building"], hint: "Fans are made from palm leaves.", why: "The book says: “Fan Weaving. It is made of palm leaves.”" }
          ] },
        { type: "discuss", title: "b. Which craft do you think is the most interesting? Why?", page: 24, source: "book", emoji: "🤔",
          prompts: ["Which craft do you think is the most interesting? Why?"],
          starters: ["I think ……… is the most interesting craft because ……", "It is beautiful / useful / traditional.", "It is made of …"] },
        { type: "speak", title: "c. Pick two traditional crafts. Talk about them using the questions below.", page: 24, source: "book",
          instructions: "Pick two traditional crafts. Talk about them using the questions below. Use the useful words.",
          dialogue: [{ who: "A", text: "What are the crafts called?" }, { who: "B", text: "" }, { who: "A", text: "What materials did people use to make them?" }, { who: "B", text: "" }],
          example: "“This is Fan Weaving. It is made of palm leaves. It looks beautiful and traditional.”",
          starters: ["This is …", "It is made of wood / clay / palm leaves / coloured threads.", "It looks beautiful / strong / traditional.", "It is useful because …", "Useful words: wood, clay, strong, beautiful, cultural, handmade, useful, traditional, important"],
          record: true },
        { type: "activity", title: "Craft Detective: What Is It?", page: 24, source: "book", stage: "independent",
          instructions: "Read the sentences below and guess which craft is being described.",
          items: [
            { t: "mcq", q: "“It is made with coloured threads. People use their hands to create patterns. The designs are traditional.”", options: ["Pottery", "Sadu Weaving", "Fan Weaving", "Dhow Building"], answer: 1, hint: "Look at picture 2.", why: "Sadu is woven by hand with coloured threads and traditional designs." },
            { t: "mcq", q: "“This item is shaped from clay by hand. It is often used for holding food or water.”", options: ["Pottery", "Sadu Weaving", "Fan Weaving", "Dhow Building"], answer: 0, hint: "What is made from clay?", why: "Pots are shaped from clay. This is pottery." }
          ] },
        { type: "activity", title: "Extra Practice: More detective clues", source: "extra", stage: "independent",
          instructions: "Read the clue. Choose the craft.",
          items: [
            { t: "mcq", q: "“It is made of palm leaves. People use it to feel cool on hot days.”", options: ["Fan Weaving", "Pottery", "Dhow Building"], answer: 0, hint: "What do you wave in front of your face?", why: "A fan is woven from palm leaves." },
            { t: "mcq", q: "“It is made of wood. It is big and strong. Men sailed in it to find pearls.”", options: ["Sadu Weaving", "Dhow Building", "Fan Weaving"], answer: 1, hint: "Think of a boat.", why: "Dhows are wooden boats." },
            { t: "order", q: "Put the words in order.", words: ["Sadu", "is", "beautiful", "and", "traditional."], answer: ["Sadu is beautiful and traditional."], why: "Use “and” to join two adjectives." },
            { t: "order", q: "Put the words in order.", words: ["I", "like", "pottery", "because", "it", "is", "useful."], answer: ["I like pottery because it is useful."], why: "Use “because” to give a reason." }
          ] },
        { type: "speak", title: "From Imagination to Creation", page: 24, source: "book",
          instructions: "a. Imagine you are creating your own craft. Think about these questions. b. In your group, take turns sharing your ideas. Speak clearly and use full sentences.",
          steps: ["What is your craft?", "What materials will you use?", "Why do you want to make it?", "From where did you get the idea?"],
          dialogue: [{ who: "Group", text: "What is your craft?" }, { who: "You", text: "" }, { who: "Group", text: "What materials will you use?" }, { who: "You", text: "" }, { who: "Group", text: "Why do you want to make it?" }, { who: "You", text: "" }, { who: "Group", text: "From where did you get the idea?" }, { who: "You", text: "" }],
          starters: ["My craft is called …….", "It is made of ……", "I want to make it because ……", "I got the idea from ………"],
          record: true }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Think, Pair, Share with the four craft pictures; label them together.", "Students choose the most interesting craft and give a reason with “because”.", "Craft Detective in groups: read the clues aloud, groups guess.", "From Imagination to Creation: each student plans a craft with the four questions, then presents to the group."],
        pair: ["Describe two crafts using the useful words (task 1c).", "Make your own detective clue; your partner guesses the craft."],
        group: ["Craft presentations: each member presents the craft idea with the sentence starters; the group gives one kind tip (clear voice, full sentences)."],
        quick: [{ q: "What is Sadu made with?", a: "Coloured threads." }, { q: "What is shaped from clay?", a: "Pottery (pots)." }, { q: "What are fans made of?", a: "Palm leaves." }, { q: "Finish: I want to make it because …", a: "Students’ own answers." }]
      }
    },

    /* ───────────────────────── LESSON 5 ───────────────────────── */
    {
      id: "u1l5", num: 5, skill: "Reading", title: "Kuwait TV, Then and Now", pages: [25, 26], status: "complete",
      canDo: [
        "I can identify the main ideas from a written text about the development of Kuwait TV in the past and present.",
        "I can organise information from a written text about past and present television in a clear format."
      ],
      goals: ["Read a blog about Kuwait TV.", "Learn 11 new words.", "Compare TV then and now."],
      goalsAr: ["أقرأ مدوّنة عن تلفزيون الكويت.", "أتعلم ١١ كلمة جديدة.", "أقارن التلفزيون قديمًا وحديثًا."],
      warmup: {
        title: "Before You Read", image: "crops/u1l5-warmup.jpg", emoji: "📺", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["How much time do you spend watching TV?", "What is your favourite TV show? Why?"]
      },
      vocab: [
        { w: "official", pos: "adjective", emoji: "🏛️", def: "approved by the government or people in charge", ex: "Kuwait TV (KTV) is the country’s official television station.", exFromBook: true, ar: "رسمي", ipa: "/əˈfɪʃəl/" },
        { w: "broadcasting", pos: "noun", emoji: "📡", def: "sending out radio or TV programmes", ex: "In 1974, colour broadcasting began.", exFromBook: true, ar: "البثّ", ipa: "/ˈbrɔːdkɑːstɪŋ/" },
        { w: "channel", pos: "noun", emoji: "📺", def: "a radio or television station", ex: "It began broadcasting on November 5th, 1961, with only one black-and-white channel.", exFromBook: true, ar: "قناة", ipa: "/ˈtʃænəl/" },
        { w: "programme", pos: "noun", emoji: "🎬", def: "a TV or radio show", ex: "Each programme lasted for just four hours a day.", exFromBook: true, ar: "برنامج", ipa: "/ˈprəʊɡræm/" },
        { w: "daily", pos: "adjective", emoji: "📅", def: "happening every day", ex: "At first, the channel showed the Holy Quran, daily news, and educational programmes for children.", exFromBook: true, ar: "يومي", ipa: "/ˈdeɪli/" },
        { w: "documentary", pos: "noun", emoji: "🎥", def: "a TV or radio programme about real facts", ex: "Some show live news and sports, while others offer documentaries, films, series, and children’s cartoons.", exFromBook: true, ar: "فيلم وثائقي", ipa: "/ˌdɒkjʊˈmentri/" },
        { w: "series", pos: "noun", emoji: "🎞️", def: "TV or radio programmes about the same subject or with the same characters", ex: "I watch a funny series every evening.", exFromBook: false, ar: "مسلسل", ipa: "/ˈsɪə.riːz/" },
        { w: "allow", pos: "verb", emoji: "✅", def: "let someone do something or let something happen", ex: "This app allows people to watch their favourite TV and radio shows anytime and anywhere.", exFromBook: true, ar: "يسمح", ipa: "/əˈlaʊ/" },
        { w: "clearly", pos: "adverb", emoji: "🔍", def: "in a way that is easy to see or understand", ex: "It clearly shows how technology has changed the way we watch television.", exFromBook: true, ar: "بوضوح", ipa: "/ˈklɪəli/" },
        { w: "content", pos: "noun", emoji: "🗂️", def: "the information or ideas in a book, film, show, etc.", ex: "The rise of online streaming has given people more freedom to enjoy content at anytime.", exFromBook: true, ar: "محتوى", ipa: "/ˈkɒntent/" },
        { w: "choice", pos: "noun", emoji: "👆", def: "a chance to choose between two or more things", ex: "Viewers now have the choice to explore programmes that match their interests and lifestyles.", exFromBook: true, ar: "اختيار", ipa: "/tʃɔɪs/" }
      ],
      sections: [
        { type: "reading", title: "Kuwait TV, Then and Now", page: 25,
          instructions: "Read the blog and give it a new title.",
          speaker: "A blog",
          paras: [
            "Have you ever thought about how TV has changed over the years? Kuwait TV (KTV) is the country’s official television station and is part of the Ministry of Information. It began broadcasting on November 5th, 1961, with only one black-and-white channel. Each programme lasted for just four hours a day. In 1974, colour broadcasting began. At first, the channel showed the Holy Quran, daily news, and educational programmes for children. There were no smart devices, no apps, and no way to choose what to watch.",
            "Today, people can choose from many channels that broadcast 24 hours a day. Some show live news and sports, while others offer documentaries, films, series, and children’s cartoons.",
            "Now, it is easy to watch TV on smart devices. To keep up with technology, the Ministry of Information launched the Kuwait TV and Radio Stream App. This app allows people to watch their favourite TV and radio shows anytime and anywhere. It clearly shows how technology has changed the way we watch television.",
            "The rise of online streaming has given people more freedom to enjoy content at anytime. With so many options available, viewers now have the choice to explore programmes that match their interests and lifestyles."
          ],
          note: "Reading Tip: Look for words like now, then, and today. They help you understand what happened in the past and what is happening now. — Did you know? Kuwait was one of the first Gulf countries to launch a national TV channel." },
        { type: "activity", title: "Read the blog and give it a new title.", page: 25, source: "book", stage: "independent",
          instructions: "Write a new title for the blog.",
          items: [
            { t: "short", q: "My new title:", open: true, model: "For example: “How TV Changed in Kuwait” or “Kuwait TV: Past and Present”.", hint: "The blog compares TV in the past and TV today." }
          ] },
        { type: "activity", title: "Extra Practice: Choose the best title", source: "extra", stage: "guided",
          instructions: "Which title is best for the blog?",
          items: [
            { t: "mcq", q: "Choose the best new title:", options: ["How to Make a TV Show", "How TV Changed in Kuwait", "The Best Cartoons for Children"], answer: 1, hint: "Read the first sentence of the blog.", why: "The blog asks “how TV has changed over the years” and compares 1961 with today." }
          ] },
        { type: "activity", title: "Piece It Together: Discovering Kuwait TV.", page: 26, source: "book", stage: "independent",
          instructions: "Read your part of the blog and answer the questions. Activity Tip: Work in groups. Each group reads a different part of the text and answers the questions below. Then share your answers with another group.",
          items: [
            { t: "short", q: "Group A – Paragraph 1: When did Kuwait TV begin, and what programmes did it broadcast at first?", model: "It began on November 5th, 1961. At first, it showed the Holy Quran, daily news, and educational programmes for children.",
              keywords: [["1961"], ["quran", "news", "educational"]], hint: "Find the date and the words “At first”." },
            { t: "short", q: "Group B – Paragraph 2: What kinds of channels and programmes does Kuwait TV offer today?", model: "Many channels broadcast 24 hours a day. Some show live news and sports; others offer documentaries, films, series, and children’s cartoons.",
              keywords: [["24", "many"], ["news", "sport", "documentar", "film", "series", "cartoon"]], hint: "Paragraph 2 starts with “Today”." },
            { t: "short", q: "Group C – Paragraph 3: Why is it easy nowadays to watch our favourite shows?", model: "Because we can watch TV on smart devices. The Kuwait TV and Radio Stream App allows people to watch their favourite shows anytime and anywhere.",
              keywords: [["smart", "app", "device", "anytime", "anywhere"]], hint: "Look for “smart devices” and “app”." },
            { t: "short", q: "Group D – Paragraph 4: What are two benefits of online streaming mentioned in the blog?", model: "1. People have more freedom to enjoy content at any time. 2. Viewers have the choice to explore programmes that match their interests and lifestyles.",
              keywords: [["freedom", "any time", "anytime"], ["choice", "interest", "lifestyle", "option"]], hint: "Find “freedom” and “choice”." }
          ] },
        { type: "activity", title: "Read the sentences. Then, write the correct number in the correct parts of the Venn Diagram to show if it is from the past, now, or both.", page: 26, source: "book", stage: "independent",
          instructions: "Is it from the past (1960s), now (today), or both?",
          items: [
            { t: "choose", q: "1. There was only a black-and-white channel.", options: ["1960s (Past)", "Both", "Today (Now)"], answer: 0, hint: "Look at paragraph 1.", why: "In 1961 KTV began “with only one black-and-white channel”." },
            { t: "choose", q: "2. People watch TV at home.", options: ["1960s (Past)", "Both", "Today (Now)"], answer: 1, hint: "Did people watch TV at home then? Do they now?", why: "People watched TV at home in the past and still do today." },
            { t: "choose", q: "3. TV is available 24 hours a day.", options: ["1960s (Past)", "Both", "Today (Now)"], answer: 2, hint: "Look at paragraph 2.", why: "“Today, people can choose from many channels that broadcast 24 hours a day.” In the past, it was only four hours a day." },
            { t: "choose", q: "4. People couldn’t choose what to watch.", options: ["1960s (Past)", "Both", "Today (Now)"], answer: 0, hint: "Look at the end of paragraph 1.", why: "In the past there was “no way to choose what to watch”." },
            { t: "choose", q: "5. There is an app that allows you to watch shows at any time.", options: ["1960s (Past)", "Both", "Today (Now)"], answer: 2, hint: "Look at paragraph 3.", why: "The Kuwait TV and Radio Stream App is new technology." }
          ] },
        { type: "activity", title: "Fill in the spaces with suitable words from the list below.", page: 26, source: "book", stage: "independent",
          instructions: "Fill in the spaces with suitable words from the list: series – choice – official – allows – daily",
          items: [
            { t: "fill", q: "1. She reads the ____ news every day in the morning.", answer: ["daily"], bank: ["series", "choice", "official", "allows", "daily"], hint: "every day = ?", why: "daily = happening every day." },
            { t: "fill", q: "2. I watched an exciting ____ about space last night.", answer: ["series"], bank: ["series", "choice", "official", "allows", "daily"], hint: "It is a TV show. “an exciting …”", why: "A series is a TV programme; “an exciting series” is correct." },
            { t: "fill", q: "3. Sahel is a /an ____ app used by people in Kuwait.", answer: ["official"], bank: ["series", "choice", "official", "allows", "daily"], hint: "It comes from the government.", why: "official = approved by the government. (Use “an” before official.)" },
            { t: "fill", q: "4. My mom ____ me to watch TV after I finish my homework.", answer: ["allows"], bank: ["series", "choice", "official", "allows", "daily"], hint: "She lets me watch TV.", why: "allow = let someone do something. My mom → allows." }
          ] },
        { type: "activity", title: "Extra Practice: More TV words", source: "extra", stage: "independent",
          instructions: "Tap a word to fill the gap.",
          items: [
            { t: "fill", q: "I watched a ____ about whales. It showed real facts.", answer: ["documentary"], bank: ["documentary", "channel", "clearly", "programme"], why: "A documentary is a programme about real facts." },
            { t: "fill", q: "My favourite sports ____ shows football every day.", answer: ["channel"], bank: ["documentary", "channel", "clearly", "programme"], why: "A channel is a TV station." },
            { t: "fill", q: "Please speak ____ so everyone can understand you.", answer: ["clearly"], bank: ["documentary", "channel", "clearly", "programme"], why: "clearly = in a way that is easy to understand." },
            { t: "fill", q: "Each ____ lasted for just four hours a day.", answer: ["programme"], bank: ["documentary", "channel", "clearly", "programme"], why: "From the blog: “Each programme lasted for just four hours a day.”" }
          ] },
        { type: "discuss", title: "Think like a blogger.", page: 25, source: "book", emoji: "✍️",
          prompts: ["What makes a TV show interesting or meaningful to you?"],
          starters: ["A TV show is interesting when …", "I like shows that …", "It is meaningful because …"] },
        { type: "write", title: "Stream It or Skip It.", page: 26, source: "book",
          instructions: "Discuss with your partner the pros and cons of 24-hour streaming. Then, write two sentences to share your opinion.",
          example: "I like online TV because it is easier to watch.",
          notes: ["“Because” is a word that shows the reason for something or explains why you think or feel a certain way."],
          wordBank: ["because", "I like", "I don’t like", "anytime", "anywhere", "too much time", "choice"],
          frame: [{ label: "Sentence 1", hint: "I like / don’t like 24-hour streaming because …" }, { label: "Sentence 2", hint: "Also, …" }],
          model: "I like 24-hour streaming because I can watch my favourite shows anytime. But children should not watch TV all day because they need time to play and study.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used “because” to give a reason.", "I wrote two sentences with my opinion."],
          minWords: 15 }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Warm-up: How much TV do you watch? Show the old TV, the app and the smart TV.", "Pre-teach the words with the flip cards; point out the Reading Tip (then, now, today).", "Jigsaw reading (Piece It Together): groups A–D read one paragraph each, then share.", "Venn diagram and the gap-fill; finish with Stream It or Skip It."],
        pair: ["Stream It or Skip It: list one pro and one con, then write two “because” sentences.", "Then and Now quiz: one says a fact, the other says “past” or “now”."],
        group: ["Jigsaw groups A–D (the book’s Activity Tip).", "Groups design a children’s TV programme and give it a title."],
        quick: [{ q: "When did Kuwait TV begin?", a: "November 5th, 1961." }, { q: "When did colour broadcasting begin?", a: "In 1974." }, { q: "How many hours a day did each programme last at first?", a: "Four hours a day." }, { q: "Name the app from the blog.", a: "The Kuwait TV and Radio Stream App." }]
      }
    },

    /* ───────────────────────── LESSON 6 ───────────────────────── */
    {
      id: "u1l6", num: 6, skill: "Grammar", title: "Past Simple (used to)", pages: [27], status: "complete",
      canDo: [
        "I can use “used to” correctly in sentences about past habits and lifestyles.",
        "I can write sentences using “used to” neatly about past habits in Kuwait."
      ],
      goals: ["Talk about past habits with used to.", "Make negatives with didn’t use to.", "Ask questions: Did … use to …?"],
      goalsAr: ["أتحدث عن عادات الماضي باستخدام used to.", "أكوّن النفي باستخدام didn’t use to.", "أسأل: Did … use to …؟"],
      warmup: {
        title: "Look at the pictures and discuss.", image: "crops/u1l6-warmup.jpg", emoji: "⛵", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["How did people travel in the past?", "How is travelling today different from the past?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Past Tense (Used to)", page: 27,
          steps: [
            { title: "What is it for?", text: "“Used to” describes a past situation that is no longer true (past habits or states).", textAr: "تصف used to عادة أو حالة في الماضي لم تعد صحيحة الآن.",
              examples: ["{s:They} {a:used to} {v:travel} by boat."] },
            { title: "Affirmative: used to + verb", text: "I / You / He / She / It / We / They + used to + verb. It is the same for every subject.", textAr: "الإثبات: الفاعل + used to + الفعل في صورته الأساسية (نفس الشكل مع كل الضمائر).",
              examples: ["{s:People} {a:used to} {v:live} in clay houses.", "{s:My grandfather} {a:used to} {v:dive} for pearls."] },
            { title: "Negative: didn’t use to + verb", text: "I / You / He / She / It / We / They + didn’t use to + verb. After didn’t, write use to (no d).", textAr: "النفي: didn’t use to + الفعل. بعد didn’t نكتب use بدون d.",
              examples: ["{s:They} {n:didn’t} {a:use to} {v:travel} by plane."], tip: "didn’t = did not" },
            { title: "Question: Did + subject + use to + verb?", text: "Start with Did. After Did, write use to (no d).", textAr: "السؤال: Did + الفاعل + use to + الفعل؟",
              examples: ["{a:Did} {s:people} {a:use to} {v:travel} by boat?"], tip: "Short answers: Yes, they did. / No, they didn’t." },
            { title: "used to or past simple?", source: "extra", text: "Both talk about the past. Used to shows a habit that is not true now. Often the past simple is also correct.", textAr: "كلاهما للماضي، لكن used to تؤكد أن العادة انتهت. غالبًا يصح الماضي البسيط أيضًا.",
              examples: ["{s:People} {a:used to} {v:live} in clay houses. = {s:People} {v:lived} in clay houses."] }
          ],
          table: { head: ["", "Rule", "Example"], rows: [
            ["☑ Affirmative", "I / You / He / She / It / We / They + used to + verb", "They used to travel by boat."],
            ["✕ Negative", "I / You / He / She / It / We / They + didn’t use to + verb", "They didn’t use to travel by plane."],
            ["? Question", "Did + subject + use to + verb?", "Did people use to travel by boat?"]
          ] },
          worked: { q: "Make negative: Children used to play video games.", steps: ["Find “used to”.", "Negative: didn’t + use to (take away the d).", "Keep the verb the same: play."], a: "{s:Children} {n:didn’t} {a:use to} {v:play} video games." } },
        { type: "activity", title: "Extra Practice: used to or use to?", source: "extra", stage: "guided",
          instructions: "Tap the correct answer. Look for didn’t or Did.",
          items: [
            { t: "choose", q: "People ____ live in clay houses.", options: ["used to", "use to"], answer: 0, hint: "Is there didn’t or Did?", why: "Affirmative: used to + verb." },
            { t: "choose", q: "They didn’t ____ travel by plane.", options: ["used to", "use to"], answer: 1, hint: "Look at didn’t.", why: "After didn’t → use to (no d)." },
            { t: "choose", q: "Did people ____ travel by boat?", options: ["used to", "use to"], answer: 1, hint: "Look at Did.", why: "After Did → use to (no d)." },
            { t: "choose", q: "Men used to ____ for pearls.", options: ["dive", "dived", "diving"], answer: 0, hint: "What comes after used to?", why: "used to + base verb: dive." },
            { t: "choose", q: "____ children use to study at Al-Katateeb?", options: ["Do", "Did", "Does"], answer: 1, hint: "It is about the past.", why: "Questions with use to start with Did." }
          ] },
        { type: "activity", title: "Do as shown between brackets.", page: 27, source: "book", stage: "independent",
          instructions: "Do as shown between brackets.",
          items: [
            { t: "fill", q: "1. People used to watch TV in the 1950s. (Make negative) → People ____ watch TV in the 1950s.", answer: ["didn’t use to", "didn't use to", "did not use to", "didn’t", "didn't", "did not"],
              acceptNote: "Good! “didn’t use to” is the lesson’s form; “didn’t watch” (past simple) is also correct English.",
              hint: "Negative of used to: didn’t + use to.", why: "People didn’t use to watch TV in the 1950s." },
            { t: "fill", q: "2. Men used to ____ for pearls. (Correct the verb: dive)", answer: ["dive"], hint: "used to + base verb.", why: "After used to we use the base verb: Men used to dive for pearls. (not dived / diving)" }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The underlined word is wrong. Write the correct word.",
          items: [
            { t: "fix", q: "They didn’t {used} to travel by plane.", answer: ["use"], hint: "Look at didn’t.", why: "didn’t + use to (no d)." },
            { t: "fix", q: "Did people {used} to live in tall buildings?", answer: ["use"], hint: "Look at Did.", why: "Did + subject + use to + verb?" },
            { t: "fix", q: "My grandfather used to {dived} for pearls.", answer: ["dive"], hint: "What comes after used to?", why: "used to + base verb: dive." },
            { t: "fix", q: "Children {use} to study at Al-Katateeb.", answer: ["used"], hint: "Is there didn’t or Did?", why: "Affirmative: used to (with d)." },
            { t: "fix", q: "{Do} people use to travel by boat in the past?", answer: ["Did"], hint: "“in the past”", why: "Past question: Did + subject + use to + verb?" }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a sentence.", words: ["They", "used", "to", "travel", "by", "boat."], answer: ["They used to travel by boat."], why: "Subject + used to + verb." },
            { t: "order", q: "Make a negative sentence.", words: ["People", "didn’t", "use", "to", "have", "smartphones."], answer: ["People didn’t use to have smartphones."], why: "Subject + didn’t use to + verb." },
            { t: "order", q: "Make a question.", words: ["Did", "people", "use", "to", "live", "in", "clay", "houses?"], answer: ["Did people use to live in clay houses?"], why: "Did + subject + use to + verb?" }
          ] },
        { type: "speak", title: "Ask each other questions about life in old Kuwait.", page: 27, source: "book",
          instructions: "Ask each other questions about life in old Kuwait. Ask about schools, smartphones, diving for pearls, and drawing.",
          dialogue: [
            { who: "A", text: "Did people use to live in tall buildings?" },
            { who: "B", text: "No, they didn’t use to live in tall buildings. They used to live in clay houses." },
            { who: "A", text: "Did people use to have smartphones?" },
            { who: "B", text: "" },
            { who: "B", text: "Did children use to go to modern schools?" },
            { who: "A", text: "" }
          ],
          starters: ["Did people use to …?", "Did children use to …?", "Yes, they did. They used to …", "No, they didn’t use to … They used to …", "schools – smartphones – diving for pearls – drawing"],
          record: true },
        { type: "write", title: "Write two sentences about something you used to do when you were younger.", page: 27, source: "book",
          instructions: "Write two sentences about something you used to do when you were younger.",
          wordBank: ["used to", "didn’t use to", "when I was younger", "when I was five", "every day"],
          frame: [{ label: "Sentence 1", hint: "When I was younger, I used to …" }, { label: "Sentence 2", hint: "I didn’t use to … / I used to …" }],
          model: "When I was younger, I used to watch cartoons every morning. I didn’t use to read books, but now I love reading.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I wrote used to + verb (or didn’t use to + verb).", "I wrote two sentences."],
          minWords: 12 }
      ],
      game: { kind: "quiz", title: "used to Race", items: [
        { t: "choose", q: "We ____ play in the courtyard.", options: ["used to", "use to"], answer: 0, why: "Affirmative → used to." },
        { t: "choose", q: "She didn’t ____ have a phone.", options: ["used to", "use to"], answer: 1, why: "didn’t → use to." },
        { t: "choose", q: "Did they use to ____ by boat?", options: ["travel", "travelled"], answer: 0, why: "use to + base verb." },
        { t: "choose", q: "____ you use to watch cartoons?", options: ["Did", "Were"], answer: 0, why: "Questions: Did + subject + use to …?" },
        { t: "choose", q: "Men used to ____ for pearls.", options: ["dive", "diving"], answer: 0, why: "used to + base verb." },
        { t: "choose", q: "Which is correct?", options: ["People used to lived in clay houses.", "People used to live in clay houses."], answer: 1, why: "used to + base verb: live." }
      ] },
      teacher: {
        notes: ["Warm-up: dhow vs plane pictures. How did people travel? How is it different today?", "Present the book’s table; stress “used to” (affirmative) vs “use to” (after didn’t / Did).", "Worked example, then guided ‘used to or use to?’, then the book task.", "Pairs ask questions about life in old Kuwait; then write two sentences about when they were younger."],
        pair: ["Old Kuwait interview: schools, smartphones, diving for pearls, drawing.", "“When I was five…” — tell your partner two things you used to do."],
        group: ["Then and Now chart: groups write three “used to” and three “didn’t use to” sentences about old Kuwait."],
        quick: [{ q: "Make negative: They used to travel by boat.", a: "They didn’t use to travel by boat." }, { q: "Make a question: People used to live in clay houses.", a: "Did people use to live in clay houses?" }, { q: "Correct: Men used to dived for pearls.", a: "Men used to dive for pearls." }]
      }
    },

    /* ───────────────────────── LESSON 7 ───────────────────────── */
    {
      id: "u1l7", num: 7, skill: "Writing", title: "Life in Old Kuwait", pages: [28, 29], status: "complete",
      canDo: [
        "I can identify the main ideas from a model paragraph about life in old Kuwait.",
        "I can respect cultural heritage by reflecting on past lifestyles in a paragraph about Kuwait.",
        "I can organise sentences into a structured paragraph about past life in Kuwait."
      ],
      goals: ["Learn the parts of a paragraph.", "Plan a paragraph with a topic sentence, details and a conclusion.", "Write about life in old Kuwait."],
      goalsAr: ["أتعرّف أجزاء الفقرة.", "أخطط لفقرة: جملة رئيسية وتفاصيل وخاتمة.", "أكتب عن الحياة في الكويت قديمًا."],
      linkers: ["First", "next", "then"],
      warmup: {
        title: "Look at the pictures and discuss.", image: "crops/u1l7-warmup.jpg", emoji: "🏘️", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["How did people live in the past?", "What jobs did people do in the past?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "Fill in the table with what people did in old Kuwait.", page: 28, source: "book", stage: "guided",
          instructions: "Fill in the table with what people did in old Kuwait. Use ideas from Lesson 1 (Pearl of the Gulf).",
          items: [
            { t: "table", q: "Fill in the table.", head: ["Their homes", "What men did", "What women did", "How they lived"],
              rows: [
                [{ open: true, model: "Houses made of clay and palm leaves" }, { open: true, model: "Fishermen, pearl divers, traders" }, { open: true, model: "Cooked food, made clothes, raised children" }, { open: true, model: "Simple lives; they worked hard" }],
                [{ open: true, model: "No big shops or modern buildings" }, { open: true, model: "Travelled in wooden dhows to sell goods" }, { open: true, model: "Made crafts from palm leaves (baskets, fans)" }, { open: true, model: "Cooperation and cheerful moments" }]
              ], open: true, note: "Many answers are possible. The suggested answers come from the text on page 20." }
          ] },
        { type: "activity", title: "Writing a paragraph is just like building an ice cream cone, one scoop at a time!", page: 28, source: "book", stage: "guided",
          instructions: "a. Read the following sentences. b. Match each sentence with its correct part in the diagram (A Topic Sentence, B Detail 1, C Detail 2, D Detail 3, E Concluding Sentence).",
          items: [
            { t: "match", q: "Match each sentence with its part. (The book already gives C and A.)",
              pairs: [
                ["First, the story explained how the divers went underwater to find shells.", "B – Detail 1"],
                ["Then, the book helped me understand how strong and bold the pearl divers were.", "D – Detail 3"],
                ["Next, I learned that they looked for pearls inside the shells.", "C – Detail 2"],
                ["I was amazed by how brave and hardworking the pearl divers were.", "E – Concluding Sentence"],
                ["Last week, I read a nice book about pearl diving in the past.", "A – Topic Sentence"]
              ],
              hint: "The linkers help: First → Detail 1, Next → Detail 2, Then → Detail 3.", why: "The topic sentence says what the paragraph is about. First / Next / Then give the details in order. The last sentence gives the writer’s feeling." }
          ] },
        { type: "activity", title: "c. Answer the following questions.", page: 28, source: "book", stage: "independent",
          instructions: "Answer the questions about the ice cream paragraph.",
          items: [
            { t: "short", q: "1. What is the paragraph about? How do you know that?", model: "It is about a book about pearl diving in the past. We know from the topic sentence: “Last week, I read a nice book about pearl diving in the past.”",
              keywords: [["pearl"], ["topic", "first sentence", "book"]], hint: "Read sentence A." },
            { t: "short", q: "2. What do the three details tell us?", model: "They tell us what the writer learned: the divers went underwater to find shells, they looked for pearls inside the shells, and they were strong and bold.",
              keywords: [["shell", "pearl", "underwater", "strong", "bold"]], hint: "Read sentences B, C and D." },
            { t: "short", q: "3. Why is the last sentence important?", model: "It is the concluding sentence. It ends the paragraph and shows the writer’s feeling: he was amazed by how brave and hardworking the pearl divers were.",
              keywords: [["end", "conclu", "feel", "amazed", "final"]], hint: "What does sentence E do?" }
          ] },
        { type: "activity", title: "Extra Practice: Linkers for order", source: "extra", stage: "guided",
          instructions: "Choose the correct linker.",
          items: [
            { t: "choose", q: "____, families worked together every day. (the first detail)", options: ["First", "Then"], answer: 0, why: "Use First for the first detail." },
            { t: "choose", q: "____, men spent long hours diving for pearls. (the second detail)", options: ["Next", "First"], answer: 0, why: "Use Next for the second detail." },
            { t: "choose", q: "____, women cooked food and made crafts. (the third detail)", options: ["First", "Then"], answer: 1, why: "Use Then for the next detail in the order." }
          ] },
        { type: "activity", title: "Let’s plan our paragraph. First, reorder the following sentences to fill in the outline below.", page: 29, source: "book", stage: "guided",
          instructions: "Now, we will use the same structure to write a paragraph about life in old Kuwait. Match each part of the outline with a sentence. (Details 1 and 2 are given in the book.)",
          image: "crops/u1l7-market.jpg",
          items: [
            { t: "match", q: "Match each part of the outline with its sentence.",
              pairs: [
                ["Topic Sentence", "A long time ago, life in old Kuwait was very different from what it is today."],
                ["Detail 1", "Families worked together everyday."],
                ["Detail 2", "Men spent long hours diving for pearls or trading goods by sea."],
                ["Detail 3", "Women cooked food and made crafts."],
                ["Concluding Sentence", "Life was simple, and people helped each other."]
              ],
              hint: "The topic sentence is general. The concluding sentence sums up.", why: "The topic sentence gives the main idea (life was different). The details are facts about families, men and women. The last sentence sums up: life was simple and people helped each other." }
          ] },
        { type: "activity", title: "Extra Practice: Past tense check", source: "extra", stage: "independent",
          instructions: "The underlined verb is in the wrong tense. Write it in the past.",
          items: [
            { t: "fix", q: "A long time ago, men {dive} for pearls.", answer: ["dived", "dove"], acceptNote: "Both are correct: dived (British) and dove (American).", hint: "“A long time ago” = past.", why: "dive → dived." },
            { t: "fix", q: "In the past, women {make} crafts from palm leaves.", answer: ["made"], hint: "make is irregular.", why: "make → made." },
            { t: "fix", q: "Life in old Kuwait {is} simple.", answer: ["was"], hint: "Past of is.", why: "is → was." },
            { t: "fix", q: "Families {work} together every day in the past.", answer: ["worked"], hint: "Add -ed.", why: "work → worked." }
          ] },
        { type: "write", title: "Now, use the ideas in your plan to write a paragraph in your notebook about ‘Life in Old Kuwait’.", page: 29, source: "book",
          instructions: "Use the ideas in your plan to write a paragraph about ‘Life in Old Kuwait’. Use the linkers First, next, then.",
          wordBank: ["First,", "Next,", "Then,", "cheerful", "wooden", "simple", "a long time ago", "worked", "made", "lived"],
          wordBankLabel: "Linker Bank and descriptive words",
          frame: [
            { label: "Topic Sentence", hint: "A long time ago, life in old Kuwait …" },
            { label: "Detail 1", hint: "First, …" },
            { label: "Detail 2", hint: "Next, …" },
            { label: "Detail 3", hint: "Then, …" },
            { label: "Concluding Sentence", hint: "Life was …" }
          ],
          model: "A long time ago, life in old Kuwait was very different from what it is today. First, families worked together every day. Next, men spent long hours diving for pearls or trading goods by sea in wooden boats. Then, women cooked food and made beautiful crafts from palm leaves. Life was simple, but it was full of cheerful moments, and people helped each other.",
          modelFromBook: false,
          bookChecklist: ["Did I write a clear topic sentence?", "Did I include at least three details?", "Did I use the past tense correctly?", "Did I use descriptive words like, “cheerful”, “wooden”, and “simple”?", "Did I check my punctuation and capital letters?", "Did I use an AI tools to help me proofread my writing?"],
          bookNote: "Use AI wisely and responsibly. Let AI help you grow not do the work for you.",
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used past verbs (was, worked, made, lived).", "I used First, Next and Then."],
          minWords: 45 }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["Families worked together every day.", "Women cooked food and made crafts.", "Men dived for pearls.", "Life was simple.", "People helped each other."] },
      teacher: {
        notes: ["Warm-up with the five pictures: how did people live? What jobs did they do?", "Fill in the table together using Lesson 1 ideas.", "Ice cream cone: topic sentence (top scoop) → three details → concluding sentence (cone). Match the sentences.", "Plan the paragraph (task 4a), then students write it in their notebooks and use the checklist."],
        pair: ["Peer check with the book’s Writing Checklist.", "Partner reads the paragraph aloud; the writer listens for First, Next, Then."],
        group: ["Groups build a paper ice cream cone: each scoop is one sentence of the paragraph."],
        quick: [{ q: "What does a topic sentence do?", a: "It gives the main idea of the paragraph." }, { q: "Name the three linkers in the bank.", a: "First, next, then." }, { q: "Past of “make”?", a: "made" }, { q: "What does the concluding sentence do?", a: "It ends the paragraph / gives the final idea or feeling." }]
      }
    }
  ]
});

// Unit 11 — Intelligence and Creativity (Module 4 "Exploring Abilities", printed pages 82–87, module cover p. 75)
BOOK.addUnit({
  id: "u11", num: 11, title: "Intelligence and Creativity", titleAr: "الذكاء والإبداع",
  module: 4, moduleTitle: "Exploring Abilities",
  pages: [82, 87],
  cover: 75,
  status: "complete",
  outcomes: {
    "speech acts": ["Express possibilities", "Describe imaginary characters", "Express agreement/ disagreement", "Give advice", "Vote", "Justify opinions"],
    "language structures": ["Study suffixes", "Express double comparatives", "Use If conditional (1st)"],
    "module 4 — activities": ["Expressing opinions and voting", "Using creative thinking to come up with new things", "Planning for a project and a presentation"]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u11l1", num: 1, skill: "Reading",
      title: "Be Creative",
      pages: [82, 83],
      status: "complete",
      canDo: ["Express possibilities"],
      goals: ["Read about five types of creativity.", "Learn 7 new words.", "Complete a table with examples.", "Give your own examples."],
      goalsAr: ["أقرأ عن خمسة أنواع من الإبداع.", "أتعلّم 7 كلمات جديدة.", "أكمل جدولًا بالأمثلة.", "أعطي أمثلة من عندي."],
      warmup: {
        title: "Before you read",
        image: "crops/u11l1-warmup.jpg",
        emoji: "🎨",
        prompts: ["Think of what you can do with these objects other than their intended purpose.", "(pencils – a plastic bottle – a shoebox)"],
        seconds: 120
      },
      vocab: [
        { w: "intended", pos: "adjective", emoji: "🎯", def: "planned; made for a certain purpose", ex: "Think of what you can do with these objects other than their intended purpose.", exFromBook: true, ar: "مقصود / مخصّص له" },
        { w: "original", pos: "adjective", emoji: "✨", def: "new and different; not copied", ex: "Creativity is using your imagination to create something original.", exFromBook: true, ar: "أصلي / مبتكر" },
        { w: "dramatic", pos: "adjective", emoji: "💥", def: "big, sudden and exciting", ex: "Creativity is not only about dramatic new ideas, it is also about making gradual improvements to existing ideas.", exFromBook: true, ar: "مثير / كبير ومفاجئ" },
        { w: "combine", pos: "verb", emoji: "🔗", def: "to join two or more things together", ex: "Two or more ideas can be combined to create a new idea.", exFromBook: true, ar: "يدمج / يجمع" },
        { w: "involve", pos: "verb", emoji: "🧩", def: "to include something as a necessary part", ex: "In the past, all surgical operations involved cutting into the patient.", exFromBook: true, ar: "يتضمّن" },
        { w: "approach", pos: "noun (Words to Remember: verb)", emoji: "🧭", def: "a way of dealing with a problem (as a verb: to come near)", ex: "If you change your approach, you can sometimes find a different solution.", exFromBook: true, ar: "طريقة / أسلوب (يقترب)" },
        { w: "restriction", pos: "noun", emoji: "🚫", def: "a rule that limits what you can do", ex: "For example, most city planners slow traffic down with speed restrictions and signs.", exFromBook: true, ar: "قيد / تقييد" }
      ],
      sections: [
        { type: "reading", title: "Be Creative (Expository Text)", page: 82,
          instructions: "Read the text, then fill in the table below.",
          blocks: [
            { head: "Be creative", paras: ["Creativity is using your imagination to create something original. Everyone is creative, but some people act on their ideas and others don’t.", "There are many ways of being creative and creativity can help us solve many different problems."] },
            { head: "1 The evolution of ideas", paras: ["Creativity is not only about dramatic new ideas, it is also about making gradual improvements to existing ideas. Car development is an example of this. If a car designer creates a more comfortable car, he builds on many changes made by designers in the past."] },
            { head: "2 Putting ideas together", paras: ["Two or more ideas can be combined to create a new idea. If you join the ideas of a computer and a network, you get the Internet."] },
            { head: "3 Changing how we do things", paras: ["Sometimes new ideas bring about a change in how we do things. In the past, all surgical operations involved cutting into the patient. But now doctors can send a small tube with a camera into a person’s body and treat the patient from the inside."] },
            { head: "4 Finding a new use for things", paras: ["Creativity doesn’t always involve inventing something new. If you look at something that exists, you can often think of another use for it.", "Some of the best scientific developments have come this way. In the 19th century, plastic was developed for making balls. In 1889, a man discovered that you could use it for photographic film."] },
            { head: "5 Changing approach", paras: ["When we try to solve a problem, we often use one way to deal with it, which may not work. If you change your approach, you can sometimes find a different solution. For example, most city planners slow traffic down with speed restrictions and signs. But one planner proved that if you take all the signs away, cars go slower! This is because drivers have to be more careful."] }
          ] },

        { type: "activity", title: "2. Read the text, then fill in the table below:", page: 83, source: "book",
          instructions: "Write the type of creativity and the example from the text. Then give your own example.", instructionsAr: "اكتب نوع الإبداع والمثال من النص، ثم أعطِ مثالًا من عندك.",
          items: [
            { t: "table", q: "Complete the table.",
              head: ["No.", "Type of creativity", "Example", "Give your own example"],
              rows: [
                ["1", { answer: ["the evolution of ideas", "evolution of ideas"], model: "The evolution of ideas" }, "A car designer uses changes made by designers in the past", { open: true }],
                ["2", "Putting ideas together", { model: "Joining the ideas of a computer and a network gives the Internet.", open: true }, { open: true }],
                ["3", { answer: ["changing how we do things"], model: "Changing how we do things" }, { model: "Doctors send a small tube with a camera into a person’s body and treat the patient from the inside (no cutting).", open: true }, { open: true }],
                ["4", { answer: ["finding a new use for things", "finding a new use for things."], model: "Finding a new use for things" }, "Plastic for making balls used for photographic film", { open: true }],
                ["5", "Changing approach", { model: "One planner took all the signs away and cars went slower, because drivers have to be more careful.", open: true }, { open: true }]
              ],
              hint: "Each numbered heading in the text is a type of creativity." }
          ] },

        { type: "activity", title: "Extra Practice: Which type of creativity?", source: "extra", stage: "guided",
          instructions: "Read the example. Choose the type of creativity.", instructionsAr: "اقرأ المثال واختر نوع الإبداع.",
          items: [
            { t: "mcq", q: "A phone + a camera = a camera phone.", options: ["Putting ideas together", "Changing approach", "Finding a new use for things"], answer: 0, why: "Two ideas are combined to make a new idea." },
            { t: "mcq", q: "Every year, phones become a little faster and thinner.", options: ["The evolution of ideas", "Putting ideas together", "Changing approach"], answer: 0, why: "Gradual improvements to an existing idea." },
            { t: "mcq", q: "You use an old plastic bottle as a flower pot.", options: ["Changing how we do things", "Finding a new use for things", "The evolution of ideas"], answer: 1, why: "Another use for something that exists." },
            { t: "mcq", q: "Today people buy things online and don’t go to the shop.", options: ["Changing how we do things", "Putting ideas together", "Finding a new use for things"], answer: 0, why: "A new idea changes how we do things." },
            { t: "mcq", q: "Why do cars go slower when there are no signs?", options: ["Drivers have to be more careful.", "The roads are closed.", "There are more police."], answer: 0, why: "“This is because drivers have to be more careful.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل الجمل بالكلمات.",
          items: [
            { t: "fill", q: "1. Mix blue and yellow. When you ____ them, you get green.", answer: ["combine"], bank: ["combine", "original", "restrictions", "approach", "involve"], why: "combine = join together." },
            { t: "fill", q: "2. His drawing is very ____. Nobody has drawn anything like it.", answer: ["original"], bank: ["combine", "original", "restrictions", "approach", "involve"], why: "original = new, not copied." },
            { t: "fill", q: "3. There are speed ____ near schools.", answer: ["restrictions"], bank: ["combine", "original", "restrictions", "approach", "involve"], why: "restrictions = rules that limit." },
            { t: "fill", q: "4. This method did not work. Let’s try a different ____.", answer: ["approach"], bank: ["combine", "original", "restrictions", "approach", "involve"], why: "approach = a way of dealing with a problem." },
            { t: "fill", q: "5. Good teamwork will ____ everybody in the group.", answer: ["involve"], bank: ["combine", "original", "restrictions", "approach", "involve"], why: "involve = include." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show pencils, a bottle and a box. Groups list other uses in 2 minutes (a pencil as a hair stick, a bottle as a vase …). The group with the most ideas wins.",
          "Read the introduction, then one type of creativity at a time. Ask students for a new example of each type.",
          "Complete the table: type, example from the text, own example.",
          "Note: the Words to Remember list gives approach as a verb; in the text it is a noun (your approach = your way)."
        ],
        pair: ["A reads an example, B names the type of creativity.", "Pairs think of a new use for a classroom object."],
        group: ["Creativity challenge: each group combines two objects into a new invention (Putting ideas together)."],
        quick: [
          { q: "What is creativity?", a: "Using your imagination to create something original." },
          { q: "Computer + network = ?", a: "The Internet." },
          { q: "What was plastic first developed for?", a: "Making balls." },
          { q: "Why do cars go slower without signs?", a: "Because drivers have to be more careful." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u11l2", num: 2, skill: "Grammar",
      title: "Suffixes (-ment/ -able/ -ed/ -less/ -ful)",
      pages: [83, 83],
      status: "complete",
      canDo: ["Study suffixes"],
      goals: ["Know what a suffix is.", "Find words with suffixes in the text.", "Add the right suffix to a word."],
      goalsAr: ["أعرف ما هي اللاحقة.", "أجد كلمات فيها لواحق في النص.", "أضيف اللاحقة المناسبة للكلمة."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "🧱",
        prompts: ["help → helpful → helpless. What changes?", "Can you think of other words that end in -ful?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Suffixes (-ment/ -able/ -ed/ -less/ -ful)", page: 83,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "A suffix is a letter or a group of letters added to the end of a word to change its meaning. -ment = action or process · -able = can be done · -ed = past tense verb · -less = without · -ful = full of.",
              textAr: "اللاحقة حرف أو مجموعة حروف تُضاف إلى آخر الكلمة فتغيّر معناها.",
              examples: ["improve + {x:ment} = improvement (process)", "comfort + {x:able} = comfortable", "combine + {x:d} = combined (past)", "fear + {x:less} = fearless (without fear)", "help + {x:ful} = helpful (full of help)"] },
            { title: "Step 2 — Suffixes change the word type (Extra)", source: "extra",
              text: "-ment makes a noun. -able, -less and -ful make adjectives. -ed makes the past of a verb.",
              textAr: "‎-ment تكوّن اسمًا، و ‎-able و ‎-less و ‎-ful تكوّن صفات، و ‎-ed تكوّن الفعل الماضي.",
              examples: ["The teacher wanted to see {o:improvement} in my grades. (noun)", "I like to be {o:helpful} at home. (adjective)", "Two ideas can be {v:combined}. (verb 3)"] },
            { title: "Step 3 — -ful and -less are opposites (Extra)", source: "extra",
              text: "-ful = full of / with. -less = without.",
              textAr: "‎-ful تعني «مليء بـ»، و ‎-less تعني «بدون»، فهما متضادتان.",
              examples: ["care{x:ful} ↔ care{x:less}", "use{x:ful} ↔ use{x:less}", "fear{x:ful} (afraid) ↔ fear{x:less} (brave)"] },
            { title: "Step 4 — Spelling (Extra)", source: "extra",
              text: "Words ending in -e: just add -d (combine → combined). Words ending in consonant + y: y → i (happy → happiness, beauty → beautiful).",
              textAr: "الكلمة المنتهية بـ e نضيف لها d فقط، والمنتهية بحرف ساكن + y نحوّل y إلى i.",
              examples: ["combine → combine{x:d}", "beauty → beauti{x:ful}"] }
          ],
          table: {
            head: ["Suffix", "Meaning (from the book)", "Example"],
            rows: [["-ment", "action or process", "improvement, development"], ["-able", "can be done", "comfortable, washable"], ["-ed", "past tense verb", "combined, involved"], ["-less", "without", "fearless, careless"], ["-ful", "full of", "helpful, careful"]]
          },
          worked: {
            q: "Add the right suffix: The (fear) ____ boy saved the cat.",
            steps: ["The gap is before a noun (boy) → we need an adjective.", "Adjective suffixes: -ful, -less, -able.", "A boy who saved a cat is brave = without fear → -less."],
            a: "The fearless boy saved the cat."
          },
          notes: ["A suffix goes at the END of a word. (A prefix goes at the beginning: un-, re-.)", "Look at the meaning: full of → -ful; without → -less; can be done → -able; action/process → -ment."] },

        { type: "activity", title: "Find the words in the text that end with suffixes:", page: 83, source: "book", stage: "guided",
          instructions: "Read the text “Be Creative” (page 82) again. Find five words that end with suffixes.", instructionsAr: "اقرأ النص مرة أخرى وابحث عن خمس كلمات تنتهي بلواحق.",
          items: [
            { t: "short", q: "Write five words from the text that end with suffixes.",
              model: "improvements, development(s) (-ment) · comfortable (-able) · combined, involved, developed, discovered, proved (-ed) · careful (-ful)",
              keywords: [["improvement", "development", "comfortable", "combined", "involved", "developed", "discovered", "proved", "careful", "intended"]],
              hint: "Look at paragraphs 1, 2, 3, 4 and 5. Look for -ment, -able, -ed, -ful." },
            { t: "match", q: "Match each word from the text to its suffix.",
              pairs: [["improvements", "-ment"], ["comfortable", "-able"], ["combined", "-ed"], ["careful", "-ful"]],
              hint: "Look at the end of each word.", why: "improve+ment(s), comfort+able, combine+d, care+ful." }
          ] },

        { type: "activity", title: "Add the right suffixes to the words in brackets:", page: 83, source: "book", stage: "guided",
          instructions: "Type the new word.", instructionsAr: "اكتب الكلمة الجديدة.",
          items: [
            { t: "fill", q: "• I like to be (help) ____ at home.", answer: ["helpful"], hint: "Full of help.", why: "help + ful = helpful (an adjective after be)." },
            { t: "fill", q: "• The (fear) ____ boy saved the cat.", answer: ["fearless"], hint: "He was brave: without fear.", why: "fear + less = fearless (brave)." },
            { t: "fill", q: "• The teacher wanted to see (improve) ____ in my grades this month.", answer: ["improvement", "improvements"], hint: "We need a noun (a process).", why: "improve + ment = improvement (noun)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the suffix", source: "extra", stage: "guided",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "mcq", q: "Be ____ when you cross the road.", options: ["careful", "careless", "carement"], answer: 0, why: "careful = paying attention (full of care)." },
            { t: "mcq", q: "My old phone is broken. It is ____ now.", options: ["useful", "useless", "usement"], answer: 1, why: "useless = without use." },
            { t: "mcq", q: "This sofa is very ____.", options: ["comfortable", "comfortful", "comfortment"], answer: 0, why: "comfort + able = comfortable." },
            { t: "mcq", q: "We had a lot of ____ at the party.", options: ["enjoyful", "enjoyment", "enjoyless"], answer: 1, why: "enjoy + ment = enjoyment (noun)." },
            { t: "mcq", q: "Yesterday, my brother ____ me with my homework.", options: ["helpful", "helped", "helpless"], answer: 1, why: "Yesterday → past tense: help + ed = helped." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Make the word (on your own)", source: "extra", stage: "independent",
          instructions: "Add a suffix to the word in brackets.", instructionsAr: "أضف لاحقة إلى الكلمة بين القوسين.",
          items: [
            { t: "fill", q: "This jacket is (wash) ____. You can put it in the washing machine.", answer: ["washable"], hint: "It can be washed.", why: "-able = can be done." },
            { t: "fill", q: "The young bird could not fly. It was (help) ____.", answer: ["helpless"], hint: "Without help / cannot help itself.", why: "help + less = helpless." },
            { t: "fill", q: "Thank you for the (use) ____ advice.", answer: ["useful"], hint: "Full of use.", why: "use + ful = useful." },
            { t: "fill", q: "Last week, we (visit) ____ the science museum.", answer: ["visited"], hint: "Last week → past.", why: "visit + ed = visited." },
            { t: "fill", q: "The (develop) ____ of the car took many years.", answer: ["development"], hint: "We need a noun.", why: "develop + ment = development." }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! -ful or -less?",
        buckets: ["full of … (-ful)", "without … (-less)"],
        cards: [["helpful", 0], ["careful", 0], ["useful", 0], ["beautiful", 0], ["fearless", 1], ["careless", 1], ["useless", 1], ["homeless", 1]] },
      teacher: {
        notes: [
          "Write HELP on the board. Add -ful, -less, -ed and ask how the meaning changes.",
          "Teach the book box and the five suffix cards (-ment, -able, -ed, -less, -ful) with their meanings.",
          "Students find words with suffixes in the “Be Creative” text (improvements, comfortable, combined, involved, careful …).",
          "Exercise 4: helpful, fearless, improvement.",
          "Extra Steps 1–2 for practice."
        ],
        pair: ["Suffix ping-pong: A says a word (care), B adds a suffix (careful / careless) and uses it in a sentence."],
        group: ["Word-building race: give each group 5 base words; they write as many new words with suffixes as they can in 3 minutes."],
        quick: [
          { q: "What is a suffix?", a: "Letters added to the end of a word to change its meaning." },
          { q: "What does -less mean?", a: "without" },
          { q: "fear + ? = brave", a: "fearless" },
          { q: "improve → noun?", a: "improvement" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — WRITING ─────────────────────────
    {
      id: "u11l3", num: 3, skill: "Writing",
      title: "Writing Part 1: A Character Profile",
      pages: [83, 83],
      status: "complete",
      canDo: ["Describe imaginary characters"],
      goals: ["Invent a character with your group.", "Describe the appearance and personality.", "Write what the person likes doing."],
      goalsAr: ["أبتكر شخصية مع مجموعتي.", "أصف الشكل والشخصية.", "أكتب ما تحب الشخصية فعله."],
      warmup: {
        title: "Writing — Part 1",
        image: null,
        emoji: "🧑‍🎨",
        prompts: ["Be creative. Think of a person from your imagination.", "What does he/she look like? What is he/she like?"],
        seconds: 60
      },
      vocab: [
        { w: "appearance", pos: "noun", emoji: "🪞", def: "the way someone or something looks", ex: "Write four things to describe the person’s appearance.", exFromBook: true, ar: "المظهر" }
      ],
      sections: [
        { type: "write", title: "5. Be creative. In groups, design a character profile for a person from your imagination.", page: 83, source: "book",
          instructions: "Draw a face and give it a name. Write four things to describe the person’s appearance. Write four more things to describe the person’s personality, then write three things that the person likes doing.",
          wordBank: ["tall", "short", "curly hair", "brown eyes", "glasses", "kind", "brave", "funny", "clever", "shy", "likes drawing", "likes swimming"],
          frame: [
            { label: "Name", hint: "Give your character a name." },
            { label: "Appearance (1–4)", hint: "tall / short hair / big brown eyes / wears glasses …" },
            { label: "Personality (1–4)", hint: "kind / brave / funny / clever …" },
            { label: "Likes (1–3)", hint: "drawing / swimming / helping animals …" }
          ],
          model: "Name: Captain Nasser. Appearance: 1. tall 2. short black hair 3. big brown eyes 4. wears a green jacket. Personality: 1. brave 2. kind 3. funny 4. clever. Likes: 1. exploring islands 2. drawing maps 3. helping animals.",
          modelFromBook: false,
          checklist: ["I gave my character a name.", "I wrote four things about the appearance.", "I wrote four things about the personality.", "I wrote three things the person likes doing."],
          minWords: 20 },

        { type: "activity", title: "Extra Practice: Appearance or personality?", source: "extra", stage: "guided",
          instructions: "Is it about how the person looks (appearance) or what the person is like (personality)?", instructionsAr: "هل الكلمة عن المظهر أم عن الشخصية؟",
          items: [
            { t: "mcq", q: "curly hair", options: ["Appearance", "Personality"], answer: 0, why: "We can see hair → appearance." },
            { t: "mcq", q: "generous", options: ["Appearance", "Personality"], answer: 1, why: "Generous is how a person behaves → personality." },
            { t: "mcq", q: "a long beard", options: ["Appearance", "Personality"], answer: 0, why: "We can see a beard → appearance." },
            { t: "mcq", q: "hard-working", options: ["Appearance", "Personality"], answer: 1, why: "How a person works → personality." },
            { t: "mcq", q: "slim", options: ["Appearance", "Personality"], answer: 0, why: "Body shape → appearance." }
          ] },

        { type: "activity", title: "Extra Practice: Describe the character", source: "extra", stage: "independent",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "Appearance", words: ["She", "has", "long", "black", "hair."], answer: ["She has long black hair."], why: "has + adjectives + hair." },
            { t: "order", q: "Personality", words: ["He", "is", "brave", "and", "kind."], answer: ["He is brave and kind."], why: "is + personality adjectives." },
            { t: "order", q: "Likes", words: ["He", "likes", "drawing", "maps."], answer: ["He likes drawing maps."], why: "likes + verb-ing." },
            { t: "short", q: "Write one sentence about your character’s personality.", model: "My character is funny and very clever.", open: true, hint: "He/She is …" }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Appearance or personality?",
        buckets: ["Appearance", "Personality"],
        cards: [["tall", 0], ["blue eyes", 0], ["short hair", 0], ["wears glasses", 0], ["kind", 1], ["brave", 1], ["funny", 1], ["shy", 1]] },
      teacher: {
        notes: [
          "Explain: appearance = how a person looks; personality = what a person is like inside.",
          "In groups, students draw a face, give it a name and complete the three boxes (Appearance 4, Personality 4, Likes 3).",
          "Keep the profiles: students use this character in Writing Part 2 (first draft) and Part 3 (final draft)."
        ],
        pair: ["A describes his character; B draws it from the description."],
        group: ["Groups present their character in 30 seconds; the class guesses one thing the character likes."],
        quick: [
          { q: "What is appearance?", a: "How a person looks." },
          { q: "Give two personality words.", a: "e.g. kind, brave" },
          { q: "How many things does the person like doing?", a: "Three." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — LISTENING ─────────────────────────
    {
      id: "u11l4", num: 4, skill: "Listening",
      title: "Creative Thinking",
      pages: [84, 84],
      status: "complete",
      canDo: ["Express agreement/ disagreement", "Give advice"],
      goals: ["Listen to an expert on creative thinking.", "Complete the six secrets and reasons.", "Agree or disagree and add your own tips."],
      goalsAr: ["أستمع إلى خبير في التفكير الإبداعي.", "أكمل الأسرار الستة وأسبابها.", "أوافق أو أعترض وأضيف نصائحي."],
      warmup: {
        title: "Listening",
        image: "crops/u11l4-warmup.jpg",
        emoji: "🧠",
        prompts: ["Who is the most creative person in your family? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "expert", pos: "noun", emoji: "🎓", def: "a person who knows a lot about a subject", ex: "Listen to Lee Johnson, an expert on creative thinking, and complete the following diagram:", exFromBook: true, ar: "خبير" },
        { w: "attitude", pos: "noun", emoji: "😊", def: "the way you think and feel about something", ex: "Have a positive attitude.", exFromBook: true, ar: "موقف / سلوك" }
      ],
      sections: [
        { type: "discuss", title: "1. Think, Pair, Share", page: 84, source: "book",
          prompts: ["Who is the most creative person in your family? Why?"], image: null, emoji: "💬" },

        { type: "listen", title: "2. Listen to Lee Johnson, an expert on creative thinking, and complete the following diagram:", page: 84, source: "book",
          needsAudio: true, track: "11.1",
          instructions: "Listen (track 11.1). Complete the Six Secrets of Creativity and the Reasons.",
          items: [
            { t: "table", q: "Six Secrets of Creativity", open: true,
              head: ["No.", "Six Secrets of Creativity", "Reasons"],
              rows: [
                ["1", "Carry a notebook and a pen.", "To write down ideas"],
                ["2", { open: true }, "Exercise gives energy to the brain"],
                ["3", "Read a lot of books.", { open: true }],
                ["4", "Don’t watch a lot of TV", { open: true }],
                ["5", { open: true }, "It makes you more creative"],
                ["6", "Have a positive attitude.", { open: true }]
              ] }
          ] },

        { type: "speak", title: "3. Speaking", page: 84, source: "book",
          instructions: "In groups: • What do you think of Johnson’s tips? Do you agree with all of the tips? • What tips would you give to make the lessons more fun?",
          dialogue: [
            { who: "A", text: "I agree with the tip “Read a lot of books.”" }, { who: "B", text: "" },
            { who: "C", text: "What tips would you give to make the lessons more fun?" }, { who: "B", text: "" }
          ],
          starters: ["I agree with … because …", "I don’t agree with … because …", "You should …", "To make the lessons more fun, we could …"],
          record: true },

        { type: "activity", title: "Add Your Own Tips", page: 84, source: "book",
          instructions: "Write three tips of your own.", instructionsAr: "اكتب ثلاث نصائح من عندك.",
          items: [
            { t: "table", q: "Add Your Own Tips", open: true, head: ["My tips"], rows: [[{ open: true }], [{ open: true }], [{ open: true }]] }
          ] },

        { type: "listen", title: "Extra Practice: Five Ways to Be Creative (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Teacher", text: "Good morning, class. Today I want to give you five ways to be creative." },
            { who: "Teacher", text: "First, ask a lot of questions. Questions open new doors in your mind. Second, draw your ideas, because pictures help you remember them. Third, work with friends, so you can put your ideas together." },
            { who: "Teacher", text: "Fourth, take a walk outside. Fresh air helps you think clearly. Finally, don't be afraid of mistakes. Every mistake teaches you something new." },
            { who: "Teacher", text: "For homework, try one of these tips this week and tell me about it on Sunday." }
          ],
          items: [
            { t: "mcq", q: "How many ways does the teacher give?", options: ["three", "four", "five", "six"], answer: 2, why: "“Today I want to give you five ways to be creative.”" },
            { t: "mcq", q: "Why should you draw your ideas?", options: ["Pictures help you remember them.", "Drawing is fun.", "The teacher likes drawings.", "It saves paper."], answer: 0, why: "“Draw your ideas, because pictures help you remember them.”" },
            { t: "mcq", q: "Why should you work with friends?", options: ["to finish quickly", "to put your ideas together", "to talk about football", "to be quiet"], answer: 1, why: "“Work with friends, so you can put your ideas together.”" },
            { t: "mcq", q: "What helps you think clearly?", options: ["TV", "sleep", "fresh air", "music"], answer: 2, why: "“Fresh air helps you think clearly.”" },
            { t: "mcq", q: "When should students tell the teacher about the tip?", options: ["on Sunday", "tomorrow", "next month", "on Friday"], answer: 0, why: "“… tell me about it on Sunday.”" },
            { t: "fill", q: "Don’t be afraid of ____. Every mistake teaches you something new.", answer: ["mistakes"], bank: ["mistakes", "questions", "friends"], why: "“Finally, don't be afraid of mistakes.”" }
          ] }
      ],
      game: { kind: "quiz", title: "Advice Quiz",
        items: [
          { t: "mcq", q: "Which sentence gives advice?", options: ["You should read more books.", "I read a book yesterday.", "Books are on the shelf."], answer: 0, why: "should = advice." },
          { t: "mcq", q: "Which sentence shows agreement?", options: ["I don’t think so.", "I agree with you.", "That’s wrong."], answer: 1, why: "I agree = same opinion." },
          { t: "mcq", q: "Which sentence shows disagreement?", options: ["You’re right.", "Exactly!", "I’m not sure I agree."], answer: 2, why: "Not agree = disagreement." },
          { t: "mcq", q: "An expert is a person who …", options: ["knows a lot about a subject", "never studies", "sells books"], answer: 0, why: "expert = knows a lot." },
          { t: "mcq", q: "A positive attitude means you …", options: ["think in a good, hopeful way", "are always tired", "don’t like people"], answer: 0, why: "positive attitude = good, hopeful way of thinking." }
        ] },
      teacher: {
        notes: [
          "Warm-up: Who is the most creative person in your family? Students give one reason.",
          "Read the diagram first: which parts are given, which are missing? Predict (orally) before listening.",
          "Play track 11.1 (book recording) twice. There is no answer key here: check orally with what students heard.",
          "Speaking: practise agreeing and disagreeing politely (I agree because … / I don’t agree because …).",
          "If the audio is not available, use the Extra Practice script (computer voice)."
        ],
        pair: ["A reads one of Johnson’s tips, B agrees or disagrees with a reason."],
        group: ["Groups write three tips to make lessons more fun and vote on the best one."],
        quick: [
          { q: "Why should you carry a notebook and a pen?", a: "To write down ideas." },
          { q: "How do you agree politely?", a: "I agree with you because …" },
          { q: "Give one tip to be creative.", a: "e.g. Read a lot of books." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — GRAMMAR ─────────────────────────
    {
      id: "u11l5", num: 5, skill: "Grammar",
      title: "Double comparatives",
      pages: [85, 85],
      status: "complete",
      canDo: ["Express double comparatives", "Use If conditional (1st)"],
      goals: ["Use The + comparative, the + comparative.", "Change If sentences into double comparatives.", "Write your own double comparatives."],
      goalsAr: ["أستخدم The + صفة مقارنة، the + صفة مقارنة.", "أحوّل جمل If إلى مقارنة مزدوجة.", "أكتب جمل مقارنة مزدوجة من عندي."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "☕",
        prompts: ["Read the mug: “The less you talk, the more people think about your words.”", "What does it mean? Do you agree?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Double comparatives", page: 85,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "(The + comparative adjective, the + comparative adjective)",
              textAr: "The + صفة مقارنة، the + صفة مقارنة.",
              examples: ["{t:The more} books I read, {t:the more} I learn.", "{t:The older} we grow, {t:the wiser} we become."] },
            { title: "Step 2 — What does it mean? (Extra)", source: "extra",
              text: "When one thing changes, the other thing changes too. The more books I read → I learn more and more.",
              textAr: "عندما يتغيّر شيء يتغيّر الشيء الآخر معه.",
              examples: ["📚⬆️ → 🧠⬆️ {t:The more} books I read, {t:the more} I learn."] },
            { title: "Step 3 — Making comparatives (Extra)", source: "extra",
              text: "Short adjectives: + -er (old → older, wise → wiser, early → earlier). Long adjectives: more + adjective (more creative). Irregular: good → better, bad → worse. more / less can also go with nouns and verbs.",
              textAr: "الصفات القصيرة نضيف لها er، والطويلة نضع قبلها more. وهناك صفات شاذة مثل good → better.",
              examples: ["old → {t:older}", "good → {t:better}", "creative → {t:more creative}"] },
            { title: "Step 4 — If sentence → double comparative (Extra)", source: "extra",
              text: "First conditional: If + present simple, will + base verb. We can say the same idea with a double comparative.",
              textAr: "الجملة الشرطية الأولى: If + مضارع بسيط، will + فعل أساسي. ويمكن قول المعنى نفسه بالمقارنة المزدوجة.",
              examples: ["{c:If} {s:we} {v:exercise} more, {s:we} {a:will} {v:become} healthier.", "→ {t:The more} we exercise, {t:the healthier} we become."] },
            { title: "Step 5 — Be careful! (Extra)", source: "extra",
              text: "Use the twice and put a comma between the two parts. Use the comparative, not the superlative.",
              textAr: "نستخدم the مرتين ونضع فاصلة بين الجزأين، ونستخدم صيغة المقارنة لا التفضيل.",
              examples: ["✗ {n:More} I read, {n:more} I learn. → ✓ {t:The more} I read, {t:the more} I learn.", "✗ The older we grow, the {n:wisest} we become. → ✓ {t:the wiser}"] }
          ],
          worked: {
            q: "Rewrite with a double comparative: If we exercise more, we will become healthier.",
            steps: ["Find the two changes: exercise more → become healthier.", "Start each part with The + comparative: The more … , the healthier …", "Put the subject and verb after each comparative: we exercise / we become."],
            a: "The more we exercise, the healthier we become."
          },
          notes: ["Pattern: The + comparative + subject + verb, the + comparative + subject + verb.", "First conditional: If + present simple, will + base verb (If we exercise more, we will become healthier)."] },

        { type: "activity", title: "a. Complete the following sentences:", page: 85, source: "book", stage: "guided",
          instructions: "Write the missing part. Use The + comparative.", instructionsAr: "أكمل الجزء الناقص باستخدام The + صفة مقارنة.",
          items: [
            { t: "short", q: "1. ……………, the better your marks will be.", model: "The harder you study, the better your marks will be. / The more you study, the better your marks will be.",
              keywords: [["the "], ["harder", "more", "longer"]], hint: "The + comparative + you + verb, …" },
            { t: "short", q: "2. The more time I spend with my family, ……………", model: "The more time I spend with my family, the happier I feel.",
              keywords: [["the "], ["er", "more", "better"]], hint: "…, the + comparative + I + verb." },
            { t: "short", q: "3. ……………, the sooner you arrive.", model: "The earlier you leave, the sooner you arrive. / The faster you drive, the sooner you arrive.",
              keywords: [["the "], ["earlier", "faster", "quicker", "more", "er"]], hint: "The + comparative + you + verb, …" }
          ] },

        { type: "activity", title: "b. Rewrite the sentences using ‘double comparatives’:", page: 85, source: "book", stage: "guided",
          instructions: "Change the If sentence into a double comparative.", instructionsAr: "حوّل جملة If إلى مقارنة مزدوجة.",
          items: [
            { t: "short", q: "1. If we exercise more, we will become healthier.", model: "The more we exercise, the healthier we become. (also: … the healthier we will become.)",
              keywords: [["the more"], ["the healthier"]], hint: "The more we …, the healthier we …" },
            { t: "short", q: "2. If the sun is brighter, I will be happier.", model: "The brighter the sun is, the happier I will be. (also: … the happier I am.)",
              keywords: [["the brighter"], ["the happier"]], hint: "The brighter the sun …, the happier I …" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the right form", source: "extra", stage: "guided",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "mcq", q: "The more you practise, the ____ you become.", options: ["good", "better", "best"], answer: 1, why: "good → better (comparative)." },
            { t: "mcq", q: "The ____ we leave, the sooner we arrive.", options: ["early", "earlier", "earliest"], answer: 1, why: "early → earlier (y → ier)." },
            { t: "mcq", q: "____ more you read, the more you learn.", options: ["The", "A", "More"], answer: 0, why: "Each part starts with The." },
            { t: "mcq", q: "The hotter the weather is, the ____ water we drink.", options: ["much", "more", "most"], answer: 1, why: "more (comparative of much)." },
            { t: "mcq", q: "If you study harder, you ____ get better marks.", options: ["will", "would", "are"], answer: 0, why: "First conditional: If + present, will + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "Make a sentence.", words: ["The", "older", "we", "grow,", "the", "wiser", "we", "become."], answer: ["The older we grow, the wiser we become."], why: "The + comparative + subject + verb, the + comparative + subject + verb." },
            { t: "order", q: "Make a sentence.", words: ["The", "more", "you", "practise,", "the", "better", "you", "play."], answer: ["The more you practise, the better you play."], why: "Double comparative." },
            { t: "order", q: "Make a sentence.", words: ["If", "you", "leave", "early,", "you", "will", "arrive", "on", "time."], answer: ["If you leave early, you will arrive on time."], why: "If + present simple, will + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix it (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "توجد كلمة خطأ. اكتب التصحيح.",
          items: [
            { t: "fix", q: "The more you sleep, the {good} you feel.", answer: ["better"], hint: "Comparative of good.", why: "good → better." },
            { t: "fix", q: "The bigger the city, the {busiest} the roads.", answer: ["busier"], hint: "Comparative, not superlative.", why: "busy → busier." },
            { t: "fix", q: "The {fast} you drive, the more careful you must be.", answer: ["faster"], hint: "Comparative of fast.", why: "fast → faster." },
            { t: "short", q: "Write your own double comparative about school.", model: "The more I listen in class, the more I understand.", open: true, hint: "The more …, the …" }
          ] }
      ],
      game: { kind: "scramble", title: "Double Comparative Builder",
        sentences: [
          "The more books I read, the more I learn.",
          "The older we grow, the wiser we become.",
          "The harder you study, the better your marks will be.",
          "The earlier you leave, the sooner you arrive.",
          "The more we exercise, the healthier we become."
        ] },
      teacher: {
        notes: [
          "Warm-up: read the mug sentence (The less you talk, the more people think about your words). Discuss the meaning.",
          "Teach the book box; mark the two parts with arrows ⬆️ ⬆️.",
          "Review comparatives (-er, more, better) and the first conditional (If + present, will + verb).",
          "Exercise a: accept any correct comparative (The harder you study / The more you study …).",
          "Exercise b: show the If → The more … change step by step."
        ],
        pair: ["A starts “The more I …”, B finishes “the … I …”. Swap."],
        group: ["Groups write 3 double-comparative proverbs for a class poster."],
        quick: [
          { q: "Complete: The older we grow, ___", a: "the wiser we become." },
          { q: "How many times do we use ‘the’?", a: "Two times (one in each part)." },
          { q: "Rewrite: If we exercise more, we will become healthier.", a: "The more we exercise, the healthier we become." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — WRITING ─────────────────────────
    {
      id: "u11l6", num: 6, skill: "Writing",
      title: "Writing Part 2: The First Draft",
      pages: [85, 85],
      status: "complete",
      canDo: ["Describe imaginary characters", "Express possibilities"],
      goals: ["Choose an idea for a short story.", "Plan events, actions, thoughts and feelings.", "Write the first draft of your story."],
      goalsAr: ["أختار فكرة لقصة قصيرة.", "أخطّط للأحداث والأفعال والأفكار والمشاعر.", "أكتب المسودة الأولى لقصتي."],
      warmup: {
        title: "Writing — Part 2",
        image: null,
        emoji: "🏝️",
        prompts: ["Remember the character you made in Part 1.", "What could happen to him/her on an island?"],
        seconds: 60
      },
      vocab: [
        { w: "previously", pos: "adverb", emoji: "⏪", def: "before now; earlier", ex: "In groups, work on ideas for the first draft of a short story about the character you decided on previously.", exFromBook: true, ar: "سابقًا" },
        { w: "assume", pos: "verb", emoji: "🤔", def: "to think something is true without being sure", ex: "He/She has been left alone on an island or so they assumed until he/she wakes up to find a message written in the sand.", exFromBook: true, ar: "يفترض" }
      ],
      sections: [
        { type: "write", title: "5. In groups, work on ideas for the first draft of a short story about the character you decided on previously.", page: 85, source: "book",
          instructions: "• Choose one of the following ideas for your story or create your own. ✓ It was the best/ worst day of his/her life. ✓ He/She has been left alone on an island or so they assumed until he/she wakes up to find a message written in the sand. • Add events and include details to describe actions, thoughts, and feelings. • Now, use your notes to write your own story. Remember to: focus on getting your ideas down in the first draft rather than perfecting your word choice.",
          wordBank: ["One day,", "Suddenly,", "At first,", "Then,", "After that,", "Finally,", "felt", "thought", "was surprised", "was scared"],
          frame: [
            { label: "Where was he/she? (time/ place)", hint: "One morning, Captain Nasser was on a small island …" },
            { label: "Was he/she alone?", hint: "At first, he thought he was alone …" },
            { label: "What happened to him/her?", hint: "Suddenly, he found a message in the sand …" },
            { label: "How did he/she feel?", hint: "He felt surprised / scared / happy …" }
          ],
          model: "One morning, Captain Nasser woke up on a small island. His boat was broken and he was alone, or so he assumed. He felt scared and hungry. He walked along the beach and looked for food. Suddenly, he saw a message written in the sand: “Follow the palm trees.” He was very surprised! He followed the trees and found a small house. An old fisherman lived there. He gave Nasser some fish and water. It was the strangest day of his life, but in the end it was a happy day.",
          modelFromBook: false,
          checklist: ["My story has a time and a place.", "I described actions, thoughts and feelings.", "I used my character from Part 1.", "I got my ideas down (I will improve the words in Part 3)."],
          minWords: 60 },

        { type: "discuss", title: "Tip: Search the internet", page: 85, source: "book",
          prompts: ["Search the internet or other sources for more pieces of advice on how to be creative. Prepare a poster or a presentation and add pictures and quotes about creativity."],
          image: null, emoji: "🔎" },

        { type: "activity", title: "Extra Practice: Story words", source: "extra", stage: "guided",
          instructions: "Choose the best word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "(Suddenly / Because), he heard a strange noise.", options: ["Suddenly", "Because"], answer: 0, why: "Suddenly = quickly and without warning; good for story events." },
            { t: "choose", q: "She was alone on the island, or so she (assumed / assumes).", options: ["assumed", "assumes"], answer: 0, why: "The story is in the past → assumed." },
            { t: "choose", q: "He felt (scared / scary) in the dark.", options: ["scared", "scary"], answer: 0, why: "We use -ed adjectives for feelings: scared." },
            { t: "choose", q: "It was the (worst / worse) day of his life.", options: ["worst", "worse"], answer: 0, why: "the + superlative: the worst." }
          ] },

        { type: "activity", title: "Extra Practice: Actions, thoughts or feelings?", source: "extra", stage: "independent",
          instructions: "What does each sentence describe?", instructionsAr: "ماذا تصف كل جملة؟",
          items: [
            { t: "mcq", q: "He ran to the beach.", options: ["an action", "a thought", "a feeling"], answer: 0, why: "ran = something he did." },
            { t: "mcq", q: "She thought, “Maybe somebody lives here.”", options: ["an action", "a thought", "a feeling"], answer: 1, why: "thought = what is in her mind." },
            { t: "mcq", q: "He felt very lonely.", options: ["an action", "a thought", "a feeling"], answer: 2, why: "felt lonely = a feeling." },
            { t: "short", q: "Write one sentence about how your character felt.", model: "She felt surprised and a little scared.", open: true, hint: "He/She felt …" }
          ] }
      ],
      game: { kind: "scramble", title: "Story Builder",
        sentences: [
          "One morning, he woke up on a small island.",
          "At first, he thought he was alone.",
          "Suddenly, he saw a message in the sand.",
          "He felt surprised and scared.",
          "It was the best day of his life."
        ] },
      teacher: {
        notes: [
          "Groups take out the character profile from Part 1.",
          "Read the two story ideas; groups choose one or create their own.",
          "Answer the four questions as notes (time/place, alone?, what happened, feelings), then write.",
          "Stress the Remember box: in the first draft, focus on ideas, not perfect words.",
          "Keep the drafts for Part 3 (final draft)."
        ],
        pair: ["Pairs tell each other the story orally before writing."],
        group: ["Story chain: each member writes one event, then the group joins them."],
        quick: [
          { q: "What should you focus on in a first draft?", a: "Getting your ideas down, not perfect word choice." },
          { q: "Name three things a story describes.", a: "Actions, thoughts and feelings." },
          { q: "What does ‘assume’ mean?", a: "To think something is true without being sure." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — READING ─────────────────────────
    {
      id: "u11l7", num: 7, skill: "Reading",
      title: "Strange or Creative",
      pages: [86, 87],
      status: "complete",
      canDo: ["Vote", "Justify opinions", "Express agreement/ disagreement"],
      goals: ["Read about three creative people.", "Learn 4 new words.", "Write the final draft of your story.", "Vote on the most creative story."],
      goalsAr: ["أقرأ عن ثلاثة أشخاص مبدعين.", "أتعلّم 4 كلمات جديدة.", "أكتب المسودة النهائية لقصتي.", "أصوّت على أكثر قصة إبداعًا."],
      warmup: {
        title: "Look at the pictures",
        image: "crops/u11l7-warmup.jpg",
        emoji: "🕰️",
        prompts: ["Look at the pictures; Do you know any of these people? What did they do?"],
        seconds: 90
      },
      vocab: [
        { w: "unusual", pos: "adjective", emoji: "🦄", def: "different from what is normal", ex: "Even the most creative people in the world can have strange or even unusual habits.", exFromBook: true, ar: "غير عادي" },
        { w: "generally", pos: "adverb", emoji: "📊", def: "usually; in most cases", ex: "She generally started with the details before moving on.", exFromBook: true, ar: "عمومًا / عادةً" },
        { w: "detail", pos: "noun", emoji: "🔍", def: "a small fact or part of something", ex: "She generally started with the details before moving on.", exFromBook: true, ar: "تفصيل" },
        { w: "vote", pos: "verb", emoji: "🗳️", def: "to choose formally, for example by raising your hand", ex: "Work in groups to vote on the most creative story.", exFromBook: true, ar: "يصوّت" }
      ],
      sections: [
        { type: "reading", title: "Strange or Creative (Expository Text)", page: 86,
          instructions: "Read the text and answer the questions.",
          blocks: [
            { head: "Introduction", paras: ["It is very important to know that being creative doesn’t equal being perfect. Even the most creative people in the world can have strange or even unusual habits. You’ll read below about three creative people that were unusual in their own way."] },
            { head: "Paragraph 1", paras: ["This English crime novelist, short story writer and playwright didn’t write at a desk. She never even had an office! Agatha Christie wrote over sixty books in hotel rooms, on kitchen tables or in her bedroom. Sometimes she started writing before she even had a plot. She generally started with the [[details]] before moving on."] },
            { head: "Paragraph 2", paras: ["Charles Dickens, the author of many novels including, “David Copperfield” and “A Tale of Two Cities”, had some truly strange habits. He only slept and wrote facing north and believed that this practice improved his creativity. He was also obsessed with the need for tidiness. He always required that his furniture, pens and ink be specially arranged to help him think."] },
            { head: "Paragraph 3", paras: ["This is Nikola Tesla, one of history’s greatest inventors. Remember his face every time you are showered with the blessings of electricity. But this genius was also called “[[mad]]” because of the strange things he did. He rarely slept for more than two hours straight. This harmed his physical and psychological health. Once he stayed awake for eighty-four hours! He also loved pigeons so much that he would go out and look for injured ones to take to his home and nurse them back to health."] }
          ] },

        { type: "activity", title: "2. Read the text and answer the following questions:", page: 87, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What was strange about each of the three characters?",
              model: "Agatha Christie didn’t write at a desk and never had an office; she sometimes started writing before she had a plot. Charles Dickens only slept and wrote facing north and was obsessed with tidiness. Nikola Tesla rarely slept for more than two hours, once stayed awake for eighty-four hours, and looked for injured pigeons to nurse them.",
              keywords: [["desk", "office"], ["north", "tidiness"], ["slept", "sleep", "pigeon", "awake"]], hint: "One strange habit from each paragraph." },
            { t: "short", q: "2. What is the purpose of the writer?",
              model: "To show that being creative doesn’t equal being perfect: even the most creative people can have strange or unusual habits.",
              keywords: [["perfect", "strange", "unusual", "habit"]], hint: "Read the introduction." },
            { t: "short", q: "3. Give another title for the text.",
              model: "Possible titles: “Creative People with Unusual Habits” / “Geniuses Are Not Perfect”.",
              open: true, hint: "What is the whole text about?" }
          ] },

        { type: "activity", title: "3. Read again and choose the correct answer from a, b, c and d:", page: 87, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. The opposite of the underlined word “details” in the first paragraph is …", options: ["facts", "whole", "items", "pieces"], answer: 1,
              hint: "details = small parts. Opposite?", why: "Details are small parts; the opposite is the whole." },
            { t: "mcq", q: "2. Charles Dickens was interested in …", options: ["Science", "Psychology", "History", "Literature"], answer: 3,
              hint: "What did he write?", why: "He was “the author of many novels” → Literature." },
            { t: "mcq", q: "3. The underlined word ‘mad’ in the third paragraphs means …", options: ["angry", "upset", "crazy", "strict"], answer: 2,
              hint: "He was called mad “because of the strange things he did”.", why: "Here mad = crazy (strange behaviour), not angry." }
          ] },

        { type: "write", title: "Writing Part 3: 4. a. In groups, write the final draft for your short story. Edit your story by answering the following questions:", page: 87, source: "book",
          instructions: "Use your first draft from Part 2. Edit it, then write the final draft.",
          wordBank: ["One day,", "Suddenly,", "At first,", "Then,", "After that,", "Finally,", "In the end,"],
          frame: [
            { label: "Beginning", hint: "Who? Where? When? (the setting)" },
            { label: "Middle", hint: "What happened? Actions, thoughts and feelings." },
            { label: "End", hint: "How did the story finish? How did the character feel?" }
          ],
          model: "One morning, Captain Nasser woke up on a small, quiet island. His boat was broken, and he was alone, or so he assumed. At first, he felt scared and hungry. He walked slowly along the beach and looked for food and water. Suddenly, he saw a message written in the sand: “Follow the palm trees.” He was very surprised and thought, “Somebody lives here!” He followed the tall trees and found a small wooden house. A kind old fisherman lived there. He gave Nasser fresh fish and cold water, and the next day they fixed the boat together. In the end, it was the strangest but the happiest day of his life.",
          modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used sequence words.", "I improved my first draft."],
          bookChecklist: ["Does your story have a beginning, a middle and an end?", "Is the setting described clearly?", "Are all the events and details clear? Can you offer more details to explain your characters or events?", "Are there boring parts in your story that need to be deleted?", "Did you check for grammar, spelling and punctuation?"],
          minWords: 80 },

        { type: "speak", title: "b. Read your story to the class.", page: 87, source: "book",
          instructions: "Read your story to the class. Read slowly and clearly.",
          dialogue: [],
          starters: ["Our story is about …", "One morning, …", "Suddenly, …", "In the end, …"],
          record: true },

        { type: "speak", title: "Speaking: 5. Work in groups to vote on the most creative story.", page: 87, source: "book",
          instructions: "Work in groups to vote on the most creative story. Make notes about why you think it is the best one, then explain your opinion to your group.",
          dialogue: [
            { who: "A", text: "Which story do you think is the most creative?" }, { who: "B", text: "" },
            { who: "C", text: "Why do you think it is the best one?" }, { who: "B", text: "" }
          ],
          starters: ["I vote for … because …", "In my opinion, … is the most creative story because …", "I agree with you. / I don’t agree, because …", "The best part was …"],
          record: true },

        { type: "activity", title: "Extra Practice: Who is it?", source: "extra", stage: "guided",
          instructions: "Choose the person.", instructionsAr: "اختر الشخص.",
          items: [
            { t: "mcq", q: "Who wrote over sixty books in hotel rooms and on kitchen tables?", options: ["Agatha Christie", "Charles Dickens", "Nikola Tesla"], answer: 0, why: "Paragraph 1." },
            { t: "mcq", q: "Who slept and wrote facing north?", options: ["Agatha Christie", "Charles Dickens", "Nikola Tesla"], answer: 1, why: "Paragraph 2." },
            { t: "mcq", q: "Who once stayed awake for eighty-four hours?", options: ["Agatha Christie", "Charles Dickens", "Nikola Tesla"], answer: 2, why: "Paragraph 3." },
            { t: "mcq", q: "Who loved pigeons and nursed injured ones?", options: ["Agatha Christie", "Charles Dickens", "Nikola Tesla"], answer: 2, why: "Paragraph 3." },
            { t: "mcq", q: "Who was obsessed with tidiness?", options: ["Agatha Christie", "Charles Dickens", "Nikola Tesla"], answer: 1, why: "Paragraph 2." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the three pictures. Who are they? What did they do? (writer, writer, inventor).",
          "Read the introduction: being creative doesn’t equal being perfect.",
          "Read each paragraph and list the strange habits on the board.",
          "Exercises 2 and 3, then Writing Part 3: groups edit their Part 2 drafts with the book questions and write the final draft.",
          "Groups read their stories; then the class votes on the most creative story and justifies the vote."
        ],
        pair: ["A says a strange habit, B says the person.", "Pairs edit each other’s story with the five book questions."],
        group: ["Class vote: every student votes for one story (not their own) and gives one reason."],
        quick: [
          { q: "Where did Agatha Christie write?", a: "In hotel rooms, on kitchen tables or in her bedroom." },
          { q: "What is the opposite of “details”?", a: "whole" },
          { q: "What does “mad” mean in paragraph 3?", a: "crazy" },
          { q: "How do you justify your vote?", a: "I vote for … because …" }
        ]
      }
    }
  ]
});

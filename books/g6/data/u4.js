BOOK.addUnit({
  id: "u4", num: 4, title: "What Stories Teach Us", titleAr: "ماذا تُعلّمنا القصص",
  pages: [59, 71], cover: 59,
  outcomes: {
    listening: [
      "Identify main ideas and supporting details in spoken narratives about stories and their lessons.",
      "Analyse speakers’ feelings and attitudes toward storytelling, using verbal cues.",
      "Infer values or morals implied in an audio discussion of real-life acts of bravery."
    ],
    speaking: [
      "Describe narrative events and characters using clear sequencing language and vivid details.",
      "Present a moral action or favourite story fluently, linking ideas with cohesive devices and expressive intonation.",
      "Engage the audience through appropriate eye contact, voice modulation, and accurate pronunciation.",
      "Facilitate a peer discussion on a real act of bravery, focusing on the values demonstrated."
    ],
    reading: [
      "Identify explicit information and implicit messages in narrative or informational texts about storytelling.",
      "Analyse story structure: characters, setting, problem, solution, moral / lesson using textual evidence.",
      "Infer basic information about characters, events, and ideas in short texts.",
      "Compare themes or lessons across two different stories."
    ],
    writing: [
      "Plan a descriptive paragraph about a favourite story and its lesson, organising main ideas in a graphic organiser.",
      "Apply target grammar (relative pronouns and past-continuous with when / while clauses) accurately within narrative sentences.",
      "Compose a cohesive paragraph that retells key events and explains the lesson learned, integrating linkers, precise vocabulary, and the target grammar structures."
    ]
  },
  lessons: [
    /* ───────────────────────── LESSON 1 ───────────────────────── */
    {
      id: "u4l1", num: 1, skill: "Reading", title: "Stories that Connect Us", pages: [62, 63], status: "complete",
      canDo: [
        "I can locate key details from a written text about how stories connect people and cultures.",
        "I can organise information from a written text about storytelling neatly."
      ],
      goals: ["Read about why stories are important.", "Learn 13 new words.", "Find the main idea and details.", "Talk about a story you enjoyed."],
      goalsAr: ["أقرأ عن أهمية القصص.", "أتعلم ١٣ كلمة جديدة.", "أجد الفكرة الرئيسية والتفاصيل.", "أتحدث عن قصة استمتعت بها."],
      warmup: {
        title: "Before You Read", image: "crops/u4l1-warmup.jpg", emoji: "🔥", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["What is happening in each picture?", "What do all these pictures have in common?"]
      },
      vocab: [
        { w: "generation", pos: "noun", emoji: "👴", def: "all the people who were born at about the same time", ex: "Stories have been a part of human life for generations.", exFromBook: true, ar: "جيل", ipa: "/ˌdʒen.əˈreɪ.ʃən/" },
        { w: "attentively", pos: "adverb", emoji: "👂", def: "in a careful, focused way", ex: "They listened attentively to tales.", exFromBook: true, ar: "باهتمام وانتباه", ipa: "/əˈtentɪvli/" },
        { w: "tale", pos: "noun", emoji: "📖", def: "a story, often imaginary", ex: "It is a simple tale told by a grandparent.", exFromBook: false, ar: "حكاية", ipa: "/teɪl/" },
        { w: "explain", pos: "verb", emoji: "💡", def: "to make something clear or easy to understand", ex: "Tales explained the stars, the seasons, and the world around them.", exFromBook: false, ar: "يشرح / يُفسّر", ipa: "/ɪkˈspleɪn/" },
        { w: "storyteller", pos: "noun", emoji: "🗣️", def: "a person who tells or writes stories", ex: "The storyteller was admired by everyone.", exFromBook: true, ar: "راوي القصص (الحكواتي)", ipa: "/ˈstɔːritelə/" },
        { w: "expression", pos: "noun", emoji: "😮", def: "a look on your face or in your voice that shows a feeling", ex: "The storyteller often spoke with strong expression.", exFromBook: false, ar: "تعبير", ipa: "/ɪkˈspreʃən/" },
        { w: "admire", pos: "verb", emoji: "👏", def: "to look at someone with pleasure or respect", ex: "The storyteller was admired by everyone.", exFromBook: true, ar: "يُعجَب بـ / يحترم", ipa: "/ədˈmaɪə/" },
        { w: "fair", pos: "adjective", emoji: "⚖️", def: "treating everyone equally", ex: "A good story stays with us, especially when it teaches us to be fair or heroic.", exFromBook: true, ar: "عادل / مُنصِف", ipa: "/feə/" },
        { w: "heroic", pos: "adjective", emoji: "🦸", def: "very brave", ex: "A good story stays with us, especially when it teaches us to be fair or heroic.", exFromBook: true, ar: "بطولي / شجاع جدًا", ipa: "/hɪˈrəʊɪk/" },
        { w: "character", pos: "noun", emoji: "🎭", def: "a person in a story, film, etc.", ex: "We remember a character who helped a stranger.", exFromBook: true, ar: "شخصية (في قصة)", ipa: "/ˈkærəktə/" },
        { w: "stranger", pos: "noun", emoji: "🚶", def: "a person you do not know", ex: "We remember a character who helped a stranger.", exFromBook: true, ar: "شخص غريب", ipa: "/ˈstreɪndʒə/" },
        { w: "situation", pos: "noun", emoji: "🧩", def: "what is happening at a time and place", ex: "Some stories show how characters deal with difficult situations.", exFromBook: true, ar: "موقف", ipa: "/ˌsɪtʃuˈeɪʃən/" },
        { w: "connect", pos: "verb", emoji: "🔗", def: "to join or link things or people together", ex: "Stories connect us.", exFromBook: true, ar: "يربط / يُوصِل", ipa: "/kəˈnekt/" }
      ],
      sections: [
        { type: "reading", title: "Stories that Connect Us", page: 62,
          instructions: "Read the passage and identify the main idea.",
          paras: [
            "Stories have been a part of human life for generations. In the past, people gathered near fires, where they listened attentively to tales that explained the stars, the seasons, and the world around them. The storyteller, who often spoke with strong expression, was admired by everyone.",
            "Today, we still enjoy stories but in different ways. We read books, watch films, and follow shows that keep us curious.",
            "A good story stays with us, especially when it teaches us to be fair or heroic. Sometimes, we remember a character who helped a stranger or a moment that gave us hope.",
            "Stories also help us learn about people in other places. They often describe traditions, the ways families live, work and celebrate. Some stories show how characters deal with difficult situations. Others are not real, but they can still teach us important lessons. These experiences help us learn and become better.",
            "Whether it is a simple tale told by a grandparent or a series that we watch online, stories connect us. They help us think, feel, and understand. Stories are not just for fun; they help us learn more about ourselves and each other."
          ] },
        { type: "activity", title: "Read the passage and identify the main idea.", page: 62, source: "book", stage: "guided",
          instructions: "Choose the main idea of the passage.",
          items: [
            { t: "mcq", q: "What is the main idea of the passage?", options: ["A) Stories are just for fun.", "B) Stories help us connect and understand.", "C) People enjoy reading stories.", "D) Storytellers only lived in the past."], answer: 1,
              hint: "Read the last paragraph again.", why: "The last paragraph says “stories connect us. They help us think, feel, and understand.” A is wrong: the text says stories are “not just for fun”." }
          ] },
        { type: "activity", title: "Read the passage again and answer the following questions.", page: 63, source: "book", stage: "independent",
          instructions: "Write (T) True, (F) False, or (NG) Not Given for each sentence.",
          items: [
            { t: "mcq", q: "1. Stories in the past were only told by older people.", options: ["T", "F", "NG"], answer: 2,
              hint: "Does the text say who told stories in the past?", why: "Paragraph 1 talks about “the storyteller”, but it never says the storytellers were only older people. So the text does not give this information (NG)." },
            { t: "mcq", q: "2. The storyteller was admired by everyone.", options: ["T", "F", "NG"], answer: 0,
              hint: "Look at the end of paragraph 1.", why: "Paragraph 1: “The storyteller … was admired by everyone.”" },
            { t: "mcq", q: "3. Today, people prefer watching stories rather than reading.", options: ["T", "F", "NG"], answer: 2,
              hint: "Paragraph 2. Does it say which one people like more?", why: "Paragraph 2 says “We read books, watch films, and follow shows”, but it does not say people prefer watching. So it is Not Given." },
            { t: "mcq", q: "4. Some stories include lessons about being fair.", options: ["T", "F", "NG"], answer: 0,
              hint: "Look at paragraph 3.", why: "Paragraph 3: a good story “teaches us to be fair or heroic”." },
            { t: "mcq", q: "5. All stories are based on real events.", options: ["T", "F", "NG"], answer: 1,
              hint: "Look at paragraph 4: “Others are not …”", why: "Paragraph 4: “Others are not real, but they can still teach us important lessons.” So not all stories are real." }
          ] },
        { type: "activity", title: "Read the passage carefully. Then, do the following.", page: 63, source: "book", stage: "independent",
          instructions: "In the book you star, circle and underline. Here, write or choose your answer.",
          items: [
            { t: "short", q: "1. Paragraph 1: Star (*) a word that shows how people enjoyed listening to stories.", model: "attentively (“they listened attentively to tales”)",
              keywords: [["attentive"]], hint: "Find the word after “listened”." },
            { t: "short", q: "2. Paragraph 3 & 4: Circle one sentence that shows how stories can teach us a lesson.", model: "“A good story stays with us, especially when it teaches us to be fair or heroic.” (Also correct: “Others are not real, but they can still teach us important lessons.”)",
              keywords: [["teach"]], hint: "Look for the word “teach” or “teaches”." },
            { t: "mcq", q: "3. Paragraph 5: Underline one sentence that shows how stories connect us to each other.", options: ["Whether it is a simple tale told by a grandparent or a series that we watch online, stories connect us.", "They help us think, feel, and understand.", "Stories are not just for fun; they help us learn more about ourselves and each other."], answer: [0, 2],
              hint: "Look for “connect us” or “each other”.", why: "Sentence 1 says “stories connect us” and sentence 3 says stories help us learn about “each other”. Sentence 2 is about thinking and feeling, not about connecting people." }
          ] },
        { type: "activity", title: "Complete the paragraph below using words from the box.", page: 63, source: "book", stage: "independent",
          instructions: "Complete the paragraph using words from the box: connected – admired – fair – stranger. (“admired” is done for you.)",
          items: [
            { t: "fill", q: "Storytelling has existed for generations. In the past, people listened to stories around fires, and the storyteller was ____ by everyone.", answer: ["admired"], bank: ["connected", "admired", "fair", "stranger"],
              hint: "This one is the example in the book.", why: "The text says the storyteller “was admired by everyone”." },
            { t: "fill", q: "Today, stories appear in many forms, such as shows and stories we watch online. These stories often include lessons that teach us to be ____ …", answer: ["fair"], bank: ["connected", "fair", "stranger"],
              hint: "teach us to be + adjective", why: "Paragraph 3: stories teach us “to be fair or heroic”." },
            { t: "fill", q: "… and help us stay ____ to our traditions.", answer: ["connected"], bank: ["connected", "fair", "stranger"],
              hint: "Which word goes with “stay … to”?", why: "Stories connect us, so they help us stay connected to our traditions. “stranger” is a noun and does not fit." }
          ] },
        { type: "activity", title: "Think, Pair, Share", page: 63, source: "book", stage: "independent",
          instructions: "Talk about a story that you enjoyed or that taught you something important. Then, fill in the table.",
          items: [
            { t: "table", q: "Fill in the table about your story.", head: ["", "Your answer"],
              rows: [["The story was called", { open: true, model: "The Honest Woodcutter" }], ["I felt", { open: true, model: "happy and surprised" }], ["It was about", { open: true, model: "a poor man who told the truth about his axe" }], ["I learned", { open: true, model: "to always be honest" }]],
              open: true, note: "Your own answers. The examples are only ideas." }
          ] },
        { type: "activity", title: "Extra Practice: Pronunciation – count the syllables", source: "extra", stage: "guided",
          instructions: "Book tip: Break long words into syllables, to pronounce them easily. E.g., (gen-er-a-tion, sit-u-a-tion, ex-pe-ri-ence). How many syllables?",
          items: [
            { t: "mcq", q: "gen-er-a-tion", options: ["2", "3", "4"], answer: 2, why: "gen / er / a / tion = 4" },
            { t: "mcq", q: "char-ac-ter", options: ["2", "3", "4"], answer: 1, why: "char / ac / ter = 3" },
            { t: "mcq", q: "story-teller (sto-ry-tel-ler)", options: ["3", "4", "5"], answer: 1, why: "sto / ry / tel / ler = 4" },
            { t: "mcq", q: "ex-pres-sion", options: ["2", "3", "4"], answer: 1, why: "ex / pres / sion = 3" },
            { t: "mcq", q: "at-ten-tive-ly", options: ["3", "4", "5"], answer: 1, why: "at / ten / tive / ly = 4" }
          ] },
        { type: "activity", title: "Extra Practice: Word meanings", source: "extra", stage: "independent",
          instructions: "Match each word to its meaning.",
          items: [
            { t: "match", q: "Match the word to the meaning.", pairs: [["tale", "a story"], ["stranger", "a person you do not know"], ["heroic", "very brave"], ["fair", "treating everyone equally"], ["storyteller", "a person who tells stories"], ["connect", "to join or link together"]],
              hint: "Use the word cards above.", why: "These meanings come from the book’s glossary." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Warm-up (2 min): campfire, TV, book, podcast. Ask: What do all these pictures have in common? (They all tell stories.)", "Pre-teach 5 words with the flip cards: tale, storyteller, admire, stranger, connect. Clap the syllables (Pronunciation Tip).", "First reading: choose the main idea. Second reading: T / F / NG, then star / circle / underline.", "Explain NG: the text does not say it. Do sentence 1 together.", "Finish with Think, Pair, Share; 3 students share their story."],
        pair: ["Think, Pair, Share: tell your partner about a story you enjoyed; fill in the table together.", "Syllable clap: one says a long word, the other claps the syllables."],
        group: ["Groups of 4: “Then and Now” poster – how people enjoyed stories in the past (fire, grandparents) and today (books, films, podcasts).", "Each group tells a short Kuwaiti tale they heard from a grandparent."],
        quick: [{ q: "What is the main idea of the passage?", a: "Stories help us connect and understand." }, { q: "Where did people listen to stories in the past?", a: "Near fires." }, { q: "Find a word that means “a story”.", a: "tale" }, { q: "Are all stories real?", a: "No. Some are not real, but they can still teach us lessons." }]
      }
    },

    /* ───────────────────────── LESSON 2 ───────────────────────── */
    {
      id: "u4l2", num: 2, skill: "Grammar", title: "Relative Pronouns", pages: [64], status: "complete",
      canDo: [
        "I can recognise the function of relative pronouns from sentences that add information.",
        "I can complete written exercises using correct relative pronouns accurately."
      ],
      goals: ["Use who for people and which for things and animals.", "Use when for time and where for places.", "Join two sentences into one."],
      goalsAr: ["أستخدم who للأشخاص و which للأشياء والحيوانات.", "أستخدم when للزمن و where للمكان.", "أربط جملتين في جملة واحدة."],
      warmup: {
        title: "Look at the pictures (extra warm-up)", image: "crops/u4l2-pictures.jpg", emoji: "👴", seconds: 60,
        instructions: "Extra warm-up questions (not from the book). Look at the four pictures.",
        prompts: ["Who can you see?", "Where are they?", "What animals can you see?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "Read the short story. Match each picture to the correct sentence.", page: 64, source: "book", stage: "guided",
          image: "crops/u4l2-pictures.jpg",
          instructions: "Read the short story. Match each picture to the correct sentence.",
          items: [
            { t: "match", q: "Match each picture to the correct sentence.",
              pairs: [["Picture 1", "Ali helped his grandfather, who was walking with a stick."], ["Picture 2", "He saw a blue bird which looked like one from his sister’s book."], ["Picture 3", "It reminded them of a day when they went to the zoo."], ["Picture 4", "They sat in the park where birds sang in the trees."]],
              hint: "Look for: a stick, a blue bird, the zoo, a park bench.", why: "1 = Grandpa with a stick. 2 = the blue bird. 3 = the zoo sign. 4 = Ali and Grandpa sitting in the park." }
          ] },
        { type: "grammar", title: "Relative Pronouns (who – which – when – where)", page: 64,
          steps: [
            { title: "What are they for?", text: "Use the relative pronouns to talk about two ideas or add extra information. noun + who / which / when / where + verb or clause", textAr: "نستخدم ضمائر الوصل لربط فكرتين أو لإضافة معلومة عن اسم قبلها.",
              examples: ["{s:Ali} {v:helped} {o:his grandfather}, {c:who} was walking with a stick.", "They {v:sat} in {o:the park} {c:where} birds sang in the trees."] },
            { title: "who → people", text: "If the subject is a person, use who.", textAr: "إذا كان الاسم شخصًا نستخدم who.",
              examples: ["{s:The boy} {c:who} is playing {v:is} my brother.", "A hero is someone {c:who} helps others."], tip: "You can also use that for people: The boy that is playing is my brother." },
            { title: "which → things and animals", text: "If it is a thing or animal, use which.", textAr: "إذا كان شيئًا أو حيوانًا نستخدم which.",
              examples: ["{s:I} {v:saw} {o:the cat} {c:which} drank the milk.", "He saw {o:a blue bird} {c:which} looked like one from his sister’s book."], tip: "You can also use that for things and animals: I saw the cat that drank the milk." },
            { title: "when → time", text: "If it is a time, use when.", textAr: "إذا كان زمنًا (يوم، وقت، سنة) نستخدم when.",
              examples: ["Do you remember {t:the day} {c:when} we went to the zoo?", "It reminded them of {t:a day} {c:when} they went to the zoo."] },
            { title: "where → place", text: "If it is a place, use where.", textAr: "إذا كان مكانًا نستخدم where.",
              examples: ["This is {o:the shop} {c:where} {s:I} {v:buy} books.", "This is {o:the park} {c:where} {s:we} {v:play} after school."] },
            { title: "Join two sentences", text: "Find the word that is the same in both sentences. Change the second one to who / which / when / where.", textAr: "ابحث عن الاسم المكرر في الجملتين، واستبدل الثاني بضمير الوصل المناسب.",
              examples: ["I have a cat. {n:The cat} likes milk. → I have {o:a cat} {c:which} likes milk."] }
          ],
          table: { head: ["Relative Pronoun", "Used For", "Example"], rows: [["who", "people", "The boy who is playing is my brother."], ["which", "things and animals", "I saw the cat which drank the milk."], ["when", "time", "Do you remember the day when we went to the zoo."], ["where", "place", "This is the shop where I buy books."]] },
          worked: { q: "Join: I have a cat. The cat likes milk.", steps: ["What is the same in both sentences? a cat = the cat.", "A cat is an animal → which.", "Take away “The cat” and put “which”."], a: "I have a cat which likes milk. (or: I have a cat that likes milk.)" },
          notes: ["Remember: *If the subject is a person, use who. *If it is a thing or animal, use which. *If it is a place, use where. *If it is a time, use when.", "The table example “Do you remember the day when we went to the zoo.” is a question, so it should end with a question mark (?)."] },
        { type: "activity", title: "Extra Practice: Person, thing, time or place?", source: "extra", stage: "guided",
          instructions: "Look at the word before the gap. Tap the correct relative pronoun.",
          items: [
            { t: "choose", q: "My uncle is a doctor ____ works at Jaber Hospital.", options: ["who", "which", "where"], answer: 0, hint: "A doctor is a person.", why: "person → who" },
            { t: "choose", q: "I have a parrot ____ can say “Salam”.", options: ["who", "which", "when"], answer: 1, hint: "A parrot is an animal.", why: "animal → which" },
            { t: "choose", q: "This is the mosque ____ we pray on Friday.", options: ["when", "who", "where"], answer: 2, hint: "A mosque is a place.", why: "place → where" },
            { t: "choose", q: "Ramadan is the month ____ Muslims fast.", options: ["where", "when", "which"], answer: 1, hint: "A month is a time.", why: "time → when" },
            { t: "choose", q: "I like stories ____ teach good lessons.", options: ["who", "which", "where"], answer: 1, hint: "Stories are things.", why: "thing → which" }
          ] },
        { type: "activity", title: "Complete the sentences using relative pronouns.", page: 64, source: "book", stage: "independent",
          instructions: "Complete the sentences using relative pronouns: who, when, where, which.",
          items: [
            { t: "fill", q: "1. A hero is someone ____ helps others.", answer: ["who", "that"], bank: ["who", "when", "where", "which"], hint: "“someone” is a person.", why: "person → who (that is also correct)." },
            { t: "fill", q: "2. This is the park ____ we play after school.", answer: ["where"], bank: ["who", "when", "where", "which"], hint: "A park is a place.", why: "place → where" },
            { t: "fill", q: "3. Tell me about a time ____ you felt proud.", answer: ["when", "that"], bank: ["who", "when", "where", "which"], hint: "“a time” – is it a person, thing, time or place?", why: "time → when (that is also possible after “a time”)." },
            { t: "fill", q: "4. A lesson is something ____ we learn.", answer: ["which", "that"], bank: ["who", "when", "where", "which"], hint: "“something” is a thing.", why: "thing → which (that is also correct)." }
          ] },
        { type: "activity", title: "Join the sentences using relative pronouns.", page: 64, source: "book", stage: "independent",
          instructions: "Join the sentences using relative pronouns. Write one sentence.",
          items: [
            { t: "short", q: "I found a book. The book was very exciting.", model: "I found a book which was very exciting. (or: I found a book that was very exciting.)",
              keywords: [["book which", "book that"], ["was very exciting"]], hint: "A book is a thing → ?" },
            { t: "short", q: "He met a boy. The boy could ride a horse.", model: "He met a boy who could ride a horse. (or: He met a boy that could ride a horse.)",
              keywords: [["boy who", "boy that"], ["could ride a horse"]], hint: "A boy is a person → ?" }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The word in brackets is wrong. Write the correct relative pronoun.",
          items: [
            { t: "fix", q: "The man {which} helped me is my uncle.", answer: ["who", "that"], hint: "A man is a person.", why: "person → who (or that), not which." },
            { t: "fix", q: "I have a bird {who} sings every morning.", answer: ["which", "that"], hint: "A bird is an animal.", why: "animal → which (or that), not who." },
            { t: "fix", q: "We visited the beach {when} we swam last week.", answer: ["where"], hint: "A beach is a place.", why: "place → where" },
            { t: "fix", q: "I remember the day {where} we visited Failaka Island.", answer: ["when", "that"], hint: "A day is a time.", why: "time → when (that is also possible)." },
            { t: "order", q: "Put the words in order.", words: ["She", "is", "the", "teacher", "who", "helps", "us."], answer: ["She is the teacher who helps us."], why: "noun (the teacher) + who + verb." },
            { t: "order", q: "Put the words in order.", words: ["This", "is", "the", "park", "where", "we", "play."], answer: ["This is the park where we play."], why: "place (the park) + where + clause." },
            { t: "order", q: "Put the words in order.", words: ["I", "like", "stories", "which", "teach", "lessons."], answer: ["I like stories which teach lessons."], why: "thing (stories) + which + verb." }
          ] },
        { type: "write", title: "Now, it is your turn. Write your own sentence using relative pronouns.", page: 64, source: "book",
          instructions: "Write your own sentence using relative pronouns.",
          wordBank: ["who", "which", "when", "where"],
          frame: [{ label: "My sentence", hint: "e.g. My grandmother is a woman who …" }],
          model: "My grandmother is a kind woman who tells me stories every Friday.", modelFromBook: false,
          checklist: ["I started with a capital letter.", "I ended with a full stop.", "I used who / which / when / where correctly.", "My words are in the right order."],
          minWords: 6 }
      ],
      game: { kind: "quiz", title: "Who, Which, When or Where?", items: [
        { t: "choose", q: "The girl ____ won the race is my sister.", options: ["who", "which", "where"], answer: 0, why: "person → who" },
        { t: "choose", q: "This is the box ____ has my toys.", options: ["who", "which", "when"], answer: 1, why: "thing → which" },
        { t: "choose", q: "Kuwait is the country ____ I was born.", options: ["where", "when", "who"], answer: 0, why: "place → where" },
        { t: "choose", q: "Friday is the day ____ we visit Grandpa.", options: ["where", "which", "when"], answer: 2, why: "time → when" },
        { t: "choose", q: "I saw a camel ____ was very tall.", options: ["who", "which", "where"], answer: 1, why: "animal → which" },
        { t: "choose", q: "Mr. Ahmad is the teacher ____ tells funny stories.", options: ["which", "when", "who"], answer: 2, why: "person → who" }
      ] },
      teacher: {
        notes: ["Start with task 1: students match the four pictures to the story. Ask: Which word comes after grandfather / bird / park / day?", "Present the table and the “Remember” note: person → who, thing/animal → which, place → where, time → when. Colour the relative pronoun in red.", "Model the worked example (join two sentences), then the guided extra task.", "Book tasks 2 and 3, then the error-correction extra.", "Task 4: three students read their own sentence; the class says person / thing / time / place."],
        pair: ["Riddles: “It’s a place where we buy food.” – “A supermarket!” Take turns.", "Partner check: swap sentences from task 4 and check the relative pronoun."],
        group: ["Four corners: label the corners who / which / when / where. Read a sentence with a gap; students walk to the correct corner."],
        quick: [{ q: "Which pronoun do we use for a place?", a: "where" }, { q: "Complete: A teacher is someone ___ helps us learn.", a: "who (or that)" }, { q: "Join: I saw a cat. The cat was black.", a: "I saw a cat which (that) was black." }, { q: "Complete: Eid is a day ___ families visit each other.", a: "when" }]
      }
    },

    /* ───────────────────────── LESSON 3 ───────────────────────── */
    {
      id: "u4l3", num: 3, skill: "Listening", title: "Why People Like Stories", pages: [65], status: "complete",
      canDo: [
        "I can identify the main idea from a spoken text about why people enjoy stories.",
        "I can express my personal preferences about stories, explaining why I like them and how they make me feel."
      ],
      goals: ["Listen to people talk about stories.", "Put pictures in order.", "Say what stories you like and why."],
      goalsAr: ["أستمع إلى أشخاص يتحدثون عن القصص.", "أرتّب الصور حسب الاستماع.", "أقول ما القصص التي أحبها ولماذا."],
      warmup: {
        title: "Before You Listen", image: "crops/u4l3-warmup.jpg", emoji: "🎧", seconds: 90,
        instructions: "Discuss the following pictures.",
        prompts: ["How do people enjoy stories?", "How do stories make people feel?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "Listen and number the pictures according to the sequence of the listening material.", page: 65, source: "book", needsAudio: true,
          audio: "audio/6A-p65.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EeSC7RnciutKrP9Bsl6WcEcBRMSq1JXZr676uuhGqfSfeg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=NPJClG",
          image: "crops/u4l3-sequence.jpg",
          instructions: "Listen (track 4.1) and number the pictures according to the sequence of the listening material.",
          items: [
            { t: "table", q: "Write the number (1–4) for each picture.", head: ["Picture (from the left)", "Number"],
              rows: [["A: two girls looking at a book together", { open: true }], ["B: a monkey and a lion in the forest", { open: true }], ["C: a boy holding a tool in his village", { open: true }], ["D: a girl reading a glowing book", { open: true }]],
              open: true, note: "The picture descriptions are added to help you. The order depends on the recording." }
          ] },
        { type: "listen", title: "Listen and mark (T) True or (F) False.", page: 65, source: "book", needsAudio: true,
          audio: "audio/6A-p65.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EeSC7RnciutKrP9Bsl6WcEcBRMSq1JXZr676uuhGqfSfeg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=NPJClG",
          instructions: "Listen and mark (T) True or (F) False.",
          items: [
            { t: "short", q: "1. A boy helped his village by solving a big problem. (T / F)", open: true },
            { t: "short", q: "2. A monkey and a tiger were part of a funny story. (T / F)", open: true },
            { t: "short", q: "3. The story of two sisters taught a lesson about kindness. (T / F)", open: true },
            { t: "short", q: "4. One speaker said that stories help them imagine other places. (T / F)", open: true }
          ] },
        { type: "speak", title: "In pairs, ask each other the following questions.", page: 65, source: "book",
          instructions: "In pairs, ask each other the following questions. Then, write your answers. Use words like: funny, scary, happy, excited, kind, brave, honest.",
          dialogue: [{ who: "A", text: "What kind of stories do you like?" }, { who: "B", text: "" }, { who: "A", text: "Why do you like them?" }, { who: "B", text: "" }, { who: "A", text: "How do you feel when you read or hear them?" }, { who: "B", text: "" }, { who: "A", text: "What did you learn from them?" }, { who: "B", text: "" }],
          starters: ["I like funny / adventure / true stories.", "I like them because …", "I feel happy / excited when I read them.", "I learned to be kind / brave / honest."],
          record: true },
        { type: "write", title: "Then, write your answers.", page: 65, source: "book",
          instructions: "Write your answers to the four questions.",
          wordBank: ["funny", "scary", "happy", "excited", "kind", "brave", "honest"],
          wordBankLabel: "Use words like:",
          frame: [{ label: "What kind of stories do you like?", hint: "I like …" }, { label: "Why do you like them?", hint: "because …" }, { label: "How do you feel?", hint: "I feel …" }, { label: "What did you learn?", hint: "I learned …" }],
          model: "I like stories about brave people. I like them because they are exciting. I feel happy and excited when I read them. I learned to be brave and honest.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used at least two words from the list.", "I answered all four questions."],
          minWords: 20 },
        { type: "listen", title: "Extra Practice: Three friends and their favourite stories", source: "extra",
          instructions: "Listen to the generated voice (not the book recording). Then answer the questions.",
          script: [
            { who: "Hamad", text: "I like adventure stories. They are exciting! My favourite story is about a brave boy who saved his friend from a fire. I felt happy at the end." },
            { who: "Sara", text: "I love funny stories. My grandmother tells me a funny story every Friday after lunch. We laugh a lot, and I feel relaxed." },
            { who: "Yousef", text: "I like stories about honest people. When I read them, I feel calm. They teach me to always tell the truth." }
          ],
          items: [
            { t: "mcq", q: "What kind of stories does Hamad like?", options: ["funny stories", "adventure stories", "scary stories"], answer: 1, why: "Hamad says: “I like adventure stories.”" },
            { t: "mcq", q: "Who tells Sara funny stories?", options: ["her teacher", "her sister", "her grandmother"], answer: 2, why: "Sara says: “My grandmother tells me a funny story.”" },
            { t: "mcq", q: "When does Sara hear the stories?", options: ["every Friday after lunch", "every night", "at school"], answer: 0, why: "Sara says: “every Friday after lunch”." },
            { t: "mcq", q: "How does Yousef feel when he reads stories about honest people?", options: ["scared", "calm", "bored"], answer: 1, why: "Yousef says: “When I read them, I feel calm.”" },
            { t: "mcq", q: "What do the stories teach Yousef?", options: ["to always tell the truth", "to be funny", "to play football"], answer: 0, why: "Yousef says: “They teach me to always tell the truth.”" }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["I like funny stories.", "Stories make me feel happy.", "I like them because they are exciting.", "I learned to be honest.", "My grandmother tells me stories every Friday."] },
      teacher: {
        notes: ["Warm-up: describe the four small pictures (reading, podcast, watching together, grandfather telling a story).", "Before listening, describe pictures A–D with the class so students know what to listen for.", "Play the book recording (QR code, track 4.1, page 65) twice: first for the picture order, then for True / False.", "The recording is not built into this app, so the answers are not marked automatically. Check them with the class. Tip: picture B shows a lion – listen carefully to sentence 2.", "Pairs ask and answer the four questions, then write their answers."],
        pair: ["Story interview: the four questions, then report one answer about your partner: “Ali likes funny stories because …”.", "Feelings mime: one mimes happy / scared / excited, the other guesses and names a story that makes them feel that way."],
        group: ["Class survey: What kind of stories do you like? Make a tally (funny, adventure, true, scary) and report the most popular kind."],
        quick: [{ q: "Name two ways people enjoy stories today.", a: "Books, films, podcasts, a grandparent telling stories …" }, { q: "Complete: I like … stories because …", a: "Students’ own answers." }, { q: "Give one word from the box that describes feelings.", a: "happy / excited / scary / funny" }]
      }
    },

    /* ───────────────────────── LESSON 4 ───────────────────────── */
    {
      id: "u4l4", num: 4, skill: "Speaking", title: "Bravery and Moral Actions", pages: [66], status: "complete",
      canDo: [
        "I can identify key information from short dialogues about brave and moral actions in daily life.",
        "I can express appreciation for bravery by discussing ideas in short dialogues about helping others."
      ],
      goals: ["Read a short story about a kind girl.", "Interview a partner like a TV reporter.", "Tell the class your partner’s story."],
      goalsAr: ["أقرأ قصة قصيرة عن فتاة لطيفة.", "أجري مقابلة مع زميلي مثل مراسل تلفزيوني.", "أروي قصة زميلي أمام الصف."],
      warmup: {
        title: "Discuss the following questions.", image: "crops/u4l4-warmup.jpg", emoji: "🦸", seconds: 90,
        instructions: "Discuss the following questions.",
        prompts: ["Do you know someone who did something brave?", "What did they do to show their bravery?"]
      },
      vocab: [],
      sections: [
        { type: "reading", title: "Read the short story and answer the following questions.", page: 66,
          paras: ["Laila is a student who always helps others. One day, she saw a little boy crying near the school gate. She gave him water and stayed with him until a teacher came. It was a moment that showed her kindness and bravery."] },
        { type: "activity", title: "Answer the questions about Laila.", page: 66, source: "book", stage: "guided",
          instructions: "Read the short story and answer the following questions.",
          items: [
            { t: "short", q: "What did Laila do?", model: "She saw a little boy crying near the school gate. She gave him water and stayed with him until a teacher came.",
              keywords: [["water"], ["stay"]], hint: "Find two actions in the third sentence." },
            { t: "short", q: "Why do you think her action was kind?", model: "Because she helped a little boy who was crying. She did not leave him alone; she stayed with him until a teacher came.",
              keywords: [["help", "stay", "alone", "cry"]], hint: "Think: how did the little boy feel? What did Laila do for him?" }
          ] },
        { type: "speak", title: "Role-play: Imagine you are a reporter from a Kuwait TV programme.", page: 66, source: "book",
          instructions: "Interview your partner about a time they did something brave or kind, then switch roles. Activity Tip: Take notes during the interview.",
          dialogue: [{ who: "Reporter", text: "What happened?" }, { who: "Partner", text: "" }, { who: "Reporter", text: "When did it happen?" }, { who: "Partner", text: "" }, { who: "Reporter", text: "Where were you?" }, { who: "Partner", text: "" }, { who: "Reporter", text: "Why was it brave or kind?" }, { who: "Partner", text: "" }, { who: "Reporter", text: "How did you feel?" }, { who: "Partner", text: "" }],
          starters: ["I helped …", "It happened last week / when I was …", "I was at school / at home / in the park.", "It was kind because …", "I felt happy / proud / nervous."],
          record: true },
        { type: "speak", title: "Share your interview and present your partner’s story to the class.", page: 66, source: "book",
          instructions: "Present your partner’s story. Use the Language to Use. Speaking Tips: Use who to talk about people. Use when to talk about time. Use which to talk about things or actions.",
          dialogue: [{ who: "You", text: "This is a story about someone who …………." }, { who: "You", text: "It happened when ……………." }, { who: "You", text: "She / He helped by ……………" }, { who: "You", text: "We learned that ……………………" }],
          starters: ["This is a story about someone who …", "It happened when …", "She / He helped by …", "We learned that …"],
          record: true },
        { type: "activity", title: "Extra Practice: Language to Use", source: "extra", stage: "guided",
          instructions: "Tap the correct word. Remember the Speaking Tips.",
          items: [
            { t: "choose", q: "This is a story about someone ____ helped an old man cross the road.", options: ["who", "which", "when"], answer: 0, hint: "someone = a person", why: "Use who to talk about people." },
            { t: "choose", q: "It happened ____ I was walking home from school.", options: ["who", "when", "which"], answer: 1, hint: "This is about time.", why: "Use when to talk about time." },
            { t: "choose", q: "He did an action ____ showed his bravery.", options: ["which", "who", "when"], answer: 0, hint: "an action = a thing", why: "Use which to talk about things or actions." },
            { t: "mcq", q: "Which reporter question asks about the place?", options: ["When did it happen?", "Where were you?", "How did you feel?"], answer: 1, why: "Where asks about a place." },
            { t: "mcq", q: "Which reporter question asks about feelings?", options: ["What happened?", "Why was it brave or kind?", "How did you feel?"], answer: 2, why: "How did you feel? asks about feelings." }
          ] },
        { type: "write", title: "Extra Practice: Plan your presentation", source: "extra",
          instructions: "Use your interview notes. Complete each sentence, then read it to the class.",
          wordBank: ["who", "when", "which", "brave", "kind", "helped", "proud"],
          frame: [{ label: "This is a story about someone who …", hint: "Who is the person? What did they do?" }, { label: "It happened when …", hint: "When was it?" }, { label: "She / He helped by …", hint: "What did they do to help?" }, { label: "We learned that …", hint: "What is the lesson?" }],
          model: "This is a story about someone who helped an old man. It happened when Fahad was walking to the mosque. He helped by carrying the old man’s bag and walking with him. We learned that helping others is kind and brave.", modelFromBook: false,
          checklist: ["I used who and when.", "I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I said the lesson at the end."],
          minWords: 25 }
      ],
      game: { kind: "quiz", title: "Brave or Kind?", items: [
        { t: "mcq", q: "A boy puts out a small fire with a fire extinguisher. He is …", options: ["brave", "lazy", "funny"], answer: 0, why: "He faced danger, so he is brave." },
        { t: "mcq", q: "Laila gave a crying boy water and stayed with him. She was …", options: ["rude", "kind", "scared"], answer: 1, why: "She helped him, so she was kind." },
        { t: "mcq", q: "A student helps an old man walk with his stick. He is …", options: ["helpful", "angry", "bored"], answer: 0, why: "He helped someone, so he is helpful." },
        { t: "choose", q: "A reporter asks: “____ did it happen?” (time)", options: ["Where", "When", "Who"], answer: 1, why: "When asks about time." },
        { t: "choose", q: "A reporter asks: “____ were you?” (place)", options: ["Where", "When", "Why"], answer: 0, why: "Where asks about place." }
      ] },
      teacher: {
        notes: ["Warm-up with the two pictures (putting out a fire, helping an old man). Ask the book questions.", "Read Laila’s story aloud; students answer the two questions.", "Model the TV interview with a strong student. Remind students to take notes.", "Pairs interview and switch roles; then 3–4 students present their partner’s story with the Language to Use.", "Praise real acts of kindness; talk about safety (ask an adult for help in danger)."],
        pair: ["TV reporter role-play with the five questions; use a pen or bottle as a microphone.", "Partner note-taking: write 3 key words from your partner’s answers."],
        group: ["“Kindness news”: groups choose the bravest or kindest story from the group and present it as a short news report.", "Discuss: Which value did each story show – kindness, bravery, respect, honesty?"],
        quick: [{ q: "What did Laila do?", a: "She gave a crying boy water and stayed with him until a teacher came." }, { q: "Which word do we use to talk about people?", a: "who" }, { q: "Complete: It happened when …", a: "Students’ own answers (a time)." }, { q: "Name one question a reporter asks.", a: "What happened? / When did it happen? / Where were you? / Why was it brave or kind? / How did you feel?" }]
      }
    },

    /* ───────────────────────── LESSON 5 ───────────────────────── */
    {
      id: "u4l5", num: 5, skill: "Reading", title: "The Honest Woodcutter", pages: [67, 68], status: "complete",
      canDo: [
        "I can infer the main message from a written text about honesty and moral values.",
        "I can complete story maps based on a written text about the honest woodcutter accurately."
      ],
      goals: ["Read a story about honesty.", "Learn 12 new words.", "Complete a story map.", "Write a new ending."],
      goalsAr: ["أقرأ قصة عن الأمانة.", "أتعلم ١٢ كلمة جديدة.", "أكمل خريطة القصة.", "أكتب نهاية جديدة للقصة."],
      warmup: {
        title: "Before You Read", image: "crops/u4l5-warmup.jpg", emoji: "🪓", seconds: 90,
        instructions: "Look at the picture and discuss.",
        prompts: ["What do you think the story is about?", "What is the old man holding?"]
      },
      vocab: [
        { w: "woodcutter", pos: "noun", emoji: "🪵", def: "a person who chops wood", ex: "A poor woodcutter was cutting trees near a quiet river.", exFromBook: true, ar: "حطّاب", ipa: "/ˈwʊdkʌtə/" },
        { w: "iron", pos: "adjective", emoji: "⚙️", def: "made of iron; very strong", ex: "He was holding his old iron axe.", exFromBook: true, ar: "حديدي", ipa: "/ˈaɪən/" },
        { w: "axe", pos: "noun", emoji: "🪓", def: "a tool with a heavy metal blade for cutting wood", ex: "Finally, the old man pulled out an old iron axe.", exFromBook: true, ar: "فأس", ipa: "/æks/" },
        { w: "slip", pos: "verb", emoji: "🫳", def: "to slide and fall by mistake", ex: "It slipped from his hands and fell into the deep water.", exFromBook: true, ar: "ينزلق", ipa: "/slɪp/" },
        { w: "deep", pos: "adjective", emoji: "🌊", def: "going a long way down", ex: "The axe fell into the deep water.", exFromBook: false, ar: "عميق", ipa: "/diːp/" },
        { w: "nervously", pos: "adverb", emoji: "😰", def: "in an anxious, worried way", ex: "The man was looking around nervously.", exFromBook: true, ar: "بتوتر / بقلق", ipa: "/ˈnɜːvəsli/" },
        { w: "worried", pos: "adjective", emoji: "😟", def: "unhappy because you are thinking about problems", ex: "He sat by the river, feeling worried and helpless.", exFromBook: true, ar: "قلِق", ipa: "/ˈwʌr.id/" },
        { w: "earn", pos: "verb", emoji: "💰", def: "to get money for work", ex: "I need it to earn money.", exFromBook: true, ar: "يكسب (المال)", ipa: "/ɜːn/" },
        { w: "silver", pos: "adjective", emoji: "🥈", def: "made of silver", ex: "Next, the old man found a silver axe.", exFromBook: true, ar: "فضّي / من الفضة", ipa: "/ˈsɪlvə/" },
        { w: "lit up", pos: "phrasal verb", emoji: "✨", def: "became bright with light (eyes lit up = looked very happy)", ex: "The woodcutter’s eyes lit up.", exFromBook: true, ar: "أشرقت / لمعت (من الفرح)", ipa: "/lɪt ʌp/" },
        { w: "honest", pos: "adjective", emoji: "🤝", def: "truthful; not cheating", ex: "You were honest when you could have taken something better.", exFromBook: true, ar: "أمين / صادق", ipa: "/ˈɒnɪst/" },
        { w: "reward", pos: "noun", emoji: "🎁", def: "something given for good work or good actions", ex: "You deserve a reward.", exFromBook: true, ar: "مكافأة", ipa: "/rɪˈwɔːd/" }
      ],
      sections: [
        { type: "reading", title: "The Honest Woodcutter", page: 67,
          instructions: "Read the story and give it another title.",
          paras: [
            "One sunny afternoon, a poor woodcutter was cutting trees near a quiet river. He was holding his old iron axe when it slipped from his hands and fell into the deep water.",
            "The man was looking around nervously, but he couldn’t see his axe. He sat by the river, feeling worried and helpless.",
            "While he was sitting there, an old man was walking by. He noticed the woodcutter’s sad face and stopped. “What happened?” he asked.",
            "The woodcutter replied, “I was working when my axe fell into the river. I can’t buy another one. I need it to earn money.”",
            "The old man wanted to help. He was searching in the water when he found a shiny golden axe. “Is this yours?” he asked. The woodcutter shook his head. “No, that is not mine.”",
            "Next, the old man found a silver axe. “Is this one yours?” Again, the woodcutter said, “No, it isn’t.”",
            "Finally, the old man pulled out an old iron axe. The woodcutter’s eyes lit up. “Yes! That’s mine!”",
            "The old man smiled. “You were honest when you could have taken something better. You deserve a reward.” He gave the woodcutter all three axes."
          ] },
        { type: "activity", title: "Read the story and give it another title.", page: 67, source: "book", stage: "guided",
          instructions: "Write another title for the story.",
          items: [
            { t: "short", q: "Give the story another title.", open: true, model: "Ideas: “Honesty Brings a Reward”, “The Three Axes”, “The Old Iron Axe”.", hint: "What is the story about? What did the woodcutter get for being honest?" }
          ] },
        { type: "activity", title: "Read again and answer the following questions.", page: 68, source: "book", stage: "independent",
          image: "crops/u4l5-axes.jpg",
          instructions: "Answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", q: "1. What happened to the axe?", model: "It slipped from the woodcutter’s hands and fell into the deep water (of the river).",
              keywords: [["slip", "fell", "fall"], ["water", "river"]], hint: "Look at paragraph 1." },
            { t: "short", q: "2. What did the old man do to help?", model: "He searched in the water. He found a golden axe, then a silver axe, and finally he pulled out the old iron axe.",
              keywords: [["search", "look", "found", "pull"]], hint: "Look at the paragraph that starts “The old man wanted to help.”" },
            { t: "short", q: "3. How did the woodcutter feel after losing his axe?", model: "He felt worried and helpless (and sad).",
              keywords: [["worried", "helpless", "sad", "nervous"]], hint: "Look at paragraph 2: “feeling …”" },
            { t: "short", q: "4. Why did the old man give the woodcutter all three axes?", model: "Because the woodcutter was honest. He said the golden and silver axes were not his, and he only took his old iron axe.",
              keywords: [["honest", "truth", "not mine", "not his"]], hint: "Read what the old man says at the end." }
          ] },
        { type: "activity", title: "Discuss and fill in the table.", page: 68, source: "book", stage: "independent",
          instructions: "Discuss with your group and fill in the story map.",
          items: [
            { t: "table", q: "Story map", head: ["Story part", "Your answer"],
              rows: [
                ["Characters – Who are the people in the story?", { open: true, model: "A poor woodcutter and an old man." }],
                ["Setting – Where and when does the story take place?", { open: true, model: "Near a quiet river, one sunny afternoon." }],
                ["Problem – What is the main problem?", { open: true, model: "The woodcutter’s old iron axe fell into the deep water. He can’t buy another one, and he needs it to earn money." }],
                ["Solution – How is the problem solved?", { open: true, model: "The old man searches in the water and finds the axe. The woodcutter tells the truth, so the old man gives him all three axes." }],
                ["Moral – What lesson does the story teach?", { open: true, model: "Be honest. Honesty brings a reward." }]
              ],
              open: true, note: "Compare your answers with the suggested answers from the text." }
          ] },
        { type: "activity", title: "Complete the story using words from the list below. Then, read it aloud.", page: 68, source: "book", stage: "independent",
          instructions: "Complete the story using words from the list: earn – nervously – deep – river – silver. (“river” is done for you.)",
          items: [
            { t: "fill", q: "One day, a poor woodcutter was working near a quiet ____.", answer: ["river"], bank: ["earn", "nervously", "deep", "river", "silver"], hint: "This is the example in the book.", why: "He was working near a quiet river." },
            { t: "fill", q: "While he was cutting wood, his axe slipped and fell into the ____ water.", answer: ["deep"], bank: ["earn", "nervously", "deep", "silver"], hint: "Which word describes water?", why: "The story says “fell into the deep water”." },
            { t: "fill", q: "He looked around ____, hoping to find it.", answer: ["nervously"], bank: ["earn", "nervously", "deep", "silver"], hint: "How did he look around? (an adverb, -ly)", why: "The story says “The man was looking around nervously”." },
            { t: "fill", q: "He sat by the river and said, “How will I ____ money without my axe?”", answer: ["earn"], bank: ["earn", "nervously", "deep", "silver"], hint: "What do we do with money when we work?", why: "We earn money. The story says “I need it to earn money.” (“silver” is not used.)" }
          ] },
        { type: "write", title: "Create a different ending for the story. Then, act it out.", page: 68, source: "book",
          instructions: "What if the woodcutter jumped into the river? Write a different ending. Then, act it out with your group.",
          wordBank: ["deep", "nervously", "worried", "honest", "reward", "help", "careful"],
          frame: [{ label: "What happened next?", hint: "The woodcutter jumped into the river, but …" }, { label: "How did it end?", hint: "Finally, …" }],
          model: "The woodcutter jumped into the river, but the water was very deep. He was scared. The old man quickly gave him a long stick and pulled him out. The woodcutter said, “Thank you! I will be careful next time.” Then, the old man found the iron axe and gave it to him.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "My ending answers the question “What if …?”.", "My words are in the right order."],
          minWords: 25 },
        { type: "activity", title: "Extra Practice: Story order", source: "extra", stage: "guided",
          instructions: "Match each step to the correct event.",
          items: [
            { t: "match", q: "Put the events in order.",
              pairs: [["1st", "The axe slipped and fell into the deep water."], ["2nd", "An old man stopped and asked, “What happened?”"], ["3rd", "The old man found a shiny golden axe."], ["4th", "The old man found a silver axe."], ["5th", "The old man pulled out the old iron axe."], ["6th", "He gave the woodcutter all three axes."]],
              hint: "Look for First, Next, Finally in the story.", why: "This is the order of events in the story." }
          ] },
        { type: "discuss", title: "Extra: Compare two stories", source: "extra",
          prompts: ["Think about Laila (Lesson 4) and the honest woodcutter. What lesson does each story teach?", "How are the two stories the same? How are they different?"],
          starters: ["Laila’s story teaches us to be …", "The woodcutter’s story teaches us to be …", "Both stories …"], emoji: "⚖️" }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Warm-up: the picture on page 67. Predict: What is the old man holding? (a golden axe).", "Pre-teach with flip cards: woodcutter, axe, slip, deep, honest, reward.", "Read the story aloud with expression; students give it another title.", "Questions 1–4, then the story map in groups (characters, setting, problem, solution, moral).", "Story completion, then groups write and act out a different ending. Talk about safety near deep water."],
        pair: ["Role-play the dialogue between the woodcutter and the old man (“Is this yours?” – “No, that is not mine.”).", "Retell the story with First, Next, Finally."],
        group: ["Act out a different ending (What if the woodcutter jumped into the river?).", "Compare: the honest woodcutter and Laila’s story – which values do they show?"],
        quick: [{ q: "What fell into the river?", a: "The woodcutter’s old iron axe." }, { q: "Which axes did the old man find?", a: "A golden axe, a silver axe and the old iron axe." }, { q: "What is the moral of the story?", a: "Be honest; honesty brings a reward." }, { q: "Opposite of honest?", a: "dishonest (lying / cheating)" }]
      }
    },

    /* ───────────────────────── LESSON 6 ───────────────────────── */
    {
      id: "u4l6", num: 6, skill: "Grammar", title: "Past Continuous (When / While)", pages: [69], status: "complete",
      canDo: [
        "I can recognise the use of “when” and “while” from sentences about interrupted and parallel actions.",
        "I can complete written exercises using correct verb forms accurately."
      ],
      goals: ["Make the past continuous: was / were + verb-ing.", "Use when + past simple.", "Use while + past continuous."],
      goalsAr: ["أكوّن الماضي المستمر: was / were + الفعل مع ing.", "أستخدم when مع الماضي البسيط.", "أستخدم while مع الماضي المستمر."],
      warmup: {
        title: "Look at the pictures and discuss.", image: "crops/u4l6-warmup.jpg", emoji: "🌧️", seconds: 90,
        instructions: "Look at the pictures and discuss.",
        prompts: ["What was happening in each picture?", "What happened first?", "Were the people doing these things at the same time?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Past Continuous (when / while)", page: 69,
          steps: [
            { title: "When do we use it?", text: "We use the past continuous to talk about an action that was in progress when another action happened.", textAr: "نستخدم الماضي المستمر لحدث كان مستمرًا في الماضي عندما وقع حدث آخر قطعه.",
              examples: ["{s:He} {a:was} {v:studying} {c:when} {s:his friend} {v:called}.", "{c:While} {s:the family} {a:was} {v:having} a picnic, {s:it} {v:started} to rain.", "{s:I} {a:was} {v:reading} {c:when} {s:my brother} {v:entered} the room."] },
            { title: "Form: subject + was / were + verb + ing", text: "I / He / She / It → was. We / You / They → were.", textAr: "مع I / He / She / It نستخدم was، ومع We / You / They نستخدم were، ثم الفعل + ing.",
              examples: ["{s:Mariam} {a:was} {v:reading} a story.", "{s:They} {a:were} {v:listening} to music."], tip: "Spelling: write → writing, swim → swimming, sit → sitting" },
            { title: "Tip: after when → past simple", text: "The short action that stops the long action goes after when. Use the past simple.", textAr: "بعد when نستخدم الماضي البسيط للحدث القصير الذي قطع الحدث الطويل.",
              examples: ["{s:He} {a:was} {v:studying} {c:when} {s:his friend} {v:called}."] },
            { title: "Tip: after while → past continuous", text: "The long action goes after while. Use the past continuous.", textAr: "بعد while نستخدم الماضي المستمر للحدث الطويل.",
              examples: ["{c:While} {s:the family} {a:was} {v:having} a picnic, {s:it} {v:started} to rain."] },
            { title: "Two actions at the same time", text: "Use while + past continuous + past continuous for two long actions at the same time.", textAr: "لحدثين مستمرين في الوقت نفسه: while + ماضٍ مستمر + ماضٍ مستمر.",
              examples: ["{c:While} {s:Mum} {a:was} {v:cooking}, {s:Dad} {a:was} {v:setting} the table."] },
            { title: "Comma or no comma?", text: "If the sentence starts with when / while, put a comma after the first part.", textAr: "إذا بدأت الجملة بـ when أو while نضع فاصلة بعد الجزء الأول.",
              examples: ["{c:While} {s:I} {a:was} {v:walking} home, {s:I} {v:saw} my teacher.", "{s:I} {v:saw} my teacher {c:while} {s:I} {a:was} {v:walking} home."] }
          ],
          table: { head: ["Subject", "Verb To Be", "Example"], rows: [["I / He / She / It", "was", "Mariam was reading a story."], ["We/ You / They", "were", "They were listening to music."]] },
          worked: { q: "Complete: Ali was (play) ____ football when it (start) ____ to rain.", steps: ["Find was → the long action needs verb + ing: playing.", "Find when → after when use the past simple: started.", "Check: the rain stopped the game."], a: "Ali was playing football when it started to rain." },
          notes: ["Book Tip: After when, use the past simple. After while, use the past continuous."] },
        { type: "activity", title: "Extra Practice: was / were and when / while", source: "extra", stage: "guided",
          instructions: "Tap the correct answer.",
          items: [
            { t: "choose", q: "They ____ listening to music.", options: ["was", "were"], answer: 1, hint: "They = ?", why: "We / You / They → were." },
            { t: "choose", q: "Mariam ____ reading a story.", options: ["was", "were"], answer: 0, hint: "Mariam = she.", why: "I / He / She / It → was." },
            { t: "choose", q: "He was studying ____ his friend called.", options: ["when", "while"], answer: 0, hint: "“called” is past simple.", why: "After when, use the past simple: when his friend called." },
            { t: "choose", q: "____ the family was having a picnic, it started to rain.", options: ["When", "While"], answer: [1, 0], hint: "“was having” is past continuous.", why: "After while, use the past continuous, so While is best. (When is also possible here.)" },
            { t: "choose", q: "We were eating dinner when the phone ____.", options: ["rang", "was ringing"], answer: 0, hint: "After when → ?", why: "After when, use the past simple: rang." },
            { t: "choose", q: "While I ____ my homework, my sister came in.", options: ["did", "was doing"], answer: 1, hint: "After while → ?", why: "After while, use the past continuous: was doing." }
          ] },
        { type: "activity", title: "a. Look at the pictures and complete the sentences using the correct verb form.", page: 69, source: "book", stage: "independent",
          image: "crops/u4l6-party.jpg",
          instructions: "Look at the picture and complete the sentences using the correct verb form.",
          items: [
            { t: "fill", q: "Noor’s mother was (set) ____ the table, …", answer: ["setting"], hint: "was + verb + ing (set → setting: double t)", why: "Past continuous: was setting." },
            { t: "fill", q: "… when the guests (arrive) ____.", answer: ["arrived"], hint: "After when → past simple.", why: "After when, use the past simple: arrived." },
            { t: "fill", q: "While Noor was (choose) ____ party games, …", answer: ["choosing"], hint: "choose → drop the e + ing", why: "Past continuous: was choosing." },
            { t: "fill", q: "… her best friend (knock) ____ on the door.", answer: ["knocked", "was knocking"], hint: "This action happened during the long action.", why: "Past simple: knocked (the book’s pattern). “was knocking” is also correct English." },
            { t: "fill", q: "While Noor was (hold) ____ the cake, …", answer: ["holding"], hint: "was + verb + ing", why: "Past continuous: was holding." },
            { t: "fill", q: "… everyone (begin) ____ to sing.", answer: ["began"], hint: "begin is irregular: begin → ?", why: "Past simple of begin = began." },
            { t: "fill", q: "While she was (open) ____ her presents, …", answer: ["opening"], hint: "was + verb + ing", why: "Past continuous: was opening." },
            { t: "fill", q: "… her friends (gather) ____ around to watch.", answer: ["gathered", "were gathering"], hint: "her friends = they", why: "Past simple: gathered. “were gathering” is also correct (two actions at the same time)." }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The words in brackets are wrong. Write the correct form.",
          items: [
            { t: "fix", q: "They {was} playing football when it started to rain.", answer: ["were"], hint: "They = ?", why: "They → were." },
            { t: "fix", q: "I was {read} a book when the phone rang.", answer: ["reading"], hint: "was + verb + ?", why: "Past continuous: was reading." },
            { t: "fix", q: "While she {cooked} dinner, the doorbell rang.", answer: ["was cooking"], hint: "After while → past continuous.", why: "After while, use the past continuous: was cooking." },
            { t: "fix", q: "He was sleeping when his alarm {was ringing}.", answer: ["rang"], hint: "After when → past simple.", why: "After when, use the past simple: rang." },
            { t: "order", q: "Put the words in order.", words: ["We", "were", "eating", "lunch", "when", "Grandpa", "arrived."], answer: ["We were eating lunch when Grandpa arrived."], why: "long action (were eating) + when + short action (arrived). You can also say: When Grandpa arrived, we were eating lunch." },
            { t: "short", q: "Join with while: Mum was cooking. The phone rang.", model: "While Mum was cooking, the phone rang. (or: The phone rang while Mum was cooking.)",
              keywords: [["while mum was cooking"], ["phone rang"]], hint: "Put while before the long action." }
          ] },
        { type: "write", title: "b. Now write three sentences about “A Day at the Beach”", page: 69, source: "book",
          instructions: "Now write three sentences about “A Day at the Beach” using past continuous and words from the list. Start with “Last Friday, …”.",
          wordBank: ["bring", "carry", "slice", "eat", "swim", "play", "laugh", "enjoy", "remember", "help", "wait", "finish", "collect"],
          wordBankLabel: "Word List",
          frame: [{ label: "Sentence 1", hint: "Last Friday, …" }, { label: "Sentence 2", hint: "While we were …, …" }, { label: "Sentence 3", hint: "… was / were …ing when …" }],
          model: "Last Friday, my family and I were enjoying a day at the beach. While my father was carrying the food, my brother and I were collecting shells. We were swimming when my mother called us to eat.", modelFromBook: false,
          checklist: ["I used was / were + verb-ing.", "I used when or while.", "I used words from the list.", "I started with a capital letter and ended with a full stop."],
          minWords: 25 }
      ],
      game: { kind: "quiz", title: "When or While?", items: [
        { t: "choose", q: "I was sleeping ____ the phone rang.", options: ["when", "while"], answer: 0, why: "when + past simple (rang)" },
        { t: "choose", q: "____ we were swimming, it started to rain.", options: ["While", "When"], answer: [0, 1], why: "while + past continuous is best; when is also possible." },
        { t: "choose", q: "She ____ reading when I came in.", options: ["was", "were"], answer: 0, why: "she → was" },
        { t: "choose", q: "We ____ playing in the park.", options: ["was", "were"], answer: 1, why: "we → were" },
        { t: "choose", q: "He was walking home when he ____ his friend.", options: ["saw", "was seeing"], answer: 0, why: "when + past simple" },
        { t: "choose", q: "While Dad ____, I was washing the car.", options: ["cooked", "was cooking"], answer: 1, why: "while + past continuous" }
      ] },
      teacher: {
        notes: ["Warm-up: the two pictures (studying → phone call; picnic → rain). Ask the three book questions.", "Draw a timeline: a long line (past continuous) and a short arrow (past simple) that interrupts it.", "Present the rule box, the was/were table and the Tip; colour was/were + -ing and when/while.", "Worked example, guided when/while task, then the party task (2a).", "Students write three beach sentences with the word list; 3 students read aloud."],
        pair: ["Freeze frame: one mimes a long action (reading); the partner claps (the phone rings). Say: “You were reading when the phone rang.”", "Swap beach sentences and underline was/were + -ing."],
        group: ["Chain story: “While we were having a picnic, …” Each student adds one sentence with when or while."],
        quick: [{ q: "Complete: They ___ listening to music.", a: "were" }, { q: "After when we usually use the … tense.", a: "past simple" }, { q: "After while we use the … tense.", a: "past continuous" }, { q: "Correct: I was read when Dad came.", a: "I was reading when Dad came." }]
      }
    },

    /* ───────────────────────── LESSON 7 ───────────────────────── */
    {
      id: "u4l7", num: 7, skill: "Writing", title: "My Favourite Story", pages: [70, 71], status: "complete",
      canDo: [
        "I can describe characters and events using appropriate vocabulary in a paragraph about a story.",
        "I can organise sentences into a structured paragraph about story events."
      ],
      goals: ["Describe characters with adjectives.", "Fill in a graphic organiser.", "Write a paragraph about your favourite story."],
      goalsAr: ["أصف الشخصيات بالصفات.", "أكمل المنظّم البياني.", "أكتب فقرة عن قصتي المفضلة."],
      linkers: ["first", "then", "finally", "also", "because"],
      warmup: {
        title: "Discuss the following questions.", image: "crops/u4l7-warmup.jpg", emoji: "📚", seconds: 120,
        instructions: "Discuss the following questions.",
        prompts: ["What is your favourite story?", "Who is your favourite character in the story? Why?", "What happens in the story?", "Does the story teach something? What is the lesson?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "Match each character with the adjective that best describes them.", page: 70, source: "book", stage: "guided",
          instructions: "Match each character with the adjective that best describes them. (Example: 1 – brave.)",
          items: [
            { t: "match", q: "Match each character with an adjective.",
              pairs: [["1. A firefighter who saved a child from danger.", "brave"], ["2. A cat which hides your toys and plays all day.", "playful"], ["3. A girl who helps her friends solve problems.", "helpful"], ["4. A grandmother who always smiles and listens.", "kind"], ["5. A student who answers a lot of questions.", "clever"]],
              hint: "The book gives the example: 1 = brave.", why: "Saving a child is brave; a cat that plays all day is playful; helping friends is helpful; smiling and listening is kind; answering many questions is clever." },
            { t: "short", q: "Then, choose one character and explain why the adjective fits.", open: true, model: "The grandmother is kind because she always smiles and listens to others.", hint: "… is … because …" }
          ] },
        { type: "reading", title: "a. Read the paragraph. Then, fill in the graphic organiser.", page: 70,
          paras: ["My favourite story is called Alice in Wonderland. The main character is a curious and brave girl named Alice. First, she falls into a rabbit hole. Then, she meets many strange and funny characters. Finally, she finds her way home. This story teaches us to explore new things. It also teaches us to believe in ourselves."] },
        { type: "activity", title: "b. Fill in the graphic organiser.", page: 70, source: "book", stage: "guided",
          instructions: "Use the paragraph to fill in the graphic organiser.",
          items: [
            { t: "table", q: "Graphic organiser", head: ["", "Answer"],
              rows: [
                ["My favourite story is", { answer: ["alice in wonderland", "called alice in wonderland"], model: "Alice in Wonderland" }],
                ["The main character is called", { answer: ["alice"], model: "Alice" }],
                ["What happens in the story? First, …", { answer: ["she falls into a rabbit hole", "she falls into a rabbit hole.", "falls into a rabbit hole", "she fell into a rabbit hole", "alice falls into a rabbit hole"], model: "she falls into a rabbit hole." }],
                ["Then, she meets …", { answer: ["many strange and funny characters", "strange and funny characters", "many strange and funny characters.", "funny and strange characters"], model: "many strange and funny characters." }],
                ["Finally, …", { answer: ["she finds her way home", "she finds her way home.", "finds her way home", "she found her way home"], model: "she finds her way home." }],
                ["Describe the character: The character is …", { answer: ["curious and brave", "brave and curious", "a curious and brave girl", "curious and brave."], model: "curious and brave." }],
                ["What lesson does it teach?", { open: true, model: "to explore new things and to believe in ourselves." }]
              ] }
          ] },
        { type: "activity", title: "Extra Practice: Linkers", source: "extra", stage: "guided",
          instructions: "Choose the correct linker from the Linkers Bank: first, then, finally, also, because.",
          items: [
            { t: "choose", q: "____, the woodcutter’s axe fell into the river.", options: ["First", "Finally", "Because"], answer: 0, why: "The first event → First." },
            { t: "choose", q: "____, an old man came to help him.", options: ["Because", "Then", "Also"], answer: 1, why: "The next event → Then." },
            { t: "choose", q: "____, the old man gave him all three axes.", options: ["First", "Finally", "Because"], answer: 1, why: "The last event → Finally." },
            { t: "choose", q: "He got a reward ____ he was honest.", options: ["because", "then", "first"], answer: 0, why: "because gives a reason." },
            { t: "choose", q: "The story ____ teaches us to help others.", options: ["finally", "also", "first"], answer: 1, why: "also adds another idea." }
          ] },
        { type: "write", title: "Plan and write a paragraph about “Your Favourite Story”", page: 71, source: "book",
          instructions: "“Stories help us learn and imagine. We all have a favourite story that teaches us something important”. Plan and write a paragraph about “Your Favourite Story” describing what happens in the story, who the main character is, and what lesson the story teaches.",
          wordBank: ["exciting", "main", "brave", "clever", "kind", "funny", "curious", "message", "recommend", "first", "then", "finally", "also", "because"],
          wordBankLabel: "Useful Language + Linkers Bank",
          frame: [
            { label: "Topic sentence", hint: "My favourite story is called …" },
            { label: "Supporting details", hint: "The main character … First, … Then, … Finally, …", lines: 3 },
            { label: "Concluding sentence", hint: "This story teaches us … / I recommend it because …" }
          ],
          model: "My favourite story is called The Honest Woodcutter. The main character is a poor but honest woodcutter. First, his old iron axe slips and falls into a deep river. Then, a kind old man who wants to help finds a golden axe and a silver axe, but the woodcutter says they are not his. Finally, the old man finds the iron axe and gives him all three axes because he was honest. This story teaches us to always tell the truth. I recommend it because it has a great message.",
          modelFromBook: false,
          bookChecklist: ["Did I write a clear topic sentence?", "Did I include at least three details?", "Did I describe the main character clearly?", "Did I write a sentence that explains what the story taught me?", "Did I use an AI tool to proofread my writing?"],
          checklist: ["Capital letters at the start of sentences.", "Full stops at the end of sentences.", "I used first, then, finally.", "I wrote one paragraph: story, character, events, lesson."],
          minWords: 50 }
      ],
      game: { kind: "sort", title: "Sort it!", buckets: ["Topic sentence", "Supporting detail", "Concluding sentence"], cards: [
        ["My favourite story is called Alice in Wonderland.", 0],
        ["The main character is a curious and brave girl named Alice.", 1],
        ["First, she falls into a rabbit hole.", 1],
        ["Then, she meets many strange and funny characters.", 1],
        ["Finally, she finds her way home.", 1],
        ["This story teaches us to explore new things.", 2]
      ] },
      teacher: {
        notes: ["Warm-up: the four discussion questions; students name a favourite story and character.", "Character–adjective matching; students explain one choice with because.", "Read the Alice paragraph; highlight First, Then, Finally; fill in the graphic organiser together.", "Students plan their own story (topic sentence, 3 details, concluding sentence), then write the paragraph.", "Peer check with the book’s Writing Checklist."],
        pair: ["Story swap: tell your partner your favourite story using First, Then, Finally.", "Peer check: tick the Writing Checklist on your partner’s paragraph."],
        group: ["Groups make a “Story Wall”: each student writes the title, main character and lesson of their favourite story on a card."],
        quick: [{ q: "Which adjective fits a firefighter who saved a child?", a: "brave" }, { q: "Name three linkers to put events in order.", a: "first, then, finally" }, { q: "What does the Alice story teach us?", a: "To explore new things and to believe in ourselves." }, { q: "What goes at the end of a paragraph?", a: "A concluding sentence (e.g. the lesson of the story)." }]
      }
    }
  ]
});

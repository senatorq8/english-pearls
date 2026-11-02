// Unit 9 — Storytelling and Communication (Module 3 "Keeping in Touch", printed pages 69–74, module cover p. 55)
BOOK.addUnit({
  id: "u9", num: 9, title: "Storytelling and Communication", titleAr: "رواية القصص والتواصل",
  module: 3, moduleTitle: "Keeping in Touch",
  pages: [69, 74],
  cover: 55,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Make guesses",
      "Retell a story",
      "Express opinions",
      "Talk about imaginary situations",
      "Narrate events",
      "Describe past experiences"
    ],
    "language structures": [
      "Use reported speech (imperatives)",
      "Use phrasal verbs with “look”",
      "Use prepositions"
    ],
    "module 3 — you are expected to": [
      "Explain the meaning of different types of texts (argumentative, expository, narrative .etc).",
      "Express points of view on a variety of topics.",
      "Write different types of paragraphs."
    ],
    "module 3 — activities": [
      "Role-playing different situations",
      "Providing and choosing titles for different texts",
      "Describing personal experiences"
    ]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u9l1", num: 1, skill: "Reading",
      title: "Narrative Text: Joha and His Son",
      pages: [69, 70],
      status: "complete",
      canDo: ["Make guesses", "Express opinions"],
      goals: ["Read a famous Joha story.", "Find the main problem in the story.", "Write an ending for the story.", "Learn 8 new words."],
      goalsAr: ["أقرأ قصة مشهورة لجحا.", "أحدّد المشكلة الرئيسية في القصة.", "أكتب نهاية للقصة.", "أتعلّم 8 كلمات جديدة."],
      warmup: {
        title: "Before you read",
        image: "crops/u9l1-warmup.jpg",
        emoji: "🫏",
        prompts: ["Look at the picture and guess what the story might be about.", "Who is the man with the donkey? How do the people look?"],
        seconds: 90
      },
      vocab: [
        { w: "grown-up", pos: "noun", emoji: "🧔", def: "an adult; a person who is not a child", ex: "He was loved by grown-ups and children alike.", exFromBook: true, ar: "شخص بالغ / الكبار" },
        { w: "innocent", pos: "adjective", emoji: "😇", def: "simple and trusting; not knowing much about bad things", ex: "Whatever people call him, he appears as an innocent or even a fool.", exFromBook: true, ar: "بريء / ساذج" },
        { w: "outwit", pos: "verb", emoji: "🧠", def: "to win against someone by being cleverer than them", ex: "Sometimes the fool turns out to be wise and to outwit those who call him a fool.", exFromBook: true, ar: "يتغلّب عليه بذكائه" },
        { w: "nearby", pos: "adjective", emoji: "🏘️", def: "not far away; close", ex: "Joha and his son were on their way to a nearby village.", exFromBook: true, ar: "قريب / مجاور" },
        { w: "alongside", pos: "adverb", emoji: "🚶", def: "next to someone or something, at the side", ex: "The son rode their donkey while Joha walked alongside.", exFromBook: true, ar: "بجانب" },
        { w: "pass", pos: "verb", emoji: "↔️", def: "to go past someone or something", ex: "On their way, they passed some people who pointed at Joha and his son.", exFromBook: true, ar: "يمرّ بـ" },
        { w: "cruel", pos: "adjective", emoji: "😠", def: "causing pain to people or animals on purpose", ex: "“Look at those people riding that poor donkey. How cruel,” they said.", exFromBook: true, ar: "قاسٍ" },
        { w: "please", pos: "verb", emoji: "😊", def: "to make someone happy or satisfied", ex: "What details in the story let you know that Joha was trying to please people?", exFromBook: true, ar: "يُرضي" }
      ],
      sections: [
        { type: "reading", title: "Narrative Text", page: 69,
          instructions: "Read about Joha and one of his famous stories.",
          blocks: [
            { head: "Joha", paras: ["Joha used to be famous in many Arab countries. He is known by lots of different names, Goha, Joha, Hodja, Mollah and Nasreddin. He was loved by grown-ups and children alike. Whatever people call him, he appears as an innocent or even a fool, but sometimes the fool turns out to be wise and to outwit those who call him a fool."] },
            { head: "This is one of his famous stories:", paras: [
              "Joha and his son were on their way to a nearby village. The son rode their donkey while Joha walked alongside.",
              "On their way, they passed some people who pointed at Joha and his son. “Look at that boy”, they said. “He is riding the donkey and his poor old father is walking.” When he heard this, Joha said, “You get off the donkey and I’ll ride.”",
              "“Look at that man. He is riding the donkey and his poor young son is walking,” said some other passers-by, pointing at the two of them. Joha thought about this. “Get on the donkey, we’ll both ride it,” he said.",
              "Joha and his son passed by more people who pointed at them. “Look at those people riding that poor donkey. How cruel,” they said. Joha thought about this as well. “Let’s both get off the donkey,” he said to his son, and so they both walked alongside it.",
              "The next people they passed pointed at them and said, “look at those fools, walking along when they have a donkey they could ride!”",
              "After some thought, Joha said, “Don’t listen to them! I have a good idea ................”"
            ] }
          ],
          speaker: null },

        { type: "activity", title: "2. Read the story and answer the following questions.", page: 70, source: "book",
          instructions: "Answer the questions. Use the story.", instructionsAr: "أجب عن الأسئلة من القصة.",
          items: [
            { t: "short", q: "• Who is the story about?", model: "Joha and his son (and their donkey).", keywords: [["joha"], ["son"]], hint: "Read the first sentence of the story." },
            { t: "short", q: "• What is the main problem in the story?",
              model: "Joha tries to please everyone, but every time they change, other people criticise them. They cannot please all the people.",
              keywords: [["please", "everyone", "everybody", "people", "criticis", "say"]], hint: "What happens every time they pass people?" },
            { t: "short", q: "• What details in the story let you know that Joha was trying to please people?",
              model: "Every time people said something, Joha changed: first he told his son to get off and he rode; then they both rode; then they both got off and walked alongside the donkey.",
              keywords: [["get off", "got off", "ride", "rode", "walk", "chang"]], hint: "Look at what Joha did after each group of people spoke." }
          ] },

        { type: "write", title: "3. a. The ending of the story is missing, write what you think happened to Joha and his son.", page: 70, source: "book",
          instructions: "Joha says, “Don’t listen to them! I have a good idea …” What is his idea? Write the ending.",
          wordBank: ["Then,", "After that,", "Finally,", "decided", "carried", "laughed", "learned", "please everyone"],
          frame: [
            { label: "Joha’s idea", hint: "Joha’s idea was to …" },
            { label: "What happened next", hint: "Then, … After that, …" },
            { label: "The end", hint: "Finally, …" }
          ],
          model: "Joha’s idea was simple: “From now on, we will do what we think is right.” He told his son to get on the donkey when he was tired, and they took turns riding it. When people laughed or pointed at them, Joha smiled and kept walking. Finally, they arrived at the village happy and not tired, and the donkey was fine too.",
          modelFromBook: false,
          checklist: ["My ending follows the story.", "I used sequence words (then, after that, finally).", "I started each sentence with a capital letter."],
          minWords: 40 },

        { type: "activity", title: "b. What did Joha and his son learn in this story?", page: 70, source: "book",
          instructions: "Write the lesson of the story.", instructionsAr: "اكتب الدرس المستفاد من القصة.",
          items: [
            { t: "short", q: "What did Joha and his son learn in this story?", model: "You cannot please everyone, so do what you think is right and don’t listen to everything people say.", open: true, hint: "You can’t … everyone." }
          ] },

        { type: "activity", title: "Extra Practice: Put the story in order", source: "extra", stage: "guided",
          instructions: "Match the people to what Joha and his son did next.", instructionsAr: "صِل ما قاله الناس بما فعله جحا وابنه بعده.",
          items: [
            { t: "match", q: "What did they do after each group spoke?",
              pairs: [
                ["“He is riding the donkey and his poor old father is walking.”", "Joha rode and his son walked."],
                ["“He is riding the donkey and his poor young son is walking.”", "They both rode the donkey."],
                ["“Look at those people riding that poor donkey. How cruel.”", "They both walked alongside the donkey."]
              ],
              hint: "Each time, Joha changed what they did.", why: "Joha tried to please each group, so he changed every time." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "We walked to a (nearby / cruel) shop.", options: ["nearby", "cruel"], answer: 0, why: "nearby = close, not far." },
            { t: "choose", q: "Hitting animals is (cruel / innocent).", options: ["cruel", "innocent"], answer: 0, why: "cruel = causing pain on purpose." },
            { t: "choose", q: "The clever fox (outwitted / passed) the hunter.", options: ["outwitted", "passed"], answer: 0, why: "outwit = win by being cleverer." },
            { t: "choose", q: "My little brother rode his bike and I walked (alongside / nearby) him.", options: ["alongside", "nearby"], answer: 0, why: "alongside = next to someone." },
            { t: "choose", q: "It is impossible to (please / pass) everyone.", options: ["please", "pass"], answer: 0, why: "please = make someone happy." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students look at the picture and guess what the story is about (book exercise 1).",
          "Introduce Joha: ask who knows a Joha story in Arabic.",
          "Read the story; stop after each group of passers-by and ask: What will Joha do now?",
          "Questions in exercise 2, then students write the missing ending (3a) and the lesson (3b).",
          "There is no single correct ending — praise creative, logical endings."
        ],
        pair: ["Pairs act the story: one is Joha, one is the son; the class are the passers-by.", "Pairs compare their endings and choose the funniest one."],
        group: ["Groups of 4 retell the story: each student tells one part."],
        quick: [
          { q: "Where were Joha and his son going?", a: "To a nearby village." },
          { q: "What did the people say when both rode the donkey?", a: "“How cruel.”" },
          { q: "What is the lesson of the story?", a: "You cannot please everyone." },
          { q: "What does “outwit” mean?", a: "To win against someone by being cleverer." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u9l2", num: 2, skill: "Grammar",
      title: "Reported Speech (imperatives)",
      pages: [70, 70],
      status: "complete",
      canDo: ["Use reported speech (imperatives)", "Retell a story"],
      goals: ["Report commands and requests.", "Use asked / told + person + to + verb.", "Use not to for negative commands.", "Retell Joha’s story."],
      goalsAr: ["أنقل الأوامر والطلبات.", "أستخدم asked / told + الشخص + to + الفعل.", "أستخدم not to للأوامر المنفية.", "أعيد رواية قصة جحا."],
      warmup: {
        title: "What did he say?",
        image: null,
        emoji: "🗣️",
        prompts: ["Your teacher says, “Close the door.” Tell your friend what the teacher asked you to do.", "Your mum says, “Don’t be late.” What did your mum tell you?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Reported Speech (imperatives)", page: 70,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "When we report someone’s words, we use two different ways: 1. We can use direct speech with quotation marks: “Close the door.”, or 2. We can use reported speech: He asked me to close the door.",
              textAr: "عندما ننقل كلام شخص نستخدم طريقتين: الكلام المباشر بين علامتي تنصيص، أو الكلام المنقول (غير المباشر).",
              examples: [
                "“{v:Close} the door.” → {s:He} {v:asked} {o:me} {c:to} {v:close} the door.",
                "“{v:Get off} the donkey,” said Joha → {s:Joha} {v:asked} {o:his son} {c:to} {v:get off} the donkey.",
                "Later he said, “{n:Don’t} {v:listen} to them.” → {s:He} {v:asked} {o:his son} {n:not to} {v:listen} to them."
              ] },
            { title: "Step 2 — Positive command → to + base verb", source: "extra",
              text: "Remove the quotation marks. Use asked (a request) or told (a command) + the person + to + base verb.",
              textAr: "نحذف علامات التنصيص ونستخدم asked للطلب أو told للأمر + الشخص + to + الفعل في صورته الأساسية.",
              examples: [
                "“{v:Sit} down,” the teacher said. → {s:The teacher} {v:told} {o:us} {c:to} {v:sit} down."
              ] },
            { title: "Step 3 — Negative command → not to + base verb", source: "extra",
              text: "Don’t disappears. Use not to + base verb.",
              textAr: "تختفي Don’t ونستخدم not to + الفعل في صورته الأساسية.",
              examples: [
                "“{n:Don’t} {v:disturb} me,” he said. → {s:My friend} {v:asked} {o:me} {n:not to} {v:disturb} him."
              ] },
            { title: "Step 4 — Change the pronouns", source: "extra",
              text: "Change your, me, my to match the people in the new sentence.",
              textAr: "نغيّر الضمائر مثل your و me و my لتناسب الأشخاص في الجملة الجديدة.",
              examples: [
                "“Listen to {o:your} father,” said his mother. → {s:The mother} {v:asked} {o:her son} {c:to} {v:listen} to {o:his} father.",
                "“Don’t disturb {o:me},” he said. → … not to disturb {o:him}."
              ] }
          ],
          worked: {
            q: "Report: “Don’t open the window,” Mum said to me.",
            steps: [
              "Is it a command? Yes, and it is negative (Don’t).",
              "Start: Mum told me / Mum asked me.",
              "Don’t → not to, then the base verb: not to open.",
              "Copy the rest: the window."
            ],
            a: "{s:Mum} {v:told} {o:me} {n:not to} {v:open} the window."
          },
          notes: [
            "asked + person + to … (request) / told + person + to … (command).",
            "Never: He told me don’t … → He told me not to …",
            "Change your → his/her, me → him/her when needed."
          ] },

        { type: "activity", title: "Rewrite these requests/commands in reported speech.", page: 70, source: "book", stage: "guided",
          instructions: "Complete the reported sentence.", instructionsAr: "أكمل الجملة بالكلام المنقول.",
          items: [
            { t: "fill", q: "1. “Listen to your father,” said his mother. The mother asked her son ____.", answer: ["to listen to his father"], hint: "to + base verb. your → his.", why: "Positive command → to + listen. “your father” becomes “his father” (the son’s father)." },
            { t: "fill", q: "2. “Don’t disturb me,” he said. My friend asked me ____.", answer: ["not to disturb him"], hint: "Don’t → not to. me → him.", why: "Negative command → not to + disturb. “me” (my friend) becomes “him”." }
          ] },

        { type: "speak", title: "Speaking — 5. In your own words, retell Joha’s story to your partner.", page: 70, source: "book",
          instructions: "You can start like this: “Once upon a time there was a poor man who lived in … . One day, while…”",
          dialogue: [],
          starters: ["Once upon a time there was a poor man who lived in …", "One day, while …", "Some people said …", "Joha asked his son to …", "Then, … After that, … Finally, …"],
          record: true },

        { type: "discuss", title: "Is Joha famous in your culture?", page: 70, source: "book",
          instructions: "Is Joha famous in your culture? What other stories do you know about him? Visit the school library or ask your parents and grandparents. Then, exchange your answers with the class.",
          prompts: ["Is Joha famous in your culture?", "What other stories do you know about him?"],
          image: null, emoji: "📚", seconds: 180 },

        { type: "activity", title: "Extra Practice: Step 1 — Report Joha’s words", source: "extra", stage: "guided",
          instructions: "Choose the correct reported sentence.", instructionsAr: "اختر الجملة الصحيحة بالكلام المنقول.",
          items: [
            { t: "mcq", q: "“Get on the donkey,” Joha said to his son.", options: ["Joha asked his son to get on the donkey.", "Joha asked his son get on the donkey.", "Joha asked his son to got on the donkey."], answer: 0, why: "asked + person + to + base verb." },
            { t: "mcq", q: "“Don’t listen to them,” Joha said to his son.", options: ["Joha told his son don’t listen to them.", "Joha told his son not to listen to them.", "Joha told his son to not listened to them."], answer: 1, why: "Negative → not to + base verb." },
            { t: "mcq", q: "“Close the door, please,” the teacher said to Ali.", options: ["The teacher asked Ali to close the door.", "The teacher asked Ali closing the door."], answer: 0, why: "A request → asked + person + to + base verb." },
            { t: "mcq", q: "“Don’t run in the corridor,” the teacher said to us.", options: ["The teacher told us not to run in the corridor.", "The teacher told us to don’t run in the corridor."], answer: 0, why: "not to + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "“Sit down,” the teacher said.", words: ["The", "teacher", "told", "us", "to", "sit", "down."], answer: ["The teacher told us to sit down."], why: "told + person + to + base verb." },
            { t: "order", q: "“Don’t be late,” Mum said to me.", words: ["Mum", "told", "me", "not", "to", "be", "late."], answer: ["Mum told me not to be late."], why: "told + person + not to + base verb." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix and report (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake. Then report the commands.", instructionsAr: "صحّح الخطأ ثم انقل الأوامر.",
          items: [
            { t: "fix", q: "He asked me {don’t} touch his phone.", answer: ["not to"], why: "Negative command → not to + base verb." },
            { t: "fix", q: "She told her brother {cleaning} his room.", answer: ["to clean"], why: "told + person + to + base verb." },
            { t: "short", q: "Report: “Open your books,” the teacher said to the students.", model: "The teacher told the students to open their books.", keywords: [["to open"], ["their"]], hint: "your → their." },
            { t: "short", q: "Report: “Don’t shout,” Dad said to my brother.", model: "Dad told my brother not to shout.", keywords: [["not to shout"]], hint: "Don’t → not to." }
          ] }
      ],
      game: { kind: "quiz", title: "Reported Speech Quiz",
        items: [
          { t: "choose", q: "“Get off the donkey.” → Joha asked his son (to get / get) off the donkey.", options: ["to get", "get"], answer: 0, why: "to + base verb." },
          { t: "choose", q: "“Don’t listen to them.” → He asked his son (not to / don’t) listen to them.", options: ["not to", "don’t"], answer: 0, why: "Negative → not to." },
          { t: "mcq", q: "“Listen to your father,” said his mother. → The mother asked her son to listen to ___ father.", options: ["your", "his", "my"], answer: 1, why: "your → his (the son’s father)." },
          { t: "mcq", q: "Which is direct speech?", options: ["“Close the door.”", "He asked me to close the door."], answer: 0, why: "Direct speech uses quotation marks." },
          { t: "mcq", q: "“Don’t disturb me,” he said. → My friend asked me ___ him.", options: ["not to disturb", "to not disturbing", "don’t disturb"], answer: 0, why: "not to + base verb." }
        ] },
      teacher: {
        notes: [
          "Warm-up: give a classroom command (Open the window). Ask: What did I ask Ahmed to do?",
          "Read the book box: direct speech vs reported speech. Then the two Joha examples.",
          "Teach: asked/told + person + (not) to + base verb. Point out pronoun changes (your → his, me → him).",
          "Book task: two sentences. Then pairs retell Joha’s story (exercise 5) using reported speech.",
          "Book tip: students ask family about other Joha stories and share them next lesson."
        ],
        pair: ["Simon says (reported): A gives a command; B reports it to the class: He told me to …", "Retell Joha’s story to your partner using: Joha asked his son to …"],
        group: ["Groups collect three Joha stories from home and choose one to tell the class."],
        quick: [
          { q: "Report: “Sit down,” the teacher said to us.", a: "The teacher told us to sit down." },
          { q: "Report: “Don’t run,” Dad said to me.", a: "Dad told me not to run." },
          { q: "What happens to “Don’t” in reported speech?", a: "It becomes “not to”." },
          { q: "Two ways to report words?", a: "Direct speech (quotation marks) and reported speech." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u9l3", num: 3, skill: "Listening",
      title: "Storytelling",
      pages: [71, 71],
      status: "complete",
      canDo: ["Talk about imaginary situations", "Express opinions"],
      goals: ["Match adjectives with nouns.", "Listen to a story and decide true or false.", "Discuss the story with a partner."],
      goalsAr: ["أطابق الصفات مع الأسماء.", "أستمع إلى قصة وأحدّد الصواب والخطأ.", "أناقش القصة مع زميلي."],
      warmup: {
        title: "Look at the picture",
        image: "crops/u9l3-warmup.jpg",
        emoji: "🔭",
        prompts: ["Who is this man? What is he doing?", "What do you think the story is about?"],
        seconds: 60
      },
      vocab: [
        { w: "proud", pos: "adjective", emoji: "😤", def: "thinking you are better or more important than other people (or feeling happy about something you did)", ex: "What is something you are proud of? why?", exFromBook: true, ar: "فخور / متكبّر" },
        { w: "modest", pos: "adjective", emoji: "🙂", def: "not talking much about how good or clever you are", ex: "The astronomer was a very modest person.", exFromBook: true, ar: "متواضع" },
        { w: "humble", pos: "adjective", emoji: "🙇", def: "not proud; not thinking you are better than others", ex: "My grandfather is a humble person.", exFromBook: false, ar: "متواضع" },
        { w: "ladder", pos: "noun", emoji: "🪜", def: "a set of steps you carry, used to climb up or down", ex: "He used a short ladder to climb out.", exFromBook: false, ar: "سُلّم" },
        { w: "alley", pos: "noun", emoji: "🏚️", def: "a narrow street between buildings", ex: "We walked down a narrow alley.", exFromBook: false, ar: "زقاق" },
        { w: "astronomer", pos: "noun", emoji: "🔭", def: "a scientist who studies the stars and planets", ex: "The astronomer was looking at the sky.", exFromBook: true, ar: "عالِم فلك" }
      ],
      sections: [
        { type: "activity", title: "1. Match the adjectives with the nouns they describe. The first one has been done for you.", page: 71, source: "book",
          instructions: "Match each adjective with a noun. proud → astronomer is done for you.", instructionsAr: "طابق كل صفة مع الاسم الذي تصفه. المثال الأول محلول.",
          image: "crops/u9l3-warmup.jpg",
          items: [
            { t: "match", q: "Adjectives → Nouns",
              pairs: [["1. proud", "astronomer"], ["2. humble", "person"], ["deep", "well"], ["clear", "sky"]],
              hint: "Which noun can be deep? Which can be clear?",
              why: "proud astronomer (the book’s example), humble person, deep well, clear sky." },
            { t: "table", q: "Now match “narrow” and “short” with “alley” and “ladder”. (Check with the story.)", open: true,
              head: ["Adjective", "Noun"],
              rows: [["narrow", { open: true, model: "alley (a narrow alley)" }], ["short", { open: true, model: "ladder (a short ladder)" }]] }
          ] },

        { type: "listen", title: "2. a. Listen and decide if the following statements are true (T) or false (F). Justify your answers.", page: 71, source: "book",
          needsAudio: true, track: "9.1",
          instructions: "Listen (track 9.1). Write T or F and a reason from the story.",
          items: [
            { t: "short", q: "1. The astronomer knew everything about farming. (T / F) Why?", open: true },
            { t: "short", q: "2. The astronomer was a very modest person. (T / F) Why?", open: true },
            { t: "short", q: "3. The astronomer’s neighbours did not like him. (T / F) Why?", open: true },
            { t: "short", q: "4. The neighbour saved the astronomer. (T / F) Why?", open: true }
          ] },

        { type: "discuss", title: "Speaking — 3. Discuss the following questions with your partner, then share your answers with the class.", page: 71, source: "book",
          prompts: ["What do you think of the astronomer? The neighbour?", "If you were the kind neighbour, would you save the astronomer Why? Why not?", "What is something you are proud of? why?", "What things are people proud of that they should not be? why?"],
          starters: ["I think the astronomer was …", "If I were the neighbour, I would … because …", "I am proud of … because …", "People shouldn’t be proud of … because …"],
          image: null, emoji: "💬", seconds: 240 },

        { type: "listen", title: "Extra Practice: The Proud Prince (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice story read by a computer voice. Listen and answer.",
          script: [
            { who: "Grandma", text: "Once upon a time, there was a proud prince. He thought he knew everything, and he never listened to anyone." },
            { who: "Grandma", text: "One clear night, he wanted to look at the stars from the palace roof. He found an old ladder in a narrow alley behind the kitchen." },
            { who: "Grandma", text: "A humble gardener saw him and said, “Look out, Your Highness! That ladder is broken.” But the prince laughed and started to climb." },
            { who: "Grandma", text: "Halfway up, the ladder broke and the prince fell into a soft pile of leaves. He was not hurt, but he felt very silly." },
            { who: "Grandma", text: "The next day, he thanked the gardener and asked him to teach him about plants. From that day on, the prince was modest and kind." }
          ],
          items: [
            { t: "mcq", q: "What was the prince like at the start?", options: ["modest", "proud", "kind"], answer: 1, why: "“There was a proud prince.”" },
            { t: "mcq", q: "Where did he find the ladder?", options: ["in the garden", "in a narrow alley", "on the roof"], answer: 1, why: "“He found an old ladder in a narrow alley behind the kitchen.”" },
            { t: "mcq", q: "Who warned the prince?", options: ["the king", "a humble gardener", "his teacher"], answer: 1, why: "“A humble gardener saw him and said, Look out…”" },
            { t: "mcq", q: "What happened to the ladder?", options: ["It broke.", "It was too short.", "It fell into a well."], answer: 0, why: "“Halfway up, the ladder broke.”" },
            { t: "mcq", q: "How was the prince at the end?", options: ["still proud", "modest and kind", "angry"], answer: 1, why: "“From that day on, the prince was modest and kind.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the astronomer picture. Teach astronomer, telescope, well, ladder.",
          "Exercise 1: the book prints the noun letters with errors (b is printed as d, and 3 appears twice). The example (proud → b) means proud → astronomer.",
          "Play track 9.1 (book audio) for the T/F statements. There is no answer key — students justify from the recording.",
          "Speaking: pairs discuss, then share. Encourage “If I were …, I would …” (imaginary situations).",
          "If the book audio is not available, use the Extra story (computer voice)."
        ],
        pair: ["Pairs discuss the four questions; each partner reports one answer to the class.", "A says an adjective; B says a noun that fits (deep → well)."],
        group: ["Groups retell the astronomer story in 4 pictures (after listening)."],
        quick: [
          { q: "What is the opposite of proud?", a: "modest / humble" },
          { q: "What does an astronomer study?", a: "The stars and planets / the sky." },
          { q: "Give a noun that can be “deep”.", a: "a well (or the sea)" }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u9l4", num: 4, skill: "Grammar",
      title: "Phrasal Verbs (with look)",
      pages: [72, 72],
      status: "complete",
      canDo: ["Use phrasal verbs with “look”", "Use prepositions"],
      goals: ["Know what a phrasal verb is.", "Use look out, look after, look for and look up.", "Choose the right preposition."],
      goalsAr: ["أعرف ما هو الفعل المركّب.", "أستخدم look out و look after و look for و look up.", "أختار حرف الجر المناسب."],
      warmup: {
        title: "LOOK!",
        image: null,
        emoji: "👀",
        prompts: ["What are you looking at now?", "What do you do when you lose your keys?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Phrasal Verbs (with look)", page: 72,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "A phrasal verb is a verb that is made up of a main verb together with a preposition. Often this gives the verb a new meaning. For example:",
              textAr: "الفعل المركّب (phrasal verb) هو فعل رئيسي مع حرف جر، وغالبًا يعطي الفعل معنى جديدًا.",
              examples: [
                "{s:The astronomer} {a:was} {v:looking at} the sky.",
                "{s:He} {a:was} {v:looking for} something."
              ] },
            { title: "Step 2 — The book’s LOOK! box",
              text: "Look out = be careful. Look after = take care of. Look for = search for. Look up = search in a reference book.",
              textAr: "Look out = انتبه، Look after = يعتني بـ، Look for = يبحث عن، Look up = يبحث في كتاب مرجعي (مثل القاموس).",
              examples: [
                "{v:Look out}! There’s a car!",
                "{s:I} {v:look after} {o:my little sister}.",
                "{s:I} {a:am} {v:looking for} {o:my keys}.",
                "{v:Look up} {o:the word} in a dictionary."
              ] },
            { title: "Step 3 — Same verb, new meaning", source: "extra",
              text: "The small word after look changes the meaning. look at = use your eyes; look for = try to find; look after = take care of.",
              textAr: "الكلمة الصغيرة بعد look تغيّر المعنى كليًا.",
              examples: [
                "{s:She} {v:looked at} the baby. (she saw him)",
                "{s:She} {v:looked after} the baby. (she took care of him)",
                "{s:She} {v:looked for} the baby’s toy. (she tried to find it)"
              ] },
            { title: "Step 4 — Where does the object go with look up?", source: "extra",
              text: "With look up, the object can go in the middle or at the end. With a pronoun (it, them), put it in the middle: look it up.",
              textAr: "مع look up يمكن أن يأتي المفعول به في الوسط أو في النهاية، أما الضمير مثل it فيأتي في الوسط: look it up.",
              examples: [
                "{v:Look up} {o:the word}. = {v:Look} {o:the word} {v:up}.",
                "{v:Look} {o:it} {v:up} in a dictionary. ✓ (not: look up it)"
              ] }
          ],
          table: {
            head: ["Phrasal verb", "Meaning"],
            rows: [["Look out", "be careful"], ["Look after", "take care of"], ["Look for", "search for"], ["Look up", "search in a reference book"]]
          },
          worked: {
            q: "Complete: I can’t find my pen. I’m looking ____ it. (after / out / up / for)",
            steps: [
              "What is the meaning? I want to find my pen = search for it.",
              "search for = look for."
            ],
            a: "{s:I}{a:’m} {v:looking for} {o:it}."
          },
          notes: [
            "look out = be careful (often with ! as a warning).",
            "look up a word → in a dictionary / online.",
            "look after = take care of (a pet, a baby, a house)."
          ] },

        { type: "activity", title: "Choose the right preposition to complete these phrasal verbs.", page: 72, source: "book", stage: "guided",
          instructions: "Use: after - out - up - for", instructionsAr: "اختر حرف الجر المناسب: after - out - up - for",
          items: [
            { t: "fill", q: "1. If you don’t know the meaning of a word, you should look it ____ in a dictionary.", answer: ["up"], bank: ["after", "out", "up", "for"], why: "look up = search in a reference book (a dictionary)." },
            { t: "fill", q: "2. Look ____! There’s a boy crossing the street.", answer: ["out"], bank: ["after", "out", "up", "for"], why: "Look out = be careful." },
            { t: "fill", q: "3. Can you look ____ my cat while I am on holiday?", answer: ["after"], bank: ["after", "out", "up", "for"], why: "look after = take care of." },
            { t: "fill", q: "4. He looked ____ his keys everywhere but couldn’t find them.", answer: ["for"], bank: ["after", "out", "up", "for"], why: "look for = search for." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Match the meaning", source: "extra", stage: "guided",
          instructions: "Match each phrasal verb with its meaning.", instructionsAr: "طابق كل فعل مركّب مع معناه.",
          items: [
            { t: "match", q: "Phrasal verb → meaning", pairs: [["look out", "be careful"], ["look after", "take care of"], ["look for", "search for"], ["look up", "search in a reference book"], ["look at", "use your eyes to see"]], why: "From the book’s LOOK! box (+ look at from the examples)." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Choose", source: "extra", stage: "guided",
          instructions: "Choose the correct phrasal verb.", instructionsAr: "اختر الفعل المركّب الصحيح.",
          items: [
            { t: "choose", q: "Nurses (look after / look for) sick people.", options: ["look after", "look for"], answer: 0, why: "Nurses take care of sick people." },
            { t: "choose", q: "(Look out / Look up)! The floor is wet.", options: ["Look out", "Look up"], answer: 0, why: "Look out = be careful." },
            { t: "choose", q: "I (looked up / looked after) the directions on my Maps application.", options: ["looked up", "looked after"], answer: 0, why: "look up = search for information (from Jassim’s opinion in Unit 7)." },
            { t: "choose", q: "We are (looking for / looking out) a new house.", options: ["looking for", "looking out"], answer: 0, why: "look for = search for." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix and write (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake. Then write your own sentences.", instructionsAr: "صحّح الخطأ ثم اكتب جملك.",
          items: [
            { t: "fix", q: "Can you look {for} my baby brother tonight? (take care of)", answer: ["after"], why: "take care of = look after." },
            { t: "fix", q: "I don’t know this word. I’ll look {up it}.", answer: ["it up"], why: "With a pronoun: look it up." },
            { t: "short", q: "Write a sentence with “look for”.", model: "I’m looking for my school bag.", open: true, hint: "I’m looking for …" },
            { t: "short", q: "Write a sentence with “look after”.", model: "I look after my little sister when Mum is busy.", open: true, hint: "I look after …" }
          ] }
      ],
      game: { kind: "sort", title: "Which look?", buckets: ["look for", "look after", "look up", "look out"],
        cards: [["my lost keys", 0], ["a job", 0], ["a sick grandmother", 1], ["my neighbour’s cat", 1], ["a new word", 2], ["a phone number", 2], ["“Be careful! A car!”", 3], ["“Watch out, the floor is wet!”", 3]] },
      teacher: {
        notes: [
          "Warm-up: act “look at”, “look for” (search your pockets), “look after” (hold a baby doll), “look out” (shout a warning).",
          "Read the book box and the LOOK! box. Stress: a small word changes the meaning.",
          "Book task: four sentences with after / out / up / for.",
          "Teach look it up (pronoun in the middle).",
          "Extra Steps 1–3, then the Grammar Lab."
        ],
        pair: ["Mime game: A mimes a look phrasal verb; B guesses and makes a sentence.", "Pairs write one sentence for each phrasal verb in the LOOK! box."],
        group: ["Groups make a poster: LOOK! with four pictures and four sentences."],
        quick: [
          { q: "Look after = ?", a: "take care of" },
          { q: "Look ___! There’s a car!", a: "out" },
          { q: "What do you do with a new word in a dictionary?", a: "Look it up." },
          { q: "What is a phrasal verb?", a: "A main verb + a preposition that often has a new meaning." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — WRITING ─────────────────────────
    {
      id: "u9l5", num: 5, skill: "Writing",
      title: "Think about a time when you helped someone",
      pages: [72, 72],
      status: "complete",
      canDo: ["Narrate events", "Describe past experiences"],
      goals: ["Plan a story about helping someone.", "Write a narrative paragraph.", "Describe your feelings."],
      goalsAr: ["أخطّط لقصة عن مساعدة شخص ما.", "أكتب فقرة سردية.", "أصف مشاعري."],
      warmup: {
        title: "Helping hands",
        image: null,
        emoji: "🤝",
        prompts: ["When did you last help someone?", "How did you feel?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "write", title: "5. Think about a time when you helped someone.", page: 72, source: "book",
          instructions: "• Where were you? • Whom did you help? • How did you help? • What was the result? Write a narrative paragraph describing this experience and explaining how you felt about helping this person.",
          wordBank: ["First,", "Then,", "Later,", "After that,", "Finally,", "happy", "proud", "worried", "relieved", "grateful"],
          frame: [
            { label: "Where were you?", hint: "Last summer, I was at …" },
            { label: "Whom did you help?", hint: "I saw an old man / a little boy / my neighbour …" },
            { label: "How did you help?", hint: "First, … Then, … Later, …" },
            { label: "What was the result? How did you feel?", hint: "Finally, … I felt … because …" }
          ],
          model: "Last winter, I was at the Avenues Mall with my family. Suddenly, I saw a little boy crying near the escalator. First, I asked him his name and told him not to worry. Then, I took him to the information desk with my father. Later, they made an announcement, and after ten minutes his mother came running. She hugged him and thanked us many times. I felt proud and happy because I helped a child find his family. I learned that a small action can make a big difference.",
          modelFromBook: false,
          checklist: ["I answered the four questions.", "I started each sentence with a capital letter.", "I ended each sentence with a full stop."],
          bookChecklist: [
            "Did I choose words and expressions that describe feelings?",
            "Did I include only important events and put them in order?",
            "Did I use sequencing words such as (first, then, later ..etc)?"
          ],
          minWords: 60 },

        { type: "activity", title: "Extra Practice: Put the events in order", source: "extra", stage: "guided",
          instructions: "Put the sentences in the right order.", instructionsAr: "رتّب الأحداث بالترتيب الصحيح.",
          items: [
            { t: "match", q: "Match each sequence word with an event from the model story.",
              pairs: [["First,", "I asked him his name."], ["Then,", "I took him to the information desk."], ["Later,", "they made an announcement."], ["Finally,", "his mother came and hugged him."]],
              why: "Sequence words show the order of events: first → then → later → finally." },
            { t: "mcq", q: "Which word describes a feeling?", options: ["escalator", "proud", "announcement"], answer: 1, why: "proud is a feeling." }
          ] }
      ],
      game: { kind: "sort", title: "Feeling or sequence word?", buckets: ["Feeling", "Sequence word"],
        cards: [["happy", 0], ["proud", 0], ["worried", 0], ["relieved", 0], ["first", 1], ["then", 1], ["later", 1], ["finally", 1]] },
      teacher: {
        notes: [
          "Warm-up: students share one time they helped someone (pairs, 1 minute each).",
          "Answer the four planning questions in the frame.",
          "Remind: only important events, in order, with sequence words and feelings (book checklist).",
          "Students write, then check with the checklist. Show the model (ours) after writing.",
          "Link: this is “Describe past experiences” — use the past simple."
        ],
        pair: ["Partner interview with the four questions; partner writes notes and gives them back.", "Pairs swap paragraphs and underline sequence words and feelings."],
        group: ["Groups choose one helping story and act it out in 1 minute."],
        quick: [
          { q: "Give three sequence words.", a: "first, then, later, after that, finally…" },
          { q: "Give two feeling words.", a: "e.g. happy, proud, worried, relieved" },
          { q: "Which tense do we use for a past experience?", a: "The past simple." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u9l6", num: 6, skill: "Reading",
      title: "The Pleasure of Reading",
      pages: [73, 74],
      status: "complete",
      canDo: ["Express opinions"],
      goals: ["Read an expository text about stories.", "Write the main idea of each paragraph.", "Find words in the text.", "Learn 7 new words."],
      goalsAr: ["أقرأ نصًا تفسيريًا عن القصص.", "أكتب الفكرة الرئيسية لكل فقرة.", "أجد كلمات في النص.", "أتعلّم 7 كلمات جديدة."],
      warmup: {
        title: "Before you read — Answer the following questions:",
        image: "crops/u9l6-warmup.jpg",
        emoji: "📚",
        prompts: ["How often do you read?", "What do you usually read? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "reach out", pos: "phrasal verb", emoji: "🤲", def: "to try to communicate with people or help them", ex: "Stories are a way to reach out to people.", exFromBook: true, ar: "يتواصل مع / يمدّ يده إلى" },
        { w: "deliver", pos: "verb", emoji: "📬", def: "to take a message or thing to someone", ex: "Stories are the most effective way to communicate and deliver messages from one human being to another.", exFromBook: true, ar: "يوصل / ينقل" },
        { w: "ancestor", pos: "noun", emoji: "👴", def: "a person in your family who lived a long time ago", ex: "Our ancestors gathered around the fire passing on their wisdom to the next generation through stories.", exFromBook: true, ar: "سَلَف / جدّ قديم" },
        { w: "wisdom", pos: "noun", emoji: "🦉", def: "good judgment and knowledge that comes from experience", ex: "Our ancestors gathered around the fire passing on their wisdom to the next generation.", exFromBook: true, ar: "حكمة" },
        { w: "trust", pos: "noun", emoji: "🤝", def: "believing that someone is honest and good", ex: "They quickly build trust between the speaker and the listener.", exFromBook: true, ar: "ثقة" },
        { w: "engage", pos: "verb", emoji: "🧲", def: "to get and keep someone’s interest or feelings", ex: "They increase interest, engage emotions, and allow the listener to be part of the story.", exFromBook: true, ar: "يُشرك / يجذب" },
        { w: "tool", pos: "noun", emoji: "🛠️", def: "something that helps you do a job", ex: "Stories are creative tools that engage our senses and emotions as well as our minds.", exFromBook: true, ar: "أداة" }
      ],
      sections: [
        { type: "reading", title: "2. Read the text and answer the questions that follow:", page: 73,
          instructions: "The Pleasure of Reading (Expository Text). Read the three paragraphs.",
          paras: [
            "We all grow up with stories. Stories of our family, stories from our friends and stories we read. There are stories we hear at school, at work, on television and in the movies. Stories are everywhere! They make us feel alive and inspire us. Our interest in stories is based on our need to understand life as knowledge and as personal and emotional experiences. Stories are a way to reach out to people.",
            "Stories are the most effective way to communicate and deliver messages from one human being to another. They have been shared since the beginning of time. Our ancestors gathered around the fire passing on their wisdom to the next generation through stories. Stories communicate values, not just skills. They help parents teach their children about life.",
            "Here are just a few of the reasons why stories are so powerful: They quickly build trust between the speaker and the listener. They increase interest, engage emotions, and allow the listener to be part of the story. They help people understand their world. They affect understanding, change behaviour and give people opportunities to remember and retell messages. Stories are creative tools that engage our senses and emotions as well as our minds. They help us see the world through someone else’s eyes."
          ],
          speaker: null },

        { type: "activity", title: "3. Write the main idea of each paragraph:", page: 74, source: "book",
          instructions: "Paragraph 1 is done for you.", instructionsAr: "اكتب الفكرة الرئيسية لكل فقرة. الفقرة الأولى محلولة.",
          items: [
            { t: "table", q: "Main ideas",
              head: ["Paragraph", "Main idea"],
              rows: [
                ["Paragraph 1", "Stories are part of our nature."],
                ["Paragraph 2", { open: true, model: "Stories are the most effective way to communicate and pass on messages, values and wisdom." }],
                ["Paragraph 3", { open: true, model: "Stories are powerful (the reasons why stories are so powerful)." }]
              ] }
          ] },

        { type: "activity", title: "4. Find words in the text which mean:", page: 74, source: "book",
          instructions: "Find the words in the text.", instructionsAr: "ابحث في النص عن الكلمات التي تعني ما يلي.",
          items: [
            { t: "fill", q: "• Great-grandparents: ____", answer: ["ancestors", "ancestor"], hint: "Paragraph 2.", why: "“Our ancestors gathered around the fire…”" },
            { t: "fill", q: "• good judgment: ____", answer: ["wisdom"], hint: "Paragraph 2.", why: "“…passing on their wisdom to the next generation.”" },
            { t: "fill", q: "• confidence between people: ____", answer: ["trust"], hint: "Paragraph 3.", why: "“They quickly build trust between the speaker and the listener.”" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "We only hear stories at school.", options: ["True", "False"], answer: 1, why: "We hear stories at school, at work, on television and in the movies. Stories are everywhere!" },
            { t: "mcq", q: "Stories have been shared since the beginning of time.", options: ["True", "False"], answer: 0, why: "Paragraph 2." },
            { t: "mcq", q: "Stories communicate skills but not values.", options: ["True", "False"], answer: 1, why: "“Stories communicate values, not just skills.”" },
            { t: "mcq", q: "Stories help us see the world through someone else’s eyes.", options: ["True", "False"], answer: 0, why: "The last sentence of paragraph 3." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the text.", instructionsAr: "أكمل بكلمة من النص.",
          items: [
            { t: "fill", q: "A good teacher can ____ students’ interest with a funny story.", answer: ["engage"], bank: ["engage", "deliver", "trust", "tool"], why: "engage = get and keep interest." },
            { t: "fill", q: "The postman will ____ the letter tomorrow.", answer: ["deliver"], bank: ["deliver", "engage", "wisdom", "ancestor"], why: "deliver = take something to someone." },
            { t: "fill", q: "A dictionary is a useful ____ for learning words.", answer: ["tool"], bank: ["tool", "trust", "wisdom", "deliver"], why: "tool = something that helps you do a job." },
            { t: "fill", q: "Volunteers ____ out to people who need help.", answer: ["reach"], bank: ["reach", "engage", "deliver", "trust"], why: "reach out = try to communicate with or help people." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: How often do you read? What do you usually read? Quick class survey.",
          "Pre-teach the 7 words. Read paragraph by paragraph; ask for one key word per paragraph.",
          "Exercise 3: model paragraph 1 (book example), then students write main ideas 2 and 3.",
          "Exercise 4: word hunt (ancestors, wisdom, trust).",
          "Note: the book’s word list marks “tool” as (V); in this text it is a noun (creative tools)."
        ],
        pair: ["A reads a sentence; B says which paragraph it comes from.", "Pairs list 3 reasons why stories are powerful (paragraph 3)."],
        group: ["Groups share a favourite story and say what message it delivers."],
        quick: [
          { q: "Where do we hear stories?", a: "At school, at work, on television and in the movies — everywhere." },
          { q: "What did our ancestors pass on through stories?", a: "Their wisdom." },
          { q: "Give one reason why stories are powerful.", a: "e.g. they build trust / engage emotions / help us understand the world." },
          { q: "A word that means “confidence between people”?", a: "trust" }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u9l7", num: 7, skill: "Writing",
      title: "Speaking and Writing: The Importance of Stories",
      pages: [74, 74],
      status: "complete",
      canDo: ["Express opinions", "Retell a story"],
      goals: ["Discuss the importance of stories in groups.", "Plan and write two paragraphs.", "Tell a good story to the class."],
      goalsAr: ["أناقش أهمية القصص في مجموعات.", "أخطط وأكتب فقرتين.", "أروي قصة جيدة للصف."],
      warmup: {
        title: "Stories in our life",
        image: null,
        emoji: "📖",
        prompts: ["What was your favourite story when you were a child?", "Who told it to you?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "Speaking and Writing — 5. a. In groups, discuss the following questions and take notes:", page: 74, source: "book",
          prompts: ["1. How important are stories in our life?", "2. In what situations do people usually tell stories?", "3. Can we use stories for communication? How?"],
          starters: ["Stories are important because …", "People tell stories when …", "For example, my grandmother …", "We can use stories to …"],
          image: null, emoji: "🗣️", seconds: 300 },

        { type: "write", title: "b. In your notebook, use your notes to plan and write two paragraphs about the importance of stories in our lives and how they help us to communicate with others.", page: 74, source: "book",
          instructions: "Use your group notes. Paragraph 1: the importance of stories in our lives. Paragraph 2: how stories help us communicate with others.",
          wordBank: ["Stories are important because", "For example,", "In addition,", "Moreover,", "deliver messages", "values", "wisdom", "trust", "reach out", "In conclusion,"],
          frame: [
            { label: "Paragraph 1 — The importance of stories", hint: "Start with a general idea: We all grow up with stories… Then examples and details." },
            { label: "Paragraph 2 — Stories help us communicate", hint: "Stories help us … For example, … In conclusion, …" }
          ],
          model: "Stories are an important part of everyone’s life. When we are young, our parents and grandparents tell us stories before we sleep. At school, we read stories in books, and at home we watch them on television. Stories teach us values like honesty and kindness, and they help us understand our feelings and the world around us.\n\nStories also help us communicate with others. When a teacher tells a story, students listen carefully and remember the message for a long time. For example, the story of Joha and his son teaches us that we cannot please everyone. In addition, sharing stories builds trust between friends and family. In conclusion, stories are powerful tools that bring people closer together.",
          modelFromBook: false,
          checklist: ["I wrote two paragraphs.", "Each paragraph has one main idea.", "I used linking words (for example, in addition, in conclusion)."],
          bookChecklist: [
            "Did I start with a general idea about the topic?",
            "Did I give examples, facts and details to support my main idea?",
            "Did I edit my writing, checking spelling and punctuation?",
            "Did I take care with my handwriting?"
          ],
          minWords: 100 },

        { type: "speak", title: "Tell a good story", page: 74, source: "book",
          instructions: "Think of a good story to tell your class. Think of the message behind the story. Check if your message has been clearly delivered.",
          dialogue: [],
          starters: ["Once upon a time, …", "One day, …", "Suddenly, …", "In the end, …", "The message of my story is …", "What do you think the message is?"],
          record: true },

        { type: "activity", title: "Extra Practice: General idea or detail?", source: "extra", stage: "guided",
          instructions: "Is the sentence a general idea or a detail/example?", instructionsAr: "هل الجملة فكرة عامة أم تفصيل/مثال؟",
          items: [
            { t: "mcq", q: "“Stories are an important part of everyone’s life.”", options: ["General idea", "Detail / example"], answer: 0, why: "It is a general idea about the topic — a good start." },
            { t: "mcq", q: "“For example, my grandfather tells us stories every Friday.”", options: ["General idea", "Detail / example"], answer: 1, why: "“For example” introduces a detail." },
            { t: "mcq", q: "“Stories help us communicate with others.”", options: ["General idea", "Detail / example"], answer: 0, why: "It is the main idea of paragraph 2." }
          ] }
      ],
      game: { kind: "quiz", title: "Writing Checklist Quiz",
        items: [
          { t: "mcq", q: "How should you start your writing?", options: ["With a general idea about the topic", "With a small detail", "With your name"], answer: 0, why: "Book checklist: start with a general idea." },
          { t: "mcq", q: "What supports your main idea?", options: ["Examples, facts and details", "Pictures only", "Questions"], answer: 0, why: "Book checklist." },
          { t: "mcq", q: "What should you check when you edit?", options: ["Spelling and punctuation", "The colour of the pen"], answer: 0, why: "Book checklist: spelling and punctuation." },
          { t: "mcq", q: "How many paragraphs should you write?", options: ["one", "two", "four"], answer: 1, why: "The book asks for two paragraphs." },
          { t: "mcq", q: "Which linking word introduces an example?", options: ["For example,", "In conclusion,", "However,"], answer: 0, why: "For example introduces an example." }
        ] },
      teacher: {
        notes: [
          "Groups discuss the three questions and take notes (one note-taker per group).",
          "Model the plan: paragraph 1 = importance, paragraph 2 = communication.",
          "Students write in their notebooks; then check with the 4-point book checklist (including handwriting).",
          "Book tip: students prepare a good story to tell the class, with a clear message.",
          "The model text is ours (not from the book)."
        ],
        pair: ["Pairs read each other’s paragraphs and find the general idea and one example.", "Story swap: tell your partner a short story; partner says the message."],
        group: ["Storytelling circle: each student tells a 1-minute story; the group guesses the message."],
        quick: [
          { q: "Name one situation when people tell stories.", a: "e.g. at bedtime, family gatherings, in class." },
          { q: "How do stories help us communicate?", a: "They deliver messages, build trust and engage emotions." },
          { q: "What is the last thing on the book checklist?", a: "Did I take care with my handwriting?" }
        ]
      }
    }
  ]
});

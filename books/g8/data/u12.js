// Unit 12 — Explore and Present (Module 4 "Exploring Abilities", printed pages 88–93, module cover p. 75)
BOOK.addUnit({
  id: "u12", num: 12, title: "Explore and Present", titleAr: "استكشف وقدّم",
  module: 4, moduleTitle: "Exploring Abilities",
  pages: [88, 93],
  cover: 75,
  status: "complete",
  outcomes: {
    "speech acts": ["Describe pictures", "Make guesses", "Express opinions", "Express obligation", "Present ideas", "Give a presentation"],
    "language structures": ["Use indefinite pronouns (anybody/everything ..etc)", "Use “need to” to describe obligation or lack of obligation", "Use the past of “need to”", "Use relative pronouns"],
    "module 4 — activities": ["Expressing opinions and voting", "Using creative thinking to come up with new things", "Planning for a project and a presentation"]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u12l1", num: 1, skill: "Reading",
      title: "Astronomy",
      pages: [88, 89],
      status: "complete",
      canDo: ["Describe pictures", "Make guesses"],
      goals: ["Guess what the text is about.", "Read about astronomy.", "Learn 7 new words.", "Answer questions about the text."],
      goalsAr: ["أخمّن موضوع النص.", "أقرأ عن علم الفلك.", "أتعلّم 7 كلمات جديدة.", "أجيب عن أسئلة حول النص."],
      warmup: {
        title: "Before you read",
        image: "crops/u12l1-warmup.jpg",
        emoji: "🔭",
        prompts: ["Look at the pictures and guess what the text is about."],
        seconds: 90
      },
      vocab: [
        { w: "universe", pos: "noun", emoji: "🌌", def: "everything that exists: all space, stars and planets", ex: "Mankind has long looked to the sky, trying to understand the universe.", exFromBook: true, ar: "الكون" },
        { w: "entirely", pos: "adverb", emoji: "💯", def: "completely; in every way", ex: "Unlike most other fields of science, astronomers are unable to observe a system entirely from birth to death.", exFromBook: true, ar: "بالكامل" },
        { w: "advanced", pos: "adjective", emoji: "🚀", def: "new and modern; at a high level", ex: "In the past, it was very difficult to study astronomy because people didn’t have advanced technology.", exFromBook: true, ar: "متطوّر / متقدّم" },
        { w: "notice", pos: "verb", emoji: "👁️", def: "to see or become aware of something", ex: "Early astronomers noticed patterns in the sky.", exFromBook: true, ar: "يلاحظ" },
        { w: "motion", pos: "noun", emoji: "🌀", def: "movement", ex: "They tried to organise them in order to follow the stars and planets and predict their motion.", exFromBook: true, ar: "حركة" },
        { w: "widespread", pos: "adjective", emoji: "🗺️", def: "found or done in many places", ex: "The movement of the stars and planets was studied by people around the world, but was widespread in China, Egypt, Greece, Central America, and India.", exFromBook: true, ar: "منتشر" },
        { w: "remote", pos: "adjective", emoji: "📡", def: "far away; controlled from far away", ex: "Most astronomy today is done by using remote telescopes - on the ground or in space.", exFromBook: true, ar: "بعيد / عن بُعد" }
      ],
      sections: [
        { type: "reading", title: "Astronomy (Expository Text)", page: 88,
          instructions: "Read the text and answer the following questions.",
          speaker: "Mohammed is a student in grade 8. His teacher asked him to prepare a project and a PowerPoint presentation about Astronomy. Here is what he found on the internet about Astronomy.",
          paras: [
            "Mankind has long looked to the sky, trying to understand the universe. Astronomy is defined as “the study of stars, planets and space.”",
            "Historically, astronomy has focused on observations of what appears in the sky. Unlike most other fields of science, astronomers are unable to observe a system [[entirely]] from birth to death. The life of stars and galaxies is millions to billions of years.",
            "In the past, it was very difficult to study astronomy because people didn’t have advanced technology or the necessary equipment to see distant things.",
            "Inventing the telescope helped us discover our universe, solar system and galaxies. Early astronomers noticed patterns in the sky. They tried to organise them in order to follow the stars and planets and predict their motion. The movement of the stars and planets was studied by people around the world, but was widespread in China, Egypt, Greece, Central America, and India.",
            "Most astronomy today is done by using [[remote]] telescopes - on the ground or in space. They are controlled by computers, with astronomers somewhere far away studying data and images.",
            "Since the beginning of digital photography, astronomers have provided amazing pictures of space. Astronomers and space flight programmes have also contributed to the study of our own planet. When missions travelled to the Moon and beyond, they looked back and snapped great images of The Earth from space."
          ] },

        { type: "activity", title: "Consult the dictionary for the meanings of the underlined words “entirely” and “remote”.", page: 88, source: "book",
          instructions: "Use a dictionary. Then choose the meaning.", instructionsAr: "استخدم القاموس ثم اختر المعنى.",
          items: [
            { t: "mcq", q: "entirely (paragraph 2) means …", options: ["completely", "quickly", "never", "nearly"], answer: 0, why: "entirely = completely, from the beginning to the end." },
            { t: "mcq", q: "remote (paragraph 5) means …", options: ["very old", "far away / controlled from far away", "very big", "broken"], answer: 1, why: "remote telescopes are far away and controlled by computers, “with astronomers somewhere far away”." }
          ] },

        { type: "activity", title: "2. Read the text and answer the following questions:", page: 89, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What did astronomy focus on in the beginning?",
              model: "Astronomy focused on observations of what appears in the sky.",
              keywords: [["observ"], ["sky"]], hint: "Read paragraph 2 (Historically, …)." },
            { t: "short", q: "2. How can satellites help us to study our planet?",
              model: "Missions and telescopes in space can look back and snap great images of the Earth from space, so astronomers and space flight programmes can study our own planet.",
              keywords: [["image", "picture", "photo"], ["earth", "planet"]], hint: "Read the last paragraph." },
            { t: "short", q: "3. What is the theme of the passage?",
              model: "Astronomy: the study of stars, planets and space, and how it developed from observing the sky to using telescopes and remote telescopes.",
              keywords: [["astronomy", "stars", "space"]], hint: "What is the whole text about?" },
            { t: "short", q: "4. In your opinion, how can astronomy help us to protect the Earth?",
              model: "Possible answer: Pictures from space show us changes in the weather, the seas and the forests, so we can protect the Earth.",
              open: true, hint: "Think about images of the Earth from space." }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "Astronomy is the study of stars, planets and space.", options: ["True", "False"], answer: 0, why: "“Astronomy is defined as the study of stars, planets and space.”" },
            { t: "mcq", q: "Astronomers can watch a star from its birth to its death.", options: ["True", "False"], answer: 1, why: "They are unable to observe a system entirely from birth to death." },
            { t: "mcq", q: "In the past, people had advanced technology.", options: ["True", "False"], answer: 1, why: "“People didn’t have advanced technology.”" },
            { t: "mcq", q: "Today, remote telescopes are controlled by computers.", options: ["True", "False"], answer: 0, why: "“They are controlled by computers.”" },
            { t: "mcq", q: "Mohammed found the information in a book.", options: ["True", "False"], answer: 1, why: "He found it on the internet." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل الجمل بالكلمات.",
          items: [
            { t: "fill", q: "1. Did you ____ the new picture on the wall?", answer: ["notice"], bank: ["notice", "motion", "advanced", "universe", "widespread"], why: "notice = see / become aware of." },
            { t: "fill", q: "2. There are billions of stars in the ____.", answer: ["universe"], bank: ["notice", "motion", "advanced", "universe", "widespread"], why: "The universe = all space and everything in it." },
            { t: "fill", q: "3. Phones today have very ____ technology.", answer: ["advanced"], bank: ["notice", "motion", "advanced", "universe", "widespread"], why: "advanced = modern, high level." },
            { t: "fill", q: "4. The camera can follow the ____ of the planets.", answer: ["motion"], bank: ["notice", "motion", "advanced", "universe", "widespread"], why: "motion = movement." },
            { t: "fill", q: "5. Football is ____ all over the world.", answer: ["widespread"], bank: ["notice", "motion", "advanced", "universe", "widespread"], why: "widespread = found in many places." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the three pictures (the solar system, a telescope, an astronaut with a camera). Students guess the topic: astronomy.",
          "Read the intro: Mohammed is preparing a project and a PowerPoint presentation (link to Project 3, p. 94).",
          "Pre-teach the 7 words. Students check “entirely” and “remote” in a dictionary as the book asks.",
          "Read paragraph by paragraph: past → telescope → remote telescopes → pictures from space.",
          "Questions 1–3 from the text; question 4 is the students’ opinion."
        ],
        pair: ["A reads a sentence with a gap, B says the missing word.", "Pairs make a timeline: past → telescope → remote telescopes → digital photos."],
        group: ["Groups design one PowerPoint slide about astronomy (title + 3 points + a picture)."],
        quick: [
          { q: "What is astronomy?", a: "The study of stars, planets and space." },
          { q: "Why was astronomy difficult in the past?", a: "People didn’t have advanced technology or equipment." },
          { q: "What does “remote” mean?", a: "Far away / controlled from far away." },
          { q: "Where was the study of the stars widespread?", a: "China, Egypt, Greece, Central America and India." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u12l2", num: 2, skill: "Grammar",
      title: "Indefinite Pronouns",
      pages: [89, 89],
      status: "complete",
      canDo: ["Use indefinite pronouns (anybody/everything ..etc)"],
      goals: ["Learn every-, some-, any-, no- + body / where / thing.", "Use anything / nobody correctly.", "Write sentences about your friends and family."],
      goalsAr: ["أتعلّم every و some و any و no مع body و where و thing.", "أستخدم anything و nobody بشكل صحيح.", "أكتب جملًا عن أصدقائي وعائلتي."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "👥",
        prompts: ["Is there anybody in your family who likes astronomy?", "Is there anything in the sky you want to see?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Indefinite Pronouns", page: 89,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "We use indefinite pronouns to refer to people or things without saying exactly who or what they are.",
              textAr: "نستخدم الضمائر غير المحدّدة للإشارة إلى أشخاص أو أشياء دون أن نقول من هم أو ما هي بالضبط.",
              examples: ["{s:Everyone} in my class {v:likes} the photos of the stars.", "{s:No one} {v:has walked} on Mars."] },
            { title: "Step 2 — Person, place, thing (Extra)", source: "extra",
              text: "-body = a person (-one also means a person: everyone, someone). -where = a place. -thing = a thing.",
              textAr: "‎-body للأشخاص، و ‎-where للأماكن، و ‎-thing للأشياء.",
              examples: ["{s:Somebody} {v:is} at the door. (person)", "{s:I} {v:looked} {t:everywhere} for my keys. (place)", "{s:I} {v:want} {o:something} to drink. (thing)"] },
            { title: "Step 3 — some / any / no (Extra)", source: "extra",
              text: "some- in positive sentences. any- in questions and negative sentences. no- has a negative meaning, so the verb stays positive.",
              textAr: "‎some- في الجمل المثبتة، و ‎any- في الأسئلة والنفي، و ‎no- معناها منفي فيبقى الفعل مثبتًا.",
              examples: ["There {v:is} {o:something} in the box.", "{a:Is} there {o:anything} in the box?", "There {n:isn’t} {o:anything} in the box. = There {v:is} {o:nothing} in the box."] },
            { title: "Step 4 — Singular verb (Extra)", source: "extra",
              text: "Indefinite pronouns take a singular verb (is, has, wants, lives).",
              textAr: "تأتي بعد الضمائر غير المحدّدة أفعال مفردة مثل is و wants.",
              examples: ["{s:Everybody} {v:wants} to see the pictures. (not want)", "{s:Everything} in this museum {v:is} from space. (not are)"] },
            { title: "Step 5 — Be careful! (Extra)", source: "extra",
              text: "Don’t use two negatives together.",
              textAr: "لا نستخدم نفيين معًا في الجملة نفسها.",
              examples: ["✗ There {n:isn’t nothing} in the fridge. → ✓ There {n:isn’t} {o:anything} in the fridge. / There {v:is} {o:nothing} in the fridge."] }
          ],
          table: {
            head: ["", "Person", "Place", "Thing"],
            rows: [["every", "everybody", "everywhere", "everything"], ["some", "somebody", "somewhere", "something"], ["any", "anybody", "anywhere", "anything"], ["no", "nobody", "nowhere", "nothing"]]
          },
          worked: {
            q: "Complete: There is ____ living on the moon. There are no animals either. (everybody / nobody / anything)",
            steps: ["Is it a person or a thing? living → a person (people).", "The meaning is negative: no people on the moon.", "The verb “is” is positive → use no-: nobody."],
            a: "There is nobody living on the moon."
          },
          notes: ["every- = all; some- = positive; any- = questions and negatives; no- = negative meaning with a positive verb.", "Indefinite pronouns take a singular verb: Everybody is …"] },

        { type: "activity", title: "Complete the following sentences using everything, anything, everybody and nobody:", page: 89, source: "book", stage: "guided",
          instructions: "Tap a word chip. You will use one word twice.", instructionsAr: "اختر الكلمة المناسبة. ستستخدم كلمة واحدة مرتين.",
          items: [
            { t: "fill", q: "1. I am excited. Is there ____ I can do to help with this project?", answer: ["anything"], bank: ["everything", "anything", "everybody", "nobody"],
              hint: "A question about a thing.", why: "Questions → any-; a thing → anything." },
            { t: "fill", q: "2. ____ in this museum is from the outer space.", answer: ["Everything"], bank: ["everything", "anything", "everybody", "nobody"],
              hint: "All the things in the museum.", why: "All the things → Everything (+ singular verb is)." },
            { t: "fill", q: "3. ____ is happy with the wonderful pictures of the Earth.", answer: ["Everybody"], bank: ["everything", "anything", "everybody", "nobody"],
              hint: "All the people.", why: "The pictures are wonderful → all the people are happy → Everybody." },
            { t: "fill", q: "4. There is ____ living on the moon. There are no animals either.", answer: ["nobody"], bank: ["everything", "anything", "everybody", "nobody"],
              hint: "No people live on the moon.", why: "Positive verb (is) + negative meaning → nobody." },
            { t: "fill", q: "5. ____ wants to travel in a spaceship to explore space.", answer: ["Everybody", "Nobody"], bank: ["everything", "anything", "everybody", "nobody"],
              hint: "A person. Is it all people or no people? Both are possible.", why: "Everybody wants to … (all people) or Nobody wants to … (no people): both are correct English. The verb wants is singular." }
          ] },

        { type: "write", title: "4. Write four sentences about yourself, friends or family using indefinite pronouns.", page: 89, source: "book",
          instructions: "Write four sentences about yourself, friends or family using indefinite pronouns.",
          wordBank: ["everybody", "somebody", "anybody", "nobody", "everywhere", "somewhere", "anywhere", "nowhere", "everything", "something", "anything", "nothing"],
          frame: [
            { label: "Sentence 1", hint: "Everybody in my family …" },
            { label: "Sentence 2", hint: "I want to go somewhere …" },
            { label: "Sentence 3", hint: "My friend doesn’t … anything …" },
            { label: "Sentence 4", hint: "Nobody in my class …" }
          ],
          model: "Everybody in my family loves the beach. My brother can fix anything. I want to travel somewhere cold next summer. Nobody in my class likes getting up early.",
          modelFromBook: false,
          checklist: ["I wrote four sentences.", "I used a different indefinite pronoun in each sentence.", "I used a singular verb after everybody / nobody …", "I did not use two negatives together."],
          minWords: 20 },

        { type: "activity", title: "Extra Practice: Step 1 — Person, place or thing?", source: "extra", stage: "guided",
          instructions: "Choose the right pronoun.", instructionsAr: "اختر الضمير المناسب.",
          items: [
            { t: "mcq", q: "I can’t find my phone ____.", options: ["anything", "anywhere", "anybody"], answer: 1, why: "A place + negative → anywhere." },
            { t: "mcq", q: "____ is knocking at the door.", options: ["Somebody", "Something", "Somewhere"], answer: 0, why: "A person + positive → Somebody." },
            { t: "mcq", q: "I’m hungry. I want ____ to eat.", options: ["somebody", "something", "somewhere"], answer: 1, why: "A thing + positive → something." },
            { t: "mcq", q: "Did ____ call me?", options: ["anybody", "anything", "nowhere"], answer: 0, why: "A person + question → anybody." },
            { t: "mcq", q: "There is ____ to sit. All the chairs are taken.", options: ["nowhere", "nobody", "nothing"], answer: 0, why: "A place + negative meaning → nowhere." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "توجد كلمة خطأ. اكتب التصحيح.",
          items: [
            { t: "fix", q: "There isn’t {nothing} in the fridge.", answer: ["anything"], hint: "No double negatives.", why: "isn’t + anything (or: There is nothing …)." },
            { t: "fix", q: "Everybody {are} happy today.", answer: ["is"], hint: "Indefinite pronouns take a singular verb.", why: "Everybody is …" },
            { t: "fix", q: "{Anybody} is knocking at the door. Can you open it?", answer: ["Somebody", "Someone"], hint: "A positive sentence → some-.", why: "In positive sentences we use somebody: Somebody is knocking at the door." },
            { t: "fix", q: "I looked {everything} for my keys.", answer: ["everywhere"], hint: "A place.", why: "Places → -where: everywhere." },
            { t: "short", q: "Write a sentence with “something”.", model: "I want to buy something for my mother.", open: true, hint: "I want … something …" }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Person, place or thing?",
        buckets: ["Person", "Place", "Thing"],
        cards: [["everybody", 0], ["somebody", 0], ["nobody", 0], ["everywhere", 1], ["anywhere", 1], ["nowhere", 1], ["something", 2], ["anything", 2], ["nothing", 2]] },
      teacher: {
        notes: [
          "Draw the book table on the board: rows every / some / any / no; columns person / place / thing.",
          "Teach the meaning of each row with mime: every = all (wide arms), no = zero (shake head).",
          "Do the 5 book sentences; number 5 can be Everybody or Nobody.",
          "Students write four sentences about themselves, friends or family.",
          "Weak students: Extra Steps 1–2."
        ],
        pair: ["A says a row and a column (some + place), B says the word (somewhere) and makes a sentence."],
        group: ["“Find somebody who …” class survey using indefinite pronouns."],
        quick: [
          { q: "Which word is for a place: everybody or everywhere?", a: "everywhere" },
          { q: "Complete: Is there ___ I can do to help?", a: "anything" },
          { q: "Correct: There isn’t nothing here.", a: "There isn’t anything here. / There is nothing here." },
          { q: "Everybody is / are happy?", a: "is" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u12l3", num: 3, skill: "Listening",
      title: "Exploring Project Work",
      pages: [90, 90],
      status: "complete",
      canDo: ["Express opinions", "Make guesses"],
      goals: ["Talk about why projects are important.", "Listen to interviews about projects.", "Write an opinion paragraph about saving our planet."],
      goalsAr: ["أتحدّث عن أهمية المشاريع.", "أستمع إلى مقابلات عن المشاريع.", "أكتب فقرة رأي عن إنقاذ كوكبنا."],
      warmup: {
        title: "Listening",
        image: "crops/u12l3-warmup.jpg",
        emoji: "♻️",
        prompts: ["Why are projects important?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "1. Why are projects important?", page: 90, source: "book",
          prompts: ["Why are projects important?", "Mohamed is interviewing Noura from Kuwait and Simon from the UK to learn about their projects.", "Refer to Project 3 on page 94 to see the task we are working on in this unit."],
          image: null, emoji: "💬" },

        { type: "listen", title: "2. a. Listen to the interviews. Which projects are Noura and Simon doing?", page: 90, source: "book",
          needsAudio: true, track: "12.1",
          instructions: "Listen (track 12.1). Tick the projects that Noura and Simon are doing.",
          items: [
            { t: "table", q: "Which projects are Noura and Simon doing?", open: true,
              head: ["Project", "Noura / Simon / —"],
              rows: [["Recycling mobile phones", { open: true }], ["Tree planting", { open: true }], ["Helping save wild animals", { open: true }], ["Reusing paper", { open: true }]] }
          ] },

        { type: "listen", title: "b. Answer the following questions:", page: 90, source: "book",
          needsAudio: true, track: "12.1",
          instructions: "Listen again and answer.",
          items: [
            { t: "short", q: "1. Why are Noura and Simon doing these projects?", open: true, hint: "Listen for “because …”." },
            { t: "short", q: "2. Who is helping them with their projects?", open: true, hint: "Listen for people: teachers? parents? friends?" },
            { t: "short", q: "3. What are the benefits of their projects?", open: true, hint: "How do the projects help people or the planet?" }
          ] },

        { type: "write", title: "Writing: 3. There are many ways to help save the environment. Write an opinion paragraph about what people should do to help save our planet.", page: 90, source: "book",
          instructions: "Write an opinion paragraph about what people should do to help save our planet. (save water / recycle / turn off devices / short showers…etc)",
          wordBank: ["In my opinion,", "people should", "We need to", "First,", "Also,", "For example,", "because", "In conclusion,"],
          frame: [
            { label: "Topic sentence", hint: "In my opinion, everybody should help to save our planet." },
            { label: "Ideas and reasons", hint: "First, we should save water … Also, … For example, …" },
            { label: "Concluding sentence", hint: "In conclusion, small actions can make a big difference." }
          ],
          model: "In my opinion, everybody should help to save our planet. First, people should save water by taking short showers and turning off the tap. Also, we need to recycle paper, plastic and old mobile phones, because rubbish harms animals and the sea. For example, my class collects paper every week. Finally, we should turn off devices when we don’t use them. In conclusion, small actions can make a big difference to our planet.",
          modelFromBook: false,
          checklist: ["I wrote a topic sentence.", "I used should / need to.", "I gave reasons with because.", "I wrote a concluding sentence."],
          bookChecklist: ["Did I explain my ideas clearly?", "Did I punctuate my sentences correctly?"],
          minWords: 60 },

        { type: "listen", title: "Extra Practice: The Beach Clean-Up (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Mohamed", text: "Hello, Fahad. Can you tell us about your project?" },
            { who: "Fahad", text: "Sure. My class is cleaning the beach near our school. We go every Saturday morning." },
            { who: "Mohamed", text: "Why did you choose this project?" },
            { who: "Fahad", text: "Because there was a lot of plastic on the sand, and plastic is dangerous for fish and birds." },
            { who: "Mohamed", text: "Who helps you?" },
            { who: "Fahad", text: "Our science teacher and some parents. Last week, we collected twenty bags of rubbish!" },
            { who: "Mohamed", text: "What's next?" },
            { who: "Fahad", text: "We need to make posters so that everybody keeps the beach clean." }
          ],
          items: [
            { t: "mcq", q: "What is Fahad’s project?", options: ["planting trees", "cleaning the beach", "recycling phones", "reusing paper"], answer: 1, why: "“My class is cleaning the beach near our school.”" },
            { t: "mcq", q: "When do they go?", options: ["every Friday evening", "every Saturday morning", "every day", "once a month"], answer: 1, why: "“We go every Saturday morning.”" },
            { t: "mcq", q: "Why did they choose this project?", options: ["Plastic is dangerous for fish and birds.", "The beach is far away.", "They like swimming.", "The teacher was angry."], answer: 0, why: "“… plastic is dangerous for fish and birds.”" },
            { t: "mcq", q: "Who helps them?", options: ["their science teacher and some parents", "the police", "Mohamed", "nobody"], answer: 0, why: "“Our science teacher and some parents.”" },
            { t: "mcq", q: "How many bags of rubbish did they collect last week?", options: ["ten", "twelve", "twenty", "two"], answer: 2, why: "“… we collected twenty bags of rubbish!”" },
            { t: "fill", q: "We need to make ____ so that everybody keeps the beach clean.", answer: ["posters"], bank: ["posters", "bags", "boats"], why: "“We need to make posters …”" }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Good for the planet?",
        buckets: ["We should …", "We shouldn’t …"],
        cards: [["take short showers", 0], ["recycle paper", 0], ["turn off devices", 0], ["plant trees", 0], ["leave the tap running", 1], ["throw plastic on the beach", 1], ["waste food", 1], ["leave the lights on", 1]] },
      teacher: {
        notes: [
          "Discuss: Why are projects important? (we learn, we help the community, we work in teams).",
          "Tell students about Project 3 (p. 94): this unit prepares them for it.",
          "Play track 12.1 (book recording) for 2a and 2b. No answer key here: check orally with what students heard.",
          "Writing: brainstorm ideas (save water, recycle, turn off devices, short showers) and write an opinion paragraph.",
          "If the audio is not available, use the Extra Practice script (computer voice)."
        ],
        pair: ["A is Mohamed (interviewer), B describes a school project. Swap."],
        group: ["Groups choose one environment project for the school and present three reasons."],
        quick: [
          { q: "Name two projects from the book list.", a: "e.g. Tree planting, Recycling mobile phones." },
          { q: "Give one way to save our planet.", a: "e.g. Take short showers / recycle." },
          { q: "What two things does the checklist ask?", a: "Did I explain my ideas clearly? Did I punctuate my sentences correctly?" }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — GRAMMAR ─────────────────────────
    {
      id: "u12l4", num: 4, skill: "Grammar",
      title: "Need to …",
      pages: [91, 91],
      status: "complete",
      canDo: ["Use “need to” to describe obligation or lack of obligation", "Use the past of “need to”", "Express obligation"],
      goals: ["Say what is necessary with need to.", "Say what is not necessary with don’t / doesn’t need to.", "Use didn’t need to for the past."],
      goalsAr: ["أعبّر عن الضرورة بـ need to.", "أعبّر عن عدم الضرورة بـ don’t / doesn’t need to.", "أستخدم didn’t need to للماضي."],
      warmup: {
        title: "Grammar in context",
        image: null,
        emoji: "🐱",
        prompts: ["The cats are hungry. What do you need to do?", "The test is cancelled. Do you need to study?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Need to …", page: 91,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "I need to do something = it is necessary for me to do it. e.g.: I need to eat/ learn/ work … Negative: Present → doesn’t/ don’t need to. Past → didn’t need to.",
              textAr: "I need to do something تعني أنه من الضروري أن أفعله. النفي في المضارع: doesn’t / don’t need to، وفي الماضي: didn’t need to.",
              examples: ["{s:I} {a:need to} {v:eat}.", "{s:I} {a:need to} {v:learn}.", "{s:I} {a:need to} {v:work}."] },
            { title: "Step 2 — he / she / it (Extra)", source: "extra",
              text: "With he, she and it: needs to (positive) and doesn’t need to (negative). After need to, use the base verb.",
              textAr: "مع he و she و it نقول needs to في الإثبات و doesn’t need to في النفي، وبعدها الفعل الأساسي.",
              examples: ["{s:She} {a:needs to} {v:study} for the test.", "{s:He} {n:doesn’t need to} {v:study}. The test is cancelled."] },
            { title: "Step 3 — not necessary (Extra)", source: "extra",
              text: "don’t / doesn’t need to = it is NOT necessary. You can do it, but you don’t have to.",
              textAr: "don’t need to تعني «ليس ضروريًا»، وليست «ممنوعًا».",
              examples: ["The museum offers free entry. {s:Visitors} {n:don’t need to} {v:pay}."] },
            { title: "Step 4 — The past: needed to / didn’t need to (Extra)", source: "extra",
              text: "Past positive: needed to + base verb. Past negative: didn’t need to + base verb (the same for all subjects).",
              textAr: "الماضي المثبت: needed to، والماضي المنفي: didn’t need to مع جميع الفاعلين.",
              examples: ["{s:The iPad} was broken. {s:The technician} {a:needed to} {v:fix} it.", "{s:The iPad} was working well. {s:The technician} {n:didn’t need to} {v:fix} it."] },
            { title: "Step 5 — Be careful! (Extra)", source: "extra",
              text: "Keep to before the verb, and use the base verb after didn’t.",
              textAr: "لا تحذف to قبل الفعل، واستخدم الفعل الأساسي بعد didn’t.",
              examples: ["✗ I need {n:study}. → ✓ I {a:need to} {v:study}.", "✗ He didn’t {n:needed} to fix it. → ✓ He {n:didn’t need to} {v:fix} it.", "✗ She {n:don’t} need to pay. → ✓ She {n:doesn’t need to} {v:pay}."] }
          ],
          table: {
            head: ["", "Negative"],
            rows: [["Present", "doesn’t/ don’t need to"], ["Past", "didn’t need to"]]
          },
          worked: {
            q: "The iPad was working well. (fix) → The technician didn’t need to ____.",
            steps: ["The iPad was working well → it was not necessary to fix it.", "It is in the past (was) → didn’t need to.", "After need to → the base verb: fix + it."],
            a: "The technician didn’t need to fix it."
          },
          notes: ["need to = necessary; don’t / doesn’t need to = not necessary; didn’t need to = not necessary in the past.", "he / she / it: needs to / doesn’t need to."] },

        { type: "activity", title: "Complete with need to / don’t need to / didn’t need to.", page: 91, source: "book", stage: "guided",
          instructions: "Read the situation. Use the verb in brackets.", instructionsAr: "اقرأ الموقف واستخدم الفعل بين القوسين.",
          items: [
            { t: "short", q: "1. The cats are hungry. (need to / feed) → I need to …",
              model: "I need to feed them. / I need to feed the cats.",
              keywords: [["need to feed"]], hint: "The cats are hungry → it is necessary." },
            { t: "short", q: "2. The iPad was working well. (fix) → The technician didn’t need to …",
              model: "The technician didn’t need to fix it.",
              keywords: [["fix"]], hint: "Past and not necessary." },
            { t: "short", q: "3. The museum offers free entry. (pay) → Visitors …",
              model: "Visitors don’t need to pay.",
              keywords: [["don’t need to pay", "don't need to pay", "do not need to pay"]], hint: "Free entry → paying is not necessary. Visitors = they." },
            { t: "short", q: "4. The test is cancelled. (study) → He …",
              model: "He doesn’t need to study.",
              keywords: [["doesn’t need to study", "doesn't need to study", "does not need to study"]], hint: "Present, he → doesn’t need to." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the right form", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "It’s raining. You ____ take an umbrella.", options: ["need to", "don’t need to", "didn’t need to"], answer: 0, why: "Rain → an umbrella is necessary." },
            { t: "mcq", q: "Tomorrow is a holiday. We ____ go to school.", options: ["need to", "don’t need to", "doesn’t need to"], answer: 1, why: "Holiday → not necessary; we → don’t need to." },
            { t: "mcq", q: "Sara ____ wear a coat. It’s very cold.", options: ["needs to", "need", "don’t need to"], answer: 0, why: "Sara = she → needs to." },
            { t: "mcq", q: "Yesterday, I ____ cook. Mum made dinner.", options: ["don’t need to", "didn’t need to", "need to"], answer: 1, why: "Yesterday + not necessary → didn’t need to." },
            { t: "mcq", q: "My brother doesn’t need to ____ the car. It is clean.", options: ["wash", "washes", "washing"], answer: 0, why: "need to + base verb: wash." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "She {don’t} need to pay for the ticket.", answer: ["doesn’t", "doesn't", "does not"], hint: "she → does.", why: "She doesn’t need to pay." },
            { t: "fix", q: "We didn’t need to {brought} food.", answer: ["bring"], hint: "Base verb after need to.", why: "didn’t need to + base verb: bring." },
            { t: "fix", q: "I need {study} for the exam.", answer: ["to study"], hint: "need + to + verb.", why: "I need to study." },
            { t: "fix", q: "He didn’t {needed} to wait.", answer: ["need"], hint: "After didn’t → base form.", why: "didn’t need to." },
            { t: "short", q: "Write one thing you need to do today and one thing you don’t need to do.", model: "I need to do my homework. I don’t need to wake up early tomorrow.", open: true, hint: "I need to … / I don’t need to …" }
          ] }
      ],
      game: { kind: "quiz", title: "Need to Quiz",
        items: [
          { t: "choose", q: "The cats are hungry. I (need to / don’t need to) feed them.", options: ["need to", "don’t need to"], answer: 0, why: "Necessary." },
          { t: "choose", q: "Entry is free. Visitors (need to / don’t need to) pay.", options: ["need to", "don’t need to"], answer: 1, why: "Not necessary." },
          { t: "choose", q: "The test is cancelled. He (doesn’t / don’t) need to study.", options: ["doesn’t", "don’t"], answer: 0, why: "he → doesn’t." },
          { t: "choose", q: "Last week, we (didn’t need to / don’t need to) wear uniforms.", options: ["didn’t need to", "don’t need to"], answer: 0, why: "Last week → past." },
          { t: "choose", q: "I need to (buy / buying) a new pen.", options: ["buy", "buying"], answer: 0, why: "need to + base verb." }
        ] },
      teacher: {
        notes: [
          "Show the four book pictures (hungry cats, a working iPad, a free museum, a cancelled test). Ask: Is it necessary?",
          "Teach the box: need to = necessary; the negative table: don’t / doesn’t need to (present), didn’t need to (past).",
          "Do the four book items orally, then in writing.",
          "Contrast with must not: don’t need to = not necessary, NOT “not allowed”."
        ],
        pair: ["A gives a situation (It’s cold), B answers with need to / don’t need to (You need to wear a jacket)."],
        group: ["Groups list what they need to / don’t need to do for Project 3."],
        quick: [
          { q: "What does “need to” mean?", a: "It is necessary." },
          { q: "Negative of “He needs to study” (present)?", a: "He doesn’t need to study." },
          { q: "Past negative of need to?", a: "didn’t need to" },
          { q: "The museum offers free entry. Visitors ___ pay.", a: "don’t need to" }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — SPEAKING ─────────────────────────
    {
      id: "u12l5", num: 5, skill: "Speaking",
      title: "Exploring ways to present information to other people",
      pages: [91, 91],
      status: "complete",
      canDo: ["Present ideas", "Express obligation", "Express opinions"],
      goals: ["Discuss how to prepare a good presentation.", "Fill in the Good Preparation diagram.", "Write what you need / don’t need to do."],
      goalsAr: ["أناقش كيف أحضّر عرضًا جيدًا.", "أكمل مخطط «التحضير الجيد».", "أكتب ما أحتاج وما لا أحتاج إلى فعله."],
      warmup: {
        title: "Speaking",
        image: null,
        emoji: "🎤",
        prompts: ["When you prepare projects about certain topics, how can you present them to your class?"],
        seconds: 60
      },
      vocab: [
        { w: "audience", pos: "noun", emoji: "👥", def: "the people who watch or listen to a presentation or show", ex: "Think about time, audience, materials, and the qualities of a good presenter.", exFromBook: true, ar: "الجمهور" },
        { w: "quality", pos: "noun", emoji: "🏅", def: "a good thing in a person’s character (plural: qualities)", ex: "Think about time, audience, materials, and the qualities of a good presenter.", exFromBook: true, ar: "صفة / ميزة" }
      ],
      sections: [
        { type: "speak", title: "5. Exploring ways to present information to other people:", page: 91, source: "book",
          instructions: "When you prepare projects about certain topics, how can you present them to your class? - Discuss the importance of giving presentations and how you can prepare for a good one. Think about time, audience, materials, and the qualities of a good presenter. Then share your answers with the class.",
          dialogue: [
            { who: "A", text: "Why is it important to give presentations?" }, { who: "B", text: "" },
            { who: "A", text: "What are the qualities of a good presenter?" }, { who: "B", text: "" }
          ],
          starters: ["Presentations are important because …", "A good presenter is … (confident / clear / prepared)", "We need to … before the presentation.", "Our audience is …"],
          record: true },

        { type: "activity", title: "- Fill in the following diagram by relating it to project 3.", page: 91, source: "book",
          instructions: "Good Preparation: write your ideas for Project 3 in each box.", instructionsAr: "اكتب أفكارك للمشروع 3 في كل خانة.",
          items: [
            { t: "table", q: "Good Preparation", open: true,
              head: ["Box", "My notes"],
              rows: [
                ["Materials: (What you need)", { open: true }],
                ["Audience: (people)", { open: true }],
                ["Time: (How long) — Ice breaker:", { open: true }],
                ["Time — Narration:", { open: true }],
                ["Time — Discussion:", { open: true }],
                ["Time — Activities:", { open: true }],
                ["Good Presenter: (Qualities)", { open: true }]
              ] }
          ] },

        { type: "write", title: "6. In your notebook, write what you think you need/don’t need to do to prepare your project.", page: 91, source: "book",
          instructions: "Write what you think you need/don’t need to do to prepare your project. e.g. I need to find good materials for my project.",
          wordBank: ["I need to", "We need to", "I don’t need to", "We don’t need to", "find", "prepare", "practise", "print", "buy"],
          frame: [
            { label: "I need to … (1)", hint: "I need to find good materials for my project." },
            { label: "I need to … (2)", hint: "I need to practise my narration." },
            { label: "I don’t need to … (1)", hint: "I don’t need to buy …" },
            { label: "I don’t need to … (2)", hint: "I don’t need to …" }
          ],
          model: "I need to find good materials for my project. I need to choose interesting pictures and practise my narration. I don’t need to buy a new computer, because I can use the school computer. We don’t need to print the slides.",
          modelFromBook: false,
          checklist: ["I used need to for necessary things.", "I used don’t need to for things that are not necessary.", "I used the base verb after need to.", "I wrote about my project."],
          minWords: 25 },

        { type: "activity", title: "Extra Practice: Qualities of a good presenter", source: "extra", stage: "guided",
          instructions: "Is it a good idea for a presenter?", instructionsAr: "هل هذه فكرة جيدة للمقدّم؟",
          items: [
            { t: "mcq", q: "Speak clearly and loudly.", options: ["Good idea", "Bad idea"], answer: 0, why: "Everybody in the audience can hear." },
            { t: "mcq", q: "Read every word from your slides.", options: ["Good idea", "Bad idea"], answer: 1, why: "Slides only illustrate what you say." },
            { t: "mcq", q: "Look at your audience.", options: ["Good idea", "Bad idea"], answer: 0, why: "Eye contact keeps the audience interested." },
            { t: "mcq", q: "Practise before the presentation.", options: ["Good idea", "Bad idea"], answer: 0, why: "Practice makes you confident." },
            { t: "mcq", q: "Talk for a long time and forget the time limit.", options: ["Good idea", "Bad idea"], answer: 1, why: "A good presenter keeps to the time." }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Good presenter?",
        buckets: ["A good presenter …", "A good presenter doesn’t …"],
        cards: [["speaks clearly", 0], ["looks at the audience", 0], ["is prepared", 0], ["keeps to the time", 0], ["reads the slides", 1], ["speaks too fast", 1], ["forgets the topic", 1], ["looks at the floor", 1]] },
      teacher: {
        notes: [
          "Discussion: why are presentations important? How do we prepare? Write ideas under four headings: time, audience, materials, good presenter.",
          "Groups fill in the Good Preparation diagram for Project 3 (p. 94). For Time, give minutes for the ice breaker, narration, discussion and activities.",
          "Exercise 6: students use need to / don’t need to (from the grammar lesson) to plan their project."
        ],
        pair: ["A asks “What do you need to do for the project?”, B answers with need to / don’t need to."],
        group: ["Each group shares its diagram with the class; the class chooses the best quality of a good presenter."],
        quick: [
          { q: "Name the four boxes of Good Preparation.", a: "Materials, Audience, Time, Good Presenter." },
          { q: "Give one quality of a good presenter.", a: "e.g. confident / speaks clearly." },
          { q: "Complete: I need to ___ good materials for my project.", a: "find" }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u12l6", num: 6, skill: "Reading",
      title: "Planning a Presentation",
      pages: [92, 93],
      status: "complete",
      canDo: ["Give a presentation", "Present ideas", "Use relative pronouns"],
      goals: ["Read how to make a good presentation.", "Learn 7 new words.", "Write the narration for your group’s presentation."],
      goalsAr: ["أقرأ كيف أصنع عرضًا تقديميًا جيدًا.", "أتعلّم 7 كلمات جديدة.", "أكتب نص التقديم لعرض مجموعتي."],
      warmup: {
        title: "Before you read Think, Pair, Share",
        image: "crops/u12l6-warmup.jpg",
        emoji: "📊",
        prompts: ["Do you like giving presentations? Why? Why not?"],
        seconds: 90
      },
      vocab: [
        { w: "ahead", pos: "adverb", emoji: "⏩", def: "before something happens; for the future", ex: "When you are designing a presentation, you need to plan ahead.", exFromBook: true, ar: "مسبقًا" },
        { w: "allow", pos: "verb", emoji: "✅", def: "to let something happen; to give time for something", ex: "Decide on how much information you can present in the amount of time allowed.", exFromBook: true, ar: "يسمح / يتيح" },
        { w: "content", pos: "noun", emoji: "📄", def: "the information and ideas in a talk, book or website", ex: "Setting a time limit will help you focus on the content that is most important.", exFromBook: true, ar: "المحتوى" },
        { w: "suitable", pos: "adjective", emoji: "👌", def: "right for a person or a situation", ex: "Research your content using the best sources and make sure it is suitable for your audience.", exFromBook: true, ar: "مناسب" },
        { w: "emphasise", pos: "verb", emoji: "❗", def: "to show that something is important", ex: "Text can help to emphasise important points.", exFromBook: true, ar: "يؤكّد / يبرز" },
        { w: "narration", pos: "noun", emoji: "🗣️", def: "the words you say to explain or tell something", ex: "The most important part should be in your narration.", exFromBook: true, ar: "السرد / الشرح المنطوق" },
        { w: "reinforce", pos: "verb", emoji: "🧱", def: "to make an idea stronger", ex: "During the conclusion of your presentation, reinforce the main ideas you communicated.", exFromBook: true, ar: "يعزّز / يقوّي" }
      ],
      sections: [
        { type: "reading", title: "How to Make a Good Presentation (Expository Text)", page: 92,
          instructions: "Read the text and answer the following questions.",
          speaker: "Mohamed needs to present information to the class. He wants to know how to make his PowerPoint presentation a great one. Here is what he found on the web:",
          paras: [
            "Preparation is the most important part of making a successful presentation. When you are designing a presentation, you need to plan ahead.",
            "• First you need to decide what your presentation is trying to achieve. Select a topic that is interesting to your audience and to you. Once you have selected a topic, decide on how much information you can present in the amount of time allowed. Setting a time limit will help you focus on the content that is most important. Then you need to understand what material you have. Think about what you need to show so that your audience will understand your message.",
            "• During the opening of your presentation, it’s important to attract the audience’s attention and build their interest. The body of the presentation is where you present your content. Research your content using the best sources and make sure it is suitable for your audience. Pictures and charts will help your audience to understand more. Text can help to emphasise important points. The most important part should be in your narration. Your slides should only be there to illustrate what you are going to say. Don’t read your slides.",
            "• During the conclusion of your presentation, reinforce the main ideas you communicated.",
            "• Remember to consider copyright. You must not use images or any other media that belong to other people."
          ] },

        { type: "activity", title: "2. Read the text and answer the following questions:", page: 92, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What are the key points to preparing a good presentation?",
              model: "Plan ahead: decide what your presentation is trying to achieve, select an interesting topic, decide how much information you can present in the time allowed, and understand what material you have. Attract the audience’s attention in the opening, research suitable content, reinforce the main ideas in the conclusion, and consider copyright.",
              keywords: [["plan", "topic", "time", "audience", "content"]], hint: "Read the first paragraph and the bullet points." },
            { t: "short", q: "2. What details in the text support the idea that you need to focus on your narration?",
              model: "“The most important part should be in your narration. Your slides should only be there to illustrate what you are going to say. Don’t read your slides.”",
              keywords: [["slide"]], hint: "Read the third paragraph (During the opening …)." },
            { t: "short", q: "3. Why did the writer end the text this way?",
              model: "To remind us about copyright: it is important not to use images or other media that belong to other people.",
              keywords: [["copyright", "other people", "belong"]], hint: "Read the last bullet point." },
            { t: "short", q: "4. Who needs to give presentations?",
              model: "Possible answer: students like Mohamed, teachers, and people at work, for example business people.",
              open: true, hint: "Think about school and work." }
          ] },

        { type: "speak", title: "Speaking and Writing: 3. a. In groups, you are going to start working on project 3.", page: 93, source: "book",
          instructions: "First, you are going to write a narration for the presentation your group is going to give: • What should be presented first? • How will you make it exciting? • How will you explain each slide? • What tasks will you tell your audience to do?",
          dialogue: [
            { who: "A", text: "What should be presented first?" }, { who: "B", text: "" },
            { who: "C", text: "How will we make it exciting?" }, { who: "B", text: "" }
          ],
          starters: ["First, we should present …", "We can make it exciting with …", "On this slide, we will explain …", "We will ask the audience to …"],
          record: true },

        { type: "write", title: "b. Write the narration for your presentation.", page: 93, source: "book",
          instructions: "Write the narration for your presentation.",
          wordBank: ["Good morning, everybody.", "Today, we are going to talk about …", "First,", "Next,", "As you can see in this picture,", "Now, we would like you to …", "In conclusion,", "Thank you for listening."],
          frame: [
            { label: "Opening (attract attention)", hint: "Good morning, everybody. Did you know …? Today, we are going to talk about …" },
            { label: "Body (explain each slide)", hint: "First, … As you can see in this picture, … Next, …" },
            { label: "Task for the audience", hint: "Now, we would like you to …" },
            { label: "Conclusion (reinforce the main ideas)", hint: "In conclusion, … Thank you for listening." }
          ],
          model: "Good morning, everybody. Did you know that some stars are billions of years old? Today, we are going to talk about astronomy. First, astronomy is the study of stars, planets and space. As you can see in this picture, people used telescopes to discover our solar system. Next, today most astronomy is done with remote telescopes that are controlled by computers. Now, we would like you to name the planets on the next slide. In conclusion, astronomy helps us understand the universe and protect our own planet. Thank you for listening.",
          modelFromBook: false,
          checklist: ["My opening attracts attention.", "I explained each slide.", "I gave the audience a task.", "My conclusion reinforces the main ideas."],
          bookChecklist: ["Did I gather facts from a variety of good sources?", "Did I organise my facts into an outline?", "Did I develop my topic with details and examples?"],
          minWords: 80 },

        { type: "speak", title: "c. Use your narration to prepare the presentation with your group.", page: 93, source: "book",
          instructions: "Use your narration to prepare the presentation with your group. Practise reading it aloud.",
          dialogue: [],
          starters: ["Good morning, everybody.", "Today, we are going to talk about …", "As you can see …", "Thank you for listening."],
          record: true },

        { type: "activity", title: "Extra Practice: Relative pronouns in the text", source: "extra", stage: "guided",
          instructions: "Relative pronouns join two ideas: who (people), which / that (things), where (places). Choose the right word.", instructionsAr: "الضمائر الموصولة تربط فكرتين: who للأشخاص، which و that للأشياء، where للأماكن.",
          items: [
            { t: "mcq", q: "Setting a time limit will help you focus on the content ____ is most important.", options: ["that", "who", "where"], answer: [0], why: "content = a thing → that (from the text). which is also possible: “the content which is most important”." },
            { t: "mcq", q: "The body of the presentation is ____ you present your content.", options: ["who", "where", "which"], answer: 1, why: "“… is where you present your content.” (from the text)" },
            { t: "mcq", q: "You must not use images ____ belong to other people.", options: ["that", "who", "where"], answer: 0, why: "images = things → that (from the text)." },
            { t: "mcq", q: "A good presenter is a person ____ speaks clearly.", options: ["who", "where", "which"], answer: 0, why: "a person → who." },
            { t: "mcq", q: "Select a topic ____ is interesting to your audience.", options: ["that", "who", "where"], answer: 0, why: "“Select a topic that is interesting …” (from the text)" }
          ] },

        { type: "activity", title: "Extra Practice: Do or don’t?", source: "extra", stage: "independent",
          instructions: "What does the text say?", instructionsAr: "ماذا يقول النص؟",
          items: [
            { t: "choose", q: "(Do / Don’t) read your slides.", options: ["Do", "Don’t"], answer: 1, why: "“Don’t read your slides.”" },
            { t: "choose", q: "(Do / Don’t) plan ahead.", options: ["Do", "Don’t"], answer: 0, why: "“You need to plan ahead.”" },
            { t: "choose", q: "(Do / Don’t) use images that belong to other people.", options: ["Do", "Don’t"], answer: 1, why: "“You must not use images … that belong to other people.”" },
            { t: "choose", q: "(Do / Don’t) use pictures and charts.", options: ["Do", "Don’t"], answer: 0, why: "“Pictures and charts will help your audience to understand more.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: Do you like giving presentations? Why? Why not? Students vote with thumbs up / down and give one reason.",
          "Pre-teach the 7 words. Read the text in four parts: planning, opening & body, conclusion, copyright.",
          "Make a class poster: Before / Opening / Body / Conclusion / Copyright.",
          "Groups start Project 3: answer the four planning questions, write the narration, check it with the book checklist, then practise."
        ],
        pair: ["A reads a tip from the text, B says Do or Don’t and why."],
        group: ["Groups rehearse their presentation: one member times it, one checks the checklist."],
        quick: [
          { q: "What is the most important part of making a successful presentation?", a: "Preparation." },
          { q: "Should you read your slides?", a: "No. Slides only illustrate what you say." },
          { q: "What should you do in the conclusion?", a: "Reinforce the main ideas you communicated." },
          { q: "What does “suitable” mean?", a: "Right for the person or situation." }
        ]
      }
    }
  ]
});

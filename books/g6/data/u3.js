BOOK.addUnit({
  id: "u3", num: 3, title: "Our Environment, Our Choice", titleAr: "بيئتنا، اختيارنا",
  pages: [45, 57], cover: 45,
  outcomes: {
    listening: [
      "Identify main ideas and supporting details in spoken texts about environmental actions and issues.",
      "Predict meaning from contextual clues and simple visuals.",
      "Classify information from audio sources into meaningful categories such as environmental, cultural, or behavioural values.",
      "Evaluate the relevance and clarity of spoken guidelines or advice for protecting the environment."
    ],
    speaking: [
      "Describe problems and solutions using precise topic vocabulary and sequencing language.",
      "Interact through questions and answers to propose and refine solutions.",
      "Use appropriate grammatical forms (present continuous, first conditional, and future simple) when suggesting or discussing possible solutions.",
      "Identify explicit and implicit facts / main ideas in expository and informational texts.",
      "Present ideas fluently with clear organisation, integrating peer feedback to strengthen clarity and persuasiveness."
    ],
    reading: [
      "Identify explicit and implicit facts / main ideas in expository and informational texts.",
      "Analyse cause-and-effect relationships and compare presented information across different contexts."
    ],
    writing: [
      "Identify the present-continuous form and common time expressions.",
      "Compose clear future-simple statements, negatives, and questions to state personal promises.",
      "Plan an expository paragraph with a graphic organiser, outlining the topic sentence, supporting details, and conclusion.",
      "Compose a cohesive paragraph that employs future simple to express facts or advice, using logical linkers (first, next, after that, because, also, finally)."
    ]
  },
  lessons: [
    /* ───────────────────────── LESSON 1 ───────────────────────── */
    {
      id: "u3l1", num: 1, skill: "Reading", title: "Our Environment in Danger", pages: [48, 49], status: "complete",
      canDo: [
        "I can recognise cause-effect relationship from a written text about environmental issues.",
        "I can propose solutions to environmental problems in simple sentences about protecting the environment."
      ],
      goals: ["Read about problems in our environment.", "Learn 15 new words.", "Find causes and effects.", "Give solutions to a problem."],
      goalsAr: ["أقرأ عن مشكلات بيئتنا.", "أتعلم ١٥ كلمة جديدة.", "أجد الأسباب والنتائج.", "أقترح حلولًا لمشكلة."],
      warmup: {
        title: "Before You Read", image: "crops/u3l1-warmup.jpg", emoji: "🌳", seconds: 90,
        instructions: "Look at the pictures and answer the following questions.",
        prompts: ["a. What do you see in each picture?", "b. Which place looks healthy? Why?"]
      },
      vocab: [
        { w: "environment", pos: "noun", emoji: "🌍", def: "natural world around us", ex: "The environment is everything around us.", exFromBook: true, ar: "البيئة", ipa: "/ɪnˈvaɪrənmənt/" },
        { w: "harm", pos: "verb", emoji: "🤕", def: "hurt or damage", ex: "Right now, many problems are harming our environment.", exFromBook: true, ar: "يُؤذي / يَضُرّ", ipa: "/hɑːm/" },
        { w: "dirty", pos: "adjective", emoji: "💨", def: "not clean", ex: "Factories are giving off smoke into the sky, making the air dirty.", exFromBook: true, ar: "متّسخ / ملوّث", ipa: "/ˈdɜː.ti/" },
        { w: "forest", pos: "noun", emoji: "🌲", def: "large area of trees", ex: "In forests, people are cutting down trees to build homes and roads.", exFromBook: true, ar: "غابة", ipa: "/ˈfɒrɪst/" },
        { w: "endangered", pos: "adjective", emoji: "🐼", def: "at risk of no longer existing", ex: "Many animals are losing their homes and becoming endangered.", exFromBook: true, ar: "مُهدَّد بالانقراض", ipa: "/ɪnˈdeɪn.dʒəd/" },
        { w: "crowded", pos: "adjective", emoji: "👥", def: "very full of people", ex: "In cities, the streets are becoming too crowded and noisy.", exFromBook: true, ar: "مزدحم", ipa: "/ˈkraʊdɪd/" },
        { w: "waste", pos: "noun", emoji: "🚮", def: "things we throw away (rubbish); also a bad use of something useful", ex: "Public places are filling up with plastic waste.", exFromBook: true, ar: "نفايات / هَدْر", ipa: "/weɪst/" },
        { w: "carelessly", pos: "adverb", emoji: "🙈", def: "without enough care or attention", ex: "Some people are acting carelessly.", exFromBook: true, ar: "بإهمال", ipa: "/ˈkeələsli/" },
        { w: "notice", pos: "verb", emoji: "👀", def: "see or become aware of", ex: "If we notice them, we can start to think about how to fix them.", exFromBook: true, ar: "يُلاحِظ", ipa: "/ˈnəʊtɪs/" },
        { w: "pollution", pos: "noun", emoji: "🏭", def: "harmful substances in the environment", ex: "They talk about problems like pollution and climate change.", exFromBook: true, ar: "تلوّث", ipa: "/pəˈluːʃən/" },
        { w: "climate", pos: "noun", emoji: "🌡️", def: "usual weather of a place", ex: "They talk about problems like pollution and climate change.", exFromBook: true, ar: "مناخ", ipa: "/ˈklaɪmət/" },
        { w: "remind", pos: "verb", emoji: "🔔", def: "cause someone to remember", ex: "They remind us that every person can make a difference.", exFromBook: true, ar: "يُذكّر", ipa: "/rɪˈmaɪnd/" },
        { w: "gently", pos: "adverb", emoji: "🤲", def: "softly or kindly", ex: "If we take care of it gently and wisely, it will be healthier.", exFromBook: true, ar: "بلُطف", ipa: "/ˈdʒentli/" },
        { w: "wisely", pos: "adverb", emoji: "🦉", def: "in a sensible way", ex: "If we take care of it gently and wisely, it will be healthier.", exFromBook: true, ar: "بحكمة", ipa: "/ˈwaɪzli/" },
        { w: "natural resources", pos: "noun", emoji: "💧", def: "useful materials from nature", ex: "I will do something small every day to help the planet and protect its natural resources.", exFromBook: true, ar: "الموارد الطبيعية", ipa: "/ˈnætʃrəl rɪˈsɔːsɪz/" }
      ],
      sections: [
        { type: "reading", title: "Our Environment in Danger", page: 48,
          instructions: "Read the passage and identify the main idea.",
          paras: [
            "The environment is everything around us: the air we breathe, the water we drink, the trees we see, and the animals we share the world with. Right now, many problems are harming our environment.",
            "People are throwing rubbish on the ground and in the sea. Factories are giving off smoke into the sky, making the air dirty. In forests, people are cutting down trees to build homes and roads. As a result, many animals are losing their homes and becoming endangered.",
            "In cities, the streets are becoming too crowded and noisy. Public places are filling up with plastic waste. Some people are acting carelessly. They are wasting water and are leaving rubbish in parks and on beaches.",
            "These problems are happening now. If we notice them, we can start to think about how to fix them. Understanding what is going wrong is the first step to making a difference.",
            "In Kuwait, the “Kuwait Environment Protection Society” teaches people how to protect the environment. They talk about problems like pollution and climate change. They remind us that every person can make a difference, not only in Kuwait but also in the world.",
            "The environment is our home. If we take care of it gently and wisely, it will be healthier, cleaner and safer for everyone. Let’s make a promise. I will do something small every day to help the planet and protect its natural resources. Will you?"
          ],
          note: "Pronunciation Tip: Break long words into syllables, to pronounce them easily. (en-vi-ron-ment, en-dan-gered, pol-lu-tion)" },
        { type: "activity", title: "Identify the main idea.", page: 48, source: "book", stage: "guided",
          instructions: "What is the main idea of the passage?",
          items: [
            { t: "short", q: "What is the main idea of the passage?", model: "Many problems are harming our environment right now, and every person can help to protect it.",
              keywords: [["problem", "harm", "danger"], ["environment", "planet", "earth"]], hint: "Look at the title and the first and last paragraphs." },
            { t: "mcq", q: "Extra: Choose the best main idea.", source: "extra", options: ["Factories make smoke.", "Our environment is in danger, and we can all help to protect it.", "Kuwait has many parks.", "Animals live in forests."], answer: 1,
              hint: "The main idea is about the WHOLE text.", why: "The text talks about many problems (paragraphs 1–4) and how we can help (paragraphs 5–6). The other answers are small details." }
          ] },
        { type: "activity", title: "Read the passage again and answer the following questions.", page: 49, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", q: "1. What is the environment?", model: "The environment is everything around us: the air we breathe, the water we drink, the trees we see, and the animals we share the world with.",
              keywords: [["everything", "around", "air", "water", "tree", "animal"]], hint: "Read the first sentence of paragraph 1." },
            { t: "short", q: "2. How are people harming the environment?", model: "People are throwing rubbish on the ground and in the sea, cutting down trees, wasting water and leaving rubbish in parks and on beaches. Factories are giving off smoke into the sky.",
              keywords: [["rubbish", "tree", "smoke", "water", "plastic"]], hint: "Look at paragraphs 2 and 3." },
            { t: "short", q: "3. What does the “Kuwait Environment Protection Society” do?", model: "It teaches people how to protect the environment. It talks about problems like pollution and climate change, and it reminds us that every person can make a difference.",
              keywords: [["teach", "talk", "remind"], ["protect", "pollution", "climate", "difference"]], hint: "Look at paragraph 5." },
            { t: "short", q: "4. Why is it important to protect the environment?", model: "Because the environment is our home. If we take care of it, it will be healthier, cleaner and safer for everyone.",
              keywords: [["home", "health", "clean", "safe"]], hint: "Look at the last paragraph." }
          ] },
        { type: "activity", title: "Find words in the passage that have the opposite meanings of the words below.", page: 49, source: "book", stage: "independent",
          instructions: "Find the opposite word in the paragraph. Use the glossary at the end of the book to check your answer.",
          items: [
            { t: "fill", q: "Paragraph (1): protecting ↔ ____", answer: ["harming"], hint: "Paragraph 1: “many problems are … our environment.”", why: "protecting = keeping safe; harming = hurting." },
            { t: "fill", q: "Paragraph (2): clean ↔ ____", answer: ["dirty"], hint: "Paragraph 2: “making the air …”", why: "dirty = not clean." },
            { t: "fill", q: "Paragraph (3): carefully ↔ ____", answer: ["carelessly"], hint: "Paragraph 3: “Some people are acting …”", why: "careful + ly = carefully; careless + ly = carelessly (without care)." }
          ] },
        { type: "activity", title: "Sort the words under the correct part of speech.", page: 49, source: "book", stage: "independent",
          instructions: "Word Bank: environment - harm - crowded - carelessly - natural - gently - remind - climate. Choose the part of speech for each word. (environment = noun is the example.)",
          items: [
            { t: "choose", q: "harm", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: [1, 0], hint: "In the text: “problems are harming our environment”.", why: "In the passage harm is a verb (are harming). The glossary also lists it as a noun (injury or damage), so both are accepted." },
            { t: "choose", q: "crowded", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 2, hint: "It describes the streets.", why: "crowded describes a noun (crowded streets), so it is an adjective." },
            { t: "choose", q: "carelessly", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 3, hint: "Look at the ending -ly.", why: "carelessly tells us HOW people act. Many adverbs end in -ly." },
            { t: "choose", q: "natural", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 2, hint: "natural resources", why: "natural describes the noun resources, so it is an adjective." },
            { t: "choose", q: "gently", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 3, hint: "Look at the ending -ly.", why: "gently tells us HOW we take care of it, so it is an adverb." },
            { t: "choose", q: "remind", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 1, hint: "“They remind us …”", why: "remind is an action (They remind us), so it is a verb." },
            { t: "choose", q: "climate", options: ["Noun", "Verb", "Adjective", "Adverb"], answer: 0, hint: "“climate change”", why: "climate is a thing (the usual weather of a place), so it is a noun." }
          ] },
        { type: "activity", title: "a. List three environmental problems mentioned in the passage and write where each one happens.", page: 49, source: "book", stage: "independent",
          instructions: "Write the problem and where it happens. The first one is done for you.",
          items: [
            { t: "table", q: "Complete the table.", head: ["Problem", "Where it Happens"],
              rows: [
                ["Smoke in the air", "Factories"],
                [{ open: true, model: "Rubbish (people throw it) / cutting down trees / plastic waste" }, { open: true, model: "On the ground and in the sea / in forests / in public places" }],
                [{ open: true, model: "Crowded and noisy streets / wasting water / rubbish left behind" }, { open: true, model: "In cities / in parks and on beaches" }]
              ], open: true, note: "Other correct answers are possible. Check that the place matches the problem in the text." }
          ] },
        { type: "write", title: "b. Write two solutions to one of the problems.", page: 49, source: "book",
          instructions: "Choose one problem from the table. Write two solutions. c. Use AI to search for other solutions. ATTENTION: Use AI wisely and responsibly. Let AI help you grow not do the work for you.",
          wordBank: ["We should …", "We can …", "put rubbish in the bin", "plant trees", "save water", "recycle plastic"],
          frame: [{ label: "Solution 1", hint: "We should …" }, { label: "Solution 2", hint: "We can also …" }],
          model: "Problem: rubbish on the ground and in the sea. 1. We should put our rubbish in the bin. 2. We can clean the beach with our families.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "My solutions match the problem.", "I wrote two solutions."],
          minWords: 12 },
        { type: "activity", title: "Extra Practice: Cause and effect", source: "extra", stage: "independent",
          instructions: "Match the cause to the effect. Use the passage.",
          items: [
            { t: "match", q: "Match the cause to the effect.",
              pairs: [["Factories are giving off smoke into the sky.", "The air is dirty."], ["People are cutting down trees in forests.", "Animals are losing their homes."], ["People are leaving plastic in public places.", "Public places are filling up with waste."], ["We take care of the environment gently and wisely.", "It will be healthier, cleaner and safer."]],
              hint: "Look for “making”, “As a result” and “If … will”.", why: "Paragraph 2: smoke → dirty air; cutting trees → animals lose their homes. Paragraph 3: plastic waste in public places. Last paragraph: if we take care of it, it will be healthier, cleaner and safer." },
            { t: "mcq", q: "“As a result, many animals are losing their homes.” What is the cause?", options: ["People are cutting down trees.", "The streets are crowded.", "People are wasting water."], answer: 0, why: "Paragraph 2: people cut down trees in forests, and as a result animals lose their homes." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Warm-up (2 min): compare the green park and the dirty place.", "Pre-teach 5 words with the flip cards (harm, pollution, endangered, waste, natural resources). Use the Pronunciation Tip: clap the syllables.", "First reading: main idea. Second reading: questions 1–4 and the opposites.", "Part of speech sort, then the problem table in pairs; finish with two solutions."],
        pair: ["Problem → place: one partner says a problem, the other says where it happens.", "Opposites quiz: clean ↔ dirty, carefully ↔ carelessly, protecting ↔ harming."],
        group: ["Groups choose one problem and make a mini-poster with two solutions.", "Use AI together (teacher’s device) to find one more solution; discuss if it is a good idea."],
        quick: [{ q: "What is the environment?", a: "Everything around us: air, water, trees and animals." }, { q: "Why are many animals becoming endangered?", a: "Because people are cutting down trees and the animals are losing their homes." }, { q: "Opposite of clean?", a: "dirty" }, { q: "Is “gently” a noun, verb, adjective or adverb?", a: "adverb" }]
      }
    },

    /* ───────────────────────── LESSON 2 ───────────────────────── */
    {
      id: "u3l2", num: 2, skill: "Grammar", title: "Present Continuous", pages: [50], status: "complete",
      canDo: [
        "I can use present continuous tense to describe what people are doing right now, using pictures, real-life examples and time expressions.",
        "I can complete sentences using the present continuous tense based on given verbs and pictures."
      ],
      goals: ["Say what people are doing now.", "Use am / is / are + verb-ing.", "Make negatives and questions."],
      goalsAr: ["أقول ماذا يفعل الناس الآن.", "أستخدم am / is / are + الفعل مع ing.", "أكوّن النفي والسؤال."],
      warmup: {
        title: "Look at the pictures.", image: "crops/u3l2-warmup.jpg", emoji: "🚲", seconds: 90,
        instructions: "Look at the pictures. Use the verbs: play – ride – plant – sit",
        prompts: ["a. What verbs describe what the people are doing?", "b. Which picture matches the sentence? “We are riding our bikes.”"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Look at the pictures.", page: 50, source: "book", stage: "guided",
          instructions: "Look at the pictures 1 and 2. Choose the verbs: play – ride – plant – sit",
          items: [
            { t: "choose", q: "a. Picture 1: The family ____ .", options: ["play", "ride", "plant", "sit"], answer: 1, hint: "What are they on?", why: "In picture 1 the family are on bikes, so they are riding." },
            { t: "choose", q: "a. Picture 2: The family ____ .", options: ["play", "ride", "plant", "sit"], answer: [2, 3], hint: "Look at the small tree and the people on the ground.", why: "In picture 2 the people are planting a tree and sitting on the ground. Both verbs are correct." },
            { t: "mcq", q: "b. Which picture matches the sentence? “We are riding our bikes.”", options: ["Picture 1", "Picture 2"], answer: 0, why: "Picture 1 shows a family on bikes." }
          ] },
        { type: "grammar", title: "Present Continuous", page: 50,
          steps: [
            { title: "When do we use it?", text: "Use the present continuous to talk about actions happening right now.", textAr: "نستخدم المضارع المستمر للحديث عن أفعال تحدث الآن.",
              examples: ["{s:We} {a:are} {v:riding} our bikes.", "{s:I} {a:am} {v:reading} {t:right now}."] },
            { title: "Form", text: "subject + am / is / are + verb + ing", textAr: "الفاعل + am / is / are + الفعل + ing",
              examples: ["{s:I} {a:am} {v:reading} {t:right now}.", "{s:He} {a:is} {v:riding} a bike.", "{s:They} {a:are} {v:playing} football."],
              tip: "I → am | he / she / it → is | we / you / they → are" },
            { title: "Negative", text: "subject + am not / is not (isn’t) / are not (aren’t) + verb + -ing", textAr: "النفي: am not / isn’t / aren’t + الفعل + ing",
              examples: ["{s:He} {n:isn’t} {v:drawing} a picture.", "{s:They} {n:aren’t} {v:watching} TV."] },
            { title: "Question", text: "Am / Is / Are + subject + verb + -ing? / What am / is / are + subject + verb + -ing?", textAr: "السؤال: Am / Is / Are + الفاعل + الفعل + ing؟",
              examples: ["{a:Are} {s:they} {v:playing} football?", "{q:What} {a:are} {s:you} {v:doing}?"] },
            { title: "Time expressions", text: "When talking about the present continuous, you can use these time expressions: now, at the moment, right now, today.", textAr: "كلمات دالة: now, at the moment, right now, today",
              examples: ["{s:The cat} {a:is} {v:drinking} milk {t:at the moment}.", "{s:I} {a:am} {v:playing} PlayStation {t:now}."] },
            { title: "Spelling tip (extra)", text: "Most verbs: add -ing. Verb ends in -e: drop the e. Short verbs like sit: double the last letter.", textAr: "معظم الأفعال نضيف ing. الفعل المنتهي بـ e نحذف e. وبعض الأفعال القصيرة نضاعف الحرف الأخير.",
              examples: ["play → {v:playing}", "ride → {v:riding}, write → {v:writing}", "sit → {v:sitting}"] }
          ],
          table: { head: ["Subject", "Verb To Be", "Example"], rows: [["I", "am", "What are you doing? I am reading right now."], ["He / she / It", "is", "He is riding a bike. / He isn’t drawing a picture."], ["We/ You / They", "are", "Are they playing football? Yes, they are playing football."]] },
          worked: { q: "Correct the sentence: She are planting a tree now.", steps: ["Find the subject: She.", "She → is (not are).", "Check the verb: planting has -ing. ✔"], a: "She is planting a tree now." }
        },
        { type: "activity", title: "Extra Practice: am, is or are?", source: "extra", stage: "guided",
          instructions: "Tap the correct helper verb. Look at the subject first.",
          items: [
            { t: "choose", q: "I ____ reading right now.", options: ["am", "is", "are"], answer: 0, hint: "The subject is “I”.", why: "I → am." },
            { t: "choose", q: "He ____ riding a bike.", options: ["am", "is", "are"], answer: 1, hint: "The subject is “he”.", why: "he / she / it → is." },
            { t: "choose", q: "They ____ playing football.", options: ["am", "is", "are"], answer: 2, hint: "The subject is “they”.", why: "we / you / they → are." },
            { t: "choose", q: "My mother ____ planting a tree.", options: ["am", "is", "are"], answer: 1, hint: "My mother = she.", why: "she → is." },
            { t: "choose", q: "We ____ cleaning the beach today.", options: ["am", "is", "are"], answer: 2, hint: "The subject is “we”.", why: "we → are." }
          ] },
        { type: "activity", title: "2. Complete the sentences using the present continuous tense.", page: 50, source: "book", stage: "independent",
          instructions: "Use a verb from the Verb Box: write, play, watch, drink, plant. Look at the pictures in your book.",
          items: [
            { t: "fill", q: "1. I ____ PlayStation now.", answer: ["am playing", "'m playing", "’m playing"], bank: ["write", "play", "watch", "drink", "plant"], hint: "I + am + verb-ing.", why: "I → am + playing: I am playing PlayStation now." },
            { t: "fill", q: "2. They ____ TV.", answer: ["are watching", "'re watching", "’re watching"], bank: ["write", "play", "watch", "drink", "plant"], hint: "They + are + verb-ing.", why: "They → are + watching: They are watching TV." },
            { t: "fill", q: "3. She ____ her homework.", answer: ["is writing", "'s writing", "’s writing"], bank: ["write", "play", "watch", "drink", "plant"], hint: "write → writing (drop the e).", why: "She → is + writing: She is writing her homework. (write loses its -e.)" },
            { t: "fill", q: "4. The cat ____ milk at the moment.", answer: ["is drinking", "'s drinking", "’s drinking"], bank: ["write", "play", "watch", "drink", "plant"], hint: "The cat = it.", why: "it → is + drinking: The cat is drinking milk at the moment." }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "Correct the underlined word.",
          items: [
            { t: "fix", q: "They {is} planting trees in the park.", answer: ["are"], hint: "They = more than one.", why: "they → are." },
            { t: "fix", q: "I am {pick} up rubbish now.", answer: ["picking"], hint: "am + verb + ?", why: "After am / is / are we need verb + -ing: picking." },
            { t: "fix", q: "Ali {not is} wasting water.", answer: ["is not", "isn’t", "isn't"], hint: "Where does “not” go?", why: "Negative: subject + is not (isn’t) + verb-ing." },
            { t: "fix", q: "What {you are} doing?", answer: ["are you"], hint: "In a question the helper verb comes first.", why: "Question: What + are + you + doing?" }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a question.", words: ["Are", "they", "playing", "football?"], answer: ["Are they playing football?"], why: "Are + subject + verb-ing?" },
            { t: "order", q: "Make a negative sentence.", words: ["He", "isn’t", "drawing", "a", "picture."], answer: ["He isn’t drawing a picture."], why: "Subject + isn’t + verb-ing." },
            { t: "order", q: "Make a sentence.", words: ["The", "boy", "is", "cleaning", "the", "park", "now."], answer: ["The boy is cleaning the park now."], why: "Subject + is + verb-ing + time expression." }
          ] },
        { type: "speak", title: "Doing Good for the Environment", page: 50, source: "book", image: "crops/u3l2-green.jpg",
          instructions: "a. Take turns describing what the people in the pictures are doing. Use the present continuous tense.",
          dialogue: [{ who: "A", text: "What is he/she doing?" }, { who: "B", text: "He / She is ..............." }, { who: "A", text: "What is he/she doing?" }, { who: "B", text: "" }],
          starters: ["She is planting …", "He is picking up …", "She is watering …", "He is cleaning …"],
          record: true },
        { type: "write", title: "b. Write two sentences to describe the pictures and explain how the actions are helping the environment.", page: 50, source: "book",
          instructions: "Write two sentences. Use the present continuous tense.",
          wordBank: ["is planting", "is picking up", "a tree", "plastic bottles", "clean", "fresh air", "the lake"],
          frame: [{ label: "Picture 1", hint: "The woman is … . This helps the environment because …" }, { label: "Picture 2", hint: "The boy is … . This helps the environment because …" }],
          model: "The woman is planting a tree. Trees give us clean air. The boy is picking up plastic bottles. He is keeping the lake clean for animals.", modelFromBook: false,
          checklist: ["I used is / are + verb-ing.", "I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I explained how the action helps."],
          minWords: 15 }
      ],
      game: { kind: "quiz", title: "Present Continuous Race", items: [
        { t: "choose", q: "Look! The children ____ trees.", options: ["is planting", "are planting"], answer: 1, why: "the children = they → are planting" },
        { t: "choose", q: "I ____ my bike now.", options: ["am riding", "is riding"], answer: 0, why: "I → am" },
        { t: "choose", q: "She ____ TV at the moment.", options: ["isn’t watching", "aren’t watching"], answer: 0, why: "she → isn’t" },
        { t: "choose", q: "____ he sitting in the park?", options: ["Are", "Is"], answer: 1, why: "he → Is" },
        { t: "choose", q: "What ____ you doing?", options: ["are", "is"], answer: 0, why: "you → are" },
        { t: "choose", q: "write → ____", options: ["writeing", "writing"], answer: 1, why: "Drop the -e: writing." }
      ] },
      teacher: {
        notes: ["Warm-up: pictures 1 and 2; elicit ride / plant / sit.", "Present the rule box and table; colour am/is/are (helper) and verb-ing.", "Worked example → guided am/is/are → book task 2 → extra mistakes.", "Pairs describe the two ‘Doing Good’ pictures, then write two sentences."],
        pair: ["Mime game: one student mimes an action, the partner asks “Are you …ing?”", "What is he/she doing? — describe the pictures on page 50."],
        group: ["Look out of the window: groups write 3 sentences about what people are doing right now."],
        quick: [{ q: "Complete: They ___ watching TV.", a: "are" }, { q: "Make negative: He is drawing a picture.", a: "He isn’t drawing a picture." }, { q: "Make a question: They are playing football.", a: "Are they playing football?" }, { q: "Give two time expressions.", a: "now, at the moment, right now, today" }]
      }
    },

    /* ───────────────────────── LESSON 3 ───────────────────────── */
    {
      id: "u3l3", num: 3, skill: "Listening", title: "Small Actions, Big Change", pages: [51], status: "complete",
      canDo: [
        "I can identify the main idea from a spoken text about environmental actions by students.",
        "I can value simple environmental actions by sharing ideas from spoken text about daily habits."
      ],
      goals: ["Listen to three students and their actions.", "Fill in a table while you listen.", "Plan solutions with your team."],
      goalsAr: ["أستمع إلى ثلاثة طلاب وأعمالهم.", "أملأ جدولًا أثناء الاستماع.", "أخطط لحلول مع فريقي."],
      warmup: {
        title: "Before You Listen", image: "crops/u3l3-warmup.jpg", emoji: "🌱", seconds: 90,
        instructions: "Discuss the following questions.",
        prompts: ["What do you remember about the “Kuwait Environment Protection Society”?", "Do you think that one small action can make a difference?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to the three students.", page: 51, source: "book", needsAudio: true, image: "crops/u3l3-actions.jpg",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EaVztxRnyeRJvgSoTG6qMkMBf4NOXkvkaAEEOwcWLw9qTA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wD2gaa",
          instructions: "Listen to the three students. Write the name of each student under the action they are doing in the pictures.",
          items: [
            { t: "table", q: "Write the name under each picture.", head: ["Picture", "Student’s name"],
              rows: [["Picture 1 (a cat and a bowl of food)", { open: true }], ["Picture 2 (planting with a watering can)", { open: true }], ["Picture 3 (a hand at the light switch)", { open: true }]], open: true }
          ] },
        { type: "listen", title: "3a. Listen and fill in the table with information from the listening material.", page: 51, source: "book", needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EaVztxRnyeRJvgSoTG6qMkMBf4NOXkvkaAEEOwcWLw9qTA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wD2gaa",
          instructions: "Listen and fill in the table with information from the listening material.",
          items: [
            { t: "table", q: "Complete the table while you listen.", head: ["Student", "Where they learn from", "What they do"],
              rows: [["Layla", "Kuwait Environmental Protection Society", { open: true }], ["Salem", { open: true }, "Plants a tree every year."], ["Hana", "Islamic studies lesson", { open: true }]], open: true }
          ] },
        { type: "listen", title: "3b. Answer the following questions.", page: 51, source: "book", needsAudio: true,
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/EaVztxRnyeRJvgSoTG6qMkMBf4NOXkvkaAEEOwcWLw9qTA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wD2gaa",
          instructions: "Answer the following questions.",
          items: [
            { t: "short", q: "• What did Layla stop using to help the environment?", open: true },
            { t: "short", q: "• Why do you think Salem continues to plant trees every year?", open: true }
          ] },
        { type: "write", title: "4. Team Challenge: Save the School Garden!", page: 51, source: "book",
          instructions: "Problem: Some students are harming the plants and stepping on the flowers in the school garden. Work as a team. What will you do to stop this problem? ● Use the first conditional to write 2–3 ideas. ● Then, use technology to create a short digital poster, video message, or brochure to share your solution.",
          note: "Team Tip: Speak and Decide Together! ● Listen carefully to your teammates! ● Use polite phrases to agree or suggest new ideas. ● Give advice to help students protect the garden",
          example: "If we make posters about protecting the garden, students will learn to be careful.",
          wordBank: ["If we …, students will …", "make posters", "put a small fence", "water the plants", "talk to the class", "learn to be careful", "protect the flowers", "I agree.", "How about …?"],
          frame: [{ label: "Idea 1", hint: "If we …, students will …" }, { label: "Idea 2", hint: "If we …, the garden will …" }, { label: "Idea 3 (optional)", hint: "If we …, …" }],
          model: "If we put a small fence around the flowers, students will not step on them. If we choose garden helpers every week, the plants will stay safe. If we talk to the younger classes, they will learn to love the garden.", modelFromBook: false,
          checklist: ["I used If + present, … will + verb.", "I used a comma after the If part.", "My ideas stop the problem.", "I listened to my teammates."],
          minWords: 20 },
        { type: "activity", title: "Extra Practice: If … will …", source: "extra", stage: "guided",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Build the sentence.", words: ["If", "we", "water", "the", "plants,", "they", "will", "grow."], answer: ["If we water the plants, they will grow."], why: "If + present simple, … will + verb." },
            { t: "order", q: "Build the sentence.", words: ["If", "we", "turn", "off", "the", "lights,", "we", "will", "save", "electricity."], answer: ["If we turn off the lights, we will save electricity."], why: "If + present simple, … will + verb." },
            { t: "choose", q: "If we ____ posters, students will learn.", options: ["make", "will make"], answer: 0, why: "After If we use the present simple (make), not will." }
          ] },
        { type: "listen", title: "Extra Practice: Three small actions", source: "extra",
          instructions: "This is a generated voice, not the book recording. Listen and answer.",
          script: [
            { who: "Dana", text: "Hi, I’m Dana. I bring a metal water bottle to school every day. I don’t buy plastic bottles now." },
            { who: "Yousef", text: "I’m Yousef. When I brush my teeth, I turn off the tap. I save water every morning and every night." },
            { who: "Mariam", text: "My name is Mariam. On Fridays, I go to the beach with my family. We pick up rubbish and put it in the bin. Small actions make a big change!" }
          ],
          items: [
            { t: "mcq", q: "What does Dana bring to school?", options: ["a plastic bag", "a metal water bottle", "a lunch box"], answer: 1, why: "Dana says: “I bring a metal water bottle to school every day.”" },
            { t: "mcq", q: "When does Yousef turn off the tap?", options: ["when he brushes his teeth", "when he eats", "when he goes to school"], answer: 0, why: "Yousef says: “When I brush my teeth, I turn off the tap.”" },
            { t: "mcq", q: "Where does Mariam go on Fridays?", options: ["to the park", "to the beach", "to the school garden"], answer: 1, why: "Mariam says: “On Fridays, I go to the beach with my family.”" },
            { t: "mcq", q: "What does Mariam’s family pick up?", options: ["rubbish", "flowers", "shells"], answer: 0, why: "Mariam says: “We pick up rubbish and put it in the bin.”" },
            { t: "mcq", q: "What is the main idea?", options: ["Plastic is cheap.", "Small actions can help the environment.", "The beach is crowded."], answer: 1, why: "All three students do a small action, and Mariam says: “Small actions make a big change!”" }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["One small action can make a difference.", "I turn off the tap when I brush my teeth.", "We pick up rubbish at the beach.", "If we make posters, students will learn.", "Small actions make a big change."] },
      teacher: {
        notes: ["Warm-up: show the Kuwait Environment Protection Society logo; link back to Lesson 1.", "Play the book recording (QR code 3.1 on page 51): first for names under the pictures, then for the table, then for the questions.", "The recording is not built into this app; answers depend on it, so check them with the class.", "Team Challenge: groups of 4 write 2–3 first-conditional ideas, then make a digital poster or short video."],
        pair: ["Retell: one partner says what Layla, Salem or Hana does; the other says where they learned it.", "If … will chain: A starts “If we …”, B finishes “… will …”."],
        group: ["Team Challenge: Save the School Garden! (poster, video message or brochure).", "Gallery walk: groups vote for the best solution."],
        quick: [{ q: "Name one small action that helps the environment.", a: "e.g. turning off the lights / planting a tree / feeding animals." }, { q: "Complete: If we make posters, students …", a: "will learn to be careful." }, { q: "Where does Hana learn from?", a: "Her Islamic studies lesson (given in the table)." }]
      }
    },

    /* ───────────────────────── LESSON 4 ───────────────────────── */
    {
      id: "u3l4", num: 4, skill: "Speaking", title: "We Can Save the Earth", pages: [52], status: "complete",
      canDo: [
        "I can suggest simple solutions in short dialogues about protecting the environment.",
        "I can respect others’ ideas by listening and responding in short dialogues about environmental issues."
      ],
      goals: ["Talk about sea, air and land pollution.", "Give your opinion with “I think … because …”.", "Interview a partner and suggest solutions."],
      goalsAr: ["أتحدث عن تلوث البحر والهواء والأرض.", "أعبّر عن رأيي باستخدام I think … because.", "أجري مقابلة مع زميلي وأقترح حلولًا."],
      linkers: ["also", "because", "and", "to"],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u3l4-warmup.jpg", emoji: "🐢", seconds: 90,
        instructions: "Look at the pictures. Think, Pair, Share.",
        prompts: ["What is happening in the pictures?", "Is it bad for the environment? Why?"]
      },
      vocab: [],
      sections: [
        { type: "reading", title: "Pollution Fact Box", page: 52, image: "crops/u3l4-factbox.jpg",
          instructions: "a. Read the Pollution Fact Box to understand more about sea, air, and land pollution.",
          paras: [
            "Sea Pollution: Plastic goes into oceans. Animals can eat it. It hurts sea life.",
            "Air Pollution: Smoke from cars and factories makes air dirty. People can get sick.",
            "Land Pollution: People throw trash on the ground. It makes parks dirty. Animals can eat it."
          ] },
        { type: "activity", title: "Extra Practice: Which pollution?", source: "extra", stage: "guided",
          instructions: "Read the Fact Box. Match each type of pollution to its fact.",
          items: [
            { t: "match", q: "Match.", pairs: [["Sea pollution", "Plastic goes into oceans."], ["Air pollution", "Smoke from cars and factories makes air dirty."], ["Land pollution", "People throw trash on the ground."]],
              why: "These facts are all in the Pollution Fact Box." },
            { t: "mcq", q: "Which pollution can make people sick?", options: ["sea pollution", "air pollution", "land pollution"], answer: 1, why: "Fact Box: “Smoke from cars and factories makes air dirty. People can get sick.”" }
          ] },
        { type: "discuss", title: "2. Think, Read and Discuss", page: 52, source: "book", emoji: "💬",
          prompts: ["b. What kind of pollution do you think is the most serious? Why?", "c. What will happen to people or animals if this pollution continues?"],
          starters: ["I think sea pollution is a big problem because ...", "I think air pollution is a big problem because ...", "I think land pollution is a big problem because ...", "If this pollution continues, …"],
          example: "I think sea pollution is a big problem because fish can eat plastic." },
        { type: "speak", title: "3. Kuwait Green Club TV: Environmental Awareness Role-play", page: 52, source: "book",
          instructions: "a. As “Kuwait Green Club TV”, interview your partner about the environment. Then switch roles.",
          dialogue: [{ who: "Reporter", text: "What type of pollution is common in Kuwait?" }, { who: "Guest", text: "" }, { who: "Reporter", text: "What can we do to stop it?" }, { who: "Guest", text: "" }, { who: "Reporter", text: "Why is it important to care about the environment?" }, { who: "Guest", text: "" }],
          starters: ["I think … pollution is common in Kuwait because …", "We can … to …", "We should … and also …", "It is important because …"],
          note: "Activity Tip: Use “also” to link more than one idea or solution together.",
          record: true },
        { type: "speak", title: "b. Choose one pollution problem. Discuss more than one solution. Present them to the class.", page: 52, source: "book",
          instructions: "Choose one pollution problem. Discuss more than one solution. Present them to the class.",
          example: "We should put our rubbish in the bin, to keep our beach clean and safe for everyone.",
          dialogue: [{ who: "You", text: "Our problem is … pollution." }, { who: "You", text: "First, we should … to …" }, { who: "You", text: "We should also … because …" }],
          starters: ["We should … to keep … clean.", "We should also …", "… because …", "and …"],
          record: true },
        { type: "activity", title: "Extra Practice: Choose the linker", source: "extra", stage: "independent",
          instructions: "Choose the best linker: also, because, and, to.",
          items: [
            { t: "choose", q: "We should recycle plastic ____ keep the sea clean.", options: ["to", "because"], answer: 0, why: "to + verb shows the purpose: to keep." },
            { t: "choose", q: "I think air pollution is a big problem ____ people can get sick.", options: ["and", "because"], answer: 1, why: "because gives the reason." },
            { t: "choose", q: "We should walk to school. We should ____ use less electricity.", options: ["also", "to"], answer: 0, why: "also adds a second idea." },
            { t: "choose", q: "Smoke from cars ____ factories makes air dirty.", options: ["and", "because"], answer: 0, why: "and joins two nouns: cars and factories." }
          ] }
      ],
      game: { kind: "sort", title: "Sort the pollution!", buckets: ["Sea pollution", "Air pollution", "Land pollution"],
        cards: [["plastic bags in the ocean", 0], ["fish eating plastic", 0], ["smoke from factories", 1], ["smoke from cars", 1], ["rubbish in the park", 2], ["trash on the ground", 2]] },
      teacher: {
        notes: ["Think, Pair, Share with the three pictures (sea, air, land).", "Read the Fact Box together; students choose the most serious pollution and give a reason with the sentence starters.", "Role-play: Kuwait Green Club TV interview — model it first with a strong student (use a pretend microphone).", "Groups present more than one solution; remind them to use “also”."],
        pair: ["TV interview (reporter / guest), then switch roles.", "Opinion swap: “I think … because …” — partner answers “I agree / I don’t agree because …”."],
        group: ["Groups of 3: sea, air, land experts. Each expert gives one solution; the group presents all three."],
        quick: [{ q: "What does smoke from cars and factories do?", a: "It makes air dirty. People can get sick." }, { q: "Complete: We should put our rubbish in the bin, to …", a: "keep our beach clean and safe for everyone." }, { q: "Which linker adds a second idea?", a: "also" }]
      }
    },

    /* ───────────────────────── LESSON 5 ───────────────────────── */
    {
      id: "u3l5", num: 5, skill: "Reading", title: "Students’ Actions Around the World", pages: [53, 54], status: "complete",
      canDo: [
        "I can compare actions from a written text about environment activities around the world.",
        "I can organise information from a written text about environmental practices in a clear format."
      ],
      goals: ["Read about students in four countries.", "Learn 11 new words.", "Learn the 3Rs: reduce, reuse, recycle.", "Put information in a table."],
      goalsAr: ["أقرأ عن طلاب في أربع دول.", "أتعلم ١١ كلمة جديدة.", "أتعرّف القواعد الثلاث: التقليل وإعادة الاستخدام وإعادة التدوير.", "أنظّم المعلومات في جدول."],
      warmup: {
        title: "Before You Read", image: "crops/u3l5-warmup.jpg", emoji: "♻️", seconds: 90,
        instructions: "Look at the pictures and discuss the questions.",
        prompts: ["1. Which of these items can we reuse or recycle?", "2. Do you do any of these actions at home or school?", "3. Why is it important to reduce waste?"]
      },
      vocab: [
        { w: "reduce", pos: "verb", emoji: "➖", def: "make smaller or less", ex: "Can your class think of a smart way to reduce waste?", exFromBook: true, ar: "يُقلّل", ipa: "/rɪˈdjuːs/" },
        { w: "reuse", pos: "verb", emoji: "🔁", def: "use again", ex: "First, students reuse folders and boxes.", exFromBook: true, ar: "يُعيد استخدام", ipa: "/ˌriːˈjuːz/" },
        { w: "recycle", pos: "verb", emoji: "♻️", def: "treat things so they can be used again", ex: "Students are helping the planet by using the 3Rs: Reduce, Reuse, and Recycle.", exFromBook: true, ar: "يُعيد التدوير", ipa: "/ˌriːˈsaɪkl/" },
        { w: "neatly", pos: "adverb", emoji: "🗂️", def: "tidily and carefully", ex: "In Japan, students neatly sort their rubbish into paper, plastic, and food waste.", exFromBook: true, ar: "بترتيب", ipa: "/ˈniːtli/" },
        { w: "plastic", pos: "noun", emoji: "🥤", def: "strong, light material that can be shaped", ex: "Students neatly sort their rubbish into paper, plastic, and food waste.", exFromBook: true, ar: "بلاستيك", ipa: "/ˈplæstɪk/" },
        { w: "routine", pos: "noun", emoji: "📅", def: "usual way of doing things", ex: "They do this every day after lunch as part of their school routine.", exFromBook: true, ar: "روتين", ipa: "/ruːˈtiːn/" },
        { w: "container", pos: "noun", emoji: "🍱", def: "object for holding something", ex: "Next, they bring lunch in reusable containers.", exFromBook: true, ar: "حاوية / عُلبة", ipa: "/kənˈteɪnə/" },
        { w: "metal", pos: "adjective", emoji: "🥫", def: "made of metal", ex: "They bring metal bottles, cloth bags, and paper wraps.", exFromBook: true, ar: "معدني", ipa: "/ˈmetəl/" },
        { w: "creative", pos: "adjective", emoji: "🎨", def: "able to produce new ideas or things", ex: "They even make bags from old clothes, a creative idea that impressed many families.", exFromBook: true, ar: "مُبدِع", ipa: "/kriˈeɪtɪv/" },
        { w: "impress", pos: "verb", emoji: "🤩", def: "make someone admire you", ex: "A creative idea that impressed many families.", exFromBook: true, ar: "يُبهِر", ipa: "/ɪmˈpres/" },
        { w: "campaign", pos: "noun", emoji: "📢", def: "organised series of actions to reach a goal", ex: "In Kuwait, students started a paper collection campaign.", exFromBook: true, ar: "حملة", ipa: "/kæmˈpeɪn/" }
      ],
      sections: [
        { type: "reading", title: "Students’ Actions Around the World", page: 53,
          instructions: "Read the passage.",
          paras: [
            "Around the world, students are helping the planet by using the 3Rs: Reduce, Reuse, and Recycle. These actions may seem small, but they make a big difference.",
            "In Japan, students neatly sort their rubbish into paper, plastic, and food waste. They do this every day after lunch as part of their school routine.",
            "In Finland, schools have “No Waste Weeks.” First, students reuse folders and boxes. Next, they bring lunch in reusable containers. After that, they design posters to teach other classes about recycling. Finally, they clean a park together.",
            "In Kenya, students started a “Plastic-Free Lunch” project. They bring metal bottles, cloth bags, and paper wraps. They even make bags from old clothes, a creative idea that impressed many families.",
            "In Kuwait, students started a paper collection campaign. They place boxes around the school and ask everyone to use both sides of the paper. Every month, they collect the used paper and send [[it]] for recycling. They also visit younger classes to teach children how to take care of the environment.",
            "These students know that small actions matter. Can your class think of a smart way to reduce waste?"
          ],
          note: "The question on page 54 asks about the word “it” in the paragraph about Kuwait. It is marked here; the printed page does not underline it." },
        { type: "activity", title: "2. Read the passage and choose another title.", page: 53, source: "book", stage: "guided",
          instructions: "Choose another title.",
          items: [
            { t: "mcq", q: "Choose another title for the passage:", options: ["How Students Help the Earth", "How Paper Helps Families", "No Waste Weeks", "Plastic Free Lunch"], answer: 0,
              hint: "Which title is about the WHOLE text?", why: "The text is about students in four countries helping the planet. “No Waste Weeks” and “Plastic Free Lunch” are only one country each." }
          ] },
        { type: "activity", title: "3. Read the passage and fill in the table with information about each country.", page: 54, source: "book", stage: "independent",
          instructions: "Fill in the table. Some answers are given.",
          items: [
            { t: "table", q: "Complete the table.", head: ["Country", "What the students did", "Which “R” is it? (Reduce- Reuse-Recycle)", "What they used (materials / tools)", "How it helps the Earth"],
              rows: [
                ["Japan", { open: true, model: "They neatly sort their rubbish every day after lunch." }, { answer: ["recycle", "recycling", "reduce"], model: "Recycle" }, { open: true, model: "Paper, plastic and food waste (rubbish)" }, "Reduce waste"],
                [{ answer: ["finland"], model: "Finland" }, "No Waste Weeks", { answer: ["reuse", "reduce", "recycle"], model: "Reuse (they also reduce waste and teach recycling)" }, { open: true, model: "Folders, boxes, reusable containers, posters" }, { open: true, model: "Less waste and a clean park" }],
                [{ answer: ["kenya"], model: "Kenya" }, { open: true, model: "A “Plastic-Free Lunch” project" }, "Reuse", { open: true, model: "Metal bottles, cloth bags, paper wraps, old clothes" }, { open: true, model: "Less plastic waste" }],
                ["Kuwait", { open: true, model: "A paper collection campaign" }, { answer: ["recycle", "recycling"], model: "Recycle" }, "paper", { open: true, model: "Used paper is recycled, so there is less waste." }]
              ], note: "Finland’s “No Waste Weeks” use all 3Rs, so any “R” is accepted there." }
          ] },
        { type: "activity", title: "Read the passage again and choose the correct answer from a, b, c, or d.", page: 54, source: "book", stage: "independent",
          instructions: "Choose the correct answer.",
          items: [
            { t: "mcq", q: "1. The underlined word “it” in the 4th paragraph refers to:", options: ["month", "school", "paper", "campaign"], answer: 2,
              hint: "Read: “they collect the used paper and send it for recycling.”", why: "They send the used paper for recycling, so “it” = paper." },
            { t: "mcq", q: "2. The writer’s purpose in writing this passage is:", options: ["To tell students not to use paper.", "To describe recycling machines.", "To show how students use the 3Rs in different countries.", "To teach science facts about the environment."], answer: 2,
              hint: "Read the first paragraph again.", why: "The text describes students in Japan, Finland, Kenya and Kuwait using Reduce, Reuse and Recycle." }
          ] },
        { type: "activity", title: "4. Complete the paragraph with the most suitable word.", page: 54, source: "book", stage: "independent",
          instructions: "Use: neatly – reduce – plastic – routine. One word is extra.",
          items: [
            { t: "fill", q: "Every day, we try to ____ how much water and electricity we use.", answer: ["reduce"], bank: ["neatly", "reduce", "plastic", "routine"], hint: "try to + verb. Which word means “make less”?", why: "reduce = make smaller or less." },
            { t: "fill", q: "My brother and I ____ pack our lunch in reusable containers.", answer: ["neatly"], bank: ["neatly", "reduce", "plastic", "routine"], hint: "We need an adverb: HOW do we pack?", why: "neatly (adverb) tells us how we pack: tidily and carefully." },
            { t: "fill", q: "She puts paper, glass, and ____ in separate bins.", answer: ["plastic"], bank: ["neatly", "reduce", "plastic", "routine"], hint: "Paper, glass and … are recycling materials.", why: "plastic is a material we recycle, like paper and glass." }
          ] },
        { type: "speak", title: "5. Role-play: Be a Green Hero", page: 54, source: "book", image: "crops/u3l5-roleplay.jpg",
          instructions: "In pairs, act out a short scene. One student gives advice about how to reduce, reuse, or recycle. Use the pictures to help you.",
          dialogue: [{ who: "A", text: "Don’t throw that bottle, you should recycle it." }, { who: "B", text: "That’s a smart idea. I will try." }, { who: "A", text: "" }, { who: "B", text: "" }],
          starters: ["Don’t throw that …, you should …", "You can reuse this jar for …", "Let’s take a cloth bag to the shop.", "That’s a smart idea. I will try."],
          record: true },
        { type: "activity", title: "Extra Practice: Reduce, Reuse or Recycle?", source: "extra", stage: "independent",
          instructions: "Choose the correct R.",
          items: [
            { t: "choose", q: "Students use old folders and boxes again.", options: ["Reduce", "Reuse", "Recycle"], answer: 1, why: "Using something again = reuse." },
            { t: "choose", q: "Students send used paper to be made into new paper.", options: ["Reduce", "Reuse", "Recycle"], answer: 2, why: "Making used things into new things = recycle." },
            { t: "choose", q: "We use less water and electricity.", options: ["Reduce", "Reuse", "Recycle"], answer: 0, why: "Using less = reduce." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Warm-up: which items can we reuse or recycle? Introduce the 3Rs with three hand signs.", "Pre-teach vocabulary with the flip cards; students read once and choose another title.", "Second reading: country table in pairs, then the two MCQs and the gap fill.", "Role-play: Be a Green Hero with the four pictures."],
        pair: ["Green Hero role-play (advice + “That’s a smart idea. I will try.”).", "Country quiz: A says a country, B says what the students did."],
        group: ["Plan a class campaign like Kuwait’s paper campaign: name, materials, which R."],
        quick: [{ q: "What do students in Japan do after lunch?", a: "They neatly sort their rubbish into paper, plastic and food waste." }, { q: "What did students in Kenya make from old clothes?", a: "Bags." }, { q: "What does “it” refer to in “send it for recycling”?", a: "the used paper" }, { q: "Name the 3Rs.", a: "Reduce, Reuse, Recycle" }]
      }
    },

    /* ───────────────────────── LESSON 6 ───────────────────────── */
    {
      id: "u3l6", num: 6, skill: "Grammar", title: "Future Simple", pages: [55], status: "complete",
      canDo: [
        "I can identify future simple forms from sentences about plans and promises to protect the environment.",
        "I can write sentences using future simple neatly about environmental actions."
      ],
      goals: ["Talk about plans with will.", "Make promises with will / won’t.", "Ask questions with Will …?"],
      goalsAr: ["أتحدث عن الخطط باستخدام will.", "أقطع وعودًا باستخدام will / won’t.", "أسأل باستخدام Will؟"],
      warmup: {
        title: "Look at the pictures.", image: "crops/u3l6-warmup.jpg", emoji: "🤝", seconds: 90,
        instructions: "Look at the pictures. What will you do? What won’t you do?",
        prompts: ["What will you do?", "What won’t you do?", "I will... / I won’t…"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Future Simple", page: 55,
          steps: [
            { title: "When do we use it?", text: "We use the future simple to talk about things that will happen later or in the future.", textAr: "نستخدم المستقبل البسيط للحديث عن أشياء ستحدث لاحقًا أو في المستقبل.",
              examples: ["{s:Ali} {a:will} {v:read} {t:tonight}."] },
            { title: "will = plans", text: "We use will to talk about things we plan to do in the future.", textAr: "نستخدم will للحديث عن أشياء نخطط لفعلها في المستقبل.",
              examples: ["{s:I} {a:will} {v:help} my classmates.", "{s:Ali} {a:will} {v:read} {t:tonight}."] },
            { title: "won’t = promises not to do", text: "We use won’t to talk about things we promise not to do. won’t = will not.", textAr: "نستخدم won’t للحديث عن أشياء نَعِد بعدم فعلها. won’t = will not",
              examples: ["{s:We} {n:won’t} {v:talk} when our teacher is speaking.", "{s:She} {n:will not} {v:give up} when something is hard."] },
            { title: "Same for every subject", text: "I / you / they / we / he / she / it + will / won’t + base verb. No -s, no -ing, no “to”.", textAr: "will و won’t مع كل الضمائر، وبعدها الفعل في صورته الأساسية (بدون s أو ing أو to).",
              examples: ["{s:He} {a:will} {v:visit} his grandmother.", "{s:They} {a:will} {v:plant} a tree."], tip: "Short forms: I’ll, you’ll, he’ll, she’ll, we’ll, they’ll" },
            { title: "Questions", text: "Will + subject + base verb?", textAr: "السؤال: Will + الفاعل + الفعل الأساسي؟",
              examples: ["{a:Will} {s:you} {v:call} me {t:this afternoon}?", "{a:Will} {s:Nasser} {v:visit} his grandmother {t:tomorrow}?", "{q:What} {a:will} {s:you} {v:do} {t:this weekend}?"] }
          ],
          table: { head: ["Subject", "+ will / won’t / will not", "Examples"], rows: [["I / You / They / We", "will | won’t / will not + verb", "I will help my classmates. • We won’t talk when our teacher is speaking. • Will you call me this afternoon?"], ["He / She / It / Noun", "will | won’t / will not + verb", "Ali will read tonight. • She will not give up when something is hard. • Will Nasser visit his grandmother tomorrow?"]] },
          worked: { q: "Correct the sentence: Ali will reads tonight.", steps: ["Find the helper: will.", "Rule: after will we use the base verb (no -s).", "reads → read."], a: "Ali will read tonight." }
        },
        { type: "activity", title: "Extra Practice: will or won’t?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it a good plan (will) or a promise NOT to do something (won’t)?",
          items: [
            { t: "choose", q: "I ____ turn off the lights when I leave the room.", options: ["will", "won’t"], answer: 0, why: "Turning off the lights is good. It is a plan → will." },
            { t: "choose", q: "I ____ stay up late on school nights.", options: ["will", "won’t"], answer: 1, why: "Staying up late is not good. I promise not to → won’t." },
            { t: "choose", q: "We ____ throw rubbish on the beach.", options: ["will", "won’t"], answer: 1, why: "Throwing rubbish is bad. We promise not to → won’t." },
            { t: "choose", q: "She ____ plant a tree in the garden.", options: ["will", "won’t"], answer: 0, why: "Planting a tree is good. It is a plan → will." },
            { t: "choose", q: "Ali will ____ tonight.", options: ["read", "reads", "reading"], answer: 0, why: "will + base verb: will read." }
          ] },
        { type: "speak", title: "2. Look at the pictures. Ask your classmates questions using “What will you do...? I will / won’t...”.", page: 55, source: "book", image: "crops/u3l6-ask.jpg",
          instructions: "Look at the pictures. Ask and answer with “What will you do…? I will / won’t…”.",
          example: "What will you do this weekend? I will visit my grandmother. / What won’t you do? I won’t play video games all day.",
          dialogue: [{ who: "A", text: "What will you do this weekend?" }, { who: "B", text: "I will visit my grandmother." }, { who: "A", text: "What won’t you do?" }, { who: "B", text: "I won’t play video games all day." }, { who: "A", text: "What will you do …?" }, { who: "B", text: "" }],
          starters: ["I will switch off the lights.", "I will plant a tree.", "I won’t leave the water running.", "I won’t play video games all day.", "I will visit my family."],
          record: true },
        { type: "activity", title: "Extra Practice: Make it negative", source: "extra", stage: "independent",
          instructions: "Write the negative. Use won’t or will not.",
          items: [
            { t: "fill", q: "I will waste water. → I ____ waste water.", answer: ["won’t", "won't", "will not"], hint: "will → ?", why: "Negative of will = won’t (will not)." },
            { t: "fill", q: "They will cut down the trees. → They ____ cut down the trees.", answer: ["won’t", "won't", "will not"], hint: "will → ?", why: "Negative of will = won’t (will not) + base verb." },
            { t: "fill", q: "Nasser will visit his grandmother tomorrow. → ____ Nasser visit his grandmother tomorrow?", answer: ["Will"], hint: "Make a question.", why: "Question: Will + subject + base verb?" }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "Correct the underlined word.",
          items: [
            { t: "fix", q: "She will {helps} her mother tomorrow.", answer: ["help"], hint: "What comes after will?", why: "will + base verb (no -s): will help." },
            { t: "fix", q: "We will {planting} a tree tomorrow.", answer: ["plant"], hint: "will + which form of the verb?", why: "will + base verb (no -ing): We will plant a tree tomorrow." },
            { t: "fix", q: "He {wills} save water.", answer: ["will"], hint: "will never changes.", why: "will is the same for every subject: He will save water." },
            { t: "fix", q: "I {not will} play video games all day.", answer: ["won’t", "won't", "will not"], hint: "Where does “not” go?", why: "Negative: will not (won’t) + verb." }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a promise.", words: ["I", "will", "turn", "off", "the", "light."], answer: ["I will turn off the light."], why: "Subject + will + verb." },
            { t: "order", q: "Make a negative promise.", words: ["We", "won’t", "talk", "when", "our", "teacher", "is", "speaking."], answer: ["We won’t talk when our teacher is speaking."], why: "Subject + won’t + verb." },
            { t: "order", q: "Make a question.", words: ["Will", "you", "call", "me", "this", "afternoon?"], answer: ["Will you call me this afternoon?"], why: "Will + subject + verb?" }
          ] },
        { type: "write", title: "3. We Will Be Better", page: 55, source: "book",
          instructions: "Create a poster titled “We Will Be Better” and write two sentences using “will” and “won’t.” Then, present your poster to the class.",
          wordBank: ["save", "plant", "study", "pray", "clean", "classroom", "turn off", "light", "stay up", "help", "visit", "kind"],
          wordBankLabel: "Useful Vocabulary",
          frame: [{ label: "1. I will…", hint: "I will …" }, { label: "2. I won’t …", hint: "I won’t …" }],
          model: "1. I will turn off the light when I leave the classroom. 2. I won’t stay up late on school nights.", modelFromBook: false,
          checklist: ["I used will + base verb.", "I used won’t + base verb.", "I started with a capital letter.", "I ended with a full stop."],
          minWords: 10 }
      ],
      game: { kind: "quiz", title: "Future Simple Race", items: [
        { t: "choose", q: "I ____ help my classmates.", options: ["will", "wills"], answer: 0, why: "will never changes." },
        { t: "choose", q: "She will ____ up early.", options: ["wake", "wakes"], answer: 0, why: "will + base verb" },
        { t: "choose", q: "We ____ waste water. (promise not to)", options: ["will", "won’t"], answer: 1, why: "promise not to → won’t" },
        { t: "choose", q: "____ you plant a tree tomorrow?", options: ["Will", "Do"], answer: 0, why: "Future question → Will + subject + verb?" },
        { t: "choose", q: "won’t = ____", options: ["will not", "want not"], answer: 0, why: "won’t is the short form of will not." },
        { t: "choose", q: "They will ____ the park.", options: ["clean", "to clean"], answer: 0, why: "No “to” after will." }
      ] },
      teacher: {
        notes: ["Warm-up: the four pictures — What will you do? What won’t you do?", "Present the rule box and table; stress will + base verb for ALL subjects.", "Worked example → will/won’t (guided) → negatives, mistakes, word order (independent).", "Pairs ask and answer with the five pictures; then make the “We Will Be Better” poster."],
        pair: ["What will you do this weekend? / What won’t you do?", "Promise swap: each partner writes one will and one won’t promise for the other to read aloud."],
        group: ["Class poster wall “We Will Be Better”: each group adds 4 promises with pictures."],
        quick: [{ q: "Correct: He will goes to school.", a: "He will go to school." }, { q: "Make negative: I will stay up late.", a: "I won’t (will not) stay up late." }, { q: "Make a question: Nasser will visit his grandmother.", a: "Will Nasser visit his grandmother?" }]
      }
    },

    /* ───────────────────────── LESSON 7 ───────────────────────── */
    {
      id: "u3l7", num: 7, skill: "Writing", title: "How to Protect the Earth", pages: [56, 57], status: "complete",
      canDo: [
        "I can connect ideas using simple linkers in a paragraph about environmental solutions.",
        "I can write a short paragraph clearly and accurately about protecting the Earth.",
        "I can use punctuation and spelling correctly in a paragraph about how to protect the Earth."
      ],
      goals: ["Find good and bad actions for the planet.", "Write sentences with will and because.", "Plan and write a paragraph with linkers."],
      goalsAr: ["أميّز الأعمال المفيدة والضارة للكوكب.", "أكتب جملًا باستخدام will و because.", "أخطط وأكتب فقرة باستخدام أدوات الربط."],
      linkers: ["first", "next", "after that", "also", "because", "finally"],
      warmup: {
        title: "Look at the actions below.", image: "crops/u3l7-warmup.jpg", emoji: "🌍", seconds: 120,
        instructions: "Look at the actions below. Which ones are good for the planet and which ones are bad.",
        prompts: ["Which actions are good? Which are bad?", "Name one thing you already do to protect the environment.", "What won’t you do to harm the environment?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Draw a ☀️ under the good actions. Draw a 🚫 under the bad actions.", page: 56, source: "book", stage: "guided", image: "crops/u3l7-warmup.jpg",
          instructions: "Look at the six pictures from left to right. Good (☀️) or bad (🚫)?",
          items: [
            { t: "choose", q: "Picture 1: a sink with the tap turned off", options: ["☀️ good", "🚫 bad"], answer: 0, why: "The tap is off and the water drop is smiling: saving water is good." },
            { t: "choose", q: "Picture 2: a girl wrapping food in a lot of plastic", options: ["☀️ good", "🚫 bad"], answer: 1, why: "Using a lot of plastic makes waste. There is a warning sign." },
            { t: "choose", q: "Picture 3: a family with rubbish in the sea", options: ["☀️ good", "🚫 bad"], answer: 1, why: "Rubbish in the sea hurts sea life. There is a warning sign." },
            { t: "choose", q: "Picture 4: a light on in the daytime", options: ["☀️ good", "🚫 bad"], answer: 1, why: "The light is on when the sun is shining: this wastes electricity." },
            { t: "choose", q: "Picture 5: a boy putting a bottle in a recycling bin", options: ["☀️ good", "🚫 bad"], answer: 0, why: "Recycling plastic is good for the planet." },
            { t: "choose", q: "Picture 6: planting a small tree", options: ["☀️ good", "🚫 bad"], answer: 0, why: "Trees give us clean air and homes for animals." }
          ] },
        { type: "discuss", title: "Talk about it.", page: 56, source: "book", emoji: "💬",
          prompts: ["Name one thing you already do to protect the environment.", "What won’t you do to harm the environment?"],
          starters: ["I already …", "I won’t …"] },
        { type: "activity", title: "2a. Tick (√) the sentences that give information or advice about helping the environment.", page: 56, source: "book", stage: "guided",
          instructions: "In pairs, read the following sentences. Does the sentence give information or advice about helping the environment?",
          items: [
            { t: "choose", q: "1. The sky was bright blue, and the wind felt cool on my face.", options: ["√ Yes", "No"], answer: 1, why: "It describes the weather. It does not give information or advice about helping the environment." },
            { t: "choose", q: "2. We can help the Earth by recycling plastic and paper.", options: ["√ Yes", "No"], answer: 0, why: "It gives advice: recycling helps the Earth." },
            { t: "choose", q: "3. Tall green trees stood quietly in the forest.", options: ["√ Yes", "No"], answer: 1, why: "It describes a forest, like a story. No information or advice." },
            { t: "choose", q: "4. Trees give us clean air and homes for animals.", options: ["√ Yes", "No"], answer: 0, why: "It gives information: why trees are important for the environment." }
          ] },
        { type: "activity", title: "b. Explain why you chose each sentence.", page: 56, source: "book", stage: "independent",
          instructions: "Explain your choice.",
          items: [
            { t: "short", q: "Why did you choose sentences 2 and 4?", model: "Sentence 2 gives advice: we can help the Earth by recycling. Sentence 4 gives information: trees give us clean air and homes for animals. Sentences 1 and 3 only describe things.",
              keywords: [["advice", "information", "help", "recycl", "clean air"]], hint: "Which sentences tell us HOW to help or WHY something is important?" }
          ] },
        { type: "write", title: "3. Choose one action from the box. Then, write a full sentence using “will” and “because.”", page: 56, source: "book",
          instructions: "Choose one action: recycle paper – use a water bottle – help animals. Write: I will … because … .",
          example: "• I will turn off the lights to save electricity. • I will clean the park because I want to protect nature.",
          wordBank: ["recycle paper", "use a water bottle", "help animals", "will", "because"],
          frame: [{ label: "My sentence", hint: "I will ……… because ……… ." }],
          model: "I will recycle paper because I want to save trees.", modelFromBook: false,
          checklist: ["I used will + base verb.", "I used because + a reason.", "I started with a capital letter and ended with a full stop."],
          minWords: 8 },
        { type: "activity", title: "4. Fill in the table with four things you will do to help the environment and explain why each one is important.", page: 56, source: "book", stage: "independent",
          instructions: "Write four things you will do, and why each one is important.",
          items: [
            { t: "table", q: "Complete the table.", head: ["What to do", "Why it is important"],
              rows: [
                ["First,", { open: true, model: "I will turn off the lights. → It saves electricity." }],
                ["Next,", { open: true, model: "I will use a water bottle. → It reduces plastic waste." }],
                ["After that,", { open: true, model: "I will recycle paper. → It saves trees." }],
                ["Finally, I promise to", { open: true, model: "help animals. → Many animals are endangered." }]
              ], open: true }
          ] },
        { type: "activity", title: "Extra Practice: Linkers in order", source: "extra", stage: "guided",
          instructions: "Put the linkers in the correct order for a paragraph.",
          items: [
            { t: "order", q: "Put the linkers in order.", words: ["First,", "Next,", "After that,", "Finally,"], answer: ["First, Next, After that, Finally,"], why: "First → Next → After that → Finally (the order in the book’s table)." },
            { t: "choose", q: "I will plant a tree ____ trees give us clean air.", options: ["because", "first"], answer: 0, why: "because gives the reason." },
            { t: "mcq", q: "Which sentence has correct punctuation and capital letters?", options: ["i will recycle plastic", "I will recycle plastic.", "I will recycle plastic"], answer: 1, why: "Start with a capital letter (I) and end with a full stop." }
          ] },
        { type: "write", title: "How to Protect the Earth", page: 57, source: "book", image: "crops/u3l7-collage.jpg",
          instructions: "a. The Earth is our home. We should take care of it. Plan and write a paragraph about “How to Protect the Earth.” Explain what actions we can take to protect the environment and why they are important. b. Write your paragraph.",
          wordBank: ["first", "next", "after that", "also", "because", "finally", "I will ... because...", "It is important to...", "This helps the Earth by...", "We should ... to protect nature."],
          wordBankLabel: "Linker Bank + Useful language",
          frame: [
            { label: "Topic sentence", hint: "Write your main idea clearly." },
            { label: "Supporting details", hint: "Add at least three actions and why they are important.", lines: 3 },
            { label: "Concluding sentence", hint: "End with your final idea or promise." }
          ],
          model: "The Earth is our home, and there are many ways to protect it. First, I will turn off the lights because it saves electricity. Next, I will use a water bottle to reduce plastic waste. After that, I will recycle paper and plastic. This helps the Earth by saving trees. Finally, I will plant a tree because trees give us clean air and homes for animals. It is important to take care of the Earth, so I promise to do something small every day.",
          modelFromBook: false,
          bookChecklist: ["Did I write a clear topic sentence?", "Did I include at least three details?", "Did I use the future simple tense correctly?", "Did I use linkers like first, next, after that, and finally?", "Did I check my punctuation and capital letters?", "Did I use AI tools to proofread my writing?"],
          checklist: ["Capital letters at the start of sentences.", "Full stops at the end of sentences.", "will + base verb.", "Topic sentence, three details, concluding sentence."],
          minWords: 50 }
      ],
      game: { kind: "sort", title: "Good or bad for the planet?", buckets: ["☀️ Good", "🚫 Bad"],
        cards: [["turn off the tap", 0], ["recycle paper", 0], ["plant a tree", 0], ["use a water bottle", 0], ["leave the lights on", 1], ["throw rubbish in the sea", 1], ["waste water", 1], ["use lots of plastic", 1]] },
      teacher: {
        notes: ["Warm-up: good or bad actions (six pictures); students say one thing they already do.", "Tick the information/advice sentences in pairs and explain.", "Write one ‘will … because …’ sentence, then fill in the First / Next / After that / Finally table.", "Plan the paragraph (topic sentence → details → concluding sentence), write it, then check with the Writing Checklist."],
        pair: ["Peer check with the book’s Writing Checklist.", "Swap tables: read your partner’s four actions and ask “Why is it important?”"],
        group: ["Group paragraph: each member writes one supporting detail with a different linker."],
        quick: [{ q: "Which linker comes after “Next”?", a: "After that" }, { q: "Complete: I will recycle paper because …", a: "e.g. I want to save trees." }, { q: "What are the three parts of a paragraph?", a: "Topic sentence, supporting details, concluding sentence." }]
      }
    }
  ]
});

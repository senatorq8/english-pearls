// Unit 3 — Safety & Instructions (printed pages 45–57)
BOOK.addUnit({
  id: "u3", num: 3, title: "Safety & Instructions",
  pages: [45, 57],
  cover: 45,
  status: "complete",
  outcomes: {
    listening: [
      "Identify essential information from spoken texts about safety and instructions.",
      "Recall key details and instructions presented in everyday conversations or announcements.",
      "Explain the significance and reasons behind following specific safety guidelines heard in various contexts.",
      "Infer the potential consequences of not adhering to safety instructions based on spoken information."
    ],
    speaking: [
      "Describe sequential steps clearly when explaining actions or giving advice related to safety.",
      "Express advice and recommendations logically using appropriate sequence and linking words.",
      "Discuss structured ideas effectively about responsibilities, safety measures, and personal actions.",
      "Role-play effectively by giving clear, structured advice in simulated real-life situations involving safety and emergency procedures."
    ],
    reading: [
      "Recognise main ideas and explicit information in informational texts related to safety precautions.",
      "Identify details clearly presented about instructions, signs, and procedures in safety-related texts.",
      "Analyse the relationships between actions, purposes, and outcomes within descriptive and informational readings.",
      "Evaluate the importance and effectiveness of following safety measures presented in texts."
    ],
    writing: [
      "Write clear sentences accurately using connectors to explain the purposes of safety actions and instructions.",
      "Compose logically organised paragraphs to provide clear explanations of safety procedures and their importance.",
      "Develop structured instructional texts using sequence words and linking phrases to show clear progression of ideas.",
      "Plan and write concise reports clearly discussing safety instructions, the rationale behind them, and potential outcomes if followed."
    ]
  },
  lessons: [

    // ───────────────────────── LESSON 1 — READING ─────────────────────────
    {
      id: "u3l1", num: 1, skill: "Reading",
      title: "Staying Safe",
      pages: [48, 49],
      status: "complete",
      canDo: ["I can identify explicit and implicit details effectively from informational reading texts describing safety instructions and the purpose of various safety signs."],
      goals: ["Read a blog about safety signs.", "Learn 12 new words.", "Answer questions about the text.", "Write a short safety story."],
      goalsAr: ["أقرأ مدوّنة عن لافتات السلامة.", "أتعلّم 12 كلمة جديدة.", "أجيب عن أسئلة حول النص.", "أكتب قصة قصيرة عن السلامة."],
      warmup: {
        title: "Before You Read",
        image: "crops/u3l1-warmup.jpg",
        emoji: "🚸",
        prompts: ["Look at the pictures. Then, discuss the questions.", "Where do we usually see signs?", "Why do we need instructions?"],
        seconds: 90
      },
      vocab: [
        { w: "confidently", pos: "adverb", emoji: "😎", def: "in a way that shows you are sure", ex: "I followed the signs confidently, in order to stay calm and avoid confusion.", exFromBook: true, ar: "بثقة", ipa: "/ˈkɒn.fɪ.dənt.li/" },
        { w: "avoid", pos: "verb", emoji: "🙅", def: "to stay away from someone or something", ex: "In busy places, such as shopping centres, signs are used to avoid accidents and protect people.", exFromBook: true, ar: "يتجنّب", ipa: "/əˈvɔɪd/" },
        { w: "safely", pos: "adverb", emoji: "🦺", def: "in a way that avoids danger or harm", ex: "The cars stopped so that we could cross the road safely.", exFromBook: true, ar: "بأمان", ipa: "/ˈseɪf.li/" },
        { w: "prevent", pos: "verb", emoji: "🛑", def: "to stop something from happening", ex: "They help prevent panic during emergencies.", exFromBook: true, ar: "يمنع", ipa: "/prɪˈvent/" },
        { w: "public", pos: "adjective", emoji: "🏬", def: "open for anyone to go to or use", ex: "On Wednesday, I was at the public mall with my mum.", exFromBook: true, ar: "عام", ipa: "/ˈpʌb.lɪk/" },
        { w: "pedestrian", pos: "noun", emoji: "🚶", def: "a person who is walking, especially where cars go", ex: "The pedestrian waited at the zebra crossing.", exFromBook: false, ar: "المشاة", ipa: "/pəˈdes.tri.ən/" },
        { w: "constantly", pos: "adverb", emoji: "🔁", def: "all the time or often", ex: "We do not always think about it, but these signs are around us constantly.", exFromBook: true, ar: "باستمرار", ipa: "/ˈkɒn.stənt.li/" },
        { w: "surrounding", pos: "noun", emoji: "🏙️", def: "everything around you (often: surroundings)", ex: "They are part of our surroundings, helping us every day.", exFromBook: true, ar: "الأطراف أو حولنا", ipa: "/səˈraʊn.dɪŋ/" },
        { w: "announcement", pos: "noun", emoji: "📢", def: "official information that someone says to people", ex: "We listened to an announcement about a delay, then followed signs to the right terminal.", exFromBook: true, ar: "إعلان", ipa: "/əˈnaʊnsmənt/" },
        { w: "delay", pos: "noun", emoji: "⏳", def: "when you wait longer than expected", ex: "There was a delay, so our plane left late.", exFromBook: false, ar: "التأجيل أو التأخير", ipa: "/dɪˈleɪ/" },
        { w: "destination", pos: "noun", emoji: "📍", def: "the place where someone is going", ex: "These signs help travellers reach their destination without getting lost.", exFromBook: true, ar: "وجهة", ipa: "/ˌdes.tɪˈneɪ.ʃən/" },
        { w: "alert", pos: "adjective", emoji: "👀", def: "quick to see, understand and act", ex: "We just need to stay alert and pay attention.", exFromBook: true, ar: "منتبه", ipa: "/əˈlɜːt/" }
      ],
      sections: [
        { type: "reading", title: "Staying Safe", page: 48,
          instructions: "Read the blog and do the tasks that follow.",
          paras: [
            "Signs are talking, are you listening? This week, I started noticing how often signs help us, and I am not just talking about traffic lights!",
            "On Monday at school, we did a fire drill to practise what to do in emergencies. The teachers told the students, “Line up quietly, and walk to the nearest exit.” I followed the signs confidently, in order to stay calm and avoid confusion. These signs are there to guide students, so that everyone can get out safely and quickly. [[They]] help prevent panic during emergencies.",
            "On Wednesday, I was at the public mall with my mum. As we passed the food court, I spotted a yellow “Wet Floor” sign. A boy was walking quickly and almost slipped, but I warned him just in time so that he would not fall. In busy places, such as shopping centres, signs are used to avoid accidents and protect people.",
            "Yesterday, on our way home, my brother and I crossed the street at a zebra crossing. The red traffic light and pedestrian sign appeared just in time. The cars stopped so that we could cross the road safely. We do not always think about it, but these signs are around us constantly. They are part of our surroundings, helping us every day.",
            "Last weekend, we went to the airport to pick up my uncle. There were signs for check-in, gates, and baggage claim. We listened to an announcement about a delay, then followed signs to the right terminal. These signs help travellers reach their destination without getting lost.",
            "So, here is what I learned: signs are silent helpers. They are there to keep us safe and organise movement so that everyone knows what to do. We just need to stay alert and pay attention.",
            "Next time you see a sign, ask yourself, “What is it trying to tell me?”."
          ],
          speaker: null },

        { type: "activity", title: "a. Choose the correct answer from a, b, c or d.", page: 49, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. The underlined word “they” in the 2nd paragraph refers to?", options: ["teachers", "emergencies", "students", "signs"], answer: 3,
              hint: "Read the sentence before “They”: “These signs are there to guide students…”", why: "“These signs … They help prevent panic.” — “They” means the signs." },
            { t: "mcq", q: "2. What is the main idea of the passage?", options: ["Signs guide and protect us.", "Fire drills happen often at schools.", "All the airports need more signs.", "Street accidents can happen every day."], answer: 0,
              hint: "What is every paragraph about?", why: "Every paragraph shows signs helping people: at school, the mall, the street and the airport." },
            { t: "mcq", q: "3. The writer calls signs “silent helpers” because:", options: ["they are not important.", "only children use them.", "they can speak quietly.", "they help people without using words."], answer: 3,
              hint: "Silent = no sound, no words.", why: "Signs do not talk, but they still help us. So they help without using words." }
          ] },

        { type: "activity", title: "b. Answer the following questions.", page: 49, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. What happened at the mall food court?",
              model: "The writer saw a yellow “Wet Floor” sign. A boy was walking quickly and almost slipped, but the writer warned him just in time so that he would not fall.",
              keywords: [["slip", "fall"], ["warn"]],
              hint: "Read paragraph 3 (On Wednesday…)." },
            { t: "short", q: "2. How do signs help at the airport?",
              model: "Signs for check-in, gates and baggage claim help travellers reach their destination without getting lost.",
              keywords: [["destination", "right terminal", "gate", "way"], ["lost", "reach"]],
              hint: "Read paragraph 5 (Last weekend…)." }
          ] },

        { type: "activity", title: "Complete each sentence using the words below.", page: 49, source: "book",
          instructions: "Use the words: confidently – delay – destination – announcement – constantly. One word is extra.", instructionsAr: "أكمل الجمل بالكلمات. توجد كلمة زائدة.",
          items: [
            { t: "fill", q: "1. The train was late because of a long ____.", answer: ["delay"], bank: ["confidently", "delay", "destination", "announcement", "constantly"],
              why: "A delay makes a train late." },
            { t: "fill", q: "2. The teacher made an important ____ in the morning assembly.", answer: ["announcement"], bank: ["confidently", "delay", "destination", "announcement", "constantly"],
              why: "We “make an announcement” to give information to many people." },
            { t: "fill", q: "3. We reached our final ____ just before sunset.", answer: ["destination"], bank: ["confidently", "delay", "destination", "announcement", "constantly"],
              why: "Destination = the place where you are going." },
            { t: "fill", q: "4. She walked ____ across the stage to receive her award.", answer: ["confidently"], bank: ["confidently", "delay", "destination", "announcement", "constantly"],
              why: "An adverb describes how she walked: confidently (sure of herself)." }
          ] },

        { type: "write", title: "My Safety Story", page: 49, source: "book",
          instructions: "a. Write a three-sentence paragraph about a time when you had to follow safety rules or signs. The following list of words may help you.",
          wordBank: ["alert", "avoid", "announcement", "delay", "pedestrian", "destination"],
          frame: [
            { label: "Sentence 1", hint: "I remember a time when... / There was an announcement that said..." },
            { label: "Sentence 2", hint: "We had to avoid... / I stayed alert because..." },
            { label: "Sentence 3", hint: "I felt ........ when I saw the safety sign." }
          ],
          model: "There was a delay at the airport, so we listened carefully to the announcement. Then, I walked safely to the gate, staying alert in the crowded terminal.",
          modelFromBook: true,
          checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I wrote three sentences.", "I used words from the list."],
          minWords: 25 },

        { type: "speak", title: "b. Share your writing", page: 49, source: "book",
          instructions: "Share your writing by reading your sentences aloud and clearly.",
          dialogue: [],
          starters: ["I remember a time when...", "There was an announcement that said...", "We had to avoid...", "I stayed alert because...", "I felt ........ when I saw the safety sign."],
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false?", instructionsAr: "هل الجملة صحيحة أم خاطئة؟",
          items: [
            { t: "mcq", q: "The students did a fire drill on Monday.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“On Monday at school, we did a fire drill…”" },
            { t: "mcq", q: "The writer saw a red “Wet Floor” sign.", options: ["True", "False"], answer: 1, hint: "What colour was the sign?", why: "The sign was yellow, not red." },
            { t: "mcq", q: "The writer crossed the street at a zebra crossing.", options: ["True", "False"], answer: 0, hint: "Paragraph 4.", why: "“…my brother and I crossed the street at a zebra crossing.”" },
            { t: "mcq", q: "The family went to the airport to pick up the writer's uncle.", options: ["True", "False"], answer: 0, hint: "Paragraph 5.", why: "“…we went to the airport to pick up my uncle.”" },
            { t: "mcq", q: "Signs only help us on the road.", options: ["True", "False"], answer: 1, hint: "Think about all the places in the blog.", why: "Signs help at school, at the mall, on the street and at the airport." }
          ] },

        { type: "activity", title: "Extra Practice: Where did it happen?", source: "extra", stage: "guided",
          instructions: "Match each place to what happened there.", instructionsAr: "صِل كل مكان بما حدث فيه.",
          items: [
            { t: "match", q: "Match the place to the event in the blog.",
              pairs: [["School", "a fire drill"], ["The mall", "a “Wet Floor” sign"], ["The street", "a zebra crossing"], ["The airport", "an announcement about a delay"]],
              hint: "Each paragraph has one place.", why: "Monday = school, Wednesday = mall, yesterday = street, last weekend = airport." }
          ] },

        { type: "activity", title: "Extra Practice: Easy word check", source: "extra", stage: "independent",
          instructions: "Choose the right word.", instructionsAr: "اختر الكلمة المناسبة.",
          items: [
            { t: "choose", q: "Wear a seat belt to drive (safely / constantly).", options: ["safely", "constantly"], answer: 0, why: "Safely = without danger." },
            { t: "choose", q: "A (pedestrian / destination) is a person who is walking.", options: ["pedestrian", "destination"], answer: 0, why: "A pedestrian walks; a destination is a place." },
            { t: "choose", q: "Stay (alert / public) when you cross the road.", options: ["alert", "public"], answer: 0, why: "Alert = watching carefully." },
            { t: "choose", q: "Signs help (prevent / delay) accidents.", options: ["prevent", "delay"], answer: 0, why: "Prevent = stop something from happening." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the sign picture. Students name the signs (exit, danger, no parking, no phones…).",
          "Pre-teach the 12 words with emoji and Arabic; drill the pronunciation.",
          "Read the blog paragraph by paragraph. After each one ask: Where? What sign? How did it help?",
          "Do 3a and 3b, then the vocabulary task (one word is extra: constantly).",
          "Model the Safety Story with the book example, then students write three sentences."
        ],
        pair: ["Partner A reads a paragraph aloud; partner B says the place and the sign.", "Pairs read their Safety Story to each other and give one star and one wish."],
        group: ["Groups of 4: each student takes one place (school, mall, street, airport) and draws the sign and explains it to the group."],
        quick: [
          { q: "What does “they” refer to in paragraph 2?", a: "signs" },
          { q: "Why does the writer call signs “silent helpers”?", a: "They help people without using words." },
          { q: "What does “destination” mean?", a: "The place where you are going." },
          { q: "Which sign did the writer see at the mall?", a: "A yellow “Wet Floor” sign." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR (SHOWCASE) ─────────────────────────
    {
      id: "u3l2", num: 2, skill: "Grammar",
      title: "Purpose Connectors (to, in order to, so that)",
      pages: [50, 50],
      status: "complete",
      canDo: ["I can use connectors (to,in order to,so that) clearly and accurately to express the purpose behind actions related to safety and everyday tasks."],
      goals: ["Say WHY we do things.", "Use to / in order to + base verb.", "Use so that + subject + verb.", "Write safety sentences with purpose."],
      goalsAr: ["أقول لماذا نفعل الأشياء.", "أستخدم to / in order to + الفعل في صيغته الأساسية.", "أستخدم so that + فاعل + فعل.", "أكتب جملًا عن السلامة تبيّن الغرض."],
      warmup: {
        title: "Discuss the pictures.",
        image: "crops/u3l2-warmup.jpg",
        emoji: "🪖",
        prompts: ["What safety actions are happening?", "Why do you think each action is necessary?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Purpose Connectors (to, in order to, so that)", page: 50,
          steps: [
            { title: "Step 1 — What is a purpose connector?",
              text: "We use to, in order to and so that to show purpose. A purpose connector answers the question “Why?”.",
              textAr: "نستخدم to و in order to و so that لنبيّن الغرض، أي لنجيب عن سؤال: لماذا؟",
              examples: [
                "{s:We} {v:wear} {o:helmets} {c:to} {p:protect our heads}.",
                "{v:Wash} {o:your hands} {t:regularly} {c:in order to} {p:avoid illness}.",
                "{s:We} {v:turn off} {o:the lights} {c:so that} {p:we can save electricity}."
              ] },
            { title: "Step 2 — to + base verb",
              text: "After to we use the base verb: protect, stay, avoid (no -s, no -ing, no -ed). This is the simple way.",
              textAr: "بعد to نستخدم الفعل في صيغته الأساسية بدون s أو ing أو ed.",
              examples: [
                "{s:We} {v:wear} {o:helmets} {c:to} {p:protect} our heads.",
                "Why do we wear helmets? → {c:To} {p:protect} our heads."
              ] },
            { title: "Step 3 — in order to + base verb",
              text: "in order to means the same as to. It is more formal. We also use the base verb after it. For purpose, to and in order to are usually interchangeable: both are correct.",
              textAr: "in order to لها معنى to نفسه لكنها أكثر رسمية، وبعدها فعل في صيغته الأساسية. غالبًا يمكن استخدام أيٍّ منهما، وكلاهما صحيح.",
              examples: [
                "{v:Wash} {o:your hands} {t:regularly} {c:in order to} {p:avoid} illness.",
                "= {v:Wash} {o:your hands} {t:regularly} {c:to} {p:avoid} illness. ✓ (same meaning)"
              ] },
            { title: "Step 4 — so that + subject + verb",
              text: "After so that we need a subject (I, we, she, everyone…) and a verb. We often use can (now / future) or could (past).",
              textAr: "بعد so that نحتاج إلى فاعل ثم فعل، وغالبًا نستخدم can للحاضر أو المستقبل و could للماضي.",
              examples: [
                "{s:We} {v:turn off} {o:the lights} {c:so that} {s:we} {a:can} {v:save} electricity.",
                "{s:The cars} {v:stopped} {c:so that} {s:we} {a:could} {v:cross} the road safely. (from the Staying Safe blog — past → could)"
              ] },
            { title: "Step 5 — Picture examples (Extra)", source: "extra",
              text: "🪖 Look at the helmet. Why do I wear it? 📚 Look at the books. Why do I study hard?",
              textAr: "أمثلة مصوّرة إضافية (ليست من الكتاب).",
              examples: [
                "🪖 {s:I} {v:wear} {o:a helmet} {c:to} {p:protect my head}.",
                "📚 {s:I} {v:study} {t:hard} {c:so that} {s:I} {a:can} {v:pass} the exam."
              ] },
            { title: "Step 6 — Be careful!",
              text: "Look at the word after the connector. A base verb → to / in order to. A subject + verb → so that.",
              textAr: "انظر إلى الكلمة بعد أداة الربط: فعل أساسي ← to / in order to. فاعل + فعل ← so that.",
              examples: [
                "✗ I wear a helmet to {n:protecting} my head. → ✓ to {v:protect}",
                "✗ I study hard so that {n:pass} the exam. → ✓ so that {s:I} {a:can} {v:pass}",
                "✗ She locks the door in order to {n:her family can} stay safe. → ✓ {c:so that} {s:her family} {a:can} stay safe"
              ] }
          ],
          table: {
            head: ["Connector", "Purpose", "Form", "Example"],
            rows: [
              ["to", "in a simple way", "verb + to + base verb", "We wear helmets to protect our heads."],
              ["in order to", "in a formal way", "verb + in order to + base verb", "Wash your hands regularly in order to avoid illness."],
              ["so that", "with clear result", "verb + so that + subject + can + base verb", "We turn off the lights so that we can save electricity."]
            ]
          },
          worked: {
            q: "Complete: Ahmed leaves home early ____ he can catch the bus. (to / in order to / so that)",
            steps: [
              "Look at the word after the gap: “he”. It is a subject.",
              "After the subject we have “can catch” (can + base verb).",
              "to and in order to need a base verb right after them, not a subject.",
              "So the answer is so that."
            ],
            a: "Ahmed leaves home early so that he can catch the bus."
          },
          notes: [
            "Quick test: base verb after the gap → to OR in order to (both correct). Subject + verb after the gap → so that.",
            "“to” is not always a purpose connector: in “went to the airport” or “listened to an announcement”, to comes before a noun (a place or thing). That is a preposition, not purpose.",
            "Past sentences: so that + could / would (The cars stopped so that we could cross)."
          ] },

        { type: "activity", title: "Find and highlight the connectors “to,” “in order to,” and “so that” in the Staying Safe reading passage.", page: 50, source: "book", stage: "guided",
          instructions: "Read each sentence from the Staying Safe blog (page 48). Which purpose connector is in it? Then read the why: what purpose does it show?",
          instructionsAr: "اقرأ كل جملة من نص Staying Safe. ما أداة الغرض فيها؟ وما الغرض الذي تبيّنه؟",
          items: [
            { t: "choose", q: "“On Monday at school, we did a fire drill to practise what to do in emergencies.”", options: ["to", "in order to", "so that"], answer: 0,
              hint: "Why did they do the fire drill?", why: "to + practise (base verb). Purpose: they did the drill to practise what to do in emergencies. (The “to” in “what to do” is not a purpose connector.)" },
            { t: "choose", q: "“I followed the signs confidently, in order to stay calm and avoid confusion.”", options: ["to", "in order to", "so that"], answer: 1,
              hint: "Look after the comma.", why: "in order to + stay (base verb). Purpose: the writer followed the signs to stay calm and avoid confusion." },
            { t: "choose", q: "“These signs are there to guide students, so that everyone can get out safely and quickly.” (This sentence has TWO connectors.)", options: ["to", "in order to", "so that"], answer: [0, 2],
              hint: "Find two connectors.", why: "to + guide (base verb) and so that + everyone (subject) + can get out. Purpose: signs guide students so that everyone gets out safely." },
            { t: "choose", q: "“A boy was walking quickly and almost slipped, but I warned him just in time so that he would not fall.”", options: ["to", "in order to", "so that"], answer: 2,
              hint: "Look for a subject after the connector.", why: "so that + he (subject) + would not fall. Purpose: the writer warned the boy so that he would not fall (past → would)." },
            { t: "choose", q: "“In busy places, such as shopping centres, signs are used to avoid accidents and protect people.”", options: ["to", "in order to", "so that"], answer: 0,
              hint: "Why are signs used?", why: "to + avoid (base verb). Purpose: signs are used to avoid accidents and protect people." },
            { t: "choose", q: "“The cars stopped so that we could cross the road safely.”", options: ["to", "in order to", "so that"], answer: 2,
              hint: "Why did the cars stop?", why: "so that + we (subject) + could cross. Purpose: the cars stopped so that the children could cross safely (past → could)." },
            { t: "choose", q: "“Last weekend, we went to the airport to pick up my uncle.” Which “to” shows purpose?", options: ["to the airport", "to pick up"], answer: 1,
              hint: "Purpose to is followed by a verb.", why: "“to pick up” = to + base verb → purpose (why they went). “to the airport” = to + a place → not purpose." },
            { t: "choose", q: "“They are there to keep us safe and organise movement so that everyone knows what to do.” (This sentence has TWO connectors.)", options: ["to", "in order to", "so that"], answer: [0, 2],
              hint: "Find two connectors.", why: "to + keep (base verb) and so that + everyone (subject) + knows. Purpose: signs keep us safe and help everyone know what to do." },
            { t: "mcq", q: "“We listened to an announcement about a delay.” Does “to” show purpose here?", options: ["Yes", "No"], answer: 1,
              hint: "What comes after “to”: a verb or a noun?", why: "After to comes “an announcement” (a noun). “listen to” is a verb + preposition, so it is not a purpose connector." },
            { t: "short", q: "How do they show the purpose of each action?",
              model: "They answer the question “Why?”. to and in order to are followed by a base verb (to practise, in order to stay). so that is followed by a subject + verb (so that everyone can get out, so that we could cross).",
              keywords: [["why", "reason", "purpose"]],
              hint: "Think: which question do they answer? What comes after each connector?" }
          ] },

        { type: "activity", title: "Match the sentence beginnings to their correct endings.", page: 50, source: "book", stage: "guided",
          instructions: "Tap a beginning, then tap its ending.", instructionsAr: "صِل بداية كل جملة بنهايتها الصحيحة.",
          items: [
            { t: "match", q: "Match the sentence beginnings to their correct endings.",
              pairs: [
                ["1. She exercises regularly in order to", "stay healthy and strong."],
                ["2. I carry an umbrella so that", "I can stay dry in the rain."],
                ["3. We follow traffic signs to", "avoid accidents."]
              ],
              hint: "so that needs a subject (I). to / in order to need a base verb.",
              why: "“so that” goes with “I can stay dry” (subject + can + verb). Exercise → healthy and strong; traffic signs → avoid accidents. Both “in order to” and “to” are followed by a base verb (stay, avoid)." }
          ] },

        { type: "activity", title: "Complete the sentences correctly with (to, in order to, so that).", page: 50, source: "book", stage: "guided",
          instructions: "Tap a word chip. Look at the word after the gap.", instructionsAr: "اختر أداة الربط المناسبة. انظر إلى الكلمة بعد الفراغ.",
          items: [
            { t: "fill", q: "1. You should turn off electrical devices ____ prevent fires.", answer: ["to", "in order to"], bank: ["to", "in order to", "so that"],
              hint: "“prevent” is a base verb.", why: "A base verb (prevent) comes next, so both “to” and “in order to” are correct. “in order to” is more formal." },
            { t: "fill", q: "2. She locks the doors at night ____ her family can stay safe.", answer: ["so that"], bank: ["to", "in order to", "so that"],
              hint: "“her family” is a subject.", why: "A subject + can + verb comes next (her family can stay), so we need “so that”." },
            { t: "fill", q: "3. We learn swimming ____ stay safe near water.", answer: ["to", "in order to"], bank: ["to", "in order to", "so that"],
              hint: "“stay” is a base verb.", why: "A base verb (stay) comes next, so both “to” and “in order to” are correct." }
          ] },

        { type: "write", title: "Write three sentences about 3 safety actions you do in a place.", page: 50, source: "book",
          instructions: "Choose any place you like (school, kitchen, mall, airport…etc.). Use (to, in order to, so that) in your sentences.",
          wordBank: ["to", "in order to", "so that", "can", "could"],
          frame: [
            { label: "Sentence 1 (to)", hint: "At school, I … to …" },
            { label: "Sentence 2 (in order to)", hint: "I … in order to …" },
            { label: "Sentence 3 (so that)", hint: "I … so that I can …" }
          ],
          model: "At school, I walk slowly in the corridor to avoid accidents. I wash my hands before lunch in order to stay healthy. During a fire drill, I listen to my teacher so that I can get out safely.",
          modelFromBook: false,
          checklist: ["I used to, in order to and so that.", "After to / in order to I used a base verb.", "After so that I used a subject + verb.", "I started with a capital letter and ended with a full stop."],
          minWords: 20 },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the connector (with chips)", source: "extra", stage: "guided",
          instructions: "Choose the correct connector. Sometimes TWO answers are correct.", instructionsAr: "اختر أداة الربط الصحيحة. أحيانًا تكون إجابتان صحيحتين.",
          items: [
            { t: "mcq", q: "Drink water ____ stay hydrated.", options: ["to", "in order to", "so that"], answer: [0, 1],
              hint: "Is “stay” a verb or a subject?", why: "“stay” is a base verb, so “to” and “in order to” are both correct." },
            { t: "mcq", q: "Wear a seat belt ____ you can stay safe in the car.", options: ["to", "in order to", "so that"], answer: 2,
              hint: "Look for a subject: you.", why: "“you can stay” = subject + can + verb → so that." },
            { t: "mcq", q: "Mum checks the gas ____ prevent fires.", options: ["to", "in order to", "so that"], answer: [0, 1],
              hint: "“prevent” is a base verb.", why: "Base verb after the gap → “to” or “in order to”. Both are correct." },
            { t: "mcq", q: "Look left and right ____ you can cross the road safely.", options: ["to", "in order to", "so that"], answer: 2,
              hint: "Who can cross? you.", why: "Subject (you) + can + verb → so that." },
            { t: "mcq", q: "I wear a helmet to ____ my head.", options: ["protect", "protecting", "protects"], answer: 0,
              hint: "After “to” use the base verb.", why: "to + base verb: to protect (not protecting / protects)." },
            { t: "mcq", q: "I study hard so that I ____ pass the exam.", options: ["can", "to", "in order to"], answer: 0,
              hint: "so that + subject + can + verb.", why: "so that I can pass — we need “can” after the subject." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🪖 Make a sentence.", words: ["I", "wear", "a", "helmet", "to", "protect", "my", "head."],
              answer: ["I wear a helmet to protect my head."],
              hint: "Start with I + verb. Then: to + base verb.", why: "Action (I wear a helmet) + to + base verb (protect) = the purpose." },
            { t: "order", q: "📚 Make a sentence.", words: ["I", "study", "hard", "so", "that", "I", "can", "pass", "the", "exam."],
              answer: ["I study hard so that I can pass the exam."],
              hint: "After so that: subject + can + verb.", why: "Action (I study hard) + so that + subject (I) + can + verb (pass) = the purpose." },
            { t: "order", q: "🧼 Make a sentence.", words: ["We", "wash", "our", "hands", "in", "order", "to", "avoid", "illness."],
              answer: ["We wash our hands in order to avoid illness."],
              hint: "“in order to” stays together.", why: "Action (We wash our hands) + in order to + base verb (avoid)." },
            { t: "order", q: "🚗 Make a sentence.", words: ["Wear", "a", "seat", "belt", "to", "stay", "safe."],
              answer: ["Wear a seat belt to stay safe."],
              hint: "This is an instruction. Start with the verb.", why: "Instruction (Wear a seat belt) + to + base verb (stay)." },
            { t: "order", q: "🔦 Make a sentence.", words: ["She", "carries", "a", "torch", "so", "that", "she", "can", "see", "at", "night."],
              answer: ["She carries a torch so that she can see at night."],
              hint: "After so that: she + can + verb.", why: "Action (She carries a torch) + so that + she + can + see." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct word(s).", instructionsAr: "يوجد خطأ واحد. اكتب التصحيح.",
          items: [
            { t: "fix", q: "We wear helmets to {protecting} our heads.", answer: ["protect"],
              hint: "to + base verb.", why: "After to we use the base verb: protect." },
            { t: "fix", q: "She runs every day {so that} stay fit.", answer: ["to", "in order to"],
              hint: "“stay” is a base verb.", why: "A base verb follows, so “to” or “in order to” — both are correct." },
            { t: "fix", q: "He leaves early {to} he can catch the bus.", answer: ["so that"],
              hint: "“he can catch” has a subject.", why: "Subject + can + verb → so that." },
            { t: "fix", q: "They save money in order to {buys} a new bike.", answer: ["buy"],
              hint: "in order to + base verb.", why: "After in order to we use the base verb: buy." },
            { t: "short", q: "Finish the sentence: I turn off the tap so that …", model: "I turn off the tap so that I can save water.",
              keywords: [["can", "could"]], hint: "so that + subject + can + verb." },
            { t: "short", q: "Write your own sentence with “in order to” about the kitchen.", model: "I use a cloth in order to hold the hot pan.",
              open: true, hint: "Action + in order to + base verb." }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder",
        sentences: [
          "I wear a helmet to protect my head.",
          "I study hard so that I can pass the exam.",
          "We follow traffic signs to avoid accidents.",
          "Wash your hands in order to avoid illness.",
          "The cars stopped so that we could cross the road."
        ] },
      teacher: {
        notes: [
          "Warm-up: show the three photos (helmet, washing hands, seat belt). Ask “Why?” for each and write the answers.",
          "Teach step by step: to + base verb → in order to (same meaning, more formal) → so that + subject + can/could + verb.",
          "Stress: for purpose, to and in order to are usually both correct. Never mark one of them wrong.",
          "Do the worked example on the board: look at the word after the gap.",
          "Book tasks: Find in the passage → Match → Complete → Write. Weak students then do Extra Steps 1–3."
        ],
        pair: ["“Why?” chain: A says an action (I drink water). B adds a purpose (to stay hydrated). Then swap.", "Pairs find the connectors in the Staying Safe blog and highlight them in two colours: to/in order to = blue, so that = red."],
        group: ["Groups write 3 safety sentences for one place (kitchen, mall, beach) and present them as a poster.", "Sentence-strip race: cut sentences into words; groups rebuild them fastest."],
        quick: [
          { q: "What comes after “to” and “in order to”?", a: "A base verb (e.g. protect)." },
          { q: "What comes after “so that”?", a: "A subject + verb (often can/could): so that I can …" },
          { q: "Which is more formal: “to” or “in order to”?", a: "in order to (both have the same meaning)." },
          { q: "Complete: We learn swimming ___ stay safe near water.", a: "to / in order to (both correct)" },
          { q: "Complete: She locks the doors ___ her family can stay safe.", a: "so that" }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — LISTENING ─────────────────────────
    {
      id: "u3l3", num: 3, skill: "Listening",
      title: "Signs Save Lives",
      pages: [51, 51],
      status: "complete",
      canDo: ["I can analyse key explicit instructions and details from spoken texts about the importance of following safety signs and instructions in public places."],
      goals: ["Listen to a podcast about safety signs.", "Write the missing information.", "Act out a safety role play."],
      goalsAr: ["أستمع إلى بودكاست عن لافتات السلامة.", "أكتب المعلومات الناقصة.", "أؤدي حوارًا تمثيليًا عن السلامة."],
      linkers: ["first", "next", "also", "in addition", "therefore", "finally", "in order to", "so that"],
      warmup: {
        title: "Signs Save Lives",
        image: "crops/u3l3-warmup.jpg",
        emoji: "🛫",
        prompts: ["Look at the picture. Where is the family?", "What does the sign tell them?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "reading", title: "Read the paragraph. Then, discuss the questions that follow.", page: 51,
          paras: ["A boy was at the airport with his family. They were heading to their gate when they heard an announcement and saw a sign pointing to a new gate. His father followed the sign, and they reached the flight on time."],
          speaker: null },

        { type: "discuss", title: "Discuss the questions", page: 51, source: "book",
          prompts: ["1. Was it important to follow the sign? Why?", "2. What could have happened if they ignored it?"],
          image: null, emoji: "💬" },

        { type: "listen", title: "Listen to the \"Signs Save Lives\" Podcast. Then, fill in the missing information.", page: 51, source: "book",
          needsAudio: true,
          audio: "audio/7A-p51.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/ERGiowTh9hFMkzI6RcM29YMBdJ9DgMM4-qjsH5BMgNlT9w?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RFzWEt",
          instructions: "Listen to the podcast (track 3.1). Write the missing information in the table.",
          items: [
            { t: "table", q: "Fill in the missing information.", open: true,
              head: ["Speaker", "Location and Situation", "Safety Sign Used", "Action Taken/ Result"],
              rows: [
                ["Abdullah", "At the stadium during a sudden blackout", { open: true }, { open: true }],
                ["Yousef", { open: true }, "Wet Floor", { open: true }],
                ["Faisal", { open: true }, { open: true }, "Avoided a fine and stayed safe by turning around"]
              ] }
          ] },

        { type: "listen", title: "Listen again, then answer the following questions.", page: 51, source: "book",
          needsAudio: true,
          audio: "audio/7A-p51.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/ERGiowTh9hFMkzI6RcM29YMBdJ9DgMM4-qjsH5BMgNlT9w?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RFzWEt",
          instructions: "Listen again. Answer the questions.",
          items: [
            { t: "short", q: "1. What might have happened if the stadium didn’t have clear emergency signs?", open: true, hint: "Think: blackout, a big crowd, no signs to the exits." },
            { t: "short", q: "2. How do you think Yousef felt after helping the boy? and why?", open: true, hint: "I think he felt … because …" },
            { t: "short", q: "3. What can we learn about Faisal’s father’s character from his actions?", open: true, hint: "He was … (careful? responsible?) because …" }
          ] },

        { type: "speak", title: "Role play", page: 51, source: "book",
          instructions: "Choose a place (school, park, beach, mall, etc.) and create a short dialogue where someone sees a safety sign and avoids danger. Then, switch roles with your partner. • Choose an emergency situation. • Tell your partner what to do and what not to do during the emergency.",
          dialogue: [
            { who: "A", text: "Look! There is a sign over there." },
            { who: "B", text: "" },
            { who: "A", text: "What should we do?" },
            { who: "B", text: "" }
          ],
          starters: ["The sign says …", "First, we should …", "We shouldn't …", "… so that we can stay safe.", "Finally, …"],
          record: true },

        { type: "listen", title: "Extra Practice: The Beach Sign (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Host", text: "Welcome to Safety Corner. Today, Mariam tells us about her trip to the beach." },
            { who: "Mariam", text: "Last Friday, I went to the beach with my family. We saw a red sign. It said, “No Swimming – Strong Waves”." },
            { who: "Host", text: "What did you do?" },
            { who: "Mariam", text: "First, we read the sign carefully. Next, we stayed on the sand. Then, we played volleyball and built sandcastles. A lifeguard told us that the waves were dangerous that day." },
            { who: "Host", text: "Why is the sign important?" },
            { who: "Mariam", text: "It is there so that people do not swim in dangerous water. My little brother wanted to swim, but my father said, “Not today. We follow the signs to stay safe.”" }
          ],
          items: [
            { t: "mcq", q: "Where did Mariam go?", options: ["to the mall", "to the beach", "to the airport", "to school"], answer: 1, why: "“I went to the beach with my family.”" },
            { t: "mcq", q: "What colour was the sign?", options: ["yellow", "green", "red", "blue"], answer: 2, why: "“We saw a red sign.”" },
            { t: "mcq", q: "What did the sign say?", options: ["Wet Floor", "No Swimming – Strong Waves", "Exit", "No Parking"], answer: 1, why: "“It said, No Swimming – Strong Waves.”" },
            { t: "mcq", q: "What did the family do?", options: ["They went swimming.", "They went home.", "They played volleyball and built sandcastles.", "They went fishing."], answer: 2, why: "“Then, we played volleyball and built sandcastles.”" },
            { t: "mcq", q: "Who said the waves were dangerous?", options: ["a lifeguard", "Mariam's brother", "the host", "a teacher"], answer: 0, why: "“A lifeguard told us that the waves were dangerous that day.”" },
            { t: "fill", q: "The sign is there so ____ people do not swim in dangerous water.", answer: ["that"], bank: ["that", "to", "order"], why: "“so that” + subject (people) + verb." }
          ] }
      ],
      game: { kind: "quiz", title: "Sign Quiz",
        items: [
          { t: "mcq", q: "You see “Wet Floor”. What should you do?", options: ["Run fast", "Walk slowly and carefully", "Jump"], answer: 1, why: "A wet floor is slippery." },
          { t: "mcq", q: "There is a blackout. Which sign helps you get out?", options: ["Exit", "No Parking", "Toilets"], answer: 0, why: "Exit signs show the way out." },
          { t: "mcq", q: "An announcement says your gate has changed. What should you do?", options: ["Ignore it", "Follow the signs to the new gate", "Go home"], answer: 1, why: "In the book paragraph, the father followed the sign and they reached the flight on time." },
          { t: "mcq", q: "Which linker shows a result?", options: ["first", "therefore", "next"], answer: 1, why: "Therefore shows a result or conclusion." },
          { t: "mcq", q: "Which word is a sequence word?", options: ["finally", "so that", "because"], answer: 0, why: "First, next, then, finally show steps." }
        ] },
      teacher: {
        notes: [
          "Read the airport paragraph together and discuss the two questions.",
          "Open the book's QR audio link (track 3.1). Play once for the table, once more for the questions.",
          "Check the table orally — there is no answer key, so accept answers that match what students heard.",
          "Role play: give 3 minutes to plan; remind students to use the Linkers Bank.",
          "If the audio is not available, use the Extra Practice script (computer voice)."
        ],
        pair: ["Role play in pairs: one sees the sign, one gives advice; then switch.", "Pairs compare their table answers before class feedback."],
        group: ["Groups of 3: each student is one speaker (Abdullah, Yousef, Faisal) and retells his story."],
        quick: [
          { q: "Why is it important to follow signs?", a: "To stay safe / to avoid danger." },
          { q: "Where was Abdullah?", a: "At the stadium during a sudden blackout." },
          { q: "Which sign did Yousef see?", a: "Wet Floor." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — SPEAKING ─────────────────────────
    {
      id: "u3l4", num: 4, skill: "Speaking",
      title: "Say It in Steps",
      pages: [52, 52],
      status: "complete",
      canDo: ["I can present clearly structured oral advice using sequencing language (first, next, then, finally) related to safety actions and responsible behaviours."],
      goals: ["Give advice in steps.", "Use first, next, then, after that, finally.", "Use should and shouldn't."],
      goalsAr: ["أقدّم نصيحة على شكل خطوات.", "أستخدم كلمات الترتيب first, next, then, after that, finally.", "أستخدم should و shouldn't."],
      linkers: ["first", "next", "also", "in addition", "therefore", "finally", "in order to", "so that"],
      warmup: {
        title: "Discuss with your partner.",
        image: "crops/u3l4-warmup.jpg",
        emoji: "🛴",
        prompts: ["What happened to the boy?", "What advice would you give him?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Tip: Sequence Words", page: 52,
          steps: [
            { title: "Sequence Words: (First – Next – Then – After that – Finally)",
              text: "Use them to show steps at the beginning of the sentence / paragraph. They are always followed by commas.",
              textAr: "نستخدم كلمات الترتيب في بداية الجملة لبيان الخطوات، وتأتي بعدها دائمًا فاصلة.",
              examples: ["{t:First,} you {a:should} {v:ride} slowly.", "{t:Then,} you {n:shouldn't} {v:ride} fast.", "{t:Finally,} you {a:should} {v:wear} a helmet."] },
            { title: "should / shouldn't",
              text: "should = a good idea. shouldn't = not a good idea. After should / shouldn't we use the base verb.",
              textAr: "should = من الجيد أن، shouldn't = ليس من الجيد أن، وبعدهما فعل في صيغته الأساسية.",
              examples: ["You {a:should} {v:stay} calm.", "You {n:shouldn't} {v:shout} at him."] }
          ],
          notes: ["Remember the comma: First, … / Then, … / Finally, …"] },

        { type: "speak", title: "Look at the pictures and give advice by completing the following blanks.", page: 52, source: "book",
          instructions: "Look at the boy on the scooter. Give advice in steps.",
          dialogue: [
            { who: "Advice", text: "First, you should ride slowly." },
            { who: "You", text: "" },
            { who: "You", text: "" },
            { who: "You", text: "" }
          ],
          starters: ["Then, …", "After that, …", "Finally, …"],
          record: true },

        { type: "speak", title: "Choose a picture and complete the following by giving advice using sequence words. Then, share your ideas aloud with your partner.", page: 52, source: "book",
          instructions: "Picture 1: a boy is sneezing in class. Picture 2: a boy spills juice while he walks. Choose one picture.",
          image: "crops/u3l4-pictures.jpg",
          dialogue: [],
          starters: ["First, you should…", "Then, you shouldn’t…", "Next, you should…", "Finally, you shouldn’t forget to…"],
          record: true },

        { type: "speak", title: "The Emoji Speaking Game", page: 52, source: "book",
          instructions: "Choose an emoji that shows a feeling. a. Tell your partner a story about someone who feels this way. b. Give advice with sequence words using should / shouldn’t. c. Use the connectors to explain why the advice is important. d. Switch roles and repeat with a different emoji.",
          dialogue: [
            { who: "A", text: "Yesterday, my friend spilled water on my notebook. I felt upset." },
            { who: "B", text: "First, you should stay calm so that you don’t make the situation worse. Then, you shouldn’t shout at him." },
            { who: "A", text: "" },
            { who: "B", text: "" }
          ],
          starters: ["😡 Yesterday, I felt angry because …", "😢 My friend felt sad because …", "First, you should … so that …", "Then, you shouldn’t …"],
          record: true },

        { type: "activity", title: "Extra Practice: should or shouldn't?", source: "extra", stage: "guided",
          instructions: "Choose should or shouldn't.", instructionsAr: "اختر should أو shouldn't.",
          items: [
            { t: "choose", q: "You (should / shouldn't) wear a helmet on a scooter.", options: ["should", "shouldn't"], answer: 0, why: "A helmet keeps you safe — good idea." },
            { t: "choose", q: "You (should / shouldn't) ride fast near the school.", options: ["should", "shouldn't"], answer: 1, why: "Riding fast is dangerous — not a good idea." },
            { t: "choose", q: "You (should / shouldn't) cover your mouth when you sneeze.", options: ["should", "shouldn't"], answer: 0, why: "It stops germs going to others." },
            { t: "choose", q: "You (should / shouldn't) drink juice while you run.", options: ["should", "shouldn't"], answer: 1, why: "You can spill it or fall." }
          ] },

        { type: "activity", title: "Extra Practice: Add the comma", source: "extra", stage: "independent",
          instructions: "Sequence words are followed by a comma. Type the word with the comma.", instructionsAr: "اكتب كلمة الترتيب مع الفاصلة.",
          items: [
            { t: "fix", q: "{First} you should stop and sit down.", answer: ["First,"], why: "Sequence words are always followed by commas." },
            { t: "fix", q: "{Then} you should check your knee.", answer: ["Then,"], why: "Then, + the next step." },
            { t: "fix", q: "{Finally} you should tell a teacher.", answer: ["Finally,"], why: "Finally, + the last step." },
            { t: "order", q: "Make a sentence.", words: ["After", "that,", "you", "should", "wash", "your", "hands."],
              answer: ["After that, you should wash your hands."], hint: "Start with the sequence word.", why: "Sequence word + comma + you should + base verb." }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Good or bad advice?",
        buckets: ["You should …", "You shouldn't …"],
        cards: [["wear a helmet", 0], ["ride slowly", 0], ["stay calm", 0], ["cover your mouth when you sneeze", 0], ["ride too fast", 1], ["shout at your friend", 1], ["run near the pool", 1], ["drink juice while you run", 1]] },
      teacher: {
        notes: [
          "Show the three scooter pictures. Students tell the story: he fell, his friend helped him, they walked together.",
          "Teach the Tip box: sequence words + comma. Drill with hand gestures (1, 2, 3, 4 fingers).",
          "Task 2: complete the speech bubbles orally, then write them.",
          "Task 3: students choose the sneezing picture or the juice picture and give 4 steps.",
          "Emoji Game: model the example with a strong student, then pairs play."
        ],
        pair: ["Emoji Speaking Game in pairs, switching roles.", "A gives a step without a sequence word; B repeats it with the right sequence word."],
        group: ["Groups make a 4-step “Scooter Safety” poster using First, Then, Next, Finally."],
        quick: [
          { q: "Name four sequence words.", a: "First, next, then, after that, finally." },
          { q: "What comes after a sequence word?", a: "A comma." },
          { q: "Give one piece of advice for the boy on the scooter.", a: "e.g. First, you should ride slowly." }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — READING ─────────────────────────
    {
      id: "u3l5", num: 5, skill: "Reading",
      title: "Kashta to Al-Mutlaa",
      pages: [53, 54],
      status: "complete",
      canDo: ["I can identify explicit and implicit details from informational texts clearly describing the steps and preparations needed for safe and enjoyable camping trips."],
      goals: ["Read about a family camping trip.", "Learn 13 new words.", "Put the steps of the trip in order.", "Plan a safe kashta."],
      goalsAr: ["أقرأ عن رحلة تخييم عائلية.", "أتعلّم 13 كلمة جديدة.", "أرتّب خطوات الرحلة.", "أخطّط لكشتة آمنة."],
      warmup: {
        title: "Before You Read",
        image: "crops/u3l5-warmup.jpg",
        emoji: "🏕️",
        prompts: ["Discuss the following questions.", "Have you ever planned a trip with your family before?", "Where did you go? What did you take with you?", "What do you do for your safety?"],
        seconds: 90
      },
      vocab: [
        { w: "memorable", pos: "adjective", emoji: "🌟", def: "worth remembering; easy to remember", ex: "When everything is planned carefully, we can enjoy the weekend and make it truly memorable.", exFromBook: true, ar: "لا يُنسى", ipa: "/ˈmem.ər.ə.bəl/" },
        { w: "ensure", pos: "verb", emoji: "✅", def: "to make something certain to happen", ex: "It is both fun and exciting, but it also requires careful planning to ensure everyone stays safe.", exFromBook: true, ar: "يتأكّد", ipa: "/ɪnˈʃɔːr/" },
        { w: "currently", pos: "adverb", emoji: "⏱️", def: "at the present time; now", ex: "First, our family is currently getting ready for the trip.", exFromBook: true, ar: "حاليًا", ipa: "/ˈkʌr.ənt.li/" },
        { w: "pack", pos: "verb", emoji: "🎒", def: "to put things into a bag or box", ex: "At the same time, my mother is carefully packing the food and drinks we will need.", exFromBook: true, ar: "يعلّب أو يخزّن", ipa: "/pæk/" },
        { w: "essential", pos: "adjective", emoji: "❗", def: "very important or necessary", ex: "Safety is essential when we go camping.", exFromBook: true, ar: "أساسي", ipa: "/ɪˈsen.ʃəl/" },
        { w: "first-aid kit", pos: "noun", emoji: "🩹", def: "a box with basic medical things for emergencies", ex: "We always bring a first-aid kit in case of an emergency and carry plenty of water to stay hydrated.", exFromBook: true, ar: "حقيبة إسعافات أولية", ipa: "/ˌfɜːst ˈeɪd ˌkɪt/" },
        { w: "hydrated", pos: "adjective", emoji: "💧", def: "having enough water in your body", ex: "Drink a lot of water to stay hydrated in the desert.", exFromBook: false, ar: "رطب", ipa: "/ˈhaɪ.dreɪ.tɪd/" },
        { w: "mark", pos: "verb", emoji: "📌", def: "to show where something is", ex: "We mark our campsite on the map.", exFromBook: false, ar: "يحدّد", ipa: "/mɑːk/" },
        { w: "campsite", pos: "noun", emoji: "⛺", def: "a place where people camp", ex: "After that, when we reach the campsite, we begin setting up the tent and unpacking.", exFromBook: true, ar: "موقع المخيّم", ipa: "/ˈkæmp.saɪt/" },
        { w: "whereabouts", pos: "noun", emoji: "🗺️", def: "the place where a person or thing is", ex: "Tell your uncle your whereabouts before the trip.", exFromBook: false, ar: "موقع أو مكان", ipa: "/ˈweə.rə.baʊts/" },
        { w: "campfire", pos: "noun", emoji: "🔥", def: "an outside fire made by people who are camping", ex: "At night, we gather around the campfire, listening to music and sharing stories.", exFromBook: true, ar: "نار المخيّم", ipa: "/ˈkæmp.faɪər/" },
        { w: "litter", pos: "verb", emoji: "🚯", def: "to leave trash in public places", ex: "Finally, we are careful not to litter any trash behind.", exFromBook: true, ar: "يلقي", ipa: "/ˈlɪt.ər/" },
        { w: "properly", pos: "adverb", emoji: "👌", def: "in the correct or suitable way", ex: "We make sure the area is cleaned properly before we leave.", exFromBook: true, ar: "بشكل ملائم", ipa: "/ˈprɒp.əl.i/" }
      ],
      sections: [
        { type: "reading", title: "Kashta to Al-Mutlaa", page: 53,
          instructions: "Read the passage and do the tasks that follow.",
          paras: [
            "Going on a kashta trip to Al-Mutlaa for a mini camping adventure in the desert is a memorable weekend activity for many Kuwaiti families. It is both fun and exciting, but it also requires careful planning to ensure everyone stays safe.",
            "First, our family is currently getting ready for the trip. My father is checking the vehicle to make sure it is safe for the [[journey]]. At the same time, my mother is carefully packing the food and drinks we will need. Safety is essential when we go camping. We always bring a first-aid kit in case of an emergency and carry plenty of water to stay hydrated.",
            "Next, we start packing the rest of the supplies. We make sure to clearly mark the location of our campsite and share our whereabouts with a family member who is not with us. This helps others know where we are in case of any problems.",
            "After that, when we reach the campsite, we begin setting up the tent and unpacking. Everyone feels excited, but we know we must remain responsible. We avoid touching strange plants or wild animals. Instead, we enjoy fun and safe activities like playing volleyball, board games, or cards. At night, we gather around the campfire, listening to music and sharing stories. Sometimes, we sit quietly, looking up at the bright desert sky filled with stars.",
            "Finally, we are careful not to litter any trash behind. It is important to follow the law of our country and respect the environment. We always collect our garbage and place it in trash bags. We make sure the area is cleaned properly before we leave.",
            "Therefore, trips like these teach us how to prepare well and follow safety instructions. When everything is planned carefully, we can enjoy the weekend and make it truly memorable."
          ],
          speaker: null },

        { type: "activity", title: "a. Choose the correct answer.", page: 54, source: "book",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "1. Choose a suitable title for the passage:", options: ["Keeping Outdoors Clean", "Stars at Night", "A Safe Camping Trip", "Playing Fun Games"], answer: 2,
              hint: "A title tells the main idea of the WHOLE passage.", why: "The whole passage is about planning a camping trip (kashta) and staying safe. The other options are only small details." },
            { t: "mcq", q: "2. The underlined word “journey” in the 2nd paragraph means:", options: ["trip", "place", "game", "case"], answer: 0,
              hint: "The father checks the car before they travel.", why: "A journey is travelling from one place to another — a trip." }
          ] },

        { type: "activity", title: "b. Answer the following questions.", page: 54, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. Why is it important to bring a first-aid kit on a Kashta?",
              model: "We bring a first-aid kit in case of an emergency.",
              keywords: [["emergenc", "hurt", "injur", "problem"]],
              hint: "Read paragraph 2: “We always bring a first-aid kit …”" },
            { t: "short", q: "2. What is the purpose of the writer in writing this passage?",
              model: "To explain how to prepare well for a kashta and follow safety instructions so that the trip is safe and memorable.",
              keywords: [["prepar", "plan", "safe", "safety"]],
              hint: "Read the last paragraph: “Therefore, trips like these teach us …”" }
          ] },

        { type: "activity", title: "Complete the sentences using the words from the list below.", page: 54, source: "book",
          instructions: "Use: campsite – memorable – essential. One word is extra.", instructionsAr: "أكمل الجمل بالكلمات. توجد كلمة زائدة.",
          items: [
            { t: "fill", q: "1. My family found a quiet ____ where we could enjoy our weekend.", answer: ["campsite"], bank: ["campsite", "memorable", "essential"],
              why: "“a quiet …” needs a noun for a place: campsite." },
            { t: "fill", q: "2. The trip was so exciting and fun that it became one of the most ____ moments of my life.", answer: ["memorable"], bank: ["campsite", "memorable", "essential"],
              why: "Exciting and fun moments are worth remembering: memorable." }
          ] },

        { type: "activity", title: "Order the activities according to the passage.", page: 54, source: "book", stage: "guided",
          instructions: "Match each sequence word to the activity. Use the passage.", instructionsAr: "رتّب الأنشطة كما في النص.",
          items: [
            { t: "match", q: "Order the activities according to the passage.",
              pairs: [["First,", "Packing the bags"], ["Next,", "Setting up the tent"], ["Finally,", "Cleaning the campsite"]],
              hint: "Paragraphs 2–5 start with First, Next, After that, Finally.",
              why: "The family packs before the trip, sets up the tent at the campsite, and cleans the area before they leave." }
          ] },

        { type: "write", title: "Look at the pictures and write a three-sentence story using sequence words (first, next, finally).", page: 54, source: "book",
          instructions: "Order the activities according to the passage: Packing the bags, Setting up the tent, Cleaning the campsite.",
          wordBank: ["First,", "Next,", "Finally,", "pack", "tent", "campsite", "trash bags"],
          frame: [
            { label: "First, …", hint: "Packing the bags" },
            { label: "Next, …", hint: "Setting up the tent" },
            { label: "Finally, …", hint: "Cleaning the campsite" }
          ],
          model: "First, we pack our bags with food, water and a first-aid kit. Next, we set up the tent at the campsite. Finally, we clean the campsite and put the trash in bags.",
          modelFromBook: false,
          checklist: ["I used First, Next and Finally with commas.", "My steps are in the same order as the passage.", "I wrote three sentences."],
          minWords: 20 },

        { type: "discuss", title: "Plan a Kashta with your group.", page: 54, source: "book",
          prompts: ["Plan a Kashta with your group. Discuss the things you will prepare (food, tools, or games), and the safety instructions everyone must follow. Then, present your plan to the class."],
          image: "crops/u3l5-kashta.jpg", emoji: "🏕️" },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Is it true or false?", instructionsAr: "صحيح أم خطأ؟",
          items: [
            { t: "mcq", q: "The father is checking the vehicle.", options: ["True", "False"], answer: 0, why: "“My father is checking the vehicle…”" },
            { t: "mcq", q: "The family touches wild animals.", options: ["True", "False"], answer: 1, why: "“We avoid touching strange plants or wild animals.”" },
            { t: "mcq", q: "They share their whereabouts with a family member who is not with them.", options: ["True", "False"], answer: 0, why: "Paragraph 3 says this." },
            { t: "mcq", q: "They leave their trash in the desert.", options: ["True", "False"], answer: 1, why: "They collect their garbage and put it in trash bags." }
          ] },

        { type: "activity", title: "Extra Practice: Word meanings", source: "extra", stage: "independent",
          instructions: "Match the word to its meaning.", instructionsAr: "صِل الكلمة بمعناها.",
          items: [
            { t: "match", q: "Match the word to its meaning.",
              pairs: [["pack", "put things in a bag"], ["essential", "very important"], ["litter", "leave trash in public places"], ["properly", "in the correct way"], ["currently", "now"]],
              why: "These meanings are based on the book glossary." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the campfire picture and ask the three Before You Read questions.",
          "Pre-teach the 13 words; mime pack, mark and litter.",
          "Read the passage; students point to the sequence words (First, Next, After that, Finally, Therefore).",
          "Do 3a, 3b and the vocabulary task (one word is extra: essential).",
          "Order the three pictures, write the three-sentence story, then plan a kashta in groups."
        ],
        pair: ["A reads a paragraph; B says one safety rule from it.", "Pairs retell the trip using First, Next, After that, Finally."],
        group: ["Kashta plan: food, tools, games and 3 safety rules. Each group presents in 1 minute."],
        quick: [
          { q: "Why does the family bring a first-aid kit?", a: "In case of an emergency." },
          { q: "What does “journey” mean?", a: "trip" },
          { q: "What do they do before they leave the campsite?", a: "They collect their garbage and clean the area properly." },
          { q: "What do they do at night?", a: "They gather around the campfire, listen to music and share stories." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — GRAMMAR ─────────────────────────
    {
      id: "u3l6", num: 6, skill: "Grammar",
      title: "Present Continuous (Present Actions/Future Plans)",
      pages: [55, 55],
      status: "complete",
      canDo: ["I can apply the present continuous tense accurately and clearly to describe future plans and arrangements in familiar contexts."],
      goals: ["Make the present continuous: am/is/are + verb-ing.", "Talk about actions happening now.", "Talk about future plans."],
      goalsAr: ["أكوّن المضارع المستمر: am/is/are + فعل ing.", "أتحدّث عن أفعال تحدث الآن.", "أتحدّث عن خطط مستقبلية."],
      warmup: {
        title: "Discuss the picture with your partner.",
        image: "crops/u3l6-warmup.jpg",
        emoji: "🧳",
        prompts: ["What is the family doing right now?", "What do you think this family is planning to do?"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Present Continuous", page: 55,
          steps: [
            { title: "Step 1 — The form",
              text: "(I + am) - (he/she/it + is) - (you/we/they + are) + verb + ing",
              textAr: "الفاعل + am / is / are + الفعل مع ing.",
              examples: ["{s:I} {a:am} {v:packing}.", "{s:He} {a:is} {v:packing}.", "{s:They} {a:are} {v:packing}."] },
            { title: "Step 2 — Use 1: actions happening now",
              text: "We use the present continuous for actions happening now. Keywords: now – at the moment - currently",
              textAr: "نستخدمه لأفعال تحدث الآن. الكلمات الدالة: now، at the moment، currently.",
              examples: ["{s:I} {a:am} {v:watching} a movie {t:now}.", "{s:He} {a:is} {v:sleeping} {t:at the moment}.", "{s:They} {a:are} {t:currently} {v:playing} football."] },
            { title: "Step 3 — Use 2: future arrangements",
              text: "We also use it for future arrangements (plans we have already made). Keywords: tonight – tomorrow – next week",
              textAr: "ونستخدمه أيضًا للخطط المستقبلية المرتّبة. الكلمات الدالة: tonight، tomorrow، next week.",
              examples: ["{s:I} {a:am} {v:travelling} {t:tonight}.", "{s:She} {a:is} {v:taking} her results {t:tomorrow}.", "{s:We} {a:are} {v:moving} to a new house {t:next week}."] },
            { title: "Step 4 — Now or future? Look at the keyword!",
              text: "The verb form is the same. The keyword tells you the time: now → happening now; tomorrow → future plan.",
              textAr: "صيغة الفعل واحدة، والكلمة الدالة تحدّد الزمن.",
              examples: ["{s:We} {a:are} {v:packing} the car {t:now}. (now)", "{s:We} {a:are} {v:packing} the car {t:tomorrow}. (future plan)"] }
          ],
          table: {
            head: ["1- actions happening now.", "2- future arrangements."],
            rows: [
              ["I am watching a movie now.", "I am travelling tonight."],
              ["He is sleeping at the moment.", "She is taking her results tomorrow."],
              ["They are currently playing football.", "We are moving to a new house next week."],
              ["Keywords: now – at the moment - currently", "Keywords: tonight – tomorrow – next week"]
            ]
          },
          worked: {
            q: "Correct the verb: My uncle ____ (visit) us tomorrow.",
            steps: ["Subject: My uncle = he → is.", "Add -ing to the verb: visit → visiting.", "Keyword “tomorrow” → it is a future plan."],
            a: "My uncle is visiting us tomorrow."
          },
          notes: ["Spelling: take → taking (drop e); travel → travelling; run → running.", "Don't forget am / is / are: ✗ We leaving → ✓ We are leaving."] },

        { type: "activity", title: "Match the beginning of each sentence to the correct ending. Then, add a suitable keyword at the end of each sentence.", page: 55, source: "book", stage: "guided",
          instructions: "First match. Then add a keyword (now – at the moment – currently / tonight – tomorrow – next week).", instructionsAr: "صِل ثم أضف كلمة دالة مناسبة في نهاية كل جملة.",
          items: [
            { t: "match", q: "Match the beginning of each sentence to the correct ending.",
              pairs: [["1. My brother", "is checking the tent"], ["2. My parents", "are packing the car"], ["3. I", "am bringing my camera"]],
              hint: "he → is, they → are, I → am.", why: "My brother (he) + is; My parents (they) + are; I + am." },
            { t: "fill", q: "My parents are packing the car ____. (Happening now)", answer: ["now", "at the moment", "right now", "currently"], bank: ["now", "at the moment", "tonight", "tomorrow", "next week"],
              hint: "Choose a “now” keyword.", why: "The book marks this ending “Happening now”, so we use now / at the moment." },
            { t: "fill", q: "I am bringing my camera ____. (Future plan)", answer: ["tonight", "tomorrow", "next week"], bank: ["now", "at the moment", "tonight", "tomorrow", "next week"],
              hint: "Choose a future keyword.", why: "The book marks this ending “Future plan”, so tonight, tomorrow or next week are all correct." },
            { t: "fill", q: "My brother is checking the tent ____. (Future plan)", answer: ["tonight", "tomorrow", "next week"], bank: ["now", "at the moment", "tonight", "tomorrow", "next week"],
              hint: "Choose a future keyword.", why: "Future plan → tonight, tomorrow or next week. All three are correct." }
          ] },

        { type: "activity", title: "Correct the verbs between brackets.", page: 55, source: "book", stage: "guided",
          instructions: "Write am / is / are + verb-ing.", instructionsAr: "اكتب am / is / are + الفعل مع ing.",
          items: [
            { t: "fill", q: "1. We ____ (leave) for our camping trip early tomorrow morning.", answer: ["are leaving"],
              hint: "We → are. leave → leaving (drop the e).", why: "Future plan (tomorrow): We + are + leaving." },
            { t: "fill", q: "2. My sister ____ (bring) marshmallows for the campfire tonight.", answer: ["is bringing"],
              hint: "My sister = she → is.", why: "Future plan (tonight): She + is + bringing." },
            { t: "fill", q: "3. Our friends ____ (meet) us at the campsite this weekend.", answer: ["are meeting"],
              hint: "Our friends = they → are.", why: "Future plan (this weekend): They + are + meeting." }
          ] },

        { type: "write", title: "Plan for a weekend trip.", page: 55, source: "book",
          instructions: "Plan for a weekend trip. Write sentences using the present continuous with the key words (tonight – tomorrow – next week).",
          wordBank: ["tonight", "tomorrow", "next week", "am", "is", "are"],
          frame: [
            { label: "When are you leaving?", hint: "We are leaving …" },
            { label: "Where are you staying?", hint: "We are staying …" },
            { label: "What are you bringing with you?", hint: "I am bringing …" }
          ],
          model: "We are leaving for Al-Mutlaa tomorrow morning. We are staying in a big tent in the desert. Tonight, I am packing my bag. I am bringing my camera, water and a first-aid kit. Next week, I am showing my photos to my friends.",
          modelFromBook: false,
          checklist: ["I used am / is / are + verb-ing.", "I used tonight, tomorrow or next week.", "I started with a capital letter and ended with a full stop."],
          minWords: 25 },

        { type: "activity", title: "Extra Practice: am, is or are?", source: "extra", stage: "guided",
          instructions: "Choose the correct helper.", instructionsAr: "اختر الفعل المساعد الصحيح.",
          items: [
            { t: "choose", q: "I (am / is / are) packing my bag now.", options: ["am", "is", "are"], answer: 0, why: "I + am." },
            { t: "choose", q: "Dad (am / is / are) checking the car.", options: ["am", "is", "are"], answer: 1, why: "Dad = he → is." },
            { t: "choose", q: "We (am / is / are) leaving tomorrow.", options: ["am", "is", "are"], answer: 2, why: "We + are." },
            { t: "choose", q: "My cousins (am / is / are) coming tonight.", options: ["am", "is", "are"], answer: 2, why: "My cousins = they → are." }
          ] },

        { type: "activity", title: "Extra Practice: Now or future?", source: "extra", stage: "guided",
          instructions: "Look at the keyword. Is it happening now or a future plan?", instructionsAr: "انظر إلى الكلمة الدالة: الآن أم خطة مستقبلية؟",
          items: [
            { t: "mcq", q: "She is cooking dinner at the moment.", options: ["Happening now", "Future plan"], answer: 0, why: "at the moment = now." },
            { t: "mcq", q: "We are flying to London next week.", options: ["Happening now", "Future plan"], answer: 1, why: "next week = future." },
            { t: "mcq", q: "They are currently playing football.", options: ["Happening now", "Future plan"], answer: 0, why: "currently = now." },
            { t: "mcq", q: "I am visiting my grandma tonight.", options: ["Happening now", "Future plan"], answer: 1, why: "tonight = a future plan." }
          ] },

        { type: "activity", title: "Extra Practice: Fix the mistake", source: "extra", stage: "independent",
          instructions: "Type the correct verb.", instructionsAr: "اكتب الفعل الصحيح.",
          items: [
            { t: "fix", q: "We {leaving} tomorrow.", answer: ["are leaving"], why: "We need are + leaving." },
            { t: "fix", q: "He {are} sleeping at the moment.", answer: ["is"], why: "He + is." },
            { t: "fix", q: "I am {bring} my camera tonight.", answer: ["bringing"], why: "am + verb-ing: bringing." },
            { t: "fix", q: "My parents {is} packing the car now.", answer: ["are"], why: "My parents = they → are." }
          ] }
      ],
      game: { kind: "sort", title: "Sort it! Now or future?",
        buckets: ["Happening now", "Future plan"],
        cards: [["now", 0], ["at the moment", 0], ["currently", 0], ["right now", 0], ["tonight", 1], ["tomorrow", 1], ["next week", 1], ["this weekend", 1]] },
      teacher: {
        notes: [
          "Warm-up: the family with suitcases. Ask: What are they doing now? Where are they going?",
          "Teach the form (am/is/are + -ing) and the two uses with the keyword boxes.",
          "Show that the same verb form can be now or future — the keyword decides.",
          "Book tasks: match + keyword, correct the verbs, then write a weekend plan.",
          "Weak students: am/is/are choice first, then the Now or future? task."
        ],
        pair: ["A asks: When are you leaving? Where are you staying? What are you bringing? B answers, then switch.", "Mime game: A mimes an action; B says “You are … -ing now.”"],
        group: ["Groups plan a class trip and write 5 sentences with tonight, tomorrow, next week."],
        quick: [
          { q: "Make it correct: We ___ (leave) tomorrow.", a: "are leaving" },
          { q: "Give two keywords for “now”.", a: "now, at the moment, currently" },
          { q: "Give two keywords for future plans.", a: "tonight, tomorrow, next week" },
          { q: "She ___ (take) her results tomorrow.", a: "is taking" }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u3l7", num: 7, skill: "Writing",
      title: "Safety Instructions",
      pages: [56, 57],
      status: "complete",
      canDo: ["I can compose clearly structured instructional paragraphs about safety instructions and their importance using suitable linking words."],
      goals: ["Know the parts of a paragraph.", "Use linkers: in order to, so that, therefore.", "Plan and write a two-paragraph safety report."],
      goalsAr: ["أعرف أجزاء الفقرة.", "أستخدم أدوات الربط: in order to و so that و therefore.", "أخطّط وأكتب تقريرًا من فقرتين عن السلامة."],
      linkers: ["first", "next", "also", "in addition", "therefore", "finally", "in order to", "so that"],
      warmup: {
        title: "Let’s Think Like Writers!",
        image: "crops/u3l7-warmup.jpg",
        emoji: "🌱",
        prompts: ["Look at the pictures and discuss these questions.", "What is the story of these pictures? (main idea/ topic sentence)", "What steps do you see in the pictures? (supporting details)", "What happens at the end? (concluding sentence)"],
        seconds: 90
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "A good paragraph", page: 56,
          steps: [
            { title: "A good paragraph is like these pictures.",
              text: "It begins with a main idea, adds important steps, and ends with a clear result.",
              textAr: "تبدأ الفقرة الجيدة بفكرة رئيسة، ثم تضيف خطوات مهمة، وتنتهي بنتيجة واضحة.",
              examples: ["Topic sentence → the main idea", "Supporting details → the steps", "Concluding sentence → the result"] },
            { title: "Tip",
              text: "Therefore is a linker used to show the result as a conclusion.",
              textAr: "therefore أداة ربط تبيّن النتيجة في الخاتمة.",
              examples: ["{c:Therefore,} following these tips is important to stay confident and relaxed."] }
          ] },

        { type: "reading", title: "a. Read the following paragraph and answer the questions.", page: 56,
          paras: ["Safety is essential when travelling _______ have an enjoyable and secure trip. First, travellers must keep their passports and money in a safe place _______ they can avoid problems. Next, it is helpful to read signs carefully to follow the rules. _______, following these tips is important to stay confident and relaxed."],
          speaker: null },

        { type: "activity", title: "1. Underline the commas and full stops.", page: 56, source: "book", stage: "guided",
          instructions: "Count the commas (,) and full stops (.) in the paragraph.", instructionsAr: "عُدّ الفواصل والنقاط في الفقرة.",
          items: [
            { t: "mcq", q: "How many commas (,) are in the paragraph?", options: ["2", "3", "4", "5"], answer: 1,
              hint: "Look after First, Next and the third blank.", why: "First, … Next, … ______, … → 3 commas." },
            { t: "mcq", q: "How many full stops (.) are in the paragraph?", options: ["3", "4", "5", "6"], answer: 1,
              hint: "Count the sentences.", why: "The paragraph has 4 sentences, so it has 4 full stops." }
          ] },

        { type: "activity", title: "2. Fill in the blanks with suitable linkers.", page: 56, source: "book", stage: "guided",
          instructions: "Use: therefore – In order to – so that.", instructionsAr: "استخدم: therefore – in order to – so that.",
          items: [
            { t: "fill", q: "Safety is essential when travelling ____ have an enjoyable and secure trip.", answer: ["in order to", "to"], bank: ["therefore", "in order to", "so that"],
              hint: "“have” is a base verb.", why: "A base verb (have) follows, so “in order to” (from the box) is correct. “to” is also correct English." },
            { t: "fill", q: "First, travellers must keep their passports and money in a safe place ____ they can avoid problems.", answer: ["so that"], bank: ["therefore", "in order to", "so that"],
              hint: "“they can avoid” = subject + can + verb.", why: "Subject (they) + can + verb → so that." },
            { t: "fill", q: "____, following these tips is important to stay confident and relaxed.", answer: ["Therefore"], bank: ["therefore", "in order to", "so that"],
              hint: "This is the last sentence: the result.", why: "Therefore shows the result as a conclusion. It starts the sentence, so use a capital T." }
          ] },

        { type: "activity", title: "b. Match each sentence to its correct paragraph part.", page: 56, source: "book", stage: "guided",
          instructions: "Match the part to the sentence.", instructionsAr: "صِل كل جملة بجزء الفقرة المناسب.",
          items: [
            { t: "match", q: "Match each sentence to its correct paragraph part.",
              pairs: [
                ["1. Topic sentence", "Safety is essential when travelling."],
                ["2. Supporting detail", "It is helpful to read signs carefully to follow the rules."],
                ["3. Concluding sentence", "Following these tips is important to stay confident and relaxed."]
              ],
              hint: "Main idea first, a step in the middle, the result at the end.",
              why: "The first sentence gives the main idea; reading signs is one step; the last sentence (with Therefore) is the result." }
          ] },

        { type: "write", title: "c. Read the paragraph, then write a different sentence for each of its parts.", page: 56, source: "book",
          instructions: "Write your own topic sentence, supporting detail and concluding sentence.",
          wordBank: ["first", "next", "also", "in addition", "therefore", "finally", "in order to", "so that"],
          frame: [
            { label: "1. Topic sentence", hint: "The main idea: Safety is important at …" },
            { label: "2. Supporting detail", hint: "One step: First, you should …" },
            { label: "3. Concluding sentence", hint: "The result: Therefore, …" }
          ],
          model: "Safety is important at the beach. First, you should swim only where a lifeguard can see you. Therefore, following these rules helps everyone enjoy the beach safely.",
          modelFromBook: false,
          checklist: ["My topic sentence gives the main idea.", "My supporting detail gives a step.", "My concluding sentence starts with Therefore,."],
          minWords: 20 },

        { type: "write", title: "Plan and write a report of two paragraphs.", page: 57, source: "book",
          instructions: "When people go out, they should follow safety instructions to be safe. Plan and write a report of two paragraphs explaining what safety instructions everyone should follow outdoor (mall, park, street, airport, or camping) and why these instructions are important. a. Fill in the following plan. b. Use the ideas in your plan to write the report in your notebook.",
          wordBank: ["first", "next", "also", "in addition", "therefore", "finally", "in order to", "so that"],
          frame: [
            { label: "Paragraph (1): Safety instructions everyone should follow — Topic sentence", hint: "When people go to the …, they should …" },
            { label: "Paragraph (1) — Supporting details", hint: "First, … Next, … Also, … Finally, …" },
            { label: "Paragraph (1) — Concluding sentence", hint: "These rules keep … safe." },
            { label: "Paragraph (2): Why they are important — Topic sentence", hint: "These instructions are very important." },
            { label: "Paragraph (2) — Supporting details", hint: "They help people … In addition, … so that …" },
            { label: "Paragraph (2) — Concluding sentence", hint: "Therefore, …" }
          ],
          model: "When people go to the mall, they should follow some important safety instructions. First, they should walk carefully and look for “Wet Floor” signs. Next, parents should hold their children's hands so that they do not get lost. Also, people should stand still on the escalator. Finally, everyone should know where the nearest exit is. These simple rules keep the mall safe for everyone.\n\nThese instructions are very important. They help people avoid accidents, such as slipping and falling. In addition, they help families stay together in busy places. In an emergency, people follow the exit signs in order to get out quickly. Therefore, following safety instructions makes a trip to the mall safe and enjoyable.",
          modelFromBook: false,
          checklist: ["I wrote two paragraphs.", "Each paragraph has a topic sentence, supporting details and a concluding sentence."],
          bookChecklist: [
            "I started with an interesting opening sentence.",
            "I used new words that I learned from the unit.",
            "I used punctuation and capital letters correctly.",
            "I used AI tools to help me proofread my writing.",
            "I used suitable linkers.",
            "I ended my paragraphs clearly.",
            "I checked my spelling."
          ],
          minWords: 80 },

        { type: "activity", title: "Extra Practice: Choose the linker", source: "extra", stage: "guided",
          instructions: "Choose the best linker.", instructionsAr: "اختر أداة الربط المناسبة.",
          items: [
            { t: "mcq", q: "____, look both ways before you cross the street.", options: ["First", "Therefore", "So that"], answer: 0, why: "First starts the first step." },
            { t: "mcq", q: "Wear a life jacket ____ you can stay safe in the sea.", options: ["so that", "in order to", "finally"], answer: 0, why: "Subject (you) + can + verb → so that." },
            { t: "mcq", q: "Drink water ____ stay hydrated.", options: ["in order to", "to", "so that"], answer: [0, 1], why: "Base verb (stay) → “in order to” and “to” are both correct." },
            { t: "mcq", q: "Rules keep us safe. ____, we should follow them.", options: ["Therefore", "First", "Next"], answer: 0, why: "Therefore shows the result." },
            { t: "mcq", q: "Wear a hat. ____, put on sun cream.", options: ["In addition", "So that", "In order to"], answer: 0, why: "In addition adds another idea." }
          ] },

        { type: "activity", title: "Extra Practice: Which part is it?", source: "extra", stage: "independent",
          instructions: "Is it a topic sentence, a supporting detail or a concluding sentence?", instructionsAr: "حدّد جزء الفقرة.",
          items: [
            { t: "mcq", q: "Camping in the desert needs careful planning.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It gives the main idea." },
            { t: "mcq", q: "Next, bring plenty of water to stay hydrated.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It gives one step (Next, …)." },
            { t: "mcq", q: "Therefore, a good plan makes the trip safe and fun.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2, why: "Therefore shows the result at the end." }
          ] }
      ],
      game: { kind: "quiz", title: "Linker Quiz",
        items: [
          { t: "choose", q: "(Therefore / First), we should follow the rules.", options: ["Therefore", "First"], answer: 0, why: "A result at the end → Therefore." },
          { t: "choose", q: "Keep your passport safe (so that / in order to) you can avoid problems.", options: ["so that", "in order to"], answer: 0, why: "Subject + can → so that." },
          { t: "choose", q: "Read the signs (to / so that) follow the rules.", options: ["to", "so that"], answer: 0, why: "Base verb (follow) → to." },
          { t: "mcq", q: "Which sentence gives the main idea?", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "The topic sentence gives the main idea." },
          { t: "mcq", q: "Which linker adds another idea?", options: ["in addition", "therefore", "so that"], answer: 0, why: "In addition = also." }
        ] },
      teacher: {
        notes: [
          "Warm-up: the three gardening pictures — match each picture to topic sentence, supporting details, concluding sentence.",
          "Read the travelling paragraph; count commas and full stops; fill the linkers.",
          "Match the three sentences to the paragraph parts, then students write their own three sentences.",
          "Page 57 (printed as “Lesson eight”, task 3 continues this lesson): fill in the two-paragraph plan, then write the report.",
          "Use the book checklist for self-check and peer check."
        ],
        pair: ["Peer check with the book checklist: tick each line for your partner.", "A says a topic sentence; B adds a supporting detail with a linker."],
        group: ["Each group chooses a place (mall, park, street, airport, camping) and builds the plan on a big poster."],
        quick: [
          { q: "What are the three parts of a paragraph?", a: "Topic sentence, supporting details, concluding sentence." },
          { q: "Which linker shows the result as a conclusion?", a: "Therefore" },
          { q: "Keep your money in a safe place ___ you can avoid problems.", a: "so that" }
        ]
      }
    }
  ]
});

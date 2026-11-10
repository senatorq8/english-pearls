// Learning Unit 1 — Kuwait: Stories of Success (printed pages 17, 20–29)
// Book text is copied from the Student's Book. Answers come from the answer key written on the pages.
// Everything marked source: "extra" is not in the book.
(function () {
  // Exercise 5 (p. 21): words from the passage for each part of speech (the examples in row 1 are not accepted again).
  const ADV = ["successfully", "always", "solo", "there", "also", "home", "along", "not only"];
  const ADJ = ["outstanding", "remarkable", "proud", "strong", "rich", "confident", "ready", "physical", "international", "humanitarian", "difficult", "excited", "adventurous", "dangerous", "inspiring", "supporting", "different", "female", "global", "two-week", "Kuwaiti", "Arab", "Euro-Arabian", "first"];
  const NOUN = ["talents", "talent", "achievement", "achievements", "country", "values", "culture", "cultures", "families", "schools", "children", "ideas", "environment", "lives", "explorers", "explorer", "adventurers", "pride", "mountaineer", "flag", "pictures", "goal", "recognition", "journey", "challenge", "challenges", "stage", "attention", "role", "history", "ability", "tasks", "adventures", "spirit", "person", "experiences", "will", "women", "conditions", "stories", "strength", "support", "effort", "people", "home"];
  const VERB = ["highlight", "highlighted", "represent", "encourage", "explore", "develop", "grow up", "grow", "succeed", "brought", "climbed", "raised", "explained", "made", "became", "reach", "fulfil", "joined", "led", "ski", "included", "share", "face", "continue", "shine", "inspired", "returning", "aiming"];

  BOOK.addUnit({
    id: "u1", num: 1, title: "Kuwait: Stories of Success", titleAr: "الكويت: قصص نجاح",
    pages: [17, 29], cover: 17,
    status: "complete",
    lessons: [

      /* ───────────────────────── LESSON 1 — READING (pp. 20–21) ───────────────────────── */
      {
        id: "u1l1", num: 1, skill: "Reading", title: "Kuwaiti Explorers: Inspiring Journeys", pages: [20, 21], status: "complete",
        canDo: [
          "I can interpret both explicit and implicit details clearly from a written text about Kuwaiti explorers' achievements.",
          "I can evaluate experiences and emotions related to expeditions and achievements by expressing personal opinions."
        ],
        goals: ["Read about two Kuwaiti explorers.", "Learn 12 new words.", "Match headings, find true and false sentences, and sort words.", "Write about a journey in an explorer’s voice."],
        goalsAr: ["أقرأ عن مستكشفَين كويتيَّين.", "أتعلّم 12 كلمة جديدة.", "أطابق العناوين وأحدّد الجمل الصحيحة والخاطئة وأصنّف الكلمات.", "أكتب عن رحلة بصوت المستكشف."],
        warmup: {
          title: "Before You Read", image: "crops/u1l1-activities.jpg", emoji: "🧗", seconds: 90,
          instructions: "1. Look at the pictures. Tick (✓) the activities you would like to attempt and explain why.",
          prompts: ["Which activities would you like to attempt?", "Explain why."]
        },
        vocab: [
          { w: "curious", pos: "adjective", emoji: "🧐", def: "wanting to know or learn about things", ex: "Families and schools encourage children to be curious, explore new ideas, and develop their talents.", exFromBook: true, ar: "فضوليّ / محبّ للمعرفة" },
          { w: "talent", pos: "noun", emoji: "🌟", def: "a natural ability to do something well", ex: "Families and schools encourage children to be curious, explore new ideas, and develop their talents.", exFromBook: true, ar: "موهبة" },
          { w: "explorer", pos: "noun", emoji: "🧭", def: "a person who travels to new or unknown places to learn about them", ex: "The following are some outstanding Kuwaiti explorers and adventurers who have brought pride to their country.", exFromBook: true, ar: "مستكشف" },
          { w: "proudly", pos: "adverb", emoji: "🇰🇼", def: "in a way that shows you feel happy about something good", ex: "He proudly raised the Kuwaiti flag there, along with pictures of His Highness the Amir and the Crown Prince.", exFromBook: true, ar: "بفخر" },
          { w: "highlight", pos: "verb", emoji: "🔦", def: "to show that something is important; to make people notice it", ex: "His goal was to highlight Kuwait’s recognition by the United Nations as a “Global Humanitarian Centre.”", exFromBook: true, ar: "يُبرز / يسلّط الضوء على" },
          { w: "represent", pos: "verb", emoji: "🎌", def: "to act or speak for a group or a country", ex: "After returning home, Qabazard explained that his two-week journey was not only a physical challenge but also a way to represent his country on an international stage.", exFromBook: true, ar: "يمثّل" },
          { w: "inspire", pos: "verb", emoji: "💡", def: "to make someone want to do something good", ex: "His achievement brought attention to Kuwait’s humanitarian role and inspired many people in Kuwait.", exFromBook: true, ar: "يُلهم" },
          { w: "remarkable", pos: "adjective", emoji: "🤩", def: "unusual and very good, so people notice it", ex: "She is known for her remarkable ability to fulfil difficult tasks and is always excited by new adventures.", exFromBook: true, ar: "مميّز / لافت للنظر" },
          { w: "fulfil", pos: "verb", emoji: "✅", def: "to do or finish something that you wanted or needed to do", ex: "She is known for her remarkable ability to fulfil difficult tasks and is always excited by new adventures.", exFromBook: true, ar: "يُنجز / يحقّق" },
          { w: "expedition", pos: "noun", emoji: "🏔️", def: "a long, organised journey to a far or difficult place", ex: "Because of her adventurous spirit, she joined a Euro-Arabian expedition led by Felicity Aston, who was the first person to ski solo across Antarctica.", exFromBook: true, ar: "رحلة استكشافية / بعثة" },
          { w: "will", pos: "noun", emoji: "💪", def: "a strong wish to do something, even when it is hard", ex: "This expedition highlighted the strong will of Kuwaiti and Arab women to face challenges and survive dangerous conditions.", exFromBook: true, ar: "إرادة" },
          { w: "survive", pos: "verb", emoji: "🛟", def: "to stay alive in or after a dangerous situation", ex: "This expedition highlighted the strong will of Kuwaiti and Arab women to face challenges and survive dangerous conditions.", exFromBook: true, ar: "ينجو / يبقى على قيد الحياة" }
        ],
        sections: [
          { type: "activity", title: "1. Look at the pictures. Tick (✓) the activities you would like to attempt and explain why.", page: 20, source: "book",
            instructions: "Look at the pictures. Tick (✓) the activities you would like to attempt and explain why.", instructionsAr: "انظر إلى الصور، واختر الأنشطة التي تودّ أن تجرّبها، واشرح السبب.",
            image: "crops/u1l1-activities.jpg",
            items: [
              { t: "short", open: true, q: "Which activities would you like to attempt? Why?",
                model: "I would like to try scuba diving and mountain climbing because I love the sea and adventures.",
                hint: "The pictures show: scuba diving, paragliding, a trip across the snow and mountain climbing. I would like to try … because …" }
            ] },

          { type: "reading", title: "Kuwaiti Explorers: Inspiring Journeys", page: 20,
            instructions: "Read the passage; then do the tasks that follow.",
            image: "crops/u1l1-explorers.jpg",
            paras: [
              "Kuwait is a proud country with strong values and a rich culture. Families and schools encourage children to be curious, explore new ideas, and develop their talents. Because of this supporting environment, many Kuwaitis grow up confident and ready to succeed in their lives. The following are some [[outstanding]] Kuwaiti explorers and adventurers who have brought pride to their country.",
              "Fuad Qabazard is a Kuwaiti mountaineer who successfully climbed Mount Everest in December 2015. He proudly raised the Kuwaiti flag there, along with pictures of His Highness the Amir and the Crown Prince. His goal was to highlight Kuwait’s recognition by the United Nations as a “Global Humanitarian Centre.” After returning home, Qabazard explained that his two-week journey was not only a physical challenge but also a way to represent his country on an international stage. His achievement brought attention to Kuwait’s humanitarian role and inspired many people in Kuwait.",
              "Lamees Najim made history in 2018 when she became the first Kuwaiti to reach the North Pole. She is known for her remarkable ability to fulfil difficult tasks and is always excited by new adventures. Because of her adventurous spirit, she joined a Euro-Arabian expedition led by Felicity Aston, who was the first person to ski solo across Antarctica. The journey included 12 female explorers from different countries, aiming to share their experiences and cultures. This expedition highlighted the strong will of Kuwaiti and Arab women to face challenges and survive dangerous conditions.",
              "These inspiring stories highlight the strength and pride of the Kuwaiti people. With the [[support]] and effort of its people, Kuwait wi​ll continue to shine."
            ],
            speaker: null,
            note: "Text type: Expository. The book labels the paragraphs A, B, C and D (A = 1, B = 2, C = 3, D = 4). The underlined words “outstanding” and “support” are for exercise 4. Did you know? Mount Everest is the highest mountain in the world at 8,849 metres. It is very difficult to climb because of cold weather and low oxygen." },

          { type: "activity", title: "2. Match each heading with the right paragraph.", page: 21, source: "book",
            instructions: "Match each heading with the right paragraph.", instructionsAr: "طابق كل عنوان مع الفقرة المناسبة.",
            image: "crops/u1l1-flag.jpg",
            items: [
              { t: "mcq", q: "1. First Kuwaiti at the North Pole", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D"], answer: 2,
                hint: "Who reached the North Pole?", why: "Paragraph C: “Lamees Najim made history in 2018 when she became the first Kuwaiti to reach the North Pole.”" },
              { t: "mcq", q: "2. A Climb to Represent Kuwait", options: ["Paragraph A", "Paragraph B", "Paragraph C", "Paragraph D"], answer: 1,
                hint: "Who climbed a mountain?", why: "Paragraph B: Fuad Qabazard climbed Mount Everest to represent his country on an international stage." }
            ] },

          { type: "activity", title: "3. Decide if the sentences are true (T) or false (F). Correct the false ones.", page: 21, source: "book",
            instructions: "Decide if the sentences are true (T) or false (F). Correct the false ones.", instructionsAr: "حدّد إن كانت الجمل صحيحة (T) أو خاطئة (F)، وصحّح الجمل الخاطئة.",
            items: [
              { t: "choose", q: "1. Lamees Najim was the first person in the world to ski solo across Antarctica.", options: ["T", "F"], answer: 1,
                hint: "Read paragraph C again. Who was the first person to ski solo across Antarctica?", why: "False. Felicity Aston “was the first person to ski solo across Antarctica.”" },
              { t: "short", q: "Correct sentence 1.", model: "Felicity Aston was the first.", keywords: [["felicity", "aston"]],
                hint: "Who led the expedition?" },
              { t: "choose", q: "2. The Kuwaiti explorers helped bring pride to their country.", options: ["T", "F"], answer: 0,
                hint: "Read the last sentence of paragraph A.", why: "True. “… outstanding Kuwaiti explorers and adventurers who have brought pride to their country.”" },
              { t: "choose", q: "3. Personal achievement was the only aim of Lamees Najim’s expedition.", options: ["T", "F"], answer: 1,
                hint: "What did the 12 female explorers aim to do?", why: "False. The explorers were “aiming to share their experiences and cultures.”" },
              { t: "short", q: "Correct sentence 3.", model: "It also shared cultures.", keywords: [["shar"], ["culture", "experience"]],
                hint: "The journey was aiming to share …" }
            ] },

          { type: "activity", title: "4. What is the meaning of the following words as used in the passage?", page: 21, source: "book",
            instructions: "What is the meaning of the following words as used in the passage?", instructionsAr: "ما معنى الكلمات التالية كما وردت في النص؟",
            items: [
              { t: "mcq", q: "1. outstanding: (Paragraph 1)", options: ["excellent", "harmful", "careless"], answer: 0,
                hint: "The explorers have brought pride to their country. Are they good or bad?", why: "“outstanding Kuwaiti explorers” = excellent, very good explorers." },
              { t: "mcq", q: "2. support: (Paragraph 4)", options: ["adventure", "help", "difficulty"], answer: 1,
                hint: "“With the support and effort of its people …”", why: "support = help." }
            ] },

          { type: "activity", title: "5. Complete the table below with more words from the passage for each part of speech. One example is given.", page: 21, source: "book",
            instructions: "Complete the table below with more words from the passage for each part of speech. One example is given.", instructionsAr: "أكمل الجدول بكلمات أخرى من النص لكل نوع من أنواع الكلام. يوجد مثال محلول.",
            items: [
              { t: "table", q: "Complete the table.",
                head: ["Adverbs", "Adjectives", "Nouns", "Verbs"],
                rows: [
                  ["proudly", "curious", "expedition", "survive"],
                  [{ answer: ADV, model: "successfully" }, { answer: ADJ, model: "outstanding" }, { answer: NOUN, model: "talents" }, { answer: VERB, model: "highlight" }],
                  [{ answer: ADV, model: "along" }, { answer: ADJ, model: "remarkable" }, { answer: NOUN, model: "achievement" }, { answer: VERB, model: "represent" }]
                ],
                hint: "Adverbs often end in -ly. Adjectives describe nouns. Nouns are people, places and things. Verbs are actions.",
                why: "Answer key: Adverbs: successfully, along. Adjectives: outstanding, remarkable. Nouns: talents, achievement. Verbs: highlight, represent. Other words from the passage are also correct (for example always, strong, journey, climbed).",
                note: "Use two different words from the passage in each column." }
            ] },

          { type: "activity", title: "6. Discuss the following questions.", page: 21, source: "book",
            instructions: "Discuss the following questions.", instructionsAr: "ناقش الأسئلة التالية.",
            items: [
              { t: "short", open: true, q: "1. What qualities helped Lamees and Fuad succeed?", model: "Courage and hard work.", hint: "Think about their personality: brave? strong? hard-working?" },
              { t: "short", open: true, q: "2. How do the stories of Fuad and Lamees show their love for their country?", model: "Fuad raised the Kuwaiti flag on Mount Everest, and Lamees was proud to be the first Kuwaiti at the North Pole.", hint: "What did Fuad raise on Mount Everest? What did Lamees do first?" }
            ] },

          { type: "write", title: "7. A Journey Through an Explorer’s Eyes.", page: 21, source: "book",
            instructions: "Choose one of the explorers (Fuad or Lamees). Write (3-4 sentences) in their voice. Imagine how they felt before, during, and after the journey. Focus on emotions, goals, and lessons learned.",
            wordBankLabel: "Sentence Starters (from the book)",
            wordBank: ["I felt", "My goal was to", "I faced", "I stayed strong.", "I worked with my team.", "I learned"],
            frame: [
              { label: "Before the journey", hint: "I am … Before the journey, I felt … My goal was to …", lines: 2 },
              { label: "During the journey", hint: "During the journey, I faced … / I stayed strong. / I worked with my team.", lines: 2 },
              { label: "After the journey", hint: "After the journey, I felt … I learned …", lines: 2 }
            ],
            model: "I am Lamees. Before the journey, I felt nervous but excited. My goal was to reach the North Pole. During the journey, I faced freezing cold, but I stayed strong and worked with my team. After the journey, I felt proud and learned never to give up.",
            modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
            checklist: ["I chose Fuad or Lamees and wrote with “I”.", "I wrote about before, during and after the journey.", "I wrote about feelings, goals and lessons."],
            minWords: 30 },

          { type: "activity", title: "Extra Practice: Fuad or Lamees?", source: "extra", stage: "guided",
            instructions: "Read the sentence. Is it about Fuad Qabazard or Lamees Najim? Use the passage.", instructionsAr: "هل الجملة عن فؤاد قبازرد أم عن لميس نجم؟ استعن بالنص.",
            items: [
              { t: "mcq", q: "This explorer climbed Mount Everest in December 2015.", options: ["Fuad", "Lamees"], answer: 0, hint: "Paragraph B.", why: "“Fuad Qabazard … successfully climbed Mount Everest in December 2015.”" },
              { t: "mcq", q: "This explorer reached the North Pole in 2018.", options: ["Fuad", "Lamees"], answer: 1, hint: "Paragraph C.", why: "“Lamees Najim made history in 2018 when she became the first Kuwaiti to reach the North Pole.”" },
              { t: "mcq", q: "This explorer joined a group of 12 female explorers.", options: ["Fuad", "Lamees"], answer: 1, hint: "Paragraph C.", why: "“The journey included 12 female explorers from different countries.”" },
              { t: "mcq", q: "This explorer’s journey took two weeks.", options: ["Fuad", "Lamees"], answer: 0, hint: "Paragraph B.", why: "“… his two-week journey was not only a physical challenge …”" },
              { t: "mcq", q: "This explorer raised pictures of His Highness the Amir and the Crown Prince.", options: ["Fuad", "Lamees"], answer: 0, hint: "Paragraph B.", why: "“He proudly raised the Kuwaiti flag there, along with pictures of His Highness the Amir and the Crown Prince.”" }
            ] },

          { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
            instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
            items: [
              { t: "fill", q: "My little brother is very ____: he asks a lot of questions.", answer: ["curious"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "curious = wanting to know or learn about things." },
              { t: "fill", q: "Sara has a ____ for drawing. Her pictures are beautiful.", answer: ["talent"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "talent = a natural ability to do something well." },
              { t: "fill", q: "The team went on an ____ to the North Pole.", answer: ["expedition"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "expedition = a long, organised journey to a difficult place." },
              { t: "fill", q: "Plants cannot ____ without water.", answer: ["survive"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "survive = stay alive." },
              { t: "fill", q: "Her story ____ me to work harder.", answer: ["inspired"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "inspire = make someone want to do something good." },
              { t: "fill", q: "The players ____ held the cup in the air.", answer: ["proudly"], bank: ["curious", "talent", "expedition", "survive", "inspired", "proudly"], why: "proudly = in a way that shows you are happy about something good." }
            ] }
        ],
        game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
        teacher: {
          notes: [
            "Before You Read (ex. 1): show the four photos (scuba diving, paragliding, a trip across the snow, mountain climbing). Students choose and give a reason. Any choice is fine.",
            "Pre-teach the 12 words (curious, talent, explorer, proudly, highlight, represent, inspire, remarkable, fulfil, expedition, will, survive). They are bold in the passage. Point out that “will” here is a noun (a strong wish).",
            "The book labels the paragraphs A–D; in the app they are numbered 1–4. Read the “Did you know?” box about Mount Everest.",
            "Ex. 2: 1 = C, 2 = B. Ex. 3: 1 F (Felicity Aston was the first.), 2 T, 3 F (It also shared cultures.). Ex. 4: outstanding = a. excellent; support = b. help.",
            "Ex. 5 (answer key): Adverbs: successfully, along. Adjectives: outstanding, remarkable. Nouns: talents, achievement. Verbs: highlight, represent. Accept other correct words from the passage (always, strong, journey, climbed…).",
            "Ex. 6: open discussion (key for 1: courage and hard work). Ex. 7: students write 3–4 sentences in Fuad’s or Lamees’s voice with the sentence starters."
          ],
          pair: ["A reads a heading from ex. 2; B finds the paragraph and reads the key sentence.", "Partners read their ex. 7 texts aloud; the partner guesses: Fuad or Lamees?"],
          group: ["Groups make a poster “Kuwaiti Explorers”: one fact, one feeling and one lesson for each explorer."],
          quick: [
            { q: "Who was the first Kuwaiti to reach the North Pole?", a: "Lamees Najim." },
            { q: "When did Fuad Qabazard climb Mount Everest?", a: "In December 2015." },
            { q: "What does “outstanding” mean?", a: "Excellent." },
            { q: "Is “remarkable” an adjective or a noun?", a: "An adjective." }
          ]
        }
      },

      /* ───────────────────────── LESSON 2 — GRAMMAR (p. 22) ───────────────────────── */
      {
        id: "u1l2", num: 2, skill: "Grammar", title: "Past Simple & Past Continuous", pages: [22], status: "complete",
        canDo: [
          "I can distinguish between past simple and past continuous forms clearly and accurately in sentences about past events and experiences.",
          "I can apply past simple and past continuous tenses to accurately describe past events in written sentences and coherent conversations."
        ],
        goals: ["Find the verbs in a story about an adventure.", "Tell completed actions from actions in progress.", "Use while and when.", "Ask and answer about the past with a partner."],
        goalsAr: ["أجد الأفعال في قصة عن مغامرة.", "أميّز الأفعال المكتملة من الأفعال المستمرة.", "أستخدم while و when.", "أسأل زميلي وأجيبه عن أحداث في الماضي."],
        warmup: {
          title: "Grammar in context", image: "crops/u1l2-adventure.jpg", emoji: "🤿", seconds: 60, source: "extra",
          instructions: "Look at the pictures. Talk with your partner.",
          prompts: ["What was the diver doing?", "What was the man doing in the mountains?", "Have you ever tried an adventure like these?"]
        },
        vocab: [],
        sections: [
          { type: "grammar", title: "Grammar: Past Simple & Past Continuous", page: 22,
            steps: [
              { title: "Past Simple: used for",
                text: "Actions that were completed in the past. A series of past actions.",
                textAr: "نستخدم الماضي البسيط للأفعال التي اكتملت في الماضي، ولسلسلة من الأفعال المتتالية في الماضي.",
                examples: ["Example: {s:Ali} {v:climbed} the mountain {t:last year}.", "Example: {s:Fahad} {v:went} scuba diving, {v:saw} colourful fish, and {v:swam} near the coral reef."] },
              { title: "Past Simple: form and time words",
                text: "Form: climbed / studied. irregular verbs (go-went). Used with: last (year/week/month), ago, yesterday, in the past.",
                textAr: "الصيغة: نضيف ed للفعل (climbed / studied)، وبعض الأفعال شاذة (go ← went). كلمات دالة: last, ago, yesterday, in the past.",
                examples: ["{s:His friends} {v:tried} white-water rafting {t:yesterday}.", "{s:Fahad} {v:went} scuba diving."] },
              { title: "Past Continuous: used for",
                text: "A longer action interrupted by a shorter one. Two actions happening at the same time.",
                textAr: "نستخدم الماضي المستمر لحدث طويل قطعه حدث أقصر، ولحدثين كانا يحدثان في الوقت نفسه.",
                examples: ["Example: {c:While} {s:they} {a:were} {v:paddling}, {s:the raft} {v:hit} a rock.", "Example: {c:While} {s:he} {a:was} {v:hiking}, {s:the others} {a:were} {v:taking} photos."] },
              { title: "Past Continuous: form and time words",
                text: "Form: I/he/she/it was + v.+ -ing. we/you/they were + v.+ -ing. Used with: while / when.",
                textAr: "الصيغة: was مع I/he/she/it، و were مع we/you/they، ثم الفعل مع ing. كلمات دالة: while / when.",
                examples: ["{s:He} {a:was} {v:swimming} near the coral reef.", "{s:They} {a:were} {v:paddling}."] },
              { title: "while or when?", source: "extra",
                text: "We usually put while before the longer action (past continuous) and when before the shorter action (past simple).",
                textAr: "نضع while عادةً قبل الحدث الطويل (الماضي المستمر)، و when قبل الحدث القصير (الماضي البسيط).",
                examples: ["{c:While} {s:I} {a:was} {v:studying}, {s:my cousin} {v:called} me.", "{s:I} {a:was} {v:reading} a book {c:when} {s:I} {v:heard} a loud noise."] },
              { title: "Negatives and questions", source: "extra",
                text: "Past continuous: wasn’t / weren’t + verb-ing; Was / Were + subject + verb-ing? Past simple: didn’t + verb; Did + subject + verb?",
                textAr: "النفي في الماضي المستمر: wasn’t / weren’t + الفعل مع ing، وفي الماضي البسيط: didn’t + الفعل في صورته الأصلية. السؤال: Was / Were أو Did قبل الفاعل.",
                examples: ["{q:What} {a:were} {s:you} {v:doing} {c:when} {s:you} {v:heard} a loud noise?", "{s:They} {n:weren’t} {v:playing} football.", "{s:Ali} {n:didn’t} {v:climb} the mountain."] }
            ],
            table: {
              head: ["", "Past Simple", "Past Continuous"],
              rows: [
                ["Used for", "Actions that were completed in the past. / A series of past actions", "A longer action interrupted by a shorter one. / Two actions happening at the same time."],
                ["Form", "climbed / studied, irregular verbs (go-went)", "I/he/she/it was + v.+ -ing, we/you/they were + v.+ -ing"],
                ["Used with", "last (year/week/month),ago, yesterday, in the past", "while / when"]
              ]
            },
            worked: {
              q: "Complete: I ______ (read) a book when I ______ (hear) a loud noise.",
              steps: ["Which action is longer? Reading a book: it was in progress → past continuous.", "I → was + verb-ing: was reading.", "Which action is shorter? Hearing the noise: it interrupted the reading → past simple.", "hear is irregular: hear → heard."],
              a: "{s:I} {a:was} {v:reading} a book {c:when} {s:I} {v:heard} a loud noise."
            },
            notes: ["“The book’s table” is the Grammar box from page 22. The book prints “last (year/week/month),ago,” without a space after the comma."] },

          { type: "activity", title: "1. Read the passage. Underline all the verbs.", page: 22, source: "book", stage: "guided",
            instructions: "Read the passage. Write all the verbs you find.", instructionsAr: "اقرأ النص واكتب كل الأفعال التي تجدها فيه.",
            image: "crops/u1l2-adventure.jpg",
            items: [
              { t: "short", q: "Last year, a group of friends went on an adventure. On the first day, Fahad went scuba diving. While he was swimming near the coral reef, he saw colourful fish.\nThe next day, his friends tried white-water rafting. While they were paddling, the raft hit a rock. Water splashed, but they kept going, laughing and shouting.\nOn the last day, Ali climbed a snowy mountain. While he was hiking, the others were taking photos. It was a fun and memorable trip.\n\nWrite all the verbs.",
                model: "went, went, was swimming, saw, tried, were paddling, hit, splashed, kept (going), climbed, was hiking, were taking, was",
                keywords: [["went"], ["swimming"], ["saw"], ["tried"], ["paddling"], ["hit"], ["splashed"], ["kept"], ["climbed"], ["hiking"], ["taking"]],
                hint: "Look for past simple verbs (climbed, went…) and was / were + verb-ing (was swimming…). There are 13." }
            ] },

          { type: "activity", title: "2. Complete the table: a. Completed actions (e.g. climbed…) b. Actions in progress (e.g. was hiking/ were paddling…)", page: 22, source: "book", stage: "guided",
            instructions: "Complete the table: a. Completed actions (e.g. climbed…) b. Actions in progress (e.g. was hiking/ were paddling…)", instructionsAr: "أكمل الجدول: (أ) الأفعال المكتملة، (ب) الأفعال التي كانت مستمرة.",
            items: [
              { t: "table", q: "Complete the table.",
                head: ["Example from the story", "Completed Action", "Action in Progress"],
                rows: [
                  ["Fahad went scuba diving.", { answer: ["went"], model: "went" }, "—"],
                  ["While he was swimming, he saw colourful fish.", { answer: ["saw"], model: "saw" }, { answer: ["was swimming"], model: "was swimming" }],
                  ["While they were paddling, the raft hit a rock.", { answer: ["hit"], model: "hit" }, { answer: ["were paddling"], model: "were paddling" }],
                  ["While Ali was hiking, the others were taking photos.", "—", { answer: ["was hiking, were taking", "was hiking were taking", "was hiking and were taking", "was hiking / were taking", "was hiking/were taking", "was hiking; were taking"], model: "was hiking, were taking" }]
                ],
                hint: "Completed action = past simple (went, saw…). Action in progress = was / were + verb-ing.",
                why: "went · saw / was swimming · hit / were paddling · was hiking, were taking.",
                note: "A dash (—) means there is nothing to write: that sentence has no action of this kind." }
            ] },

          { type: "activity", title: "3. Circle the correct verb form in each sentence.", page: 22, source: "book", stage: "guided",
            instructions: "Circle the correct verb form in each sentence.", instructionsAr: "اختر الصيغة الصحيحة للفعل في كل جملة.",
            items: [
              { t: "choose", q: "a. While they ____ football, it (started / was starting) to rain.", options: ["played", "were playing"], answer: 1, hint: "After while: the longer action in progress.", why: "While + past continuous: were playing." },
              { t: "choose", q: "a. While they were playing football, it ____ to rain.", options: ["started", "was starting"], answer: 0, hint: "The rain interrupted the game: a short action.", why: "The shorter action is in the past simple: started." },
              { t: "choose", q: "b. I ____ emails when my computer (crashed / was crashing).", options: ["wrote", "was writing"], answer: 1, hint: "The longer action was in progress.", why: "I was writing emails (longer action in progress)." },
              { t: "choose", q: "b. I was writing emails when my computer ____.", options: ["crashed", "was crashing"], answer: 0, hint: "After when: the short action that interrupted.", why: "when + past simple: crashed." }
            ] },

          { type: "activity", title: "Extra Practice: Step 1 — was or were?", source: "extra", stage: "guided",
            instructions: "Look at the subject first. Then choose the correct word.", instructionsAr: "انظر إلى الفاعل أولًا ثم اختر الكلمة الصحيحة.",
            items: [
              { t: "choose", q: "Fahad ____ swimming near the coral reef.", options: ["was", "were"], answer: 0, hint: "Fahad = he.", why: "he → was + verb-ing." },
              { t: "choose", q: "His friends ____ paddling when the raft hit a rock.", options: ["was", "were"], answer: 1, hint: "His friends = they.", why: "they → were + verb-ing." },
              { t: "choose", q: "I ____ reading a book when I heard a loud noise.", options: ["was", "were"], answer: 0, hint: "I → ?", why: "I → was." },
              { t: "choose", q: "What ____ you doing when the lights went out?", options: ["was", "were"], answer: 1, hint: "you → ?", why: "you → were." },
              { t: "choose", q: "Ali ____ a snowy mountain last year.", options: ["climbed", "was climb"], answer: 0, hint: "A completed action with “last year”.", why: "Past simple: climbed." },
              { t: "choose", q: "While he was hiking, the others ____ photos.", options: ["were taking", "was taking"], answer: 0, hint: "the others = they.", why: "Two actions at the same time: the others were taking." }
            ] },

          { type: "activity", title: "Extra Practice: Step 2 — Sentence builder", source: "extra", stage: "guided",
            instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
            items: [
              { t: "order", q: "🌧️ Make a sentence.", words: ["While", "we", "were", "walking,", "it", "started", "to", "rain."], answer: ["While we were walking, it started to rain."], hint: "Start with While + the longer action.", why: "While + past continuous, + past simple." },
              { t: "order", q: "📞 Make a sentence.", words: ["I", "was", "studying", "when", "my", "cousin", "called."], answer: ["I was studying when my cousin called."], hint: "Longer action first, then when + the short action.", why: "past continuous + when + past simple." },
              { t: "order", q: "❓ Make a question.", words: ["What", "were", "you", "doing", "when", "you", "heard", "the", "noise?"], answer: ["What were you doing when you heard the noise?"], hint: "What + were + you + verb-ing …?", why: "Wh- + were + subject + verb-ing + when + past simple?" },
              { t: "order", q: "📸 Make a sentence.", words: ["While", "Ali", "was", "hiking,", "the", "others", "were", "taking", "photos."], answer: ["While Ali was hiking, the others were taking photos."], hint: "Two actions at the same time.", why: "Two past continuous actions happening at the same time." }
            ] },

          { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
            instructions: "One part is wrong. Type the correct words.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
            items: [
              { t: "fix", q: "While they {was} paddling, the raft hit a rock.", answer: ["were"], hint: "they → ?", why: "they → were paddling." },
              { t: "fix", q: "I was reading a book when I {was hearing} a loud noise.", answer: ["heard"], hint: "The short action that interrupts is in the past simple.", why: "when + past simple: heard." },
              { t: "fix", q: "Fahad {goed} scuba diving.", answer: ["went"], hint: "go is an irregular verb.", why: "go → went." },
              { t: "fix", q: "While he was {swiming}, he saw colourful fish.", answer: ["swimming"], hint: "swim: double the m.", why: "swim → swimming." },
              { t: "short", q: "Write one sentence about yourself with “while” or “when”.", open: true, model: "I was eating dinner when my phone rang.", hint: "I was …ing when … / While I was …ing, …" }
            ] },

          { type: "speak", title: "4. Ask and answer questions using the past simple and past continuous. Take turns. You may use these activities in your questions:", page: 22, source: "book",
            instructions: "Ask and answer questions using the past simple and past continuous. Take turns. You may use these activities in your questions: (watching TV / shopping / doing homework / eating dinner)",
            dialogue: [
              { who: "A", text: "What were you doing when you heard a loud noise?" },
              { who: "B", text: "I was reading a book when I heard a loud noise." },
              { who: "A", text: "Who called you while you were studying?" },
              { who: "B", text: "My cousin called me while I was studying." },
              { who: "A (you)", text: "" }, { who: "B (your partner)", text: "" }
            ],
            note: "The first four lines are the book’s Example Answers.",
            starters: ["What were you doing when …?", "Who called you while you were …?", "I was watching TV when …", "I was shopping when …", "I was doing homework when …", "I was eating dinner when …"],
            record: true }
        ],
        game: { kind: "quiz", title: "Past Tense Race", items: [
          { t: "choose", q: "While he ____ near the coral reef, he saw colourful fish.", options: ["swam", "was swimming"], answer: 1, why: "While + the longer action → was swimming." },
          { t: "choose", q: "While they were paddling, the raft ____ a rock.", options: ["hit", "was hitting"], answer: 0, why: "The short action → past simple: hit." },
          { t: "choose", q: "The others ____ taking photos.", options: ["was", "were"], answer: 1, why: "The others = they → were." },
          { t: "choose", q: "Ali ____ a snowy mountain last year.", options: ["climbed", "was climbing"], answer: 0, why: "A completed action → climbed." },
          { t: "choose", q: "I was writing emails ____ my computer crashed.", options: ["when", "while"], answer: 0, why: "when + the short action (past simple)." },
          { t: "choose", q: "go → ?", options: ["goed", "went"], answer: 1, why: "go is irregular: went." }
        ] },
        teacher: {
          notes: [
            "Ex. 1: students read the adventure story and find the verbs: went, went, was swimming, saw, tried, were paddling, hit, splashed, kept (going), climbed, was hiking, were taking, was.",
            "Ex. 2 answers: went · saw / was swimming · hit / were paddling · was hiking, were taking.",
            "Present the Grammar box: past simple (completed actions, series of actions; last, ago, yesterday) and past continuous (longer action interrupted by a shorter one, two actions at the same time; while / when).",
            "Ex. 3 answers: a. were playing / started  b. was writing / crashed.",
            "Ex. 4: pairs ask and answer with the four activities (watching TV / shopping / doing homework / eating dinner). Use the Example Answers box as a model."
          ],
          pair: ["Ex. 4: A asks “What were you doing when …?”; B answers; then swap.", "Memory chain: A says what he was doing at 8 p.m. yesterday; B repeats and adds his own."],
          group: ["Story chain: each student adds one sentence to an adventure story with while or when."],
          quick: [
            { q: "Complete: While they ___ (paddle), the raft hit a rock.", a: "were paddling" },
            { q: "Which tense do we use for the shorter, interrupting action?", a: "The past simple." },
            { q: "What is the past simple of “go”?", a: "went" },
            { q: "Make a question: you / do / when / you / hear the noise", a: "What were you doing when you heard the noise?" }
          ]
        }
      },

      /* ───────────────────────── LESSON 3 — LISTENING (p. 23) ───────────────────────── */
      {
        id: "u1l3", num: 3, skill: "Listening", title: "Survival Stories", pages: [23], status: "complete",
        canDo: [
          "I can determine both explicit and implicit details clearly from a spoken context about survival situations.",
          "I can use cause-and-effect linkers (because, so, since, as a result, therefore) accurately to describe events in the context of survival situations."
        ],
        linkers: ["because", "so", "since", "as a result", "therefore", "consequently"],
        goals: ["Talk about dangerous situations.", "Listen to emergency calls for the main idea and details.", "Find causes and effects.", "Join ideas with because, so, therefore…"],
        goalsAr: ["أتحدّث عن مواقف خطيرة.", "أستمع إلى مكالمات طوارئ لأحدّد الفكرة الرئيسية والتفاصيل.", "أحدّد الأسباب والنتائج.", "أربط الأفكار باستخدام because و so و therefore وغيرها."],
        warmup: {
          title: "Before You Listen", image: "crops/u1l3-rescue.jpg", emoji: "🆘", seconds: 90,
          instructions: "1. Discuss the following questions.",
          prompts: ["a. Have you ever been in a dangerous situation or an emergency?", "b. What did you do to solve the problem?"]
        },
        vocab: [],
        sections: [
          { type: "listen", title: "2. Listen to the speakers and choose the best title.", page: 23, source: "book",
            track: "1.1", needsAudio: true,
            instructions: "Listen to the speakers and choose the best title.", instructionsAr: "استمع إلى المتحدثين واختر أفضل عنوان.",
            items: [
              { t: "mcq", keyed: true, q: "Choose the best title.", options: ["Staying Safe in the Desert", "SOS: Save Our Souls", "A Trip to the Pacific Ocean", "GPS: Global Positioning System"], answer: 1,
                hint: "The teams are in different places (the ocean, the desert, an ice cave) and they all call for help.", why: "Answer from the book’s answer key: b. SOS: Save Our Souls. All three teams call for help." }
            ] },

          { type: "listen", title: "3. Listen again and complete the table.", page: 23, source: "book",
            track: "1.1", needsAudio: true,
            instructions: "Listen again and complete the table.", instructionsAr: "استمع مرة أخرى وأكمل الجدول.",
            items: [
              { t: "table", keyed: true, q: "Complete the table.",
                head: ["Team", "Time", "Location", "The Challenges They Faced"],
                rows: [
                  ["Alpha", "09:15 AM", "The Pacific Ocean", { model: "The boat hit a rock, water came in." }],
                  ["Bravo", { answer: ["01:40 PM", "1:40 PM", "01:40 p.m.", "1:40 p.m.", "01:40 pm", "1:40 pm", "01:40", "1:40"], model: "01:40 PM" }, "Sonoran Desert", { model: "The car broke down, it was too hot." }],
                  ["Charlie", "04:17 PM", { answer: ["An ice cave", "ice cave", "in an ice cave", "the ice cave"], model: "An ice cave" }, { model: "They were trapped by ice and cold." }]
                ],
                why: "Answer key: Bravo: 01:40 PM. Charlie: an ice cave. Challenges: Alpha: the boat hit a rock and water came in. Bravo: the car broke down and it was too hot. Charlie: they were trapped by ice and cold.",
                note: "The time and the location are checked. Compare your challenges with the suggested answers." }
            ] },

          { type: "listen", title: "4. Listen once more and fill in the table with causes and effects.", page: 23, source: "book",
            track: "1.1", needsAudio: true,
            instructions: "Listen once more and fill in the table with causes and effects.", instructionsAr: "استمع مرة أخيرة واملأ الجدول بالأسباب والنتائج.",
            items: [
              { t: "table", keyed: true, open: true, q: "Complete the table.",
                head: ["No.", "", "Cause", "Effect"],
                rows: [
                  ["1", "Call 1", "The boat hit a big rock.", "Water is coming in."],
                  ["2", "Call 1", "The engine is not working.", { model: "We can’t move." }],
                  ["3", "Call 2", { model: "Because of the heat." }, "We quickly became exhausted."],
                  ["4", "Call 3", "Our heater is broken.", { model: "We can’t stay warm." }]
                ] }
            ] },

          { type: "activity", title: "5. Use the causes and effects from exercise 4 to write full sentences, using (because, so, since, as a result, therefore, consequently).", page: 23, source: "book",
            instructions: "Use the causes and effects from exercise 4 to write full sentences, using (because, so, since, as a result, therefore, consequently). Example: The boat hit a big rock; as a result, water is coming in.",
            instructionsAr: "استخدم الأسباب والنتائج من التمرين 4 لتكتب جملًا كاملة، مستخدمًا أدوات الربط: because, so, since, as a result, therefore, consequently.",
            items: [
              { t: "short", q: "1. (Call 1: the engine)", model: "The engine is not working, so we can’t move.",
                keywords: [["because", "so ", "since", "as a result", "therefore", "consequently"], ["engine"], ["move"]],
                hint: "Cause + so / therefore + effect. Or: Because + cause, effect." },
              { t: "short", q: "2. (Call 2: the heat)", model: "Because of the heat, we quickly became exhausted.",
                keywords: [["because", "so ", "since", "as a result", "therefore", "consequently"], ["heat", "hot"], ["exhausted"]],
                hint: "Because of the heat, … / It was very hot; as a result, …" },
              { t: "short", q: "3. (Call 3: the heater)", model: "Our heater is broken; therefore, we can’t stay warm.",
                keywords: [["because", "so ", "since", "as a result", "therefore", "consequently"], ["heater"], ["warm"]],
                hint: "Our heater is broken; therefore, … / We can’t stay warm because …" }
            ] },

          { type: "write", title: "6. Before You Explore: Safety First", page: 23, source: "book",
            instructions: "Imagine you are planning your own expedition. What preparations would you make to avoid the problems faced by the teams in the story? • List three things you would do or bring. • Explain how each one would help keep you safe. • Share your ideas with the class.",
            wordBank: ["because", "so", "since", "as a result", "therefore", "consequently"],
            wordBankLabel: "Linker Bank",
            frame: [
              { label: "1.", hint: "I would bring … because …" },
              { label: "2.", hint: "I would … so …" },
              { label: "3.", hint: "I would … ; therefore, …" }
            ],
            model: "I would bring extra water because the desert is very hot.\nI would check the boat and the engine before the trip, so it doesn’t break down.\nI would take warm clothes and a spare heater; therefore, I can stay warm in the cold.",
            modelFromBook: false,
            checklist: ["I listed three things to do or bring.", "I explained how each one keeps me safe.", "I used a linker from the Linker Bank."],
            minWords: 25 },

          { type: "activity", title: "Extra Practice: Reason or effect?", source: "extra", stage: "guided",
            instructions: "Choose the correct linker.", instructionsAr: "اختر أداة الربط الصحيحة.",
            items: [
              { t: "choose", q: "We couldn’t move ____ the engine was not working.", options: ["because", "so"], answer: 0, why: "because gives the reason." },
              { t: "choose", q: "The car broke down, ____ we called for help.", options: ["because", "so"], answer: 1, why: "so shows the effect." },
              { t: "choose", q: "____ it was very cold, they couldn’t sleep.", options: ["Since", "Therefore"], answer: 0, why: "Since gives the reason." },
              { t: "choose", q: "The heater was broken; ____, they were very cold.", options: ["because", "as a result"], answer: 1, why: "as a result shows the effect." },
              { t: "choose", q: "The boat hit a rock; ____, water came in.", options: ["consequently", "since"], answer: 0, why: "consequently shows the effect." }
            ] }
        ],
        game: { kind: "sort", title: "Reason or Effect?",
          buckets: ["To show a reason 🤔", "To show an effect ➡️"],
          cards: [["because", 0], ["since", 0], ["so", 1], ["therefore", 1], ["consequently", 1], ["as a result", 1]] },
        teacher: {
          notes: [
            "Before You Listen (ex. 1): use the photo of the firefighters. Students share real or imagined emergencies.",
            "The recording is not in this app: play it from the book (track 1.1, QR code on page 23).",
            "Ex. 2 answer: b. SOS: Save Our Souls.",
            "Ex. 3 answers: Bravo time 01:40 PM; Charlie location: an ice cave. Challenges: Alpha – the boat hit a rock, water came in; Bravo – the car broke down, it was too hot; Charlie – they were trapped by ice and cold.",
            "Ex. 4 answers: 2. We can’t move. 3. Because of the heat. 4. We can’t stay warm.",
            "Ex. 5 (sample answers): 1. The engine is not working, so we can’t move. 2. Because of the heat, we quickly became exhausted. 3. Our heater is broken; therefore, we can’t stay warm. Teach the tip: because, since = reason; so, therefore, consequently, as a result = effect.",
            "Ex. 6: groups list three preparations and explain how each one keeps them safe, then share with the class."
          ],
          pair: ["A says a cause (The heater is broken.); B finishes with a linker (… so we can’t stay warm.).", "Partners compare their three safety preparations in ex. 6."],
          group: ["Groups make a “Safety First” checklist for one place: the ocean, the desert or an ice cave."],
          quick: [
            { q: "What is the best title for the recording?", a: "SOS: Save Our Souls." },
            { q: "Where was team Charlie?", a: "In an ice cave." },
            { q: "Which linkers show a reason?", a: "because, since." },
            { q: "Join: The engine is not working. We can’t move. (so)", a: "The engine is not working, so we can’t move." }
          ]
        }
      },

      /* ───────────────────────── LESSON 4 — SPEAKING (p. 24) ───────────────────────── */
      {
        id: "u1l4", num: 4, skill: "Speaking", title: "Surviving the Unexpected", pages: [24], status: "complete",
        canDo: [
          "I can provide clear survival instructions and advice using imperative verbs and sequencing expressions effectively.",
          "I can use precise vocabulary to express detailed ideas in survival discussions"
        ],
        linkers: ["first", "second", "third", "fourth", "finally"],
        goals: ["Talk about dangers and survival tools.", "Match survival items to their definitions.", "Give instructions with imperatives.", "Present a short survival podcast."],
        goalsAr: ["أتحدّث عن المخاطر وأدوات النجاة.", "أطابق أدوات النجاة مع تعريفاتها.", "أعطي تعليمات باستخدام صيغة الأمر.", "أقدّم حلقة بودكاست قصيرة عن النجاة."],
        warmup: {
          title: "Surviving the Unexpected", image: "crops/u1l4-places.jpg", emoji: "🏕️", seconds: 90,
          instructions: "1. Look at the picture (1). Discuss with a partner.",
          prompts: ["1. What dangers might people face in these places?", "2. What tools are needed to survive?"]
        },
        vocab: [],
        sections: [
          { type: "activity", title: "2. a. Match the items (1–7) to their definitions.", page: 24, source: "book",
            instructions: "Match the items (1–7) to their definitions.", instructionsAr: "صِل الأدوات (1–7) بتعريفاتها.",
            image: "crops/u1l4-items.jpg",
            items: [
              { t: "match", q: "Match the items (1–7) to their definitions.",
                pairs: [["1. compass", "a tool that helps you find direction."], ["2. firestarter", "helps you start a fire easily."], ["3. shelter", "a safe place to rest or sleep."], ["4. flare", "used to ask for help."], ["5. water filter", "makes dirty water safe to drink."], ["6. backpack", "carries your supplies on your back."], ["7. map", "shows routes and landmarks."]],
                hint: "Look at the pictures. A flare makes a bright light in the sky.",
                why: "compass → finds direction; firestarter → starts a fire; shelter → a safe place to rest; flare → asks for help; water filter → makes water safe; backpack → carries supplies; map → shows routes." }
            ] },

          { type: "speak", title: "2. b. Use these items to give survival instructions. c. Use the imperative form.", page: 24, source: "book",
            instructions: "b. Use these items to give survival instructions. c. Use the imperative form.",
            example: "Use a compass to find directions.",
            dialogue: [{ who: "You", text: "" }],
            starters: ["Use a … to …", "Take a … to …", "Build a … to …", "Carry a … to …", "Don’t forget your …", "Don’t …"],
            record: true },

          { type: "listen", title: "3. a. Listen to a podcast called “Top Survival Tips” and complete the notes.", page: 24, source: "book",
            track: "1.2", needsAudio: true,
            instructions: "Listen to a podcast called “Top Survival Tips” and complete the notes. Podcast: Arctic Survival Tips. Tip 1: First, find or build a shelter.",
            instructionsAr: "استمع إلى بودكاست بعنوان “Top Survival Tips” وأكمل الملاحظات. النصيحة الأولى محلولة.",
            items: [
              { t: "short", keyed: true, open: true, q: "Tip 2:", model: "Second, start a fire as soon as possible." },
              { t: "short", keyed: true, open: true, q: "Tip 3:", model: "Third, don’t eat snow; drink warm water." },
              { t: "short", keyed: true, open: true, q: "Tip 4:", model: "Fourth, stay dry and change wet clothes." },
              { t: "short", keyed: true, open: true, q: "Tip 5:", model: "Finally, signal for help." }
            ] },

          { type: "activity", title: "3. b. Discuss the following.", page: 24, source: "book",
            instructions: "Discuss the following.", instructionsAr: "ناقش ما يلي.",
            items: [
              { t: "short", open: true, q: "a. Which tip did you find important? Why?", model: "Tip 2, fire keeps us warm and safe.", hint: "I think Tip … is important because …" },
              { t: "short", q: "b. What sequence words did the speaker use to order his 5 tips?", model: "First, second, third, fourth, finally.",
                keywords: [["first"], ["second"], ["third"], ["fourth"], ["finally"]], hint: "Look at the start of each tip in your notes." }
            ] },

          { type: "speak", title: "4. Choose one survival scenario. Prepare and present a short podcast episode, giving tips and instructions to people in one of these situations.", page: 24, source: "book",
            instructions: "Choose one survival scenario. Prepare and present a short podcast episode, giving tips and instructions to people in one of these situations.",
            steps: ["a. Lost in the Arctic", "b. Trapped in the Jungle", "c. Extreme Desert Heat", "d. Getting Injured in the Mountain"],
            dialogue: [{ who: "Podcast host (you)", text: "" }],
            note: "Time to Pitch! Your group will present a 30-second survival podcast. Use imperatives (e.g., “Stay calm. Find shelter.”) Use sequencing expressions (e.g., first, second, then, finally). Speak clearly.",
            starters: ["Welcome to our podcast!", "First, …", "Second, …", "Then, …", "Finally, …", "IMPERATIVES – Affirmative: Get a compass. Make a fire. Build a shelter. Carry a map.", "IMPERATIVES – Negative: Don’t get lost. Don’t freeze. Don’t take risks."],
            record: true },

          { type: "activity", title: "Extra Practice: Give the instruction", source: "extra", stage: "guided",
            instructions: "Choose the correct imperative.", instructionsAr: "اختر صيغة الأمر الصحيحة.",
            items: [
              { t: "choose", q: "____ a compass to find directions.", options: ["Use", "Using", "You using"], answer: 0, why: "The imperative starts with the base verb: Use." },
              { t: "choose", q: "____ eat snow. Drink warm water.", options: ["Not", "Don’t", "Doesn’t"], answer: 1, why: "Negative imperative: Don’t + verb." },
              { t: "choose", q: "____ calm and find shelter.", options: ["Stay", "Stays", "Staying"], answer: 0, why: "Imperative: base verb (Stay)." },
              { t: "choose", q: "You are lost and need help. Use a ____.", options: ["flare", "water filter", "backpack"], answer: 0, why: "A flare is used to ask for help." },
              { t: "choose", q: "The water is dirty. Use a ____.", options: ["map", "water filter", "compass"], answer: 1, why: "A water filter makes dirty water safe to drink." },
              { t: "order", q: "🔥 Make an instruction.", words: ["Second,", "start", "a", "fire", "as", "soon", "as", "possible."], answer: ["Second, start a fire as soon as possible."], hint: "Sequence word + base verb …", why: "Sequence word + imperative." }
            ] }
        ],
        game: { kind: "quiz", title: "Survival Kit", items: [
          { t: "choose", q: "You need to find direction. Use a ____.", options: ["compass", "flare", "shelter"], answer: 0, why: "A compass helps you find direction." },
          { t: "choose", q: "You need a safe place to sleep. Build a ____.", options: ["map", "shelter", "backpack"], answer: 1, why: "A shelter is a safe place to rest or sleep." },
          { t: "choose", q: "You want to start a fire easily. Use a ____.", options: ["firestarter", "water filter", "map"], answer: 0, why: "A firestarter helps you start a fire easily." },
          { t: "choose", q: "You need to carry your supplies. Take a ____.", options: ["compass", "backpack", "flare"], answer: 1, why: "A backpack carries your supplies on your back." },
          { t: "choose", q: "You want to see routes and landmarks. Carry a ____.", options: ["map", "shelter", "firestarter"], answer: 0, why: "A map shows routes and landmarks." },
          { t: "choose", q: "The last tip starts with ____.", options: ["Firstly", "Finally", "Fourth"], answer: 1, why: "Finally introduces the last tip." }
        ] },
        teacher: {
          notes: [
            "Ex. 1: use picture 1 (snow, jungle, desert, mountain rescue). Collect dangers and tools on the board.",
            "Ex. 2a answers: compass – a tool that helps you find direction; firestarter – helps you start a fire easily; shelter – a safe place to rest or sleep; flare – used to ask for help; water filter – makes dirty water safe to drink; backpack – carries your supplies on your back; map – shows routes and landmarks.",
            "Ex. 2b–c: students give instructions with the imperative (Use a compass to find directions.). Show the IMPERATIVES box: Get a compass. Make a fire. Build a shelter. Carry a map. / Don’t get lost. Don’t freeze. Don’t take risks.",
            "Ex. 3a: play the podcast from the book (track 1.2, QR code on page 24). Answer key: Tip 2: Second, start a fire as soon as possible. Tip 3: Third, don’t eat snow; drink warm water. Tip 4: Fourth, stay dry and change wet clothes. Tip 5: Finally, signal for help.",
            "Ex. 3b: a. open (key: Tip 2, fire keeps us warm and safe). b. First, second, third, fourth, finally.",
            "Ex. 4: groups choose a scenario and present a 30-second podcast (imperatives + sequencing words)."
          ],
          pair: ["A names a problem (I’m lost.); B gives an instruction with an item (Use a map.).", "Partners rehearse the podcast and time it: 30 seconds."],
          group: ["Podcast groups: one host, one expert, one sound/timer person. Present to the class."],
          quick: [
            { q: "What is a flare used for?", a: "To ask for help." },
            { q: "Give a negative imperative.", a: "Don’t get lost. / Don’t take risks." },
            { q: "What sequence words did the speaker use?", a: "First, second, third, fourth, finally." },
            { q: "What makes dirty water safe to drink?", a: "A water filter." }
          ]
        }
      },

      /* ───────────────────────── LESSON 5 — READING (pp. 25–26) ───────────────────────── */
      {
        id: "u1l5", num: 5, skill: "Reading", title: "Success: More Than Just Talent", pages: [25, 26], status: "complete",
        canDo: [
          "I can analyse explicit and implicit details from a written text about achieving success.",
          "I can use precise vocabulary related to achieving success in meaningful context."
        ],
        goals: ["Read a blog about success.", "Learn 12 new words.", "Find the main idea and the linking words.", "Make a personal scrapbook about a goal."],
        goalsAr: ["أقرأ مدوّنة عن النجاح.", "أتعلّم 12 كلمة جديدة.", "أحدّد الفكرة الرئيسية وأدوات الربط.", "أصنع دفتر قصاصات شخصيًا عن هدف أريد تحقيقه."],
        warmup: {
          title: "Before You Read", image: "crops/u1l5-graduate.jpg", emoji: "🎓", seconds: 90,
          instructions: "1. Discuss the following questions.",
          prompts: ["a. What does “success” mean to you?", "b. Is success the same for everyone?", "c. Can anyone become successful? How?"]
        },
        vocab: [
          { w: "merely", pos: "adverb", emoji: "☝️", def: "only; just", ex: "First, success is not merely about talent; it also depends on habits and mindset.", exFromBook: true, ar: "مجرّد / فقط" },
          { w: "mindset", pos: "noun", emoji: "🧠", def: "a person’s way of thinking about things", ex: "First, success is not merely about talent; it also depends on habits and mindset.", exFromBook: true, ar: "طريقة التفكير / العقلية" },
          { w: "consistently", pos: "adverb", emoji: "🔁", def: "always in the same way, again and again", ex: "Successful people consistently follow smart habits: they set goals, work hard, manage their time efficiently, and never give up when things get tough.", exFromBook: true, ar: "باستمرار / بثبات" },
          { w: "efficiently", pos: "adverb", emoji: "⏱️", def: "in a good way, without wasting time or energy", ex: "Successful people consistently follow smart habits: they set goals, work hard, manage their time efficiently, and never give up when things get tough.", exFromBook: true, ar: "بكفاءة" },
          { w: "give up", pos: "phrasal verb", emoji: "🏳️", def: "to stop trying to do something", ex: "Successful people consistently follow smart habits: they set goals, work hard, manage their time efficiently, and never give up when things get tough.", exFromBook: true, ar: "يستسلم" },
          { w: "tough", pos: "adjective", emoji: "🧗", def: "difficult", ex: "Successful people consistently follow smart habits: they set goals, work hard, manage their time efficiently, and never give up when things get tough.", exFromBook: true, ar: "صعب" },
          { w: "positive", pos: "adjective", emoji: "👍", def: "hopeful and thinking about the good things", ex: "In addition, having a positive mindset is a key factor in reaching goals; this means trusting that you can make progress and learn from mistakes.", exFromBook: true, ar: "إيجابيّ" },
          { w: "trust", pos: "verb", emoji: "🤝", def: "to believe that something is true or will happen", ex: "In addition, having a positive mindset is a key factor in reaching goals; this means trusting that you can make progress and learn from mistakes.", exFromBook: true, ar: "يثق" },
          { w: "progress", pos: "noun", emoji: "📈", def: "the act of getting better or moving towards a goal", ex: "In addition, having a positive mindset is a key factor in reaching goals; this means trusting that you can make progress and learn from mistakes.", exFromBook: true, ar: "تقدّم" },
          { w: "trait", pos: "noun", emoji: "🧩", def: "a quality that is part of a person’s character", ex: "Research shows that achievers often have personal traits such as discipline and a ‘growth mindset’, which means they see failure as a chance to learn and grow.", exFromBook: true, ar: "سِمة / صفة" },
          { w: "remain", pos: "verb", emoji: "🧘", def: "to stay; to continue to be", ex: "Watching how achievers plan their time, stay focused, and remain calm under pressure can teach us a lot.", exFromBook: true, ar: "يبقى / يظلّ" },
          { w: "equally", pos: "adverb", emoji: "⚖️", def: "to the same level; as much as each other", ex: "Remember that asking for help, learning from mistakes, and staying positive are all equally important parts of the journey.", exFromBook: true, ar: "بالقدر نفسه / بالتساوي" }
        ],
        sections: [
          { type: "reading", title: "Success: More Than Just Talent", page: 25,
            instructions: "Read the blog, then do the tasks that follow.",
            speaker: "Blog · www.successinsights.blog",
            paras: [
              "Many people want to know how to achieve success in life. The following ideas can help guide you on this journey.",
              "First, success is not merely about talent; it also depends on habits and mindset. Achieving success means reaching your goals, whether it is doing well in school, learning new skills, or completing a big project. Successful people consistently follow smart habits: they set goals, work hard, manage their time efficiently, and never give up when things get tough.",
              "In addition, having a positive mindset is a key factor in reaching goals; this means trusting that you can make progress and learn from mistakes. Many people fail before they reach their goals. But instead of losing hope, they try again confidently. Research shows that achievers often have personal traits such as discipline and a ‘growth mindset’, which means they see failure as a chance to learn and grow.",
              "Furthermore, learning from others can also help you move forward. Watching how achievers plan their time, stay focused, and remain calm under pressure can teach us a lot. Reading their stories or listening to their advice helps us understand what works well.",
              "Finally, to make your aims a reality, start by setting clear goals. Break them into small steps. Work daily, even if progress is slow. Remember that asking for help, learning from mistakes, and staying positive are all equally important parts of the journey. Success is not magic. It is the result of effort, learning, and believing in yourself."
            ],
            note: "Text type: Expository (a blog). The vocabulary words are bold in the book." },

          { type: "activity", title: "2. Choose the correct answer from a, b, c, or d.", page: 26, source: "book",
            instructions: "Choose the correct answer from a, b, c, or d.", instructionsAr: "اختر الإجابة الصحيحة من a أو b أو c أو d.",
            items: [
              { t: "mcq", q: "1. What is the main idea of the 4th paragraph?", options: ["Most successful people are naturally talented from birth.", "Successful people achieve their goals without difficulties.", "Most successful people achieve their goals on the first try.", "Learning from others’ experiences can help you succeed."], answer: 3,
                hint: "Paragraph 4 starts with “Furthermore, learning from others …”.", why: "“Furthermore, learning from others can also help you move forward.”" },
              { t: "mcq", q: "2. What is a ‘growth mindset’ as described in the passage?", options: ["Thinking you can grow by learning from your mistakes.", "Thinking success is mostly a matter of luck.", "Viewing failure as something to be feared and avoided.", "Believing that natural talent is all you need to succeed."], answer: 0,
                hint: "Read the end of paragraph 3.", why: "A growth mindset “means they see failure as a chance to learn and grow.”" },
              { t: "mcq", q: "3. What feeling does the writer want to create in the reader?", options: ["happiness", "inspiration", "surprise", "boredom"], answer: 1,
                hint: "The writer gives advice to help you reach your goals.", why: "The blog encourages readers to work hard and believe in themselves: inspiration." }
            ] },

          { type: "activity", title: "3. Which linking words or phrases does the writer use to connect the paragraphs? (e.g., first…)", page: 26, source: "book",
            instructions: "Which linking words or phrases does the writer use to connect the paragraphs? (e.g., first…)", instructionsAr: "ما أدوات الربط التي استخدمها الكاتب ليربط بين الفقرات؟",
            items: [
              { t: "short", q: "Write the linking words.", model: "First, In addition, Furthermore, Finally",
                keywords: [["first"], ["in addition"], ["furthermore"], ["finally"]], hint: "Look at the first word or words of paragraphs 2, 3, 4 and 5." }
            ] },

          { type: "activity", title: "4. Discuss the following questions.", page: 26, source: "book",
            instructions: "Discuss the following questions.", instructionsAr: "ناقش الأسئلة التالية.",
            items: [
              { t: "short", open: true, q: "a. Name two habits that successful people follow.", model: "They set goals and work hard.", hint: "Read paragraph 2: they set …, work …, manage …" },
              { t: "short", open: true, q: "b. Why is failure important for success?", model: "We learn and grow from it.", hint: "Read paragraph 3: a chance to …" },
              { t: "short", open: true, q: "c. What is the purpose of the writer in writing this passage?", model: "To give advice about success.", hint: "Does the writer tell a story, give advice or sell something?" }
            ] },

          { type: "write", title: "5. Make a personal scrapbook that includes:", page: 26, source: "book",
            instructions: "Make a personal scrapbook that includes: • One goal you want to achieve • Three habits that will help you reach it • A short motivational motto • A small drawing about success • One important idea you learned from the reading",
            image: "crops/u1l5-scrapbook.jpg",
            note: "“The only way to achieve the impossible is to believe it is possible.” (Charles Kingsleigh, Alice in Wonderland, 2010)",
            frame: [
              { label: "One goal you want to achieve", hint: "My goal is to …" },
              { label: "Three habits that will help you reach it", hint: "1. … 2. … 3. …", lines: 3 },
              { label: "A short motivational motto", hint: "e.g. Never give up!" },
              { label: "A small drawing about success", hint: "Draw it in your notebook. Write what it shows." },
              { label: "One important idea you learned from the reading", hint: "I learned that …" }
            ],
            model: "My goal is to get full marks in English.\n1. I read English stories every day. 2. I manage my time efficiently. 3. I learn from my mistakes.\nSmall steps every day!\nMy drawing shows a boy climbing stairs to a trophy.\nI learned that success is not merely about talent; it depends on habits and mindset.",
            modelFromBook: false,
            checklist: ["I wrote one clear goal.", "I wrote three habits.", "I wrote a short motto.", "I wrote one idea from the blog."],
            minWords: 30 },

          { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
            instructions: "Read the sentence. Is it true or false? Use the blog.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالمدوّنة.",
            items: [
              { t: "mcq", q: "Success depends only on talent.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "“Success is not merely about talent; it also depends on habits and mindset.”" },
              { t: "mcq", q: "Successful people never give up when things get tough.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“… and never give up when things get tough.”" },
              { t: "mcq", q: "Achievers often have personal traits such as discipline.", options: ["True", "False"], answer: 0, hint: "Paragraph 3.", why: "“… achievers often have personal traits such as discipline and a ‘growth mindset’.”" },
              { t: "mcq", q: "Achievers get nervous under pressure.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "They “remain calm under pressure”." },
              { t: "mcq", q: "The writer says success is magic.", options: ["True", "False"], answer: 1, hint: "Paragraph 5.", why: "“Success is not magic. It is the result of effort, learning, and believing in yourself.”" }
            ] },

          { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
            instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
            items: [
              { t: "fill", q: "The test was very ____, but I did my best.", answer: ["tough"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "tough = difficult." },
              { t: "fill", q: "Don’t ____! Try again tomorrow.", answer: ["give up"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "give up = stop trying." },
              { t: "fill", q: "My English is getting better. I am making good ____.", answer: ["progress"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "progress = getting better." },
              { t: "fill", q: "Please ____ in your seats until the bell rings.", answer: ["remain"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "remain = stay." },
              { t: "fill", q: "Stay ____ and think about the good things.", answer: ["positive"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "positive = hopeful." },
              { t: "fill", q: "She works ____, so she finishes her homework quickly.", answer: ["efficiently"], bank: ["tough", "give up", "progress", "remain", "positive", "efficiently"], why: "efficiently = without wasting time." }
            ] }
        ],
        game: { kind: "spell", title: "Missing Letters", from: "vocab" },
        teacher: {
          notes: [
            "Before You Read (ex. 1): discuss what success means. Accept all ideas.",
            "Pre-teach the 12 words (merely, mindset, consistently, efficiently, give up, tough, positive, trust, progress, trait, remain, equally). They are bold in the blog (trusting, traits).",
            "Ex. 2 answers: 1 d. 2 a. 3 b (inspiration).",
            "Ex. 3: First, In addition, Furthermore, Finally.",
            "Ex. 4 (key): a. They set goals and work hard. b. We learn and grow from it. c. To give advice about success.",
            "Ex. 5: students make the scrapbook in their notebooks (goal, three habits, motto, drawing, one idea). Read the quotation from Alice in Wonderland together."
          ],
          pair: ["A reads a linking word (Furthermore); B finds the paragraph and says its main idea.", "Partners share their scrapbook goal and one habit."],
          group: ["Groups write a class “Success Wall”: one motto and one habit from each student."],
          quick: [
            { q: "Is success merely about talent?", a: "No, it also depends on habits and mindset." },
            { q: "What is a growth mindset?", a: "Seeing failure as a chance to learn and grow." },
            { q: "Which linking word starts paragraph 4?", a: "Furthermore." },
            { q: "What does “tough” mean?", a: "Difficult." }
          ]
        }
      },

      /* ───────────────────────── LESSON 6 — GRAMMAR (p. 27) ───────────────────────── */
      {
        id: "u1l6", num: 6, skill: "Grammar", title: "“Both…and” / “Neither…nor”", pages: [27], status: "complete",
        canDo: [
          "I can identify the structures of both… and and neither… nor accurately in sentences about achievements and choices.",
          "I can apply both… and and neither… nor forms appropriately and accurately in spoken and written responses about real-life contexts."
        ],
        goals: ["Talk about two people with both… and.", "Make negative sentences with neither… nor.", "Choose the correct verb after neither… nor.", "Ask a partner and write sentences about us."],
        goalsAr: ["أتحدّث عن شخصين باستخدام both… and.", "أكوّن جملًا منفية باستخدام neither… nor.", "أختار الفعل الصحيح بعد neither… nor.", "أسأل زميلي وأكتب جملًا عنّا."],
        warmup: {
          title: "Look at the pictures", image: "crops/u1l6-boys.jpg", emoji: "⚽", seconds: 60,
          instructions: "1. a. Look at the pictures. Then discuss.",
          prompts: ["1. Do Ahmed and Jassim play football?", "2. Do they play tennis?"]
        },
        vocab: [],
        sections: [
          { type: "grammar", title: "Grammar: “Both…and” / “Neither…nor”", page: 27,
            steps: [
              { title: "Both... and",
                text: "Refers to two people or two things together. It is always considered plural in a sentence.",
                textAr: "نستخدم both… and للحديث عن شخصين أو شيئين معًا، ويُعامل الفاعل دائمًا معاملة الجمع.",
                examples: ["{s:Sara} {v:likes} apples. {s:Laila} {v:likes} apples.", "{c:Both} {s:Sara} {c:and} {s:Laila} {v:like} apples."] },
              { title: "Neither… nor",
                text: "Makes a negative statement about two people or two things. When you use “neither...nor,” the verb should agree with the noun that comes closest to it.",
                textAr: "نستخدم neither… nor لجملة منفية عن شخصين أو شيئين، ويتّفق الفعل مع الاسم الأقرب إليه.",
                examples: ["{s:Sara} {n:doesn’t} {v:like} tennis. {s:Laila} {n:doesn’t} {v:like} tennis.", "{c:Neither} {s:Sara} {c:nor} {s:Laila} {v:likes} tennis.", "{c:Neither} {s:Ali} {c:nor} {s:his brother} {a:is} {v:coming}.", "{c:Neither} {s:Ali} {c:nor} {s:his friends} {a:are} {v:coming}."] },
              { title: "No “not” after neither… nor", source: "extra",
                text: "Neither… nor already makes the sentence negative. So we do not use don’t, doesn’t or not with it.",
                textAr: "neither… nor تجعل الجملة منفية، لذلك لا نستخدم معها don’t أو doesn’t أو not.",
                examples: ["{c:Neither} {s:Sara} {c:nor} {s:Laila} {v:likes} tennis. (not: doesn’t like)"] },
              { title: "With can", source: "extra",
                text: "can does not change. Use can + base verb after both… and and after neither… nor.",
                textAr: "الفعل can لا يتغيّر، ونستخدم بعده الفعل في صورته الأصلية.",
                examples: ["{c:Both} {s:my partner} {c:and} {s:I} {a:can} {v:swim}.", "{c:Neither} {s:my partner} {c:nor} {s:I} {a:can} {v:play} a musical instrument."] }
            ],
            worked: {
              q: "Join: Omar doesn’t play tennis. His brothers don’t play tennis.",
              steps: ["Both sentences are negative → use Neither … nor.", "Take away don’t / doesn’t: neither… nor is already negative.", "The noun closest to the verb is “his brothers” (plural) → play."],
              a: "{c:Neither} {s:Omar} {c:nor} {s:his brothers} {v:play} tennis."
            },
            notes: ["This is the Grammar Box from page 27."] },

          { type: "activity", title: "1. a. Look at the pictures. Then discuss.", page: 27, source: "book", stage: "guided",
            instructions: "a. Look at the pictures. Then discuss. b. Look at your answers above. Complete these sentences.", instructionsAr: "(أ) انظر إلى الصور وناقش. (ب) انظر إلى إجاباتك وأكمل الجمل.",
            image: "crops/u1l6-boys.jpg",
            items: [
              { t: "short", open: true, q: "a. 1. Do Ahmed and Jassim play football?", model: "Yes, they do.", hint: "Look at the first picture." },
              { t: "short", open: true, q: "a. 2. Do they play tennis?", model: "No, they don’t.", hint: "Look at the second picture: they are sitting next to the tennis court." },
              { t: "fill", q: "b. 1. Both Ahmed and Jassim ____.", answer: ["play football"], hint: "Both … and → plural verb (no -s).", why: "Both Ahmed and Jassim play football." },
              { t: "fill", q: "b. 2. Neither Ahmed nor Jassim ____.", answer: ["plays tennis"], hint: "The verb agrees with Jassim (he).", why: "Neither Ahmed nor Jassim plays tennis. The verb agrees with the closest noun: Jassim → plays." }
            ] },

          { type: "activity", title: "2. Match each sentence beginning to its correct ending. Write the full sentences.", page: 27, source: "book", stage: "guided",
            instructions: "Match each sentence beginning to its correct ending. Write the full sentences.", instructionsAr: "صِل كل بداية جملة بنهايتها الصحيحة، ثم اكتب الجمل كاملة.",
            items: [
              { t: "match", q: "Match each sentence beginning to its correct ending.",
                pairs: [["1. Both Ali and Omar", "d. enjoy reading comic books."], ["2. Neither cats nor dogs", "c. can speak."], ["3. Both Hanan and Alia", "b. like wearing pink dresses."], ["4. Neither the library nor the school canteen", "a. is open on Friday."]],
                hint: "Both… and takes a plural verb. With neither… nor, look at the closest noun.",
                why: "1 d, 2 c, 3 b, 4 a." },
              { t: "short", q: "Write the full sentences 1 and 2.", model: "Both Ali and Omar enjoy reading comic books. Neither cats nor dogs can speak.",
                keywords: [["both ali and omar enjoy reading comic books"], ["neither cats nor dogs can speak"]], hint: "Copy the beginning and add the ending." },
              { t: "short", q: "Write the full sentences 3 and 4.", model: "Both Hanan and Alia like wearing pink dresses. Neither the library nor the school canteen is open on Friday.",
                keywords: [["both hanan and alia like wearing pink dresses"], ["neither the library nor the school canteen is open on friday"]], hint: "Copy the beginning and add the ending." }
            ] },

          { type: "activity", title: "Extra Practice: Step 1 — Choose the correct verb", source: "extra", stage: "guided",
            instructions: "Choose the correct verb. Remember: both… and → plural; neither… nor → the closest noun.", instructionsAr: "اختر الفعل الصحيح: مع both… and يكون الفعل للجمع، ومع neither… nor يتّفق الفعل مع الاسم الأقرب.",
            items: [
              { t: "choose", q: "Both Sara and Laila ____ apples.", options: ["like", "likes"], answer: 0, why: "Both… and → plural: like." },
              { t: "choose", q: "Neither Sara nor Laila ____ tennis.", options: ["like", "likes"], answer: 1, why: "The closest noun is Laila (she) → likes." },
              { t: "choose", q: "Neither Ali nor his friends ____ coming.", options: ["is", "are"], answer: 1, why: "The closest noun is “his friends” (plural) → are." },
              { t: "choose", q: "Neither Ali nor his brother ____ coming.", options: ["is", "are"], answer: 0, why: "The closest noun is “his brother” (singular) → is." },
              { t: "choose", q: "Both my father and my uncle ____ in Kuwait City.", options: ["works", "work"], answer: 1, why: "Both… and → plural: work." },
              { t: "choose", q: "Neither the teacher nor the students ____ late.", options: ["was", "were"], answer: 1, why: "The closest noun is “the students” (plural) → were." }
            ] },

          { type: "activity", title: "Extra Practice: Step 2 — Join the sentences", source: "extra", stage: "guided",
            instructions: "Put the words in order to join the two sentences.", instructionsAr: "رتّب الكلمات لتربط الجملتين.",
            items: [
              { t: "order", q: "Fahad can swim. Ali can swim.", words: ["Both", "Fahad", "and", "Ali", "can", "swim."], answer: ["Both Fahad and Ali can swim.", "Both Ali and Fahad can swim."], hint: "Both + name + and + name + can + verb.", why: "Both… and with can: can swim." },
              { t: "order", q: "Mona doesn’t eat fish. Huda doesn’t eat fish.", words: ["Neither", "Mona", "nor", "Huda", "eats", "fish."], answer: ["Neither Mona nor Huda eats fish.", "Neither Huda nor Mona eats fish."], hint: "No doesn’t after neither… nor.", why: "The closest noun is Huda (she) → eats." },
              { t: "order", q: "My brother doesn’t like rain. My sisters don’t like rain.", words: ["Neither", "my", "brother", "nor", "my", "sisters", "like", "rain."], answer: ["Neither my brother nor my sisters like rain."], hint: "The closest noun is “my sisters”.", why: "my sisters (plural) → like." }
            ] },

          { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
            instructions: "One word is wrong. Type the correct word or words.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
            items: [
              { t: "fix", q: "Both Hanan and Alia {likes} pink dresses.", answer: ["like"], hint: "Both… and is plural.", why: "Both Hanan and Alia like …" },
              { t: "fix", q: "Neither Sara nor Laila {doesn’t like} tennis.", answer: ["likes"], hint: "Neither… nor is already negative.", why: "Neither Sara nor Laila likes tennis." },
              { t: "fix", q: "Neither the library nor the school canteen {are} open on Friday.", answer: ["is"], hint: "The closest noun is “the school canteen”.", why: "the school canteen (singular) → is." },
              { t: "fix", q: "{Either} cats nor dogs can speak.", answer: ["Neither"], hint: "nor goes with …", why: "neither… nor." },
              { t: "short", q: "Write one sentence about you and a friend with “both… and” or “neither… nor”.", open: true, model: "Both my friend and I love football.", hint: "Both my friend and I … / Neither my friend nor I …" }
            ] },

          { type: "speak", title: "3. Ask and answer these questions. Then write sentences using “both... and” or “neither... nor”.", page: 27, source: "book",
            instructions: "Ask and answer these questions. Then write sentences using “both... and” or “neither... nor”.",
            dialogue: [
              { who: "A", text: "Do you and your partner like pizza?" }, { who: "B", text: "" },
              { who: "A", text: "Can you and your partner swim?" }, { who: "B", text: "" },
              { who: "A", text: "Do you and your partner enjoy English classes?" }, { who: "B", text: "" },
              { who: "A", text: "Can you or your partner play a musical instrument?" }, { who: "B", text: "" }
            ],
            starters: ["Yes, I do. / No, I don’t.", "Yes, I can. / No, I can’t.", "Both my partner and I …", "Neither my partner nor I …"],
            record: true },

          { type: "write", title: "3. Then write sentences using “both... and” or “neither... nor”.", page: 27, source: "book",
            instructions: "Write sentences using “both... and” or “neither... nor”.",
            example: "Both my partner and I like pizza. / Neither my partner nor I can play a musical instrument.",
            frame: [
              { label: "1. Pizza", hint: "Both my partner and I … / Neither my partner nor I …" },
              { label: "2. Swimming", hint: "Both my partner and I can … / Neither my partner nor I can …" },
              { label: "3. English classes", hint: "Both my partner and I enjoy … / Neither …" },
              { label: "4. A musical instrument", hint: "Neither my partner nor I can …" }
            ],
            model: "Both my partner and I like pizza.\nBoth my partner and I can swim.\nBoth my partner and I enjoy English classes.\nNeither my partner nor I can play a musical instrument.",
            modelFromBook: false, modelLabel: "Model answer (sentences 1 and 4 are the book’s Example Answers)",
            checklist: ["I used both… and for things we both do.", "I used neither… nor for things we both don’t do.", "I didn’t use don’t / doesn’t after neither… nor."],
            minWords: 24 }
        ],
        game: { kind: "quiz", title: "Both or Neither?", items: [
          { t: "choose", q: "Ahmed plays football. Jassim plays football. → ____ Ahmed and Jassim play football.", options: ["Both", "Neither"], answer: 0, why: "Both are true → Both… and." },
          { t: "choose", q: "Cats can’t speak. Dogs can’t speak. → ____ cats nor dogs can speak.", options: ["Both", "Neither"], answer: 1, why: "Both are negative → Neither… nor." },
          { t: "choose", q: "Both Hanan and Alia ____ wearing pink dresses.", options: ["like", "likes"], answer: 0, why: "Both… and → plural." },
          { t: "choose", q: "Neither Ali nor his brother ____ coming.", options: ["is", "are"], answer: 0, why: "Closest noun: his brother → is." },
          { t: "choose", q: "Neither Ali nor his friends ____ coming.", options: ["is", "are"], answer: 1, why: "Closest noun: his friends → are." },
          { t: "choose", q: "Neither the library ____ the school canteen is open on Friday.", options: ["and", "nor"], answer: 1, why: "neither goes with nor." }
        ] },
        teacher: {
          notes: [
            "Ex. 1a: use the two photos. 1. Yes, they do. 2. No, they don’t. Ex. 1b: 1. play football 2. plays tennis.",
            "Present the Grammar Box: both… and = two people or things together, always plural; neither… nor = a negative statement, the verb agrees with the closest noun (Neither Ali nor his brother is / his friends are coming).",
            "Ex. 2 answers: 1 d, 2 c, 3 b, 4 a. Students write the four full sentences.",
            "Ex. 3: pairs ask the four questions, then write sentences (Example Answers: Both my partner and I like pizza. Neither my partner nor I can play a musical instrument.)."
          ],
          pair: ["Find two things you both like and two things neither of you can do. Report to the class.", "A says two sentences (Ali can’t swim. Omar can’t swim.); B joins them."],
          group: ["Class survey: groups find “Both … and …” and “Neither … nor …” sentences about their members and present them."],
          quick: [
            { q: "Join: Sara likes apples. Laila likes apples.", a: "Both Sara and Laila like apples." },
            { q: "Complete: Neither Ahmed nor Jassim ___ (play) tennis.", a: "plays" },
            { q: "Complete: Neither Ali nor his friends ___ (be) coming.", a: "are" },
            { q: "Is “both… and” singular or plural?", a: "Plural." }
          ]
        }
      },

      /* ───────────────────────── LESSON 7 — WRITING (pp. 28–29) ───────────────────────── */
      {
        id: "u1l7", num: 7, skill: "Writing", title: "Expeditions: Safety Preparations and Challenges", pages: [28, 29], status: "complete",
        canDo: [
          "I can compose a two-paragraph expository report about expeditions, focusing on safety preparations and challenges.",
          "I can organise ideas effectively to construct coherent paragraphs about an expedition."
        ],
        goals: ["Read about the dangers of expeditions.", "List safety preparations and challenges.", "Plan a report with an outline.", "Write a two-paragraph report."],
        goalsAr: ["أقرأ عن مخاطر الرحلات الاستكشافية.", "أكتب قائمة بالاستعدادات للسلامة والتحديات.", "أخطّط لتقرير باستخدام مخطّط.", "أكتب تقريرًا من فقرتين."],
        warmup: {
          title: "Before You Write", image: "crops/u1l7-explorer.jpg", emoji: "🎒", seconds: 60, source: "extra",
          instructions: "Look at the picture. Talk with your partner.",
          prompts: ["Where is the explorer?", "What is he holding? Why does he need it?", "What could go wrong on his journey?"]
        },
        vocab: [],
        sections: [
          { type: "reading", title: "Expeditions: Safety Preparations and Challenges", page: 28,
            instructions: "1. Read the passage below, then answer the questions.",
            paras: [
              "Exploring new places can be exciting, but it is not always easy. Adventurers often face dangers when travelling through deserts, mountains, or extremely cold regions. Sometimes, the environment makes the journey challenging, and explorers must think carefully about how they will handle the problems that arise.",
              "Before starting an expedition, people must make good plans. They need to decide what to take with them and how to prepare for unexpected challenges. Careful planning can make the difference between a successful journey and a dangerous one."
            ],
            note: "Before You Write." },

          { type: "activity", title: "1. Read the passage below, then answer the questions.", page: 28, source: "book",
            instructions: "Answer the questions.", instructionsAr: "أجب عن الأسئلة.",
            items: [
              { t: "short", open: true, q: "a. What kinds of places might be difficult or dangerous for explorers?", model: "Deserts, mountains, and extremely cold regions.", hint: "Read paragraph 1." },
              { t: "short", open: true, q: "b. Why do explorers need to plan carefully before they travel?", model: "Careful planning can make the difference between a successful journey and a dangerous one.", hint: "Read paragraph 2." },
              { t: "short", open: true, q: "c. What problems do you think could happen in deserts, mountains, or polar regions?", model: "People could get lost, run out of water or get very cold.", hint: "Think about the weather, food, water and the way." },
              { t: "short", open: true, q: "d. What preparations would you suggest to help explorers stay safe?", model: "They should take a map, enough water and warm clothes.", hint: "They should take … / They should check …" }
            ] },

          { type: "activity", title: "2. Complete the following table by listing safety preparations explorers should make and the challenges they might face during an expedition.", page: 28, source: "book",
            instructions: "Complete the following table by listing safety preparations explorers should make and the challenges they might face during an expedition.", instructionsAr: "أكمل الجدول بكتابة استعدادات السلامة التي يجب أن يقوم بها المستكشفون والتحديات التي قد يواجهونها في أثناء الرحلة.",
            items: [
              { t: "table", open: true, q: "Complete the table.",
                head: ["Paragraph", "Focus", "Questions to Think about", "Your Notes"],
                rows: [
                  ["1", "Safety Preparations", "• What should people prepare about before going on an expedition? • What important things should people take with them? • How could good preparation make the journey safer?", { model: "Food, water, a map, a compass, warm clothes and a first-aid kit. Good plans keep us safe." }],
                  ["2", "Challenge", "• What problems might explorers face in difficult environments? • How could these problems affect the expedition? • What might happen if someone is not ready for these challenges?", { model: "Bad weather, getting lost, injuries. The trip may fail or become dangerous." }]
                ],
                note: "Write short notes, not full sentences." }
            ] },

          { type: "write", title: "3. a. Complete the following outline with your ideas.", page: 29, source: "book",
            instructions: "Exploring new places can be exciting, but it also comes with risks. Plan and write a two-paragraph report about going on an expedition discussing the safety preparations people should make and the challenges they might face. a. Complete the following outline with your ideas.",
            wordBankLabel: "Useful linking words (from this unit)",
            wordBank: ["First,", "In addition,", "also", "As a result,", "Therefore,", "In conclusion,"],
            frame: [
              { label: "Introduction", hint: "Expeditions can be …", lines: 2 },
              { label: "Paragraph 1 (The safety preparations people should make) — Topic sentence", hint: "People should …" },
              { label: "Paragraph 1 — Supporting details", hint: "First, they should … / They should take … / In addition, …", lines: 4 },
              { label: "Paragraph 1 — Concluding sentence", hint: "Good preparation …" },
              { label: "Paragraph 2 ( The challenges people might face) — Topic sentence", hint: "Explorers might face …" },
              { label: "Paragraph 2 — Supporting details", hint: "The weather can be … / They might get lost … / As a result, …", lines: 4 },
              { label: "Paragraph 2 — Concluding sentence", hint: "Therefore, …" },
              { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
            ],
            model: "Introduction: Expeditions can be exciting, but they need careful planning.\nParagraph 1 – Topic sentence: People should make good safety preparations.\nSupporting details: First, they should check the weather. They should take a map, a compass and enough water. They also need warm clothes and a first-aid kit. In addition, they should tell someone about their plan.\nConcluding sentence: Good preparation makes the journey safer.\nParagraph 2 – Topic sentence: Explorers might face many challenges.\nSupporting details: The weather can be very hot or freezing cold. They might get lost or run out of food and water. Someone could get injured or sick. As a result, the expedition could become dangerous.\nConcluding sentence: Therefore, explorers must be ready for problems.\nConclusion: In conclusion, good planning helps explorers enjoy their journey and stay safe.",
            modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
            checklist: ["I wrote an introduction and a conclusion.", "Each paragraph has a topic sentence, supporting details and a concluding sentence.", "I used linking words."],
            minWords: 70 },

          { type: "write", title: "3. b. Use the ideas in your outline to write the report in your notebook.", page: 29, source: "book",
            instructions: "Use the ideas in your outline to write the report. Then use the Report Writing Checklist.",
            wordBankLabel: "Useful linking words (from this unit)",
            wordBank: ["First,", "In addition,", "also", "As a result,", "Therefore,", "In conclusion,"],
            frame: [
              { label: "Introduction", hint: "Expeditions can be …", lines: 2 },
              { label: "Paragraph 1: The safety preparations people should make", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
              { label: "Paragraph 2: The challenges people might face", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
              { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
            ],
            model: "Expeditions can be exciting, but they need careful planning.\n\nPeople should make good safety preparations. First, they should check the weather. They should take a map, a compass and enough water. They also need warm clothes and a first-aid kit. In addition, they should tell someone about their plan. Good preparation makes the journey safer.\n\nExplorers might face many challenges. The weather can be very hot or freezing cold. They might get lost or run out of food and water. Someone could get injured or sick. As a result, the expedition could become dangerous. Therefore, explorers must be ready for problems.\n\nIn conclusion, good planning helps explorers enjoy their journey and stay safe.",
            modelFromBook: false, modelLabel: "Model report (the answer key’s outline written as a report – one possible answer)",
            bookChecklist: [
              "Did I describe the important safety preparations?",
              "Did I explain the main challenges and risks?",
              "Did I write two clear paragraphs?",
              "Did I use correct tense and clear linking words?",
              "Did I check my spelling and punctuation?",
              "Did I use AI tools to proofread my report?"
            ],
            bookNote: "Report Writing Checklist (from the book). ATTENTION: Use AI wisely and responsibly.",
            minWords: 90 },

          { type: "activity", title: "Extra Practice: Which part of the report?", source: "extra", stage: "guided",
            instructions: "Read the sentence. Which part of the report is it?", instructionsAr: "اقرأ الجملة. إلى أيّ جزء من التقرير تنتمي؟",
            items: [
              { t: "mcq", q: "People should make good safety preparations.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It gives the main idea of paragraph 1." },
              { t: "mcq", q: "They should take a map, a compass and enough water.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It gives one detail about the preparations." },
              { t: "mcq", q: "Good preparation makes the journey safer.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2, why: "It closes paragraph 1." },
              { t: "mcq", q: "Someone could get injured or sick.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It is one example of a challenge." },
              { t: "mcq", q: "In conclusion, good planning helps explorers enjoy their journey and stay safe.", options: ["Introduction", "Body paragraph", "Conclusion"], answer: 2, why: "“In conclusion” starts the end of the report." }
            ] }
        ],
        game: { kind: "sort", title: "Preparation or Challenge?",
          buckets: ["Safety preparations 🎒", "Challenges ⚠️"],
          cards: [["check the weather", 0], ["take a map and a compass", 0], ["bring enough water", 0], ["pack a first-aid kit", 0], ["tell someone your plan", 0], ["freezing cold", 1], ["getting lost", 1], ["running out of food", 1], ["injuries", 1], ["getting sick", 1]] },
        teacher: {
          notes: [
            "Before You Write (ex. 1): read the passage, then discuss questions a–d in groups. a. deserts, mountains, extremely cold regions. b. Careful planning makes the difference between a successful journey and a dangerous one. c–d: open.",
            "Ex. 2 (answer key notes): 1. Food, water, a map, a compass, warm clothes and a first-aid kit. Good plans keep us safe. 2. Bad weather, getting lost, injuries. The trip may fail or become dangerous.",
            "Ex. 3a: complete the outline (introduction, two paragraphs with topic sentence, supporting details and concluding sentence, conclusion). The model is the answer key’s outline.",
            "Ex. 3b: write the report in the notebook and tick the Report Writing Checklist. Talk about using AI wisely and responsibly: to proofread, not to write for you."
          ],
          pair: ["Partners swap reports and tick the Report Writing Checklist for each other.", "A reads a supporting detail; B says: preparation or challenge?"],
          group: ["Groups make an “Expedition Safety” poster: five preparations and five challenges with pictures."],
          quick: [
            { q: "Name two places that are dangerous for explorers.", a: "Deserts, mountains, extremely cold regions (any two)." },
            { q: "Name two safety preparations.", a: "Take a map / water / warm clothes / a first-aid kit; check the weather; tell someone about the plan." },
            { q: "What does each paragraph start with?", a: "A topic sentence." },
            { q: "Which linker starts the conclusion?", a: "In conclusion." }
          ]
        }
      }
    ]
  });
})();

// Learning Unit 4 — Simple Living, Better World (printed pages 59, 62–71; cover p. 59)
// Source: English Pearls of Kuwait, Grade 9 (new edition), First Term, Student's Book.
// Book text is copied from the pages. Answers come from the blue answer key written on the pages;
// open tasks use the blue answers only as models. Everything marked source: "extra" is not in the book.
BOOK.addUnit({
  id: "u4", num: 4, title: "Simple Living, Better World", titleAr: "حياة بسيطة، عالم أفضل",
  pages: [59, 71], cover: 59,
  status: "complete",
  lessons: [

    /* ───────────────────────── LESSON 1 — READING (pp. 62–63) ───────────────────────── */
    {
      id: "u4l1", num: 1, skill: "Reading", title: "What Does It Mean to Live Simply?", pages: [62, 63], status: "complete",
      canDo: [
        "I can analyse implicit and explicit details from a written text about simple living.",
        "I can apply vocabulary related to lifestyle choices accurately in both spoken and written contexts."
      ],
      goals: ["Predict what a passage is about from its title.", "Read an expository text about simple living.", "Learn 10 new words.", "Write about one thing I could do to live more simply."],
      goalsAr: ["أتوقّع موضوع النص من عنوانه.", "أقرأ نصًّا تفسيريًّا عن الحياة البسيطة.", "أتعلّم 10 كلمات جديدة.", "أكتب عن شيء واحد أستطيع فعله لأعيش ببساطة أكبر."],
      warmup: {
        title: "Before You Read", image: "crops/u4l1-simple-living.jpg", emoji: "🌱", seconds: 90,
        instructions: "1. Look at the title. Choose what you think this passage will be about. Tick (✓) your ideas.",
        prompts: ["Buying more things", "Reducing screen time", "Eating out at restaurants", "Saving water and electricity", "Spending more time with family", "Helping the environment"]
      },
      vocab: [
        { w: "focus", pos: "verb", emoji: "🎯", def: "to give most of your attention to one thing", ex: "Living simply means choosing a lifestyle that focuses on what is truly important.", exFromBook: true, ar: "يركّز على" },
        { w: "necessarily", pos: "adverb", emoji: "❓", def: "always; in every case (often with “not”)", ex: "It does not necessarily mean giving up everything or living without comfort.", exFromBook: true, ar: "بالضرورة" },
        { w: "instead", pos: "adverb", emoji: "🔄", def: "in the place of something else", ex: "Instead, it means using fewer things, spending less money, and being more thoughtful about how we live.", exFromBook: true, ar: "بدلًا من ذلك" },
        { w: "thoughtful", pos: "adjective", emoji: "💭", def: "thinking carefully about things", ex: "Instead, it means using fewer things, spending less money, and being more thoughtful about how we live.", exFromBook: true, ar: "متأنٍّ / يفكّر بعناية" },
        { w: "benefit", pos: "verb", emoji: "👍", def: "to be good or useful for someone or something", ex: "Additionally, they may choose to buy fewer clothes, which not only helps them save money but also benefits the environment.", exFromBook: true, ar: "يفيد / ينفع" },
        { w: "conserve", pos: "verb", emoji: "💧", def: "to use something carefully so as not to use it all", ex: "Furthermore, adopting this lifestyle can include eating local food and making an effort to conserve water and electricity.", exFromBook: true, ar: "يحافظ على / يرشّد استهلاك" },
        { w: "gadget", pos: "noun", emoji: "📱", def: "a small device, often a machine or electronic item", ex: "Rather than spending money on the newest gadgets or fashionable clothes, many people choose to invest in important things such as healthy food, education, and valuable experiences.", exFromBook: true, ar: "جهاز صغير / أداة إلكترونية" },
        { w: "valuable", pos: "adjective", emoji: "💎", def: "very useful or important", ex: "Many people choose to invest in important things such as healthy food, education, and valuable experiences.", exFromBook: true, ar: "قيّم / ثمين" },
        { w: "frankly", pos: "adverb", emoji: "🗣️", def: "honestly; saying what you really think", ex: "Frankly, each small step brings us closer to a simpler and more balanced life.", exFromBook: true, ar: "بصراحة" },
        { w: "balanced", pos: "adjective", emoji: "⚖️", def: "with the right amount of different things", ex: "Frankly, each small step brings us closer to a simpler and more balanced life.", exFromBook: true, ar: "متوازن" }
      ],
      sections: [
        { type: "reading", title: "What Does It Mean to Live Simply?", page: 62,
          image: "crops/u4l1-simple-living.jpg",
          paras: [
            "Living simply means choosing a lifestyle that focuses on what is truly important. It does not necessarily mean giving up everything or living without comfort. Instead, it means using fewer things, spending less money, and being more thoughtful about how we live. People who choose simple living often ask themselves, “Do I really need this?” before they buy something.",
            "Many people begin this lifestyle to reduce stress or save money, while others are motivated by a desire to protect the environment. To achieve these goals, individuals often try to produce less waste, use less plastic, and recycle more. Additionally, they may choose to buy fewer clothes, which not only helps them save money but also benefits the environment. Furthermore, adopting this lifestyle can include eating local food and making an effort to conserve water and electricity.",
            "However, living simply is not only about having fewer things; it is also about making smarter and more meaningful choices in everyday life. Rather than spending money on the newest gadgets or fashionable clothes, many people choose to invest in important things such as healthy food, education, and valuable experiences. For example, some people reduce their screen time to enjoy family moments or practise their favourite hobbies. Others choose to walk or ride a bike instead of driving short distances. Additionally, many people learn to cook meals at home rather than eating out, which saves money and improves health. Some also plan their shopping carefully to avoid wasting food or money.",
            "Making smart choices is not always easy, but it helps people feel more in control of their lives. Frankly, each small step brings us closer to a simpler and more balanced life."
          ],
          speaker: null,
          note: "Text type: Expository. The new words are in bold in the book." },

        { type: "activity", title: "2. Read the passage then choose the best answer.", page: 63, source: "book",
          instructions: "Read the passage then choose the best answer.", instructionsAr: "اقرأ النص ثم اختر الإجابة الصحيحة.",
          image: "crops/u4l1-things.jpg",
          items: [
            { t: "mcq", q: "1. What is the main idea of the passage?", options: ["It describes how to protect the environment.", "It discusses simple living and its benefits.", "It discusses ways to save money and reduce stress.", "It gives advice on how to find happiness in daily life."], answer: 1,
              hint: "Look at the title and the first sentence of each paragraph.",
              why: "The whole passage explains what simple living is and how it helps people. The environment and saving money are only parts of it." },
            { t: "mcq", q: "2. Which of the following is an example of simple living?", options: ["Buying more clothes when getting bored.", "Eating local food and reducing plastic use.", "Spending more money on expensive gadgets.", "Upgrading to the latest phone every year."], answer: 1,
              hint: "Read paragraph 2 again.",
              why: "Paragraph 2: people “use less plastic” and simple living “can include eating local food”." }
          ] },

        { type: "activity", title: "3. Match the words to their definitions. Then, share sentences with your partner using these words.", page: 63, source: "book",
          instructions: "Match the words to their definitions. Then, share sentences with your partner using these words.", instructionsAr: "صِل الكلمات بمعانيها، ثم شارك زميلك جملًا تستخدم فيها هذه الكلمات.",
          items: [
            { t: "match", q: "Match the words to their definitions.",
              pairs: [["1. conserve", "to use something carefully so as not to use it all"], ["2. gadget", "a small device, often a machine or electronic item"], ["3. thoughtful", "carefully considering things"]],
              hint: "Find each word in the passage and read the sentence around it.",
              why: "1 → b (conserve water and electricity), 2 → c (the newest gadgets), 3 → a (being more thoughtful about how we live)." },
            { t: "short", open: true, q: "Write a sentence with one of the words (conserve, gadget, thoughtful). Then share it with your partner.",
              model: "We turn off the lights to conserve electricity.", hint: "Example: My brother bought a new gadget …" }
          ] },

        { type: "discuss", title: "4. Discuss the following questions.", page: 63, source: "book",
          instructions: "Discuss the following questions.",
          prompts: ["1. Which ideas in the passage do you like or agree with? Why?", "2. What would be easy and what would be difficult for you in simple living?", "3. What does the Holy Qur’an teach us about balance in life?"],
          emoji: "💬", seconds: 180,
          starters: ["I like the idea of … because …", "I agree that …", "It would be easy for me to …", "It would be difficult for me to …"] },

        { type: "write", title: "5. Write 3-4 sentences about one thing you could do to live more simply this week. Explain what you would do and why.", page: 63, source: "book",
          instructions: "Write 3-4 sentences about one thing you could do to live more simply this week. Explain what you would do and why.",
          wordBankLabel: "Use some of these ideas: (from the book)",
          wordBank: ["eat at home, spend less", "organise your room", "walk more", "reduce screen time"],
          frame: [
            { label: "My plan for this week", hint: "This week, I will … I will … I think this will help me …", lines: 5 }
          ],
          model: "This week, I will reduce my screen time. I will turn off my phone one hour before bed. I will spend this time reading or talking with my family. I think this will help me sleep better and feel calmer.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I wrote 3-4 sentences.", "I said what I would do.", "I explained why."],
          minWords: 30 },

        { type: "activity", title: "Extra Practice: Check your predictions", source: "extra", stage: "guided",
          instructions: "Look at your ideas from Before You Read. Is each idea in the passage?", instructionsAr: "عُد إلى توقّعاتك قبل القراءة: هل كل فكرة موجودة في النص؟",
          items: [
            { t: "mcq", q: "Buying more things", options: ["Yes, it is in the passage.", "No, it is not."], answer: 1, hint: "Paragraph 1: “using fewer things”.", why: "Simple living means using fewer things, not buying more." },
            { t: "mcq", q: "Reducing screen time", options: ["Yes, it is in the passage.", "No, it is not."], answer: 0, hint: "Paragraph 3.", why: "“… some people reduce their screen time to enjoy family moments …”" },
            { t: "mcq", q: "Eating out at restaurants", options: ["Yes, it is in the passage.", "No, it is not."], answer: 1, hint: "Paragraph 3: “cook meals at home rather than eating out”.", why: "People cook at home rather than eating out." },
            { t: "mcq", q: "Saving water and electricity", options: ["Yes, it is in the passage.", "No, it is not."], answer: 0, hint: "Paragraph 2, last sentence.", why: "“… making an effort to conserve water and electricity.”" },
            { t: "mcq", q: "Spending more time with family", options: ["Yes, it is in the passage.", "No, it is not."], answer: 0, hint: "Paragraph 3.", why: "“… to enjoy family moments …”" },
            { t: "mcq", q: "Helping the environment", options: ["Yes, it is in the passage.", "No, it is not."], answer: 0, hint: "Paragraph 2.", why: "“… others are motivated by a desire to protect the environment.”" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the passage.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالنص.",
          items: [
            { t: "mcq", q: "Living simply means giving up everything.", options: ["True", "False"], answer: 1, hint: "Paragraph 1, second sentence.", why: "“It does not necessarily mean giving up everything or living without comfort.”" },
            { t: "mcq", q: "People who live simply often ask, “Do I really need this?” before they buy something.", options: ["True", "False"], answer: 0, hint: "Paragraph 1, last sentence.", why: "“People who choose simple living often ask themselves, “Do I really need this?” before they buy something.”" },
            { t: "mcq", q: "Buying fewer clothes helps people save money.", options: ["True", "False"], answer: 0, hint: "Paragraph 2.", why: "“… which not only helps them save money but also benefits the environment.”" },
            { t: "mcq", q: "Some people drive short distances instead of walking.", options: ["True", "False"], answer: 1, hint: "Paragraph 3.", why: "“Others choose to walk or ride a bike instead of driving short distances.”" },
            { t: "mcq", q: "Making smart choices is always easy.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "“Making smart choices is not always easy …”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "Turn off the tap to (conserve / focus) water.", options: ["conserve", "focus"], answer: 0, why: "conserve = use something carefully so as not to use it all." },
            { t: "choose", q: "My uncle loves new (gadgets / experiences) like smartwatches and headphones.", options: ["gadgets", "experiences"], answer: 0, why: "A gadget is a small electronic device." },
            { t: "choose", q: "Visiting my grandparents is a (valuable / balanced) experience.", options: ["valuable", "balanced"], answer: 0, why: "valuable = very useful or important." },
            { t: "choose", q: "I didn’t take the bus. (Instead / Frankly), I walked to school.", options: ["Instead", "Frankly"], answer: 0, why: "instead = in the place of something else." },
            { t: "choose", q: "Exercise (benefits / conserves) your health.", options: ["benefits", "conserves"], answer: 0, why: "benefit = be good for something." },
            { t: "choose", q: "A (balanced / thoughtful) life has time for work, family and rest.", options: ["balanced", "thoughtful"], answer: 0, why: "balanced = with the right amount of different things." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): read the title. Students tick the ideas they expect. Answer key ticks: reducing screen time, saving water and electricity, spending more time with family, helping the environment. Check after reading (Extra: Check your predictions).",
          "Pre-teach the 10 words (focus, necessarily, instead, thoughtful, benefit, conserve, gadget, valuable, frankly, balanced). They are bold in the passage.",
          "Read the passage paragraph by paragraph. Text type: expository.",
          "Ex. 2 answers: 1. b (It discusses simple living and its benefits.) 2. b (Eating local food and reducing plastic use.).",
          "Ex. 3 answers: 1 conserve → b, 2 gadget → c, 3 thoughtful → a. Then pairs share sentences with the words.",
          "Ex. 4: open discussion. Answer key for question 3: Not to waste.",
          "Ex. 5: open writing. Model from the answer key: This week, I will reduce my screen time. I will turn off my phone one hour before bed…"
        ],
        pair: ["A reads a definition from ex. 3; B says the word and makes a sentence with it.", "Partners compare their plans from ex. 5 and say one reason each."],
        group: ["Groups make a “Simple Living” poster: three things to do less and three things to do more."],
        quick: [
          { q: "What question do people who live simply ask before they buy something?", a: "“Do I really need this?”" },
          { q: "Give one example of simple living from the passage.", a: "Eating local food / using less plastic / walking or riding a bike / cooking at home." },
          { q: "What does “conserve” mean?", a: "To use something carefully so as not to use it all." },
          { q: "Does living simply mean living without comfort?", a: "No. It does not necessarily mean giving up everything or living without comfort." }
        ]
      }
    },

    /* ───────────────────────── LESSON 2 — GRAMMAR (p. 64) ───────────────────────── */
    {
      id: "u4l2", num: 2, skill: "Grammar", title: "Present Perfect & Present Perfect Continuous", pages: [64], status: "complete",
      canDo: [
        "I can identify present perfect and present perfect continuous forms accurately in sentences about lifestyle habits and changes.",
        "I can apply the present perfect and present perfect continuous tenses accurately in both written and spoken contexts to describe lifestyle changes and ongoing habits."
      ],
      goals: ["Tell the result of an activity from the activity itself.", "Use has / have + past participle (v3).", "Use has been / have been + verb-ing.", "Use since, for, just, already, yet and ever."],
      goalsAr: ["أميّز بين نتيجة النشاط والنشاط نفسه.", "أستخدم has / have مع التصريف الثالث للفعل.", "أستخدم has been / have been مع الفعل + ing.", "أستخدم since و for و just و already و yet و ever."],
      warmup: {
        title: "Grammar in context", image: "crops/u4l2-wash-car.jpg", emoji: "🚗", seconds: 60, source: "extra",
        instructions: "Look at the two pictures. Talk with your partner.",
        prompts: ["What is the man doing in picture 1?", "Is the car clean in picture 2?", "Is the work finished in picture 1 or in picture 2?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. a. Read the examples below. Then, discuss the questions.", page: 64, source: "book", stage: "guided",
          instructions: "Read the examples below. Then, discuss the questions. 1. I have given away clothes I don’t wear anymore. 2. I have been spending less time using my phone.",
          instructionsAr: "اقرأ المثالين ثم ناقش السؤالين.",
          items: [
            { t: "mcq", q: "a. Which sentence focuses on the [[result of the activity]]?", options: ["Sentence 1", "Sentence 2"], answer: 0,
              hint: "Which sentence tells us about something that is finished?", why: "Sentence 1: “I have given away clothes …” The giving away is finished. We see the result (present perfect)." },
            { t: "mcq", q: "b. Which sentence focuses on [[the activity itself]]?", options: ["Sentence 1", "Sentence 2"], answer: 1,
              hint: "Which sentence has been + verb-ing?", why: "Sentence 2: “I have been spending less time …” It focuses on the activity, which is still going on (present perfect continuous)." }
          ] },

        { type: "grammar", title: "Grammar: Present Perfect & Present Perfect Continuous", page: 64,
          steps: [
            { title: "Present Perfect",
              text: "He/She/It + has + Past Participle (v3). I/We/You/They + have + Past Participle (v3).",
              textAr: "مع He/She/It نستخدم has، ومع I/We/You/They نستخدم have، ثم التصريف الثالث للفعل (v3).",
              examples: ["{s:She} {a:has} {v:avoided} fast food.", "{s:I} {a:have} {v:given} away clothes I don’t wear anymore."] },
            { title: "Present Perfect Continuous",
              text: "He/She/It + has been + v+-ing. I/We/You/They + have been + v+-ing.",
              textAr: "مع He/She/It نستخدم has been، ومع I/We/You/They نستخدم have been، ثم الفعل + ing.",
              examples: ["{s:They} {a:have been} {v:eating} healthy food {t:for a month}.", "{s:I} {a:have been} {v:spending} less time using my phone."] },
            { title: "Result or activity?", source: "extra",
              text: "The present perfect focuses on the result of the activity (it is finished). The present perfect continuous focuses on the activity itself (it is still going on, or it has just stopped).",
              textAr: "المضارع التام يركّز على نتيجة النشاط (انتهى)، والمضارع التام المستمر يركّز على النشاط نفسه (ما زال مستمرًّا أو توقّف للتوّ).",
              examples: ["{s:He} {a:has} {v:washed} the car. (The car is clean now.)", "{s:He} {a:has been} {v:washing} the car. (He is still washing it.)"] },
            { title: "Keywords",
              text: "just / already / yet / since / for / ever",
              textAr: "الكلمات الدالّة: just / already / yet / since / for / ever",
              examples: ["{s:He} {a:has} {v:eaten} lunch {t:already}.", "{s:We} {a:have} {t:just} {v:cleaned} the kitchen.", "{s:She} {n:hasn’t} {v:finished} her homework {t:yet}."] },
            { title: "since or for?",
              text: "Use since with the starting time. Use for with the length of time.",
              textAr: "نستخدم since مع بداية الوقت، و for مع طول المدة.",
              examples: ["{s:I} {a:have} {v:lived} here {t:since 2021}.", "{s:I} {a:have} {v:lived} here {t:for two years}."] },
            { title: "Negatives and questions", source: "extra",
              text: "Negative: hasn’t / haven’t + v3. Question: Has / Have + subject + v3? yet goes at the end of negatives and questions. ever goes before the v3 in questions. How long + have / has + subject + been + verb-ing?",
              textAr: "النفي: hasn’t / haven’t ثم التصريف الثالث. السؤال: Has / Have ثم الفاعل ثم التصريف الثالث. تأتي yet في آخر جمل النفي والسؤال، وتأتي ever قبل التصريف الثالث في السؤال.",
              examples: ["{s:She} {n:hasn’t} {v:finished} her homework {t:yet}.", "{a:Have} {s:you} {t:ever} {v:tried} simple living?", "{q:How long} {a:have} {s:you} {a:been} {v:reading} this book?"] },
            { title: "Past participles (v3)", source: "extra",
              text: "Regular verbs add -ed (avoid → avoided, clean → cleaned, study → studied). Irregular verbs have their own form (eat → eaten, give → given, read → read, do → done).",
              textAr: "الأفعال المنتظمة نضيف لها ed، والأفعال الشاذّة لها تصريف خاص (eat → eaten, give → given).",
              examples: ["{s:We} {a:have} {v:studi}{x:ed} English since 1990.", "{s:He} {a:has} {v:eaten} lunch already."] }
          ],
          table: {
            head: ["Tense", "Form", "Examples"],
            rows: [
              ["Present Perfect", "He/She/It {a:has} · I/We/You/They {a:have} + Past Participle v3", "She has avoided fast food."],
              ["Present Perfect Continuous", "He/She/It {a:has been} · I/We/You/They {a:have been} + v+-ing", "They have been eating healthy food for a month."],
              ["Keywords", "just / already / yet / since / for / ever", ""]
            ]
          },
          worked: {
            q: "Correct the verb: I ______ (read) this book for two hours.",
            steps: ["“for two hours” tells us how long the activity has gone on.", "We focus on the activity itself → present perfect continuous.", "The subject is I → have been.", "read → reading."],
            a: "{s:I} {a:have been} {v:reading} this book {t:for two hours}."
          },
          notes: ["The book’s yellow note: Use since with the starting time: I have lived here since 2021. Use for with the length of time: I have lived here for two years."] },

        { type: "activity", title: "1. b. Describe the two pictures using the present perfect and the present perfect continuous.", page: 64, source: "book", stage: "guided",
          instructions: "(wash the car)", instructionsAr: "صِف الصورتين باستخدام المضارع التام والمضارع التام المستمر (wash the car).",
          image: "crops/u4l2-wash-car.jpg",
          items: [
            { t: "short", q: "Picture 1: He …", model: "He has been washing the car.", keywords: [["has been washing", "'s been washing"]],
              hint: "He is still washing the car. Focus on the activity itself: has been + verb-ing." },
            { t: "short", q: "Picture 2: He …", model: "He has washed the car.", keywords: [["has washed", "'s washed"]],
              hint: "The work is finished and the car is clean. Focus on the result: has + v3." }
          ],
          note: "The answer key in the book writes “He has washed the car.” on line 1 and “He has been washing the car.” on line 2." },

        { type: "activity", title: "2. Correct the verbs between brackets.", page: 64, source: "book", stage: "guided",
          instructions: "Correct the verbs between brackets.", instructionsAr: "صحّح الأفعال بين القوسين.",
          items: [
            { t: "fill", q: "a. I ____ (read) this book for two hours.", answer: ["have been reading"], hint: "for two hours → the activity itself. I → have been.", why: "I have been reading this book for two hours." },
            { t: "fill", q: "b. She ____ (not finish) her homework yet.", answer: ["hasn’t finished", "has not finished"], hint: "yet → negative present perfect. She → has.", why: "She hasn’t finished her homework yet." },
            { t: "fill", q: "c. He ____ (eat) lunch already.", answer: ["has eaten"], hint: "already → present perfect. eat is irregular.", why: "He has eaten lunch already. (eat → eaten)" },
            { t: "fill", q: "d. We ____ (study) English since 1990.", answer: ["have studied", "have been studying"], hint: "We → have. study → studied.", why: "We have studied English since 1990. (“have been studying” is also correct.)" },
            { t: "fill", q: "e. We ____ just …… (clean) the kitchen.", answer: ["have"], hint: "We → have.", why: "We have just cleaned the kitchen." },
            { t: "fill", q: "e. We have just ____ (clean) the kitchen.", answer: ["cleaned"], hint: "Past participle (v3) of clean.", why: "We have just cleaned the kitchen." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the correct word", source: "extra", stage: "guided",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "She ____ avoided fast food.", options: ["has", "have"], answer: 0, why: "She → has." },
            { t: "choose", q: "They ____ been eating healthy food for a month.", options: ["has", "have"], answer: 1, why: "They → have been." },
            { t: "choose", q: "He has ____ washing the car.", options: ["been", "being"], answer: 0, why: "has been + verb-ing." },
            { t: "choose", q: "I have lived here ____ 2021.", options: ["since", "for"], answer: 0, why: "2021 is the starting time → since." },
            { t: "choose", q: "I have lived here ____ two years.", options: ["since", "for"], answer: 1, why: "two years is a length of time → for." },
            { t: "choose", q: "She hasn’t finished her homework ____.", options: ["yet", "already"], answer: 0, why: "yet goes at the end of negative sentences." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🧽 Make a sentence.", words: ["We", "have", "just", "cleaned", "the", "kitchen."], answer: ["We have just cleaned the kitchen."], hint: "just goes between have and the v3.", why: "Subject + have + just + v3." },
            { t: "order", q: "📖 Make a sentence.", words: ["She", "has", "been", "reading", "for", "two", "hours."], answer: ["She has been reading for two hours."], hint: "has been + verb-ing + for …", why: "Subject + has been + verb-ing + for + length of time." },
            { t: "order", q: "🍽️ Make a negative sentence.", words: ["He", "hasn’t", "eaten", "lunch", "yet."], answer: ["He hasn’t eaten lunch yet."], hint: "yet goes at the end.", why: "Subject + hasn’t + v3 + … + yet." },
            { t: "order", q: "❓ Make a question.", words: ["Have", "you", "ever", "tried", "simple", "living?"], answer: ["Have you ever tried simple living?"], hint: "Have + subject + ever + v3?", why: "Have + you + ever + tried …?" }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "يوجد خطأ في كلمة واحدة. اكتب الكلمة الصحيحة.",
          items: [
            { t: "fix", q: "He has {wash} the car.", answer: ["washed"], hint: "has + v3.", why: "has washed." },
            { t: "fix", q: "They have been {eat} healthy food for a month.", answer: ["eating"], hint: "have been + verb-ing.", why: "have been eating." },
            { t: "fix", q: "I have lived here {for} 2021.", answer: ["since"], hint: "2021 is a starting time.", why: "since + starting time." },
            { t: "fix", q: "She {have} avoided fast food.", answer: ["has"], hint: "She → ?", why: "She has avoided fast food." },
            { t: "fix", q: "We have {study} English since 1990.", answer: ["studied"], hint: "y → ied.", why: "study → studied." },
            { t: "short", q: "Write one sentence about a habit you have been trying to keep.", open: true, model: "I have been trying to drink more water.", hint: "I have been trying to …" }
          ] },

        { type: "speak", title: "3. Talk about the changes you have made recently, and the habits you have been trying to keep, based on the reading.", page: 64, source: "book",
          instructions: "Talk about the changes you have made recently, and the habits you have been trying to keep, based on the reading. Take turns asking and answering.",
          dialogue: [
            { who: "Student A", text: "" }, { who: "Student B", text: "" },
            { who: "Student A", text: "" }, { who: "Student B", text: "" }
          ],
          starters: ["I have started…", "I have been trying to…"],
          note: "You can ask (extra help): What changes have you made recently? What habits have you been trying to keep?",
          record: true },

        { type: "write", title: "3. Then, write your answers below.", page: 64, source: "book",
          instructions: "Write your answers: the changes you have made recently and the habits you have been trying to keep.",
          wordBankLabel: "Sentence Starters (from the book)",
          wordBank: ["I have started", "I have been trying to"],
          frame: [
            { label: "Changes I have made", hint: "I have started … / I have given away …", lines: 2 },
            { label: "Habits I have been trying to keep", hint: "I have been trying to … / I have been spending …", lines: 2 }
          ],
          model: "I have started walking to school. I have been trying to use less plastic. I have given away clothes I don’t wear. I have been spending less time on my phone.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I used have / has + v3 for a change.", "I used have / has been + verb-ing for a habit.", "I started each sentence with a capital letter and ended it with a full stop."],
          minWords: 20 }
      ],
      game: { kind: "sort", title: "since or for?",
        buckets: ["since ⏱️ (starting time)", "for ⏳ (length of time)"],
        cards: [["2021", 0], ["1990", 0], ["Monday", 0], ["last week", 0], ["nine o’clock", 0], ["two years", 1], ["two hours", 1], ["a month", 1], ["ten minutes", 1], ["a long time", 1]] },
      teacher: {
        notes: [
          "Ex. 1a: read the two examples. Answers: a. Sentence 1 (result of the activity) b. Sentence 2 (the activity itself).",
          "Present the table: present perfect (has / have + v3) and present perfect continuous (has / have been + v+-ing). Keywords: just / already / yet / since / for / ever. Read the yellow note on since and for.",
          "Ex. 1b (wash the car): picture 1 shows the man still washing → He has been washing the car. Picture 2 shows the finished result → He has washed the car. Note: the answer key writes the two sentences in the opposite order; accept both sentences, but ask which picture shows the result.",
          "Ex. 2 answers: a. have been reading  b. hasn’t finished  c. has eaten  d. have studied  e. have … cleaned.",
          "Ex. 3: pairs talk about changes and habits with the starters (I have started… / I have been trying to…), then write. Model from the answer key: I have started walking to school. I have been trying to use less plastic…"
        ],
        pair: ["A says a change (I have started walking to school); B asks “How long have you been …?” and A answers with for or since.", "Partner check: swap the sentences from ex. 3 and check has / have and v3 / -ing."],
        group: ["Groups make a “Our Simple Living Changes” list: five things they have done and five habits they have been trying to keep."],
        quick: [
          { q: "Which tense focuses on the result: “I have given away clothes” or “I have been spending less time”?", a: "I have given away clothes (present perfect)." },
          { q: "Complete: She ___ (not finish) her homework yet.", a: "hasn’t finished" },
          { q: "since or for: I have lived here ___ two years.", a: "for" },
          { q: "Make the present perfect continuous: They / eat / healthy food / for a month.", a: "They have been eating healthy food for a month." }
        ]
      }
    },

    /* ───────────────────────── LESSON 3 — LISTENING (p. 65) ───────────────────────── */
    {
      id: "u4l3", num: 3, skill: "Listening", title: "Decluttering Our Spaces", pages: [65], status: "complete",
      canDo: [
        "I can analyse explicit and implicit details from a spoken text about decluttering spaces.",
        "I can record key information from a spoken text about decluttering accurately and efficiently using structured notes.",
        "I can demonstrate attentive listening consistently by focusing on key ideas during a spoken text about decluttering."
      ],
      goals: ["Talk about tidy and cluttered rooms.", "Listen to a podcast for the main message.", "Decide if statements are true or false and correct them.", "Write and present a short blog post."],
      goalsAr: ["أتحدّث عن الغرف المرتّبة وغير المرتّبة.", "أستمع إلى بودكاست لأحدّد الرسالة الرئيسية.", "أحدّد صحة العبارات أو خطأها وأصحّح الخاطئة.", "أكتب منشورًا قصيرًا في مدوّنة وأعرضه."],
      warmup: {
        title: "Before You Listen", image: "crops/u4l3-rooms.jpg", emoji: "🧹", seconds: 90,
        instructions: "1. Discuss these questions.",
        prompts: ["a. What does your room look like right now, tidy or cluttered?", "b. How do you feel when your room is tidy? How do you feel when it is not?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to the podcast about “Decluttering Our Spaces,” then choose the correct answer.", page: 65, source: "book",
          needsAudio: true, track: "4.1",
          image: "crops/u4l3-podcast.jpg",
          instructions: "What is the speaker’s main message?",
          items: [
            { t: "mcq", keyed: true, q: "What is the speaker’s main message?", options: ["Decluttering is difficult and costs a lot of money.", "Decluttering helps people feel calm and more focused.", "Everyone should throw half of their things away."], answer: 1,
              hint: "Think about how you feel in a tidy room.", why: "Answer key: b. Decluttering helps people feel calm and more focused." }
          ] },

        { type: "listen", title: "3. Listen again. Decide if each statement is True (T) or False (F), then correct the false ones.", page: 65, source: "book",
          needsAudio: true, track: "4.1",
          instructions: "Listen again. Decide if each statement is True (T) or False (F), then correct the false ones.",
          items: [
            { t: "mcq", keyed: true, q: "a. The speaker says untidy rooms can cause stress.", options: ["True", "False"], answer: 0, why: "Answer key: T." },
            { t: "mcq", keyed: true, q: "b. Decluttering means throwing away everything you have.", options: ["True", "False"], answer: 1, why: "Answer key: F. Not everything." },
            { t: "short", keyed: true, open: true, q: "Correct statement b.", model: "Not everything. (Decluttering does not mean throwing away everything you have.)", hint: "Does decluttering mean throwing away everything?" },
            { t: "mcq", keyed: true, q: "c. The speaker suggests cleaning the whole house at once.", options: ["True", "False"], answer: 1, why: "Answer key: F. Start small." },
            { t: "short", keyed: true, open: true, q: "Correct statement c.", model: "Start small. (The speaker suggests starting small, not cleaning the whole house at once.)", hint: "Should you start with the whole house or with something small?" }
          ] },

        { type: "discuss", title: "4. Discuss the following questions.", page: 65, source: "book",
          instructions: "Discuss the following questions.",
          prompts: ["a. What area of your life would you like to declutter (e.g. your room, your phone, or your thoughts)? Why?", "b. Have you ever tried decluttering before? What was the result?"],
          emoji: "📦", seconds: 150,
          starters: ["I would like to declutter my … because …", "Yes, I have. I … and the result was …", "No, I haven’t, but I would like to …"] },

        { type: "write", title: "5. a. Write a short blog-style post (3-4 sentences) about how you will organise your space this week.", page: 65, source: "book",
          instructions: "Write a short blog-style post (3-4 sentences) about how you will organise your space this week. Be sure to include: 1. Three small actions (e.g. sort your books, tidy your desk). 2. How this can help (e.g. save time, feel calm).",
          image: "crops/u4l3-blog-boxes.jpg",
          frame: [
            { label: "My blog post", hint: "This week, I will … First, … Next, … Finally, … This will …", lines: 5 }
          ],
          model: "This week, I will declutter my room. First, I will sort my books and give away old ones. Next, I will tidy my desk. Finally, I will throw away broken things. This will save time and help me feel calm.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          bookChecklist: ["Three small actions (e.g. sort your books, tidy your desk).", "How this can help (e.g. save time, feel calm)."],
          bookNote: "Be sure to include: (from the book)",
          checklist: ["I wrote 3-4 sentences.", "I started each sentence with a capital letter and ended it with a full stop."],
          minWords: 25 },

        { type: "speak", title: "5. b. Present your blog post to the whole class.", page: 65, source: "book",
          instructions: "Present your blog post to the whole class.",
          dialogue: [{ who: "You", text: "" }],
          note: "Speak clearly and look at your classmates. Read your three actions and say how they can help.",
          starters: ["This week, I will …", "First, I will …", "Next, I will …", "Finally, I will …", "This will help me …"],
          record: true },

        { type: "activity", title: "Extra Practice: Plan your week", source: "extra", stage: "guided",
          instructions: "Choose the correct word to complete the blog post.", instructionsAr: "اختر الكلمة الصحيحة لتكمل منشور المدوّنة.",
          items: [
            { t: "choose", q: "This week, I ____ declutter my room.", options: ["will", "am"], answer: 0, why: "will + verb for a plan for this week: I will declutter." },
            { t: "choose", q: "First, I will ____ my books and give away old ones.", options: ["sort", "sorting"], answer: 0, why: "will + bare verb: will sort." },
            { t: "choose", q: "____, I will tidy my desk. (the second action)", options: ["Next", "Finally"], answer: 0, why: "First → Next → Finally." },
            { t: "choose", q: "____, I will throw away broken things. (the last action)", options: ["First", "Finally"], answer: 1, why: "Finally introduces the last action." },
            { t: "choose", q: "This will save time and help me ____ calm.", options: ["feel", "feeling"], answer: 0, why: "help me + bare verb: help me feel." },
            { t: "mcq", q: "What does “declutter” mean?", options: ["to buy new things for your room", "to remove things you don’t need and make a space tidy", "to paint your room"], answer: 1, why: "When you declutter, you sort your things and remove what you don’t need." }
          ] }
      ],
      game: { kind: "sort", title: "Cluttered or Tidy?",
        buckets: ["Cluttered 🧦", "Tidy ✨"],
        cards: [["clothes on the floor", 0], ["papers everywhere", 0], ["bags on the bed", 0], ["broken things in a drawer", 0], ["a made bed", 1], ["books on the shelf", 1], ["a clear desk", 1], ["shoes in pairs", 1]] },
      teacher: {
        notes: [
          "Before You Listen (ex. 1): use the two pictures (cluttered / tidy). Pairs answer a and b.",
          "The recording (podcast, track 4.1) is not in this app: play it from the book (QR code on page 65).",
          "Ex. 2 answer: b (Decluttering helps people feel calm and more focused.).",
          "Ex. 3 answers: a. T  b. F (Not everything.)  c. F (Start small.).",
          "Ex. 4: open discussion. Ex. 5a: students write a 3-4 sentence blog post with three small actions and how they can help. Model from the answer key: This week, I will declutter my room. First, I will sort my books… Ex. 5b: students present their posts."
        ],
        pair: ["A reads a statement from ex. 3; B says T or F and corrects it.", "Partners read each other’s blog posts and check: three actions + how this can help."],
        group: ["Groups make a “Declutter Challenge” poster: one small action for each day of the week."],
        quick: [
          { q: "What is the speaker’s main message?", a: "Decluttering helps people feel calm and more focused." },
          { q: "Can untidy rooms cause stress?", a: "Yes (statement a is true)." },
          { q: "Does decluttering mean throwing away everything?", a: "No. Not everything." },
          { q: "Should you clean the whole house at once?", a: "No. Start small." }
        ]
      }
    },

    /* ───────────────────────── LESSON 4 — SPEAKING (p. 66) ───────────────────────── */
    {
      id: "u4l4", num: 4, skill: "Speaking", title: "Smart Spending, Wise Living", pages: [66], status: "complete",
      canDo: [
        "I can identify key ideas about needs, wants, and spending habits accurately in short discussions about budgeting and simple living.",
        "I can evaluate personal spending habits in relation to personal values using appropriate language.",
        "I can apply appropriate language for giving advice and opinions correctly in spoken discussions about wise living."
      ],
      goals: ["Decide if a spending habit is a smart choice.", "Talk about my own spending habits.", "Divide KD100 into needs, savings and fun.", "Present a budget plan to the class."],
      goalsAr: ["أحدّد هل عادة الإنفاق اختيار ذكي أم لا.", "أتحدّث عن عاداتي في الإنفاق.", "أقسّم 100 دينار إلى احتياجات ومدّخرات وترفيه.", "أعرض خطة ميزانيتي على الصف."],
      warmup: {
        title: "Smart Spending", image: "crops/u4l4-budget.jpg", emoji: "💰", seconds: 60, source: "extra",
        instructions: "Talk with your partner.",
        prompts: ["What do you usually spend your pocket money on?", "Do you save some of your money? Why?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. a. Read these spending habits and decide: Is it a smart choice? Tick ✓ or ✗ next to each one.", page: 66, source: "book",
          instructions: "Read these spending habits and decide: Is it a smart choice? Tick ✓ or ✗ next to each one.", instructionsAr: "اقرأ عادات الإنفاق التالية وقرّر: هل هي اختيار ذكي؟ ضع ✓ أو ✗ بجانب كل واحدة.",
          items: [
            { t: "choose", q: "Buying something just because it's on sale", options: ["✓ Smart choice", "✗ Not a smart choice"], answer: 1, hint: "Do you really need it?", why: "Answer key: ✗. Something on sale is not useful if you don’t need it." },
            { t: "choose", q: "Making a list before going shopping", options: ["✓ Smart choice", "✗ Not a smart choice"], answer: 0, hint: "A list helps you buy only what you need.", why: "Answer key: ✓. A list stops you buying things you don’t need." },
            { t: "choose", q: "Spending all your pocket money on one big item", options: ["✓ Smart choice", "✗ Not a smart choice"], answer: 1, hint: "What happens if you need money later?", why: "Answer key: ✗. You have nothing left for needs or savings." },
            { t: "choose", q: "Bringing lunch from home instead of buying fast food", options: ["✓ Smart choice", "✗ Not a smart choice"], answer: 0, hint: "Think about money and health.", why: "Answer key: ✓. It saves money and is healthier." },
            { t: "choose", q: "Asking yourself “Do I really need this?” before buying", options: ["✓ Smart choice", "✗ Not a smart choice"], answer: 0, hint: "Remember the reading in Lesson 1.", why: "Answer key: ✓. It helps you think before you spend." }
          ] },

        { type: "discuss", title: "1. b. Discuss these questions.", page: 66, source: "book",
          instructions: "Discuss these questions.",
          prompts: ["a. Which habits do you follow?", "b. Which spending habit is the hardest for you to change? Why?"],
          emoji: "🛍️", seconds: 120,
          starters: ["I usually think about…", "One smart habit I could try is…", "The Holy Qur’an teaches us…"] },

        { type: "discuss", title: "2. Discuss these questions. Take turns sharing your ideas.", page: 66, source: "book",
          instructions: "Discuss these questions. Take turns sharing your ideas.",
          prompts: ["1. Do you usually think before buying anything?", "2. What could you do to spend money more cleverly?", "3. What advice does the Holy Qur’an give about using money wisely?"],
          emoji: "💬", seconds: 180,
          starters: ["I usually think about…", "One smart habit I could try is…", "The Holy Qur’an teaches us…"] },

        { type: "activity", title: "3. Imagine you receive KD100 per month. a. Divide the money into three parts (needs, savings, and fun).", page: 66, source: "book",
          instructions: "Imagine you receive KD100 per month. Divide the money into three parts (needs, savings, and fun).", instructionsAr: "تخيّل أنك تحصل على 100 دينار كل شهر. قسّم المبلغ إلى ثلاثة أجزاء: الاحتياجات والادّخار والترفيه.",
          image: "crops/u4l4-budget.jpg",
          items: [
            { t: "table", open: true, q: "Write the amount for each part.",
              head: ["Category", "Amount (KD)", "Example Expenses"],
              rows: [
                ["Needs", { model: "60" }, "E.g. food, bills"],
                ["Savings", { model: "30" }, "Money for the future"],
                ["Treats / Fun", { model: "10" }, "E.g. snacks, movies, clothes"]
              ],
              note: "This is your own plan. Make sure the three amounts add up to KD100. The suggested answers are one example from the answer key." }
          ] },

        { type: "discuss", title: "3. b. Discuss the questions.", page: 66, source: "book",
          instructions: "Discuss the questions.",
          prompts: ["1. How much money would you put in each part?", "2. What would you spend it on?", "3. Why did you choose this plan?"],
          emoji: "🧮", seconds: 150,
          starters: ["I would put KD… for needs.", "I would spend it on…", "I chose this plan because…"] },

        { type: "speak", title: "3. c. Present your budget plan to the class.", page: 66, source: "book",
          instructions: "Present your budget plan to the class.",
          dialogue: [{ who: "You", text: "" }],
          starters: ["I receive KD100 per month.", "I would put KD… for needs, like…", "I would save KD… for the future.", "I would spend KD… on treats and fun.", "I chose this plan because…"],
          note: "Say how much you put in each part, what you would spend it on and why.",
          record: true },

        { type: "activity", title: "Extra Practice: Needs, savings or fun?", source: "extra", stage: "guided",
          instructions: "Read each expense. Which part of the budget is it?", instructionsAr: "اقرأ كل مصروف: إلى أيّ جزء من الميزانية ينتمي؟",
          items: [
            { t: "mcq", q: "Paying the electricity bill", options: ["Needs", "Savings", "Treats / Fun"], answer: 0, why: "Bills are needs." },
            { t: "mcq", q: "Going to the cinema with friends", options: ["Needs", "Savings", "Treats / Fun"], answer: 2, why: "Movies are treats / fun." },
            { t: "mcq", q: "Keeping money in the bank for university", options: ["Needs", "Savings", "Treats / Fun"], answer: 1, why: "Money for the future = savings." },
            { t: "mcq", q: "Buying food for the family", options: ["Needs", "Savings", "Treats / Fun"], answer: 0, why: "Food is a need." },
            { t: "mcq", q: "Buying snacks after school", options: ["Needs", "Savings", "Treats / Fun"], answer: 2, why: "Snacks are treats." }
          ] }
      ],
      game: { kind: "sort", title: "Smart Choice or Not?",
        buckets: ["Smart choice ✓", "Not a smart choice ✗"],
        cards: [["Making a list before shopping", 0], ["Bringing lunch from home", 0], ["Asking “Do I really need this?”", 0], ["Saving money for the future", 0], ["Buying something just because it’s on sale", 1], ["Spending all your pocket money on one big item", 1], ["Upgrading to the latest phone every year", 1], ["Buying more clothes when getting bored", 1]] },
      teacher: {
        notes: [
          "Ex. 1a answers (from the answer key): ✗ buying something just because it's on sale; ✓ making a list; ✗ spending all your pocket money on one big item; ✓ bringing lunch from home; ✓ asking “Do I really need this?”.",
          "Ex. 1b and 2: pairs or groups discuss. Use the sentence starters in the book (I usually think about… / One smart habit I could try is… / The Holy Qur’an teaches us…).",
          "Ex. 3: each student divides KD100 into needs, savings and fun. Sample from the answer key: needs 60, savings 30, treats / fun 10. Any plan that adds up to KD100 is fine.",
          "Ex. 3b–c: students explain their plans, then present them to the class."
        ],
        pair: ["A reads a spending habit; B says “smart” or “not smart” and gives a reason.", "Partners compare their budget plans and ask “Why did you choose this plan?”."],
        group: ["Groups agree on one class budget plan for KD100 and present it."],
        quick: [
          { q: "Is making a list before shopping a smart choice?", a: "Yes." },
          { q: "Name the three parts of the budget in the book.", a: "Needs, savings, and treats / fun." },
          { q: "Give one example of a need.", a: "Food / bills." },
          { q: "What question can you ask yourself before buying?", a: "“Do I really need this?”" }
        ]
      }
    },

    /* ───────────────────────── LESSON 5 — READING (pp. 67–68) ───────────────────────── */
    {
      id: "u4l5", num: 5, skill: "Reading", title: "Waste Less, Save the Planet", pages: [67, 68], status: "complete",
      canDo: [
        "I can analyse explicit and implicit details from a written text about reducing waste and saving the planet.",
        "I can produce a short reflective response about personal environmental habits coherently and appropriately based on a written text."
      ],
      goals: ["Decide which actions are wasteful and which are wise.", "Read an expository text about reducing waste.", "Learn 11 new words.", "Write about how I will change a wasteful habit."],
      goalsAr: ["أحدّد الأفعال التي فيها هدر والأفعال الحكيمة.", "أقرأ نصًّا تفسيريًّا عن تقليل الهدر.", "أتعلّم 11 كلمة جديدة.", "أكتب كيف سأغيّر عادة فيها هدر."],
      warmup: {
        title: "Before You Read", image: "crops/u4l5-bin.jpg", emoji: "♻️", seconds: 90,
        instructions: "1. Look at the table below. Decide which items you think are wasteful and which are wise choices. Then, discuss the questions that follow.",
        prompts: ["1. Which actions do you do most often?", "2. Why do people sometimes waste things?"]
      },
      vocab: [
        { w: "discard", pos: "verb", emoji: "🗑️", def: "to throw something away", ex: "For example, we discard plastic water bottles, old clothes, food packaging, and paper.", exFromBook: true, ar: "يتخلّص من / يرمي" },
        { w: "packaging", pos: "noun", emoji: "📦", def: "the box, paper or plastic that a product comes in", ex: "For example, we discard plastic water bottles, old clothes, food packaging, and paper.", exFromBook: true, ar: "التغليف" },
        { w: "responsibly", pos: "adverb", emoji: "🤝", def: "in a careful and sensible way", ex: "It is about living wisely and responsibly.", exFromBook: true, ar: "بمسؤولية" },
        { w: "minimise", pos: "verb", emoji: "📉", def: "to make something as small as possible", ex: "When we use only what we need, we can minimise expenses and preserve natural resources.", exFromBook: true, ar: "يقلّل إلى أدنى حدّ" },
        { w: "expense", pos: "noun", emoji: "💸", def: "money that you spend on something", ex: "When we use only what we need, we can minimise expenses and preserve natural resources.", exFromBook: true, ar: "نفقة / مصروف" },
        { w: "preserve", pos: "verb", emoji: "🌳", def: "to keep something safe so it is not lost or damaged", ex: "When we use only what we need, we can minimise expenses and preserve natural resources.", exFromBook: true, ar: "يحافظ على / يصون" },
        { w: "disposable", pos: "adjective", emoji: "🥤", def: "made to be used once and then thrown away", ex: "For example, bringing a reusable water bottle, saying no to plastic bags, or using a lunchbox instead of disposable wrappers can make a big difference.", exFromBook: true, ar: "يُستعمل مرة واحدة ثم يُرمى" },
        { w: "consumption", pos: "noun", emoji: "🛒", def: "the amount of something that people use or buy", ex: "First, they try to reduce consumption by choosing only what is necessary.", exFromBook: true, ar: "الاستهلاك" },
        { w: "donate", pos: "verb", emoji: "🎁", def: "to give something to people who need it", ex: "Turning off lights, donating old clothes, and using digital notes instead of paper are all smart ways to reduce waste.", exFromBook: true, ar: "يتبرّع بـ" },
        { w: "mindful", pos: "adjective", emoji: "🧘", def: "thinking carefully about what you do", ex: "These simple actions lead to a healthier planet and a more mindful lifestyle.", exFromBook: true, ar: "واعٍ / منتبه" },
        { w: "wasteful", pos: "adjective", emoji: "🚯", def: "using more of something than you need", ex: "Look at the table below. Decide which items you think are wasteful and which are wise choices.", exFromBook: true, ar: "مُسرف / فيه هدر" }
      ],
      sections: [
        { type: "activity", title: "1. Work in groups and tick a ✗ for wasteful and ✓ for wise.", page: 67, source: "book",
          instructions: "Look at the table below. Decide which items you think are wasteful and which are wise choices. Work in groups and tick a ✗ for wasteful and ✓ for wise.",
          instructionsAr: "اعمل مع مجموعتك وضع ✗ أمام ما فيه هدر و ✓ أمام الاختيار الحكيم.",
          items: [
            { t: "choose", q: "Buying a new phone every year", options: ["Wasteful (✗)", "Wise (✓)"], answer: 0, why: "Answer key: ✗ wasteful. You don’t need a new phone every year." },
            { t: "choose", q: "Bringing a reusable water bottle", options: ["Wasteful (✗)", "Wise (✓)"], answer: 1, why: "Answer key: ✓ wise. You use the same bottle many times." },
            { t: "choose", q: "Throwing away old clothes", options: ["Wasteful (✗)", "Wise (✓)"], answer: 0, why: "Answer key: ✗ wasteful. You can donate them instead." },
            { t: "choose", q: "Using plastic bags for shopping", options: ["Wasteful (✗)", "Wise (✓)"], answer: 0, why: "Answer key: ✗ wasteful. Plastic bags make a lot of waste." }
          ] },

        { type: "reading", title: "Waste Less, Live More", page: 67,
          instructions: "Read the passage, then do the tasks that follow.",
          image: "crops/u4l5-recycle.jpg",
          paras: [
            "Every day, we throw away more things than we think. For example, we discard plastic water bottles, old clothes, food packaging, and paper. Much of what we call ‘trash’ could be reused, recycled, or even avoided completely.",
            "Reducing waste is not just about the environment. It is about living wisely and responsibly. When we use only what we need, we can minimise expenses and preserve natural resources. For example, bringing a reusable water bottle, saying no to plastic bags, or using a lunchbox instead of disposable wrappers can make a big difference.",
            "Some people follow the three R’s rule: Reduce, Reuse, Recycle. First, they try to reduce consumption by choosing only what is necessary. Then, they reuse items like containers or bags. Finally, they recycle materials such as paper, glass, and plastic so that these materials can be made into new products.",
            "Even small actions matter. Turning off lights, donating old clothes, and using digital notes instead of paper are all smart ways to reduce waste. These simple actions lead to a healthier planet and a more mindful lifestyle.",
            "As the Holy Qur’an reminds us:",
            "*“Indeed, the wasteful are brothers of the devils.”* (Surah Al-Isra, 17:27) Being careful with our resources is a serious social responsibility."
          ],
          speaker: null,
          note: "Text type: Expository. Lesson title in the book: Waste Less, Save the Planet. The new words are in bold in the book." },

        { type: "activity", title: "2. Choose the best answer.", page: 68, source: "book",
          instructions: "Choose the best answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          image: "crops/u4l5-bin.jpg",
          items: [
            { t: "mcq", q: "1. What is the main idea of the passage?", options: ["We should stop shopping completely.", "Reducing waste helps the planet and our lives.", "Recycling is too difficult for most people.", "Using digital notes can be bad for the environment."], answer: 1,
              hint: "Look at the title: Waste Less, Live More.", why: "The passage shows how reducing waste helps the environment and helps us live wisely." },
            { t: "mcq", q: "2. Which word in the 2nd paragraph has a similar meaning to \"save\"?", options: ["need", "preserve", "bring", "use"], answer: 1,
              hint: "“… minimise expenses and ____ natural resources.”", why: "“preserve natural resources” = save natural resources." },
            { t: "mcq", q: "3. According to the passage, which action is NOT a way to reduce waste?", options: ["Recycling plastic water bottles.", "Throwing away paper and food packaging.", "Turning off lights when not needed.", "Using a lunchbox instead of disposable wrappers."], answer: 1,
              hint: "Which action makes more trash?", why: "Paragraph 1: we discard (throw away) paper and food packaging. This makes waste; it does not reduce it." }
          ] },

        { type: "discuss", title: "3. Discuss these questions, then share your ideas.", page: 68, source: "book",
          instructions: "Discuss these questions, then share your ideas.",
          prompts: ["1. What ideas from the reading do you agree with? Why?", "2. Why is it sometimes difficult for people to reduce waste?", "3. What does the Quranic verse mentioned in the passage teach us?", "4. What is the writer's purpose in writing this passage?"],
          emoji: "🌍", seconds: 180,
          starters: ["I agree with the idea that … because …", "It is difficult because …", "The verse teaches us …", "The writer wants to …"] },

        { type: "write", title: "4. Think of a wasteful habit (e.g. wasting food, wasting electricity, buying things you don't need... etc.) Write 2-3 sentences about how you will change it and why.", page: 68, source: "book",
          instructions: "Think of a wasteful habit (e.g. wasting food, wasting electricity, buying things you don't need... etc.) Write 2-3 sentences about how you will change it and why.",
          wordBankLabel: "Sentence Starters (from the book)",
          wordBank: ["I will try to stop", "I plan to use", "This will help because", "I want to reduce", "My goal is"],
          frame: [
            { label: "My wasteful habit and how I will change it", hint: "I will try to stop … I plan to … This will help because … My goal is …", lines: 5 }
          ],
          model: "I will try to stop wasting food at home. I plan to cook only what we need and keep the leftovers for the next day. This will help because it saves money and protects the planet. My goal is to waste less every day.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I named a wasteful habit.", "I said how I will change it.", "I said why (This will help because …)."],
          minWords: 25 },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the passage.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالنص.",
          items: [
            { t: "mcq", q: "Much of what we call ‘trash’ could be reused or recycled.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“Much of what we call ‘trash’ could be reused, recycled, or even avoided completely.”" },
            { t: "mcq", q: "Reducing waste is only about the environment.", options: ["True", "False"], answer: 1, hint: "Paragraph 2, first sentence.", why: "“Reducing waste is not just about the environment. It is about living wisely and responsibly.”" },
            { t: "mcq", q: "The three R’s are Reduce, Reuse, Recycle.", options: ["True", "False"], answer: 0, hint: "Paragraph 3.", why: "“Some people follow the three R’s rule: Reduce, Reuse, Recycle.”" },
            { t: "mcq", q: "People recycle glass so it can be made into new products.", options: ["True", "False"], answer: 0, hint: "Paragraph 3.", why: "“… they recycle materials such as paper, glass, and plastic so that these materials can be made into new products.”" },
            { t: "mcq", q: "Using digital notes instead of paper makes more waste.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "Using digital notes instead of paper is a smart way to reduce waste." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "Don’t (discard / donate) old clothes. Give them to people who need them.", options: ["discard", "donate"], answer: 0, why: "discard = throw away; donate = give to people who need it." },
            { t: "choose", q: "We (donated / minimised) our old toys to a charity.", options: ["donated", "minimised"], answer: 0, why: "donate = give something to people who need it." },
            { t: "choose", q: "These (disposable / mindful) cups are used once and thrown away.", options: ["disposable", "mindful"], answer: 0, why: "disposable = used once and then thrown away." },
            { t: "choose", q: "The new toy came in a lot of plastic (packaging / consumption).", options: ["packaging", "consumption"], answer: 0, why: "packaging = the box or plastic a product comes in." },
            { t: "choose", q: "Turning off the lights helps us (preserve / discard) energy.", options: ["preserve", "discard"], answer: 0, why: "preserve = keep something safe and not lose it." },
            { t: "choose", q: "Leaving the tap running is (wasteful / responsibly).", options: ["wasteful", "responsibly"], answer: 0, why: "wasteful = using more than you need." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): groups tick the table. Answer key: buying a new phone every year ✗; bringing a reusable water bottle ✓; throwing away old clothes ✗; using plastic bags for shopping ✗. Then discuss questions 1 and 2.",
          "Pre-teach the 11 words (discard, packaging, responsibly, minimise, expense, preserve, disposable, consumption, donate, mindful, wasteful). They are bold in the passage.",
          "Read the passage. Point out the three R’s rule: Reduce, Reuse, Recycle, and the verse from Surah Al-Isra (17:27).",
          "Ex. 2 answers: 1. b (Reducing waste helps the planet and our lives.) 2. b (preserve) 3. b (Throwing away paper and food packaging.).",
          "Ex. 3: open discussion (no answers in the key). Possible ideas: 3. not to waste our resources; 4. to inform readers and persuade them to reduce waste.",
          "Ex. 4: open writing. Model from the answer key: I will try to stop wasting food at home…"
        ],
        pair: ["A names an item (a plastic bag, a water bottle, old clothes); B says how to reduce, reuse or recycle it.", "Partners read each other’s ex. 4 and check: habit + how + why."],
        group: ["Groups make a “Three R’s” poster for the school with one idea for Reduce, Reuse and Recycle."],
        quick: [
          { q: "What are the three R’s?", a: "Reduce, Reuse, Recycle." },
          { q: "Which word in paragraph 2 means “save”?", a: "Preserve." },
          { q: "Give one small action that reduces waste.", a: "Turning off lights / donating old clothes / using digital notes instead of paper." },
          { q: "What does “disposable” mean?", a: "Made to be used once and then thrown away." }
        ]
      }
    },

    /* ───────────────────────── LESSON 6 — GRAMMAR (p. 69) ───────────────────────── */
    {
      id: "u4l6", num: 6, skill: "Grammar", title: "Quantifiers (some, any, much, many, few, little)", pages: [69], status: "complete",
      canDo: [
        "I can use quantifiers (some-any-much-many-few-little) accurately to express quantity with countable and uncountable nouns in real-life situations.",
        "I can analyse how meaning changes with different quantifiers effectively in sentences about amounts and quantities.",
        "I can demonstrate accurate and fluent application of quantifiers in spoken and written communication about shopping and daily habits."
      ],
      goals: ["Find quantifiers in a conversation.", "Tell countable (C) from uncountable (U) nouns.", "Use some, any, much, many, few and little correctly.", "Plan a shopping list for a party with a partner."],
      goalsAr: ["أجد أدوات الكمية في حوار.", "أميّز الأسماء المعدودة (C) من غير المعدودة (U).", "أستخدم some و any و much و many و few و little بشكل صحيح.", "أخطّط مع زميلي لقائمة مشتريات لحفلة."],
      warmup: {
        title: "Grammar in context", image: null, emoji: "🛒", seconds: 60, source: "extra",
        instructions: "Talk with your partner.",
        prompts: ["What do you usually buy when you go shopping?", "Do you check for offers before shopping?", "Do you make a plan before you shop?"]
      },
      vocab: [],
      sections: [
        { type: "reading", title: "1. Read the conversation below and then complete the side task.", page: 69,
          instructions: "Read the conversation, then: Underline all the quantifiers (e.g. some, much, many, any, etc.) Circle the noun that comes immediately after each quantifier. Next to each noun, write “C” for countable or “U” for uncountable.",
          paras: [
            "Nora: I try not to spend much money on things I don’t need.",
            "Sara: That’s smart. I usually bring some snacks from home.",
            "Nora: Do you check for any offers before shopping?",
            "Sara: Always! I also save a little time by planning ahead.",
            "Nora: I follow many accounts that give smart saving tips.",
            "Sara: Me too. But sadly, few students really think before spending money.",
            "Nora: Yes, and some of them don’t make any plans before they shop."
          ],
          speaker: null,
          note: "The numbers 1–7 are the lines of the conversation. Use them in the side task." },

        { type: "grammar", title: "Grammar Focus: Quantifiers (some, any, much, many, few, little)", page: 69,
          steps: [
            { title: "Countable and uncountable nouns",
              text: "Countable nouns can be counted (e.g. an apple, two apples, three apples, etc.) Uncountable nouns cannot be counted. (e.g. air, rice, water, etc.)",
              textAr: "الأسماء المعدودة يمكن عدّها (an apple, two apples)، والأسماء غير المعدودة لا يمكن عدّها (air, rice, water).",
              examples: ["I usually bring {t:some} snacks (C) from home.", "I try not to spend {t:much} money (U) on things I don’t need."] },
            { title: "many and few → countable nouns", source: "extra",
              text: "We use many and few with countable nouns (e.g. snacks, accounts, students).",
              textAr: "نستخدم many و few مع الأسماء المعدودة.",
              examples: ["I follow {t:many} accounts that give smart saving tips.", "But sadly, {t:few} students really think before spending money."] },
            { title: "much and little → uncountable nouns", source: "extra",
              text: "We use much and little with uncountable nouns (e.g. money, time).",
              textAr: "نستخدم much و little مع الأسماء غير المعدودة.",
              examples: ["I try not to spend {t:much} money on things I don’t need.", "I also save a {t:little} time by planning ahead."] },
            { title: "some and any", source: "extra",
              text: "some is used in affirmative sentences. any is used in questions and negative sentences. Both can go with countable and uncountable nouns.",
              textAr: "نستخدم some في الجمل المثبتة، و any في السؤال والنفي، ويأتيان مع المعدود وغير المعدود.",
              examples: ["I usually bring {t:some} snacks from home.", "Do you check for {t:any} offers before shopping?", "Some of them {n:don’t} make {t:any} plans before they shop."] },
            { title: "A small number or amount", source: "extra",
              text: "few and little show a small number or amount: few + countable, little + uncountable.",
              textAr: "few و little تدلّان على عدد أو كمية قليلة: few مع المعدود، و little مع غير المعدود.",
              examples: ["She has very {t:few} friends who like saving money.", "We have very {t:little} sugar."] },
            { title: "Be careful with much", source: "extra",
              text: "much is usually used in negatives and questions. In affirmative sentences we usually say a lot of.",
              textAr: "تُستخدم much غالبًا في النفي والسؤال، أما في الجمل المثبتة فنقول عادةً a lot of.",
              examples: ["We {n:don’t} have {t:much} money.", "{q:How much} money do you spend?", "✗ We have {n:much} money. → ✓ We have {t:a lot of} money."] }
          ],
          worked: {
            q: "Complete: We don’t have ____ sugar at home, so we can’t make tea.",
            steps: ["Is sugar countable or uncountable? Uncountable (U).", "The sentence is negative (don’t have).", "In negative sentences we use any.", "“so we can’t make tea” tells us there is no sugar at all → any."],
            a: "We {n:don’t} have {t:any} sugar at home, so we can’t make tea."
          },
          notes: ["Quick check: many / few + countable · much / little + uncountable · some (affirmative) · any (questions and negatives)."] },

        { type: "activity", title: "1. Side task: underline, circle and write C or U.", page: 69, source: "book", stage: "guided",
          instructions: "For each line of the conversation, write the quantifier, the noun that comes immediately after it, and C (countable) or U (uncountable).",
          instructionsAr: "لكل سطر من الحوار اكتب أداة الكمية، والاسم الذي يأتي بعدها مباشرة، ثم C للمعدود أو U لغير المعدود.",
          items: [
            { t: "table", q: "Complete the table.",
              head: ["Line", "Quantifier", "Noun after it", "C or U"],
              rows: [
                ["1 (Nora)", { answer: ["much"], model: "much" }, { answer: ["money"], model: "money" }, { answer: ["U"], model: "U" }],
                ["2 (Sara)", { answer: ["some"], model: "some" }, { answer: ["snacks"], model: "snacks" }, { answer: ["C"], model: "C" }],
                ["3 (Nora)", { answer: ["any"], model: "any" }, { answer: ["offers"], model: "offers" }, { answer: ["C"], model: "C" }],
                ["4 (Sara)", { answer: ["little", "a little"], model: "little" }, { answer: ["time"], model: "time" }, { answer: ["U"], model: "U" }],
                ["5 (Nora)", { answer: ["many"], model: "many" }, { answer: ["accounts"], model: "accounts" }, { answer: ["C"], model: "C" }],
                ["6 (Sara)", { answer: ["few"], model: "few" }, { answer: ["students"], model: "students" }, { answer: ["C"], model: "C" }],
                ["7 (Nora)", { answer: ["some, any", "some and any", "some any", "some / any", "some/any", "some,any", "any, some", "any and some"], model: "some, any" }, { answer: ["plans"], model: "plans" }, { answer: ["C"], model: "C" }]
              ],
              hint: "Can you count it? one snack, two snacks → C. one money, two moneys ✗ → U.",
              why: "much money (U), some snacks (C), any offers (C), a little time (U), many accounts (C), few students (C), some of them … any plans (C).",
              note: "Line 7 has two quantifiers: some (some of them) and any (any plans). Only “any” has a noun right after it." }
          ] },

        { type: "activity", title: "2. Look at the quantifiers you underlined, then answer these questions.", page: 69, source: "book", stage: "guided",
          instructions: "Look at the quantifiers you underlined, then answer these questions.", instructionsAr: "انظر إلى أدوات الكمية التي وضعت تحتها خطًّا، ثم أجب عن الأسئلة.",
          items: [
            { t: "short", q: "a. Which quantifiers are used with countable nouns (e.g. *snacks*)?", model: "many, few", keywords: [["many"], ["few"]], hint: "Look at lines 5 and 6: … accounts, … students." },
            { t: "short", q: "b. Which quantifiers are used with uncountable nouns (e.g. *money*)?", model: "much, little", keywords: [["much"], ["little"]], hint: "Look at lines 1 and 4: … money, … time." },
            { t: "short", q: "c. Which quantifiers are used in questions and negative sentences?", model: "any", keywords: [["any"]], hint: "Look at lines 3 and 7." },
            { t: "short", q: "d. Which quantifiers show a small number or amount?", model: "few, little", keywords: [["few"], ["little"]], hint: "Look at lines 4 and 6." }
          ] },

        { type: "activity", title: "3. Complete the sentences using: some, any, much, many, few, little.", page: 69, source: "book", stage: "guided",
          instructions: "Complete the sentences using: some, any, much, many, few, little.", instructionsAr: "أكمل الجمل باستخدام: some, any, much, many, few, little.",
          items: [
            { t: "fill", q: "1. We don’t have ____ sugar at home, so we can’t make tea.", answer: ["any"], bank: ["some", "any", "much", "many", "few", "little"], hint: "Negative sentence + uncountable noun. There is no sugar at all.", why: "any is used in negative sentences: We don’t have any sugar." },
            { t: "fill", q: "2. Have you seen ____ good movies recently?", answer: ["any", "many"], bank: ["some", "any", "much", "many", "few", "little"], hint: "It is a question.", why: "any is used in questions (answer key). “many” is also possible here." },
            { t: "fill", q: "3. She has very ____ friends who like saving money.", answer: ["few"], bank: ["some", "any", "much", "many", "few", "little"], hint: "friends is countable. very + a small number.", why: "few + countable noun: very few friends." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — much or many?", source: "extra", stage: "guided",
          instructions: "Choose much or many.", instructionsAr: "اختر much أو many.",
          items: [
            { t: "choose", q: "How ____ money do you spend every week?", options: ["much", "many"], answer: 0, why: "money is uncountable → much." },
            { t: "choose", q: "I follow ____ accounts that give saving tips.", options: ["much", "many"], answer: 1, why: "accounts is countable → many." },
            { t: "choose", q: "We don’t have ____ time before the party.", options: ["much", "many"], answer: 0, why: "time is uncountable → much." },
            { t: "choose", q: "She doesn’t have ____ plates for the guests.", options: ["much", "many"], answer: 1, why: "plates is countable → many." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — few or little? some or any?", source: "extra", stage: "guided",
          instructions: "Choose the correct quantifier.", instructionsAr: "اختر أداة الكمية الصحيحة.",
          items: [
            { t: "choose", q: "I have very ____ free time on school days.", options: ["few", "little"], answer: 1, why: "time is uncountable → little." },
            { t: "choose", q: "Very ____ students walk to school.", options: ["few", "little"], answer: 0, why: "students is countable → few." },
            { t: "choose", q: "I usually bring ____ snacks from home.", options: ["some", "any"], answer: 0, why: "Affirmative sentence → some." },
            { t: "choose", q: "We don’t have ____ cups left.", options: ["some", "any"], answer: 1, why: "Negative sentence → any." },
            { t: "choose", q: "Are there ____ snacks in the cupboard?", options: ["much", "any"], answer: 1, why: "Question + countable noun → any." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "يوجد خطأ في كلمة واحدة. اكتب الكلمة الصحيحة.",
          items: [
            { t: "fix", q: "I don’t have {many} money.", answer: ["much"], hint: "money is uncountable.", why: "much + uncountable noun." },
            { t: "fix", q: "We need {any} plates for the party.", answer: ["some"], hint: "It is an affirmative sentence.", why: "some in affirmative sentences." },
            { t: "fix", q: "Very {little} students think before spending money.", answer: ["few"], hint: "students is countable.", why: "few + countable noun." },
            { t: "fix", q: "There aren’t {some} cups left.", answer: ["any"], hint: "It is a negative sentence.", why: "any in negative sentences." },
            { t: "fix", q: "How {much} snacks do we need?", answer: ["many"], hint: "snacks is countable.", why: "How many + countable noun." },
            { t: "short", q: "Write one sentence about your shopping with a quantifier.", open: true, model: "I don’t buy many snacks.", hint: "I usually buy some … / I don’t spend much …" }
          ] },

        { type: "speak", title: "4. Work in pairs and imagine you are shopping for a graduation party or another special occasion.", page: 69, source: "book",
          instructions: "Work in pairs and imagine you are shopping for a graduation party or another special occasion. Decide what items you need to buy for the event.",
          steps: ["Use quantifiers (such as some, any, much, many, few, etc.).", "Take turns being different family members talking about what to get for the event.", "Make at least four exchanges in your conversation."],
          dialogue: [
            { who: "Sister", text: "Do we need any plates?" },
            { who: "Brother", text: "Yes, we already have some, but we don't have any cups left." },
            { who: "Sister", text: "Are there any snacks in the cupboard?" },
            { who: "Brother", text: "Yes, there are some." },
            { who: "Student A", text: "" }, { who: "Student B", text: "" },
            { who: "Student A", text: "" }, { who: "Student B", text: "" },
            { who: "Student A", text: "" }, { who: "Student B", text: "" },
            { who: "Student A", text: "" }, { who: "Student B", text: "" }
          ],
          note: "The first four lines are the example from the book. Then make your own conversation with at least four exchanges.",
          starters: ["Do we need any …?", "We already have some …", "We don’t have any … left.", "How many … do we need?", "How much … do we need?", "There are only a few …", "There is only a little …"],
          record: true }
      ],
      game: { kind: "sort", title: "Countable or Uncountable?",
        buckets: ["Countable (C) 🍎", "Uncountable (U) 💧"],
        cards: [["snacks", 0], ["offers", 0], ["accounts", 0], ["students", 0], ["plates", 0], ["cups", 0], ["money", 1], ["time", 1], ["sugar", 1], ["water", 1], ["rice", 1], ["air", 1]] },
      teacher: {
        notes: [
          "Ex. 1: read the conversation in pairs (Nora and Sara). Side task answers: much money (U), some snacks (C), any offers (C), a little time (U), many accounts (C), few students (C), some (of them) … any plans (C).",
          "Present the box: countable nouns can be counted (an apple, two apples); uncountable nouns cannot (air, rice, water).",
          "Ex. 2 answers (from the answer key): a. many, few  b. much, little  c. any  d. few, little. Point out that some and any can go with both kinds of nouns.",
          "Ex. 3 answers: 1. any  2. any  3. few.",
          "Ex. 4: pairs plan a shopping list for a graduation party. Read the book’s example (Sister / Brother), then pairs make at least four exchanges."
        ],
        pair: ["Shopping list game: A says an item; B says “How many …?” or “How much …?” correctly.", "Party role play (ex. 4): swap roles (sister, brother, mother, father)."],
        group: ["Groups write a party shopping list with a quantifier for each item (some juice, a few balloons, …)."],
        quick: [
          { q: "Is “money” countable or uncountable?", a: "Uncountable." },
          { q: "Which quantifier is used in questions and negatives?", a: "any" },
          { q: "Complete: She has very ___ friends who like saving money.", a: "few" },
          { q: "much or many: How ___ snacks do we need?", a: "many" }
        ]
      }
    },

    /* ───────────────────────── LESSON 7 — WRITING (pp. 70–71) ───────────────────────── */
    {
      id: "u4l7", num: 7, skill: "Writing", title: "Living Simply", pages: [70, 71], status: "complete",
      canDo: [
        "I can analyse how ideas are organised and developed clearly and logically in a written report about living simply.",
        "I can compose a clearly structured two-paragraph report explaining simple living and the reasons people choose it."
      ],
      linkers: ["because", "since", "for this reason", "for example", "such as", "for instance"],
      goals: ["Explain what living simply means and why people choose it.", "Sort linking words: reasons and examples.", "Plan a report with an outline.", "Write a two-paragraph report."],
      goalsAr: ["أشرح معنى العيش ببساطة ولماذا يختاره الناس.", "أصنّف أدوات الربط: للأسباب وللأمثلة.", "أخطّط لتقرير باستخدام مخطّط.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "Living Simply", image: "crops/u4l1-simple-living.jpg", emoji: "🌿", seconds: 90,
        instructions: "1. a. Discuss the following, then write your ideas.",
        prompts: ["What does \"living simply\" mean? Give examples.", "Why do some people choose to live a simple life?"]
      },
      vocab: [],
      sections: [
        { type: "write", title: "1. a. Discuss the following, then write your ideas.", page: 70, source: "book",
          instructions: "Discuss the following, then write your ideas.",
          frame: [
            { label: "What does \"living simply\" mean? Give examples.", hint: "Using fewer things …", lines: 3 },
            { label: "Why do some people choose to live a simple life?", hint: "They want …", lines: 3 }
          ],
          model: "What does \"living simply\" mean? Using fewer things and spending less money, for example, buying fewer clothes and walking more.\nWhy do some people choose to live a simple life? They want less stress and want to save money. They also want to protect the environment.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I explained what living simply means.", "I gave an example.", "I gave a reason why people choose it."],
          minWords: 20 },

        { type: "activity", title: "1. b. Sort the linking words and phrases under the right headings.", page: 70, source: "book", stage: "guided",
          instructions: "because - for example - since - such as - for instance - for this reason. Sort them under the right headings: To show reasons / To give examples.",
          instructionsAr: "صنّف أدوات الربط تحت العنوان الصحيح: لإظهار الأسباب أو لإعطاء الأمثلة.",
          items: [
            { t: "choose", q: "because", options: ["To show reasons", "To give examples"], answer: 0, why: "because shows a reason." },
            { t: "choose", q: "for example", options: ["To show reasons", "To give examples"], answer: 1, why: "for example gives an example." },
            { t: "choose", q: "since", options: ["To show reasons", "To give examples"], answer: 0, why: "since (= because) shows a reason." },
            { t: "choose", q: "such as", options: ["To show reasons", "To give examples"], answer: 1, why: "such as gives examples." },
            { t: "choose", q: "for instance", options: ["To show reasons", "To give examples"], answer: 1, why: "for instance (= for example) gives an example." },
            { t: "choose", q: "for this reason", options: ["To show reasons", "To give examples"], answer: 0, why: "for this reason shows a reason." }
          ] },

        { type: "activity", title: "2. Read the sentences below. Write R (reason) or E (example) after each one.", page: 70, source: "book", stage: "guided",
          instructions: "Read the sentences below. Write R (reason) or E (example) after each one.", instructionsAr: "اقرأ الجمل التالية واكتب R إذا كانت تذكر سببًا، أو E إذا كانت تذكر مثالًا.",
          items: [
            { t: "choose", q: "1. People live simply because they want less stress.", options: ["R (reason)", "E (example)"], answer: 0, why: "because → a reason." },
            { t: "choose", q: "2. Since it saves money, many people like simple lifestyles.", options: ["R (reason)", "E (example)"], answer: 0, why: "Since → a reason." },
            { t: "choose", q: "3. Some people avoid plastic products, such as bottles.", options: ["R (reason)", "E (example)"], answer: 1, why: "such as → an example." },
            { t: "choose", q: "4. They buy local food, for instance, fresh vegetables from the market.", options: ["R (reason)", "E (example)"], answer: 1, why: "for instance → an example." },
            { t: "choose", q: "5. Some change their lifestyle. For this reason, they feel calmer.", options: ["R (reason)", "E (example)"], answer: 0, why: "For this reason → a reason." }
          ] },

        { type: "write", title: "3. a. Complete the following outline with your ideas.", page: 71, source: "book",
          instructions: "Many people today are choosing a simpler lifestyle than what we usually see. Plan and write a two-paragraph report explaining what living simply means and why some people choose to live a simple life. Give examples to support your ideas.",
          wordBankLabel: "Linker Bank",
          wordBank: ["because", "since", "for this reason", "for example", "such as", "for instance"],
          frame: [
            { label: "Introduction", hint: "Many people today are …", lines: 2 },
            { label: "Paragraph 1 (What living simply means) — Topic sentence", hint: "Living simply means …" },
            { label: "Paragraph 1 — Supporting details", hint: "For example, … They also … Some …", lines: 3 },
            { label: "Paragraph 1 — Concluding sentence", hint: "In short, …" },
            { label: "Paragraph 2 (Why some people choose to live a simple life) — Topic sentence", hint: "People choose a simple life for …" },
            { label: "Paragraph 2 — Supporting details", hint: "First, … Since … For this reason, …", lines: 3 },
            { label: "Paragraph 2 — Concluding sentence", hint: "Therefore, …" },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Introduction: Many people today are choosing to live a simpler life.\nParagraph 1 – Topic sentence: Living simply means focusing on what is important.\nSupporting details: For example, people use fewer things and spend less. They also buy local food and avoid plastic. Some walk or ride a bike instead of driving.\nConcluding sentence: In short, living simply means making smart choices.\nParagraph 2 – Topic sentence: People choose a simple life for many reasons.\nSupporting details: First, they want less stress and a calmer mind. Since it saves money, they can invest in education. For this reason, many also want to protect the planet.\nConcluding sentence: Therefore, simple living makes life more balanced.\nConclusion: In conclusion, small steps bring us a simpler and happier life.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I wrote a topic sentence for each paragraph.", "I gave supporting details with examples and reasons.", "I wrote a concluding sentence for each paragraph.", "I used linkers from the Linker Bank."],
          minWords: 60 },

        { type: "write", title: "3. b. Use the ideas in your outline to write the report in your notebook.", page: 71, source: "book",
          instructions: "Use the ideas in your outline to write the report. Then use the Self-Assessment Checklist.",
          wordBankLabel: "Linker Bank",
          wordBank: ["because", "since", "for this reason", "for example", "such as", "for instance"],
          frame: [
            { label: "Introduction", hint: "Many people today are …", lines: 2 },
            { label: "Paragraph 1: What living simply means", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
            { label: "Paragraph 2: Why some people choose to live a simple life", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Many people today are choosing to live a simpler life.\n\nLiving simply means focusing on what is important. For example, people use fewer things and spend less. They also buy local food and avoid plastic. Some walk or ride a bike instead of driving. In short, living simply means making smart choices.\n\nPeople choose a simple life for many reasons. First, they want less stress and a calmer mind. Since it saves money, they can invest in education. For this reason, many also want to protect the planet. Therefore, simple living makes life more balanced.\n\nIn conclusion, small steps bring us a simpler and happier life.",
          modelFromBook: false, modelLabel: "Model report (the answer key’s outline written as a report – one possible answer)",
          bookChecklist: [
            "I wrote two clear paragraphs.",
            "I explained what living simply means in my own words.",
            "I gave examples to support each idea.",
            "I gave reasons to support my ideas.",
            "I explained why some people choose to live a simple life.",
            "I used linking words (such as: because, for example, since, for instance).",
            "I checked my grammar, spelling, and punctuation.",
            "I used AI tools to proofread my writing."
          ],
          bookNote: "Self-Assessment Checklist (from the book). ATTENTION: Let AI help you grow, not do the work for you.",
          minWords: 90 },

        { type: "activity", title: "Extra Practice: Choose the linker", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a linker from the Linker Bank.", instructionsAr: "أكمل كل جملة بأداة ربط من بنك أدوات الربط.",
          items: [
            { t: "fill", q: "I walk to school ____ it is good for my health.", answer: ["because", "since"], bank: ["because", "for example", "such as", "for this reason"], why: "because gives a reason. (since is also correct.)" },
            { t: "fill", q: "We recycle many things, ____ paper, glass and plastic.", answer: ["such as"], bank: ["because", "for example", "such as", "for this reason"], why: "such as gives examples (before a list of nouns)." },
            { t: "fill", q: "Simple living saves money. ____, many families like it.", answer: ["For this reason"], bank: ["because", "for example", "such as", "for this reason"], why: "For this reason shows a result of the reason before it." },
            { t: "fill", q: "You can live simply in many ways. ____, you can cook at home.", answer: ["For example", "For instance"], bank: ["because", "for example", "such as", "for this reason"], why: "For example gives an example. (For instance is also correct.)" }
          ] }
      ],
      game: { kind: "sort", title: "Reason or Example?",
        buckets: ["To show reasons 💡", "To give examples 📝"],
        cards: [["because", 0], ["since", 0], ["for this reason", 0], ["for example", 1], ["such as", 1], ["for instance", 1]] },
      teacher: {
        notes: [
          "Ex. 1a: pairs discuss the two questions and write ideas. Sample from the answer key: Using fewer things and spending less money, for example, buying fewer clothes and walking more. / They want less stress and want to save money. They also want to protect the environment.",
          "Ex. 1b answers: To show reasons: because, since, for this reason. To give examples: for example, such as, for instance.",
          "Ex. 2 answers: 1. R  2. R  3. E  4. E  5. R.",
          "Ex. 3a: complete the outline (introduction, two paragraphs with topic sentence, supporting details and concluding sentence, conclusion). The answer key’s outline is the model.",
          "Ex. 3b: write the report in the notebook and use the Self-Assessment Checklist. Talk about the ATTENTION note: Let AI help you grow, not do the work for you."
        ],
        pair: ["A says a linker; B says “reason” or “example” and makes a sentence with it.", "Partners swap reports and tick the Self-Assessment Checklist for each other."],
        group: ["Groups write one paragraph together: “Why people choose a simple life”, using three linkers from the bank."],
        quick: [
          { q: "Name two linkers that show reasons.", a: "because, since, for this reason (any two)." },
          { q: "Name two linkers that give examples.", a: "for example, such as, for instance (any two)." },
          { q: "R or E: Some people avoid plastic products, such as bottles.", a: "E" },
          { q: "How many paragraphs does the report have (not counting the introduction and conclusion)?", a: "Two." }
        ]
      }
    }
  ]
});

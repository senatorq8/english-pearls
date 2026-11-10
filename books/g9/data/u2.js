// Learning Unit 2 — Staying Safe Online (printed pages 31, 34–43)
// Source: Grade 9 Student’s Book (new edition, First Term). The book’s answers (blue handwriting in the source)
// are used only as the answer key and as model answers; they are never shown as book text.
// Everything marked source: "extra" is not in the book.
BOOK.addUnit({
  id: "u2", num: 2, title: "Staying Safe Online", titleAr: "الأمان على الإنترنت",
  pages: [31, 43], cover: 31,
  status: "complete",
  lessons: [

    /* ───────────────────────── LESSON 1 — READING (pp. 34–35) ───────────────────────── */
    {
      id: "u2l1", num: 1, skill: "Reading", title: "Online Risks: The Story of a Digital Scam", pages: [34, 35], status: "complete",
      canDo: [
        "I can analyse both implicit and explicit details from a narrative text about online risks.",
        "I can use contextual clues to infer meaning of unfamiliar vocabulary in a text about online risks."
      ],
      goals: ["Read a story about a digital scam.", "Learn 13 new words.", "Find the main idea and words with the same meaning.", "Decide which actions are safe or unsafe online."],
      goalsAr: ["أقرأ قصة عن عملية احتيال رقمية.", "أتعلّم 13 كلمة جديدة.", "أجد الفكرة الرئيسية وكلمات لها المعنى نفسه.", "أحدّد أيّ التصرفات آمنة وأيّها غير آمنة على الإنترنت."],
      warmup: {
        title: "Before You Read", image: "crops/u2l1-phone.jpg", emoji: "📱", seconds: 90,
        instructions: "1. Read the message on the phone screen, then discuss the questions with a partner.",
        prompts: ["a. Would you trust this message? Why or why not?", "b. What makes you think this message is fake?", "c. Why do people sometimes believe such messages?"]
      },
      vocab: [
        { w: "casually", pos: "adverb", emoji: "😎", def: "in a relaxed way, without thinking carefully", ex: "Last Friday, Ahmed was casually scrolling through his phone when he received an unexpected message.", exFromBook: true, ar: "بشكل عفوي / دون تركيز" },
        { w: "claim", pos: "verb", emoji: "📢", def: "to say that something is true, although it may not be", ex: "It claimed he had won a brand-new smartphone and asked him to click on a link to get his prize.", exFromBook: true, ar: "يدّعي / يزعم" },
        { w: "reject", pos: "verb", emoji: "❌", def: "to refuse to accept something", ex: "That evening, when he attempted to log in to his social media account, his password was rejected.", exFromBook: true, ar: "يرفض" },
        { w: "fake", pos: "adjective", emoji: "🎭", def: "not real; made to trick people", ex: "At that moment, Ahmed realised that the link he had trusted earlier was fake.", exFromBook: true, ar: "مزيّف" },
        { w: "uneasy", pos: "adjective", emoji: "😟", def: "worried and not comfortable", ex: "He began to feel uneasy.", exFromBook: true, ar: "قَلِق / غير مرتاح" },
        { w: "access", pos: "noun", emoji: "🔑", def: "the chance or the right to use or enter something", ex: "If someone got access to your personal accounts, they would misuse your information.", exFromBook: true, ar: "الوصول / إمكانية الدخول" },
        { w: "update", pos: "verb", emoji: "🔄", def: "to change something to make it new or more modern", ex: "He updated all his passwords, installed antivirus software, and reported the problem to the company’s IT department.", exFromBook: true, ar: "يحدّث" },
        { w: "install", pos: "verb", emoji: "💿", def: "to put a program on a computer or phone so that you can use it", ex: "He updated all his passwords, installed antivirus software, and reported the problem to the company’s IT department.", exFromBook: true, ar: "يثبّت (برنامجًا)" },
        { w: "phishing", pos: "noun", emoji: "🎣", def: "tricking people online to get their passwords or personal information", ex: "They told him that the link was part of a phishing scam designed to trick students across the school.", exFromBook: true, ar: "التصيّد الإلكتروني" },
        { w: "scam", pos: "noun", emoji: "🚨", def: "a dishonest plan to trick people and take their money or information", ex: "They told him that the link was part of a phishing scam designed to trick students across the school.", exFromBook: true, ar: "عملية احتيال / نصب" },
        { w: "seriously", pos: "adverb", emoji: "🧐", def: "in a careful way, because something is important", ex: "Since then, Ahmed has taken his online safety more seriously.", exFromBook: true, ar: "بجدّية" },
        { w: "security", pos: "noun", emoji: "🛡️", def: "protection from danger or attack", ex: "He no longer clicks on strange links, regularly checks website security, and stays cautious when sharing personal information.", exFromBook: true, ar: "الأمان / الحماية" },
        { w: "cautious", pos: "adjective", emoji: "⚠️", def: "careful to avoid danger or problems", ex: "He no longer clicks on strange links, regularly checks website security, and stays cautious when sharing personal information.", exFromBook: true, ar: "حَذِر" }
      ],
      sections: [
        { type: "reading", title: "Online Risks: The Story of a Digital Scam", page: 34,
          instructions: "Read the passage and do the tasks that follow.",
          paras: [
            "Last Friday, Ahmed was casually scrolling through his phone when he received an unexpected message. It claimed he had won a brand-new smartphone and asked him to click on a link to get his prize. The message looked real and even used the logo of a well-known company. Ahmed looked at the message and thought to himself, “If people receive a similar message, they will feel curious enough to open it, just like I did.” The link took him to a website that appeared real. It requested his name, email, and password. Ahmed quickly entered his details and continued with his day, feeling certain everything was fine.",
            "That evening, when he attempted to log in to his social media account, his password was rejected. He tried several times, but the screen continued to show “Incorrect password.” At that moment, Ahmed realised that the link he had trusted earlier was fake. He began to feel uneasy. Later, when he understood what had happened, Ahmed thought, “If someone got access to your personal accounts, they would misuse your information.”",
            "Ahmed started acting immediately. He updated all his passwords, installed antivirus software, and reported the problem to the company’s IT department. They told him that the link was part of a phishing scam designed to trick students across the school.",
            "Since then, Ahmed has taken his online safety more seriously. He no longer clicks on strange links, regularly checks website security, and stays cautious when sharing personal information. As a result of this experience, he thought, “If people think before they act online, they will reduce the risk of being attacked.”"
          ],
          speaker: null,
          note: "Text type: Narrative. The words in bold in the book are the lesson’s vocabulary." },

        { type: "activity", title: "2. Which statement best describes the main idea of the story?", page: 35, source: "book",
          instructions: "Which statement best describes the main idea of the story?", instructionsAr: "أيّ جملة تصف الفكرة الرئيسية للقصة على أفضل وجه؟",
          items: [
            { t: "mcq", q: "Which statement best describes the main idea of the story?", options: ["A student forgets his phone at school.", "A teenager wins an online prize.", "A boy clicks on a fake link and learns a valuable lesson.", "A student works on a school project about digital technology."], answer: 2,
              hint: "Think about the whole story: what happened to Ahmed, and how did he change at the end?",
              why: "Ahmed clicks on a fake link, loses his password and learns to be careful online. He does not really win a prize." }
          ] },

        { type: "activity", title: "3. Find words in the passage that mean:", page: 35, source: "book",
          instructions: "Find words in the passage that mean:", instructionsAr: "ابحث في النص عن كلمات تحمل المعاني التالية.",
          items: [
            { t: "fill", q: "1. worried → ____ (paragraph 2)", answer: ["uneasy"], hint: "“He began to feel ____.”", why: "“He began to feel uneasy.” uneasy = worried." },
            { t: "fill", q: "2. renew → ____ (paragraph 3)", answer: ["update", "updated"], hint: "What did Ahmed do to all his passwords?", why: "“He updated all his passwords …” update = renew." },
            { t: "fill", q: "3. safety → ____ (paragraph 4)", answer: ["security"], hint: "“… regularly checks website ____ …”", why: "“… regularly checks website security …” security = safety." }
          ] },

        { type: "activity", title: "4. Choose one emoji that shows how Ahmed feels in each part of the event, then explain your choice.", page: 35, source: "book",
          instructions: "Choose one emoji that shows how Ahmed feels in each part of the event, then explain your choice.", instructionsAr: "اختر وجهًا تعبيريًا واحدًا يبيّن شعور أحمد في كل جزء من الحدث، ثم اشرح سبب اختيارك.",
          items: [
            { t: "mcq", q: "Ahmed receives a message claiming he has won a new mobile phone.", options: ["😃", "😲", "❓"], answer: 1,
              hint: "The message was unexpected. How do you feel when you get a big prize you did not expect?",
              why: "😲: he is surprised by the prize. The message was unexpected." },
            { t: "mcq", q: "His password stops working.", options: ["😫", "😎", "😃"], answer: 0,
              hint: "Paragraph 2: “He began to feel uneasy.”", why: "😫: he is worried he can’t log in." },
            { t: "mcq", q: "He reports the scam to the IT department", options: ["😃", "😠", "👍"], answer: 2,
              hint: "Was reporting the scam a good idea?", why: "👍: he did the right thing." },
            { t: "short", open: true, q: "Why? Explain your choice for each part.", model: "1. He is surprised by the prize. 2. He is worried he can’t log in. 3. He did the right thing.", hint: "He is … because … / He did …" }
          ] },

        { type: "activity", title: "5. a. Cyber Safety Detective – What Did Ahmed Do?", page: 35, source: "book",
          instructions: "Scan Ahmed’s story. Fill in the table below with Ahmed’s actions in order. Decide if each action is SAFE or UNSAFE for cyber safety. Explain your answer by giving clues from the story.",
          instructionsAr: "اقرأ قصة أحمد بسرعة، واكتب في الجدول تصرفاته بالترتيب. حدّد هل كل تصرف آمن (SAFE) أو غير آمن (UNSAFE)، واشرح إجابتك بأدلة من القصة.",
          image: "crops/u2l1-detective.jpg",
          items: [
            { t: "table", q: "Ahmed’s actions in order. Row 1 is done for you.",
              head: ["", "Ahmed’s Actions", "Safe / Unsafe", "Why? (Clues from the story)"],
              rows: [
                ["1.", "Ahmed opened the message from an unknown sender.", "Unsafe", "The message was unexpected and from an unknown source."],
                ["2.", { model: "He clicked on the link." }, { answer: ["Unsafe"], model: "Unsafe" }, { model: "It was a fake website." }],
                ["3.", { model: "He entered his password." }, { answer: ["Unsafe"], model: "Unsafe" }, { model: "He gave his details to a scam." }],
                ["4.", { model: "He updated his passwords." }, { answer: ["Safe"], model: "Safe" }, { model: "It protected his accounts." }],
                ["5.", { model: "He reported it to IT." }, { answer: ["Safe"], model: "Safe" }, { model: "The IT team warned others." }]
              ],
              hint: "Rows 2 and 3 happen before Ahmed knows about the scam. Rows 4 and 5 happen after he finds out.",
              why: "2. He clicked on the link – Unsafe – it was a fake website. 3. He entered his password – Unsafe – he gave his details to a scam. 4. He updated his passwords – Safe – it protected his accounts. 5. He reported it to IT – Safe – the IT team warned others.",
              note: "Only “Safe / Unsafe” is checked. Compare your actions and clues with the suggested answers. (Installing antivirus software is also a safe action from the story.)" }
          ] },

        { type: "activity", title: "5. b. What did you learn from Ahmed’s story?", page: 35, source: "book",
          instructions: "What did you learn from Ahmed’s story?", instructionsAr: "ماذا تعلّمت من قصة أحمد؟",
          items: [
            { t: "short", open: true, q: "b. What did you learn from Ahmed’s story?", model: "Think before you click on any link.", hint: "I learned that … / We should never …" }
          ] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the story.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالقصة.",
          items: [
            { t: "mcq", q: "The message used the logo of a well-known company.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“The message looked real and even used the logo of a well-known company.”" },
            { t: "mcq", q: "The website asked for Ahmed’s name, email and password.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“It requested his name, email, and password.”" },
            { t: "mcq", q: "Ahmed’s password worked the same evening.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "His password was rejected: the screen showed “Incorrect password.”" },
            { t: "mcq", q: "Ahmed installed antivirus software.", options: ["True", "False"], answer: 0, hint: "Paragraph 3.", why: "“He updated all his passwords, installed antivirus software …”" },
            { t: "mcq", q: "The scam was designed to trick teachers only.", options: ["True", "False"], answer: 1, hint: "Paragraph 3, last sentence.", why: "It was designed to trick students across the school." },
            { t: "mcq", q: "Now Ahmed still clicks on strange links.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "“He no longer clicks on strange links.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
          items: [
            { t: "fill", q: "Don’t open that email. It is a ____ to steal your money.", answer: ["scam"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "scam = a dishonest plan to trick people." },
            { t: "fill", q: "This is not a real bank website. It is ____.", answer: ["fake"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "fake = not real." },
            { t: "fill", q: "You should ____ antivirus software on your laptop.", answer: ["install"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "install = put a program on a computer." },
            { t: "fill", q: "Be ____ when you share photos online.", answer: ["cautious"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "cautious = careful." },
            { t: "fill", q: "Only my parents have ____ to my email account.", answer: ["access"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "access = the chance or the right to use something." },
            { t: "fill", q: "My password was wrong, so the website ____ it.", answer: ["rejected"], bank: ["scam", "fake", "install", "cautious", "access", "rejected"], why: "reject = refuse to accept." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): show the phone message (“Congratulations! You have won a 1000 Dinar gift card. Claim Now”). Pairs answer a–c.",
          "Pre-teach the 13 words (casually, claim, reject, fake, uneasy, access, update, install, phishing, scam, seriously, security, cautious). They are bold in the passage.",
          "Read the story paragraph by paragraph. Ask: What did Ahmed do wrong? What did he do right?",
          "Ex. 2: c. Ex. 3: uneasy, update(d), security.",
          "Ex. 4 (answer key): 😲 He is surprised by the prize. 😫 He is worried he can’t log in. 👍 He did the right thing. The app accepts only the answer key; in class you may accept another emoji for row 1 if the student explains it well (e.g. ❓ he felt curious, 😃 he thought he had won).",
          "Ex. 5a (answer key): 2. He clicked on the link – Unsafe. 3. He entered his password – Unsafe. 4. He updated his passwords – Safe. 5. He reported it to IT – Safe. Ex. 5b: open (e.g. Think before you click on any link)."
        ],
        pair: ["Ex. 1: pairs discuss the phone message.", "A reads one of Ahmed’s actions; B says “Safe” or “Unsafe” and gives a clue from the story."],
        group: ["Cyber Safety Detectives (ex. 5): groups complete the table, then make a “Think before you click” poster."],
        quick: [
          { q: "What did the message claim?", a: "That Ahmed had won a brand-new smartphone." },
          { q: "Find a word in paragraph 2 that means “worried”.", a: "uneasy" },
          { q: "Was clicking on the link safe or unsafe? Why?", a: "Unsafe. It was a fake website." },
          { q: "Name two things Ahmed did after the scam.", a: "He updated his passwords, installed antivirus software and reported the problem to IT." }
        ]
      }
    },

    /* ───────────────────────── LESSON 2 — GRAMMAR (p. 36) ───────────────────────── */
    {
      id: "u2l2", num: 2, skill: "Grammar", title: "Conditionals: First & Second", pages: [36], status: "complete",
      canDo: [
        "I can distinguish between real and hypothetical situations clearly and precisely in conditional sentences about digital risks.",
        "I can use first and second conditional sentences correctly to describe real and hypothetical situations in both written and spoken contexts."
      ],
      goals: ["Find the “if” sentences in Ahmed’s story.", "Tell real situations from imaginary ones.", "Use the first and second conditionals.", "Ask and answer “What will happen if …?” and “What would you do if …?”."],
      goalsAr: ["أجد جمل if في قصة أحمد.", "أميّز بين المواقف الحقيقية والمواقف الخيالية.", "أستخدم الجملة الشرطية من النوع الأول والثاني.", "أسأل وأجيب: What will happen if …? و What would you do if …?"],
      warmup: {
        title: "Grammar in context", image: "crops/u2l1-phone.jpg", emoji: "📱", seconds: 60, source: "extra",
        instructions: "Look at the message again. Talk with your partner.",
        prompts: ["What will happen if you click on “Claim Now”?", "What would you do if you received this message?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Conditionals: First & Second", page: 36,
          steps: [
            { title: "First Conditional (Type 1)",
              text: "Real / possible situation; advice or prediction (First Conditional). Form: Type 1: If + present simple → will + bare infinitive.",
              textAr: "الجملة الشرطية من النوع الأول: لموقف حقيقي أو ممكن، أو للنصيحة أو التوقّع. التركيب: If + المضارع البسيط، ثم will + الفعل في صورته الأصلية.",
              examples: ["{c:If} {s:people} {v:think} before they act online, {s:they} {a:will} {v:reduce} the risk of being attacked."] },
            { title: "Second Conditional (Type 2)",
              text: "Imaginary / untrue situation, advice (Second Conditional). Form: Type 2: If + past simple → would + bare infinitive.",
              textAr: "الجملة الشرطية من النوع الثاني: لموقف خيالي أو غير حقيقي، أو للنصيحة. التركيب: If + الماضي البسيط، ثم would + الفعل في صورته الأصلية.",
              examples: ["{c:If} {s:someone} {v:got} access to your personal accounts, {s:they} {a:would} {v:misuse} your account information.", "{c:If} {s:I} {v:were} you, {s:I} {n:wouldn’t} {v:click} on the link."] },
            { title: "Giving advice: If I were you, …", source: "extra",
              text: "In the second conditional we use were with I, he, she and it, too. “If I were you, I would …” is a polite way to give advice.",
              textAr: "في النوع الثاني نستخدم were مع I و he و she و it أيضًا. وعبارة If I were you, I would … طريقة مهذّبة لتقديم النصيحة.",
              examples: ["{c:If} {s:I} {v:were} Ahmed, {s:I} {a:would} {v:tell} the IT department immediately.", "{c:If} {s:the website} {v:were} real, {s:people} {a:would} {v:trust} it."] },
            { title: "Which clause comes first?", source: "extra",
              text: "The if-clause can come first or second. When it comes first, put a comma after it. When it comes second, we do not use a comma.",
              textAr: "يمكن أن تأتي جملة if أولًا أو ثانيًا. إذا جاءت أولًا نضع بعدها فاصلة، وإذا جاءت ثانيًا لا نضع فاصلة.",
              examples: ["{c:If} {s:he} {v:clicks} on the link, {s:he} {a:will} {v:get} a fake message.", "{s:He} {a:will} {v:get} a fake message {c:if} {s:he} {v:clicks} on the link."] }
          ],
          table: {
            head: ["Form", "if-clause", "main clause"],
            rows: [
              ["Type 1", "If + present simple", "will + bare infinitive"],
              ["Type 2", "If + past simple", "would + bare infinitive"]
            ]
          },
          worked: {
            q: "Complete: If you ______ (update) your passwords, hackers won’t get into your accounts.",
            steps: ["Look at the main clause: won’t (= will not) get → this is a real / possible situation.", "Type 1: If + present simple.", "you → update (no -s)."],
            a: "{c:If} {s:you} {v:update} your passwords, {s:hackers} {n:won’t} {v:get} into your accounts."
          },
          notes: ["The book shows the form with arrows: Type 1: If + present simple → will + bare infinitive. Type 2: If + past simple → would + bare infinitive."] },

        { type: "activity", title: "1. Read Ahmed’s story again. Underline all the sentences that use “if”.", page: 36, source: "book", stage: "guided",
          instructions: "Read Ahmed’s story again. Underline all the sentences that use “if”. Example: If people receive a similar message, they will feel curious to open it.",
          instructionsAr: "اقرأ قصة أحمد مرة أخرى، وضع خطًّا تحت كل الجمل التي فيها if. المثال محلول.",
          items: [
            { t: "short", q: "Example: If people receive a similar message, they will feel curious to open it.\n\nWrite the other sentences from the story that use “if”.",
              model: "If someone got access to your personal accounts, they would misuse your information. / If people think before they act online, they will reduce the risk of being attacked.",
              keywords: [["misuse"], ["reduce"]],
              hint: "Look at what Ahmed thought in paragraph 2 and in paragraph 4." }
          ] },

        { type: "activity", title: "2. Match each sentence to its function.", page: 36, source: "book", stage: "guided",
          instructions: "Match each sentence to its function: A or B.", instructionsAr: "صِل كل جملة بوظيفتها: A أو B.",
          items: [
            { t: "mcq", q: "1. If people think before they act online, they will reduce the risk of being attacked.", options: ["A. Imaginary / untrue situation, advice (Second Conditional)", "B. Real / possible situation; advice or prediction (First Conditional)"], answer: 1,
              hint: "Look at the verbs: think … will reduce.", why: "If + present simple (think) → will + bare infinitive (reduce): a real / possible situation." },
            { t: "mcq", q: "2. If someone got access to your personal accounts, they would misuse your account information.", options: ["A. Imaginary / untrue situation, advice (Second Conditional)", "B. Real / possible situation; advice or prediction (First Conditional)"], answer: 0,
              hint: "Look at the verbs: got … would misuse.", why: "If + past simple (got) → would + bare infinitive (misuse): an imaginary situation." },
            { t: "mcq", q: "3. If I were you, I wouldn’t click on the link.", options: ["A. Imaginary / untrue situation, advice (Second Conditional)", "B. Real / possible situation; advice or prediction (First Conditional)"], answer: 0,
              hint: "Can I really be you?", why: "I can’t be you, so it is untrue. “If I were you, I wouldn’t …” gives advice: second conditional." }
          ] },

        { type: "activity", title: "3. Correct the verb between brackets.", page: 36, source: "book", stage: "guided",
          instructions: "Correct the verb between brackets.", instructionsAr: "اكتب الفعل الذي بين القوسين بالصيغة الصحيحة.",
          items: [
            { t: "fill", q: "1. If Ahmed clicks on the link, he ____ (get) a fake message.", answer: ["will get"], hint: "clicks = present simple → Type 1.", why: "Type 1: If + present simple → will + bare infinitive: will get." },
            { t: "fill", q: "2. If the website ____ (be) real, people would trust it.", answer: ["were", "was"], hint: "would trust → Type 2. What is the past of be?", why: "Type 2: If + past simple → would. In the second conditional we use were (some people also say “was” in informal English)." },
            { t: "fill", q: "3. If I were Ahmed, I ____ (tell) the IT department immediately.", answer: ["would tell"], hint: "If I were … → Type 2.", why: "Type 2: If + past simple (were) → would + bare infinitive: would tell." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Type 1 or Type 2?", source: "extra", stage: "guided",
          instructions: "Choose the correct words.", instructionsAr: "اختر الكلمات الصحيحة.",
          items: [
            { t: "choose", q: "If you share your password, someone ____ into your account.", options: ["will get", "would get"], answer: 0, why: "share = present simple → will get (Type 1)." },
            { t: "choose", q: "If I ____ a hacker, I would never steal people’s data.", options: ["am", "were"], answer: 1, why: "Imaginary situation → Type 2: If I were …" },
            { t: "choose", q: "If she ____ on that link, she will lose her password.", options: ["clicks", "clicked"], answer: 0, why: "will lose → Type 1: If + present simple." },
            { t: "choose", q: "If we had more time, we ____ a new app.", options: ["will make", "would make"], answer: 1, why: "had = past simple → would make (Type 2)." },
            { t: "choose", q: "If they ____ strong passwords, their accounts will be safe.", options: ["use", "used"], answer: 0, why: "will be → Type 1: If + present simple." },
            { t: "choose", q: "If I were you, I ____ my personal information online.", options: ["won’t share", "wouldn’t share"], answer: 1, why: "If I were you → wouldn’t + bare infinitive." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "🔐 Make a Type 1 sentence.", words: ["If", "you", "update", "your", "apps,", "your", "phone", "will", "be", "safer."], answer: ["If you update your apps, your phone will be safer."], hint: "If + present simple, … will …", why: "If + present simple (update) → will be." },
            { t: "order", q: "💭 Make a Type 2 sentence.", words: ["If", "I", "were", "you,", "I", "would", "report", "the", "message."], answer: ["If I were you, I would report the message."], hint: "Start with “If I were you,”.", why: "If + were → would + bare infinitive." },
            { t: "order", q: "❓ Make a question.", words: ["What", "would", "you", "do", "if", "you", "were", "him?"], answer: ["What would you do if you were him?"], hint: "What + would + you + do …?", why: "What would you do if you were him? (Type 2 question)" },
            { t: "order", q: "❓ Make a question.", words: ["What", "will", "happen", "if", "he", "misses", "the", "bus?"], answer: ["What will happen if he misses the bus?"], hint: "What + will + happen + if …?", why: "What will happen if he misses the bus? (Type 1 question)" }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct words.", instructionsAr: "يوجد خطأ واحد. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "If Ahmed {will click} on the link, he will get a fake message.", answer: ["clicks"], hint: "We don’t use will in the if-clause.", why: "If + present simple: If Ahmed clicks …" },
            { t: "fix", q: "If I were you, I {will tell} the IT teacher.", answer: ["would tell"], hint: "If I were you → Type 2.", why: "Type 2: would + bare infinitive: would tell." },
            { t: "fix", q: "If someone got your password, they {will} misuse your information.", answer: ["would"], hint: "got = past simple.", why: "If + past simple → would." },
            { t: "fix", q: "If people think before they act online, they will {reduces} the risk.", answer: ["reduce"], hint: "After will we use the bare infinitive.", why: "will + bare infinitive: will reduce." },
            { t: "short", q: "Give advice to a friend who shares his password with everyone. Start with “If I were you, …”.", open: true, model: "If I were you, I wouldn’t share my password with anyone.", hint: "If I were you, I would / wouldn’t …" }
          ] },

        { type: "speak", title: "4. Look at the pictures. Ask and answer questions using the first and second conditionals.", page: 36, source: "book",
          image: "crops/u2l2-pictures.jpg",
          instructions: "Look at the pictures. Ask and answer questions using the first and second conditionals. What will happen if he…? What would you do if you were him?",
          steps: ["eats fast food", "doesn’t sleep", "misses the bus", "has a cold"],
          dialogue: [
            { who: "A", text: "What will happen if he eats too much fast food?" }, { who: "B", text: "If he eats too much fast food, he will have health problems." },
            { who: "A", text: "What would you do if you were him?" }, { who: "B", text: "If I were him, I would eat more vegetables." },
            { who: "A", text: "What will happen if he…?" }, { who: "B", text: "" },
            { who: "A", text: "What would you do if you were him?" }, { who: "B", text: "" }
          ],
          note: "The first four lines are the book’s example. Then talk about the other pictures: doesn’t sleep, misses the bus, has a cold.",
          starters: ["What will happen if he…?", "If he …, he will …", "What would you do if you were him?", "If I were him, I would …"],
          record: true }
      ],
      game: { kind: "quiz", title: "If … Race", items: [
        { t: "choose", q: "If you click on a fake link, you ____ your password.", options: ["will lose", "would lose"], answer: 0, why: "click = present simple → will (Type 1)." },
        { t: "choose", q: "If I ____ you, I would call the IT teacher.", options: ["am", "were"], answer: 1, why: "If I were you … (Type 2)." },
        { t: "choose", q: "If he ____ more, he will feel better.", options: ["sleeps", "slept"], answer: 0, why: "will feel → If + present simple." },
        { t: "choose", q: "If she had a cold, she ____ at home.", options: ["will stay", "would stay"], answer: 1, why: "had = past simple → would stay." },
        { t: "choose", q: "Type 1 talks about a ____ situation.", options: ["real / possible", "imaginary / untrue"], answer: 0, why: "Type 1 = real / possible situation." },
        { t: "choose", q: "Type 2 talks about an ____ situation.", options: ["real / possible", "imaginary / untrue"], answer: 1, why: "Type 2 = imaginary / untrue situation." }
      ] },
      teacher: {
        notes: [
          "Ex. 1: students find the three “if” sentences in Ahmed’s story (the example plus: If someone got access to your personal accounts, they would misuse your information. / If people think before they act online, they will reduce the risk of being attacked.). The book’s example leaves out “enough” (the story says “curious enough to open it”).",
          "Ex. 2 answers: 1 B, 2 A, 3 A. Present the Form box: Type 1: If + present simple → will + bare infinitive. Type 2: If + past simple → would + bare infinitive.",
          "Ex. 3 answers: 1. will get  2. were  3. would tell.",
          "Ex. 4: pairs use the four pictures (eats fast food, doesn’t sleep, misses the bus, has a cold) with “What will happen if he…?” and “What would you do if you were him?”."
        ],
        pair: ["Ex. 4: A asks the two questions about one picture, B answers; then swap.", "“If I were you…” chain: A says a problem, B gives advice with If I were you, I would…"],
        group: ["Groups write three Type 1 warnings and three Type 2 pieces of advice for a “Stay Safe Online” poster."],
        quick: [
          { q: "Complete: If Ahmed clicks on the link, he ___ (get) a fake message.", a: "will get" },
          { q: "Complete: If I ___ (be) Ahmed, I would tell the IT department.", a: "were" },
          { q: "Which type is for an imaginary situation?", a: "Type 2 (second conditional): If + past simple → would + bare infinitive." },
          { q: "Answer: What will happen if he misses the bus?", a: "e.g. If he misses the bus, he will be late for school." }
        ]
      }
    },

    /* ───────────────────────── LESSON 3 — LISTENING (p. 37) ───────────────────────── */
    {
      id: "u2l3", num: 3, skill: "Listening", title: "Staying Safe on Social Media", pages: [37], status: "complete",
      canDo: [
        "I can determine implicit and explicit details from a spoken text about online safety.",
        "I can infer the tone and attitude of speakers in spoken interactions using evidence from the spoken text."
      ],
      goals: ["Talk about how I use social media.", "Listen for the main idea and details.", "Find the tone of the speakers.", "Design a safe social media profile."],
      goalsAr: ["أتحدّث عن استخدامي لوسائل التواصل الاجتماعي.", "أستمع لأحدّد الفكرة الرئيسية والتفاصيل.", "أتعرّف على نبرة المتحدّثين.", "أصمّم ملفًّا شخصيًّا آمنًا على وسائل التواصل."],
      warmup: {
        title: "Before You Listen", image: "crops/u2l3-social.jpg", emoji: "📲", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["a. Do you use social media every day?", "b. What do you and your friends usually post online?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to the conversation between Ali and Ahmed, then choose the best answer.", page: 37, source: "book",
          track: "2.1", needsAudio: true,
          instructions: "Listen to the conversation between Ali and Ahmed, then choose the best answer. Remember: Tone is the attitude of the speaker. We can identify it by listening carefully to the speaker’s word choice.",
          items: [
            { t: "mcq", keyed: true, q: "1. The conversation was mainly about:", options: ["taking photos with friends and family members.", "the dangers of posting personal information online.", "the best ways to make new friends on social media.", "creating a popular social media account."], answer: 1,
              hint: "Look at the lesson title: Staying Safe on Social Media.", why: "Answer key: b. the dangers of posting personal information online." },
            { t: "mcq", keyed: true, q: "2. According to the conversation, it is risky to share your travel plans online because:", options: ["your friends may visit you.", "strangers could travel with you.", "this can lead to problems such as bullying.", "someone might break into your house."], answer: 3,
              hint: "If people know you are away, what could happen to your empty house?", why: "Answer key: d. someone might break into your house." },
            { t: "mcq", keyed: true, q: "3. The tone of the speakers could be described as:", options: ["friendly", "worried", "excited", "relaxed"], answer: 1,
              hint: "Tone is the attitude of the speaker. They are talking about dangers.", why: "Answer key: b. worried." }
          ] },

        { type: "listen", title: "3. Listen again to answer the questions.", page: 37, source: "book",
          track: "2.1", needsAudio: true,
          instructions: "Listen again to answer the questions. Then compare with the suggested answer.",
          items: [
            { t: "short", keyed: true, open: true, q: "a. What information did Sami share online that could cause problems?", model: "His plans and number." },
            { t: "short", keyed: true, open: true, q: "b. How could someone use Sami’s information to cause problems?", model: "Break in or scam him." }
          ] },

        { type: "write", title: "4. Help Sami design a safe social media profile.", page: 37, source: "book",
          instructions: "a. Decide what information is suitable to share and what should be private.",
          frame: [
            { label: "Share", hint: "Share: my first name, …", lines: 2 },
            { label: "Private", hint: "Private: my phone number, …", lines: 2 },
            { label: "My account", hint: "I keep my account …" }
          ],
          model: "Share: my first name, my hobbies and my favourite food.\nShare: photos of nature and my school projects.\nPrivate: my phone number, my address and my password.\nPrivate: my location, my travel plans and my house.\nI keep my account private and only accept friends.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I wrote what is safe to share.", "I wrote what must stay private.", "I did not share any real personal information."],
          minWords: 20 },

        { type: "speak", title: "4. b. Present your profile to the class.", page: 37, source: "book",
          instructions: "Present your profile to the class.",
          dialogue: [{ who: "You", text: "" }],
          starters: ["On my profile, I share …", "I keep … private because …", "I only accept …", "If someone knows …, they could …"],
          record: true },

        { type: "activity", title: "Extra Practice: Share or keep private?", source: "extra", stage: "guided",
          instructions: "Read each piece of information. Is it safe to share, or should it be private?", instructionsAr: "اقرأ كل معلومة: هل يمكن مشاركتها بأمان، أم يجب أن تبقى خاصة؟",
          items: [
            { t: "mcq", q: "my favourite food", options: ["Share", "Private"], answer: 0, why: "It does not help a stranger find you or your accounts." },
            { t: "mcq", q: "my password", options: ["Share", "Private"], answer: 1, why: "Never share your password with anyone." },
            { t: "mcq", q: "our travel plans for next week", options: ["Share", "Private"], answer: 1, why: "Someone could break into your house while you are away." },
            { t: "mcq", q: "a photo of my school project", options: ["Share", "Private"], answer: 0, why: "A school project is safe to share." },
            { t: "mcq", q: "my home address", options: ["Share", "Private"], answer: 1, why: "Strangers could find your house." },
            { t: "mcq", q: "my phone number", options: ["Share", "Private"], answer: 1, why: "Scammers could call or message you." }
          ] }
      ],
      game: { kind: "sort", title: "Share or Private?",
        buckets: ["Share 👍", "Private 🔒"],
        cards: [["my first name", 0], ["my hobbies", 0], ["photos of nature", 0], ["my school projects", 0], ["my phone number", 1], ["my address", 1], ["my password", 1], ["my location", 1], ["my travel plans", 1]] },
      teacher: {
        notes: [
          "Before You Listen (ex. 1): pairs discuss a–b with the social media icons.",
          "The recording is not in this app: play it from the book (track 2.1, QR code on page 37).",
          "Ex. 2 (answer key): 1 b (the dangers of posting personal information online). 2 d (someone might break into your house). 3 b (worried). Read the Remember box about tone first.",
          "Ex. 3 (answer key): a. His plans and number. b. Break in or scam him. Note: exercise 2 names Ali and Ahmed, and exercise 3 asks about Sami; check the names with the recording.",
          "Ex. 4 (sample from the answer key): Share: my first name, hobbies, favourite food, photos of nature and school projects. Private: phone number, address, password, location, travel plans. Keep the account private and only accept friends."
        ],
        pair: ["A says a piece of information; B says “Share” or “Private” and why.", "Partners check each other’s profile before presenting."],
        group: ["Groups make a “Safe Profile” poster with two columns: Share / Private, and present it."],
        quick: [
          { q: "What was the conversation mainly about?", a: "The dangers of posting personal information online." },
          { q: "Why is it risky to share travel plans online?", a: "Someone might break into your house." },
          { q: "What is tone?", a: "The attitude of the speaker." },
          { q: "Name two things you should keep private.", a: "e.g. my phone number, my address, my password." }
        ]
      }
    },

    /* ───────────────────────── LESSON 4 — SPEAKING (p. 38) ───────────────────────── */
    {
      id: "u2l4", num: 4, skill: "Speaking", title: "From Problems to Solutions", pages: [38], status: "complete",
      canDo: [
        "I can give clear and practical advice on online safety problems using conditional sentences in spoken contexts.",
        "I can analyse everyday problems related to digital safety using accurate language in discussions."
      ],
      linkers: ["however", "although", "despite"],
      goals: ["Talk about a problem and how it was solved.", "Give advice with “If I were you, I would…”.", "Act in a role play and an advice talk show.", "Use however, although and despite."],
      goalsAr: ["أتحدّث عن مشكلة وكيف تمّ حلّها.", "أقدّم نصيحة باستخدام If I were you, I would…", "أشارك في لعب الأدوار وفي برنامج حواري للنصائح.", "أستخدم however و although و despite."],
      warmup: {
        title: "Think, Pair, Share", image: null, emoji: "🤔", seconds: 90,
        instructions: "1. Think about a time when you or someone you know faced a problem, either online or in real life. Answer the questions below.",
        prompts: ["a. What was the problem?", "b. What happened?", "c. What did you or the other person do to solve the problem?"]
      },
      vocab: [],
      sections: [
        { type: "reading", title: "2. Read Ali’s problem and do the tasks below.", page: 38,
          paras: ["Ali connected to a free Wi-Fi network at the airport. Later, he received a warning that someone tried to log into his account."],
          image: "crops/u2l4-wifi.jpg",
          note: "Read the problem. Then do the role play." },

        { type: "speak", title: "Role Play. What advice would you give him?", page: 38, source: "book",
          instructions: "a. Work with a partner. One of you is Ali, and the other is the school’s IT teacher. Ali: Explain what happened. IT Teacher: Ask questions and give advice to Ali. b. Now switch roles and repeat with the same problem.",
          dialogue: [
            { who: "Ali", text: "" },
            { who: "IT Teacher", text: "Can you tell me more about what happened?" },
            { who: "Ali", text: "" },
            { who: "IT Teacher", text: "Did you see any warning messages?" },
            { who: "Ali", text: "" },
            { who: "IT Teacher", text: "" }
          ],
          note: "The IT teacher’s questions come from the Useful Language box. Then give your own advice.",
          starters: ["Can you tell me more about what happened?", "Did you see any warning messages?", "If I were you, I would…", "If you..., you will/should...", "Why don’t you…?", "One possible solution is…", "Maybe we could…", "I think the best idea is to…"],
          record: true },

        { type: "activity", title: "Extra Practice: The best advice for Ali", source: "extra", stage: "guided",
          instructions: "Choose the best advice for Ali.", instructionsAr: "اختر أفضل نصيحة لعلي.",
          items: [
            { t: "mcq", q: "Someone tried to log into Ali’s account.", options: ["If I were you, I would change my password now.", "If I were you, I would share my password with a friend."], answer: 0, why: "A new password stops the stranger." },
            { t: "mcq", q: "Ali wants to use the internet at the airport again.", options: ["Why don’t you use free Wi-Fi for your bank app?", "Why don’t you use your mobile data instead of free Wi-Fi?"], answer: 1, why: "Free public Wi-Fi is not always safe." },
            { t: "mcq", q: "Ali is not sure what to do next.", options: ["One possible solution is to tell the IT teacher.", "One possible solution is to ignore the warning."], answer: 0, why: "The IT teacher can help him protect his account." },
            { t: "mcq", q: "Which sentence is a correct first conditional?", options: ["If you turn on two-step verification, your account will be safer.", "If you will turn on two-step verification, your account is safer."], answer: 0, why: "If + present simple → will + bare infinitive." }
          ] },

        { type: "speak", title: "3. Speaking: The Advice Talk Show", page: 38, source: "book",
          instructions: "Work in groups of four.",
          steps: [
            "1. Work in groups of four. Choose roles: - Host - Caller (has a problem) - Two Experts (give advice)",
            "2. The Caller explains a common teenage problem (e.g., exam stress, losing something important, struggling with homework, receiving strange online messages). Use however, although, or despite.",
            "3. The Host asks questions to understand the problem clearly.",
            "4. The Experts offer advice to solve the problem, using three different phrases from the Useful Language box.",
            "5. Rotate roles and repeat."
          ],
          dialogue: [
            { who: "Host", text: "" },
            { who: "Caller", text: "" },
            { who: "Expert 1", text: "" },
            { who: "Expert 2", text: "" }
          ],
          starters: ["however", "although", "despite", "Can you tell me more about what happened?", "If I were you, I would…", "If you..., you will/should...", "Why don’t you…?", "One possible solution is…", "Maybe we could…", "I think the best idea is to…"],
          record: true },

        { type: "discuss", title: "4. Let’s Reflect.", page: 38, source: "book",
          prompts: ["What did you learn about giving and receiving advice?", "Why is it helpful to discuss problems openly with others?"],
          emoji: "💭", seconds: 120 },

        { type: "activity", title: "Extra Practice: however, although or despite?", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the Linker Bank.", instructionsAr: "أكمل كل جملة بأداة ربط من بنك أدوات الربط.",
          items: [
            { t: "fill", q: "____ I changed my password, someone tried to log into my account.", answer: ["Although"], bank: ["however", "although", "despite"], why: "although + subject + verb (I changed …)." },
            { t: "fill", q: "I studied hard. ____, I felt stressed before the exam.", answer: ["However"], bank: ["however", "although", "despite"], why: "However starts a new sentence and is followed by a comma." },
            { t: "fill", q: "____ the warning, Ali clicked on the link.", answer: ["Despite"], bank: ["however", "although", "despite"], why: "despite + noun (the warning)." },
            { t: "fill", q: "Sara felt calm ____ the strange messages.", answer: ["despite"], bank: ["however", "although", "despite"], why: "despite + noun (the strange messages)." },
            { t: "fill", q: "He lost his phone. ____, he found it the next day.", answer: ["However"], bank: ["however", "although", "despite"], why: "However + comma connects two sentences with different ideas." },
            { t: "fill", q: "____ she was tired, she finished her homework.", answer: ["Although"], bank: ["however", "although", "despite"], why: "although + subject + verb (she was tired)." }
          ] }
      ],
      game: { kind: "sort", title: "Ask or Advise?",
        buckets: ["Ask questions ❓", "Give advice 💡"],
        cards: [["Can you tell me more about what happened?", 0], ["Did you see any warning messages?", 0], ["If I were you, I would…", 1], ["If you..., you will/should...", 1], ["Why don’t you…?", 1], ["One possible solution is…", 1], ["Maybe we could…", 1], ["I think the best idea is to…", 1]] },
      teacher: {
        notes: [
          "Think, Pair, Share (ex. 1): students think alone about a real problem, talk in pairs (a–c), then share.",
          "Ex. 2: read Ali’s problem (free airport Wi-Fi, a warning about a log-in). Teach the Useful Language box before the role play.",
          "Role play: A is Ali, B is the school’s IT teacher (asks questions, gives advice); then switch roles. Possible advice: change the password, turn on two-step verification, avoid free Wi-Fi for private accounts, tell the IT teacher.",
          "Ex. 3: groups of four (Host, Caller, two Experts). The Caller uses however, although or despite; the Experts use three phrases from the Useful Language box. Rotate roles.",
          "Ex. 4 Let’s Reflect: open discussion."
        ],
        pair: ["Role play (ex. 2a–b): Ali and the IT teacher, then swap.", "A says a problem; B gives advice with a different Useful Language phrase each time."],
        group: ["The Advice Talk Show (ex. 3): each group performs one show for the class."],
        quick: [
          { q: "Give advice to Ali with “If I were you…”.", a: "e.g. If I were you, I would change my password." },
          { q: "Give one phrase to ask about the problem.", a: "Can you tell me more about what happened? / Did you see any warning messages?" },
          { q: "Complete with although or despite: ___ the warning, he clicked the link.", a: "Despite" },
          { q: "Why is free Wi-Fi risky?", a: "Other people may see or steal your information." }
        ]
      }
    },

    /* ───────────────────────── LESSON 5 — READING (pp. 39–40) ───────────────────────── */
    {
      id: "u2l5", num: 5, skill: "Reading", title: "Humans vs. Machines: The World of AI Chatbots", pages: [39, 40], status: "complete",
      canDo: [
        "I can analyse explicit and implicit ideas and key details clearly from a written text about AI chatbots and their capabilities.",
        "I can evaluate information about AI chatbots by identifying their uses, benefits and limitations in real-life contexts."
      ],
      goals: ["Read about AI chatbots.", "Learn 12 new words.", "Find the main idea, reference words and opposites.", "Write how AI changes my daily life."],
      goalsAr: ["أقرأ عن روبوتات الدردشة بالذكاء الاصطناعي.", "أتعلّم 12 كلمة جديدة.", "أجد الفكرة الرئيسية وما تعود إليه الكلمات والأضداد.", "أكتب كيف يغيّر الذكاء الاصطناعي حياتي اليومية."],
      warmup: {
        title: "Before You Read", image: "crops/u2l5-assistants.jpg", emoji: "🤖", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["a. Do you use AI chatbots?", "b. Can machines understand feelings like humans?", "c. What tasks do you think only a human can do?"]
      },
      vocab: [
        { w: "genuinely", pos: "adverb", emoji: "💯", def: "really; truly", ex: "Some users even genuinely communicate with AI chatbots as if they were real people.", exFromBook: true, ar: "بصدق / حقًّا" },
        { w: "replace", pos: "verb", emoji: "🔁", def: "to take the place of someone or something", ex: "However, can machines truly replace human conversations?", exFromBook: true, ar: "يحلّ محلّ / يستبدل" },
        { w: "software", pos: "noun", emoji: "💻", def: "the programs that make a computer or phone work", ex: "AI chatbots are software programmes designed to understand what people say and reply in a simple and clear manner.", exFromBook: true, ar: "برمجيات" },
        { w: "assist", pos: "verb", emoji: "🤝", def: "to help", ex: "They can assist with writing tasks, support language learning, and provide quick answers to questions.", exFromBook: true, ar: "يساعد" },
        { w: "efficient", pos: "adjective", emoji: "⚡", def: "working well and quickly without wasting time", ex: "They believe chatbots are efficient and available 24/7.", exFromBook: true, ar: "فعّال / كفء" },
        { w: "customer", pos: "noun", emoji: "🛒", def: "a person who buys things or uses a service", ex: "At work, chatbots can respond to customer questions or help with simple jobs.", exFromBook: true, ar: "عميل / زبون" },
        { w: "implement", pos: "verb", emoji: "📋", def: "to put a plan into action", ex: "In daily life, you can use a chatbot to make a shopping list, check the weather, or implement simple plans for your day.", exFromBook: true, ar: "ينفّذ" },
        { w: "accurate", pos: "adjective", emoji: "🎯", def: "correct and true in every detail", ex: "AI is not always accurate and can sometimes give incorrect information.", exFromBook: true, ar: "دقيق" },
        { w: "complex", pos: "adjective", emoji: "🧩", def: "difficult, with many different parts", ex: "It cannot fully understand feelings or complex situations.", exFromBook: true, ar: "معقّد" },
        { w: "evaluate", pos: "verb", emoji: "⚖️", def: "to think carefully about something and decide how good or serious it is", ex: "For example, if someone shares a personal problem, the chatbot might not know how to help or evaluate the situation properly.", exFromBook: true, ar: "يقيّم" },
        { w: "increasingly", pos: "adverb", emoji: "📈", def: "more and more", ex: "In addition, if you increasingly use AI, you may stop asking for help from real people.", exFromBook: true, ar: "بشكل متزايد" },
        { w: "judgement", pos: "noun", emoji: "🧠", def: "the ability to think about something and make a good decision", ex: "It is important to talk to teachers, doctors, and friends when you need real help because they can understand your feelings, use good judgement, and give personal advice.", exFromBook: true, ar: "حُسن التقدير / الحُكم" }
      ],
      sections: [
        { type: "reading", title: "Humans vs. Machines: The World of AI Chatbots", page: 39,
          instructions: "Read the passage, then do the tasks that follow.",
          paras: [
            "Today, many people communicate with machines. We use AI chatbots to answer questions, play music, and give directions. When shopping online, people often interact with chatbots for assistance. Some users even genuinely communicate with AI chatbots as if they were real people. However, can machines truly replace human conversations?",
            "AI chatbots are software programmes designed to understand what people say and reply in a simple and clear manner. They can assist with writing tasks, support language learning, and provide quick answers to questions. Many companies rely on chatbots. [[They]] believe chatbots are efficient and available 24/7.",
            "In schools, AI can help students learn new words or practise writing. At work, chatbots can [[respond]] to customer questions or help with simple jobs. In daily life, you can use a chatbot to make a shopping list, check the weather, or implement simple plans for your day.",
            "However, there are certain problems. AI is not always accurate and can sometimes give incorrect information. It cannot fully understand feelings or [[complex]] situations. For example, if someone shares a personal problem, the chatbot might not know how to help or evaluate the situation properly.",
            "In addition, if you increasingly use AI, you may stop asking for help from real people. It is important to talk to teachers, doctors, and friends when you need real help because they can understand your feelings, use good judgement, and give personal advice. A chatbot is only a tool."
          ],
          speaker: null,
          note: "Text type: Expository. The underlined words (They, respond, complex) are for exercise 2." },

        { type: "activity", title: "2. Think, Pair, Share – Choose the correct answer from a, b, c, or d.", page: 40, source: "book",
          instructions: "Choose the correct answer from a, b, c, or d.", instructionsAr: "اختر الإجابة الصحيحة من a أو b أو c أو d.",
          image: "crops/u2l5-ai.jpg",
          items: [
            { t: "mcq", q: "1. What is the main idea of the passage?", options: ["AI chatbots can play music and answer questions.", "AI chatbots are helpful but cannot replace real human help.", "Many companies use AI chatbots to save money.", "AI chatbots can always understand people’s feelings."], answer: 1,
              hint: "Read the last sentence of the passage: “A chatbot is only a tool.”", why: "The passage shows how chatbots help us, then explains their problems: they cannot replace real people." },
            { t: "mcq", q: "2. The underlined word “They” in the 2nd paragraph refers to:", options: ["answers", "many companies", "questions", "software programmes"], answer: 1,
              hint: "Read the sentence before: “Many companies rely on chatbots. They believe …” Who believes?",
              why: "“Many companies rely on chatbots. They believe chatbots are efficient …” – the companies believe this, so They = many companies." },
            { t: "mcq", q: "3. The underlined word “respond to” in the 3rd paragraph means:", options: ["answer", "contain", "highlight", "reject"], answer: 0,
              hint: "What do chatbots do with customer questions?", why: "respond to questions = answer questions." },
            { t: "mcq", q: "4. The opposite of the underlined word “complex” in the 4th paragraph is:", options: ["expensive", "simple", "curious", "cheap"], answer: 1,
              hint: "complex = difficult, with many parts.", why: "complex ≠ simple." }
          ] },

        { type: "activity", title: "3. Answer the questions below.", page: 40, source: "book",
          instructions: "Answer the questions below.", instructionsAr: "أجب عن الأسئلة التالية.",
          items: [
            { t: "short", q: "1. List three things chatbots can do at work or at school.", model: "Writing, learning words, answering (customer) questions.",
              keywords: [["writ", "word", "question", "answer", "job"]], hint: "Read paragraph 3: In schools, … At work, …" },
            { t: "short", q: "2. What could happen if people overuse AI?", model: "They stop asking real people for help.",
              keywords: [["stop", "not ask", "don’t ask", "don't ask"]], hint: "Read the first sentence of paragraph 5." },
            { t: "short", q: "3. Why is it important to still talk to real people like teachers or doctors?", model: "They understand our feelings.",
              keywords: [["feeling", "judgement", "judgment", "advice"]], hint: "Read paragraph 5: “… because they can …”" }
          ] },

        { type: "write", title: "4. AI in My Life – Writing Task", page: 40, source: "book",
          instructions: "Write a four-sentence paragraph explaining how your daily life is different with AI and without it. What has changed?",
          example: "With AI, I can use chatbots to help me with my homework and answer questions quickly.",
          note: "Use words from the vocabulary box.",
          wordBankLabel: "Sentence Starters (from the book)",
          wordBank: ["With AI, I can", "AI helps me to", "Without AI, I have to", "Because of AI, my life is"],
          frame: [
            { label: "1.", hint: "With AI, I can …" },
            { label: "2.", hint: "AI helps me to …" },
            { label: "3.", hint: "Without AI, I have to …" },
            { label: "4.", hint: "Because of AI, my life is …" }
          ],
          model: "With AI, I can use chatbots to help me with my homework quickly. AI also helps me plan my day and check the weather. Without AI, I have to search in books and it takes more time. Because of AI, my life is easier and faster.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I wrote four sentences.", "I wrote about life with AI and without AI.", "I used words from the vocabulary box."],
          minWords: 35 },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the passage.", instructionsAr: "هل الجملة صحيحة أم خاطئة؟ استعن بالنص.",
          items: [
            { t: "mcq", q: "People use AI chatbots to play music and give directions.", options: ["True", "False"], answer: 0, hint: "Paragraph 1.", why: "“We use AI chatbots to answer questions, play music, and give directions.”" },
            { t: "mcq", q: "Chatbots are only available during the day.", options: ["True", "False"], answer: 1, hint: "Paragraph 2.", why: "They are available 24/7 (all day, every day)." },
            { t: "mcq", q: "AI always gives correct information.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "“AI is not always accurate and can sometimes give incorrect information.”" },
            { t: "mcq", q: "A chatbot can always help with a personal problem.", options: ["True", "False"], answer: 1, hint: "Paragraph 4.", why: "The chatbot might not know how to help or evaluate the situation properly." },
            { t: "mcq", q: "The writer says a chatbot is only a tool.", options: ["True", "False"], answer: 0, hint: "The last sentence.", why: "“A chatbot is only a tool.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
          items: [
            { t: "fill", q: "Check the answer in a book, because AI is not always ____.", answer: ["accurate"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "accurate = correct in every detail." },
            { t: "fill", q: "A good teacher can ____ students with their writing.", answer: ["assist"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "assist = help." },
            { t: "fill", q: "This new app is ____: it does the job quickly.", answer: ["efficient"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "efficient = works well and quickly." },
            { t: "fill", q: "The shop’s chatbot answered the ____’s question.", answer: ["customer"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "A customer buys things or uses a service." },
            { t: "fill", q: "Machines cannot ____ real friends.", answer: ["replace"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "replace = take the place of." },
            { t: "fill", q: "Our teacher will ____ our projects next week.", answer: ["evaluate"], bank: ["accurate", "assist", "efficient", "customer", "replace", "evaluate"], why: "evaluate = decide how good something is." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): show the logos (Siri, Alexa, ChatGPT). Pairs answer a–c.",
          "Pre-teach the 12 words (genuinely, replace, software, assist, efficient, customer, implement, accurate, complex, evaluate, increasingly, judgement). They are bold in the passage.",
          "Ex. 2 answers: 1 b, 2 b (many companies), 3 a (answer), 4 b (simple). Note: the answer key circles d (software programmes) for question 2, but in “Many companies rely on chatbots. They believe chatbots are efficient…”, They refers to many companies.",
          "Ex. 3 (answer key): 1. Writing, learning words, answering. 2. They stop asking real people. 3. They understand our feelings.",
          "Ex. 4: four sentences with the starters. The model from the answer key is one possible answer."
        ],
        pair: ["Think, Pair, Share (ex. 2): students answer alone, then compare with a partner.", "A names a task; B says “AI can do it” or “Only a human can do it” and gives a reason."],
        group: ["Groups make a two-column chart: What AI can do / What AI cannot do, using the passage."],
        quick: [
          { q: "Name two things chatbots can do.", a: "e.g. answer questions, play music, give directions, help with writing." },
          { q: "What is the opposite of “complex”?", a: "simple" },
          { q: "Why can’t a chatbot help with a personal problem?", a: "It cannot fully understand feelings or complex situations." },
          { q: "What does “respond to” mean?", a: "answer" }
        ]
      }
    },

    /* ───────────────────────── LESSON 6 — GRAMMAR (p. 41) ───────────────────────── */
    {
      id: "u2l6", num: 6, skill: "Grammar", title: "Defining Relative Clauses: who, which, that, when, where", pages: [41], status: "complete",
      canDo: [
        "I can distinguish between different relative pronouns clearly and precisely in sentences describing people, things, places, and time.",
        "I can apply defining relative clauses (who, which, that, where, when) in spoken and written sentences correctly to describe real-life contexts."
      ],
      goals: ["Find relative pronouns in sentences.", "Say if they refer to a person, a thing, a place or a time.", "Use who, which, that, where and when.", "Describe people, places and things I know."],
      goalsAr: ["أجد ضمائر الوصل في الجمل.", "أحدّد هل تعود على شخص أو شيء أو مكان أو زمن.", "أستخدم who و which و that و where و when.", "أصف أشخاصًا وأماكن وأشياء أعرفها."],
      warmup: {
        title: "Grammar in context", image: null, emoji: "🧩", seconds: 60, source: "extra",
        instructions: "Think and tell your partner.",
        prompts: ["Who is a person who helps you at school?", "What is a place where you like to study?", "What is an app that you use every day?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Defining Relative Clauses: who, which, that, when, where", page: 41,
          steps: [
            { title: "Grammar Box",
              text: "We use relative clauses to give essential information about a person, a place, a thing, or a time.",
              textAr: "نستخدم جمل الوصل لنعطي معلومات أساسية عن شخص أو مكان أو شيء أو زمن.",
              examples: ["The {t:person} {c:who} called is my friend.", "This is the {t:book} {c:that} I like.", "That’s the {t:café} {c:where} we meet.", "I remember the {t:day} {c:when} we met."] },
            { title: "Which relative pronoun?",
              text: "person → who, that. thing → which, that. place → where. time → when.",
              textAr: "للشخص: who أو that. للشيء: which أو that. للمكان: where. للزمن: when.",
              examples: ["The {t:person} {c:who} sent the message was a scammer.", "Ahmed clicked on a {t:link} {c:that} looked real.", "The school is the {t:place} {c:where} the IT teacher works.", "Friday was the {t:day} {c:when} he lost access to his account."] },
            { title: "Where does the relative clause go?", source: "extra",
              text: "Put the relative clause right after the noun it describes. Without it, the sentence is not clear: “The person was a scammer.” (Which person?)",
              textAr: "نضع جملة الوصل مباشرة بعد الاسم الذي تصفه. وبدونها لا تكون الجملة واضحة.",
              examples: ["The {t:teacher} {c:who} helps us is very friendly.", "This is the {t:app} {c:which} helps me study English."] },
            { title: "which or where?", source: "extra",
              text: "Use where for a place when a new subject and verb come after it (where we study). Use which / that when the place itself does the action (a library which has many books).",
              textAr: "نستخدم where للمكان إذا جاء بعدها فاعل جديد وفعل، ونستخدم which أو that إذا كان المكان نفسه هو الذي يقوم بالفعل.",
              examples: ["That’s the {t:library} {c:where} {s:we} {v:study} for our exams.", "That’s the {t:library} {c:which} {v:has} many books."] }
          ],
          table: {
            head: ["Reference", "Relative Pronoun", "Example"],
            rows: [
              ["person", "who, that", "The person {c:who} called is my friend."],
              ["thing", "which, that", "This is the book {c:that} I like."],
              ["place", "where", "That’s the café {c:where} we meet."],
              ["time", "when", "I remember the day {c:when} we met."]
            ]
          },
          worked: {
            q: "Complete: This is the website ______ asked for my password.",
            steps: ["What does the clause describe? the website → a thing.", "For a thing we use which or that.", "Put it right after the noun: the website which …"],
            a: "This is the {t:website} {c:which} asked for my password."
          },
          notes: ["The book’s sticky note asks: who, which, that, when, where?"] },

        { type: "activity", title: "1. Think, Pair, Share", page: 41, source: "book", stage: "guided",
          instructions: "a. Read each sentence. b. Circle the relative pronoun (who, which, where, when, or that). c. Say what the relative pronoun refers to. Is it a person, a place, a thing, or a time?",
          instructionsAr: "اقرأ كل جملة، واختر ضمير الوصل (who أو which أو where أو when أو that)، ثم حدّد ما يعود عليه: شخص أو مكان أو شيء أو زمن.",
          items: [
            { t: "choose", q: "1. Ahmed clicked on a link [[that looked real]]. → b. Circle the relative pronoun.", options: ["who", "which", "that", "where", "when"], answer: 2, why: "that" },
            { t: "choose", q: "1. Ahmed clicked on a link [[that looked real]]. → c. It refers to:", options: ["a person", "a place", "a thing", "a time"], answer: 2, why: "that → a link = a thing." },
            { t: "choose", q: "2. The person [[who sent the message was a scammer]]. → b. Circle the relative pronoun.", options: ["who", "which", "that", "where", "when"], answer: 0, why: "who" },
            { t: "choose", q: "2. The person [[who sent the message was a scammer]]. → c. It refers to:", options: ["a person", "a place", "a thing", "a time"], answer: 0, why: "who → the person = a person." },
            { t: "choose", q: "3. The school is the place [[where the IT teacher works]]. → b. Circle the relative pronoun.", options: ["who", "which", "that", "where", "when"], answer: 3, why: "where" },
            { t: "choose", q: "3. The school is the place [[where the IT teacher works]]. → c. It refers to:", options: ["a person", "a place", "a thing", "a time"], answer: 1, why: "where → the place = a place." },
            { t: "choose", q: "4. Friday was the day [[when he lost access to his account]]. → b. Circle the relative pronoun.", options: ["who", "which", "that", "where", "when"], answer: 4, why: "when" },
            { t: "choose", q: "4. Friday was the day [[when he lost access to his account]]. → c. It refers to:", options: ["a person", "a place", "a thing", "a time"], answer: 3, why: "when → the day = a time." }
          ] },

        { type: "activity", title: "1. d. Discuss with a partner.", page: 41, source: "book", stage: "guided",
          instructions: "Discuss with a partner.", instructionsAr: "ناقش مع زميلك.",
          items: [
            { t: "short", open: true, q: "1. What information does the underlined part add? (necessary / unnecessary)", model: "It adds necessary (essential) information: it tells us which link, person, place or day.", hint: "Read the Grammar Box: relative clauses give … information." },
            { t: "short", open: true, q: "2. Can the sentence be clear without the underlined part? Why or why not?", model: "No. Without it, we don’t know which person, place, thing or time the sentence is about.", hint: "Try: “The person was a scammer.” Which person?" }
          ] },

        { type: "activity", title: "2. Complete the sentences with the correct relative pronouns (who, which, where, or when).", page: 41, source: "book", stage: "guided",
          instructions: "Complete the sentences with the correct relative pronouns (who, which, where, or when).", instructionsAr: "أكمل الجمل بضمير الوصل المناسب (who أو which أو where أو when).",
          items: [
            { t: "fill", q: "1. The teacher ____ helps us is very friendly.", answer: ["who", "that"], hint: "The teacher = a person.", why: "person → who (that is also correct)." },
            { t: "fill", q: "2. This is the app ____ helps me study English.", answer: ["which", "that"], hint: "The app = a thing.", why: "thing → which (that is also correct)." },
            { t: "fill", q: "3. That’s the library ____ we study for our exams.", answer: ["where"], hint: "The library = a place.", why: "place → where." },
            { t: "fill", q: "4. 2023 was the year ____ AI tools became popular.", answer: ["when"], hint: "2023 = a time.", why: "time → when." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the relative pronoun", source: "extra", stage: "guided",
          instructions: "Choose the correct relative pronoun.", instructionsAr: "اختر ضمير الوصل الصحيح.",
          items: [
            { t: "choose", q: "The boy ____ won the prize is my cousin.", options: ["who", "which", "where"], answer: 0, why: "the boy = a person → who." },
            { t: "choose", q: "I lost the phone ____ my father gave me.", options: ["who", "which", "when"], answer: 1, why: "the phone = a thing → which." },
            { t: "choose", q: "Kuwait is the country ____ I was born.", options: ["which", "where", "when"], answer: 1, why: "the country = a place, and a new subject + verb follows (I was born) → where." },
            { t: "choose", q: "Monday is the day ____ we have English.", options: ["who", "where", "when"], answer: 2, why: "the day = a time → when." },
            { t: "choose", q: "Never open emails ____ come from strangers.", options: ["that", "where", "when"], answer: 0, why: "emails = things → that / which." },
            { t: "choose", q: "The IT teacher is the person ____ fixed my laptop.", options: ["which", "who", "where"], answer: 1, why: "the person → who." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Join the sentences", source: "extra", stage: "guided",
          instructions: "Join the two sentences. Put the words in order.", instructionsAr: "اربط الجملتين بترتيب الكلمات.",
          items: [
            { t: "order", q: "The girl is my sister. She plays the guitar.", words: ["The", "girl", "who", "plays", "the", "guitar", "is", "my", "sister."], answer: ["The girl who plays the guitar is my sister."], hint: "Put “who plays the guitar” after “The girl”.", why: "The girl + who + plays the guitar + is my sister." },
            { t: "order", q: "This is the app. It helps me study English.", words: ["This", "is", "the", "app", "which", "helps", "me", "study", "English."], answer: ["This is the app which helps me study English."], hint: "the app → which.", why: "which replaces “It”." },
            { t: "order", q: "That’s the café. We meet there.", words: ["That’s", "the", "café", "where", "we", "meet."], answer: ["That’s the café where we meet."], hint: "a place → where.", why: "where replaces “there”." },
            { t: "order", q: "I remember the day. We met on that day.", words: ["I", "remember", "the", "day", "when", "we", "met."], answer: ["I remember the day when we met."], hint: "a time → when.", why: "when replaces “on that day”." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One word is wrong. Type the correct word.", instructionsAr: "يوجد خطأ واحد. اكتب الكلمة الصحيحة.",
          items: [
            { t: "fix", q: "The man {which} sent the message was a scammer.", answer: ["who", "that"], hint: "The man = a person.", why: "person → who / that." },
            { t: "fix", q: "This is the school {when} my brother studies.", answer: ["where"], hint: "The school = a place.", why: "place → where." },
            { t: "fix", q: "I clicked on a link {who} looked real.", answer: ["that", "which"], hint: "A link = a thing.", why: "thing → that / which." },
            { t: "fix", q: "Friday is the day {where} we visit our grandparents.", answer: ["when"], hint: "The day = a time.", why: "time → when." },
            { t: "short", q: "Write one sentence about a place you love. Use “where”.", open: true, model: "Al Shaheed Park is the place where I walk with my family.", hint: "… is the place where I …" }
          ] },

        { type: "speak", title: "3. Take turns describing a person, a place, or a thing you know, using different relative pronouns: who, which, that, or where.", page: 41, source: "book",
          instructions: "Take turns describing a person, a place, or a thing you know, using different relative pronouns: who, which, that, or where.",
          dialogue: [{ who: "A", text: "" }, { who: "B", text: "" }, { who: "A", text: "" }, { who: "B", text: "" }],
          example: "I have a friend who plays the guitar. He has a cat that likes to run. The library where we study is always quiet.",
          starters: ["I have a friend who …", "I have a … that …", "This is the app which …", "The … where we … is …"],
          record: true }
      ],
      game: { kind: "sort", title: "who, which, where or when?",
        buckets: ["who 🧑", "which 📱", "where 📍", "when ⏰"],
        cards: [["the teacher", 0], ["the scammer", 0], ["my friend", 0], ["the app", 1], ["the link", 1], ["the book", 1], ["the library", 2], ["the café", 2], ["the school", 2], ["the day", 3], ["the year", 3], ["Friday", 3]],
        hint: "Person → who. Thing → which. Place → where. Time → when." },
      teacher: {
        notes: [
          "Ex. 1 (Think, Pair, Share): 1. that – thing  2. who – person  3. where – place  4. when – time.",
          "Ex. 1d: discuss: the underlined part adds necessary (essential) information; without it the sentence is not clear (which link / person / place / day?).",
          "Present the Grammar Box and its table: person → who, that; thing → which, that; place → where; time → when.",
          "Ex. 2 answers: 1. who  2. which  3. where  4. when (accept that in 1 and 2).",
          "Ex. 3: pairs take turns describing a person, a place or a thing (examples in the book)."
        ],
        pair: ["Ex. 3: A describes; B guesses the person, place or thing.", "A says a noun (the café); B makes a sentence with the right relative pronoun."],
        group: ["“Guess who / what / where”: each group writes three clues with relative clauses; the class guesses."],
        quick: [
          { q: "Which relative pronoun do we use for a place?", a: "where" },
          { q: "Complete: The teacher ___ helps us is very friendly.", a: "who (or that)" },
          { q: "Complete: 2023 was the year ___ AI tools became popular.", a: "when" },
          { q: "Which two relative pronouns can we use for a thing?", a: "which and that" }
        ]
      }
    },

    /* ───────────────────────── LESSON 7 — WRITING (pp. 42–43) ───────────────────────── */
    {
      id: "u2l7", num: 7, skill: "Writing", title: "How to Stay Safe Online", pages: [42, 43], status: "complete",
      canDo: [
        "I can analyse the structure and features of a well-organised expository report.",
        "I can compose a coherent two-paragraph expository report explaining online risks and offering practical tips for staying safe online."
      ],
      goals: ["Read a model expository text.", "Find topic sentences, linking words and concluding sentences.", "Plan a report about online risks and safety tips.", "Write a two-paragraph report."],
      goalsAr: ["أقرأ نصًّا تفسيريًّا نموذجيًّا.", "أجد الجمل الافتتاحية وأدوات الربط والجمل الختامية.", "أخطّط لتقرير عن مخاطر الإنترنت ونصائح الأمان.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "Before You Write", image: null, emoji: "🛡️", seconds: 90, source: "extra",
        instructions: "Talk with your partner.",
        prompts: ["What online risks do you know from this unit?", "What do you do to stay safe online?"]
      },
      vocab: [],
      sections: [
        { type: "reading", title: "1. Read & notice. How to Stay Healthy During Exams", page: 42,
          instructions: "Read the model expository paragraph below and answer the questions that follow.",
          paras: [
            "Exams can be a very stressful time for many students. Because of this, some students stay up too late and do not get enough sleep. In addition, others eat too much junk food and do not take breaks while studying. These habits can make students feel tired and lose focus. When students do not take care of their health, it becomes harder to study well and remember important information.",
            "There are many easy ways to stay healthy during exams. First, students should try to sleep at least seven hours a night. Next, it is better to eat healthy food such as fruits, vegetables, and whole grains. Drinking enough water is also important to stay focused. Finally, taking short breaks and doing light exercise like walking can help the brain work better. These habits will help students feel better and do their best in exams."
          ],
          speaker: null,
          note: "Text type: Expository. In the book the two parts are labelled “Paragraph 1” and “Paragraph 2”." },

        { type: "activity", title: "1. Answer the questions that follow.", page: 42, source: "book",
          instructions: "Answer the questions about the model text.", instructionsAr: "أجب عن الأسئلة حول النص النموذجي.",
          items: [
            { t: "short", q: "1. What is Paragraph mainly about?", model: "Paragraph 1 is mainly about unhealthy habits during exams.",
              keywords: [["habit", "sleep", "junk", "stress"]], hint: "The book does not print the paragraph number here. The answer key answers about Paragraph 1." },
            { t: "short", q: "2. What is the main idea of Paragraph?", model: "The main idea is easy ways to stay healthy during exams.",
              keywords: [["way", "healthy"]], hint: "The book does not print the paragraph number here. The answer key answers about Paragraph 2. Read its first sentence." },
            { t: "short", q: "3. What does a topic sentence do in a paragraph? What does it tell the reader?", model: "It tells the reader the main idea of the paragraph.",
              keywords: [["main idea", "main", "topic", "about"]], hint: "It is usually the first sentence." },
            { t: "short", q: "4. Why are linking words important? Give 2 examples of linking words from the passage.", model: "They connect ideas, e.g. first, finally.",
              keywords: [["connect", "join", "link"], ["first", "next", "finally", "in addition", "because of this", "also"]], hint: "Look at the words at the start of the sentences in Paragraph 2." },
            { t: "short", q: "5. What is the purpose of the last sentence in Paragraph 2?", model: "It sums up the paragraph and gives a final thought.",
              keywords: [["sum", "conclu", "final", "end", "close"]], hint: "It is the concluding sentence." }
          ] },

        { type: "activity", title: "2. Complete the following sentences.", page: 42, source: "book",
          instructions: "Complete the following sentences.", instructionsAr: "أكمل الجمل التالية: اكتب جملة افتتاحية مختلفة وجملة ختامية مختلفة.",
          items: [
            { t: "short", open: true, q: "1. Paragraph 1 – Topic Sentence\nOriginal: Exams can be a very stressful time for many students.\nWrite a different topic sentence.", model: "Many students feel worried and tired during exams.", hint: "Say the same main idea in new words." },
            { t: "short", open: true, q: "2. Paragraph 2 – Concluding Sentence\nOriginal: These habits will help students feel better and do their best in exams.\nWrite a different concluding sentence.", model: "Healthy habits help students succeed in their exams.", hint: "Sum up the paragraph in new words." }
          ] },

        { type: "activity", title: "3. Apply what you learned from the model text in Task 1.", page: 43, source: "book",
          instructions: "Apply what you learned from the model text in Task 1. Use its structure, style as a framework to complete the new writing task with your own ideas. Fill in the boxes below with some online risks and tips to stay safe online.",
          instructionsAr: "طبّق ما تعلّمته من النص النموذجي في المهمة 1، واكتب في المربعين بعض مخاطر الإنترنت ونصائح للبقاء آمنًا على الإنترنت.",
          items: [
            { t: "table", open: true, q: "Fill in the boxes.",
              head: ["Online risks", "Tips to stay safe online"],
              rows: [
                [{ model: "phishing scams and fake links" }, { model: "use strong passwords" }],
                [{ model: "hacked accounts" }, { model: "don’t click on strange links" }],
                [{ model: "sharing personal information" }, { model: "keep your information private" }]
              ],
              note: "Your ideas can be different. Use ideas from this unit." }
          ] },

        { type: "write", title: "4. a. Complete the following outline with your ideas.", page: 43, source: "book",
          instructions: "Being online is helpful, but it can also be risky. Plan and write a two-paragraph report explaining common online risks and giving useful safety tips to help people protect their information and stay safe online.",
          frame: [
            { label: "Introduction", hint: "The internet is …", lines: 2 },
            { label: "Paragraph 1 (Common online risks) — Topic sentence", hint: "There are many …" },
            { label: "Paragraph 1 — Supporting details", hint: "First, … In addition, …", lines: 3 },
            { label: "Paragraph 1 — Concluding sentence", hint: "These risks …" },
            { label: "Paragraph 2 (Useful safety tips) — Topic sentence", hint: "There are many easy ways …" },
            { label: "Paragraph 2 — Supporting details", hint: "First, … Next, … Finally, …", lines: 3 },
            { label: "Paragraph 2 — Concluding sentence", hint: "These tips …" },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Introduction: The internet is useful, but it has many risks.\nParagraph 1 – Topic sentence: There are many common online risks.\nSupporting details: First, scammers send fake links to steal passwords. In addition, hackers can get into our accounts. Some people share too much personal information.\nConcluding sentence: These risks can harm our privacy and safety.\nParagraph 2 – Topic sentence: There are many easy ways to stay safe online.\nSupporting details: First, use strong passwords and change them often. Next, don’t click on links from unknown people. Finally, keep your address and phone number private.\nConcluding sentence: These tips help us protect our information.\nConclusion: In conclusion, if we think before we click, we will stay safe online.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I wrote an introduction and a conclusion.", "Each paragraph has a topic sentence, supporting details and a concluding sentence.", "Paragraph 1 is about risks; paragraph 2 is about tips."],
          minWords: 60 },

        { type: "write", title: "4. b. Use the ideas in your outline to write the report in your notebook.", page: 43, source: "book",
          instructions: "Use the ideas in your outline to write the report. Then use the Self-Assessment Checklist.",
          wordBankLabel: "Linking words",
          wordBank: ["First", "Next", "Finally", "In addition", "In conclusion"],
          frame: [
            { label: "Introduction", hint: "The internet is useful, but …", lines: 2 },
            { label: "Paragraph 1: Common online risks", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
            { label: "Paragraph 2: Useful safety tips", hint: "Topic sentence + supporting details + concluding sentence", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "The internet is useful, but it has many risks.\n\nThere are many common online risks. First, scammers send fake links to steal passwords. In addition, hackers can get into our accounts. Some people share too much personal information. These risks can harm our privacy and safety.\n\nThere are many easy ways to stay safe online. First, use strong passwords and change them often. Next, don’t click on links from unknown people. Finally, keep your address and phone number private. These tips help us protect our information.\n\nIn conclusion, if we think before we click, we will stay safe online.",
          modelFromBook: false, modelLabel: "Model report (the answer key’s outline written as a report – one possible answer)",
          bookChecklist: [
            "I wrote about at least two online risks.",
            "I gave useful tips to stay safe online.",
            "My report has two clear paragraphs.",
            "I started each paragraph with a topic sentence.",
            "I used linking words (like first, next, finally).",
            "I wrote a concluding sentence for each paragraph.",
            "I checked my spelling and grammar.",
            "I used AI tools to proofread my writing."
          ],
          bookNote: "Self-Assessment Checklist (from the book). ATTENTION: Use AI wisely and responsibly.",
          minWords: 80 },

        { type: "activity", title: "Extra Practice: Which part of the paragraph?", source: "extra", stage: "guided",
          instructions: "Read the sentence from the model text. Is it a topic sentence, a supporting detail or a concluding sentence?", instructionsAr: "اقرأ الجملة من النص النموذجي: هل هي جملة افتتاحية أم تفصيل داعم أم جملة ختامية؟",
          items: [
            { t: "mcq", q: "There are many easy ways to stay healthy during exams.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It is the first sentence of Paragraph 2 and gives the main idea." },
            { t: "mcq", q: "First, students should try to sleep at least seven hours a night.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 1, why: "It gives one way to stay healthy: a supporting detail." },
            { t: "mcq", q: "These habits will help students feel better and do their best in exams.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 2, why: "It is the last sentence and sums up the paragraph." },
            { t: "mcq", q: "Exams can be a very stressful time for many students.", options: ["Topic sentence", "Supporting detail", "Concluding sentence"], answer: 0, why: "It is the first sentence of Paragraph 1 and gives the main idea." }
          ] },

        { type: "activity", title: "Extra Practice: Choose the linking word", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a linking word from the box.", instructionsAr: "أكمل كل جملة بأداة ربط من الصندوق.",
          items: [
            { t: "fill", q: "____, use strong passwords. Then change them often.", answer: ["First"], bank: ["First", "Next", "Finally", "In addition", "In conclusion"], why: "First starts a list of tips." },
            { t: "fill", q: "Scammers send fake links. ____, hackers can get into our accounts.", answer: ["In addition"], bank: ["First", "Next", "Finally", "In addition", "In conclusion"], why: "In addition adds more information." },
            { t: "fill", q: "____, keep your address and phone number private.", answer: ["Finally"], bank: ["First", "Next", "Finally", "In addition", "In conclusion"], why: "Finally introduces the last tip." },
            { t: "fill", q: "____, if we think before we click, we will stay safe online.", answer: ["In conclusion"], bank: ["First", "Next", "Finally", "In addition", "In conclusion"], why: "In conclusion closes a piece of writing." }
          ] }
      ],
      game: { kind: "sort", title: "Risk or Safety Tip?",
        buckets: ["Online risk ⚠️", "Safety tip 🛡️"],
        cards: [["phishing scams", 0], ["fake links", 0], ["hacked accounts", 0], ["sharing personal information", 0], ["use strong passwords", 1], ["don’t click on strange links", 1], ["keep your information private", 1], ["change your passwords often", 1]] },
      teacher: {
        notes: [
          "Ex. 1: read the model text “How to Stay Healthy During Exams”. Point out the topic sentence, the linking words (Because of this, In addition, First, Next, Finally) and the concluding sentence.",
          "Ex. 1 questions (answer key): 1. Paragraph 1 is mainly about unhealthy habits during exams. 2. The main idea is easy ways to stay healthy during exams. 3. It tells the reader the main idea of the paragraph. 4. They connect ideas, e.g. first, finally. 5. It sums up the paragraph and gives a final thought. (Questions 1 and 2 are printed without the paragraph number.)",
          "Ex. 2 (samples): Many students feel worried and tired during exams. / Healthy habits help students succeed in their exams.",
          "Ex. 3: brainstorm risks and tips from the whole unit (phishing, fake links, hacked accounts, sharing personal information / strong passwords, don’t click on strange links, keep information private).",
          "Ex. 4a–b: complete the outline, then write the report and use the Self-Assessment Checklist. Talk about using AI wisely and responsibly: to proofread, not to write for you."
        ],
        pair: ["Partners swap reports and tick the Self-Assessment Checklist for each other.", "A says an online risk; B gives a tip to stay safe."],
        group: ["Groups make a “How to Stay Safe Online” leaflet with two parts: risks and tips."],
        quick: [
          { q: "What does a topic sentence tell the reader?", a: "The main idea of the paragraph." },
          { q: "Give two linking words from the model text.", a: "e.g. First, Next, Finally, In addition." },
          { q: "Name one online risk.", a: "e.g. phishing scams / fake links / hacked accounts." },
          { q: "Name one tip to stay safe online.", a: "e.g. Use strong passwords." }
        ]
      }
    }
  ]
});

// Unit 7 — Ideas and Thoughts (Module 3 "Keeping in Touch", printed pages 57–62, module cover p. 55)
BOOK.addUnit({
  id: "u7", num: 7, title: "Ideas and Thoughts", titleAr: "أفكار وآراء",
  module: 3, moduleTitle: "Keeping in Touch",
  pages: [57, 62],
  cover: 55,
  status: "complete",
  outcomes: {
    "speech acts": [
      "Express opinions",
      "Distinguish between facts and opinions",
      "Give reasons",
      "Leave a message",
      "Talk about plans/ arrangements",
      "Make guesses"
    ],
    "language structures": [
      "Use contrastive connectors (although/ however)",
      "Use present continuous for future arrangements"
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
      id: "u7l1", num: 1, skill: "Reading",
      title: "Argumentative Text: Social Media",
      pages: [57, 58],
      status: "complete",
      canDo: ["Express opinions", "Distinguish between facts and opinions"],
      goals: ["Read an argumentative text about social media.", "Give the text a title.", "Learn 7 new words.", "Tell a fact from an opinion."],
      goalsAr: ["أقرأ نصًا جدليًا عن وسائل التواصل الاجتماعي.", "أضع عنوانًا للنص.", "أتعلّم 7 كلمات جديدة.", "أميّز الحقيقة من الرأي."],
      warmup: {
        title: "Before you read — Think, Pair, Share",
        image: "crops/u7l1-warmup.jpg",
        emoji: "📱",
        prompts: ["In pairs, look at the icons and name the applications.", "What do they have in common?"],
        seconds: 90
      },
      vocab: [
        { w: "addiction", pos: "noun", emoji: "🔁", def: "a strong need to do or use something again and again that you cannot stop", ex: "Some people see this constant use as an addiction to social media.", exFromBook: true, ar: "إدمان" },
        { w: "defend", pos: "verb", emoji: "🛡️", def: "to say that something is good or right when others attack it", ex: "Others defend it as a normal part of modern life and communication.", exFromBook: true, ar: "يدافع عن" },
        { w: "obsessed", pos: "adjective", emoji: "🤯", def: "thinking about something all the time, too much", ex: "We can become obsessed with checking notifications or messages.", exFromBook: true, ar: "مهووس" },
        { w: "notification", pos: "noun", emoji: "🔔", def: "a short alert on your phone that tells you something new has happened", ex: "We can become obsessed with checking notifications or messages.", exFromBook: true, ar: "إشعار / تنبيه" },
        { w: "confuse", pos: "verb", emoji: "😵‍💫", def: "to think that one thing is another thing; to mix two things up", ex: "Often, people confuse social media with reality.", exFromBook: true, ar: "يخلط بين" },
        { w: "unrealistic", pos: "adjective", emoji: "🦄", def: "not real or not possible in real life", ex: "We spend a lot of time trying to live up to those unrealistic images.", exFromBook: true, ar: "غير واقعي" },
        { w: "necessarily", pos: "adverb", emoji: "❓", def: "in every case; always (often: not necessarily = not always)", ex: "In my opinion, social media is not necessarily a bad thing.", exFromBook: true, ar: "بالضرورة" }
      ],
      sections: [
        { type: "reading", title: "a. Read the text and give it a title", page: 57,
          instructions: "Read the text. Think of a good title for it.",
          paras: [
            "Social media has become a huge part of everyday life. Some people see this constant use as an [[addiction]] to social media, but others defend it as a normal part of modern life and communication.",
            "The biggest problem is that using social media makes us less social in real life. We can become obsessed with checking notifications or messages. This can lead us to ignore the people around us. Often, people confuse social media with reality. Having lots of Facebook friends doesn’t mean having a connection with those people in real life, and we forget that somebody’s ‘image’ online doesn’t always reflect that person’s real life. Lots of people only post positive things, so we believe their lives are perfect, and we spend a lot of time trying to live up to those unrealistic images.",
            "However, social media has opened up many new possibilities, especially to young people. It allows us to stay in touch with friends around the world, see their pictures and hear about their adventures. Social media is also a great way to raise enormous amounts of money for charity.",
            "In my opinion, social media is not [[necessarily]] a bad thing. Although using technology excessively is unhealthy, using it in the right way is a huge benefit of living in modern times."
          ],
          note: "Hint (from the book): A fact can be proved or disproved, but opinions can differ depending on points of view.",
          speaker: null },

        { type: "activity", title: "a. Give the text a title", page: 57, source: "book",
          instructions: "Write a title for the text.", instructionsAr: "اكتب عنوانًا للنص.",
          items: [
            { t: "short", q: "My title for the text:", model: "Social Media: A Blessing or a Curse? / Social Media – Good or Bad?", open: true,
              hint: "The text gives ideas for AND against social media. Your title can be a question." }
          ] },

        { type: "activity", title: "Consult the dictionary for the meanings of the underlined words “addiction” and “necessarily”.", page: 57, source: "book",
          instructions: "Use a dictionary. Write the meaning of each underlined word.", instructionsAr: "استخدم القاموس واكتب معنى كل كلمة تحتها خط.",
          items: [
            { t: "short", q: "addiction (noun) means …", model: "A strong need to do or use something again and again that you cannot stop. (Arabic: إدمان)", open: true, hint: "Look in paragraph 1: “an addiction to social media”." },
            { t: "short", q: "necessarily (adverb) means …", model: "In every case; always. “Not necessarily” = not always. (Arabic: بالضرورة)", open: true, hint: "Look in paragraph 4: “not necessarily a bad thing”." }
          ] },

        { type: "activity", title: "b. Answer the following questions:", page: 58, source: "book",
          instructions: "Answer the questions. Use the text.", instructionsAr: "أجب عن الأسئلة من النص.",
          items: [
            { t: "short", q: "1. According to the author, what is the greatest problem with social media?",
              model: "Using social media makes us less social in real life.",
              keywords: [["less social", "social in real life", "ignore"]],
              hint: "Read paragraph 2: “The biggest problem is that …”" },
            { t: "short", q: "2. Which paragraph argues for social media and which one is against? How can you tell?",
              model: "Paragraph 3 argues for social media: it starts with “However” and talks about new possibilities (staying in touch, raising money for charity). Paragraph 2 is against: it talks about “the biggest problem” (being less social, obsessed, unrealistic images).",
              keywords: [["3", "three", "third"], ["2", "two", "second"]],
              hint: "Look for positive words (possibilities, great) and negative words (problem, obsessed)." },
            { t: "short", q: "3. What does the writer think about social media?",
              model: "The writer thinks social media is not necessarily a bad thing. Using it too much is unhealthy, but using it in the right way is a huge benefit.",
              keywords: [["not necessarily", "not a bad", "right way", "benefit"]],
              hint: "Read the last paragraph: “In my opinion, …”" },
            { t: "short", q: "4. What conclusions do you draw after reading this text?",
              model: "Social media has good and bad sides. We should use it in the right way and not too much.", open: true,
              hint: "I think … / We should …" }
          ] },

        { type: "activity", title: "Extra Practice: Fact or Opinion?", source: "extra", stage: "guided",
          instructions: "Remember the hint: a fact can be proved; an opinion can differ. Choose.", instructionsAr: "الحقيقة يمكن إثباتها، أما الرأي فيختلف من شخص لآخر. اختر.",
          items: [
            { t: "mcq", q: "“In my opinion, social media is not necessarily a bad thing.”", options: ["Fact", "Opinion"], answer: 1, hint: "Look at the first words.", why: "“In my opinion” shows it is the writer’s opinion. Other people may think differently." },
            { t: "mcq", q: "“WhatsApp, Instagram and Snapchat are applications.”", options: ["Fact", "Opinion"], answer: 0, hint: "Can we check it?", why: "We can prove it: they are all applications on a phone." },
            { t: "mcq", q: "“Instagram is the best application in the world.”", options: ["Fact", "Opinion"], answer: 1, hint: "Do all people agree?", why: "“the best” is a point of view. Other people may like a different application." },
            { t: "mcq", q: "“You can send pictures to your friends on social media.”", options: ["Fact", "Opinion"], answer: 0, hint: "Can we prove it?", why: "We can test it and prove it." },
            { t: "mcq", q: "“Social media is a waste of time.”", options: ["Fact", "Opinion"], answer: 1, hint: "Some people agree, some do not.", why: "People have different points of view about this." }
          ] },

        { type: "activity", title: "Extra Practice: For or against?", source: "extra", stage: "guided",
          instructions: "Is the idea from the text FOR social media or AGAINST it?", instructionsAr: "هل الفكرة مع وسائل التواصل أم ضدها؟",
          items: [
            { t: "mcq", q: "We can become obsessed with checking notifications.", options: ["For", "Against"], answer: 1, why: "Being obsessed is a problem (paragraph 2)." },
            { t: "mcq", q: "It allows us to stay in touch with friends around the world.", options: ["For", "Against"], answer: 0, why: "This is a benefit (paragraph 3)." },
            { t: "mcq", q: "People confuse social media with reality.", options: ["For", "Against"], answer: 1, why: "This is a problem (paragraph 2)." },
            { t: "mcq", q: "It is a great way to raise money for charity.", options: ["For", "Against"], answer: 0, why: "This is a benefit (paragraph 3)." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the text.", instructionsAr: "أكمل كل جملة بكلمة من النص.",
          items: [
            { t: "fill", q: "My phone shows a ____ when I get a new message.", answer: ["notification"], bank: ["notification", "addiction", "unrealistic", "defend"], why: "A notification is a short alert on your phone." },
            { t: "fill", q: "Twins look the same, so people often ____ them.", answer: ["confuse"], bank: ["confuse", "defend", "obsessed", "necessarily"], why: "confuse = mix two things or people up." },
            { t: "fill", q: "He plays video games all day. He is ____ with them.", answer: ["obsessed"], bank: ["obsessed", "unrealistic", "addiction", "confuse"], why: "obsessed with = thinking about something all the time." },
            { t: "fill", q: "Expensive things are not ____ better.", answer: ["necessarily"], bank: ["necessarily", "obsessed", "notification", "defend"], why: "not necessarily = not always." },
            { t: "fill", q: "My brother always tries to ____ his favourite team.", answer: ["defend"], bank: ["defend", "confuse", "addiction", "unrealistic"], why: "defend = say something is good when others attack it." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: students name the four apps (Facebook, Snapchat, Instagram, WhatsApp) and say what they have in common (social media / communication).",
          "Pre-teach the words. Students check “addiction” and “necessarily” in a dictionary (book task).",
          "Read paragraph by paragraph. After each one ask: Is this paragraph for or against social media?",
          "Read the Hint box. Do the Extra “Fact or Opinion?” to practise the speech act.",
          "Students suggest titles; vote for the best one on the board."
        ],
        pair: ["Partner A reads a sentence from the text; partner B says “fact” or “opinion” and why.", "Pairs list two ideas for and two against social media from the text."],
        group: ["Groups write three titles for the text and explain which is the best and why."],
        quick: [
          { q: "What is the biggest problem with social media, according to the writer?", a: "It makes us less social in real life." },
          { q: "Which paragraph is for social media?", a: "Paragraph 3 (However, social media has opened up many new possibilities…)." },
          { q: "What is the difference between a fact and an opinion?", a: "A fact can be proved or disproved; opinions differ depending on points of view." },
          { q: "What does “not necessarily” mean?", a: "Not always." }
        ]
      }
    },

    // ───────────────────────── LESSON 2 — GRAMMAR ─────────────────────────
    {
      id: "u7l2", num: 2, skill: "Grammar",
      title: "Contrastive Connectors: although / however",
      pages: [58, 58],
      status: "complete",
      canDo: ["Use contrastive connectors (although/ however)", "Give reasons"],
      goals: ["Show contrast between two ideas.", "Use although + subject + verb.", "Use however to start the second idea.", "Choose a social media app for a business."],
      goalsAr: ["أبيّن التناقض بين فكرتين.", "أستخدم although + فاعل + فعل.", "أستخدم however لبدء الفكرة الثانية.", "أختار تطبيقًا للتواصل الاجتماعي لمشروع تجاري."],
      warmup: {
        title: "Two ideas — one surprise",
        image: null,
        emoji: "⚖️",
        prompts: ["It was raining. We played football. Is this surprising?", "Using technology too much is unhealthy. Is technology always bad?"],
        seconds: 60
      },
      vocab: [
        { w: "product", pos: "noun", emoji: "📦", def: "something that is made to be sold", ex: "You want to advertise your product.", exFromBook: true, ar: "مُنتَج" },
        { w: "feature", pos: "noun", emoji: "⚙️", def: "an important or useful part of something", ex: "Discuss what specific features of that social media would make it useful.", exFromBook: true, ar: "ميزة / خاصية" }
      ],
      sections: [
        { type: "grammar", title: "Contrastive Connectors: although / however", page: 58,
          steps: [
            { title: "Step 1 — The book’s example",
              text: "e.g.: Although using technology excessively is unhealthy, using it in the right way can make life much easier.",
              textAr: "مثال الكتاب: Although تربط بين فكرتين متعاكستين.",
              examples: [
                "{c:Although} {s:using technology excessively} {v:is} unhealthy, {s:using it in the right way} {a:can} {v:make} life much easier."
              ] },
            { title: "Step 2 — What is contrast?", source: "extra",
              text: "Although and however show contrast: the second idea is different from, or surprising after, the first idea.",
              textAr: "although و however تدلّان على التناقض: الفكرة الثانية مختلفة أو غير متوقعة بعد الفكرة الأولى.",
              examples: [
                "{s:It} {v:was} raining. → {s:We} {v:played} football. (surprising!)",
                "{c:Although} {s:it} {v:was} raining, {s:we} {v:played} football."
              ] },
            { title: "Step 3 — although + subject + verb", source: "extra",
              text: "After although we need a subject and a verb. If although starts the sentence, put a comma after the first idea. It can also go in the middle; then the comma is optional (We played football although it was raining. / …, although it was raining.).",
              textAr: "بعد although نحتاج فاعلًا وفعلًا. إذا جاءت في بداية الجملة نضع فاصلة بعد الفكرة الأولى، ويمكن أن تأتي في الوسط وعندها تكون الفاصلة اختيارية.",
              examples: [
                "{c:Although} {s:she} {v:knew} she was wrong, {s:she} {v:didn’t say} sorry.",
                "{s:We} {v:played} football {c:although} {s:it} {v:was} raining."
              ] },
            { title: "Step 4 — however + comma", source: "extra",
              text: "However starts the second idea. Put a comma after however. It usually starts a new sentence. (In the book exercise, it comes after a comma.)",
              textAr: "however تبدأ الفكرة الثانية، وبعدها فاصلة، وغالبًا تأتي في بداية جملة جديدة.",
              examples: [
                "{c:However}, {s:social media} {v:has opened up} many new possibilities. (from the text, paragraph 3)",
                "{s:He} {v:did} well in the interview. {c:However}, {s:he} {v:didn’t get} the job."
              ] },
            { title: "Step 5 — Be careful!", source: "extra",
              text: "Do not use although and but together. Use only one connector.",
              textAr: "لا نستخدم although و but معًا في الجملة نفسها.",
              examples: [
                "✗ Although it was raining, {n:but} we played football.",
                "✓ {c:Although} it was raining, we played football.",
                "✓ It was raining, {c:but} we played football."
              ] }
          ],
          worked: {
            q: "Join the two ideas with although: “I was very tired.” + “I finished my homework.”",
            steps: [
              "Are the two ideas different / surprising together? Yes: tired, but finished.",
              "Put although before the first idea: Although I was very tired",
              "Add a comma, then the second idea.",
              "Do not add but."
            ],
            a: "{c:Although} {s:I} {v:was} very tired, {s:I} {v:finished} my homework."
          },
          notes: [
            "although + subject + verb (Although it was raining, …).",
            "however + comma, at the start of the second idea (However, …).",
            "Never: although … but."
          ] },

        { type: "activity", title: "Complete the following sentences:", page: 58, source: "book", stage: "guided",
          instructions: "Complete each sentence with your own idea. The two ideas must be different (contrast).", instructionsAr: "أكمل كل جملة بفكرة من عندك، ويجب أن تكون الفكرتان متعاكستين.",
          items: [
            { t: "short", q: "• ……………………, however, he didn’t get the job.", model: "He had a lot of experience, however, he didn’t get the job.", open: true, hint: "Write something good first: He studied hard / He was very clever…" },
            { t: "short", q: "• ……………………, although it was raining.", model: "We went to the park, although it was raining.", open: true, hint: "Write an action people did not stop: We played outside…" },
            { t: "short", q: "• Although she knew she was wrong, ……………………", model: "Although she knew she was wrong, she didn’t say sorry.", open: true, hint: "What did she do (or not do)? she didn’t …" },
            { t: "short", q: "• I didn’t like the film, however, ……………………", model: "I didn’t like the film, however, my brother loved it.", open: true, hint: "Write something positive about the film or someone who liked it." }
          ] },

        { type: "discuss", title: "Speaking", page: 58, source: "book",
          instructions: "You are starting a small business with a group of friends and you want to advertise your product.",
          prompts: ["Which social media would you choose?", "Discuss what specific features of that social media would make it useful."],
          starters: ["We would choose … because …", "One useful feature is …", "Although … is popular, we prefer … because …", "It is useful for our product because …"],
          image: null, emoji: "🛍️", seconds: 180 },

        { type: "activity", title: "Extra Practice: Step 1 — although or however?", source: "extra", stage: "guided",
          instructions: "Choose the correct connector.", instructionsAr: "اختر أداة الربط الصحيحة.",
          items: [
            { t: "fill", q: "____ it was cold, we went swimming.", answer: ["Although", "Though", "Even though"], bank: ["Although", "However"], hint: "Is there a comma after the gap?", why: "Although + subject + verb (it was cold) at the start of the sentence." },
            { t: "fill", q: "Ali was tired. ____, he finished his homework.", answer: ["However"], bank: ["Although", "However"], hint: "There is a comma right after the gap.", why: "However starts the second idea and has a comma after it." },
            { t: "fill", q: "My phone is old. ____, it works very well.", answer: ["However"], bank: ["Although", "However"], why: "However + comma at the start of the second sentence." },
            { t: "fill", q: "We enjoyed the trip ____ the bus was late.", answer: ["although", "though", "even though"], bank: ["although", "however"], why: "although + subject + verb (the bus was late) in the middle — no comma needed." },
            { t: "fill", q: "____ he studied hard, he didn’t pass the test.", answer: ["Although", "Though", "Even though"], bank: ["Although", "However"], why: "Although + subject + verb, then a comma and the second idea." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "Make a sentence with although.", words: ["Although", "it", "was", "late,", "we", "watched", "the", "film."], answer: ["Although it was late, we watched the film."], hint: "Start with Although.", why: "Although + subject + verb, comma, second idea." },
            { t: "order", q: "Make a sentence with however.", words: ["However,", "it", "is", "very", "useful."], answer: ["However, it is very useful."], hint: "However comes first, with a comma.", why: "However, + the second idea." },
            { t: "order", q: "Make a sentence with although in the middle.", words: ["I", "use", "my", "phone", "although", "it", "is", "old."], answer: ["I use my phone although it is old."], hint: "Main idea first, then although + subject + verb.", why: "No comma is needed when although is in the middle." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Join and fix (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake, then join the ideas.", instructionsAr: "صحّح الخطأ ثم اربط الفكرتين.",
          items: [
            { t: "fix", q: "{However} it was late, we watched the film.", answer: ["Although", "Though", "Even though"], hint: "A subject + verb comes right after the connector.", why: "Although + subject + verb starts the sentence. However needs a comma and usually starts a second sentence." },
            { t: "fix", q: "My sister was ill. {Although}, she went to school.", answer: ["However"], hint: "There is a comma after the connector.", why: "However, + second idea." },
            { t: "short", q: "Join with although: “Social media is useful.” + “Some people use it too much.”", model: "Although social media is useful, some people use it too much.", keywords: [["although"], ["useful"]], hint: "Although + first idea, comma, second idea." },
            { t: "short", q: "Join with however: “Mobile phones are expensive.” + “Everybody wants one.”", model: "Mobile phones are expensive. However, everybody wants one.", keywords: [["however"], ["everybody", "everyone"]], hint: "First sentence. However, second sentence." },
            { t: "short", q: "Write your own sentence about the internet with although.", model: "Although the internet is useful, it can waste our time.", open: true, hint: "Although the internet is …, …" }
          ] }
      ],
      game: { kind: "quiz", title: "Contrast Quiz",
        items: [
          { t: "choose", q: "(Although / However) it was hot, we played outside.", options: ["Although", "However"], answer: 0, why: "Although + subject + verb." },
          { t: "choose", q: "He was hungry. (Although / However), he didn’t eat.", options: ["Although", "However"], answer: 1, why: "However, + second idea." },
          { t: "mcq", q: "Which sentence is correct?", options: ["Although it was raining, but we went out.", "Although it was raining, we went out."], answer: 1, why: "Do not use although and but together." },
          { t: "mcq", q: "What comes after “however” at the start of a sentence?", options: ["a comma", "a question mark", "nothing"], answer: 0, why: "However, …" },
          { t: "choose", q: "I like my phone (although / however) it is old.", options: ["although", "however"], answer: 0, why: "although + subject + verb in the middle of the sentence." }
        ] },
      teacher: {
        notes: [
          "Warm-up: write two surprising ideas on the board. Ask students to join them.",
          "Show the book example (from the text, paragraph 4). Underline although and the two ideas.",
          "Teach: although + subject + verb; however + comma. Stress: never although … but.",
          "Book task: students complete the four sentences with their own ideas. Accept any logical contrast.",
          "Speaking: groups choose a social media platform for their product and give reasons (features)."
        ],
        pair: ["A says an idea (My phone is old.). B continues with However, … (However, it works well.). Swap.", "Pairs complete the four book sentences, then compare with another pair."],
        group: ["Business groups: choose a product and a social media app. Present 3 useful features to the class using although/however once."],
        quick: [
          { q: "What comes after although?", a: "A subject + verb (Although it was raining, …)." },
          { q: "Where do we put the comma with however?", a: "After however (However, …)." },
          { q: "Correct: Although he was tired, but he worked.", a: "Although he was tired, he worked." },
          { q: "Join: It was expensive. I bought it. (however)", a: "It was expensive. However, I bought it." }
        ]
      }
    },

    // ───────────────────────── LESSON 3 — WRITING ─────────────────────────
    {
      id: "u7l3", num: 3, skill: "Writing",
      title: "“Social media can be a blessing or a curse.”",
      pages: [58, 58],
      status: "complete",
      canDo: ["Express opinions", "Give reasons"],
      goals: ["Make notes for and against social media.", "Write an argumentative paragraph.", "Use the checklist."],
      goalsAr: ["أدوّن أفكارًا مع وسائل التواصل وضدها.", "أكتب فقرة جدلية.", "أستخدم قائمة التحقق."],
      warmup: {
        title: "Boon or Bane?",
        image: null,
        emoji: "👍👎",
        prompts: ["Is social media a blessing (good) or a curse (bad)?", "Give one reason."],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "activity", title: "a. Fill in the table with ideas for and against social media.", page: 58, source: "book",
          instructions: "Write four ideas for social media and four ideas against it. You can use ideas from the text.", instructionsAr: "اكتب أربع أفكار مع وسائل التواصل وأربع أفكار ضدها.",
          items: [
            { t: "table", q: "“Social media can be a blessing or a curse.”", open: true,
              head: ["For", "Against"],
              rows: [
                [{ open: true, model: "We can stay in touch with friends around the world." }, { open: true, model: "It makes us less social in real life." }],
                [{ open: true, model: "It is a great way to raise money for charity." }, { open: true, model: "People become obsessed with notifications." }],
                [{ open: true, model: "We can learn news and information quickly." }, { open: true, model: "People confuse social media with reality." }],
                [{ open: true, model: "Small businesses can advertise their products." }, { open: true, model: "It can waste our time." }]
              ] }
          ] },

        { type: "write", title: "b. In your notebook, develop your notes into an argumentative paragraph explaining whether you are for or against social media.", page: 58, source: "book",
          instructions: "Use your notes from the table. Say if you are for or against social media, give reasons, and finish with your opinion.",
          wordBank: ["In my opinion,", "I believe that", "Firstly,", "Secondly,", "Although", "However,", "For example,", "In conclusion,"],
          frame: [
            { label: "Topic sentence (for or against)", hint: "In my opinion, social media is a blessing / a curse because …" },
            { label: "Reasons and details", hint: "Firstly, … For example, … Secondly, … Although …, …" },
            { label: "Conclusion", hint: "In conclusion, … (say your opinion again in a way readers will remember)" }
          ],
          model: "In my opinion, social media is a blessing if we use it in the right way. Firstly, it helps us stay in touch with friends and family around the world. For example, I can see my cousin’s pictures from London every day. Secondly, people can use it to raise money for charity and help others. Although some people become obsessed with their phones, we can control the time we spend online. In conclusion, social media is a useful tool, not a curse, when we use it wisely.",
          modelFromBook: false,
          checklist: ["I started with a capital letter.", "I ended each sentence with a full stop.", "I used although or however.", "I answered the task."],
          bookChecklist: [
            "Did I express my opinion in the topic sentence (for or against)?",
            "Did I provide reasons and details to support my argument?",
            "Did I conclude by summarizing my opinion in a way readers will remember?"
          ],
          minWords: 70 },

        { type: "activity", title: "Extra Practice: Topic sentence, reason or conclusion?", source: "extra", stage: "guided",
          instructions: "What part of the paragraph is each sentence?", instructionsAr: "ما جزء الفقرة الذي تمثّله كل جملة؟",
          items: [
            { t: "mcq", q: "“In my opinion, social media is a curse for teenagers.”", options: ["Topic sentence", "Reason / detail", "Conclusion"], answer: 0, why: "It gives the writer’s opinion at the start." },
            { t: "mcq", q: "“For example, many students stay up late to check messages.”", options: ["Topic sentence", "Reason / detail", "Conclusion"], answer: 1, why: "“For example” gives a detail to support the opinion." },
            { t: "mcq", q: "“In conclusion, we should spend less time online and more time with real people.”", options: ["Topic sentence", "Reason / detail", "Conclusion"], answer: 2, why: "“In conclusion” sums up the opinion at the end." }
          ] }
      ],
      game: { kind: "sort", title: "For or Against?", buckets: ["For social media", "Against social media"],
        cards: [["stay in touch with friends", 0], ["raise money for charity", 0], ["advertise a product", 0], ["see friends’ pictures and adventures", 0], ["less social in real life", 1], ["obsessed with notifications", 1], ["unrealistic images", 1], ["ignore the people around us", 1]] },
      teacher: {
        notes: [
          "Brainstorm on the board: two columns For / Against. Use ideas from the text (pp. 57–58).",
          "Students choose a side. Model a topic sentence: In my opinion, social media is …",
          "Show the paragraph frame: topic sentence → reasons with examples → conclusion.",
          "Students write, then use the book checklist to check their paragraph.",
          "The model answer is ours (not from the book); show it after students write."
        ],
        pair: ["Pairs swap paragraphs and tick the three checklist questions for each other.", "Debate in pairs: A is for, B is against. Each gives two reasons."],
        group: ["Class debate: “Social media can be a blessing or a curse.” Two teams, three speakers each."],
        quick: [
          { q: "Where do you write your opinion?", a: "In the topic sentence (first sentence)." },
          { q: "Give one idea for social media.", a: "e.g. It helps us stay in touch with friends." },
          { q: "Give one idea against social media.", a: "e.g. It makes us less social in real life." }
        ]
      }
    },

    // ───────────────────────── LESSON 4 — LISTENING ─────────────────────────
    {
      id: "u7l4", num: 4, skill: "Listening",
      title: "Leaving Messages",
      pages: [59, 59],
      status: "complete",
      canDo: ["Leave a message", "Talk about plans/ arrangements"],
      goals: ["Talk about voicemail.", "Listen to three phone messages.", "Complete and act out a phone call."],
      goalsAr: ["أتحدث عن البريد الصوتي.", "أستمع إلى ثلاث رسائل هاتفية.", "أكمل مكالمة هاتفية وأمثّلها."],
      warmup: {
        title: "Look at the picture",
        image: "crops/u7l4-warmup.jpg",
        emoji: "📞",
        prompts: ["What is the man pressing on his phone?", "Have you ever left a message on someone’s phone?"],
        seconds: 60
      },
      vocab: [
        { w: "voicemail", pos: "noun", emoji: "📳", def: "a phone service that records a spoken message when nobody answers", ex: "I left a message on his voicemail.", exFromBook: false, ar: "البريد الصوتي" },
        { w: "message", pos: "noun", emoji: "💬", def: "information you send or leave for another person", ex: "I’m sorry but he’s not home, would you like to leave a message?", exFromBook: true, ar: "رسالة" },
        { w: "caller", pos: "noun", emoji: "☎️", def: "a person who is making a phone call", ex: "The three callers are talking about their plans.", exFromBook: false, ar: "المتصل" },
        { w: "arrangement", pos: "noun", emoji: "🗓️", def: "a plan that you have made with someone for the future", ex: "The three callers are talking about future plans and arrangements.", exFromBook: true, ar: "ترتيب / موعد متفق عليه" }
      ],
      sections: [
        { type: "activity", title: "1. Look at the picture and fill in the following table.", page: 59, source: "book",
          instructions: "Look at the phone in the picture. Fill in the table.", instructionsAr: "انظر إلى الهاتف في الصورة واملأ الجدول.",
          image: "crops/u7l4-warmup.jpg",
          items: [
            { t: "table", q: "Fill in the table.",
              head: ["", "Your answer"],
              rows: [
                ["Name of the service", { answer: ["voicemail", "voice mail", "a voicemail", "the voicemail"], model: "Voicemail" }],
                ["When to use it", { open: true, model: "When you call someone and they do not answer (they are busy or not available)." }],
                ["Its importance", { open: true, model: "You can leave a message, so the person knows why you called and can call you back." }]
              ] }
          ] },

        { type: "listen", title: "2. a. Listen and choose the best answer", page: 59, source: "book",
          needsAudio: true, track: "7.1",
          instructions: "Listen (track 7.1). The three callers are talking about:",
          items: [
            { t: "mcq", q: "The three callers are talking about:", options: ["a. Likes and dislikes", "b. Future plans and arrangements", "c. Mistakes they made in the past"], open: true }
          ] },

        { type: "listen", title: "b. Listen again and match the activities with the callers.", page: 59, source: "book",
          needsAudio: true, track: "7.1",
          instructions: "Listen again. Write the number of the activity next to each caller: 1. Going to the beach  2. Staying at home  3. Having a guitar lesson",
          items: [
            { t: "table", q: "Match the activities with the callers.", open: true,
              head: ["Caller", "Activity (1, 2 or 3)"],
              rows: [["Kevin", { open: true }], ["Suzan", { open: true }], ["Ali", { open: true }]] }
          ] },

        { type: "activity", title: "Speaking — 3. a. Complete the phone conversation between Peter and the mother.", page: 59, source: "book",
          instructions: "Peter calls his friend, but his mother answers the phone. She tells him that his friend is not at home, so Peter leaves a message.", instructionsAr: "يتصل بيتر بصديقه فترد أمه وتخبره أنه ليس في البيت، فيترك بيتر رسالة. أكمل المحادثة.",
          items: [
            { t: "short", q: "Mother: Hello. This is Mrs. Jones. Who’s calling please?\nPeter: ……………………", model: "Hello, Mrs. Jones. This is Peter, Tom’s friend. Can I speak to Tom, please?", open: true, hint: "Say who you are and ask for your friend." },
            { t: "short", q: "Mother: I’m sorry but he’s not home, would you like to leave a message?\nPeter: Could you please tell him ……………………", model: "Could you please tell him that I’m not going to the football match tomorrow because I broke my leg?", open: true, hint: "Look at the mother’s next answer: “Oh my God! I can’t believe it.” — the news is surprising!" },
            { t: "short", q: "Mother: Oh my God! I can’t believe it. I’ll tell him as soon as he gets home.\nPeter: ……………………\nMother: Bye.", model: "Thank you very much, Mrs. Jones. Goodbye.", open: true, hint: "Say thank you and goodbye." }
          ] },

        { type: "speak", title: "Role-Playing: b. Practise the above dialogue with your partner.", page: 59, source: "book",
          instructions: "Practise the dialogue with your partner. Then swap roles.",
          dialogue: [
            { who: "Mother", text: "Hello. This is Mrs. Jones. Who’s calling please?" },
            { who: "Peter", text: "" },
            { who: "Mother", text: "I’m sorry but he’s not home, would you like to leave a message?" },
            { who: "Peter", text: "" },
            { who: "Mother", text: "Oh my God! I can’t believe it. I’ll tell him as soon as he gets home." },
            { who: "Peter", text: "" },
            { who: "Mother", text: "Bye." }
          ],
          starters: ["Hello, this is …", "Can I speak to …, please?", "Could you please tell him that …", "Thank you very much. Bye."],
          record: true },

        { type: "listen", title: "Extra Practice: Three Voicemail Messages (generated voice, not the book recording)", source: "extra",
          instructions: "This is NOT the book audio. It is a short practice script read by a computer voice. Listen and answer.",
          script: [
            { who: "Voicemail", text: "Hello. Please leave a message after the beep." },
            { who: "Dana", text: "Hi Noura, it’s Dana. I’m visiting my aunt on Friday morning, but I’m free in the afternoon. Call me back. Bye!" },
            { who: "Yousef", text: "Hello Noura, this is your cousin Yousef. We’re having a family dinner at Grandma’s house on Saturday at seven. Please don’t be late." },
            { who: "Mr Saleh", text: "Good morning, this is Mr Saleh from the sports club. Your swimming lesson is moving from Monday to Tuesday at four o’clock. Thank you." }
          ],
          items: [
            { t: "mcq", q: "What is Dana doing on Friday morning?", options: ["She is visiting her aunt.", "She is going swimming.", "She is staying at home."], answer: 0, why: "“I’m visiting my aunt on Friday morning.”" },
            { t: "mcq", q: "When is Dana free?", options: ["on Friday morning", "on Friday afternoon", "on Saturday"], answer: 1, why: "“…but I’m free in the afternoon.”" },
            { t: "mcq", q: "Where is the family dinner?", options: ["at a restaurant", "at Grandma’s house", "at the sports club"], answer: 1, why: "“We’re having a family dinner at Grandma’s house.”" },
            { t: "fill", q: "The family dinner is on Saturday at ____ o’clock.", answer: ["seven", "7"], why: "“…on Saturday at seven.”" },
            { t: "mcq", q: "When is the swimming lesson now?", options: ["Monday at four", "Tuesday at four", "Tuesday at seven"], answer: 1, why: "“…moving from Monday to Tuesday at four o’clock.”" }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: show the voicemail picture. Students fill in the table (name, when, importance).",
          "Play track 7.1 (book audio) for 2a, then again for 2b. There is no answer key — check with the recording.",
          "Speaking: students complete Peter’s lines. The mother says “Oh my God! I can’t believe it.” — so Peter’s message must be surprising news.",
          "Role-play in pairs; then swap roles.",
          "If the book audio is not available, use the Extra voicemail script (computer voice)."
        ],
        pair: ["Phone role-play: A calls, B is the parent and takes a message. Swap.", "Leave a voicemail: each student says a 3-sentence message about a plan for the weekend."],
        group: ["Groups write a short phone conversation (4 lines each) and act it in front of the class."],
        quick: [
          { q: "What is voicemail?", a: "A phone service that records a message when nobody answers." },
          { q: "How do you start a phone call politely?", a: "Hello, this is … Can I speak to …, please?" },
          { q: "How do you ask someone to pass a message?", a: "Could you please tell him that …?" }
        ]
      }
    },

    // ───────────────────────── LESSON 5 — GRAMMAR ─────────────────────────
    {
      id: "u7l5", num: 5, skill: "Grammar",
      title: "Present Continuous for Future Arrangements",
      pages: [60, 60],
      status: "complete",
      canDo: ["Use present continuous for future arrangements", "Talk about plans/ arrangements"],
      goals: ["Talk about plans you have arranged.", "Use am / is / are + verb-ing + a future time.", "Ask your partner about his/her plans."],
      goalsAr: ["أتحدث عن خطط رتّبتها مسبقًا.", "أستخدم am / is / are + الفعل مع ing + وقت في المستقبل.", "أسأل زميلي عن خططه."],
      warmup: {
        title: "My diary",
        image: null,
        emoji: "📒",
        prompts: ["What are you doing after school today?", "Are you doing anything special this weekend?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Present Continuous for Future Arrangements", page: 60,
          steps: [
            { title: "Step 1 — The book’s rule",
              text: "You can use the present continuous to talk about plans/arrangements for the future.",
              textAr: "يمكن استخدام المضارع المستمر للتحدث عن الخطط والترتيبات في المستقبل.",
              examples: [
                "{s:Ali} {a:is} {v:going} to the beach {t:on Saturday}.",
                "{s:Kevin} {a:is} {v:working} on his project {t:on Friday}."
              ] },
            { title: "Step 2 — The form", source: "extra",
              text: "am / is / are + verb-ing + a future time (tonight, tomorrow, on Saturday, next week). The future time tells us it is not happening now.",
              textAr: "am / is / are + الفعل مع ing + كلمة تدل على المستقبل مثل tonight و tomorrow و on Saturday.",
              examples: [
                "{s:I} {a:am} {v:visiting} my grandma {t:tomorrow}.",
                "{s:We} {a:are} {v:playing} football {t:on Saturday}."
              ] },
            { title: "Step 3 — Arranged plans", source: "extra",
              text: "We use it for plans we have already arranged: a time with a dentist, a ticket, a meeting with a friend.",
              textAr: "نستخدمه للخطط المتفق عليها مسبقًا: موعد عند الطبيب، تذكرة سفر، لقاء مع صديق.",
              examples: [
                "{s:Omar} {a:is} {v:seeing} the dentist {t:on Monday}. (He has an appointment.)",
                "{s:Fatma} {a:is} {v:flying} to Dubai {t:on Thursday}. (She has a ticket.)"
              ] },
            { title: "Step 4 — Negatives and questions", source: "extra",
              text: "Negative: am not / isn’t / aren’t + verb-ing. Question: Am / Is / Are + subject + verb-ing …?",
              textAr: "النفي: am not / isn’t / aren’t + الفعل مع ing. السؤال: نبدأ بـ Am / Is / Are.",
              examples: [
                "{s:I} {n:am not} {v:going} out {t:tonight}.",
                "{q:What} {a:are} {s:you} {v:doing} {t:tonight}? (from the book dialogue)",
                "{a:Are} {s:you} {v:doing} anything {t:tomorrow}?"
              ] }
          ],
          worked: {
            q: "Look at the table: Fatma — Tuesday — Visit grandma. Write the sentence.",
            steps: [
              "Subject: Fatma → one person → is.",
              "Verb: visit → visiting (add -ing).",
              "Add the day: on Tuesday."
            ],
            a: "{s:Fatma} {a:is} {v:visiting} grandma {t:on Tuesday}."
          },
          notes: [
            "Same form as the present continuous for now — the time word (tonight, on Friday) shows the future.",
            "-ing spelling: see → seeing, fly → flying, meet → meeting, play → playing, work → working."
          ] },

        { type: "activity", title: "Look at the table and write sentences about their future arrangements.", page: 60, source: "book", stage: "guided",
          instructions: "Read the table. Complete the sentences about Omar and Fatma.", instructionsAr: "اقرأ الجدول وأكمل الجمل عن عمر وفاطمة.",
          items: [
            { t: "table", q: "The table from the book:",
              head: ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              rows: [
                ["Omar", "", "See the dentist", "", "", "Meet a friend", "Work on the English project", "Play football"],
                ["Fatma", "Go to the gymnasium", "", "Visit grandma", "", "Fly to Dubai", "", ""]
              ] },
            { t: "fill", q: "1. Fatma ____ to the gym on Sunday. (example)", answer: ["is going", "'s going"], why: "This is the book’s example: Fatma is going to the gym on Sunday." },
            { t: "fill", q: "Omar ____ the dentist on Monday.", answer: ["is seeing", "'s seeing"], hint: "see → seeing", why: "Omar = he → is + seeing." },
            { t: "fill", q: "Fatma ____ grandma on Tuesday.", answer: ["is visiting", "'s visiting"], hint: "visit → visiting", why: "Fatma = she → is + visiting." },
            { t: "fill", q: "Omar ____ a friend on Thursday.", answer: ["is meeting", "'s meeting"], hint: "meet → meeting", why: "is + meeting." },
            { t: "fill", q: "Fatma ____ to Dubai on Thursday.", answer: ["is flying", "'s flying"], hint: "fly → flying", why: "is + flying (just add -ing)." },
            { t: "fill", q: "Omar ____ on the English project on Friday.", answer: ["is working", "'s working"], why: "is + working." },
            { t: "fill", q: "Omar ____ football on Saturday.", answer: ["is playing", "'s playing"], why: "is + playing." }
          ] },

        { type: "speak", title: "5. Ask your partner questions to find out about his/her future plans.", page: 60, source: "book",
          instructions: "(Practise the dialogue with your partner.)",
          dialogue: [
            { who: "A", text: "What are you doing tonight?" },
            { who: "B", text: "" },
            { who: "A", text: "Are you doing anything tomorrow?" },
            { who: "B", text: "" },
            { who: "A", text: "" },
            { who: "B", text: "" }
          ],
          note: "In the book, B’s first answer starts with “I’m …”, and A completes the last question: “…… plans for the weekend?”",
          starters: ["I’m …ing … tonight.", "Yes, I’m …ing … tomorrow.", "No, I’m not doing anything.", "What are your plans for the weekend?", "Have you got any plans for the weekend?", "I’m visiting … on Friday."],
          record: true },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the right form", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "We ____ to Kuwait Towers tomorrow.", options: ["are going", "is going", "going"], answer: 0, why: "We → are + going." },
            { t: "mcq", q: "My sister ____ her friends on Friday.", options: ["are meeting", "is meeting", "meet"], answer: 1, why: "My sister = she → is meeting." },
            { t: "mcq", q: "I ____ to the doctor next Monday.", options: ["am going", "is going", "are going"], answer: 0, why: "I → am going." },
            { t: "mcq", q: "____ you playing football this evening?", options: ["Is", "Are", "Do"], answer: 1, why: "Question: Are + you + playing." },
            { t: "mcq", q: "They ____ coming to the party on Saturday. They are busy.", options: ["isn’t", "aren’t", "don’t"], answer: 1, why: "They → aren’t + coming." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence Builder", source: "extra", stage: "guided",
          instructions: "Put the words in order.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "Make a sentence.", words: ["I", "am", "visiting", "my", "uncle", "tomorrow."], answer: ["I am visiting my uncle tomorrow."], why: "Subject + am + verb-ing + future time." },
            { t: "order", q: "Make a question.", words: ["What", "are", "you", "doing", "tonight?"], answer: ["What are you doing tonight?"], why: "Question word + are + you + verb-ing + time." },
            { t: "order", q: "Make a sentence.", words: ["Ali", "is", "going", "to", "the", "beach", "on", "Saturday."], answer: ["Ali is going to the beach on Saturday."], why: "The book’s example sentence." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — My week (on your own)", source: "extra", stage: "independent",
          instructions: "Fix the mistake. Then write about your own plans.", instructionsAr: "صحّح الخطأ ثم اكتب عن خططك.",
          items: [
            { t: "fix", q: "Omar {are} meeting a friend on Thursday.", answer: ["is"], why: "Omar = he → is." },
            { t: "fix", q: "We are {play} football on Saturday.", answer: ["playing"], why: "are + verb-ing → playing." },
            { t: "fix", q: "Fatma is {fly} to Dubai on Thursday.", answer: ["flying"], why: "is + verb-ing → flying." },
            { t: "short", q: "Write two sentences about your plans for this weekend.", model: "I’m visiting my grandparents on Friday. On Saturday, I’m playing football with my friends.", open: true, hint: "I’m …ing … on Friday." }
          ] }
      ],
      game: { kind: "scramble", title: "Plan Builder",
        sentences: [
          "Ali is going to the beach on Saturday.",
          "Kevin is working on his project on Friday.",
          "Omar is seeing the dentist on Monday.",
          "Fatma is flying to Dubai on Thursday.",
          "What are you doing tonight?"
        ] },
      teacher: {
        notes: [
          "Warm-up: ask “What are you doing after school today?” — write answers on the board.",
          "Read the book box: the present continuous can talk about future arrangements. Point to the time words.",
          "Use the table: model Fatma’s example, then students write about Omar and Fatma.",
          "Pairs practise the book dialogue (exercise 5) with their real plans.",
          "Extra Steps 1–3 for practice; finish with the Grammar Lab."
        ],
        pair: ["Diary game: each student writes 3 plans in a secret diary; partner asks “Are you … on …?” to guess them.", "Pairs practise the book dialogue, then swap roles."],
        group: ["Class survey: “What are you doing this weekend?” Each group reports 3 sentences: Ahmed is visiting …"],
        quick: [
          { q: "Make a sentence: I / visit / grandma / tomorrow.", a: "I am visiting my grandma tomorrow." },
          { q: "What shows the sentence is about the future?", a: "The time word (tomorrow, on Friday, next week)." },
          { q: "Make a question: you / do / anything / tomorrow", a: "Are you doing anything tomorrow?" },
          { q: "What is Omar doing on Saturday?", a: "He is playing football." }
        ]
      }
    },

    // ───────────────────────── LESSON 6 — READING ─────────────────────────
    {
      id: "u7l6", num: 6, skill: "Reading",
      title: "Smart Living (Opinion Text)",
      pages: [61, 62],
      status: "complete",
      canDo: ["Express opinions", "Make guesses"],
      goals: ["Read four opinions about smartphones.", "Say what each person thinks.", "Guess who each person is.", "Learn 7 new words."],
      goalsAr: ["أقرأ أربعة آراء عن الهواتف الذكية.", "أقول ماذا يرى كل شخص.", "أخمّن من هو كل شخص.", "أتعلّم 7 كلمات جديدة."],
      warmup: {
        title: "Before you read — Think, Pair, Share",
        image: "crops/u7l6-warmup.jpg",
        emoji: "📱",
        prompts: ["Do you think mobile phones are a good invention? Why?", "Are there any places where you think mobile phones should be banned? Why?"],
        seconds: 90
      },
      vocab: [
        { w: "ban", pos: "verb", emoji: "🚫", def: "to say officially that people must not do or use something", ex: "Are there any places where you think mobile phones should be banned?", exFromBook: true, ar: "يحظر / يمنع" },
        { w: "worth", pos: "adjective", emoji: "💎", def: "having a value (of money or importance)", ex: "I wouldn’t give it up for all the money in the world, it’s worth a fortune to me.", exFromBook: true, ar: "يساوي / قيمته" },
        { w: "fortune", pos: "noun", emoji: "💰", def: "a very large amount of money", ex: "It’s worth a fortune to me.", exFromBook: true, ar: "ثروة" },
        { w: "gather", pos: "verb", emoji: "👨‍👩‍👧‍👦", def: "to come together in one place", ex: "I miss the old days when grandparents and grandchildren gathered to recount their favourite memories.", exFromBook: true, ar: "يجتمع" },
        { w: "recount", pos: "verb", emoji: "🗣️", def: "to tell a story about something that happened", ex: "Grandparents and grandchildren gathered to recount their favourite memories and family history.", exFromBook: true, ar: "يروي / يسرد" },
        { w: "application", pos: "noun", emoji: "🗺️", def: "a program on a phone or computer (an app)", ex: "I just looked up the directions on my Maps application.", exFromBook: true, ar: "تطبيق" },
        { w: "handy", pos: "adjective", emoji: "👌", def: "useful and easy to use", ex: "That was really handy.", exFromBook: true, ar: "مفيد / سهل الاستعمال" }
      ],
      sections: [
        { type: "reading", title: "2. Read and fill in the table with what each of the following persons thinks of mobile phones.", page: 61,
          instructions: "A radio station recently asked its listeners for their points of view about smartphones. This is what some of them said.",
          blocks: [
            { head: "Omar", paras: ["“I can’t live without my smartphone. I think I’m addicted to it. In fact, I post over ten images a day and send at least thirty text messages. I just like to be in touch with all my friends. I wouldn’t give it up for all the money in the world, it’s worth a fortune to me.”"] },
            { head: "Mariam", paras: ["“I have a mobile, but I try not to use it excessively. I worry about its harmful effects on my health. I read that a lot of studies suggest a possible link between frequent headaches and smartphones. I always keep it away from my children.”"] },
            { head: "Jaber", paras: ["“I think smartphones, tablets and computers have a very bad effect on people. They seem to be stuck to those devices all the time. I miss the old days when grandparents and grandchildren gathered to recount their favourite memories and family history.”"] },
            { head: "Jassim", paras: ["“I think they’re really useful. It’s great to be able to call or text an employee for an important meeting. The other day my car broke down on the highway and it was great to be able to phone for help. Another time, I got lost on the way to a friend’s house and I just looked up the directions on my Maps application. That was really handy.”"] }
          ],
          speaker: "A radio station (ON AIR)" },

        { type: "activity", title: "Fill in the table with what each person thinks of mobile phones.", page: 61, source: "book",
          instructions: "Write what each person thinks. Jaber is done for you.", instructionsAr: "اكتب رأي كل شخص في الهواتف المحمولة. رأي جابر مكتوب لك.",
          items: [
            { t: "table", q: "What does each person think of mobile phones?",
              head: ["Person", "What he/she thinks"],
              rows: [
                ["Omar", { open: true, model: "He can’t live without his smartphone; it is worth a fortune to him." }],
                ["Mariam", { open: true, model: "Mobile phones can have harmful effects on our health, so we should not use them excessively." }],
                ["Jaber", "Smart devices have changed our lives negatively."],
                ["Jassim", { open: true, model: "Smartphones are really useful and handy." }]
              ] }
          ] },

        { type: "activity", title: "3. Guess who the following people are:", page: 62, source: "book",
          instructions: "Read the opinions again. Match each person to who he/she is. Mariam = a) a mother is done for you.", instructionsAr: "خمّن من هو كل شخص. مريم = أم (مثال).",
          items: [
            { t: "match", q: "Guess who the following people are:",
              pairs: [["Omar", "b) a student"], ["Mariam", "a) a mother"], ["Jaber", "d) an old man"], ["Jassim", "c) a manager"]],
              hint: "Look for clues: “my children”, “an employee”, “I miss the old days”, “all my friends”.",
              why: "Mariam keeps the phone away from “my children” → a mother (the book’s example). Jassim calls “an employee” for a meeting → a manager. Jaber misses “the old days” with grandparents and grandchildren → an old man. Omar is the one left: he posts images and texts his friends all day → a student." }
          ] },

        { type: "activity", title: "Extra Practice: Who said it?", source: "extra", stage: "guided",
          instructions: "Choose the person.", instructionsAr: "اختر الشخص.",
          items: [
            { t: "mcq", q: "“I post over ten images a day.”", options: ["Omar", "Mariam", "Jaber", "Jassim"], answer: 0, why: "Omar said this." },
            { t: "mcq", q: "“I worry about its harmful effects on my health.”", options: ["Omar", "Mariam", "Jaber", "Jassim"], answer: 1, why: "Mariam worries about her health." },
            { t: "mcq", q: "“My car broke down on the highway.”", options: ["Omar", "Mariam", "Jaber", "Jassim"], answer: 3, why: "Jassim phoned for help." },
            { t: "mcq", q: "“They seem to be stuck to those devices all the time.”", options: ["Omar", "Mariam", "Jaber", "Jassim"], answer: 2, why: "Jaber thinks devices have a bad effect." },
            { t: "mcq", q: "Who thinks phones are positive?", options: ["Omar and Jassim", "Mariam and Jaber", "Only Jaber", "Nobody"], answer: 0, why: "Omar loves his phone and Jassim finds it useful. Mariam and Jaber worry about phones." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete with a word from the text.", instructionsAr: "أكمل بكلمة من النص.",
          items: [
            { t: "fill", q: "This old ring is ____ a lot of money.", answer: ["worth"], bank: ["worth", "handy", "gather", "ban"], why: "worth = has a value of." },
            { t: "fill", q: "A small torch is very ____ when the lights go out.", answer: ["handy"], bank: ["worth", "handy", "fortune", "recount"], why: "handy = useful and easy to use." },
            { t: "fill", q: "Some schools ____ mobile phones in class.", answer: ["ban"], bank: ["ban", "gather", "recount", "handy"], why: "ban = say people must not use something." },
            { t: "fill", q: "Our family ____ at Grandma’s house every Friday.", answer: ["gathers", "gather"], bank: ["gathers", "bans", "recounts"], why: "gather = come together. Our family (it) → gathers." },
            { t: "fill", q: "I downloaded a new ____ to learn English.", answer: ["application", "app"], bank: ["application", "fortune", "worth"], why: "An application is a program on a phone." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Warm-up: Think, Pair, Share. Collect places where phones should be banned (mosque, exam, hospital, while driving…).",
          "Read each speaker. After each one ask: Is this person for or against smartphones? Find one clue.",
          "Students fill in the table in their own words (Jaber is the example).",
          "Guess who: students find clue words (my children, an employee, the old days).",
          "Link to Unit 7 speech act “Make guesses”: I think Jassim is a manager because …"
        ],
        pair: ["A reads one opinion aloud as a radio caller; B guesses who it is and gives a clue.", "Pairs agree/disagree with each speaker: I agree with Jassim because …"],
        group: ["Radio show: groups record a short “ON AIR” programme with three callers giving opinions about phones."],
        quick: [
          { q: "Who is addicted to his smartphone?", a: "Omar." },
          { q: "Why does Mariam keep her phone away from her children?", a: "She worries about its harmful effects (headaches)." },
          { q: "How did a phone help Jassim when he got lost?", a: "He looked up the directions on his Maps application." },
          { q: "Who is the old man? Why?", a: "Jaber — he misses the old days when grandparents and grandchildren gathered." }
        ]
      }
    },

    // ───────────────────────── LESSON 7 — WRITING ─────────────────────────
    {
      id: "u7l7", num: 7, skill: "Writing",
      title: "Speaking and Writing: The Best Smartphone Application",
      pages: [62, 62],
      status: "complete",
      canDo: ["Express opinions", "Give reasons"],
      goals: ["Choose a useful smartphone application.", "Give reasons in a spider-gram.", "Write a two-paragraph report."],
      goalsAr: ["أختار تطبيقًا مفيدًا للهاتف الذكي.", "أكتب الأسباب في مخطط عنكبوتي.", "أكتب تقريرًا من فقرتين."],
      warmup: {
        title: "Apps we use",
        image: null,
        emoji: "📲",
        prompts: ["Which application do you use every day?", "What does it help you do?"],
        seconds: 60
      },
      vocab: [],
      sections: [
        { type: "write", title: "4. a. What smartphone application should everybody use? Discuss and fill in the spider-gram with reasons to support your choice. Share your ideas with other groups.", page: 62, source: "book",
          instructions: "In groups, choose one application. Write its name in the middle, then one reason in each bubble.",
          wordBank: ["useful", "handy", "easy to use", "free", "safe", "saves time", "helps us learn", "keeps us in touch"],
          frame: [
            { label: "Application (centre)", hint: "e.g. Maps, a dictionary app, WhatsApp…" },
            { label: "Reason 1", hint: "It helps us …" },
            { label: "Reason 2", hint: "It is …" },
            { label: "Reason 3", hint: "We can …" },
            { label: "Reason 4", hint: "It saves …" },
            { label: "Reason 5", hint: "It is good for …" }
          ],
          model: "Application: Maps. Reasons: it helps us find our way; it shows traffic; it is free; it saves time; it helps in an emergency.",
          modelFromBook: false,
          checklist: ["I wrote the name of one application.", "I wrote at least four reasons.", "I shared my ideas with another group."],
          minWords: 15 },

        { type: "write", title: "b. In your notebook, develop your notes into a two-paragraph report expressing your opinion about this application by discussing its features and benefits.", page: 62, source: "book",
          instructions: "Use your spider-gram. Paragraph 1: the topic and your opinion + the features. Paragraph 2: the benefits + your opinion again in different words.",
          wordBank: ["In my opinion,", "I believe", "One useful feature is", "It also", "For example,", "Although", "However,", "To sum up,"],
          frame: [
            { label: "Paragraph 1 — topic, opinion and features", hint: "In my opinion, everybody should use … because … One useful feature is …" },
            { label: "Paragraph 2 — benefits and conclusion", hint: "This application helps us … For example, … To sum up, … (your opinion in different words)" }
          ],
          model: "In my opinion, everybody should use a maps application on their smartphone. It has many useful features. It shows you the way to any place, it tells you how long the trip will take and it shows where the traffic is heavy. It also works by voice, so drivers do not need to look at the phone.\n\nThis application has a lot of benefits. Firstly, it saves time because you never get lost. For example, my father used it to find a new hospital in Jahra. Secondly, it can help in an emergency, because you can share your location with your family. To sum up, a maps application is a handy tool that makes our lives easier and safer.",
          modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I wrote two paragraphs.", "I gave features and benefits.", "I answered the task."],
          bookChecklist: [
            "Did I begin my report by stating the topic and my opinion?",
            "Did I use facts and details to support my opinion?",
            "Did I conclude by retelling my opinion in different words?"
          ],
          minWords: 80 },

        { type: "discuss", title: "Project idea (from the book)", page: 62, source: "book",
          instructions: "Imagine you work for a mobile phone company. Design a mobile phone of the future. Think about the features it has and what it can do. Draw the phone and mention all the features. Present your idea to the class.",
          prompts: ["What is the name of your phone?", "What features does it have?", "What can it do that phones today cannot do?"],
          starters: ["Our phone is called …", "It has …", "It can …", "One amazing feature is …"],
          image: null, emoji: "💡", seconds: 300 },

        { type: "activity", title: "Extra Practice: Feature or benefit?", source: "extra", stage: "guided",
          instructions: "A feature = what the app has or does. A benefit = how it helps you. Choose.", instructionsAr: "الميزة = ما يملكه التطبيق أو يفعله. الفائدة = كيف يساعدك. اختر.",
          items: [
            { t: "mcq", q: "“The app has a voice search.”", options: ["Feature", "Benefit"], answer: 0, why: "It tells us what the app has." },
            { t: "mcq", q: "“It saves me a lot of time.”", options: ["Feature", "Benefit"], answer: 1, why: "It tells us how the app helps the user." },
            { t: "mcq", q: "“It shows the weather for the next seven days.”", options: ["Feature", "Benefit"], answer: 0, why: "It describes what the app does." },
            { t: "mcq", q: "“I never get lost now.”", options: ["Feature", "Benefit"], answer: 1, why: "It shows how the app helps the user." }
          ] }
      ],
      game: { kind: "quiz", title: "Report Quiz",
        items: [
          { t: "mcq", q: "How should you begin your report?", options: ["By stating the topic and your opinion", "With a question for the teacher", "With the conclusion"], answer: 0, why: "Book checklist: begin by stating the topic and your opinion." },
          { t: "mcq", q: "What supports your opinion?", options: ["Facts and details", "Emojis", "Only your name"], answer: 0, why: "Book checklist: use facts and details." },
          { t: "mcq", q: "How should you conclude?", options: ["Retell your opinion in different words", "Copy the first sentence again", "Start a new topic"], answer: 0, why: "Book checklist: retell your opinion in different words." },
          { t: "mcq", q: "Which is a benefit?", options: ["It has a camera.", "It helps me keep in touch with my family."], answer: 1, why: "A benefit says how it helps you." },
          { t: "mcq", q: "How many paragraphs should your report have?", options: ["one", "two", "five"], answer: 1, why: "The book asks for a two-paragraph report." }
        ] },
      teacher: {
        notes: [
          "Groups choose one application everybody should use and fill in the spider-gram (5 reasons).",
          "Groups share their spider-grams; the class votes for the most useful app.",
          "Explain feature vs benefit (Extra), then the two-paragraph plan.",
          "Students write the report in their notebooks and check it with the book checklist.",
          "Tip at the bottom of p. 62: phone-of-the-future design project — can be homework, presented next lesson."
        ],
        pair: ["Pairs interview each other: Which app do you use most? Why? Then write one reason each.", "Pairs swap reports and tick the checklist."],
        group: ["Phone of the future: groups draw the phone, label the features and present it (book tip)."],
        quick: [
          { q: "What is a feature?", a: "Something the app has or can do." },
          { q: "What is a benefit?", a: "How the app helps you." },
          { q: "What goes in the conclusion?", a: "Your opinion again in different words." }
        ]
      }
    }
  ]
});

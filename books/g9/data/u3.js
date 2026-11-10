// Learning Unit 3 — Food for Life: Culture, Health, and the Future (printed pages 45, 48–57)
// Source: Grade 9 Student’s Book (new edition, First Term). The book’s answers (blue handwriting in the source)
// are used only as the answer key and as model answers; they are never shown as book text.
// Everything marked source: "extra" is not in the book.
BOOK.addUnit({
  id: "u3", num: 3, title: "Food for Life: Culture, Health, and the Future", titleAr: "الغذاء من أجل الحياة: الثقافة والصحة والمستقبل",
  pages: [45, 57], cover: 45,
  status: "complete",
  lessons: [

    /* ───────────────────────── LESSON 1 — READING (pp. 48–49) ───────────────────────── */
    {
      id: "u3l1", num: 1, skill: "Reading", title: "Tastes of the World: Exploring National Dishes", pages: [48, 49], status: "complete",
      canDo: [
        "I can analyse implicit and explicit details from a written text about food and culture from different countries.",
        "I can use food-related vocabulary and language to describe food tasting experiences."
      ],
      goals: ["Read about three national dishes: Machboos, pasta and sushi.", "Learn 13 new words.", "Find the main idea and food adjectives.", "Write and perform a short food vlog."],
      goalsAr: ["أقرأ عن ثلاثة أطباق وطنية: المچبوس والمعكرونة والسوشي.", "أتعلّم 13 كلمة جديدة.", "أجد الفكرة الرئيسية والصفات المتعلقة بالطعام.", "أكتب مدوّنة فيديو قصيرة عن الطعام وأقدّمها."],
      warmup: {
        title: "Before You Read", image: "crops/u3l1-dishes.jpg", emoji: "🍛", seconds: 90,
        instructions: "1. Look at the picture and answer these questions.",
        prompts: ["a. Can you name these dishes? What countries do they come from?", "b. Have you ever tasted any of them?"]
      },
      vocab: [
        { w: "reflect", pos: "verb", emoji: "🪞", def: "to show what something is like", ex: "Every country has special dishes that reflect its history, traditions, and lifestyle.", exFromBook: true, ar: "يعكس" },
        { w: "serve", pos: "verb", emoji: "🍽️", def: "to give food or drink to people at a meal", ex: "Whether it is a spicy meal cooked at home, or a famous dish served during celebrations, food connects people and cultures.", exFromBook: true, ar: "يقدّم (الطعام)" },
        { w: "symbol", pos: "noun", emoji: "🔣", def: "something that represents an idea or a group of people", ex: "Machboos is more than just a national dish in Kuwait; it is a symbol of the country’s rich history, culture, and family traditions.", exFromBook: true, ar: "رمز" },
        { w: "occasion", pos: "noun", emoji: "🎉", def: "a special event or celebration", ex: "For generations, Machboos has been at the heart of Kuwaiti life, bringing people together on both ordinary days and special occasions.", exFromBook: true, ar: "مناسبة" },
        { w: "aromatic", pos: "adjective", emoji: "🌿", def: "having a strong, nice smell", ex: "In the past, traders brought new spices to Kuwait, and families carefully chose aromatic ingredients to give Machboos its distinctive and spicy taste.", exFromBook: true, ar: "عطِر / ذو رائحة زكية" },
        { w: "ingredient", pos: "noun", emoji: "🧄", def: "one of the foods you use to make a dish", ex: "In the past, traders brought new spices to Kuwait, and families carefully chose aromatic ingredients to give Machboos its distinctive and spicy taste.", exFromBook: true, ar: "مكوّن" },
        { w: "distinctive", pos: "adjective", emoji: "⭐", def: "special and easy to recognise; different from others", ex: "In the past, traders brought new spices to Kuwait, and families carefully chose aromatic ingredients to give Machboos its distinctive and spicy taste.", exFromBook: true, ar: "مميّز" },
        { w: "recipe", pos: "noun", emoji: "📜", def: "instructions that tell you how to cook a dish", ex: "Recipes were often passed down from parents and grandparents, with each family adding its own touch.", exFromBook: true, ar: "وصفة (طبخ)" },
        { w: "commonly", pos: "adverb", emoji: "👥", def: "usually; by many people", ex: "It is usually served on big plates and is commonly eaten with sauces like daqous, which enhance its flavour.", exFromBook: true, ar: "عادةً / بشكل شائع" },
        { w: "flavour", pos: "noun", emoji: "😋", def: "the taste of a food", ex: "It is usually served on big plates and is commonly eaten with sauces like daqous, which enhance its flavour.", exFromBook: true, ar: "نكهة" },
        { w: "embrace", pos: "verb", emoji: "🤗", def: "to accept something and be happy to have it", ex: "Serving Machboos shows kindness and respect to guests and reflects how Kuwaitis proudly embrace their traditional cuisine.", exFromBook: true, ar: "يعتزّ بـ / يتبنّى" },
        { w: "variety", pos: "noun", emoji: "🌈", def: "many different kinds of something", ex: "Sushi began over a thousand years ago as a way to preserve fish, but today it is made with a variety of ingredients, including cooked or raw fish, vegetables, and even fruit.", exFromBook: true, ar: "تنوّع / تشكيلة" },
        { w: "raw", pos: "adjective", emoji: "🐟", def: "not cooked", ex: "Sushi began over a thousand years ago as a way to preserve fish, but today it is made with a variety of ingredients, including cooked or raw fish, vegetables, and even fruit.", exFromBook: true, ar: "نيء" }
      ],
      sections: [
        { type: "reading", title: "Tastes of the World: Exploring National Dishes", page: 48,
          instructions: "Read the passage. Then do the tasks on page 49.",
          blocks: [
            { head: "Tastes of the World: Exploring National Dishes", paras: ["Food is more than just something we eat to stay alive. It tells stories about where we come from. Every country has special dishes that reflect its history, traditions, and lifestyle. Whether it is a spicy meal cooked at home, or a famous dish served during celebrations, food connects people and cultures. Let us explore traditional dishes from three different countries and discover what makes each one unique. Get ready to travel the world through food!"] },
            { head: "Machboos: A Kuwaiti Classic", paras: ["Machboos is more than just a national dish in Kuwait; it is a symbol of the country’s rich history, culture, and family traditions. For generations, Machboos has been at the heart of Kuwaiti life, bringing people together on both ordinary days and special occasions. In the past, traders brought new spices to Kuwait, and families carefully chose aromatic ingredients to give Machboos its distinctive and spicy taste. Recipes were often passed down from parents and grandparents, with each family adding its own touch. Machboos is made with rice, meat, and spices. It is usually served on big plates and is commonly eaten with sauces like *daqous*, which enhance its flavour. Serving Machboos shows kindness and respect to guests and reflects how Kuwaitis proudly embrace their traditional cuisine."] },
            { head: "Pasta: A Part of Italian Life", paras: ["Pasta is a traditional food in Italian cuisine, known and loved around the world. Over time, the way Italians flavoured pasta has changed. At first, they used sugar, but later they used vegetables, which made pasta healthier. Tomatoes were only added in the 1800s, and the first recipe for spaghetti with tomato sauce appeared in 1844. Today, each part of Italy has its own style of pasta and sauce, and these recipes are often passed down in families. Pasta is now widely enjoyed by people of all backgrounds at home, in restaurants, and during family events. For Italians, pasta is more than food; it is a symbol of tradition, togetherness, and the joy of enjoying life at meals."] },
            { head: "The Story of Sushi: A Japanese Tradition", paras: ["Sushi is one of the most well-known foods from Japan. People all around the world enjoy it. In Japan, Sushi is often enjoyed during celebrations and family gatherings. However, Sushi is more than just a tasty meal; it is a symbol of Japanese culture and tradition. Sushi began over a thousand years ago as a way to preserve fish, but today it is made with a variety of ingredients, including cooked or raw fish, vegetables, and even fruit. There are many types of Sushi, such as *Maki*, *Sashimi*, and *Temaki*. Sushi chefs, known as *itamae*, train for many years to master their skills. Sushi is often served with wasabi, pickled ginger, and soy sauce to add extra flavour. Eating Sushi is more than a meal; it is experiencing Japanese culture in every bite."] }
          ],
          note: "Text type: Expository. The bold words in the book are the new words (blue words here). In the book the passage has a title and three parts with headings; the first box repeats the title for the introduction." },

        { type: "activity", title: "2. Read the passage, then choose the best answer.", page: 49, source: "book", stage: "guided",
          instructions: "Which statement best summarises the main idea of the text?", instructionsAr: "اقرأ النص، ثم اختر الجملة التي تلخّص الفكرة الرئيسية للنص.",
          image: "crops/u3l1-world-food.jpg",
          items: [
            { t: "mcq", q: "Which statement best summarises the main idea of the text?", options: ["It describes the history of popular sweets.", "It shows how traditional foods reflect each country’s culture.", "It teaches how to prepare meals with rice.", "It discusses Italian restaurants around the world."], answer: 1,
              hint: "Read the first paragraph again: “Every country has special dishes that reflect …”", why: "The passage shows how Machboos, pasta and sushi reflect the culture and traditions of Kuwait, Italy and Japan." }
          ] },

        { type: "activity", title: "3. Fill in the blanks with words from the list.", page: 49, source: "book", stage: "guided",
          instructions: "variety - ingredient - distinctive – reflect", instructionsAr: "املأ الفراغات بكلمات من القائمة.",
          items: [
            { t: "fill", q: "1. Traditional foods often ____ a country’s culture and traditions.", answer: ["reflect"], bank: ["variety", "ingredient", "distinctive", "reflect"], hint: "This word is a verb: food shows what a culture is like.", why: "“Every country has special dishes that reflect its history, traditions, and lifestyle.”" },
            { t: "fill", q: "2. The use of special spices gives Machboos its ____ flavour.", answer: ["distinctive"], bank: ["variety", "ingredient", "distinctive", "reflect"], hint: "An adjective before “flavour”: special and different.", why: "“… to give Machboos its distinctive and spicy taste.”" },
            { t: "fill", q: "3. Tomatoes have become an important ____ in pasta recipes.", answer: ["ingredient"], bank: ["variety", "ingredient", "distinctive", "reflect"], hint: "Tomatoes are one of the foods you use to make pasta sauce.", why: "An ingredient is one of the foods you use to make a dish. “an important” → one thing (singular)." }
          ] },

        { type: "activity", title: "4. Discuss the following questions.", page: 49, source: "book", stage: "independent",
          instructions: "Discuss with your group. Then write a short answer and compare it with the suggested answer.", instructionsAr: "ناقش الأسئلة مع مجموعتك، ثم اكتب إجابة قصيرة وقارنها بالإجابة المقترحة.",
          image: "crops/u3l1-ingredients.jpg",
          items: [
            { t: "short", q: "1. What ingredients are used in Machboos?", model: "Rice, meat, and spices.", keywords: [["rice"], ["meat"]], hint: "Read the Machboos part: “Machboos is made with …”" },
            { t: "short", q: "2. Why is pasta important in Italian culture?", model: "It is a symbol of tradition, togetherness, and the joy of enjoying life at meals.", keywords: [["tradition", "together", "symbol", "joy", "famil"]], hint: "Read the last sentence of the pasta part." },
            { t: "short", q: "3. What do all three dishes have in common?", model: "They are all symbols of their country’s culture and traditions.", keywords: [["culture", "tradition", "symbol"]], hint: "Each dish is “a symbol of” something. What?" }
          ] },

        { type: "activity", title: "5. Underline food-related adjectives in the passage (e.g., spicy, rich, etc.). What other food adjectives do you know?", page: 49, source: "book", stage: "independent",
          instructions: "Find the food-related adjectives in the passage and write them. Then write other food adjectives you know.", instructionsAr: "ابحث عن الصفات المتعلقة بالطعام في النص واكتبها، ثم اكتب صفات أخرى للطعام تعرفها.",
          items: [
            { t: "short", q: "a. Write the food-related adjectives you find in the passage.", model: "spicy, traditional, aromatic, distinctive, healthier, tasty, raw", keywords: [["spicy"], ["aromatic", "distinctive"], ["tasty", "raw", "healthier"]], hint: "Look for words that describe food: a ____ meal, ____ ingredients, ____ fish." },
            { t: "short", q: "b. What other food adjectives do you know?", open: true, model: "sweet, salty", hint: "Think of how food tastes: sweet, sour, …" }
          ] },

        { type: "write", title: "6. Imagine you are a food vlogger visiting one of the countries mentioned in the passage.", page: 49, source: "book",
          instructions: "Write a script for a short video (3-4 sentences) describing your first experience tasting, Sushi, or pasta or any other food. Include your reactions, favourite part, and one interesting fact you learned from the passage. Use food-related adjectives.",
          image: "crops/u3l1-vlogger.jpg",
          wordBankLabel: "Use 2- 3 of these expressions in your vlog.",
          wordBank: ["Today, I tried", "It is / was my first time tasting…", "I felt…", "What I love about it is…"],
          frame: [
            { label: "Sentence 1", hint: "Today, I tried … in … for the first time." },
            { label: "Sentence 2", hint: "It was … and …! (food adjectives)" },
            { label: "Sentence 3", hint: "What I love about it is …" },
            { label: "Sentence 4", hint: "I learned that …" }
          ],
          model: "Today, I tried sushi in Tokyo for the first time. It was fresh and tasty! What I love about it is the soft rice. I learned it began as a way to keep fish.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          bookChecklist: ["Write a script for a short video (3-4 sentences).", "Include your reactions, favourite part, and one interesting fact you learned from the passage.", "Use food-related adjectives."],
          bookNote: "From the book.",
          minWords: 25 },

        { type: "speak", title: "6. Perform your vlog for your classmates.", page: 49, source: "book",
          instructions: "Perform your vlog for your classmates.",
          dialogue: [{ who: "Food vlogger (you)", text: "" }],
          starters: ["Today, I tried", "It is / was my first time tasting…", "I felt…", "What I love about it is…"],
          note: "Speak to the camera (your classmates), smile and show how the food tastes.",
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the passage.", instructionsAr: "اقرأ الجملة: هل هي صحيحة أم خاطئة؟ استعن بالنص.",
          items: [
            { t: "mcq", q: "Machboos is made with rice, meat, and spices.", options: ["True", "False"], answer: 0, hint: "The Machboos part.", why: "“Machboos is made with rice, meat, and spices.”" },
            { t: "mcq", q: "At first, Italians flavoured pasta with tomatoes.", options: ["True", "False"], answer: 1, hint: "The pasta part.", why: "“At first, they used sugar, but later they used vegetables.” Tomatoes were only added in the 1800s." },
            { t: "mcq", q: "The first recipe for spaghetti with tomato sauce appeared in 1844.", options: ["True", "False"], answer: 0, hint: "The pasta part.", why: "“… the first recipe for spaghetti with tomato sauce appeared in 1844.”" },
            { t: "mcq", q: "Sushi began as a way to preserve fish.", options: ["True", "False"], answer: 0, hint: "The sushi part.", why: "“Sushi began over a thousand years ago as a way to preserve fish …”" },
            { t: "mcq", q: "Sushi chefs are called itamae.", options: ["True", "False"], answer: 0, hint: "The sushi part.", why: "“Sushi chefs, known as itamae, train for many years …”" },
            { t: "mcq", q: "Machboos is usually served on small plates.", options: ["True", "False"], answer: 1, hint: "The Machboos part.", why: "“It is usually served on big plates …”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Complete each sentence with a word from the box.", instructionsAr: "أكمل كل جملة بكلمة من الصندوق.",
          items: [
            { t: "fill", q: "My grandmother wrote her Harees ____ in a small notebook.", answer: ["recipe"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "A recipe tells you how to cook a dish." },
            { t: "fill", q: "Don’t eat ____ chicken. Cook it well first.", answer: ["raw"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "raw = not cooked." },
            { t: "fill", q: "Lemon gives the fish a fresh ____.", answer: ["flavour"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "flavour = the taste of a food." },
            { t: "fill", q: "Eid is a happy ____ for families in Kuwait.", answer: ["occasion"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "An occasion is a special event or celebration." },
            { t: "fill", q: "Cardamom and saffron are ____ spices: they smell wonderful.", answer: ["aromatic"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "aromatic = having a strong, nice smell." },
            { t: "fill", q: "The dhow is a ____ of Kuwait’s history.", answer: ["symbol"], bank: ["recipe", "raw", "flavour", "occasion", "aromatic", "symbol"], why: "A symbol represents an idea or a group of people." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): show the picture (spaghetti, sushi, Machboos). Pairs name the dishes and their countries (Italy, Japan, Kuwait).",
          "Pre-teach the 13 words with the flip cards (reflect, serve, symbol, occasion, aromatic, ingredient, distinctive, recipe, commonly, flavour, embrace, variety, raw).",
          "Ex. 2: b (It shows how traditional foods reflect each country’s culture). Ex. 3: 1. reflect 2. distinctive 3. ingredient.",
          "Ex. 4 (answer key): 1. Rice and meat (the text also says spices). 2. Tradition. 3. Culture.",
          "Ex. 5 (answer key): spicy, traditional, aromatic, distinctive, healthier, tasty, raw. Other adjectives: sweet, salty (open).",
          "Ex. 6: students write a 3–4 sentence vlog script with 2–3 of the expressions, then perform it. The answer-key script is only a model."
        ],
        pair: ["A names a dish; B says its country and one ingredient.", "Partners film or perform each other’s vlog and give one tip."],
        group: ["Groups make a “Tastes of the World” poster: one dish, its country, ingredients and two food adjectives."],
        quick: [
          { q: "What is Machboos made with?", a: "Rice, meat, and spices." },
          { q: "When were tomatoes added to pasta?", a: "In the 1800s." },
          { q: "What are sushi chefs called?", a: "Itamae." },
          { q: "What does “raw” mean?", a: "Not cooked." }
        ]
      }
    },

    /* ───────────────────────── LESSON 2 — GRAMMAR (p. 50) ───────────────────────── */
    {
      id: "u3l2", num: 2, skill: "Grammar", title: "Passive Voice (Present simple - Past simple - Modals)", pages: [50], status: "complete",
      canDo: [
        "I can distinguish between active and passive voice sentences in a variety of spoken and written contexts.",
        "I can apply the passive voice with the present simple, past simple, and modal verbs in both spoken and written communication."
      ],
      goals: ["Tell active and passive sentences apart.", "Use am / is / are + past participle (present simple passive).", "Use was / were + past participle and modal + be + past participle.", "Interview a partner about favourite food and write in the passive."],
      goalsAr: ["أميّز بين الجمل المبنية للمعلوم والمبنية للمجهول.", "أستخدم am / is / are مع التصريف الثالث (المبني للمجهول في المضارع البسيط).", "أستخدم was / were مع التصريف الثالث، والفعل الناقص + be + التصريف الثالث.", "أجري مقابلة مع زميلي عن طعامه المفضّل وأكتب جملًا بالمبني للمجهول."],
      warmup: {
        title: "1. Look at these sentences from the reading.", image: "crops/u3l2-machboos.jpg", emoji: "🍛", seconds: 90,
        instructions: "Are they active or passive? Discuss with a partner.",
        prompts: ["1. Machboos is made with rice, meat, and spices. → Who makes the dish?", "2. Tomatoes were added to pasta in the 1800s. → Who added tomatoes?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Passive Voice (Present simple - Past simple - Modals)", page: 50,
          steps: [
            { title: "When do we use passive voice?",
              text: "When (the doer of the action) is unknown. When we are interested more in the action than the doer of the action.",
              textAr: "نستخدم المبني للمجهول عندما يكون الفاعل (من قام بالفعل) غير معروف، أو عندما نهتمّ بالفعل أكثر من اهتمامنا بالفاعل.",
              examples: ["{o:Machboos} {a:is} {v:made} with rice, meat, and spices.", "{o:Tomatoes} {a:were} {v:added} to pasta in the 1800s."] },
            { title: "How is the passive formed? Present Simple Passive",
              text: "Present Simple Passive: am/is/are + past participle",
              textAr: "المبني للمجهول في المضارع البسيط: am / is / are + التصريف الثالث للفعل.",
              examples: ["- {o:Machboos} {a:is} {v:served} on big plates."] },
            { title: "Past Simple Passive",
              text: "Past Simple Passive: was/were + past participle",
              textAr: "المبني للمجهول في الماضي البسيط: was / were + التصريف الثالث للفعل.",
              examples: ["-{o:Special dishes} {a:were} {v:served} during the festival."] },
            { title: "Passive Modals",
              text: "Passive Modals: Modals + be + past participle",
              textAr: "المبني للمجهول مع الأفعال الناقصة: الفعل الناقص (can, should, must …) + be + التصريف الثالث للفعل.",
              examples: ["- {o:Many different sauces} {a:can be} {v:added} to pasta."] },
            { title: "Active → passive in three steps", source: "extra",
              text: "1. The object of the active sentence becomes the subject. 2. Use be in the same tense (am / is / are, was / were, or modal + be). 3. Add the past participle. Add by + the doer only if it is important.",
              textAr: "1. المفعول به في الجملة المبنية للمعلوم يصبح فاعلًا. 2. نستخدم فعل be بالزمن نفسه (am / is / are أو was / were أو الفعل الناقص + be). 3. نضيف التصريف الثالث للفعل. ونضيف by + الفاعل فقط إذا كان مهمًّا.",
              examples: ["{s:The chef} {v:prepared} {o:sushi}. → {o:Sushi} {a:was} {v:prepared} by the chef.", "{s:We} {v:eat} {o:Machboos} with daqous. → {o:Machboos} {a:is} {v:eaten} with daqous."] },
            { title: "Singular or plural?", source: "extra",
              text: "Look at the new subject. One thing (or rice, sushi, pasta) → is / was. Two or more things → are / were. With modals, be never changes: can be, should be.",
              textAr: "انظر إلى الفاعل الجديد: المفرد (وكذلك rice و sushi و pasta) يأخذ is / was، والجمع يأخذ are / were. ومع الأفعال الناقصة تبقى be كما هي: can be و should be.",
              examples: ["{o:Pasta} {a:is} {v:served} with tomato sauce.", "{o:Dates} {a:are} {v:grown} in Kuwait.", "{o:Rice} {a:can be} {v:cooked} in many ways."] },
            { title: "Past participles you need", source: "extra",
              text: "Regular verbs add -ed: add → added, serve → served, use → used, prepare → prepared. Irregular verbs: make → made, eat → eaten, grow → grown, give → given.",
              textAr: "الأفعال المنتظمة نضيف لها ed، أما الأفعال الشاذّة فلها تصريف ثالث خاص: make ← made و eat ← eaten و grow ← grown و give ← given.",
              examples: ["{o:Olive oil} {a:is} {v:used} in many Italian dishes.", "{o:Harees} {a:is} {v:made} with wheat and meat."] }
          ],
          table: {
            source: "extra",
            head: ["", "Active", "Passive"],
            rows: [
              ["Present simple", "{s:We} {v:eat} {o:Machboos} with daqous.", "{o:Machboos} {a:is} {v:eaten} with daqous."],
              ["Past simple", "{s:The chef} {v:prepared} {o:sushi}.", "{o:Sushi} {a:was} {v:prepared} by the chef."],
              ["Modal", "{s:We} {a:can} {v:eat} {o:pasta} at home.", "{o:Pasta} {a:can be} {v:eaten} at home."]
            ]
          },
          worked: {
            q: "Change into passive: Families serve special dishes during Eid.",
            steps: ["Find the object: special dishes. It becomes the new subject.", "The verb serve is in the present simple, and “special dishes” is plural → are.", "Add the past participle: serve → served.", "We do not need “by families”: the action is more important."],
            a: "{o:Special dishes} {a:are} {v:served} during Eid."
          },
          notes: ["The summary table, the worked example and steps 5–7 are Extra Practice. They use the rules from the book’s Grammar Box."] },

        { type: "activity", title: "1. Are they active or passive?", page: 50, source: "book", stage: "guided",
          instructions: "Look at these sentences from the reading. Are they active or passive?", instructionsAr: "انظر إلى هاتين الجملتين من نص القراءة: هل هما مبنيتان للمعلوم أم للمجهول؟",
          items: [
            { t: "choose", q: "1. Machboos is made with rice, meat, and spices.", options: ["Active", "Passive"], answer: 1, hint: "Who makes the dish? Does the sentence tell us?", why: "is + made (past participle) → present simple passive. We don’t know who makes the dish." },
            { t: "choose", q: "2. Tomatoes were added to pasta in the 1800s.", options: ["Active", "Passive"], answer: 1, hint: "Who added tomatoes? Does the sentence tell us?", why: "were + added (past participle) → past simple passive. The doer is not important." }
          ] },

        { type: "activity", title: "2. a. Sort these sentences under the correct heading (active / passive).", page: 50, source: "book", stage: "guided",
          instructions: "Read each sentence. Is it Active Voice or Passive Voice?", instructionsAr: "اقرأ كل جملة وصنّفها: مبنية للمعلوم أم مبنية للمجهول؟",
          items: [
            { t: "choose", q: "We can eat pasta at home or in restaurants.", options: ["Active Voice", "Passive Voice"], answer: 0, hint: "Who eats? Is the doer the subject?", why: "The doer (we) is the subject: active." },
            { t: "choose", q: "Pasta is served with tomato sauce.", options: ["Active Voice", "Passive Voice"], answer: 1, hint: "Look for be + past participle.", why: "is + served → passive." },
            { t: "choose", q: "Olive oil is used in many Italian dishes.", options: ["Active Voice", "Passive Voice"], answer: 1, hint: "Look for be + past participle.", why: "is + used → passive." },
            { t: "choose", q: "The chef prepared sushi.", options: ["Active Voice", "Passive Voice"], answer: 0, hint: "Who prepared sushi?", why: "The doer (the chef) is the subject: active." },
            { t: "choose", q: "We eat Machboos with *daqous*.", options: ["Active Voice", "Passive Voice"], answer: 0, hint: "Who eats Machboos?", why: "The doer (we) is the subject: active." }
          ] },

        { type: "activity", title: "2. b. Change the active sentences into passive.", page: 50, source: "book", stage: "independent",
          instructions: "Write each active sentence from 2a in the passive.", instructionsAr: "حوّل كل جملة مبنية للمعلوم من التمرين 2a إلى جملة مبنية للمجهول.",
          items: [
            { t: "fill", q: "1. We can eat pasta at home or in restaurants. → ____", answer: ["Pasta can be eaten at home or in restaurants.", "Pasta can be eaten at home or in restaurants by us.", "Pasta can be eaten by us at home or in restaurants."], hint: "modal + be + past participle: can be + eaten.", why: "Pasta (new subject) + can be + eaten (eat → eaten)." },
            { t: "fill", q: "2. The chef prepared sushi. → ____", answer: ["Sushi was prepared by the chef.", "Sushi was prepared."], hint: "Past simple → was + past participle.", why: "Sushi (one thing) + was + prepared + by the chef." },
            { t: "fill", q: "3. We eat Machboos with daqous. → ____", answer: ["Machboos is eaten with daqous.", "Machboos is eaten with daqous by us.", "Machboos is eaten by us with daqous."], hint: "Present simple → is + past participle.", why: "Machboos + is + eaten (eat → eaten) + with daqous." }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Choose the correct form", source: "extra", stage: "guided",
          instructions: "Look at the new subject and the time. Then choose.", instructionsAr: "انظر إلى الفاعل الجديد والزمن، ثم اختر.",
          items: [
            { t: "choose", q: "Rice ____ with meat in Machboos.", options: ["is cooked", "are cooked"], answer: 0, why: "Rice is one thing (uncountable) → is cooked." },
            { t: "choose", q: "Dates ____ in Kuwait.", options: ["is grown", "are grown"], answer: 1, why: "Dates is plural → are grown." },
            { t: "choose", q: "The first spaghetti recipe ____ in 1844.", options: ["is written", "was written"], answer: 1, why: "In 1844 = the past → was written." },
            { t: "choose", q: "Many dishes ____ during the festival last year.", options: ["was served", "were served"], answer: 1, why: "Plural + past → were served." },
            { t: "choose", q: "Sushi can ____ with soy sauce.", options: ["be eaten", "eaten"], answer: 0, why: "modal + be + past participle → can be eaten." },
            { t: "choose", q: "Olive oil is ____ in many Italian dishes.", options: ["use", "used"], answer: 1, why: "be + past participle → is used." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Sentence builder", source: "extra", stage: "guided",
          instructions: "Put the words in order to make a passive sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة مبنية للمجهول.",
          items: [
            { t: "order", q: "🍝 Make a passive sentence.", words: ["Pasta", "is", "served", "with", "tomato", "sauce."], answer: ["Pasta is served with tomato sauce."], hint: "Subject + is + past participle.", why: "Present simple passive: is + served." },
            { t: "order", q: "🍅 Make a passive sentence.", words: ["Tomatoes", "were", "added", "to", "pasta", "in", "the", "1800s."], answer: ["Tomatoes were added to pasta in the 1800s."], hint: "Subject + were + past participle.", why: "Past simple passive: were + added." },
            { t: "order", q: "🥫 Make a passive sentence.", words: ["Many", "different", "sauces", "can", "be", "added", "to", "pasta."], answer: ["Many different sauces can be added to pasta."], hint: "modal + be + past participle.", why: "Passive modal: can be + added." }
          ] },

        { type: "activity", title: "Extra Practice: Step 3 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct words.", instructionsAr: "يوجد جزء خاطئ. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "Machboos {is make} with rice, meat, and spices.", answer: ["is made"], hint: "be + past participle.", why: "make → made: is made." },
            { t: "fix", q: "Special dishes {was served} during the festival.", answer: ["were served"], hint: "Special dishes is plural.", why: "Plural + past → were served." },
            { t: "fix", q: "Many sauces can {added} to pasta.", answer: ["be added"], hint: "modal + be + past participle.", why: "can be added." },
            { t: "fix", q: "Sushi {is eat} with soy sauce.", answer: ["is eaten"], hint: "eat is irregular.", why: "eat → eaten: is eaten." },
            { t: "short", q: "Write one passive sentence about a dish in your family.", open: true, model: "Harees is made by my grandmother in Ramadan.", hint: "… is made / is cooked / is served …" }
          ] },

        { type: "speak", title: "3. Interview your partner about their favourite food. Then, write three sentences about your partner’s answer using the passive voice.", page: 50, source: "book",
          instructions: "Interview your partner about their favourite food. Use the example from the book.",
          dialogue: [
            { who: "A", text: "What is your favourite food?" }, { who: "B", text: "I prefer Harees." },
            { who: "A", text: "Who prepares it for you?" }, { who: "B", text: "It is usually prepared by my grandmother." },
            { who: "A", text: "What is your favourite food?" }, { who: "B", text: "" },
            { who: "A", text: "Who prepares it for you?" }, { who: "B", text: "" }
          ],
          starters: ["I prefer …", "It is usually prepared by …", "It is made with …", "It is served with …", "It is eaten …"],
          record: true },

        { type: "write", title: "3. Write three sentences about your partner’s answer using the passive voice.", page: 50, source: "book",
          instructions: "Write three sentences about your partner’s favourite food. Use the passive voice.",
          wordBank: ["is made", "is prepared", "is cooked", "is served", "is eaten", "was cooked", "can be eaten"],
          frame: [
            { label: "1.", hint: "My partner’s favourite food is … It is usually prepared by …" },
            { label: "2.", hint: "It is made with …" },
            { label: "3.", hint: "It is served / eaten …" }
          ],
          model: "My partner’s favourite food is Harees. It is usually prepared by his grandmother.\nIt is made with wheat and meat.\nIt is often eaten during Ramadan.",
          modelFromBook: false,
          checklist: ["I used be + past participle in each sentence.", "I used is / are or was / were correctly.", "I started each sentence with a capital letter and ended it with a full stop."],
          minWords: 18 }
      ],
      game: { kind: "quiz", title: "Passive Race", items: [
        { t: "choose", q: "Machboos ____ on big plates.", options: ["is served", "serves"], answer: 0, why: "present simple passive: is + served" },
        { t: "choose", q: "Tomatoes ____ to pasta in the 1800s.", options: ["was added", "were added"], answer: 1, why: "plural + past → were added" },
        { t: "choose", q: "Many sauces can ____ to pasta.", options: ["be added", "added"], answer: 0, why: "modal + be + past participle" },
        { t: "choose", q: "Sushi ____ with wasabi.", options: ["is eaten", "is ate"], answer: 0, why: "eat → eaten" },
        { t: "choose", q: "Active or passive? The chef prepared sushi.", options: ["active", "passive"], answer: 0, why: "The doer (the chef) is the subject." },
        { t: "choose", q: "Active or passive? Olive oil is used in many Italian dishes.", options: ["active", "passive"], answer: 1, why: "is + used → passive" }
      ] },
      teacher: {
        notes: [
          "Ex. 1: read the two sentences. Ask “Who makes the dish? Who added tomatoes?” We don’t know, and it is not important → both sentences are passive.",
          "Present the Grammar Box: when we use the passive, and how it is formed (am/is/are, was/were, modal + be + past participle).",
          "Ex. 2a: Active: We can eat pasta at home or in restaurants. / The chef prepared sushi. / We eat Machboos with daqous. Passive: Pasta is served with tomato sauce. / Olive oil is used in many Italian dishes.",
          "Ex. 2b: 1. Pasta can be eaten at home or in restaurants. 2. Sushi was prepared by the chef. 3. Machboos is eaten with daqous.",
          "Ex. 3: pairs interview each other (model: I prefer Harees. It is usually prepared by my grandmother.), then write three passive sentences."
        ],
        pair: ["Interview (ex. 3): A asks, B answers; then swap.", "A says an active sentence about food; B changes it into the passive."],
        group: ["Recipe chain: each student adds one passive sentence about how a dish is made (The rice is washed. The meat is cooked. …)."],
        quick: [
          { q: "How is the present simple passive formed?", a: "am / is / are + past participle." },
          { q: "Change into passive: The chef prepared sushi.", a: "Sushi was prepared by the chef." },
          { q: "Complete: Many sauces can ___ (add) to pasta.", a: "be added" },
          { q: "Active or passive: Pasta is served with tomato sauce.", a: "Passive." }
        ]
      }
    },

    /* ───────────────────────── LESSON 3 — LISTENING (p. 51) ───────────────────────── */
    {
      id: "u3l3", num: 3, skill: "Listening", title: "Exploring World Food Festivals", pages: [51], status: "complete",
      canDo: [
        "I can analyse implicit and explicit details in a spoken text about international food festivals.",
        "I can organise structured notes forming full sentences based on a spoken text about international food festivals."
      ],
      goals: ["Talk about food events in Kuwait.", "Listen for what three food festivals have in common.", "Complete a table and write notes about the festivals.", "Give a short talk about a festival."],
      goalsAr: ["أتحدّث عن فعاليات الطعام في الكويت.", "أستمع لأعرف ما تشترك فيه ثلاثة مهرجانات للطعام.", "أكمل جدولًا وأكتب ملاحظات عن المهرجانات.", "أقدّم حديثًا قصيرًا عن مهرجان."],
      warmup: {
        title: "Think, Pair, Share", image: null, emoji: "🎪", seconds: 90,
        instructions: "1. Think, Pair, Share",
        prompts: ["a. Have you ever taken part in a food event at a place like Murooj, Al Shaheed Park, or Qout Market?", "b. If yes, describe what you did and how you felt.", "c. If no, would you like to go to one? Why or why not?"]
      },
      vocab: [],
      sections: [
        { type: "discuss", title: "2. Look at these pictures and titles: Pizzafest, Taste of Chicago, Salon du Chocolat.", page: 51, source: "book",
          image: "crops/u3l3-festivals.jpg",
          prompts: ["a. What do you imagine smelling or tasting in these festivals?", "b. What activities might people enjoy besides eating?"],
          starters: ["I imagine smelling …", "I think people can taste …", "People might enjoy …", "Besides eating, they can …"],
          seconds: 120 },

        { type: "listen", title: "3. Listen to the speakers. Write one sentence that summarises what all three festivals have in common.", page: 51, source: "book",
          track: "3.1", needsAudio: true,
          instructions: "Listen to the speakers. Write one sentence that summarises what all three festivals have in common.", instructionsAr: "استمع إلى المتحدثين، واكتب جملة واحدة تلخّص ما تشترك فيه المهرجانات الثلاثة.",
          items: [
            { t: "short", q: "What do all three festivals have in common?", model: "All three festivals celebrate food, culture and tradition.", open: true, keyed: true, hint: "All three festivals celebrate …" }
          ] },

        { type: "listen", title: "4. a. Listen to the speakers again and complete the table.", page: 51, source: "book",
          track: "3.1", needsAudio: true,
          instructions: "Listen again. Write the festival, the country, the month and the different activities or foods.", instructionsAr: "استمع مرة أخرى، واكتب اسم المهرجان والبلد والشهر والأنشطة أو الأطعمة المختلفة.",
          items: [
            { t: "table", q: "Complete the table.", keyed: true, open: true,
              head: ["Festival", "Country", "Month", "Different Activities or Foods"],
              rows: [
                [{ model: "Pizza Fest" }, { model: "Italy" }, { model: "September" }, { model: "Wood-fired pizza and dough workshops" }],
                [{ model: "Taste of Chicago" }, { model: "USA" }, { model: "July" }, { model: "Deep-dish pizza, hot dogs, cheesecake" }],
                [{ model: "Salon du Chocolat" }, { model: "France" }, { model: "October" }, { model: "Tasting chocolate and designs" }]
              ],
              note: "The answers depend on the recording. The suggested answers are from the book’s answer key." }
          ] },

        { type: "write", title: "4. b. Use the details from the table to create well-organised notes.", page: 51, source: "book",
          instructions: "Use the details from the table to create well-organised notes. Write one or two full sentences for each festival.",
          wordBank: ["takes place in", "in (month)", "People can enjoy", "Visitors can taste", "There are"],
          frame: [
            { label: "Pizza Fest", hint: "Pizza Fest takes place in … in …" },
            { label: "Taste of Chicago", hint: "Taste of Chicago takes place in … in …" },
            { label: "Salon du Chocolat", hint: "Salon du Chocolat takes place in … in …" }
          ],
          model: "Pizza Fest takes place in Italy in September. People enjoy wood-fired pizza and dough workshops.\nTaste of Chicago takes place in the USA in July. Visitors can eat deep-dish pizza, hot dogs and cheesecake.\nSalon du Chocolat takes place in France in October. People taste chocolate and see chocolate designs.",
          modelFromBook: false, modelLabel: "Model notes (made from the answer key’s table – one possible answer)",
          checklist: ["I wrote about all three festivals.", "I gave the country and the month.", "I wrote full sentences."],
          minWords: 30 },

        { type: "activity", title: "5. Write full sentences in your notebook. Discuss the following questions.", page: 51, source: "book", stage: "independent",
          instructions: "Discuss the questions. Then write full sentences.", instructionsAr: "ناقش الأسئلة، ثم اكتب إجاباتك في جمل كاملة.",
          items: [
            { t: "short", q: "a. Which festival would you like to go to the most? Why?", open: true, hint: "I would like to go to … because …" },
            { t: "short", q: "b. What do you think the atmosphere at these festivals is like, based on the activities people do there?", open: true, hint: "I think the atmosphere is … because people …" },
            { t: "short", q: "c. Are the speakers excited or bored about the festivals they talk about? How can you tell?", open: true, needsAudio: true, hint: "Think about the speakers’ voices and the words they use." }
          ] },

        { type: "speak", title: "6. Our Festival Talk", page: 51, source: "book",
          instructions: "Discuss in groups. Choose one festival (food, cultural, music, or traditional). Prepare a short talk that includes:",
          steps: ["a. What the festival celebrates", "b. Its main activities", "c. Why it is exciting to go to"],
          dialogue: [{ who: "Group speaker", text: "" }],
          starters: ["This festival is popular because...", "It takes place in (month/place)...", "People usually... (eat special food, wear costumes, etc.)", "One exciting thing about this festival is..."],
          note: "Useful Language from the book. Speak clearly and look at your classmates.",
          record: true },

        { type: "activity", title: "Extra Practice: Useful Language", source: "extra", stage: "guided",
          instructions: "Complete each sentence with the best word or words.", instructionsAr: "أكمل كل جملة بالكلمة أو الكلمات المناسبة.",
          items: [
            { t: "choose", q: "This festival is popular ____ people love chocolate.", options: ["because", "but"], answer: 0, why: "because gives a reason." },
            { t: "choose", q: "It takes place ____ July.", options: ["in", "on"], answer: 0, why: "We use in with months: in July." },
            { t: "choose", q: "People usually ____ special food at the festival.", options: ["eat", "eats"], answer: 0, why: "People (they) + eat." },
            { t: "choose", q: "One exciting thing about this festival ____ the music.", options: ["is", "are"], answer: 0, why: "One exciting thing … is." },
            { t: "choose", q: "Hala Febrayer takes place ____ Kuwait.", options: ["in", "at"], answer: 0, why: "We use in with countries and cities." }
          ] }
      ],
      game: { kind: "sort", title: "Which Festival?",
        buckets: ["Pizza Fest 🍕", "Taste of Chicago 🌭", "Salon du Chocolat 🍫"],
        cards: [["Italy", 0], ["September", 0], ["dough workshops", 0], ["wood-fired pizza", 0], ["USA", 1], ["July", 1], ["hot dogs", 1], ["cheesecake", 1], ["France", 2], ["October", 2], ["tasting chocolate", 2], ["chocolate designs", 2]] },
      teacher: {
        notes: [
          "Think, Pair, Share (ex. 1): food events at Murooj, Al Shaheed Park or Qout Market.",
          "Ex. 2: look at the three posters (Pizzafest, Taste of Chicago, Salon du Chocolat) and predict smells, tastes and activities.",
          "The recording is not in this app: play it from the book (track 3.1, QR code on page 51).",
          "Ex. 3 (answer key): All three festivals celebrate food, culture and tradition.",
          "Ex. 4a (answer key): Pizza Fest – Italy – September – wood-fired pizza and dough workshops; Taste of Chicago – USA – July – deep-dish pizza, hot dogs, cheesecake; Salon du Chocolat – France – October – tasting chocolate and designs. The book’s title says “Pizzafest”; the answer key writes “Pizza Fest”.",
          "Ex. 5 is open (5c depends on the speakers’ voices in the recording). Ex. 6: groups prepare a short talk with the Useful Language."
        ],
        pair: ["A names a festival; B says its country, month and one activity.", "Partners rehearse the festival talk and give one tip."],
        group: ["Our Festival Talk (ex. 6): each group presents a festival; the class votes for the most exciting one."],
        quick: [
          { q: "What do all three festivals have in common?", a: "They celebrate food, culture and tradition." },
          { q: "Where and when is Salon du Chocolat?", a: "In France, in October." },
          { q: "What can people eat at Taste of Chicago?", a: "Deep-dish pizza, hot dogs and cheesecake." },
          { q: "Give one Useful Language phrase.", a: "This festival is popular because… / It takes place in… / One exciting thing about this festival is…" }
        ]
      }
    },

    /* ───────────────────────── LESSON 4 — SPEAKING (p. 52) ───────────────────────── */
    {
      id: "u3l4", num: 4, skill: "Speaking", title: "The Future of Food: 3D Printing", pages: [52], status: "complete",
      canDo: [
        "I can compare different viewpoints about food and technology clearly and precisely in speaking tasks.",
        "I can discuss opinions and ideas clearly about the future of food using appropriate language in spoken debates."
      ],
      goals: ["Talk about food in the future.", "Listen to a podcast about a 3D food printer.", "Debate: is 3D food printing positive or negative?", "Say words with the correct stress."],
      goalsAr: ["أتحدّث عن الطعام في المستقبل.", "أستمع إلى بودكاست عن طابعة الطعام ثلاثية الأبعاد.", "أشارك في مناظرة: هل طباعة الطعام ثلاثية الأبعاد اختراع إيجابي أم سلبي؟", "أنطق الكلمات بالنبر الصحيح."],
      warmup: {
        title: "The Future of Food: 3D Printing", image: "crops/u3l4-3d-printer.jpg", emoji: "🖨️", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["a. Do you think food will be very different in the future?", "b. Have you heard about 3D-printed food before?", "c. Would you eat something made by a printer?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "2. Listen to a short podcast about a 3D food printer, then answer the questions.", page: 52, source: "book",
          track: "3.2", needsAudio: true,
          instructions: "Listen to a short podcast about a 3D food printer, then answer the questions.", instructionsAr: "استمع إلى بودكاست قصير عن طابعة الطعام ثلاثية الأبعاد، ثم أجب عن السؤالين.",
          items: [
            { t: "short", q: "a. How do 3D food printers work?", model: "Layer by layer.", open: true, keyed: true },
            { t: "short", q: "b. Who can benefit most from this technology?", model: "People with food allergies.", open: true, keyed: true }
          ] },

        { type: "speak", title: "3. Debate Activity: Is 3D Food Printing a Positive or Negative Invention?", page: 52, source: "book",
          instructions: "Work in two teams: a. Team Yes: It is a positive invention. b. Team No: It is a negative invention.",
          steps: ["Steps:", "1. With your team, prepare 2-3 reasons to support your side.", "2. Choose a spokesperson.", "3. Each team presents (1-2 minutes).", "4. Teams respond to each other (1 minute).", "5. Listen carefully, take notes, and decide which team had the stronger argument."],
          dialogue: [
            { who: "Team Yes spokesperson", text: "" },
            { who: "Team No spokesperson", text: "" }
          ],
          starters: ["I agree because…", "I disagree because…", "I believe that…", "In my opinion…", "One reason is…", "For example…", "A possible problem is…"],
          note: "Language Support from the book. Respect the other team: listen and answer politely.",
          record: true },

        { type: "write", title: "3. Step 1: With your team, prepare 2-3 reasons to support your side.", page: 52, source: "book",
          instructions: "Choose your team. Write 2-3 reasons. Use the Language Support.",
          wordBankLabel: "Language Support",
          wordBank: ["I agree because…", "I disagree because…", "I believe that…", "In my opinion…", "One reason is…", "For example…", "A possible problem is…"],
          frame: [
            { label: "My team", hint: "Team Yes: It is a positive invention. / Team No: It is a negative invention." },
            { label: "Reason 1", hint: "One reason is …" },
            { label: "Reason 2", hint: "In my opinion …" },
            { label: "Reason 3", hint: "For example, …" }
          ],
          model: "My team: Team Yes: It is a positive invention.\nReason 1: One reason is that it can make safe food for people with food allergies.\nReason 2: In my opinion, it saves time because the printer works layer by layer by itself.\nReason 3: For example, it can make healthy snacks in fun shapes for children.",
          modelFromBook: false,
          checklist: ["I wrote 2-3 reasons.", "I used phrases from the Language Support.", "My reasons support my team’s side."],
          minWords: 25 },

        { type: "listen", title: "4. Pronunciation a. Listen carefully to these words. Underline the stressed syllables.", page: 52, source: "book",
          track: "3.3", needsAudio: true,
          instructions: "Listen carefully to these words. Which syllable is stressed? Examples from the book: HIStory, hisTORical.", instructionsAr: "استمع جيدًا إلى الكلمات وحدّد المقطع المنبور (الذي نضغط عليه) في كل كلمة.",
          items: [
            { t: "choose", q: "technology", options: ["tech", "nol", "o", "gy"], answer: 1, keyed: true, why: "tech-NOL-o-gy. (The answer key does not mark it in the table; it underlines “nol” in “technology” in question 2b.)" },
            { t: "choose", q: "ingredients", options: ["in", "gre", "di", "ents"], answer: 1, keyed: true, why: "in-GRE-di-ents" },
            { t: "choose", q: "expensive", options: ["ex", "pen", "sive"], answer: 1, keyed: true, why: "ex-PEN-sive" },
            { t: "choose", q: "cheesecake", options: ["cheese", "cake"], answer: 0, keyed: true, why: "CHEESE-cake" },
            { t: "choose", q: "vegetables", options: ["veg", "e", "ta", "bles"], answer: 0, keyed: true, why: "VEG-e-ta-bles" },
            { t: "choose", q: "explore", options: ["ex", "plore"], answer: 1, keyed: true, why: "ex-PLORE" },
            { t: "choose", q: "strawberry", options: ["straw", "ber", "ry"], answer: 0, keyed: true, why: "STRAW-ber-ry" },
            { t: "choose", q: "nutrition", options: ["nu", "tri", "tion"], answer: 1, keyed: true, why: "nu-TRI-tion" }
          ] },

        { type: "speak", title: "4. b. Listen again and repeat the words with correct stress. Practise with a partner.", page: 52, source: "book",
          instructions: "Say each word aloud, paying attention to stress.",
          dialogue: [{ who: "A", text: "history, historical, technology, ingredients, expensive" }, { who: "B", text: "cheesecake, vegetables, explore, strawberry, nutrition" }],
          starters: ["history", "historical", "technology", "ingredients", "expensive", "cheesecake", "vegetables", "explore", "strawberry", "nutrition"],
          note: "Stress: HIS-to-ry, his-TOR-i-cal, tech-NOL-o-gy, in-GRE-di-ents, ex-PEN-sive, CHEESE-cake, VEG-e-ta-bles, ex-PLORE, STRAW-ber-ry, nu-TRI-tion. Take turns: A says a word, B checks the stress. Then swap.",
          record: true },

        { type: "activity", title: "Extra Practice: Agree, disagree or give a reason?", source: "extra", stage: "guided",
          instructions: "Read the debate sentence. What does the speaker do?", instructionsAr: "اقرأ جملة المناظرة: ماذا يفعل المتحدث؟",
          items: [
            { t: "mcq", q: "I disagree because printed food may not taste fresh.", options: ["agrees", "disagrees", "gives an example"], answer: 1, why: "“I disagree because…” shows a different opinion." },
            { t: "mcq", q: "For example, the printer can make pizza in two minutes.", options: ["agrees", "disagrees", "gives an example"], answer: 2, why: "“For example…” gives an example." },
            { t: "mcq", q: "I agree because it can help people with food allergies.", options: ["agrees", "disagrees", "gives an example"], answer: 0, why: "“I agree because…” supports the other speaker." },
            { t: "mcq", q: "Which phrase shows a negative point?", options: ["One reason is…", "A possible problem is…", "I believe that…"], answer: 1, why: "“A possible problem is…” introduces a disadvantage." }
          ] }
      ],
      game: { kind: "sort", title: "Where Is the Stress?",
        buckets: ["1st syllable", "2nd syllable"],
        cards: [["history", 0], ["cheesecake", 0], ["vegetables", 0], ["strawberry", 0], ["historical", 1], ["technology", 1], ["ingredients", 1], ["expensive", 1], ["explore", 1], ["nutrition", 1]] },
      teacher: {
        notes: [
          "Ex. 1: discuss the three questions with the picture of the 3D food printer.",
          "The recordings are not in this app: play them from the book (track 3.2 for ex. 2, track 3.3 for the pronunciation, QR codes on page 52).",
          "Ex. 2 (answer key): a. Layer by layer. b. People with food allergies.",
          "Ex. 3 Debate: two teams (Team Yes / Team No), 2–3 reasons each, a spokesperson, 1–2 minutes each, 1 minute to respond; the class decides which team had the stronger argument.",
          "Ex. 4 stress (answer key): in-GRE-di-ents, ex-PEN-sive, CHEESE-cake, VEG-e-ta-bles, ex-PLORE, STRAW-ber-ry, nu-TRI-tion. The book’s examples: HIS-to-ry, his-TOR-i-cal. The answer key leaves “technology” unmarked in the table, but underlines “nol” in “technology” in question 2b: tech-NOL-o-gy (also the dictionary stress)."
        ],
        pair: ["Stress practice (4b): A says a word, B claps on the stressed syllable.", "A gives a reason for Team Yes; B answers for Team No with “I disagree because…”."],
        group: ["Debate Activity: Team Yes vs Team No with spokespeople and note-takers."],
        quick: [
          { q: "How do 3D food printers work?", a: "Layer by layer." },
          { q: "Who can benefit most from 3D food printing?", a: "People with food allergies." },
          { q: "Where is the stress in “vegetables”?", a: "On the first syllable: VEG-e-ta-bles." },
          { q: "Give a phrase to introduce a problem.", a: "A possible problem is…" }
        ]
      }
    },

    /* ───────────────────────── LESSON 5 — READING (pp. 53–54) ───────────────────────── */
    {
      id: "u3l5", num: 5, skill: "Reading", title: "Healthy Eating: Making Smart Choices", pages: [53, 54], status: "complete",
      canDo: [
        "I can analyse implicit and explicit details from a written text about healthy eating choices.",
        "I can infer meanings of unfamiliar vocabulary correctly from a written text about nutrition using contextual clues.",
        "I can organise key information from a written text about healthy eating accurately and clearly in structured notes or tables."
      ],
      goals: ["Read an article about healthy eating and new food trends.", "Learn 11 new words.", "Answer questions about the main idea and details.", "Plan a one-day healthy menu with your group."],
      goalsAr: ["أقرأ مقالًا عن الأكل الصحي واتجاهات الطعام الجديدة.", "أتعلّم 11 كلمة جديدة.", "أجيب عن أسئلة عن الفكرة الرئيسية والتفاصيل.", "أخطّط مع مجموعتي لقائمة طعام صحية ليوم واحد."],
      warmup: {
        title: "Before You Read", image: "crops/u3l5-friends.jpg", emoji: "🥦", seconds: 90,
        instructions: "1. Discuss the following questions.",
        prompts: ["1. What do you usually eat in a day?", "2. Do you think your diet is healthy? Why or why not?", "3. Have you noticed any new popular foods or eating habits recently?"]
      },
      vocab: [
        { w: "energetic", pos: "adjective", emoji: "⚡", def: "full of energy; active", ex: "When people make better food choices, they often feel more energetic and are less likely to get sick.", exFromBook: true, ar: "نشيط / مفعم بالطاقة" },
        { w: "source", pos: "noun", emoji: "🚰", def: "a place or thing that something comes from", ex: "For example, vegetables and fruits are important sources of vitamins, minerals, and fibre.", exFromBook: true, ar: "مصدر" },
        { w: "fibre", pos: "noun", emoji: "🌾", def: "the part of plant food that helps your stomach work well", ex: "For example, vegetables and fruits are important sources of vitamins, minerals, and fibre.", exFromBook: true, ar: "ألياف" },
        { w: "considerably", pos: "adverb", emoji: "📉", def: "a lot; very much", ex: "Diets that are rich in these foods can considerably lower the risk of obesity and heart disease.", exFromBook: true, ar: "بشكل كبير" },
        { w: "homemade", pos: "adjective", emoji: "🏠", def: "made at home, not in a shop or factory", ex: "More families cook at home because homemade meals are often healthier, cheaper, and you can control what ingredients you use.", exFromBook: true, ar: "منزلي الصنع" },
        { w: "produce", pos: "noun", emoji: "🥕", def: "fruit and vegetables that farmers grow", ex: "Supermarkets now offer a greater variety of fresh produce than ever before.", exFromBook: true, ar: "منتجات زراعية (خضار وفواكه)" },
        { w: "organic", pos: "adjective", emoji: "🌱", def: "grown without chemicals", ex: "Additionally, organic foods are becoming more popular because they are grown without harmful chemicals.", exFromBook: true, ar: "عضوي" },
        { w: "harmful", pos: "adjective", emoji: "☠️", def: "causing damage or making you ill", ex: "Additionally, organic foods are becoming more popular because they are grown without harmful chemicals.", exFromBook: true, ar: "ضارّ" },
        { w: "label", pos: "noun", emoji: "🏷️", def: "a piece of paper on a package that gives information about it", ex: "People are reading food labels and choosing food items with less sugar, salt, or fat.", exFromBook: true, ar: "ملصق / بطاقة بيانات" },
        { w: "obviously", pos: "adverb", emoji: "👀", def: "in a way that is easy to see or understand", ex: "In many cities, healthy food restaurants are obviously busier than fast-food places.", exFromBook: true, ar: "بوضوح / من الواضح" },
        { w: "maintain", pos: "verb", emoji: "🔧", def: "to keep something in good condition", ex: "Making small changes can help everyone maintain a better diet.", exFromBook: true, ar: "يحافظ على" }
      ],
      sections: [
        { type: "reading", title: "Healthy Choices: Eating Well Today", page: 53,
          instructions: "Read the article and the “Did You Know?” box. Then do the tasks on page 54.",
          blocks: [
            { head: "Healthy Choices: Eating Well Today", paras: [
              "People everywhere are becoming more interested in healthy eating. Good food is important for our bodies and minds. When people make better food choices, they often feel more energetic and are less likely to get sick. Some foods are healthier than others. For example, vegetables and fruits are important sources of vitamins, minerals, and fibre. Diets that are rich in these foods can considerably lower the risk of obesity and heart disease. These days, people are learning more about what is in their food. More families cook at home because homemade meals are often healthier, cheaper, and you can control what ingredients you use. Supermarkets now offer a greater variety of fresh produce than ever before. Additionally, organic foods are becoming more popular because they are grown without harmful chemicals.",
              "Food trends are changing quickly. Right now, smoothies and salads are more popular than fried snacks. People are reading food labels and choosing food items with less sugar, salt, or fat. In many cities, healthy food restaurants are obviously busier than fast-food places. Social media is full of new recipes, and people are sharing the easiest and most delicious ways to cook healthy meals.",
              "Making small changes can help everyone maintain a better diet. Today, more people understand that healthy food is the best choice for a healthier and happier life."
            ] },
            { head: "Did You Know?\nFood Trends", paras: [
              "🥦 Plant Power: Many people now eat burgers and sausages made from plants, not meat.",
              "🥛 Protein Dairy: Foods like yogurt and cottage cheese are popular for being healthy.",
              "🍿 Crunchy Snacks: Seaweed chips and popcorn are fun and trendy!",
              "🥤 Foamy Drinks: Drinks like cloud coffee with cream or coconut water are new favourites.",
              "🍫 Smart Snacks: Many people now eat protein-based snacks to help their body and brain—plus foods with mushrooms!",
              "🥒 Stomach-Friendly Foods: Foods like probiotics could help your stomach feel better and keep you healthy."
            ] }
          ],
          note: "Text type: Expository. On the printed page the “Did You Know? Food Trends” box is in the left column and the article is in the right column. The small emoji replace the book’s little pictures." },

        { type: "activity", title: "2. Choose the best answer from a, b, c, or d.", page: 54, source: "book", stage: "guided",
          instructions: "Choose the best answer from a, b, c, or d.", instructionsAr: "اختر الإجابة الأفضل من a أو b أو c أو d.",
          items: [
            { t: "mcq", q: "1. Which question does the passage mostly answer?", options: ["Why do people prefer eating out instead of cooking?", "How are eating habits changing today?", "What are the dangers of unhealthy food?", "What kinds of healthy food do supermarkets sell?"], answer: 1,
              hint: "Think about the whole article: people, families, supermarkets, food trends and restaurants.", why: "The article describes how people’s eating habits and food trends are changing today." },
            { t: "mcq", q: "2. Which of the following is NOT mentioned as a benefit of making better food choices?", options: ["People feel more energetic.", "People are less likely to get sick.", "People sleep longer hours at night.", "People have a lower risk of obesity and heart disease."], answer: 2,
              hint: "Read the first paragraph. Which benefit is not there?", why: "The article mentions energy, getting sick less and a lower risk of obesity and heart disease. It does not talk about sleep." }
          ] },

        { type: "activity", title: "3. Find the word in the passage for each meaning below. Write the word.", page: 54, source: "book", stage: "guided",
          instructions: "Find the word in the passage for each meaning below. Write the word.", instructionsAr: "ابحث في النص عن الكلمة المناسبة لكل معنى واكتبها.",
          items: [
            { t: "fill", q: "1. Something that gives information on a package. → ____", answer: ["labels", "label"], hint: "Paragraph 2: People are reading food ____.", why: "“People are reading food labels and choosing food items with less sugar, salt, or fat.”" },
            { t: "fill", q: "2. To keep something in good condition. → ____", answer: ["maintain"], hint: "Paragraph 3: … help everyone ____ a better diet.", why: "“Making small changes can help everyone maintain a better diet.”" }
          ] },

        { type: "activity", title: "4. Answer the following questions.", page: 54, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.", instructionsAr: "أجب عن الأسئلة، ثم قارن إجابتك بالإجابة المقترحة.",
          image: "crops/u3l5-cooking.jpg",
          items: [
            { t: "short", q: "1. What are the benefits of cooking at home?", model: "Homemade meals are healthier and cheaper, and you can control what ingredients you use.", keywords: [["health", "cheap", "control"]], hint: "Paragraph 1: “More families cook at home because …”" },
            { t: "short", q: "2. Why are organic foods becoming more popular?", model: "Because they are grown without harmful chemicals.", keywords: [["chemical"]], hint: "Read the last sentence of paragraph 1." },
            { t: "short", q: "3. How can food labels help people make better choices?", model: "They help people choose food items with less sugar, salt, or fat.", keywords: [["sugar", "salt", "fat"]], hint: "Paragraph 2: People are reading food labels and choosing …" },
            { t: "short", q: "4. What is the purpose of the writer in writing this passage?", model: "To inform readers about healthy eating and new food trends.", keywords: [["inform", "explain", "tell", "teach", "give information"]], hint: "Does the writer tell a story, sell something or give information?" }
          ] },

        { type: "write", title: "5. Healthy Menu Challenge", page: 54, source: "book",
          instructions: "Plan a one-day healthy menu: (breakfast, lunch, dinner, snack). Each group explains: Why each meal is healthy. What (ingredients / food items) are used. What the group would avoid (e.g., too much sugar or fat).",
          image: "crops/u3l5-vegetables.jpg",
          wordBank: ["full of protein", "give us energy", "light and healthy", "fresh vegetables", "whole grains", "we avoid", "too much sugar"],
          frame: [
            { label: "Breakfast", hint: "… , full of …" },
            { label: "Lunch", hint: "…" },
            { label: "Snack", hint: "… give us …" },
            { label: "Dinner", hint: "… , light and healthy" },
            { label: "We use", hint: "fresh … , … and …" },
            { label: "We avoid", hint: "… , … and too much …" }
          ],
          model: "Breakfast: eggs, brown bread and fruit, full of protein.\nLunch: grilled chicken with rice and salad.\nSnack: yogurt and nuts give us energy.\nDinner: vegetable soup and fish, light and healthy.\nWe use fresh vegetables, fruit and whole grains.\nWe avoid fried food, fizzy drinks and too much sugar.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I planned breakfast, lunch, dinner and a snack.", "I said why each meal is healthy.", "I said what we use and what we avoid."],
          minWords: 30 },

        { type: "speak", title: "5. Each group explains its healthy menu.", page: 54, source: "book",
          instructions: "Each group explains:",
          steps: ["Why each meal is healthy.", "What (ingredients / food items) are used.", "What the group would avoid (e.g., too much sugar or fat)."],
          dialogue: [{ who: "Group speaker", text: "For breakfast, we chose … because …" }, { who: "Class", text: "" }],
          starters: ["For breakfast, we chose …", "It is healthy because …", "We use …", "We avoid … because …"],
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the article and the “Did You Know?” box.", instructionsAr: "اقرأ الجملة: هل هي صحيحة أم خاطئة؟ استعن بالمقال وبمربع Did You Know?",
          items: [
            { t: "mcq", q: "Vegetables and fruits are important sources of vitamins, minerals, and fibre.", options: ["True", "False"], answer: 0, why: "“… vegetables and fruits are important sources of vitamins, minerals, and fibre.”" },
            { t: "mcq", q: "Fried snacks are more popular than smoothies and salads right now.", options: ["True", "False"], answer: 1, why: "“Right now, smoothies and salads are more popular than fried snacks.”" },
            { t: "mcq", q: "Fast-food places are busier than healthy food restaurants in many cities.", options: ["True", "False"], answer: 1, why: "“… healthy food restaurants are obviously busier than fast-food places.”" },
            { t: "mcq", q: "Some burgers and sausages are made from plants.", options: ["True", "False"], answer: 0, why: "Did You Know?: “Many people now eat burgers and sausages made from plants, not meat.”" },
            { t: "mcq", q: "Probiotics could help your stomach feel better.", options: ["True", "False"], answer: 0, why: "Did You Know?: “Foods like probiotics could help your stomach feel better and keep you healthy.”" }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "Oats and beans are full of (fibre / label).", options: ["fibre", "label"], answer: 0, why: "Fibre is in plant food and helps your stomach." },
            { t: "choose", q: "My mother’s (homemade / harmful) bread is the best.", options: ["homemade", "harmful"], answer: 0, why: "homemade = made at home." },
            { t: "choose", q: "Smoking is (harmful / organic) to your health.", options: ["harmful", "organic"], answer: 0, why: "harmful = causing damage." },
            { t: "choose", q: "After a good breakfast, I feel (energetic / considerably).", options: ["energetic", "considerably"], answer: 0, why: "energetic = full of energy." },
            { t: "choose", q: "Milk is a good (source / produce) of calcium.", options: ["source", "produce"], answer: 0, why: "source = where something comes from." },
            { t: "choose", q: "Exercise helps you (maintain / obviously) a healthy body.", options: ["maintain", "obviously"], answer: 0, why: "maintain = keep something in good condition." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Before You Read (ex. 1): three questions about students’ diets and new food trends.",
          "Pre-teach the 11 words with the flip cards (energetic, source, fibre, considerably, homemade, produce, organic, harmful, label, obviously, maintain).",
          "Read the article and the “Did You Know? Food Trends” box.",
          "Ex. 2: 1. b (How are eating habits changing today?) 2. c (People sleep longer hours at night). Ex. 3: 1. labels 2. maintain.",
          "Ex. 4 (answer key): 1. Healthier and cheaper. 2. No chemicals. 3. Less sugar, salt or fat. 4. To inform.",
          "Ex. 5 Healthy Menu Challenge: groups plan breakfast, lunch, dinner and a snack and explain their choices. The answer-key menu is only a model."
        ],
        pair: ["A reads a food trend from the “Did You Know?” box; B says if they like it and why.", "Partners check each other’s menu: is every meal healthy?"],
        group: ["Healthy Menu Challenge: each group presents its menu; the class votes for the healthiest and tastiest one."],
        quick: [
          { q: "Why are organic foods becoming more popular?", a: "They are grown without harmful chemicals." },
          { q: "What are people reading to choose better food?", a: "Food labels." },
          { q: "What does “maintain” mean?", a: "To keep something in good condition." },
          { q: "What is the writer’s purpose?", a: "To inform." }
        ]
      }
    },

    /* ───────────────────────── LESSON 6 — GRAMMAR (p. 55) ───────────────────────── */
    {
      id: "u3l6", num: 6, skill: "Grammar", title: "Comparatives and Superlatives", pages: [55], status: "complete",
      canDo: [
        "I can distinguish between comparative and superlative structures clearly and precisely in sentences about different food choices.",
        "I can apply comparative and superlative adjectives correctly to compare people, places, or things in both spoken and written contexts about food and health."
      ],
      goals: ["Find comparatives and superlatives in the article.", "Use -er / -est and more / most (or less / least).", "Learn the irregular forms: better, worse, less, more, farther.", "Write a short paragraph comparing meals."],
      goalsAr: ["أجد صيغ المقارنة والتفضيل في المقال.", "أستخدم ‎-er / -est‎ و more / most (أو less / least).", "أتعلّم الصيغ الشاذّة: better و worse و less و more و farther.", "أكتب فقرة قصيرة أقارن فيها بين الوجبات."],
      warmup: {
        title: "1. a. Read these sentences from the article, then do the task in b.", image: null, emoji: "🥗", seconds: 90,
        instructions: "Read the sentences aloud. Which words compare things?",
        prompts: ["Some foods are healthier than others.", "Supermarkets now offer a greater variety of fresh produce.", "Smoothies and salads are more popular than fried snacks.", "People are sharing the easiest and most delicious ways to cook."]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Comparatives and Superlatives", page: 55,
          steps: [
            { title: "Comparatives",
              text: "Comparatives show the difference between two people, things, or groups.",
              textAr: "صيغة المقارنة تبيّن الفرق بين شخصين أو شيئين أو مجموعتين.",
              examples: ["Example: Vegetables are health{x:ier} {c:than} snacks."] },
            { title: "Superlatives",
              text: "Superlatives show that something has the highest or lowest degree of a quality in a group of three or more.",
              textAr: "صيغة التفضيل تبيّن أن شيئًا ما يملك أعلى أو أقل درجة من صفة معيّنة في مجموعة من ثلاثة أو أكثر.",
              examples: ["Example: This is {x:the most} delicious dish on the menu."] },
            { title: "Use -er / -est",
              text: "Use -er / -est with most one-syllable adjectives (small, smaller, the smallest). Use -er / -est with two-syllable adjectives ending in -y (happy, happier, the happiest). Change y to i before adding -er or -est.",
              textAr: "نستخدم er / est مع أغلب الصفات ذات المقطع الواحد، ومع الصفات ذات المقطعين المنتهية بـ y بعد تحويل y إلى i.",
              examples: ["small → small{x:er} → {x:the} small{x:est}", "happy → happ{x:ier} → {x:the} happ{x:iest}"] },
            { title: "Use more/most or less/least",
              text: "Use more/most or less/least with: most adjectives of two syllables (not ending in -y) (more modern / the most modern); all adjectives of three or more syllables (expensive, more expensive, the most expensive).",
              textAr: "نستخدم more / most أو less / least مع أغلب الصفات ذات المقطعين (غير المنتهية بـ y)، ومع كل الصفات ذات ثلاثة مقاطع أو أكثر.",
              examples: ["modern → {x:more} modern → {x:the most} modern", "expensive → {x:more} expensive → {x:the most} expensive"] },
            { title: "Some adjectives do not follow regular rules",
              text: "good → better → the best; bad → worse → the worst; little → less → the least; much / many → more → the most; far → farther / further → the farthest / the furthest.",
              textAr: "بعض الصفات لا تتبع القواعد: good و bad و little و much / many و far لها صيغ خاصة (انظر الجدول)." },
            { title: "less … than / the least …", source: "extra",
              text: "less and the least are the opposite of more and the most. They show a lower degree of a quality.",
              textAr: "less و the least عكس more و the most، وتدلّان على درجة أقل من الصفة.",
              examples: ["Pasta is {x:less} expensive {c:than} sushi.", "Plain rice is {x:the least} spicy dish on the table."] },
            { title: "Spelling tips", source: "extra",
              text: "One vowel + one consonant at the end: double the consonant (big → bigger → the biggest, hot → hotter). Adjectives ending in -e: add only -r / -st (large → larger → the largest).",
              textAr: "إذا انتهت الصفة بحرف متحرك واحد ثم ساكن واحد نضاعف الحرف الأخير، وإذا انتهت بـ e نضيف r أو st فقط.",
              examples: ["A watermelon is bi{x:gger} {c:than} an apple.", "This is {x:the} large{x:st} pizza in the shop."] },
            { title: "Be careful!", source: "extra",
              text: "Do not use more with -er, or most with -est. Use than after a comparative, and the before a superlative.",
              textAr: "لا نستخدم more مع er، ولا most مع est. ونستخدم than بعد صيغة المقارنة، و the قبل صيغة التفضيل.",
              examples: ["✗ more healthier → ✓ health{x:ier}", "✗ the most tastiest → ✓ {x:the} tast{x:iest}"] }
          ],
          table: {
            head: ["Adjective", "Comparative", "Superlative"],
            rows: [
              ["good", "{x:better}", "{x:the best}"],
              ["bad", "{x:worse}", "{x:the worst}"],
              ["little", "{x:less}", "{x:the least}"],
              ["much / many", "{x:more}", "{x:the most}"],
              ["far", "{x:farther / further}", "{x:the farthest / the furthest}"]
            ]
          },
          worked: {
            q: "Complete: Travelling by train is ____ (comfortable) than travelling by bus.",
            steps: ["We compare two things (train and bus) and there is “than” → comparative.", "comfortable has more than two syllables (com-for-ta-ble).", "Long adjectives use more: more comfortable."],
            a: "Travelling by train is {x:more} comfortable {c:than} travelling by bus."
          },
          notes: ["The table shows the book’s irregular adjectives. The column headings (Adjective, Comparative, Superlative) are added by the app; they are not in the book.", "Steps 6–8 and the worked example are extra help, not in the book."] },

        { type: "activity", title: "1. b. Discuss the following questions.", page: 55, source: "book", stage: "guided",
          instructions: "Look at the four sentences in 1a. Write the words.", instructionsAr: "انظر إلى الجمل الأربع في التمرين 1a واكتب الكلمات المطلوبة.",
          items: [
            { t: "short", q: "Which words in the sentences compare two things or ideas?", model: "healthier, greater, more popular", keywords: [["healthier"], ["greater"], ["more popular"]], hint: "Look for -er and more … than." },
            { t: "short", q: "Which words show something is the best, most, or least in a group?", model: "the easiest, the most delicious", keywords: [["easiest"], ["most delicious"]], hint: "Look for -est and the most." }
          ] },

        { type: "activity", title: "2. Complete the sentences using the correct comparative or superlative form of the adjectives.", page: 55, source: "book", stage: "independent",
          instructions: "Write the correct form of the adjective in brackets.", instructionsAr: "اكتب الصيغة الصحيحة للصفة التي بين القوسين.",
          items: [
            { t: "fill", q: "1. That was the ____ (exciting) movie I’ve ever seen!", answer: ["most exciting", "least exciting"], hint: "“the” + “I’ve ever seen” → superlative. exciting is a long adjective.", why: "Long adjective → the most + adj: the most exciting. (“the least exciting” is also correct: see Use more/most or less/least.)" },
            { t: "fill", q: "2. Travelling by train is ____ (comfortable) than travelling by bus.", answer: ["more comfortable", "less comfortable"], hint: "“than” → comparative. comfortable is a long adjective.", why: "Long adjective → more + adj + than: more comfortable than. (“less comfortable” is also correct: see Use more/most or less/least.)" }
          ] },

        { type: "activity", title: "Extra Practice: Step 1 — Comparative or superlative?", source: "extra", stage: "guided",
          instructions: "Choose the correct form.", instructionsAr: "اختر الصيغة الصحيحة.",
          items: [
            { t: "choose", q: "Salad is (healthier / the healthiest) than fried chicken.", options: ["healthier", "the healthiest"], answer: 0, why: "Two things + than → comparative." },
            { t: "choose", q: "This is (more delicious / the most delicious) dish on the menu.", options: ["more delicious", "the most delicious"], answer: 1, why: "One dish in a group (on the menu) → the most delicious." },
            { t: "choose", q: "Fruit is (the best / the goodest) snack.", options: ["the best", "the goodest"], answer: 0, why: "good → better → the best." },
            { t: "choose", q: "Fizzy drinks are (worse / badder) than water.", options: ["worse", "badder"], answer: 0, why: "bad → worse → the worst." },
            { t: "choose", q: "Sushi is (more expensive / expensiver) than pasta.", options: ["more expensive", "expensiver"], answer: 0, why: "Three syllables → more expensive." },
            { t: "choose", q: "Chips are (saltier / more salty) than apples.", options: ["saltier", "more salty"], answer: 0, why: "Two syllables ending in -y → y to i + er: saltier." }
          ] },

        { type: "activity", title: "Extra Practice: Step 2 — Fix the mistake (on your own)", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct form.", instructionsAr: "يوجد جزء خاطئ. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "Vegetables are {more healthier} than snacks.", answer: ["healthier"], hint: "Do not use more with -er.", why: "healthy → healthier." },
            { t: "fix", q: "Machboos is the {spicyest} dish on the table.", answer: ["spiciest"], hint: "Change y to i.", why: "spicy → the spiciest." },
            { t: "fix", q: "Homemade meals are {cheapest} than fast food.", answer: ["cheaper"], hint: "There is “than”.", why: "Two things + than → cheaper." },
            { t: "fix", q: "This is the {most big} pizza in the shop.", answer: ["biggest"], hint: "big has one syllable. Double the g.", why: "big → bigger → the biggest." },
            { t: "short", q: "Compare two drinks. Write one sentence with a comparative.", open: true, model: "Water is healthier than fizzy drinks.", hint: "… is healthier / better / sweeter than …" }
          ] },

        { type: "write", title: "3. Write a three-sentence paragraph comparing two or three meals or food types.", page: 55, source: "book",
          instructions: "Use: At least 2 comparatives. At least 2 superlatives.",
          wordBankLabel: "Sentence Starters",
          wordBank: ["I think smoothies are healthier than ...", "The most delicious smoothie I’ve tried is made with..."],
          frame: [
            { label: "Sentence 1", hint: "I think … are healthier than …" },
            { label: "Sentence 2", hint: "… are tastier / more delicious than …" },
            { label: "Sentence 3", hint: "… is the best …, and … is / are the worst." }
          ],
          model: "Salads are healthier than burgers. Smoothies are tastier than fizzy drinks. Fruit is the best snack, and fried chips are the worst.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I used at least 2 comparatives (+ than).", "I used at least 2 superlatives (the …).", "I wrote three sentences."],
          minWords: 20 }
      ],
      game: { kind: "quiz", title: "Compare Race", items: [
        { t: "choose", q: "Vegetables are ____ than snacks.", options: ["healthier", "the healthiest"], answer: 0, why: "two things + than → healthier" },
        { t: "choose", q: "This is the ____ dish on the menu.", options: ["most delicious", "deliciousest"], answer: 0, why: "long adjective → the most delicious" },
        { t: "choose", q: "good → better → ____", options: ["the best", "the goodest"], answer: 0, why: "irregular: the best" },
        { t: "choose", q: "far → ____ → the farthest", options: ["farther", "farer"], answer: 0, why: "irregular: farther / further" },
        { t: "choose", q: "little → less → ____", options: ["the least", "the littlest"], answer: 0, why: "irregular: the least" },
        { t: "choose", q: "Travelling by train is ____ than travelling by bus.", options: ["more comfortable", "comfortabler"], answer: 0, why: "long adjective → more comfortable" }
      ] },
      teacher: {
        notes: [
          "Ex. 1a–b: read the four sentences from the article. Answer key: comparatives = healthier, greater, more popular (underlined); superlatives = the easiest, the most delicious (circled).",
          "Present the Grammar Box: comparatives (two things) and superlatives (a group of three or more), the -er / -est and more / most (less / least) rules and the irregular table.",
          "Grammar Lab and Predict (Extra), then ex. 2: 1. most exciting 2. more comfortable (the app also accepts “least exciting” / “less comfortable”, which are grammatically correct).",
          "Ex. 3: a three-sentence paragraph with at least 2 comparatives and 2 superlatives. Answer-key model: Salads are healthier than burgers. Smoothies are tastier than fizzy drinks. Fruit is the best snack, and fried chips are the worst."
        ],
        pair: ["A names two foods; B compares them with a comparative. Then A says a superlative about a group.", "Partners check each other’s paragraph: 2 comparatives + 2 superlatives?"],
        group: ["Class food survey: groups find the most popular, the healthiest and the most expensive dish in the canteen and report."],
        quick: [
          { q: "Comparative of “spicy”?", a: "spicier (than)" },
          { q: "Superlative of “expensive”?", a: "the most expensive" },
          { q: "Comparative and superlative of “far”?", a: "farther / further, the farthest / the furthest" },
          { q: "Correct it: Salads are more healthier than burgers.", a: "Salads are healthier than burgers." }
        ]
      }
    },

    /* ───────────────────────── LESSON 7 — WRITING (pp. 56–57) ───────────────────────── */
    {
      id: "u3l7", num: 7, skill: "Writing", title: "Why Eating Well Matters", pages: [56, 57], status: "complete",
      canDo: [
        "I can organise ideas effectively to produce a clear and accurate written outline about healthy food.",
        "I can compose a clearly structured two-paragraph report to explain healthy food choices and reasons for healthy eating."
      ],
      linkers: ["on the other hand", "in contrast"],
      goals: ["Say why healthy food is important.", "Link ideas with “on the other hand” and “in contrast”.", "Match healthy habits with their results.", "Plan and write a two-paragraph report: Eat Well, Live Well."],
      goalsAr: ["أوضّح لماذا الطعام الصحي مهم.", "أربط الأفكار باستخدام on the other hand و in contrast.", "أطابق العادات الصحية مع نتائجها.", "أخطّط لتقرير من فقرتين وأكتبه: Eat Well, Live Well."],
      warmup: {
        title: "Before You Write", image: null, emoji: "🥦", seconds: 120,
        instructions: "1. Discuss these questions. Then write your answers in the boxes.",
        prompts: ["Why is eating healthy food important?", "What healthy food choices would you make?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Discuss these questions. Then write your answers in the boxes.", page: 56, source: "book", stage: "guided",
          instructions: "Write four ideas in each box.", instructionsAr: "اكتب أربع أفكار في كل مربع.",
          items: [
            { t: "table", q: "Why is eating healthy food important? What healthy food choices would you make?", open: true,
              head: ["Importance of Healthy Food", "Healthy Food Choices"],
              rows: [
                [{ model: "It keeps our body strong." }, { model: "Eat fruit and vegetables." }],
                [{ model: "It gives us energy." }, { model: "Drink water instead of soda." }],
                [{ model: "It protects us from disease." }, { model: "Cook meals at home." }],
                [{ model: "It helps us focus at school." }, { model: "Choose whole grains." }]
              ],
              note: "Your ideas can be different. The suggested answers are from the answer key." }
          ] },

        { type: "grammar", title: "Build Supporting Details: Linkers of Contrast: on the other hand, in contrast", page: 56,
          steps: [
            { title: "on the other hand, in contrast",
              text: "Use ‘on the other hand’ and ‘in contrast’ to link these sentences. 1. Vegetables are full of vitamins. Unhealthy snacks are high in fat.",
              textAr: "نستخدم on the other hand و in contrast لربط جملتين تحملان فكرتين متعاكستين.",
              examples: ["→ Vegetables are full of vitamins. {c:On the other hand}, unhealthy snacks are high in fat.", "→ Vegetables are full of vitamins. {c:In contrast}, unhealthy snacks are high in fat."] },
            { title: "Punctuation", source: "extra",
              text: "Finish the first sentence with a full stop. Start the second sentence with On the other hand or In contrast, and put a comma after it.",
              textAr: "ننهي الجملة الأولى بنقطة، ثم نبدأ الجملة الثانية بـ On the other hand أو In contrast ونضع بعدها فاصلة.",
              examples: ["Water is healthy. {c:In contrast}, fizzy drinks contain a lot of sugar."] },
            { title: "Contrast or cause and effect?", source: "extra",
              text: "Contrast (opposite ideas): on the other hand, in contrast. Cause and effect (a reason and a result): because, so, as a result.",
              textAr: "للتعبير عن التضاد نستخدم on the other hand و in contrast، وللتعبير عن السبب والنتيجة نستخدم because و so و as a result.",
              examples: ["I cook meals at home {c:because} I want to control ingredients.", "I eat fruit every day. {c:As a result}, I feel energetic."] }
          ] },

        { type: "activity", title: "2. Use 'on the other hand' and 'in contrast' to link these sentences.", page: 56, source: "book", stage: "guided",
          instructions: "Link the two sentences. Write the new sentences.", instructionsAr: "اربط الجملتين باستخدام on the other hand أو in contrast واكتب الجمل الجديدة.",
          items: [
            { t: "short", q: "2. Homemade meals are usually healthy and fresh. Fast food is often high in calories and salt.\n→", model: "Homemade meals are usually healthy and fresh. On the other hand, fast food is often high in calories and salt.", keywords: [["on the other hand", "in contrast"], ["fast food"]], hint: "Sentence 1. On the other hand, sentence 2." },
            { t: "short", q: "3. Organic food is grown without harmful chemicals. Regular food may contain pesticides.\n→", model: "Organic food is grown without harmful chemicals. In contrast, regular food may contain pesticides.", keywords: [["on the other hand", "in contrast"], ["regular food"]], hint: "Sentence 1. In contrast, sentence 2." },
            { t: "short", q: "4. Smoothies are made from fresh fruits. Fizzy drinks contain a lot of sugar.\n→", model: "Smoothies are made from fresh fruits. On the other hand, fizzy drinks contain a lot of sugar.", keywords: [["on the other hand", "in contrast"], ["fizzy drinks"]], hint: "Sentence 1. On the other hand, sentence 2." }
          ] },

        { type: "activity", title: "3. Match and Reflect a. Match each healthy habit with its positive result.", page: 56, source: "book", stage: "guided",
          instructions: "Tap a healthy habit, then tap its positive result.", instructionsAr: "اضغط على العادة الصحية ثم اضغط على نتيجتها الإيجابية.",
          items: [
            { t: "match", q: "Match each healthy habit with its positive result.",
              pairs: [["1. Eating more vegetables", "b. provides important vitamins and fibre"], ["2. Drinking water instead of soda", "a. keeps the body hydrated"], ["3. Cooking meals at home", "d. helps control ingredients"], ["4. Reading food labels", "c. avoids extra sugar, chemicals, or food additives"]],
              hint: "Think: what does each habit give you or help you avoid?",
              why: "1 → b, 2 → a, 3 → d, 4 → c." }
          ] },

        { type: "speak", title: "3. b. Discuss more eating habits with your partner. Use linkers of cause and effect (because, so, as a result) and linkers of contrast (on the other hand, in contrast).", page: 56, source: "book",
          instructions: "Discuss more eating habits with your partner.",
          dialogue: [
            { who: "Example", text: "I cook meals at home because I want to control ingredients." },
            { who: "Example", text: "I eat fresh vegetables every day. On the other hand, I sometimes eat pasta and rice." },
            { who: "A", text: "" }, { who: "B", text: "" }
          ],
          starters: ["because", "so", "as a result", "on the other hand", "in contrast"],
          record: true },

        { type: "write", title: "4. Nowadays, making healthy food choices has become more important than ever. Plan and write a two-paragraph report explaining what healthy food choices people can make and why eating healthily is becoming more important today. a. Complete the following outline with your ideas.", page: 57, source: "book",
          instructions: "Complete the following outline with your ideas.",
          image: "crops/u3l7-eat-well.jpg",
          wordBankLabel: "Linker Bank",
          wordBank: ["first", "also", "because", "so", "as a result", "on the other hand", "in contrast", "therefore", "in conclusion"],
          frame: [
            { label: "Introduction", hint: "", lines: 2 },
            { label: "Paragraph 1 (Healthy food choices) – Topic sentence", hint: "" },
            { label: "Paragraph 1 – Supporting details", hint: "", lines: 3 },
            { label: "Paragraph 1 – Concluding sentence", hint: "" },
            { label: "Paragraph 2 (The importance of eating healthy food) – Topic sentence", hint: "" },
            { label: "Paragraph 2 – Supporting details", hint: "", lines: 3 },
            { label: "Paragraph 2 – Concluding sentence", hint: "" },
            { label: "Conclusion", hint: "", lines: 2 }
          ],
          model: "Introduction: Healthy food choices are more important than ever.\nParagraph 1 – Topic sentence: People can make many healthy food choices.\nSupporting details: First, they can eat more fruit and vegetables. They can also cook healthier meals at home. In contrast, they should eat less fast food and sugar.\nConcluding sentence: These choices help us eat well every day.\nParagraph 2 – Topic sentence: Eating healthily is becoming more important today.\nSupporting details: Many people suffer from obesity and heart disease. Healthy food gives us more energy and fewer illnesses. As a result, we feel happier and study better.\nConcluding sentence: Therefore, healthy eating is the best choice.\nConclusion: In conclusion, eating well helps us live well.",
          modelFromBook: false, modelLabel: "Model outline (from the answer key – one possible answer)",
          checklist: ["I wrote an introduction and a conclusion.", "Each paragraph has a topic sentence, supporting details and a concluding sentence.", "I used linkers."],
          minWords: 60 },

        { type: "write", title: "4. b. Use the ideas in your outline to write the report in your notebook.", page: 57, source: "book",
          instructions: "Write your report: Eat Well, Live Well. Then use the Self-Assessment Checklist.",
          notes: ["ATTENTION: Let AI help you grow, not do the work for you."],
          wordBankLabel: "Linker Bank",
          wordBank: ["first", "also", "because", "so", "as a result", "on the other hand", "in contrast", "therefore", "in conclusion"],
          frame: [
            { label: "Introduction", hint: "Healthy food choices …", lines: 2 },
            { label: "Paragraph 1 (Healthy food choices)", hint: "People can make …", lines: 5 },
            { label: "Paragraph 2 (The importance of eating healthy food)", hint: "Eating healthily is …", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …", lines: 2 }
          ],
          model: "Nowadays, healthy food choices are more important than ever.\n\nPeople can make many healthy food choices. First, they can eat more fruit and vegetables. They can also cook healthier meals at home. In contrast, they should eat less fast food and sugar. These choices help us eat well every day.\n\nEating healthily is becoming more important today. Many people suffer from obesity and heart disease. Healthy food gives us more energy, and we get fewer illnesses. As a result, we feel happier and study better. Therefore, healthy eating is the best choice.\n\nIn conclusion, eating well helps us live well.",
          modelFromBook: false, modelLabel: "Model report (the answer key’s outline written as a report – one possible answer)",
          bookChecklist: [
            "I wrote a clear topic sentence for each paragraph.",
            "I used supporting details to explain my ideas.",
            "I used comparatives and superlatives correctly.",
            "I gave reasons for making healthy food choices.",
            "I included a concluding sentence for each paragraph.",
            "I checked my spelling, punctuation, and grammar.",
            "I used new vocabulary from this unit in my writing.",
            "I used linkers of cause/effect and contrast correctly in my writing."
          ],
          bookNote: "Self-Assessment Checklist (from the book).",
          minWords: 90 },

        { type: "activity", title: "Extra Practice: Contrast or cause and effect?", source: "extra", stage: "independent",
          instructions: "Choose the best linker.", instructionsAr: "اختر أداة الربط المناسبة.",
          items: [
            { t: "choose", q: "Fruit is sweet and healthy. (On the other hand / Because), sweets are bad for your teeth.", options: ["On the other hand", "Because"], answer: 0, why: "Two opposite ideas → On the other hand." },
            { t: "choose", q: "I drink a lot of water (because / in contrast) it keeps my body hydrated.", options: ["because", "in contrast"], answer: 0, why: "A reason → because." },
            { t: "choose", q: "I eat a healthy breakfast every day. (As a result / In contrast), I feel energetic at school.", options: ["As a result", "In contrast"], answer: 0, why: "A result → As a result." },
            { t: "choose", q: "Grilled fish is light. (In contrast / So), fried fish has a lot of fat.", options: ["In contrast", "So"], answer: 0, why: "Opposite ideas → In contrast." },
            { t: "choose", q: "Fast food has a lot of salt, (so / on the other hand) I don’t eat it often.", options: ["so", "on the other hand"], answer: 0, why: "A result in the same sentence → so." }
          ] }
      ],
      game: { kind: "sort", title: "Contrast or Cause and Effect?",
        buckets: ["Contrast ↔️", "Cause and effect ➡️"],
        cards: [["on the other hand", 0], ["in contrast", 0], ["because", 1], ["so", 1], ["as a result", 1]] },
      teacher: {
        notes: [
          "Before You Write (ex. 1): groups discuss, then fill in the two boxes. Answer-key ideas: It keeps our body strong / gives us energy / protects us from disease / helps us focus at school; eat fruit and vegetables, drink water instead of soda, cook meals at home, choose whole grains.",
          "Teach the linkers of contrast with the book’s example (Vegetables are full of vitamins. On the other hand / In contrast, unhealthy snacks are high in fat.).",
          "Ex. 2 (answer key, shortened): 2. Homemade meals are healthy. On the other hand, fast food is high in salt. 3. Organic food has no chemicals. In contrast, regular food may contain pesticides. 4. Smoothies are made from fruits. On the other hand, fizzy drinks have sugar. Students can keep the full sentences.",
          "Ex. 3a: 1 → b, 2 → a, 3 → d, 4 → c. Ex. 3b: pairs discuss more habits with because / so / as a result and on the other hand / in contrast.",
          "Ex. 4: complete the outline, then write the report and check it with the Self-Assessment Checklist. Remind students: Let AI help you grow, not do the work for you."
        ],
        pair: ["A says a healthy habit; B says the opposite with “On the other hand, …”.", "Peer editing with the Self-Assessment Checklist."],
        group: ["Groups make an “Eat Well, Live Well” poster with four healthy choices and four reasons."],
        quick: [
          { q: "Name two linkers of contrast.", a: "On the other hand, in contrast." },
          { q: "Link: Water is healthy. Soda has a lot of sugar.", a: "Water is healthy. On the other hand / In contrast, soda has a lot of sugar." },
          { q: "What is the positive result of reading food labels?", a: "It avoids extra sugar, chemicals, or food additives." },
          { q: "Name one linker of cause and effect.", a: "because / so / as a result" }
        ]
      }
    }
  ]
});

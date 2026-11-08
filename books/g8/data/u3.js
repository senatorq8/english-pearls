// Learning Unit 3 — Healthy Inside, Healthy Outside (printed pages 48–58)
// Source: Grade 8 Student’s Book (new edition, First Term). The book’s answers (blue handwriting in the source)
// are used only as the answer key and as model answers; they are never shown as book text.
BOOK.addUnit({
  id: "u3", num: 3, title: "Healthy Inside, Healthy Outside", titleAr: "صحة من الداخل والخارج",
  pages: [48, 58], cover: 48,
  lessons: [

    /* ───────────────────────── LESSON 1 — READING ───────────────────────── */
    {
      id: "u3l1", num: 1, skill: "Reading", title: "How Teenagers Live a Healthy Life", pages: [49, 50], status: "complete",
      canDo: [
        "I can determine the main ideas and key details from an infographic about teenagers’ lifestyles.",
        "I can infer the meaning of new vocabulary logically from a written text about health and lifestyle to use them in meaningful contexts.",
        "I can write a well-organised paragraph advising classmates on how to improve their lifestyle using linking words and relevant vocabulary."
      ],
      goals: ["Read an infographic about healthy teenagers.", "Learn 11 new words.", "Match headings with paragraphs and find the writer’s purpose.", "Write a short post with advice."],
      goalsAr: ["أقرأ إنفوجرافيك عن المراهقين الأصحاء.", "أتعلّم ١١ كلمة جديدة.", "أطابق العناوين مع الفقرات وأحدّد هدف الكاتب.", "أكتب منشورًا قصيرًا فيه نصائح."],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u3l1-warmup.jpg", emoji: "🥗", seconds: 90,
        prompts: ["What does “healthy lifestyle” mean to you?", "What do you do to stay healthy?"]
      },
      vocab: [
        { w: "infographic", pos: "noun", emoji: "📊", def: "a text that uses words, pictures and symbols to explain information in a clear way", ex: "Read the following infographic and complete the tasks.", exFromBook: true, ar: "إنفوجرافيك (نص معلوماتي مصوّر)" },
        { w: "whole grain", pos: "noun", emoji: "🌾", def: "a grain food (like brown bread or oats) that has all of the seed in it", ex: "It is important to eat a balanced diet that includes fruits, vegetables, whole grains, and protein in your daily meals.", exFromBook: true, ar: "الحبوب الكاملة" },
        { w: "junk food", pos: "noun", emoji: "🍟", def: "food that is unhealthy but is quick and easy to eat", ex: "Drinking enough water and avoiding too much junk food help your body stay strong.", exFromBook: true, ar: "الوجبات السريعة غير الصحية" },
        { w: "active", pos: "adjective", emoji: "🏃", def: "moving and doing things a lot", ex: "Regular exercise is needed to keep your body active and your mind happy.", exFromBook: true, ar: "نشيط" },
        { w: "engage", pos: "verb", emoji: "🤸", def: "to be busy with a particular activity; to take part in it", ex: "It is recommended that teenagers engage in at least one hour of physical activity daily.", exFromBook: true, ar: "يشارك في / ينشغل بـ" },
        { w: "physical", pos: "adjective", emoji: "💪", def: "connected with your body", ex: "It is recommended that teenagers engage in at least one hour of physical activity daily.", exFromBook: true, ar: "بدني / جسدي" },
        { w: "enough", pos: "adverb", emoji: "✅", def: "as much as you need", ex: "Sleeping enough at night is also important for good health.", exFromBook: true, ar: "بما يكفي / كافٍ" },
        { w: "track", pos: "verb", emoji: "⌚", def: "to follow the progress of something", ex: "For example, smartwatches and fitness apps are used to count steps, track sleep, and record the number of calories burned.", exFromBook: true, ar: "يتتبّع" },
        { w: "record", pos: "verb", emoji: "📝", def: "to write down or save information so you can look at it later", ex: "For example, smartwatches and fitness apps are used to count steps, track sleep, and record the number of calories burned.", exFromBook: true, ar: "يسجّل" },
        { w: "frequently", pos: "adverb", emoji: "🔁", def: "often; many times", ex: "If you do not eat nutritious food or exercise frequently, you may feel tired, have trouble concentrating, or even get sick more often.", exFromBook: true, ar: "بشكل متكرّر / كثيرًا" },
        { w: "serious", pos: "adjective", emoji: "⚠️", def: "very bad or dangerous", ex: "Unhealthy choices, like eating junk food every day and sitting for long hours, can lead to serious health problems over time.", exFromBook: true, ar: "خطير" }
      ],
      sections: [
        { type: "reading", title: "How Teenagers Live a Healthy Life", page: 49,
          instructions: "2. Read the following infographic and complete the tasks.",
          blocks: [
            { head: "1st paragraph", paras: ["Living a healthy life is important for everyone, especially for teenagers. When you are a teenager, your body and mind are growing fast, so healthy habits are very important\n• It is important to eat a balanced diet that includes fruits, vegetables, whole grains, and protein in your daily meals.\n• Drinking enough water and avoiding too much junk food help your body stay strong."] },
            { head: "2nd paragraph", paras: ["Regular exercise is needed to keep your body active and your mind happy. It is recommended that teenagers engage in at least one hour of physical activity daily. This can include activities such as walking, running, swimming, or playing sports. Sleeping enough at night is also important for good health."] },
            { head: "3rd paragraph", paras: ["Today, technology is being used by many teenagers to help them stay fit. For example, smartwatches and fitness apps are used to count steps, track sleep, and record the number of calories burned. Exercise videos and healthy recipes can be found easily online. Reminders are sent by some devices to help you remember to move or drink water."] },
            { head: "4th paragraph", paras: ["If you do not eat nutritious food or exercise frequently, you may feel tired, have trouble concentrating, or even get sick more often. Unhealthy choices, like eating junk food every day and sitting for long hours, can lead to serious health problems over time. Always remember that the decisions you make now will affect your body and mind in the future."] }
          ],
          note: "In the book each paragraph has an empty box for its heading (exercise 3). The labels “1st paragraph” … “4th paragraph” are added here for the questions on page 50. The book has no full stop after “very important” in the 1st paragraph." },

        { type: "grammar", title: "Reading skills: An Infographic / Writer’s Purpose", page: 49,
          steps: [
            { title: "An Infographic (p. 49)", text: "An Infographic is a text that uses words, pictures and symbols to explain information in a clear way.",
              textAr: "الإنفوجرافيك نص يستخدم الكلمات والصور والرموز لشرح المعلومات بطريقة واضحة.", examples: [] },
            { title: "Writer’s Purpose (p. 50)", text: "You can know the writer’s main purpose by thinking about what the writer wants you to learn or do after reading the text.",
              textAr: "تعرف هدف الكاتب الرئيسي عندما تفكّر فيما يريد الكاتب أن تتعلّمه أو تفعله بعد قراءة النص.", examples: [] },
            { title: "How to match a heading (Extra)", source: "extra", text: "Read the first sentence of each paragraph and look for key words. Food words → a heading about eating. Exercise words → a heading about moving. Smartwatches and apps → technology. Tired, sick, problems → a warning.",
              textAr: "اقرأ الجملة الأولى في كل فقرة وابحث عن الكلمات المفتاحية: كلمات الطعام ← عنوان عن الأكل، والتمارين ← عنوان عن الحركة، والساعات الذكية ← التكنولوجيا، والتعب والمرض ← تحذير.", examples: [] }
          ] },

        { type: "activity", title: "3. Match the headings with the paragraphs.", page: 49, source: "book", stage: "guided",
          instructions: "Tap a heading, then tap its paragraph.", instructionsAr: "اضغط على العنوان ثم اضغط على الفقرة المناسبة له.",
          items: [
            { t: "match", q: "Match the headings with the paragraphs.",
              pairs: [["a. How Technology Helps", "3rd paragraph"], ["b. Eat Smart, Grow Strong", "1st paragraph"], ["c. Watch Out! Your Health Is at Risk!", "4th paragraph"], ["d. Move More, Live Better", "2nd paragraph"]],
              hint: "Look for key words: food, exercise, smartwatches, tired and sick.",
              why: "1st = b (balanced diet, water, junk food). 2nd = d (exercise, physical activity). 3rd = a (smartwatches and fitness apps). 4th = c (tired, sick, serious health problems)." }
          ] },

        { type: "activity", title: "4. Read the infographic again and complete the following tasks. a. Answer the following questions.", page: 50, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.", instructionsAr: "أجب عن الأسئلة، ثم قارن إجابتك بالإجابة المقترحة.",
          items: [
            { t: "short", q: "1. Name two foods you should eat every day.", model: "Fruits and vegetables.", keywords: [["fruit", "vegetable", "grain", "protein"]], hint: "Read the 1st paragraph (the first bullet)." },
            { t: "short", q: "2. How much physical activity is recommended for teenagers?", model: "One hour a day.", keywords: [["one hour", "1 hour", "an hour", "60 minutes", "sixty minutes"]], hint: "Read the 2nd paragraph." },
            { t: "short", q: "3. What do smartwatches help you track?", model: "Steps, sleep and calories.", keywords: [["sleep", "step", "calorie"]], hint: "Read the 3rd paragraph." },
            { t: "short", q: "4. What might happen if you don’t follow a healthy lifestyle?", model: "You may feel tired or get sick.", keywords: [["tired", "sick", "concentrat", "health problem"]], hint: "Read the 4th paragraph." },
            { t: "short", q: "5. Why do you think teenagers often choose unhealthy snacks?", model: "They are quick and tasty.", open: true, hint: "Think: why do people like junk food? (Look at the definition of junk food in exercise 5.)" }
          ] },

        { type: "activity", title: "b. The writer's main purpose is:", page: 50, source: "book", stage: "independent",
          instructions: "Choose the correct answer.", instructionsAr: "اختر الإجابة الصحيحة.",
          items: [
            { t: "mcq", q: "The writer's main purpose is:", options: ["to teach how to cook healthy meals.", "to explain the history of healthy food.", "to compare different sports for teenagers.", "to give advice about living a healthy lifestyle."], answer: 3,
              hint: "What does the writer want you to do after reading?", why: "The whole infographic tells teenagers what to do (eat well, exercise, sleep enough) and what to avoid: it gives advice." }
          ] },

        { type: "activity", title: "5. Find the word that means:", page: 50, source: "book", stage: "independent",
          instructions: "Read the paragraph. Find the word for each definition and write it in the table.", instructionsAr: "اقرأ الفقرة وابحث عن الكلمة المناسبة لكل تعريف، ثم اكتبها في الجدول.",
          items: [
            { t: "table", q: "Find the word that means:", head: ["Paragraph", "Definition", "Word"],
              rows: [
                ["1st", "food that is unhealthy but is quick and easy to eat", { answer: ["junk food"], model: "junk food" }],
                ["2nd", "busy with a particular activity", { answer: ["engage", "engage in"], model: "engage" }],
                ["3rd", "to follow the progress of something", { answer: ["track"], model: "track" }]
              ],
              hint: "The words are in bold in the infographic.", why: "1st: junk food. 2nd: engage (teenagers engage in physical activity). 3rd: track (track sleep)." }
          ] },

        { type: "write", title: "6. a. Write a four-sentence post for a social media platform giving advice to your schoolmates about living a healthy life.", page: 50, source: "book",
          instructions: "Write four sentences. Use the “Remember!” box.", instructionsAr: "اكتب أربع جمل، واستعن بمربع Remember!",
          wordBank: ["you should", "remember to", "avoid", "first", "then", "for example", "healthy lifestyle", "junk food", "protein"],
          frame: [
            { label: "Sentence 1 (hook)", hint: "Do you want to …?" },
            { label: "Sentence 2", hint: "First, you should …" },
            { label: "Sentence 3", hint: "Then, remember to …" },
            { label: "Sentence 4", hint: "Avoid … for a healthy lifestyle!" }
          ],
          model: "Do you want to feel stronger and happier every day? First, you should eat fruits, vegetables and protein. Then, remember to exercise for one hour and drink enough water. Avoid junk food and sleep early for a healthy lifestyle!",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          bookChecklist: ["Start with a Hook: “Do you want to feel stronger and happier every day?”", "Use: you should.., remember to..., avoid, etc.", "Use Linking Words: First, then, for example, etc.", "Use words: healthy lifestyle, junk food, protein, etc."],
          bookNote: "Remember!",
          checklist: ["I wrote four sentences.", "I started each sentence with a capital letter and ended it with a full stop, ? or !"],
          minWords: 30 },

        { type: "discuss", title: "b. Now, share your post with the class.", page: 50, source: "book",
          prompts: ["Now, share your post with the class."],
          emoji: "📱", seconds: 120,
          starters: ["Do you want to …?", "First, you should …", "Then, remember to …", "Avoid …"] },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "guided",
          instructions: "Read the sentence. Is it true or false? Use the infographic.", instructionsAr: "اقرأ الجملة: هل هي صحيحة أم خاطئة؟ استعن بالإنفوجرافيك.",
          items: [
            { t: "mcq", q: "When you are a teenager, your body and mind are growing fast.", options: ["True", "False"], answer: 0, hint: "1st paragraph.", why: "“When you are a teenager, your body and mind are growing fast.”" },
            { t: "mcq", q: "Teenagers should do two hours of physical activity every day.", options: ["True", "False"], answer: 1, hint: "2nd paragraph.", why: "The text says “at least one hour of physical activity daily”." },
            { t: "mcq", q: "Smartwatches and fitness apps can count steps.", options: ["True", "False"], answer: 0, hint: "3rd paragraph.", why: "“smartwatches and fitness apps are used to count steps”." },
            { t: "mcq", q: "Some devices send reminders to help you move or drink water.", options: ["True", "False"], answer: 0, hint: "3rd paragraph.", why: "“Reminders are sent by some devices to help you remember to move or drink water.”" },
            { t: "mcq", q: "Sitting for long hours is a healthy choice.", options: ["True", "False"], answer: 1, hint: "4th paragraph.", why: "It is one of the “unhealthy choices” that can lead to serious health problems." }
          ] },

        { type: "activity", title: "Extra Practice: Word check", source: "extra", stage: "independent",
          instructions: "Choose the correct word.", instructionsAr: "اختر الكلمة الصحيحة.",
          items: [
            { t: "choose", q: "My smartwatch can (track / engage) my sleep.", options: ["track", "engage"], answer: 0, why: "track = follow the progress of something." },
            { t: "choose", q: "Don’t eat (junk food / whole grains) every day.", options: ["junk food", "whole grains"], answer: 0, why: "Junk food is unhealthy." },
            { t: "choose", q: "Exercise keeps your body (active / serious).", options: ["active", "serious"], answer: 0, why: "active = moving and doing things a lot." },
            { t: "choose", q: "Eating junk food every day can lead to (serious / enough) health problems.", options: ["serious", "enough"], answer: 0, why: "serious = very bad or dangerous." },
            { t: "choose", q: "I drink water (frequently / physical) during the day.", options: ["frequently", "physical"], answer: 0, why: "frequently = often." },
            { t: "choose", q: "Brown bread and oats are (whole grains / junk food).", options: ["whole grains", "junk food"], answer: 0, why: "Whole grains are healthy grain foods." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: [
          "Think, Pair, Share (2 min): what “healthy lifestyle” means; what students do to stay healthy.",
          "Pre-teach some of the 11 words with the flip cards (junk food, engage, track, frequently, serious).",
          "First reading: match the headings (1st = b, 2nd = d, 3rd = a, 4th = c). Read the Infographic box.",
          "Second reading: questions 4a, the writer’s purpose (4: to give advice) and the word table (junk food, engage, track).",
          "Writing: students write a four-sentence post with a hook, then share it with the class. Question 4a.5 and the post are open answers; the answer-key texts are only models."
        ],
        pair: ["Think, Pair, Share on the two warm-up questions.", "Partners read each other’s posts and check the “Remember!” box."],
        group: ["Groups design a healthy-life infographic for the class board: four boxes, a heading and a picture or symbol for each."],
        quick: [
          { q: "How much physical activity is recommended for teenagers?", a: "At least one hour a day." },
          { q: "What do smartwatches help you track?", a: "Steps, sleep and calories." },
          { q: "What does “junk food” mean?", a: "Food that is unhealthy but is quick and easy to eat." },
          { q: "What is the writer’s main purpose?", a: "To give advice about living a healthy lifestyle." }
        ]
      }
    },

    /* ───────────────────────── LESSON 2 — GRAMMAR ───────────────────────── */
    {
      id: "u3l2", num: 2, skill: "Grammar", title: "Comparatives and Superlatives", pages: [51], status: "complete",
      canDo: [
        "I can apply comparative and superlative adjectives accurately in spoken and written communication to compare people, places, and things in different contexts.",
        "I can perform short spoken interactions confidently using comparisons."
      ],
      goals: ["Compare two things with -er than / more … than.", "Use the -est / the most … for one thing in a group.", "Learn better / worse and the best / the worst.", "Do a class survey and write about it."],
      goalsAr: ["أقارن بين شيئين باستخدام ‎-er than‎ أو more … than.", "أستخدم the ‎-est‎ أو the most … لشيء واحد في مجموعة.", "أتعلّم better / worse و the best / the worst.", "أجري استبيانًا صفيًا وأكتب عنه."],
      warmup: {
        title: "1. Look at the picture and answer the questions.", image: "crops/u3l2-warmup.jpg", emoji: "🍎", seconds: 90,
        prompts: ["a- What is your favourite snack?", "b- Which snack is healthier, an apple or a chocolate bar? Why?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Grammar: Comparatives and Superlatives", page: 51,
          steps: [
            { title: "1 syllable: adj + er than / the + adj + est", text: "Adjectives with 1 syllable: comparative = adj + er than; superlative = the + adj + est.",
              textAr: "الصفات ذات المقطع الواحد: المقارنة = الصفة + er + than، والتفضيل = the + الصفة + est.",
              examples: ["sweet → sweet{x:er} than → {x:the} sweet{x:est}", "light → light{x:er} than → {x:the} light{x:est}"] },
            { title: "2 syllables ending in -y: Adj + ier than / the + adj + iest", text: "Adjectives with 2 syllables ending in -y: change y to i, then add -er than or -est.",
              textAr: "الصفات ذات المقطعين المنتهية بـ y: نحوّل y إلى i ثم نضيف er + than أو est.",
              examples: ["healthy → health{x:ier} than → {x:the} health{x:iest}"] },
            { title: "2 or more syllables: more + adj than / the most + adj", text: "Adjectives with 2 or more syllables: use more + adj + than and the most + adj.",
              textAr: "الصفات ذات المقطعين أو أكثر: نستخدم more + الصفة + than و the most + الصفة.",
              examples: ["important → {x:more} important than → {x:the most} important", "difficult → {x:more} difficult than → {x:the most} difficult"] },
            { title: "Irregular", text: "Some adjectives are irregular: good → better than → the best; bad → worse than → the worst.",
              textAr: "بعض الصفات شاذّة: good ← better than ← the best، و bad ← worse than ← the worst.",
              examples: ["good → {x:better} than → the {x:best}", "bad → {x:worse} than → the {x:worst}"] },
            { title: "Comparative or superlative? (Extra)", source: "extra", text: "Two things → comparative + than. One thing in a group (in the world, in our class, of my life) → the + superlative.",
              textAr: "عند المقارنة بين شيئين نستخدم صيغة المقارنة مع than، وعند تفضيل شيء واحد في مجموعة نستخدم the مع صيغة التفضيل.",
              examples: ["An apple is health{x:ier} than a chocolate bar.", "Mount Everest is {x:the} high{x:est} mountain in the world."] },
            { title: "Spelling tips (Extra)", source: "extra", text: "Short adjectives that end in one vowel + one consonant double the last letter: hot → hotter → the hottest, big → bigger → the biggest. Adjectives that end in -e add only -r / -st: nice → nicer → the nicest.",
              textAr: "الصفات القصيرة المنتهية بحرف متحرك واحد ثم حرف ساكن واحد نضاعف آخر حرف فيها: hot ← hotter، والصفات المنتهية بـ e نضيف لها r أو st فقط: nice ← nicer.",
              examples: ["Summer is ho{x:tter} than winter.", "This is {x:the} nice{x:st} day of the week."] },
            { title: "Be careful! (Extra)", source: "extra", text: "Do not use more with -er, and do not use most with -est.",
              textAr: "لا نستخدم more مع er، ولا most مع est.",
              examples: ["✗ more healthier → ✓ health{x:ier}", "✗ the most happiest → ✓ {x:the} happ{x:iest}", "✗ gooder → ✓ {x:better}"] }
          ],
          table: {
            head: ["", "Adjectives", "Comparatives", "Superlatives"],
            rows: [
              ["1 syllable", "sweet / light", "adj + er than: sweet{x:er} than / light{x:er} than", "the + adj + est: {x:the} sweet{x:est} / {x:the} light{x:est}"],
              ["2 syllables ending in - y", "healthy", "Adj + ier than: health{x:ier} than", "the + adj + iest: {x:the} health{x:iest}"],
              ["2 or more syllables", "important / difficult", "more + adj than: {x:more} important than / {x:more} difficult than", "the most + adj: {x:the most} important / {x:the most} difficult"],
              ["Irregular", "good / bad", "{x:better} than / {x:worse} than", "the {x:best} / the {x:worst}"]
            ]
          },
          worked: {
            q: "Complete: Water is ____ (healthy) than soda.",
            steps: ["We compare two things (water and soda) and there is “than” → comparative.", "healthy has 2 syllables and ends in -y.", "Change y to i and add -er: healthier.", "Water is healthier than soda."],
            a: "Water is health{x:ier} than soda."
          },
          notes: ["The red letters in the book’s table are shown in colour here. The “Comparative or superlative?”, spelling and “Be careful!” steps are extra help, not in the book."] },

        { type: "activity", title: "2. a. Write sentences comparing the two items in each pair. Use the correct comparative form.", page: 51, source: "book", stage: "guided",
          instructions: "Example: a. A lion / a cat (strong) → A lion is stronger than a cat. Now write sentences b and c.", instructionsAr: "مثال: A lion is stronger than a cat. اكتب الآن الجملتين b و c.",
          items: [
            { t: "short", q: "b. Summer / winter (hot) →", model: "Summer is hotter than winter.", keywords: [["summer"], ["hotter than"], ["winter"]], hint: "hot → double the t, then add -er + than.", why: "hot → hotter than." },
            { t: "short", q: "c. A banana / chips (good) →", model: "A banana is better than chips.", keywords: [["banana"], ["better than"], ["chips"]], hint: "good is irregular.", why: "good → better than." }
          ] },

        { type: "activity", title: "3. Complete each sentence using the correct superlative form.", page: 51, source: "book", stage: "independent",
          instructions: "Write the superlative form of the adjective in brackets. Remember “the”.", instructionsAr: "اكتب صيغة التفضيل للصفة التي بين القوسين، ولا تنسَ the.",
          items: [
            { t: "fill", q: "a. This was ____ (happy) day of my life!", answer: ["the happiest"], hint: "happy ends in -y.", why: "happy → the happiest (y → iest)." },
            { t: "fill", q: "b. Mount Everest is ____ (high) mountain in the world.", answer: ["the highest"], hint: "high has 1 syllable.", why: "high → the highest." },
            { t: "fill", q: "c. She is ____ (intelligent) student in our class.", answer: ["the most intelligent"], hint: "intelligent is a long adjective.", why: "Long adjectives → the most + adj: the most intelligent." },
            { t: "fill", q: "d. That was ____ (bad) movie I have ever seen.", answer: ["the worst"], hint: "bad is irregular.", why: "bad → worse → the worst." }
          ] },

        { type: "activity", title: "Extra Practice: Comparative or superlative?", source: "extra", stage: "guided",
          instructions: "Choose the correct form.", instructionsAr: "اختر الصيغة الصحيحة.",
          items: [
            { t: "choose", q: "An apple is (healthier / the healthiest) than a chocolate bar.", options: ["healthier", "the healthiest"], answer: 0, why: "Two things + than → comparative." },
            { t: "choose", q: "August is (hotter / the hottest) month of the year in Kuwait.", options: ["hotter", "the hottest"], answer: 1, why: "One month in a group (of the year) → superlative." },
            { t: "choose", q: "Maths is (more difficult / the most difficult) than art for me.", options: ["more difficult", "the most difficult"], answer: 0, why: "Two things + than → more difficult." },
            { t: "choose", q: "Water is (better / the best) drink for your body.", options: ["better", "the best"], answer: 1, why: "One drink above all others → the best." },
            { t: "choose", q: "Junk food is (worse / the worst) than fruit.", options: ["worse", "the worst"], answer: 0, why: "Two things + than → worse." },
            { t: "choose", q: "A feather is (lighter / the lightest) than a book.", options: ["lighter", "the lightest"], answer: 0, why: "Two things + than → lighter." }
          ] },

        { type: "activity", title: "Extra Practice: Fix the mistake", source: "extra", stage: "independent",
          instructions: "One part is wrong. Type the correct form.", instructionsAr: "يوجد جزء خاطئ. اكتب الصيغة الصحيحة.",
          items: [
            { t: "fix", q: "A lion is {more strong} than a cat.", answer: ["stronger"], hint: "strong has 1 syllable.", why: "1 syllable → strong + er: stronger." },
            { t: "fix", q: "Water is {gooder} than soda.", answer: ["better"], hint: "good is irregular.", why: "good → better." },
            { t: "fix", q: "This is the {most happiest} day of my life.", answer: ["happiest"], hint: "Do not use most with -est.", why: "the happiest (not the most happiest)." },
            { t: "fix", q: "Sleep is {importanter} than video games.", answer: ["more important"], hint: "important is a long adjective.", why: "Long adjectives → more important." },
            { t: "short", q: "Compare two snacks. Write one sentence with a comparative.", model: "Dates are healthier than chips.", open: true, hint: "… is healthier / better / sweeter than …" }
          ] },

        { type: "activity", title: "4. Interactive Class Survey", page: 51, source: "book",
          instructions: "You are going to do a quick class survey. a. Ask your classmates: What kind of school day do you like most? Why? Use the table to collect their responses.",
          instructionsAr: "ستُجري استبيانًا صفيًا سريعًا: اسأل زملاءك عن نوع اليوم الدراسي الذي يحبونه أكثر ولماذا، ثم سجّل إجاباتهم في الجدول.",
          items: [
            { t: "table", q: "Write the number of classmates for each option (or tally marks).", head: ["Option", "Tally"], open: true,
              rows: [["A day with fun time (good)", { open: true }], ["A day with sports (healthy)", { open: true }], ["A day with a test (difficult)", { open: true }]],
              note: "Ask: What kind of school day do you like most? Why?" }
          ] },

        { type: "write", title: "b. Compare answers using comparatives.", page: 51, source: "book",
          instructions: "Look at your survey. Write sentences 2 and 3 with comparatives.", instructionsAr: "انظر إلى نتائج الاستبيان واكتب الجملتين ٢ و٣ باستخدام صيغة المقارنة.",
          example: "1. A day with fun activities is better than a day with only studying.",
          wordBank: ["better than", "worse than", "healthier than", "more difficult than", "more interesting than", "easier than"],
          frame: [{ label: "2.", hint: "A day with sports is … than …" }, { label: "3.", hint: "A day with a test is … than …" }],
          model: "2. A day with sports is healthier than a day with a test.\n3. A day with a test is more difficult than a day with sports.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I used a comparative + than in each sentence.", "I used more with long adjectives (more difficult).", "I started with a capital letter and ended with a full stop."],
          minWords: 15 },

        { type: "write", title: "c. Write three sentences using superlatives to show your classmates' opinions.", page: 51, source: "book",
          instructions: "Finish sentence 1, then write sentences 2 and 3 with superlatives.", instructionsAr: "أكمل الجملة الأولى، ثم اكتب الجملتين ٢ و٣ باستخدام صيغة التفضيل.",
          wordBank: ["the best", "the worst", "the healthiest", "the most difficult", "the most interesting", "because"],
          frame: [{ label: "1.", hint: "The best day is a day with fun time because: …" }, { label: "2.", hint: "The healthiest day is …" }, { label: "3.", hint: "The most difficult day is …" }],
          model: "1. The best day is a day with fun time because we can relax and play with our friends.\n2. The healthiest day is a day with sports.\n3. The most difficult day is a day with a test.",
          modelFromBook: false, modelLabel: "Model answer (sentences 2 and 3 are from the answer key; the end of sentence 1 is only an example)",
          checklist: ["I used the + superlative.", "I used the most with long adjectives.", "I wrote three sentences."],
          minWords: 20 }
      ],
      game: { kind: "quiz", title: "Compare Race", items: [
        { t: "choose", q: "A lion is ____ than a cat.", options: ["stronger", "the strongest"], answer: 0, why: "two things + than → stronger" },
        { t: "choose", q: "Summer is ____ than winter.", options: ["hoter", "hotter"], answer: 1, why: "hot → double the t → hotter" },
        { t: "choose", q: "A banana is ____ than chips.", options: ["better", "gooder"], answer: 0, why: "good → better" },
        { t: "choose", q: "This was ____ day of my life!", options: ["the happiest", "the happyest"], answer: 0, why: "y → iest: the happiest" },
        { t: "choose", q: "She is ____ student in our class.", options: ["the most intelligent", "the intelligentest"], answer: 0, why: "long adjective → the most intelligent" },
        { t: "choose", q: "That was ____ movie I have ever seen.", options: ["the worst", "the baddest"], answer: 0, why: "bad → worse → the worst" }
      ] },
      teacher: {
        notes: [
          "Warm-up: the picture (mother and daughter with snacks). Ask the two questions. Answer-key example: a- An apple. b- An apple, it has vitamins (open answers).",
          "Present the table row by row: 1 syllable (-er / -est), 2 syllables ending in -y (-ier / -iest), 2 or more syllables (more / the most), irregular (better / best, worse / worst).",
          "Grammar Lab and Predict (Extra), then exercise 2a (hotter than, better than) and exercise 3 (the happiest, the highest, the most intelligent, the worst).",
          "Class survey: students walk around and ask “What kind of school day do you like most? Why?”, keep a tally, then write comparatives (b) and superlatives (c)."
        ],
        pair: ["A names two things (a lion / a cat); B makes a comparative sentence. Then swap.", "Partners check each other’s survey sentences for than / the."],
        group: ["Survey in groups of 5–6: count the tallies and report: “The best day for our group is … because …”."],
        quick: [
          { q: "Comparative of “healthy”?", a: "healthier than" },
          { q: "Superlative of “difficult”?", a: "the most difficult" },
          { q: "Comparative and superlative of “bad”?", a: "worse than / the worst" },
          { q: "Correct it: Summer is more hot than winter.", a: "Summer is hotter than winter." }
        ]
      }
    },

    /* ───────────────────────── LESSON 3 — LISTENING ───────────────────────── */
    {
      id: "u3l3", num: 3, skill: "Listening", title: "Stories from Teens Around the World", pages: [52], status: "complete",
      canDo: [
        "I can determine the main idea and both explicit and implicit details in a spoken text about teenagers’ healthy habits.",
        "I can maintain a short discussion based on spoken information about a one-day healthy challenge by asking and answering relevant questions."
      ],
      goals: ["Sort healthy food and junk food.", "Listen for the main idea and details.", "Plan a healthy day and talk about it."],
      goalsAr: ["أصنّف الطعام الصحي والوجبات السريعة.", "أستمع للفكرة الرئيسية والتفاصيل.", "أخطّط ليوم صحي وأتحدث عنه."],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u3l3-warmup.jpg", emoji: "⚽", seconds: 90,
        prompts: ["a- What healthy activities do you do as a teenager?", "b- Do you walk or exercise with your friends or family?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "2. Write ‘H’ for healthy and ‘J’ for junk food under each picture.", page: 52, source: "book", stage: "guided",
          instructions: "Look at the five pictures from left to right. Choose H (healthy) or J (junk food).", instructionsAr: "انظر إلى الصور الخمس من اليسار إلى اليمين، واختر H للطعام الصحي أو J للوجبات غير الصحية.",
          image: "crops/u3l3-food.jpg",
          items: [
            { t: "choose", q: "Picture 1: fruit", options: ["H", "J"], answer: 0, why: "Fruit is healthy." },
            { t: "choose", q: "Picture 2: chocolate cake", options: ["H", "J"], answer: 1, why: "Chocolate cake has a lot of sugar: junk food." },
            { t: "choose", q: "Picture 3: fish (salmon)", options: ["H", "J"], answer: 0, why: "Fish gives you protein: healthy." },
            { t: "choose", q: "Picture 4: doughnuts", options: ["H", "J"], answer: 1, why: "Doughnuts are fried and sweet: junk food." },
            { t: "choose", q: "Picture 5: an egg", options: ["H", "J"], answer: 0, why: "Eggs give you protein: healthy." }
          ] },

        { type: "listen", title: "3. Listen to the Teen Health Hour Radio and complete the following tasks. a. Choose the main idea of the Teen Hour Radio:", page: 52, source: "book",
          track: "3.1", needsAudio: true,
          instructions: "Listen to the whole programme. Choose the main idea.", instructionsAr: "استمع إلى البرنامج كاملًا واختر الفكرة الرئيسية.",
          items: [
            { t: "mcq", q: "a. Choose the main idea of the Teen Hour Radio:", options: ["Teenagers should participate in a variety of activities.", "Teenagers should spend more time studying.", "Learning to cook new foods is important for teenagers.", "Teenagers can build healthy habits through simple daily routines."], answer: 3, keyed: true,
              hint: "What is the whole programme about? Look at the title of the lesson and the questions in b.", why: "Answer from the book’s answer key: the teens build healthy habits through simple daily routines (walking every evening, basketball twice a week)." }
          ] },

        { type: "listen", title: "b. Answer the following questions.", page: 52, source: "book",
          track: "3.1", needsAudio: true,
          instructions: "Listen again. Write short answers. Then compare with the suggested answer.", instructionsAr: "استمع مرة أخرى واكتب إجابات قصيرة، ثم قارن إجابتك بالإجابة المقترحة.",
          items: [
            { t: "short", q: "1. When does Fahad go for a walk with his cousins?", model: "Every evening after dinner.", open: true, keyed: true },
            { t: "short", q: "2. How often does Jane play basketball?", model: "Twice a week.", open: true, keyed: true },
            { t: "short", q: "3. How might walking with others help Fahad stay motivated?", model: "They talk, laugh and race.", open: true, keyed: true },
            { t: "short", q: "4. How do both teens show that healthy habits can also be fun and social?", model: "They do them with friends.", open: true, keyed: true }
          ] },

        { type: "activity", title: "4. Role Play “Your One-Day Healthy Challenge”. a. Work in groups to fill in the meal and activity plan. Choose healthy options.", page: 52, source: "book",
          instructions: "The first line (eggs, chicken, salad, walking) is in the book. Add two more healthy ideas in each column, and a snack.", instructionsAr: "السطر الأول موجود في الكتاب. أضف فكرتين صحيتين في كل عمود، ووجبة خفيفة.",
          items: [
            { t: "table", q: "My one-day healthy plan", head: ["Breakfast", "Lunch", "Dinner", "Physical Activity"], open: true,
              rows: [
                ["eggs", "chicken", "salad", "walking"],
                [{ open: true, model: "bread and cheese" }, "*Snack*", { open: true, model: "grilled fish" }, { open: true, model: "swimming" }],
                [{ open: true, model: "a glass of milk" }, { open: true, model: "dates and an apple" }, { open: true, model: "a glass of laban" }, { open: true, model: "playing football" }]
              ],
              note: "Your plan can be different. Choose healthy food and activities you like." }
          ] },

        { type: "speak", title: "b. Take turns to ask and answer.", page: 52, source: "book",
          instructions: "Use your plan. Ask and answer the four questions.",
          dialogue: [
            { who: "A", text: "Why do you have eggs for breakfast?" },
            { who: "B", text: "Simply because they have protein." },
            { who: "A", text: "1. Why did you choose this sport or activity?" },
            { who: "B", text: "" },
            { who: "A", text: "2. How will these foods help your body?" },
            { who: "B", text: "" },
            { who: "A", text: "3. Is there anything you would like to change or add?" },
            { who: "B", text: "" },
            { who: "A", text: "4. Do you think you can follow this plan every day? Why?" },
            { who: "B", text: "" }
          ],
          starters: ["Simply because …", "I chose … because it …", "These foods give me protein / vitamins / energy.", "I would like to add …", "Yes, I think I can, because … / No, I don’t think so, because …"],
          record: true },

        { type: "activity", title: "Extra Practice: The healthy choice", source: "extra", stage: "independent",
          instructions: "Choose the healthy option for your plan.", instructionsAr: "اختر الخيار الصحي لخطتك.",
          items: [
            { t: "choose", q: "Breakfast: (eggs and bread / doughnuts)", options: ["eggs and bread", "doughnuts"], answer: 0, why: "Eggs give you protein." },
            { t: "choose", q: "Snack: (dates and an apple / a chocolate bar)", options: ["dates and an apple", "a chocolate bar"], answer: 0, why: "Fruit is healthier than chocolate." },
            { t: "choose", q: "Dinner: (grilled fish / a burger and chips)", options: ["grilled fish", "a burger and chips"], answer: 0, why: "Grilled food is healthier than fried junk food." },
            { t: "choose", q: "Drink: (a glass of laban / a can of soda)", options: ["a glass of laban", "a can of soda"], answer: 0, why: "Laban has calcium; soda has a lot of sugar." },
            { t: "choose", q: "After dinner: (go for a walk / play video games for three hours)", options: ["go for a walk", "play video games for three hours"], answer: 0, why: "Walking keeps your body active." }
          ] }
      ],
      game: { kind: "sort", title: "Healthy or Junk Food?",
        buckets: ["H – healthy", "J – junk food"],
        cards: [["fruit", 0], ["grilled fish", 0], ["eggs", 0], ["salad", 0], ["dates", 0], ["laban", 0], ["chocolate cake", 1], ["doughnuts", 1], ["chips", 1], ["soda", 1], ["sweets", 1], ["fried chicken nuggets", 1]] },
      teacher: {
        notes: [
          "Think, Pair, Share with the photos of teens playing football.",
          "Exercise 2: H, J, H, J, H (fruit, chocolate cake, fish, doughnuts, egg).",
          "Play the book recording (track 3.1, QR code on page 52). It is not inside this app. First listening: main idea (4). Second listening: questions b.",
          "Answer key for b: 1. Every evening after dinner. 2. Twice a week. 3. They talk, laugh and race. 4. They do them with friends. Accept answers that match the recording.",
          "Role play: groups complete the one-day plan, then pairs ask and answer the four questions (model: “Why do you have eggs for breakfast?” – “Simply because they have protein.”)."
        ],
        pair: ["Ask and answer about the one-day plan (questions 1–4).", "A says a food; B says H or J and why."],
        group: ["Groups present their one-day healthy challenge; the class votes for the healthiest plan."],
        quick: [
          { q: "Is a doughnut H or J?", a: "J (junk food)." },
          { q: "What is the main idea of the radio programme?", a: "Teenagers can build healthy habits through simple daily routines." },
          { q: "How often does Jane play basketball?", a: "Twice a week." },
          { q: "Why are eggs good for breakfast?", a: "Because they have protein." }
        ]
      }
    },

    /* ───────────────────────── LESSON 4 — SPEAKING ───────────────────────── */
    {
      id: "u3l4", num: 4, skill: "Speaking", title: "Healthy Lifestyle", pages: [53], status: "complete",
      canDo: [
        "I can present opinions in spoken communication about healthy and unhealthy routines, providing reasons and suggestions using appropriate language.",
        "I can organise ideas logically to give advice about healthy lifestyles."
      ],
      goals: ["Ask and answer “How often do you …?”.", "Use always, usually, sometimes and never.", "Say if a lifestyle is healthy and give advice.", "Warn someone about poor habits."],
      goalsAr: ["أسأل وأجيب: How often do you …؟", "أستخدم always و usually و sometimes و never.", "أقول هل نمط الحياة صحي وأقدّم نصيحة.", "أحذّر شخصًا من العادات السيئة."],
      warmup: {
        title: "Think, Pair, Share", image: "crops/u3l4-warmup.jpg", emoji: "💧", seconds: 90,
        prompts: ["a- Think about your everyday habits and routines.", "b- Are they healthy or unhealthy?"]
      },
      vocab: [],
      sections: [
        { type: "speak", title: "2. Class Questionnaire a. Work in groups to fill in the table. Take turns to ask and answer.", page: 53, source: "book",
          image: "crops/u3l4-frequency.jpg",
          instructions: "Ask the six questions. Answer with Always (100%), Usually (75%), Sometimes (50%) or Never.",
          dialogue: [
            { who: "A", text: "How often do you eat fresh fruit and vegetables?" }, { who: "B", text: "" },
            { who: "A", text: "How often do you eat junk food?" }, { who: "B", text: "" },
            { who: "A", text: "How often do you skip breakfast on a school day?" }, { who: "B", text: "" },
            { who: "A", text: "How often do you drink 6-8 glasses of water?" }, { who: "B", text: "" },
            { who: "A", text: "How often do you exercise?" }, { who: "B", text: "" },
            { who: "A", text: "How often do you get 8 hours of sleep?" }, { who: "B", text: "" }
          ],
          starters: ["I always …", "I usually …", "I sometimes …", "I never …"],
          record: true },

        { type: "activity", title: "Class Questionnaire: the table", page: 53, source: "book",
          instructions: "Write your partner’s answer for each question: Always, Usually, Sometimes or Never.", instructionsAr: "اكتب إجابة زميلك لكل سؤال: Always أو Usually أو Sometimes أو Never.",
          items: [
            { t: "table", q: "How often do you …", head: ["How often do you", "Always / Usually / Sometimes / Never"], open: true,
              rows: [
                ["1- eat fresh fruit and vegetables?", { open: true, model: "Usually" }],
                ["2- eat junk food?", { open: true, model: "Sometimes" }],
                ["3- skip breakfast on a school day?", { open: true, model: "Never" }],
                ["4- drink 6-8 glasses of water?", { open: true, model: "Always" }],
                ["5- exercise?", { open: true, model: "Usually" }],
                ["6- get 8 hours of sleep?", { open: true, model: "Sometimes" }]
              ],
              note: "In the book you tick one box for each question. The suggested answers are one example from the answer key; your partner’s answers will be different." }
          ] },

        { type: "write", title: "b. Write two sentences about your partner's lifestyle. Is it healthy or unhealthy? Then, suggest ways to live a better lifestyle.", page: 53, source: "book",
          instructions: "Finish the two sentences from the book.", instructionsAr: "أكمل الجملتين الموجودتين في الكتاب.",
          wordBank: ["healthy", "unhealthy", "because", "you should", "eats", "exercises", "drinks", "sleeps"],
          frame: [
            { label: "- My friend has a healthy/ unhealthy lifestyle because…", hint: "he eats … / he exercises …" },
            { label: "- To have a better lifestyle, you should …", hint: "sleep … / drink … / eat …" }
          ],
          model: "My friend has a healthy lifestyle because he eats fruit and exercises.\nTo have a better lifestyle, you should sleep 8 hours every night.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I said if my partner’s lifestyle is healthy or unhealthy.", "I gave a reason with because.", "I gave advice with you should."],
          minWords: 15 },

        { type: "discuss", title: "3. Work in groups. Discuss how poor daily habits could harm your health.", page: 53, source: "book",
          image: "crops/u3l4-habits.jpg",
          instructions: "Look at the pictures. Use the phrases in the box “To warn someone:”.",
          prompts: ["Work in groups. Discuss how poor daily habits could harm your health."],
          example: "To warn someone: You should be aware that… / You might have problems if… / You’ll get sick if you don’t… / You could gain weight if … / It’s better not to…",
          starters: ["You should be aware that…", "You might have problems if…", "You’ll get sick if you don’t…", "You could gain weight if …", "It’s better not to…"],
          seconds: 180 },

        { type: "activity", title: "Extra Practice: Warn your friend", source: "extra", stage: "guided",
          instructions: "Read about your friend’s habit. Choose the best warning.", instructionsAr: "اقرأ عادة صديقك واختر أفضل تحذير.",
          items: [
            { t: "mcq", q: "Your friend eats chips every night.", options: ["You could gain weight if you eat chips every night.", "You should eat chips every night."], answer: 0, why: "“You could gain weight if …” warns about a poor habit." },
            { t: "mcq", q: "Your friend sleeps only five hours.", options: ["It’s better not to sleep early.", "You might have problems at school if you don’t sleep enough."], answer: 1, why: "Poor sleep can cause problems at school." },
            { t: "mcq", q: "Your friend never drinks water.", options: ["You’ll get sick if you don’t drink enough water.", "You should be aware that water is junk food."], answer: 0, why: "Your body needs 6–8 glasses of water a day." },
            { t: "mcq", q: "Your friend plays video games all day.", options: ["It’s better not to sit for long hours.", "You could gain weight if you exercise."], answer: 0, why: "Sitting for long hours is unhealthy." }
          ] }
      ],
      game: { kind: "quiz", title: "How Often?", items: [
        { t: "choose", q: "100% of the time = ____", options: ["always", "sometimes", "never"], answer: 0, why: "always = 100%" },
        { t: "choose", q: "75% of the time = ____", options: ["never", "usually", "sometimes"], answer: 1, why: "usually = 75%" },
        { t: "choose", q: "50% of the time = ____", options: ["sometimes", "always", "usually"], answer: 0, why: "sometimes = 50%" },
        { t: "choose", q: "0% of the time = ____", options: ["usually", "never", "always"], answer: 1, why: "never = 0%" },
        { t: "order", q: "Put the words in order.", words: ["I", "never", "skip", "breakfast."], answer: ["I never skip breakfast."], why: "Frequency word before the main verb." },
        { t: "order", q: "Put the words in order.", words: ["How", "often", "do", "you", "exercise?"], answer: ["How often do you exercise?"], why: "How often + do + you + verb?" }
      ] },
      teacher: {
        notes: [
          "Think, Pair, Share: students think about their habits and say if they are healthy or unhealthy.",
          "Questionnaire: groups ask the six “How often do you …?” questions and tick Always / Usually / Sometimes / Never (100% / 75% / 50% / 0%).",
          "2b: students finish the two sentences about a partner (model from the answer key: “… because he eats fruit and exercises.” / “… you should sleep 8 hours every night.”).",
          "Exercise 3: groups look at the four pictures (junk food, a bad mark, sick, depression) and warn each other with the “To warn someone” phrases."
        ],
        pair: ["Questionnaire interview with a partner.", "A describes a poor habit; B warns with a phrase from the box."],
        group: ["Each group chooses one poor habit and presents: the habit, how it harms health, and one piece of advice."],
        quick: [
          { q: "Which word means 75%?", a: "usually" },
          { q: "Ask your partner about water.", a: "How often do you drink 6-8 glasses of water?" },
          { q: "Warn someone who eats junk food every day.", a: "e.g. You could gain weight if you eat junk food every day." }
        ]
      }
    },

    /* ───────────────────────── LESSON 5 — READING ───────────────────────── */
    {
      id: "u3l5", num: 5, skill: "Reading", title: "Better Sleep, Better School", pages: [54, 55], status: "complete",
      canDo: [
        "I can identify key ideas related to the importance of sleep and its effects on students’ lives.",
        "I can extract relevant information from a website about sleeping habits and their impact on students.",
        "I can present a poster about healthy habits, clearly organising ideas and using relevant vocabulary to communicate the message."
      ],
      goals: ["Read a Q&A blog about sleep (an expository text).", "Learn 10 new words.", "Find the main idea and the effects of good and poor sleep.", "Make a poster: Top Tips for Better Sleep."],
      goalsAr: ["أقرأ مدوّنة أسئلة وأجوبة عن النوم (نص تفسيري).", "أتعلّم ١٠ كلمات جديدة.", "أحدّد الفكرة الرئيسية وآثار النوم الجيد والسيئ.", "أصمّم ملصقًا: أفضل النصائح لنوم أفضل."],
      warmup: {
        title: "Think, Pair, Share", image: null, emoji: "😴", seconds: 90,
        prompts: ["a- How many hours do you usually sleep on a school night?", "b- Why do you think some teens find it hard to sleep?"]
      },
      vocab: [
        { w: "expert", pos: "noun", emoji: "🎓", def: "a person with a high level of knowledge", ex: "Experts from the World Health Organisation and the National Sleep Foundation agree that teenagers need about eight to ten hours of sleep every night, but most teens actually sleep much less.", exFromBook: true, ar: "خبير" },
        { w: "actually", pos: "adverb", emoji: "💡", def: "in fact; really (often for something surprising)", ex: "Experts from the World Health Organisation and the National Sleep Foundation agree that teenagers need about eight to ten hours of sleep every night, but most teens actually sleep much less.", exFromBook: true, ar: "في الواقع / فعلًا" },
        { w: "device", pos: "noun", emoji: "📱", def: "a machine or tool, for example a phone or a tablet", ex: "Busy schedules, homework, and spending time on electronic devices can make it hard to go to bed early.", exFromBook: true, ar: "جهاز" },
        { w: "chat", pos: "verb", emoji: "💬", def: "to talk in a friendly way, often with messages on a phone", ex: "I do my homework late and chat with my friends on my phone.", exFromBook: true, ar: "يدردش" },
        { w: "affect", pos: "verb", emoji: "🔄", def: "to cause a change in someone or something", ex: "Doctors say that not getting enough sleep can affect a teenager’s mood, memory, and health.", exFromBook: true, ar: "يؤثّر في" },
        { w: "memory", pos: "noun", emoji: "🧠", def: "the ability to remember information", ex: "Doctors say that not getting enough sleep can affect a teenager’s mood, memory, and health.", exFromBook: true, ar: "الذاكرة" },
        { w: "stressed", pos: "adjective", emoji: "😣", def: "worried and not able to relax", ex: "In addition, tired teens may feel sad, stressed, or find it hard to remember what they have learned.", exFromBook: true, ar: "متوتّر" },
        { w: "encourage", pos: "verb", emoji: "👏", def: "to tell someone to do something in a positive way", ex: "Parents and teachers around the world are encouraging young people to build healthy sleep habits, such as turning off devices before bedtime and keeping a regular sleep schedule.", exFromBook: true, ar: "يشجّع" },
        { w: "regular", pos: "adjective", emoji: "🕘", def: "happening at the same time every day", ex: "Parents and teachers around the world are encouraging young people to build healthy sleep habits, such as turning off devices before bedtime and keeping a regular sleep schedule.", exFromBook: true, ar: "منتظم" },
        { w: "instead of", pos: "preposition", emoji: "🔁", def: "in the place of something else", ex: "Read a book instead of using your phone.", exFromBook: true, ar: "بدلًا من" }
      ],
      sections: [
        { type: "reading", title: "Better Sleep, Better School Q&A", page: 54,
          instructions: "2. Read the Q&A Blog on \"Teens Health\" website, and complete the tasks.",
          speaker: "Teens Health · Q&A blog",
          blocks: [
            { head: "Question:\nHow can I sleep better at night?", paras: ["I always feel tired at school. I do my homework late and chat with my friends on my phone. How can I get more sleep?"] },
            { head: "Dr. Rashid Ahmad,\nSleep Specialist", paras: [
              "You are not alone. Teenagers worldwide often do not get enough sleep. Experts from the World Health Organisation and the National Sleep Foundation agree that teenagers need about eight to ten hours of sleep every night, but most teens actually sleep much less. Busy schedules, homework, and spending time on electronic devices can make it hard to go to bed early. Many teens stay up late watching videos, chatting with friends, or using their phones. Doctors say that not getting enough sleep can affect a teenager’s mood, memory, and health. In addition, tired teens may feel sad, stressed, or find it hard to remember what they have learned.",
              "Good sleep habits help students do better in school, have more energy for sports and activities, and feel happier each day. In some countries, schools start later in the morning to help students get more sleep. Parents and teachers around the world are encouraging young people to build healthy sleep habits, such as turning off devices before bedtime and keeping a regular sleep schedule."
            ] },
            { head: "Dr. Rashid Ahmad’s Top Tips:", paras: ["✓ Go to bed at the same time each night.\n✓ Avoid screens before sleeping.\n✓ Keep your bedroom quiet and dark.\n✓ Don’t drink caffeinated drinks in the evening.\n✓ Take a relaxing shower.\n✓ Read a book instead of using your phone."] }
          ],
          image: "crops/u3l5-doctor.jpg",
          note: "Text type: Expository. On the printed page the question and the Top Tips are in the left column and Dr. Rashid’s answer is in the right column." },

        { type: "grammar", title: "Linking word: In addition", page: 54,
          steps: [
            { title: "“In addition”", text: "“In addition” is a linking word used to add extra information that supports a previous point.",
              textAr: "In addition أداة ربط نستخدمها لإضافة معلومة جديدة تدعم الفكرة السابقة.",
              examples: ["Doctors say that not getting enough sleep can affect a teenager’s mood, memory, and health. {c:In addition}, tired teens may feel sad, stressed, or find it hard to remember what they have learned."] },
            { title: "Use it in your writing (Extra)", source: "extra", text: "Put “In addition,” at the start of a new sentence, with a comma after it.",
              textAr: "ضع In addition في بداية جملة جديدة وبعدها فاصلة.",
              examples: ["Sleep helps you do better in school. {c:In addition}, it gives you more energy for sports."] }
          ] },

        { type: "activity", title: "3. Tick the main idea of this blog post.", page: 54, source: "book", stage: "guided",
          instructions: "Choose the main idea.", instructionsAr: "اختر الفكرة الرئيسية.",
          items: [
            { t: "mcq", q: "Tick the main idea of this blog post.", options: ["It explains why exercise is important for teenagers.", "It describes Dr. Rashid’s lifestyle.", "It gives advice to help teens sleep better.", "It describes different types of healthy food for teens."], answer: 2,
              hint: "Read the question in the blog and the Top Tips.", why: "A teen asks “How can I sleep better at night?” and Dr. Rashid answers with information and tips about sleep." }
          ] },

        { type: "activity", title: "4. Read the blog again and complete the table with the effects of good and poor sleep habits.", page: 55, source: "book", stage: "independent",
          instructions: "Find three effects of good sleep habits and three effects of poor sleep habits in Dr. Rashid’s answer.", instructionsAr: "ابحث في إجابة الدكتور راشد عن ثلاثة آثار للنوم الجيد وثلاثة آثار لعادات النوم السيئة.",
          items: [
            { t: "table", q: "Effects of good and poor sleep habits", head: ["Good Sleep Habits", "Poor Sleep Habits"], open: true,
              rows: [
                [{ open: true, model: "better results at school" }, { open: true, model: "bad mood and stress" }],
                [{ open: true, model: "more energy for sports" }, { open: true, model: "poor memory" }],
                [{ open: true, model: "feeling happier" }, { open: true, model: "feeling sad and tired" }]
              ],
              note: "Paragraph 2 gives the good effects; paragraph 1 gives the bad effects (mood, memory, health, sad, stressed)." }
          ] },

        { type: "activity", title: "5. Answer the following questions.", page: 55, source: "book", stage: "independent",
          instructions: "Answer the questions. Then compare with the suggested answer.", instructionsAr: "أجب عن السؤالين، ثم قارن إجابتك بالإجابة المقترحة.",
          items: [
            { t: "short", q: "a. How can a regular sleep schedule improve a teen’s health?", model: "It gives more energy.", keywords: [["energy", "happ", "better in school", "mood", "memory"]], hint: "Read the second paragraph of Dr. Rashid’s answer: Good sleep habits help students …" },
            { t: "short", q: "b. Why do you think using phones before bed can make it harder to sleep well?", model: "Because screens keep the brain awake.", open: true, hint: "Think about screens, videos and chatting late at night." }
          ] },

        { type: "activity", title: "6. a. Match each word to its meaning below: ( memory – encouraging – affect – expert )", page: 55, source: "book", stage: "guided",
          instructions: "Tap a meaning, then tap its word.", instructionsAr: "اضغط على المعنى ثم اضغط على الكلمة المناسبة.",
          items: [
            { t: "match", q: "Match each word to its meaning.",
              pairs: [["a. telling someone to do something in a positive way", "encouraging"], ["b. the ability to remember information", "memory"], ["c. a person with a high level of knowledge", "expert"], ["d. to cause a change in someone or something", "affect"]],
              hint: "Find each word in the blog and read the sentence around it.", why: "a. encouraging  b. memory  c. expert  d. affect" }
          ] },

        { type: "write", title: "b. Use a word from the list to make your own sentence.", page: 55, source: "book",
          instructions: "c. Work with a partner to check your sentences for punctuation marks. (Capital letters, full stops, etc)",
          wordBank: ["memory", "encouraging", "affect", "expert"],
          frame: [{ label: "My sentence", hint: "e.g. … can affect your …" }],
          model: "Too much sugar can affect your health.",
          modelFromBook: false, modelLabel: "Model answer (from the answer key – one possible answer)",
          checklist: ["I used a word from the list.", "My sentence starts with a capital letter.", "My sentence ends with a full stop.", "My partner checked my punctuation."],
          minWords: 6 },

        { type: "write", title: "7. Poster Presentation a. Work in groups. Create a colourful poster for your class called “Top Tips for Better Sleep.”", page: 55, source: "book",
          instructions: "Plan your poster here. Then make it on paper with colours and symbols.", instructionsAr: "خطّط لملصقك هنا، ثم صمّمه على ورقة بالألوان والرموز.",
          wordBank: ["go to bed", "at the same time", "avoid screens", "quiet and dark", "relaxing", "instead of", "regular"],
          frame: [
            { label: "Title", hint: "Top Tips for Better Sleep" },
            { label: "Tip 1 + symbol", hint: "e.g. 🛏️ Go to bed at the same time each night." },
            { label: "Tip 2 + symbol", hint: "" },
            { label: "Tip 3 + symbol", hint: "" }
          ],
          model: "Top Tips for Better Sleep\n🛏️ Go to bed at the same time every night.\n📵 Turn off your phone one hour before bedtime.\n🌙 Keep your bedroom quiet and dark.\n📖 Read a book instead of watching videos.",
          modelFromBook: false,
          bookChecklist: ["write a catchy title.", "include at least three tips.", "add symbols to show each tip.", "use clear, simple language.", "check your spelling."],
          bookNote: "To make a poster, you need to:",
          minWords: 15 },

        { type: "speak", title: "b. Present your poster to the class. Vote for the most informative one.", page: 55, source: "book",
          instructions: "When presenting your poster:",
          steps: ["speak loudly and clearly.", "explain each tip.", "answer all questions.", "thank the class for listening.", "point to the important tips on the poster."],
          dialogue: [{ who: "Group", text: "Our poster is called “Top Tips for Better Sleep.” Our first tip is …" }, { who: "Class", text: "" }],
          starters: ["Our poster is called …", "Our first tip is … because …", "Look at this symbol. It shows …", "Do you have any questions?", "Thank you for listening."],
          record: true },

        { type: "activity", title: "Extra Practice: True or False?", source: "extra", stage: "independent",
          instructions: "Read the sentence. Is it true or false? Use the blog.", instructionsAr: "اقرأ الجملة: هل هي صحيحة أم خاطئة؟ استعن بالمدوّنة.",
          items: [
            { t: "mcq", q: "Teenagers need about eight to ten hours of sleep every night.", options: ["True", "False"], answer: 0, why: "“teenagers need about eight to ten hours of sleep every night”" },
            { t: "mcq", q: "Most teens sleep more than they need.", options: ["True", "False"], answer: 1, why: "“most teens actually sleep much less.”" },
            { t: "mcq", q: "In some countries, schools start later in the morning.", options: ["True", "False"], answer: 0, why: "“In some countries, schools start later in the morning to help students get more sleep.”" },
            { t: "mcq", q: "Dr. Rashid says caffeinated drinks in the evening are a good idea.", options: ["True", "False"], answer: 1, why: "His tip: “Don’t drink caffeinated drinks in the evening.”" },
            { t: "mcq", q: "Not getting enough sleep can affect your memory.", options: ["True", "False"], answer: 0, why: "“not getting enough sleep can affect a teenager’s mood, memory, and health.”" }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: [
          "Think, Pair, Share: hours of sleep on a school night; why some teens find it hard to sleep.",
          "Pre-teach the words with the flip cards (expert, device, affect, memory, stressed, encourage, regular, instead of).",
          "Read the question, Dr. Rashid’s answer and the Top Tips. Point out “In addition” (the linking-word box).",
          "Tasks: main idea (It gives advice to help teens sleep better), the effects table, questions 5a–b (5b is an opinion), word match (encouraging, memory, expert, affect).",
          "Poster: groups follow the “To make a poster” list, then present and the class votes for the most informative poster."
        ],
        pair: ["6c: partners check each other’s sentences for capital letters and full stops.", "A reads a Top Tip; B explains why it helps."],
        group: ["Poster Presentation: “Top Tips for Better Sleep.”"],
        quick: [
          { q: "How many hours of sleep do teenagers need?", a: "About eight to ten hours every night." },
          { q: "Name one effect of poor sleep.", a: "Bad mood / stress / poor memory / feeling sad and tired." },
          { q: "What does “In addition” do?", a: "It adds extra information that supports a previous point." },
          { q: "What does “expert” mean?", a: "A person with a high level of knowledge." }
        ]
      }
    },

    /* ───────────────────────── LESSON 6 — GRAMMAR ───────────────────────── */
    {
      id: "u3l6", num: 6, skill: "Grammar", title: "Order of Adjectives", pages: [56], status: "complete",
      canDo: [
        "I can apply the correct order of adjectives before a noun in spoken and written communication to form accurate noun phrases in different contexts.",
        "I can organise ideas logically in short written descriptions using correct adjective order and structure."
      ],
      goals: ["Find adjectives that describe a picture.", "Put adjectives in order: opinion, size, age, shape, colour.", "Describe a favourite thing with four adjectives."],
      goalsAr: ["أجد الصفات التي تصف الصورة.", "أرتّب الصفات: الرأي، الحجم، العمر، الشكل، اللون.", "أصف شيئًا مفضّلًا بأربع صفات."],
      warmup: {
        title: "Look at the picture", source: "extra", image: "crops/u3l6-warmup.jpg", emoji: "💐", seconds: 60,
        prompts: ["What can you see in the picture?", "Which words describe the flowers?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. Circle the adjectives that describe the picture.", page: 56, source: "book", stage: "guided",
          instructions: "dark – beautiful – tall – old – fresh – short – red – black – plastic – round – square. Does each adjective describe the picture?",
          instructionsAr: "هل تصف كل صفة من هذه الصفات الصورة؟ اختر Yes أو No.",
          image: "crops/u3l6-warmup.jpg",
          items: [
            { t: "choose", q: "dark", options: ["Yes", "No"], answer: 1, why: "The flowers are bright, not dark." },
            { t: "choose", q: "beautiful", options: ["Yes", "No"], answer: 0, why: "The flowers are beautiful." },
            { t: "choose", q: "tall", options: ["Yes", "No"], answer: 1, why: "Not one of the answers in the book." },
            { t: "choose", q: "old", options: ["Yes", "No"], answer: 1, why: "The flowers are fresh, not old." },
            { t: "choose", q: "fresh", options: ["Yes", "No"], answer: 0, why: "The flowers are fresh." },
            { t: "choose", q: "short", options: ["Yes", "No"], answer: 1, why: "Not one of the answers in the book." },
            { t: "choose", q: "red", options: ["Yes", "No"], answer: 0, why: "There are red flowers (roses)." },
            { t: "choose", q: "black", options: ["Yes", "No"], answer: 1, why: "There are no black flowers." },
            { t: "choose", q: "plastic", options: ["Yes", "No"], answer: 1, why: "They are real, fresh flowers." },
            { t: "choose", q: "round", options: ["Yes", "No"], answer: 0, why: "The flowers are round." },
            { t: "choose", q: "square", options: ["Yes", "No"], answer: 1, why: "Nothing in the picture is square." }
          ] },

        { type: "grammar", title: "Grammar: Order of Adjectives", page: 56,
          steps: [
            { title: "Order of Adjectives", text: "When you use two or more adjectives before a noun, you should put them in the following order: opinion, size, age, shape, and colour.",
              textAr: "عندما نستخدم صفتين أو أكثر قبل الاسم نرتّبها هكذا: الرأي، ثم الحجم، ثم العمر، ثم الشكل، ثم اللون.",
              examples: ["There are beautiful fresh round red flowers in the vase."] },
            { title: "Ask a question for each type (Extra)", source: "extra", text: "Opinion: What do you think of it? Size: How big is it? Age: How old is it? Shape: What shape is it? Colour: What colour is it?",
              textAr: "اسأل عن كل نوع: ما رأيك فيه؟ ما حجمه؟ ما عمره؟ ما شكله؟ ما لونه؟",
              examples: ["a nice small blue bag = opinion + size + colour", "a strange old square box = opinion + age + shape"] },
            { title: "a or an? (Extra)", source: "extra", text: "Look at the first word after a / an. Use an before a vowel sound: an old box, an ancient tower. Use a before a consonant sound: a big old box.",
              textAr: "انظر إلى الكلمة الأولى بعد a / an: نستخدم an قبل الصوت المتحرك، و a قبل الصوت الساكن.",
              examples: ["We found an old square box.", "We found a strange old square box."] },
            { title: "Be careful! (Extra)", source: "extra", text: "The noun always comes last. Do not put “and” between adjectives before a noun.",
              textAr: "الاسم يأتي دائمًا في النهاية، ولا نضع and بين الصفات التي تسبق الاسم.",
              examples: ["✗ a red big car → ✓ a big red car", "✗ a nice and small bag → ✓ a nice small bag"] }
          ],
          table: {
            head: ["Opinion", "Size", "Age", "Shape", "Colour"],
            rows: [
              ["beautiful", "big", "old", "round", "red"],
              ["nice", "small", "new", "flat", "blue"],
              ["tasty", "huge", "modern", "straight", "vivid"],
              ["strange", "tiny", "ancient", "pointy", "bright"],
              ["fantastic", "narrow", "recent", "oval", "silver"],
              ["hard", "massive", "young", "curved", "golden"]
            ]
          },
          worked: {
            q: "Put the adjectives in order: We live in a (white – big – old) house.",
            steps: ["Find the type of each adjective: white = colour, big = size, old = age.", "Put them in the book’s order: size → age → colour.", "big → old → white, then the noun: house."],
            a: "We live in a big old white house."
          },
          notes: ["In the book’s example, “fresh” comes after the opinion word and before the shape and the colour."] },

        { type: "activity", title: "2. Reorder the adjectives in the following sentences.", page: 56, source: "book", stage: "guided",
          instructions: "Write the three adjectives in the correct order.", instructionsAr: "اكتب الصفات الثلاث بالترتيب الصحيح.",
          items: [
            { t: "fill", q: "a. Have you seen my (round – black – mini) bag? → Have you seen my ____ bag?", answer: ["mini round black"], bank: ["mini", "round", "black"], hint: "size → shape → colour", why: "mini (size) → round (shape) → black (colour): Have you seen my mini round black bag?" },
            { t: "fill", q: "b. My brother bought a (large – nice – new) house. → My brother bought a ____ house.", answer: ["nice large new"], bank: ["large", "nice", "new"], hint: "opinion → size → age", why: "nice (opinion) → large (size) → new (age): My brother bought a nice large new house." },
            { t: "fill", q: "c. My father would like to sell his (yellow – old – small) car. → My father would like to sell his ____ car.", answer: ["small old yellow"], bank: ["yellow", "old", "small"], hint: "size → age → colour", why: "small (size) → old (age) → yellow (colour): My father would like to sell his small old yellow car." }
          ] },

        { type: "activity", title: "3. Fill in the blanks with the most suitable adjectives in the correct order.", page: 56, source: "book", stage: "independent",
          instructions: "Example: a. My friend has a nice small blue bag. Choose three adjectives (you can use the table) and write them in the correct order.",
          instructionsAr: "مثال: My friend has a nice small blue bag. اختر ثلاث صفات (يمكنك الاستعانة بالجدول) واكتبها بالترتيب الصحيح.",
          items: [
            { t: "short", q: "b. We found a/an ………… ………… ………… box in the attic.", model: "We found a strange old square box in the attic.", open: true, hint: "e.g. opinion → age → shape. Use “an” if the first adjective starts with a vowel sound." },
            { t: "short", q: "c. There is a/an ………… ………… ………… painting on the wall.", model: "There is a beautiful big modern painting on the wall.", open: true, hint: "e.g. opinion → size → age." },
            { t: "short", q: "d. The man bought a/an ………… ………… ………… car.", model: "The man bought a fantastic new silver car.", open: true, hint: "e.g. opinion → age → colour." }
          ] },

        { type: "activity", title: "Extra Practice: Which order is correct?", source: "extra", stage: "guided",
          instructions: "Choose the correct order.", instructionsAr: "اختر الترتيب الصحيح.",
          items: [
            { t: "choose", q: "a (big old / old big) house", options: ["big old", "old big"], answer: 0, why: "size → age" },
            { t: "choose", q: "a (blue small / small blue) bag", options: ["blue small", "small blue"], answer: 1, why: "size → colour" },
            { t: "choose", q: "a (beautiful round / round beautiful) table", options: ["beautiful round", "round beautiful"], answer: 0, why: "opinion → shape" },
            { t: "choose", q: "an (old red / red old) car", options: ["old red", "red old"], answer: 0, why: "age → colour" },
            { t: "choose", q: "a (nice new / new nice) phone", options: ["nice new", "new nice"], answer: 0, why: "opinion → age" },
            { t: "choose", q: "a (huge square / square huge) box", options: ["huge square", "square huge"], answer: 0, why: "size → shape" }
          ] },

        { type: "activity", title: "Extra Practice: Sentence builder", source: "extra", stage: "independent",
          instructions: "Put the words in order to make a sentence.", instructionsAr: "رتّب الكلمات لتكوّن جملة.",
          items: [
            { t: "order", q: "👜 Make a sentence.", words: ["She", "has", "a", "nice", "big", "red", "bag."], answer: ["She has a nice big red bag."], hint: "opinion → size → colour", why: "nice (opinion) → big (size) → red (colour)" },
            { t: "order", q: "🏰 Make a sentence.", words: ["We", "visited", "an", "ancient", "round", "tower."], answer: ["We visited an ancient round tower."], hint: "age → shape", why: "ancient (age) → round (shape); an before a vowel sound." },
            { t: "order", q: "🚗 Make a sentence.", words: ["He", "bought", "a", "small", "old", "silver", "car."], answer: ["He bought a small old silver car."], hint: "size → age → colour", why: "small (size) → old (age) → silver (colour)" }
          ] },

        { type: "write", title: "4. Work in groups to describe your favourite thing at home using at least four adjectives. Draw it and present it to the group.", page: 56, source: "book",
          instructions: "Suggested items: toy, piece of furniture, backpack, dress, shirt, etc.",
          wordBank: ["beautiful", "nice", "big", "small", "old", "new", "modern", "round", "square", "flat", "red", "blue", "silver", "golden"],
          frame: [{ label: "My favourite thing", hint: "My favourite thing at home is a … … … … …" }, { label: "More about it", hint: "It is … / I like it because …", lines: 3 }],
          model: "My favourite thing at home is a nice big new round blue lamp. I like it because it gives soft light at night.",
          modelFromBook: false,
          checklist: ["I used at least four adjectives.", "My adjectives are in the order: opinion, size, age, shape, colour.", "I drew my thing and presented it to my group."],
          minWords: 12 }
      ],
      game: { kind: "sort", title: "Adjective Sort",
        buckets: ["Opinion", "Size", "Age", "Shape", "Colour"],
        cards: [["beautiful", 0], ["tasty", 0], ["strange", 0], ["huge", 1], ["tiny", 1], ["narrow", 1], ["ancient", 2], ["modern", 2], ["young", 2], ["flat", 3], ["oval", 3], ["pointy", 3], ["silver", 4], ["golden", 4], ["vivid", 4]] },
      teacher: {
        notes: [
          "Warm-up and exercise 1: the flowers. Answer key: beautiful, fresh, red, round.",
          "Read the rule box and the example (beautiful fresh round red flowers). Use the table: opinion → size → age → shape → colour.",
          "Grammar Lab and Predict (Extra), then exercise 2 (mini round black / nice large new / small old yellow).",
          "Exercise 3 has more than one correct answer. Answer key examples: strange old square, beautiful big modern, fantastic new silver. Accept any suitable adjectives in the right order.",
          "Exercise 4: groups describe and draw a favourite thing with four adjectives and present it."
        ],
        pair: ["A says a noun and three adjectives in any order; B says them in the correct order.", "Partners check each other’s descriptions for the order."],
        group: ["Mystery object: a group describes a thing in the classroom with four adjectives; other groups guess."],
        quick: [
          { q: "What is the order of adjectives?", a: "Opinion, size, age, shape, colour." },
          { q: "Correct it: a red big car.", a: "a big red car" },
          { q: "Put in order: (old – nice – small) house.", a: "a nice small old house" },
          { q: "Which type is “oval”?", a: "Shape." }
        ]
      }
    },

    /* ───────────────────────── LESSON 7 — WRITING ───────────────────────── */
    {
      id: "u3l7", num: 7, skill: "Writing", title: "Healthy Habits Today Lead to a Better Tomorrow", pages: [57, 58], status: "complete",
      canDo: [
        "I can organise ideas about healthy and unhealthy habits using an informational table.",
        "I can use linking words to connect ideas logically within a paragraph.",
        "I can write a well-structured expository report about healthy habits, following the writing process."
      ],
      goals: ["Organise ideas in a table.", "Use because, also, but and despite.", "Choose a good concluding sentence.", "Plan and write a two-paragraph report."],
      goalsAr: ["أنظّم الأفكار في جدول.", "أستخدم because و also و but و despite.", "أختار جملة ختامية مناسبة.", "أخطّط لتقرير من فقرتين وأكتبه."],
      linkers: ["because", "also", "but", "despite"],
      warmup: {
        title: "Healthy Habits Today Lead to a Better Tomorrow", image: "crops/u3l7-warmup.jpg", emoji: "🍏", seconds: 120,
        instructions: "In groups, discuss what people can do to lead a healthy lifestyle, and how bad habits can harm their health.",
        prompts: ["What can people do to lead a healthy lifestyle?", "How can bad habits harm their health?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "1. In groups, discuss what people can do to lead a healthy lifestyle, and how bad habits can harm their health.", page: 57, source: "book", stage: "guided",
          instructions: "Complete the table with your group’s ideas.", instructionsAr: "أكمل الجدول بأفكار مجموعتك.",
          items: [
            { t: "table", q: "Healthy habits and risks of bad habits", head: ["", "Healthy Habits", "Risks of Bad Habits"], open: true,
              rows: [
                ["Body", { open: true, model: "Eat healthy food and exercise." }, { open: true, model: "Weight gain and heart disease." }],
                ["Mind", { open: true, model: "Sleep well and relax." }, { open: true, model: "Stress and sadness." }],
                ["Education", { open: true, model: "Do homework on time and read." }, { open: true, model: "Poor focus and low marks." }]
              ],
              note: "Your ideas can be different. The suggested answers are from the answer key." }
          ] },

        { type: "grammar", title: "Linking words: because, also, but, despite", page: 57,
          steps: [
            { title: "“Despite”", text: "“Despite” shows the opposite idea. Example: Despite the rain, they played football.",
              textAr: "despite تدلّ على فكرة معاكسة. مثال: Despite the rain, they played football.",
              examples: ["{c:Despite} the rain, they played football."] },
            { title: "because, also, but (Extra)", source: "extra", text: "because gives a reason. also adds another idea (it goes before the main verb). but shows a different or opposite idea in the same sentence.",
              textAr: "because تعطي سببًا، و also تضيف فكرة أخرى وتأتي قبل الفعل الرئيسي، و but تربط فكرتين مختلفتين في الجملة نفسها.",
              examples: ["Athletes need meat {c:because} they need a lot of protein.", "Athletes may {c:also} find it hard to be vegetarian.", "These nutrients are in some foods, {c:but} sometimes it is not enough."] },
            { title: "Despite + noun (Extra)", source: "extra", text: "After despite we use a noun or noun phrase (the rain, these challenges), not a full sentence.",
              textAr: "بعد despite نستخدم اسمًا أو عبارة اسمية، وليس جملة كاملة.",
              examples: ["{c:Despite} these challenges, many people follow a vegetarian diet."] }
          ] },

        { type: "activity", title: "2. Work in pairs to complete the following paragraph. a. Fill in the gaps with the most suitable connectors from the list. (because – also – despite - but)", page: 57, source: "book", stage: "guided",
          instructions: "Read the paragraph sentence by sentence. Write the best connector in each gap.", instructionsAr: "اقرأ الفقرة جملةً جملة، واكتب أداة الربط المناسبة في كل فراغ.",
          items: [
            { t: "fill", q: "Being a vegetarian can have disadvantages. This is ____ the diet may be low in calcium, protein, iron, vitamin B12, and zinc.", answer: ["because"], bank: ["because", "also", "despite", "but"], hint: "This part gives a reason.", why: "because gives the reason for the disadvantages." },
            { t: "fill", q: "These nutrients are in some foods, ____ sometimes it is not enough.", answer: ["but"], bank: ["because", "also", "despite", "but"], hint: "The two ideas are different.", why: "but joins two different ideas: they are in some foods / it is not enough." },
            { t: "fill", q: "Athletes may ____ find it hard to be vegetarian because they need a lot of protein.", answer: ["also"], bank: ["because", "also", "despite", "but"], hint: "This adds one more disadvantage.", why: "also adds another idea and goes before the main verb (find)." },
            { t: "fill", q: "____ these challenges, many people follow a vegetarian diet to reduce the risk of health problems like heart disease.", answer: ["Despite"], bank: ["because", "also", "despite", "but"], hint: "The idea is the opposite of the challenges.", why: "Despite + noun phrase (these challenges) shows the opposite idea." }
          ] },

        { type: "activity", title: "b. Which of the following is the best concluding sentence?", page: 57, source: "book", stage: "independent",
          instructions: "Choose the best concluding sentence for the paragraph.", instructionsAr: "اختر أفضل جملة ختامية للفقرة.",
          items: [
            { t: "mcq", q: "Which of the following is the best concluding sentence?", options: ["To sum up, you should eat more vegetables.", "In conclusion, vegetarians need to plan their diets carefully to stay healthy.", "Finally, milk is a rich source of calcium, which is good for your bones."], answer: 1,
              hint: "A concluding sentence sums up the main idea of the whole paragraph.", why: "The paragraph is about the disadvantages of a vegetarian diet and why people still follow it, so vegetarians need to plan their diets carefully." }
          ] },

        { type: "write", title: "3. Plan and write a two-paragraph report explaining ways to lead a healthy lifestyle, and the risks of following unhealthy (poor) habits. a. Complete the following outline with your ideas.", page: 58, source: "book",
          instructions: "Complete the outline: introduction, two paragraphs (topic sentence, supporting details, concluding sentence) and a conclusion.",
          example: "A healthy lifestyle leads to a better and longer life, while unhealthy habits harm our bodies.",
          wordBank: ["because", "also", "but", "despite", "for example", "however", "in conclusion"],
          frame: [
            { label: "Introduction", hint: "" },
            { label: "Paragraph 1: Ways to lead a healthy lifestyle – Topic sentence", hint: "" },
            { label: "Paragraph 1 – Supporting details (at least two)", hint: "", lines: 3 },
            { label: "Paragraph 1 – Concluding sentence", hint: "" },
            { label: "Paragraph 2: Risks of following unhealthy habits – Topic sentence", hint: "" },
            { label: "Paragraph 2 – Supporting details (at least two)", hint: "", lines: 3 },
            { label: "Paragraph 2 – Concluding sentence", hint: "" },
            { label: "Conclusion", hint: "" }
          ],
          model: "Introduction: A healthy lifestyle helps us stay strong, but bad habits harm our bodies.\nParagraph 1 – Topic sentence: There are many ways to lead a healthy lifestyle.\nSupporting details: For example, we should eat fruit, vegetables and protein. We should also exercise for one hour every day.\nConcluding sentence: Because of these habits, we feel active and happy.\nParagraph 2 – Topic sentence: However, unhealthy habits have many risks.\nSupporting details: Eating junk food can cause weight gain and heart disease. Not sleeping enough causes stress and poor memory.\nConcluding sentence: Despite these risks, we can change our habits today.\nConclusion: In conclusion, healthy habits today lead to a better tomorrow.",
          modelFromBook: false, modelLabel: "Model outline (from the answer key – one possible answer)",
          checklist: ["I wrote an introduction and a conclusion.", "Each paragraph has a topic sentence, two supporting details and a concluding sentence.", "I used linking words."],
          minWords: 60 },

        { type: "write", title: "b. Use the ideas in your plan to write the report in your notebook. c. Use the following checklist to edit your writing.", page: 58, source: "book",
          instructions: "Write your report here or in your notebook. Then use the checklist “Remember to:”.",
          notes: ["ATTENTION: Use AI wisely and responsibly"],
          wordBank: ["because", "also", "but", "despite", "for example", "however", "in conclusion"],
          frame: [
            { label: "Introduction", hint: "A healthy lifestyle …" },
            { label: "Paragraph 1: Ways to lead a healthy lifestyle", hint: "There are many ways to …", lines: 5 },
            { label: "Paragraph 2: Risks of following unhealthy habits", hint: "However, unhealthy habits …", lines: 5 },
            { label: "Conclusion", hint: "In conclusion, …" }
          ],
          model: "A healthy lifestyle helps us stay strong, but bad habits harm our bodies.\n\nThere are many ways to lead a healthy lifestyle. For example, we should eat fruit, vegetables and protein. We should also exercise for one hour every day. Because of these habits, we feel active and happy.\n\nHowever, unhealthy habits have many risks. Eating junk food can cause weight gain and heart disease. Not sleeping enough causes stress and poor memory. Despite these risks, we can change our habits today.\n\nIn conclusion, healthy habits today lead to a better tomorrow.",
          modelFromBook: false, modelLabel: "Model report (the answer key’s outline written as a report – one possible answer)",
          bookChecklist: [
            "begin with a clear introduction about a healthy lifestyle and unhealthy habits.",
            "write two paragraphs: one about a healthy lifestyle and one about unhealthy habits.",
            "include a clear topic sentence in each paragraph.",
            "give at least two supporting details with examples in each paragraph.",
            "use linking words (e.g. also, but, because, despite).",
            "write full sentences with correct grammar and spelling.",
            "write a final conclusion that summarises your ideas.",
            "use AI tools wisely and responsibly to improve your writing."
          ],
          bookNote: "Remember to:",
          minWords: 80 },

        { type: "activity", title: "Extra Practice: Choose the connector", source: "extra", stage: "independent",
          instructions: "Choose the best connector.", instructionsAr: "اختر أداة الربط المناسبة.",
          items: [
            { t: "choose", q: "I was tired, (but / because) I finished my homework.", options: ["but", "because"], answer: 0, why: "Two opposite ideas → but." },
            { t: "choose", q: "She drinks a lot of water (because / despite) it is good for her body.", options: ["because", "despite"], answer: 0, why: "A reason → because." },
            { t: "choose", q: "(Despite / Also) the heat, they played football.", options: ["Despite", "Also"], answer: 0, why: "Despite + noun (the heat) → opposite idea." },
            { t: "choose", q: "He eats vegetables. He (also / but) eats fruit.", options: ["also", "but"], answer: 0, why: "Adding another idea → also." },
            { t: "choose", q: "I stayed at home (because / but) I was sick.", options: ["because", "but"], answer: 0, why: "A reason → because." },
            { t: "choose", q: "(Despite / Because) his cold, he went to school.", options: ["Despite", "Because"], answer: 0, why: "Despite + noun (his cold) → opposite idea." }
          ] }
      ],
      game: { kind: "quiz", title: "Linker Challenge", items: [
        { t: "choose", q: "Sleep is important ____ it helps your memory.", options: ["because", "despite"], answer: 0, why: "a reason → because" },
        { t: "choose", q: "____ the rain, they played football.", options: ["Despite", "But"], answer: 0, why: "Despite + noun" },
        { t: "choose", q: "Fruit is healthy, ____ chips are not.", options: ["but", "also"], answer: 0, why: "opposite ideas → but" },
        { t: "choose", q: "We should ____ drink enough water.", options: ["also", "because"], answer: 0, why: "adding an idea → also" },
        { t: "mcq", q: "Which is the best concluding sentence for a report about healthy habits?", options: ["In conclusion, healthy habits today lead to a better tomorrow.", "For example, I like apples."], answer: 0, why: "It starts with “In conclusion” and sums up the main idea." }
      ] },
      teacher: {
        notes: [
          "Exercise 1: groups look at the photos (healthy habits / bad habits) and complete the table: Body, Mind, Education.",
          "Read the “Despite” box, then pairs complete the paragraph (because, but, also, Despite) and choose the concluding sentence (In conclusion, vegetarians need to plan their diets carefully to stay healthy).",
          "Exercise 3: students complete the outline (introduction, two paragraphs, conclusion), then write the report and edit it with the “Remember to:” checklist.",
          "The outline in the answer key is one example only; accept students’ own ideas. Remind students to use AI tools wisely and responsibly."
        ],
        pair: ["Pairs complete the connector paragraph together (the book asks this).", "Peer editing: partners check each other’s report with the “Remember to:” checklist."],
        group: ["Groups write one healthy habit and one risk on cards for Body, Mind and Education and build a class table."],
        quick: [
          { q: "Which linker shows the opposite idea before a noun?", a: "despite (e.g. Despite the rain, they played football.)" },
          { q: "Which linker gives a reason?", a: "because" },
          { q: "What are the parts of each paragraph?", a: "A topic sentence, supporting details and a concluding sentence." },
          { q: "Give one risk of bad habits for the body.", a: "Weight gain / heart disease." }
        ]
      }
    }
  ]
});

BOOK.addUnit({
  id: "u2", num: 2, title: "Landmarks and Tourism", titleAr: "المعالم والسياحة",
  pages: [31, 43], cover: 31,
  outcomes: {
    listening: [
      "Identify main ideas and supporting details presented in an audio travel narration.",
      "Classify information from the audio into logical categories supplied in the task.",
      "Analyse guidelines or advice presented, explaining how they reinforce the speaker’s overall message."
    ],
    speaking: [
      "Describe leisure activities using clear descriptive and preference language.",
      "Apply syllable-segmentation strategies to pronounce multisyllabic words.",
      "Present personal choices fluently, employing cohesive devices and natural intonation.",
      "Justify preferred activities with relevant reasons during peer discussion."
    ],
    reading: [
      "Highlight keywords and main ideas from short, simple texts accurately.",
      "Identify key facts about landmark locations and visitor experiences in an informational text.",
      "Analyse reasons travellers find each landmark appealing based on textual evidence.",
      "Compare holiday destinations by synthesising evidence from a chat exchange."
    ],
    writing: [
      "Plan a descriptive paragraph with a graphic organiser that lays out topic, supporting details, and logical sequence.",
      "Apply preference verbs and first-conditional structures accurately when drafting descriptive sentences.",
      "Compose a cohesive descriptive paragraph that smoothly integrates vivid language, preference verbs, and first-conditional sentences."
    ]
  },
  lessons: [
    /* ───────────────────────── LESSON 1 ───────────────────────── */
    {
      id: "u2l1", num: 1, skill: "Reading", title: "A World of Attractions", pages: [34, 35], status: "complete",
      canDo: [
        "I can identify the main ideas from a written text about tourist attractions different countries.",
        "I can respect cultural diversity by responding to ideas from a written text about global attractions."
      ],
      goals: ["Read about famous places in Dubai, Kuwait and London.", "Learn 12 new words.", "Find the main idea and details.", "Tell a visitor about places in Kuwait."],
      goalsAr: ["أقرأ عن أماكن مشهورة في دبي والكويت ولندن.", "أتعلم ١٢ كلمة جديدة.", "أجد الفكرة الرئيسية والتفاصيل.", "أخبر زائرًا عن أماكن في الكويت."],
      warmup: {
        title: "Before You Read", image: "crops/u2l1-warmup.jpg", emoji: "🗼", seconds: 90,
        instructions: "Look at the pictures and answer the following questions.",
        prompts: ["Have you visited or heard about these places?", "What do you think tourists enjoy doing there?"]
      },
      vocab: [
        { w: "chance", pos: "noun", emoji: "🍀", def: "possibility of something happening", ex: "It gives people the chance to explore new cities, meet others, and experience different cultures.", exFromBook: true, ar: "فرصة", ipa: "/tʃɑːns/" },
        { w: "gallery", pos: "noun", emoji: "🖼️", def: "room or building for art display", ex: "Dubai Mall includes a large indoor gallery.", exFromBook: false, ar: "صالة عرض أو معرض", ipa: "/ˈɡæləri/" },
        { w: "pleasant", pos: "adjective", emoji: "😊", def: "enjoyable or attractive", ex: "The weather is warm, and the atmosphere is pleasant.", exFromBook: true, ar: "لطيف أو جميل", ipa: "/ˈplezənt/" },
        { w: "unique", pos: "adjective", emoji: "🦄", def: "being the only one of its kind", ex: "Kuwait also offers unique places for travellers.", exFromBook: true, ar: "فريد أو متميز", ipa: "/juˈniːk/" },
        { w: "attract", pos: "verb", emoji: "🧲", def: "draw someone or something closer or make them interested", ex: "Kuwait Towers attract people who want to enjoy the view of the city and the sea.", exFromBook: true, ar: "يجذب", ipa: "/əˈtrækt/" },
        { w: "attend", pos: "verb", emoji: "🎟️", def: "be present at (an event)", ex: "At Sheikh Jaber Al Ahmad Cultural Centre (JACC), tourists attend shows and exhibitions in a modern gallery.", exFromBook: true, ar: "يحضر", ipa: "/əˈtend/" },
        { w: "exhibition", pos: "noun", emoji: "🏛️", def: "public display of art or items", ex: "We saw an exhibition of old photos at the museum.", exFromBook: false, ar: "معرض", ipa: "/ˌeksɪˈbɪʃən/" },
        { w: "contrast", pos: "noun", emoji: "🌓", def: "clear difference between things", ex: "Others visit the British Museum, where they see a clear contrast between ancient history and modern design.", exFromBook: true, ar: "تعارض أو فرق", ipa: "/ˈkɒntrɑːst/" },
        { w: "design", pos: "noun", emoji: "📐", def: "drawing or plan for making something", ex: "I like the modern design of this building.", exFromBook: false, ar: "تصميم", ipa: "/dɪˈzaɪn/" },
        { w: "event", pos: "noun", emoji: "🎉", def: "something that happens, especially something important or unusual", ex: "The city holds many cultural events, especially during holidays.", exFromBook: true, ar: "حدث أو مناسبة", ipa: "/ɪˈvent/" },
        { w: "especially", pos: "adverb", emoji: "⭐", def: "particularly; more than usual", ex: "I love the beach, especially in winter.", exFromBook: false, ar: "بالتحديد أو خاصة", ipa: "/ɪˈspeʃəli/" },
        { w: "surely", pos: "adverb", emoji: "✅", def: "certainly; without doubt", ex: "If you enjoy history and beautiful parks, you will surely enjoy visiting London.", exFromBook: true, ar: "بالتأكيد", ipa: "/ˈʃʊəli/" }
      ],
      sections: [
        { type: "reading", title: "A World of Attractions", page: 34,
          instructions: "Read the following passage and give it another title.",
          paras: [
            "Travelling is a great way to learn about the world. It gives people the chance to explore new cities, meet others, and experience different cultures. Many tourists enjoy sightseeing and visiting famous landmarks.",
            "One popular destination is Dubai. Tourists love visiting Burj Khalifa, the tallest building in the world. They also enjoy taking photos from the top and shopping at Dubai Mall, which includes a large indoor gallery. Some visitors prefer relaxing on Jumeirah Beach because the weather is warm, and the atmosphere is pleasant. These places are commonly visited during winter holidays.",
            "Kuwait also offers unique places for travellers. Kuwait Towers attract people who want to enjoy the view of the city and the sea. Visitors love exploring Souq Al-Mubarakiya to shop for gifts and try traditional food. At Sheikh Jaber Al Ahmad Cultural Centre (JACC), tourists attend shows and exhibitions in a modern gallery.",
            "Another exciting city to visit is London. Tourists enjoy riding the London Eye to get a panoramic view of the city. Many people spend time walking or having a picnic in Hyde Park. Others visit the British Museum, where they see a clear contrast between ancient history and modern design. The city holds many cultural events, especially during holidays. If you enjoy history and beautiful parks, you will surely enjoy visiting London.",
            "Travelling to different parts of the world helps people learn about new cultures and make unforgettable memories."
          ] },
        { type: "grammar", title: "Pronunciation Tip", page: 34,
          steps: [
            { title: "Break long words into syllables", text: "Break long words into syllables to pronounce them easily.", textAr: "قسّم الكلمات الطويلة إلى مقاطع لتنطقها بسهولة.",
              examples: ["ex-hi-bi-tion", "es-pe-cial-ly"], tip: "Clap once for each part: ex (clap) hi (clap) bi (clap) tion (clap)." }
          ] },
        { type: "activity", title: "Give the passage another title.", page: 34, source: "book", stage: "independent",
          instructions: "Read the passage. Write another title for it.",
          items: [
            { t: "short", q: "Write another title for the passage.", model: "Famous Places Around the World (other good titles: Amazing Places to Visit / Travelling and Tourist Attractions).",
              keywords: [["travel", "tour", "attraction", "place", "landmark", "world", "trip", "sightseeing", "destination", "holiday", "visit"]], hint: "What is the whole text about? Read the first and last paragraphs." }
          ] },
        { type: "activity", title: "Read the passage again and fill in the table with information about each place.", page: 35, source: "book", stage: "independent",
          instructions: "Read the passage again. Fill in the table.",
          items: [
            { t: "table", q: "Fill in the table with information about each place.", head: ["Name of the Place", "Country", "What can tourists do there?"],
              rows: [
                ["Burj Khalifa", { answer: ["UAE", "the UAE", "United Arab Emirates", "the United Arab Emirates", "Dubai, UAE", "Dubai (UAE)", "UAE (Dubai)", "the Emirates", "Emirates"], model: "UAE (Dubai)" }, { open: true, model: "Take photos from the top (and shop at Dubai Mall)." }],
                [{ answer: ["Kuwait Towers", "the Kuwait Towers", "Souq Al-Mubarakiya", "Souq Al Mubarakiya", "Souq Mubarakiya", "Sheikh Jaber Al Ahmad Cultural Centre", "Sheikh Jaber Al Ahmad Cultural Centre (JACC)", "JACC", "the JACC"], model: "Kuwait Towers (or Souq Al-Mubarakiya / JACC)" }, "Kuwait", { open: true, model: "Kuwait Towers: enjoy the view of the city and the sea. (Souq Al-Mubarakiya: shop for gifts and try traditional food. JACC: attend shows and exhibitions.)" }],
                [{ answer: ["London Eye", "the London Eye"], model: "The London Eye" }, { answer: ["the UK", "UK", "United Kingdom", "the United Kingdom", "England", "Britain", "Great Britain", "London, UK", "UK (London)"], model: "The UK (London)" }, "Get a panoramic view of London."]
              ],
              hint: "Look at the flags in the pictures on page 34. Dubai is a city in the UAE. London is a city in the UK.",
              why: "Paragraph 2: Burj Khalifa is in Dubai (UAE). Paragraph 3: places in Kuwait. Paragraph 4: the London Eye gives a panoramic view of London (UK).",
              note: "Row 2: any one of the three Kuwaiti places is correct." }
          ] },
        { type: "activity", title: "Discuss the following questions.", page: 35, source: "book", stage: "independent",
          instructions: "Discuss with your partner. Then write your answer and compare.",
          items: [
            { t: "short", q: "1. What is the main idea of the second paragraph?", model: "Dubai is a popular destination. Tourists enjoy visiting Burj Khalifa, shopping at Dubai Mall and relaxing on Jumeirah Beach.",
              keywords: [["dubai"]], hint: "Read the first sentence of paragraph 2." },
            { t: "short", q: "2. What can you see from the London Eye?", model: "A panoramic view of the city (London).",
              keywords: [["view", "panoram", "city", "london"]], hint: "Find “London Eye” in paragraph 4." },
            { t: "short", q: "3. Why do tourists enjoy sightseeing?", model: "Because it gives them the chance to explore new cities, meet others and learn about different cultures. It also helps them make unforgettable memories.",
              keywords: [["learn", "explore", "culture", "memor", "new", "meet", "world"]], hint: "Read paragraph 1 and the last paragraph." }
          ] },
        { type: "activity", title: "Write the correct word for each definition. Then use each word in a meaningful sentence.", page: 35, source: "book", stage: "independent",
          instructions: "Write the correct word for each definition. Use the glossary at the end of the book to check your answers.",
          items: [
            { t: "fill", q: "1. Paragraph 2: Enjoyable or attractive ____", answer: ["pleasant"], hint: "Look at the end of paragraph 2: “… the atmosphere is …”", why: "pleasant = enjoyable or attractive (paragraph 2)." },
            { t: "fill", q: "2. Paragraph 3: Being the only one of its kind ____", answer: ["unique"], hint: "Paragraph 3, first sentence.", why: "unique = being the only one of its kind (paragraph 3)." },
            { t: "fill", q: "3. Paragraph 4: Something that happens, especially something important or unusual ____", answer: ["event", "events"], hint: "“The city holds many cultural …”", why: "event = something that happens (paragraph 4: “many cultural events”)." },
            { t: "short", q: "Use “pleasant” in a meaningful sentence.", open: true, model: "The weather in Kuwait is pleasant in winter." },
            { t: "short", q: "Use “unique” in a meaningful sentence.", open: true, model: "Kuwait Towers are a unique place to visit." },
            { t: "short", q: "Use “event” in a meaningful sentence.", open: true, model: "National Day is a big event in Kuwait." }
          ] },
        { type: "speak", title: "In pairs, take turns acting out this short dialogue.", page: 35, source: "book", image: "crops/u2l1-places.jpg",
          instructions: "One of you is a tourist. The other tells the tourist about places in Kuwait.",
          steps: ["Mention two different places in Kuwait.", "Switch roles and try again with different places."],
          dialogue: [{ who: "Tourist", text: "Hi, I’m visiting Kuwait. What places can I visit?" }, { who: "You", text: "" }],
          starters: ["You can visit …", "There you can …", "People enjoy it because …", "You can also visit …"],
          record: true },
        { type: "activity", title: "Extra Practice: Check your reading", source: "extra", stage: "guided",
          instructions: "Choose the correct answer.",
          items: [
            { t: "mcq", q: "Which title is best for the passage?", options: ["Travelling to Famous Places Around the World", "How to Build a Tall Tower", "Life in the Desert", "My School Day"], answer: 0, why: "The text is about famous places in Dubai, Kuwait and London." },
            { t: "mcq", q: "What is the tallest building in the world?", options: ["Kuwait Towers", "Burj Khalifa", "The London Eye"], answer: 1, why: "Paragraph 2: “Burj Khalifa, the tallest building in the world.”" },
            { t: "mcq", q: "Why do some visitors prefer relaxing on Jumeirah Beach?", options: ["because it is cold", "because the weather is warm and the atmosphere is pleasant", "because there is a museum"], answer: 1, why: "Paragraph 2 gives this reason after “because”." },
            { t: "mcq", q: "Where can visitors shop for gifts and try traditional food?", options: ["Souq Al-Mubarakiya", "Hyde Park", "JACC"], answer: 0, why: "Paragraph 3: “Visitors love exploring Souq Al-Mubarakiya to shop for gifts and try traditional food.”" },
            { t: "mcq", q: "Where do people walk or have a picnic in London?", options: ["the British Museum", "the London Eye", "Hyde Park"], answer: 2, why: "Paragraph 4: “walking or having a picnic in Hyde Park.”" }
          ] },
        { type: "activity", title: "Extra Practice: Use the new words", source: "extra", stage: "independent",
          instructions: "Write the missing word. Tap a word chip to help you.",
          items: [
            { t: "fill", q: "Kuwait Towers ____ many tourists every year.", answer: ["attract"], bank: ["attract", "attend", "chance", "pleasant", "especially"], why: "attract = make people interested and come." },
            { t: "fill", q: "We will ____ a show at JACC tonight.", answer: ["attend"], bank: ["attract", "attend", "chance", "pleasant", "especially"], why: "attend = be present at an event." },
            { t: "fill", q: "I had the ____ to visit London last summer.", answer: ["chance"], bank: ["attract", "attend", "chance", "pleasant", "especially"], why: "chance = possibility to do something." },
            { t: "fill", q: "We saw an ____ of old photos at the museum.", answer: ["exhibition"], bank: ["exhibition", "design", "contrast", "event"], why: "exhibition = public display of art or items. “an” goes before a vowel sound." },
            { t: "fill", q: "I love the beach, ____ in winter.", answer: ["especially"], bank: ["attract", "attend", "chance", "pleasant", "especially"], why: "especially = more than usual." }
          ] },
        { type: "activity", title: "Extra Practice: Break the word", source: "extra", stage: "independent",
          instructions: "Choose the correct way to break each word into syllables.",
          items: [
            { t: "mcq", q: "exhibition", options: ["ex-hi-bi-tion", "exh-ibi-tion", "ex-hibition"], answer: 0, why: "The book shows: ex-hi-bi-tion (4 parts)." },
            { t: "mcq", q: "especially", options: ["espe-cially", "es-pe-cial-ly", "es-pecially"], answer: 1, why: "The book shows: es-pe-cial-ly (4 parts)." },
            { t: "mcq", q: "international", options: ["inter-national", "in-ter-na-tion-al", "int-ern-ational"], answer: 1, why: "The Scope and Sequence page shows: in-ter-na-tion-al (5 parts)." }
          ] }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Warm-up (2 min): show the Dubai, London and Kuwait pictures. Ask: Which country is it? Look at the flags.", "Pre-teach 5–6 words with the flip cards (chance, pleasant, unique, attract, attend, exhibition). Clap the syllables (Pronunciation Tip).", "First reading: give the passage another title. Second reading: the table and the discussion questions.", "Definitions task, then the tourist dialogue in pairs; invite 2–3 pairs to perform."],
        pair: ["Tourist dialogue: “Hi, I’m visiting Kuwait. What places can I visit?” — mention two places.", "Word ping-pong: one says a definition, the other says the word."],
        group: ["Groups make a mini poster: one country, two landmarks, what tourists do there.", "Syllable race: groups break vocabulary words into syllables (ex-hi-bi-tion)."],
        quick: [{ q: "What is the tallest building in the world?", a: "Burj Khalifa." }, { q: "What can you get from the London Eye?", a: "A panoramic view of the city." }, { q: "Where can tourists attend shows and exhibitions in Kuwait?", a: "At Sheikh Jaber Al Ahmad Cultural Centre (JACC)." }, { q: "Which word means “the only one of its kind”?", a: "unique" }]
      }
    },

    /* ───────────────────────── LESSON 2 ───────────────────────── */
    {
      id: "u2l2", num: 2, skill: "Grammar", title: "Present Simple/Preference Verbs", pages: [36], status: "complete",
      canDo: [
        "I can select appropriate verbs and forms to complete sentences about preferences.",
        "I can write sentences using the present simple and preference verbs neatly about activities."
      ],
      goals: ["Use like, love, enjoy and prefer.", "Add -ing to the next verb.", "Use -s with he / she / it.", "Write about a place I like in Kuwait."],
      goalsAr: ["أستخدم like و love و enjoy و prefer.", "أضيف ‎-ing‎ إلى الفعل الذي بعدها.", "أضيف ‎-s‎ مع he / she / it.", "أكتب عن مكان أحبه في الكويت."],
      warmup: {
        title: "Talk with your partner", image: "crops/u2l2-warmup.jpg", emoji: "🏖️", seconds: 90,
        instructions: "Look at the pictures. Answer the question.",
        prompts: ["What do you like or prefer doing during your holiday?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "Present Simple (Preference Verbs)", page: 36,
          steps: [
            { title: "Preference verbs", text: "Preference verbs: prefer / like / enjoy / love. Use preference verbs to talk about what you or people like or don’t like doing.", textAr: "أفعال التفضيل: prefer / like / enjoy / love. نستخدمها لنتحدث عمّا نحبه أو لا نحبه.",
              examples: ["{s:I} {v:enjoy} {o:drawing} {t:every day}.", "{s:Hamad} {v:enjoys} {o:swimming}."] },
            { title: "I / You / They / We + like / enjoy + verb-ing", text: "With I, you, they and we, the preference verb has no -s. Add -ing to the next verb.", textAr: "مع I / you / they / we لا نضيف ‎-s‎. ونضيف ‎-ing‎ إلى الفعل الثاني.",
              examples: ["{s:I} {v:enjoy} {o:drawing} {t:every day}.", "{s:They} {n:don’t} {v:like} {o:going} to the cinema.", "{q:What} {a:do} {s:you} {v:like} {o:doing} on Friday?"] },
            { title: "He / She / It / Noun + likes / enjoys + verb-ing", text: "With he, she, it or one person (a noun), add -s: likes, enjoys. In the negative and in questions, use doesn’t / does + like / enjoy (no -s).", textAr: "مع he / she / it نضيف ‎-s‎. ومع doesn’t / does يأتي الفعل بدون ‎-s‎.",
              examples: ["{s:Hamad} {v:enjoys} {o:swimming}.", "{s:She} {n:doesn’t} {v:like} {o:running} in the park.", "{a:Does} {s:Mona} {v:enjoy} {o:reading}?"] },
            { title: "How to add -ing", text: "Most verbs: + ing. Verbs ending in -e: drop the e. Short verbs like swim, run: double the last letter.", textAr: "معظم الأفعال: نضيف ‎-ing‎. الفعل المنتهي بـ ‎e‎ نحذفها. أفعال مثل swim و run نضاعف الحرف الأخير.",
              examples: ["go → {o:going}, read → {o:reading}", "take → {o:taking}, ride → {o:riding}", "swim → {o:swimming}, run → {o:running}"], source: "extra" },
            { title: "Remember: enjoy + -ing only", text: "After like, love and prefer you can also use to + verb: I like to swim. But after enjoy, use -ing only: I enjoy swimming (NOT I enjoy to swim).", textAr: "بعد like و love و prefer يمكن أن نستخدم to + الفعل. أما بعد enjoy فنستخدم ‎-ing‎ فقط.",
              examples: ["{s:I} {v:like} {o:swimming}. = {s:I} {v:like} {o:to swim}.", "{s:We} {v:enjoy} {o:visiting} our grandparents."], source: "extra" }
          ],
          table: { head: ["Subject", "+ / −", "Form", "Examples"],
            rows: [
              ["I / You / They / We", "+ like / enjoy  ·  − don’t like / enjoy", "+ verb-ing", "• I enjoy drawing every day.  • They don’t like going to the cinema  • What do you like doing on Friday?"],
              ["He / She / It / Noun", "+ likes / enjoys  ·  − doesn’t like / enjoy", "+ verb-ing", "• Hamad enjoys swimming.  • She doesn’t like running in the park.  • Does Mona enjoy reading"]
            ] },
          worked: { q: "a. I ____ (take / photos)", steps: ["Who is the subject? I → no -s.", "Choose a preference verb: enjoy.", "take → taking (drop the e, add -ing).", "Put it together: I + enjoy + taking + photos."], a: "{s:I} {v:enjoy} {o:taking} photos." }
        },
        { type: "activity", title: "Extra Practice: Choose the correct form", source: "extra", stage: "guided",
          instructions: "Tap the correct word. Look at the subject first.",
          items: [
            { t: "choose", q: "Hamad ____ swimming.", options: ["enjoy", "enjoys"], answer: 1, hint: "Hamad = he.", why: "he / she / it → enjoys (+ s)." },
            { t: "choose", q: "They ____ like going to the cinema.", options: ["don’t", "doesn’t"], answer: 0, hint: "The subject is “they”.", why: "they → don’t." },
            { t: "choose", q: "She ____ like running in the park.", options: ["don’t", "doesn’t"], answer: 1, hint: "The subject is “she”.", why: "she → doesn’t." },
            { t: "choose", q: "____ Mona enjoy reading?", options: ["Do", "Does"], answer: 1, hint: "Mona = she.", why: "Does + he / she / it + enjoy." },
            { t: "choose", q: "I enjoy ____ every day.", options: ["draw", "drawing"], answer: 1, hint: "What comes after enjoy?", why: "enjoy + verb-ing." },
            { t: "choose", q: "My brother ____ playing football.", options: ["like", "likes"], answer: 1, hint: "My brother = he.", why: "he → likes (+ s)." }
          ] },
        { type: "activity", title: "Use the words in the brackets to write complete sentences.", page: 36, source: "book", stage: "independent",
          instructions: "Use the words in the brackets to write complete sentences. Use one of these verbs in each sentence. (like – enjoy – love – prefer) Example: a. I enjoy taking photos.",
          items: [
            { t: "fill", q: "b. Children ____ (go / zoo)", answer: ["love going to the zoo", "like going to the zoo", "enjoy going to the zoo", "prefer going to the zoo", "love to go to the zoo", "like to go to the zoo", "prefer to go to the zoo"],
              hint: "Children = they (no -s). Then: go → going … to the zoo.", why: "Children + love / like / enjoy / prefer + going to the zoo. (love / like / prefer + to go is also correct.)" },
            { t: "fill", q: "c. We ____ (visit / grandparents)", answer: ["love visiting our grandparents", "like visiting our grandparents", "enjoy visiting our grandparents", "prefer visiting our grandparents", "love to visit our grandparents", "like to visit our grandparents", "prefer to visit our grandparents", "love visiting grandparents", "like visiting grandparents", "enjoy visiting grandparents", "prefer visiting grandparents", "love to visit grandparents", "like to visit grandparents", "prefer to visit grandparents"],
              hint: "We → no -s. visit → visiting. Whose grandparents? our.", why: "We + enjoy / love / like / prefer + visiting our grandparents." },
            { t: "fill", q: "d. My sister ____ (not walk / cold weather)", answer: ["doesn’t like walking in cold weather", "doesn’t enjoy walking in cold weather", "doesn’t love walking in cold weather", "doesn’t like to walk in cold weather", "doesn’t love to walk in cold weather", "doesn’t like walking in the cold weather", "doesn’t enjoy walking in the cold weather", "doesn’t love walking in the cold weather", "doesn’t like to walk in the cold weather", "doesn’t love to walk in the cold weather", "does not like walking in cold weather", "does not enjoy walking in cold weather", "does not love walking in cold weather", "does not like to walk in cold weather", "does not love to walk in cold weather", "does not like walking in the cold weather", "does not enjoy walking in the cold weather", "does not love walking in the cold weather", "does not like to walk in the cold weather", "does not love to walk in the cold weather"],
              hint: "My sister = she. Negative → doesn’t + like / enjoy (no -s). walk → walking … in cold weather.", why: "she + doesn’t like / enjoy + walking in cold weather. After doesn’t, the preference verb has no -s." }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The underlined word is wrong. Write the correct word.",
          items: [
            { t: "fix", q: "Hamad {enjoy} swimming.", answer: ["enjoys"], hint: "Hamad = he.", why: "he → enjoys." },
            { t: "fix", q: "I enjoy {to draw} every day.", answer: ["drawing"], hint: "enjoy + ?", why: "After enjoy we use -ing only: enjoy drawing." },
            { t: "fix", q: "She doesn’t {likes} running in the park.", answer: ["like"], hint: "What comes after doesn’t?", why: "doesn’t + like (no -s)." },
            { t: "fix", q: "They {doesn’t} like going to the cinema.", answer: ["don’t", "do not"], hint: "The subject is “they”.", why: "they → don’t." },
            { t: "fix", q: "{Do} Mona enjoy reading?", answer: ["Does"], hint: "Mona = she.", why: "Does + she + enjoy." },
            { t: "fix", q: "We love {swim} in the sea.", answer: ["swimming", "to swim"], hint: "love + verb-ing (or to + verb).", why: "love + swimming / to swim. Both are correct." }
          ] },
        { type: "activity", title: "Extra Practice: Build the sentence", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a sentence.", words: ["Children", "love", "going", "to", "the", "zoo."], answer: ["Children love going to the zoo."], why: "Subject + preference verb + verb-ing." },
            { t: "order", q: "Make a negative sentence.", words: ["She", "doesn’t", "like", "running", "in", "the", "park."], answer: ["She doesn’t like running in the park."], why: "Subject + doesn’t + like + verb-ing." },
            { t: "order", q: "Make a question.", words: ["What", "do", "you", "like", "doing", "on", "Friday?"], answer: ["What do you like doing on Friday?"], why: "Wh- word + do + you + like + verb-ing?" }
          ] },
        { type: "write", title: "Write three sentences about a place you like visiting in Kuwait.", page: 36, source: "book",
          instructions: "Write three sentences about a place you like visiting in Kuwait. Express what you love, like or enjoy about it.",
          wordBank: ["prefer", "love", "like", "enjoy", "visiting", "walking", "shopping", "eating", "watching", "because"],
          frame: [{ label: "1.", hint: "I prefer …" }, { label: "2.", hint: "I love / like …" }, { label: "3.", hint: "I enjoy …" }],
          model: "I prefer visiting Souq Al-Mubarakiya with my father. I love eating traditional food there. I also enjoy shopping for gifts for my family.", modelFromBook: false,
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used love / like / enjoy / prefer + verb-ing.", "I wrote three sentences about a place in Kuwait."],
          minWords: 15 }
      ],
      game: { kind: "quiz", title: "Preference Race", items: [
        { t: "choose", q: "My father ____ reading the newspaper.", options: ["enjoy", "enjoys"], answer: 1, why: "he → enjoys" },
        { t: "choose", q: "We love ____ at the beach.", options: ["play", "playing"], answer: 1, why: "love + verb-ing (or love to play)." },
        { t: "choose", q: "Ali ____ like cold weather.", options: ["don’t", "doesn’t"], answer: 1, why: "he → doesn’t" },
        { t: "choose", q: "____ you enjoy shopping?", options: ["Do", "Does"], answer: 0, why: "you → Do" },
        { t: "choose", q: "I enjoy ____ photos.", options: ["taking", "to take"], answer: 0, why: "enjoy + -ing only." },
        { t: "choose", q: "They prefer ____ in the park.", options: ["walking", "walks"], answer: 0, why: "prefer + verb-ing (or prefer to walk)." }
      ] },
      teacher: {
        notes: ["Warm-up: holiday pictures (desert fort, snow, world travel). Ask: What do you like doing on holiday?", "Show the rule step by step. Colour the preference verb (green) and the -ing verb (orange).", "Worked example (I enjoy taking photos), then the guided choose task, then the book task b–d.", "Students write three sentences about a place in Kuwait; 3 students read aloud."],
        pair: ["Find someone who …: “Do you enjoy swimming?” “Yes, I do. / No, I don’t.”", "Partner report: “Ali likes playing football, but he doesn’t like running.”"],
        group: ["Class survey: groups ask 4 questions with like / enjoy and report with he / she + -s."],
        quick: [{ q: "Correct: She enjoy reading.", a: "She enjoys reading." }, { q: "Complete: I love ___ (swim).", a: "swimming / to swim" }, { q: "Make negative: He likes running.", a: "He doesn’t like running." }, { q: "Correct: I enjoy to draw.", a: "I enjoy drawing." }]
      }
    },

    /* ───────────────────────── LESSON 3 ───────────────────────── */
    {
      id: "u2l3", num: 3, skill: "Listening", title: "Exploring Kuwait", pages: [37], status: "complete",
      canDo: [
        "I can locate key details from a spoken text about activities and locations in Kuwait.",
        "I can value respectful behaviour, cleanliness, and politeness in situation about visiting public places."
      ],
      goals: ["Listen for places in Kuwait.", "Match places to rules.", "Talk about good behaviour on a trip."],
      goalsAr: ["أستمع لأسماء أماكن في الكويت.", "أطابق الأماكن بالقواعد.", "أتحدث عن السلوك الجيد في الرحلة."],
      linkers: ["first", "next", "then", "finally"],
      warmup: {
        title: "Before You Listen", image: "crops/u2l3-warmup.jpg", emoji: "🧭", seconds: 90,
        instructions: "Look at the picture and discuss the following questions.",
        prompts: ["What are the tourists doing?", "How do you think they feel?", "How can tourists behave respectfully when visiting different places during a tour?"]
      },
      vocab: [],
      sections: [
        { type: "listen", title: "A Day Around Kuwait", page: 37, source: "book", needsAudio: true,
          audio: "audio/6A-p37.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/Eaeefjb7ARJEvzFC9qbzfgQBwHhasJKJ2PjBcH-_EpgNUw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=76LQGj",
          instructions: "Listen and circle the places the tourists will visit in Kuwait. Then, match each place to the rules and values mentioned in the listening material.",
          items: [
            { t: "table", q: "Circle the places the tourists will visit. Write ✓ (yes) or ✗ (no).", head: ["", "Place", "Will the tourists visit it? (✓ / ✗)"],
              rows: [["A", "Kuwait Towers", { open: true }], ["B", "Souq Al-Mubarakiya", { open: true }], ["C", "Scientific Centre", { open: true }], ["D", "Grand Mosque", { open: true }], ["E", "Tareq Rajab Museum", { open: true }], ["F", "Al Shaheed Park", { open: true }]],
              open: true, needsAudio: true },
            { t: "table", q: "Match each place to the rules and values. Write the letter (A–F).", head: ["Place (A–F)", "Rules and values"],
              rows: [[{ open: true }, "1. Speak quietly and don’t touch anything."], [{ open: true }, "2. Walk in the allowed area and respect people around you."], [{ open: true }, "3. Don’t throw rubbish on the ground."], [{ open: true }, "4. Be kind to the workers and say, “thank you”."]],
              open: true, needsAudio: true }
          ] },
        { type: "listen", title: "Listen again and answer the following questions.", page: 37, source: "book", needsAudio: true,
          audio: "audio/6A-p37.mp3",
          audioLink: "https://moekuwait-my.sharepoint.com/:u:/g/personal/forlang_moe_edu_kw/Eaeefjb7ARJEvzFC9qbzfgQBwHhasJKJ2PjBcH-_EpgNUw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=76LQGj",
          instructions: "Listen again and answer the following questions.",
          items: [
            { t: "short", q: "1. Where does the tour begin?", open: true, needsAudio: true },
            { t: "short", q: "2. What traditional food can tourists try in Kuwait?", open: true, needsAudio: true },
            { t: "short", q: "3. Why does the guide ask tourists to throw rubbish in the bin?", open: true, needsAudio: true }
          ] },
        { type: "write", title: "In pairs, imagine you are visiting a country. Write three sentences about your day.", page: 37, source: "book",
          instructions: "In pairs, imagine you are visiting a country. Write three sentences about your day. Mention three places. Include one value (respect – cleanliness – politeness).",
          wordBank: ["first", "next", "then", "finally", "respect", "cleanliness", "politeness", "quietly", "rubbish bin", "thank you"],
          wordBankLabel: "Linker Bank and values",
          frame: [{ label: "Sentence 1", hint: "First, we visited …" }, { label: "Sentence 2", hint: "Next / Then, we …" }, { label: "Sentence 3", hint: "Finally, we … (include a value)" }],
          model: "First, we visited the London Eye and saw the whole city. Next, we had a picnic in Hyde Park, and we put our rubbish in the bin. Finally, we went to the British Museum and spoke quietly to show respect.", modelFromBook: false,
          checklist: ["I mentioned three places.", "I included one value (respect, cleanliness or politeness).", "I used first, next, then or finally.", "I started each sentence with a capital letter and ended it with a full stop."],
          minWords: 20 },
        { type: "listen", title: "Extra Practice: Our School Trip", source: "extra",
          instructions: "Listen to the generated voice (not the book recording). Then answer the questions.",
          script: [
            { who: "Ms Huda", text: "Good morning, everyone! Welcome to our school trip. First, we will visit the Kuwait National Museum. Please walk slowly and don’t touch the old things." },
            { who: "Ms Huda", text: "Next, we will go to Green Island. We can have a picnic there. Please put your rubbish in the bin, because we want to keep the island clean." },
            { who: "Ms Huda", text: "Then, we will walk on the beach and look at the sea. Finally, we will eat lunch at a traditional restaurant and try machboos. Remember to say “thank you” to the waiters. Let’s have a great day!" }
          ],
          items: [
            { t: "mcq", q: "Where will they go first?", options: ["Green Island", "the Kuwait National Museum", "a restaurant"], answer: 1, why: "Ms Huda says: “First, we will visit the Kuwait National Museum.”" },
            { t: "mcq", q: "What can they do on Green Island?", options: ["have a picnic", "go shopping", "swim with fish"], answer: 0, why: "“We can have a picnic there.”" },
            { t: "mcq", q: "Why must they put their rubbish in the bin?", options: ["because it is late", "because they want to keep the island clean", "because the teacher is hungry"], answer: 1, why: "“… because we want to keep the island clean.”" },
            { t: "mcq", q: "What traditional food will they try?", options: ["pizza", "machboos", "burgers"], answer: 1, why: "“… try machboos.”" },
            { t: "match", q: "Match each linker to the place.", pairs: [["First", "the Kuwait National Museum"], ["Next", "Green Island"], ["Then", "the beach"], ["Finally", "a traditional restaurant"]], why: "Ms Huda uses first, next, then and finally to show the order of the day." },
            { t: "mcq", q: "“Remember to say ‘thank you’ to the waiters.” Which value is this?", options: ["cleanliness", "politeness", "speed"], answer: 1, why: "Saying “thank you” is polite: politeness." }
          ] }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["First, we will visit the museum.", "Please put your rubbish in the bin.", "Don’t touch the old things.", "Remember to say thank you.", "Finally, we will eat lunch together."] },
      teacher: {
        notes: ["Warm-up: the tourists with the map at Kuwait Towers. Ask how tourists can behave respectfully.", "Play the book recording (QR code on page 37, track 2.1) twice: first to circle the places and match the rules, then for questions 1–3.", "The recording is not built into this app. The answers depend on the recording, so check them with the class.", "Pairs write three sentences about a day in a country with three places and one value. Use the extra listening for more practice."],
        pair: ["Tour guide game: one is the guide, the other is a tourist. The guide gives one rule for each place.", "Partner check: read your three sentences; your partner finds the value."],
        group: ["Groups make a “Good Tourist” poster with four rules for public places in Kuwait."],
        quick: [{ q: "Give one rule for a museum.", a: "Speak quietly and don’t touch anything." }, { q: "Which value is “Don’t throw rubbish on the ground”?", a: "cleanliness" }, { q: "Put in order: then, first, finally, next.", a: "first, next, then, finally" }]
      }
    },

    /* ───────────────────────── LESSON 4 ───────────────────────── */
    {
      id: "u2l4", num: 4, skill: "Speaking", title: "Indoor and Outdoor Activities", pages: [38], status: "complete",
      canDo: [
        "I can present information about indoor and outdoor activities, stating preferences and providing reasons.",
        "I can perform short role-plays about indoor and outdoor activities with clear and audible speech."
      ],
      goals: ["Name indoor and outdoor activities.", "Say what I prefer and why.", "Act out a reporter interview."],
      goalsAr: ["أسمّي أنشطة داخلية وخارجية.", "أقول ما أفضّله ولماذا.", "أمثّل مقابلة صحفية."],
      linkers: ["first", "next", "then", "finally"],
      warmup: {
        title: "Look at the pictures and discuss.", image: "crops/u2l4-warmup.jpg", emoji: "⚽", seconds: 90,
        instructions: "a. Look at the pictures and discuss.",
        prompts: ["What activity is each person doing?", "Do you do any of these activities? When?"]
      },
      vocab: [],
      sections: [
        { type: "activity", title: "b. Label each activity: Indoor or Outdoor", page: 38, source: "book", stage: "guided", image: "crops/u2l4-warmup.jpg",
          instructions: "Look at the six pictures from left to right. Is each activity indoor or outdoor?",
          items: [
            { t: "choose", q: "Picture 1: playing football on the grass", options: ["Indoor", "Outdoor"], answer: 1, why: "They play on the grass outside." },
            { t: "choose", q: "Picture 2: cooking in the kitchen", options: ["Indoor", "Outdoor"], answer: 0, why: "The kitchen is inside the house." },
            { t: "choose", q: "Picture 3: playing the guitar on the sofa", options: ["Indoor", "Outdoor"], answer: 0, why: "He is sitting inside, next to a sofa." },
            { t: "choose", q: "Picture 4: fishing at the beach", options: ["Indoor", "Outdoor"], answer: 1, why: "He is at the sea, outside." },
            { t: "choose", q: "Picture 5: riding bicycles", options: ["Indoor", "Outdoor"], answer: 1, why: "They ride in the desert, outside." },
            { t: "choose", q: "Picture 6: reading a book at home", options: ["Indoor", "Outdoor"], answer: 0, why: "She is reading inside a room." }
          ] },
        { type: "activity", title: "a. Classify the following activities.", page: 38, source: "book", stage: "independent",
          instructions: "Is each activity done indoors, outdoors, or both? Is it important to you? Why?",
          items: [
            { t: "table", q: "Classify the following activities.", head: ["Activity", "Indoor, Outdoor, or Both", "Is it important to you? Why?"],
              rows: [
                ["🚴 Riding bicycle", { open: true, model: "Outdoor (or both)" }, { open: true, model: "Yes, because it keeps me healthy." }],
                ["🎮 Playing online games", { open: true, model: "Indoor" }, { open: true, model: "Not very important, because I can do other activities." }],
                ["📖 Reading a story", { open: true, model: "Both" }, { open: true, model: "Yes, because I learn new words." }],
                ["🛍️ Shopping at a mall", { open: true, model: "Indoor" }, { open: true, model: "Sometimes, because I can buy things I need." }],
                ["My favourite activity is:", { open: true, model: "Swimming – Outdoor" }, { open: true, model: "It is important to me because it helps me feel strong." }]
              ],
              open: true, note: "Your answers can be different. Explain your reasons." }
          ] },
        { type: "speak", title: "b. Take turns sharing your answers with the class.", page: 38, source: "book",
          instructions: "Share your answers with the class. Use the examples.",
          dialogue: [{ who: "Teacher", text: "What is your favourite activity? Is it important to you?" }, { who: "You", text: "" }],
          starters: ["This activity is important to me because...", "I like it because I can...", "It helps me feel...", "I don’t think it’s important because..."],
          record: true },
        { type: "speak", title: "Role-play: Let’s Be Reporters.", page: 38, source: "book",
          instructions: "In pairs, one of you is a reporter. The other is a guest being interviewed. Take turns asking and answering the questions below.",
          dialogue: [
            { who: "Reporter", text: "What activities do you like doing at the weekends / on holidays?" },
            { who: "Guest", text: "" },
            { who: "Reporter", text: "Do you prefer indoor or outdoor activities? Why?" },
            { who: "Guest", text: "" }
          ],
          starters: ["I enjoy …", "I prefer … because …", "First, I … Then, I …", "Finally, …"],
          record: true },
        { type: "activity", title: "Extra Practice: Give a reason", source: "extra", stage: "independent",
          instructions: "Choose the best ending.",
          items: [
            { t: "mcq", q: "I prefer outdoor activities because …", options: ["I love fresh air and the sun.", "I don’t like going out.", "it is raining heavily."], answer: 0, why: "Fresh air and sun are good reasons to like outdoor activities." },
            { t: "mcq", q: "I enjoy reading stories because …", options: ["it is noisy.", "I can learn new words.", "I don’t like books."], answer: 1, why: "Learning new words is a good reason to enjoy reading." },
            { t: "mcq", q: "Riding a bicycle is important to me because …", options: ["it helps me stay healthy.", "it makes me sleep.", "it is an indoor game."], answer: 0, why: "Exercise keeps us healthy." }
          ] },
        { type: "activity", title: "Extra Practice: Build the answer", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Answer the reporter.", words: ["I", "prefer", "outdoor", "activities."], answer: ["I prefer outdoor activities."], why: "Subject + prefer + thing." },
            { t: "order", q: "Answer the reporter.", words: ["I", "enjoy", "playing", "football", "at", "the", "weekends."], answer: ["I enjoy playing football at the weekends."], why: "enjoy + verb-ing." },
            { t: "order", q: "Ask a question.", words: ["Do", "you", "prefer", "indoor", "or", "outdoor", "activities?"], answer: ["Do you prefer indoor or outdoor activities?"], why: "Do + you + verb … ?" }
          ] }
      ],
      game: { kind: "sort", title: "Indoor or Outdoor?", buckets: ["Indoor", "Outdoor"], cards: [["watching TV", 0], ["cooking in the kitchen", 0], ["playing chess at home", 0], ["reading in bed", 0], ["swimming in the sea", 1], ["camping in the desert", 1], ["flying a kite", 1], ["playing football in the park", 1]] },
      teacher: {
        notes: ["Warm-up: six pictures. Ask: What activity is it? Do you do it? When?", "Label each picture Indoor or Outdoor (task 1b).", "Classify the table activities (Indoor / Outdoor / Both) and give reasons; accept different answers with good reasons.", "Model the reporter role-play with a student, then pairs act it out; 2–3 pairs perform."],
        pair: ["Let’s Be Reporters: one reporter, one guest, then switch.", "Agree or disagree: “I prefer outdoor activities.” “Me too! / I don’t. I prefer …”"],
        group: ["Class vote: indoor vs outdoor. Each group gives two reasons for its choice."],
        quick: [{ q: "Is fishing indoor or outdoor?", a: "Outdoor." }, { q: "Give a reason: I prefer reading because …", a: "e.g. I can learn new words." }, { q: "Ask the reporter question.", a: "Do you prefer indoor or outdoor activities? Why?" }]
      }
    },

    /* ───────────────────────── LESSON 5 ───────────────────────── */
    {
      id: "u2l5", num: 5, skill: "Reading", title: "Holiday Adventures", pages: [39, 40], status: "complete",
      canDo: [
        "I can identify the main ideas from a written text about holiday experiences in different places.",
        "I can create simple travel plans by listing places to visit and activities to do."
      ],
      goals: ["Read a chat about two holidays in Spain.", "Learn 8 new words.", "Answer True / False / Not Given.", "Plan a three-day trip."],
      goalsAr: ["أقرأ محادثة عن عطلتين في إسبانيا.", "أتعلم ٨ كلمات جديدة.", "أجيب: صح / خطأ / غير مذكور.", "أخطط لرحلة من ثلاثة أيام."],
      warmup: {
        title: "Before You Read", image: "crops/u2l5-warmup.jpg", emoji: "🏝️", seconds: 90,
        instructions: "In pairs, look at the pictures and answer the following questions.",
        prompts: ["What do you see in each picture?", "Would you like to go there? Why?"]
      },
      vocab: [
        { w: "international", pos: "adjective", emoji: "🌍", def: "involving several countries", ex: "I went on an international cruise to Barcelona.", exFromBook: true, ar: "عالمي أو دولي", ipa: "/ˌɪntəˈnæʃənəl/" },
        { w: "cruise", pos: "noun", emoji: "🛳️", def: "holiday trip by ship", ex: "We went on a cruise and slept on a big ship.", exFromBook: false, ar: "رحلة بحرية", ipa: "/kruːz/" },
        { w: "incredible", pos: "adjective", emoji: "🤩", def: "very surprising or hard to believe", ex: "The sea was calm and blue, and the view was incredible.", exFromBook: true, ar: "عجيب أو لا يصدق", ipa: "/ɪnˈkredəbl/" },
        { w: "uniquely", pos: "adverb", emoji: "🏘️", def: "in a way unlike anything else", ex: "I saw colourful houses that were uniquely built.", exFromBook: true, ar: "بشكل فريد أو مميز", ipa: "/juˈniːkli/" },
        { w: "tour", pos: "noun", emoji: "🚌", def: "journey visiting several places", ex: "We took a bus tour of the old city.", exFromBook: false, ar: "جولة", ipa: "/tʊə/" },
        { w: "guide", pos: "verb", emoji: "🧭", def: "lead or show the way", ex: "A tour guide guided us around the city by bus.", exFromBook: true, ar: "موجّه أو مرشد", ipa: "/ɡaɪd/" },
        { w: "stunning", pos: "adjective", emoji: "😍", def: "extremely impressive or attractive", ex: "The buildings were stunning, and the markets were full of people.", exFromBook: true, ar: "مذهل أو مدهش", ipa: "/ˈstʌnɪŋ/" },
        { w: "recommend", pos: "verb", emoji: "👍", def: "say something is good and should be chosen", ex: "I would definitely recommend travelling to Madrid!", exFromBook: true, ar: "ينصح", ipa: "/ˌrekəˈmend/" }
      ],
      sections: [
        { type: "reading", title: "Holiday Adventures", page: 39,
          instructions: "Read the chat exchange and complete the tasks that follow.",
          paras: [
            "Mona: Hi Sara! How was your holiday in Spain?",
            "Sara: Hi Mona! I went on an international cruise to Barcelona. It was amazing! The sea was calm and blue, and the view was incredible. When we arrived, I saw colourful houses that were uniquely built. The people were friendly, and the food was delicious. A tour guide guided us around the city by bus. I really enjoyed it. If I go again, I will visit the market.",
            "Mona: That sounds great! I flew to Madrid. The weather was warm and sunny. I visited big parks, old palaces, and interesting museums. The buildings were stunning, and the markets were full of people. It was such an enjoyable experience. If you visit Madrid, you will love the museums too.",
            "Sara: Wow! Barcelona was peaceful and relaxing, but Madrid sounds fun and [[exciting]].",
            "Mona: Yes! I think we both enjoyed our trips in different ways. I would definitely recommend travelling to Madrid!"
          ],
          note: "In the book this is a phone chat. Mona’s messages are on the right in blue; Sara’s messages are on the left in green. The names are added here so you know who is speaking." },
        { type: "activity", title: "Read the chat exchange to answer the following questions.", page: 40, source: "book", stage: "independent", image: "crops/u2l5-pictures.jpg",
          instructions: "Read the chat exchange to answer the following questions.",
          items: [
            { t: "mcq", q: "1. Which picture best shows something Mona talked about in her message to Sara?", options: ["the shopping mall", "the cruise ship", "the towers", "the old palace building"], answer: 3,
              hint: "Mona flew to Madrid. What did she visit there?", why: "Mona says: “I visited big parks, old palaces, and interesting museums.” The cruise was Sara’s trip, not Mona’s." },
            { t: "short", q: "2. Which city did Sara visit during her holiday?", model: "Barcelona (in Spain).", keywords: [["barcelona"]], hint: "Read Sara’s first message." },
            { t: "short", q: "3. What did both Mona and Sara enjoy about their trips?", model: "They both enjoyed seeing beautiful places and buildings: Sara enjoyed the incredible view and the colourful houses, and Mona enjoyed the stunning buildings, parks and museums. They enjoyed their trips in different ways.",
              keywords: [["build", "house", "place", "view", "city", "sightseeing", "trip", "visit"]], hint: "Look at the last message: “we both enjoyed our trips in different ways.” What did each girl see?" },
            { t: "mcq", q: "4. The meaning of the underlined word [[exciting]] is:", options: ["boring", "dangerous", "fun", "quiet"], answer: 2,
              hint: "Look at the words next to it: “fun and exciting”.", why: "“Madrid sounds fun and exciting” — exciting means fun and full of action. It is the opposite of peaceful and relaxing." }
          ] },
        { type: "activity", title: "Read again and write (T) if the statement is True, (F) if it is False, and (NG) if the information is Not Given.", page: 40, source: "book", stage: "independent",
          instructions: "Read again. Choose T (True), F (False) or NG (Not Given).",
          items: [
            { t: "choose", q: "1. Sara went on a cruise to Barcelona.", options: ["T", "F", "NG"], answer: 0, why: "Sara: “I went on an international cruise to Barcelona.”" },
            { t: "choose", q: "2. The sea in Barcelona was stormy and grey.", options: ["T", "F", "NG"], answer: 1, why: "Sara says the sea was calm and blue." },
            { t: "choose", q: "3. Mona did not enjoy her trip to Madrid.", options: ["T", "F", "NG"], answer: 1, why: "Mona says: “It was such an enjoyable experience.”" },
            { t: "choose", q: "4. Mona visited Spain with her family.", options: ["T", "F", "NG"], answer: 2, why: "The chat does not say who Mona travelled with." }
          ] },
        { type: "activity", title: "Three Days, One Destination", page: 40, source: "book", stage: "independent",
          instructions: "In groups, design a three-day travel plan to a country you would like to visit. List the places you plan to visit and describe what you will do at each location.",
          items: [
            { t: "table", q: "Dates and destination", head: ["Dates", "Destination"], rows: [[{ open: true, model: "1 March to 3 March" }, { open: true, model: "The UK (London)" }]], open: true },
            { t: "table", q: "Your plan", head: ["Day", "Place", "Activity"],
              rows: [
                ["Day 1", { open: true, model: "The London Eye" }, { open: true, model: "Get a panoramic view of the city." }],
                ["Day 2", { open: true, model: "Hyde Park" }, { open: true, model: "Walk and have a picnic." }],
                ["Day 3", { open: true, model: "The British Museum" }, { open: true, model: "Learn about ancient history." }]
              ], open: true, note: "Choose any country. The suggested answers use ideas from Lesson 1." }
          ] },
        { type: "activity", title: "Extra Practice: Who said it?", source: "extra", stage: "guided",
          instructions: "Read the chat again. Who said it: Sara or Mona?",
          items: [
            { t: "choose", q: "“I flew to Madrid.”", options: ["Sara", "Mona"], answer: 1, why: "Mona flew to Madrid." },
            { t: "choose", q: "“A tour guide guided us around the city by bus.”", options: ["Sara", "Mona"], answer: 0, why: "Sara had a bus tour in Barcelona." },
            { t: "choose", q: "“If you visit Madrid, you will love the museums too.”", options: ["Sara", "Mona"], answer: 1, why: "Mona talks about Madrid’s museums." },
            { t: "choose", q: "“If I go again, I will visit the market.”", options: ["Sara", "Mona"], answer: 0, why: "Sara says this at the end of her first message." }
          ] },
        { type: "activity", title: "Extra Practice: Use the new words", source: "extra", stage: "independent",
          instructions: "Write the missing word. Tap a word chip to help you.",
          items: [
            { t: "fill", q: "We went on a ____ and slept on a big ship.", answer: ["cruise"], bank: ["cruise", "tour", "recommend", "international", "incredible"], why: "cruise = holiday trip by ship." },
            { t: "fill", q: "The view from the top was ____. I couldn’t believe it!", answer: ["incredible", "stunning"], bank: ["cruise", "tour", "recommend", "international", "incredible"], why: "incredible = very surprising or hard to believe. (stunning is also correct.)" },
            { t: "fill", q: "Our ____ guide showed us the old city.", answer: ["tour"], bank: ["cruise", "tour", "recommend", "international", "incredible"], why: "a tour guide leads a tour." },
            { t: "fill", q: "I ____ this restaurant. The food is great!", answer: ["recommend"], bank: ["cruise", "tour", "recommend", "international", "incredible"], why: "recommend = say something is good and should be chosen." },
            { t: "fill", q: "The airport has many ____ flights to other countries.", answer: ["international"], bank: ["cruise", "tour", "recommend", "international", "incredible"], why: "international = involving several countries." }
          ] }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Warm-up: the palace and beach pictures. Would you like to go there? Why?", "Pre-teach the 8 words with flip cards; break international into syllables (in-ter-na-tion-al).", "Read the chat aloud with two students as Mona and Sara. Ask: Who went to Barcelona? Who went to Madrid?", "Tasks 3 and 4, then groups plan a three-day trip and present it."],
        pair: ["Read the chat in roles (Mona / Sara), then swap.", "Compare: one says something about Barcelona, the other something about Madrid."],
        group: ["Three Days, One Destination: each member presents one day of the plan."],
        quick: [{ q: "Who went to Madrid?", a: "Mona." }, { q: "How did Sara travel to Barcelona?", a: "On an international cruise (by ship)." }, { q: "What does “exciting” mean?", a: "fun" }, { q: "Did Mona visit Spain with her family?", a: "Not Given." }]
      }
    },

    /* ───────────────────────── LESSON 6 ───────────────────────── */
    {
      id: "u2l6", num: 6, skill: "Grammar", title: "First Conditional", pages: [41], status: "complete",
      canDo: [
        "I can identify first conditional structures from sentences about future plans and possible situations.",
        "I can write first conditional sentences neatly about future plans and activities."
      ],
      goals: ["Talk about possible future situations.", "Use If + present simple, will + base verb.", "Write class trip ideas."],
      goalsAr: ["أتحدث عن مواقف ممكنة في المستقبل.", "أستخدم If + المضارع البسيط، will + الفعل الأساسي.", "أكتب اقتراحات لرحلة مدرسية."],
      warmup: {
        title: "Discuss what will happen in the following situations.", image: "crops/u2l6-warmup.jpg", emoji: "🌧️", seconds: 90,
        instructions: "Discuss what will happen in the following situations.",
        prompts: ["What will you see if you go to the zoo?", "What will happen if you eat too much?", "What will you do if it rains heavily?"]
      },
      vocab: [],
      sections: [
        { type: "grammar", title: "First Conditional", page: 41,
          steps: [
            { title: "When do we use it?", text: "We use the first conditional to talk about real or possible situations in the present or in the future.", textAr: "نستخدم الجملة الشرطية الأولى للحديث عن مواقف حقيقية أو ممكنة في الحاضر أو المستقبل.",
              examples: ["{c:If} {s:I} {v:wake} up late, {s:I} {a:will} {v:miss} the bus."] },
            { title: "The form", text: "If + Present Simple, will + base verb", textAr: "If + مضارع بسيط ، will + الفعل في صورته الأساسية",
              examples: ["{c:If} {s:I} {v:wake} up late, {s:I} {a:will} {v:miss} the bus.", "{c:If} {s:Ahmed} {v:leaves} early, {s:Ali} {a:will} {v:be} sad.", "{c:If} {s:you} {v:study} hard, {s:you} {a:will} {v:pass} your exams."] },
            { title: "He / She / It in the If part: add -s", text: "The If part is present simple. With he, she, it or one person, add -s to the verb.", textAr: "جزء If بالمضارع البسيط، ومع he / she / it نضيف ‎-s‎.",
              examples: ["{c:If} {s:Ahmed} {v:leaves} early, {s:Ali} {a:will} {v:be} sad.", "{c:If} {s:she} {v:finishes} her homework, {s:she} {a:will} {v:go} to the park."] },
            { title: "No “will” in the If part", text: "Never put will after If. Say: If it rains, … NOT If it will rain, …", textAr: "لا نستخدم will بعد If.",
              examples: ["{c:If} {s:it} {v:rains}, {s:we} {a:will} {v:stay} at home. ✔", "If it will rain, we will stay at home. ✘"], source: "extra" },
            { title: "Two orders and short forms", text: "The If part can come first (use a comma) or second (no comma). You can also say ’ll for will and won’t for will not.", textAr: "يمكن أن يأتي جزء If أولًا (مع فاصلة) أو ثانيًا (بدون فاصلة). ويمكن اختصار will إلى ’ll و will not إلى won’t.",
              examples: ["{s:I} {a:will} {v:miss} the bus {c:if} {s:I} {v:wake} up late.", "{c:If} {s:it} {v:rains}, {s:I}{a:’ll} {v:stay} at home.", "{c:If} {s:you} {n:don’t} {v:study}, {s:you} {n:won’t} {v:pass}."], source: "extra" }
          ],
          worked: { q: "If Sara (visit) ____ London, she (see) ____ Big Ben.", steps: ["Find the If part: “If Sara (visit) …” → present simple.", "Sara = she → add -s: visits.", "The other part → will + base verb: will see."], a: "{c:If} {s:Sara} {v:visits} London, {s:she} {a:will} {v:see} Big Ben." },
          notes: ["Use a comma after the If part when it comes first."]
        },
        { type: "activity", title: "Match the beginning of each sentence with the correct ending.", page: 41, source: "book", stage: "guided",
          instructions: "Match the beginning of each sentence with the correct ending.",
          items: [
            { t: "match", q: "Match the beginning with the correct ending.", pairs: [["1. If I save money,", "I will buy a new car."], ["2. If they arrive late,", "they will miss the match."], ["3. If she finishes her homework,", "she will go to the park."]],
              hint: "Look at the subject: I … I, they … they, she … she.", why: "The subject in the If part and in the will part is the same person here: I → I, they → they, she → she." }
          ] },
        { type: "activity", title: "Extra Practice: Choose the correct verb", source: "extra", stage: "guided",
          instructions: "Tap the correct verb.",
          items: [
            { t: "choose", q: "If it ____ tomorrow, we will stay at home.", options: ["rains", "will rain"], answer: 0, hint: "Which part is this: If or will?", why: "If + present simple: If it rains." },
            { t: "choose", q: "If you study hard, you ____ your exams.", options: ["pass", "will pass"], answer: 1, hint: "This is the result part.", why: "Result part: will + base verb." },
            { t: "choose", q: "If Ahmed ____ early, Ali will be sad.", options: ["leave", "leaves"], answer: 1, hint: "Ahmed = he.", why: "If + he + verb-s: leaves." },
            { t: "choose", q: "If we go to the zoo, we ____ the lions.", options: ["will see", "will saw"], answer: 0, hint: "will + base verb.", why: "will + see (base verb)." },
            { t: "choose", q: "If you eat too much, you ____ feel well.", options: ["won’t", "doesn’t"], answer: 0, hint: "Negative of will.", why: "won’t = will not." }
          ] },
        { type: "activity", title: "Read and correct the verbs in the following sentences.", page: 41, source: "book", stage: "independent",
          instructions: "Read and correct the verbs in the following sentences. Write the correct form of the verbs in brackets.",
          items: [
            { t: "table", q: "Write the correct form of each verb.", head: ["Sentence", "Verb 1 (If part)", "Verb 2 (will part)"],
              rows: [
                ["a. If I (run) …… fast, I (win) …… the race.", { answer: ["run"], model: "run" }, { answer: ["will win", "’ll win", "I will win", "I’ll win"], model: "will win" }],
                ["b. If Laila (read) ……, she (learn) …… more.", { answer: ["reads"], model: "reads" }, { answer: ["will learn", "’ll learn", "she will learn", "she’ll learn"], model: "will learn" }],
                ["c. If Nasser (train) …… three times a week, he (be) …… fit.", { answer: ["trains"], model: "trains" }, { answer: ["will be", "’ll be", "he will be", "he’ll be"], model: "will be" }]
              ],
              hint: "If part → present simple (he / she → -s). Other part → will + base verb.",
              why: "a. If I run fast, I will win the race. b. If Laila reads, she will learn more. c. If Nasser trains three times a week, he will be fit." }
          ] },
        { type: "activity", title: "Extra Practice: Find the mistake", source: "extra", stage: "independent",
          instructions: "The underlined words are wrong. Write the correct form.",
          items: [
            { t: "fix", q: "If it {will rain}, we will stay at home.", answer: ["rains"], hint: "No will after If.", why: "If + present simple: If it rains." },
            { t: "fix", q: "If you study hard, you {pass} your exams.", answer: ["will pass", "’ll pass"], hint: "The result part needs will.", why: "will + base verb: you will pass." },
            { t: "fix", q: "If she {go} to the zoo, she will see a lion.", answer: ["goes"], hint: "she → verb + s/es.", why: "If she goes …" },
            { t: "fix", q: "If we visit Souq Al-Mubarakiya, we {buys} gifts.", answer: ["will buy", "’ll buy"], hint: "The result part needs will + base verb.", why: "we will buy gifts." },
            { t: "order", q: "Put the words in order. Start with If.", words: ["If", "it", "rains,", "we", "will", "stay", "at", "home."], answer: ["If it rains, we will stay at home."], why: "If + present simple, will + base verb. (“We will stay at home if it rains.” is also correct.)" },
            { t: "order", q: "Put the words in order. Start with If.", words: ["If", "you", "visit", "Kuwait", "Towers,", "you", "will", "see", "the", "sea."], answer: ["If you visit Kuwait Towers, you will see the sea."], why: "If + present simple, will + base verb." }
          ] },
        { type: "activity", title: "Write class trip suggestions about places in Kuwait using the first conditional.", page: 41, source: "book", stage: "independent",
          instructions: "Write class trip suggestions about places in Kuwait using the first conditional to explain what you will see, learn, or do there.",
          items: [
            { t: "short", q: "1. If we go to ……, we will ……", open: true, model: "If we go to the Scientific Centre, we will see fish and learn about the sea." },
            { t: "short", q: "2. If we visit ……, we will ……", open: true, model: "If we visit Kuwait Towers, we will enjoy the view of the city and the sea." }
          ] }
      ],
      game: { kind: "quiz", title: "If … will … Race", items: [
        { t: "choose", q: "If I ____ money, I will buy a bike.", options: ["save", "will save"], answer: 0, why: "If + present simple." },
        { t: "choose", q: "If they arrive late, they ____ the match.", options: ["miss", "will miss"], answer: 1, why: "will + base verb." },
        { t: "choose", q: "If Laila ____, she will learn more.", options: ["read", "reads"], answer: 1, why: "she → reads." },
        { t: "choose", q: "If it rains, we ____ play outside.", options: ["won’t", "don’t will"], answer: 0, why: "won’t = will not." },
        { t: "choose", q: "If you visit the zoo, you will ____ a lion.", options: ["see", "sees"], answer: 0, why: "will + base verb (no -s)." },
        { t: "mcq", q: "Which sentence is correct?", options: ["If he will come, I will be happy.", "If he comes, I will be happy.", "If he comes, I am happy will."], answer: 1, why: "If + present simple, will + base verb." }
      ] },
      teacher: {
        notes: ["Warm-up: the zoo, eating too much and rain pictures. Ask: What will happen if …?", "Show the rule box: If + Present Simple, will + base verb. Colour If, the present verb and will + verb.", "Worked example, then the matching task (guided), then correct the verbs (independent).", "Groups write two class trip suggestions about places in Kuwait and read them aloud."],
        pair: ["Chain game: A: “If it rains, I will stay at home.” B: “If I stay at home, I will read a book.” …", "Partner check of the class trip suggestions."],
        group: ["Class trip vote: each group suggests one place with “If we go to …, we will …” and the class votes."],
        quick: [{ q: "Complete: If I wake up late, I ___ the bus.", a: "will miss" }, { q: "Correct: If it will rain, we will stay home.", a: "If it rains, we will stay home." }, { q: "Complete: If Laila ___ (read), she will learn more.", a: "reads" }]
      }
    },

    /* ───────────────────────── LESSON 7 ───────────────────────── */
    {
      id: "u2l7", num: 7, skill: "Writing", title: "Places to Visit in Kuwait", pages: [42, 43], status: "complete",
      canDo: [
        "I can organise ideas logically in a paragraph about tourist places in Kuwait.",
        "I can write a short paragraph about places to visit in Kuwait clearly and accurately."
      ],
      goals: ["Recommend places in Kuwait to a visitor.", "Find the topic sentence, details and conclusion.", "Plan and write a paragraph about a place in Kuwait."],
      goalsAr: ["أنصح زائرًا بأماكن في الكويت.", "أحدد الجملة الافتتاحية والتفاصيل والخاتمة.", "أخطط وأكتب فقرة عن مكان في الكويت."],
      linkers: ["first", "next", "then", "and", "because"],
      warmup: {
        title: "Places to Visit in Kuwait", image: "crops/u2l7-warmup.jpg", emoji: "🗺️", seconds: 90,
        instructions: "Look at the map and discuss places you would recommend to a visitor.",
        prompts: ["Look at the map and discuss places you would recommend to a visitor."]
      },
      vocab: [],
      sections: [
        { type: "speak", title: "Look at the map and discuss places you would recommend to a visitor.", page: 42, source: "book", image: "crops/u2l7-warmup.jpg",
          instructions: "One of you is the visitor. The other recommends places on the map.",
          dialogue: [{ who: "Visitor", text: "Today is my first day in Kuwait and I don’t know where to go." }, { who: "Friend", text: "I will tell you about my favourite places." }, { who: "You", text: "" }],
          starters: ["You can visit …", "I recommend … because …", "There you can …", "First, … Then, …"],
          record: true },
        { type: "activity", title: "Rate Your Favourite Places", page: 42, source: "book", stage: "guided",
          instructions: "Choose places in Kuwait, then rate how much you enjoy visiting them. Then, discuss what you can do there. Tip: Don’t forget to use like/prefer.",
          items: [
            { t: "table", q: "Write four places. Give each one 1–5 stars (★).", head: ["Place", "My stars (1–5)"],
              rows: [[{ open: true, model: "Kuwait Towers" }, { open: true, model: "★★★★★" }], [{ open: true, model: "Al-Shaheed Park" }, { open: true, model: "★★★★" }], [{ open: true, model: "The Scientific Centre" }, { open: true, model: "★★★★" }], [{ open: true, model: "Souq Al-Mubarakiya" }, { open: true, model: "★★★" }]],
              open: true, note: "Then tell your group: “I like / prefer … because I can …”" }
          ] },
        { type: "activity", title: "Fill in the following table with your ideas.", page: 42, source: "book", stage: "guided",
          instructions: "Fill in the following table with your ideas.",
          items: [
            { t: "table", q: "Fill in the table with your ideas.", head: ["Place", "Activity 1", "Activity 2", "Benefit"],
              rows: [
                [{ open: true, model: "The Scientific Centre" }, { open: true, model: "see fish" }, { open: true, model: "watch a film about the sea" }, { open: true, model: "learn about the sea" }],
                [{ open: true, model: "Souq Al-Mubarakiya" }, { open: true, model: "buy gifts" }, { open: true, model: "try traditional food" }, { open: true, model: "learn about Kuwaiti heritage" }],
                [{ open: true, model: "Al-Shaheed Park" }, { open: true, model: "walk" }, { open: true, model: "enjoy nature" }, { open: true, model: "stay healthy and relaxed" }]
              ], open: true }
          ] },
        { type: "reading", title: "Model paragraph", page: 42,
          instructions: "Read the paragraph from the book.",
          paras: ["Kuwait has many amazing places to visit. You can go to the Scientific Centre to see fish and learn about the sea. People also like Souq Al-Mubarakiya to buy food and gifts. Another nice place is Al-Shaheed Park, where you can walk and enjoy nature. These places show how Kuwait is fun and interesting for everyone."] },
        { type: "activity", title: "Highlight the topic sentence, supporting details, and conclusion in the following paragraph using different colours.", page: 42, source: "book", stage: "guided",
          instructions: "What is each sentence? Choose: topic sentence, supporting detail or conclusion.",
          items: [
            { t: "choose", q: "“Kuwait has many amazing places to visit.”", options: ["topic sentence", "supporting detail", "conclusion"], answer: 0, why: "It gives the main idea of the whole paragraph." },
            { t: "choose", q: "“You can go to the Scientific Centre to see fish and learn about the sea.”", options: ["topic sentence", "supporting detail", "conclusion"], answer: 1, why: "It gives one example place: a detail." },
            { t: "choose", q: "“People also like Souq Al-Mubarakiya to buy food and gifts.”", options: ["topic sentence", "supporting detail", "conclusion"], answer: 1, why: "It gives another example place: a detail." },
            { t: "choose", q: "“Another nice place is Al-Shaheed Park, where you can walk and enjoy nature.”", options: ["topic sentence", "supporting detail", "conclusion"], answer: 1, why: "It gives a third example place: a detail." },
            { t: "choose", q: "“These places show how Kuwait is fun and interesting for everyone.”", options: ["topic sentence", "supporting detail", "conclusion"], answer: 2, why: "It ends the paragraph and sums up the idea." }
          ] },
        { type: "discuss", title: "Look at the picture and discuss places you prefer visiting in Kuwait.", page: 43, source: "book", image: "crops/u2l7-map.jpg",
          instructions: "Look at the picture and discuss places you prefer visiting in Kuwait. Use these guide words to help you: famous - exciting - prefer - visit - family - learn - happily",
          prompts: ["Which places do you prefer visiting in Kuwait?", "What can you do there?"],
          starters: ["famous", "exciting", "prefer", "visit", "family", "learn", "happily", "I prefer visiting … because …"] },
        { type: "activity", title: "Extra Practice: Build descriptive sentences", source: "extra", stage: "independent",
          instructions: "Tap the words in the correct order.",
          items: [
            { t: "order", q: "Make a topic sentence.", words: ["The", "Scientific", "Centre", "is", "a", "famous", "place", "to", "visit."], answer: ["The Scientific Centre is a famous place to visit."], why: "A topic sentence gives the main idea." },
            { t: "order", q: "Use a preference verb.", words: ["Tourists", "love", "watching", "the", "sea", "from", "Kuwait", "Towers."], answer: ["Tourists love watching the sea from Kuwait Towers."], why: "love + verb-ing." },
            { t: "order", q: "Use the first conditional.", words: ["If", "you", "visit", "the", "souq,", "you", "will", "find", "traditional", "food."], answer: ["If you visit the souq, you will find traditional food."], why: "If + present simple, will + base verb." }
          ] },
        { type: "write", title: "Plan and write a paragraph describing a place in Kuwait.", page: 43, source: "book",
          instructions: "Kuwait is a lovely country. It has many exciting places to visit. Plan and write a paragraph describing a place in Kuwait and the activities a tourist can do there. Then, write your paragraph.",
          wordBank: ["first", "next", "then", "and", "because", "famous", "exciting", "beautiful", "prefer", "visit", "family", "learn", "happily", "if … will"],
          wordBankLabel: "Linker Bank and guide words",
          frame: [
            { label: "Topic sentence", hint: "Name the place and say why it is special." },
            { label: "Supporting details", hint: "Write three activities a tourist can do there. Use first, next, then.", lines: 3 },
            { label: "Concluding sentence", hint: "End with your final idea or feeling." }
          ],
          model: "Souq Al-Mubarakiya is one of the most famous places in Kuwait. First, tourists can walk in its old streets and buy gifts for their families. Next, they can try delicious traditional food. Then, many visitors enjoy drinking tea and talking happily with the friendly sellers. If you visit the souq, you will learn a lot about Kuwaiti heritage. It is an exciting and beautiful place for everyone.",
          modelFromBook: false,
          bookChecklist: ["Did I write a clear topic sentence?", "Did I include at least three details?", "Did I use descriptive adjectives like ‘exciting’ ‘beautiful’ and ‘famous’", "Did I check my punctuation and capital letters?", "Did I use AI tools to proofread my writing?"],
          checklist: ["I started each sentence with a capital letter.", "I ended each sentence with a full stop.", "I used a preference verb (like / love / enjoy / prefer).", "I used one first conditional sentence (If …, … will …)."],
          minWords: 50 }
      ],
      game: { kind: "scramble", title: "Sentence Builder", sentences: ["Kuwait has many amazing places to visit.", "You can see fish at the Scientific Centre.", "People like buying gifts at the souq.", "If you visit Al-Shaheed Park, you will enjoy nature.", "Kuwait is fun and interesting for everyone."] },
      teacher: {
        notes: ["Warm-up: the Kuwait map and the visitor’s speech bubble. Pairs recommend places.", "Rate Your Favourite Places, then the Place / Activity / Benefit table (use like / prefer).", "Read the model paragraph; students colour the topic sentence, details and conclusion.", "Students fill in the plan, then write the paragraph; peer check with the book’s Writing Checklist."],
        pair: ["Visitor and friend role-play with the map.", "Peer check with the Writing Checklist."],
        group: ["Groups make a “Visit Kuwait” mini-brochure: one place each, with a topic sentence and three details."],
        quick: [{ q: "What is a topic sentence?", a: "The sentence that gives the main idea of the paragraph." }, { q: "Give two linkers from the bank.", a: "first, next, then, and, because" }, { q: "Complete: If you visit the Scientific Centre, you will …", a: "e.g. see fish and learn about the sea." }]
      }
    }
  ]
});

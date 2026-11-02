/* Literature Time (book pages 100–104): two stories. The texts are the book's; the questions are Extra Practice. */
BOOK.addUnit({
  id: "u13", num: 13, title: "Literature Time", titleAr: "وقت الأدب", label: "Literature Time", module: 5,
  pages: [100, 104], cover: 100,
  lessons: [
    {
      id: "u13l1", num: 1, skill: "Reading", title: "Stars in his Eyes", pages: [101, 102], status: "complete",
      canDo: ["Read and enjoy a story about a famous scientist."],
      goals: ["Read the story of Galileo.", "Learn 8 new words.", "Answer questions about the story."],
      goalsAr: ["أقرأ قصة العالم جاليليو.", "أتعلم 8 كلمات جديدة.", "أجيب عن أسئلة حول القصة."],
      warmup: { title: "Before You Read", image: null, emoji: "🔭", prompts: ["Look at the title: “Stars in his Eyes”. What do you think the story is about?", "What do you know about Galileo?"], seconds: 90 },
      vocab: [
        { w: "discovery", pos: "noun", emoji: "💡", def: "finding something new that nobody knew before", ex: "At the age of eighteen Galileo made his first discovery.", exFromBook: true, ar: "اكتشاف" },
        { w: "swing", pos: "verb", emoji: "🪀", def: "to move backwards and forwards from a fixed point", ex: "He noticed that an oil lamp was swinging backwards and forwards.", exFromBook: true, ar: "يتأرجح" },
        { w: "weight", pos: "noun", emoji: "⚖️", def: "how heavy something is; a heavy object", ex: "He took two pieces of lead that were of the same weight.", exFromBook: true, ar: "وزن / ثِقل" },
        { w: "equal", pos: "adjective", emoji: "🟰", def: "the same in size, number or amount", ex: "He tied them to two ropes of equal length.", exFromBook: true, ar: "متساوٍ" },
        { w: "measure", pos: "verb", emoji: "📏", def: "to find the size, amount or degree of something", ex: "He measured the heat of air with a thermometer.", exFromBook: true, ar: "يقيس" },
        { w: "compass", pos: "noun", emoji: "🧭", def: "a tool with a needle that always points north", ex: "He made a compass to point north.", exFromBook: true, ar: "بوصلة" },
        { w: "magnet", pos: "noun", emoji: "🧲", def: "a piece of metal that pulls iron towards it", ex: "He used a magnet to explain many things about the Earth.", exFromBook: true, ar: "مغناطيس" },
        { w: "telescope", pos: "noun", emoji: "🔭", def: "a tube with glass lenses that makes far things look nearer", ex: "He built a telescope through which he could study the stars, the sun and the moon.", exFromBook: true, ar: "تلسكوب" }
      ],
      sections: [
        { type: "reading", title: "Stars in his Eyes · by Raja T Nasr", page: 101, paras: [
          "‘Stop looking at those stars and come and help me,’ Galileo’s father called. ‘Dreamer,’ said his teacher. ‘You’ll never have any success if you don’t study now.’ Galileo was a starry-eyed child. He often imagined himself flying through the clouds. He was sent away to school to become a doctor, but he did not learn easily. His favourite subject was Mathematics. He believed that it could be a key to understanding the world around him.",
          "At the age of eighteen Galileo made his first discovery. He was in a building in his home town, Pisa, in Italy, when he heard a strange noise. He noticed that an oil lamp was swinging backwards and forwards. He also heard the lamp’s chain hitting against the wall, and it seemed to him that they were both moving at the same time. ‘Am I only dreaming again?’ he wondered. But he hurried home to find out if what he thought was true.",
          "He took two pieces of lead that were of the same weight and tied them to two ropes of equal length. He fixed the ropes to a chair. He gave his father one rope to hold at the end with the weight; he held the other rope higher than his father’s. They let go of the weights at the same time and then counted the number of swings backwards and forwards. Both father and son reached one hundred together. ‘Father,’ shouted Galileo ‘Don’t you see? My rope was further up than yours but they both arrived at the same point at the same time.’",
          "The old Italian man could not know then that his son had just discovered a great fact. Nor did he know that, for hundreds of years, men would use his knowledge to measure time on a clock and to watch the stars and sun moving in the sky.",
          "To Galileo, it was only a beginning. Next he said that two different weights fall together if they come down from the same height. ‘Not possible!’ his friends said. ‘Everyone knows that a penny falls faster than a feather!’",
          "‘Follow me and I will show you,’ commanded Galileo. And up to the top of the Tower of Pisa he climbed. He carried a ball in each hand, but one was ten times as heavy as the other. He let go of them at the same time and heard the crowd become silent when the balls hit the ground together. They had just seen something they could not believe!",
          "For the rest of his life he worked to make things that the whole world uses and enjoys today. He made a compass to point north and to help find the direction in which a person is travelling. He used a magnet to explain many things about the Earth. He measured the heat of air with a thermometer. Finally, he proved to the world that the Earth and all other planets move around the sun, which is at the centre of our solar system. To do this, he built a telescope through which he could study the stars, the sun and the moon. From a boy who had science in his blood and stars in his eyes, he grew to be a great man who opened the beauties of the heavens to people on Earth."
        ] },
        { type: "activity", title: "Extra Practice: Check your understanding", source: "extra", stage: "guided", instructions: "Choose the correct answer. Look back at the story.", instructionsAr: "اختر الإجابة الصحيحة، وارجع إلى القصة.",
          items: [
            { t: "mcq", q: "1. What was Galileo’s favourite subject?", options: ["Medicine", "Mathematics", "Music", "Geography"], answer: 1, hint: "Paragraph 1.", why: "“His favourite subject was Mathematics.”" },
            { t: "mcq", q: "2. Where was Galileo’s home town?", options: ["Rome, in Italy", "Hamburg, in Germany", "Pisa, in Italy", "Paris, in France"], answer: 2, hint: "Paragraph 2.", why: "“his home town, Pisa, in Italy”." },
            { t: "mcq", q: "3. What did Galileo notice in the building?", options: ["A clock that stopped", "An oil lamp swinging backwards and forwards", "A ball falling from the roof", "A star in the sky"], answer: 1, hint: "Paragraph 2.", why: "“He noticed that an oil lamp was swinging backwards and forwards.”" },
            { t: "choose", q: "4. Galileo and his father both counted to one hundred together.", options: ["True", "False"], answer: 0, why: "“Both father and son reached one hundred together.”" },
            { t: "mcq", q: "5. Galileo’s friends thought that …", options: ["a penny falls faster than a feather", "a feather falls faster than a penny", "all things fall at the same speed", "nothing falls from a tower"], answer: 0, hint: "Paragraph 5.", why: "“Everyone knows that a penny falls faster than a feather!”" },
            { t: "mcq", q: "6. What happened when Galileo dropped the two balls from the Tower of Pisa?", options: ["The heavy ball hit the ground first.", "The light ball hit the ground first.", "The balls hit the ground together.", "The balls did not fall."], answer: 2, hint: "Paragraph 6.", why: "“the balls hit the ground together”." },
            { t: "short", q: "7. Name two things Galileo made or used (paragraph 7).", model: "He made a compass, used a magnet, used a thermometer and built a telescope.", hint: "Look for compass, magnet, thermometer, telescope." }
          ] },
        { type: "discuss", title: "Extra Practice: Think, pair, share", source: "extra", prompts: ["Why do you think the story is called “Stars in his Eyes”?", "Galileo’s friends said ‘Not possible!’. Why is it important to test an idea before we say it is wrong?"], emoji: "💬" }
      ],
      game: { kind: "match-emoji", title: "Word & Picture", from: "vocab" },
      teacher: {
        notes: ["Read the title and look at the pictures on pages 101–102 together.", "Read the story aloud (Read aloud button) or in turns, one paragraph each.", "Act out the two experiments (the ropes, then the two balls) with simple objects.", "Students answer the questions, then discuss the title."],
        pair: ["Pairs retell one experiment in 3–4 sentences."],
        group: ["Groups make a short timeline of Galileo’s discoveries."],
        quick: [{ q: "What did Galileo see swinging?", a: "An oil lamp." }, { q: "Where did he drop the two balls?", a: "From the top of the Tower of Pisa." }, { q: "What did he build to study the stars?", a: "A telescope." }]
      }
    },
    {
      id: "u13l2", num: 2, skill: "Reading", title: "Journey to the Centre of the Earth", pages: [103, 104], status: "complete",
      canDo: ["Read and enjoy an adventure story."],
      goals: ["Read an adventure story.", "Learn 8 new words.", "Make sentences about the story."],
      goalsAr: ["أقرأ قصة مغامرة.", "أتعلم 8 كلمات جديدة.", "أكوّن جملًا عن القصة."],
      warmup: { title: "Before You Read", image: null, emoji: "🌋", prompts: ["Look at the title. Is it possible to travel to the centre of the Earth?", "What do you think the explorers will see under the ground?"], seconds: 90 },
      vocab: [
        { w: "geologist", pos: "noun", emoji: "🪨", def: "a scientist who studies rocks and the Earth", ex: "Professor Lidenbrock was a famous geologist from Hamburg in Germany.", exFromBook: true, ar: "عالم جيولوجيا" },
        { w: "extinct", pos: "adjective", emoji: "🌋", def: "(a volcano) that will not erupt again", ex: "They had entered the earth through an extinct volcano in Iceland.", exFromBook: true, ar: "خامد" },
        { w: "crater", pos: "noun", emoji: "🕳️", def: "the round hole at the top of a volcano", ex: "The three explorers found the opening of the old volcano’s crater.", exFromBook: true, ar: "فوهة البركان" },
        { w: "descend", pos: "verb", emoji: "⬇️", def: "to go down", ex: "They descended a long way.", exFromBook: true, ar: "ينزل / يهبط" },
        { w: "tunnel", pos: "noun", emoji: "🚇", def: "a long passage under the ground", ex: "They walked for days through tunnels in complete darkness.", exFromBook: true, ar: "نفق" },
        { w: "enthusiastic", pos: "adjective", emoji: "🤩", def: "very interested and excited", ex: "Professor Lidenbrock was very enthusiastic.", exFromBook: true, ar: "متحمس" },
        { w: "ancestor", pos: "noun", emoji: "🦣", def: "a person or animal from long ago that later ones come from", ex: "On a small island they saw mammoths – ancestors of today’s elephants.", exFromBook: true, ar: "سلف" },
        { w: "eruption", pos: "noun", emoji: "💥", def: "when a volcano sends out fire, smoke and hot rock", ex: "The explosion caused a volcanic eruption.", exFromBook: true, ar: "ثوران" }
      ],
      sections: [
        { type: "reading", title: "Journey to the Centre of the Earth · by Jules Verne", page: 103, paras: [
          "Professor Lidenbrock was a famous geologist from Hamburg in Germany. In 1863, while he was looking at an old book, he found a piece of paper with a message. It was written by a famous Icelandic scientist in the sixteenth century, and it gave instructions for going to the Earth’s centre!",
          "Professor Lidenbrock was very excited. He immediately told his nephew, Axel, to get ready for a long journey, starting at an extinct volcano in Iceland. Axel knew the journey would be dangerous, but his uncle was determined to make the trip.",
          "Only a few days later, Axel and the professor were in Iceland. They were given a guide called Hans, who was a big, strong and quiet man. The three explorers found the opening of the old volcano’s crater and, using ropes and axes, began to climb down inside it. They descended a long way, and then walked for days through tunnels in complete darkness. They almost ran out of water, and Axel feared they would die in these underground passages, but Professor Lidenbrock was very enthusiastic. Eventually they found a strange underground sea. Hans made a simple boat and they sailed on it for several days. During this time they saw a lot of strange fish and some huge sea monsters. Creatures like these lived on the Earth’s surface millions of years ago, but no longer!",
          "On a small island they saw mammoths - ancestors of today’s elephants. And finally they saw a giant, who was more than three metres tall. Even Professor Lidenbrock forgot his usual curiosity and started to run to the boat.",
          "The three explorers used some gunpowder to make a hole in a rock wall, but the explosion caused a volcanic eruption. Their tiny boat was lifted higher and higher, up through a tunnel, by a huge tidal wave. Just when they were sure they were about to die they were thrown out of the top. When they had recovered, they started to look around. They saw that they were back on the earth’s surface. But they didn’t know which country they were in. The professor asked a small boy in several different languages. When he asked in Italian the boy replied ‘Stromboli’. They had entered the earth through an extinct volcano in Iceland, and returned through an active volcano in Italy!"
        ] },
        { type: "activity", title: "Extra Practice: Check your understanding", source: "extra", stage: "guided", instructions: "Choose the correct answer. Look back at the story.", instructionsAr: "اختر الإجابة الصحيحة، وارجع إلى القصة.",
          items: [
            { t: "mcq", q: "1. What did Professor Lidenbrock find in the old book?", options: ["A map of Iceland", "A piece of paper with a message", "A photo of a volcano", "A letter from Axel"], answer: 1, hint: "Paragraph 1.", why: "“he found a piece of paper with a message”." },
            { t: "mcq", q: "2. Who was Axel?", options: ["The professor’s son", "The guide", "The professor’s nephew", "An Icelandic scientist"], answer: 2, hint: "Paragraph 2.", why: "“his nephew, Axel”." },
            { t: "mcq", q: "3. Where did the journey start?", options: ["At an extinct volcano in Iceland", "At an active volcano in Italy", "In Hamburg", "On a small island"], answer: 0, why: "“starting at an extinct volcano in Iceland”." },
            { t: "choose", q: "4. Hans made a simple boat.", options: ["True", "False"], answer: 0, why: "“Hans made a simple boat”." },
            { t: "mcq", q: "5. What were the mammoths?", options: ["Huge sea monsters", "Ancestors of today’s elephants", "Strange fish", "Giants"], answer: 1, why: "“mammoths - ancestors of today’s elephants”." },
            { t: "mcq", q: "6. How did the explorers come back to the surface?", options: ["They climbed up the ropes.", "A tidal wave lifted their boat up through a tunnel.", "Hans carried them.", "They walked through the tunnels."], answer: 1, hint: "Last paragraph.", why: "“Their tiny boat was lifted higher and higher, up through a tunnel, by a huge tidal wave.”" },
            { t: "mcq", q: "7. In which country did they come out?", options: ["Iceland", "Germany", "Italy", "Greece"], answer: 2, why: "“returned through an active volcano in Italy!”" }
          ] },
        { type: "activity", title: "Extra Practice: Sentence Builder", source: "extra", stage: "independent", instructions: "Put the words in order to make sentences about the story.",
          items: [
            { t: "order", q: "1.", words: ["found", "The", "professor", "a", "message"], answer: ["The professor found a message"] },
            { t: "order", q: "2.", words: ["climbed", "They", "inside", "the", "volcano"], answer: ["They climbed inside the volcano"] },
            { t: "order", q: "3.", words: ["sailed", "They", "an", "on", "underground", "sea"], answer: ["They sailed on an underground sea"] }
          ] },
        { type: "discuss", title: "Extra Practice: Think, pair, share", source: "extra", prompts: ["Which part of the journey was the most dangerous? Why?", "Would you like to go on a journey like this? Why / Why not?"], emoji: "💬" }
      ],
      game: { kind: "spell", title: "Missing Letters", from: "vocab" },
      teacher: {
        notes: ["Ask students to predict the story from the title and the pictures on pages 103–104.", "Read the story in two parts (page 103, then page 104) and check the questions after each part.", "Draw the route on the board: Iceland → underground sea → Italy.", "Finish with the order activity and a short discussion."],
        pair: ["Pairs tell the story to each other in 5 sentences, one for each place."],
        group: ["Groups draw a comic strip of the journey in 4 boxes."],
        quick: [{ q: "Who was the guide?", a: "Hans." }, { q: "What did they see on the small island?", a: "Mammoths." }, { q: "Which volcano did they come out of?", a: "Stromboli, in Italy." }]
      }
    }
  ]
});

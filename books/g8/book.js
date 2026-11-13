/* Book skeleton: English Pearls of Kuwait, Grade 8 (new edition), First Term — Learning Units 1–4.
   Source: the Grade 8 Student's Book pages with answers (pages 18–72). The answers are used only to check
   the activities; no page scans are shown (they carry the answers), so BOOK.noPageImages is on. */
window.BOOK = window.BOOK || {};
BOOK.title = "English Pearls of Kuwait";
BOOK.heroTitle = "English <em>Pearls</em> of Kuwait";
BOOK.code = "8";
BOOK.grade = 8;
BOOK.level = "Grade 8 · Student’s Book · First Term";
BOOK.storeKey = "pearls8n.v1";
BOOK.noPageImages = true;
BOOK.pagesInfo = { last: 72 };
BOOK.glossaryTitle = "Word List";
BOOK.glossaryNote = "The new words from the lessons of Learning Units 1–4, with the sentence from the book where the word is used.";
BOOK.glossaryAr = true; // the Word List always shows the Arabic meaning (from the vocab `ar` fields)
BOOK.libraryUrl = "../index.html";
BOOK.credit = "Prepared by: Abdullah Alenezi";
BOOK.copyright = "Book content © Ministry of Education – State of Kuwait. Interactive version for classroom use.";
BOOK.toc = [
  { id: "u1", num: 1, title: "Kuwait Then and Now: Living the Change", titleAr: "الكويت بين الماضي والحاضر: نعيش التغيير", cover: 18, color: "u1" },
  { id: "u2", num: 2, title: "Innovation and Creation", titleAr: "الابتكار والإبداع", cover: 34, color: "u2" },
  { id: "u3", num: 3, title: "Healthy Inside, Healthy Outside", titleAr: "صحة من الداخل والخارج", cover: 48, color: "u3" },
  { id: "u4", num: 4, title: "Careers and Future Jobs", titleAr: "المهن ووظائف المستقبل", cover: 62, color: "u4" }
];
BOOK.units = [];
BOOK.addUnit = function (u) { BOOK.units.push(u); };

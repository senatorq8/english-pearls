/* Book skeleton: Modified Target English, Grade 8 (Table of Contents p.7). Lessons are added by data/uN.js;
   each unit's lesson list in the contents is taken from its data file. */
window.BOOK = window.BOOK || {};
BOOK.title = "Modified Target English";
BOOK.heroTitle = "Modified <em>Target</em> English";
BOOK.code = "8";
BOOK.grade = 8;
BOOK.level = "Grade 8 · Student’s Book";
BOOK.storeKey = "pearls8.v1";
BOOK.pagesInfo = { glossary: "96–99", writing: 95, literature: 100, last: 105 };
BOOK.glossaryTitle = "Words to Remember";
BOOK.libraryUrl = "../index.html";
/* Augmented reality (docs/ar): scan printed pages, words in 3D. Pilot: Unit 10. */
BOOK.ar = { u10: { set: "g8-u10", pages: "75–81" } };
BOOK.credit = "Prepared by: Abdullah Alenezi";
BOOK.copyright = "Book content © Ministry of Education – State of Kuwait. Interactive version for classroom use.";
BOOK.modules = [
  { num: 1, title: "Life Experiences", titleAr: "تجارب الحياة", color: "u1", cover: 13, units: ["u1", "u2", "u3"] },
  { num: 2, title: "Our Amazing World", titleAr: "عالمنا المدهش", color: "u4", cover: 33, units: ["u4", "u5", "u6"] },
  { num: 3, title: "Keeping in Touch", titleAr: "على تواصل", color: "u7", cover: 55, units: ["u7", "u8", "u9"] },
  { num: 4, title: "Exploring Abilities", titleAr: "اكتشاف القدرات", color: "u10", cover: 75, units: ["u10", "u11", "u12"] },
  { num: 5, title: "Literature Time", titleAr: "وقت الأدب", color: "u13", cover: 100, units: ["u13"], extra: true }
];
BOOK.toc = [
  { id: "u1", num: 1, title: "Healthy Living", titleAr: "حياة صحية", cover: 15, color: "u1" },
  { id: "u2", num: 2, title: "Life Events", titleAr: "أحداث الحياة", cover: 21, color: "u2" },
  { id: "u3", num: 3, title: "How We Live", titleAr: "كيف نعيش", cover: 27, color: "u3" },
  { id: "u4", num: 4, title: "The Unforgettable Past", titleAr: "الماضي الذي لا يُنسى", cover: 35, color: "u4" },
  { id: "u5", num: 5, title: "Incredible Places", titleAr: "أماكن مذهلة", cover: 41, color: "u5" },
  { id: "u6", num: 6, title: "Surprising Records", titleAr: "أرقام قياسية مدهشة", cover: 47, color: "u6" },
  { id: "u7", num: 7, title: "Ideas and Thoughts", titleAr: "أفكار وآراء", cover: 57, color: "u7" },
  { id: "u8", num: 8, title: "Digital Communication", titleAr: "التواصل الرقمي", cover: 63, color: "u8" },
  { id: "u9", num: 9, title: "Storytelling and Communication", titleAr: "رواية القصص والتواصل", cover: 69, color: "u9" },
  { id: "u10", num: 10, title: "Discoveries and Inventions", titleAr: "اكتشافات واختراعات", cover: 76, color: "u10" },
  { id: "u11", num: 11, title: "Intelligence and Creativity", titleAr: "الذكاء والإبداع", cover: 82, color: "u11" },
  { id: "u12", num: 12, title: "Explore and Present", titleAr: "استكشف وقدّم", cover: 88, color: "u12" },
  { id: "u13", num: 13, title: "Literature Time", titleAr: "وقت الأدب", cover: 100, color: "u13", label: "Literature Time" }
];
BOOK.units = [];
BOOK.addUnit = function (u) { BOOK.units.push(u); };

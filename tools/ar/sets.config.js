/* AR sets: which printed pages the camera recognises, what each page offers, and the 3D word models.
   Texts for "Listen" and the model sentences are taken from the book data at build time (tools/ar/make.js),
   so they always match the book. Models are original low-poly models made in tools/ar/models.js. */
module.exports = {
  "g8-u10": {
    book: "g8", unit: "u10",
    title: "Unit 10 · Discoveries and Inventions",
    titleAr: "الوحدة 10 · اكتشافات واختراعات",
    pages: [
      { page: 75, title: "Module Four · Exploring Abilities", open: ["u10l1"], models: ["bulb"] },
      { page: 76, open: ["u10l1"], read: "u10l1", models: ["wheel", "pot", "bottle", "beads", "noodles"] },
      { page: 77, open: ["u10l1", "u10l2"], models: [] },
      { page: 78, open: ["u10l3", "u10l4"], models: ["bulb", "fridge", "tv", "car", "computer"] },
      { page: 79, open: ["u10l4", "u10l5"], models: [] },
      { page: 80, open: ["u10l6"], read: "u10l6", models: ["aircon", "phone"] },
      { page: 81, open: ["u10l6", "u10l7"], models: ["bulb"] }
    ],
    // sentence: a sentence copied from the book that uses the word (looked up in the lesson's reading text)
    models: {
      wheel:    { word: "wheel",           ar: "عَجَلة",              page: 76, lesson: "u10l1", find: "invented the wheel" },
      pot:      { word: "pot",             ar: "إناء فخّاري",          page: 76, lesson: "u10l1", find: "invented the wheel" },
      bottle:   { word: "glass bottle",    ar: "زجاجة",               page: 76, lesson: "u10l1", find: "glass bottles" },
      beads:    { word: "beads",           ar: "خَرَز",                page: 76, lesson: "u10l1", find: "probably beads" },
      noodles:  { word: "noodles",         ar: "نودلز (شعيرية صينية)", page: 76, lesson: "u10l1", find: "made noodles" },
      bulb:     { word: "electric light",  ar: "مصباح كهربائي",        page: 78, lesson: "u10l3" },
      fridge:   { word: "fridge",          ar: "ثلاجة",               page: 78, lesson: "u10l3" },
      tv:       { word: "television",      ar: "تلفاز",               page: 78, lesson: "u10l3" },
      car:      { word: "car",             ar: "سيارة",               page: 78, lesson: "u10l3" },
      computer: { word: "computer",        ar: "حاسوب",               page: 78, lesson: "u10l3" },
      aircon:   { word: "air conditioner", ar: "مكيّف هواء",          page: 80, lesson: "u10l6", find: "air conditioner" },
      phone:    { word: "smartphone",      ar: "هاتف ذكي",            page: 80, lesson: "u10l6", find: "iPhone" }
    }
  }
};

/* Book skeleton: the Table of Contents (book pages 11–12). Lesson content is added by data/uN.js. */
window.BOOK = window.BOOK || {};
BOOK.title = "English Pearls of Kuwait";
BOOK.code = "6A";
BOOK.grade = 6;
BOOK.level = "Grade 6 · Student’s Book 6A";
BOOK.storeKey = "pearls6a.v1";
BOOK.credit = "Prepared by: Abdullah Alenezi";
BOOK.copyright = "Book content © Ministry of Education – State of Kuwait, 2025. Interactive version for classroom use.";
BOOK.libraryUrl = "../index.html";
BOOK.pagesInfo = { project: 73, glossary: "74–77", irregular: "78–79", last: 80 };
BOOK.toc = [
  { id: "u1", num: 1, title: "Art and Expression", titleAr: "الفن والتعبير", cover: 17, color: "u1", lessons: [
    ["Reading", "Pearl of the Gulf", "20-21"], ["Grammar", "Past Simple Tense", "22"], ["Listening", "People Who Made a Difference", "23"], ["Speaking", "Discover Traditional Crafts", "24"],
    ["Reading", "Kuwait TV, Then and Now", "25-26"], ["Grammar", "Past Simple (used to)", "27"], ["Writing", "Life in Old Kuwait", "28-29"]] },
  { id: "u2", num: 2, title: "Landmarks and Tourism", titleAr: "المعالم والسياحة", cover: 31, color: "u2", lessons: [
    ["Reading", "A World of Attractions", "34-35"], ["Grammar", "Present Simple/Preference Verbs", "36"], ["Listening", "Exploring Kuwait", "37"], ["Speaking", "Indoor and Outdoor Activities", "38"],
    ["Reading", "Holiday Adventures", "39-40"], ["Grammar", "First Conditional", "41"], ["Writing", "Places to Visit in Kuwait", "42-43"]] },
  { id: "u3", num: 3, title: "Our Environment, Our Choice", titleAr: "بيئتنا اختيارنا", cover: 45, color: "u3", lessons: [
    ["Reading", "Our Environment in Danger", "48-49"], ["Grammar", "Present Continuous", "50"], ["Listening", "Small Actions, Big Change", "51"], ["Speaking", "We Can Save the Earth", "52"],
    ["Reading", "Students’ Actions Around the World", "53-54"], ["Grammar", "Future Simple", "55"], ["Writing", "How to Protect the Earth", "56-57"]] },
  { id: "u4", num: 4, title: "What Stories Teach Us", titleAr: "ماذا تعلّمنا القصص", cover: 59, color: "u4", lessons: [
    ["Reading", "Stories that Connect Us", "62-63"], ["Grammar", "Relative Pronouns", "64"], ["Listening", "Why People Like Stories", "65"], ["Speaking", "Bravery and Moral Actions", "66"],
    ["Reading", "The Honest Woodcutter", "67-68"], ["Grammar", "Past Continuous (When / While)", "69"], ["Writing", "My Favourite Story", "70-71"]] }
];
BOOK.units = [];
BOOK.addUnit = function (u) { BOOK.units.push(u); };

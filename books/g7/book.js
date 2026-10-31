/* Book skeleton: the Table of Contents (book pages 11–12). Lesson content is added by data/uN.js. */
window.BOOK = window.BOOK || {};
BOOK.title = "English Pearls of Kuwait";
BOOK.code = "7A";
BOOK.grade = 7;
BOOK.level = "Grade 7 · Student’s Book 7A";
BOOK.storeKey = "pearls7a.v1";
BOOK.pagesInfo = { project: 73, glossary: "74–78", irregular: "79–80", last: 80 };
BOOK.libraryUrl = "../";
BOOK.credit = "Prepared by: Abdullah Alenezi";
BOOK.copyright = "Book content © Ministry of Education – State of Kuwait, 2025. Interactive version for classroom use.";
BOOK.toc = [
  { id: "u1", num: 1, title: "Family and Home", titleAr: "العائلة والمنزل", cover: 17, color: "u1", lessons: [
    ["Reading", "Generations Together", "20-21"], ["Grammar", "Present Simple", "22"], ["Listening", "My Favourite Things", "23"], ["Speaking", "My Daily Routines", "24"],
    ["Reading", "Sharing My Culture", "25-26"], ["Grammar", "Have got / Has got", "27"], ["Writing", "My Dream Home", "28-29"]] },
  { id: "u2", num: 2, title: "School & Responsibility", titleAr: "المدرسة والمسؤولية", cover: 31, color: "u2", lessons: [
    ["Reading", "From My First Day Until Today", "34-35"], ["Grammar", "Have/Has to – Don’t/Doesn’t have to", "36"], ["Listening", "Rules and Ethics in Public Places", "37"], ["Speaking", "Being Responsible at School", "38"],
    ["Reading", "A Life of Kindness", "39-40"], ["Grammar", "Modal Verbs", "41"], ["Writing", "Responsibilities at School", "42-43"]] },
  { id: "u3", num: 3, title: "Safety & Instructions", titleAr: "السلامة والتعليمات", cover: 45, color: "u3", lessons: [
    ["Reading", "Staying Safe", "48-49"], ["Grammar", "Purpose Connectors", "50"], ["Listening", "Signs Save Lives", "51"], ["Speaking", "Say It in Steps", "52"],
    ["Reading", "Kashta to Al-Mutlaa", "53-54"], ["Grammar", "Present Continuous (Present actions / Future plans)", "55"], ["Writing", "Safety Instructions", "56-57"]] },
  { id: "u4", num: 4, title: "Celebrations Around the World", titleAr: "احتفالات حول العالم", cover: 59, color: "u4", lessons: [
    ["Reading", "Celebrations Around the World", "62-63"], ["Grammar", "Countable and Uncountable Nouns (a, an, some, any)", "64"], ["Listening", "Behaviours in Celebrations", "65"], ["Speaking", "Celebrating with Respect", "66"],
    ["Reading", "Celebrating Ramadan in Kuwait", "67-68"], ["Grammar", "Passive Voice (Present Simple - Modals)", "69"], ["Writing", "My Own Celebration!", "70-71"]] }
];
BOOK.units = [];
BOOK.addUnit = function (u) { BOOK.units.push(u); };

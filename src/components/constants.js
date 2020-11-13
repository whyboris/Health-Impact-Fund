// make sure each has an entry in the en.json & other languages!

const board = [
  "Aidan Hollis",
  "Jami Taylor",
  "Sachin Chaturvedi",
  "Thomas Pogge",
  "Tim Gilbert",
];

// must coincide with order of `board`
const boardImages = [
  "Aidan.jpg",
  "Jami.jpg",
  "Sachin.jpg",
  "Thomas.jpg",
  "Tim.jpg",
];

const management = [
  "Aidan Hollis",
  "Peggy Tse",
  "Maria Ginevra Cattaneo",
  "Max Alexander Matthey",
  "Felicitas Holzer",
  "Daniele Botti",
  // "Najid Ahmad",
  // "Özlem Denli",
  "Yasmine Bark",
  "Vikita Mehta",
  "Seung Chan (Kevin) Lee",
  "Boris Yakubchik",
];

// must coincide with order of `management`
const managementImages = [
  "Aidan.jpg",
  "Peggy.jpg",
  "Maria.jpg",
  "Max.jpg",
  "Felicitas.jpg",
  "Daniele.jpg",
  // "",
  // "Ozlem.jpg",
  "Yasmine.jpg",
  "Vikita.jpg",
  "Kevin.jpg",
  "Boris.jpg",
];

const advisors = [
  "Noam Chomsky",
  "John J. DeGioia",
  "Ruth Faden",
  "Paul Farmer",
  "Robert C. Gallo",
  "Professor David Haslam",
  "Paul Martin",
  "Christopher Murray",
  "Gustav Nossal",
  "Baroness Onora O'Neill",
  "James Orbinski",
  "Sir Michael Rawlins",
  "Jan Rosier",
  "Karin Roth",
  "Amartya Sen",
  "Peter Singer",
  "Judith Whitworth",
  "Heidemarie Wieczorek-Zeul",
  "Richard Wilder",
];

const former_advisors = ["Kenneth J. Arrow"];

const scientific_advisors = [
  "Sonali Kochhar",
  "Mary Moran",
  "Carl F. Nathan",
  "Mark V. Pauly",
  "Dorairaj Prabhakaran",
  "Harvey Rubin",
  "Joshua Salomon",
  "Mel Spigelman",
  "Wu Qunhong",
];

const translators = [
  ["Alessandra Tisi", "Italian"],
  ["Danielle Denny", "Portuguese"],
  ["Elena Pribytkova", "Russian"],
  ["Janet Adeogun", "Hausa"],
  ["Li Xiao Zhang / Jacqueline Yao", "Chinese"],
  ["Machiko Ohba Wilson", "Japanese"],
  ["Maria Julia Ochoa", "Spanish"],
  ["Mohamed Lachhab", "Arabic"],
  ["Najid Ahmad", "Urdu"],
  ["Özlem Denli", "Turkish"],
  ["Seung Chan (Kevin) Lee", "Korean"],
  ["Shashank Ganatra", "Hindi"],
];

module.exports = {
  advisors,
  board,
  boardImages,
  former_advisors,
  management,
  managementImages,
  scientific_advisors,
  translators,
};

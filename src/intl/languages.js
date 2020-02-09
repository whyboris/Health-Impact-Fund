// this order dictates the dropdown order and what gets shown
const languageList = [
  `ar`, // Arabic
  `zh`, // Cheneze (Simplified)
  `en`, // English
  `fr`, // French
  `de`, // German
  `hi`, // Hindi
  `it`, // Italian
  `ko`, // Korean
  `es`, // Spanish
  `tr`, // Turkish
  `ur`, // Urdu
  `id`, // ID -- identify the felds
];

// All languages here
const languageSetup = {
  ar: {
    english: `Arabic`,
    native: `عربى`
  },
  de: {
    english: `German`,
    native: `Deutsch`
  },
  en: {
    english: `English`,
    native: `English`
  },
  es: {
    english: `Spanish`,
    native: `Español`
  },
  fr: {
    english: `French`,
    native: `Français`
  },
  hi: {
    english: `Hindi`,
    native: `हिंदी`
  },
  id: {
    english: `ID`,
    native: `Identification`
  },
  it: {
    english: `Italian`,
    native: `Italiano`
  },
  ko: {
    english: `Korean`,
    native: `한국어`
  },
  tr: {
    english: `Turkish`,
    native: `Türk`
  },
  ur: {
    english: `Urdu`,
    native: ` اردو`
  },
  zh: {
    english: `Chinese`,
    native: `中文`
  }
};

module.exports.languageNames = languageSetup;

module.exports.languageList = languageList;

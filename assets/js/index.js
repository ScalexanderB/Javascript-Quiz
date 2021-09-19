// variables for page elements
// time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 60;
let scoreEl = document.querySelector("#score");

// sections

// intro
const introEl = document.querySelector("#intro");

// section questions
const questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let questionCount = 0;
const yesornoEl = document.querySelector("#yesorno");

// section final
const finalEl = document.querySelector("#final");
// user initials
let initialsInput = document.querySelector("#initials");

// section highscores
const highscoresEl = document.querySelector("#highscores");
// ordered list
let scoreListEl = document.querySelector("#score-list");
// array of scores
let scoreList = [];
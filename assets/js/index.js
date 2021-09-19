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

//quiz buttons variables and functions

const startBtn = document.querySelector('#start');

const ansBtn = document.querySelectorAll("button.ansBtn")

const ans1Btn = document.querySelector("#answer1");

const ans2Btn = document.querySelector("#answer2");

const ans3Btn = document.querySelector("#answer3");

const ans4Btn = document.querySelector("#answer4");

// Submit score

const submitScrBtn = document.querySelector("#submit-score");

// Go back

const goBackBtn = document.querySelector("#goback");

// Clear and view scores 

const clearScrBtn = document.querySelector("#clearscores");

const viewScrBtn = document.querySelector("#view-scores");

// array holding question+answer and returning true/false

const questions = [
    {
        //first question
        question: "Which one of the following is also known as a Conditional Expression?",
        answers: ["1. Alternative to if-else", "2. Switch Statement", "3.If-then-else statement", "4.immediate if"],
        correctAnswer: "3"
    },
    {
        //second question
        question: "In Javascript, what is a block of statement?",
        answers: ["1. Conditional Block", "2. Block that combines a number of statements into a single compound statement", "3.Both conditional block and a single statement", "4.Block that constains a single statement"],
        correctAnswer: "1"
    },
    {
        //third question
        question: "The 'function' and 'var' are known as:",
        answers: ["1. Keywords", "2. Data Types", "3.Declaration statements", "4.Prototypes"],
        correctAnswer: "2"
    },
    {
        //fourth question
        question: "Which of the following is the correct way for calling the Javascript code?",
        answers: ["1. Preprocessor", "2. Triggering Event", "3.RMI", "4.Function/Method"],
        correctAnswer: "3"
    },
    {
        //fifth question
        question: "In the Javascript, which of the following is not considered an error?",
        answers: ["1. Syntax error", "2. Missing semicolons", "3.Division by zero", "4.Missing bracket"],
        correctAnswer: "2"
    },
]

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
];

// Quiz functions

//timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionsCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000); 
}

// initiate quiz with timer starting on first question
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// function to set the question
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].questions;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// function to check answer and move on
function checkAnswer(event) {
    event.preventDefault();

    // show yesorno and show message
    yesornoEl.style.display = "block";
    let p = document.createElement("p");
    yesornoEl.appendChild(p);

    // time out after 1 second
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);
    
    // answer check
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "That's right!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "That's wrong.. :("
    }

    // question number increases
    if (questionCount < questions.length) {
        questionCount++;
    }

    setQuestion(questionCount);
}

// add score function
function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    let init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, score: secondsLeft});

    // score sorting
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li);
    }

    // add scores and initials to local storage
    storeScores();
    displayScores();
}
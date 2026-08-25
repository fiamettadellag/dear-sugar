const questions = [
    {
        question: "Beach or Mountains?",
        choices: ["Beach", "Mountains"],
        answer: "Beach"
    },
    {
        question: "Sunrise or Sunset?",
        choices: ["Sunrise", "Sunset"],
        answer: "Sunset"
    },
    {
        question: "Summer or Autumn?",
        choices: ["Summer", "Autumn"],
        answer: "Autumn"
    },
    {
        question: "Rain or Sunshine?",
        choices: ["Rain", "Sunshine"],
        answer: "Rain"
    },
    {
        question: "City or Countryside?",
        choices: ["City", "Countryside"],
        answer: "Countryside"
    },
    {
        question: "Stay in or Go out?",
        choices: ["Stay in", "Go out"],
        answer: "Go out"
    },
    {
        question: "Movie night or Game night?",
        choices: ["Movie night", "Game night"],
        answer: "Movie night"
    },
    {
        question: "Sweet or Savoury?",
        choices: ["Sweet", "Savoury"],
        answer: "Sweet"
    },
    {
        question: "Beach date or City date?",
        choices: ["Beach date", "City date"],
        answer: "Beach date"
    },
    {
        question: "Fancy dinner or Late-night takeaway?",
        choices: ["Fancy dinner", "Late-night takeaway"],
        answer: "Late-night takeaway"
    },
    {
        question: "Plan everything or Be spontaneous?",
        choices: ["Plan everything", "Be spontaneous"],
        answer: "Be spontaneous"
    },
    {
        question: "Books or Films?",
        choices: ["Books", "Films"],
        answer: "Films"
    },
    {
        question: "New York or California?",
        choices: ["New York", "California"],
        answer: "New York"
    },
    {
        question: "Golden hour or Midnight?",
        choices: ["Golden hour", "Midnight"],
        answer: "Midnight"
    },
    {
        question: "Winter nights or Summer nights?",
        choices: ["Winter nights", "Summer nights"],
        answer: "Winter nights"
    }
];

let currentQuestion = 0;
let score = 0;
let results = [];

const questionText = document.getElementById("question");
const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const progressFill = document.getElementById("progressFill");

totalQuestions.textContent = questions.length;

function loadQuestion() {
    const current = questions[currentQuestion];

    questionText.textContent = current.question;
    choiceOne.textContent = current.choices[0];
    choiceTwo.textContent = current.choices[1];

    questionNumber.textContent = currentQuestion + 1;

    progressFill.style.width =
        `${(currentQuestion / questions.length) * 100}%`;
}

function chooseAnswer(choice) {
    const current = questions[currentQuestion];
    const correct = choice === current.answer;

    if (correct) {
        score++;
    }

    results.push({
        question: current.question,
        chosen: choice,
        answer: current.answer,
        correct: correct
    });

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

choiceOne.addEventListener("click", () => {
    chooseAnswer(choiceOne.textContent);
});

choiceTwo.addEventListener("click", () => {
    chooseAnswer(choiceTwo.textContent);
});

function showResults() {
    const correctAnswers = results
        .filter(result => result.correct)
        .map(result => `
            <div class="resultItem correctResult">
                <strong>♡ ${result.question}</strong>
                <p>You both chose: ${result.answer}</p>
            </div>
        `)
        .join("");

    const wrongAnswers = results
        .filter(result => !result.correct)
        .map(result => `
            <div class="resultItem wrongResult">
                <strong>${result.question}</strong>
                <p>You chose: ${result.chosen}</p>
                <p>I chose: ${result.answer}</p>
            </div>
        `)
        .join("");

    document.querySelector(".questionBox").innerHTML = `
        <div class="results">

            <span class="littleHeart">♡</span>

            <h2>${score} out of ${questions.length} matches!</h2>

            <p class="resultsIntro">
                Let's see how well you really know me...
            </p>

            <div class="resultsSection">
                <h3>♡ What we matched on</h3>
                ${correctAnswers || "<p>Not this time... ♡</p>"}
            </div>

            <div class="resultsSection">
                <h3>What you got wrong</h3>
                ${wrongAnswers || "<p>You got every single one right?! ♡</p>"}
            </div>

            <button class="choiceButton restartButton" onclick="restartGame()">
                Play again ↻
            </button>

        </div>
    `;

    progressFill.style.width = "100%";
}

function restartGame() {
    location.reload();
}

function goHome() {
    window.location.href = "index.html";
}

loadQuestion();
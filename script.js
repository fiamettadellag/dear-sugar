// Get all sections
const landing = document.getElementById("landing");
const home = document.getElementById("home");
const lettersPage = document.getElementById("lettersPage");
const reasonsPage = document.getElementById("reasonsPage");
const songsPage = document.getElementById("songsPage");
const moviesPage = document.getElementById("moviesPage");
const gamePage = document.getElementById("gamePage");

// Hide every page except the one we want
function showPage(page){

    landing.style.display = "none";
    home.style.display = "none";
    lettersPage.style.display = "none";
    reasonsPage.style.display = "none";
    songsPage.style.display = "none";
    moviesPage.style.display = "none";
    gamePage.style.display = "none";

    page.style.display = "block";
}

// Landing button
document.getElementById("beginButton").addEventListener("click", () => {
    showPage(home);
});

// Home buttons
document.getElementById("lettersBtn").addEventListener("click", () => {
    showPage(lettersPage);
});

document.getElementById("reasonsBtn").addEventListener("click", () => {
    showPage(reasonsPage);
});

document.getElementById("songsBtn").addEventListener("click", () => {
    showPage(songsPage);
});

document.getElementById("moviesBtn").addEventListener("click", () => {
    showPage(moviesPage);
});

// Every back button returns home
document.querySelectorAll(".backBtn").forEach(button => {

    button.addEventListener("click", () => {
        showPage(home);
    });

});

// Start on landing page
showPage(landing);

const letterButtons = document.querySelectorAll(".letterBtn");

letterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        const isOpen = content.style.display === "block";

        document.querySelectorAll(".letterContent").forEach(letter => {
            letter.style.display = "none";
        });

        if (!isOpen) {
            content.style.display = "block";
        }

    });

});

// =========================
// Catch My Love - Part 1
// =========================

// Get game elements
const gameBtn = document.getElementById("gameBtn");
const gameBack = document.getElementById("gameBack");

const startGame = document.getElementById("startGame");
const playAgain = document.getElementById("playAgain");

const gameContainer = document.getElementById("gameContainer");
const score = document.getElementById("score");
const basket = document.getElementById("basket");

const popupMessage = document.getElementById("popupMessage");
const gameComplete = document.getElementById("gameComplete");
const finalLetter = document.getElementById("finalLetter");

// Open the game
gameBtn.addEventListener("click", () => {

    showPage(gamePage);

    gameContainer.style.display = "none";
    gameComplete.style.display = "none";
    popupMessage.style.display = "none";
    finalLetter.style.display = "none";

    heartsCaught = 0;
    score.innerHTML = "❤️ 0 / 100";

    gameRunning = false;
    clearInterval(heartInterval);

});

// Back button
gameBack.addEventListener("click", () => {

    showPage(home);

});

// Messages
const messages = {

    10: "I hope you are enjoying the game",

    20: "20 hearts, keep going i think i mean a lot more than that..xox",

    30: "Every heart you catch is one more closer to my own(idk if that makes sense btw but ykwim)",

    40: "I am always always so proud of you",

    50: "Halfway there sugar, you mean the world to me",

    60: "You are so definitely my favourite person",

    70: "You are so amazing diva baddie slay xox",

    80: "okay look at you catching all these hearts well done",

    90: "You mean more to me than you will ever know. You are my everything and more always and forever (only 10 more keep on going xo)",

};

let heartsCaught = 0;

// Start button
startGame.addEventListener("click", () => {

    heartsCaught = 0;

    score.innerHTML = "❤️ 0 / 100";

    gameContainer.style.display = "block";

    gameComplete.style.display = "none";

});

// =========================
// Catch My Love - Part 2
// =========================

let basketX = gameContainer.offsetWidth / 2;

basket.style.left = basketX + "px";

function moveBasket(x){

    const rect = gameContainer.getBoundingClientRect();

    basketX = x - rect.left;

    if(basketX < 35) basketX = 35;

    if(basketX > rect.width - 35) basketX = rect.width - 35;

    basket.style.left = basketX + "px";

}

// Desktop
gameContainer.addEventListener("mousemove",(e)=>{

    moveBasket(e.clientX);

});

// Mobile
gameContainer.addEventListener("touchmove",(e)=>{

    moveBasket(e.touches[0].clientX);

});

let gameRunning = false;

let heartInterval;

function createHeart(){

    if(!gameRunning) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * (gameContainer.offsetWidth - 40) + "px";

    heart.style.top = "-40px";

    gameContainer.appendChild(heart);

    let y = -40;

    const fall = setInterval(()=>{
        
        if(!gameRunning) return;
        
        y += 4;

        heart.style.top = y + "px";

        const heartRect = heart.getBoundingClientRect();

        const basketRect = basket.getBoundingClientRect();

        if(

            heartRect.bottom >= basketRect.top &&

            heartRect.left < basketRect.right &&

            heartRect.right > basketRect.left

        ){

            clearInterval(fall);

            heart.remove();

            heartsCaught++;

            score.innerHTML = `❤️ ${heartsCaught} / 100`;

if(messages[heartsCaught]){

    clearInterval(heartInterval);
    gameRunning = false;

    popupMessage.innerHTML = `

<p>${messages[heartsCaught]}</p>

<button id="continueGame">Keep Going, Sugar 💖</button>

`;

    popupMessage.style.display = "block";

    document.getElementById("continueGame").addEventListener("click",()=>{

        popupMessage.style.display = "none";

        gameRunning = true;

        heartInterval = setInterval(createHeart,700);

    });

}

// Finished
if(heartsCaught >= 100){

    gameRunning = false;

    clearInterval(heartInterval);

    finalLetter.style.display = "block";

    gameComplete.style.display = "block";

}
        }

        if(y > gameContainer.offsetHeight){

            clearInterval(fall);

            heart.remove();

        }

    },20);

}

startGame.addEventListener("click",()=>{

    gameRunning = true;

    gameComplete.style.display = "none";
    finalLetter.style.display = "none";
    popupMessage.style.display = "none";

    heartInterval = setInterval(createHeart,700);

});

playAgain.addEventListener("click",()=>{

    document.querySelectorAll(".heart").forEach(h=>h.remove());

    heartsCaught = 0;

    score.innerHTML = "❤️ 0 / 100";

    gameComplete.style.display = "none";

    gameRunning = true;

    clearInterval(heartInterval);

    heartInterval = setInterval(createHeart,700);

});

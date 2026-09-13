// Get all sections
const landing = document.getElementById("landing");
const home = document.getElementById("home");
const lettersPage = document.getElementById("lettersPage");
const reasonsPage = document.getElementById("reasonsPage");
const songsPage = document.getElementById("songsPage");
const moviesPage = document.getElementById("moviesPage");
const gamePage = document.getElementById("gamePage");
const moodPage = document.getElementById("moodPage");
const proposalPage = document.getElementById("proposalPage");
const bouquetPage = document.getElementById("bouquetPage");
const augustBouquetPage = document.getElementById("augustBouquetPage");
const scrapbookPage = document.getElementById("scrapbookPage");
const remindersPage = document.getElementById("remindersPage");
let birthdayGreetingShown = false;
// Hide every page except the one we want
function showPage(page){

    const pages = [
        landing,
        home,
        lettersPage,
        reasonsPage,
        songsPage,
        moviesPage,
        gamePage,
        moodPage,
        proposalPage,
        bouquetPage,
        augustBouquetPage,
        scrapbookPage,
        remindersPage
    ];

    pages.forEach(section => {
        if(section){
            section.style.display = "none";
        }
    });

    if(page){
        page.style.display = "block";
    }
}

// Landing button
const beginButton = document.getElementById("beginButton");

if(beginButton){
    beginButton.addEventListener("click", () => {

        showPage(home);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// Home buttons
document.getElementById("scrapbookBtn").addEventListener("click", () => {

    showPage(scrapbookPage);

    currentScrapbookSpread = 0;
    showScrapbookSpread();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

document.getElementById("remindersBtn").addEventListener("click", () => {

    showPage(remindersPage);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

document.getElementById("lettersBtn").addEventListener("click", () => {
    showPage(lettersPage);
});

document.getElementById("bouquetBtn").addEventListener("click", () => {

    showPage(bouquetPage);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const augustBouquetBtn = document.getElementById("augustBouquetBtn");

if (augustBouquetBtn) {
    augustBouquetBtn.addEventListener("click", () => {

        showPage(augustBouquetPage);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

document.getElementById("reasonsBtn").addEventListener("click", () => {
    showPage(reasonsPage);
});

document.getElementById("songsBtn").addEventListener("click", () => {
    showPage(songsPage);
});

document.getElementById("moviesBtn").addEventListener("click", () => {
    showPage(moviesPage);
});

document.getElementById("moodBtn").addEventListener("click", () => {

    showPage(moodPage);

});


document.getElementById("proposalBtn").addEventListener("click", () => {

    document
        .getElementById("specialDelivery")
        .style
        .setProperty("display", "block", "important");

    document
        .getElementById("proposalLetter")
        .style
        .setProperty("display", "none", "important");

    document
        .getElementById("weddingInvite")
        .style
        .setProperty("display", "none", "important");

    document
        .getElementById("vowsSection")
        .style
        .setProperty("display", "none", "important");

    document
        .getElementById("ceremonySection")
        .style
        .setProperty("display", "none", "important");

    document
        .getElementById("certificateSection")
        .style
        .setProperty("display", "none", "important");

    showPage(proposalPage);

});

// Back buttons
document.querySelectorAll(".backBtn").forEach(button => {

    button.addEventListener("click", () => {

        if (button.closest("#augustBouquetPage")) {

            showPage(bouquetPage);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {
    showPage(home);

    const birthdayGreeting =
        document.getElementById("birthdayGreeting");

    if (birthdayGreeting) {
        birthdayGreeting.style.display = "none";
    }
}

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
    score.innerHTML = "♡ 0 / 100"

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

    score.innerHTML = "♡ 0 / 100"

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

    heart.innerHTML = "♡";

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

            score.innerHTML = `♡ ${heartsCaught} / 100`;

if(messages[heartsCaught]){

    clearInterval(heartInterval);
    gameRunning = false;

    popupMessage.innerHTML = `

<p>${messages[heartsCaught]}</p>

<button id="continueGame">Keep Going, Sugar ♡</button>

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

    score.innerHTML = "♡ 0 / 100"

    gameComplete.style.display = "none";

    gameRunning = true;

    clearInterval(heartInterval);

    heartInterval = setInterval(createHeart,700);

});

// =========================
// Mood Check
// =========================

const moodMessage = document.getElementById("moodMessage");
const moodCards = document.querySelectorAll(".moodCard");

const moodMessages = {

    happy: `
        <h3>I'm Happy You're Happy ♡</h3>

        <p>
            Well i am so very glad that you are happy, thats all i wish for you. Enjoy the day or night whenever you are reading this dont worry about how long it will last, live in the moment sugar. Write down what has made you happy, listen to a song that will enhance the feeling or even share that happiness with someone else xoxo
        </p>
    `,

    sad: `
        <h3>When You're Feeling Sad ♡</h3>

        <p>
            Im sorry today isn't the best, but i do know one thing, i know that this rain cloud will soon go away. be kind to yourself today more than you would any other day. You are still my favourite person, even when do feel like running away to new york. Dont worry be happy sugar xoxo
        </p>
    `,

    anxious: `
        <h3>When You're Feeling Anxious ♡</h3>

        <p>
            Its okay, its not as bad as it seems i can promise you that, your brain is making it ten times worse than it actually is. Take a minute to slow down, breathe and take things one at a time. Drop your shoulders unclench your jaw and breathe dont think about anything, breathe in for four and out for six. Youre okay sugar i promis xoxo
        </p>
    `,

    overthinking: `
        <h3>When You're Overthinking ♡</h3>

        <p>
            You have too many tabs open in your brain, its okay dont worry where its all coming from or what the cause is, not every thought needs an answer and not every worry needs your attention. Write down one thought that keeps doing circles in your head. Once its on the page leave it and go on about your day xoxo
        </p>
    `,

    missing: `
        <h3>When You're Missing Me ♡</h3>

        <p>
            Its okay soemtimes i miss me too, but hey thats okay you let a tear to two out its alright i wont judge xx Look through our messsages maybe reminice a bit listen to a song that reminds you of me, for the record i miss you too xoxo
        </p>
    `,

    tired: `
        <h3>When You're Tired ♡</h3>

        <p>
            You can sleep its okay, no doubt we were probably meant to watch our show tonight, but one of us probably got tired and in this case its your, its okay we can alway watch tomorrow, get comfy and cosy and ready to sleep, dream as much as you can about me sleepwell sugar xoxo
        </p>
    `,

    angry: `
        <h3>When You're Angry ♡</h3>

        <p>
             Whoever or whatever has annoyed you dont bother giving them the time or energy of your day, they arent worth your thoughts. Youre allowed to be angry thats okay, but dont give anyone the satisfaction of you turing into she-hulk. Step away for a couple minutesbefore respondinf to anyone, shake yoour hands and take a couple minutes to collect yourself. Then when youre ready tell me the story xoxo
        </p>
    `,

    unmotivated: `
        <h3>When You're Unmotivated ♡</h3>

        <p>
            You don't need to conquer the world today, the world is well massive so i think you would be quite exhausted even if you tried to. One small thing still counts and i will proudly celebrate it just like you won an oscar award (i think that what its called..?) Pick one task that is quick, once its finished continue or have a break and declare yourself sucsessful
        </p>
    `

};

moodCards.forEach(card => {

    card.addEventListener("click", () => {

        const selectedMood = card.dataset.mood;

        moodMessage.innerHTML = `

            ${moodMessages[selectedMood]}

            <button class="feelBetterBtn">
                I Feel Better ♡
            </button>

        `;

        moodMessage.style.display = "block";

        moodMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

       moodMessage
    .querySelector(".feelBetterBtn")
    .addEventListener("click", () => {

        moodMessage.innerHTML = `

            <div class="happyEnding">

                <div class="floatingHearts">
                    <span>💖</span>
                    <span>❤️</span>
                    <span>💗</span>
                </div>

                <h3>I'm glad, Sugar ♡</h3>

                <p>
                    Come back whenever you need me.<br>
                    I'll always be here.
                </p>

                <button class="backToMoodsBtn">
                    Back to Mood Check
                </button>

            </div>

        `;

        moodMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        moodMessage
            .querySelector(".backToMoodsBtn")
            .addEventListener("click", () => {

                moodMessage.style.display = "none";

                document.querySelector(".moodGrid").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

             });

         }); 

     });

  });
// =========================
// Proposal and Wedding
// =========================

const openLetterBtn = document.getElementById("openLetterBtn");
const proposalYesBtn = document.getElementById("proposalYesBtn");
const inviteToVowsBtn = document.getElementById("inviteToVowsBtn");
const vowsToCeremonyBtn = document.getElementById("vowsToCeremonyBtn");
const iDoBtn = document.getElementById("iDoBtn");
const weddingHomeBtn = document.getElementById("weddingHomeBtn");

function hideWeddingStep(id){
    document
        .getElementById(id)
        .style
        .setProperty("display", "none", "important");
}

function showWeddingStep(id){
    document
        .getElementById(id)
        .style
        .setProperty("display", "block", "important");
}


/* OPEN LETTER */

openLetterBtn.addEventListener("click", () => {

    hideWeddingStep("specialDelivery");
    showWeddingStep("proposalLetter");

    document.getElementById("proposalLetter").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});


/* YES */

proposalYesBtn.addEventListener("click", () => {

    hideWeddingStep("proposalLetter");
    showWeddingStep("weddingInvite");

    document.getElementById("weddingInvite").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});


/* INVITATION TO VOWS */

inviteToVowsBtn.addEventListener("click", () => {

    hideWeddingStep("weddingInvite");
    showWeddingStep("vowsSection");

    document.getElementById("vowsSection").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});


/* VOWS TO CEREMONY */

vowsToCeremonyBtn.addEventListener("click", () => {

    hideWeddingStep("vowsSection");
    showWeddingStep("ceremonySection");

    document.getElementById("ceremonySection").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});


/* I DO */

iDoBtn.addEventListener("click", () => {

    hideWeddingStep("ceremonySection");
    showWeddingStep("certificateSection");

    document.getElementById("certificateSection").scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});


/* BACK HOME */

weddingHomeBtn.addEventListener("click", () => {

    showPage(home);

});

// =========================
// Our Scrapbook - Real Page Flip
// =========================

const scrapbookBook = document.querySelector(".scrapbookBook");
const scrapbookSpreads = Array.from(
    document.querySelectorAll(".scrapbookSpread")
);

const scrapbookPrev = document.getElementById("scrapbookPrev");
const scrapbookNext = document.getElementById("scrapbookNext");
const scrapbookCounter = document.getElementById("scrapbookCounter");

let currentScrapbookSpread = 0;
let scrapbookIsFlipping = false;


const scrapbookLabels = [
    "Cover",
    "Pages 1–2",
    "Pages 3–4",
    "Page 5"
];



function updateScrapbookControls(){

    scrapbookCounter.textContent =
        scrapbookLabels[currentScrapbookSpread];

    scrapbookPrev.disabled =
        scrapbookIsFlipping ||
        currentScrapbookSpread === 0;

    scrapbookNext.disabled =
        scrapbookIsFlipping ||
        currentScrapbookSpread === scrapbookSpreads.length - 1;


    scrapbookPrev.style.opacity =
        currentScrapbookSpread === 0
            ? ".3"
            : "1";

    scrapbookNext.style.opacity =
        currentScrapbookSpread === scrapbookSpreads.length - 1
            ? ".3"
            : "1";
}



function showScrapbookSpread(){

    scrapbookSpreads.forEach((spread, index) => {

        spread.classList.remove(
            "active",
            "underSpread",
            "turnBaseForward",
            "turnBaseBack"
        );

        if(index === currentScrapbookSpread){
            spread.classList.add("active");
        }

    });

    updateScrapbookControls();
}



/* =========================================
   OPEN THE FRONT COVER
========================================= */

function openScrapbookCover(){

    if(scrapbookIsFlipping) return;

    scrapbookIsFlipping = true;
    updateScrapbookControls();


    const coverSpread = scrapbookSpreads[0];
    const nextSpread = scrapbookSpreads[1];

    const cover =
        coverSpread.querySelector(".scrapbookCover");


    coverSpread.classList.add("active");

/* wait until the cover reaches the centre before revealing the pages */
setTimeout(() => {

    nextSpread.classList.add("underSpread");

}, 720);

    cover.style.transformOrigin = "left center";
    cover.style.transformStyle = "preserve-3d";
    cover.style.backfaceVisibility = "hidden";


    const animation = cover.animate(

        [
            {
                transform:"rotateY(0deg)"
            },

            {
                transform:"rotateY(-82deg)",
                offset:.48
            },

            {
                transform:"rotateY(-100deg)",
                offset:.58
            },

            {
                transform:"rotateY(-180deg)"
            }
        ],

        {
            duration:1400,

            easing:
                "cubic-bezier(.55,.05,.25,1)",

            fill:"forwards"
        }

    );


    animation.onfinish = () => {

        animation.cancel();

        cover.style.transform = "";
        cover.style.transformOrigin = "";
        cover.style.transformStyle = "";
        cover.style.backfaceVisibility = "";

        currentScrapbookSpread = 1;

        scrapbookIsFlipping = false;

        showScrapbookSpread();

    };

}



/* =========================================
   CLOSE THE FRONT COVER
========================================= */

function closeScrapbookCover(){

    if(scrapbookIsFlipping) return;

    scrapbookIsFlipping = true;
    updateScrapbookControls();


    const coverSpread = scrapbookSpreads[0];

    const coverOriginal =
        coverSpread.querySelector(".scrapbookCover");

    const cover =
        coverOriginal.cloneNode(true);


    cover.classList.add("closingScrapbookCover");


    cover.style.position = "absolute";

    cover.style.left = "50%";
    cover.style.top = "50%";

    cover.style.margin = "0";

    cover.style.zIndex = "40";

    cover.style.transformOrigin = "left center";

    cover.style.transformStyle = "preserve-3d";


    scrapbookBook.appendChild(cover);


    const animation = cover.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) rotateY(-180deg)"
            },

            {
                transform:
                    "translate(-50%, -50%) rotateY(-95deg)",
                offset:.48
            },

            {
                transform:
                    "translate(-50%, -50%) rotateY(-78deg)",
                offset:.58
            },

            {
                transform:
                    "translate(-50%, -50%) rotateY(0deg)"
            }
        ],

        {
            duration:1400,

            easing:
                "cubic-bezier(.55,.05,.25,1)",

            fill:"forwards"
        }

    );


    animation.onfinish = () => {

        cover.remove();

        currentScrapbookSpread = 0;

        scrapbookIsFlipping = false;

        showScrapbookSpread();

    };

}



/* =========================================
   TURN A PAPER PAGE
========================================= */

function turnScrapbookPage(direction){

    if(scrapbookIsFlipping) return;

    scrapbookIsFlipping = true;
    updateScrapbookControls();


    const current =
        scrapbookSpreads[currentScrapbookSpread];


    const targetIndex =
        direction === "forward"
            ? currentScrapbookSpread + 1
            : currentScrapbookSpread - 1;


    const target =
        scrapbookSpreads[targetIndex];


    /* page being lifted */

    const frontPage =
        direction === "forward"
            ? current.querySelector(".rightSheet")
            : current.querySelector(".leftSheet");


    /* page on the back of the paper */

    const backPage =
        direction === "forward"
            ? target.querySelector(".leftSheet")
            : target.querySelector(".rightSheet");


    if(!frontPage || !backPage){

        scrapbookIsFlipping = false;

        currentScrapbookSpread = targetIndex;

        showScrapbookSpread();

        return;
    }



    /* next spread sits underneath */

    target.classList.add("underSpread");


    if(direction === "forward"){

        current.classList.add(
            "active",
            "turnBaseForward"
        );

    }else{

        current.classList.add(
            "active",
            "turnBaseBack"
        );

    }



    /* create the physical sheet */

    const leaf = document.createElement("div");

    leaf.className =
        direction === "forward"
            ? "scrapbookFlipLeaf flipForward"
            : "scrapbookFlipLeaf flipBack";



    /* front side */

    const front =
        frontPage.cloneNode(true);

    front.classList.add(
        "scrapbookFlipFace",
        "scrapbookFlipFront"
    );



    /* back side */

    const back =
        backPage.cloneNode(true);

    back.classList.add(
        "scrapbookFlipFace",
        "scrapbookFlipBack"
    );



    leaf.appendChild(front);
    leaf.appendChild(back);

    scrapbookBook.appendChild(leaf);



    leaf.addEventListener(
        "animationend",
        () => {

            leaf.remove();

            currentScrapbookSpread =
                targetIndex;

            scrapbookIsFlipping = false;

            showScrapbookSpread();

        },

        {
            once:true
        }
    );

}



/* =========================================
   ARROWS
========================================= */

scrapbookNext.addEventListener("click", () => {

    if(scrapbookIsFlipping) return;


    /* front cover */

    if(currentScrapbookSpread === 0){

        openScrapbookCover();

        return;
    }


    if(
        currentScrapbookSpread <
        scrapbookSpreads.length - 1
    ){

        turnScrapbookPage("forward");

    }

});

scrapbookPrev.addEventListener("click", () => {

    if(scrapbookIsFlipping) return;

    /* close book */

    if(currentScrapbookSpread === 1){

        closeScrapbookCover();

        return;
    }

    if(currentScrapbookSpread > 1){

        turnScrapbookPage("back");

    }

});


showScrapbookSpread();

/* =========================================
   JESS'S BIRTHDAY MODE
========================================= */

const today = new Date();

const isJessBirthday =
    today.getMonth() === 8 &&
    today.getDate() === 13;


if (isJessBirthday) {
    document.body.classList.add("jessBirthday");
}


const birthdayGreeting =
    document.getElementById("birthdayGreeting");

const birthdayWishes =
    document.querySelector(".birthdayWishes");

const birthdaySurpriseSection =
    document.querySelector(".birthdaySurpriseSection");

const birthdayCakeSection =
    document.querySelector(".birthdayCakeSection");


/* Hide birthday content until Let's Begin */

if (isJessBirthday) {

    if (birthdayWishes) {
        birthdayWishes.style.display = "none";
    }

    if (birthdaySurpriseSection) {
        birthdaySurpriseSection.style.display = "none";
    }

    if (birthdayCakeSection) {
        birthdayCakeSection.style.display = "none";
    }


} else {

    if (birthdayWishes) {
        birthdayWishes.style.display = "none";
    }

    if (birthdaySurpriseSection) {
        birthdaySurpriseSection.style.display = "none";
    }

    if (birthdayCakeSection) {
        birthdayCakeSection.style.display = "none";
    }

    if (birthdayGreeting) {
        birthdayGreeting.style.display = "none";
    }

}


/* Birthday entrance */

if (isJessBirthday) {

    document
        .getElementById("beginButton")
        .addEventListener("click", () => {

            if (birthdayGreetingShown) return;

            birthdayGreetingShown = true;


            if (birthdayCakeSection) {
                birthdayCakeSection.style.display = "block";
            }

            if (birthdayWishes) {
                birthdayWishes.style.display = "block";
            }

            if (birthdaySurpriseSection) {
                birthdaySurpriseSection.style.display = "block";
            }


            if (birthdayGreeting) {

                birthdayGreeting.style.display = "flex";

                birthdayGreeting.style.animation = "none";

                void birthdayGreeting.offsetWidth;

                birthdayGreeting.style.animation = "";

            }


            setTimeout(() => {

                const heartShades = [
                    "#C94F6D",
                    "#D45A78",
                    "#C63F63",
                    "#B83F5A",
                    "#E06A87",
                    "#D9828F",
                    "#B94E6B",
                    "#A93655",
                    "#E7839A",
                    "#CC5C78"
                ];


                for (let i = 0; i < 60; i++) {

                    const heart =
                        document.createElement("div");

                    heart.className =
                        "birthdayHeart";

                    heart.innerHTML = "♡";

                    heart.style.left =
                        Math.random() * 100 + "vw";

                    heart.style.color =
                        heartShades[
                            Math.floor(
                                Math.random() *
                                heartShades.length
                            )
                        ];

                    heart.style.animationDelay =
                        Math.random() * 5 + "s";

                    heart.style.animationDuration =
                        (5 + Math.random() * 5) + "s";

                    heart.style.fontSize =
                        (13 + Math.random() * 16) + "px";

                    heart.style.opacity =
                        (0.7 + Math.random() * 0.3)
                            .toFixed(2);

                    document.body.appendChild(heart);

                }


                if (birthdayGreeting) {
                    birthdayGreeting.classList.add(
                        "birthdayGreetingPop"
                    );
                }

            }, 400);

        });

}


/* =========================================
   BIRTHDAY GIFT OPENING
========================================= */

/* =========================================
   BIRTHDAY GIFT OPENING
========================================= */

function openBirthdayGift(){

    const giftBox =
        document.querySelector(".birthdayGiftBox");

    if(giftBox){
        giftBox.classList.add("giftOpening");

        setTimeout(() => {
            giftBox.classList.remove("giftOpening");
        }, 900);
    }

}

/* =========================
   BIRTHDAY CAKE
   ========================= */

const birthdayCake = document.getElementById("birthdayCake");
const birthdayCakeButton = document.getElementById("birthdayCakeButton");
const birthdayCakeWish = document.getElementById("birthdayCakeWish");
const birthdayCakeImage = document.getElementById("birthdayCakeImage");
const cakeSmoke = document.getElementById("cakeSmoke");

let cakeStarted = false;
let cakeBlown = false;

if (
    birthdayCake &&
    birthdayCakeButton &&
    birthdayCakeWish &&
    birthdayCakeImage
) {

    birthdayCakeButton.addEventListener("click", function () {

        /* FIRST CLICK — MAKE A WISH */

        if (!cakeStarted) {

            cakeStarted = true;

            birthdayCakeWish.textContent = "Make a wish ♡";
            birthdayCakeWish.classList.add("showWish");

            birthdayCakeButton.textContent = "♡ DONE";

            birthdayCakeButton.classList.add("cakeReady");

            return;
        }


        /* SECOND CLICK — BLOW OUT CANDLES */

        if (!cakeBlown) {

            cakeBlown = true;

            birthdayCake.classList.add("cakeBlown");


            /* Smoke */

            if (cakeSmoke) {
                cakeSmoke.classList.add("smoking");
            }


            /* Change cake */

            setTimeout(function () {

                birthdayCakeImage.src = "cake-blown.png";

            }, 250);


           /* Change message immediately */

birthdayCakeWish.textContent =
    "I hope your wish comes true. ♡";


            /* Show WISH MADE */

            birthdayCakeButton.textContent = "♡ WISH MADE";


            /* Reset after 2 seconds */

            setTimeout(function () {

                birthdayCakeButton.textContent =
                    "♡ CLICK THE CAKE";

                birthdayCakeButton.disabled = false;

                cakeStarted = false;
                cakeBlown = false;


                birthdayCakeWish.classList.remove(
                    "showWish"
                );

                birthdayCakeWish.textContent =
                    "I hope your wish comes true. ♡";


                birthdayCake.classList.remove(
                    "cakeBlown"
                );


                if (cakeSmoke) {
                    cakeSmoke.classList.remove(
                        "smoking"
                    );
                }


                birthdayCakeImage.src =
                    "cake-transparent.png";

            }, 2000);

        }

    });

}  

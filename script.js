// Get all sections
const landing = document.getElementById("landing");
const home = document.getElementById("home");
const lettersPage = document.getElementById("lettersPage");
const reasonsPage = document.getElementById("reasonsPage");
const songsPage = document.getElementById("songsPage");
const moviesPage = document.getElementById("moviesPage");

// Hide every page except the one we want
function showPage(page){

    landing.style.display = "none";
    home.style.display = "none";
    lettersPage.style.display = "none";
    reasonsPage.style.display = "none";
    songsPage.style.display = "none";
    moviesPage.style.display = "none";

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
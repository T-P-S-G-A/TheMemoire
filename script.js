const cards = document.querySelectorAll('.card');
let flippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // to prevent clicking when two cards are being compared
let matchedPairs = 0;
const totalPairs = cards.length / 2; // total number of pairs in the game
const winSound = new Audio('./sounds/win.mp3');
const flipSound = new Audio('./sounds/flip.mp3');

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos; // CSS property to change the order of flex items :)
  });
})();


function flipCard() {
    if (lockBoard) return; // to prevent clicking when two cards are being compared
    if (this ===firstCard) return; // this will prevent double clicking of the same card :)
    if (this.classList.contains('flipped')) return; // prevent clicking on already flipped cards


    this.textContent = this.dataset.card; // reveal the image on the card
    flipSound.currentTime = 0; 
    flipSound.play();
    this.classList.add('flipped');

    if (!flippedCard){
        flippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    lockBoard = true; // lock the board until we check for a match
    checkMatch(); // a function to check if the two cards clicked even match
}

function checkMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        const card1 = firstCard;
        const card2 = secondCard;

        card1.style.backgroundColor = '#7a4cafff'; 
        card2.style.backgroundColor = '#7a4cafff'; 

        reset(); // a function to reset the variables of firstCard, secondCard, flippedCard
        
        if (++matchedPairs === totalPairs) {
            setTimeout(showwin, 500); // show win screen if all pairs are matched
        }
    } else {
        setTimeout (() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            reset();
        }, 500);
    }
}

function reset() {
    [firstCard, secondCard, flippedCard] = [null, null, false];
    lockBoard = false;
}

function showwin() {
    winSound.play();
    const winscreen = document.createElement('div');
    winscreen.classList.add('win-screen');
    winscreen.innerHTML = `
    <h2>🎉 Congratulations! You Win! 🎉</h2>
    <button class="button" onclick="location.reload()">Replay</button>
    <button class="button" onclick="window.location.href='index.html'">Exit</button>`
    ;
    document.body.appendChild(winscreen);
}
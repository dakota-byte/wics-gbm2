let cards = document.getElementsByClassName('card');
let drawBtn = document.getElementById('draw-button');
let restartBtn = document.getElementById('restart-game-button');
let randomBtn = document.getElementById('random-button');
let displayedCards = [];
let drawnCards = [];
let currentCard = 0;

/*
  A function that returns a random integer in range of [min, max].
*/
function getRandomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}

/*
  A function that returns a random card number that is not seen in given cardSet.
*/
function pickRandomCard(cardSet){
  let cardNum= getRandomInt(1,20);
  cardSet.push(cardNum);
  return cardNum;
}

drawBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  const cardImgElem = document.getElementById('drawn-card');
  const gameBoard = document.querySelector('.game-board');
  cardNum = pickRandomCard(drawnCards);
  cardImgElem.src = `./images/cards/${cardNum}.png`;

  if(currentCard < 16){
    const boardImgElem = cards[currentCard];
    boardImgElem.style.backgroundImage = 'url(./images/cards/' + cardNum + '.png)';
    currentCard++;
  } else {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.backgroundImage = 'url(./images/cards/' + cardNum + '.png)';
    gameBoard.appendChild(newCard);
  }
});

restartBtn.addEventListener('click', () => {
  window.location.reload();
});

/*
  Here, we will iterate each card block from cards collection & do the following:
    1) Pick 16 random card images, which will be displayed at each card block element respectively.
    2) Update id attribute of its child element to corresponding card number.
*/
randomBtn.addEventListener('click', () => {
  currentCard = 16;
  for(let i = 0; i < cards.length; i++){
    // Define current card & its corresponding index on gameboard
    const currentCard = cards[i];
    
    // Pick a random card to be displayed on card board
    const cardNum = pickRandomCard(displayedCards);
    
    // Set corresponding card image as current card block's background
    currentCard.style.backgroundImage = 'url(./images/cards/' + cardNum + '.png)';
  }
});
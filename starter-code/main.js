// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.')
// }

var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/king.png'>";
	}
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = "<img src='images/queen.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert ("It's a match!");
	} else {
		alert ("Try again!");
	}
}

createBoard ();
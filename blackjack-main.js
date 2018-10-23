//---------------------------GLOBAL VARIABLES--------------------------------------

//Window height and width
var w = window.innerWidth;
var h = window.innerHeight;
var fontMultiplier = ""+w/40;
var secondFontMultiplier = ""+w/50;
var cardSpacingMultipler = w/30;

//Canvas and context
var canvas = document.getElementById('myCanvas');
var draw = document.getElementById("myCanvas").getContext("2d");

//Game variables
var gameStarted = false;
var gameOver = false;

//Player's hands and hand totals
var hands = [[]];
var handsTotals = [];
handsTotals[0] = 0; handsTotals[1] = 0; handsTotals[2] = 0; handsTotals[3] = 0;
var numberOfAces=0;
var numberOfPlayerCards=0;
var cardPosition=10;

//Dealer's hand and hand total
var dealerHand = [];
var dealerHandTotal = 0;
var dealerNumberOfAces = 0;
var dealerCardPosition=10;
var numberOfDealerCards=0;
//Used for handling excess user clicks
var waiting = false;

//---------------------------------------------------------------------------------

function resetGame()
{
	//Window height and width
	w = window.innerWidth;
	h = window.innerHeight;
	fontMultiplier = ""+w/40;
	secondFontMultiplier = ""+w/50;
	cardSpacingMultipler = w/30;

	//Game variables
	gameStarted = false;
	gameOver = false;

	//Player's hands and hand totals
	hands = [[]];
	handsTotals = [];
	handsTotals[0] = 0; handsTotals[1] = 0; handsTotals[2] = 0; handsTotals[3] = 0;
	numberOfAces=0;
	numberOfPlayerCards=0;
	cardPosition=10;

	//Dealer's hand and hand total
	dealerHand = [];
	dealerHandTotal = 0;
	dealerNumberOfAces = 0;
	dealerCardPosition=10;
	numberOfDealerCards=0;

	setupCanvas();
	drawPokerTable();	
	document.getElementById('myCanvas').click();	
	drawHandTotalBox();
	drawDealerHandTotalBox();

}

//Generates a random number 1 to 52
function genRandomNumber()
{
	return Math.floor((Math.random() * 52) + 1);
}

//Returns card initials
function getCardDetails(x)
{
	switch(x){case 1: return "A"; case 2: return "A"; case 3: return "A"; case 4: return "A"; case 5: return "2"; case 6: return "2"; case 7: return "2"; case 8: return "2"; case 9: return "3"; case 10: return "3"; case 11: return "3"; case 12: return "3"; case 13: return "4"; case 14: return "4"; case 15: return "4"; case 16: return "4"; case 17: return "5"; case 18: return "5"; case 19: return "5"; case 20: return "5"; case 21: return "6"; case 22: return "6"; case 23: return "6"; case 24: return "6"; case 25: return "7"; case 26: return "7"; case 27: return "7"; case 28: return "7"; case 29: return "8"; case 30: return "8"; case 31: return "8"; case 32: return "8"; case 33: return "9"; case 34: return "9"; case 35: return "9"; case 36: return "9"; case 37: return "10"; case 38: return "10"; case 39: return "10"; case 40: return "10"; case 41: return "J"; case 42: return "J"; case 43: return "J"; case 44: return "J"; case 45: return "Q"; case 46: return "Q"; case 47: return "Q"; case 48: return "Q"; case 49: return "K"; case 50: return "K"; case 51: return "K"; case 52: return "K"; default: return ""; }
}

//Returns card value
function getCardWeight(x){
	switch(x){
		case 1: return 11; case 2: return 11; case 3: return 11; case 4: return 11; case 5: return 2; case 6: return 2; case 7: return 2; case 8: return 2; case 9: return 3; case 10: return 3; case 11: return 3; case 12: return 3; case 13: return 4; case 14: return 4; case 15: return 4; case 16: return 4; case 17: return 5; case 18: return 5; case 19: return 5; case 20: return 5; case 21: return 6; case 22: return 6; case 23: return 6; case 24: return 6; case 25: return 7; case 26: return 7; case 27: return 7; case 28: return 7; case 29: return 8; case 30: return 8; case 31: return 8; case 32: return 8; case 33: return 9; case 34: return 9; case 35: return 9; case 36: return 9; case 37: return 10; case 38: return 10; case 39: return 10; case 40: return 10; case 41: return 10; case 42: return 10; case 43: return 10; case 44: return 10; case 45: return 10; case 46: return 10; case 47: return 10; case 48: return 10; case 49: return 10; case 50: return 10; case 51: return 10; case 52: return 10; default: return 0;}
}

//Returns card suit
function getCardSuit(x)
{

	switch(x){case 1: return "1"; case 2: return "2"; case 3: return "3"; case 4: return "4"; case 5: return "1"; case 6: return "2"; case 7: return "3"; case 8: return "4"; case 9: return "1"; case 10: return "2"; case 11: return "3"; case 12: return "4"; case 13: return "1"; case 14: return "2"; case 15: return "3"; case 16: return "4"; case 17: return "1"; case 18: return "2"; case 19: return "3"; case 20: return "4"; case 21: return "1"; case 22: return "2"; case 23: return "3"; case 24: return "4"; case 25: return "1"; case 26: return "2"; case 27: return "3"; case 28: return "4"; case 29: return "1"; case 30: return "2"; case 31: return "3"; case 32: return "4"; case 33: return "1"; case 34: return "2"; case 35: return "3"; case 36: return "4"; case 37: return "1"; case 38: return "2"; case 39: return "3"; case 40: return "4"; case 41: return "1"; case 42: return "2"; case 43: return "3"; case 44: return "4"; case 45: return "1"; case 46: return "2"; case 47: return "3"; case 48: return "4"; case 49: return "1"; case 50: return "2"; case 51: return "3"; case 52: return "4"; default: return ""; }
}

//Function that handles resize event
function resizeWindow(){
	w = window.innerWidth;
	h = window.innerHeight;	
	draw.clearRect(0, 0, w, h);
	document.getElementById("myCanvas").setAttribute('width', w-20);
	document.getElementById("myCanvas").setAttribute('height', h-20);			
	fontMultiplier = ""+w/40;
	secondFontMultiplier = ""+w/50;
	cardSpacingMultipler = w/30;

	drawPokerTable();
	var j = 10;
	for(var i = 0; i < numberOfPlayerCards; i++)
	{
		drawCard(cardSpacingMultipler*j, 0, hands[0][i]);
		j++;
	}
	j=10
	for(var i = 0; i < numberOfDealerCards; i++)
	{
		drawCard(cardSpacingMultipler*j, -(h/2), dealerHand[i]);
		j++;
	}
	if(gameStarted)
	{
		drawHitStay();
		drawHandTotalBox();
		drawDealerHandTotalBox();
	}
	if(gameOver)
	{
		writeGameFinishedMessage();
	}
}


//Draws a card and adds it to the hand, then renders graphics
function drawPlayerCard(hand, cardInHand){
	hands[hand][cardInHand] = genRandomNumber();
	handsTotals[hand] +=  getCardWeight(hands[hand][cardInHand]);
	if(getCardWeight(hands[hand][cardInHand]) == 11)
	{
		numberOfAces++;
	}
	drawCard(cardSpacingMultipler*cardPosition, 0, hands[hand][cardInHand]);
	numberOfPlayerCards++;
	cardPosition++;
	// console.log("Total:" + handsTotals[0]);
	drawHandTotalBox();
}

//Dealer draws a card and adds it to the hand, then renders graphics
function drawDealerCard(cardInHand){
	dealerHand[cardInHand] = genRandomNumber();
	dealerHandTotal += getCardWeight(dealerHand[cardInHand]);
	if(getCardWeight(dealerHand[cardInHand]) == 11)
	{
		dealerNumberOfAces++;
	}
	drawCard(cardSpacingMultipler*dealerCardPosition, -(h/2), dealerHand[cardInHand]);
	numberOfDealerCards++;
	dealerCardPosition++;
	// console.log("Dealer Total:"+dealerHandTotal);
	drawDealerHandTotalBox();
}

//Start the game
function startGame(){
	console.log("Game Started!");
	waiting=true;
	setTimeout(function() {drawPlayerCard(0,numberOfPlayerCards);}, 1000);
	setTimeout(function() {drawPlayerCard(0,numberOfPlayerCards);}, 2000);
	setTimeout(function() {drawDealerCard(numberOfDealerCards);}, 3000);
	setTimeout(drawDealerHandTotalBox,3000);
	setTimeout(function(){waiting=false;},3000)
	setTimeout(function(){
		//Handle blackjack
		if(handsTotals[0]==21)
		{
			writeWinMessage();
			gameOver = true;
		}
		//handle double aces
		if(handsTotals[0]==22)
		{
			handsTotals[0]-=10;
			drawHandTotalBox();
		}
	},3000);

}


//Draw the board

setupCanvas();
drawPokerTable();
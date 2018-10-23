//User input and game rules are handled here

//Listens for user mouse input
myCanvas.addEventListener('click', function(event) {
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("CLICK: X: " + x + " Y: " + y); 
    //Start the game if it's first click
    if(!gameStarted){
    	drawPokerTable();
    	startGame();
    	gameStarted = true;
    	drawHitStay();
    }
	//Game has started    
   	else{
   		if(!gameOver){
	   		//Detect Hit hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/14 && x < w/6.5 ){
	   			//draw a card
	   			if(!splitted)
	   			{
	   				drawACard(0);
	   			}
	   			else
	   			{
		   			drawACard(1);
	   			}

	   		}
	   		//Detect Stay hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/6 && x < w/3.975){
	   			//Start the dealer play algorithm
	   			dealerPlay();
	   		}
   		}
   		else{
   			resetGame();
   		}
   	}

}, false);


function drawACard(i)
{
	if(i==0){
		drawPlayerCard(0, numberOfPlayerCards);
		//if blackjack dealer gets a chance to push
		if(handsTotals[0]==21){
			dealerPlay();
			gameOver=true;
		}
		//unless the player has an ace, bust and end the game
		if(handsTotals[0]>21){
			//handle player's ace
			if(numberOfAces>=1){
				handsTotals[0]-=10;
				numberOfAces--;
				drawHandTotalBox();
				//If the player wins after switching ace
				if(handsTotals[0]==21){
	   				writeWinMessage();
	   				gameOver=true;
	   				drawDealerCard(numberOfDealerCards);
	   				drawDealerHandTotalBox();
	   			}
			}
			//Busted
			else{
				writeBustMessage();
				writeLoseMessage();
				gameOver = true;
   				drawDealerCard(numberOfDealerCards);
   				drawDealerHandTotalBox();							
			}	
		}		
	}
	else
	{
		drawPlayerCard(1, hand2NumberOfPlayerCards);
		//if blackjack dealer gets a chance to push
		if(handsTotals[1]==21){
			dealerPlay();
			gameOver=true;
		}
		//unless the player has an ace, bust and end the game
		if(handsTotals[1]>21){
			//handle player's ace
			if(hand2NumberOfAces>=1){
				handsTotals[1]-=10;
				hand2NumberOfAces--;
				drawHandTotalBox();
				//If the player wins after switching ace
				if(handsTotals[1]==21){
	   				writeWinMessage();
	   				gameOver=true;
	   				drawDealerCard(numberOfDealerCards);
	   				drawDealerHandTotalBox();
	   			}
			}
			//Busted
			else{
				writeBustMessage();
				writeLoseMessage();
				gameOver = true;
   				drawDealerCard(numberOfDealerCards);
   				drawDealerHandTotalBox();							
			}	
		}		
	}

}

//Dealer draws until 17 or bust
function dealerPlay(){
	if(dealerHandTotal < 17){
		drawDealerCard(numberOfDealerCards);
	   	dealerPlay();
		return;		
	}
	if(dealerHandTotal > 21){
		if(dealerNumberOfAces>=1){
			dealerHandTotal-=10;
			dealerNumberOfAces--;
			drawDealerHandTotalBox();
	   		dealerPlay();
			return;
		}
		else{
			writeWinMessage();
			writeDealerBustMessage();
			gameOver = true;
			return;	
		}
	}
	else{
		if(handsTotals[0] > dealerHandTotal){
			writeWinMessage();
			gameOver = true;
			return;
		}
		if(handsTotals[0] < dealerHandTotal){
			writeLoseMessage();
			gameOver = true;
			return;
		}
		else{
			writeTieMessage();
			gameOver = true;
			return;
		}
	}
}



//------------------------------------Drawing----------------------------------------//

//Draws a card and adds it to the hand, then renders graphics
function drawPlayerCard(hand, cardInHand){
	if(hand == 0)
	{
		hands[hand][cardInHand] = genRandomNumber();
		handsTotals[hand] +=  getCardWeight(hands[hand][cardInHand]);
		if(getCardWeight(hands[hand][cardInHand]) == 11){
			numberOfAces++;
		}
		drawCard(cardSpacingMultipler*cardPosition, 0, hands[hand][cardInHand]);
		numberOfPlayerCards++;
		cardPosition++;
		drawHandTotalBox();		
	}
	else
	{
		hands[hand][cardInHand] = genRandomNumber();
		handsTotals[hand] +=  getCardWeight(hands[hand][cardInHand]);
		if(getCardWeight(hands[hand][cardInHand]) == 11){
			hand2NumberOfAces++;
		}
		drawCard(cardSpacingMultipler*hand2CardPosition, h/5, hands[hand][cardInHand]);
		hand2NumberOfPlayerCards++;
		hand2CardPosition++;
		drawHandTotalBox();
	}

}

//Dealer draws a card and adds it to the hand, then renders graphics
function drawDealerCard(cardInHand){
	dealerHand[cardInHand] = genRandomNumber();
	dealerHandTotal += getCardWeight(dealerHand[cardInHand]);
	if(getCardWeight(dealerHand[cardInHand]) == 11){
		dealerNumberOfAces++;
	}
	drawCard(cardSpacingMultipler*dealerCardPosition, -(h/2), dealerHand[cardInHand]);
	numberOfDealerCards++;
	dealerCardPosition++;
	drawDealerHandTotalBox();
}
//---------------------------------------------------------------------------------//
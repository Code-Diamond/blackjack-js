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
	   				//TODO------make seperatefunction----v
						drawPokerTable();
						var k = 10;
						var j = 10;
						for(var i = 0; i < numberOfPlayerCards; i++){
							drawCard(cardSpacingMultipler*j, 0, hands[0][i]);
							j++;
						}
						for(var i = 0; i < hand2NumberOfPlayerCards; i++){
							drawCard(cardSpacingMultipler*k, (h/5), hands[1][i]);
							k++;
						}	
						j=10
						for(var i = 0; i < numberOfDealerCards; i++){
							drawCard(cardSpacingMultipler*j, -(h/2), dealerHand[i]);
							j++;
						}

						drawHandTotalBox();
						drawDealerHandTotalBox();
						drawHitStay();	   	
					//TODO------make seperatefunction----^

	   				drawACard(0);
	   			}
	   			else
	   			{
	   				if(!secondHandStarted)
	   				{
			   			drawACard(1);
	   				}
	   				else
	   				{
	   					playSecondHand();
	   				}
	   			}

	   		}
	   		//Detect Stay hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/6 && x < w/3.975){
	   			//Start the dealer play algorithm
	   			if(!splitted)
	   			{
		   			dealerPlay();
	   			}
	   			else
	   			{
	   				if(!secondHandStarted)
	   				{
		   				playSecondHand();
	   				}
	   				else
	   				{
	   					dealerPlay();
	   				}
	   			}
	   		}
	   		//Detect Split hit box
	   		if( y > h/2.7 && y < h/1.74 && x> w/8.25 && x < w/4.85 && !splitted && numberOfPlayerCards <= 2 && detectSplittable()){
				splitHand();
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
	if(i==1)
	{
		if(handsTotals[0]<21)
		{
			drawPlayerCard(0, numberOfPlayerCards);
			return;
		}
		//if blackjack dealer gets a chance to push
		if(handsTotals[0]==21){
			playSecondHand();
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
	   				playSecondHand();
	   			}
			}
			//Busted
			else{
				writeBustMessage();				
				playSecondHand();
			}	
		}	
	}

}

//TODO catch dealer double aces on bust displaying 22 instead of 12

function playSecondHand(){
	secondHandStarted=true;
	drawPlayerCard(1, hand2NumberOfPlayerCards);
	//if blackjack dealer gets a chance to push
	drawHand2TotalBox();	
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
			drawHand2TotalBox();
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
			writeBust2Message();
			// writeLoseMessage();
			// gameOver = true;
			drawDealerCard(numberOfDealerCards);
			drawDealerHandTotalBox();							
			gameOver=true;
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
		if((handsTotals[0] > dealerHandTotal && handsTotals[0] <=21) || (handsTotals[1] > dealerHandTotal && handsTotals[1]<=21)){
			writeWinMessage();
			gameOver = true;
			return;
		}
		if(handsTotals[0] < dealerHandTotal && handsTotals[1] < dealerHandTotal){
			writeLoseMessage();
			gameOver = true;
			return;
		}
		else{
			if((handsTotals[0] == dealerHandTotal || handsTotals[1] == dealerHandTotal) && (dealerHandTotal >= handsTotals[0] && dealerHandTotal >= handsTotals[1]))
			{
				writeTieMessage();
				gameOver = true;
				return;				
			}

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
//for testing
function drawPlayerPair()
{
	var num = 4;
	hands[0][1] = num;
	hands[0][0] = num;
		handsTotals[0] +=  getCardWeight(hands[0][1])+ getCardWeight(hands[0][0]);
	if(getCardWeight(hands[0][0]) == 11){
			numberOfAces++;
			numberOfAces++;
		}

		drawCard(cardSpacingMultipler*cardPosition, 0, hands[0][0]);
		numberOfPlayerCards++;
		cardPosition++;
		drawCard(cardSpacingMultipler*cardPosition, 0, hands[0][1]);
		numberOfPlayerCards++;
		cardPosition++;
		drawHandTotalBox();		

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
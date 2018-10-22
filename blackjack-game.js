//User input and game rules are handled here

//Listens for mouse movement
canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
	// writeMessage(message);
}, false);

//Detects Mouse location
function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
}

//Listens for user mouse input
myCanvas.addEventListener('click', function(event) {
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("CLICK: X: " + x + " Y: " + y); 
    //Start the game if it's first click
    if(!gameStarted)
    {
    	startGame();
    	gameStarted = true;
    	drawHitStay();
    }
	//Game has started    
   	else
   	{
   		if(!gameOver)
   		{
	   		//Detect Hit hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/14 && x < w/6.5 )
	   		{
	   			//if blackjack end the game
	   			if(handsTotals[0]==21){
	   				writeWinMessage();
	   				gameOver=true;
	   			}
	   			//draw a card
		   		drawPlayerCard(0, numberOfPlayerCards);
	   			//if blackjack end the game		   			
	   			if(handsTotals[0]==21){
	   				writeWinMessage();
	   				gameOver=true;
	   			}
	   			//if bust end the game
				if(handsTotals[0]>21){
					//unless the player has an ace
					if(numberOfAces>=1){
						handsTotals[0]-=10;
						numberOfAces--;
						// writeMessage("Swapped ace, hand total now: "+handsTotals[0]);
						drawHandTotalBox();
						//If the player wins after switching ace
						if(handsTotals[0]==21){
			   				writeWinMessage();
			   				gameOver=true;
			   			}
					}
					//Busted
					else{
						writeBustMessage();
						gameOver = true;
					}	
				}
	   		}
	   		//Detect Stay hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/6 && x < w/3.975 )
	   		{
	   			// writeMessage("Staying");
	   			//Start the dealer play algorithm
	   			setTimeout(dealerPlay,200);
	   		}
   		}
   	}

}, false);

//Dealer draws until 17 or bust
function dealerPlay()
{
	if(dealerHandTotal < 17){
		drawDealerCard(numberOfDealerCards);
		// displayHandValues();
	   	setTimeout(dealerPlay,1000);
		return;		
	}
	if(dealerHandTotal > 21){
		if(dealerNumberOfAces>=1){
			dealerHandTotal-=10;
			dealerNumberOfAces--;
			// console.log( "\nDealer swaps the Ace's value to a 1.\n\n"); 
			// console.log("Dealer Total:"+dealerHandTotal);
	   		setTimeout(dealerPlay,1000);
			return;
		}
		else{
			writeWinMessage();
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




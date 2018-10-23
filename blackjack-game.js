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
    	drawPokerTable();
    	startGame();
    	gameStarted = true;
    	setTimeout(drawHitStay, 3000);
    }
	//Game has started    
   	else
   	{
   		if(!gameOver)
   		{
	   		//Detect Hit hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/14 && x < w/6.5 &&!waiting)
	   		{
	   			waiting=true;
	   			//if blackjack end the game
	   			if(handsTotals[0]==21){
	   				writeWinMessage();
	   				gameOver=true;
	   				waiting=false;
	   			}
	   			//draw a card
		   		setTimeout(function() {drawPlayerCard(0, numberOfPlayerCards);
		   			waiting=true;
		   			//if blackjack end the game		   			
		   			if(handsTotals[0]==21){
		   				writeWinMessage();
		   				gameOver=true;
		   				waiting=false;
		   			}
		   			//if bust end the game
					if(handsTotals[0]>21){
						waiting=true;
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
				   				waiting=false;
				   			}
						}
						//Busted
						else{
							writeBustMessage();
							writeLoseMessage();
							gameOver = true;
							waiting=false;
						}	
					}
					waiting=false;
				},1000);

	   		}
	   		//Detect Stay hit box
	   		if( y > h/1.665  &&   y < h/1.245  && x > w/6 && x < w/3.975 &&!waiting)
	   		{
	   			waiting=true;
	   			//Start the dealer play algorithm
	   			setTimeout(dealerPlay,200);
	   			// writeMessage("Staying");
	   		}
   		}
   		else
   		{
   			resetGame();
   		}
   	}

}, false);

//Dealer draws until 17 or bust
function dealerPlay()
{
	waiting=true;
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
			drawDealerHandTotalBox();
			// console.log( "\nDealer swaps the Ace's value to a 1.\n\n"); 
			// console.log("Dealer Total:"+dealerHandTotal);
	   		setTimeout(dealerPlay,1000);
			return;
		}
		else{
			writeWinMessage();
			writeDealerBustMessage();
			gameOver = true;
			waiting=false;
			return;	
		}
	}
	else{
		if(handsTotals[0] > dealerHandTotal){
			writeWinMessage();
			gameOver = true;
			waiting=false;
			return;
		}
		if(handsTotals[0] < dealerHandTotal){
			writeLoseMessage();
			gameOver = true;
			waiting=false;

			return;
		}
		else{
			writeTieMessage();
			gameOver = true;
			waiting=false;
			return;
		}
	}
}




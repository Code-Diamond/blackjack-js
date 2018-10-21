var w = window.innerWidth;
var h = window.innerHeight;
var fontMultiplier = ""+w/40;
var secondFontMultiplier = ""+w/50;
var cardSpacingMultipler = w/30;

var canvas = document.getElementById('myCanvas');
var draw = document.getElementById("myCanvas").getContext("2d");

var gameStarted = false;

var hands = [[]];
var handsTotals = [];
handsTotals[0] = 0; handsTotals[1] = 0; handsTotals[2] = 0; handsTotals[3] = 0;
var numberOfAces=0;
numberOfPlayerCards=0;
cardPosition=10;


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

//Writes to console
function writeMessage(message) {
	console.log(message)
}      

//Listens and Detects click location
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
   	else//Game has started
   	{
   		//Detect Hit hit box
   		if( y > h/1.665  &&   y < h/1.245  && x > w/14 && x < w/6.5 )
   		{
	   		drawPlayerCard(0, numberOfPlayerCards);
			if(handsTotals[0]>21){
				if(numberOfAces>=1){
					handsTotals[0]-=10;
					numberOfAces--;
					writeMessage("Swapped ace, hand total now: "+handsTotals[0]);

				}
				else{
					writeMessage("Busted");
				}	
			}
   		}
   		//Detect Stay hit box
   		if( y > h/1.665  &&   y < h/1.245  && x > w/6 && x < w/3.975 )
   		{
   			writeMessage("Staying");
   		}


   	}

}, false);


//draws canvas border, sets up width and height
function setupCanvas()
{
	document.getElementById("myCanvas").style.border = "Solid 2px Grey";
	document.getElementById("myCanvas").setAttribute('width', w-20);
	document.getElementById("myCanvas").setAttribute('height', h-20);			
}
//draws poker table
function drawPokerTable()
{
	draw.beginPath();
	draw.ellipse(w/2, h/2, w/3, h/3, 0, 0, Math.PI*2);
	draw.fillStyle="#004400";
	draw.fill();
	draw.strokeStyle="brown";
	draw.lineWidth="10"
	draw.stroke();
	draw.save()

	draw.beginPath();
	draw.ellipse(w/2, h/2, w/6, h/6, 0, 0, Math.PI*2);
	draw.lineWidth="3"
	draw.stroke();
	draw.save()
	
	draw.beginPath();
	draw.font = fontMultiplier+"px Cursive";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("Blackjack", w/2, h/2); 
	draw.save()
}
//Draws a card
function drawCard(x,i)
{
	draw.beginPath();

	//Draw card
	draw.fillStyle = "#dee5ef";
	draw.fillRect((w/18)+x,(h/1.665),(w/15),(h/5));
	draw.lineWidth="3"
	draw.strokeStyle="black";
	draw.rect((w/18)+x,(h/1.665),(w/15),(h/5));
	draw.stroke();
	draw.save();
	
	draw.beginPath();
	var suit = Math.floor((Math.random() * 4) + 1);
	//Card Letter Color from suit
	if(suit%2==0)
	{
		draw.fillStyle = "red";
	}
	else
	{
		draw.fillStyle = "black";
	}

	//Write Card Letter
	draw.font = fontMultiplier+"px Cursive";
	draw.textAlign = "center";
	draw.fillText(i, (w/14)+x, (h/1.55)); 			
	draw.save();

	//Write Card Letter Bottom Right Upside Down
	draw.beginPath();
	draw.font = fontMultiplier+"px Cursive";
	draw.textAlign = "center";
    draw.translate(20, 50);
	draw.rotate(180 * Math.PI / 180);
	draw.fillText(i, -(w/11)-x,-(h/1.45)); 			
	draw.restore();

	//Write Card Suit
	draw.beginPath();
	if(suit==1)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2660", (w/14)+x,(h/1.45)); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2660", -(w/11)-x,-(h/1.55)); 			
		draw.restore();
	}
	if(suit==2)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2666", (w/14)+x,(h/1.45)); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2666", -(w/11)-x,-(h/1.55)); 			
		draw.restore();
	}
	if(suit==3)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2663", (w/14)+x,(h/1.45)); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2663", -(w/11)-x,-(h/1.55)); 			
		draw.restore();
	}
	if(suit==4)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2764", (w/14)+x,(h/1.45)); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2764", -(w/11)-x,-(h/1.55)); 			
		draw.restore();
	}
	draw.save();
}
//Generates a random number 1 to 52
function genRandomNumber()
{
	return Math.floor((Math.random() * 52) + 1);
}
//Draws hit or stay buttons
function drawHitStay()
{
	//Hit Button
	draw.beginPath();
	draw.fillStyle = "red";
	draw.fillRect((w/14),(h/1.665),(w/12),(h/5));
	draw.lineWidth="3"
	draw.strokeStyle="black";
	draw.rect((w/14),(h/1.665),(w/12),(h/5));
	draw.stroke();
	draw.save();	
	//Hit Text
	draw.beginPath();
	draw.font = (fontMultiplier)+"px Cursive";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("HIT", (w/8.8),(h/1.4)); 			
	draw.save()
	//Stay Button
	draw.beginPath();
	draw.fillStyle = "blue";
	draw.fillRect((w/6),(h/1.665),(w/12),(h/5));
	draw.lineWidth="3"
	draw.strokeStyle="black";
	draw.rect((w/6),(h/1.665),(w/12),(h/5));
	draw.stroke();
	draw.save();
	//Stay Text
	draw.beginPath();
	draw.font = (fontMultiplier)+"px Cursive";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("STAY", (w/4.8),(h/1.4)); 			
	draw.save()			
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
function drawPlayerCard(hand, cardInHand){
	hands[hand][cardInHand] = genRandomNumber();
	handsTotals[hand] +=  getCardWeight(hands[hand][cardInHand]);
	if(getCardWeight(hands[hand][cardInHand]) == 11)
	{
		numberOfAces++;
	}
	drawCard(cardSpacingMultipler*cardPosition, getCardDetails(hands[hand][cardInHand]));
	numberOfPlayerCards++;
	cardPosition++;
	console.log("Total:" + handsTotals[0])
}
function startGame(){
	console.log("Game Started!");
	drawPlayerCard(0,numberOfPlayerCards);
	drawPlayerCard(0,numberOfPlayerCards);
}

setupCanvas();
drawPokerTable();

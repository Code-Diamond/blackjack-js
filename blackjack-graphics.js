// 
//TODO: consolidate messages, drawDealerHandTotalBox
// 
function writeBustMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/6,h/3.8,w/1.45,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/6)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText("BUSTED!", (w/2), (h/2)); 			
	draw.save();	
}
function writeWinMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/6,h/3.8,w/1.45,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/6)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText("WINNER!", (w/2), (h/2)); 			
	draw.save();	
}
function writeLoseMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/6,h/3.8,w/1.45,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/6)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText("You lose.", (w/2), (h/2)); 			
	draw.save();	
}
function writeTieMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/6,h/3.8,w/1.45,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/6)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText("Tie Game.", (w/2), (h/2)); 			
	draw.save();	
}
function writeGameFinishedMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/6,h/3.8,w/1.45,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/8)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText("Game Finished.", (w/2), (h/2)); 			
	draw.save();	
}
// 
//TODO: drawDealerHandTotalBox
// 
function drawHandTotalBox()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.fillRect((w/14.2),(h/2),(w/11.7),(h/10))
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/20)+"px Cursive";
	draw.textAlign = "center";
	draw.fillText(handsTotals[0], (w/9), (h/1.72)); 			
	draw.save();	
}
//draws canvas border, sets up width and height
function setupCanvas()
{
	document.getElementById("myCanvas").style.border = "Solid 2px Grey";
	document.getElementById("myCanvas").setAttribute('width', w-20);
	document.getElementById("myCanvas").setAttribute('height', h-20);			
	draw.fillStyle = "black";
	draw.fillRect(0, 0, w, h);
}
//draws poker table
function drawPokerTable()
{
	draw.beginPath();
	draw.ellipse(w/2, h/2, w, h, 0, 0, Math.PI*2);
	draw.fillStyle="#082d00";
	draw.fill();
	draw.save();

	draw.beginPath();
	draw.strokeStyle="brown";
	draw.lineWidth="2"
	draw.arc(w/1.981, h/2.24, w/6, h/6,  0, Math.PI*2);
	draw.stroke();
	draw.save()	

	draw.beginPath();
	draw.font = fontMultiplier*2+"px Cursive";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("BLACKJACK", w/2, h/2.15); 
	draw.save()
}
//Draws a card
function drawCard(x,y,i)
{
	draw.beginPath();

	//Draw card
	draw.fillStyle = "#dee5ef";
	draw.fillRect((w/18)+x,(h/1.665)+y,(w/15),(h/5));
	draw.lineWidth="3"
	draw.strokeStyle="black";
	draw.rect((w/18)+x,(h/1.665)+y,(w/15),(h/5));
	draw.stroke();
	draw.save();
	
	draw.beginPath();
	var suit = getCardSuit(i);
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
	draw.fillText(getCardDetails(i), (w/14)+x, (h/1.55)+y); 			
	draw.save();

	//Write Card Letter Bottom Right Upside Down
	draw.beginPath();
	draw.font = fontMultiplier+"px Cursive";
	draw.textAlign = "center";
    draw.translate(20, 50);
	draw.rotate(180 * Math.PI / 180);
	draw.fillText(getCardDetails(i), -(w/11)-x,-(h/1.45)-y); 			
	draw.restore();

	//Write Card Suit
	draw.beginPath();
	if(suit==1)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2660", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2660", -(w/11)-x,-(h/1.55)-y); 			
		draw.restore();
	}
	if(suit==2)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2666", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2666", -(w/11)-x,-(h/1.55)-y); 			
		draw.restore();
	}
	if(suit==3)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2663", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2663", -(w/11)-x,-(h/1.55)-y); 			
		draw.restore();
	}
	if(suit==4)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Cursive";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2764", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		draw.beginPath();
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText("\u2764", -(w/11)-x,-(h/1.55)-y); 			
		draw.restore();
	}
	draw.save();
}
//Draws hit or stay buttons
function drawHitStay()
{
	//Hit Button
	draw.beginPath();
	draw.fillStyle = "maroon";
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
	draw.fillStyle = "darkblue";
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

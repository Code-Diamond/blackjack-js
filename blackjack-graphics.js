// 
//TODO: consolidate messages
// 
function writeBustMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "red";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("BUSTED", (w/3.05), (h/1.65)); 			
	draw.save();	
}

function writeBust2Message()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "red";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("BUSTED", (w/3.05), (h/1.23)); 			
	draw.save();	
}
function writeDefeatMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "red";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("LOSER", (w/3.05), (h/1.65)); 			
	draw.save();	
}

function writeDefeatMessage2()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "red";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("LOSER", (w/3.05), (h/1.23)); 			
	draw.save();	
}

function writeDealerBustMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/3.8),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/3.8),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "red";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("BUSTED", (w/3.05), (h/3.15)); 			
	draw.save();	
}
function writeWinMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "lightgreen";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("WINNER", (w/3.05), (h/1.65)); 			
	draw.save();	
}
function writeWinMessage2()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "lightgreen";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("WINNER", (w/3.05), (h/1.22)); 			
	draw.save();	
}

function writePushMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	draw.fillRect((w/3.5),(h/1.8),(w/11.7),(h/12.5))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("PUSH", (w/3.05), (h/1.65)); 			
	draw.save();	
}
function writePushMessage2()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/1.3),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("PUSH", (w/3.05), (h/1.22)); 			
	draw.save();	
}

function writeLoseMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	// draw.globalAlpha = 0.8;
	draw.fillRect((w/3.5),(h/3.8),(w/11.7),(h/14))
	draw.fillRect((w/3.5),(h/3.8),(w/11.7),(h/14))
	// draw.globalAlpha = 1.0;
	draw.save();

	//Writes winner for the dealer
	draw.beginPath();
	draw.fillStyle = "lightgreen";
	draw.font = (w/48)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("WINNER", (w/3.05), (h/3.15)); 			
	draw.save();	
}

function writeClickToPlayMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.5;
	draw.fillRect(w/4,h/1.8,w/2,h/6)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/18)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("Click to play.", (w/2), (h/1.5)); 			
	draw.save();	
}
function writeGameFinishedMessage()
{
	draw.beginPath();
	draw.fillStyle = "black";
	draw.globalAlpha = 0.8;
	draw.fillRect(w/8,h/3.8,w/1.35,h/3.8)
	draw.globalAlpha = 1.0;
	draw.save();

	draw.beginPath();
	draw.fillStyle = "yellow";
	draw.font = (w/12)+"px Monospace";
	draw.textAlign = "center";
	draw.fillText("Game Finished.", (w/2), (h/2)); 			
	draw.save();	
}

function drawHandTotalBox()
{
	if(handsTotals[0] != 0)
	{
		draw.beginPath();
		draw.fillStyle = "black";
		draw.fillRect((w/3.5),(h/1.59),(w/11.7),(h/10))
		draw.save();
		
		draw.beginPath();
		draw.fillStyle = "yellow";
		draw.font = (w/20)+"px Monospace";
		draw.textAlign = "center";
		draw.fillText(handsTotals[0], (w/3.05), (h/1.4)); 			
		draw.save();		
	}
}

function drawHand2TotalBox()
{
	if(handsTotals[0] != 0)
	{
		draw.beginPath();
		draw.fillStyle = "black";
		draw.fillRect((w/3.5),(h/1.2),(w/11.7),(h/10))
		draw.save();
		
		draw.beginPath();
		draw.fillStyle = "yellow";
		draw.font = (w/20)+"px Monospace";
		draw.textAlign = "center";
		draw.fillText(handsTotals[1], (w/3.05), (h/1.09)); 			
		draw.save();		
	}
}


function drawDealerHandTotalBox()
{
	if(dealerHandTotal != 0)
	{
		draw.beginPath();
		draw.fillStyle = "black";
		draw.fillRect((w/3.5),(h/6),(w/11.7),(h/10))
		draw.save();		
	
		draw.beginPath();
		draw.fillStyle = "yellow";
		draw.font = (w/20)+"px Monospace";
		draw.textAlign = "center";
		draw.fillText(dealerHandTotal, (w/3.05), (h/4)); 			
		draw.save();			
	}
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
	draw.font = fontMultiplier*2+"px Monospace";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("BLACKJACK", w/1.98, h/2.13); 
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
	draw.font = fontMultiplier+"px Monospace";
	draw.textAlign = "center";
	draw.fillText(getCardDetails(i), (w/14)+x, (h/1.55)+y); 			
	draw.save();

	//Write Card Letter Bottom Right Upside Down
	if(w>1024 && h>768)
	{
		draw.beginPath();
		draw.font = fontMultiplier+"px Monospace";
		draw.textAlign = "center";
	    draw.translate(20, 50);
		draw.rotate(180 * Math.PI / 180);
		draw.fillText(getCardDetails(i), -(w/11)-x,-(h/1.45)-y); 			
		draw.restore();		
	}


	//Write Card Suit
	draw.beginPath();
	if(suit==1)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Monospace";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2660", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		if(w>1024 && h>768)
		{		
			draw.beginPath();
		    draw.translate(20, 50);
			draw.rotate(180 * Math.PI / 180);
			draw.fillText("\u2660", -(w/11)-x,-(h/1.55)-y); 			
			draw.restore();
		}
	}
	if(suit==2)
	{
		//Top Left Suit
		draw.font = (secondFontMultiplier)+"px Monospace";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2666", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		if(w>1024 && h>768)
		{
			draw.beginPath();
		    draw.translate(20, 50);
			draw.rotate(180 * Math.PI / 180);
			draw.fillText("\u2666", -(w/11)-x,-(h/1.55)-y); 			
			draw.restore();
		}
	}
	if(suit==3)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Monospace";
		draw.fillStyle = "black";
		draw.textAlign = "center";
		draw.fillText("\u2663", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		if(w>1024 && h>768)
		{	
			draw.beginPath();
		    draw.translate(20, 50);
			draw.rotate(180 * Math.PI / 180);
			draw.fillText("\u2663", -(w/11)-x,-(h/1.55)-y); 			
			draw.restore();
		}
	}
	if(suit==4)
	{
		//Top Left Suit				
		draw.font = (secondFontMultiplier)+"px Monospace";
		draw.fillStyle = "red";
		draw.textAlign = "center";
		draw.fillText("\u2764", (w/14)+x,(h/1.45)+y); 			
		draw.save()
		//Write Card Suit Bottom Right
		if(w>1024 && h>768)
		{	
			draw.beginPath();
		    draw.translate(20, 50);
			draw.rotate(180 * Math.PI / 180);
			draw.fillText("\u2764", -(w/11)-x,-(h/1.55)-y); 			
			draw.restore();
		}
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
	draw.font = (fontMultiplier)+"px Monospace";
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
	draw.font = (fontMultiplier)+"px Monospace";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("STAY", (w/4.8),(h/1.4)); 			
	draw.save()		
}
function drawSplitBox()
{
	//Split Button
	draw.beginPath();
	draw.fillStyle = "#68380e";
	draw.fillRect((w/8.25),(h/2.7),(w/12),(h/5));
	draw.lineWidth="3"
	draw.strokeStyle="black";
	draw.rect((w/8.25),(h/2.7),(w/12),(h/5));
	draw.stroke();
	draw.save();	
	//Split Text
	draw.beginPath();
	draw.font = (fontMultiplier)+"px Monospace";
	draw.fillStyle = "white";
	draw.textAlign = "center";
	draw.fillText("SPLIT", (w/6.15),(h/2.05)); 			
	draw.save()
}
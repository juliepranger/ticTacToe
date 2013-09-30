// START BUTTON -- make button disappear upon clicking it, reappear when game is reset.

window.onload = function() {
	console.log("loaded");
}

// Will User be X or O? 

/*function start(){
	alert("js works")
} 
*/

var myTurn = 0
var mySymbols = ""

function Click() {

	if(event.target.innerHTML != "")
		alert("Choose an empty box!");

	else {if(myTurn == 0)
			mySymbols =  "X";
		else 
			mySymbols = "O";
	
	event.target.innerHTML = mySymbols	
	
	if(myTurn == 0)
		myTurn = 1;
	else 
		myTurn = 0;
	}
} 
// choose an empty box if the clicked box has already been filled!

function clickBox() {

	if(event.target.innerHTML != "")
		alert("Choose an empty box!");
	else 
		mySymbols;

}

function startGame() {
	document.getElementById('begingame').style.top = "-10000px";
}

function whoWins() {
	var winner
	var loser

	
}
// How do I determine who the winner is? How can I ensure Xs and Os are not overridden?




// Popup button -- "You win!" or "You lose!" ; include "Play Again" button which will reset the game board.
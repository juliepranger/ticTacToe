// START BUTTON -- make button disappear upon clicking it, reappear when game is reset.



// Will User be X or O? 
/*function start(){
	alert("js works")
} */

var myTurn = 0
var mySymbols = ""

function Click() {

	if(myTurn == 0)
		mySymbols =  "X";
	else 
		mySymbols = "O";
	
	event.target.innerHTML = mySymbols	
	
	if(myTurn == 0)
		myTurn = 1
	else 
		myTurn = 0;
	} 

// How do I determine who the winner is? How can I ensure Xs and Os are not overridden?




// Popup button -- "You win!" or "You lose!" ; include "Play Again" button which will reset the game board.
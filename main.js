
/*window.onload = function () {
	console.log("loaded");

} */
function startGame() {
	document.getElementById("begingame").style.top = "-10000px";
}

function gameEnd() {
	document.getElementById("gameEnd").style.top = "-195px";
}

function playAgain() {
	document.getElementById("gameEnd").style.top = "-10000px";
	reset()
}

// Will User be X or O? 

/*function start(){
	alert("js works")
} */

// Xs and Os, alternating
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
	clickBox() 
} 

// choose an empty box if the clicked box has already been filled!

function clickBox() {
var id = []

	id.push(document.getElementById("c1_r1").innerHTML)
	id.push(document.getElementById("c2_r1").innerHTML)
	id.push(document.getElementById("c3_r1").innerHTML)
	id.push(document.getElementById("c1_r2").innerHTML) 
	id.push(document.getElementById("c2_r2").innerHTML)
	id.push(document.getElementById("c3_r2").innerHTML)
	id.push(document.getElementById("c1_r3").innerHTML)
	id.push(document.getElementById("c2_r3").innerHTML)
	id.push(document.getElementById("c3_r3").innerHTML) 

// Who is the winner? horizontal wins only
	if((id[0] == id[1] && id[1] == id[2]) && id[0] != "") {
		gameEnd();
	}

	if((id[3] == id[4] && id[4] == id[5]) && id[3] != "") {
		gameEnd();
	}

	if((id[6] == id[7] && id[7] == id[8]) && id[6] !="") {
		gameEnd();
	}
//vertical wins
	
	if((id[0] == id[3] && id[3] == id[6]) && id[0] !="") {
		playAgain();
	}

	if((id[1] == id[4] && id[4] == id[7]) && id[1] !="") {
	 	playAgain();
	 }

	if((id[2] == id[5] && id[5] == id[8]) && id[2] !="") {
	 	playAgain();
	}
//diagonal wins
	if((id[0] == id[4] && id[4] == id[8]) && id[0] !="") {
		playAgain();
	}
	if((id[2] == id[4] && id[4] == id[6]) && id[2] !="") {
		playAgain();
	}
} 

//RESET button will clear the board 

function reset() {

	document.getElementById("c1_r1").innerHTML = ""
	document.getElementById("c2_r1").innerHTML = ""
	document.getElementById("c3_r1").innerHTML = ""
	document.getElementById("c1_r2").innerHTML = ""
	document.getElementById("c2_r2").innerHTML = ""
	document.getElementById("c3_r2").innerHTML = ""
	document.getElementById("c1_r3").innerHTML = ""
	document.getElementById("c2_r3").innerHTML = ""
	document.getElementById("c3_r3").innerHTML = "" 

}


// Popup button -- "You win!" or "You lose!" ; include "Play Again" button which will reset the game board.
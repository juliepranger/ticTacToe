
window.onload = function () {
	console.log("loaded");

}
function startGame() {
	document.getElementById("begingame").style.top = "-10000px";
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
	if(id[0] == id[1] && id[1] == id[2]) {
		alert("You win! Play again?");
	}
	if(myTurn == 0 && (event.target.innerHTML == id[0] || id[1] || id[2])) {

		//((myTurn == 0) && (id[0] == id[1] == id[2] || id[3] == id[4] == id[5] || id[6] == id[7] == id[8])) {
		//}
} 

}


/*
function whoWins() {
	
	event.target.document.getElementByClassName("sqr").innerHTML
	var sqr = ["c1_r1", "c2_r1", "c3_r1", "c1_r2", "c2_r2", "c3_r2", "c1_r3", "c2_r3", "c3_r3"]
	

	if(myTurn == 0 && sqr[0] == sqr[3] == sqr[6] ||
		myTurn == 0 && sqr[1] == sqr[4] == sqr[7] ||
		myTurn == 0 && sqr[2] == sqr[5] == sqr[8] ||
		myTurn == 0 && sqr[0] == sqr[1] == sqr[2] ||
		myTurn == 0 && sqr[1] == sqr[4] == sqr[5] ||
		myTurn == 0 && sqr[2] == sqr[4] == sqr[6]) {
		alert("You win! Play again?");
	}
	else if(myTurn == 1 && sqr[0] == sqr[3] == sqr[6] ||
		myTurn == 1 && sqr[1] == sqr[4] == sqr[7] ||
		myTurn == 1 && sqr[2] == sqr[5] == sqr[8] ||
		myTurn == 1 && sqr[0] == sqr[1] == sqr[2] ||
		myTurn == 1 && sqr[1] == sqr[4] == sqr[5] ||
		myTurn == 1 && sqr[2] == sqr[4] == sqr[6]) {
		alert("You lose! Try again?");
	}
	else(myTurn == 0 || myTurn == 1 &&
		sqr[0] != sqr[3] != sqr[6] ||
		sqr[1] != sqr[4] != sqr[7] ||
		sqr[2] != sqr[5] != sqr[8] ||
		sqr[0] != sqr[1] != sqr[2] ||
		sqr[1] != sqr[4] != sqr[5] ||
		sqr[2] != sqr[4] != sqr[6]) 
		alert("Cats Game! Play again?");
	
}
*/



// Popup button -- "You win!" or "You lose!" ; include "Play Again" button which will reset the game board.
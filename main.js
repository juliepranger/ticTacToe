/*var userChoice = prompt("Are you ready to play?") */



function navCells() {
	alert("Got to navCells");
	for(r=1;r<=3;++r)
		for(c=1;c<=3;++c)
			alert(document.getElementById("c"+c+"_"+"r"+r).innerHTML);
}

alert("Test for Cell Array")
var cellArray = [["","",""],["","",""],["","",""]];{
	for(r=0;r<=2;++r)
		for(c=0;c<=2;++c)
			cellArray[r][c] =
				document.getElementById("c"+(c+1)+"_"+"r"+(r+1)).innerHTML
}

for(x=0; x<=2; ++x)
	if(cellArray[0][x] == cellArray[1][x] && 
		cellArray[1][x] == cellArray[2][x] &&
		cellArray[0][x] != '')
		alert(cellArray[0][x] + " won in column " + x)
	if(cellArray[x][0] == cellArray[x][1] && 
		cellArray[x][1] == cellArray[x][2] &&
		cellArray[x][0] != '')
		alert(cellArray[x][0] + " won in column " + x)

function clickBox() {
	document.getElementById("c"+c+"_"+"r"+r).onclick
		console.log("X");
	} 
/*
function newGameButton () {
		var btn = document.getElementById('newgame');
		if(document.getElementById('newgame').onclick)
			document.reset
	} */
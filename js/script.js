" use strict ";

var display = document.getElementById("display");

//Lists numbers 1 to 10
function oneToTen(){
  var loopResult = "oneToTen()<br/>***Output***<br/>";
  for(var i = 1; i < 11; i++){
  	loopResult += i + "<br/>";
  }
  	display.innerHTML = loopResult;

};

//Lists only the odd numbers up to 20
function oddNumbers(){
	var loopResult = "oddNumbers()<br/>***Output***<br/>";
	for(var i = 1; i <= 20; i++){
		if(i%2 == 1){
			loopResult += i + "<br/>";
		}
	}
	display.innerHTML = loopResult;
};

//Lists square numbers up to 100
function squareNumbers(){
	var loopResult ="squares()<br/>***Output***<br/>";
	for(var i = 1; i * i <= 100; i++){
		loopResult += i * i + "<br/>";
	}
	display.innerHTML = loopResult;
};

//displays random numbers from 1 to 100
function randomNumbers(){
	var loopResult = "random4()<br/>***Output***<br/>";
	for(var i = 1; i <= 4; i++){
		loopResult += Math.floor(Math.random() * 101) + "<br/>";
	}
	display.innerHTML = loopResult;
}

//display even numbers from 1 to x
function evenNumbers(x){
	var loopResult = "even(20)<br/>***Output***<br/>";
	for(var i = 1; i <= x; i++){
		if(i%2==0){
			loopResult += i + "<br/>";
		}
	}
	display.innerHTML = loopResult;
}

//lists 2 to the power of number
function powerOfTwo(number){
	var loopResult = "powers(8)<br/>***Output***<br/>";
	for(var i = 1; i <= number; i++){
		loopResult += Math.pow(2, i) + "<br/>";
	}
	display.innerHTML = loopResult;
}

//Displays a question asks the user to answer, and 
//contiues until use says answers yes
function AreWeThereYet(){
	var arewe;
	while(!arewe){
		display.innerHTML = "Are we there yet?";
		var response = prompt("Yes or No")
		var response = response.toLowerCase();

		if(response == "yes"){
			display.innerHTML = "Good!"
			arewe = true;
		}
	}
}

//prints out a triangle using *
function triangle(){
	var loopResult = "triangle()<br/>***Output***";
	for(var row = 1; row <= 4; row++){
		loopResult += "<br/>"
		for(var column = 1; column <= row; column++){
			loopResult += "*";
		}
	}
	display.innerHTML = loopResult;
}

//creates a 4x4 tables table
function tableSquare(){
	var loopResult = "tableSquare<br/>***Output***<br/>";
	for(var row = 1; row <=4; row++){
		for(column = 1; column <= 4; column++){
			loopResult += "| " + (column * row);
		}
		loopResult += "|<br/>";
	}
	display.innerHTML = loopResult;
}

function tableSquares(n){
	var loopResult = "tableSquares(6)<br/>***Output***<br/>";
	for(var row = 1; row <= n; row++){
		for(column = 1; column <= n; column++){
			loopResult += "|" + (column*row);
		}
		loopResult += "|<br/>";
	}
	display.innerHTML = loopResult;
}











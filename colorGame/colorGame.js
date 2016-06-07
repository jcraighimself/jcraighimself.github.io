var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var howToBtn = document.querySelector(".txtBtn");

init();

resetButton.addEventListener("click", function(){
	reset();
})

howToBtn.addEventListener("click", function(){
	howToPlay();
})

function  init (){
	setUpModeButtons();
	setUpSquares();
	reset();
}

// Change all squares to the correct color
function changeColors(color){
	// loop through all squares
	for (var i = 0; i<squares.length; i++){
		// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i<num; i++){
		// get random color, push into array
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255g
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

function reset(){
	colorDisplay.textContent = pickedColor;
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colours";
}

function setUpModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function setUpSquares(){
		for (var i = 0; i<squares.length; i++){
	// Add click listeners to squares
		squares[i].addEventListener("click", function(){
			// Grab color of square
			var clickedColor = this.style.background;
			// compare to actual color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again."
			}
		})
	}
}


function howToPlay(){
	var howToText = document.querySelector(".howPlay");	
	if(howToText.style.color === "white") {
		howToBtn.textContent = "How To Play";
		howToText.style.color = "#232323";
	} else {
		howToText.style.color = "white";
		howToBtn.textContent = "OK, Got It!";
	}
}

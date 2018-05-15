var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var backgroundColor = document.body.style.backgroundColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	// mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[0].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
			reset();
		});
	}
}
function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		// add event click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = (this.style.backgroundColor);
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
}
	}
	function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new arr of colors
	pickedColor = pickColor();
	//change  square colors
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}

	// update the h1 color to picked color
	}
	h1.style.backgroundColor = "steelblue";
	}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	// loop through all squares to match colors
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() { 
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = []
	// add num random colors to array (rgb)
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}

	// return array
	return arr;

}

function randomColor(){
	// pick a "red" from 0 255
	var r =Math.floor(Math.random() * 256)
	// pick green from 0 255
	var g =Math.floor(Math.random() * 256)
	// pick blue from  0 255
	var b =Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g +", " + b +")";
	

}
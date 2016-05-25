// document.getElementById("quoteButton").onclick = function() {newQuote();};

var toDisplay = "";

$(".calc-key").click(function() {
	displayNum(this.id);
	// calcResult(this.id);
});

function displayNum (num) {
	switch (num) {

		case "one":
		toDisplay += "1";
		break;

		case "two":
		toDisplay += "2";
		break;

		case "three":
		toDisplay += "3";
		break;

		case "four":
		toDisplay += "4";
		break;

		case "five":
		toDisplay += "5";
		break;

		case "six":
		toDisplay += "6";
		break;

		case "seven":
		toDisplay += "7";
		break;

		case "eight":
		toDisplay += "8";
		break;

		case "nine":
		toDisplay += "9";
		break;

		case "zero":
		if (toDisplay.length > 0) {
			toDisplay += "0";
		}
		break;

		case "AC":
		toDisplay = "";
		break;

		case "CE":
		toDisplay = toDisplay.substring(0,toDisplay.length-1);
		break;

		case "plus":
		toDisplay += "+";
		break;

		case "minus":
		toDisplay += "-";
		break;

		case "times":
		toDisplay += "*";
		break;

		case "divide":
		toDisplay += "/";
		break;

		// Disable 2nd+ decimal, times, divide etc. Make a new function?
		case "point":
		toDisplay += ".";
		// var chars = ["+", "-", "*", "/"];
		// var index = 0;
		// var temp = "";
		// for (var i = toDisplay.length - 1; i >= 0 ; i--) {
		// 	console.log(toDisplay.charAt(i));
		// 	if (toDisplay.charAt(i) === "+" || toDisplay.charAt(i) === "-" || toDisplay.charAt(i) === "*" || toDisplay.charAt(i) === "/") {
		// 		console.log(i, toDisplay.charAt(i));
		// 		break;
		// 	}
		// }		
		break;

		case "percent":
		toDisplay += "%";
		break;

		// Store previous answer and insert it?
		// case "ans":
		// console.log("Ans pressed");
		// break;

		case "equals":
		console.log("equals");
		toDisplay = eval(toDisplay);
		// console.log(result);
		break;

		default:
		toDisplay = "Error";
	}

	console.log("AAA  " + toDisplay);
	if (toDisplay === "") {
		$("#display").html("0");
	}
	else {
		$("#display").html(toDisplay);
	}
}

// function calcResult(num) {
// 	console.log("FGHJJH  " + num);
// }
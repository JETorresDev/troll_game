// JavaScript Battle Game Project

//Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

//Definition of the startBattle() function which begins the game
function startBattle() {
	//clear any old messaged in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	//Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("You're walking through the forest and a troll suddenly appears!\n\nDo you chose to FIGHT the troll?\n\nDo you RUN from the troll?\n\nWill you BRIBE the troll?\n\nPlease enter your response below:").toUpperCase();

	
	//Switch statement to handles the player's choice
	switch(action){
		case "FIGHT": {
			fightBattle();
			break;
		}

		case"RUN":{
			runBattle();
			break;
		}

		case "BRIBE":{
			bribeBattle();
			break;
		}

		default: {
			window.alert("You entered: " + action + ". That is not a valid choice. Please try again.");
			startBattle();
		}//end of SWITCH statement

	}//end of SWITCH statement

}//end of startBattle()



//Definition of the fightBattle() funtion
function fightBattle() {
	//Start by collecting some user responses
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a troll? (YES or NO)").toUpperCase();

	//Logic that analyzes the responses and created the outcomes
	if(skill === "YES" || strong === "YES") {
		// The user said yes to at least one prompt
		document.getElementById("victory").innerHTML = "Greater strength or skill has won the day!<br>You have survived!";
		document.getElementById("win").play();
		document.getElementById("button"). textContent = "Try Again?";

	} else {
		//The user didn't answer YES to both questions
		document.getElementById("defeat").innerHTML = "You lack skill or strength today.<br> You have been DEFEATED!";
		document.getElementById("lose").play();
		document.getElementById("button"). textContent = "Try Again?";
	}

}// end of fightBattle()


//Definition of the runBattle() function
function runBattle() {
	// Collect the user input, test it for NULL then turn it upper case
	let fast = window.prompt("Are you fast? (YES or NO)");
	if(fast != null) {
		fast = fast.toUpperCase();
	} else {
		window.alert("Please type your answer below");
		runBattle();
		return;
	}

	//Now that we have something input, analyze the variable to determin the outcome

	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you!<br>But, can you live with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You failed to out run the troll.<br>You have LOST!"
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
}// end of runBattle


// Definition for  bribeBattle() function
function bribeBattle() {
	//Variable to store the user input
	let money = window.prompt("You must pay the troll-toll\nDo you have any money?(YES or NO)").toUpperCase();
	// Check the response of YES / NO
	if(money === "YES") {
		// User said they have money, now ask for the amount
		let amount = window.prompt ("How much money do you have?\nPlease enter a NUMERIC VALUE");
		//Nested IF statement to check the amount
		if(amount >= 50) {
			// User has the correct amount of money
			document.getElementById("victory").innerHTML = "Great job! The troll accepts your offer.<br>You may pass!";
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Try Again?";

		} else {
			//User had money but not enough
			document.getElementById("defeat").innerHTML = "The troll rejects your coin and yells<br>'YOU MAY NOT PASS!'";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?";

		} //end of nested IF/ELSE
	} else{
		document.getElementById("defeat").innerHTML = "No money!? What were you planning to bribe with?<br> You LOSE!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}

}// End of bribeBattle()


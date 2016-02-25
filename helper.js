/*helper
	---------------------------------------------------------------------------
	This class contains all of the functions that are used by the various other
	classes. They are standard functions that are unspecific to each Generator.
	*/

/*jslint plusplus: true */
"use strict";
			
	/*Selects a random number between 0 and num. */
function getRandom(num) {
	return Math.floor(Math.random() * num);
}

	/*Takes in an array, as well as a value to search for. Returns
		true if the value is in the array, and false otherwise. */
function findValue(value, array) {
	var index;
	for (index = 0; index < array.length; index++) {
		if (array[index] === value) {
			return true;
		}
	}
	return false;
}

	/*Creates a new div which outputs the race and class. It does not override the
		prior characters, but adds a new one. It also adds an 'X' button to delete
		specific characters, and I have plans to add the 'Save' button once I have
		the SQL Server set up. This method of displaying characters may or may not
		be useful. We'll see in the future. */
function writeToMain(){
	//Creates a new Div to contain the result with the id 'res' (see site.css)
	var newDiv = document.createElement('div');
	newDiv.id = 'res';
	newDiv.className = 'res';
	
	//Connects information from Generators to a readable format
	newDiv.innerHTML = "Your character is a " + characterRace + " " + characterClass + ".";
	
	//Creates a 'clear' button to remove the div with
	var btn = document.createElement('button');
	btn.id = 'btn';
	btn.innerHTML = 'X';
	btn.onclick = function() {
		document.getElementsByTagName('body')[0].removeChild(newDiv);
	}
	
	//Adds the clear button to the div, then adds the div to the body
	newDiv.appendChild(btn);
	document.getElementsByTagName('body')[0].appendChild(newDiv);
}
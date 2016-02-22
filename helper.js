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

function writeToMain(){	
	document.getElementById('result').innerHTML = "Your character is a " + characterRace + " " + characterClass + ".";
}
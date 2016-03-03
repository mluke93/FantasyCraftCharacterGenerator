/*helper
	---------------------------------------------------------------------------
	This class contains all of the functions that are used by the various other
	classes. They are standard functions that are unspecific to each Generator.
	*/

/*jslint plusplus: true */
"use strict";
			
  /*Adds the navigation bar to the top of our page.
  
    NOTE: Add Saved Character page and replace link. */
document.getElementById("nav01").innerHTML = "<ul id='menu'>" + "<li><a href='index.html'>Generate Character</a></li>" + "<li><a href='index.html'>Saved Characters (TBD)</a></li>" + "</ul>";

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
	newDiv.innerHTML = "Your character is a " + characterRace + " " + characterClass + ".<br> Strength: " + characterAttr[0] + ", Dexterity: " + characterAttr[1] + ", Constitution: " + characterAttr[2] + ", Intelligence: " + characterAttr[3] + ", Wisdom: " + characterAttr[4] + ", Charisma: " + characterAttr[5]; 
	
	//Creates a 'clear' button to remove the div with NOTE: CURRENTLY UNDER RENOVATION, AS IT'S NOT WORKING.
	/*var btn = document.createElement('button');
	btn.id = 'btn';
	btn.innerHTML = 'X';
	btn.onclick = function() {
		document.getElementsByTagName('body')[0].removeChild(newDiv);
	};
	
	//Adds the clear button to the div, then adds the div to the body
	newDiv.appendChild(btn);
  */
  
	document.getElementsByTagName('body')[0].appendChild(newDiv);
}
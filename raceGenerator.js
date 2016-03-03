/*raceGenerator
	----------------------------------------------------------------------------------
	This class is the second step of the creation process. It requires the class determined
	by the classGenerator. Using that class, it randomly rolls a race for your character,
	then checks to see if the generated class is on that race's "Class Blacklist." If a
	class is on a race's Blacklist, it means that the race is inherently bad at doing what
	that class does. An Orc, for instance, has a -3 Intelligence, which would put them at
	a disadvantage trying to be a Mage or a Keeper (both INT based). Though it wouldn't be
	impossible to play an Orc Mage as a player-created character, it would be in a rough
	position as a randomly-created character.	*/

"use strict";

	/*This function takes the race that was just randomly selected and the class determined by
		the classGenerator, and checks bList to see if the class is on the selected race's
		blacklist. If the class is on the Blacklist for the selected race, it returns true, else
		it returns false. */
function blackList(race, cls) {
	var r;
	for (r in bList) {
		if (bList.hasOwnProperty(r)) {
			if (bList[r].race === race) {
				if (findValue(cls, bList[r].classes)) {
					return true;
				}
			}
		}
	}
	return false;
}

	/*This function randomly generates a race from the races array, then calles blackList()
		to check to see if the class/race combination is bad. If blackList() returns true,
		a new race is generated and blackList() is called again. This continues until a good
		match has been made, and then the race is returned. */
function generateRace(cls) {
	var myRace = races[getRandom(races.length)];
	while (blackList(myRace, cls)) {
		myRace = races[getRandom(races.length)];
	}
	return myRace;
}

	/*Triggers the generateRace() function and returns the generated race to main.html.
		It takes in the class from classGenerator to check the Blacklist*/
function findRace(cls) {
	var rce = generateRace(cls);
	return rce;
}
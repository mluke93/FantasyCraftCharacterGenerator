/*classGenerator
	----------------------------------------------------------------------------------
	This class is the first step of the random character creation process. It does not
	rely on any outside information, and acts as the foundation for the rest of
	creation. Adding classes to this document is fairly simple. A role combination
	needs to be added to generateClass(). Further instruction can be seen below, with
	generateClass(). */

"use strict";

	/*roles contains the five roles that a class can contain. A class is made up of two
		roles, a primary and a secondary. The primary role will be used in the future to
		help determine the playstyle when selecting feats. The secondary will as well, but
		to a lesser degree. NOTE: Classes such as Keeper are pure Specialist. For the purpose
		of this algorithm, it is treated as Specialist/Specialist. */
var roles = ['Combatant', 'Backer', 'Talker', 'Solver', 'Specialist', 'Wildcard'];

	/*pRole and sRole are the recorded primary and secondary roles, respectively. */
var pRole, sRole;

	/*pRole randomly picks a primary role from the 'roles' array. From there
		it picks a random number between 0 to n, where n is the amount of combinations
		that exist with that primary role (ie. for 'Combatant', n = 4 because there are
		4 roles that create a combination with it). Both the primary role and the
		secondary role are stored for future uses, and the combination of the two roles
		determine the class selected for the character. 
		
		This decision tree does not check for combinations that do not match a class. For
		instance, there is no class that is  a Combatant/Specialist, therefore the algorithm
		does not even attempt to check for it.
		
		NOTE: When adding classes to the system, a case needs to be added for its role
		combination. In the case where two classes share a combination (like the Soldier
		and the Martial Artist), add a further switch to decide between the two.
		*/
function generateClass() {
	var myClass;
	pRole = roles[getRandom(roles.length)];
	switch (pRole) {
	case 'Combatant':
		switch (getRandom(4)) {
		case 0:
			sRole = "Combatant";
			switch (getRandom(2)) {
			case 0:
				myClass = "Soldier";
				break;
			case 1:
				myClass = "Martial Artist";
				break;
			}
			break;
		case 1:
			sRole = "Talker";
			myClass = "Lancer";
			break;
		case 2:
			sRole = "Solver";
			myClass = "Scout";
			break;
		case 3:
			sRole = "Wildcard";
			myClass = "Crusader";
			break;
		}
		break;
	case 'Backer':
		switch (getRandom(2)) {
		case 0:
			sRole = "Combatant";
			myClass = "Captain";
			break;
		case 1:
			sRole = "Wildacard";
			myClass = "Sage";
			break;
		}
		break;
	case 'Talker':
		switch (getRandom(2)) {
		case 0:
			sRole = "Combatant";
			myClass = "Assassin";
			break;
		case 1:
			sRole = "Backer";
			myClass = "Courtier";
			break;
		}
		break;
	case 'Solver':
		switch (getRandom(2)) {
		case 0:
			sRole = "Backer";
			myClass = "Emissary";
			break;
		case 1:
			sRole = "Solver";
			myClass = "Explorer";
			break;
		}
		break;
	case 'Specialist':
		switch (getRandom(2)) {
		case 0:
			sRole = "Combatant";
			myClass = "Burglar";
			break;
		case 1:
			sRole = "Specialist";
			myClass = "Keeper";
			break;
		}
		break;
	case 'Wildcard':
		switch (getRandom(2)) {
		case 0:
			sRole = "Backer";
			myClass = "Priest";
			break;
		case 1:
			sRole = "Wildcard";
			myClass = "Mage";
			break;
		}
		break;
	}
	return myClass;
}

	/*Triggers the generateClass() function and returns the generated class to main.html. */
function findClass() {
	var cls = generateClass();
	return cls;
}
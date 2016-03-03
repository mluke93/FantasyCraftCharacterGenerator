/*AttributeGenerator
	-----------------------------------------------------------------------------------
	This class is the third step of the random character creation process. It relies on
  the race and the class generated before it, and uses them to learn how to delegate
  the attributes. It first uses the racial attribute modifiers to set the default
  from 8's in all stats to a slightly modified version using the race's stat boosts
  and penalties (ie. Elf's +4 Wis, -2 Con). Then it uses the class to determine which
  stats the class most needs to succeed (ie. Explorer's favored attributes are
  Intelligence, Dexterity, and Constitution). So it'll prioritize those attributes
  when distributing. Finally, before begining the distribution, it decides if this
  character is going to Min-Max (ie. Their good attributes are incredible, their bad
  attributes are abismal), Specialize (ie. Their good attributes are really good,
  their bad attributes are average/so-so), or Balance (ie. Their good attributes aren't
  much higher than their bad attributes, and are pretty even).
  
  Then it distributes the stats. I'll come back to explain this later.*/

"use strict";

  /*This function modifies attr depending on the race. It finds the race generated from raceGenerator,
    and then finds it in attrList, which contains an array of 6 modifications. Once it finds the array,
    it adds the modifications to attr. For instance, a Dwarf has +4 Con and -2 Dex, so the default stat
    array [8, 8, 8, 8, 8, 8] would be added with [0, -2, 4, 0, 0, 0] for a culmination of [8, 6, 12, 8,
    8, 8] before points are distributed later.
    
    This function also checks to see if the race has any special modifications, such as a "+2 Any," "-2
    Any," or "+2 X or Y." Each race is marked with a series of "special" tags. "Double" means "+2 X or Y"
    and checks a special array of races that have "Double" and picks either X or Y, then modifies it by
    its 'boost' (+2, in the example). "AnyUp" means +2 to any value, chosen at random. "AnyDown" means -2
    to any value.
  */
function modifyByRace(rce, attr) {
  var r, r2;
	for (r in attrList) {
		if (attrList.hasOwnProperty(r)) {
			if (attrList[r].race === rce) {
		    var i;
        for (i = 0; i < attr.length; i++) {
          attr[i] += attrList[r].attributes[i];
        }
        for (i = 0; i < attrList[r].special.length; i++){
          switch (attrList[r].special[i]){
            case 'Double':
              for (r2 in double) {
                if (double.hasOwnProperty(r2)) {
                  if (double[r2].race === rce) {
                    var sz = double[r2].attributes.length;
                    attr[double[r2].attributes[getRandom(sz)]] += double[r2].boost;
                  }
                }
              }
              break;
            case 'AnyUp':
              attr[getRandom(6)] += 2;
              break;
            case 'AnyDown':
              attr[getRandom(6)] -= 2;
              break;
          }
        }
			}
		}
	}
}

/*This function generates all of the attributes the character might have by calling a series of
  functions to do each individual piece. The 6 values correlate to the six stats [Strength,
  Dexterity, Constitution, Intelligence, Wisdom, Charisma]. */
function generateAttributes(cls, rce) {
  var attr = [8, 8, 8, 8, 8, 8];
  modifyByRace(rce, attr);
  
  return attr;
}

  /*Calls the generateAttributes function and handles any other visual elements that COULD be needed. */
function findAttributes(cls, rce) {
  var attr = generateAttributes(cls, rce);
  return attr;
}
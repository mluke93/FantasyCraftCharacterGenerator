	/*roles contains the five roles that a class can contain. A class is made up of two
		roles, a primary and a secondary. The primary role will be used in the future to
		help determine the playstyle when selecting feats. The secondary will as well, but
		to a lesser degree. NOTE: Classes such as Keeper are pure Specialist. For the purpose
		of this algorithm, it is treated as Specialist/Specialist. */
var roles = ['Combatant', 'Backer', 'Talker', 'Solver', 'Specialist', 'Wildcard'];

	/*races contains the core 12 Fantasy Craft races. New races can be added easily by adding to the array. */
var races = ['Drake', 'Dwarf', 'Elf', 'Giant', 'Goblin', 'Human', 'Ogre', 'Orc', 'Pech', 'Rootwalker', 'Saurian', 'Unborn'];

	/*bList is a Blacklist of classes for each race. This Blacklist is used to make sure that
		no bad combinations of race and class are selected, since the process is random. It is
		easy to add a new race to the Blacklist, by appending a race and a list of classes. 
		
		NOTE: This only contains races that have blacklisted classes. If a race has not, it
		is not included.
		
		TODO: Populate bList. Coming back to this after deliberation with a project partner. */
var bList = [{race: 'Drake', classes: ['']},
						{race: 'Dwarf', classes: ['']},
						{race: 'Elf', classes: ['']},
						{race: 'Giant', classes: ['']},
						{race: 'Goblin', classes: ['']},
						{race: 'Human', classes: ['']},
						{race: 'Ogre', classes: ['']},
						{race: 'Orc', classes: ['']},
						{race: 'Pech', classes: ['']},
						{race: 'Rootwalker', classes: ['']},
						{race: 'Saurian', classes: ['']},
						{race: 'Unborn', classes: ['']}];

  /*attrList is a list of races and the set attribute modifiers by race. Any race with a
    variable modification (like Saurians, Unborn, or Drakes) will have their modifications later.
    The attributes array correspond to the six attributes Strength, Dexterity, Constitution,
    Intelligence, Wisdom, and Charisma, respectively (ie. Strength = 0, Charisma = 5). */
var attrList = [{race: 'Drake', attributes: [0, -2, 0, 0, 0, 0], special: ['Double']},
               {race: 'Dwarf', attributes: [0, 0, 4, 0, 0, 0], special: ['']},
						   {race: 'Elf', attributes: [0, -2, 0, 0, 0, 0], special: ['']},
						   {race: 'Giant', attributes: [0, 0, 0, 0, 0, 0], special: ['']},
						   {race: 'Goblin', attributes: [2, 0, 0, 0, 0, 2], special: ['']},
						   {race: 'Human', attributes: [0, 0, 0, 0, 0, 0], special: ['']},
						   {race: 'Ogre', attributes: [2, 0, 4, -2, 0, -2], special: ['']},
						   {race: 'Orc', attributes: [3, 0, 3, -3, 0, 0], special: ['']},
						   {race: 'Pech', attributes: [0, 3, 0, 0, 0, 0], special: ['']},
						   {race: 'Rootwalker', attributes: [0, 0, 0, 0, 0, 0], special: ['']},
						   {race: 'Saurian', attributes: [0, 2, 0, 0, 0, 0], special: ['AnyUp', 'AnyDown']},
						   {race: 'Unborn', attributes: [0, 0, 0, 0, 0, -4], special: ['AnyUp']}];

  /*List that contains all races that have multiple stat boost options. This only contains 1 race
    as of now, but this is meant to be able to be edited in the future. The numbers corrospond to
    the positions from attrList. */
var double = [{race: 'Drake', attributes: [0, 3], boost: 2}];
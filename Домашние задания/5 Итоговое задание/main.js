import { Warrior } from './players/Warrior.js';
import { Archer } from './players/Archer.js';
import { Mage } from './players/Mage.js';
import { Dwarf } from './players/Dwarf.js';
import { Crossbowman } from './players/Crossbowman.js';
import { Demiurge } from './players/Demiurge.js';
import { play } from './game/play.js';

const players = [
	new Warrior(0, 'Воин 1'),
	new Archer(5, 'Лучник 1'),
	new Mage(10, 'Маг 1'),
	new Dwarf(15, 'Гном 1'),
	new Crossbowman(20, 'Арбалетчик 1'),
	new Demiurge(25, 'Демиург 1'),
];

play(players);

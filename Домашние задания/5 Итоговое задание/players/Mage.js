import { Player } from './Player.js';
import { Staff } from '../models/Staff.js';
import chalk from 'chalk';

export class Mage extends Player {
	constructor(position, name) {
		super(position, name);
		this.life = 70;
		this.magic = 100;
		this.attack = 5;
		this.agility = 8;
		this.weapon = new Staff();
		this.description = 'Маг';
	}

	takeDamage(damage) {
		if (this.magic > 50) {
			this.magic -= 12;
			console.log(`${chalk.bgBlue(this.name)} использует магию для уменьшения урона.`);
			super.takeDamage(damage / 2);
		} else {
			super.takeDamage(damage);
		}
	}
}

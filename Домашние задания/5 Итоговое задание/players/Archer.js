import { Player } from './Player.js';
import { Bow } from '../models/Bow.js';

export class Archer extends Player {
	constructor(position, name) {
		super(position, name);
		this.life = 80;
		this.magic = 35;
		this.attack = 5;
		this.agility = 10;
		this.weapon = new Bow();
		this.description = 'Лучник';
	}

	getDamage(distance) {
		return (
			((this.attack + this.weapon.getDamage()) *
				this.getLuck() *
				distance) /
			this.weapon.range
		);
	}
}

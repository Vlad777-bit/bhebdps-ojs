import { Player } from './Player.js';
import { Sword } from '../models/Sword.js';
import { Armor } from '../models/Armor.js';

export class Warrior extends Player {
	constructor(position, name) {
		super(position, name);
		this.life = 120;
		this.speed = 2;
		this.weapon = new Sword();
		this.armor = new Armor('Кираса', 10, 300);
		this.description = 'Воин';
	}
}

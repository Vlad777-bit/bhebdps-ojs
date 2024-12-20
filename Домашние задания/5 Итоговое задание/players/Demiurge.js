import { Mage } from './Mage.js';
import { StormStaff } from '../models/StormStaff.js';

export class Demiurge extends Mage {
	constructor(position, name) {
		super(position, name);
		this.life = 80;
		this.magic = 120;
		this.attack = 6;
		this.luck = 12;
		this.weapon = new StormStaff();
		this.description = 'Демиург';
	}

	getDamage(distance) {
		const baseDamage = super.getDamage(distance);
		return this.magic > 0 && this.getLuck() > 0.6
			? baseDamage * 1.5
			: baseDamage;
	}
}

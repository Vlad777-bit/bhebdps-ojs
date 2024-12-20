export class Armor {
	constructor(name, defense, durability) {
		this.name = name;
		this.defense = defense;
		this.durability = durability;
		this.initDurability = durability;
	}

	absorbDamage(damage) {
		const absorbed = Math.min(damage, this.defense);
		this.durability = Math.max(0, this.durability - absorbed);
		return damage - absorbed;
	}

	isBroken() {
		return this.durability === 0;
	}
}

import chalk from 'chalk';
import { Arm } from '../models/Arm.js';
import { Bow } from '../models/Bow.js';
import { Knife } from '../models/Knife.js';
import { Staff } from '../models/Staff.js';
import { Sword } from '../models/Sword.js';

export class Player {
	constructor(position, name) {
		this.life = 100;
		this.magic = 20;
		this.speed = 1;
		this.attack = 10;
		this.agility = 5;
		this.luck = 10;
		this.level = 1;
		this.experience = 0;
		this.armor = null;
		this.description = 'Игрок';
		this.weapon = new Arm();
		this.position = position;
		this.name = name;
	}

	getLuck() {
		return (Math.random() * 100 + this.luck) / 100;
	}

	takeDamage(damage) {
		if (this.armor && !this.armor.isBroken()) {
			damage = this.armor.absorbDamage(damage);
		}
		this.life = Math.max(0, this.life - damage);
	}

	isDead() {
		return this.life === 0;
	}

	turn(players) {
		const enemy = this.chooseEnemy(players);
		this.moveToEnemy(enemy);
		this.tryAttack(enemy);
		this.checkWeapon();
	}

	chooseEnemy(players) {
		const enemies = players.filter((p) => p !== this && !p.isDead());
		if (enemies.length === 0) {
			return null;
		}

		return enemies.reduce(
			(minEnemy, p) => (p.life < minEnemy.life ? p : minEnemy),
			enemies[0]
		);
	}

	moveToEnemy(enemy) {
		if (this.position < enemy.position) {
			this.position += this.speed;
		} else {
			this.position -= this.speed;
		}
	}

	tryAttack(enemy) {
		const distance = Math.abs(this.position - enemy.position);
		if (distance > this.weapon.range) {
			return;
		}

		const damage = this.attack * this.getLuck();
		enemy.takeDamage(damage);
		console.log(
			`${chalk.bgGreen(this.name)} атакует ${chalk.bgRed(
				enemy.name
			)} и наносит ${chalk.bgGray(damage.toFixed(2))} урона.`
		);
	}

	checkWeapon() {
		if (this.weapon.isBroken()) {
			console.log(
				`Оружие ${this.name} (${this.weapon.name}) сломано! Замена на запасное.`
			);
			if (
				this.weapon instanceof Sword ||
				this.weapon instanceof Bow ||
				this.weapon instanceof Staff
			) {
				this.weapon = new Knife();
			} else {
				this.weapon = new Arm();
			}
		}
	}
}

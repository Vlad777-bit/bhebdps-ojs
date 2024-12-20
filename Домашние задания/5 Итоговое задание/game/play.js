export function play(players) {
	while (players.filter((p) => !p.isDead()).length > 1) {
		players.forEach((player) => {
			if (!player.isDead()) {
				player.turn(players);
			}
		});
	}

	const winner = players.find((p) => !p.isDead());
	console.log(`${winner.name} (${winner.description}) побеждает!`);
}

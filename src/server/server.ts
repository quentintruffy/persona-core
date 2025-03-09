on(
	'playerConnecting',
	(name: string, setKickReason: (reason: string) => void, deferrals: any) => {
		console.log(`${name} est en train de se connecter...`);
	}
);

on('playerDropped', (reason: string) => {
	const playerId = global.source;
	console.log(
		`${GetPlayerName(playerId)} a quitté le serveur. Raison: ${reason}`
	);
});

// Événement personnalisé pour détecter quand le joueur est complètement connecté
onNet('playerEntered', () => {
	const playerId = global.source;
	console.log(`${GetPlayerName(playerId)} est connecté sur le serveur !`);
});

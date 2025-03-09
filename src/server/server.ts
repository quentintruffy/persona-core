on(
	'playerConnecting',
	(name: string, setKickReason: (reason: string) => void, deferrals: any) => {
		console.log(`${name} est en train de se connecter...`);
	}
);

on('playerDropped', (reason: string) => {
	console.log(`a quitté le serveur. Raison: ${reason}`);
});

// Événement personnalisé pour détecter quand le joueur est complètement connecté
onNet('playerEntered', () => {
	console.log(`est connecté sur le serveur !`);
});

import { client_services } from './services/ServiceContainer';
import { ISpawnService } from './services/SpawnService';

on('onClientResourceStart', async (resourceName: string) => {
	if (GetCurrentResourceName() !== resourceName) {
		return;
	}
	console.log(`onClientResourceStart: ${resourceName}`);
});

// Côté client
on('playerConnectedToServer', async (playerId: number, playerName: string) => {
	console.log(
		`Le joueur ${playerName} (ID: ${playerId}) s'est connecté au serveur`
	);
	// Actions à effectuer lorsque le joueur se connecte
	// Récupération du service de spawn
	const spawnService = client_services.get<ISpawnService>('spawnService');

	// Spawn le joueur avec la configuration par défaut
	await spawnService.spawn();
});

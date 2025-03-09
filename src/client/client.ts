import { IPlayerService } from './services/PlayerService';
import { client_services } from './services/ServiceContainer';
import { ISpawnService } from './services/SpawnService';

on('onClientResourceStart', async (resourceName: string) => {
	if (GetCurrentResourceName() !== resourceName) {
		return;
	}
	console.log(`onClientResourceStart: ${resourceName}`);

	const playerServer = client_services.get<IPlayerService>('playerService');

	if (!playerServer.isFullyLoaded()) return;
	// Récupération du service de spawn
	const spawnService = client_services.get<ISpawnService>('spawnService');

	// Spawn le joueur avec la configuration par défaut
	await spawnService.spawn();
});

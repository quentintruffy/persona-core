import { client_services } from './services/ServiceContainer';

on('onClientResourceStart', async (resourceName: string) => {
	if (GetCurrentResourceName() !== resourceName) {
		return;
	}
	console.log(`onClientResourceStart: ${resourceName}`);

	// Récupération du service de spawn
	const spawnService = client_services.get<ISpawnService>('spawnService');

	// Spawn le joueur avec la configuration par défaut
	await spawnService.spawn();
});

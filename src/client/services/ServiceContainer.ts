import { EntityService, IEntityService } from './EntityService';
import { IModelService, ModelService } from './ModelService';
import { IPlayerService, PlayerService } from './PlayerService';
import { ISpawnService, SpawnService } from './SpawnService';
import { IUIService, UIService } from './UIService';

/**
 * Conteneur simple pour l'injection de dépendances
 */
export class ServiceContainer {
	private services: Map<string, any> = new Map();

	/**
	 * Enregistre un service dans le conteneur
	 */
	register<T>(name: string, service: T): void {
		this.services.set(name, service);
	}

	/**
	 * Récupère un service du conteneur
	 */
	get<T>(name: string): T {
		const service = this.services.get(name);
		if (!service) {
			throw new Error(`Service '${name}' non trouvé dans le conteneur`);
		}
		return service as T;
	}
}

/**
 * Initialise et configure les services
 */
const initializeServices = (): ServiceContainer => {
	const container = new ServiceContainer();

	// Création des services de base
	const modelService = new ModelService();
	const entityService = new EntityService();
	const uiService = new UIService();

	// Enregistrement des services de base
	container.register<IModelService>('modelService', modelService);
	container.register<IEntityService>('entityService', entityService);
	container.register<IUIService>('uiService', uiService);

	// Création des services dépendants
	const playerService = new PlayerService(entityService);
	container.register<IPlayerService>('playerService', playerService);

	// Création du service de spawn
	const spawnService = new SpawnService(
		modelService,
		entityService,
		uiService,
		playerService
	);
	container.register<ISpawnService>('spawnService', spawnService);

	return container;
};

// Point d'entrée de l'application
// --------------------------

// Initialisation des services
export const client_services = initializeServices();

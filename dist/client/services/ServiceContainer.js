"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client_services = void 0;
/**
 * Conteneur simple pour l'injection de dépendances
 */
class ServiceContainer {
    constructor() {
        this.services = new Map();
    }
    /**
     * Enregistre un service dans le conteneur
     */
    register(name, service) {
        this.services.set(name, service);
    }
    /**
     * Récupère un service du conteneur
     */
    get(name) {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service '${name}' non trouvé dans le conteneur`);
        }
        return service;
    }
}
/**
 * Initialise et configure les services
 */
const initializeServices = () => {
    const container = new ServiceContainer();
    // Création des services de base
    const modelService = new ModelService();
    const entityService = new EntityService();
    const uiService = new UIService();
    // Enregistrement des services de base
    container.register('modelService', modelService);
    container.register('entityService', entityService);
    container.register('uiService', uiService);
    // Création des services dépendants
    const playerService = new PlayerService(entityService);
    container.register('playerService', playerService);
    // Création du service de spawn
    const spawnService = new SpawnService(modelService, entityService, uiService, playerService);
    container.register('spawnService', spawnService);
    return container;
};
// Point d'entrée de l'application
// --------------------------
// Initialisation des services
exports.client_services = initializeServices();

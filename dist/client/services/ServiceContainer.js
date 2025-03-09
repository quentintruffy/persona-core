import { EntityService } from './EntityService';
import { ModelService } from './ModelService';
import { PlayerService } from './PlayerService';
import { SpawnService } from './SpawnService';
import { UIService } from './UIService';
export class ServiceContainer {
    constructor() {
        this.services = new Map();
    }
    register(name, service) {
        this.services.set(name, service);
    }
    get(name) {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service '${name}' non trouvé dans le conteneur`);
        }
        return service;
    }
}
const initializeServices = () => {
    const container = new ServiceContainer();
    const modelService = new ModelService();
    const entityService = new EntityService();
    const uiService = new UIService();
    container.register('modelService', modelService);
    container.register('entityService', entityService);
    container.register('uiService', uiService);
    const playerService = new PlayerService(entityService);
    container.register('playerService', playerService);
    const spawnService = new SpawnService(modelService, entityService, uiService, playerService);
    container.register('spawnService', spawnService);
    return container;
};
export const client_services = initializeServices();
//# sourceMappingURL=ServiceContainer.js.map
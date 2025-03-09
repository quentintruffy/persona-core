"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceContainer_1 = require("./services/ServiceContainer");
on('onClientResourceStart', async (resourceName) => {
    if (GetCurrentResourceName() !== resourceName) {
        return;
    }
    console.log(`onClientResourceStart: ${resourceName}`);
    // Récupération du service de spawn
    const spawnService = ServiceContainer_1.client_services.get('spawnService');
    // Spawn le joueur avec la configuration par défaut
    await spawnService.spawn();
});

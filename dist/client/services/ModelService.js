"use strict";
/**
 * Service pour la gestion des modèles
 */
class ModelService {
    /**
     * Charge un modèle de façon asynchrone
     */
    async load(modelName) {
        return new Promise((resolve, reject) => {
            const modelHash = GetHashKey(modelName);
            if (!modelHash) {
                return reject(new Error(`Modèle ${modelName} introuvable`));
            }
            if (!IsModelInCdimage(modelHash)) {
                return reject(new Error(`Modèle ${modelName} n'est pas dans le cdimage`));
            }
            RequestModel(modelHash);
            const checkModel = setInterval(() => {
                if (HasModelLoaded(modelHash)) {
                    clearInterval(checkModel);
                    resolve(modelHash);
                }
            }, 100);
        });
    }
    /**
     * Libère un modèle de la mémoire
     */
    release(modelHash) {
        SetModelAsNoLongerNeeded(modelHash);
    }
    /**
     * Vérifie si un modèle est chargé
     */
    isLoaded(modelHash) {
        return HasModelLoaded(modelHash);
    }
}

/**
 * Interface pour un service de gestion de modèles
 */
export interface IModelService {
	load(modelName: string): Promise<number>;
	release(modelHash: number): void;
	isLoaded(modelHash: number): boolean;
}

/**
 * Service pour la gestion des modèles
 */
export class ModelService implements IModelService {
	/**
	 * Charge un modèle de façon asynchrone
	 */
	async load(modelName: string): Promise<number> {
		return new Promise((resolve, reject) => {
			const modelHash = GetHashKey(modelName);

			if (!modelHash) {
				return reject(new Error(`Modèle ${modelName} introuvable`));
			}

			if (!IsModelInCdimage(modelHash)) {
				return reject(
					new Error(`Modèle ${modelName} n'est pas dans le cdimage`)
				);
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
	release(modelHash: number): void {
		SetModelAsNoLongerNeeded(modelHash);
	}

	/**
	 * Vérifie si un modèle est chargé
	 */
	isLoaded(modelHash: number): boolean {
		return HasModelLoaded(modelHash);
	}
}

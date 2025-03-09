/**
 * Type pour les coordonnées 3D
 */
type Vector3 = {
	x: number;
	y: number;
	z: number;
};

/**
 * Interface pour un service de gestion de joueur
 */
interface IPlayerService {
	getId(): number;
	getPedId(): number;
	setModel(modelHash: number): Promise<number>;
	setControl(hasControl: boolean, flags?: number): void;
	resurrect(position: Vector3, heading: number): void;
	clearTasks(): void;
	resetCamera(): void;
	setupDefaultAppearance(): void;
}

/**
 * Service pour la gestion du joueur
 */
class PlayerService implements IPlayerService {
	private entityService: IEntityService;

	constructor(entityService: IEntityService) {
		this.entityService = entityService;
	}

	/**
	 * Récupère l'ID du joueur
	 */
	getId(): number {
		return PlayerId();
	}

	/**
	 * Récupère l'ID du ped du joueur
	 */
	getPedId(): number {
		return PlayerPedId();
	}

	/**
	 * Définit le modèle du joueur
	 */
	async setModel(modelHash: number): Promise<number> {
		const playerId = this.getId();
		SetPlayerModel(playerId, modelHash);

		// Attente pour s'assurer que le modèle est appliqué
		await new Promise((resolve) => setTimeout(resolve, 100));

		return this.getPedId();
	}

	/**
	 * Définit le contrôle du joueur
	 */
	setControl(hasControl: boolean, flags: number = 0): void {
		SetPlayerControl(this.getId(), hasControl, flags);
	}

	/**
	 * Ressuscite le joueur à une position donnée
	 */
	resurrect(position: Vector3, heading: number): void {
		NetworkResurrectLocalPlayer(
			position.x,
			position.y,
			position.z,
			heading,
			this.getId(),
			false
		);
	}

	/**
	 * Efface les tâches du joueur
	 */
	clearTasks(): void {
		ClearPedTasksImmediately(this.getPedId());
	}

	/**
	 * Réinitialise la caméra du joueur
	 */
	resetCamera(): void {
		SetGameplayCamRelativeHeading(0);
	}

	/**
	 * Configure l'apparence par défaut du ped
	 */
	setupDefaultAppearance(): void {
		SetPedDefaultComponentVariation(this.getPedId());
	}
}

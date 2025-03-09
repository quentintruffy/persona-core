/**
 * Interface pour un service de gestion d'interface utilisateur
 */
interface IUIService {
	fadeIn(duration: number): Promise<void>;
	fadeOut(duration: number): Promise<void>;
	hideLoadingScreens(): void;
}

/**
 * Service pour la gestion de l'interface utilisateur
 */
class UIService implements IUIService {
	/**
	 * Fait un fondu en entrée
	 */
	async fadeIn(duration: number): Promise<void> {
		return new Promise<void>((resolve) => {
			DoScreenFadeIn(duration);
			setTimeout(resolve, duration);
		});
	}

	/**
	 * Fait un fondu en sortie
	 */
	async fadeOut(duration: number): Promise<void> {
		return new Promise<void>((resolve) => {
			DoScreenFadeOut(duration);
			setTimeout(resolve, duration);
		});
	}

	/**
	 * Ferme tous les écrans de chargement
	 */
	hideLoadingScreens(): void {
		ShutdownLoadingScreen();
		ShutdownLoadingScreenNui();
	}
}

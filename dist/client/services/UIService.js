"use strict";
/**
 * Service pour la gestion de l'interface utilisateur
 */
class UIService {
    /**
     * Fait un fondu en entrée
     */
    async fadeIn(duration) {
        return new Promise((resolve) => {
            DoScreenFadeIn(duration);
            setTimeout(resolve, duration);
        });
    }
    /**
     * Fait un fondu en sortie
     */
    async fadeOut(duration) {
        return new Promise((resolve) => {
            DoScreenFadeOut(duration);
            setTimeout(resolve, duration);
        });
    }
    /**
     * Ferme tous les écrans de chargement
     */
    hideLoadingScreens() {
        ShutdownLoadingScreen();
        ShutdownLoadingScreenNui();
    }
}

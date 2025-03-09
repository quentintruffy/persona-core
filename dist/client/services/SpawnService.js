"use strict";
/**
 * Service de spawn du joueur utilisant les autres services
 */
class SpawnService {
    constructor(modelService, entityService, uiService, playerService) {
        this.modelService = modelService;
        this.entityService = entityService;
        this.uiService = uiService;
        this.playerService = playerService;
        // Configuration par défaut
        this.defaultConfig = {
            position: { x: -269.4, y: -955.3, z: 31.2 },
            heading: 205.0,
            model: 'mp_m_freemode_01',
            fadeInDuration: 500,
            visible: true,
            resurrect: true,
        };
    }
    /**
     * Récupère la configuration par défaut
     */
    getDefaultConfig() {
        return { ...this.defaultConfig };
    }
    /**
     * Initialise et spawn le joueur avec des options personnalisables
     */
    async spawn(config = {}) {
        try {
            // Fusion de la config par défaut avec les options fournies
            const spawnConfig = { ...this.defaultConfig, ...config };
            const { position, heading, model, fadeInDuration, visible, resurrect } = spawnConfig;
            // Fondu en sortie au début
            await this.uiService.fadeOut(0);
            // Fermeture des écrans de chargement
            this.uiService.hideLoadingScreens();
            // Chargement du modèle
            const modelHash = await this.modelService.load(model);
            // Configuration du joueur
            const ped = await this.playerService.setModel(modelHash);
            // Placement du joueur
            this.entityService.setPosition(ped, position, heading);
            // Configuration de la visibilité
            if (visible) {
                this.entityService.setVisible(ped, true, false);
            }
            // Résurrection si demandé
            if (resurrect) {
                this.playerService.resurrect(position, heading);
                this.playerService.clearTasks();
            }
            // Finalisation de la caméra et du contrôle
            this.playerService.resetCamera();
            this.entityService.freeze(ped, false);
            this.playerService.setControl(true, 0);
            // Apparence par défaut
            this.playerService.setupDefaultAppearance();
            // Libération du modèle
            this.modelService.release(modelHash);
            // Fondu en entrée à la fin
            await this.uiService.fadeIn(fadeInDuration);
        }
        catch (error) {
            console.error("Erreur lors de l'initialisation du joueur:", error);
        }
    }
}

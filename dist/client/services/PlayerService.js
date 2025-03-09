"use strict";
/**
 * Service pour la gestion du joueur
 */
class PlayerService {
    entityService;
    constructor(entityService) {
        this.entityService = entityService;
    }
    /**
     * Récupère l'ID du joueur
     */
    getId() {
        return PlayerId();
    }
    /**
     * Récupère l'ID du ped du joueur
     */
    getPedId() {
        return PlayerPedId();
    }
    /**
     * Définit le modèle du joueur
     */
    async setModel(modelHash) {
        const playerId = this.getId();
        SetPlayerModel(playerId, modelHash);
        // Attente pour s'assurer que le modèle est appliqué
        await new Promise((resolve) => setTimeout(resolve, 100));
        return this.getPedId();
    }
    /**
     * Définit le contrôle du joueur
     */
    setControl(hasControl, flags = 0) {
        SetPlayerControl(this.getId(), hasControl, flags);
    }
    /**
     * Ressuscite le joueur à une position donnée
     */
    resurrect(position, heading) {
        NetworkResurrectLocalPlayer(position.x, position.y, position.z, heading, this.getId(), false);
    }
    /**
     * Efface les tâches du joueur
     */
    clearTasks() {
        ClearPedTasksImmediately(this.getPedId());
    }
    /**
     * Réinitialise la caméra du joueur
     */
    resetCamera() {
        SetGameplayCamRelativeHeading(0);
    }
    /**
     * Configure l'apparence par défaut du ped
     */
    setupDefaultAppearance() {
        SetPedDefaultComponentVariation(this.getPedId());
    }
}

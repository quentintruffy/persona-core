"use strict";
/**
 * Service pour la gestion des entités
 */
class EntityService {
    /**
     * Définit la position d'une entité
     */
    setPosition(entity, position, heading) {
        SetEntityCoords(entity, position.x, position.y, position.z, false, false, false, false);
        if (heading !== undefined) {
            SetEntityHeading(entity, heading);
        }
    }
    /**
     * Définit la visibilité d'une entité
     */
    setVisible(entity, visible, networkVisible = false) {
        SetEntityVisible(entity, visible, networkVisible);
    }
    /**
     * Gèle ou dégèle une entité
     */
    freeze(entity, frozen) {
        FreezeEntityPosition(entity, frozen);
    }
}

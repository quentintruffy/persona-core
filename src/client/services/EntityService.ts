import { Vector3 } from './PlayerService';

/**
 * Interface pour un service de gestion d'entités
 */
export interface IEntityService {
	setPosition(entity: number, position: Vector3, heading?: number): void;
	setVisible(entity: number, visible: boolean, networkVisible?: boolean): void;
	freeze(entity: number, frozen: boolean): void;
}

/**
 * Service pour la gestion des entités
 */
export class EntityService implements IEntityService {
	/**
	 * Définit la position d'une entité
	 */
	setPosition(entity: number, position: Vector3, heading?: number): void {
		SetEntityCoords(
			entity,
			position.x,
			position.y,
			position.z,
			false,
			false,
			false,
			false
		);

		if (heading !== undefined) {
			SetEntityHeading(entity, heading);
		}
	}

	/**
	 * Définit la visibilité d'une entité
	 */
	setVisible(
		entity: number,
		visible: boolean,
		networkVisible: boolean = false
	): void {
		SetEntityVisible(entity, visible, networkVisible);
	}

	/**
	 * Gèle ou dégèle une entité
	 */
	freeze(entity: number, frozen: boolean): void {
		FreezeEntityPosition(entity, frozen);
	}
}

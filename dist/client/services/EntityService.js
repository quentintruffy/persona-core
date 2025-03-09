export class EntityService {
    setPosition(entity, position, heading) {
        SetEntityCoords(entity, position.x, position.y, position.z, false, false, false, false);
        if (heading !== undefined) {
            SetEntityHeading(entity, heading);
        }
    }
    setVisible(entity, visible, networkVisible = false) {
        SetEntityVisible(entity, visible, networkVisible);
    }
    freeze(entity, frozen) {
        FreezeEntityPosition(entity, frozen);
    }
}
//# sourceMappingURL=EntityService.js.map
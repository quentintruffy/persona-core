var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PlayerService {
    constructor(entityService) {
        this.entityService = entityService;
    }
    getId() {
        return PlayerId();
    }
    getPedId() {
        return PlayerPedId();
    }
    setModel(modelHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerId = this.getId();
            SetPlayerModel(playerId, modelHash);
            yield new Promise((resolve) => setTimeout(resolve, 100));
            return this.getPedId();
        });
    }
    setControl(hasControl, flags = 0) {
        SetPlayerControl(this.getId(), hasControl, flags);
    }
    resurrect(position, heading) {
        NetworkResurrectLocalPlayer(position.x, position.y, position.z, heading, this.getId(), false);
    }
    clearTasks() {
        ClearPedTasksImmediately(this.getPedId());
    }
    resetCamera() {
        SetGameplayCamRelativeHeading(0);
    }
    isFullyLoaded() {
        return (NetworkIsPlayerActive(PlayerId()) &&
            !IsScreenFadedOut() &&
            !IsScreenFadingOut() &&
            !IsScreenFadingIn() &&
            !IsPlayerSwitchInProgress());
    }
    setupDefaultAppearance() {
        SetPedDefaultComponentVariation(this.getPedId());
    }
}
//# sourceMappingURL=PlayerService.js.map
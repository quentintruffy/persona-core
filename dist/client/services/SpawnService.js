var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class SpawnService {
    constructor(modelService, entityService, uiService, playerService) {
        this.modelService = modelService;
        this.entityService = entityService;
        this.uiService = uiService;
        this.playerService = playerService;
        this.defaultConfig = {
            position: { x: -269.4, y: -955.3, z: 31.2 },
            heading: 205.0,
            model: 'mp_m_freemode_01',
            fadeInDuration: 500,
            visible: true,
            resurrect: true,
        };
    }
    getDefaultConfig() {
        return Object.assign({}, this.defaultConfig);
    }
    spawn() {
        return __awaiter(this, arguments, void 0, function* (config = {}) {
            try {
                const spawnConfig = Object.assign(Object.assign({}, this.defaultConfig), config);
                const { position, heading, model, fadeInDuration, visible, resurrect } = spawnConfig;
                yield this.uiService.fadeOut(0);
                this.uiService.hideLoadingScreens();
                const modelHash = yield this.modelService.load(model);
                const ped = yield this.playerService.setModel(modelHash);
                this.entityService.setPosition(ped, position, heading);
                if (visible) {
                    this.entityService.setVisible(ped, true, false);
                }
                if (resurrect) {
                    this.playerService.resurrect(position, heading);
                    this.playerService.clearTasks();
                }
                this.playerService.resetCamera();
                this.entityService.freeze(ped, false);
                this.playerService.setControl(true, 0);
                this.playerService.setupDefaultAppearance();
                this.modelService.release(modelHash);
                yield this.uiService.fadeIn(fadeInDuration);
            }
            catch (error) {
                console.error("Erreur lors de l'initialisation du joueur:", error);
            }
        });
    }
}
//# sourceMappingURL=SpawnService.js.map
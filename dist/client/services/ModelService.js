var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ModelService {
    load(modelName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const modelHash = GetHashKey(modelName);
                if (!modelHash) {
                    return reject(new Error(`Modèle ${modelName} introuvable`));
                }
                if (!IsModelInCdimage(modelHash)) {
                    return reject(new Error(`Modèle ${modelName} n'est pas dans le cdimage`));
                }
                RequestModel(modelHash);
                const checkModel = setInterval(() => {
                    if (HasModelLoaded(modelHash)) {
                        clearInterval(checkModel);
                        resolve(modelHash);
                    }
                }, 100);
            });
        });
    }
    release(modelHash) {
        SetModelAsNoLongerNeeded(modelHash);
    }
    isLoaded(modelHash) {
        return HasModelLoaded(modelHash);
    }
}
//# sourceMappingURL=ModelService.js.map
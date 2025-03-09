"use strict";
/// <reference path="../../node_modules/@citizenfx/server/natives_server.d.ts" />
/// <reference path="../../node_modules/@citizenfx/server/index.d.ts" />
on('playerConnecting', (name, setKickReason, deferrals) => {
    console.log(`${name} est en train de se connecter...`);
});
on('playerDropped', (reason) => {
    console.log(`a quitté le serveur. Raison: ${reason}`);
});
// Événement personnalisé pour détecter quand le joueur est complètement connecté
onNet('playerEntered', () => {
    console.log(`est connecté sur le serveur !`);
});

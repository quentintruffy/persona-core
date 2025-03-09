on(
	'playerConnecting',
	(name: string, setKickReason: (reason: string) => void, deferrals: any) => {
		console.log(`${name} est en train de se connecter Client...`);
	}
);

on('onClientResourceStart', async (resourceName: string) => {
	if (GetCurrentResourceName() !== resourceName) {
		return;
	}
	console.log(`onClientResourceStart: ${resourceName}`);

	await initializePlayer();
});

const spawnPos = { x: -269.4, y: -955.3, z: 31.2, heading: 205.0 };

const initializePlayer = async () => {
	try {
		const modelName = 'mp_m_freemode_01';
		const modelHash = GetHashKey(modelName);
		if (!modelHash) {
			throw new Error(`Model ${modelName} not found`);
		}
		if (!IsModelInCdimage(modelHash)) {
			throw new Error(`Model ${modelName} not in cdimage`);
		}
		RequestModel(modelHash);
		await new Promise((resolve) => setTimeout(resolve, 500));

		const playerId = PlayerId();
		SetPlayerModel(playerId, modelHash);

		await new Promise((resolve) => setTimeout(resolve, 0));

		const ped = PlayerPedId();

		DoScreenFadeOut(0);
		ShutdownLoadingScreen();
		ShutdownLoadingScreenNui();

		await new Promise((resolve) => setTimeout(resolve, 500));

		SetEntityCoords(
			ped,
			spawnPos.x,
			spawnPos.y,
			spawnPos.z,
			false,
			false,
			false,
			false
		);
		SetEntityHeading(ped, spawnPos.heading);

		SetEntityVisible(ped, true, false);
		NetworkResurrectLocalPlayer(
			spawnPos.x,
			spawnPos.y,
			spawnPos.z,
			spawnPos.heading,
			playerId,
			true
		);
		ClearPedTasksImmediately(PlayerPedId());

		SetGameplayCamRelativeHeading(0);
		FreezeEntityPosition(ped, false);
		SetPlayerControl(playerId, true, 0);

		DoScreenFadeIn(500);

		SetPedDefaultComponentVariation(ped);
		SetModelAsNoLongerNeeded(modelHash);
	} catch (error) {
		console.error('Error initializing player:', error);
	}
};

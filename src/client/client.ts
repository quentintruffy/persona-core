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

		// Wait for model to load properly
		await new Promise<void>((resolve) => {
			const checkModel = setInterval(() => {
				if (HasModelLoaded(modelHash)) {
					clearInterval(checkModel);
					resolve();
				}
			}, 100);
		});

		const playerId = PlayerId();
		SetPlayerModel(playerId, modelHash);

		// Small delay to ensure player model is set
		await new Promise((resolve) => setTimeout(resolve, 100));

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
		ClearPedTasksImmediately(ped);

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

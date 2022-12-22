(() => {
	const addButton = async () => {
		const adCanvas = document.getElementsByClassName(
			"x6s0dn4 x78zum5 xdt5ytf xl56j7k x1n2onr6 x1ja2u2z x19gl646 xbumo9q"
		)[0];

		console.log(adCanvas.classList);
	};

	chrome.runtime.onStartup.addListener(async () => {
		await addButton();
	});
})();

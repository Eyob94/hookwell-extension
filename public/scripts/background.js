chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	chrome.tabs.onUpdated((tab, tabId) => {
		sendResponse(tab);
	});
});

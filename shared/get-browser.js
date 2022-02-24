let browser;

function calcBrowser() {
	function isSafari() {
		const res = uni.getSystemInfoSync();
		return res.model;
	}

	return {
		isSafari: isSafari(),
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(isSafari())
	};
}

function getBrowser() {
	if (!browser) {
		browser = calcBrowser();
	}

	return browser;
}

export {
	getBrowser
};

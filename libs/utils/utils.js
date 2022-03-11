export function getAllRect(context, selector) {
	return new Promise((resolve) => {
		uni.createSelectorQuery()
			.in(context)
			.selectAll(selector)
			.boundingClientRect()
			.exec((rect = []) => resolve(rect[0]));
	});
}

export function getRect(context, selector) {
	return new Promise((resolve) => {
		uni.createSelectorQuery()
			.in(context)
			.select(selector)
			.boundingClientRect()
			.exec((rect = []) => resolve(rect[0]));
	});
}

export function requestAnimationFrame(cb) {
	const systemInfo = uni.getSystemInfoSync();
	if (systemInfo.platform === 'devtools') {
		return setTimeout(() => {
			cb();
		}, 1000 / 30);
	}
	return uni
		.createSelectorQuery()
		.selectViewport()
		.boundingClientRect()
		.exec(() => {
			cb();
		});
}

let support;

function getMobile() {
	if (navigator.userAgent.indexOf('Mobile') > -1) {
		return true;
	} else {
		return false;
	}
}

function calcSupport() {
	return {
		smoothScroll: true,
		// #ifdef H5
		touch: getMobile(),
		// #endif
		// #ifndef H5
		touch: true,
		// #endif
		passiveListener: function checkPassiveListener() {
			let supportsPassive = false;

			try {
				const opts = Object.defineProperty({}, 'passive', {
					// eslint-disable-next-line
					get() {
						supportsPassive = true;
					}

				});
			} catch (e) { // No support
			}

			return supportsPassive;
		}(),
		gestures: function checkGestures() {
			return false;
		}()
	};
}

function getSupport() {
	if (!support) {
		support = calcSupport();
	}
	return support;
}

export {
	getSupport
};

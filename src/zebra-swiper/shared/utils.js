function deleteProps(obj) {
	const object = obj;
	Object.keys(object).forEach(key => {
		try {
			object[key] = null;
		} catch (e) { // no getter for object
		}

		try {
			delete object[key];
		} catch (e) { // something got wrong
		}
	});
}

function getTranslate(el, axis = 'x') {
	let curTransform;
	if (axis === 'x') {
		curTransform = el.translate;
	}

	if (axis === 'y') {
		curTransform = el.translate;
	}
	return curTransform || 0;
}

function isObject(o) {
	return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) ===
		'Object';
}

function now() {
	return Date.now();
}

function nextTick(callback, delay = 0) {
	return setTimeout(callback, delay);
}

function extend(...args) {
	const to = Object(args[0]);
	const noExtend = ['__proto__', 'constructor', 'prototype'];

	for (let i = 1; i < args.length; i += 1) {
		const nextSource = args[i];

		if (nextSource !== undefined && nextSource !== null) {
			const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

			for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
				const nextKey = keysArray[nextIndex];
				const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

				if (desc !== undefined && desc.enumerable) {
					if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
						if (nextSource[nextKey].__swiper__) {
							to[nextKey] = nextSource[nextKey];
						} else {
							extend(to[nextKey], nextSource[nextKey]);
						}
					} else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
						to[nextKey] = {};

						if (nextSource[nextKey].__swiper__) {
							to[nextKey] = nextSource[nextKey];
						} else {
							extend(to[nextKey], nextSource[nextKey]);
						}
					} else {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
		}
	}

	return to;
}

function setCSSProperty(el, varName, varValue) {
	el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
	swiper,
	targetPosition,
	side
}) {
	const window = getWindow();
	const startPosition = -swiper.translate;
	let startTime = null;
	let time;
	const duration = swiper.params.speed;
	swiper.wrapperEl.style.scrollSnapType = 'none';
	window.cancelAnimationFrame(swiper.cssModeFrameID);
	const dir = targetPosition > startPosition ? 'next' : 'prev';

	const isOutOfBound = (current, target) => {
		return dir === 'next' && current >= target || dir === 'prev' && current <= target;
	};

	const animate = () => {
		time = new Date().getTime();

		if (startTime === null) {
			startTime = time;
		}

		const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
		const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
		let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

		if (isOutOfBound(currentPosition, targetPosition)) {
			currentPosition = targetPosition;
		}

		swiper.wrapperEl.scrollTo({
			[side]: currentPosition
		});

		if (isOutOfBound(currentPosition, targetPosition)) {
			swiper.wrapperEl.style.overflow = 'hidden';
			swiper.wrapperEl.style.scrollSnapType = '';
			setTimeout(() => {
				swiper.wrapperEl.style.overflow = '';
				swiper.wrapperEl.scrollTo({
					[side]: currentPosition
				});
			});
			window.cancelAnimationFrame(swiper.cssModeFrameID);
			return;
		}

		swiper.cssModeFrameID = window.requestAnimationFrame(animate);
	};

	animate();
}

export {
	deleteProps,
	extend,
	nextTick,
	now,
	setCSSProperty,
	animateCSSModeScroll,
	getTranslate,
	isObject
};

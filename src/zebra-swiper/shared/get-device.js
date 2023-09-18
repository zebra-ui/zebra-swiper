import {
	getSupport
} from './get-support.js';
let deviceCached;

function calcDevice({
	userAgent
} = {}) {
	const support = getSupport();
	const device = {
		ios: false,
		android: false
	};

	const res = uni.getSystemInfoSync();

	if (res.platform == "android") {
		device.os = 'android';
		device.android = true;
	}

	if (res.platform == "ios") {
		device.os = 'ios';
		device.ios = true;
	} // Export object


	return device;
}

function getDevice(overrides = {}) {
	if (!deviceCached) {
		deviceCached = calcDevice(overrides);
	}

	return deviceCached;
}

export {
	getDevice
};

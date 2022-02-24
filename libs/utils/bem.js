import array from './array.js';
import object from './object.js';
var PREFIX = 'zebra-';

function join(name, mods) {
	name = PREFIX + name;
	mods = mods.map(function(mod) {
		return name + '--' + mod;
	});
	mods.unshift(name);
	return mods.join(' ');
}

function traversing(mods, conf) {
	if (!conf) {
		return;
	}
	if (typeof conf === 'string' || typeof conf === 'number') {
		mods.push(conf);
	} else if (array(conf)) {
		conf.forEach(function(item) {
			traversing(mods, item);
		});
	} else if (typeof conf === 'object') {
		object(conf).forEach(function(key) {
			conf[key] && mods.push(key);
		});
	}
}

function bem(name, conf) {
	var mods = [];
	traversing(mods, conf);
	return join(name, mods);
}

export default bem;

class ChildDomSimulation {
	constructor(vueNative) {
		let domSimulation = this;
		Object.assign(domSimulation, {
			native: vueNative,
			transition(value) {
				vueNative.transition(`${value}ms`)
			},
			transform(value) {
				vueNative.transform(value)
			},
			addClass(value) {
				vueNative['wrapperClass'] = value;
			},
			addStyle(value) {
				vueNative['wrapperStyle'] = {
					...vueNative['wrapperStyle'],
					...value
				};
			},
			css(value) {
				vueNative.setCss(value)
			},
			transitionEnd(callback, duration) {
				setTimeout(callback, duration)
			}
		})
		return domSimulation;
	}
}

export default ChildDomSimulation;

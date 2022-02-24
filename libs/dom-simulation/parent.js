class DomSimulation {
	constructor(vueNative) {
		let domSimulation = this;
		Object.assign(domSimulation, {
			native: vueNative,
			transition(name, value) {
				vueNative.transition(`${value}ms`)
			},
			transform(value) {
				vueNative.transform(value)
			},
			addClass(value) {
				vueNative.addClass(value);
			},
			addStyle(value) {
				vueNative['wrapperStyle'] = {
					...vueNative['wrapperStyle'],
					...value
				};
			},
			css(value) {
				vueNative['wrapperStyle'] = {
					...vueNative['wrapperStyle'],
					...value
				};
			},
			cubeShadowCss(value) {
				vueNative['cubeShadowStyle'] = {
					...vueNative['cubeShadowStyle'],
					...value
				};
			},
			cubeShadowTransform(value) {
				vueNative['cubeShadowStyle'] = {
					...vueNative['cubeShadowStyle'],
					'transform': value
				};
			},
			cubeShadowTransition(value) {
				vueNative['cubeShadowStyle'] = {
					...vueNative['cubeShadowStyle'],
					'transition-duration': `${value}ms`
				};
			},
			off(event, handler) {
				vueNative.$off(event)
			},
			transitionEnd(callback, duration) {
				setTimeout(callback, duration)
			},
			children(index) {
				return vueNative.children.find((item) => {
					return item.dataSwiperSlideIndex == index;
				})
			},
			addNextElClass(value) {
				vueNative.addNextElClass(value);
			},
			addPrevElClass(value) {
				vueNative.addPrevElClass(value);
			},
			removeNextElClass(value) {
				vueNative.removeNextElClass(value);
			},
			removePrevElClass(value) {
				vueNative.removePrevElClass(value);
			},
			addPaginationClass(value) {
				vueNative.addPaginationClass(value);
			},
			removePaginationClass(value) {
				vueNative.removePaginationClass(value);
			},
			paginationCss(value) {
				vueNative.setPaginationCss(value)
			},
		})
		return domSimulation;
	}
}

export default DomSimulation;

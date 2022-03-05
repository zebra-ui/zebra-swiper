class DomSimulation {
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
			willChange(value) {
				vueNative.willChange(value)
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
				vueNative.setCss(value);
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
			addScrollbarClass(value) {
				vueNative.addScrollbarClass(value);
			},
			removeScrollbarClass(value) {
				vueNative.removeScrollbarClass(value);
			},
			scrollbarCss(value) {
				vueNative.setScrollbarCss(value)
			},
			scrollbarTransition(value) {
				vueNative.scrollbarTransition(`${value}ms`)
			},
			scrollbarTransform(value) {
				vueNative.scrollbarTransform(value)
			},
			scrollbarItemCss(value) {
				vueNative.setScrollbarItemCss(value)
			},
			scrollbarItemTransition(value) {
				vueNative.scrollbarItemTransition(`${value}ms`)
			},
			scrollbarItemTransform(value) {
				vueNative.scrollbarItemTransform(value)
			},
		})
		return domSimulation;
	}
}

export default DomSimulation;

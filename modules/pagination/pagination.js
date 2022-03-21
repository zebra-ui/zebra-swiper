import classesToSelector from '../../shared/classes-to-selector.js';

export default function Pagination({
	swiper,
	extendParams,
	on,
	emit
}) {
	const pfx = 'swiper-pagination';
	extendParams({
		pagination: {
			el: null,
			bulletElement: 'span',
			clickable: false,
			hideOnClick: false,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: false,
			type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
			dynamicBullets: false,
			dynamicMainBullets: 1,
			formatFractionCurrent: (number) => number,
			formatFractionTotal: (number) => number,
			bulletClass: `${pfx}-bullet`,
			bulletActiveClass: `${pfx}-bullet-active`,
			modifierClass: `${pfx}-`,
			currentClass: `${pfx}-current`,
			totalClass: `${pfx}-total`,
			hiddenClass: `${pfx}-hidden`,
			progressbarFillClass: `${pfx}-progressbar-fill`,
			progressbarOppositeClass: `${pfx}-progressbar-opposite`,
			clickableClass: `${pfx}-clickable`,
			lockClass: `${pfx}-lock`,
			horizontalClass: `${pfx}-horizontal`,
			verticalClass: `${pfx}-vertical`,
		},
	});

	swiper.pagination = {
		el: null,
		$el: null,
		bullets: [],
	};

	let bulletSize;
	let dynamicBulletIndex = 0;

	function isPaginationDisabled() {
		return (
			!swiper.params.pagination.el ||
			!swiper.pagination.el ||
			!swiper.pagination.$el
		);
	}

	function setSideBullets($bulletEl, position) {

		const {
			bulletActiveClass
		} = swiper.params.pagination;
		const bullets = swiper.pagination.bullets;
		if (bullets[$bulletEl.index + position]) {
			bullets[$bulletEl.index + position].addPaginationItemClass(
				`${bulletActiveClass}-${position>0?'next':'prev'}`);
		}
		if (bullets[$bulletEl.index + (position > 0 ? position + 1 : position -
				1)]) {

			bullets[$bulletEl.index + (position > 0 ? position + 1 : position - 1)].addPaginationItemClass(
				`${bulletActiveClass}-${position>0?'next':'prev'}-${position>0?'next':'prev'}`);
		}
	}

	function update() {
		// Render || Update Pagination bullets/items
		const rtl = swiper.rtl;
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const slidesLength =
			swiper.virtual && swiper.params.virtual.enabled ?
			swiper.virtual.slides.length :
			swiper.slides.length;
		const $el = swiper.pagination.$el;
		// Current/Total
		let current;
		const total = swiper.params.loop ?
			Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) :
			swiper.snapGrid.length;
		if (swiper.params.loop) {
			current = Math.ceil(
				(swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup,
			);
			if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
				current -= slidesLength - swiper.loopedSlides * 2;
			}
			if (current > total - 1) current -= total;
			if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
		} else if (typeof swiper.snapIndex !== 'undefined') {
			current = swiper.snapIndex;
		} else {
			current = swiper.activeIndex || 0;
		}
		// Types
		if (
			params.type === 'bullets' &&
			swiper.pagination.bullets &&
			swiper.pagination.bullets.length > 0
		) {
			const bullets = swiper.pagination.bullets;
			let firstIndex;
			let lastIndex;
			let midIndex;
			if (params.dynamicBullets) {
				bulletSize = bullets[0][swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'];
				swiper.$wrapperEl.paginationCss({
					[swiper.isHorizontal() ? 'width' :
						'height'
					]: `${bulletSize * (params.dynamicMainBullets + 4)}px`
				});
				if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
					dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
					if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
						dynamicBulletIndex = params.dynamicMainBullets - 1;
					} else if (dynamicBulletIndex < 0) {
						dynamicBulletIndex = 0;
					}
				}
				firstIndex = Math.max(current - dynamicBulletIndex, 0);
				lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
				midIndex = (lastIndex + firstIndex) / 2;
			}

			bullets.forEach((item) => {
				item.removePaginationItemClass(
					['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
					.map((suffix) => `${params.bulletActiveClass}${suffix}`)
					.join(' '),
				);
			})
			if ($el.length > 1) {
				bullets.each((bullet) => {
					const $bullet = $(bullet);
					const bulletIndex = $bullet.index();
					if (bulletIndex === current) {
						$bullet.addClass(params.bulletActiveClass);
					}
					if (params.dynamicBullets) {
						if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
							$bullet.addClass(`${params.bulletActiveClass}-main`);
						}
						if (bulletIndex === firstIndex) {
							setSideBullets($bullet, 'prev');
						}
						if (bulletIndex === lastIndex) {
							setSideBullets($bullet, 'next');
						}
					}
				});
			} else {
				const $bullet = bullets[current];
				const bulletIndex = $bullet.index;
				$bullet.addPaginationItemClass(params.bulletActiveClass);
				if (params.dynamicBullets) {
					const $firstDisplayedBullet = bullets[firstIndex];
					const $lastDisplayedBullet = bullets[lastIndex];
					for (let i = firstIndex; i <= lastIndex; i += 1) {
						bullets[i].addPaginationItemClass(`${params.bulletActiveClass}-main`);
					}
					if (swiper.params.loop) {
						if (bulletIndex >= bullets.length) {
							for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
								bullets[bullets.length - i].addPaginationItemClass(`${params.bulletActiveClass}-main`);
							}
							bullets
								[bullets.length - params.dynamicMainBullets - 1]
								.addPaginationItemClass(`${params.bulletActiveClass}-prev`);
						} else {
							setSideBullets($firstDisplayedBullet, -1);
							setSideBullets($lastDisplayedBullet, 1);
						}
					} else {
						setSideBullets($firstDisplayedBullet, -1);
						setSideBullets($lastDisplayedBullet, 1);
					}
				}
			}
			if (params.dynamicBullets) {
				const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
				const bulletsOffset =
					(bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
				const offsetProp = rtl ? 'right' : 'left';
				bullets.forEach((item) => {
					item.setCss({
						[swiper.isHorizontal() ? offsetProp : 'top']: `${bulletsOffset}px`
					})
				})
				// bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
			}
		}
		if (params.type === 'fraction') {
			// $el
			// 	.find(classesToSelector(params.currentClass))
			// 	.text(params.formatFractionCurrent(current + 1));
			swiper.native.paginationContent.text = params.formatFractionCurrent(current + 1);
			swiper.native.paginationContent.total = params.formatFractionTotal(total);
			swiper.native.updateData({
				paginationContent: swiper.native.paginationContent,
			})
			// $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
		}
		if (params.type === 'progressbar') {
			let progressbarDirection;
			if (params.progressbarOpposite) {
				progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
			} else {
				progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
			}
			const scale = (current + 1) / total;
			let scaleX = 1;
			let scaleY = 1;
			if (progressbarDirection === 'horizontal') {
				scaleX = scale;
			} else {
				scaleY = scale;
			}
			// $el
			// .find(classesToSelector(params.progressbarFillClass))
			swiper.native.paginationContent.transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`);
			swiper.native.paginationContent.transition(swiper.params.speed);
			swiper.native.updateData({
				paginationContent: swiper.native.paginationContent,
			})
		}
		if (params.type === 'custom' && params.renderCustom) {
			$el.html(params.renderCustom(swiper, current + 1, total));
			emit('paginationRender', $el[0]);
		} else {
			emit('paginationUpdate', $el[0]);
		}
		if (swiper.params.watchOverflow && swiper.enabled) {
			swiper.$wrapperEl[swiper.isLocked ? 'addPaginationClass' : 'removePaginationClass'](params.lockClass);
		}
	}

	function render() {
		// Render Container
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const slidesLength =
			swiper.virtual && swiper.params.virtual.enabled ?
			swiper.virtual.slides.length :
			swiper.slides.length;

		const $el = swiper.pagination.$el;
		let paginationHTML = 0;
		if (params.type === 'bullets') {
			let numberOfBullets = swiper.params.loop ?
				Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) :
				swiper.snapGrid.length;
			if (
				swiper.params.freeMode &&
				swiper.params.freeMode.enabled &&
				!swiper.params.loop &&
				numberOfBullets > slidesLength
			) {
				numberOfBullets = slidesLength;
			}
			for (let i = 0; i < numberOfBullets; i += 1) {
				if (params.renderBullet) {
					paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
				}
				// else {
				// 	paginationHTML +=
				// 		`<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
				// }
				// paginationHTML += 1;
				else {
					swiper.native.paginationType = "bullets";
					swiper.native.paginationContent.push({
						index: i,
						outerWidth: 16,
						outerHeight: 16,
						classContent: [params.bulletClass],
						styleContent: {},
						addPaginationItemClass: function(value) {
							this.classContent = Array.from(new Set([...this.classContent,
								...value.split(" ")
							]));
						},
						removePaginationItemClass: function(value) {
							this.classContent = this.classContent.filter(item => !value.split(
								" ").includes(item));
						},
						setCss: function(value) {
							// vueNative['itemStyle'] = {
							// 	...vueNative['itemStyle'],
							// 	...value
							// };Object.keys(value).forEach((item) => {
							Object.keys(value).forEach((item) => {
								// this.$set(this.itemStyle, item, value[item])
								this.styleContent[item] = value[item];
							})

							// this.$set(this.itemStyle, item, value[item])
						}
					});
					swiper.native.updateData({
						paginationType: swiper.native.paginationType,
						paginationContent: swiper.native.paginationContent,
					})
				}

			}
			// $el.html(paginationHTML);

			// swiper.$wrapperEl.addPaginationItemClass(params.bulletClass)

			// swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
			swiper.pagination.bullets = swiper.native.paginationContent;
		}
		if (params.type === 'fraction') {
			if (params.renderFraction) {
				paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
			} else {
				swiper.native.paginationType = "fraction";
				// paginationHTML =
				// 	`<span class="${params.currentClass}"></span>` +
				// 	' / ' +
				// 	`<span class="${params.totalClass}"></span>`;
				swiper.native.paginationContent = {
					currentClass: params.currentClass,
					totalClass: params.totalClass
				}
				swiper.native.updateData({
					paginationType: swiper.native.paginationType,
					paginationContent: swiper.native.paginationContent,
				})
			}
		}
		if (params.type === 'progressbar') {
			if (params.renderProgressbar) {
				paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
			} else {
				swiper.native.paginationType = "progressbar";
				// paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
				swiper.native.paginationContent = {
					progressbarFillClass: params.progressbarFillClass,
					styleContent: {
						transform: '',
						transitionDuration: ''
					},
					transition: function(value) {
						this.styleContent.transitionDuration = `${value}ms`;
					},
					transform: function(value) {
						this.styleContent.transform = value;
					},
				}
				swiper.native.updateData({
					paginationType: swiper.native.paginationType,
					paginationContent: swiper.native.paginationContent,
				})
			}
			// $el.html(paginationHTML);
		}
		if (params.type !== 'custom') {
			emit('paginationRender', swiper.pagination.$el[0]);
		}
	}

	function init() {
		const params = swiper.params.pagination;
		if (!params.el) return;
		// swiper.native.showIndicators = true;
		swiper.native.updateData({
			showIndicators: true
		})
		let $el = params.el;

		if (params.type === 'bullets' && params.clickable) {
			swiper.$wrapperEl.addPaginationClass(params.clickableClass);
		}

		swiper.$wrapperEl.addPaginationClass(params.modifierClass + params.type);
		swiper.$wrapperEl.addPaginationClass(params.modifierClass + swiper.params.direction);

		if (params.type === 'bullets' && params.dynamicBullets) {
			swiper.$wrapperEl.addPaginationClass(`${params.modifierClass}${params.type}-dynamic`);
			dynamicBulletIndex = 0;
			if (params.dynamicMainBullets < 1) {
				params.dynamicMainBullets = 1;
			}
		}
		if (params.type === 'progressbar' && params.progressbarOpposite) {
			swiper.$wrapperEl.addPaginationClass(params.progressbarOppositeClass);
		}

		if (params.clickable) {
			swiper.on('paginationItemClick', function onClick(_s, itemIndex) {
				let index = itemIndex * swiper.params.slidesPerGroup;
				if (swiper.params.loop) index += swiper.loopedSlides;
				swiper.slideTo(index);
			});
		}

		Object.assign(swiper.pagination, {
			$el,
			el: $el,
		});

		if (!swiper.enabled) {
			swiper.$wrapperEl.addPaginationClass(params.lockClass);
		}
	}

	function destroy() {
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const $el = swiper.pagination.$el;
		if (params.clickable) {
			swiper.off('paginationItemClick', classesToSelector(params.bulletClass));
		}
	}

	on('init update', () => {
		if (swiper.native.paginationContent) {
			swiper.native.updateData({
				paginationContent: []
			})
		}
		// swiper.native.paginationContent = [];
		init();
		render();
		update();
	});
	on('activeIndexChange', () => {
		if (swiper.params.loop) {
			update();
		} else if (typeof swiper.snapIndex === 'undefined') {
			update();
		}
	});
	on('snapIndexChange', () => {
		if (!swiper.params.loop) {
			update();
		}
	});
	on('slidesLengthChange', () => {
		if (swiper.params.loop) {
			render();
			update();
		}
	});
	on('snapGridLengthChange', () => {
		if (!swiper.params.loop) {
			render();
			update();
		}
	});
	on('destroy', () => {
		destroy();
	});
	on('enable disable', () => {
		const {
			$el
		} = swiper.pagination;
		if ($el) {
			$el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
		}
	});
	on('lock unlock', () => {
		update();
	});
	on('click', (_s, e) => {
		const targetEl = e.target;
		const {
			$el
		} = swiper.pagination;
		if (
			swiper.params.pagination.el &&
			swiper.params.pagination.hideOnClick &&
			$el.length > 0 &&
			!$(targetEl).hasClass(swiper.params.pagination.bulletClass)
		) {
			if (
				swiper.navigation &&
				((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) ||
					(swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
			)
				return;
			const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
			if (isHidden === true) {
				emit('paginationShow');
			} else {
				emit('paginationHide');
			}
			$el.toggleClass(swiper.params.pagination.hiddenClass);
		}
	});

	Object.assign(swiper.pagination, {
		render,
		update,
		init,
		destroy,
	});
}

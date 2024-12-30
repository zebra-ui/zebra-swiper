import classesToSelector from '../../components/shared/classes-to-selector'
import createElementIfNotDefined from '../../components/shared/create-element-if-not-defined'
import {
  elementIndex,
  elementOuterSize,
  elementParents,
  isWeb,
  makeElementsArray
} from '../../components/shared/utils'
import type {
  PaginationOptions,
  PaginationMethods
} from '../../types/module/pagination'
import type { SwiperInterface } from '../../types/swiper-class'
import { convertSingleValue } from '../../components/components-shared/utils'
import type { FreeModeOptions } from '../../types/modules/free-mode'
import { ClassList } from '../../components/adapter/index'
import { reactive } from 'vue'

export default function Pagination({
  swiper,
  extendParams,
  on,
  emit
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
  emit: (event: string, ...args: any[]) => void
}): void {
  const pfx = 'swiper-pagination'

  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      bulletSize: 8,
      clickable: false,
      hideOnClick: false,
      renderBullet: undefined,
      renderProgressbar: undefined,
      renderFraction: undefined,
      renderCustom: undefined,
      progressbarOpposite: false,
      type: 'bullets',
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number: number) => number,
      formatFractionTotal: (number: number) => number,
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
      paginationDisabledClass: `${pfx}-disabled`
    } as PaginationOptions
  })

  // @ts-ignore
  swiper.pagination = {
    // @ts-ignore
    el: null,
    bullets: []
  } as PaginationMethods

  let bulletSize = 0
  let dynamicBulletIndex = 0

  function isPaginationDisabled(): boolean {
    return (
      !(swiper.params.pagination as PaginationOptions)?.el ||
      !swiper.pagination.el ||
      (Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0)
    )
  }

  function setSideBullets(
    bulletEl: HTMLElement,
    position: 'prev' | 'next',
    bullets?: HTMLElement[]
  ) {
    const params = swiper.params.pagination as PaginationOptions
    if (!bulletEl) return

    if (isWeb()) {
      bulletEl = bulletEl[
        `${position === 'prev' ? 'previous' : 'next'}ElementSibling`
      ] as HTMLElement
    } else {
      if (!bullets) return
      const bulletIndex = bullets.findIndex((item) => item === bulletEl)
      bulletEl = bullets[
        position === 'prev' ? bulletIndex - 1 : bulletIndex + 1
      ] as HTMLElement
    }

    if (bulletEl) {
      bulletEl.classList.add(`${params.bulletActiveClass}-${position}`)
      const nextBulletEl = bulletEl[
        `${position === 'prev' ? 'previous' : 'next'}ElementSibling`
      ] as HTMLElement
      if (nextBulletEl) {
        nextBulletEl.classList.add(
          `${params.bulletActiveClass}-${position}-${position}`
        )
      }
    }
  }

  function getMoveDirection(
    prevIndex: number,
    nextIndex: number,
    length: number
  ): 'next' | 'previous' | undefined {
    prevIndex = prevIndex % length
    nextIndex = nextIndex % length
    if (nextIndex === prevIndex + 1) {
      return 'next'
    } else if (nextIndex === prevIndex - 1) {
      return 'previous'
    }
    return undefined
  }

  function onBulletClick(e: Event, paginationIndex?: number) {
    let targetIndex = 0

    if (isWeb()) {
      const bulletEl = (e.target as HTMLElement).closest(
        classesToSelector(
          (swiper.params.pagination as PaginationOptions).bulletClass as string
        )
      )
      if (!bulletEl) return
      e.preventDefault()
      targetIndex =
        (elementIndex(bulletEl) as number) *
        (swiper.params.slidesPerGroup as number)
    } else {
      targetIndex = paginationIndex as number
    }

    if (swiper.params.loop) {
      if (swiper.realIndex === targetIndex) return
      const moveDirection = getMoveDirection(
        swiper.realIndex,
        targetIndex,
        swiper.slides.length
      )
      if (moveDirection === 'next') {
        swiper.slideNext()
      } else if (moveDirection === 'previous') {
        swiper.slidePrev()
      } else {
        swiper.slideToLoop(targetIndex)
      }
    } else {
      swiper.slideTo(targetIndex)
    }
  }

  function update() {
    if (isPaginationDisabled()) return

    const params = swiper.params.pagination as PaginationOptions
    const { rtl } = swiper
    if (isPaginationDisabled()) return

    const el = makeElementsArray(swiper.pagination.el)

    // Current/Total
    let current: number
    let previousIndex: number
    const slidesLength =
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual?.enabled
        ? swiper.virtual.slides.length
        : swiper.slides.length
    const total = swiper.params.loop
      ? Math.ceil(slidesLength / (swiper.params.slidesPerGroup as number))
      : swiper.snapGrid.length

    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0
      current =
        (swiper.params.slidesPerGroup as number) > 1
          ? Math.floor(
              swiper.realIndex / (swiper.params.slidesPerGroup as number)
            )
          : swiper.realIndex
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex
      previousIndex = swiper.previousSnapIndex
    } else {
      previousIndex = swiper.previousIndex || 0
      current = swiper.activeIndex || 0
    }

    // Types
    if (
      params.type === 'bullets' &&
      swiper.pagination.bullets &&
      swiper.pagination.bullets.length > 0
    ) {
      const { bullets } = swiper.pagination

      let firstIndex: number
      let lastIndex: number
      let midIndex: number

      if (params.dynamicBullets) {
        if (isWeb()) {
          bulletSize = elementOuterSize(
            bullets[0],
            swiper.isHorizontal() ? 'width' : 'height',
            true
          )
        } else {
          bulletSize = convertSingleValue(params.bulletSize, 'number') + 8
        }
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] =
            `${bulletSize * ((params.dynamicMainBullets as number) + 4)}px`
        })

        if (
          (params.dynamicMainBullets as number) > 1 &&
          previousIndex !== undefined
        ) {
          dynamicBulletIndex += current - (previousIndex || 0)
          if (dynamicBulletIndex > (params.dynamicMainBullets as number) - 1) {
            dynamicBulletIndex = (params.dynamicMainBullets as number) - 1
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0)
        lastIndex =
          firstIndex +
          (Math.min(bullets.length, params.dynamicMainBullets as number) - 1)
        midIndex = (lastIndex + firstIndex) / 2
      }

      bullets.forEach((bulletEl) => {
        const classesToRemove = [
          '',
          '-next',
          '-next-next',
          '-prev',
          '-prev-prev',
          '-main'
        ]
          .map((suffix) => `${params.bulletActiveClass}${suffix}`)
          .map((s) =>
            typeof s === 'string' && s.includes(' ') ? s.split(' ') : s
          )
          // @ts-ignore
          .flat()
        bulletEl.classList.remove(...classesToRemove)
      })

      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet)
          if (bulletIndex === current) {
            bullet.classList.add(
              ...(params.bulletActiveClass as string).split(' ')
            )
          }
          if (params.dynamicBullets) {
            if (
              (bulletIndex as number) >= firstIndex &&
              (bulletIndex as number) <= lastIndex
            ) {
              bullet.classList.add(
                ...`${params.bulletActiveClass}-main`.split(' ')
              )
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev')
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next')
            }
          }
        })
      } else {
        const bullet = bullets[current]
        if (bullet) {
          bullet.classList.add(
            ...(params.bulletActiveClass as string).split(' ')
          )
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute(
              'part',
              bulletIndex === current ? 'bullet-active' : 'bullet'
            )
          })
        }
        if (params.dynamicBullets) {
          // @ts-ignore
          const firstDisplayedBullet = bullets[firstIndex]
          // @ts-ignore
          const lastDisplayedBullet = bullets[lastIndex]
          // @ts-ignore
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(
                ...`${params.bulletActiveClass}-main`.split(' ')
              )
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev', bullets)
          setSideBullets(lastDisplayedBullet, 'next', bullets)
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(
          bullets.length,
          (params.dynamicMainBullets as number) + 4
        )
        const bulletsOffset =
          (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
          // @ts-ignore
          midIndex * bulletSize
        const offsetProp = rtl ? 'right' : 'left'
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] =
            `${bulletsOffset}px`
        })
      }
    }

    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        if (isWeb()) {
          subEl
            .querySelectorAll(classesToSelector(params.currentClass))
            .forEach((fractionEl) => {
              // @ts-ignore
              fractionEl.textContent = params.formatFractionCurrent(current + 1)
            })
          subEl
            .querySelectorAll(classesToSelector(params.totalClass))
            .forEach((totalEl) => {
              // @ts-ignore
              totalEl.textContent = params.formatFractionTotal(total)
            })
        } else {
          // @ts-ignore
          subEl.paginationData.fractions.current.content =
            // @ts-ignore
            params.formatFractionCurrent(current + 1)
          // @ts-ignore
          subEl.paginationData.fractions.total.content =
            // @ts-ignore
            params.formatFractionTotal(total)
        }
      }

      if (params.type === 'progressbar') {
        let progressbarDirection: string
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal()
            ? 'vertical'
            : 'horizontal'
        } else {
          progressbarDirection = swiper.isHorizontal()
            ? 'horizontal'
            : 'vertical'
        }

        const scale = (current + 1) / total
        let scaleX = 1
        let scaleY = 1

        if (progressbarDirection === 'horizontal') {
          scaleX = scale
        } else {
          scaleY = scale
        }

        if (isWeb()) {
          subEl
            .querySelectorAll(classesToSelector(params.progressbarFillClass))
            // @ts-ignore
            .forEach((progressEl: HTMLElement) => {
              progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`
              progressEl.style.transitionDuration = `${swiper.params.speed}ms`
            })
        } else {
          // @ts-ignore
          subEl.paginationData.progressbar.style = {
            transform: `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`,
            transitionDuration: `${swiper.params.speed}ms`
          }
        }
      }

      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total)
        if (subElIndex === 0) emit('paginationRender', subEl)
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl)
        emit('paginationUpdate', subEl)
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](
          params.lockClass as string
        )
      }
    })
  }

  function render() {
    const params = swiper.params.pagination as PaginationOptions
    if (isPaginationDisabled()) return

    const slidesLength =
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual?.enabled
        ? swiper.virtual.slides.length
        : swiper.grid && swiper.params.grid?.rows && swiper.params.grid.rows > 1
          ? swiper.slides.length / Math.ceil(swiper.params.grid.rows)
          : swiper.slides.length

    let { el } = swiper.pagination
    // @ts-ignore
    el = makeElementsArray(el) as HTMLElement[]

    let paginationHTML = ''
    const paginationBullet: {
      classList: ClassList
      style: Record<string, string>
    }[] = []
    const paginationFraction = {
      current: {
        classList: '',
        content: ''
      },
      total: {
        classList: '',
        content: ''
      }
    }
    const paginationProgressbar = {
      classList: ''
    }
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop
        ? Math.ceil(slidesLength / (swiper.params.slidesPerGroup as number))
        : swiper.snapGrid.length
      if (
        swiper.params.freeMode &&
        (swiper.params.freeMode as FreeModeOptions).enabled &&
        numberOfBullets > slidesLength
      ) {
        numberOfBullets = slidesLength
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(
            swiper,
            i,
            params.bulletClass as string
          )
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${
            params.bulletClass
          }"></${params.bulletElement}>`
          if (!isWeb()) {
            paginationBullet.push({
              // @ts-ignore
              classList: reactive(new ClassList(params.bulletClass)),
              style: reactive({})
            })
          }
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(
          swiper,
          params.currentClass as string,
          params.totalClass as string
        )
      } else {
        paginationHTML =
          `<span class="${params.currentClass}"></span>` +
          ' / ' +
          `<span class="${params.totalClass}"></span>`
        if (!isWeb()) {
          // @ts-ignore
          paginationFraction.current.classList = reactive(
            new ClassList(params.currentClass)
          )
          // @ts-ignore
          paginationFraction.total.classList = reactive(
            new ClassList(params.totalClass)
          )
        }
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(
          swiper,
          params.progressbarFillClass as string
        )
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`
        if (!isWeb()) {
          // @ts-ignore
          paginationProgressbar.classList = reactive(
            new ClassList(params.progressbarFillClass)
          )
        }
      }
    }
    swiper.pagination.bullets = []
    // @ts-ignore
    el.forEach((subEl) => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || ''
      }
      if (params.type === 'bullets') {
        if (isWeb()) {
          swiper.pagination.bullets.push(
            ...subEl.querySelectorAll(classesToSelector(params.bulletClass))
          )
        } else {
          // @ts-ignore
          swiper.pagination.bullets.push(...paginationBullet)
          subEl.paginationData.bullets.push(...paginationBullet)
        }
      }
      if (params.type === 'fraction' && !isWeb()) {
        subEl.paginationData.fractions = paginationFraction
      }
      if (params.type === 'progressbar' && !isWeb()) {
        subEl.paginationData.progressbar = paginationProgressbar
      }
    })

    if (params.type !== 'custom') {
      // @ts-ignore
      emit('paginationRender', el[0])
    }
  }

  function init() {
    swiper.params.pagination = createElementIfNotDefined(
      swiper,
      // @ts-ignore
      swiper.originalParams.pagination,
      swiper.params.pagination,
      {
        el: 'swiper-pagination'
      }
    )
    const params = swiper.params.pagination as PaginationOptions
    if (!params.el) return

    let el: HTMLElement | HTMLElement[] | null = null

    if (typeof params.el === 'string' && swiper.isElement && isWeb()) {
      el = (swiper.el as HTMLElement).querySelector(params.el) as HTMLElement
    }
    if (!el && typeof params.el === 'string' && isWeb()) {
      el = Array.from(document.querySelectorAll(params.el)) as HTMLElement[]
    }
    if (!el) {
      el = params.el as HTMLElement
    }

    if (!el || (el as HTMLElement[]).length === 0) return

    if (
      swiper.params.uniqueNavElements &&
      typeof params.el === 'string' &&
      Array.isArray(el) &&
      el.length > 1 &&
      isWeb()
    ) {
      el = Array.from(
        (swiper.el as HTMLElement).querySelectorAll(params.el)
      ) as HTMLElement[]
      if (el.length > 1) {
        el = el.filter((subEl) => {
          // @ts-ignore
          if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false
          return true
        })[0]
      }
    }

    if (Array.isArray(el) && el.length === 1) el = el[0]

    Object.assign(swiper.pagination, {
      el
    })

    el = makeElementsArray(el)

    el.forEach((subEl) => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '))
      }

      subEl.classList.add(
        (params.modifierClass as string) + (params.type as string)
      )
      subEl.classList.add(
        swiper.isHorizontal()
          ? (params.horizontalClass as string)
          : (params.verticalClass as string)
      )

      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`)
        dynamicBulletIndex = 0
        if ((params.dynamicMainBullets as number) < 1) {
          params.dynamicMainBullets = 1
        }
      }

      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass as string)
      }

      if (params.clickable) {
        if (isWeb()) {
          subEl.addEventListener('click', onBulletClick)
        } else {
          // @ts-ignore
          subEl.addEventListener('click', onBulletClick.bind(this), 'onClick')
        }
      }

      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass as string)
      }
    })
  }

  function destroy() {
    const params = swiper.params.pagination as PaginationOptions
    if (isPaginationDisabled()) return

    let { el } = swiper.pagination
    if (el) {
      // @ts-ignore
      el = makeElementsArray(el) as HTMLElement[]
      // @ts-ignore
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass as string)
        subEl.classList.remove(
          (params.modifierClass as string) + (params.type as string)
        )
        subEl.classList.remove(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
        )
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '))
          if (isWeb()) {
            subEl.removeEventListener('click', onBulletClick)
          } else {
            subEl.removeEventListener(
              'click',
              // @ts-ignore
              onBulletClick.bind(this),
              'onClick'
            )
          }
        }
      })
    }

    if (swiper.pagination.bullets) {
      swiper.pagination.bullets.forEach((subEl) =>
        subEl.classList.remove(...(params.bulletActiveClass || '').split(' '))
      )
    }
  }

  // 添加事件监听
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return
    const params = swiper.params.pagination as PaginationOptions
    let { el } = swiper.pagination
    // @ts-ignore
    el = makeElementsArray(el) as HTMLElement[]
    // @ts-ignore
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass)
      subEl.classList.add(
        swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
      )
    })
  })

  on('init', () => {
    if ((swiper.params.pagination as PaginationOptions).enabled === false) {
      disable()
    } else {
      init()
      render()
      update()
    }
  })

  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update()
    }
  })

  on('snapIndexChange', () => {
    update()
  })

  on('snapGridLengthChange', () => {
    render()
    update()
  })

  on('destroy', () => {
    destroy()
  })

  on('enable disable', () => {
    let { el } = swiper.pagination
    if (el) {
      // @ts-ignore
      el = makeElementsArray(el) as HTMLElement[]
      // @ts-ignore
      el.forEach((subEl) =>
        subEl.classList[swiper.enabled ? 'remove' : 'add'](
          (swiper.params.pagination as PaginationOptions).lockClass
        )
      )
    }
  })

  on('lock unlock', () => {
    update()
  })

  on('click', (_s, e) => {
    const targetEl = e.target as HTMLElement
    const el = makeElementsArray(swiper.pagination.el)
    if (isWeb()) {
      if (
        (swiper.params.pagination as PaginationOptions)?.el &&
        (swiper.params.pagination as PaginationOptions).hideOnClick &&
        el &&
        el.length > 0 &&
        !targetEl.classList.contains(
          (swiper.params.pagination as PaginationOptions).bulletClass as string
        )
      ) {
        if (
          swiper.navigation &&
          ((swiper.navigation.nextEl &&
            targetEl === swiper.navigation.nextEl) ||
            (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        )
          return
        const isHidden = el[0].classList.contains(
          (swiper.params.pagination as PaginationOptions).hiddenClass as string
        )
        if (isHidden === true) {
          emit('paginationShow')
        } else {
          emit('paginationHide')
        }
        el.forEach((subEl) =>
          subEl.classList.toggle(
            (swiper.params.pagination as PaginationOptions)
              .hiddenClass as string
          )
        )
      }
    } else {
      if (
        (swiper.params.pagination as PaginationOptions)?.el &&
        (swiper.params.pagination as PaginationOptions).hideOnClick &&
        el &&
        el.length > 0
      ) {
        if (
          swiper.navigation &&
          ((swiper.navigation.nextEl &&
            targetEl === swiper.navigation.nextEl) ||
            (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        )
          return
        const isHidden = el[0].classList.contains(
          (swiper.params.pagination as PaginationOptions).hiddenClass as string
        )
        if (isHidden === true) {
          emit('paginationShow')
        } else {
          emit('paginationHide')
        }
        el.forEach((subEl) =>
          subEl.classList.toggle(
            (swiper.params.pagination as PaginationOptions)
              .hiddenClass as string
          )
        )
      }
    }
  })

  const enable = () => {
    swiper.el.classList.remove(
      (swiper.params.pagination as PaginationOptions)
        .paginationDisabledClass as string
    )
    let { el } = swiper.pagination
    if (el) {
      // @ts-ignore
      el = makeElementsArray(el) as HTMLElement[]
      // @ts-ignore
      el.forEach((subEl) =>
        subEl.classList.remove(
          (swiper.params.pagination as PaginationOptions)
            .paginationDisabledClass
        )
      )
    }
    init()
    render()
    update()
  }

  const disable = () => {
    swiper.el.classList.add(
      (swiper.params.pagination as PaginationOptions)
        .paginationDisabledClass as string
    )
    let { el } = swiper.pagination
    if (el) {
      // @ts-ignore
      el = makeElementsArray(el) as HTMLElement[]
      // @ts-ignore
      el.forEach((subEl) =>
        subEl.classList.add(
          (swiper.params.pagination as PaginationOptions)
            .paginationDisabledClass
        )
      )
    }
    destroy()
  }

  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  })
}

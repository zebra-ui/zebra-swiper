import createShadow from '../../components/shared/create-shadow'
import effectInit from '../../components/shared/effect-init'
import {
  createElement,
  getRotateFix,
  isWeb
} from '../../components/shared/utils'
import type { CubeEffectOptions } from '../../types/module/effect-cube'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function EffectCube({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    } as CubeEffectOptions
  })

  const createSlideShadows = (
    slideEl: HTMLElement | SwiperItemInstance,
    progress: number,
    isHorizontal: boolean
  ) => {
    if (isWeb()) {
      let shadowBefore = isHorizontal
        ? (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-left')
        : (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-top')
      let shadowAfter = isHorizontal
        ? (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-right')
        : (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-bottom')

      if (!shadowBefore) {
        // @ts-ignore
        shadowBefore = createElement(
          'div',
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            isHorizontal ? 'left' : 'top'
          }`.split(' ')
        )
        ;(slideEl as HTMLElement).append(shadowBefore as HTMLElement)
      }
      if (!shadowAfter) {
        // @ts-ignore
        shadowAfter = createElement(
          'div',
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            isHorizontal ? 'right' : 'bottom'
          }`.split(' ')
        )
        ;(slideEl as HTMLElement).append(shadowAfter as HTMLElement)
      }
      if (shadowBefore) {
        ;(shadowBefore as HTMLElement).style.opacity = String(
          Math.max(-progress, 0)
        )
      }
      if (shadowAfter) {
        ;(shadowAfter as HTMLElement).style.opacity = String(
          Math.max(progress, 0)
        )
      }
    } else {
      let shadowBefore = isHorizontal
        ? (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-left'
          )
        : (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-top'
          )
      let shadowAfter = isHorizontal
        ? (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-right'
          )
        : (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-bottom'
          )

      if (!shadowBefore) {
        shadowBefore = createShadow(
          'cube',
          slideEl,
          isHorizontal ? 'left' : 'top'
        )
      }
      if (!shadowAfter) {
        shadowAfter = createShadow(
          'cube',
          slideEl,
          isHorizontal ? 'right' : 'bottom'
        )
      }
      if (shadowBefore) {
        shadowBefore.style.opacity = String(Math.max(-progress, 0))
      }
      if (shadowAfter) {
        shadowAfter.style.opacity = String(Math.max(progress, 0))
      }
    }
  }

  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal()
    swiper.slides.forEach((slideEl) => {
      const progress = Math.max(
        Math.min((slideEl as SwiperItemInstance).progress, 1),
        -1
      )
      createSlideShadows(slideEl, progress, isHorizontal)
    })
  }

  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper

    if (!wrapperEl) return

    const r = getRotateFix(swiper)
    const params = swiper.params.cubeEffect as CubeEffectOptions
    const isHorizontal = swiper.isHorizontal()
    const isVirtual =
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual?.enabled
    let wrapperRotate = 0
    let cubeShadowEl: HTMLElement | null = null

    if (params.shadow) {
      if (isWeb()) {
        if (isHorizontal) {
          cubeShadowEl = wrapperEl.querySelector('.swiper-cube-shadow')
          if (!cubeShadowEl) {
            // @ts-ignore
            cubeShadowEl = createElement('div', 'swiper-cube-shadow')
            wrapperEl.append(cubeShadowEl as HTMLElement)
          }
          ;(cubeShadowEl as HTMLElement).style.height = `${swiperWidth}px`
        } else {
          cubeShadowEl = (el as HTMLElement).querySelector(
            '.swiper-cube-shadow'
          )
          if (!cubeShadowEl) {
            // @ts-ignore
            cubeShadowEl = createElement('div', 'swiper-cube-shadow')
            ;(el as HTMLElement).append(cubeShadowEl as HTMLElement)
          }
        }
      } else {
        ;(swiper.wrapperEl as any).swiperShadowRef.value.classList.add(
          'swiper-cube-shadow'
        )
        cubeShadowEl = (swiper.wrapperEl as any).swiperShadowRef.value
        if (isHorizontal) {
          ;(cubeShadowEl as HTMLElement).style.height = `${swiperWidth}px`
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i]
      let slideIndex = i
      if (isVirtual) {
        slideIndex = parseInt(
          slideEl.getAttribute('data-swiper-slide-index') || '0',
          10
        )
      }
      let slideAngle = slideIndex * 90
      let round = Math.floor(slideAngle / 360)
      if (rtl) {
        slideAngle = -slideAngle
        round = Math.floor(-slideAngle / 360)
      }
      const progress = Math.max(
        Math.min((slideEl as SwiperItemInstance).progress, 1),
        -1
      )
      let tx = 0
      let ty = 0
      let tz = 0
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize
        tz = 0
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0
        tz = -round * 4 * swiperSize
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize
        tz = swiperSize
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize
        tz = 3 * swiperSize + swiperSize * 4 * round
      }
      if (rtl) {
        tx = -tx
      }

      if (!isHorizontal) {
        ty = tx
        tx = 0
      }

      const transform = `rotateX(${r(
        isHorizontal ? 0 : -slideAngle
      )}deg) rotateY(${r(
        isHorizontal ? slideAngle : 0
      )}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90
      }
      slideEl.style.transform = transform

      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal)
      }
    }

    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`
    // @ts-ignore
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`

    if (params.shadow && cubeShadowEl) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${
          swiperWidth / 2 + (params.shadowOffset as number)
        }px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
          params.shadowScale
        })`
      } else {
        const shadowAngle =
          Math.abs(wrapperRotate) -
          Math.floor(Math.abs(wrapperRotate) / 90) * 90
        const multiplier =
          1.5 -
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
            Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        const scale1 = params.shadowScale as number
        const scale2 = (params.shadowScale as number) / multiplier
        const offset = params.shadowOffset as number
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${
          swiperHeight / 2 + offset
        }px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`
      }
    }

    const zFactor =
      (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix
        ? -swiperSize / 2
        : 0
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(
      swiper.isHorizontal() ? 0 : wrapperRotate
    )}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`)
  }

  const setTransition = (duration: number) => {
    const { el, slides } = swiper
    slides.forEach((slideEl) => {
      slideEl.style.transitionDuration = `${duration}ms`
      if (isWeb()) {
        ;(slideEl as HTMLElement)
          .querySelectorAll(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          // @ts-ignore
          .forEach((subEl: HTMLElement) => {
            subEl.style.transitionDuration = `${duration}ms`
          })
      } else {
        ;(slideEl as SwiperItemInstance)
          .getShadowList()
          .forEach((subEl: HTMLElement) => {
            subEl.style.transitionDuration = `${duration}ms`
          })
      }
    })

    if (swiper.params.cubeEffect?.shadow && !swiper.isHorizontal()) {
      if (isWeb()) {
        const shadowEl = (el as HTMLElement).querySelector(
          '.swiper-cube-shadow'
        )
        if (shadowEl) {
          ;(shadowEl as HTMLElement).style.transitionDuration = `${duration}ms`
        }
      } else {
        const shadowEl = (swiper.wrapperEl as any).swiperShadowRef.value
        if (shadowEl) {
          ;(shadowEl as HTMLElement).style.transitionDuration = `${duration}ms`
        }
      }
    }
  }

  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect as CubeEffectOptions,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  })
}
